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
- [ ] Deployed to a static URL

## Mentions:
- Interfaces are used over classes as models. In a bigger app classes should be used to represent the models and they should be processed by mappers when inserting remotely-fetched json data into the frontend application.

- A global error handler class and alerts are used for quick error hanndling, there should be an extensive error handling mechanism in place for bigger apps. I did not focus too much on the error handling part as it was not specified on the challenge requirements document.

- Probably a comprehensive `CoreModule` could be created for a bigger app.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
