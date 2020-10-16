# WD-ReactLegacy-TS-GroceryInventoryServer
## What are the requirements for the application to be considered Minimum Viable Product(MVP)?

### Prerequisites
Students must have an understanding of:

- PostgreSql
- Express
- Node
- REST API’s
- Creating API endpoints
- React Basics
- Connecting server and client

### Project Challenges:

- React - Legacy (Class Components, Lifecycle methods, State Management, etc),
- At least one React Styling Library (Radium, Material UI, Styled Components, Ant Design),
- Data persistence utilizing PostgreSQL and a NodeJS ORM library (Sequelize),
- Use DB Associations,
- Create full CRUD (Create, Read, Update, Delete) for at least two items in an original application, separate from auth (users),
- Deployment through Heroku,
- Other MVP components exclusive to your project,
- User registration and authentication (REST-ful API)
- Ordering of items by priority (if it fits the theme),
- Admin Portal,
- Use React Class Components, Routing, Guards,
- Strong Typing with TypeScript(TypeScript must be used in every client side file),
- Create and style a README markdown file (README.md),

### Running the Program
Requirements:
- Visual Studio Code or other code editor
- A web browser
- Postman or another API testing program

Instructions:
- Clone to your local repository and open in code editor.
- run npm install to update the app dependencies.
- You will need to create the initial Admin account via Postman (or other API tester), or if testing on [deployed version](whats-for-dinner-client.herokuapp.com) userId: user120, password: pass120
- Open Postman to run tests. [Postman Endpoint Tests](https://documenter.getpostman.com/view/11529668/TVRq1RDU) You'll need to Register and get a token to run most tests.

## What's for dinner??

This is a JavaScript React app written in Typescript using the Model View Controller pattern. The premise is...
You have limited mobility and you primarily cook all your food. You buy groceries and store them in your home, but due to your limited mobility you aren't able to zip up and down the stairs to see what's available in the freezer in the basement. This is an app that will allow you to track the groceries you have, where you store them, and where you purchased them so you can keep track without having actually go see what is where.<hr/>

The app is divided into an admin and a user side. The user can edit their own account, look at vendors and locations, and they can add, get, and edit groceries. Only admins can add, edit, and delete, vendors and locations. To use the app go to [whats-for-dinner-client.herokuapp.com](whats-for-dinner-client.herokuapp.com). 
 Register a user. Once you've entered a few of your regular stores, you should move on to entering the locations in which you store your groceries. Following location, you can begin entering the actual groceries.
    
**Planning Documents**

[Main Planning Document](https://docs.google.com/document/d/1paDFmk3kX-o9Q45evAMfVd8tZjEirqsEAmZTe9RDcCs/edit?usp=sharing)

[Server Repo:](https://github.com/Phebesue/WD-ReactLegacy-TS-GroceryInventoryServer)

[Client Repo:](https://github.com/Phebesue/WD-ReactLegacy-TS-GroceryInventoryClient)

[Trello:](https://trello.com/b/wbgjLbaB/grocery-inventory)

[XD-WireFrame:](https://xd.adobe.com/view/9c09e1c2-6b9a-4674-b20a-725f04318b7d-c95a/)

[DB Schema:](https://dbdiagram.io/d/5f72335b3a78976d7b7592d0)

[Deployed Client:](https://whats-for-dinner-client.herokuapp.com/)

[Deployed Server:](https://whats-for-dinner-server2.herokuapp.com/)

[Postman Endpoint Tests](https://documenter.getpostman.com/view/11529668/TVRq1RDU)


### Resources Used
- [Sequelize Model Basics](https://sequelize.org/master/manual/model-basics.html)
- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCoASMFmgY7p7ehCTkVOle4jUMdRLYTqCc8LEZzCZmoNJODPHFZZXVtZYYkAAeRJTInDQS8po+rf40gnjbDKv8LqD2jpbYoACqAEoAMsK7sUmxkGSCc+VVQQuaTwVb1UBrDYULY7PagbgUZLJH6QbYmJAECjuMigZEMVDsJzCFLNXxtajBBCcQQ0MwAUVWDEQNUgADVHBQGNJ3KAALygABEAAkYNAMOB4GRogLFFTBPB3AExcwABT0xnM9zsyhc9wASmCKhwDQ8ZC8iElzhB7Bo3zcZmY7AYzEg-Fg0HUiS58D0Ii8AoZTJZggFSRxAvADlQAHJhAA5SASAVBFQAeW+ZF2gldWkgx1QjgUrmkeFATgtOlGWH0KAQiBhwiudokkuiIgMHBx3RYbC43CCJUUJWHoAAPJgAMwAPhe8E4zHyoAA3iNBAEafjIEq58wAL5jqagYBTocjs8vfGLldqNcbhRK-H70fASdToA)
- [MATERIAL-UI](https://material-ui.com/)
- [react-material-ui-form-validator](https://www.npmjs.com/package/react-material-ui-form-validator)
- [TypeError: Cannot read property ‘setState’ of undefined](https://medium.com/@samichkhachkhi/typeerror-cannot-read-property-setstate-of-undefined-27c14e5b3072#:~:text=Sami%20C.,-Follow&text=Whenever%20your%20'this'%20is%20undefined,arrow%20function%20to%20your%20event.&text=you'll%20lose%20your%20'this'%20inside%20the%20function.)
- [React Events](https://www.w3schools.com/react/react_events.asp)
- [React event type in Typescript](https://stackoverflow.com/questions/46524815/react-event-type-in-typescript)
- [React: Expected an assignment or function call and instead saw an expression](https://stackoverflow.com/questions/45573277/react-expected-an-assignment-or-function-call-and-instead-saw-an-expression)
- [.map is suddenly not a function?!](https://forum.freecodecamp.org/t/map-is-suddenly-not-a-function/303390)
- ['heroku' does not appear to be a git repository](https://stackoverflow.com/questions/18406721/heroku-does-not-appear-to-be-a-git-repository)

<hr />
