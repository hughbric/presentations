# Developing Focus: Notes for your Reference

## Focus
How do you set focus on a specified HTML element?

There are four main ways to focus:
1) The `autoFocus` attribute on <input> elements
  - Focuses component on mount

2) The `focus()` method on HTMLElements
  ```js
    const input = document.querySelector('input');
    input.focus();
  ```
3) Refs
  - Example

4) Callback Refs
  - We will return to this
















### Accessibility
MDN:
> Automatically focusing a form control can confuse visually-impaired people using screen-reading technology and people with cognitive impairments. When autofocus is assigned, screen-readers "teleport" their user to the form control without warning them beforehand.






## Refs and the Dom

### What is a ref?
Refs provide a way to access DOM nodes or React elements created in the render method.


In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props.

However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow.

The child to be modified could be:
  - an instance of a React component
  - or it could be a DOM element

For both of these cases, React provides refs as an escape hatch.






### When to Use Refs
There are a few good use cases for refs:

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

Avoid using refs for anything that can be done declaratively.
For example, instead of exposing `open()` and `close()` methods on a `Dialog` component, pass an `isOpen` prop to it.












### Creating Refs

Refs are created using `React.createRef()` and attached to React elements via the `ref` attribute.

Refs are commonly assigned to an instance property
when a component is constructed so they can be referenced
throughout the component.

An alternative:

#### useRef
```js
const refContainer = useRef(initialValue);
```

`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`).

The returned object will persist for the full lifetime of the component.

If you pass a ref object to React:
`<div ref={myRef} />`
React will set its `.current` property to the corresponding DOM node whenever that node changes.

#### Broader uses
Essentially, `useRef` is like a “box” that can hold a mutable value in its `.current` property.

It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.


















4) Callback refs
  - Instead of passing a `ref` attribute created by `createRef()`, you pass a function.

  - You can pass callback refs between components
    like you can with object refs that were created with `createRef()`

  - NB: Exposing DOM nodes is generally not recommended because it breaks component encapsulation.
    - Components from relying on each other’s DOM structure is not great.

  - Useful for: [How can I measure a DOM node?](https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node)

















### A popular non-recommended alternative approach

Explicitly passing a ref as a differently named prop.
  - Example



















### The recommended approach

`forwardRef()`

Ref forwarding is an opt-in feature that lets some components take a ref they receive,
and pass it further down (in other words, “forward” it) to a child.















### What just happened?

  1) The `autoFocus` attribute on <input> elements

  2) The `focus()` method on HTMLElements

  3) Refs, including how to create them with `useRef` and `createRef`

  4) Callback Refs and when to use them

  5) Ref forwarding, `forwardRef`







### Acknowledgements
Most of this is taken from the React docs.
