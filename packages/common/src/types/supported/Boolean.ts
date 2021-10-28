// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {numberToU8a} from '@polkadot/util/bundle';
import {TypeInterfaces} from './typeInterfaces';

export const Boolean = {
  fieldScalar: 'Boolean',
  tsType: 'boolean',
  sequelizeType: 'boolean',
  hashCode(data: any): Uint8Array | undefined {
    return Buffer.from(numberToU8a(data ? 1 : 0));
  },
} as TypeInterfaces;
