import 'dart:convert';
import 'dart:io';

import 'package:cli_pkg/cli_pkg.dart' as pkg;
import 'package:grinder/grinder.dart';

void main(List<String> args) {
  pkg.humanName = "Node Bind";
  pkg.jsModuleMainLibrary = "source/main.dart";
  pkg.standaloneName = "node-bind";
  pkg.npmPackageJson =
      json.decode(File("package/package.json").readAsStringSync())
          as Map<String, Object>;
  // pkg.jsDevFlags = ['-O0'];

  pkg.addAllTasks();
  grind(args);
}

