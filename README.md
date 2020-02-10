# WijmoExamplesPlayground

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


---


# project to test [Angular Playground - Setup with Angular CLI](https://angularplayground.it/docs/getting-started/angular-cli)

## Setup with Angular CLI

-> branch steps/setupAngularCli

1. run `ng add angular-playground`
   1. it adds
      1. `./angular-playground.json` -> with `sourceRoots ` for src dir and `appName` for Angular app's name, as specified in our angular.json.
      2. `./src/main.playground.ts` -> A New Main Entry File
          ```typescript
              PlaygroundModule
              .configure({
                selector: 'app-root', // <- set your main component's selector
                overlay: false,
                modules: []
              });
          ```
        1. it modifies
           1. `./angular.json` adding
           ```json
            "projects": {
              ...
              "playground": { ... }
            }
           ```

2. `npm run playground` -> Navigate to `localhost:4201`

---

## Sandboxing Components

-> branch `steps/sandboxingComponents`

1. create a test component
2. create a sandbox file
   1. `ng generate angular-playground:sandbox [path]/[component name]` -> it creates a father component where to test our child component
   NB:  has option `--flat` (optional, defaults to false): indicate whether a new directory should be created to hold the generated sandbox file
