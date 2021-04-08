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

<img width="709" alt="Screen Shot 2021-04-06 at 2 48 01 PM" src="https://user-images.githubusercontent.com/39279017/113688615-1c385e00-96e7-11eb-802a-4d7e4948e556.png">

## Requirements

- There are two taxonomies in the Taxonomies.ts file, please use those to render the component as shown above.
- Feel free to structure the component and styling however you see fit.
- Use the `stringToColor` in utils.ts to generate the color based on the category name.

## What are we looking for?

- How you break down the problem and structure your components.
- Your approach to the component implementation.
- Your attention to detail in replicating the end solution shown above.
