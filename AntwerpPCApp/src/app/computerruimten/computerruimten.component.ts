import { Component, OnInit } from '@angular/core';
import { PcruimtenService } from '../Service/pcruimten.service';

@Component({
  selector: 'app-computerruimten',
  templateUrl: './computerruimten.component.html',
  styleUrls: ['./computerruimten.component.css']
})
export class ComputerruimtenComponent implements OnInit {

  //init an array
  public pcruimten = [];
  
  // use DI so the service can be consumed
  constructor(private _pcRuimtenService: PcruimtenService) { }

  ngOnInit() {
   this._pcRuimtenService.getPcRuimten()
      .subscribe(data => this.pcruimten = data.features); 

     this._pcRuimtenService.getPcRuimten()
      .subscribe((data)=>{console.log(data.features);});
 
  }

}
