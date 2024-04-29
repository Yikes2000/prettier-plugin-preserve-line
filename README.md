# prettier-plugin-brace-style

A Prettier plugin for preserving lines.

```
    Preserve first blank line of a block:     An expression:

        if (condition) {                          matrix = [  //
                                                      1, 0, 1,
          statement1;                                 0, 1, 0,
          statement2;                                 0, 0, 1,
                                                  ];
          statement3;
          statement4;
        }
```


## Installation

For Prettier v2:

```sh
npm install -D prettier@^2 @yikes2000/prettier-plugin-preserve-line
```

For Prettier v3:[^1]

```sh
npm install -D prettier @yikes2000/prettier-plugin-preserve-line
```


## Configuration

JSON example:

```json
{
  "plugins": ["@yikes2000/prettier-plugin-preserve-line"]
}
```

JS example (CommonJS module):

```javascript
module.exports = {
  plugins: ['@yikes2000/prettier-plugin-preserve-line'],
  preserveFirstBlankLine: true,
  preserveDoubleSlashEol: true,
};
```

JS example (ES module):

```javascript
export default {
  plugins: ['@yikes2000/prettier-plugin-preserve-line'],
  preserveFirstBlankLine: true,
  preserveDoubleSlashEol: true,
};
```

## Options

### Preserve First Blank Line

Preserve the first blank line of a block (curly, bracket, or parenthesis).

Example:
```
  if (condition) {

    statement1;
    statement2;

    statement3;
    statement4;
  }

  a = [

    // Odds
    1, 3, 5, 7, 9,

    // Evens
    2, 4, 6, 8, 10,
  ];

  sum = (

    // Odds
    1 + 3 + 5 + 7 + 9 +

    // Evens
    2 + 4 + 6 + 8 + 10
  );
```
<!-- prettier-ignore -->
Default | CLI&nbsp;Override | API&nbsp;Override
--- | --- | ---
`true` | `--no-preserve-first-blank-line` | `preserveFirstBlankLine: <bool>`

### Preserve by EOL Marker

End-of-line `//` marker will apply `// prettier-ignore` to that line.

Example:
```
  matrix = [  //
    1, 0, 1,
    0, 1, 0,
    0, 0, 1,
  ];

  msg =  //
      matrix.length < 9 ? 'too smalt'
    : matrix.length > 9 ? 'too big'
    :                     'just right';
```
<!-- prettier-ignore -->
Default | CLI&nbsp;Override | API&nbsp;Override
--- | --- | ---
`true` | `--no-preserve-eol-marker` | `preserveEolMarker: <bool>`


## Compatibility with other Prettier plugins

See [prettier-plugin-merge-preserve](https://github.com/yikes2000/prettier-plugin-merge-preserve).


## Credits

This plugin was templated from Hyeonjong's
[prettier-plugin-brace-style](https://github.com/ony3000/prettier-plugin-brace-style).


