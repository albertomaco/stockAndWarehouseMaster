import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from "../model/producto";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductosService {

    private productoURL = 'http://localhost:8080/stockAndWarehouseMaster/api/producto/';

    constructor(private httpClient: HttpClient) { }

    public insertProducto(formData: FormData): Observable<any> {
        return this.httpClient.post<any>(this.productoURL + 'newProducto', formData);
    }

    public updateProducto(producto: Producto): Observable<any> {
        return this.httpClient.post<any>(this.productoURL + 'update', producto);
    }

    public lista(): Observable<Producto[]> {
        return this.httpClient.get<Producto[]>(this.productoURL + 'listaProductos');
    }

    public listaFabrica(username: string): Observable<Producto[]> {
        return this.httpClient.get<Producto[]>(this.productoURL + `listaProductosFabrica/${username}`);
    }

    public detail(id: number): Observable<Producto> {
        return this.httpClient.get<Producto>(this.productoURL + `detail/${id}`);
    }

    public delete(prod: Producto): Observable<any> {
        return this.httpClient.post<any>(this.productoURL + 'deleteProducto', prod);
    }

    public darStock(prod: Producto): Observable<any> {
        return this.httpClient.post<any>(this.productoURL + 'darStockAlmacen', prod);
    }

}
