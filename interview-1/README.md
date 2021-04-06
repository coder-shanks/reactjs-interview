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

## Requirements
Some set up has already been done to help you: 
- [App.tsx](src/App.tsx) renders the Taxonomy list component as well as the TaxonomyItem component. 
