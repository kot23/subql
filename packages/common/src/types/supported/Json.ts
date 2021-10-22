// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {DataTypes} from 'sequelize';
import {TypeInterfaces} from './typeInterfaces';

export const Json = {
  toFieldScalar: undefined,
  toTsType: undefined,
  toGraphqlType: DataTypes.JSONB,
} as TypeInterfaces;
