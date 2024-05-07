import { Component, OnInit } from '@angular/core';
import { Producto } from '../../productos/model/producto';
import { ToastrService } from 'ngx-toastr';
import { ProductosService } from '../../productos/service/productos.service';
import { ProductoCatalogoDetailComponent } from '../../utils/producto-catalogo-modal/producto-catalogo-modal.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html'
})
export class CatalogoComponent implements OnInit {

  productos: Producto[] = [];
  productosEnCarrito: Producto[] = [];

  modalReference!: NgbModalRef;

  constructor(
    private readonly modalService: NgbModal,
    private readonly route: ActivatedRoute,
    private productoService: ProductosService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.cargarProductos();
    this.productosEnCarrito = this.obtenerProductosDelCarrito();
  }


  cargarProductos(): void {
    this.productoService.lista().subscribe((response) => {
      if (response) {
        this.productos = response;
      }
    });
  }

  aniadirProducto(producto: Producto): void {

  }

  async verProducto(producto: Producto): Promise<void> {
    this.modalReference = this.modalService.open(ProductoCatalogoDetailComponent, {
      ariaLabelledBy: 'Detalle producto',
      backdrop: 'static',
      centered: true,
      keyboard: true,
      size: 'lg',
      scrollable: true,
      windowClass: 'custom-modal',
    });
    (this.modalReference.componentInstance as ProductoCatalogoDetailComponent).producto = producto;

    try {
      const guardarProductoCarrito = await this.modalReference.result as Producto;
      if (guardarProductoCarrito) {
        this.productosEnCarrito = this.obtenerProductosDelCarrito();

        const index = this.productosEnCarrito.findIndex(prod => prod.id === guardarProductoCarrito.id);
        if (index !== -1) {
          this.productosEnCarrito[index].cantidadProductoPedido +=  guardarProductoCarrito.cantidadProductoPedido;
          this.productosEnCarrito[index].precioCantidadTotal +=  Number(guardarProductoCarrito.precioCantidadTotal.toFixed(2));
        }else{
          this.productosEnCarrito.push(guardarProductoCarrito);
        }

        localStorage.setItem('carrito', JSON.stringify(this.productosEnCarrito));

        this.toastr.success('Producto añadido correctamente a la cesta', 'ACCIÓN COMPLETADA CORRECAMENTE', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    } catch (rejectedPromise) {
    }
  }

  obtenerProductosDelCarrito(): Producto[] {
    const carritoString = localStorage.getItem('carrito');
    if (carritoString) {
      return JSON.parse(carritoString);
    } else {
      return [];
    }
  }
}
