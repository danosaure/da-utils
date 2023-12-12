import { expect } from 'chai';

import { default as filespace } from './_.test';

import moduleToTest from './namespace';

describe(filespace(__filename), () => {
  it('exports a function', () => {
    expect(moduleToTest).to.be.a('function').and.to.have.lengthOf(2);
  });

  describe('()', () => {
    it('returns uppercase key', () => {
      expect(moduleToTest('SOME-APP-KEY', 'some/path')).to.equals('SOME-APP-KEY.SOME-PATH');
      expect(moduleToTest('APP-KEY', 'Component1.SubComponent1')).to.equals('APP-KEY.COMPONENT1.SUBCOMPONENT1');
    });
  });
});
