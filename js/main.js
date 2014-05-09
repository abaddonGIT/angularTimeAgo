var app = angular.module("app", ['timeago']);
app.controller("baseController", ['$timeAgo', '$scope', function ($timeAgo, $scope) {
    $scope.startTime = Date.now();
} ]);

