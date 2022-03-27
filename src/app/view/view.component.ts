import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Newspaper } from '../models/newspaper';
import { Observable } from 'rxjs';
import { addMultipleNewsPaper, resetNewspapers } from '../ngrx-store/actions';
import { ApiService } from '../services/api.service';
import { ParseService } from '../services/parse.service';
import {LazyLoadEvent, MessageService} from 'primeng/api';
import { Table } from 'primeng/table'; 

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  loading=false;
  filter=""; //the value in the input
  filterToSend=""; //the value last time pushed the button
  page=1;
  totalRecords=0;
  newsPapers$: Observable<Newspaper[]>;


  /*modal*/
  tempNewspaper:Newspaper | undefined;
  display=false;
  widthModal='50vw';
  @ViewChild(Table) tabla: Table | undefined;

  constructor(private messageService: MessageService,private parseService:ParseService,private apiService:ApiService, private store: Store<{ newspaperState: Array<Newspaper> }>) {
    this.newsPapers$ = store.select(state => state.newspaperState);
  }

  ngOnInit(): void {
  }



  search(fromButton:boolean){
    if(fromButton){//reset pagination and filter
      this.page=1;
      this.filterToSend=this.filter;
      this.tabla?.reset(); //reset the state of the paginator
    }
    this.loading=true
    this.store.dispatch(resetNewspapers());
    this.apiService.apiCall(this.filterToSend,this.page).subscribe({
        next:(res:any)=>
        {
          let parsedNewspapers=this.parseService.parseResponse(res);
          this.totalRecords=res.totalItems;
          console.log(parsedNewspapers);
          this.store.dispatch(addMultipleNewsPaper({newNewspapers:parsedNewspapers}));
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Data succesfully loaded!'});
          this.loading=false; 
        },
        error: (err)=>{
          this.loading=false;
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Error downloading the data'});
        }
      });
  
    
   /* this.store.dispatch(addNewsPaper({newNewspaper:new Newspaper("test2")}));
    console.log(this.newsPapers$);*/
  }


  /*Pagination*/
  paginate(event:LazyLoadEvent){
    console.log("event", event);

    if(event.first==0 && this.page!=1){
      this.page=1;
    }else if(event.first){
      this.page=event.first/50+1; //50 items per page
    }else{
      return ; //case lazy loading
    }
    console.log("page", this.page);

    this.search(false);
    
  }


  /*dialog*/
  showDialog(paper:any) {
    this.tempNewspaper=paper;
    this.display = true;
    if(window.screen.width < 700){
      this.widthModal="90vw";
    }else{
      this.widthModal="50vw";

    }
  }
}
