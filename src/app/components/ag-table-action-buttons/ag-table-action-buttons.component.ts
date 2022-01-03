import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

interface ButtonConfigModel {
  buttonLabel: string;
  onButtonClick: (params: any) => any
}

interface ParamsModel extends ICellRendererParams {
  buttonConfigs: ButtonConfigModel[];
}

/**
 * Gets button configurations from parent and returns the row data upon clicking
 */
@Component({
  selector: 'ag-table-action-buttons',
  templateUrl: './ag-table-action-buttons.component.html',
  styleUrls: ['./ag-table-action-buttons.component.scss']
})
export class AgTableActionButtonsComponent implements ICellRendererAngularComp {
  public params: ParamsModel | undefined;
  public buttonConfigs: ButtonConfigModel[] = []

  agInit(params: ParamsModel): void {
    this.params = params;
    this.buttonConfigs = params.buttonConfigs;
  }

  refresh(params?: any): boolean {
    return true;
  }
}
