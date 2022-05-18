import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.page.html',
  styleUrls: ['./registrar-user.page.scss'],
})
export class RegistrarUserPage implements OnInit {

  user: User = new User();
  editar: boolean = false;

  constructor(private userService: UserService, private router: Router, private routeActive: ActivatedRoute) { }

  ngOnInit() {
    this.routeActive.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.editar = true;
        this.userService.getUserById(id).subscribe(user => {this.user = user});
      }
    })
  }

  submitUser(){
    this.userService.postUser(this.user).subscribe(user => {
      console.log(user);
      this.router.navigate(['/posts']);
    });
  }

  editUser(user: User) {
    this.userService.putUser(user).subscribe(data => {
      console.log(data);
      this.router.navigate(['/posts']);
    });
  }

}
