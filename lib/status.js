/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var runner = require('./main'),
    name   = 'status',
    log    = runner.log.wrap(name);


runner.task(name, function () {
    Object.keys(runner.tasks).sort().forEach(function ( id ) {
        log.info(
            'task %s',
            runner.tasks[id].running ? log.colors.green(id) : log.colors.grey(id)
        );
    });
});

runner.keystroke(name, 'ctrl+s');
