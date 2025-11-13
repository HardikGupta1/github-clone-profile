import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitHubUser } from '../../models/user.model';

@Component({
  selector: 'app-left-panel',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="left-panel" *ngIf="user">
  <!-- Avatar Container with Shadow -->
  <div class="avatar-container">
    <img [src]="user.avatar_url" [alt]="user.name" class="avatar">
    <div class="avatar-glow"></div>
  </div>

  <!-- Name and Bio Section -->
  <div class="profile-info">
    <h1 class="profile-name">{{ user.name }}</h1>
    <p class="profile-login">{{ user.login }}</p>
    
    <button class="btn-follow">Follow</button>

    <!-- Profile Stats -->
    <div class="stats">
      <div class="stat-item">
        <span class="stat-icon">👥</span>
        <span class="stat-label"><strong>{{ user.followers }}</strong> followers</span>
      </div>
      <div class="stat-item">
        <span class="stat-icon">👤</span>
        <span class="stat-label"><strong>{{ user.following }}</strong> following</span>
      </div>
    </div>

    <!-- Divider -->
    <div class="divider"></div>

    <!-- Bio -->
    <div class="info-section" *ngIf="user.bio">
      <p class="bio-text">{{ user.bio }}</p>
    </div>

    <!-- Company -->
    <div class="info-item" *ngIf="user.company">
      <span class="info-icon">🏢</span>
      <div class="info-content">
        <span class="info-label">Company</span>
        <span class="info-value">{{ user.company }}</span>
      </div>
    </div>

    <!-- Location -->
    <div class="info-item" *ngIf="user.location">
      <span class="info-icon">📍</span>
      <div class="info-content">
        <span class="info-label">Location</span>
        <span class="info-value">{{ user.location }}</span>
      </div>
    </div>

    <!-- Email -->
    <div class="info-item" *ngIf="user.email">
      <span class="info-icon">✉️</span>
      <div class="info-content">
        <span class="info-label">Email</span>
        <span class="info-value">{{ user.email }}</span>
      </div>
    </div>

    <!-- Website -->
    <div class="info-item" *ngIf="user.blog">
      <span class="info-icon">🔗</span>
      <div class="info-content">
        <span class="info-label">Website</span>
        <a [href]="user.blog" target="_blank" class="info-link">{{ user.blog }}</a>
      </div>
    </div>

    <!-- Twitter -->
    <div class="info-item" *ngIf="user.twitter_username">
      <span class="info-icon">𝕏</span>
      <div class="info-content">
        <span class="info-label">Twitter</span>
        <a [href]="'https://twitter.com/' + user.twitter_username" target="_blank" class="info-link">
          @{{ user.twitter_username }}
        </a>
      </div>
    </div>

    <!-- Member Since -->
    <div class="info-item">
      <span class="info-icon">📅</span>
      <div class="info-content">
        <span class="info-label">Joined</span>
        <span class="info-value">{{ memberSince }}</span>
      </div>
    </div>
  </div>
</div>`,
  styles: [`
.left-panel {
  background: linear-gradient(135deg, rgba(13, 17, 23, 0.95) 0%, rgba(22, 27, 34, 0.95) 100%);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(48, 54, 61, 0.4);
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

.avatar-container {
  position: relative;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
}

.avatar {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 4px solid #30363d;
  display: block;
  transition: all 0.3s ease;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.avatar:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 32px rgba(88, 166, 255, 0.2);
  border-color: #58a6ff;
}

.avatar-glow {
  position: absolute;
  width: 288px;
  height: 288px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(88, 166, 255, 0.1) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.profile-info {
  margin-top: 8px;
}

.profile-name {
  font-size: 28px;
  font-weight: 700;
  color: #f0f6fc;
  margin: 0 0 4px 0;
  line-height: 1.3;
  letter-spacing: -0.5px;
}

.profile-login {
  font-size: 18px;
  color: #8b949e;
  margin: 0 0 20px 0;
  font-weight: 400;
  letter-spacing: 0.3px;
}

.btn-follow {
  width: 100%;
  background: linear-gradient(135deg, #238636 0%, #2ea043 100%);
  border: 1px solid #2ea043;
  color: #fff;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  margin-bottom: 20px;
  text-transform: capitalize;
  box-shadow: 0 2px 8px rgba(35, 134, 54, 0.2);
}

.btn-follow:hover {
  background: linear-gradient(135deg, #2ea043 0%, #3fb950 100%);
  border-color: #3fb950;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(35, 134, 54, 0.3);
}

.btn-follow:active {
  transform: translateY(0);
}

.stats {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #30363d;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #c9d1d9;
}

.stat-icon {
  font-size: 16px;
  display: inline-block;
  min-width: 20px;
}

.stat-label {
  display: flex;
  align-items: center;
  gap: 4px;
}

.stat-label strong {
  color: #f0f6fc;
  font-weight: 600;
  font-size: 14px;
}

.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #30363d, transparent);
  margin: 16px 0;
  opacity: 0.6;
}

.info-section {
  margin-bottom: 20px;
}

.bio-text {
  color: #c9d1d9;
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
  word-break: break-word;
  padding: 12px;
  background: rgba(48, 54, 61, 0.2);
  border-radius: 6px;
  border-left: 3px solid #58a6ff;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 6px;
  transition: background 0.2s ease;
}

.info-item:hover {
  background: rgba(88, 166, 255, 0.05);
}

.info-icon {
  font-size: 18px;
  min-width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}

.info-label {
  font-size: 11px;
  color: #8b949e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.info-value,
.info-link {
  color: #f0f6fc;
  font-size: 13px;
  word-break: break-word;
}

.info-link {
  text-decoration: none;
  color: #58a6ff;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-block;
}

.info-link:hover {
  text-decoration: underline;
  color: #79c0ff;
  filter: brightness(1.2);
}

/* Scrollbar Styling */
.left-panel::-webkit-scrollbar {
  width: 6px;
}

.left-panel::-webkit-scrollbar-track {
  background: transparent;
}

.left-panel::-webkit-scrollbar-thumb {
  background: #30363d;
  border-radius: 3px;
}

.left-panel::-webkit-scrollbar-thumb:hover {
  background: #484f58;
}

/* Responsive */
@media (max-width: 1024px) {
  .left-panel {
    position: static;
    max-height: none;
    border: none;
    background: transparent;
    padding: 16px;
    border-bottom: 1px solid #30363d;
    margin-bottom: 24px;
  }

  .avatar {
    width: 240px;
    height: 240px;
  }

  .avatar-glow {
    width: 248px;
    height: 248px;
  }

  .profile-name {
    font-size: 26px;
  }

  .profile-login {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .left-panel {
    padding: 12px;
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .avatar-container {
    margin-bottom: 0;
    min-width: 160px;
  }

  .avatar {
    width: 160px;
    height: 160px;
  }

  .avatar-glow {
    width: 168px;
    height: 168px;
  }

  .profile-info {
    flex: 1;
  }

  .profile-name {
    font-size: 20px;
  }

  .profile-login {
    font-size: 14px;
    margin-bottom: 12px;
  }

  .btn-follow {
    padding: 8px 12px;
    font-size: 13px;
  }

  .stats {
    gap: 8px;
    margin-bottom: 12px;
    padding-bottom: 12px;
  }

  .info-item {
    margin-bottom: 8px;
  }
}

@media (max-width: 480px) {
  .left-panel {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .avatar-container {
    min-width: auto;
    margin-bottom: 16px;
  }

  .avatar {
    width: 140px;
    height: 140px;
  }

  .avatar-glow {
    width: 148px;
    height: 148px;
  }

  .profile-name {
    font-size: 18px;
  }

  .profile-login {
    font-size: 13px;
  }

  .info-item {
    text-align: left;
  }
}
  `]
})
export class LeftPanelComponent {
  @Input() user: GitHubUser | null = null;

  get memberSince(): string {
    if (!this.user) return '';
    const date = new Date(this.user.created_at);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  }
}