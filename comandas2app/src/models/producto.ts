import {Injectable} from "@angular/core";

@Injectable()

export class Producto {

    public nombre?: string = 'Cargando...';
    public descripcion?: string = 'Cargando...';
    public precio?: string = 'Cargando...';
    public productosImagenes?: [
        {
            imageUrl: 'cargando',
        }
    ];
}