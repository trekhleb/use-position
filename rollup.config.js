import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

const config = {
  input: 'src/usePosition.js',
  output: {
    format: 'umd',
    name: 'dist/usePosition.js',
    globals: {
      react: "React",
    }
  },
  external: ['react'],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    uglify(),
  ],
};

export default config;
