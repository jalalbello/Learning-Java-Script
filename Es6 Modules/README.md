# History of js, problems that bundlers solve

## How libraries used to be loaded

So you'd have the library run before the main js, this way you can include the library function in your main code

```jsx
  <script src="moment.min.js"></script> 
  // Library
  <script src="index.js"></script>  
```

> It was annoying to find and download new versions of libraries every time they would update
>

## The advent of package managers

At arround 2010, they emerged to help automate the process of downloading and upgrading libraries from a central repository

Npm was origanally a package manager made for `node.js` and node is a runtime designed to `run on the server`, not the frontend, so it makes it a weird choice for a front end manager for libraries meant to run on the browser

## Using npm to share only the code

To install a package we use things command

```jsx
npm install moment
```

You might see code like this 

```jsx
npm install moment --save
```

Both do the same thing, they install modules and adds them as dependencies in the `package.json`

```jsx
// This line got added
  "dependencies": {  
    "moment": "^2.22.2"  
  } 
```

This is usefull when sharing a project with others, instead of sharing the `nodue_modules`, and people can run the command `npm install`

# The bad 

We have to find the location of each package and manually include it in our HTML

```jsx
  <script src="node_modules/moment/min/moment.min.js"></script>
  <script src="index.js"></script>  
```

# Using webpack

It will create a single JS readable by developpers

```jsx
$ ./node_modules/.bin/webpack ./src/index.js --mode=development
$ ./node_modules/.bin/webpack ./src/index.js --mode=production
```

Each time we change the webpack we can run this command

```jsx
./node_modules/.bin/webpack
```
This is **tedious** we can use a config file in the directory

```jsx
// webpack.config.js  
module.exports = {  
  mode: 'development',  
  entry: './index.js',  
  output: {  
    filename: 'main.js',  
    publicPath: 'dist'  
  }  
};
```

and use `npx webpack --watch` as to not **rerun** every time we make a **change**

# Using a task runner (npm scripts) 

```jsx
// Package.json
  "scripts": {  
    "test": "echo \"Error: no test specified\" && exit 1",  
    "build": "webpack --progress --mode=production",  
    "watch": "webpack --progress --watch" 
  },  
// npm build
// npm watch
```