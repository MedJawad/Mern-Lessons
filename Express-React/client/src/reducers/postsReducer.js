const initial_state = {
    items:[],
    isLoading : false,
    
};


const posts = (state=initial_state,action ){


    switch (action.type) {
        case "REQUEST_POSTS":
            //CHANGING STATE WHEN TRIGERRED
            return {
                items : [],
                isLoading : true,
            };
    
        default:
            break;
    }

}