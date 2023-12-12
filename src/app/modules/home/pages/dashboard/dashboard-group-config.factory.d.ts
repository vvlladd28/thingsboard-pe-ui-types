import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '@core/services/utils.service';
import { EntityGroupStateConfigFactory, EntityGroupStateInfo, GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { MatDialog } from '@angular/material/dialog';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EntityGroupParams, ShortEntityView } from '@shared/models/entity-group.models';
import { HomeDialogsService } from '@home/dialogs/home-dialogs.service';
import { GroupConfigTableConfigService } from '@home/components/group/group-config-table-config.service';
import { DashboardInfo } from '@shared/models/dashboard.models';
import { DashboardService } from '@core/http/dashboard.service';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class DashboardGroupConfigFactory implements EntityGroupStateConfigFactory<DashboardInfo> {
    private groupConfigTableConfigService;
    private userPermissionsService;
    private translate;
    private utils;
    private route;
    private router;
    private dialog;
    private importExport;
    private homeDialogs;
    private dashboardService;
    private window;
    constructor(groupConfigTableConfigService: GroupConfigTableConfigService<DashboardInfo>, userPermissionsService: UserPermissionsService, translate: TranslateService, utils: UtilsService, route: ActivatedRoute, router: Router, dialog: MatDialog, importExport: ImportExportService, homeDialogs: HomeDialogsService, dashboardService: DashboardService, window: Window);
    createConfig(params: EntityGroupParams, entityGroup: EntityGroupStateInfo<DashboardInfo>): Observable<GroupEntityTableConfig<DashboardInfo>>;
    openDashboard($event: Event, dashboard: ShortEntityView | DashboardInfo, config: GroupEntityTableConfig<DashboardInfo>, params: EntityGroupParams): void;
    exportDashboard($event: Event, dashboard: ShortEntityView | DashboardInfo): void;
    importDashboard($event: Event, config: GroupEntityTableConfig<DashboardInfo>): void;
    private editMissingAliases;
    openPublicDashboardLinkDialog($event: Event, dashboard: ShortEntityView | DashboardInfo, config: GroupEntityTableConfig<DashboardInfo>): void;
    manageOwnerAndGroups($event: Event, dashboard: DashboardInfo, config: GroupEntityTableConfig<DashboardInfo>): void;
    onDashboardAction(action: EntityAction<DashboardInfo>, config: GroupEntityTableConfig<DashboardInfo>, params: EntityGroupParams): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardGroupConfigFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DashboardGroupConfigFactory>;
}
