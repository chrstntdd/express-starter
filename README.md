# express-starter

Bare bones Express JSON API starter kit. Authored in TypeScript.

## Up and Running

### 1. Install dependencies

```
yarn install
```

### 2. Adjust typescript output

Depending on your OS, this step will vary. For Windows users, ajust the path of the `build-win` script in `package.json` to point to your project directory's `tsconfig.json` file. For MacOS users, if you're using Visual Studio Code, within the editor, just run the default build task (`CMD+Shift+B`) which will compile your typescript for you automatically. If you're using a different editor, just run `yarn build or npm run build` to start the compiler in watch mode.

### 3. Set environment variables

It's never a good idea to reveal authentication credentials, so be sure to place database config variables and things of the like withing a `.env` file in the root of your project directory.


### 4. Start the server

With your files successfully compiled to JavaScript, simply run `yarn start` to start the server. If you'd like to watch for file changes instead, use `yarn start` to spin up the server in watch mode.


### 5. Checkout an endpoint

The default configuration exposes just one endpoint at the path [http://localhost:3000/api/v1/something](http://localhost:3000/api/v1/something)
