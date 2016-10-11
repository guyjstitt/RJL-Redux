System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "*": "aurelia/*",
    "github:*": "aurelia/jspm_packages/github/*",
    "npm:*": "aurelia/jspm_packages/npm/*"
  },
  bundles: {
    "src/dist/app-build.js": [],
    "src/dist/vendor-build.js": [
      "github:components/jquery@2.2.0.js",
      "github:components/jquery@2.2.0/jquery.js",
      "github:github/fetch@0.10.1.js",
      "github:github/fetch@0.10.1/fetch.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:twbs/bootstrap@3.3.6.js",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-text@0.0.3.js",
      "github:twbs/bootstrap@3.3.6/js/bootstrap.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.0.3.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.0.3/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.0-beta.1.0.5.js",
      "npm:aurelia-binding@1.0.0-beta.1.0.5/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.0.2.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.0.2/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.0.2.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.0.2/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-beta.1.0.8.js",
      "npm:aurelia-framework@1.0.0-beta.1.0.8/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.0.1.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.0.1/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.js",
      "npm:aurelia-history@1.0.0-beta.1/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.2.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.2/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.0.1.js",
      "npm:aurelia-loader@1.0.0-beta.1.0.1/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.js",
      "npm:aurelia-logging-console@1.0.0-beta.1/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.js",
      "npm:aurelia-logging@1.0.0-beta.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.js",
      "npm:aurelia-metadata@1.0.0-beta.1/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.0.3.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.0.3/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.0.2.js",
      "npm:aurelia-pal@1.0.0-beta.1.0.2/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.js",
      "npm:aurelia-path@1.0.0-beta.1/aurelia-path.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.0.1.js",
      "npm:aurelia-router@1.0.0-beta.1.0.1/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.0.1.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.0.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.0.2.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.0.2/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.5.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.5/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.5/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.5/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.5/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.0.3.js",
      "npm:aurelia-templating@1.0.0-beta.1.0.3/aurelia-templating.js",
      "npm:core-js@1.2.6.js",
      "npm:core-js@1.2.6/client/shim.min.js",
      "npm:process@0.11.2.js",
      "npm:process@0.11.2/browser.js"
    ]
  },

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.0.3",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.0.2",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.0.2",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.8",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-beta.1.0.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.0.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.2",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.4",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.5",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "core-js": "npm:core-js@1.2.6",
    "datatables": "npm:datatables@1.10.9",
    "fetch": "github:github/fetch@0.10.1",
    "font-awesome": "npm:font-awesome@4.5.0",
    "jquery": "npm:jquery@2.2.1",
    "jquery-ui": "github:components/jqueryui@1.11.4",
    "jquery-validation": "github:jzaefferer/jquery-validation@1.15.0",
    "moment": "npm:moment@2.15.1",
    "select2": "github:select2/select2@4.0.1",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:components/jqueryui@1.11.4": {
      "jquery": "npm:jquery@2.2.1"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jzaefferer/jquery-validation@1.15.0": {
      "jquery": "npm:jquery@2.2.1"
    },
    "github:select2/select2@4.0.1": {
      "jquery": "npm:jquery@2.2.1"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.0.3": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3"
    },
    "npm:aurelia-binding@1.0.0-beta.1.0.5": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.0.2": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.8",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.0.3",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.4",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.5",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1"
    },
    "npm:aurelia-fetch-client@1.0.0-beta.1.0.2": {
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-framework@1.0.0-beta.1.0.8": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.0.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-http-client@1.0.0-beta.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.0.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2"
    },
    "npm:aurelia-loader@1.0.0-beta.1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2"
    },
    "npm:aurelia-metadata@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-router@1.0.0-beta.1.0.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.0.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.0.5": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3"
    },
    "npm:aurelia-templating@1.0.0-beta.1.0.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:datatables@1.10.9": {
      "css": "github:systemjs/plugin-css@0.1.20",
      "jquery": "github:components/jquery@2.2.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
