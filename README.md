# holly-packages

Packages for Holly app.

## Installation

```
npm install --save-dev holly-packages
```

## Changes

All changes to third-party packages are documented below:

<!-- MarkdownTOC -->

- [AdminLTE](#adminlte)
- [Bootbox](#bootbox)
- [Bootstrap](#bootstrap)
- [DataTables](#datatables)
- [FastClick](#fastclick)
- [WebViewJavascriptBridge](#webviewjavascriptbridge)

<!-- /MarkdownTOC -->

### AdminLTE

- ~~Removed Google Fonts.~~
- Fixed `main-footer` flash when dynamic change the page content's height on DOM loading. e.g. shows a datatables via Ajax on DOM ready.
- Added `$.fn.boxspin` function to spin any `.box` elements.

### Bootbox

- Fixed position of dialog to the center of screen.
- Automatically detect browser language.

### Bootstrap

- Removed Glyphicons.

### DataTables

- Replaced Glyphicons to Font-Awesome.
- Applied default options.

### FastClick

- Attached for `document.body` automatically on `DOMContentLoaded`.

### WebViewJavascriptBridge

- Added alias `JSBridge` to `WebViewJavascriptBridge` object.
- Setup JSBridge when `AgentClient.isAppClient` is `true`.
- Added alias `on` to `JSBridge.registerHandler` method.
- Added `send` method to call the default handler named `"default"`.
- Added `api` method to send `{ action: "", data: ... }`.
- Invoke `JSBridgeReady(bridge)` function when JSBridge is ready.
