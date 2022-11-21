# Tailwind Components
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Installing
```
yarn add emil-component-lib
npm i emil-component-lib
```

## Development
### Testing
```
yarn test
```
### Building
```
yarn build
```
### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```
## Publishing

### Hosting via NPM

First, make sure you have an NPM account and are [logged into NPM using the `npm login` command.](https://docs.npmjs.com/creating-a-new-npm-user-account)

Then update the `name` field in `package.json` to reflect your NPM package name in your private or public NPM registry. Then run:

```
npm publish
```
### Components

Usage of components (after the library installed as a dependency into another project) will look like:

```TSX
import React from "react";
import { Button } from "emil-component-lib";

const App = () => (
  <div className="container">
    <h1>Hello I'm consuming the component library</h1>
    <Button variant='primary' text='button' />
  </div>
);

export default App;
```
### Obs!
If Tailwind isn't installed in your project you have to manually import the tailwind.css file from the library. E.x.
```TSX
import 'emil-component-lib/dist/tailwind.css'
```
If Tailwind is installed you can omit the css file import and include the component library in the purge path of the tailwind.config.css
```JS
// new Project tailwind.config.js
purge: [
  './node_modules/emil-component-lib/dist/*.js',
],
```