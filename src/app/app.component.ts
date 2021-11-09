import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* An empty array that is responsible
       to add a division */
       items:string[] = [];
  
       /* A two-way binding performed which
          pushes text on division */
       newTask='';
     
     
       /* When input is empty, it will
          not create a new division */
       public addToList() {
           if (this.newTask == '') {
           }
           else {
               this.items.push(this.newTask);
               this.newTask = '';
           }
       }
       /* This function takes to input the
          task, that has to be deleted*/
       public deleteTask(i:number) {
           this.items.splice(i, 1);
       }
}
