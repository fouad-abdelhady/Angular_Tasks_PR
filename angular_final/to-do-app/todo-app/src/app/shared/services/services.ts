import { HttpHeaders } from "@angular/common/http";
export class Services{
    private baseUrl:string;
    private static headers?:HttpHeaders;
    constructor(){
        this.baseUrl = "http://localhost:4000/"; 
    }
    getUrl(api:string):string{
        return this.baseUrl + api;
    }
    setHeaders(userName:string, password:string){
        localStorage.setItem('token', `${userName}:${password}`);
    }
    getHeaders(){
        Services.headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('token')}`});
        return  Services.headers;
    }
    saveUser(userName:string, fullName:string, profileImg:string){
        localStorage.setItem('userName',userName);
        localStorage.setItem('fullName',fullName);
        localStorage.setItem('image',profileImg);
    }
    getUserInfo():{name:string, image:string}{
        return { name:localStorage.getItem('userName')!, image:localStorage.getItem('image')!};
    }
}