var app;
(function (app) {
    'use strict';
    var MainController = (function () {
        function MainController() {
            this.greet = 'Electron + Angularjs says hello!';
        }
        return MainController;
    }());
    app.MainController = MainController;
})(app || (app = {}));
