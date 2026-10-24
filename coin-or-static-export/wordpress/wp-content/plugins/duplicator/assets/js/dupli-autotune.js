(function ($) {
    'use strict';

    class AutoTune {
        constructor(root, config) {
            this.root = root;
            this.config = config;
            this.pollTimer = null;
            this.currentState = '';
            this.currentAction = 'start';
            this.canStart = root.dataset.canStart === '1';

            this.elements = {
                serverCard: root.querySelector('#dupli-autotune-server-card'),
                sessionCard: root.querySelector('#dupli-autotune-session-card'),
                sessionPill: root.querySelector('#dupli-autotune-session-pill'),
                attempts: root.querySelector('#dupli-autotune-attempts'),
                resultsCard: root.querySelector('#dupli-autotune-results-card'),
                resultsDescription: root.querySelector('#dupli-autotune-results-description'),
                resultsPill: root.querySelector('#dupli-autotune-results-pill'),
                resultsTable: root.querySelector('#dupli-autotune-results-table'),
                failureReport: root.querySelector('#dupli-autotune-failure-report'),
                resultIcon: root.querySelector('#dupli-autotune-result-icon'),
                resultTitle: root.querySelector('#dupli-autotune-result-title'),
                resultErrorDetails: root.querySelector('#dupli-autotune-result-error-details'),
                resultFailureGuidance: root.querySelectorAll('[data-autotune-failure-guidance]'),
                resultMessage: root.querySelector('#dupli-autotune-result-message'),
                resultFixDescription: root.querySelector('#dupli-autotune-result-fix-description'),
                resultTroubleshootingSection: root.querySelector('#dupli-autotune-result-troubleshooting-section'),
                resultTroubleshooting: root.querySelector('#dupli-autotune-result-troubleshooting'),
                resultCodeSection: root.querySelector('#dupli-autotune-result-code-section'),
                resultCode: root.querySelector('#dupli-autotune-result-code'),
                resultCodeCopy: root.querySelector('#dupli-autotune-result-code-copy'),
                resultDocSection: root.querySelector('#dupli-autotune-result-doc-section'),
                resultDocLink: root.querySelector('#dupli-autotune-result-doc-link'),
                statusDot: root.querySelector('#dupli-autotune-status-dot'),
                statusLabel: root.querySelector('#dupli-autotune-status-label'),
                attemptCount: root.querySelector('#dupli-autotune-attempt-count'),
                attemptSummary: root.querySelector('#dupli-autotune-attempt-summary'),
                duration: root.querySelector('#dupli-autotune-duration'),
                maxDuration: root.querySelector('#dupli-autotune-max-duration'),
                action: root.querySelector('#dupli-autotune-action'),
                actionLabel: root.querySelector('#dupli-autotune-action span'),
                sideNote: root.querySelector('#dupli-autotune-side-note'),
                startDialog: root.querySelector('#dupli-autotune-start-dialog'),
                confirmStart: root.querySelector('#dupli-autotune-confirm-start'),
                checkDialog: root.querySelector('#dupli-autotune-check-dialog'),
                attemptTemplate: root.querySelector('#dupli-autotune-attempt-template'),
                deltaTemplate: root.querySelector('#dupli-autotune-delta-template'),
                settingRowTemplate: root.querySelector('#dupli-autotune-setting-row-template'),
                resultRowTemplate: root.querySelector('#dupli-autotune-result-row-template')
            };
        }

        init() {
            this.elements.action.addEventListener('click', () => this.handleAction());
            this.elements.confirmStart.addEventListener('click', () => this.start());
            this.root.querySelectorAll('.dupli-autotune-chip').forEach((chip) => {
                chip.addEventListener('click', () => this.showCheckDetails(chip));
            });

            this.render(this.config.initialSession);
            this.status();
        }

        showCheckDetails(chip) {
            const dialog = this.elements.checkDialog;
            if (!dialog || typeof dialog.showModal !== 'function') {
                return;
            }

            dialog.querySelector('.dupli-autotune-check-dialog-title').textContent = chip.dataset.title;
            dialog.querySelector('.dupli-autotune-check-dialog-description').textContent = chip.dataset.description;

            const statusList = chip.dataset.statusList ? JSON.parse(chip.dataset.statusList) : [];
            const status = dialog.querySelector('.dupli-autotune-check-dialog-status');
            status.replaceChildren(...statusList.map((row) => {
                const item = document.createElement('li');
                const icon = document.createElement('i');
                icon.className = row.available
                    ? 'fa-solid fa-circle-check is-ready'
                    : 'fa-solid fa-triangle-exclamation is-suggestion';
                icon.setAttribute('aria-hidden', 'true');
                const label = document.createElement('b');
                label.textContent = row.label;
                const state = document.createElement('span');
                state.textContent = row.stateLabel;
                item.append(icon, label, state);
                return item;
            }));
            status.hidden = statusList.length === 0;

            const troubleshoot = chip.dataset.troubleshoot ? JSON.parse(chip.dataset.troubleshoot) : [];
            const troubleshootBox = dialog.querySelector('.dupli-autotune-check-dialog-troubleshoot');
            troubleshootBox.querySelector('ul').replaceChildren(...troubleshoot.map((text) => {
                const item = document.createElement('li');
                item.textContent = text;
                return item;
            }));
            troubleshootBox.hidden = troubleshoot.length === 0;

            const action = dialog.querySelector('.dupli-autotune-check-dialog-action');
            const link = dialog.querySelector('.dupli-autotune-check-dialog-link');
            if (chip.dataset.actionUrl) {
                link.href = chip.dataset.actionUrl;
                link.textContent = chip.dataset.actionLabel;
                if (chip.dataset.external === '1') {
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                } else {
                    link.removeAttribute('target');
                    link.removeAttribute('rel');
                }
                action.hidden = false;
            } else {
                action.hidden = true;
            }

            dialog.showModal();
        }

        handleAction() {
            if (this.currentAction === 'abort') {
                if (window.confirm(this.config.i18n.abortConfirmation)) {
                    this.abort();
                }
                return;
            }

            if (typeof this.elements.startDialog.showModal === 'function') {
                this.elements.startDialog.showModal();
                return;
            }

            if (window.confirm(this.config.i18n.startConfirmation)) {
                this.start();
            }
        }

        status() {
            if (this.currentState === 'running') {
                window.clearTimeout(this.pollTimer);
                this.pollTimer = window.setTimeout(() => this.status(), this.config.pollInterval * 6);
            }

            this.request(
                this.config.actions.status,
                this.config.nonces.status,
                {},
                (session) => this.render(session),
                false
            );
        }

        start() {
            const excludedValues = {};
            this.root.querySelectorAll('.dupli-autotune-option:not(:checked):not(:disabled)').forEach((input) => {
                const key = input.dataset.optionKey;
                if (!excludedValues[key]) {
                    excludedValues[key] = [];
                }
                excludedValues[key].push(JSON.parse(input.dataset.optionValue));
            });

            if (typeof this.elements.startDialog.close === 'function') {
                this.elements.startDialog.close();
            }
            this.request(
                this.config.actions.start,
                this.config.nonces.start,
                {excludedValues: JSON.stringify(excludedValues)},
                (session) => {
                    this.render(session);
                    this.ensureClientKickoff(session);
                },
                true
            );
        }

        ensureClientKickoff(session) {
            // In client-side kickoff mode the build is driven by dupli-kick.js, which is only
            // enqueued on pages loaded while a Backup is active: reload to get it.
            if (this.config.clientKickoff && session.isRunning && typeof DupliJs.kickme !== 'function') {
                window.location.reload();
            }
        }

        abort() {
            this.request(
                this.config.actions.abort,
                this.config.nonces.abort,
                {},
                (session) => {
                    this.render(session);
                    return this.config.i18n.aborted;
                },
                true
            );
        }

        request(action, nonce, data, callback, showProgress) {
            DupliJs.Util.ajaxWrapper(
                Object.assign({action, nonce}, data),
                (result, responseData, functionData) => callback(functionData.session),
                (result) => {
                    if (action !== this.config.actions.status) {
                        window.setTimeout(() => this.status(), 0);
                    }
                    return result.data && result.data.message ? result.data.message : null;
                },
                {showProgress, silentSuccess: true}
            );
        }

        render(session) {
            const stateChanged = session.state !== this.currentState;
            this.currentAction = session.action.type;
            this.root.dataset.state = session.state;

            this.root.querySelectorAll('[data-session-states]').forEach((element) => {
                const states = element.dataset.sessionStates.split(' ');
                element.hidden = !states.includes(session.state);
            });

            this.renderSidebar(session);
            this.renderAttempts(session.attempts);
            this.renderResults(session);
            this.setStatusPill(this.elements.sessionPill, session.statusLabel, session.statusSeverity);

            if (stateChanged) {
                this.elements.serverCard.open = session.state === 'none';
                this.elements.sessionCard.open = session.state === 'running';
                this.elements.resultsCard.open = ['completed', 'failed', 'aborted'].includes(session.state);
                this.currentState = session.state;
            }

            window.clearTimeout(this.pollTimer);
            this.pollTimer = null;
            if (session.isRunning) {
                this.pollTimer = window.setTimeout(() => this.status(), this.config.pollInterval);
            }
        }

        renderSidebar(session) {
            this.elements.statusLabel.textContent = session.statusLabel;
            this.elements.statusDot.className = `dupli-autotune-status-dot is-${session.statusSeverity}`;
            this.elements.attemptCount.textContent = session.attemptsCount > 0 ? String(session.attemptsCount) : '—';
            this.elements.attemptSummary.textContent = session.attemptSummary;
            this.elements.duration.textContent = session.durationLabel;
            this.elements.maxDuration.textContent = session.maxDurationLabel;
            this.elements.actionLabel.textContent = session.action.label;
            this.elements.sideNote.textContent = session.sidebarNote;

            const icon = this.elements.action.querySelector('i');
            const aborting = session.action.type === 'abort';
            icon.className = aborting ? 'fa-solid fa-stop' : 'fa-solid fa-wand-magic-sparkles';
            this.elements.action.className = aborting
                ? 'button hollow secondary expanded margin-bottom-0'
                : 'button primary expanded margin-bottom-0';
            this.elements.action.disabled = !aborting && !this.canStart;
        }

        renderAttempts(attempts) {
            const openConfigurations = new Set(
                Array.from(this.elements.attempts.querySelectorAll('.dupli-autotune-config[open]'))
                    .map((element) => element.dataset.packageId)
            );
            const fragment = document.createDocumentFragment();

            this.destroyAttemptTooltips();

            attempts.forEach((attempt) => {
                const node = this.elements.attemptTemplate.content.firstElementChild.cloneNode(true);
                const marker = node.querySelector('.dupli-autotune-marker');
                const markerIcon = marker.querySelector('i');
                const badge = node.querySelector('.dupli-autotune-badge');
                const progress = node.querySelector('.dupli-autotune-progress');
                const config = node.querySelector('.dupli-autotune-config');
                const configSummary = node.querySelector('.dupli-autotune-config-summary');
                const settingsBody = node.querySelector('.dupli-autotune-table tbody');
                const context = node.querySelector('.dupli-autotune-context-text');
                const packageLink = node.querySelector('.dupli-autotune-package-link');

                marker.classList.add(`is-${attempt.outcome}`);
                badge.classList.add(`is-${attempt.outcome}`);
                markerIcon.classList.add(this.getOutcomeIcon(attempt.outcome));
                if (attempt.outcome === 'running') {
                    markerIcon.classList.add('fa-spin');
                }
                node.querySelector('.dupli-autotune-attempt-title').textContent = this.config.i18n.attemptTitle
                    .replace('%1$d', attempt.number)
                    .replace('%2$s', attempt.label);
                badge.querySelector('b').textContent = attempt.outcomeLabel;
                badge.querySelector('span').textContent = attempt.outcomeText ? `: ${attempt.outcomeText}` : '';
                node.querySelector('.dupli-autotune-attempt-time').textContent =
                    `${attempt.startedLabel} · ${attempt.durationLabel}`;

                if (attempt.progress) {
                    progress.hidden = false;
                    progress.value = attempt.progress.percent;
                }

                if (attempt.changes.length === 0) {
                    const hint = document.createElement('span');
                    hint.className = 'dupli-autotune-config-hint';
                    hint.textContent = attempt.configurationHint;
                    configSummary.appendChild(hint);
                } else {
                    attempt.changes.forEach((change) => {
                        const delta = this.elements.deltaTemplate.content.firstElementChild.cloneNode(true);
                        delta.querySelector('span').textContent = `${change.label}:`;
                        delta.querySelector('b').textContent = `${change.previousValue} → ${change.value}`;
                        configSummary.appendChild(delta);
                    });
                }

                attempt.settings.forEach((setting) => {
                    settingsBody.appendChild(this.createSettingRow(setting));
                });

                context.textContent = attempt.contextLabel;
                packageLink.href = attempt.packageUrl;
                packageLink.textContent = this.config.i18n.testBackup.replace('%d', attempt.packageId);
                config.dataset.packageId = String(attempt.packageId);
                config.open = openConfigurations.has(String(attempt.packageId));
                fragment.appendChild(node);
            });

            this.elements.attempts.replaceChildren(fragment);
            if (
                window.DuplicatorTooltip &&
                typeof window.DuplicatorTooltip.loadSelector === 'function'
            ) {
                window.DuplicatorTooltip.loadSelector(
                    '#dupli-autotune-attempts [title], #dupli-autotune-attempts [data-tooltip]'
                );
            }
        }

        destroyAttemptTooltips() {
            this.elements.attempts.querySelectorAll('[data-tooltip], [title]').forEach((element) => {
                if (element._tippy) {
                    element._tippy.destroy();
                    element._tippy = null;
                }
            });
        }

        createSettingRow(setting) {
            const row = this.elements.settingRowTemplate.content.firstElementChild.cloneNode(true);
            row.children[0].textContent = setting.label;
            row.querySelector('.dupli-autotune-setting-value').textContent = setting.value;
            if (setting.changed) {
                row.classList.add('is-changed');
                row.querySelector('.dupli-autotune-was').textContent = this.config.i18n.was.replace('%s', setting.previousValue);
            }
            return row;
        }

        renderResults(session) {
            if (!['completed', 'failed', 'aborted'].includes(session.state)) {
                return;
            }

            const resultView = session.resultView;
            const isCompleted = resultView.kind === 'completed';
            const severity = isCompleted ? 'ready' : (resultView.kind === 'failed' ? 'error' : 'suggestion');

            this.elements.resultsDescription.textContent = resultView.description;
            this.setStatusPill(
                this.elements.resultsPill,
                resultView.pillLabel,
                severity,
                isCompleted ? String(session.changedSettingsCount) : ''
            );
            this.elements.resultsTable.hidden = !isCompleted;
            this.elements.failureReport.hidden = isCompleted;

            if (isCompleted) {
                const body = this.elements.resultsTable.querySelector('tbody');
                const fragment = document.createDocumentFragment();
                session.results.forEach((result) => {
                    const row = this.elements.resultRowTemplate.content.firstElementChild.cloneNode(true);
                    row.children[0].textContent = result.label;
                    row.children[1].textContent = result.before;
                    if (result.changed) {
                        row.children[2].classList.add('dupli-autotune-new-value');
                        row.children[2].textContent = result.after;
                    } else {
                        const unchanged = document.createElement('span');
                        unchanged.className = 'dupli-autotune-unchanged';
                        unchanged.textContent = this.config.i18n.unchanged;
                        row.children[2].appendChild(unchanged);
                    }
                    fragment.appendChild(row);
                });
                body.replaceChildren(fragment);
                return;
            }

            const aborted = resultView.kind === 'aborted';
            const userAborted = session.state === 'aborted';
            this.elements.resultErrorDetails.hidden = userAborted;
            this.elements.resultFailureGuidance.forEach((element) => {
                element.hidden = userAborted;
            });
            this.elements.resultIcon.className = `dupli-autotune-check-icon is-${aborted ? 'suggestion' : 'error'}`;
            this.elements.resultIcon.querySelector('i').className = aborted
                ? 'fa-solid fa-circle-stop'
                : 'fa-solid fa-circle-xmark';
            this.elements.resultTitle.textContent = aborted
                ? this.config.i18n.sessionAbortedTitle
                : this.config.i18n.noConfigurationTitle;
            this.elements.resultMessage.innerHTML = resultView.message;
            this.elements.resultFixDescription.innerHTML = resultView.messageDescription;
            this.elements.resultFixDescription.hidden = resultView.messageDescription === '';

            const troubleshooting = resultView.troubleshooting || [];
            this.elements.resultTroubleshooting.replaceChildren(...troubleshooting.map((text) => {
                const item = document.createElement('li');
                item.innerHTML = text;
                return item;
            }));
            this.elements.resultTroubleshootingSection.hidden = troubleshooting.length === 0;

            const codeSnippet = resultView.codeSnippet || '';
            this.elements.resultCode.textContent = codeSnippet;
            this.elements.resultCodeCopy.setAttribute('data-dup-copy-value', codeSnippet);
            $(this.elements.resultCodeCopy).data('dup-copy-value', codeSnippet);
            this.elements.resultCodeSection.hidden = codeSnippet === '';
            if (codeSnippet !== '' && typeof DuplicatorTooltip === 'object') {
                DuplicatorTooltip.loadCopySelector('#dupli-autotune-result-code-copy');
            }

            const hasDocLink = resultView.docUrl !== '' && resultView.docLabel !== '';
            this.elements.resultDocSection.hidden = !hasDocLink;
            this.elements.resultDocLink.href = hasDocLink ? resultView.docUrl : '#';
            this.elements.resultDocLink.textContent = hasDocLink ? resultView.docLabel : '';
        }

        setStatusPill(element, label, severity, displayText = '') {
            const icons = {
                ready: 'fa-circle-check',
                suggestion: 'fa-triangle-exclamation',
                error: 'fa-circle-xmark',
                running: 'fa-spinner fa-spin',
                neutral: 'fa-circle'
            };
            const icon = document.createElement('i');
            icon.className = `fa-solid ${icons[severity] || icons.neutral}`;
            icon.setAttribute('aria-hidden', 'true');
            element.className = `dupli-autotune-pill is-${severity}`;
            if (displayText === '') {
                element.replaceChildren(icon);
            } else {
                element.replaceChildren(icon, document.createTextNode(` ${displayText}`));
            }
            this.setPillTooltip(element, label);
        }

        setPillTooltip(element, label) {
            element.dataset.tooltip = label;
            if (element._tippy) {
                element._tippy.setContent(`<div class="dup-tippy-content">${label}</div>`);
                return;
            }
            if (
                window.DuplicatorTooltip &&
                typeof window.DuplicatorTooltip.loadSelector === 'function'
            ) {
                window.DuplicatorTooltip.loadSelector(`#${element.id}`);
            }
        }

        getOutcomeIcon(outcome) {
            if (outcome === 'success') {
                return 'fa-check';
            }
            if (outcome === 'failed') {
                return 'fa-xmark';
            }
            return 'fa-spinner';
        }
    }

    DupliJs.Tools.AutoTune = AutoTune;

    $(function () {
        const root = document.getElementById('dupli-autotune');
        if (root && window.dupli_auto_tune_data) {
            new DupliJs.Tools.AutoTune(root, window.dupli_auto_tune_data).init();
        }
    });
})(jQuery);
