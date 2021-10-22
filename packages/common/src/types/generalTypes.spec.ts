// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {GeneralTypes, GenericTypes} from '@subql/common';

describe('general types', () => {
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
  });

  it('throw error when a type is not supported', () => {
    expect(() => new GeneralTypes('BigDecimal')).toThrow(/is not supported type/);
  });

  it('identify if it is not a related type', () => {
    const jsonType = new GeneralTypes('Json');
    expect(jsonType.hasFieldScalar()).toBeFalsy();
    expect(jsonType.hasTsTypes()).toBeFalsy();
    expect(jsonType.hasGraphqlType()).toBeTruthy();
  });
});
