// import { Component, Input, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ContributionService } from '../../services/contribution.service';
// import { ContributionDay } from '../../models/user.model';

// @Component({
//   selector: 'app-contribution-chart',
//   standalone: true,
//   imports: [CommonModule],
//   template: `<div class="contribution-section">
//   <div *ngIf="loading" class="loading">
//     <div class="spinner"></div>
//     <p>Loading contributions...</p>
//   </div>

//   <div *ngIf="!loading">
//     <!-- Header -->
//     <div class="contribution-header">
//       <h2 class="section-title">{{ totalContributions }} contributions in {{ selectedYear }}</h2>
//     </div>

//     <!-- Main Container: Responsive Layout -->
//     <div class="contribution-container">
//       <!-- Heatmap Section -->
//       <div class="heatmap-section">
//         <!-- Month Labels -->
//         <div class="month-labels-container">
//           <div class="month-labels">
//             <span class="month-label">Jan</span>
//             <span class="month-label">Feb</span>
//             <span class="month-label">Mar</span>
//             <span class="month-label">Apr</span>
//             <span class="month-label">May</span>
//             <span class="month-label">Jun</span>
//             <span class="month-label">Jul</span>
//             <span class="month-label">Aug</span>
//             <span class="month-label">Sep</span>
//             <span class="month-label">Oct</span>
//             <span class="month-label">Nov</span>
//             <span class="month-label">Dec</span>
//           </div>
//         </div>

//         <div class="contribution-grid-wrapper">
//           <!-- Day Labels -->
//           <div class="day-labels">
//             <span class="day-label">Mon</span>
//             <span class="day-label">Wed</span>
//             <span class="day-label">Fri</span>
//           </div>

//           <!-- Contribution Grid -->
//           <div class="contribution-grid-container">
//             <div class="contribution-grid">
//               <div class="week" *ngFor="let week of weeks">
//                 <div
//                   class="day"
//                   *ngFor="let day of week"
//                   [style.background-color]="day.color"
//                   [title]="getTooltip(day)"
//                   (mouseenter)="onHover(day)"
//                   (mouseleave)="onLeave()">
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <!-- Legend and Learn Link -->
//         <div class="contribution-footer">
//           <a href="#" class="learn-link">Learn how we count contributions</a>
//           <div class="contribution-legend">
//             <span class="legend-label">Less</span>
//             <div class="legend-box" style="background-color: #0e1117;"></div>
//             <div class="legend-box" style="background-color: #0d3922;"></div>
//             <div class="legend-box" style="background-color: #0f6e3e;"></div>
//             <div class="legend-box" style="background-color: #26a641;"></div>
//             <span class="legend-label">More</span>
//           </div>
//         </div>
//       </div>

//       <!-- Year Selector -->
//       <div class="year-selector">
//         <button class="year-btn" (click)="selectYear(2025)" [class.active]="selectedYear === 2025">2025</button>
//         <button class="year-btn" (click)="selectYear(2024)" [class.active]="selectedYear === 2024">2024</button>
//         <button class="year-btn" (click)="selectYear(2023)" [class.active]="selectedYear === 2023">2023</button>
//         <button class="year-btn" (click)="selectYear(2022)" [class.active]="selectedYear === 2022">2022</button>
//         <button class="year-btn" (click)="selectYear(2021)" [class.active]="selectedYear === 2021">2021</button>
//         <button class="year-btn" (click)="selectYear(2020)" [class.active]="selectedYear === 2020">2020</button>
//         <button class="year-btn" (click)="selectYear(2019)" [class.active]="selectedYear === 2019">2019</button>
//         <button class="year-btn" (click)="selectYear(2018)" [class.active]="selectedYear === 2018">2018</button>
//         <button class="year-btn" (click)="selectYear(2017)" [class.active]="selectedYear === 2017">2017</button>
//         <button class="year-btn" (click)="selectYear(2016)" [class.active]="selectedYear === 2016">2016</button>
//         <button class="year-btn" (click)="selectYear(2015)" [class.active]="selectedYear === 2015">2015</button>
//         <button class="year-btn" (click)="selectYear(2014)" [class.active]="selectedYear === 2014">2014</button>
//         <button class="year-btn" (click)="selectYear(2013)" [class.active]="selectedYear === 2013">2013</button>
//       </div>
//     </div>

//     <!-- Activity Overview Section -->
//     <div class="activity-overview-wrapper">
//       <div class="activity-overview">
//         <h3 class="activity-title">Activity overview</h3>
//         <div class="activity-inner">
//           <!-- Left: Text Content -->
//           <div class="activity-text-section">
//             <div class="activity-text">
//               <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" class="activity-icon">
//                 <path d="M1.5 8a6.5 6.5 0 0 1 13 0A.75.75 0 0 0 16 8a8 8 0 1 0-8 8 .75.75 0 0 0 0-1.5A6.5 6.5 0 0 1 1.5 8Z"></path>
//               </svg>
//               <span>Contributed to <strong>shreeramk/shreeramk</strong>, <strong>node-opcua/node-opcua</strong>, and <strong>more</strong> repositories</span>
//             </div>
//           </div>
          
//           <!-- Right: Chart -->
//           <div class="activity-chart">
//             <svg viewBox="0 0 380 200" class="contribution-chart-svg" preserveAspectRatio="xMidYMid meet">
//               <line x1="60" y1="50" x2="360" y2="50" stroke="#30363d" stroke-width="1" opacity="0.3"></line>
//               <line x1="60" y1="100" x2="360" y2="100" stroke="#30363d" stroke-width="1" opacity="0.3"></line>
//               <line x1="60" y1="150" x2="360" y2="150" stroke="#30363d" stroke-width="1" opacity="0.3"></line>
//               <line x1="60" y1="30" x2="60" y2="160" stroke="#26a641" stroke-width="2"></line>
//               <line x1="60" y1="160" x2="360" y2="160" stroke="#26a641" stroke-width="2"></line>
//               <polyline points="80,80 110,70 140,85 170,65 200,90 230,55 260,70 290,75 320,60" 
//                         stroke="#26a641" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></polyline>
//               <circle cx="80" cy="80" r="3" fill="#26a641"></circle>
//               <circle cx="110" cy="70" r="3" fill="#26a641"></circle>
//               <circle cx="140" cy="85" r="3" fill="#26a641"></circle>
//               <circle cx="170" cy="65" r="3" fill="#26a641"></circle>
//               <circle cx="200" cy="90" r="3" fill="#26a641"></circle>
//               <circle cx="230" cy="55" r="3" fill="#26a641"></circle>
//               <circle cx="260" cy="70" r="3" fill="#26a641"></circle>
//               <circle cx="290" cy="75" r="3" fill="#26a641"></circle>
//               <circle cx="320" cy="60" r="3" fill="#26a641"></circle>
//               <text x="30" y="160" text-anchor="end" fill="#8b949e" font-size="11">0</text>
//               <text x="30" y="110" text-anchor="end" fill="#8b949e" font-size="11">50</text>
//               <text x="30" y="60" text-anchor="end" fill="#8b949e" font-size="11">100</text>
//               <text x="210" y="25" text-anchor="middle" fill="#8b949e" font-size="12" font-weight="600">Code contributions</text>
//             </svg>
//           </div>
//         </div>
//       </div>

//       <!-- Contribution Activity -->
//       <div class="contribution-activity">
//         <h3 class="activity-title">Contribution activity</h3>
        
//         <div class="activity-timeline">
//           <div class="timeline-header">
//             <span class="timeline-month">November {{ selectedYear }}</span>
//           </div>
          
//           <div class="timeline-item">
//             <div class="timeline-icon">
//               <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
//                 <path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"></path>
//               </svg>
//             </div>
//             <div class="timeline-content-wrapper">
//               <div class="timeline-content">
//                 <span class="timeline-text">127 contributions in private repositories</span>
//                 <span class="timeline-range">Nov 1 – Nov 12</span>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <button class="show-more-btn">Show more activity</button>
//       </div>
//     </div>
//   </div>

//   <div class="tooltip" *ngIf="hoveredDay" [ngClass]="{ show: hoveredDay }">
//     {{ getTooltip(hoveredDay) }}
//   </div>
// </div>`,
//   styles: [`
// .contribution-section {
//   background-color: transparent;
//   border: none;
//   border-radius: 0;
//   padding: 0;
//   margin-bottom: 24px;
//   position: relative;
// }

// .contribution-header {
//   margin-bottom: 16px;
// }

// .section-title {
//   font-size: 14px;
//   font-weight: 600;
//   color: #c9d1d9;
//   margin: 0;
// }

// .loading {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
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
//   margin-bottom: 12px;
// }

// @keyframes spin {
//   to {
//     transform: rotate(360deg);
//   }
// }

// .contribution-container {
//   display: flex;
//   gap: 16px;
//   margin-bottom: 24px;
//   align-items: flex-start;
// }

// .heatmap-section {
//   flex: 1;
//   min-width: 0;
//   border: 1px solid #30363d;
//   border-radius: 6px;
//   padding: 16px;
//   background-color: rgba(22, 27, 34, 0.4);
//   overflow-x: auto;
//   -webkit-overflow-scrolling: touch;
// }

// .month-labels-container {
//   margin-bottom: 8px;
//   overflow-x: auto;
//   -webkit-overflow-scrolling: touch;
// }

// .month-labels {
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   padding: 0 32px;
//   gap: 4px;
//   min-width: min-content;
// }

// .month-label {
//   font-size: 11px;
//   color: #8b949e;
//   text-align: center;
//   flex: 0 0 14px;
//   white-space: nowrap;
// }

// .contribution-grid-wrapper {
//   display: flex;
//   gap: 8px;
//   align-items: flex-start;
//   margin-bottom: 12px;
//   overflow-x: auto;
//   -webkit-overflow-scrolling: touch;
//   padding-bottom: 8px;
// }

// .day-labels {
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   padding-top: 0;
//   min-width: 32px;
//   flex-shrink: 0;
// }

// .day-label {
//   font-size: 11px;
//   color: #8b949e;
//   height: 16px;
//   line-height: 16px;
//   text-align: left;
//   white-space: nowrap;
// }

// .contribution-grid-container {
//   flex: 1;
//   min-width: 0;
// }

// .contribution-grid {
//   display: inline-flex;
//   gap: 4px;
// }

// .week {
//   display: flex;
//   flex-direction: column;
//   gap: 4px;
//   flex-shrink: 0;
// }

// .day {
//   width: 13px;
//   height: 13px;
//   border-radius: 2px;
//   cursor: pointer;
//   transition: all 0.15s ease;
//   border: 1px solid rgba(48, 54, 61, 0.3);
//   flex-shrink: 0;
// }

// .day:hover {
//   outline: 2px solid #58a6ff;
//   outline-offset: 1px;
// }

// .contribution-footer {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 12px;
//   margin-top: 12px;
// }

// .learn-link {
//   font-size: 12px;
//   color: #58a6ff;
//   text-decoration: none;
//   white-space: nowrap;
// }

// .learn-link:hover {
//   text-decoration: underline;
// }

// .contribution-legend {
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   font-size: 11px;
//   color: #8b949e;
//   flex-wrap: wrap;
// }

// .legend-label {
//   font-weight: 400;
//   margin: 0 4px;
//   white-space: nowrap;
// }

// .legend-box {
//   width: 11px;
//   height: 11px;
//   border-radius: 2px;
//   border: 1px solid rgba(48, 54, 61, 0.3);
//   flex-shrink: 0;
// }

// .year-selector {
//   display: flex;
//   flex-direction: column;
//   gap: 0;
//   min-width: 68px;
//   flex-shrink: 0;
//   border-radius: 6px;
//   overflow: hidden;
//   border: 1px solid #30363d;
//   background-color: rgba(22, 27, 34, 0.4);
//   max-height: fit-content;
// }

// .year-btn {
//   background: none;
//   border: none;
//   border-bottom: 1px solid #30363d;
//   color: #8b949e;
//   font-size: 12px;
//   padding: 6px 8px;
//   cursor: pointer;
//   transition: all 0.15s ease;
//   text-align: center;
//   width: 100%;
//   font-weight: 400;
//   white-space: nowrap;
// }

// .year-btn:last-child {
//   border-bottom: none;
// }

// .year-btn:hover {
//   background-color: rgba(88, 166, 255, 0.1);
//   color: #58a6ff;
// }

// .year-btn.active {
//   background-color: #5865f2;
//   color: #ffffff;
//   font-weight: 600;
// }

// .activity-overview-wrapper {
//   width: 100%;
// }

// .activity-overview {
//   border: 1px solid #30363d;
//   border-radius: 6px;
//   padding: 16px;
//   background-color: rgba(22, 27, 34, 0.4);
//   margin-bottom: 24px;
// }

// .activity-title {
//   font-size: 14px;
//   font-weight: 600;
//   color: #c9d1d9;
//   margin: 0 0 16px 0;
// }

// .activity-inner {
//   display: flex;
//   gap: 32px;
//   align-items: stretch;
// }

// .activity-text-section {
//   display: flex;
//   align-items: flex-start;
//   flex: 0 0 40%;
//   border-right: 1px solid #30363d;
//   padding-right: 24px;
// }

// .activity-text {
//   display: flex;
//   align-items: flex-start;
//   gap: 8px;
//   font-size: 12px;
//   color: #8b949e;
//   line-height: 1.5;
// }

// .activity-icon {
//   flex-shrink: 0;
//   margin-top: 2px;
//   color: #8b949e;
//   width: 14px;
//   height: 14px;
//   min-width: 14px;
// }

// .activity-text strong {
//   color: #58a6ff;
//   font-weight: 600;
// }

// .activity-chart {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex: 1;
//   min-height: 140px;
//   padding: 0;
// }

// .contribution-chart-svg {
//   width: 100%;
//   height: auto;
//   max-width: 350px;
// }

// .contribution-activity {
//   border: 1px solid #30363d;
//   border-radius: 6px;
//   padding: 16px;
//   background-color: rgba(22, 27, 34, 0.4);
// }

// .activity-timeline {
//   margin: 16px 0 20px 0;
// }

// .timeline-header {
//   margin-bottom: 16px;
// }

// .timeline-month {
//   font-size: 13px;
//   font-weight: 600;
//   color: #c9d1d9;
//   white-space: nowrap;
// }

// .timeline-item {
//   display: flex;
//   gap: 12px;
//   align-items: center;
//   position: relative;
// }

// .timeline-icon {
//   flex-shrink: 0;
//   width: 32px;
//   height: 32px;
//   border-radius: 50%;
//   background-color: #0d1117;
//   border: 2px solid #30363d;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #8b949e;
// }

// .timeline-content-wrapper {
//   flex: 1;
//   min-width: 0;
// }

// .timeline-content {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 16px;
//   padding: 12px 16px;
//   border: 1px solid #30363d;
//   border-radius: 6px;
//   border-left: 3px solid #30363d;
// }

// .timeline-text {
//   font-size: 13px;
//   color: #c9d1d9;
//   flex: 1;
// }

// .timeline-range {
//   font-size: 12px;
//   color: #8b949e;
//   white-space: nowrap;
//   flex-shrink: 0;
// }

// .show-more-btn {
//   width: 100%;
//   background: none;
//   border: 1px solid #30363d;
//   color: #58a6ff;
//   padding: 10px 16px;
//   border-radius: 6px;
//   cursor: pointer;
//   font-size: 13px;
//   font-weight: 600;
//   transition: all 0.2s ease;
//   margin-top: 16px;
// }

// .show-more-btn:hover {
//   background-color: rgba(88, 166, 255, 0.1);
//   border-color: #58a6ff;
// }

// .tooltip {
//   position: fixed;
//   background-color: #0d1117;
//   color: #c9d1d9;
//   padding: 8px 12px;
//   border-radius: 6px;
//   font-size: 11px;
//   border: 1px solid #30363d;
//   pointer-events: none;
//   white-space: nowrap;
//   z-index: 1000;
//   opacity: 0;
//   transition: opacity 0.2s ease;
// }

// .tooltip.show {
//   opacity: 1;
// }

// @media (max-width: 1200px) {
//   .contribution-container {
//     flex-direction: column;
//     gap: 16px;
//   }

//   .year-selector {
//     width: 100%;
//     flex-direction: row;
//     min-width: unset;
//     border-radius: 6px;
//   }

//   .year-btn {
//     flex: 1;
//     border-bottom: none;
//     border-right: 1px solid #30363d;
//     padding: 8px 6px;
//     font-size: 11px;
//   }

//   .year-btn:last-child {
//     border-right: none;
//   }

//   .activity-inner {
//     flex-direction: column;
//     gap: 16px;
//   }

//   .activity-text-section {
//     flex: 1 1 auto;
//     border-right: none;
//     border-bottom: 1px solid #30363d;
//     padding-right: 0;
//     padding-bottom: 16px;
//   }

//   .activity-chart {
//     flex: 1 1 auto;
//     min-height: 120px;
//   }

//   .heatmap-section {
//     padding: 12px;
//   }

//   .month-labels {
//     padding: 0 20px;
//     gap: 2px;
//   }

//   .month-label {
//     font-size: 10px;
//     flex: 0 0 12px;
//   }

//   .day {
//     width: 12px;
//     height: 12px;
//   }

//   .day-labels {
//     min-width: 28px;
//     gap: 6px;
//   }

//   .day-label {
//     font-size: 10px;
//     height: 14px;
//     line-height: 14px;
//   }

//   .contribution-grid {
//     gap: 3px;
//   }

//   .week {
//     gap: 3px;
//   }
// }

// @media (max-width: 768px) {
//   .contribution-section {
//     margin-bottom: 16px;
//   }

//   .section-title {
//     font-size: 13px;
//     margin-bottom: 12px;
//   }

//   .heatmap-section {
//     padding: 12px;
//     border-radius: 4px;
//   }

//   .month-labels-container {
//     margin-bottom: 6px;
//   }

//   .month-labels {
//     padding: 0 16px;
//     gap: 2px;
//   }

//   .month-label {
//     font-size: 9px;
//     flex: 0 0 10px;
//   }

//   .day-labels {
//     min-width: 24px;
//     gap: 5px;
//   }

//   .day-label {
//     font-size: 9px;
//     height: 12px;
//     line-height: 12px;
//   }

//   .day {
//     width: 11px;
//     height: 11px;
//   }

//   .contribution-grid {
//     gap: 2px;
//   }

//   .week {
//     gap: 2px;
//   }

//   .contribution-footer {
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 8px;
//   }

//   .learn-link {
//     font-size: 11px;
//   }

//   .contribution-legend {
//     gap: 4px;
//     font-size: 10px;
//   }

//   .legend-box {
//     width: 9px;
//     height: 9px;
//   }

//   .year-selector {
//     width: 100%;
//     flex-direction: row;
//     border-radius: 4px;
//     gap: 0;
//   }

//   .year-btn {
//     flex: 1;
//     padding: 6px 4px;
//     font-size: 10px;
//     border-right: 1px solid #30363d;
//   }

//   .year-btn:last-child {
//     border-right: none;
//   }

//   .activity-overview {
//     padding: 12px;
//     margin-bottom: 16px;
//     border-radius: 4px;
//   }

//   .activity-title {
//     font-size: 13px;
//     margin-bottom: 12px;
//   }

//   .activity-inner {
//     flex-direction: column;
//     gap: 12px;
//   }

//   .activity-text-section {
//     flex: 1;
//     border-right: none;
//     border-bottom: 1px solid #30363d;
//     padding-right: 0;
//     padding-bottom: 12px;
//   }

//   .activity-text {
//     font-size: 11px;
//     gap: 6px;
//   }

//   .activity-icon {
//     width: 12px;
//     height: 12px;
//     min-width: 12px;
//   }

//   .activity-chart {
//     flex: 1;
//     min-height: 100px;
//     max-height: 140px;
//   }

//   .contribution-activity {
//     padding: 12px;
//     border-radius: 4px;
//   }

//   .timeline-header {
//     margin-bottom: 12px;
//   }

//   .timeline-month {
//     font-size: 12px;
//   }

//   .timeline-item {
//     gap: 10px;
//   }

//   .timeline-icon {
//     width: 28px;
//     height: 28px;
//     flex-shrink: 0;
//   }

//   .timeline-icon svg {
//     width: 14px;
//     height: 14px;
//   }

//   .timeline-content {
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 6px;
//     padding: 10px 12px;
//     border-left: 2px solid #30363d;
//   }

//   .timeline-text {
//     font-size: 12px;
//   }

//   .timeline-range {
//     font-size: 11px;
//   }

//   .show-more-btn {
//     padding: 8px 12px;
//     font-size: 12px;
//     margin-top: 12px;
//   }
// }

// @media (max-width: 480px) {
//   .contribution-section {
//     margin-bottom: 12px;
//   }

//   .section-title {
//     font-size: 12px;
//   }

//   .heatmap-section {
//     padding: 10px;
//   }

//   .month-labels {
//     padding: 0 12px;
//     gap: 1px;
//   }

//   .month-label {
//     font-size: 8px;
//     flex: 0 0 9px;
//   }

//   .day-labels {
//     min-width: 20px;
//     gap: 4px;
//   }

//   .day-label {
//     font-size: 8px;
//     height: 10px;
//     line-height: 10px;
//   }

//   .day {
//     width: 10px;
//     height: 10px;
//   }

//   .contribution-grid-wrapper {
//     gap: 6px;
//     margin-bottom: 10px;
//   }

//   .contribution-grid {
//     gap: 2px;
//   }

//   .week {
//     gap: 2px;
//   }

//   .contribution-footer {
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 6px;
//   }

//   .learn-link {
//     font-size: 10px;
//   }

//   .contribution-legend {
//     gap: 3px;
//     font-size: 9px;
//   }

//   .legend-label {
//     margin: 0 2px;
//   }

//   .legend-box {
//     width: 8px;
//     height: 8px;
//   }

//   .year-selector {
//     width: 100%;
//     border-radius: 4px;
//     overflow-x: auto;
//     -webkit-overflow-scrolling: touch;
//   }

//   .year-btn {
//     padding: 5px 3px;
//     font-size: 9px;
//   }

//   .activity-overview {
//     padding: 10px;
//     margin-bottom: 12px;
//   }

//   .activity-title {
//     font-size: 12px;
//     margin-bottom: 10px;
//   }

//   .activity-inner {
//     gap: 10px;
//   }

//   .activity-text-section {
//     padding-bottom: 10px;
//   }

//   .activity-text {
//     font-size: 10px;
//     gap: 4px;
//   }

//   .activity-icon {
//     width: 11px;
//     height: 11px;
//     min-width: 11px;
//   }

//   .activity-chart {
//     min-height: 80px;
//     max-height: 120px;
//   }

//   .contribution-chart-svg {
//     max-width: 100%;
//   }

//   .contribution-activity {
//     padding: 10px;
//   }

//   .timeline-header {
//     margin-bottom: 10px;
//   }

//   .timeline-month {
//     font-size: 11px;
//   }

//   .timeline-item {
//     gap: 8px;
//   }

//   .timeline-icon {
//     width: 24px;
//     height: 24px;
//   }

//   .timeline-icon svg {
//     width: 12px;
//     height: 12px;
//   }

//   .timeline-content {
//     padding: 8px 10px;
//   }

//   .timeline-text {
//     font-size: 11px;
//   }

//   .timeline-range {
//     font-size: 10px;
//   }

//   .show-more-btn {
//     padding: 7px 10px;
//     font-size: 11px;
//     margin-top: 10px;
//   }

//   .tooltip {
//     font-size: 10px;
//     padding: 6px 10px;
//   }
// }
//   `]
// })
// export class ContributionChartComponent implements OnInit {
//   @Input() username: string = 'shreeramk';

//   contributions: ContributionDay[] = [];
//   loading: boolean = true;
//   hoveredDay: ContributionDay | null = null;
//   weeks: ContributionDay[][] = [];
//   selectedYear: number = 2025;
//   totalContributions: number = 1216;

//   constructor(private contributionService: ContributionService) {}

//   ngOnInit(): void {
//     this.loadContributions();
//   }

//   loadContributions(): void {
//     this.contributionService.getContributions().subscribe({
//       next: (data) => {
//         this.contributions = data;
//         this.organizeIntoWeeks();
//         this.calculateTotalContributions();
//         this.loading = false;
//       },
//       error: (err) => {
//         console.error('Error loading contributions:', err);
//         this.loading = false;
//       }
//     });
//   }

//   organizeIntoWeeks(): void {
//     this.weeks = [];

//     for (let week = 0; week < 53; week++) {
//       const weekDays: ContributionDay[] = [];
//       for (let day = 0; day < 7; day++) {
//         const index = week * 7 + day;
//         if (index < this.contributions.length) {
//           weekDays.push(this.contributions[index]);
//         } else {
//           weekDays.push({
//             date: '',
//             count: 0,
//             color: '#0e1117'
//           });
//         }
//       }
//       this.weeks.push(weekDays);
//     }
//   }

//   calculateTotalContributions(): void {
//     this.totalContributions = this.contributions.reduce((sum, day) => sum + day.count, 0);
//   }

//   selectYear(year: number): void {
//     this.selectedYear = year;
//     this.loadContributions();
//   }

//   getTooltip(day: ContributionDay): string {
//     if (!day.date) return '';
//     const count = day.count;
//     const countStr = count === 0 ? 'No' : count.toString();
//     const contributionStr = count === 1 ? 'contribution' : 'contributions';
//     return `${countStr} ${contributionStr} on ${day.date}`;
//   }

//   onHover(day: ContributionDay): void {
//     if (day.date) {
//       this.hoveredDay = day;
//     }
//   }

//   onLeave(): void {
//     this.hoveredDay = null;
//   }
// }
import { Component, Input, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributionService } from '../../services/contribution.service';
import { ContributionDay } from '../../models/user.model';

@Component({
  selector: 'app-contribution-chart',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="contribution-section">
  <div *ngIf="loading" class="loading">
    <div class="spinner"></div>
    <p>Loading contributions...</p>
  </div>

  <div *ngIf="!loading">
    <!-- Header -->
    <div class="contribution-header">
      <h2 class="section-title">{{ totalContributions }} contributions in {{ selectedYear }}</h2>
    </div>

    <!-- Main Container -->
    <div class="main-wrapper">
      <!-- Heatmap Section -->
      <div class="heatmap-wrapper">
        <div class="heatmap-section">
          <!-- Month Labels -->
          <div class="labels-row">
            <div class="spacer"></div>
            <div class="month-scroll-wrapper">
              <div class="month-labels">
                <span class="month-label">Jan</span>
                <span class="month-label">Feb</span>
                <span class="month-label">Mar</span>
                <span class="month-label">Apr</span>
                <span class="month-label">May</span>
                <span class="month-label">Jun</span>
                <span class="month-label">Jul</span>
                <span class="month-label">Aug</span>
                <span class="month-label">Sep</span>
                <span class="month-label">Oct</span>
                <span class="month-label">Nov</span>
                <span class="month-label">Dec</span>
              </div>
            </div>
          </div>

          <!-- Grid -->
          <div class="grid-row">
            <!-- Day Labels -->
            <div class="day-labels-col">
              <span class="day-label">Mon</span>
              <span class="day-label">Wed</span>
              <span class="day-label">Fri</span>
            </div>

            <!-- Contribution Grid -->
            <div class="grid-scroll-wrapper">
              <div class="contribution-grid">
                <div class="week" *ngFor="let week of weeks">
                  <div
                    class="day"
                    *ngFor="let day of week"
                    [style.background-color]="day.color"
                    [title]="getTooltip(day)"
                    (mouseenter)="onHover(day)"
                    (mouseleave)="onLeave()">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Legend -->
          <div class="legend-row">
            <div class="spacer"></div>
            <div class="contribution-legend">
              <span class="legend-label">Less</span>
              <div class="legend-box" style="background-color: #0e1117;"></div>
              <div class="legend-box" style="background-color: #0d3922;"></div>
              <div class="legend-box" style="background-color: #0f6e3e;"></div>
              <div class="legend-box" style="background-color: #26a641;"></div>
              <span class="legend-label">More</span>
            </div>
          </div>

          <!-- Learn Link -->
          <div class="footer-row">
            <a href="#" class="learn-link">Learn how we count contributions</a>
          </div>
        </div>
      </div>

      <!-- Year Selector -->
      <div class="year-selector-wrapper">
        <div class="year-selector">
          <button class="year-btn" (click)="selectYear(2025)" [class.active]="selectedYear === 2025">2025</button>
          <button class="year-btn" (click)="selectYear(2024)" [class.active]="selectedYear === 2024">2024</button>
          <button class="year-btn" (click)="selectYear(2023)" [class.active]="selectedYear === 2023">2023</button>
          <button class="year-btn" (click)="selectYear(2022)" [class.active]="selectedYear === 2022">2022</button>
          <button class="year-btn" (click)="selectYear(2021)" [class.active]="selectedYear === 2021">2021</button>
          <button class="year-btn" (click)="selectYear(2020)" [class.active]="selectedYear === 2020">2020</button>
          <button class="year-btn" (click)="selectYear(2019)" [class.active]="selectedYear === 2019">2019</button>
          <button class="year-btn" (click)="selectYear(2018)" [class.active]="selectedYear === 2018">2018</button>
          <button class="year-btn" (click)="selectYear(2017)" [class.active]="selectedYear === 2017">2017</button>
          <button class="year-btn" (click)="selectYear(2016)" [class.active]="selectedYear === 2016">2016</button>
          <button class="year-btn" (click)="selectYear(2015)" [class.active]="selectedYear === 2015">2015</button>
          <button class="year-btn" (click)="selectYear(2014)" [class.active]="selectedYear === 2014">2014</button>
          <button class="year-btn" (click)="selectYear(2013)" [class.active]="selectedYear === 2013">2013</button>
        </div>
      </div>
    </div>

    <!-- Activity Overview Section -->
    <div class="activity-section">
      <div class="activity-overview">
        <h3 class="activity-title">Activity overview</h3>
        <div class="activity-inner">
          <div class="activity-text-section">
            <div class="activity-text">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" class="activity-icon">
                <path d="M1.5 8a6.5 6.5 0 0 1 13 0A.75.75 0 0 0 16 8a8 8 0 1 0-8 8 .75.75 0 0 0 0-1.5A6.5 6.5 0 0 1 1.5 8Z"></path>
              </svg>
              <span>Contributed to <strong>shreeramk/shreeramk</strong>, <strong>node-opcua/node-opcua</strong>, and <strong>more</strong> repositories</span>
            </div>
          </div>
          <div class="activity-chart">
            <svg viewBox="0 0 380 200" class="contribution-chart-svg" preserveAspectRatio="xMidYMid meet">
              <line x1="60" y1="50" x2="360" y2="50" stroke="#30363d" stroke-width="1" opacity="0.3"></line>
              <line x1="60" y1="100" x2="360" y2="100" stroke="#30363d" stroke-width="1" opacity="0.3"></line>
              <line x1="60" y1="150" x2="360" y2="150" stroke="#30363d" stroke-width="1" opacity="0.3"></line>
              <line x1="60" y1="30" x2="60" y2="160" stroke="#26a641" stroke-width="2"></line>
              <line x1="60" y1="160" x2="360" y2="160" stroke="#26a641" stroke-width="2"></line>
              <polyline points="80,80 110,70 140,85 170,65 200,90 230,55 260,70 290,75 320,60" stroke="#26a641" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></polyline>
              <circle cx="80" cy="80" r="3" fill="#26a641"></circle>
              <circle cx="110" cy="70" r="3" fill="#26a641"></circle>
              <circle cx="140" cy="85" r="3" fill="#26a641"></circle>
              <circle cx="170" cy="65" r="3" fill="#26a641"></circle>
              <circle cx="200" cy="90" r="3" fill="#26a641"></circle>
              <circle cx="230" cy="55" r="3" fill="#26a641"></circle>
              <circle cx="260" cy="70" r="3" fill="#26a641"></circle>
              <circle cx="290" cy="75" r="3" fill="#26a641"></circle>
              <circle cx="320" cy="60" r="3" fill="#26a641"></circle>
              <text x="30" y="160" text-anchor="end" fill="#8b949e" font-size="11">0</text>
              <text x="30" y="110" text-anchor="end" fill="#8b949e" font-size="11">50</text>
              <text x="30" y="60" text-anchor="end" fill="#8b949e" font-size="11">100</text>
              <text x="210" y="25" text-anchor="middle" fill="#8b949e" font-size="12" font-weight="600">Code contributions</text>
            </svg>
          </div>
        </div>
      </div>

      <div class="contribution-activity">
        <h3 class="activity-title">Contribution activity</h3>
        <div class="activity-timeline">
          <div class="timeline-header">
            <span class="timeline-month">November {{ selectedYear }}</span>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"></path>
              </svg>
            </div>
            <div class="timeline-content-wrapper">
              <div class="timeline-content">
                <span class="timeline-text">127 contributions in private repositories</span>
                <span class="timeline-range">Nov 1 – Nov 12</span>
              </div>
            </div>
          </div>
        </div>
        <button class="show-more-btn">Show more activity</button>
      </div>
    </div>
  </div>

  <div class="tooltip" *ngIf="hoveredDay" [ngClass]="{ show: hoveredDay }">
    {{ getTooltip(hoveredDay) }}
  </div>
</div>`,
  styles: [`
* { box-sizing: border-box; }

.contribution-section {
  width: 100%;
  padding: 0;
  margin: 0;
  background: transparent;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 12px;
}

@keyframes spin { to { transform: rotate(360deg); } }

.contribution-header {
  margin-bottom: 16px;
  padding: 0 16px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: #c9d1d9;
  margin: 0;
}

.main-wrapper {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding: 0 16px;
}

.heatmap-wrapper {
  flex: 1;
  min-width: 0;
  border: 1px solid #30363d;
  border-radius: 6px;
  background-color: rgba(22, 27, 34, 0.4);
  overflow: hidden;
}

.heatmap-section {
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.labels-row {
  display: flex;
  gap: 8px;
}

.spacer {
  width: 32px;
  flex-shrink: 0;
}

.month-scroll-wrapper {
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}

.month-labels {
  display: flex;
  gap: 4px;
  padding: 0 0 4px 0;
  min-width: max-content;
}

.month-label {
  font-size: 11px;
  color: #8b949e;
  text-align: center;
  flex: 0 0 14px;
  white-space: nowrap;
}

.grid-row {
  display: flex;
  gap: 8px;
  min-height: 110px;
}

.day-labels-col {
  width: 32px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.day-label {
  font-size: 11px;
  color: #8b949e;
  height: 16px;
  line-height: 16px;
  white-space: nowrap;
}

.grid-scroll-wrapper {
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  border: 1px solid rgba(48, 54, 61, 0.2);
  border-radius: 4px;
  padding: 4px;
  background-color: rgba(0, 0, 0, 0.2);
}

.contribution-grid {
  display: inline-flex;
  gap: 4px;
  align-items: center;
  min-width: max-content;
  padding: 0;
}

.week {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
}

.day {
  width: 13px;
  height: 13px;
  border-radius: 2px;
  cursor: pointer;
  border: 1px solid rgba(48, 54, 61, 0.3);
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.day:hover {
  outline: 2px solid #58a6ff;
  outline-offset: 1px;
}

.legend-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding-top: 8px;
}

.contribution-legend {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #8b949e;
}

.legend-label {
  font-weight: 400;
  margin: 0 4px;
  white-space: nowrap;
}

.legend-box {
  width: 11px;
  height: 11px;
  border-radius: 2px;
  border: 1px solid rgba(48, 54, 61, 0.3);
  flex-shrink: 0;
}

.footer-row {
  border-top: 1px solid #30363d;
  padding-top: 12px;
}

.learn-link {
  font-size: 12px;
  color: #58a6ff;
  text-decoration: none;
  white-space: nowrap;
}

.learn-link:hover {
  text-decoration: underline;
}

.year-selector-wrapper {
  flex-shrink: 0;
}

.year-selector {
  display: flex;
  flex-direction: column;
  border: 1px solid #30363d;
  border-radius: 6px;
  overflow: hidden;
  background-color: rgba(22, 27, 34, 0.4);
  min-width: 68px;
  max-height: fit-content;
}

.year-btn {
  background: none;
  border: none;
  border-bottom: 1px solid #30363d;
  color: #8b949e;
  font-size: 12px;
  padding: 6px 8px;
  cursor: pointer;
  transition: all 0.15s ease;
  text-align: center;
  font-weight: 400;
  white-space: nowrap;
}

.year-btn:last-child {
  border-bottom: none;
}

.year-btn:hover {
  background-color: rgba(88, 166, 255, 0.1);
  color: #58a6ff;
}

.year-btn.active {
  background-color: #5865f2;
  color: #ffffff;
  font-weight: 600;
}

.activity-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 16px;
}

.activity-overview {
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 16px;
  background-color: rgba(22, 27, 34, 0.4);
}

.activity-title {
  font-size: 14px;
  font-weight: 600;
  color: #c9d1d9;
  margin: 0 0 16px 0;
}

.activity-inner {
  display: flex;
  gap: 32px;
}

.activity-text-section {
  flex: 0 0 40%;
  border-right: 1px solid #30363d;
  padding-right: 24px;
}

.activity-text {
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: #8b949e;
  line-height: 1.5;
}

.activity-icon {
  flex-shrink: 0;
  margin-top: 2px;
  width: 14px;
  height: 14px;
  min-width: 14px;
}

.activity-text strong {
  color: #58a6ff;
  font-weight: 600;
}

.activity-chart {
  flex: 1;
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contribution-chart-svg {
  width: 100%;
  height: auto;
  max-width: 350px;
}

.contribution-activity {
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 16px;
  background-color: rgba(22, 27, 34, 0.4);
}

.activity-timeline {
  margin: 16px 0 20px 0;
}

.timeline-header {
  margin-bottom: 16px;
}

.timeline-month {
  font-size: 13px;
  font-weight: 600;
  color: #c9d1d9;
}

.timeline-item {
  display: flex;
  gap: 12px;
  align-items: center;
}

.timeline-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #0d1117;
  border: 2px solid #30363d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b949e;
}

.timeline-content-wrapper {
  flex: 1;
  min-width: 0;
}

.timeline-content {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 16px;
  border: 1px solid #30363d;
  border-radius: 6px;
  border-left: 3px solid #30363d;
}

.timeline-text {
  font-size: 13px;
  color: #c9d1d9;
  flex: 1;
}

.timeline-range {
  font-size: 12px;
  color: #8b949e;
  white-space: nowrap;
  flex-shrink: 0;
}

.show-more-btn {
  width: 100%;
  background: none;
  border: 1px solid #30363d;
  color: #58a6ff;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-top: 16px;
}

.show-more-btn:hover {
  background-color: rgba(88, 166, 255, 0.1);
  border-color: #58a6ff;
}

.tooltip {
  position: fixed;
  background-color: #0d1117;
  color: #c9d1d9;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 11px;
  border: 1px solid #30363d;
  pointer-events: none;
  white-space: nowrap;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.tooltip.show {
  opacity: 1;
}

@media (max-width: 1200px) {
  .main-wrapper {
    flex-direction: column;
    padding: 0 12px;
  }

  .year-selector {
    width: 100%;
    flex-direction: row;
    min-width: unset;
  }

  .year-btn {
    flex: 1;
    border-bottom: none;
    border-right: 1px solid #30363d;
    padding: 8px 4px;
    font-size: 10px;
  }

  .year-btn:last-child {
    border-right: none;
  }

  .activity-inner {
    flex-direction: column;
    gap: 16px;
  }

  .activity-text-section {
    flex: 1;
    border-right: none;
    border-bottom: 1px solid #30363d;
    padding-right: 0;
    padding-bottom: 16px;
  }

  .month-label { font-size: 10px; flex: 0 0 12px; }
  .day { width: 12px; height: 12px; }
  .day-label { font-size: 10px; }
  .contribution-grid { gap: 3px; }
  .week { gap: 3px; }
}

@media (max-width: 768px) {
  .contribution-header { padding: 0 12px; }
  .main-wrapper { padding: 0 12px; gap: 12px; }
  .activity-section { padding: 0 12px; }
  .heatmap-section { padding: 12px; gap: 10px; }

  .month-labels { gap: 1px; }
  .month-label { font-size: 8px; flex: 0 0 10px; }
  .day-label { font-size: 8px; }
  .day { width: 11px; height: 11px; }
  .grid-scroll-wrapper { padding: 3px; }
  .contribution-grid { gap: 2px; }
  .week { gap: 2px; }

  .legend-row { flex-direction: column; align-items: flex-start; gap: 8px; }
  .contribution-legend { gap: 3px; font-size: 9px; }
  .legend-label { margin: 0 2px; }
  .legend-box { width: 9px; height: 9px; }
  
  .footer-row { border-top: none; padding-top: 0; }
  .learn-link { font-size: 11px; }

  .activity-overview { padding: 12px; }
  .activity-title { font-size: 12px; margin-bottom: 12px; }
  .activity-text { font-size: 11px; gap: 6px; }
  .activity-icon { width: 12px; height: 12px; min-width: 12px; }
  .activity-chart { min-height: 120px; }

  .contribution-activity { padding: 12px; }
  .timeline-header { margin-bottom: 12px; }
  .timeline-month { font-size: 12px; }
  .timeline-item { gap: 10px; }
  .timeline-icon { width: 28px; height: 28px; }
  .timeline-icon svg { width: 14px; height: 14px; }
  .timeline-content { flex-direction: column; align-items: flex-start; gap: 6px; padding: 10px 12px; }
  .timeline-text { font-size: 12px; }
  .timeline-range { font-size: 11px; }
  .show-more-btn { padding: 8px 12px; font-size: 12px; margin-top: 12px; }
}

@media (max-width: 480px) {
  .contribution-header { padding: 0 8px; margin-bottom: 12px; }
  .section-title { font-size: 12px; }
  .main-wrapper { padding: 0 8px; gap: 8px; margin-bottom: 16px; }
  .activity-section { padding: 0 8px; gap: 16px; }

  .heatmap-section { padding: 8px; gap: 8px; }
  .spacer { width: 24px; }
  .month-labels { gap: 0.5px; }
  .month-label { font-size: 7px; flex: 0 0 8px; }
  .day-label { font-size: 7px; }
  .day { width: 10px; height: 10px; }
  .grid-scroll-wrapper { padding: 2px; }
  .contribution-grid { gap: 2px; }
  .week { gap: 2px; }

  .contribution-legend { gap: 2px; font-size: 8px; }
  .legend-label { margin: 0 1px; }
  .legend-box { width: 8px; height: 8px; }
  .learn-link { font-size: 10px; }

  .activity-overview { padding: 10px; }
  .activity-title { font-size: 11px; margin-bottom: 10px; }
  .activity-inner { gap: 8px; }
  .activity-text-section { border-right: none; border-bottom: 1px solid #30363d; padding-right: 0; padding-bottom: 8px; }
  .activity-text { font-size: 10px; gap: 4px; }
  .activity-icon { width: 11px; height: 11px; min-width: 11px; }
  .activity-chart { min-height: 100px; max-height: 120px; }
  .contribution-chart-svg { max-width: 100%; }

  .contribution-activity { padding: 10px; }
  .timeline-header { margin-bottom: 10px; }
  .timeline-month { font-size: 11px; }
  .timeline-item { gap: 8px; }
  .timeline-icon { width: 24px; height: 24px; }
  .timeline-icon svg { width: 12px; height: 12px; }
  .timeline-content { padding: 8px 10px; }
  .timeline-text { font-size: 11px; }
  .timeline-range { font-size: 10px; }
  .show-more-btn { padding: 7px 10px; font-size: 11px; margin-top: 10px; }

  .tooltip { font-size: 9px; padding: 5px 8px; }
}
  `]
})
export class ContributionChartComponent implements OnInit {
  @Input() username: string = 'shreeramk';

  contributions: ContributionDay[] = [];
  loading: boolean = true;
  hoveredDay: ContributionDay | null = null;
  weeks: ContributionDay[][] = [];
  selectedYear: number = 2025;
  totalContributions: number = 1216;

  constructor(private contributionService: ContributionService) {}

  ngOnInit(): void {
    this.loadContributions();
  }

  loadContributions(): void {
    this.contributionService.getContributions().subscribe({
      next: (data) => {
        this.contributions = data;
        this.organizeIntoWeeks();
        this.calculateTotalContributions();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading contributions:', err);
        this.loading = false;
      }
    });
  }

  organizeIntoWeeks(): void {
    this.weeks = [];
    for (let week = 0; week < 53; week++) {
      const weekDays: ContributionDay[] = [];
      for (let day = 0; day < 7; day++) {
        const index = week * 7 + day;
        if (index < this.contributions.length) {
          weekDays.push(this.contributions[index]);
        } else {
          weekDays.push({ date: '', count: 0, color: '#0e1117' });
        }
      }
      this.weeks.push(weekDays);
    }
  }

  calculateTotalContributions(): void {
    this.totalContributions = this.contributions.reduce((sum, day) => sum + day.count, 0);
  }

  selectYear(year: number): void {
    this.selectedYear = year;
    this.loadContributions();
  }

  getTooltip(day: ContributionDay): string {
    if (!day.date) return '';
    const count = day.count;
    const countStr = count === 0 ? 'No' : count.toString();
    const contributionStr = count === 1 ? 'contribution' : 'contributions';
    return `${countStr} ${contributionStr} on ${day.date}`;
  }

  onHover(day: ContributionDay): void {
    if (day.date) {
      this.hoveredDay = day;
    }
  }

  onLeave(): void {
    this.hoveredDay = null;
  }
}