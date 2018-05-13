import { Injectable } from '@angular/core';
import {masterData} from '../assets/master-template';
import {cwlvData} from '../assets/cwlv-template';

@Injectable()
export class AccessRolesService {

  public masterData: any[] = masterData;

  public cwlvData: any[] = cwlvData

  public savedCheckedKeys: any[] = [];

  constructor() { }

}
