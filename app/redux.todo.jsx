var redux = require('redux');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state
  }
};

var store = redux.createStore(reducer,redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(()=>{
  console.log(store.getState());
});

var action = {
  type : 'CHANGE_SEARCH_TEXT',
  searchText : 'query'
};

store.dispatch(action);

