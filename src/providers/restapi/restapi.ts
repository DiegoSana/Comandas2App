import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpParams} from "@angular/common/http";

/*
  Generated class for the RestapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestapiProvider {

    url:string = "http://api.comandas.com/v1/";
    aplicacion_id:string = '9';
    headers:any;
    params:any;

    constructor(public http: HttpClient) {
        let headers = new HttpHeaders();
        headers.append('content-type','application/json');
        //headers.append('Authorization', 'Bearer ' + 'L7mIF21ZDvqfYIHDxCWcBBseqaOHF_dt');
        this.headers = headers;
        let params = new HttpParams({ fromObject: { aplicacion_id: this.aplicacion_id } });
        this.params = params;
    }

    getUsers() {
        return new Promise(resolve => {
            this.http.get(this.url+'users', {headers: this.headers, params: this.params})
              .subscribe(data => {
                resolve(data);
              }, err => {
                console.log(err);
              });
        })
    }

    getCategories() {
        return new Promise(resolve => {
            this.http.get(this.url+'menus', {headers: this.headers, params: this.params})
              .subscribe(data => {
                resolve(data);
              }, err => {
                console.log(err);
              });
        });
    }

    getProductsByCategorie(categorias_id) {
        return new Promise(resolve => {
            this.http.get(this.url+'productos?categoria_id='+categorias_id, {headers: this.headers, params: this.params})
                .subscribe(data => {
                    resolve(data);
                }, err => {
                    console.log(err);
                });
        });
    }

    getProduct(id) {
        return new Promise(resolve => {
            this.http.get(this.url+'productos/'+id, {headers: this.headers, params: this.params})
                .subscribe(data => {
                    resolve(data);
                }, err => {
                    console.log(err);
                });
        });
    }

    getAplicacion() {
        return new Promise(resolve => {
            this.http.get(this.url+'aplicacions/'+this.aplicacion_id, {headers: this.headers, params: this.params})
                .subscribe(data => {
                    resolve(data);
                }, err => {
                    console.log(err);
                });
        });
    }
}
