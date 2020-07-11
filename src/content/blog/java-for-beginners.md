---
title: Java, Ruby, and JavaScript Walk Into a Bar (and Order Some Coffee) ...
tags: [Java, Ruby, JavaScript, Beginners, Tutorial, Featured]
date: 2020-07-10
slug: ruby-java-javascript-walk-into-a-bar
---

After nearly two years of studying and learning, I was finally starting to not feel so much like a "beginner" or a "newbie" at programming.
I've built REST APIs in Rails and Express, I've built fullstack applications using modern JavaScript frameworks, and I've queried databases using (various flavors of) SQL and GraphQL...

### > **And then I decided to learn Java**

Suddenly, I'm a newbie again. Not quite a complete beginner, but definitely green, and getting started with Java has been an exciting experience.
Java feels like what I always _imagined_ programming to be, moreso than Ruby or JavaScript ever did. Writing in a strictly typed language has been almost entirely new for me, outside of a little bit of dabbling with TypeScript.

## My Learning Resources

So far the thing that has surprised me the most about Java is how little I hate it. That might sound weird, but with the reactions I've received to telling people "Hey, I'm learning Java!", you'd think I'd decided to sell my first born child's soul to the Computer Science devil or something. But it actually hasn't been too bad, too big of a departure from what I already know, or too big of a barrier to entry.

The particularly excellent thing about Java is that because it is so ubiquitous, and so pervasive and popular, there are a wealth of resources available for you to learn it, and significant number of them are free or very affordable.

The two resources that I've personally been using are the wonderful [Java Programming course by Angie Jones at Test Automation U](https://testautomationu.applitools.com/java-programming-course/), and the [Java Developer learning path on JetBrains Academy](https://hyperskill.org/curriculum).

Angie's Java Programming course is _completely free_ and perfect for people who want to get up to speed quickly. She covers all of the Java essentials, with quizzes and homework assignments built in along the way so you can test your learning as you go.

The JetBrain's Academy program is surprisingly affordable, and a better option for people who prefer a more regimented course, and are starting from absolute zero. Even if you have no prior programming experience, you can tailor the JetBrain's curriculum to your needs. And if you have prior experience from learning another language, you're given the option to skip sections of the curriculum you're already comfortable with.

## OK, now let's get to the tutorial ...

What I've decided to do with this tutorial is to show you how to code something fairly basic, and compare the solutions side by side in Ruby, JavaScript and Java. I like doing this when I'm learning (coding the same thing I'm learning in the languages I'm already comfortable with) because it's a good exercise to see how things _translate_. Just like how if you were translating a sentence into another language, you'd already want to know how the sentence should be structured in your native language, before trying to do the translation.

So today we're going to write a short program to calculate the quantities we need to brew a particular amount of coffee.
_(Get it? Java? JetBrains made this joke too, don't @ me, lol)_

**What we know we need:**

- 20g of coffee per cup
- 14 oz of water per cup

We're going to keep it to just those two variables, to keep things as simple as possible. Our only unknown variable is the number of cups of coffee that we want to make. That will be what we pass in to the function/method as a parameter/argument.

Let's say we're having some friends over, so want to make 5 cups of coffee.

## Here's how we could write this in Ruby...

```ruby
# main.rb

# set up a coffee maker class
class CoffeeMaker

  # variables for the amount of coffee and water per cup can only be read
  attr_reader :coffeeGramsPerCup, :waterOzPerCup
  # cupsToMake can be altered as needed
  attr_accessor :cupsToMake

  # class initializer takes in the quantity of coffee to make
  def initialize(cupsToMake)
    @coffeeGramsPerCup = 20
    @waterOzPerCup = 14
    @cupsToMake = cupsToMake
  end

  # a method that calculates the quantities needed and outputs a string to the console
  def makeCoffee
    waterNeeded = @waterOzPerCup * @cupsToMake
    coffeeNeeded = @coffeeGramsPerCup * @cupsToMake

    print "You will need #{waterNeeded} oz of water and #{coffeeNeeded} grams of coffee beans \nto make #{@cupsToMake} cups of coffee."
  end

end

# initialize a coffee maker and call the makeCoffee method
# passing it the quantity of coffee we'd like to make
myOrder = CoffeeMaker.new(5)
myOrder.makeCoffee

# Console Output:
# > You will need 70 oz of water and 100 grams of coffee to make 5 cups of coffee.
```

Ruby is a _great_ candidate for comparison to Java, because it is also an **Object Oriented** Language, and lets us handle things in very similar ways.

In the example above, we've created a class called `CoffeeMaker`, and given it class variables to handle what we know already (the amount of coffee and water needed per cup), and we _initialize_ the instance of the class with the number of cups of coffee we'd like to make. Then, we call the method `makeCoffee` which calculates our coffee and water needs and outputs the result to the console.

## And now we can try it in JavaScript...

```js
// index.js

// global variables for coffee and water
const COFFEE = 20
const WATER = 14

// create our coffeeMaker function, where n is the requested number of cups
function coffeeMaker(n) {
  let coffeeNeeded = n * COFFEE
  let waterNeeded = n * WATER

  console.log(
    `You will need ${waterNeeded} oz. of water and ${coffeeNeeded} grams of coffee, to make ${n} cups of coffee.`
  )
}

// call our coffeeMaker function
coffeeMaker(5)
// Console Output:
// > You will need 70 oz of water and 100 grams of coffee to make 5 cups of coffee.
```

That's a _looks_ little more streamlined! Since JavaScript is not an Object Oriented language by default, we can simply declare some global variables, write a function, call the function, and call it a day. We could also call this function from _anywhere_ we want to as long as we `export` it and `require` the file containing it, regardless of whether what we're writing really has anything to do with making coffee.

There are object oriented approaches you could use in JavaScript, but I decided to show the functional version here, because there are always trade-offs to each methodology.

In the Ruby version, we created a variable that contains our initialization of our coffee order, `myOrder`. If we ended up wanting a different quantity of coffee, we can simply reassign the value of `cupsOfCoffeeNeeded` by calling the setter method on `myOrder`. Then we can `makeCoffee` again, without initializing a new CoffeeMaker.

## And finally, here's how I've written this in Java...

```java

public class CoffeeMaker {

  // private class 'fields', so they cannot be altered
    private int coffeePerCup = 20;
    private int waterPerCup = 14;
    // cupsToMake is a 'public' variable so we get a 'setter' method
    public int cupsToMake;

    // initialize class with number of cups of coffee requested
    public CoffeeMaker(int cupsToMake) {
        this.cupsToMake = cupsToMake;
    }

    // method to make coffee
    public void makeCoffee() {
        int coffeeNeeded = coffeePerCup * cupsToMake;
        int waterNeeded = waterPerCup * cupsToMake;

        System.out.println("You will need " + waterNeeded + " oz. of water and " + coffeeNeeded + " grams of coffee beans to make " + cupsToMake + " cups of coffee.");
    }

    public static void main(String[] args) {
        // Yep! we're initializing an instance of the class inside the class itself!
        CoffeeMaker myOrder = new CoffeeMaker(5);
        myOrder.makeCoffee();

        // Console Output
        // > You will need 70 oz of water and 100 grams of coffee to make 5 cups of coffee.
    }

}

```

This approach is fairly similar to Ruby, and I _hope_ I wrote them in a way that you're able to see the similarities between the two blocks of code.

We have some class level variables that are constant and immutable (there is no 'setter' method to alter them), and we have our `public` `cupsToMake` variable that can be updated as needed.

We create a method called `makeCoffee` that calculates the quantities, and outputs the results, that we can call on any instance of our `CoffeeMaker`.

The benefits of the Object Oriented approach are the same across OO languages. I find reusability of classes, and instances of classes, appealing. I enjoy being able to say "OK here's my instance of _CLASS_ and now I'm going to do _X Y Z_ to _only_ this instance."

---

I hope this weird romp through some Ruby/JavaScript/Java code was fun for someone other than me! I hope it encourages some people who might be wary of Java to give it a try. It's not a scary as it first seems, and can be really approachable when you choose the right learning tools.

And if you're a Java developer looking at this and ripping their hair out, **PLEASE LET ME KNOW!** My goal is simply to keep improving, so I'll take any tips or knowhow you're willing to throw my way.

xx

-Emily / TheCodePixi
