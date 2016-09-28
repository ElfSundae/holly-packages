# holly-packages

Packages for Holly app.

## Installation

```
npm install --save-dev holly-packages
```

## Changes

> All changes to third-party packages are documented below:

<!-- MarkdownTOC -->

- [AdminLTE](#adminlte)
- [Bootbox](#bootbox)
- [Bootstrap](#bootstrap)
- [DataTables.net](#datatablesnet)
- [FastClick](#fastclick)
- [WebViewJavascriptBridge](#webviewjavascriptbridge)
- [Lightbox2](#lightbox2)

<!-- /MarkdownTOC -->

### AdminLTE

- Removed Google Fonts.
- Fixed `main-footer` flash when dynamic change the page content's height on DOM loading. e.g. shows a datatables via Ajax on DOM ready.

### Bootbox

- Fixed position of dialog to the center of screen.
- Automatically detect browser language.

### Bootstrap

- Removed Glyphicons.

### DataTables.net

- Replaced Glyphicons to Font-Awesome.
- Applied default options: 
  ```
  "responsive": true,
  "processing": true,
  "serverSide": true,
  "pagingType": "full_numbers",
  "language": {
    ...
  }
  ```

### FastClick

- Attached for `document.body` automatically on `DOMContentLoaded`.

### WebViewJavascriptBridge

- Added alias `JSBridge` to `WebViewJavascriptBridge` object.
- Setup JSBridge when `AppClient.isApiClient` is `true`.
- Added alias `on` to `JSBridge.registerHandler` method.
- Added `send` method to call the default handler named `"default"`.
- Added `api` method to send `{ action: "", data: ... }`.
- Invoke `JSBridgeReady(bridge)` function when JSBridge is ready.

### Lightbox2

- Replaced images location from `images` to `img/lightbox`.

