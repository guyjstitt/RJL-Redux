import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Home {
  constructor(http) {
    this.http = http;
  }

    configureRouter(config, router) {
        config.map([
            {route: ["", "cases/view"], moduleId: 'view-case', nav: true, title: 'Case View'},
            {route: ["create"], moduleId: 'create-case', nav: true, title: 'Case Create'},
            {route: ["edit"], moduleId: 'edit-case', nav: false, title: 'Edit Case'}
        ]);
    }

  activate() {
    //return this.http.get('/api/home').then(response => {
    //  this.html = response.content.html;
    //});
  }

  attached() {

  }
}