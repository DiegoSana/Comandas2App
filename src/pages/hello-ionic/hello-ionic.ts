import { Component } from '@angular/core';
import {RestapiProvider} from "../../providers/restapi/restapi";
import {AplicacionProvider} from "../../providers/app/aplicacion";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

    users:any;

    constructor(public rest: RestapiProvider, public aplicacion: AplicacionProvider) {

    }
}
