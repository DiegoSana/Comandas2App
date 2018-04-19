import { Injectable } from "@angular/core";
import {RestapiProvider} from "../restapi/restapi";


@Injectable()
export class AplicacionProvider {

    public nombre:string;
    public themeKey:string;
    public ionicHomeImageUrl:string;

    constructor(public rest: RestapiProvider) {
        this.getAplicacion();
    }

    getAplicacion() {
        this.rest.getAplicacion()
            .then(data => {
                this.nombre = data.nombre;
                this.ionicHomeImageUrl = data.ionicHomeImageUrl;
                this.themeKey = 'app'+data.id;
            });
    }
}