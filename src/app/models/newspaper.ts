
export class Newspaper {
    alt_title: Array<String>
    city: Array<String>
    country: String
    county:  Array<String>
    edition: String
    end_year:number
    essay:Array<String>
    frequency: String;
    holding_type:Array<String>
    id:String
    language:Array<String>
    lccn:String
    note:Array<String>
    oclc:String
    place:Array<String>
    place_of_publication:String
    publisher:String
    start_year:number
    state:Array<String>
    subject:Array<String>
    title:String
    title_normal:String
    type:String
    url:String

  constructor(
    alt_title: Array<String>, 
    city: Array<String>, 
    country: String, 
    county: Array<String>, 
    edition: String, 
    end_year: number, 
    essay: Array<String>, 
    frequency: String, 
    holding_type: Array<String>, 
    id: String, 
    language: Array<String>, 
    lccn: String, 
    note: Array<String>, 
    oclc: String, 
    place: Array<String>, 
    place_of_publication: String, 
    publisher: String, 
    start_year: number, 
    state: Array<String>, 
    subject: Array<String>, 
    title: String, 
    title_normal: String, 
    type: String, 
    url: String
) {
    this.alt_title = alt_title
    this.city = city
    this.country = country
    this.county = county
    this.edition = edition
    this.end_year = end_year
    this.essay = essay
    this.frequency = frequency
    this.holding_type = holding_type
    this.id = id
    this.language = language
    this.lccn = lccn
    this.note = note
    this.oclc = oclc
    this.place = place
    this.place_of_publication = place_of_publication
    this.publisher = publisher
    this.start_year = start_year
    this.state = state
    this.subject = subject
    this.title = title
    this.title_normal = title_normal
    this.type = type
    this.url = url
  }
    
	

}