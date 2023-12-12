import { expect } from 'chai';
import path from 'path';

import * as moduleToTest from './index';

describe(path.basename(__filename), () => {
  it('exports "debug()"', () => {
    expect(moduleToTest).has.property('debug').to.be.a('function');
  });

  it('exports "flattenInfo()"', () => {
    expect(moduleToTest).has.property('flattenInfo').to.be.a('function');
  });

  it('exports "namespace()"', () => {
    expect(moduleToTest).has.property('namespace').to.be.a('function');
  })
});
