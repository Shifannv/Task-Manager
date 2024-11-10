import { commonAPI } from "./commonApi"
import { serverUrl } from "./serverUrl"


export const addTaskAPI=async(reqbody)=>{
    return await commonAPI('post',`${serverUrl}/Tasks`,reqbody)
}
export const getTaskAPI=async()=>{
    return await commonAPI('get',`${serverUrl}/Tasks`,"")
}

export const TaskdeleteAPI=async(id)=>{
    return await commonAPI('delete',`${serverUrl}/Tasks/${id}`,{})
}
