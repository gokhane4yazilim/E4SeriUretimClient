import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserModel } from 'src/models/user/userModel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'https://localhost:5001/api/account';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private currentUserSource = new BehaviorSubject<UserModel>(null);
  currentUser$ = this.currentUserSource.asObservable();
  currentUser = {}

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) { }

  register(user: any): Observable<any> {
    return this.http.post(this.baseUrl + '/register', user)
      .pipe(
        catchError(this.handleError)
      )
  }

  login(user: any) {
    return this.http.post<any>(this.baseUrl + '/login', user)
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token);
        this.currentUserSource.next(user);
        this.router.navigate(['/']);
      })
  }

  getToken() {
    return localStorage.getItem('token');
  }

  get isLoggedIn(): boolean {
    let token = localStorage.getItem('token');
    return (token !== null) ? true : false;
  }

  logout() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.currentUserSource.next(null);
      this.router.navigate(['account/login'])
    }
  }

  getUserProfile(id): Observable<any> {
    return this.http.get(this.baseUrl, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  getCurrentUserValue() {
    return this.currentUserSource.value;
  }

  loadCurrentUser(token: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(this.baseUrl, { headers }).pipe(map((user: UserModel) => {
      if (user) {
        localStorage.setItem('token', user.token);
        this.currentUserSource.next(user);
      }
    }));
  }

  // login(values: any){
  //   return this.http.post(this.baseUrl + '/login', values).pipe(map((user: UserModel) => {
  //     if (user){
  //       localStorage.setItem('token', user.token);
  //       this.currentUserSource.next(user);
  //     }
  //   }));
  // }

  // register(values: any){
  //   return this.http.post(this.baseUrl + '/register', values).pipe(map((user: UserModel) => {
  //     if (user){
  //       localStorage.setItem('token', user.token);
  //       this.currentUserSource.next(user);
  //     }
  //   }));
  // }

  // logout(){
  //   localStorage.removeItem('token');
  //   this.currentUserSource.next(null);
  //   this.router.navigateByUrl('/account/login');
  // }

  // checkUserNameExists(userName: string){
  //   return this.http.get(this.baseUrl + '/usernameexists?username=' + userName);
  // }
}
