// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {GeneralTypes, isGeneralTypes} from '@subql/common';

describe('general types', () => {
  it('check the type is general type', () => {
    expect(isGeneralTypes('BigDecimal')).toBeFalsy();
    expect(isGeneralTypes('Date')).toBeTruthy();
    expect(isGeneralTypes('MyEntity')).toBeFalsy();
  });

  it('can transform field into correct type', () => {
    const idType = new GeneralTypes('ID');
    expect(idType.transformTsTypes()).toBe('string');
    const numberType = new GeneralTypes('Int');
    expect(numberType.transformTsTypes()).toBe('number');
    const bigIntType = new GeneralTypes('BigInt');
    expect(bigIntType.transformTsTypes()).toBe('bigint');
    const stringType = new GeneralTypes('String');
    expect(stringType.transformTsTypes()).toBe('string');
    const dateType = new GeneralTypes('Date');
    expect(dateType.transformTsTypes()).toBe('Date');
    expect(dateType.transformFieldScalar()).toBe('Date');
    expect(dateType.transformSequelizeType()).toBe('timestamp');
  });

  it('throw error when a type is not supported', () => {
    expect(() => new GeneralTypes('BigDecimal')).toThrow(/is not supported type/);
  });

  it('identify the transform type are supported', () => {
    const jsonType = new GeneralTypes('Json');
    expect(jsonType.hasFieldScalar()).toBeFalsy();
    expect(jsonType.hasTsTypes()).toBeFalsy();
    expect(jsonType.hasSequelizeType()).toBeTruthy();
  });
});
