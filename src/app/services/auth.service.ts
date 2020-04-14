import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  public isAuthenticated(): boolean {
    const userData = sessionStorage.getItem("userData");
    if (userData && userData.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  public async getUserDetails(){
    const userData = await sessionStorage.getItem("userData");
    return JSON.parse(userData);
  }
  public async login(postdata) {
    const resData = {
      name: "Dileep Kumar",
      id: "009",
      token: "d2oi3rn43nfj53no5",
    };
    await sessionStorage.setItem("userData", JSON.stringify(resData));
    return true;
  }

  public signup(postdata) {}

  public async logout() {
    await sessionStorage.removeItem("userData");
    await sessionStorage.clear();
    return true;
  }
}
