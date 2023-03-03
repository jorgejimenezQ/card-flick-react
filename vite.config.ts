import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'

const { EsLinter, linterPlugin } = EsLint
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src/component/**/*.{ts,tsx}'],
    }),
    react(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'component/index.ts'),
      name: 'card-flick-react',
      formats: ['es', 'umd'],
      fileName: (format) => `card-flick-react.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
        scopeBehaviour: 'local',
      },
    },
  },
}))
