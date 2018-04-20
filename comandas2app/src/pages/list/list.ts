import { Component } from '@angular/core';

import {NavController, NavParams, LoadingController} from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import {RestapiProvider} from "../../providers/restapi/restapi";


@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {

    items: Array<{producto: any}>;
    categoria: any;
    loading: any;
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestapiProvider, public loadingCtrl: LoadingController) {
        this.presentLoadingDefault();
        this.categoria = navParams.data.categoria;
        this.getProductsByCategorie();
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

    itemTapped(event, item) {
        this.navCtrl.push(ItemDetailsPage, {
            item: item
        });
    }

    getProductsByCategorie() {
        this.rest.getProductsByCategorie(this.navParams.data.categoria_id)
            .then((data: {items: any}) => {
                this.loading.dismiss();
                var items = [];
                data.items.forEach(function(val, key){
                  items.push({producto: val});
                });
                this.items = items;
            });
    }
}
