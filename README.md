# Vertex

angularjs-vertex is a seed repository for angularjs and webpack. For angular (2.0+),
see [angular-vertex](https://github.com/brittanymoore/angular-vertex).

Check out my [todo demo] for a more robust example including some functionality, tests, and mocking.

The master branch contains:
* angularJS
* webpack
* sass
* component-based routing (@uirouter/angularjs)
* ES6 support (babel)
* unit testing with karma
* end-to-end testing with protractor
* linting with eslint

## Getting Started

### Get the Code

```
git clone https://github.com/brittanymoore/angularjs-vertex.git
cd angularjs-vertex
npm install
```

### Launch the App

To run the app in development mode:

```
npm run start
```

Once the server is running, open a browser and navigate to localhost:3000.

### Build

| Build Mode        | Command        | Output   | Uglify |
| ----------------- | -------------- | -------  | ------ |
| Dev               | build          | dev      | false  |
| Prod              | build:prod     | dist     | true   |

Each mode has a start command that launches webpack-dev-server.

```
npm run start
npm run start:prod
```

### Test

Support is built-in for unit testing with Karma and end-to-end testing with Protractor (both use Jasmine).

Unit tests should be added to a file named **.spec.js somewhere in the app directory tree. To run the tests:

```
npm run test:unit
```

E2E tests should be added to a file named **.e2e.js somewhere in the app directory tree. To run the tests:

```
// first-time setup
webdriver-manager update

// run these commands in separate terminals
npm run start
npm run test:e2e
```
