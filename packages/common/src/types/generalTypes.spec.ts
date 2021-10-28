// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {getTypeByScalarName, isGeneralTypes} from '@subql/common';

describe('general types', () => {
  it('check the type is general type', () => {
    expect(isGeneralTypes('BigDecimal')).toBeFalsy();
    expect(isGeneralTypes('Date')).toBeTruthy();
    expect(isGeneralTypes('MyEntity')).toBeFalsy();
  });

  it('can transform field into correct type', () => {
    expect(getTypeByScalarName('ID').toTsTypes()).toBe('string');
    expect(getTypeByScalarName('Int').toTsTypes()).toBe('number');
    expect(getTypeByScalarName('String').toTsTypes()).toBe('string');
    const dateType = getTypeByScalarName('Date');
    expect(dateType.toTsTypes()).toBe('Date');
    expect(dateType.toFieldScalar()).toBe('Date');
    expect(dateType.toSequelizeType()).toBe('timestamp');
  });

  it('throw error when a type is not supported', () => {
    expect(() => getTypeByScalarName('BigDecimal')).toThrow(/is not supported type/);
  });

  it('identify the transform type are supported', () => {
    const jsonType = getTypeByScalarName('Json');
    expect(jsonType.hasFieldScalar()).toBeFalsy();
    expect(jsonType.hasTsTypes()).toBeFalsy();
    expect(jsonType.hasSequelizeType()).toBeTruthy();
  });
});
