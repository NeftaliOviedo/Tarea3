import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-listado-lugares',
  templateUrl: './listado-lugares.component.html',
  styleUrls: ['./listado-lugares.component.scss'],
})
export class ListadoLugaresComponent implements OnInit {
@Input() lugar:any = {}
  constructor() { }

  ngOnInit() {}

}
