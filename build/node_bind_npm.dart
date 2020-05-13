import 'dart:typed_data';
import 'package:js/js.dart';
import "../source/main.dart" as module_main;
@JS()
external _Exports get exports;

@JS()
class _Exports {
}
void main() {
Uint8List(0);
module_main.main();
}
Function _wrapMain(Function main) {
  if (main is Object Function()) {
    return allowInterop((_) => main());
  } else {
    return allowInterop(
        (args) => main(List<String>.from(args as List<Object>)));
  }
}
