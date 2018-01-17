/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var util      = require('util'),
    runner    = require('./main'),
    notifier  = require('node-notifier'),
    stripAnsi = require('strip-ansi'),
    stdout    = runner.log.fail;


runner.log.fail = function () {
    // default console output
    stdout.apply(runner.log, arguments);

    // popup system notification
    notifier.notify({
        title: 'runner',
        icon: 'error',
        message: stripAnsi(util.format.apply(util, arguments)).replace(/\t/g, '    ')
    });
};
