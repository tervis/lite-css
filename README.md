# lite-css


somewhat small responsive css framework.

I challenged myself to see how small I could go, but preserve everything Skeleton, Milligram, and other micro frameworks have to offer.

## Features
* 12 Column Responsive Grid
* Typography for h1-h6, and body text
* Buttons primary/dark outline and normal
* Cards
* Inputs
* Table Styles

and a little bit more...

## util
util is an atomic css addon for lit. It is currently a work in progress, but feel free to check it out at https://ajusa.github.io/lit/docs/util.html


## Development Setup
1. Clone this repository (https://www.github.com/ajusa/lit)
2. Make sure you have [npm](https://www.npmjs.com/get-npm) installed
3. Run `yarn install` in the root directory of `lite-css`
4. Once that is completed, run `yarn run build` to build the minified versions
5. If you are making changes live, use `npm run watch`. `watch` will build the minified css file in `./build/dist` whenever there is a change in `./src/lite.scss`.