var app = angular.module("app", ['timeago']);
app.controller("baseController", ['$timeAgo', '$scope', '$curTime', function ($timeAgo, $scope, $curTime) {
    $scope.startTime = Date.now();

    $curTime.addWatcher(5, $scope, function () {
        console.log("Прошло 5 секунд!");
    });
    $curTime.addWatcher(7, $scope, function () {
        console.log("Прошло 7 секунд!");
    });
    $curTime.addWatcher(10, $scope, function () {
        console.log("Прошло 10 секунд!");
    });
} ]);

