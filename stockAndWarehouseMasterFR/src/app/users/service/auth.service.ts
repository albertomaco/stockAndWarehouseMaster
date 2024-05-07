import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private authenticationURL = 'http://localhost:8080/stockAndWarehouseMaster/api/auth/';

    constructor(private httpClient: HttpClient) { }

    signup(name: string, username: string, password: string, email: string) {
        var roles = ["user"];
        var nuevoUsuario = {
            name, username, password, email, roles: roles
        };

        console.table(nuevoUsuario)
        return this.httpClient.post(this.authenticationURL + 'signup', nuevoUsuario);
    }

    login(username: string, password: string) {
        var loginUsuarioRegistrado = {
            username, password
        };

        console.table(loginUsuarioRegistrado)
        return this.httpClient.post(this.authenticationURL + 'login', loginUsuarioRegistrado, { observe: 'response' });
    }
}
