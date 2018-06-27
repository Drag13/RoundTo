# RoundTo

[![codecov](https://codecov.io/gh/Drag13/RoundTo/branch/master/graph/badge.svg)](https://codecov.io/gh/Drag13/RoundTo)
[![Build Status](https://travis-ci.org/Drag13/RoundTo.svg?branch=master)](https://travis-ci.org/Drag13/RoundTo)
[![npm](https://img.shields.io/npm/dt/@drag13/round-to.svg)](https://github.com/Drag13/RoundTo)
[![TypeSCript](https://img.shields.io/badge/TypeScript-Ready-brightgreen.svg)](https://github.com/Drag13/RoundTo)
[![GitHub license](https://img.shields.io/github/license/Drag13/RoundTo.svg)](https://github.com/Drag13/RoundTo/blob/master/LICENSE)

## Description

Small function to round decimals with precision

No external dependencies, uses ES6 inside, TypeScript ready.

## Installation

  `npm install @drag13/round-to`

## Usage

Usage is simple: roundTo function rounds your decimal with selected precesion. It also tries to handle edge cases with floating point using Epsilon shift and nano-robots (the last is joke, but check tests to see what i am trying to handle)

``` javascript
const round = require('@drag13/round-to');
const roundingResult = round(5.4399, 2);
console.assert(roundingResult===5.44);
```

## TypeScript

Feel free to use it with TypeScript

``` typescript
import * as round from '@drag13/round-to';
const roundingResult = round(5.4399, 2);
console.assert(roundingResult===5.44);
```

## Tests

  `npm test`

## Contributing

Any bug fixing is appreciated. If you want to add new functionality - you're welcome. But KISS it please.
