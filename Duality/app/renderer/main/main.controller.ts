module app {
  'use strict';

  export class MainController {
    
    public greet: string;
    public test: string;    
    
    constructor () {
		  this.greet = 'Electron + Angularjs says hello!';
      this.test = "woorter";
    }

  }
}
