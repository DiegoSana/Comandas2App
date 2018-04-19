import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {RestapiProvider} from "../../providers/restapi/restapi";

@Component({
    selector: 'page-item-details',
    templateUrl: 'item-details.html'
})
export class ItemDetailsPage {

    selectedItem: any;
    producto: {
        nombre:any,
        descripcion:any,
        precio:any,
        productosImagenes:Array<{imageUrl:any}>
    } = {
        nombre: 'Cargando...',
        descripcion: 'Cargando...',
        precio: 'Cargando...',
        productosImagenes: [
            {
                imageUrl: 'cargando',
            }
        ]
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestapiProvider) {
        this.selectedItem = navParams.get('item');
    }

    ngOnInit() {
        this.getProducto();
        //console.log(this.producto);
    }

    getProducto() {
        this.rest.getProduct(this.selectedItem.producto.id)
            .then(data => {
                this.producto = data;
                console.log(this.producto);
                /*var prodImgs = this.producto.productosImagenes;
                prodImgs.splice(0, 1);
                console.log(data.productosImagenes);
                for (let val of data.productosImagenes) {
                    console.log(val);
                    prodImgs.push(val);
                }
                this.producto.productosImagenes = prodImgs;*/
            }).catch(err => {console.log(err)});
    }
}
