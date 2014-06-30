angularTimeAgo
==============

Реализует обратный отсчет от метки времени на angularjs.

<h2>Как использовать?</h2>
<ol>
    <li>
        Подключение:
        <pre>var app = angular.module("app", ['timeago']);</pre>
    </li>
    <li>Использование:
        <p>Директива</p>
        <pre>&lt;span data-time-ago start-time="1398416014549"&gt;&lt;/span&gt;</pre>
        <p>Фильтр</p>
        <pre>{{1398428800501 | timeago}}</pre>
    </li>
    <li>Наблюдатели:
        <pre>
$curTime.addWatcher(5, $scope, function () {
    console.log("Прошло 5 секунд!");
});
$curTime.addWatcher(7, $scope, function () {
    console.log("Прошло 7 секунд!");
});
$curTime.addWatcher(10, $scope, function () {
    console.log("Прошло 10 секунд!");
});
</pre>
    </li>
</ol>
<hr />
angularTimeAgo
==============

Implements the countdown from the timestamp on angularjs.

<h2>How to use it?</h2>
<ol>
    <li>
        Installation:
        <pre>var app = angular.module("app", ['timeago']);</pre>
    </li>
    <li>Using:
        <p>Directive</p>
        <pre>&lt;span data-time-ago start-time="1398416014549"&gt;&lt;/span&gt;</pre>
        <p>Filter</p>
        <pre>{{1398428800501 | timeago}}</pre>
    </li>
    <li>Observers:
<pre>
$curTime.addWatcher(5, $scope, function () {
    console.log("Five seconds later!");
});
$curTime.addWatcher(7, $scope, function () {
    console.log("Seven seconds later!");
});
$curTime.addWatcher(10, $scope, function () {
    console.log("Ten seconds later!");
});
</pre>
        </li>
</ol>
