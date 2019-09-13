1. What problem does the context API help solve?

We no longer have to pass props down from component to component

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: Whenever you want to change the state of the application, you shoot off an action. That’s the only way that the state should be changed. However, unlike Flux, action creators in Redux do not send the action to the dispatcher. Instead, they return a formatted action object.

Reducers: When the store needs to know how an action changes the state, it asks the reducers. The root reducer takes charge and slices the state up based on the state object’s keys. It passes each slice of state to the reducer that knows how to handle it.


Store: It takes care of holding on to the whole state tree, (hense, single source of truth). It then delegates the work of figuring out what state changes need to happen. The store has also taken over dispatching


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is global, and your component state is local. We use app state when the number of components start to increase and passing props becomes too much

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a separate node package. Since the Redux action -> reducer flow is synchronous, we will use Redux Thunk to make the flow asynchronous so we can make API calls from our action creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

This week was hard :( Honestly no favorites yet. Maybe ask me again next week 
