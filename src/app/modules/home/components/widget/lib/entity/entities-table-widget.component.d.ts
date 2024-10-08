import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetContext } from '@home/models/widget-component.models';
import { DataKey, WidgetActionDescriptor } from '@shared/models/widget.models';
import { IWidgetSubscription } from '@core/api/widget-api.models';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EntityColumn, EntityData } from '@home/components/widget/lib/table-widget.models';
import { Overlay } from '@angular/cdk/overlay';
import { EntityDataPageLink, KeyFilter } from '@shared/models/query/query.models';
import { DatePipe } from '@angular/common';
import { EntityService } from '@core/http/entity.service';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class EntitiesTableWidgetComponent extends PageComponent implements OnInit, AfterViewInit, OnDestroy {
    protected store: Store<AppState>;
    private elementRef;
    private ngZone;
    private overlay;
    private viewContainerRef;
    private entityService;
    private utils;
    private datePipe;
    private translate;
    private domSanitizer;
    private cd;
    private fb;
    ctx: WidgetContext;
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    textSearch: import("@angular/forms").FormControl<string>;
    displayPagination: boolean;
    enableStickyHeader: boolean;
    enableStickyAction: boolean;
    showCellActionsMenu: boolean;
    pageSizeOptions: any;
    pageLink: EntityDataPageLink;
    sortOrderProperty: string;
    textSearchMode: boolean;
    hidePageSize: boolean;
    columns: Array<EntityColumn>;
    displayedColumns: string[];
    entityDatasource: EntityDatasource;
    noDataDisplayMessageText: string;
    hasRowAction: boolean;
    private setCellButtonAction;
    private cellContentCache;
    private cellStyleCache;
    private rowStyleCache;
    private settings;
    private widgetConfig;
    private subscription;
    private widgetResize$;
    private destroy$;
    private defaultPageSize;
    private defaultSortOrder;
    private contentsInfo;
    private stylesInfo;
    private columnWidth;
    private columnDefaultVisibility;
    private columnSelectionAvailability;
    private columnExportParameters;
    private columnsWithCellClick;
    private rowStylesInfo;
    private searchAction;
    private columnDisplayAction;
    private postProcessingFunctionMap;
    constructor(store: Store<AppState>, elementRef: ElementRef, ngZone: NgZone, overlay: Overlay, viewContainerRef: ViewContainerRef, entityService: EntityService, utils: UtilsService, datePipe: DatePipe, translate: TranslateService, domSanitizer: DomSanitizer, cd: ChangeDetectorRef, fb: FormBuilder);
    ngOnInit(): void;
    private isActionsConfigured;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    onDataUpdated(): void;
    onEditModeChanged(): void;
    pageLinkSortDirection(): SortDirection;
    private initializeConfig;
    private updateDatasources;
    private editColumnsToDisplay;
    private enterFilterMode;
    exitFilterMode(): void;
    private updateData;
    trackByColumnDef(index: any, column: EntityColumn): string;
    trackByEntityId(index: number, entity: EntityData): string;
    trackByActionCellDescriptionId(index: number, action: WidgetActionDescriptor): string;
    headerStyle(key: EntityColumn): any;
    rowStyle(entity: EntityData, row: number): any;
    cellStyle(entity: EntityData, key: EntityColumn, row: number): any;
    cellContent(entity: EntityData, key: EntityColumn, row: number, useSafeHtml?: boolean, isExport?: boolean): SafeHtml;
    private applyCellContentFunction;
    private defaultContent;
    onCellClick($event: Event, entity: EntityData, key: EntityColumn, columnIndex: number): void;
    columnHasCellClick(index: number): boolean;
    onRowClick($event: Event, entity: EntityData, isDouble?: boolean): void;
    onActionButtonClick($event: Event, entity: EntityData, actionDescriptor: WidgetActionDescriptor): void;
    customDataExport(): {
        [key: string]: any;
    }[] | Observable<{
        [key: string]: any;
    }[]>;
    private includeColumnInExport;
    private queryEntityDataToExportedData;
    private clearCache;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntitiesTableWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntitiesTableWidgetComponent, "tb-entities-table-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
declare class EntityDatasource implements DataSource<EntityData> {
    private translate;
    private dataKeys;
    private subscription;
    private ngZone;
    private widgetContext;
    private entitiesSubject;
    private pageDataSubject;
    private currentEntity;
    entities: EntityData[];
    dataLoading: boolean;
    countCellButtonAction: number;
    private appliedPageLink;
    private appliedSortOrderLabel;
    private reserveSpaceForHiddenAction;
    private cellButtonActions;
    private readonly usedShowCellActionFunction;
    constructor(translate: TranslateService, dataKeys: Array<DataKey>, subscription: IWidgetSubscription, ngZone: NgZone, widgetContext: WidgetContext);
    connect(collectionViewer: CollectionViewer): Observable<EntityData[] | ReadonlyArray<EntityData>>;
    disconnect(collectionViewer: CollectionViewer): void;
    loadEntities(pageLink: EntityDataPageLink, sortOrderLabel: string, keyFilters: KeyFilter[]): void;
    private clear;
    dataUpdated(): void;
    private datasourceToEntityData;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
    toggleCurrentEntity(entity: EntityData): boolean;
    isCurrentEntity(entity: EntityData): boolean;
}
export {};
