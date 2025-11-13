
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitHubUser } from '../../models/user.model';

@Component({
  selector: 'app-left-panel',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="left-panel" *ngIf="user">
  <!-- Avatar Container -->
  <div class="avatar-container">
    <img [src]="user.avatar_url" [alt]="user.name" class="avatar">
    <div class="status-indicator"></div>
  </div>

  <!-- Profile Info -->
  <div class="profile-header">
    <h1 class="profile-name">{{ user.name }}</h1>
    <p class="profile-username">{{ user.login }}</p>
  </div>

  <!-- Follow Button -->
  <button class="btn-follow">
    <span class="follow-icon">👤</span>
    Follow
  </button>

  <!-- Bio Section -->
  <div class="bio-section" *ngIf="user.bio">
    <p class="bio-text">{{ user.bio }}</p>
  </div>

  <!-- Follower Stats -->
  <div class="followers-section">
    <a href="#" class="follower-link">
      <svg class="icon-people" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Z"></path>
      </svg>
      <span class="follower-count">{{ user.followers }}</span> followers
    </a>
    <span class="separator">·</span>
    <a href="#" class="follower-link">
      <span class="follower-count">{{ user.following }}</span> following
    </a>
  </div>

  <!-- Profile Details -->
  <div class="details-section">
    <!-- Company -->
    <div class="detail-item" *ngIf="user.company">
      <svg class="detail-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path>
      </svg>
      <span class="detail-text">{{ user.company }}</span>
    </div>

    <!-- Location -->
    <div class="detail-item" *ngIf="user.location">
      <svg class="detail-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
      </svg>
      <span class="detail-text">{{ user.location }}</span>
    </div>

    <!-- Email -->
    <div class="detail-item" *ngIf="user.email">
      <svg class="detail-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path>
      </svg>
      <a [href]="'mailto:' + user.email" class="detail-link">{{ user.email }}</a>
    </div>

    <!-- Website -->
    <div class="detail-item" *ngIf="user.blog">
      <svg class="detail-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
      </svg>
      <a [href]="user.blog" target="_blank" class="detail-link">{{ formatUrl(user.blog) }}</a>
    </div>

    <!-- Twitter -->
    <div class="detail-item" *ngIf="user.twitter_username">
      <svg class="detail-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M9.64 13.28c3.64 0 5.63-3.01 5.63-5.62 0-.08-.01-.17-.01-.25A4.03 4.03 0 0 0 16 6.43a3.94 3.94 0 0 1-1.14.31 2 2 0 0 0 .87-1.1 3.98 3.98 0 0 1-1.26.48A1.99 1.99 0 0 0 11.08 7.6c0 .16.02.31.04.46A5.66 5.66 0 0 1 7 5.8a1.99 1.99 0 0 0 .62 2.66c-.31-.01-.6-.1-.86-.24v.03c0 .96.69 1.77 1.6 1.95-.17.05-.34.07-.52.07-.13 0-.25-.01-.37-.03.25.78 1 1.35 1.87 1.37A4 4 0 0 1 6.85 12a4.16 4.16 0 0 1-.48-.03 5.63 5.63 0 0 0 3.05.89"></path>
      </svg>
      <a [href]="'https://twitter.com/' + user.twitter_username" target="_blank" class="detail-link">
        @{{ user.twitter_username }}
      </a>
    </div>
  </div>
</div>`,
  styles: [`
.left-panel {
  width: 100%;
  max-width: 296px;
  padding: 16px;
  position: sticky;
  top: 24px;
}

/* Avatar */
.avatar-container {
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  cursor: pointer;
}

.avatar {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid #30363d;
  display: block;
  transition: all 0.2s ease;
  background-color: #0d1117;
}

.avatar:hover {
  border-color: rgba(240, 246, 252, 0.1);
  opacity: 0.9;
}

.status-indicator {
  position: absolute;
  bottom: 14%;
  right: 14%;
  width: 15%;
  height: 15%;
  background: #21262d;
  border-radius: 50%;
  border: 2px solid #0d1117;
  display: none;
}

/* Profile Header */
.profile-header {
  margin-bottom: 8px;
}

.profile-name {
  font-size: 26px;
  font-weight: 600;
  line-height: 1.25;
  color: #f0f6fc;
  margin: 0 0 2px 0;
  word-wrap: break-word;
}

.profile-username {
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  color: #7d8590;
  margin: 0 0 16px 0;
}

/* Follow Button */
.btn-follow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #f0f6fc;
  background-color: #21262d;
  border: 1px solid rgba(240, 246, 252, 0.1);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
  margin-bottom: 16px;
}

.btn-follow:hover {
  background-color: #30363d;
  border-color: #8b949e;
}

.follow-icon {
  font-size: 12px;
}

/* Bio Section */
.bio-section {
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #21262d;
}

.bio-text {
  font-size: 14px;
  line-height: 1.5;
  color: #f0f6fc;
  margin: 0;
  word-wrap: break-word;
}

/* Followers Section */
.followers-section {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #21262d;
  font-size: 14px;
  color: #7d8590;
}

.follower-link {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #7d8590;
  text-decoration: none;
  transition: color 0.15s ease;
}

.follower-link:hover {
  color: #58a6ff;
}

.icon-people {
  flex-shrink: 0;
}

.follower-count {
  color: #f0f6fc;
  font-weight: 600;
}

.separator {
  color: #30363d;
}

/* Details Section */
.details-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 1.5;
  color: #f0f6fc;
}

.detail-icon {
  flex-shrink: 0;
  color: #7d8590;
  width: 16px;
  height: 16px;
}

.detail-text {
  color: #f0f6fc;
  word-break: break-word;
  overflow-wrap: anywhere;
}

.detail-link {
  color: #58a6ff;
  text-decoration: none;
  word-break: break-all;
  transition: color 0.15s ease;
}

.detail-link:hover {
  color: #79c0ff;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 1011px) {
  .left-panel {
    position: static;
    max-width: 100%;
    padding: 0;
    margin-bottom: 24px;
  }

  .avatar-container {
    max-width: 260px;
  }
}

@media (max-width: 768px) {
  .avatar-container {
    max-width: 200px;
  }

  .profile-name {
    font-size: 22px;
  }

  .profile-username {
    font-size: 18px;
  }
}
  `]
})
export class LeftPanelComponent {
  @Input() user: GitHubUser | null = null;

  formatUrl(url: string): string {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
}