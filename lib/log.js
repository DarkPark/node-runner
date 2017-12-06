/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var util   = require('util'),
    colors = require('colors/safe'),
    cfg    = {hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'},
    log    = {};


function time () {
    var date = new Date();

    return date.toLocaleString('en', cfg) + '.' + (+date).toString().substr(-3);
}

// export colorization
log.colors = colors;


log.info = function () {
    console.log(colors.grey(time()), util.format.apply(util, arguments));
};

log.warn = function () {
    console.log(colors.bgYellow.black(time()), util.format.apply(util, arguments));
};

log.fail = function () {
    console.log(colors.bgRed(time()), util.format.apply(util, arguments));
};


// add individual report methods for a task
log.wrap = function ( title ) {
    var result = {
        // export colorization
        colors: colors,

        // configurable task message
        format: '[%s] %s',

        // task name
        title: colors.cyan(title),

        info: function () {
            log.info(result.format, result.title, util.format.apply(util, arguments));
        },

        warn: function () {
            log.warn(result.format, result.title, util.format.apply(util, arguments));
        },

        fail: function () {
            log.fail(result.format, result.title, util.format.apply(util, arguments));
        }
    };

    return result;
};


// public
module.exports = log;
