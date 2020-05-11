import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';
import internal from 'rollup-plugin-internal';
import alias from '@rollup/plugin-alias';
import path from 'path';

let modulePaths = {
  "dart_sdk": "packages/$sdk/dev_compiler/common/dart_sdk",
  "packages/grapheme_splitter/grapheme_splitter": "packages/grapheme_splitter/grapheme_splitter.ddc_node",
  "packages/js/js": "packages/js/js.ddc_node",
  "packages/js/js_util": "packages/js/js_util.ddc_node",
  "packages/json_ast/error": "packages/json_ast/error.ddc_node",
  "packages/json_ast/json_ast": "packages/json_ast/json_ast.ddc_node",
  "packages/json_ast/location": "packages/json_ast/location.ddc_node",
  "packages/json_ast/parse": "packages/json_ast/parse.ddc_node",
  "packages/json_ast/parse_error_types": "packages/json_ast/parse_error_types.ddc_node",
  "packages/json_ast/tokenize": "packages/json_ast/tokenize.ddc_node",
  "packages/json_ast/tokenize_error_types": "packages/json_ast/tokenize_error_types.ddc_node",
  "packages/json_ast/utils/substring": "packages/json_ast/utils/substring.ddc_node",
  "packages/json_to_dart/helpers": "packages/json_to_dart/helpers.ddc_node",
  "packages/node_interop/buffer": "packages/node_interop/buffer.ddc_node",
  "packages/node_interop/events": "packages/node_interop/events.ddc_node",
  "packages/node_interop/js": "packages/node_interop/js.ddc_node",
  "packages/node_interop/module": "packages/node_interop/module.ddc_node",
  "packages/node_interop/timers": "packages/node_interop/timers.ddc_node",
  "packages/node_interop/util": "packages/node_interop/util.ddc_node",
  "packages/node_preamble/preamble": "packages/node_preamble/preamble.ddc_node",
  "source/main": "main.ddc_node"
 };

 
 
export default {
  input: './build/source/main.dart.js',
  output: {
    file: './dist/bundle.min.js',
    format: 'cjs',
    name: 'bundle'
},
  plugins: [
    resolve(),
    
    
    commonjs(),
    autoExternal(),
    {
      resolveId: function (id, code) {
          console.log(code)
          console.log(id)
          console.log(__filename)
          
          if (id in modulePaths) {
            console.log('IN')
            var parts = __filename.split(path.sep).slice(0,-1);
            parts.push('build')
            parts.push('source')
            parts.push(modulePaths[id]);
            var newId = parts.join(path.sep);
            console.log('newId', newId)
            console.log('\n')
            return newId + '.js';
          }
          console.log('\n')
      }
  },
  ],
};