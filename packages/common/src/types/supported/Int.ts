// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {numberToU8a} from '@polkadot/util';
import {TypeInterfaces} from './typeInterfaces';

export const Int = {
  toFieldScalar: 'Int',
  toTsType: 'number',
  toSequelizeType: 'integer',
  toHashCode(data: any): Uint8Array | undefined {
    return numberToU8a(data.toString());
  },
} as TypeInterfaces;
