# Co2FeelingsForSectors

This challenge is completed by referencing the mockup provided in [this link.](https://ninjastorage.blob.core.windows.net/htmlexport/1Q8FKHx/7a6e7638-f522-78bd-6a6c-342006bc0f94.html)

## Checklist From The Challenge Specification
**Basics:**
- [x] Sector is selected from a predefined list
- [x] CO2 should be a non-negative number
- [x] Feelings should only be entered with single emojis
- [x] Submit should add the input to the table
- [x] Only allow submitting if the form is filled correctly
- [x] When you reload the page it’s ok for the list to be empty

**Extra:**
- [x] Persist table through page reloads
- [ ] Testing
- [x] Different routes for adding items and showing list
- [x] Editing rows in table
- [x] Removing rows from table
- [x] Deployed to a static URL

## Architecture

### Simple - No description

The simple foldering architecture of the application is as follows:
- app
  - modules
    - pages
    - components
    - other
  - components
    - ...list of non-module components
  - services
    - data
    - utils
  - models
    - response
    - ...list of application models
  - scss
- shared
  - state

### Simple - With description

The simple architecture with short descriptions is as follows:

- app
  - modules
  <br />
  ```Anything that is packed as a module```
    - pages
    <br />
    ```Glue for components, no business logic```
    - components
    <br />
    ```Components that needs to be served as a module to be used in several other modules```
    - other
    <br />
    ```Any other module that doesn't fit above description```
  - components
    - ...list of non-module components
  - services
    - data
    <br />
    ```Services with connection to any remote server / backend```
    - utils
    <br />
    ```Services containing functions which concern only in-app features and does not connect with anything outside the app```
  - models
  <br />
  ```Data models to be used in the app```
    - response
    <br />
    ```Data models to be fetched directly from the APIs```
    - ...list of application models
    <br />
    ```Data models concerning UI elements and frontend application's data types, without considering API data types```
  - scss
  <br />
  ```Central styling```
- shared
  - state
  <br />
  ```State that is not feature-based and shared throughout the app```


## Mentions:
- Interfaces are used over classes as models. In a bigger app classes should be used to represent the models and they should be processed by mappers when inserting remotely-fetched json data into the frontend application.

- A global error handler class and alerts are used for quick error hanndling, there should be an extensive error handling mechanism in place for bigger apps. I did not focus too much on the error handling part as it was not specified on the challenge requirements document.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
