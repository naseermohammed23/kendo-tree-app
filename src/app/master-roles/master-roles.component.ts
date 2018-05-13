import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckableSettings, TreeItemLookup } from '@progress/kendo-angular-treeview';
import { of } from 'rxjs/observable/of';
import { masterData } from '../../assets/master-template';
import { AccessRolesService } from '../access-roles.service';
import {BBB} from '../cwlv.interface';

@Component({
  selector: 'app-master-roles',
  templateUrl: './master-roles.component.html',
  styleUrls: ['./master-roles.component.scss']
})
export class MasterRolesComponent implements OnInit {
  masterTitle = 'Master Template';
  @ViewChild('tree1') tree;
  public enableCheck = true;
  public checkChildren = false;
  public checkParents = false;
  public checkMode: any = 'multiple';
  public selectionMode: any = 'single';
  public expandedKeys: any[] = ['0', '0_0', '0_1', '0_1_0', '0_2'];
  public key = 'text';
  public data: BBB[] = this.accessRolesSvc.masterData;

  public get checkableSettings(): CheckableSettings {
    return {
      checkChildren: this.checkChildren,
      checkParents: this.checkParents,
      enabled: this.enableCheck,
      mode: this.checkMode
    };
  }

  public children = (dataItem: any): any[] => of( dataItem.items);
  public hasChildren = (dataItem: any): boolean => !!dataItem.items;

  constructor(private accessRolesSvc: AccessRolesService) { }

  ngOnInit() {
    // this.tree.expandedKeys();
  }
}
