// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'other.dart';

// **************************************************************************
// ExposeGenerator
// **************************************************************************

OtherThing OtherThingDefaultConstructor([namedArgs = const {}]) {
  final dartified = dartify(namedArgs);
  return OtherThing();
}

OtherThingMethodsMapper(OtherThing instance) {
  return jsify({
    'otherMethod': allowInterop(instance.otherMethod),
    'otherMethod2': allowInterop(instance.otherMethod2),
    '#instance': instance
  });
}
//asset:node_bind/src/other/other.dart
//

DifferentThing DifferentThingDefaultConstructor(String someProp,
    [namedArgs = const {}]) {
  final dartified = dartify(namedArgs);
  return DifferentThing(someProp, privateProp: dartified['privateProp']);
}

DifferentThingMethodsMapper(DifferentThing instance) {
  return jsify({
    'otherMethod': allowInterop(instance.otherMethod),
    'otherMethod2': allowInterop((String kek, [namedArgs = const {}]) {
      final dartified = dartify(namedArgs);
      return instance.otherMethod2(kek, named: dartified['named']);
    }),
    '#instance': instance
  });
}
//asset:node_bind/src/other/other.dart
//
