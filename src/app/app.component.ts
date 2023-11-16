import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ZooServiceService } from './service/zoo-service.service';
import { Journal } from './models/journals.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {

  constructor(private router: Router, private zooService: ZooServiceService) { }




  // Fetch journals for a specific user ID and navigate to the list component
  displayUserJournals(userId: number) {
    this.zooService.getJournalsByUserId(userId, (journals: Journal[]) => {
      this.router.navigate(['list-journals'], {
        queryParams: { data: new Date(), userId },
        state: { journals }, // Pass the fetched journals as state
      });
    });
  }

  // Create a new journal in hardcoded user entries
  createJournal(journal: Journal) {
    this.zooService.createJournal(journal, () => {
      console.log("Journal created successfully!");
    });
  }

  title = 'zoojournal';
}