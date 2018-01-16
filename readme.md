Task runner
===========

[![build status](https://img.shields.io/travis/DarkPark/node-runner.svg?style=flat-square)](https://travis-ci.org/DarkPark/node-runner)
[![npm version](https://img.shields.io/npm/v/node-runner.svg?style=flat-square)](https://www.npmjs.com/package/node-runner)
[![dependencies status](https://img.shields.io/david/DarkPark/node-runner.svg?style=flat-square)](https://david-dm.org/DarkPark/node-runner)
[![devDependencies status](https://img.shields.io/david/dev/DarkPark/node-runner.svg?style=flat-square)](https://david-dm.org/DarkPark/node-runner?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/spasdk)


## Installation ##

```bash
npm install node-runner
```


## Usage ##

Add to the scope:

```js
var runner = require('node-runner');
```


### Tasks configuration ###

@todo


### Logging ###

General output in different colors:

```js
// 16:25:30.811 simple line
runner.log.info('simple line');

// 16:25:30.811 warning message
runner.log.warn('warning message');

// 16:25:30.811 error
runner.log.fail('error');
```

Access [colors](https://www.npmjs.com/package/colors) instance:

```js
runner.log.info(runner.log.colors.black.bgYellow('black text on yellow background'));
````

Some task specific output:

```js
var log = runner.log.wrap('webpack');

// 16:25:30.811 [webpack] build is ok
log.info('build is ok');
```


## Contribution ##

If you have any problems or suggestions please open an [issue](https://github.com/DarkPark/node-runner/issues)
according to the contribution [rules](.github/contributing.md).


## License ##

`node-runner` is released under the [GPL-3.0 License](http://opensource.org/licenses/GPL-3.0).
