const node_bind = require('./build/npm/node_bind.dart.js')

const main = node_bind.ClassDefinition("Main")
const type = node_bind.TypeDefinition("KekType")
main.addField("someField", type.instance)
console.log(main.toString())