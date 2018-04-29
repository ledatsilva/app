import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import {Storage} from '@ionic/storage'
/**
 * Generated class for the ModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalComponent {
  public dadosUser={usuario:'',senha:''}
  constructor( public viewCtrl:ViewController, public storage: Storage) {
   this.storage.get('FormLogin').then((res)=>{
     this.dadosUser=res
     console.log(this.dadosUser.usuario)
     console.log(this.dadosUser.senha)
   })
  }
  fechaModal(){
    this.viewCtrl.dismiss()
  }
}
