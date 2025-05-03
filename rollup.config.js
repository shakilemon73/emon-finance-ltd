import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import html from '@rollup/plugin-html';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js', // Path to your React entry file
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    postcss(),
    html({
      template: ({ attributes, files, meta, publicPath, title }) => `
        <!DOCTYPE html>
        <html ${attributes.html}>
          <head>
            ${meta}
            <title>${title}</title>
            ${files.css.map(file => `<link rel="stylesheet" href="${publicPath}${file.fileName}">`).join('\n')}
          </head>
          <body>
            <div id="root"></div>
            ${files.js.map(file => `<script src="${publicPath}${file.fileName}"></script>`).join('\n')}
          </body>
        </html>
      `
    }),
    terser()
  ]
};