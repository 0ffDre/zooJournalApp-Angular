import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListJournalsComponent } from './list-journals/list-journals.component';
import { CreateJournalComponent } from './create-journal/create-journal.component';
import { UpdateJournalComponent } from './update-journal/update-journal.component';
const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'list-journals', component: ListJournalsComponent },
  { path: 'create-journal', component: CreateJournalComponent },
  { path: 'update-journal/:journalId', component: UpdateJournalComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
