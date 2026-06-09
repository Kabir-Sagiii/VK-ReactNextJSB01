// In Reducer Function we implement all the different logics that is
// required to update Redux Store.

function nameReducer(state, action) {
  // state provides the access of current redux store data
  //action stores the data coming from dispatch()
  var newData = null;
  if (action.type === "name") {
    newData = action.payload;
  }

  return newData;
}

export default nameReducer;
