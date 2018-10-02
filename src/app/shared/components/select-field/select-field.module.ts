import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MySelectFieldComponent } from './select-field.component';
import { SelectFieldService } from './select-field.service';

@NgModule({
    declarations: [
        MySelectFieldComponent
    ],
    providers: [
        SelectFieldService
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        MySelectFieldComponent
    ],
  })

  export class SelectFiledModule {}
