import { Component } from '@angular/core';

import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {RestapiProvider} from "../../providers/restapi/restapi";
import {Producto} from "../../models/producto";

@Component({
    selector: 'page-item-details',
    templateUrl: 'item-details.html'
})
export class ItemDetailsPage {

    selectedItem: any;
    producto = {} as Producto;
    public loading: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestapiProvider, public loadingCtrl: LoadingController) {
        this.presentLoadingDefault();
        this.selectedItem = navParams.get('item');
    }

    ngOnInit() {
        this.getProducto();
    }

    public presentLoadingDefault() {
        this.loading = this.loadingCtrl.create({
            //spinner: 'dots',
            //spinner: 'bubbles',
            //spinner: 'circles',
            spinner: 'crescent',
        });

        this.loading.present();

        setTimeout(() => {
            this.loading.dismiss();
        }, 5000);
    }

    getProducto() {
        this.rest.getProduct(this.selectedItem.producto.id)
            .then(data => {
                this.loading.dismiss();
                this.producto = data;
            }).catch(err => {console.log(err)});
    }
}
