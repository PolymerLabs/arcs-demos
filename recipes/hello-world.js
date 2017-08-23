// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt
window.recipes = window.recipes || {};

window.recipes.helloWorld = {
  name: "Hello, World!",
  particles: [
    {
      name: "Create",
      constrain: {
        "newMsg": "msg"
      }
    },
    {
      name: "HelloWorld",
      constrain: {
        "hello": "msg"
      }
    },
    {
      name: "Greet",
      constrain: {
        "message": "msg"
      }
    },
    {
      name: "PersonalGreet",
      constrain: {
        "person": "person"
      }
    },
    {
      name: "Choose",
      constrain: {
        "singleton": "person"
      }
    },
  ]
};
