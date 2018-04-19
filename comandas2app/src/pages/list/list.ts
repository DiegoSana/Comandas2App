import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import {RestapiProvider} from "../../providers/restapi/restapi";

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {

    items: Array<{producto: any}>;
    categoria: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestapiProvider) {

        this.categoria = navParams.data.categoria;
        this.getProductsByCategorie();
    }

    itemTapped(event, item) {
        this.navCtrl.push(ItemDetailsPage, {
            item: item
        });
    }

    getProductsByCategorie() {
        this.rest.getProductsByCategorie(this.navParams.data.categoria_id)
            .then(data => {
                var items = [];
                data.items.forEach(function(val, key){
                  items.push({producto: val});
                });
                this.items = items;
            });
    }
}
