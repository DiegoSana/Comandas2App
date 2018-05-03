import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";
import {RestapiProvider} from "../providers/restapi/restapi";
import {AplicacionProvider} from "../providers/app/aplicacion";
import {SocialSharing} from "@ionic-native/social-sharing";
import {Social} from "../providers/app/social";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Device} from "@ionic-native/device";
import {AppAvailability} from "@ionic-native/app-availability";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestapiProvider,
    AplicacionProvider,
    SocialSharing,
    Social,
      InAppBrowser,
      Device,
      AppAvailability
  ]
})
export class AppModule {}
