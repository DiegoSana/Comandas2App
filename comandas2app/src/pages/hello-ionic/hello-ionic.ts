import { Component } from '@angular/core';
import {RestapiProvider} from "../../providers/restapi/restapi";
import {AplicacionProvider} from "../../providers/app/aplicacion";
import {SocialSharing} from "@ionic-native/social-sharing";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Platform} from "ionic-angular";
import {Social} from "../../providers/app/social";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

    users:any;

    constructor(
        public rest: RestapiProvider,
        public aplicacion: AplicacionProvider,
        public http: HttpClient,
        public socialSharing: SocialSharing,
        public platform: Platform,
        public social: Social

    ) {

    }

    openInstagram() {
        this.social.openInstagram();
    }

    openFacebook() {
        this.social.openFacebook();
    }

    facebookShare(){
        if(this.platform.is('core') || this.platform.is('mobileweb')) {
            // web browser
            setTimeout(function() {
                window.open("https://www.facebook.com/sofar.desarrollos/");
            }, 25);
            window.open("fb://page/sofar.desarrollos");
        } else {
            // app
            // falta checkear si tiene instalado facebook
            this.socialSharing.shareViaFacebook('Rudaaaa', null, 'http://www.sofar.com.ar');
        }
    }
}
