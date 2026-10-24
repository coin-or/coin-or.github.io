/**
 * Main script for Duplicator Plugin
 */

// Import and initialize global namespace (must be first)
import './dupli-namespace.js';

// jQuery resolves to the WordPress-provided instance (webpack external);
// expose the `$` alias that inline template scripts rely on
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

// Import Tippy and make it available under DupliJs.Libs
import tippy from 'tippy.js';
DupliJs.Libs.tippy = tippy;

// Import Handlebars dist (browser-compatible) and make it available under DupliJs.Libs
import Handlebars from 'handlebars/dist/handlebars';
DupliJs.Libs.Handlebars = Handlebars;

/**
 * Scripts
 */
import "parsleyjs";
import "@popperjs/core";
import "select2";
import "js-cookie";
import "jstree";
import "formstone";
import "formstone/dist/js/upload.js";
import "./duplicator-tooltip.js";
import "./dynamic-help.js";

/**
 * Styles
 */
import "select2/dist/css/select2.css";
import "jstree/dist/themes/default/style.css"
