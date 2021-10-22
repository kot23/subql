// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {DataTypes} from 'sequelize';
import {TypeInterfaces} from './typeInterfaces';

export const Bytes = {
  toFieldScalar: 'Bytes',
  toTsType: 'string',
  toGraphqlType: DataTypes.BLOB,
} as TypeInterfaces;
