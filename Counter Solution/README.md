# React version of a "Hello World!" program

## Create a counter

Display the current count and have a button to increment the counter

# Program

![CounterGraphic](https://user-images.githubusercontent.com/34951139/196233304-0fa0d739-20c7-4a39-aa8c-742959b475ec.png)

# useState

![useState](https://user-images.githubusercontent.com/34951139/196236863-1ccb9593-d61f-4d3b-bd84-e21bd487499a.png)
React has special functions called hooks. For this example, it will only be necessary to understand the hook `useState.` This hook is how you should manage state in React.
State is anything in your program that is stored and that can change. A user's login status is state, a bank account balance is state, and whether or not you are
using dark mode is state. So, `useState` is needed whenever you want to have an element of your webpage that is changing or that stores some kind of data/value.

`useState()` takes one argument (the value inside of the parentheses) and outputs an array (list). The array looks like `[a variable, a function that changes the variable]`.
React doesn't name these- you can choose any valid variable names. However, the convention is that whatever you call your variable, the function will be called `set[variable name]`.
If my variable was `count`, my function would be something like `setCount`.

In most languages, Javascript included, you set values to variables by using the `=` sign. `let count = 2;`, `let list = [1,52,3]`, etc. React will also let you set values
to the variable that was returned by `useState`. In the previous example, I can do `count = 2;`. However, this will NOT update my webpage with the new value. This is because
in React, to update the variable and update my webpage with the new value, I need to use the function that `useState` provided. I have to run `setCount(2);` and my code
will work as intended. Notice that there is no `=` sign, there is no direct assignment. Remember that this is for changing elements on your webpage, not every variable.
You still use normal variables in your code, but whenever you need an element on your webpage to have a changing value and store it's state, you will usually use `useState`.
