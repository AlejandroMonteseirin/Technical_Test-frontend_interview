# frontend-interview



### Objetives:

Build an interactive web page using react and redux, or any other technology you like (Angular, Vue, Svelte, etc). 
The app will use [this public API](https://chroniclingamerica.loc.gov/about/api/) in order to fetch data. The goal 
of the app is to look for some terms using the API, and then display the results in a list. This is a sample 
request, in which we look for the titles of newspapers that contain the term 'michigan'. 

```
https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json
```

* The page must contain a search box, so that the user can introduce text.

* The data fetched from the API must be stored in a redux store.

* The data fetched should be displayed in a table or a list. That table/list component must read the data from the redux store.

* The usage of function components and hooks is preferred over class components.

### Extra

You can add some of this suggested extras. 

* Handle API pagination

* Use some beautiful UI components from a library (like [Ant Design](https://ant.design/docs/react/introduce), [React Bootstrap](https://react-bootstrap.github.io/), ...) 

* Unit test

This are just some suggestion. Feel free to add whatever you want to.



# Solution:

### Firebase deploy :

    Url: https://prueba-tecnica-newspaper.web.app/
 
### or set up the project

    Download node.js 16.13.14 or higher
    Download npm 8.3.2
    run "npm install" in the root of the proyect
    run "ng serve" and go to localhost:4200

## Component Explanation

### Redux store (NGRX)
@ngrx/store is RxJS powered global state management for Angular applications, inspired by Redux. Store is a controlled state container designed to help write performant, consistent applications on top of Angular.

In the folder "ngrx-store" you can find the archives of the store of the actions and the reducers.
##### Actions 
- Add a newspaper: Add 1 newspaper to the state store
- Add multiple newspapers: Add multiple newspapers to the state store
- Reset newspaper: Reset the newspapers in the state store
##### Usage of the store
- In the view component, there are an observable (newsPapers$) that retrieve the state of the application and use it to display the table

### Services
There are two Services, the Api Service and the Parse Service
- The Api Service call to the Api and retrieve the raw JSON
- The Parse Service converts the raw Json in an Array<Newspaper> (newspaper model is in app/models/newspaper)

### General Workflow
When you push search, the view component make a call using the Api service, which retrieve the raw Json, then is converted to an Array of Newspapers and Stored in the State Management Store (NGRX). There are one observable checking the state value, so immediately the view component will show the results.

### Extra
- There are a Pop-Up for showing the rest of the data, when clicked in "show more info"
- There are a functional pagination system using the Api "page" parameter
- There are a little Karma/Jasmine tests, results and the end of the README. For run the tests, run the command "ng test" in the root of the project. (a good test example is in services/parse.service.spect.ts which tests the parser with a example JSON)


![testResults](https://user-images.githubusercontent.com/33956661/160302199-6b430414-6c41-4338-b630-95b600696a0f.png)
