---
slug: "your-first-express-server"
title: "Hello World! { Setting Up Your First Express Server } "
date: "2020-05-11"
---

### But what is Express anyway?

Express is a [minimal and flexible Node.js web application framework](expressjs.com).

Express is a great backend and API option for any project with a JavaScript (or JS framework) frontend, because it allows you to keep all of your code in the same language and the same family. You don't need to learn one language for the front end and an entirely different language for the back. If you already work in JavaScript for your frontend projects, I think you'll be able to pick up Express really quickly. I know I did!

### Sweet! Let's get started!

Before getting started with Express, it's important to make sure that you have Node installed on your system, and that you have at least some exposure to Node.

I highly recommend [this crash course](<[https://youtu.be/fBNz5xF-Kx4](https://youtu.be/fBNz5xF-Kx4)>) from TraversyMedia on Youtube.

To get started setting up your server, you'll want to make a new folder in which you will be placing your project, and then `npm init` to setup your `package.json`. For this tutorial, I recommend running `npm init -y` so you can skip the setup questions and get right to coding...

```bash
$ mkdir my-first-express-server
$ cd my-first-express-server
$ npm init -y
```

Once you have your `package.json`, you need to install Express

```bash
$ npm i express
```

And I also highly recommend including the [Nodemon](<[https://nodemon.io/](https://nodemon.io/)>) utility in your `devDependencies`. Nodemon automically restarts your server on save so that you don't have to repeatedly `^c` and restart your server with every change.

```bash
$ npm i -D nodemon
```

_the `-D` flag indicates that you specifically want this to be installed as a `devDependecy` in your `package.json`_

Next, add an `index.js` file to your project folder.

_(now would be a good time to `git init`, but first make sure you add your `node_modules` to a `.gitignore` file!)_

### **Now for the fun stuff! 🎉**

The first thing we need to do is `require('express')` in our `index.js`

```js
const express = require("express")
```

The coolest thing about Express, in my opinion, is that this `require` is _all we need_ to set up our `"Hello World"` server or a simple API!

_if you want to serve static files (like HTML and CSS) using your server, you can add `require('path')` at the top of `index.js`. We'll cover this more later..._

Now we need to set `express` to a variable that we'll call (mostly) all of our other methods on to get our server working:

```js
const app = express()
/* it's pretty common for this variable to be called 'app' but you
can theoretically call it whatever you want! */
```

Next, before we do anything else, we need to tell our `app` what `PORT` to listen on when we run the server.

You _could_ tell your server to just use port `5000` and be done with it, but it's good to plan ahead for eventually deployment!

Once your server has been deployed, it's likely your deployment will tell your app to use a port stored in an `.env` file. So we need to tell our `app` to `listen` on port `5000` _or_ whatever port is being passed to the app in the `.env` file...

```js
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

/* app.listen() takes 2 arguements: the port you want to listen on, and a callback. Here we're passing a console.log() in the callback that will let us know what PORT server is running on */
```

_place this code at the bottom of your `index.js` file...the rest of what we're about to write in `index` will go between your `app` variable declaration and your `PORT` variable declaration_

### Let's take a quick trip to our `package.json` ...

So, remember when I had you install `nodemon`? Now's the time to use it!

Inside of your `package.json` you're going to write 2 `"scripts"`...

First, we want a script called `dev`, where we'll use `nodemon` to run our `index.js` file. Then we want to write a `"start"` script that will be used to run the app once it's deployed:

```json
"scripts": {
	"dev": "nodemon index",
	"start": "node index"
}
```

_package.json_

### Ok, cool, back to our `index.js` ...

We made it! It's time! We're _so_ close to "Hello World"! We're going to write our first Express `get` request handler _right now_!

Here is the syntax for the get request:

```js
app.get("/", (req, res) => {
  //code goes here
})
```

_index.js_

First we call `app.get()`, passing it the route we want to `get` (in this case the root route `'/'`) and a callback which will tell the server what to actually _do_ with this route. We pass the `req` (request) and `res` (response) to this callback.

Getting our "Hello World" on the page is as simple as using the `res.send()` function! You can pass strings to `res.send()` (typically this would be the path to the file you want to server on the specified route) but for now we're going to pass a string of HTML:

```js
app.get("/", (req, res) => {
  res.send(
    "<h1>Hello World!</h1>"
    // or whatever your favorite hello world is!
  )
})
```

Now, from your CLI we want to run the `dev` script we wrote in our `package.json`:

`npm run dev`

Then open up your favorite browser and navigate to `localhost:5000`

You did it! You wrote your first Express server!! 🎉

Do a quick dance party to celebrate, and then go back into your `res.send()` function and add a few more things to your HTML string. Save your file and watch as `nodemon` does the behind-the-scenes magic to rerun your server and serve the changes you just made **live**!

### Bonus: Let's serve an actual HTML file!

First, we need to make that HTML file, and put it in the right place.

_( this is also when we want to make sure we included `require('path')` at the top of our file )_

First, add a `public` folder inside of your servers root folder. Then add a file inside of that folder called `index.html`.

Now, go ahead and put anything you want in `index.html`. The fastest option is to add the HTML boilerplate, and copy over what you had in your string of HTML from your `res.send()` function.

Back in `index.js`, comment out the `res.send()` inside of your `app.get()` function.

We're going to replace that line with this:

```js
app.get("/", (req, res) => {
  // res.send("<h1>Hello World!</h1>")
  res.sendFile(path.join(__dirname, "public", "index.html"))
})
```

Now, we are using the function `.sendFile()` to tell serve the file `index.html` inside of the `public` folder, inside of the current directory (the root of our server)

We can also tell Express to server any static file on its own route:

```js
app.use(express.static(path.join(__dirname, "public")))
```

That's a lot of function nesting! Essentially what's happening here is:

the `app.use()` function tells our app to `use` the `express.static()` function to set the path for static files in our app to `path.join(__dirname, 'public')`.

_`__dirname` indicates the current file directory, so we're telling our `app` that the static files live inside a folder called `public` inside of the current directory._

Now, if you added another file inside of `public` called `about.html` and then navigate to `localhost:5000/about.html` you'll be served the contents of your `about.html` file! With one line of code, we're able to serve _any_ file we add to our `public` folder!

I hope you had fun setting up your Express server with me! Now go forth and make me something cool! Make sure you tweet @ me if you use this tutorial to build your server. I would love to see what you build!

Next up, we'll be covering how to hook in a database with our Express backend, and serving JSON to turn our server into a REST API!
_(keep your eyes pealed for the next post in this series coming soon...)_

You can find more of my work here on my blog, and on:
[DEV](www.dev.to/thecodepixi)
[Twitter](www.twitter.com/thecodepixi)
[GitHub](www.github.com/thecodepixi)
and
[CodePen](www.codepen.com/thecodepixi)

> this article is cross-posted on [DEV.to](https://dev.to/thecodepixi/hello-world-setting-up-your-first-express-server-2f98)
