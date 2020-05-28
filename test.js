const node_bind = require('./build/npm/node_bind.dart.js')
// const schema = require('./build/npm/schema.js')
// console.log(Object.keys(node_bind))
// const instance = node_bind.OtherThingDefaultConstructor();
// console.log(instance)
// const methods = node_bind.OtherThingMethodsMapper(instance)
// methods.otherMethod()
const differentThing = node_bind.DifferentThingDefaultConstructor("hello value", { privateProp: "testing some props"});
console.log(differentThing)
const differentThingMethods = node_bind.DifferentThingMethodsMapper(differentThing);
// console.log(differentThingMethods.otherMethod2("2"));
// differentThing._privateProp = 123
console.log(differentThingMethods.otherMethod("optional"));
// console.log(differentThingMethods.otherMethod2("heh", { named: "this is named"}));
// console.log(differentThing)

// console.log(schema);

// class OtherThing {
//   constructor() {
    // this._instance = node_bind.OtherThingDefaultConstructor();
    // this._methods = node_bind.OtherThingMethodsMapper(this._instance);
//     Object.keys(this._methods).forEach((key) => {
//       this[key] = this._methods[key]
//     })
//   }
// }

// const other = new OtherThing();
// console.log(other.otherMethod2())
