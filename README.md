# React + TypeScript + Vite + Vitest

This is a full working template of React working with Vitest.

## What was added

- Added `./package.json` with
  ```json
  {
    "scripts": {
      "test": "vitest",
      "test:ui": "vitest --ui",
      "test:coverage": "vitest run --coverage"
    },
    "devDependencies" : {
      "@testing-library/dom":"*",
      "@testing-library/jest-dom":"*",
      "@testing-library/react":"*",
      "@testing-library/user-event":"*",
      "@vitest/ui":"*",
      "jsdom":"*",
      "vitest":"*"
    }
  }
  ```
- Added `./src/App.test.jsx`
- Added `./vite.setup.ts`
- Updated `./vite.config.ts` with
  ```ts
    /// <reference types="vitest" />
    /// <reference types="vite/client" />
    
    ...
    
    export default defineConfig({
        ...
  
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './vitest.setup.ts',
            css: true,
        },
    })
  ```
- Updated `./tsconfig.json` with 
  ```json
  {
    "compilerOptions": {
        ...
  
        "types": ["vitest/globals"]
    },
    "include": ["src", "@testing-library/jest-dom", "vitest.setup.ts"],
  } 
  ```
  
## Note

You may need to install `pnpm install -D @vitest/coverage-v8` if you want to run `test:coverage`