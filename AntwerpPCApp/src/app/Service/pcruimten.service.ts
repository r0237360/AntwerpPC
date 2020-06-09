import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../Class/RootObject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PcruimtenService {

  // This string is from the Antwerp website that offers API data : https://portaal-stadantwerpen.opendata.arcgis.com/
  private _url: string = "https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek6/MapServer/593/query?where=1%3D1&outFields=*&outSR=4326&f=json"
  constructor(private http: HttpClient) { }

  /* http.get returns an observable. 
  Er is waarschijnlijk ook steeds meer dan 1 object dus er is een array nodig [] van objecten die gedefinieerd zijn in je klasse.
  In dit geval is de "root" klasse RootObject */
   getPcRuimten(): Observable<RootObject[]>{
    return this.http.get<RootObject[]>(this._url);
  }



}
