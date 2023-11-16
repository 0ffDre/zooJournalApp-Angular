import { Component, Input, OnInit } from '@angular/core';
import { ZooServiceService } from '../service/zoo-service.service';
import { Journal } from '../models/journals.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-journal',
  templateUrl: './delete-journal.component.html',
  styleUrls: ['./delete-journal.component.css']
})
export class DeleteJournalComponent {

  @Input() journal!: Journal;




  constructor(private service: ZooServiceService, private router: Router) { }

  onJournalDelete(): void {
    this.service.deleteJournal(this.journal!.journalId).subscribe({
      next: this.onDeleteSuccess.bind(this),
      error: console.error
    });
  }

  onDeleteSuccess(obj: object): void {
    this.router.navigate(["list-journals"]);
  }

}