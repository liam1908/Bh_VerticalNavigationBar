// Type definitions for Acorn v1.0.1
// Project: https://github.com/marijnh/acorn
// Definitions by: RReverser <https://github.com/RReverser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="estree.d.ts" />

declare namespace acorn {
    var version: string;
    function parse(input: string, options?: Options): ESTree.Program;
    function parseExpressionAt(input: string, pos: number, options?: Options): ESTree.Expression;
    function getLineInfo(input: string, offset: number): ESTree.Position;
    var defaultOptions: Options;
    function isIdentifierChar(code: number, astral?: boolean): boolean;
    function isIdentifierStart(code: number, astral?: boolean): boolean;

    var plugins: any;

    interface ITokenType {
        label: string;
        keyword: string;
        beforeExpr: boolean;
        startsExpr: boolean;
        isLoop: boolean;
        isAssign: boolean;
        prefix: boolean;
        postfix: boolean;
        binop: number;
        updateContext: (prevType: TokenType) => any;
    }

    interface AbstractToken {
        start: number;
        end: number;
        loc: ESTree.SourceLocation;
        range: [number, number];
    }

    interface Token extends AbstractToken {
        type: ITokenType;
        value: any;
    }

    interface Comment extends AbstractToken {
        type: string;
        value: string;
    }

    interface Options {
        ecmaVersion?: number;
        sourceType?: string;
        onInsertedSemicolon?: (lastTokEnd: number, lastTokEndLoc?: ESTree.Position) => any;
        onTrailingComma?: (lastTokEnd: number, lastTokEndLoc?: ESTree.Position) => any;
        allowReserved?: boolean;
        allowReturnOutsideFunction?: boolean;
        allowImportExportEverywhere?: boolean;
        allowHashBang?: boolean;
        locations?: boolean;
        onToken?: ((token: Token) => any) | Token[];
        onComment?: ((isBlock: boolean, text: string, start: number, end: number, startLoc?: ESTree.Position, endLoc?: ESTree.Position) => any) | Comment[];
        ranges?: boolean;
        program?: ESTree.Program;
        sourceFile?: string;
        directSourceFile?: string;
        preserveParens?: boolean;
        plugins?: { [name: string]: Function; };
    }

    var tokTypes: any;
    var tokContexts: any;

    export class TokContext {
        constructor(token: string, isExpression: boolean, preserveSpace?: boolean, override?: boolean);
    }

    export class TokenType {
        constructor(name : string, options? : Object);
    }

    export class Parser {
        
    }
}

declare module "acorn" {
    export = acorn
}
