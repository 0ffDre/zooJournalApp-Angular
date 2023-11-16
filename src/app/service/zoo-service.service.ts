// Importing necessary modules and data
import { Injectable } from '@angular/core';
//import { User } from '../models/users.model';
import { Journal } from '../models/journals.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Injectable decorator allows this service to be injected into other components or services
@Injectable({ providedIn: 'root' })

export class ZooServiceService {
    private host = "http://localhost:3000";

    constructor(private http: HttpClient) { }

    // Method to get a list of all journals not seperated by specific user
    public getJournals(callback: (journals: Journal[]) => void): void {
        this.http.get<Journal[]>(this.host + "/journals").
            subscribe((journals: Journal[]) => {
                callback(journals);
            })
    }



    // Method to get journals of a specific user
    public createJournal(journal: Journal, callback: () => void): void {
        //Add new Journal Entry
        this.http.post<Journal>(this.host + "/journals", journal)
            .subscribe(() => {
                callback();
            });
    }

    // Method to get journals of a specific user
    public getJournalsByUserId(userId: number, callback: (journals: Journal[]) => void): void {
        let request = this.host + `/journals/${userId}`;
        console.log('request', request);
        this.http.get<Journal[]>(request).
            subscribe((journals: Journal[]) => {
                console.log('have journals', journals);
                callback(journals);
            });
    }

    // Method to delete a journal by its ID
    public deleteJournal(userId: number): Observable<Object> {
        return (this.http.delete<Object>(this.host + `/journals/${userId}`));
    }

    // Method to update an existing journal entry

    public updateJournal(journal: Journal): Observable<Object> {
        //update specific journal entry
        return (this.http.put<Object>(this.host + `/journals/`, journal));
    }


    // // Method to update an existing album
    // public updateAlbum(album: Album, callback: () => void): void {
    //     // Add a new Album
    //     this.http.put<Album>(this.host + "/albums", album)
    //         .subscribe((data) => {
    //             callback();
    //         });
    // }


}
