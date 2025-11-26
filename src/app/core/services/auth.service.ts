import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

interface LoginResponse {
  token: string;
  user: { id: number; name: string; email: string };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>(`${environment.apiUrl}/auth/signin`, { email, password })
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          this.loggedIn.next(true);
        }),
        catchError((err) => {
          const message = err.error?.message || 'Login failed';
          return throwError(() => new Error(message));
        })
      );
  }

  signup(
    name: string,
    email: string,
    password: string,
    rePassword: string,
    phone: string
  ): Observable<any> {
    return this.httpClient
      .post(`${environment.apiUrl}/auth/signup`, { name, email, password, rePassword, phone })
      .pipe(
        tap(() => {}),
        catchError((err) => {
          const message = err.error?.message;
          return throwError(() => new Error(message));
        })
      );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
