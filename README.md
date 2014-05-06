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
</ol>

