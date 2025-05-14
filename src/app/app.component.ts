import { Component } from '@angular/core';
import { ContributionGraphComponent } from './contribution-graph/contribution-graph.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContributionGraphComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'git-graph';
}
