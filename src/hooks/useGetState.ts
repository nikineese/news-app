import {useSelector} from "react-redux";

export const useGetState = (stateProp: string) => {
    return useSelector((state: any) => state[stateProp])
}