import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const config = {
  input: ['src/index.ts', 'src/cli.ts'],
  output: [
    {
      esModule: true,
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true
    },
    {
      esModule: true,
      file: 'dist/cli.js',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [typescript(), nodeResolve(), commonjs()]
};

export { config as default };
