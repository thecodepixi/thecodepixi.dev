---
title: "How To: Create A Link Rainbow Hover Effect"
tags: [CSS, HTML, How To]
date: 2020-07-17
slug: rainbow-link-hover-effect
---

So, typically I try to write pretty long, in-depth articles and tutorials. This week I _do not_ have the energy, so we're doing a quick tutorial on how I created a rainbow hover effect for the links in the forth-coming redesign of my website and blog...

## First, let's talk `a` tags:

As you probably already know, `a` tags are what we use to create both internal and external links on a webpage. We can target and add effects to links when we hover our cursor over them by using the `:hover` selector.

For example, let's say on my site, I have all of my `a` tags set to be `blue` by default:

```css
a {
  color: blue;
}
```

And I want them to be `red` when they're hovered over. To accomplish that, we can simply do the following:

```css
a:hover {
  color: red;
}
```

This will produce the effect demonstrated below:

<iframe height="332" style="width: 100%;" scrolling="no" title="Blue to Red Link" src="https://codepen.io/TheCodePixi/embed/dyGQMoq?height=332&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/TheCodePixi/pen/dyGQMoq'>Blue to Red Link</a> by Emily Harber
  (<a href='https://codepen.io/TheCodePixi'>@TheCodePixi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<br/><br/>

Great! We can handle a basic `a` tag hover. Now how do we get it to be a rainbow? 🤔

## Creating a `linear-gradient`

In order to create the rainbow effect we're looking for, what we need to do is apply a `linear-gradient` background to our text, and then use something called a `background-clip` to only apply that gradient to the text of our link.

First, let's create that gradient:

```css
a {
  color: black;
  background: linear-gradient(90deg, red, orange, yellow, green, blue, purple);
}
```

The `linear-gradient` background option takes a few arguments:

- First, the angle you want the direction of your gradient to be. Here, I've chosen `90deg` so the gradient will go in order from left to right. _(if you do not include this argument the gradient will be applied from top to bottom)_

- Then, you can list any number of colors you want to include in your gradient. I've chosen the full rainbow spectrum, but you could really choose any colors you like, and use any color format (CSS color names, hex color codes, HSL, RGB, etc).

Try this out and see what happens.

**Oops! That's not what we were expecting...**

If you tried this out, you'll notice that the gradient is, as you might expect, applied to the entire background of our text.

## This is where the `background-clip` comes in...

```css
a {
  color: black;
  background: linear-gradient(90deg, red, orange, yellow, green, blue, purple);
  background-clip: text;
  -webkit-background-clip: text;
}
```

Using `background-clip` tells your CSS exactly where you want to apply your background. Setting this option to `text` tells our CSS we want the background only applied to the text inside of the element we're targeting.

You can [read more about `background-clip` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip), but keep in mind that `background-clip: text` **is not widely supported yet**. This effect will work best in Firefox, Edge, and Chrome, as long as you include the `-webkit-background-clip` option. This effect _will not work_ in IE, which I'm sure comes as no surprise.

Now that we've added this to our CSS you might be thinking that it's not working. Your text will appear as whatever color you've specified in your CSS (_here I've used black_) and that's a _good thing_!

There's one more step...

Now, when we we `:hover` over our links, we want to make our link text `transparent`, which will allow our background gradient to show through. I'm also going to add a slight transition effect, because I like the look of the gradient slowly fading in...

```css
a:hover {
  color: transparent;
  transition: 500ms ease;
}
```

**Here's the final effect:**

<iframe height="265" style="width: 100%;" scrolling="no" title="Rainbow Hover Link" src="https://codepen.io/TheCodePixi/embed/BajGKRN?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/TheCodePixi/pen/BajGKRN'>Rainbow Hover Link</a> by Emily Harber
  (<a href='https://codepen.io/TheCodePixi'>@TheCodePixi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<br/><br/>

And that's it! We have a nice rainbow gradient hover effect on our links! 🎉

I really enjoy adding little touches like this to my projects because it just adds a fun little flair and some personality, plus I especially enjoying finding way to incorporate rainbows into anything I can.

Let me know if you try this out, and happy hovering!

xx -Emily / TheCodePixi
