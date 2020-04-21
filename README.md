
# Expenses app
Implement an expenses list fetching all expenses from the provided API. Allow the user to add notes and upload receipt pictures to each expense.

See the [API details](https://github.com/pleo-io/frontend-challenge/blob/master/api/README.md) for implementation.

## User features `U`
- [x] User can list expenses.
- [x] User can add a comment on an expense.
- [x] User can filter on expenses (client side filters).
- [x] User can hide/show specific columns
- [x] User can add a receipt image on an expenses.
- [x] Responsive design.

## Backlog
`u` - User, `d` - Dev

- [ ] `d` Implement Cypress and E2E testing.
- [ ] `d` App loading states handle.
- [ ] `d` Component state handle
- [ ] `u` Multi edit for expenses.
- [ ] `u` Multi currency select filter.
- [ ] `u` Progressively load expenses.
- [ ] `u` Localization: support. 
- [ ] `u` a11y improvements. 
- [ ] `d` Move `@material/core` imported components to `/ui`.
- [ ] `d` Improve [TSDoc](https://github.com/microsoft/tsdoc) documentation.
- [ ] `d` Dependency check.

## Structure

### `/ui`
The basic general UI components that would be used to build larger components. These basic elements could be the ones designed by UI/UX. It could have internal React state only. However it should not be aware of Business logic/Redux store state. 

### `/components`
Larger features/Components that built using the UI components. These components could include business logic/Redux store state.

### `/layouts`
These are general layouts. Pages could use these layouts (e.g. include/exclude app bar or other application wide features).

### `/pages`
These are constructed using `layouts` and `components` and route specific. 

### `/services`
All the service calls are done here. Each endpoint should have it's own service and should be extension on `APIService`. `APIService` uses `axios` as it's `HTTPClient` and `apiUrl` is configured for `http:localhost:3000` backend. if this changes this is the only location that would need to be changes.

### Redux state management: `/store-managers`
Loosely based on *ducks pattern* this includes specific actions/reducers for different states.

### Redux store: `/store`
Redux store configuration and includes `RootAction`, `RootReducer` etc.. 

### `/utils`
General utility functions to be used

### `/types`
Type definition files that might be relevant to, need to be used in different parts of application. 

## UX
### Colour palette: 
chosen to be calming neutral minimal look. User would be looking at financial information therefore it should avoid clutter and convey the information without distractions and user should be able to analyse the information objectively. 

### Features: Expense table
Expense table display `full name`, `merchant` and `amount`
- User can filter each column based on type of data (e.g. text, specific currency with range)
- Since there are expenses from different currencies just displaying information makes it impossible to accurately sort/filter expenditure. Currency filter allow user to see expenditures for a specific currency between a range of values. However, at this moment it doesn't include selecting multiple currencies same time.
- Show/hide more information specific columns so user would only see specific information they would need. Helps smaller screens
- Edit expense within same page. This was done to avoid user navigating to a different page and having to come back to page to edit another expense. This also allows the possibility to multi edit e.g.
- Inline edit of comment.
- Upload receipts button concise and simple.
- Tooltips to show actions e.g. more info on `^` hover
- User can select number of rows to display with pagination to avoid having to see too much/too little information with pagination

## Development

### Tech stack

- [x] React 16.8+
- [x] Typescript 3.8+
- [x] Storybook
- [x] Jest
- [x] Cypress

### Installation `npm install` 
Runs the installation of the package. Support node 10+

### Start `npm start`
Currently app would only run in `development` mode on `port=3090`

### Development start - `npm run start:dev`
Run application in `development` mode on `port=3090`

### Development code linting `npm run lint`
App enforces `eslint` with `prettier` with `plugin:react/recommended` for strict lint/coding.
If automatically want to fix issues run `npm run lint:fix`

### Testing: `npm test` 
Currently app would only run Unit testing. `jest` is configured with `@storybook/react` and `@storybook/addon-storyshots` and will run snapshot testing.

### Testing E2E
No E2E jest specific tests implemented yet.

### Contributing guidelines

#### Development practices
Google guidelines: https://google.github.io/eng-practices/

#### Commits
```quote
Describe your changes in imperative mood, e.g. "make xyzzy do frotz"
instead of "[This patch] makes xyzzy do frotz" or "[I] changed xyzzy
to do frotz", as if you are giving orders to the codebase to change
its behavior.  Try to make sure your explanation can be understood
without external resources. Instead of giving a URL to a mailing list
archive, summarize the relevant points of the discussion.
```

Also ensure the period `.` at the end of the commit message.

Git commit guidelines: https://git.kernel.org/pub/scm/git/git.git/tree/Documentation/SubmittingPatches


## Build
Currently there is no build realeas version of the app. However `Travis CI` is configured to run a default using the `npm test` as a default.

