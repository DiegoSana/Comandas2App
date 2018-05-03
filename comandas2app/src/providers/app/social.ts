import {Injectable} from "@angular/core";
import {AppAvailability} from "@ionic-native/app-availability";
import {Device} from "@ionic-native/device";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {AplicacionProvider} from "./aplicacion";
import {ToastController} from "ionic-angular";

@Injectable()
export class Social {

    constructor(
        public toast: ToastController,
        public aplicacion: AplicacionProvider,
        public iap: InAppBrowser,
        public device: Device,
        public aa: AppAvailability
    )
    {

    }

    launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
        let app: string;
        if (this.device.platform === 'iOS') {
            app = iosSchemaName;
        } else if (this.device.platform === 'Android') {
            app = androidPackageName;
        } else {
            this.iap.create(httpUrl + username, '_system');
            return;
        }

        this.aa.check(app).then(
            () => { // success callback
                this.iap.create(appUrl + username, '_system');
            },
            () => { // error callback
                this.iap.create(httpUrl + username, '_system');
            }
        );
    }

    openInstagram() {
        if(!this.aplicacion.instagram_page_name) {
            let toast = this.toast.create({
                message: 'Cuenta de instagram no configurada',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            return;
        }
        this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://www.instagram.com/', this.aplicacion.instagram_page_name);
    }

    openFacebook() {
        if(!this.aplicacion.facebook_page_name) {
            let toast = this.toast.create({
                message: 'Cuenta de facebook no configurada',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            return;
        }
        this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://facewebmodal/f?href=https://www.facebook.com/', 'https://www.facebook.com/', this.aplicacion.facebook_page_name);
    }
}