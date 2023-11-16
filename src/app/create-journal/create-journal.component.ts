import { Component } from '@angular/core';
import { Journal } from '../models/journals.model';
import { ZooServiceService } from '../service/zoo-service.service';

@Component({
  selector: 'app-create-journal',
  templateUrl: './create-journal.component.html',
  styleUrls: ['./create-journal.component.css']
})
export class CreateJournalComponent {
  journal: Journal = {
    journalId: 0,
    userfk: 1,
    location: "",
    date: "",
    description: "",
    feedback: ""
  };

  wasCreated: boolean = false;

  constructor(private service: ZooServiceService) { }

  onCreate() {
    let status = this.service.createJournal(this.journal, () => {
      console.log("Journal created successfully!");
    });
    console.log("The return from createJournal() was " + status);
    this.wasCreated = true;
  }
}
