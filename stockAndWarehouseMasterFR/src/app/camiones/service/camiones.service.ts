import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Camion } from "../model/camion";

@Injectable({
    providedIn: 'root'
  })
export class CamionesService{

    private productoURL = 'http://localhost:8080/stockAndWarehouseMaster/api/camion/';

    constructor(private httpClient : HttpClient) { }

    public insertCamion(insertCamion: Camion): Observable<any> {
        return this.httpClient.post<any>(this.productoURL + 'newCamion',insertCamion);
    }

    public lista(): Observable<Camion[]> {
        return this.httpClient.get<Camion[]>(this.productoURL + 'listaCamiones');
    }

    public detail(id: number): Observable<Camion> {
        return this.httpClient.get<Camion>(this.productoURL + `detail/${id}`);
    }

    public delete(camion: Camion): Observable<any> {
        return this.httpClient.post<any>(this.productoURL + 'deleteCamion', camion);
    }
}