import { Component, ViewChild } from '@angular/core';

import {Platform, MenuController, Nav, NavController} from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RestapiProvider} from "../providers/restapi/restapi";
import {AplicacionProvider} from "../providers/app/aplicacion";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    // make HelloIonicPage the root (or first) page
    rootPage = HelloIonicPage;
    pages: Array<{title: string, component: any, categoria_id: any, categoria: any}>;

    constructor(
        public platform: Platform,
        public menu: MenuController,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public rest: RestapiProvider,
        public aplicacion: AplicacionProvider
    ) {
        this.initializeApp();
        this.getCategories();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.statusBar.overlaysWebView(false);
            this.statusBar.backgroundColorByHexString('#000000');
            this.splashScreen.hide();
        });
    }

    goHome() {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(this.rootPage);
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component, {categoria_id: page.categoria_id, categoria: page.categoria});
    }

    getCategories() {
        this.rest.getCategories()
            .then((data: {items:any}) => {
                var pages = [];
                data.items.forEach(function(val, key){
                    pages.push({title: val.nombre, component: ListPage, categoria_id: val.id, categoria: val});
                });
                this.pages = pages;
        });
    }
}
