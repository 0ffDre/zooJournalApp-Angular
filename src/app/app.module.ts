import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { ListUsersComponent } from './list-users/list-users.component';
import { ListJournalsComponent } from './list-journals/list-journals.component';
import { CreateJournalComponent } from './create-journal/create-journal.component';
import { UpdateJournalComponent } from './update-journal/update-journal.component';
import { DeleteJournalComponent } from './delete-journal/delete-journal.component';

@NgModule({
  declarations: [
    AppComponent,
    //ListUsersComponent,
    ListJournalsComponent,
    DeleteJournalComponent,
    CreateJournalComponent,
    UpdateJournalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
