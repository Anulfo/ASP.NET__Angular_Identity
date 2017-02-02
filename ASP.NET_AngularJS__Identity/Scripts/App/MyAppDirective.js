var App;
(function (App) {
    "use strict";
    MyAppDirective.$inject = ["$window"];
    function MyAppDirective($window) {
        return {
            restrict: "EA",
            link: link,
            template: "<h1>Hello, world</h1>"
        };
        function link(scope, element, attrs) {
        }
    }
    angular.module("app").directive("myApp", MyAppDirective);
})(App || (App = {}));
//# sourceMappingURL=MyAppDirective.js.map