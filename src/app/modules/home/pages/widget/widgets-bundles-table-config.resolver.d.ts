import { Resolve, Router } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { WidgetService } from '@app/core/http/widget.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Authority } from '@shared/models/authority.enum';
import { DialogService } from '@core/services/dialog.service';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { UtilsService } from '@core/services/utils.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class WidgetsBundlesTableConfigResolver implements Resolve<EntityTableConfig<WidgetsBundle>> {
    private store;
    private dialogService;
    private widgetsService;
    private userPermissionsService;
    private translate;
    private importExport;
    private datePipe;
    private router;
    private utils;
    private readonly config;
    constructor(store: Store<AppState>, dialogService: DialogService, widgetsService: WidgetService, userPermissionsService: UserPermissionsService, translate: TranslateService, importExport: ImportExportService, datePipe: DatePipe, router: Router, utils: UtilsService);
    resolve(): EntityTableConfig<WidgetsBundle>;
    isWidgetsBundleEditable(widgetsBundle: WidgetsBundle, authority: Authority): boolean;
    importWidgetsBundle($event: Event): void;
    openWidgetsBundle($event: Event, widgetsBundle: WidgetsBundle): void;
    private openWidgetsBundleDetails;
    exportWidgetsBundle($event: Event, widgetsBundle: WidgetsBundle): void;
    onWidgetsBundleAction(action: EntityAction<WidgetsBundle>, config: EntityTableConfig<WidgetsBundle>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetsBundlesTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WidgetsBundlesTableConfigResolver>;
}
