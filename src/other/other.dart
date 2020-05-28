import 'package:todo_reporter/todo_reporter.dart';
import 'package:node_interop/util.dart';
import 'package:node_interop/node.dart';
import 'package:js/js.dart';

part 'other.g.dart';

@ExposeClass()
class OtherThing {
  @ExposeMethod()
  void otherMethod() {
    print('OtherThing otherMethod');
  }

  @ExposeMethod()
  DifferentThing otherMethod2(String args) {
    return new DifferentThing(args); // TODO: continue
  }

  void otherMethod3() {}
}

@ExposeClass()
class DifferentThing {
  String someProp;
  String _privateProp;

  DifferentThing(this.someProp, {String privateProp}) : _privateProp = privateProp;

  DifferentThing.kek(this.someProp);

  @ExposeMethod()
  String otherMethod([String optionalPositional]) {
    print("optionalPositional $optionalPositional");
    this._privateProp = this.someProp;
    return this.someProp;
  }

  @ExposeMethod()
  String otherMethod2(String kek, {String named}) {
    print(kek);
    print("named: ${named}");
    print(this._privateProp);
    return 'DifferentThing otherMethod2';
  }

  void otherMethod3() {}
}
