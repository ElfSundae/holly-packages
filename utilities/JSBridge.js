/**
 * Setup JSBridge.
 *
 * @see https://github.com/marcuswestin/WebViewJavascriptBridge
 * @see https://github.com/ElfSundae/AppComponents
 */
;
(function() {
  "use strict";

  if (typeof AppClient === "undefined" || !AppClient.isApiClient) {
    return;
  }

  function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
      return callback(WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  }

  setupWebViewJavascriptBridge(function(bridge) {
    bridge.on = bridge.registerHandler;
    bridge.send = function(data, responseCallback) {
      bridge.callHandler('default', data, responseCallback);
    };
    bridge.api = function(action, data, responseCallback) {
      bridge.send({
        action: action,
        data: data
      }, responseCallback);
    };
    window.JSBridge = bridge;

    // 可以在 JSBridgeReady 函数中初始化 JSBridge，例如设置事件监听
    if (typeof JSBridgeReady === "function") {
      JSBridgeReady(bridge);
    }
  });
})();
