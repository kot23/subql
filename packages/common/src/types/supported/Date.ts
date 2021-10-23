// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {numberToU8a} from '@polkadot/util';
import {TypeInterfaces} from './typeInterfaces';

export const Date = {
  toFieldScalar: 'Date',
  toTsType: 'Date',
  toSequelizeType: 'timestamp',
  toStoreOperation(data: any): Uint8Array | undefined {
    return Buffer.from(numberToU8a(data.getTime()));
  },
} as TypeInterfaces;
