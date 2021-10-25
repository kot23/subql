// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {numberToU8a} from '@polkadot/util/bundle';
import {DataTypes} from 'sequelize';
import {TypeInterfaces} from './typeInterfaces';

export const Float = {
  toFieldScalar: 'Float',
  toTsType: 'number',
  toSequelizeType: DataTypes.FLOAT,
  toHashCode(data: any): Uint8Array | undefined {
    return Buffer.from(data.toString()); //TODO, check if this is proper way to handle float
  },
} as TypeInterfaces;
