// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { GithubService } from './services/github.service';
// import { LeftPanelComponent } from './components/left-panel/left-panel';
// import { TabsSectionComponent } from './components/tabs-section/tabs-section';
// import { ContributionChartComponent } from './components/contribution-chart/contribution-chart';
// import { GitHubUser, Repository } from './models/user.model';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HttpClientModule,
//     FormsModule,
//     LeftPanelComponent,
//     TabsSectionComponent,
//     ContributionChartComponent
//   ],
//   template: `
// <!-- Top Bar -->
// <div class="top-bar">
//   <div class="top-bar-left">
//     <button class="menu-btn">
//       <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
//         <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75Zm0 5a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75Z"></path>
//       </svg>
//     </button>

//     <a href="#" class="github-mark">
//       <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
//         <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.39.63 1.1 2.33.77 0 .54.01 1.17.01 1.3 0 .21-.15.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
//       </svg>
//     </a>

//     <span class="username">{{ username }}</span>
//   </div>

//   <div class="top-bar-search">
//     <input type="text" class="search-box" placeholder="Type / to search" 
//            [(ngModel)]="searchInput" (keypress)="onKeyPress($event)" />
//     <span class="search-hint">Type / to search</span>
//   </div>

//   <div class="top-bar-right">
//     <button class="icon-btn" title="Settings">
//       <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
//         <path d="m8.568.75.068 1.008c.381.048.754.15 1.109.306l.724-.571.707.707-.572.725c.156.354.257.727.305 1.108l1.008.068-.01.752-1.008.068c-.048.381-.15.754-.306 1.109l.571.724-.707.707-.725-.572c-.354.156-.727.257-1.108.305l-.068 1.008h-.752l-.068-1.008c-.381-.048-.754-.15-1.109-.306l-.724.571-.707-.707.572-.725c-.156-.354-.257-.727-.305-1.108l-1.008-.068.01-.752 1.008-.068c.048-.381.15-.754.306-1.109l-.571-.724.707-.707.725.572c.354-.156.727-.257 1.108-.305l.068-1.008h.752ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path>
//       </svg>
//     </button>

//     <button class="icon-btn" title="Notifications">
//       <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
//         <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2ZM8 1.5A3.5 3.5 0 0 0 4.5 5v2a6 6 0 0 1-.25 1.54H3V5a5 5 0 0 1 10 0v3.5h-1.25A6 6 0 0 1 8.5 7V5A3.5 3.5 0 0 0 8 1.5Z"></path>
//       </svg>
//     </button>

//     <div class="dropdown-wrapper">
//       <button class="icon-btn" title="Create">
//         <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
//           <path d="M8 3.5a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 .5-.5Z"></path>
//         </svg>
//       </button>
//     </div>

//     <button class="icon-btn" title="Help">
//       <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
//         <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm5.904-1.662a.238.238 0 0 0-.858.143 6.889 6.889 0 0 0-.084.63c0 .661.169 1.337.682 1.654a1.846 1.846 0 0 0 1.195.378c1.014 0 1.894-.697 1.894-1.782 0-.522-.186-1.039-.682-1.39a1.998 1.998 0 0 0-1.23-.425c-.563 0-1.036.153-1.237.392Zm7.36 5.252h-1.668a.75.75 0 1 1 0-1.5h1.668a.75.75 0 1 1 0 1.5Zm-1.668-4h1.668a.75.75 0 1 1 0 1.5H11.6a.75.75 0 1 1 0-1.5Z"></path>
//       </svg>
//     </button>

//     <button class="profile-btn" title="Profile">
//       <img [src]="user?.avatar_url || 'https://avatars.githubusercontent.com/u/5489153?v=4'" alt="Profile" class="profile-avatar" />
//     </button>
//   </div>
// </div>

// <!-- Main Container with Two-Column Layout -->
// <div class="main-container">
//   <!-- Left Sidebar -->
//   <aside class="sidebar-left">
//     <app-left-panel [user]="user"></app-left-panel>
//   </aside>

//   <!-- Right Content Area -->
//   <main class="content-area">
//     <div *ngIf="loading" class="loading-state">
//       <div class="spinner"></div>
//       <p>Loading profile...</p>
//     </div>

//     <div *ngIf="error" class="error-state">
//       <p>{{ error }}</p>
//       <button (click)="loadUserProfile()" class="retry-btn">Retry</button>
//     </div>

//     <ng-container *ngIf="!loading && !error && user">
//       <app-tabs-section [repositories]="repositories" [user]="user"></app-tabs-section>
//       <app-contribution-chart [username]="username"></app-contribution-chart>
//     </ng-container>
//   </main>
// </div>

// <!-- Footer -->
// <footer class="github-footer">
//   <div class="footer-content">
//     <svg viewBox="0 0 16 16" width="24" height="24" fill="currentColor" class="footer-logo">
//       <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.39.63 1.1 2.33.77 0 .54.01 1.17.01 1.3 0 .21-.15.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
//     </svg>
//     <span class="footer-copyright">© 2025 GitHub, Inc.</span>
//     <a href="#" class="footer-link">Terms</a>
//     <a href="#" class="footer-link">Privacy</a>
//     <a href="#" class="footer-link">Security</a>
//     <a href="#" class="footer-link">Status</a>
//     <a href="#" class="footer-link">Community</a>
//     <a href="#" class="footer-link">Docs</a>
//     <a href="#" class="footer-link">Contact</a>
//     <a href="#" class="footer-link">Manage cookies</a>
//     <a href="#" class="footer-link">Do not share my personal information</a>
//   </div>
// </footer>
//   `,
//   styles: [`
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// :host {
//   display: block;
//   background-color: #0d1117;
//   color: #c9d1d9;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
//   min-height: 100vh;
// }

// /* TOP BAR */
// .top-bar {
//   background-color: #0d1117;
//   border-bottom: 1px solid #30363d;
//   padding: 8px 16px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 16px;
//   height: 56px;
//   position: sticky;
//   top: 0;
//   z-index: 1000;
// }

// .top-bar-left {
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   flex: 0 0 auto;
// }

// .menu-btn, .icon-btn {
//   background: none;
//   border: none;
//   color: #c9d1d9;
//   cursor: pointer;
//   padding: 4px 8px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 4px;
//   transition: all 0.2s ease;
// }

// .menu-btn:hover, .icon-btn:hover {
//   background-color: #30363d;
//   color: #79c0ff;
// }

// .github-mark {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #c9d1d9;
//   text-decoration: none;
//   padding: 4px 8px;
//   border-radius: 4px;
//   transition: all 0.2s ease;
// }

// .github-mark:hover {
//   background-color: #30363d;
// }

// .username {
//   font-size: 14px;
//   font-weight: 500;
//   color: #c9d1d9;
//   padding: 0 8px;
//   white-space: nowrap;
// }

// .top-bar-search {
//   position: relative;
//   flex: 1;
//   max-width: 400px;
// }

// .search-box {
//   width: 100%;
//   background-color: #0d1117;
//   border: 1px solid #30363d;
//   border-radius: 6px;
//   color: #c9d1d9;
//   padding: 8px 12px;
//   font-size: 13px;
//   transition: all 0.2s ease;
// }

// .search-box:focus {
//   outline: none;
//   border-color: #58a6ff;
//   box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1);
// }

// .search-hint {
//   position: absolute;
//   right: 12px;
//   top: 50%;
//   transform: translateY(-50%);
//   font-size: 12px;
//   color: #8b949e;
//   pointer-events: none;
// }

// .top-bar-right {
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   flex: 0 0 auto;
// }

// .dropdown-wrapper {
//   display: flex;
//   align-items: center;
// }

// .profile-btn {
//   background: none;
//   border: none;
//   cursor: pointer;
//   padding: 2px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.2s ease;
// }

// .profile-btn:hover {
//   opacity: 0.8;
// }

// .profile-avatar {
//   width: 28px;
//   height: 28px;
//   border-radius: 50%;
//   border: 1px solid #30363d;
// }

// /* MAIN LAYOUT */
// .main-container {
//   display: grid;
//   grid-template-columns: 296px 1fr;
//   gap: 24px;
//   max-width: 1400px;
//   margin: 0 auto;
//   padding: 24px 16px;
// }

// .sidebar-left {
//   width: 296px;
// }

// .content-area {
//   flex: 1;
//   min-width: 0;
// }

// .loading-state, .error-state {
//   text-align: center;
//   padding: 60px 20px;
//   color: #8b949e;
// }

// .spinner {
//   width: 40px;
//   height: 40px;
//   border: 4px solid #30363d;
//   border-top-color: #58a6ff;
//   border-radius: 50%;
//   animation: spin 1s linear infinite;
//   margin: 0 auto 12px;
// }

// @keyframes spin {
//   to { transform: rotate(360deg); }
// }

// .retry-btn {
//   background-color: #238636;
//   border: 1px solid #238636;
//   color: #fff;
//   padding: 6px 16px;
//   border-radius: 6px;
//   cursor: pointer;
//   margin-top: 12px;
//   transition: all 0.2s ease;
// }

// .retry-btn:hover {
//   background-color: #2ea043;
// }

// /* FOOTER */
// .github-footer {
//   background-color: #0d1117;
//   padding: 32px 16px;
//   margin-top: 60px;
// }

// .footer-content {
//   max-width: 1400px;
//   margin: 0 auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 24px;
//   row-gap: 12px;
// }

// .footer-logo {
//   color: #6e7681;
//   margin-right: 8px;
// }

// .footer-copyright {
//   font-size: 12px;
//   color: #6e7681;
//   margin-right: 16px;
// }

// .footer-link {
//   font-size: 12px;
//   color: #58a6ff;
//   text-decoration: none;
//   transition: color 0.2s ease;
//   white-space: nowrap;
// }

// .footer-link:hover {
//   text-decoration: underline;
//   color: #79c0ff;
// }

// /* RESPONSIVE */
// @media (max-width: 1024px) {
//   .main-container {
//     grid-template-columns: 1fr;
//     gap: 16px;
//     padding: 16px 12px;
//   }

//   .sidebar-left {
//     width: 100%;
//     display: flex;
//     gap: 24px;
//     border-bottom: 1px solid #30363d;
//     padding-bottom: 24px;
//   }
// }

// @media (max-width: 768px) {
//   .top-bar {
//     padding: 6px 12px;
//     height: 50px;
//     gap: 12px;
//   }

//   .top-bar-search {
//     display: none;
//   }

//   .username {
//     font-size: 13px;
//     padding: 0 4px;
//   }

//   .profile-avatar {
//     width: 24px;
//     height: 24px;
//   }

//   .main-container {
//     padding: 12px;
//   }

//   .sidebar-left {
//     flex-direction: column;
//     width: 100%;
//   }

//   .footer-content {
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//   }
// }

// @media (max-width: 480px) {
//   .top-bar {
//     padding: 4px 8px;
//     height: 44px;
//     gap: 8px;
//   }

//   .github-mark {
//     display: none;
//   }

//   .username {
//     display: none;
//   }

//   .top-bar-right {
//     gap: 6px;
//   }

//   .profile-avatar {
//     width: 22px;
//     height: 22px;
//   }
// }
//   `]
// })
// export class AppComponent implements OnInit {
//   user: GitHubUser | null = null;
//   repositories: Repository[] = [];
//   loading: boolean = true;
//   error: string = '';
//   username: string = 'shreeramk';
//   searchInput: string = '';

//   constructor(private githubService: GithubService) {}

//   ngOnInit(): void {
//     this.loadUserProfile();
//   }

//   loadUserProfile(): void {
//     this.loading = true;
//     this.error = '';

//     this.githubService.getUser(this.username).subscribe({
//       next: (user) => {
//         this.user = user;
//         this.loadRepositories();
//       },
//       error: (err) => {
//         this.error = `Failed to load profile for user "${this.username}". Please check the username.`;
//         this.loading = false;
//         console.error('Error:', err);
//       }
//     });
//   }

//   loadRepositories(): void {
//     this.githubService.getUserRepositories(this.username, 1, 50).subscribe({
//       next: (repos) => {
//         this.repositories = repos.sort((a, b) => {
//           if (b.stargazers_count !== a.stargazers_count) {
//             return b.stargazers_count - a.stargazers_count;
//           }
//           return (
//             new Date(b.updated_at).getTime() -
//             new Date(a.updated_at).getTime()
//           );
//         });
//         this.loading = false;
//       },
//       error: (err) => {
//         this.error = 'Failed to load repositories';
//         this.loading = false;
//         console.error('Error:', err);
//       }
//     });
//   }

//   searchUser(): void {
//     if (this.searchInput.trim()) {
//       this.username = this.searchInput.trim();
//       this.searchInput = '';
//       this.loadUserProfile();
//     }
//   }

//   onKeyPress(event: KeyboardEvent): void {
//     if (event.key === 'Enter') {
//       this.searchUser();
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GithubService } from './services/github.service';
import { LeftPanelComponent } from './components/left-panel/left-panel';
import { TabsSectionComponent } from './components/tabs-section/tabs-section';
import { ContributionChartComponent } from './components/contribution-chart/contribution-chart';
import { GitHubUser, Repository } from './models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    LeftPanelComponent,
    TabsSectionComponent,
    ContributionChartComponent
  ],
  template: `
<!-- Top Bar -->
<div class="top-bar">
  <div class="top-bar-left">
    <button class="menu-btn">
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
        <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75Zm0 5a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75Z"></path>
      </svg>
    </button>

    <a href="#" class="github-mark">
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.39.63 1.1 2.33.77 0 .54.01 1.17.01 1.3 0 .21-.15.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
      </svg>
    </a>

    <span class="username">{{ username }}</span>
  </div>

  <div class="top-bar-search">
    <input type="text" class="search-box" placeholder="Type / to search" 
           [(ngModel)]="searchInput" (keypress)="onKeyPress($event)" />
    <span class="search-hint">Type / to search</span>
  </div>

  <div class="top-bar-right">
    <button class="icon-btn" title="Settings">
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
        <path d="m8.568.75.068 1.008c.381.048.754.15 1.109.306l.724-.571.707.707-.572.725c.156.354.257.727.305 1.108l1.008.068-.01.752-1.008.068c-.048.381-.15.754-.306 1.109l.571.724-.707.707-.725-.572c-.354.156-.727.257-1.108.305l-.068 1.008h-.752l-.068-1.008c-.381-.048-.754-.15-1.109-.306l-.724.571-.707-.707.572-.725c-.156-.354-.257-.727-.305-1.108l-1.008-.068.01-.752 1.008-.068c.048-.381.15-.754.306-1.109l-.571-.724.707-.707.725.572c.354-.156.727-.257 1.108-.305l.068-1.008h.752ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path>
      </svg>
    </button>

    <button class="icon-btn" title="Notifications">
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2ZM8 1.5A3.5 3.5 0 0 0 4.5 5v2a6 6 0 0 1-.25 1.54H3V5a5 5 0 0 1 10 0v3.5h-1.25A6 6 0 0 1 8.5 7V5A3.5 3.5 0 0 0 8 1.5Z"></path>
      </svg>
    </button>

    <div class="dropdown-wrapper">
      <button class="icon-btn" title="Create">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
          <path d="M8 3.5a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 .5-.5Z"></path>
        </svg>
      </button>
    </div>

    <button class="icon-btn" title="Help">
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm5.904-1.662a.238.238 0 0 0-.858.143 6.889 6.889 0 0 0-.084.63c0 .661.169 1.337.682 1.654a1.846 1.846 0 0 0 1.195.378c1.014 0 1.894-.697 1.894-1.782 0-.522-.186-1.039-.682-1.39a1.998 1.998 0 0 0-1.23-.425c-.563 0-1.036.153-1.237.392Zm7.36 5.252h-1.668a.75.75 0 1 1 0-1.5h1.668a.75.75 0 1 1 0 1.5Zm-1.668-4h1.668a.75.75 0 1 1 0 1.5H11.6a.75.75 0 1 1 0-1.5Z"></path>
      </svg>
    </button>

    <button class="profile-btn" title="Profile">
      <img [src]="user?.avatar_url || 'https://avatars.githubusercontent.com/u/5489153?v=4'" alt="Profile" class="profile-avatar" />
    </button>
  </div>
</div>

<!-- Main Container with Two-Column Layout -->
<div class="main-container">
  <!-- Left Sidebar -->
  <aside class="sidebar-left">
    <app-left-panel [user]="user"></app-left-panel>
  </aside>

  <!-- Right Content Area -->
  <main class="content-area">
    <div *ngIf="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading profile...</p>
    </div>

    <div *ngIf="error" class="error-state">
      <p>{{ error }}</p>
      <button (click)="loadUserProfile()" class="retry-btn">Retry</button>
    </div>

    <ng-container *ngIf="!loading && !error && user">
      <app-tabs-section [repositories]="repositories" [user]="user"></app-tabs-section>
      <app-contribution-chart [username]="username"></app-contribution-chart>
    </ng-container>
  </main>
</div>

<!-- Footer -->
<footer class="github-footer">
  <div class="footer-content">
    <svg viewBox="0 0 16 16" width="24" height="24" fill="currentColor" class="footer-logo">
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.39.63 1.1 2.33.77 0 .54.01 1.17.01 1.3 0 .21-.15.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
    </svg>
    <span class="footer-copyright">© 2025 GitHub, Inc.</span>
    <a href="#" class="footer-link">Terms</a>
    <a href="#" class="footer-link">Privacy</a>
    <a href="#" class="footer-link">Security</a>
    <a href="#" class="footer-link">Status</a>
    <a href="#" class="footer-link">Community</a>
    <a href="#" class="footer-link">Docs</a>
    <a href="#" class="footer-link">Contact</a>
  </div>
</footer>
  `,
  styles: [`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:host {
  display: block;
  background-color: #0d1117;
  color: #c9d1d9;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  min-height: 100vh;
}

/* TOP BAR */
.top-bar {
  background-color: #0d1117;
  border-bottom: 1px solid #30363d;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 56px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.top-bar-left {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
}

.menu-btn, .icon-btn {
  background: none;
  border: none;
  color: #c9d1d9;
  cursor: pointer;
  padding: 6px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.menu-btn:hover, .icon-btn:hover {
  background-color: #30363d;
  color: #79c0ff;
}

.github-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c9d1d9;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.github-mark:hover {
  background-color: #30363d;
}

.username {
  font-size: 14px;
  font-weight: 500;
  color: #c9d1d9;
  padding: 0 8px;
  white-space: nowrap;
}

.top-bar-search {
  position: relative;
  flex: 1;
  max-width: 400px;
}

.search-box {
  width: 100%;
  background-color: #0d1117;
  border: 1px solid #30363d;
  border-radius: 6px;
  color: #c9d1d9;
  padding: 8px 12px;
  font-size: 13px;
  transition: all 0.2s ease;
}

.search-box:focus {
  outline: none;
  border-color: #58a6ff;
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1);
  background-color: #0d1117;
}

.search-hint {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: #8b949e;
  pointer-events: none;
}

.top-bar-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
}

.profile-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.profile-btn:hover {
  opacity: 0.8;
}

.profile-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #30363d;
}

/* MAIN LAYOUT */
.main-container {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 16px;
}

.sidebar-left {
  width: 280px;
}

.content-area {
  flex: 1;
  min-width: 0;
}

.loading-state, .error-state {
  text-align: center;
  padding: 60px 20px;
  color: #8b949e;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #30363d;
  border-top-color: #58a6ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 12px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.retry-btn {
  background-color: #238636;
  border: 1px solid #238636;
  color: #fff;
  padding: 6px 16px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 12px;
  transition: all 0.2s ease;
}

.retry-btn:hover {
  background-color: #2ea043;
}

/* FOOTER */
.github-footer {
  background-color: #0d1117;
  border-top: 1px solid #30363d;
  padding: 32px 16px;
  margin-top: 60px;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  row-gap: 12px;
}

.footer-logo {
  color: #6e7681;
  margin-right: 8px;
}

.footer-copyright {
  font-size: 12px;
  color: #6e7681;
  margin-right: 16px;
}

.footer-link {
  font-size: 12px;
  color: #58a6ff;
  text-decoration: none;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.footer-link:hover {
  text-decoration: underline;
  color: #79c0ff;
}

/* RESPONSIVE */
@media (max-width: 1200px) {
  .main-container {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px 12px;
  }

  .sidebar-left {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .top-bar {
    padding: 6px 12px;
    height: 50px;
    gap: 12px;
  }

  .top-bar-search {
    display: none;
  }

  .username {
    font-size: 13px;
    padding: 0 4px;
  }

  .profile-avatar {
    width: 24px;
    height: 24px;
  }

  .main-container {
    padding: 12px;
  }

  .sidebar-left {
    flex-direction: column;
    width: 100%;
  }

  .footer-content {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .top-bar {
    padding: 4px 8px;
    height: 44px;
    gap: 8px;
  }

  .github-mark {
    display: none;
  }

  .username {
    display: none;
  }

  .top-bar-right {
    gap: 6px;
  }

  .profile-avatar {
    width: 22px;
    height: 22px;
  }
}
  `]
})
export class AppComponent implements OnInit {
  user: GitHubUser | null = null;
  repositories: Repository[] = [];
  loading: boolean = true;
  error: string = '';
  username: string = 'shreeramk';
  searchInput: string = '';

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.loading = true;
    this.error = '';

    this.githubService.getUser(this.username).subscribe({
      next: (user) => {
        this.user = user;
        this.loadRepositories();
      },
      error: (err) => {
        this.error = `Failed to load profile for user "${this.username}". Please check the username.`;
        this.loading = false;
        console.error('Error:', err);
      }
    });
  }

  loadRepositories(): void {
    this.githubService.getUserRepositories(this.username, 1, 50).subscribe({
      next: (repos) => {
        this.repositories = repos.sort((a, b) => {
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return (
            new Date(b.updated_at).getTime() -
            new Date(a.updated_at).getTime()
          );
        });
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load repositories';
        this.loading = false;
        console.error('Error:', err);
      }
    });
  }

  searchUser(): void {
    if (this.searchInput.trim()) {
      this.username = this.searchInput.trim();
      this.searchInput = '';
      this.loadUserProfile();
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.searchUser();
    }
  }
}