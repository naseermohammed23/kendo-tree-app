import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckableSettings, TreeItemLookup } from '@progress/kendo-angular-treeview';
import { of } from 'rxjs/observable/of';
import { AccessRolesService } from '../access-roles.service';
import {BBB} from '../cwlv.interface';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {
  appName = 'CWLV';
  @ViewChild('tree1') tree;
  // public checkedKeys: any[] = ['enabled']; // this.accessRolesSvc.savedCheckedKeys; // ['SCPT_Role', 'Aircraft'];
  public enableCheck = true;
    public checkChildren = false;
    public checkParents = false;
    public checkMode: any = 'multiple';
    public selectionMode: any = 'single';
    public expandedKeys: any[] = ['0', '0_0', '0_1', '0_1_0', '0_2'];
    // public key = 'text';

  public data: BBB[] = this.accessRolesSvc.cwlvData; // masterData;
  
  

 /* public isItemChecked = (_: any, index: string) => {
    console.log(this.checkedKeys);
    // console.log(index);
    return this.checkedKeys.indexOf(index) > -1 ? 'checked' : 'none';
}*/

/*public isEnabled(): boolean {
    return true;
}*/
public handleChecking(itemLookup: TreeItemLookup): void {
  if ( itemLookup.item.dataItem.state === 'enabled') {
    itemLookup.item.dataItem.state = 'disabled';
  } else {
    itemLookup.item.dataItem.state = 'enabled';
  }
  console.log(itemLookup.item.dataItem);
  this.checkedKeys = ['enabled'];
}
saveData(): void {
  // this.accessRolesSvc.savedCheckedKeys = this.checkedKeys;
  // console.log(this.accessRolesSvc.savedCheckedKeys);
}

public get checkableSettings(): CheckableSettings {
  return {
      checkChildren: this.checkChildren,
      checkParents: this.checkParents,
      enabled: this.enableCheck,
      mode: this.checkMode
  };
}

public children = (dataItem: any): any[] => of(dataItem.items);
public hasChildren = (dataItem: any): boolean => !!dataItem.items;


// Custom logic handling Indeterminate state when custom data item property is persisted
/* public isChecked = (dataItem: any, index: string): CheckState => {
  if (this.containsItem(dataItem)) { return 'checked'; }

  if (this.isIndeterminate(dataItem.items)) { return 'indeterminate'; }

  return 'none';
}

private containsItem(item: any): boolean {
  return this.checkedKeys.indexOf(item[this.key]) > -1;
}

private isIndeterminate(items: any[] = []): boolean {
let idx = 0;
let item;

while (item = items[idx]) {
  if (this.isIndeterminate(item.items) || this.containsItem(item)) {
    return true;
  }

  idx += 1;
}

return false;
} */

onButtonClick() {
  // this.title = 'Hello from Kendo UI!';
  // console.log(this.tree.data.value.length);
  /* const data1 = this.tree.data;
        console.log(this.tree.data.value.length);

        for (var i = 0, j = this.tree.data.value.length; i < j; i++) {
            checkChildren(this.tree.data.value[i]);
        }

        function checkChildren(data) {console.log(data.checked);
            if (data.checked) {
               data.set('checked', true);
            }
            if (data.items !== undefined) {
                for (var i = 0, j = data.items.length; i < j; i++) {
                    checkChildren(data.items[i]);
                }
            }
        }
 console.log(this.tree.data); */
const nodes = this.tree.data.value;
console.log(nodes.length);
 for ( const node of nodes) {
   this.nodesDisplay(node.items);
      /* if (node.hasChildren) {
        console.log(node.items.length);
      } */
 }

}

nodesDisplay(nodes: any) {
     console.log(nodes.length);
      for ( const node1 of nodes) {
        if (node1.items !== undefined) {
        // console.log(node1.items.length);
        this.nodesDisplay(node1.items);
        } else {
          continue;
        }
      }
    // }
}

displayData() {
  const data1 = this.tree.data;
  console.log(this.tree.data.value.length);
        for (let i = 0, j = this.tree.data.value.length; i < j; i++) {
            checkChildren(this.tree.data.value[i]);
        }

        function checkChildren(data) {
          console.log(data);
            if (data.isChecked) {console.log(data.isChecked);
               data.set('checked', true);
            }
            if (data.items !== undefined) {
                for (let i = 0, j = data.items.length; i < j; i++) {
                    checkChildren(data.items[i]);
                }
            }
        }

        console.log(this.tree.data);
}
  constructor(private accessRolesSvc: AccessRolesService) { }

  ngOnInit() {
	 // console.log(JSON.stringify((this.tree).html());)
  }

}
