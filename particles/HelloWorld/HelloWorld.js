// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt

"use strict";

// Defines and registers a simple particle that outputs a single "Hello, World!"
// message.
defineParticle(({Particle}) => {
  return class HelloWorld extends Particle {
    // Called once the particle is setup and the input and output views are
    // bound to actual views in the current Arc.
    setViews(views) {
      // Retrieves the class for the output view and creates an instance of that
      // type with the message "Hello, World!".
      const Message = views.get('hello').entityClass;
      views.get('hello').set(new Message({message: "Hello, World!"}));
    }
  }
});
