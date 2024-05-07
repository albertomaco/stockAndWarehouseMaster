import { NgModule } from "@angular/core";
import { UtilsModule } from "../utils/utils.module";
import { CatalogoComponent } from "./component/catalogo.component";
import { CatalogoRoutingModule } from "./catalogo-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
    declarations: [CatalogoComponent],
    imports: [
        CatalogoRoutingModule,
        UtilsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule
    ]
})
export class CatalogoModule{ }