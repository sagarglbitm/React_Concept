const init={count:10}

export function ReduceCount(state=init,action){

    switch(action.type){
        case 'inc':
            return{...state,count:state.count+1}
        case 'decre':
            return{...state,count:state.count-1}
        default:
            return state
    }
}