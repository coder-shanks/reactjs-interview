# Hello!

### Overview

This repository contains instructions for the RedBrick AI React.js interview. The objective is to create a component to render a nested JSON object (called a Taxonomy) containing the names of various categories.

This task will involve creating a React component that accepts a Taxonomy object as an input, and properly renders the Taxonomy list as described below. Then, in `App.tsx` you will have to display both the Taxonomies from `Taxonomies.ts` as displayed in the image below.

### Taxonomies

A sample Taxonomy JSON object is show below.

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

The Taxonomy JSON object contains a list of _categories_, here is some additional information about taxonomy objects:

- Each entry in the Taxonomy JSON object has a unique `name` and unique `classId`
- Each Taxonomy list entry can have `children`. If the `children` field is empty i.e. `[]`, that entry has not `children` entries.
- The `children` nesting level can be of an artbitrary depth. In the example above, `fruit` categories has two children - `apple` and `mango`, but it's also possible for those categories to have children, and their children to have children and so on.

### Task

The goal of this task is to create a component that accepts a Taxonomy object and renders the object in the following form.

<img width="709" alt="Screen Shot 2021-04-06 at 2 48 01 PM" src="https://user-images.githubusercontent.com/39279017/113688615-1c385e00-96e7-11eb-802a-4d7e4948e556.png">

## Requirements

- Create a component that accepts a Taxonomy object (please see `Taxonomies.ts` for the Typescrit interface for the taxonomy object), and renders the taxonomy with the styles shown below.
- In `App.tsx` please display both the Taxonomies from `Taxonomy.ts` with the exact styling as shown above.
- Feel free to structure the component(s) and CSS however you see fit.
- Use the `stringToColor` in `utils.ts` to generate the color based on the category name.

## What are we looking for?

- How you break down the problem and structure your components.
- Your approach to the component implementation.
- Your attention to detail in replicating the end solution shown above.
