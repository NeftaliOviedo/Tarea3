import { Component,OnInit } from '@angular/core';
import { EnviarLugarService } from '../../service/enviar-lugar.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
 lista:any;
  constructor(private enviarService: EnviarLugarService) {
  }
  ngOnInit(){
    this.enviarService.$getObjectSource.subscribe(data => {
      console.log(data);
      this.lista = data;
    }).unsubscribe();
  }
 
}
