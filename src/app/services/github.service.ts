import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GitHubUser, Repository } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';
  private token = ''; // Add your GitHub token for higher rate limits

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<GitHubUser> {
    const headers = this.getHeaders();
    return this.http.get<GitHubUser>(
      `${this.apiUrl}/users/${username}`,
      { headers }
    ).pipe(
      catchError(error => {
        console.error('Error fetching user:', error);
        return throwError(() => new Error('Failed to fetch user data'));
      })
    );
  }

  getUserRepositories(
    username: string,
    page: number = 1,
    per_page: number = 30
  ): Observable<Repository[]> {
    const headers = this.getHeaders();
    return this.http.get<Repository[]>(
      `${this.apiUrl}/users/${username}/repos?page=${page}&per_page=${per_page}&sort=updated&direction=desc`,
      { headers }
    ).pipe(
      catchError(error => {
        console.error('Error fetching repositories:', error);
        return throwError(() => new Error('Failed to fetch repositories'));
      })
    );
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    });

    if (this.token) {
      headers = headers.set('Authorization', `token ${this.token}`);
    }

    return headers;
  }
}