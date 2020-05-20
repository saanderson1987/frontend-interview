# Assignment

## Code Challenge

The starter application included has some signficant issues that make it not work correctly, and a few underdeveloped features. Your task is to fix any errors in the code already, and build some simple features to match the given requirements below.

### Requirements

- Create a fork of this repository. All code changes should be made to your fork. If you'd rather not have a public fork, that's cool too. In that case please provide a zip of your solution, including the local .git folder, so that we can view your commit history!

- As a user (here just a fake one) should be able to login, with my extremely secure password, 'password'. An email address should also be required, but any should work.

- Once logged in, a user should be able to navigate to the `Profile` page, and update my name so that it appears on the home page instead of `Test User`

- On the repository page (which should mount the Repositories component), a user should be able to enter text into a field in order to search for repositories on github.

  - These results should automatically populate (wihtout requiring a button press or enter keypress), however the request should only be sent when there's a lull in typing (rather than on every keystroke)
  - The results should be displayed as cards or a list, containing at least the following info:
    - Full name | description | Stargazers Count | Open issues Count | match score
  - Clicking the list or card of the item should change to a page /repositories/:id

- The page /repositories/:id should show extra detail about a specific repository

  - This page should show the info from the card, as well as
    - link to the Repos Issues
    - link to the Repos Pull Requests
    - Display the license, if there is one, with it's name, spdx_id and url (if exists)

- The app should strive to have high levels of accessibility, please take steps to enable where possible

- Write `production` level code while completing this task. Please be sure to handle potential errors where necessary, remove any unncessary logs/debugger statements, etc

### Limitations

`styled-components` and `react-router-dom` are both added as dependencies already. No other packages should be added.

Any http requests should be handled using `fetch`.

Styles should be added using only styled-components.

### Time

You should not take more than 4 hours of time on this, even if you feel incomplete, that's fine. Your time is important, too! We'd rather see what you can accomplish in that timeframe, rather than what you can do in unlimited time

## Question

Please, answer the following questions in this readme, underneath the question

1. Name a newer feature of javascript that you believe is extra useful, and discuss how you have used it in this project, or how you would use it if needed.

Option chaining is a feature in the latest version JavaScript that I beleive is very useful. With optional chaining, by appending `?` to the end of an object property name, the developer can access nested properties of an object without having to validate the existence of each property in the chain of property names. This allows for a much cleaner syntax in when accessing nested object properties than the former way. I used optional chaining in this project when formatting the response of the github api. Upon a cursory glance of the GitHub API documentation, I did not find an explicit guarantee of the response schema. I wanted to make sure that if the response returned `null` or `undefined` for a given property, the application would not throw an error. Instead of throwing an error if a property cannot be accessed, option chaining sets the variable to undefined, which the application then handles.

2. What are 3 things you think `React` does very poorly? What tools do this better, if any?

- Since the content of a React app are not generated until the app has loaded, the content cannot be accessed by search engines. As a result, developers have to come up with other options to ensure that the application content is picked up by search engines. One way of solving this problem is to use server-side-rendering. Fortunately, there are tools to acheive this, such a Next.js.

- Previously, React did not have the ability to manage global application state without an external tool, such as Redux. The introduction of the Context API has changed this. However, unlike Redux, any component that consumes the values of the context provider is re-rendered if one of those values is changed. For this reason, developers need to be careful about using too many values in a single context.

- React does not natively handle front end routes. Thankfully, there are tools such as React Router that adds this functionality to React apps.

## Submissions

When submitting, please send a link to your fork of this repository or a zip of your completed project to the link provided when you received this repo

### Questions

Please, feel free to reach out directly with any questions you have about this project, let us know
