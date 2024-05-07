import { NgModule } from "@angular/core";
import { UtilsModule } from "../utils/utils.module";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { AlmacenesRoutingModule } from "./almacenes-routing.module";
import { AlmacenService } from "./service/almacen.service";
import { AlmacenesComponent } from "./component/almacenes.component";

@NgModule({
    providers:  [ AlmacenService ],
    declarations: [AlmacenesComponent],
    imports: [
        AlmacenesRoutingModule,
        UtilsModule,
        HttpClientModule,
        CommonModule
    ]
})
export class AlmacenesModule{ }