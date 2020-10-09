# Smilemoji :) => 😀

Easily replace traditional ASCII smileys by their emoji counterpart

## Install

First you need to tell npm where to fetch our package by adding our repository. Adde the following line or create a file called `.npmrc`

```bash
# .npmrc
@kaneoh:registry=https://npm.pkg.github.com/
```

Then install the pakcage with npm.

```bash
npm i @kaneoh/smilemoji
```

## Usage

The package exposes a single function that will replace most ASCII style emoticons with theyr emoji equivalent.

```javascript
import smilemoji from '@kaneoh/smilemoji';
// Alternatively you can use a name import
// import {replace} from '@kaneoh/smilemoji';

const input = "Hello John :)";
const result = smilemoji(input);
// "Hello John 😀"
```
