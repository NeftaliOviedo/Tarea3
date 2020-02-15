import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FormComponent } from './form.component';
import { ListadoLugaresComponentModule } from '../logic/listado-lugares/listado.module';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, ListadoLugaresComponentModule],
    declarations: [FormComponent],
    exports: [FormComponent]
})
export class FormComponentModule { }