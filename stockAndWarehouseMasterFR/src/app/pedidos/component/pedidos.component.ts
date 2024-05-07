import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PedidosService } from '../service/pedidos.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../users/service/user.service';
import { Pedido } from '../model/pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html'
})
export class PedidosComponent implements OnInit {

  mostrarTablaTodos: boolean = true;
  mostrarTablaPendientes: boolean = false;

  username = '';
  pedidosTotalesUsu: Pedido[] = [];
  pedidosNoGestionados: Pedido[] = [];

  constructor(
    private readonly modalService: NgbModal,
    private readonly route: ActivatedRoute,
    private router: Router,
    private service: PedidosService,
    private toastr: ToastrService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    if (this.userService.getToken()) {
      this.username = this.userService.getUserName();
      this.service.getPedidosByUsername(this.username).subscribe((response) => {
        if (response) {
          this.pedidosTotalesUsu = response;
          this.cargarEstados();
          this.verEstadosPedidos(this.pedidosTotalesUsu);
        }
      })
    }
  }

  cargarEstados(): void {
    this.pedidosTotalesUsu.forEach(pedido => {
      switch (pedido.estado) {
        case 5:
          pedido.estadoString = 'ACEPTADO';
          break;
        case 6:
          pedido.estadoString = 'EN PREPARACIÓN';
          break;
        case 7:
          pedido.estadoString = 'EN REPARTO';
          break;
        case 8:
          pedido.estadoString = 'ENTREGADO';
          break;
        case 9:
          pedido.estadoString = 'SOLICITADO PARA DEVOLUCIÓN';
          break;
        case 10:
          pedido.estadoString = 'DEVOLUCIÓN ACEPTADA';
          break;
        case 11:
          pedido.estadoString = 'DEVUELTO';
          break;
      }
    });
  }

  verEstadosPedidos(listaPedidosTotalesUsuario: Pedido[]) {
    listaPedidosTotalesUsuario.forEach(p=>{
        if(p.estado === 5){
            this.pedidosNoGestionados.push(p);
        }
    });
}

  verDetallePedido(id: number):void{
    this.router.navigate([`/pedidos/detalle-pedido/${id}`]);
  }

  mostrarTodos() {
    this.mostrarTablaTodos = true;
    this.mostrarTablaPendientes = false;
  }

  mostrarPendientes() {
    this.mostrarTablaTodos = false;
    this.mostrarTablaPendientes = true;
  }

}
