
import { createStore,combineReducers} from 'redux'
import{ReduceCount} from './reducer'

// export const rootReduce=combineReducers({
//     ReduceCount
// })
export const store=createStore(ReduceCount)