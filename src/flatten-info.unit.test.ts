import { expect } from 'chai';

import moduleToTest from './flatten-info';
import { default as filespace } from './_.test';

describe(filespace(__filename), () => {
  it('exports a function with 1 param', () => {
    expect(moduleToTest).to.be.a('function').and.to.have.lengthOf(1);
  });

  describe('()', () => {
    it('accepts string', () => {
      expect(moduleToTest(['a'])).to.equals('a');
    });

    it('accepts [string, string]', () => {
      expect(moduleToTest(['a', 'b'])).to.equals('a/b');
    });

    it('accepts [string, string, string]', () => {
      expect(moduleToTest(['a', 'b', 'c'])).to.equals('a/b/c');
    });

    it('keeps basename', () => {
      expect(moduleToTest(['a/b', 'a/b/c', 'a/b/c/d.txt'])).to.equals('b/c/d.txt');
    });
  });
});
