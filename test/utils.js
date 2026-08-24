import {
  reSkipProp,
  reVar,
  reFunc,
  reRegex,
  reColorProp,
  stringToRegex,
  isRoot,
  isAtRule,
  findAtRules,
} from '../src/lib/utils';

describe('reSkipProp', () => {
  it.each(['@foo', '$foo', '--foo'])('skips non-CSS props like %s', (prop) => {
    expect(reSkipProp.test(prop)).toBeTruthy();
  });

  it.each(['color', 'margin', 'border-color'])(
    'passes CSS props like %s',
    (prop) => {
      expect(reSkipProp.test(prop)).toBeFalsy();
    }
  );

  it.each(['calc(10% - 5px)', 'darken(#fff, 10%)', 'color(red alpha(-10%))'])(
    'passes functions like %s',
    (func) => {
      expect(reSkipProp.test(func)).toBeFalsy();
    }
  );
});

describe('reVar', () => {
  it.each(['$sass', 'namespace.$sass', '@less', 'var(--cssnext)'])(
    'parses CSS, SCSS and less variables like %s',
    (variable) => {
      expect(reVar.test(variable)).toBeTruthy();
    }
  );

  it.each(['color', 'margin', 'border-color'])(
    'does not parses CSS props like %s',
    (prop) => {
      expect(reVar.test(prop)).toBeFalsy();
    }
  );

  it.each(['calc(10% - 5px)', 'darken(#fff, 10%)', 'color(red alpha(-10%))'])(
    'does not parse functions like %s',
    (func) => {
      expect(reVar.test(func)).toBeFalsy();
    }
  );
});

describe('reFunc', () => {
  it.each(['calc(10% - 5px)', 'darken(#fff, 10%)', 'color(red alpha(-10%))'])(
    'parses functions like %s',
    (func) => {
      expect(reFunc.test(func)).toBeTruthy();
    }
  );

  it.each(['$sass', 'namespace.$sass', '@less', 'var(--cssnext)'])(
    'does not parse CSS, SCSS and less variables like %s',
    (variable) => {
      expect(reFunc.test(variable)).toBeFalsy();
    }
  );

  it.each(['color', 'margin', 'border-color'])(
    'does not parse CSS props like %s',
    (prop) => {
      expect(reFunc.test(prop)).toBeFalsy();
    }
  );
});

describe('reRegex', () => {
  it.each(['//', '/foo/', '//i', '//g', '//m', '//ig'])(
    'parses RegExp string like %s',
    (regex) => {
      expect(reRegex.test(regex)).toBeTruthy();
    }
  );

  it.each(['foo', '/', '/ig'])(
    'does not parse non-RegExp string like %s',
    (regex) => {
      expect(reRegex.test(regex)).toBeFalsy();
    }
  );
});

describe('reColorProp', () => {
  it.each(['color', 'background-color', 'border-color', 'border-top-color'])(
    'parses CSS color props like %s',
    (prop) => {
      expect(reColorProp.test(prop)).toBeTruthy();
    }
  );

  it.each(['foo', 'bar', 'col'])(
    'does not parse non-CSS color props like %s',
    (regex) => {
      expect(reRegex.test(regex)).toBeFalsy();
    }
  );
});

describe('stringToRegex', () => {
  it('returns RegExp object', () => {
    const regex = stringToRegex('/foo/ig');

    expect(regex).toEqual(expect.any(RegExp));
    expect(regex.source).toBe('foo');
    expect(regex.ignoreCase).toBeTruthy();
    expect(regex.global).toBeTruthy();
    expect(regex.multiline).toBeFalsy();
    expect(regex.dotAll).toBeFalsy();
    expect(regex.unicode).toBeFalsy();
    expect(regex.sticky).toBeFalsy();
    expect(regex.flags.includes('i')).toBeTruthy();
    expect(regex.flags.includes('g')).toBeTruthy();
    expect(regex.flags.includes('m')).toBeFalsy();
    expect(regex.flags.includes('s')).toBeFalsy();
    expect(regex.flags.includes('y')).toBeFalsy();
  });
});

describe('isRoot', () => {
  it.each([
    true,
    false,
    null,
    undefined,
    0,
    1,
    '',
    'foo',
    {},
    [],
    { type: '' },
  ])('returns false for %s', (value) => {
    expect(isRoot(value)).toBeFalsy();
  });

  it('returns true for root node', () => {
    expect(isRoot({ type: 'root' })).toBeTruthy();
  });
});

describe('isAtRule', () => {
  it.each([
    true,
    false,
    null,
    undefined,
    0,
    1,
    '',
    'foo',
    {},
    [],
    { type: '' },
  ])('returns false for %s', (value) => {
    expect(isAtRule(value)).toBeFalsy();
  });

  it('returns true for at-rule node', () => {
    expect(isAtRule({ type: 'atrule' })).toBeTruthy();
  });
});

describe('findAtRules', () => {
  it.each([undefined, null, {}])('returns empty array for %s', (node) => {
    expect(findAtRules(node).length).toBe(0);
    expect(findAtRules({ parent: node }).length).toBe(0);
  });

  it('returns parent at-rule', () => {
    const node = {
      type: 'root',
      parent: {
        type: 'atrule',
        name: 'font-face',
        params: undefined,
      },
    };

    expect(findAtRules(node)).toEqual(['@font-face']);
  });

  it('returns parent at-rule with params', () => {
    const node = {
      type: 'root',
      parent: {
        type: 'atrule',
        name: 'media',
        params: '(min-width: 100px)',
      },
    };

    expect(findAtRules(node)).toEqual(['@media (min-width: 100px)']);
  });
});
