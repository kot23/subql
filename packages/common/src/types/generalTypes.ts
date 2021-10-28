// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as supportedTypes from './supported';
import {GenericTypes, TypeInterfaces, TypeScalar} from './supported/typeInterfaces';

export function isGeneralTypes(type: string): boolean {
  return Object.keys(supportedTypes).findIndex((k) => k === type) > -1;
}

export function getTypeByScalarName(type: string): TypeInterfaces {
  if (!isGeneralTypes(type)) {
    throw new Error(`${type} is not supported type`);
  } else {
    const [, typeInterface] = Object.entries(supportedTypes).find((value) => {
      const [typeString] = value;
      return typeString === type;
    }) as [GenericTypes, TypeInterfaces];
    typeInterface.hasTsTypes = () => typeInterface.tsType !== undefined;
    typeInterface.hasFieldScalar = () => typeInterface.fieldScalar !== undefined;
    typeInterface.hasSequelizeType = () => typeInterface.sequelizeType !== undefined;
    typeInterface.toTsTypes = () => {
      if (!typeInterface.hasTsTypes()) {
        throw new Error(`Type ${this.type} associated typescript type is not supported`);
      }
      return typeInterface.tsType;
    };
    typeInterface.toFieldScalar = () => {
      if (!typeInterface.hasFieldScalar) {
        throw new Error(`Type ${this.type} associated entity type is not supported`);
      }
      return typeInterface.fieldScalar;
    };
    typeInterface.toSequelizeType = () => {
      if (!typeInterface.hasSequelizeType) {
        throw new Error(`Type ${this.type} associated sequelize type is not supported`);
      }
      return typeInterface.sequelizeType;
    };
    typeInterface.toHashCode = (data: any) => {
      if (typeInterface.hashCode === undefined) {
        return Buffer.from(JSON.stringify(data));
      }
      return typeInterface.hashCode(data);
    };
    return typeInterface;
  }
}
