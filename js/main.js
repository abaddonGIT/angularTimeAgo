var app = angular.module("app", ['timeago']);
app.controller("baseController", ['$timeAgo', '$scope', function ($timeAgo, $scope) {
    var ta = $timeAgo.config({
        mi: 'oloolool'
    });

    $scope.startTime = Date.now();
} ]);

