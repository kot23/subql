// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {TypeInterfaces} from './typeInterfaces';

export const BigInt = {
  toFieldScalar: 'BigInt',
  toTsType: 'bigint',
  toSequelizeType: 'numeric',
  toHashCode(data: any): Uint8Array | undefined {
    return Buffer.from(data.toString());
  },
} as TypeInterfaces;
