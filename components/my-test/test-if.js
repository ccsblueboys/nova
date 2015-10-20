'use strict';

(function () {
  (function (root, factory) {
    if (typeof exports === 'object') {
      module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
      define([], factory);
    } else {
      var globalAlias = 'MyTest';
      var namespace = globalAlias.split('.');
      var parent = root;
      for (var i = 0; i < namespace.length - 1; i++) {
        if (parent[namespace[i]] === undefined) parent[namespace[i]] = {};
        parent = parent[namespace[i]];
      }
      parent[namespace[namespace.length - 1]] = factory();
    }
  })(this, function () {
    function _requireDep(name) {
      return ({})[name];
    }

    var _bundleExports = NovaExports.__fixedUglify = 'script>';NovaExports.exports = { 'stylesheet': '', 'template': '\n        <p>Welcome</p>\n        <p>-------start--------</p>\n        <template-if if="{{gender == &apos;female&apos;}}">\n            I&apos;m a girl, {{gender}}\n        </template-if>\n        <p>---------------</p>\n        <template-if if="{{gender == &apos;male&apos;}}">\n            I&apos;m a boy, {{gender}}\n        </template-if>\n        <p>-------end--------</p>\n    ' };
    NovaExports({
      is: 'test-if',
      props: {
        gender: {
          type: String,
          value: 'female'
        }
      },
      createdHandler: function createdHandler() {}
    });

    return _bundleExports;
  });
}).call(window);