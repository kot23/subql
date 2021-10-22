// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as supportedTypes from './supported';
import {GenericTypes} from './supported/typeInterfaces';

export class GeneralTypes {
  readonly type: GenericTypes;
  readonly typeAttribute;

  constructor(type: any) {
    this.type = type as GenericTypes;
    // const key = Object.keys(supportedTypes).findIndex((k)=>k === this.type)
    // this.typeAttribute = supportedTypes.ID;
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

  hasGraphqlType(): boolean {
    return this.typeAttribute.toGraphqlType !== undefined;
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

  transformGraphqlType() {
    if (!this.hasGraphqlType) {
      throw new Error(`Type ${this.type} associated graphql type is not supported`);
    }
    return this.typeAttribute.toGraphqlType;
  }
}
