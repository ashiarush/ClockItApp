import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { map } from "rxjs/operators";
import { User } from "../models/user";

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: "Bearer " + localStorage.getItem("token")
  })
};
@Injectable({
  providedIn: "root"
})
export class EmployerService {
  employersUrl = "http://localhost:5000/api/employers/";
  currentUser: User;

  constructor(private http: HttpClient, private authService: AuthService) {}

  updateEmployer(model: any) {
    const formData = new FormData();
    formData.append("profileimage", model.file, model.file.name);
    return this.http
      .put(
        this.employersUrl + "update/" + this.authService.decodedToken.nameid,
        formData,
        httpOptions
      )
      .pipe(
        map((response: any) => {
          const user = response;
          if (user.result.succeeded) {
            console.log(user);
          }
        })
      );
  }
}