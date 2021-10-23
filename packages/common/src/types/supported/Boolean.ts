// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {numberToU8a} from '@polkadot/util/bundle';
import {TypeInterfaces} from './typeInterfaces';

export const Boolean = {
  toFieldScalar: 'Boolean',
  toTsType: 'boolean',
  toSequelizeType: 'boolean',
  toStoreOperation(data: any): Uint8Array | undefined {
    return Buffer.from(numberToU8a(data ? 1 : 0));
  },
} as TypeInterfaces;
