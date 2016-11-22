export default function ingredientReducer(state = [], action) {
  let newArray = state.slice()

  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [
          ...state, action.payload]
        // default: return state

    case 'REMOVE_INGREDIENT':
      // let new = [...state]
      state.splice(action.payload, 1)
       return state      // return newArray
      // Object.assign({}, state, {
      //    state.map((ingredient, index) =>{
      //           if(state.index === action.index) {
                    // state.slice(index, 1)

                // }})
                // return ingredients

        // })
        default:
          return state
        }
      }
