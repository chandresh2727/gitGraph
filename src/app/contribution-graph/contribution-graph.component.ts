import { Component, OnInit } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common'; 

@Component({
  selector: 'app-contribution-graph',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './contribution-graph.component.html',
  styleUrls: ['./contribution-graph.component.css']
})
export class ContributionGraphComponent implements OnInit {
  weeks: number = 53;
  days: number = 7;

  // ✅ Updated type
  contributions: {
    count: number;
    date: string;
    delay: number;
  }[][] = [];

  dayLabels: string[] = ['Mon', '', 'Wed', '', 'Fri', '', ''];
  monthLabels: string[] = [];
  monthPositions: number[] = [];

  ngOnInit(): void {
    const today = new Date();
    const totalWeeks = this.weeks;
    const totalDays = totalWeeks * this.days;

    for (let i = 0; i < totalWeeks; i++) {
      const week = [];

      for (let j = 0; j < this.days; j++) {
        const daysAgo = totalDays - (i * this.days + j);
        const date = new Date(today);
        date.setDate(today.getDate() - daysAgo);

        week.push({
          count: Math.floor(Math.random() * 5),
          date: date.toISOString().split('T')[0],
          delay: (i * this.days + j) * 10
        });
      }

      this.contributions.push(week);
    }

    this.generateMonthLabels();
  }

  getColor(level: number): string {
    const colors = ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];
    return colors[level];
  }

  generateMonthLabels() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let i = 0; i < this.weeks; i++) {
      if (i % 4 === 0) {
        this.monthLabels.push(months[(i / 4) % 12]);
        this.monthPositions.push(i);
      }
    }
  }
}
