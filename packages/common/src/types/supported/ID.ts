// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {TypeInterfaces} from './typeInterfaces';

export const ID = {
  toFieldScalar: 'ID',
  toTsType: 'string',
  toSequelizeType: 'text',
  toStoreOperation(data: any): Uint8Array | undefined {
    return Buffer.from(data.toString());
  },
} as TypeInterfaces;
