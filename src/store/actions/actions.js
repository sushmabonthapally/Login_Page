
export const LOGINDETAILS = "LOGINDETAILS"
export const USERNAME = "USERNAME"
export const PASSWORD = "PASSWORD"

export const saveRes = (event)=>{
     return {
        type :  USERNAME,
        value : event.target.value
    }
}

export const username = (event)=>{
    return (dispatch) =>{
        dispatch(saveRes(event));
                }
            }

export const password = (e)=>
{
    return {
        type : PASSWORD,
        value : e.target.value
    }
}