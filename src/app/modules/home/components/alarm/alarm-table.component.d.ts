import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EntityId } from '@shared/models/id/entity-id';
import { EntitiesTableComponent } from '@home/components/entity/entities-table.component';
import { DialogService } from '@core/services/dialog.service';
import { AlarmTableConfig } from './alarm-table-config';
import { AlarmService } from '@app/core/http/alarm.service';
import * as i0 from "@angular/core";
export declare class AlarmTableComponent implements OnInit {
    private alarmService;
    private dialogService;
    private translate;
    private datePipe;
    private dialog;
    activeValue: boolean;
    dirtyValue: boolean;
    entityIdValue: EntityId;
    set active(active: boolean);
    set entityId(entityId: EntityId);
    entitiesTable: EntitiesTableComponent;
    alarmTableConfig: AlarmTableConfig;
    constructor(alarmService: AlarmService, dialogService: DialogService, translate: TranslateService, datePipe: DatePipe, dialog: MatDialog);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmTableComponent, "tb-alarm-table", never, { "active": "active"; "entityId": "entityId"; }, {}, never, never>;
}
