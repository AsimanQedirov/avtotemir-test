import {axiosInstance} from "@/config/interceptor";

export enum NEWS {
    GET = "news"
}
export const getList = () => axiosInstance(NEWS.GET);