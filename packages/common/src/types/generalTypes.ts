// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as supportedTypes from './supported';
import {GenericTypes, TypeInterfaces} from './supported/typeInterfaces';

export function isGeneralTypes(type: string): boolean {
  return Object.keys(supportedTypes).findIndex((k) => k === type) > -1;
}

export class GeneralTypes {
  readonly type: GenericTypes;
  readonly typeAttribute: TypeInterfaces;

  constructor(type: string) {
    if (!isGeneralTypes(type)) {
      throw new Error(`${type} is not supported type`);
    } else {
      [this.type, this.typeAttribute] = Object.entries(supportedTypes).find((value) => {
        const [typeString] = value;
        return typeString === type;
      }) as [GenericTypes, TypeInterfaces];
    }
  }

  hasTsTypes(): boolean {
    return this.typeAttribute.toTsType !== undefined;
  }

  hasFieldScalar(): boolean {
    return this.typeAttribute.toFieldScalar !== undefined;
  }

  hasSequelizeType(): boolean {
    return this.typeAttribute.toSequelizeType !== undefined;
  }

  transformTsTypes() {
    if (!this.hasFieldScalar) {
      throw new Error(`Type ${this.type} associated typescript type is not supported`);
    }
    return this.typeAttribute.toTsType;
  }

  transformFieldScalar() {
    if (!this.hasFieldScalar) {
      throw new Error(`Type ${this.type} associated entity type is not supported`);
    }
    return this.typeAttribute.toFieldScalar;
  }

  transformSequelizeType() {
    if (!this.hasSequelizeType) {
      throw new Error(`Type ${this.type} associated sequelize type is not supported`);
    }
    return this.typeAttribute.toSequelizeType;
  }

  transformStoreOperation(data: any) {
    if (this.typeAttribute.toStoreOperation === undefined) {
      return Buffer.from(JSON.stringify(data));
    }
    return this.typeAttribute.toStoreOperation(data);
  }
}
