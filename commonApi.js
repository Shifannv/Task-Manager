import axios from "axios";

export const commonAPI=async(httpMethod,url,reqbody)=>{
    let reqConfig={
        method:httpMethod,
        url,
        data:reqbody
    }
    return await axios(reqConfig).then((response)=>{
        return response
    })
    .catch((error)=>{
        return error
    })
}