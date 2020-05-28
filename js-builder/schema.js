// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// SchemaGenerator
// **************************************************************************

const schema = {
  OtherThing: {
    defaultConstructorName: "OtherThingDefaultConstructor",
    defaultConstructorMethod: {
      name: "constructor",
      returnType: "",
      positionalArgs: [],
      namedArgs: [],
    },
    methodsMapperName: "OtherThingMethodsMapper",
    methodsList: [
      { name: "otherMethod", returnType: "void", positionalArgs: [] },
      {
        name: "otherMethod2",
        returnType: "DifferentThing",
        positionalArgs: [{ name: "args", type: "String" }],
      },
    ],
    namedArgs: [],
  },
  DifferentThing: {
    defaultConstructorName: "DifferentThingDefaultConstructor",
    defaultConstructorMethod: {
      name: "constructor",
      returnType: "",
      positionalArgs: [{ name: "someProp", type: "String" }],
      namedArgs: [],
    },
    methodsMapperName: "DifferentThingMethodsMapper",
    methodsList: [
      {
        name: "otherMethod",
        returnType: "String",
        positionalArgs: [{ name: "optionalPositional", type: "String" }],
      },
      {
        name: "otherMethod2",
        returnType: "String",
        positionalArgs: [{ name: "kek", type: "String" }],
      },
    ],
    namedArgs: [],
  },
};

module.exports = { schema };
