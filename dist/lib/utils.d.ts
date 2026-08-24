import type { Declaration, Root, AtRule, Rule } from 'postcss';
import { IgnoreValue, RegExpString } from '../defaults';
/**
 * RegExp to skip non-CSS properties.
 *
 * @internal
 */
export declare const reSkipProp: RegExp;
/**
 * RegExp to parse CSS, SCSS and less variables.
 * - allowing CSS variables to be multi line
 * - Sass namespaces and CSS <ident-token> supported
 *
 * @internal
 * @see https://github.com/sass/sass/blob/master/accepted/module-system.md#member-references
 * @see  https://drafts.csswg.org/css-syntax-3/#ident-token-diagram
 */
export declare const reVar: RegExp;
/**
 * RegExp to parse functions.
 * - irgnoring CSS variables `var(--*)`
 * - allow multi line arguments
 *
 * @internal
 */
export declare const reFunc: RegExp;
/**
 * RegExp to parse regular expressions.
 * - supporting patterns
 * - and optional flags
 *
 * @internal
 */
export declare const reRegex: RegExp;
/**
 * @internal
 */
export declare const reColorProp: RegExp;
export declare const checkCssValue: (prop: string, value: string) => boolean;
/**
 * Checks if string is a Regular Expression.
 *
 * @internal
 * @param value - Any string.
 */
export declare const isRegexString: (value: string) => value is RegExpString;
/**
 * Convert a Regular Expression string to an RegExp object.
 *
 * @internal
 * @param value - Any string representing a Regular Expression.
 * @returns A Regular Expression object.
 */
export declare const stringToRegex: (value: RegExpString) => RegExp;
/**
 * Map ignored value config to a Regular expression.
 *
 * @internal
 * @param ignoreValue - A ignored value property.
 * @returns A Regular Expression to match ignored values.
 */
export declare const mapIgnoreValue: (ignoreValue: IgnoreValue) => RegExp;
export declare function isRoot(node: unknown): node is Root;
export declare function isAtRule(node: unknown): node is AtRule;
export declare const findAtRules: (node: Declaration | Rule | AtRule) => string[];
