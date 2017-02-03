﻿module App {
    "use strict";

    interface IMyAppDirective extends ng.IDirective {
    }

    interface IMyAppDirectiveScope extends ng.IScope {
    }

    interface IMyAppDirectiveAttributtes extends ng.IAttributes {
    }

    MyAppDirective.$inject = ["$window"];

    function MyAppDirective($window: ng.IWindowService) : IMyAppDirective {
        return {
            restrict: "EA",
            link: link,
            templateUrl: "/Scripts/App/my-app.html",
            controller: MyAppController,
            controllerAs: "vm"
        }

        function link(scope: IMyAppDirectiveScope, element: ng.IAugmentedJQuery, attrs: IMyAppDirectiveAttributtes) {
        }
    }
    angular.module("app").directive("myApp", MyAppDirective);
}