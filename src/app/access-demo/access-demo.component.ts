import { Component, OnInit, ElementRef } from '@angular/core';
import { AccessRolesService } from '../access-roles.service';

@Component({
  selector: 'app-access-demo',
  templateUrl: './access-demo.component.html',
  styleUrls: ['./access-demo.component.scss']
})
export class AccessDemoComponent implements OnInit {

  public checkedKeys: string[] = this.accessRolesSvc.savedCheckedKeys; // ['SCPT_Role', 'Aircraft', 'Fleet'];
  constructor(private myElement: ElementRef, private accessRolesSvc: AccessRolesService) { }

  ngOnInit() {
  }

  checkvalid(name: string) {
    if ( this.checkedKeys.indexOf(name) > -1 ) {
      return false;
    } else {
      return true;
    }
  }

}
