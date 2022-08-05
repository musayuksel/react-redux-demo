## redux / react-redux example
A demo repo to give an example on how redux might be used.
See the official redux docs [here](https://redux.js.org/usage/).

---

### Pattens you should know: 

Reducer:
A reducer is used to check which actions should be preformed on your store, it's a switch statement that will have a case per action and then return the current state by default for both initialisation.

```js
const myReducer = (state = {}, action) => {
  switch (action.type) {

    case 'MY_ACTION':
      // return some state mutation
      return {
        ...state,
        name: 'dave'
      }

    default:
      return state;
  }
}
```

> note: you should never directly mutate the state object, always return a new object / value.

<br />

Actions:
Actions are used to trigger events on your reducer, thus effecting the state. These are just functions that return an object with a `type` and maybe a payload too, you're free to name your payload(s) whatever you want to so long as the reducer accounts for it.

```js
// no payload
const myAction = () => ({
  type: 'MY_ACTION',
})

// with a payload
const myActionWithPayload = data => ({
  type: 'MY_ACTION_WITH_PAYLOAD',
  data,
})
```

---

### Hooks

There are two common hooks you'll be using: `useSelector` and `useDispatch`.

in redux we 'dispatch' our actions to our store and then one of our reducers will pick up the event and modify the state accordingly. <br />
usage of the `useDispatch` hook will most likely be done as follows:
```js
import { useDispatch } from 'react-redux';
import { someAction } from './actions';  

const MyComponent = () => {
  // prepare the dispatch hook for usage
  const dispatch = useDispatch();

  // dispatch some action on componentDidMount
  useEffect(() => {
    dispatch(someAction());
  }, [])

  return (
    <>
      my component
    </>
  )
}
```

<br />

for `useSelector` we just use this to pick out whatever piece of state we want. You could just pull out the whole state, however this is bad practice and you should look to just pull out the parts you need. So if I needed access to the `user` section of the redux store I might do this:
```js
import { useSelector } from 'react-redux';

const MyComponent = () => {

  // using the useSelector hook gain access to just the 
  // user object.
  const user = useSelector(state => state.user);

  return (
    <>
      <p>{ user.name }</p>
    </>
  )
}
```
> note: you should never try to directly mutate redux state, e.g in this example if you tried to do `user.name = 'john'` then this will probably throw an error in the console but not crash the app, making it easy to miss and cause you problems later on. Always dispatch an action when modifying the state.

---

### Setup
with redux you need to wrap your application as high up in the component tree as possible. `react-redux` gives us a Provider we can use for this:
```js
// create react app index.js return statement

return (
  <Provider store={store}> 
    <App />
  <Provider />
)
```

The provider gives wants a store prop passing too it, this would be our actual redux store. 

To create a store you'll need at least one reducer, or if you have more than one reducer you can combine them all like so:
```js
// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user';

const reducers = combineReducers({
  user: userReducer,
});

export default configureStore({
  reducer: reducers,
});
```
or (for just one reducer)
```js
// store.js
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user';

export default configureStore({
  reducer: userReducer,
});
```

> note: in these example I default export the store that `configureStore` creates for you, this is what you'll want to pass to the redux provider as the store prop

---

### Middleware
the most common Middleware you'll probably come across is `redux-thunk`, over the past couple of years redux toolkit now integrates `redux-thunk` directly into redux. For this reason there isn't too much to go into here as you might not need this info right now. We can still take a look at thunks in redux though.

---

### Thunks (redux-thunk)
A thunk is essentially an action however it allows you to return a function instead of an object. you could use this to preform async events or some some maths, anything you need.

thunks can take two arguments, `dispatch` and `getState`. you use them roughly the same as you would the hooks.

example:
```js
const thunkExample = (dispatch, getState) => {
  // get just the user object from the store
  const { user } = getState();

  // preform some logic if you like
  if (user.name) {
    // ... do something
  }

  // use async events or promises etc....
  setTimeout(() => {
    dispatch(someAction())
  }, 1000)
}
```

---

### Useful things
- Install Redux dev tools
  - [chromium](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
  - [Firefox / Gecko](https://addons.mozilla.org/en-GB/firefox/addon/reduxdevtools/)

- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [react-redux](https://react-redux.js.org/introduction/getting-started)
- [more about redux pattens](https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns)

---
### Challenge

Clone this repo and try to create your own thunk, either expand the user object or if you feel up to it create your own reducer as well!

