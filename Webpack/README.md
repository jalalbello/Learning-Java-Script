# How to load CSS using webpack?

1. Install the css-loader and style-loader npm packages.
   ```jsx
   npm install --save-dev css-loader style-loader

   The css-loader will interpret and compile your CSS code 
   The style-loader will inject the output into the DOM as a <style> element.
   ```
2. Configure the css-loader and style-loader in your webpack configuration file by adding the following code:

```jsx
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
```
3.  In JavaScript code, use the import statement to include your CSS files:

```jsx
import './style.css';
```

# How do you load images using webpack?

1. Install the file-loader npm package by running `npm install --save-dev file-loader`
2. Configure the file-loader in your webpack configuration file by adding the following 

```jsx
 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
      {
        // This part
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     ],
   },
 };
```

or

```jsx
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  }
};
```

or using url loader, to reduce the number of HTTP requests for small images (smaller than 8192 bytes as data URLs)

```jsx
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  }
};

```

3. Use the import statement to include the image files

```jsx
import imageUrl from './image.png';

const imgElement = document.createElement('img');
imgElement.src = imageUrl;
document.body.appendChild(imgElement);
```

# load fonts

1. Install the file-loader npm package by running npm install --save-dev file-loader or yarn add --dev file-loader.
2. Configure the file-loader in your webpack configuration file to handle font files by adding the following code:


```jsx
 const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
     ],
   },
 };
```
```jsx
module.exports = {
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  }
};

```
3. In your CSS file, use the @font-face rule to specify the font's name and file location:
```css
@font-face {
  font-family: 'MyFont';
  src: url('./my-font.woff2') format('woff2'),
    url('./my-font.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

 .hello {
   color: red;
  font-family: 'MyFont';
   background: url('./icon.png');
 }
```

# load data

1. Install the json-loader or csv-loader or xml-loader npm package by running npm install 

2. Configure the appropriate loader in your webpack configuration file to handle the data files:

```jsx
 const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/i,
         type: 'asset/resource',
       },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
     ],
   },
 };
```

```jsx
module.exports = {
  module: {
    rules: [
      {
        test: /\.csv$/,
        use: [
          {
            loader: 'csv-loader'
          }
        ]
      }
    ]
  }
};

```

3. import

```jsx
import data from './data.csv';
```

# Tracking errors in bundled code

Using source map

```jsx
module.exports = {
  devtool: 'source-map',
  ...
};
```