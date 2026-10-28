---
title: "Contributing Code"
# old (pre-WordPress) addresses
redirect_from:
  - /contributions.html
---

This page is a guide to contributing code and documentation to COIN-OR and provides an overview of our procedures and requirements. Our goal is to make the submission process as painless as possible, but unfortunately, you must observe a few requirements and legalities. Please feel free to let us know if you have any questions by emailing the appropriate [mailing list](http://list.coin-or.org/mailman/listinfo/) or emailing <submissions@coin-or.org>.

**Disclaimer: Nothing on this page is to be construed as expert legal advice.** The instructions here are intended to supplement such advice, not replace it. We recommend that you consult an attorney before entering into any of the agreements discussed below.

The procedure you must follow depends on whether you are making a contribution to an existing project or submitting an entirely new project. Please click on the appropriate link below for more information.

  - [Contributions to existing projects](#contributions)
  - [Submission of a new project](#submissions)

-----

## Contributions to existing projects {#contributions}

In the case of a contribution to an existing project, only a few steps are necessary:

1.  Submit your contribution.
2.  If you have not done so previously, fill out the *[Contributor’s Statement of Respect for Ownership](/management/forms/csro.pdf)* .

Note: Contributions to an existing project must use a license already in use by the project. If you wish to make a contribution under a different license, then it will need to be done as a separate (but related) project. See the section on [submitting new projects](/contributions.html#submissions).

### Submitting your contribution

Contributions to an existing project can be submitted

  - through the project’s issue tracking system,
  - through a posting to the project’s mailing list, or
  - directly to the project manager by e-mail.

For a small contribution (a bug fix, for example), submitting your contribution through the project’s issue tracking system is the preferred method and minimizes the chance your contribution will be misplaced. See the [project’s web page](/projects/index.html) for specific details. Email to the project manager or the project’s mailing list may also work.

For a larger contribution, an email to the project manager is the best approach. In this case you’ve probably made some small contributions already and have had some preliminary contact with the project manager about making a larger contribution.

Contributions which provide an interface to third-party code (whether open- or closed-source) are often of use to the community. Consult the project manager to see whether such a contribution is of interest to the project.

The [Projects page](/projects/index.html) contains links to the web pages for all COIN-OR projects. Contact information for project managers and the project’s mailing list can be found on each project’s web page. The [Mailing List page](http://list.coin-or.org/mailman/listinfo/) lists all public COIN-OR mailing lists.

### Filling out a CSRO

After receiving your contribution, the project manager will first determine whether the code should be incorporated into the project. If so, the project manager will check whether you have previously filled out a [*Contributor’s Statement of Respect for Ownership*](/management/forms/csro.pdf) (CSRO).

If this is your first contribution to COIN-OR, then you will need to fill out a CSRO. This form indicates your understanding that you may not be the only copyright holder for your contribution and that it is your responsibility to identify all copyright holders and obtain their permission prior to making each contribution to COIN-OR.

There are two common ways to submit a CSRO:

  - Fill out the [plain text version of the CSRO](/management/forms/csro.txt) and “sign” it by typing your name at the bottom. Send the completed form by email to <secretary@coin-or.org>
  - Print a hardcopy of the [PDF version of the CSRO](/management/forms/csro.pdf), fill it out and sign it, and email a scan to <secretary@coin-or.org>

Fax or mail is also possible; if this is your preference, email the Secretary and ask for details.

You will only have to fill out one CSRO for COIN-OR, even if you later make contributions to several projects.

### Abiding by the code of conduct

In the interest of preserving a friendly and welcoming open source community, the COIN-OR Foundation has formally adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as the [code of conduct](/code-of-conduct/) for all repositories hosted within the [COIN-OR Github Organization](https://github.com/coin-or/). Please take a moment to read and understand the [code of conduct](/code-of-conduct/).

## Submitting a new project {#submissions}

When submitting a new project to COIN-OR, the contributor and the owners must follow established procedures to ensure the the project meets both legal and technical requirements for inclusion in the repository. We have tried to make these procedures relatively lightweight, but a certain level of bureaucracy cannot be avoided.

### Overview of basic requirements

The following list outlines the basic requirements for a new project. Additional detail is provided in the sections which follow.

  - [Legal:](/contributions.html#legal) Who owns the project? Which open-source license will be used? The contributor (you) must identify all owners of the project’s content and document their agreement to release the content under the chosen license.
  - [Technical:](/contributions.html#technical) Is the project of interest to the operations research community? Does it compile and run? Does it include test code to verify the success of an installation? Does the project include a minimal level of documentation?
  - [Maintenance:](/contributions.html#maintenance) Is there someone (possibly you) who will agree to serve as the project manager? Is this person aware of the commitment this entails?

### Legal requirements {#legal}

Perhaps the most important thing for you to determine before starting the contribution process is who owns the project’s code. This may not be you, as indicated in the [*Contributor’s Statement of Respect for Ownership*](/management/forms/csro.pdf) (CSRO).

All owners of the code must be willing to license it under an [OSI-certified](http://www.opensource.org/) open source license. Most projects in COIN-OR are licensed under the [Eclipse Public License](http://www.eclipse.org/legal/EPL-1.0) (EPL). If you have no strong opinions about licenses, COIN-OR recommends the EPL for new projects, but this is not required. If your project contains significant original content other than code, please bring this to the attention of the submission manager at the start of the process.

It is your responsibility as the contributor to identify all the owners of original content in your contribution and to document their agreement to release the contribution under the license you have chosen. This is done with the[Documentation of Ownership and Licensing Form](/management/forms/dol.pdf), which contains two sections: the *Contributor’s Statement of Ownership and Licensing (CSOL)*, a summary of ownership and licensing filled out by the contributor, and the *Owner’s Confirmation of Licensing (OCL)*, which is the first-person confirmation by each owner of the information in the CSOL. The CSOL is *mandatory*. Individual OCL’s are highly recommended but not required.

You can submit both the CSOL and OCL by sending an email to <secretary@coin-or.org> with this [text version of the forms](/management/forms/dol.txt) filled out and “signed” with your name at the bottom. Alternatively, you can print out and sign a hard-copy of these two forms and fax or mail it to the Secretary. Contact <secretary@coin-or.org> if you wish to do this.

If some of the code or other content in your contribution is not original — that is, it was taken from another product — then that code or other content must have been licensed to you under a license that is compatible with the license you have chosen for the project.

A project may depend on third-party software (open- or closed-source). Such dependencies must be listed in the project’s documentation. If the third-party software is available under an OSI-certified license, the contributor may make it available in the repository separate from the project itself.

The submissions manager will use the following checklist on legal issues:

  - Is the contribution being made under the Eclipse Public License (EPL)? If not the EPL, is the license certified by the Open Source Initiative? Is the contributor aware of the issues related to using their contribution with contributions licensed under the EPL?
  - Do all authors have a completed *Contributor’s Statement of Respect for Ownership* on file? See the [list of contributors](/management/contributors.html) to check each author. This form is available in [pdf](/management/forms/csro.pdf), [tex](/management/forms/csro.tex), and [plain-text](/management/forms/csro.txt) formats.
  - Have *Contributor’s Statement of Ownership and Licensing* and *Owner’s Confirmation of Licensing* forms been filed? The first of these forms lists the owners of the contribution; the second is filled out by all owners listed in the first. These forms are available in [pdf](/management/forms/dol.pdf), [tex](/management/forms/dol.tex), and [plain-text](/management/forms/dol.txt) formats.

COIN-OR’s policy and procedures for legal documentation are intended to balance two competing goals: minimise the work required of the contributor; and satisfy the needs of users (particularly commercial users) for complete documentation of ownership of the code. As a Project Manager, you can choose a level of documentation appropriate for your project. If you’re curious about the details, see the [Legal Policy and Legal Procedure documents](/coin-or-foundation/records.html#policies) on the [COIN-OR Foundation Records page](/coin-or-foundation/records.html).

### Technical requirements, including scope {#technical}

Your contribution must be within the scope of the repository. To determine this, you must answer two questions:

  - Is the code potentially useful to Operations Research professionals or students?
  - Is COIN-OR the best place for your code to be hosted?

The answer to both of these questions should be “yes”.

COIN-OR distinguishes between *production projects*, which have at least basic functionality, and *development projects*, which require further development before being useful. A production project is a project that, when compiled, produces running code. A development project just provides easily accessible space for collaborators working on a project. When a development project matures it can be turned into a production project. Most COIN-OR projects are production projects.

For production projects, the code must compile and run successfully and have some minimum level of documentation. The source code for the project should be contained in a single, well-organised root directory. The root directory must contain four files with standard file names containing the following information:

  - <span class="underline"><span class="kbd">AUTHORS</span></span>: Contains a list of the authors of the code. This should include the original authors and anyone who has made a contribution.
  - <span class="underline"><span class="kbd">INSTALL</span></span>: Contains instructions for compiling, installing, and running the code on at least one platform.
  - <span class="underline"><span class="kbd">README</span></span>: Contains the name of the project, a brief description of the project and what it is used for, as well as instructions for contacting the project maintainer, the address of the project’s web page, a link to the [code of conduct](/code-of-conduct/), instructions for obtaining support, requesting features, submitting bug reports, etc. The file may also contain other information, such as a brief revision history.
  - <span class="underline"><span class="kbd">COPYING</span></span> or <span class="underline"><span class="kbd">LICENSE</span></span>: Contains the license agreement for the code. The license must be certified by the [Open Source Initiative](http://www.opensource.org/) as an open-source license. The [Eclipse Public License](http://www.eclipse.org/legal/epl-v10.html) is recommended.

Dependence on third-party software must be documented in the <span class="kbd">INSTALL</span> and <span class="kbd">README</span> files.

The code must compile “out of the box” on at least one platform. There are no requirements for support of a specific architecture, language, or operating system, but most users are interested in code that runs under either Windows or Linux and most of the existing projects are written in C++. It must be possible to compile the code using the instructions in the <span class="kbd">INSTALL</span> file.

Each code contribution must include a set of tests. There must be documentation that describes what the tests do and a simple methodology (or framework) for adding tests in the future. The initial suite of tests can be anything that the contributor desires. The main requirement is that it can be run after the build and installation procedure and that it indicate success or failure of the installation. It could be a separate executable that runs a series of tests, a shell script, or even just a sample input file with instructions on how to run it and verify the result. The testing facility can be minimal at first, but should be easy to build upon as the code is developed. More advanced testing environments (e.g., CppUnit, DejaGNU, or a thorough custom test) are encouraged.

We strongly encourage a significant amount of documentation at different levels, e.g., user guides, developer manuals, and high-level summary information for the project’s web page. The only required documentation is that the project contain the <span class="kbd">AUTHORS</span>, <span class="kbd">INSTALL</span>, <span class="kbd">README</span>, and <span class="kbd">COPYING</span>/<span class="kbd">LICENSE</span> files, discussed earlier. Many existing projects generate source code documentation using the [doxygen](http://www.stack.nl/~dimitri/doxygen/) system, which is well-suited for C and C++ code.

The submissions manager will use the following checklists for evaluating your contribution:

  - Is the contribution of use for Operations Research professionals or students?
  - Is the project’s goal to build or otherwise support the development or use of O.R. software?
  - For software projects, is the project a development project or a production project?
  - For development projects, did the contributor submit a project description and road map?

The checklist below applies to production projects.

  - Does the code build and install without error when the installation procedures described in the <span class="kbd">INSTALL</span> file are followed?
  - Is some form of a <span class="kbd">unitTest</span> documented?
  - Does the <span class="kbd">unitTest</span> run and indicate success?
  - Is there a simple methodology for adding tests in the future?
  - Does the submission include the <span class="kbd">AUTHORS</span>, <span class="kbd">INSTALL</span>, <span class="kbd">README</span>, and <span class="kbd">COPYING</span> or <span class="kbd">LICENSE</span> files?

### Maintenance requirements {#maintenance}

Every project must have a project manager. This individual is the main contact for the project and the liaison with the COIN-OR administration. Once the contribution is accepted for inclusion in the COIN-OR repository, the project manager will be given write access to the repository in order to maintain the project’s code, documentation, and web page. The project manager will be expected to observe COIN-OR policy for maintaining the contribution in the repository, and to subscribe to the mail list for project managers. The project manager is usually, but does not have to be, one of the primary authors of the code. Making a contribution to the repository will qualify this individual for full membership in the COIN-OR Foundation. The project manager may delegate ongoing maintenance as long as the designated individual has the knowledge to manage the project’s contribution in the repository.

Project managers are required to read and follow the [Guidelines and Procedures for Project Management](/management/forms/contribproc.pdf), which describe project management duties in more detail.

The submissions manager will use the following checklist to evaluate your contribution for ongoing maintenance:

  - Has a project manager been named?
  - Has the project manager agreed to maintain the code on COIN-OR?
  - Is the project manager familiar with the process for accepting contributions and willing to follow them?
  - Has the project manager filled out the standard summary page about the project, briefly describing the project’s purpose, robustness, build process, environment, etc.?
  - Has the project manager agreed to moderate the project mailing list?
  - Do all web pages that the project manager has created have a last modified date?

### Submitting your project

Once your package is ready for submission, you can simply forward a .zip or .tar file to the submissions manager at <submissions@coin-or.org> and we’ll take it from there. We strive to review submissions within two weeks. Please feel free to inquire about the current status after that time.
