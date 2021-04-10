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
- The `children` nesting level **can be of an artbitrary depth**. In the example above, `fruit` categories has two children - `apple` and `mango`, but it's also possible for those categories to have children, and their children to have children and so on.

### Task

The goal of this task is to create a component that accepts a Taxonomy object and renders the object in the following form.

<img width="577" alt="Screen Shot 2021-04-06 at 2 37 50 PM" src="https://user-images.githubusercontent.com/39279017/114272663-a872ba00-9a34-11eb-8dd4-cd3d873720db.png">

- Create a component that accepts a Taxonomy object (please see `Taxonomies.ts` for the Typescrit interface for the taxonomy object), and renders the taxonomy with the styles shown below.
- In `App.tsx` please use your created component to display both the Taxonomies from `Taxonomy.ts` with the exact styling as shown above.
- Feel free to structure the component(s) and CSS however you see fit.
- Use the `stringToColor` in `utils.ts` to generate the color based on the category name.
- Use `#eaecec` for the borders of the list, and `box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px` for the shadows of the list.
- Please keep in mind that the two taxonomy objects in `Taxonomies.ts` are just two examples of taxonomy objects. Don't hardcode your component to work with only these two components, your component should be generic to taxonomy objects described above.

## What are we looking for?

- How you break down the problem and structure your component.
- Your approach to the specific component implementation, handling of the Taxonomy object data, structure, and nesting.
- Your attention to detail in replicating the end solution shown above, including .
