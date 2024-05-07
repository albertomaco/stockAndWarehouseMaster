import { NgModule } from "@angular/core";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { CommonModule } from "@angular/common";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { ProductosService } from "../productos/service/productos.service";
import { ProductoDetailComponent } from "./producto-detail/producto-detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CamionDetailComponent } from "./camion-detail/camion-detail.component";
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfirmacionesModalComponent } from "./confirmaciones-modal/confirmaciones-modal.component";
import { AlmacenDetailComponent } from "./almacen-detail/almacen-detail.component";
import { StocksDetailComponent } from "./stocks-detail/stocks-detail.component";
import { ProductoCatalogoDetailComponent } from "./producto-catalogo-modal/producto-catalogo-modal.component";

@NgModule({
    providers:[ProductosService],
    declarations: [ToolbarComponent,
        ProductoDetailComponent,
        CamionDetailComponent,
        ConfirmacionesModalComponent,
        AlmacenDetailComponent,
        StocksDetailComponent,
        ProductoCatalogoDetailComponent,
    ],
    imports: [
        CommonModule,
        NgbDropdownModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule

    ],
    exports: [ToolbarComponent,
        ProductoDetailComponent,
        CamionDetailComponent,
        ConfirmacionesModalComponent,
        AlmacenDetailComponent,
        StocksDetailComponent,
        ProductoCatalogoDetailComponent,
    ]
})
export class UtilsModule{ }