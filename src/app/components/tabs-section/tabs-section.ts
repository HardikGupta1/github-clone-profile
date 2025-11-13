
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repository, GitHubUser } from '../../models/user.model';

@Component({
  selector: 'app-tabs-section',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="tabs-container">
  <!-- Tabs Header -->
  <div class="tabs-header">
    <button
      class="tab-button"
      [class.active]="activeTab === 'repositories'"
      (click)="switchTab('repositories')">
      <span class="tab-icon">📚</span>
      Repositories
      <span class="tab-count">{{ repositories.length }}</span>
    </button>
    <button
      class="tab-button"
      [class.active]="activeTab === 'projects'"
      (click)="switchTab('projects')">
      <span class="tab-icon">📊</span>
      Projects
      <span class="tab-count">0</span>
    </button>
    <button
      class="tab-button"
      [class.active]="activeTab === 'packages'"
      (click)="switchTab('packages')">
      <span class="tab-icon">📦</span>
      Packages
      <span class="tab-count">0</span>
    </button>
  </div>

  <!-- Tab Content -->
  <div class="tabs-content">
    <!-- Repositories Tab -->
    <div class="tab-pane" *ngIf="activeTab === 'repositories'">
      <div class="repositories-grid">
        <div
          class="repository-card"
          *ngFor="let repo of repositories"
          (click)="openRepo(repo.html_url)">
          <div class="repo-header">
            <h3 class="repo-name">{{ repo.name }}</h3>
            <span class="repo-visibility">
              <span class="visibility-badge">Public</span>
            </span>
          </div>

          <div class="repo-fork" *ngIf="repo.fork">
            Forked from <span class="fork-source">{{ getForkSource(repo) }}</span>
          </div>

          <p class="repo-description">{{ repo.description || 'No description provided' }}</p>

          <div class="repo-footer">
            <div class="repo-meta">
              <div class="repo-language" *ngIf="repo.language">
                <span class="language-dot" [style.background-color]="getLanguageColor(repo.language)"></span>
                {{ repo.language }}
              </div>
              <span class="repo-stat" *ngIf="repo.stargazers_count > 0">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                </svg>
                {{ repo.stargazers_count }}
              </span>
              <span class="repo-stat" *ngIf="repo.forks_count > 0">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                  <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                </svg>
                {{ repo.forks_count }}
              </span>
            </div>
            <span class="repo-updated">Updated {{ formatDate(repo.updated_at) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects Tab -->
    <div class="tab-pane" *ngIf="activeTab === 'projects'">
      <div class="empty-state">
        <span class="empty-icon">📊</span>
        <p>No projects yet</p>
      </div>
    </div>

    <!-- Packages Tab -->
    <div class="tab-pane" *ngIf="activeTab === 'packages'">
      <div class="empty-state">
        <span class="empty-icon">📦</span>
        <p>No packages yet</p>
      </div>
    </div>
  </div>
</div>`,
  styles: [`
.tabs-container {
  background-color: #0d1117;
  border: 1px solid #30363d;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 24px;
}

.tabs-header {
  display: flex;
  border-bottom: 1px solid #30363d;
  background-color: #0d1117;
  overflow-x: auto;
}

.tab-button {
  flex: 0 0 auto;
  padding: 14px 16px;
  background: none;
  border: none;
  color: #8b949e;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
}

.tab-button:hover {
  color: #c9d1d9;
  background-color: rgba(177, 186, 196, 0.12);
}

.tab-button.active {
  color: #c9d1d9;
  border-bottom-color: #f78166;
  font-weight: 600;
}

.tab-icon {
  font-size: 16px;
}

.tab-count {
  background-color: rgba(110, 118, 129, 0.4);
  color: #c9d1d9;
  padding: 2px 6px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  min-width: 20px;
  text-align: center;
}

.tab-button.active .tab-count {
  background-color: #30363d;
}

.tabs-content {
  padding: 24px;
  min-height: 200px;
}

.repositories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.repository-card {
  padding: 16px;
  border: 1px solid #30363d;
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: pointer;
  background-color: #0d1117;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.repository-card:hover {
  border-color: #8b949e;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

.repo-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.repo-name {
  font-size: 14px;
  font-weight: 600;
  color: #539bf5;
  margin: 0;
  word-break: break-word;
  flex: 1;
}

.repo-visibility {
  flex-shrink: 0;
}

.visibility-badge {
  font-size: 12px;
  font-weight: 500;
  color: #8b949e;
  border: 1px solid #30363d;
  border-radius: 2em;
  padding: 0 7px;
  line-height: 18px;
  display: inline-block;
}

.repo-fork {
  font-size: 12px;
  color: #8b949e;
  margin: -8px 0 0 0;
}

.fork-source {
  color: #539bf5;
  text-decoration: none;
}

.repo-description {
  font-size: 12px;
  color: #8b949e;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 36px;
}

.repo-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 12px;
  color: #8b949e;
  margin-top: auto;
  flex-wrap: wrap;
}

.repo-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.repo-language {
  display: flex;
  align-items: center;
  gap: 4px;
}

.language-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.repo-stat {
  display: flex;
  align-items: center;
  gap: 4px;
}

.repo-stat svg {
  opacity: 0.6;
}

.repo-updated {
  color: #8b949e;
  font-size: 12px;
  white-space: nowrap;
}

.empty-state {
  text-align: center;
  padding: 80px 20px;
  color: #8b949e;
}

.empty-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 16px;
  opacity: 0.4;
}

.empty-state p {
  font-size: 14px;
  margin: 0;
}

@media (max-width: 1200px) {
  .repositories-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .tabs-content {
    padding: 16px;
  }

  .repository-card {
    padding: 12px;
  }

  .repo-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .repo-updated {
    width: 100%;
  }
}
  `]
})
export class TabsSectionComponent {
  @Input() repositories: Repository[] = [];
  @Input() user: GitHubUser | null = null;

  activeTab: string = 'repositories';

  switchTab(tab: string): void {
    this.activeTab = tab;
  }

  getLanguageColor(language: string | null): string {
    if (!language) return '#858585';

    const colors: { [key: string]: string } = {
      'Python': '#3572A5',
      'JavaScript': '#f1e05a',
      'TypeScript': '#2b7489',
      'Angular': '#dd0031',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'Java': '#b07219',
      'Go': '#00add8',
      'Rust': '#ce422b',
      'C++': '#f34b7d',
      'C#': '#178600',
      'PHP': '#777bb4',
      'Ruby': '#cc342d',
      'Kotlin': '#7f52ff',
      'Swift': '#ffac45',
      'Dart': '#00b4ab',
      'Jupyter Notebook': '#DA5B0B'
    };

    return colors[language] || '#858585';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'today';
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  }

  getForkSource(repo: Repository): string {
    // Extract fork source from full_name if available
    // This is a simplified version - you might need to adjust based on your data structure
    return repo.name;
  }

  openRepo(url: string): void {
    window.open(url, '_blank');
  }
}