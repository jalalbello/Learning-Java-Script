- Explain what npm is and where it was commonly used before being adopted on the frontend. 
  > It was used for node.js server-side developement
- Describe what `npm init` does and what `package.json` is. Know how to install packages using npm. 
  > npm init creates the package.lock json, we use npm install to install packages
- Describe what a JavaScript module bundler like webpack is. 
  > Webpack allows us to ship multiple pieces of code and dependencies into one js file, this allows us to write code in a `modular` fashion, breaking it up into small chunks, it can also be used to `transpile` code to be used by older browsers, by doing this we reduce the number of `HTTP requests` needed to load our page, wich can make the performance better and make the app `easier to deploy`
- Explain what the concepts “entry” and “output” mean as relates to webpack
  > The "entry" point in webpack is the starting point for building the dependency graph of an application, and is specified as an input file or files in the webpack configuration file.
  >
  >The "output" in webpack is the bundle of code generated after processing input files and their dependencies, and is specified as an output file or files in the webpack configuration file.
-  Briefly explain what a development dependency is. 
 > A development dependency is a package needed for development, but not for production. A regular dependency, also known as a production dependency, is needed for both development and production. Regular dependencies are specified in the "dependencies" field in the package.json file and are installed with the npm install command. They are included in the final application bundle for production.
- Explain what “transpiling code” means and how it relates to frontend development. 
  > Means converting code from one languague to another, often used to make modern js compatible with older browsers, often used with a module bundler like webpack
- Briefly describe what a task runner is and how it’s used in frontend development. 
  > They can allow us to define tasks to run using `npm run`, instead of writing multiple tasks, they also allow us to run `multilple tasks` with a single command,
- Describe how to write an npm automation script.
  > Step one `npm init` step two, `npm install for installing dependencies`, step three `importing dependencies/ const request = require('request');`, step four `entering the secript in the package.json`, step 5 Run my script by entering `npm run my-script`
  ```jsx
  // Npm default scripts
    start: This script is intended to be used as the default command for running your project. It is often used to start a development server or build process, or to run the main file of your project.
    test: This script is used to run tests for your project.
    build: This script is used to build your project for production.
    watch: This script is used to start a process that watches for changes to your source files and automatically rebuilds your project when changes are detected.
    lint: This script is used to lint (check the syntax and style) of your source code.
  ```
- Explain “named exports” and “default exports”.

Named exports are values from a module that are given a name that can be used to import them:

> Named export
```jsx
export const foo = 'foo';
export const bar = 'bar';
```
> Specific named import
 ```jsx
import { foo, bar } from './my-module';

console.log(foo); // 'foo'
console.log(bar); // 'bar'
```
> use the * syntax to import all named exports from a module into a single object:

```jsx
import * as myModule from './my-module';

console.log(myModule.foo); // 'foo'
console.log(myModule.bar); // 'bar'
```

Default exporting from a module is exporting a single value from a module as the default export, modules can only have one default export

>Default Exporting

```jsx
export default 'foo';
```

> Default Importing
```jsx
import foo from './my-module';

console.log(foo);
```
> Default Importing under a diffrent Name

```jsx
import fooBar as foo from './my-module';

console.log(foo); // 'foo' 
```****