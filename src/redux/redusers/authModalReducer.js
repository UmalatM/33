


const intialState = {
    open: false,
    view: "login",
};

const authModalReducer = (state = intialState,action) => {
    switch (action.type ) {

        case "AUTH_MODAL_TYPES.MODAL":
            return action.payload;


        default:
            return state;

    }
};


export default authModalReducer;