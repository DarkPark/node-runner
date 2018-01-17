#!/usr/bin/env node

/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var path    = require('path'),
    program = require('commander'),
    runner  = require('../lib/main'),
    pkgData = require('../package.json');


program
    .version(pkgData.version)
    .usage('[options] [<task>]')
    .description(pkgData.description)
    .option('-c, --config [file]', 'configuration file with tasks', 'runner.js')
    .option('-s, --serial', 'run all given tasks sequentially (instead of in parallel)');

program.on('--help', function () {
    console.log('\n  Examples:');
    console.log('');
    console.log('    $ @TODO');
    console.log('');
});

program.parse(process.argv);

// config absolute path
program.config = path.normalize(path.join(process.cwd(), program.config));

// load config
require(program.config);
runner.log.info('config file: ' + runner.log.colors.green(program.config));

// run
if ( program.args.length === 1 ) {
    // just a single task
    runner.run(program.args[0]);
} else {
    if ( program.args.length > 1 ) {
        // list of tasks
        runner.log.info('run mode: ' + (program.serial ? 'serial' : 'parallel'));

        if ( program.serial ) {
            runner.task('default', runner.serial.apply(runner, program.args));
        } else {
            runner.task('default', runner.parallel.apply(runner, program.args));
        }
    }

    runner.start();
}
