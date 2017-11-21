# holly-packages

Packages for Holly app.

## Installation

```
npm install holly-packages --save-dev
```

## Packages Notes

<!-- MarkdownTOC -->

- [AdminLTE](#adminlte)
- [Bootbox](#bootbox)
- [Bootstrap](#bootstrap)
- [DataTables](#datatables)
- [FastClick](#fastclick)
- [Highlight.js](#highlightjs)
- [WebViewJavascriptBridge](#webviewjavascriptbridge)

<!-- /MarkdownTOC -->

### AdminLTE

- ~~Removed Google Fonts.~~
- ~~Fixed `main-footer` flash when dynamic change the page content's height on DOM loading. e.g. shows a datatables via Ajax on DOM ready.~~
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

### Highlight.js

- [Usage](https://highlightjs.org/usage/)
- [Demo](https://highlightjs.org/static/demo/)
- [Language names and aliases](http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html#language-names-and-aliases)

**Upgrade steps:**

1. Open https://highlightjs.org/download/
2. Select all languages under **Common**
3. Select `AppleScript`, `SCSS`, `Swift`, `YAML` under **Other**
4. Click **download** button
5. Move decompressed `highlight` folder to the root of this project

**Recommended themes:**

- Atom One Dark
- Atom One Light
- Github
- Github Gist
- Ocean
- Tomorrow
- Tomorrow Night
- Solarized Dark

### WebViewJavascriptBridge

- Added alias `JSBridge` to `WebViewJavascriptBridge` object.
- Setup JSBridge when `AgentClient.isAppClient` is `true`.
- Added alias `on` to `JSBridge.registerHandler` method.
- Added `send` method to call the default handler named `"default"`.
- Added `api` method to send `{ action: "", data: ... }`.
- Invoke `JSBridgeReady(bridge)` function when JSBridge is ready.
