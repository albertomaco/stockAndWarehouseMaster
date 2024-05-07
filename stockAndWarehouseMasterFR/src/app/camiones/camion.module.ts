import { NgModule } from "@angular/core";
import { UtilsModule } from "../utils/utils.module";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { CamionesService } from "./service/camiones.service";
import { CamionesRoutingModule } from "./camiones-routing.module";
import { CamionesComponent } from "./component/camiones.component";

@NgModule({
    providers:  [ CamionesService],
    declarations: [CamionesComponent],
    imports: [
        CamionesRoutingModule,
        UtilsModule,
        HttpClientModule,
        CommonModule
    ]
})
export class CamionesModule{ }