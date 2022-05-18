import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarUserPageRoutingModule } from './registrar-user-routing.module';

import { RegistrarUserPage } from './registrar-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarUserPageRoutingModule
  ],
  declarations: [RegistrarUserPage]
})
export class RegistrarUserPageModule {}
