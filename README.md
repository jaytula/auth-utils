# @groundearth0/auth-utils

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@groundearth0/auth-utils.svg)](https://www.npmjs.com/package/@groundearth0/auth-utils) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @groundearth0/auth-utils
```

## Usage

```tsx
import React from 'react'

import { useInterval } from '@groundearth0/auth-utils'

const MyWidget = () => {
  userInterval(() => {
    console.log('Another 5 seconds have passed')
  }, 5000)

  return null
} 
```

## License

MIT © [jaytula](https://github.com/jaytula)
