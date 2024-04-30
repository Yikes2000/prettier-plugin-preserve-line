
To test against different versions of Prettier, please run separately:

    tests    $ cd v2-test
    v2-test  $ pnpm i
    v2-test  $ npx vitest run

    tests    $ cd v3-test
    v3-test  $ pnpm i
    v3-test  $ npx vitest run

Babel (Javascript) preserve-line tests:

    v3-test/babel/
    
        preserve-first-blank-line/
            curly.test.ts
            bracket.test.ts
            parenthesis.test.ts

        preserve-last-blank-line/
            ...
            
        preserve-eol-marker/
            array.test.ts
            ternary.test.ts

        preser-dot-chain/
            ...

Typescript and v2-test share the same tests (symlink).

