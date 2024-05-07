import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Almacen } from '../model/almacen';
import { AlmacenService } from '../service/almacen.service';
import { ToastrService } from 'ngx-toastr';
import { AlmacenDetailComponent } from '../../utils/almacen-detail/almacen-detail.component';

@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html'
})
export class AlmacenesComponent implements OnInit {

  almacenes: Almacen[] = [];

  modalReference!: NgbModalRef;

  constructor(
    private readonly modalService: NgbModal,
    private readonly route: ActivatedRoute,
    private service: AlmacenService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit() {
    this.cargarAlamacenes();
  }

  cargarAlamacenes(): void {
    this.service.lista().subscribe((response) => {
      if (response) {
        this.almacenes = response;
      }
    });
  }

   crearAlmacen(): void {
    this.toastr.info('El almacén debe ser creado desde un usuario registrado', 'INFO.', {
      timeOut: 3000, positionClass: 'toast-top-center',
    });
  }

  async editarAlmacen(almacenLista: Almacen): Promise<void> {
    this.modalReference = this.modalService.open(AlmacenDetailComponent, {
      ariaLabelledBy: 'Detalle almacen',
      backdrop: 'static',
      centered: true,
      keyboard: true,
      size: 'lg',
      scrollable: true,
      windowClass: 'custom-modal',
    });

    (this.modalReference.componentInstance as AlmacenDetailComponent).almacenUpdate = almacenLista;
    try {
      const guardarAlmacen = await this.modalReference.result as Almacen;
      if(guardarAlmacen){
        this.service.insertAlmacen(guardarAlmacen).subscribe((response) => {
          if(response){
            this.cargarAlamacenes();
          }
        });
      }
    } catch (rejectedPromise) {
    }
  }

  async borrar(camionAEliminar: Almacen): Promise<void> {
    /*this.modalReference = this.modalService.open(ConfirmacionesModalComponent, {
      ariaLabelledBy: 'Eliminar almacén',
      backdrop: 'static',
      centered: true,
      keyboard: true,
      size: 'lg',
      scrollable: true,
      windowClass: 'custom-modal',
    });

    try {
      const eliminarAlmacen = await this.modalReference.result;
      if(eliminarAlmacen){
        this.service.delete(camionAEliminar).subscribe(() => {
          this.cargarAlamacenes();
        });
      }
    } catch (rejectedPromise) {
    }*/
  }
}
