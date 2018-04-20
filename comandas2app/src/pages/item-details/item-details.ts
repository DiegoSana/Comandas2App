import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {RestapiProvider} from "../../providers/restapi/restapi";
import {Producto} from "../../models/producto";

@Component({
    selector: 'page-item-details',
    templateUrl: 'item-details.html'
})
export class ItemDetailsPage {

    selectedItem: any;
    producto = {} as Producto;

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
            }).catch(err => {console.log(err)});
    }
}
