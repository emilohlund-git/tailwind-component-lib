# Tailwind Components
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) [![Publish status](https://github.com/emilohlund-git/tailwind-component-lib/actions/workflows/publish.yml/badge.svg)]()[![Release](https://github.com/emilohlund-git/tailwind-component-lib/actions/workflows/release.yml/badge.svg)](https://github.com/emilohlund-git/tailwind-component-lib/actions/workflows/release.yml)

## Storybook
[![Chromatic Storybook](https://raw.githubusercontent.com/storybookjs/brand/main/badge/badge-storybook.svg)](https://637bc3c27472f0817bd0eeed-oqkwidjwcq.chromatic.com/) Check out the component library 

## Installing
```
yarn add @emilohlund-git/tailwind-component-lib
npm i @emilohlund-git/tailwind-component-lib
```

If Tailwind isn't installed in your project you have to manually import the tailwind.css file from the library. E.x.
```TSX
import '@emilohlund-git/tailwind-component-lib/dist/tailwind.css'
```
If Tailwind is installed you can omit the css file import and include the component library in the purge path of the tailwind.config.css
```JS
// new Project tailwind.config.js
purge: [
  './node_modules/@emilohlund-git/tailwind-component-lib/dist/*.js',
],
```

### Components

Usage of components (after the library installed as a dependency into another project) will look like:

```TSX
import React from "react";
import { Button } from "@emilohlund-git/tailwind-component-lib";

const App = () => (
  <div className="container">
    <h1>Hello I'm consuming the component library</h1>
    <Button variant='primary' text='button' />
  </div>
);

export default App;
```