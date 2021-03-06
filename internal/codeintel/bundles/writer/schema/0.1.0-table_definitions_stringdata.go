// Code generated by stringdata. DO NOT EDIT.

package schema

// TableDefinitions is the content of the file "0.1.0-table_definitions.sql".
const TableDefinitions = `CREATE TABLE "meta" (
    "id" integer PRIMARY KEY NOT NULL,
    "lsifVersion" text NOT NULL,
    "sourcegraphVersion" text NOT NULL,
    "numResultChunks" integer NOT NULL
);

CREATE TABLE "documents" (
    "path" text PRIMARY KEY NOT NULL,
    "data" blob NOT NULL
);

CREATE TABLE "resultChunks" (
    "id" integer PRIMARY KEY NOT NULL,
    "data" blob NOT NULL
);

CREATE TABLE "definitions" (
    "id" integer PRIMARY KEY NOT NULL,
    "scheme" text NOT NULL,
    "identifier" text NOT NULL,
    "documentPath" text NOT NULL,
    "startLine" integer NOT NULL,
    "endLine" integer NOT NULL,
    "startCharacter" integer NOT NULL,
    "endCharacter" integer NOT NULL
);

CREATE TABLE "references" (
    "id" integer PRIMARY KEY NOT NULL,
    "scheme" text NOT NULL,
    "identifier" text NOT NULL,
    "documentPath" text NOT NULL,
    "startLine" integer NOT NULL,
    "endLine" integer NOT NULL,
    "startCharacter" integer NOT NULL,
    "endCharacter" integer NOT NULL
);
`
