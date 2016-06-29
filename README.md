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
    <sup>returns {type: ADD_ELEMENT, elementInstance}</sup>
    
- 006 Create Page Actions
    a. addPage action - to add a new page instance to the state
    <sup>returns {type: ADD_PAGE, pageInstance}</sup>
    b. getCurrentPage action - to get the currently active page (page id)
    <sup>returns {type: GET_CURRENT_PAGE, currentPageId}</sup>
    
- 007 Create Element Store with the following reducers:
    a. add new Element -> returns new state of elements

- 008 Create Page Store with the following reducers:
    a. add new Page -> returns new state of pages
    b. update page instance with added new elements -> returns new state of pages

- 009 Create ProductBuilder Store
    a. combine Page and Element reducers -> returns complete state of ProductBuilder {pages, elements}
    
- 010 Create Toolbar Container
    a. onClick method that dispatches ADD_ELEMENT action
    

- 011 Create Page Container
    a. newPage method that dispatches ADD_PAGE action
    
- 012 Implement simple drag n drop
    a. install DnD library
    b. simple DnD from Toolbar to Canvas

- 013 Create toolbar elements
    a. Paragraph
    b. Text input
    c. Textarea
    d. Radio button
    e. File Input