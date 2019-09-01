import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  preserveSymlinks: true,
	input: ['tab-nav.js'],
	output: {
		file: 'build/tab-nav.js',
    format: 'es',
		sourcemap: true
	},
	plugins: [
    resolve(),
    babel()
  ]
};