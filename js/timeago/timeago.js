/**
 * Created by netBeans.
 * User: Abaddon
 * Date: 15.04.14
 * Time: 23:10
 * Description: Shows how long the post was published
 */
var timeago = angular.module("timeago", []);

timeago.directive("timeAgo", [function () {
    return {
        link: function (scope, elem, attr) {
            var startTime = attr.timeAgo;
            
        }
    };
} ]);