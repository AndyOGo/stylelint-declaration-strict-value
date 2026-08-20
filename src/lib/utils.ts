import type { Declaration, Root, AtRule, Rule } from 'postcss';
// eslint-disable-next-line import/no-extraneous-dependencies
import _cssValues from 'css-values';
import { IgnoreValue, RegExpString } from '../defaults';

// Handle CJS/ESM interop for css-values
const cssValues: (prop: string, value: string) => boolean =
  typeof _cssValues === 'function'
    ? _cssValues
    : (_cssValues as { default: (prop: string, value: string) => boolean })
        .default;

/**
 * RegExp to skip non-CSS properties.
 *
 * @internal
 */
export const reSkipProp = /^(?:@|\$|--).+$/;

/**
 * RegExp to parse CSS, SCSS and less variables.
 * - allowing CSS variables to be multi line
 * - Sass namespaces and CSS <ident-token> supported
 *
 * @internal
 * @see https://github.com/sass/sass/blob/master/accepted/module-system.md#member-references
 * @see  https://drafts.csswg.org/css-syntax-3/#ident-token-diagram
 */
// eslint-disable-next-line no-control-regex
export const reVar =
  /^-?(?:@.+|(?:(?:[a-zA-Z_-]|[^\x20-\x7F])+(?:[a-zA-Z0-9_-]|[^\x20-\x7F])*\.)?\$.+|var\(\s*--[\s\S]+\))$/;

/**
 * RegExp to parse functions.
 * - irgnoring CSS variables `var(--*)`
 * - allow multi line arguments
 *
 * @internal
 */

export const reFunc = /^(?!var\(\s*--)[\s\S]+\([\s\S]*\)$/;
/**
 * RegExp to parse regular expressions.
 * - supporting patterns
 * - and optional flags
 *
 * @internal
 */
const reRegex = /^\/(.*)\/([a-zA-Z]*)$/;

/**
 * @internal
 */
const reColorProp = /color/;

type RegExpArray = [string, string?];

/**
 * Checks if string is a Regular Expression.
 *
 * @internal
 * @param value - Any string.
 */
export const checkCssValue = (prop: string, value: string) =>
  (reColorProp.test(prop) && value === 'transparent') ||
  reVar.test(value) ||
  reFunc.test(value) ||
  cssValues(prop, value);

export const isRegexString = (value: string): value is RegExpString =>
  reRegex.test(value);

/**
 * Get pattern and flags of a Regular Expression string.
 *
 * @internal
 * @param value - Any string representing a Regular Expression.
 * @returns An Array of pattern and flags of a Regular Expression string.
 */
const getRegexString = (value: string): RegExpArray =>
  value.match(reRegex)!.slice(1) as RegExpArray;

/**
 * Convert a Regular Expression string to an RegExp object.
 *
 * @internal
 * @param value - Any string representing a Regular Expression.
 * @returns A Regular Expression object.
 */
export const stringToRegex = (value: RegExpString) => {
  const [pattern, flags] = getRegexString(value);
  return new RegExp(pattern, flags);
};

/**
 * Map ignored value config to a Regular expression.
 *
 * @internal
 * @param ignoreValue - A ignored value property.
 * @returns A Regular Expression to match ignored values.
 */
export const mapIgnoreValue = (ignoreValue: IgnoreValue) =>
  isRegexString(`${ignoreValue}`)
    ? stringToRegex(`${ignoreValue}`)
    : new RegExp(`^${ignoreValue}$`);

function isRoot(node: unknown): node is Root {
  return (
    !!node && typeof node === 'object' && 'type' in node && node.type === 'root'
  );
}

function isAtRule(node: unknown): node is AtRule {
  return (
    !!node &&
    typeof node === 'object' &&
    'type' in node &&
    node.type === 'atrule'
  );
}

export const findAtRules = (node: Declaration | Rule | AtRule): string[] => {
  const atRules: string[] = [];

  if (node?.parent) {
    const { parent } = node;

    if (isAtRule(parent)) {
      atRules.push(
        `@${parent.name}${parent.params ? ` ${parent.params}` : ''}`
      );
    }

    if (!isRoot(parent)) {
      atRules.push(...findAtRules(parent));
    }
  }

  return atRules;
};
