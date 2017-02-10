# Vertex

angularjs-vertex is a seed repository for angularjs and webpack. For angular (2.0+),
see [angular-vertex](https://github.com/brittanymoore/angular-vertex).

This repository has multiple branches with alternate configurations of the seed.

The master branch contains:
* angularJS (1.6.1)
* webpack (2.2.0)
* component-based routing with angular-ui-router
* ES6 support with babel
* unit testing with karma
* end-to-end testing with protractor

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

### Mocking

Vertex comes with a 'mock' module that provides backendless development for the rest of the application. It 
currently contains mocks for the To-do module that can be used as a starting point. These mocks are also used
in the e2e tests for the To-do module.

By default, the services mock SharePoint REST API. You can substitute any other backend by updating
the web service calls and helpers in todo/todo.service.js and mock/mock.service.js. 








