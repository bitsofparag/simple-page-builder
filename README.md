##A Simple Page Builder

###Main tech stack being used
- React
- Redux
- Hapi
- Webpack with Babel support
- React Router


###Installation
I am currently working on making this app available on Heroku. But in the meantime, you can do the following:
- clone the repo
- `npm i` to install all dependencies
- `npm run development`
- open `localhost:8000` on your browser



---
#####[Internal] Task list

- [x] 001 Set up scaffold for SPA

- [x] 002 Add tooling and base library (React, webpack, babel, linting)

- [x] 003 Install Redux

- [x] 004 Set up presentational components (views) of the app

    a. Header
    b. Element
    c. Canvas
    d. PageTitle
    e. SavePageButton
    f. ExportButton
    
- [x] 005 Set up Element Actions
    a. addElement action - to add/insert a new element instance to the state
    `return {type: ADD_ELEMENT, elementInstance}`
    
- [x] 006 Set up Page Actions
    a. addPage action - to add/insert a new page instance to the state
    `return {type: ADD_PAGE, pageInstance}`
    b. getCurrentPage action - to get the currently active page
    <sup>returns `{type: GET_CURRENT_PAGE, currentPageId}`</sup>
    
- [x] 007 Create Element Store with the following reducers:
    a. add new Element
    <sup>returns new state (array) of elements</sup>

- [x] 008 Create Page Store with the following reducers:
    a. add new Page
    <sup>returns new state (array) of pages</sup>
    b. update page instance with newly added elements
    <sup>returns new state (array) of pages</sup>

- [x] 009 Create application store
    a. combine Page and Element reducers using `combineReducers`
    
- [x] 010 Create Toolbar Container
    a. `onClick` method that dispatches `ADD_ELEMENT` action
    
- [x] 011 Create Element function that returns a json structure of the element type
    a. create input, textarea elements
    b. create radio button element
    c. create file input element
    d. create paragraph element

- [x] 012 Create Page Container
    a. connect (with redux `connect`) the page container so that it passes store changes to it's children i.e Canvas
    
- [x] 013 Add internal router with `react-router`

- [x] 014 Add a Welcome component (welcome page as the index route)

- [x] 015 Install `static-server` to serve pages in develop mode (backend for develop mode)
    a. Configure to serve all URIs with index.html

- [x] 016 Refactor I - restructure views and containers; rename components
        
        <Provider>
            <Router>
                <RootLayout> /* contains header, footer, page-container */
                    <Welcome path='/'> /* welcome screen if new session */
                    <PageBuilder path='pages/:id'> /* if old session */
                </RootLayout>
            </Router>
        </Provider>

- [x] 017 Configure `react-router` to manage routes for components
    a. render RootLayout as the starting component
    b. add `onEnter` to RootLayout to check if url params map with state in stores
    c. redirect to Welcome or PageBuilder based on the above check
    
- [x] 018 Add logging middleware

- [x] 019 Refactor Element class into separate files - new Elements can be easily imported/removed

- [x] 020 Create a paragraph as HTMLElement that renders text on the Canvas

- [x] 021 Add a theme for the widgets

- [x] 022 Save page action
    a. Save button with restful action
    
- [ ] 023 Heroku deployment

- [ ] 024 Export as html or json file
    a. use file api to export application state to html or json file
    b. preview button?
 
- [ ] 025 Set up a testing framework with Mocha and Karma
 
- [ ] 026 Set up persistence layer
    a. Mongodb database?
    b. Localstorage persistence
    
- [ ] 027 Add icons or icon framework



