import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  users : User[] = [];

  constructor(private userService: UserService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.getUsers();
  }

  ionViewWillEnter(){
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  async deleteUser(id: number){
    const alert = await this.alertCtrl.create({
      header: 'Eliminar este usuario',
      message: '¿Estás seguro?',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.userService.deleteUser(id).subscribe(data => {this.getUsers()});
        }
      }, 'Cancelar']
    })
    await alert.present();
  }

}
