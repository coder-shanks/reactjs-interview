# Hello!

This repository contains instructions for the RedBrick AI React.js interview. The objective is to create a component to render a nested JSON object (called a Taxonomy) containing the names of various categories. 

A sample Taxonomy JSON object is show below. The Taxonomy contains a list of _categories_ that have a unique `name`, and `classId`. Each Taxonomy entry can also have a list of `children` which are also valid Taxonomy objects. 

```js
[
  {
    name: 'object',
    children: [
      {
        name: 'fruit',
        children: [
          { name: 'apple', children: [], classId: 4 },
          { name: 'mango', children: [], classId: 5 },
        ],

        classId: 1,
      },
      { name: 'vegetable', children: [], classId: 2 },
      { name: 'meat', children: [], classId: 3 },
    ],
    classId: 0,
  },
];
```

The goal of this task is to create a component that accepts a Taxonomy object and renders the object in the following form. 

<img width="678" alt="Screen Shot 2021-04-06 at 2 37 50 PM" src="https://user-images.githubusercontent.com/39279017/113687221-b9929280-96e5-11eb-8872-1f3e1460b03e.png">


## Requirements
Some set up has already been done to help you: 
- [App.tsx](src/App.tsx) renders the Taxonomy list component as well as the TaxonomyItem component. 
- Complete the TaxonomyItem component inside the [Taxonomy](src/Taxonomy) directory. Refer to the Typescript interfaces for the details of the props. Create this component to render a single list item in the styles shown above. 
- Complete the [recurseTax()](src/Taxonomy/index.tsx) function to recursively render the nested Taxonomy object. The style of the final component should match what is shown above. 
