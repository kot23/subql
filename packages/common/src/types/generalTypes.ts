// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as supportedTypes from './supported';
import {GenericTypes} from './supported/typeInterfaces';

export class GeneralTypes {
  readonly type: GenericTypes;
  readonly typeAttribute;

  constructor(type: any) {
    // const key = Object.keys(supportedTypes).findIndex((k)=>k === this.type)
    // this.typeAttribute = supportedTypes.ID;
    // TODO, fix this implementation
    this.type = type as GenericTypes;
    switch (this.type) {
      default: {
        throw new Error(`${this.type} is not supported type`);
      }
      case 'ID': {
        this.typeAttribute = supportedTypes.ID;
        break;
      }
      case 'Float': {
        this.typeAttribute = supportedTypes.Float;
        break;
      }
      case 'BigInt': {
        this.typeAttribute = supportedTypes.BigInt;
        break;
      }
      case 'Bytes': {
        this.typeAttribute = supportedTypes.Bytes;
        break;
      }
      case 'Boolean': {
        this.typeAttribute = supportedTypes.Boolean;
        break;
      }
      case 'Json': {
        this.typeAttribute = supportedTypes.Json;
        break;
      }
      case 'Date': {
        this.typeAttribute = supportedTypes.Date;
        break;
      }
      case 'Int': {
        this.typeAttribute = supportedTypes.Int;
        break;
      }
      case 'String': {
        this.typeAttribute = supportedTypes.String;
        break;
      }
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
