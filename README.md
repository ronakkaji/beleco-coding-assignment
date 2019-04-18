# Coding Assignment April 2019
The following repo was initialized using `create-react-app`. The purpose
of this assignment is to show that the candidate understands how to manage
state as well as a general understanding of lifecycle methods.

## Get started
### Install
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install)

### Post-install
- Clone the project
- Run `yarn install` in root folder
- Run `yarn start` in root folder

## Assignment
When running the app you will be presented with a simple input form. The form contains three input fields for inputing data about a certain furniture. After entering data in each of the fields, the user should then
be able to push the "Add"-button, which then adds the furniture to the
"Added Furniture"-list.

### General Requirements
1. The input fields should be "controlled components"
2. When pressing "Add", the input data should be pushed to an array in the state.
3. The array should be sent as a prop to the `AddedFurnitureComponent` which in turn should render the actual list.
4. The `AddedFurnitureComponent` should have PropTypes specified.

### Special Requirement
- Whenever the prop data changes in the `AddedFurnitureComponent`, a simple
animation should be triggered. What the animiation does is up to you.

### Submit
— Compress the entire project into a ZIP-file and send it to me (johan.berglind@beleco.com).