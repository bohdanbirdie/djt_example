// import 'package:node_bind/node_modules/@types/shortid.dart';
import 'package:json_to_dart/syntax.dart' as syntax;
import "package:node_preamble/preamble.dart" as preamble;

import 'package:js/js.dart';
import 'package:node_interop/node.dart';
import 'package:node_interop/util.dart';

export 'package:json_to_dart/syntax.dart';


createInstance(String name) {
  
  var instance = new syntax.ClassDefinition(name, false);

  return jsify({'addField': allowInterop(instance.addField), 'instance': instance });
}

void main() {
  // eval('');
  preamble.getPreamble();
  // var a = new Kek('123');
  // print(a);
  // print("kek");
  // var b = new ShortId();
  // print(shortid());
  // print(allowInterop(shortid.generate));
  print(allowInterop(createInstance));
  setExport('createInstance', allowInterop(createInstance));
  setExport('ClassDefinition', syntax.ClassDefinition);
}


