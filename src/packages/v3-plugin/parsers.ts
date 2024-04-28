import type { Parser, ParserOptions } from 'prettier';
import { format } from 'prettier';
import { parsers as babelParsers } from 'prettier/plugins/babel';
import { parsers as tsParsers } from 'prettier/plugins/typescript';

import { preprocess, postprocess, filterByLanguage } from 'core-parts';

/**
 * This plugin works by adding '// prettier-ignore' lines to source code (pre-process), format it through Prettier,
 * then remove those lines in post-process.  All of it is done as the plugin parser, which returns the finished code
 * as 'formatted text'.  The plugin printer merely passes it through.
 */
function transformParser(
  parserName: 'babel' | 'typescript',
  defaultParser: Parser,
  languageName?: string,
): Parser {
  //
  return {
    ...defaultParser,

    parse: async (text: string, options: ParserOptions) => {
      const plugins = filterByLanguage(options, languageName);

      let codeText = preprocess(text, options);

      codeText = await format(codeText, {
        ...options,
        plugins: plugins,
        endOfLine: 'lf',
      });

      codeText = postprocess(codeText, options);

      return {
        type: 'FormattedText',
        body: codeText,
      };
    },
    astFormat: 'preserve-line-ast',
  };
}

export const parsers: { [parserName: string]: Parser } = {
  babel: transformParser('babel', babelParsers.babel),  // javascript
  typescript: transformParser('typescript', tsParsers.typescript),
};
