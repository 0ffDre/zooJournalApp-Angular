import { Component, Input, OnInit } from '@angular/core';
import { ZooServiceService } from '../service/zoo-service.service';
import { User } from '../models/users.model';
import { Journal } from '../models/journals.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-journals',
  templateUrl: './list-journals.component.html',
  styleUrls: ['./list-journals.component.css'],

})
export class ListJournalsComponent implements OnInit {
  @Input() journal!: Journal;
  journals: Journal[] = [];
  selectedJournal: Journal | null = null;

  constructor(private service: ZooServiceService, private router: Router) { }

  ngOnInit() {
    const userId: number = 1; // Hardcoded user ID

    this.service.getJournalsByUserId(userId, (journals: Journal[]) => {
      this.journals = journals;
    });
  }


  public onSelectJournal(journal: Journal) {
    this.selectedJournal = journal;
  }

  public onUpdateJournal(journal: Journal) {
    this.router.navigate(["/update-journal", journal.journalId]);
  }
}

