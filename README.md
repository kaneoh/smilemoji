# Smilemoji :) => 😀

Easily replace traditional ASCII smileys by their emoji counterpart

## Install

Install the pakcage with npm.

```bash
npm i smilemoji
```

## Usage

The package exposes a single function that will replace most ASCII style emoticons with their emoji equivalent.

```javascript
import smilemoji from 'smilemoji';
// Alternatively you can use a name import
// import {replace} from '@kaneoh/smilemoji';

const input = "Hello John :)";
const result = smilemoji(input);
// "Hello John 😀"
```
