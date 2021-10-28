// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {DataTypes} from 'sequelize';
// Typescript type, used in Codegen template interface
export type TypeScalar = 'string' | 'number' | 'bigint' | 'Date' | 'boolean';
// used in Common/graphql/types Entity types
export type FieldScalar = 'ID' | 'Int' | 'BigInt' | 'String' | 'Date' | 'Boolean' | 'Bytes' | 'Float';
// Sequelize type
export type SequelizeTypes =
  | 'text'
  | 'integer'
  | 'numeric'
  | 'timestamp'
  | 'boolean'
  | DataTypes.BlobDataTypeConstructor
  | DataTypes.FloatDataTypeConstructor
  | DataTypes.AbstractDataTypeConstructor;
// Types we supported
export type GenericTypes = 'BigInt' | 'Boolean' | 'Bytes' | 'Date' | 'Float' | 'ID' | 'Int' | 'Json' | 'String';

export interface TypeInterfaces {
  tsType: TypeScalar | undefined;
  fieldScalar: FieldScalar | undefined;
  sequelizeType: SequelizeTypes | undefined;
  hashCode(data: any): Uint8Array | undefined;
  hasTsTypes(): boolean;
  hasFieldScalar(): boolean;
  hasSequelizeType(): boolean;
  toTsTypes(): TypeScalar | undefined;
  toFieldScalar(): FieldScalar | undefined;
  toSequelizeType(): SequelizeTypes | undefined;
  toHashCode(data: any): Uint8Array | undefined;
}
