####Task List

- 001 Set up scaffold for SPA

- 002 Add tooling and base library (React, webpack, babel, linting)

- 003 Install Redux

- 004 Set up presentational components (views) of the app
    a. Header
    b. Element
    c. Canvas
    d. PageTitle
    e. SavePageButton
    f. ExportButton
    
- 005 Create Element Actions
    a. addElement action - to add a new element instance to the state
    <sup>returns `{type: ADD_ELEMENT, elementInstance}`</sup>
    
- 006 Create Page Actions
    a. addPage action - to add a new page instance to the state
    <sup>returns `{type: ADD_PAGE, pageInstance}`</sup>
    b. getCurrentPage action - to get the currently active page (page id)
    <sup>returns `{type: GET_CURRENT_PAGE, currentPageId}`</sup>
    
- 007 Create Element Store with the following reducers:
    a. add new Element
    <sup>returns new state (array) of elements</sup>

- 008 Create Page Store with the following reducers:
    a. add new Page
    <sup>returns new state (array) of pages</sup>
    b. update page instance with added new elements
    <sup>returns new state (array) of pages</sup>

- 009 Create ProductBuilder Store
    a. combine Page and Element reducers using `combineReducers`
    
- 010 Create Toolbar Container
    a. create input, textarea elements
    b. create radio button element
    c. create file input element
    d. create paragraph element
    e. onClick method that dispatches ADD_ELEMENT action
    
- 011 Create Page Container
    a. newPage method that dispatches ADD_PAGE action
    
- 012 Implement simple drag n drop
    a. install DnD library
    b. simple DnD from Toolbar to Canvas
