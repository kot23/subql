// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {DataTypes} from 'sequelize';
// Typescript type, used in Codegen template interface
type TypeScalar = 'string' | 'number' | 'bigint' | 'Date' | 'boolean';
// used in Common/graphql/types Entity types
type FieldScalar = 'ID' | 'Int' | 'BigInt' | 'String' | 'Date' | 'Boolean' | 'Bytes' | 'Float';
// Sequelize type
type GraphqlTypes =
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
  toTsType: TypeScalar | undefined;
  toFieldScalar: FieldScalar | undefined;
  toGraphqlType: GraphqlTypes | undefined;
}
