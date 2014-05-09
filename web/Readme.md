#[ReactDNA](https://github.com/0x4139/ReactDNA) [![Build Status](https://travis-ci.org/0x4139/ReactDNA.svg?branch=master)](https://travis-ci.org/0x4139/ReactDNA)

ReactDNA is collection of tools,libraries and tasks for building powerful user interfaces
* **ReactJS:** Lots of people use React (facebook,instagram) as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.
* **Browserify:** Browserify lets you require('modules') in the browser by bundling up all of your dependencies.
* **Livereload:** The Web Developer Wonderland (a happy land where browsers don't need a Refresh button)
* **GulpJS:** The streaming build system, run automated tasks, build configurations and more

##Features
* **Livereloading:** whenever a file changes inside your project your browser will automatically refresh
* **JSBundle** using browserify you can use `module.exports` `exports` and even `require` in your frontend scripts, in the end bundling all them together into a single `*.js` file
* **CSSBundle** you never have to worry if you imported your css files in the project `ReactDNA` does that for you on the fly right at the moment when you add a new css file
* **StaticServer** ReactDNA comes with a static server so you don't have to worry about how you are going to host your frontend files

##TODO Features - a gulp production task that includes:
* **JSMinification** use googleClosureCompiler(or other) in order to minify the file that browserify generates
* **CSSMinification** use a minification task in order to minify all the css
* **ImageOptimization** use a optimization task in order to optimize all the images in your project

## Installation

The fastest way to get started is to clone this repository to your target directory and run gulp

```
git clone https://github.com/0x4139/ReactDNA target_directory
npm install
gulp
#if you don't have gulp installed globaly `-g option` you can use
node node_modules/gulp/bin/gulp.js
```
## Contribute

The main purpose of this repository is to continue to evolve ReactDNA , making it better and easier to use. If you're interested in helping with that, then keep reading. If you're not interested in helping right now that's ok too. :) Any feedback you have about using ReactDNA would be greatly appreciated.

## Pull-Requests

I love them <3 so don't be scared to send them, you can allways the issue tracker to express your ideas or if you found a bug

## Contact
* **Gmail:** 0x4139@gmail.com
* **Twitter:** @0x4139
