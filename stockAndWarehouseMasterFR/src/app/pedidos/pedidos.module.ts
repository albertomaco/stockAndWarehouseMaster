import { NgModule } from "@angular/core";
import { UtilsModule } from "../utils/utils.module";
import {  HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { PedidosService } from "./service/pedidos.service";
import { PedidosComponent } from "./component/pedidos.component";
import { PedidosRoutingModule } from "./pedidos-routing.module";
import { PedidoDetailComponent } from "./component/pedido-detail/pedido-detail.component";
import { AlmacenPedidosComponent } from "./component/pedidos-almacen/pedidos.almacen.component";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
    providers:  [ PedidosService],
    declarations: [PedidosComponent, PedidoDetailComponent, AlmacenPedidosComponent],
    imports: [
        PedidosRoutingModule,
        UtilsModule,
        HttpClientModule,
        CommonModule,
        NgxSpinnerModule
    ]
})
export class PedidosModule{ }