import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    // no ocupamos el commonModule por que no tenemor directivas en el componente
    imports: [

    ]

})
export class ContadorModule{}