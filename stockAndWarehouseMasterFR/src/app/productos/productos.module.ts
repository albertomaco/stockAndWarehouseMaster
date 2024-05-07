import { NgModule } from "@angular/core";
import { UtilsModule } from "../utils/utils.module";
import { ProductosComponent } from "./component/productos.component";
import { ProductosRoutingModule } from "./productos-routing.module";
import { ProductosService } from "./service/productos.service";
import {  HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
    providers:  [ ProductosService],
    declarations: [ProductosComponent],
    imports: [
        ProductosRoutingModule,
        UtilsModule,
        HttpClientModule,
        CommonModule
    ]
})
export class ProductosModule{ }