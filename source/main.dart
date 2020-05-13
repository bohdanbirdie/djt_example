// import 'package:node_bind/node_modules/@types/shortid.dart';
import 'package:json_to_dart/syntax.dart' as syntax;
import "package:node_preamble/preamble.dart" as preamble;

import 'package:js/js.dart';
// import 'package:node_interop/node.dart';
import 'package:node_interop/util.dart';

export 'package:json_to_dart/syntax.dart';

@JS()
class Exports {
  external set ClassDefinition(Function function);
  external set TypeDefinition(Function function);
  
}

@JS()
external Exports get exports;

ClassDefinition(String name) {
  var instance = new syntax.ClassDefinition(name, false);
  // print(instance.hashCode);

  return jsify({
    'instance': instance,
    'addField': allowInterop(instance.addField),
    'toString': allowInterop(instance.toString)
  });
}

TypeDefinition(String name) {
  var instance = new syntax.TypeDefinition(name);
  // print(instance.hashCode);

  return jsify({
    'instance': instance,
  });
}

void main() {
  preamble.getPreamble();

  exports.ClassDefinition = allowInterop(ClassDefinition);
  exports.TypeDefinition = allowInterop(TypeDefinition);
}
