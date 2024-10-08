import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { PageLink } from '@shared/models/page/page-link';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { EntityId } from '@shared/models/id/entity-id';
import { AttributeData, AttributeScope, LatestTelemetry, TelemetryType } from '@shared/models/telemetry/telemetry.models';
import { AttributeDatasource } from '@home/models/datasource/attribute-datasource';
import { AttributeService } from '@app/core/http/attribute.service';
import { Overlay } from '@angular/cdk/overlay';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { Widget } from '@shared/models/widget.models';
import { IAliasController } from '@core/api/widget-api.models';
import { UtilsService } from '@core/services/utils.service';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { WidgetService } from '@core/http/widget.service';
import { EntityService } from '@core/http/entity.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class AttributeTableComponent extends PageComponent implements AfterViewInit, OnInit, OnDestroy {
    protected store: Store<AppState>;
    private attributeService;
    private telemetryWsService;
    translate: TranslateService;
    dialog: MatDialog;
    private overlay;
    private viewContainerRef;
    private dialogService;
    private entityService;
    private utils;
    private dashboardUtils;
    private widgetService;
    private userPermissionsService;
    private zone;
    private cd;
    private elementRef;
    private fb;
    telemetryTypeTranslationsMap: Map<TelemetryType, string>;
    isClientSideTelemetryTypeMap: Map<TelemetryType, boolean>;
    latestTelemetryTypes: typeof LatestTelemetry;
    attributeScopeTypes: typeof AttributeScope;
    mode: 'default' | 'widget';
    attributeScopes: Array<string>;
    attributeScope: TelemetryType;
    toTelemetryTypeFunc: (val: string) => TelemetryType;
    displayedColumns: string[];
    pageLink: PageLink;
    textSearchMode: boolean;
    dataSource: AttributeDatasource;
    hidePageSize: boolean;
    activeValue: boolean;
    dirtyValue: boolean;
    entityIdValue: EntityId;
    attributeScopeSelectionReadonly: boolean;
    viewsInited: boolean;
    selectedWidgetsBundleAlias: string;
    widgetBundleSet: boolean;
    widgetsLoaded: boolean;
    widgetsCarouselIndex: number;
    widgetsList: Array<Array<Widget>>;
    widgetsListCache: Array<Array<Widget>>;
    aliasController: IAliasController;
    private widgetDatasource;
    private widgetResize$;
    private disableAttributeScopeSelectionValue;
    get disableAttributeScopeSelection(): boolean;
    set disableAttributeScopeSelection(value: boolean);
    defaultAttributeScope: TelemetryType;
    set active(active: boolean);
    set entityId(entityId: EntityId);
    entityName: string;
    private readonlyValue;
    get readonly(): boolean;
    set readonly(value: boolean);
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    textSearch: import("@angular/forms").FormControl<string>;
    private destroy$;
    constructor(store: Store<AppState>, attributeService: AttributeService, telemetryWsService: TelemetryWebsocketService, translate: TranslateService, dialog: MatDialog, overlay: Overlay, viewContainerRef: ViewContainerRef, dialogService: DialogService, entityService: EntityService, utils: UtilsService, dashboardUtils: DashboardUtilsService, widgetService: WidgetService, userPermissionsService: UserPermissionsService, zone: NgZone, cd: ChangeDetectorRef, elementRef: ElementRef, fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    attributeScopeChanged(attributeScope: TelemetryType): void;
    ngAfterViewInit(): void;
    updateData(reload?: boolean): void;
    enterFilterMode(): void;
    exitFilterMode(): void;
    resetSortAndFilter(update?: boolean): void;
    reloadAttributes(): void;
    addAttribute($event: Event): void;
    editAttribute($event: Event, attribute: AttributeData): void;
    deleteTimeseries($event: Event, telemetry?: AttributeData): void;
    deleteAttributes($event: Event): void;
    deleteTelemetry($event: Event): void;
    enterWidgetMode(): void;
    private configureWidgetMode;
    onWidgetsCarouselIndexChanged(): void;
    onWidgetsBundleChanged(widgetsBundle: WidgetsBundle): void;
    addWidgetToDashboard(): void;
    exitWidgetMode(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AttributeTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AttributeTableComponent, "tb-attribute-table", never, { "disableAttributeScopeSelection": { "alias": "disableAttributeScopeSelection"; "required": false; }; "defaultAttributeScope": { "alias": "defaultAttributeScope"; "required": false; }; "active": { "alias": "active"; "required": false; }; "entityId": { "alias": "entityId"; "required": false; }; "entityName": { "alias": "entityName"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, {}, never, never, false, never>;
}
