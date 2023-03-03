// vite.config.ts
import react from "file:///Users/jorgejimenez/Documents/web-dev/react-libs/card-flick-react/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "node:path";
import { defineConfig } from "file:///Users/jorgejimenez/Documents/web-dev/react-libs/card-flick-react/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/jorgejimenez/Documents/web-dev/react-libs/card-flick-react/node_modules/vite-plugin-dts/dist/index.mjs";
import EsLint from "file:///Users/jorgejimenez/Documents/web-dev/react-libs/card-flick-react/node_modules/vite-plugin-linter/dist/index.js";
import tsConfigPaths from "file:///Users/jorgejimenez/Documents/web-dev/react-libs/card-flick-react/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var peerDependencies = {
  react: "16.8.0 || >=17.x",
  "react-dom": "16.8.0 || >=17.x"
};

// vite.config.ts
var __vite_injected_original_dirname = "/Users/jorgejimenez/Documents/web-dev/react-libs/card-flick-react";
var { EsLinter, linterPlugin } = EsLint;
var vite_config_default = defineConfig((configEnv) => ({
  plugins: [
    tsConfigPaths(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })]
    }),
    dts({
      include: ["src/component/**/*.{ts,tsx}"]
    }),
    react()
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src", "component/index.ts"),
      name: "card-flick-react",
      formats: ["es", "umd"],
      fileName: (format) => `card-flick-react.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    },
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
        scopeBehaviour: "local"
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvam9yZ2VqaW1lbmV6L0RvY3VtZW50cy93ZWItZGV2L3JlYWN0LWxpYnMvY2FyZC1mbGljay1yZWFjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2pvcmdlamltZW5lei9Eb2N1bWVudHMvd2ViLWRldi9yZWFjdC1saWJzL2NhcmQtZmxpY2stcmVhY3Qvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2pvcmdlamltZW5lei9Eb2N1bWVudHMvd2ViLWRldi9yZWFjdC1saWJzL2NhcmQtZmxpY2stcmVhY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuaW1wb3J0IEVzTGludCBmcm9tICd2aXRlLXBsdWdpbi1saW50ZXInXG5pbXBvcnQgdHNDb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xuXG5jb25zdCB7IEVzTGludGVyLCBsaW50ZXJQbHVnaW4gfSA9IEVzTGludFxuaW1wb3J0ICogYXMgcGFja2FnZUpzb24gZnJvbSAnLi9wYWNrYWdlLmpzb24nXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKGNvbmZpZ0VudikgPT4gKHtcbiAgcGx1Z2luczogW1xuICAgIHRzQ29uZmlnUGF0aHMoKSxcbiAgICBsaW50ZXJQbHVnaW4oe1xuICAgICAgaW5jbHVkZTogWycuL3NyY30vKiovKi57dHMsdHN4fSddLFxuICAgICAgbGludGVyczogW25ldyBFc0xpbnRlcih7IGNvbmZpZ0VudiB9KV0sXG4gICAgfSksXG4gICAgZHRzKHtcbiAgICAgIGluY2x1ZGU6IFsnc3JjL2NvbXBvbmVudC8qKi8qLnt0cyx0c3h9J10sXG4gICAgfSksXG4gICAgcmVhY3QoKSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycsICdjb21wb25lbnQvaW5kZXgudHMnKSxcbiAgICAgIG5hbWU6ICdjYXJkLWZsaWNrLXJlYWN0JyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGNhcmQtZmxpY2stcmVhY3QuJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbLi4uT2JqZWN0LmtleXMocGFja2FnZUpzb24ucGVlckRlcGVuZGVuY2llcyldLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgIG1vZHVsZXM6IHtcbiAgICAgICAgbG9jYWxzQ29udmVudGlvbjogJ2NhbWVsQ2FzZU9ubHknLFxuICAgICAgICBzY29wZUJlaGF2aW91cjogJ2xvY2FsJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pKVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxWCxPQUFPLFdBQVc7QUFDdlksU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxtQkFBbUI7Ozs7Ozs7OztBQUwxQixJQUFNLG1DQUFtQztBQU96QyxJQUFNLEVBQUUsVUFBVSxhQUFhLElBQUk7QUFJbkMsSUFBTyxzQkFBUSxhQUFhLENBQUMsZUFBZTtBQUFBLEVBQzFDLFNBQVM7QUFBQSxJQUNQLGNBQWM7QUFBQSxJQUNkLGFBQWE7QUFBQSxNQUNYLFNBQVMsQ0FBQyxzQkFBc0I7QUFBQSxNQUNoQyxTQUFTLENBQUMsSUFBSSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFBQSxJQUN2QyxDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDRixTQUFTLENBQUMsNkJBQTZCO0FBQUEsSUFDekMsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxPQUFPLG9CQUFvQjtBQUFBLE1BQ3JELE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxvQkFBb0I7QUFBQSxJQUM1QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLEdBQUcsT0FBTyxLQUFpQixnQkFBZ0IsQ0FBQztBQUFBLE1BQ3ZELFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxRQUNQLGtCQUFrQjtBQUFBLFFBQ2xCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
