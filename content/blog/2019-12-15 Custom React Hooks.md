---
id: posts/2019-12-15 Custom React Hooks
path: /posts/2019-12-15 Custom React Hooks
date: 2019-12-15
title: Refactoring a React component using custom hooks
---

I've found it extremely helpful when writing React components using hooks to create new abstractions for my multiple hooks by grouping them into a single "custom hook". Reasoning about a single hook is very simple (literally composed of a single element), but when your single component needs to keep track of multiple pieces of states, or actions that act on that state, things become tend to become more complex.

At this point it's a great idea to abstract away that complexity, exposing only what is relevant in the context of the consumer.

```jsx
/* MyApp.jsx */
function MyApp() {
  const [isVisible, setVisible] = useState(false)
  const open = () => setVisible(true)
  const close = () => setVisible(false)

  return (
    <main>
      <Modal isVisible={isVisible} closeButton={close}>
        <h1>I'm in a dialog!</h1>
        <button onClick={close}>Close</button>
      </Modal>

      <button onClick={open}>Open dialog</button>
    </main>
  )
}
```

## Step one: create an empty hook

```jsx
/* use-modal.jsx */
function useModal() {
  return undefined
}
```

...and use it in your component.

```jsx
// import the hook
import {useModal} from './use-modal';

function MyApp() {
  // call it,
  const unusedValue = useModal();

  const [isVisible, setVisible] = useState(false);
  // Everything else unchanged....

  return (/* ... */);
}
```

☝️ This shouldn't affect our component at all.

This doesn't achieve much, but it gives us a good starting point to start pulling code from our component into the cutom hook we've made.

## Step two: Start pulling over hooks

Let's make the smallest incremental changes: move over the bare minimum from our component into the hook, testing each time we it still behaves as expected.

```jsx
export function useModal() {
  // start by moving `useState` into our hook.
  const [isVisible, setVisible] = useState(false)

  // The hook should return what the component needs.
  return { isVisible, setVisible }
}
```

Now that that hook implements `useState`, we can start using `useModal`'s values in our component.

```jsx
function MyApp() {
  // `useModal` now gives us the visibility and a setter function
  const {isVisible, setVisible} = useModal();

  // We don't need useState anymore, thanks to useModal
  // const [isVisible, setVisible] = useState(false);

  const open = () => setVisible(true)
  const close = () => setVisible(false)
```

We should be extra careful to make sure that our tests still pass (_you are testing your components, right?_) and ensure that our component still works as it did before.

So far, our custom hook is acting as a simple wrapper for `useState`. Let's look at where `setVisible` is being used to decide what to do next.

```jsx
function MyApp() {
  const { isVisible, setVisible } = useModal()

  // This seems to be the only place we're using `setVisible`
  const open = () => setVisible(true)
  const close = () => setVisible(false)
  // ⬆ Let's move all this to the hook too! ⬆

  return (
    <main>
      <Modal isVisible={isVisible} closeButton={close}>
        <h1>I'm in a dialog!</h1>
        <button onClick={close}>Close</button>
      </Modal>

      <button onClick={open}>Open dialog</button>
    </main>
  )
}
```

## Step three: Finalize the API/complete the abstraction

Now let's move over the bare minimum from our component into the hook. We should be extra careful to make sure that our tests still pass (you are testing your components, right?) and our component still works.

> Since the `actions` block has no external references, we know that we can move these actions into our hook.

```jsx
function useModal() {
  const [isVisible, setVisible] = useState(false)

  // Bring the actions into our hook.
  const actions = {
    open: () => setVisible(true),
    close: () => setVisible(false),
  }

  // By providing actions to control the modal's state,
  // we no longer need to export `setVisible`.
  return { isVisible, actions }
}
```

Having pulled all the state logic successfully into the custom hook, our stateless component is starting to look a whole lot more stateless again!

```jsx
function MyApp() {
  // The modal's state is now completely isolated from our component
  const {
    isVisible,
    actions: { open, close },
  } = useModal()

  return (
    <main>
      <Modal isVisible={isVisible} closeButton={close}>
        <h1>I'm in a dialog!</h1>
        <button onClick={close}>Close</button>
      </Modal>

      <button onClick={open}>Open dialog</button>
    </main>
  )
}
```

It could be tempting to go further if you found yourself writing `toggle` functions quite a bit, and expose `toggle` along side `open` and `close`.

```jsx
const {
  isVisible,
  actions: { open, close },
} = useModal()
const toggle = () => (isVisible ? open() : close())
```

You wouldn't be wrong to do that, don't forget:

> We choose the abstractions we compute by
