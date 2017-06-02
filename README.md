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
- [DataTables](#datatables)
- [FastClick](#fastclick)
- [iCheck](#icheck)
- [WebViewJavascriptBridge](#webviewjavascriptbridge)
- [Lightbox2](#lightbox2)

<!-- /MarkdownTOC -->

### AdminLTE

- Removed Google Fonts.
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

### iCheck

- Moved images from skin's directory to `img/icheck/[skin]`.
- Processed `@import` in `skins/all.css`.

### WebViewJavascriptBridge

- Added alias `JSBridge` to `WebViewJavascriptBridge` object.
- Setup JSBridge when `Client.isApiClient` is `true`.
- Added alias `on` to `JSBridge.registerHandler` method.
- Added `send` method to call the default handler named `"default"`.
- Added `api` method to send `{ action: "", data: ... }`.
- Invoke `JSBridgeReady(bridge)` function when JSBridge is ready.

### Lightbox2

- Moved images from `images` to `img/lightbox`.
