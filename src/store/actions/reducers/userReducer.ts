import { User, UserAction, UserState } from "../../../types/user";

const defaulState:UserState={
    data:{} as User,
    loading:false,
    error:""    
}

const userReducer = (state:UserState=defaulState,action:UserAction)=>{
    return state;
}

export default userReducer;