import { Injectable } from '@angular/core';
import { Newspaper } from './models/newspaper';

@Injectable({
  providedIn: 'root'
})
export class ParseService {

  constructor() { }





  parseResponse(json:any){
    let arrayNewspaper:Array<Newspaper>=[];
    var item:any;
    for(item of json.items){
      arrayNewspaper.push(new Newspaper(item.alt_title,item.city,item.country,item.county,item.edition,item.end_year,item.essay,
        item.frequency,item.holding_type,item.id,item.language,item.lccn,item.note,
        item.oclc,item.place,item.place_of_publication,item.publisher,item.start_year,item.state,item.subject,item.title,item.title_normal,item.type,item.url)
      );
    }
    return arrayNewspaper;
  }

}
