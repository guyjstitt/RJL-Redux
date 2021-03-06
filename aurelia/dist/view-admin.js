'use strict';

System.register(['aurelia-framework', 'aurelia-http-client'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, _dec, _class, Admin;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }],
        execute: function () {
            _export('Admin', Admin = (_dec = inject(HttpClient), _dec(_class = function () {
                function Admin(http) {
                    _classCallCheck(this, Admin);

                    this.http = http.configure(function (x) {
                        x.withHeader('X-CSRF-TOKEN', getCookie("XSRF-TOKEN"));
                    });

                    function getCookie(name) {
                        var re = new RegExp(name + "=([^;]+)");
                        var value = re.exec(document.cookie);
                        return value != null ? unescape(value[1]) : null;
                    }
                }

                Admin.prototype.configureRouter = function configureRouter(config, router) {
                    config.map([{ route: [""], name: "admin-index", moduleId: 'view-admin', nav: true, title: 'Admin View' }, { route: ["/assign"], name: "facilitator-assign", moduleId: 'facilitator-assign', nav: true, title: 'Facilitator Assignments' }]);

                    this.router = router;
                };

                return Admin;
            }()) || _class));

            _export('Admin', Admin);
        }
    };
});
//# sourceMappingURL=view-admin.js.map
