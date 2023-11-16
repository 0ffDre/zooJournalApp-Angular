import { Component, OnInit } from '@angular/core';
import { ZooServiceService } from '../service/zoo-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Journal } from '../models/journals.model';

@Component({
  selector: 'app-update-journal',
  templateUrl: './update-journal.component.html',
  styleUrls: ['./update-journal.component.css']
})
export class UpdateJournalComponent implements OnInit {
  journal: Journal = {
    journalId: 0,
    userfk: 1,
    location: "",
    date: "",
    description: "",
    feedback: ""
  };

  constructor(private service: ZooServiceService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const journalId = parseInt(param.get('journalId')!);
      this.service.getJournalsByUserId(1, (journals: Journal[]) => {
        this.journal = journals.find(j => j.journalId === journalId)!;

      });
    })
  }


  onJournalUpdate(): void {
    this.service.updateJournal(this.journal!).subscribe({
      next: this.onUpdateSuccess.bind(this),
      error: console.error
    });
  }

  onUpdateSuccess(obj: object): void {
    this.router.navigate(["list-journals"]);
    console.log("Journal was Updated!!!");
  }
}
