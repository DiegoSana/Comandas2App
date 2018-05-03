import { Injectable } from "@angular/core";
import {RestapiProvider} from "../restapi/restapi";


@Injectable()
export class AplicacionProvider {

    public nombre:string;
    public themeKey:string;
    public ionicHomeImageUrl:string;
    public facebook_page_name: string;
    public instagram_page_name: string;

    constructor(public rest: RestapiProvider) {
        this.getAplicacion();
    }

    getAplicacion() {
        this.rest.getAplicacion()
            .then((data: {nombre: string, ionicHomeImageUrl: string, id: number, instagram_page_name: string, facebook_page_name: string}) => {
                this.facebook_page_name = data.facebook_page_name;
                this.instagram_page_name = data.instagram_page_name;
                this.nombre = data.nombre;
                this.ionicHomeImageUrl = data.ionicHomeImageUrl;
                this.themeKey = 'app'+data.id;
            });
    }
}