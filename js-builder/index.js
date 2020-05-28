import { schema } from './schema'
import { ClassTemplate, Method } from './src/class-template';
// console.log(schema, ClassTemplate)
Object.keys(schema).forEach(classItem => {
  const item = new ClassTemplate(classItem, schema[classItem])
  schema[classItem].methodsList.forEach(element => {
    item.addMethod(element)
  });
  console.log(item.toString())
})

// const a = new ClassTemplate('OtherThing', schema['OtherThing'])
// const OtherThing = schema[a.className]

// OtherThing.methodsList.forEach(element => {
//   a.addMethod(element)
// });
// console.log(a.toString())