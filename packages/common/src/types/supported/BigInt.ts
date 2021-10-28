// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {TypeInterfaces} from './typeInterfaces';

export const BigInt = {
  fieldScalar: 'BigInt',
  tsType: 'bigint',
  sequelizeType: 'numeric',
  hashCode(data: any): Uint8Array | undefined {
    return Buffer.from(data.toString());
  },
} as TypeInterfaces;
