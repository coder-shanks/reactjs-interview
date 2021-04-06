# Hello!

This repository contains instructions for the RedBrick AI React.js interview. The objective is to create a component to render a nested JSON object containing the names of various categories. 

A sample JSON object is show below: 

```
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
