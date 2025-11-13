import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ContributionDay } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ContributionService {
  constructor() {}

  /**
   * Generate mock contribution data for 365 days
   * GitHub doesn't provide direct contribution API
   * Alternative: Use https://github.com/1995eaton/github-contributions-api
   */
  getContributions(): Observable<ContributionDay[]> {
    return of(this.generateMockContributions());
  }

  private generateMockContributions(): ContributionDay[] {
    const contributions: ContributionDay[] = [];
    const today = new Date();

    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);

      // Generate realistic distribution of contributions
      const random = Math.random();
      let count = 0;

      if (random < 0.7) {
        count = 0; // 70% chance of no contributions
      } else if (random < 0.85) {
        count = Math.floor(Math.random() * 5) + 1; // 15% chance: 1-5
      } else if (random < 0.95) {
        count = Math.floor(Math.random() * 15) + 5; // 10% chance: 5-20
      } else {
        count = Math.floor(Math.random() * 30) + 20; // 5% chance: 20-50
      }

      contributions.push({
        date: date.toISOString().split('T')[0],
        count: count,
        color: this.getColorForCount(count)
      });
    }

    return contributions;
  }

  private getColorForCount(count: number): string {
    if (count === 0) return '#ebedf0';
    if (count < 5) return '#c6e48b';
    if (count < 10) return '#7bc96f';
    if (count < 20) return '#239a3b';
    return '#196127';
  }
}