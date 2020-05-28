const dartToTsTypeMapping = {
  'String': 'string',
  'bool': 'boolean',
  'double': 'number',
  'int': 'number',
  'void': 'void'
}

const makePositionalArgs = (positionalArgs = [], withType = true) => {

  return positionalArgs.map(arg => {
    const tsType = dartToTsTypeMapping[arg.type] || 'any'
    return `${arg.name}${withType ?  `: ${tsType}` : ''}`;
  }) 
}

export class Method {
  constructor(method, body) {
    if (!method) {
      return;
    }

    this.name = method.name; // string
    this.positionalArgs = method.positionalArgs; // list {name, type}
    this.namedArgs = method.namedArgs; // list {name, type}
    this.returnType = method.returnType; //string

    if (body) {
      this.body = body; // string
    } else {
      const returnType = this.returnType;
      this.body = `  ${returnType || returnType === 'void' ? '' : 'return'} this._methods['${this.name}'](${makePositionalArgs(this.positionalArgs, false)})`
    }
  }

  toString() {
    const args = makePositionalArgs(this.positionalArgs)
    const namedMap = {}; // TODO
    const body = this.body;
    const returnType = this.returnType ? dartToTsTypeMapping[this.returnType] || this.returnType : ''

    return [
      this.name,
      '(',
      args.join(', '),
      ')',
      returnType ? `: ${returnType} ` : ' ',
      '{\n',
      body,
      '\n}\n'
    ].join('')

  }
}

export class ClassTemplate {
  constructor(className, schema) {
    this.className = className;
    this.methods = [];
    this.defaultConstructorMethod = schema.defaultConstructorMethod;
    this.defaultConstructorName = schema.defaultConstructorName;
    this.methodMapperName = schema.methodMapperName;
  }

  addMethod(method) {
    const methodEnsured = new Method(method);

    if (methodEnsured) {
      this.methods.push(methodEnsured);
    }
  }

  toString() {
    const header = `class ${this.className} {\n`;
    const instanceDefinition = 'private _instance;';
    const methodsWrapperDefinition = 'private _methods: Record<string, Function>;';
    const constructorBody = `
  this._instance = node_bind.${this.defaultConstructorName}(${makePositionalArgs(this.defaultConstructorMethod.positionalArgs, false).join(', ')});
  this._methods = node_bind.OtherThingMethodsMapper(this._instance);`;
    const constructor = new Method(this.defaultConstructorMethod, constructorBody);
    const footer = "\n}";

    return [
      header,
      instanceDefinition,
      methodsWrapperDefinition,
      constructor.toString(),
      this.methods.map((method) => method.toString()).join('\n'),
      footer,
    ].join("\n");
  }
}
