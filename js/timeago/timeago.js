/**
 * Created by netBeans.
 * Name: angularTimeAgo
 * User: Abaddon
 * Date: 15.04.14
 * Time: 23:10
 * Description: Shows how long the post was published
 * Source: jQuery plugin timeago https://github.com/rmm5t/jquery-timeago/blob/master/jquery.timeago.js 
 */
var timeago = angular.module("timeago", []);

timeago.directive("timeAgo", ['$timeAgo', '$curTime', function ($timeAgo, $curTime) {
    return {
        link: function (scope, elem, attr) {
            var startTime = null;
            attr.$observe("startTime", function (value) {
                startTime = value;
            });
            //регистрация слушателя на секундамер
            scope.$watch(function () {
                return $curTime() - startTime;
            }, function (value) {
                elem.html($timeAgo.parse(value));
            });
        }
    };
}]);
/*
 * Запускает секундомер
 */
timeago.factory('$curTime', ['$timeout', function ($timeout) {
    var time = Date.now();
    var update = function () {
        $timeout(function () {
            time = Date.now();
            update();
        }, 1000);
    };
    update();
    return function () {
        return time;
    };
}]);
timeago.factory('$timeAgo', [function () {
    //Правильные окончания слов
    var correctEnd = function (val, str1, str2, str3) {
        var n10 = val % 10;
        if ( (n10 == 1) && ( (val == 1) || (val > 20) ) ) {
            return str1;
        } else if ( (n10 > 1) && (n10 < 5) && ( (val > 20) || (val < 10) ) ) {
            return str2;
        } else {
            return str3;
        }
    };
    //Преобразует строку в метку времени
    var prepare = function (value) {
        if(angular.isString(value)) {
            var date = new Date(value);
            return date.getTime();
        } else {
            return value;
        }
    };

    var config = {
        prefixAgo: null,
        prefixFromNow: "через",
        suffixAgo: "назад",
        suffixFromNow: null,
        seconds: "меньше минуты",
        minute: "минуту",
        minutes: function (value) {
            return correctEnd(value, "%d минута", "%d минуты", "%d минут");
        },
        hour: "час",
        hours: function (value) {
            return correctEnd(value, "%d час", "%d часа", "%d часов");
        },
        day: "день",
        days: function (value) {
            return correctEnd(value, "%d день", "%d дня", "%d дней");
        },
        month: "месяц",
        months: function (value) {
            return correctEnd(value, "%d месяц", "%d месяца", "%d месяцев");
        },
        year: "год",
        years: function (value) {
            return correctEnd(value, "%d год", "%d года", "%d лет");
        },
        wordSeparator: " ",
        numbers: []
    };
    //Замена для правильных окончаниев слов
    var substitute = function (stringOrFunction, number) {
        var string = angular.isFunction(stringOrFunction) ? stringOrFunction(number, value) : stringOrFunction;
        var value = (config.numbers && config.numbers[number]) || number;
        return string.replace(/%d/i, value);
    };
    //Метку времени преобразует в словесное представление
    var parse = function (value) {
        var prefix = config.prefixAgo,
            suffics = config.suffixAgo;

        var seconds = Math.abs(value) / 1000,
            minutes = seconds / 60,
            hours = minutes / 60,
            days = hours / 24,
            years = days / 365;

        var words = seconds < 45 && substitute(config.seconds, Math.round(seconds)) ||
            seconds < 90 && substitute(config.minute, 1) ||
            minutes < 45 && substitute(config.minutes, Math.round(minutes)) ||
            minutes < 90 && substitute(config.hour, 1) ||
            hours < 24 && substitute(config.hours, Math.round(hours)) ||
            hours < 42 && substitute(config.day, 1) ||
            days < 30 && substitute(config.days, Math.round(days)) ||
            days < 45 && substitute(config.month, 1) ||
            days < 365 && substitute(config.months, Math.round(days / 30)) ||
            years < 1.5 && substitute(config.year, 1) || substitute(config.years, Math.round(years));

        return [prefix, words, suffics].join(config.wordSeparator).trim();
    };

    return {
        parse: parse,
        prepare: prepare,
        config: function (settings) {
            angular.extend(config, settings);
        }
    };
}]);
//Фильтр
timeago.filter("timeago", ["$timeAgo", "$curTime", function ($timeAgo, $curTime) {
    return function (value) {
        var stamp = $timeAgo.prepare(value);
        
        if(isNaN(stamp)) {
            return value;
        } else {
            var now = $curTime();
            return $timeAgo.parse(now - stamp);
        }
    };
}]);