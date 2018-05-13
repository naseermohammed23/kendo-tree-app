import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { MasterRolesComponent } from './master-roles/master-roles.component';
import { AccessDemoComponent } from './access-demo/access-demo.component';
import { AccessRolesService } from './access-roles.service';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'admin'},
  {path: 'admin', component: MasterRolesComponent},
  {path: 'user', component: UserRolesComponent},
  {path: 'demo', component: AccessDemoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserRolesComponent,
    MasterRolesComponent,
    AccessDemoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule, TreeViewModule,
    FormsModule
  ],
  providers: [AccessRolesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
