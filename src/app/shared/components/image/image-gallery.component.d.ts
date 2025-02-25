import { ImageResourceInfo, ResourceSubType } from '@shared/models/resource.models';
import { ImageService } from '@core/http/image.service';
import { TranslateService } from '@ngx-translate/core';
import { PageLink } from '@shared/models/page/page-link';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogService } from '@core/services/dialog.service';
import { FormBuilder } from '@angular/forms';
import { SortOrder } from '@shared/models/page/sort-order';
import { ActivatedRoute, QueryParamsHandling, Router } from '@angular/router';
import { BaseData, HasId } from '@shared/models/base-data';
import { GridEntitiesFetchFunction, ScrollGridColumns } from '@shared/components/grid/scroll-grid-datasource';
import { ItemSizeStrategy, ScrollGridComponent } from '@shared/components/grid/scroll-grid.component';
import { MatDialog } from '@angular/material/dialog';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { ImagesDatasource } from '@shared/components/image/images-datasource';
import * as i0 from "@angular/core";
interface GridImagesFilter {
    search: string;
    includeSystemImages: boolean;
}
export declare class ImageGalleryComponent extends PageComponent implements OnInit, OnDestroy, AfterViewInit {
    protected store: Store<AppState>;
    private route;
    private router;
    private dialog;
    translate: TranslateService;
    private imageService;
    private dialogService;
    private importExportService;
    private elementRef;
    private cd;
    private fb;
    private zone;
    private display;
    private width;
    private height;
    pageMode: boolean;
    dialogMode: boolean;
    imageSubType: ResourceSubType;
    mode: 'list' | 'grid';
    selectionMode: boolean;
    imageSelected: EventEmitter<ImageResourceInfo>;
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    gridComponent: ScrollGridComponent<ImageResourceInfo, string>;
    defaultPageSize: number;
    defaultSortOrder: SortOrder;
    hidePageSize: boolean;
    displayedColumns: string[];
    pageSizeOptions: number[];
    pageLink: PageLink;
    textSearchMode: boolean;
    dataSource: ImagesDatasource;
    textSearch: import("@angular/forms").FormControl<string>;
    includeSystemImages: boolean;
    gridColumns: ScrollGridColumns;
    gridImagesFetchFunction: GridEntitiesFetchFunction<ImageResourceInfo, GridImagesFilter>;
    gridImagesFilter: GridImagesFilter;
    gridImagesItemSizeStrategy: ItemSizeStrategy;
    authUser: import("../../public-api").AuthUser;
    get isScada(): boolean;
    private updateDataSubscription;
    private widgetResize$;
    private destroy$;
    private destroyListMode$;
    constructor(store: Store<AppState>, route: ActivatedRoute, router: Router, dialog: MatDialog, translate: TranslateService, imageService: ImageService, dialogService: DialogService, importExportService: ImportExportService, elementRef: ElementRef, cd: ChangeDetectorRef, fb: FormBuilder, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    includeSystemImagesChanged(value: boolean): void;
    setMode(targetMode: 'list' | 'grid'): void;
    get isSysAdmin(): boolean;
    get isTenantAdmin(): boolean;
    private computeDisplayedColumns;
    private updateMode;
    private initListMode;
    private initGridMode;
    private updatePaginationSubscriptions;
    clearSelection(): void;
    updateData(): void;
    private imageUpdated;
    private imageDeleted;
    enterFilterMode(): void;
    exitFilterMode(): void;
    trackByEntity(index: number, entity: BaseData<HasId>): BaseData<HasId>;
    isSystem(image?: ImageResourceInfo): boolean;
    readonly(image?: ImageResourceInfo): boolean;
    deleteEnabled(image?: ImageResourceInfo): boolean;
    deleteImage($event: Event, image: ImageResourceInfo, itemIndex?: number): void;
    deleteImages($event: Event): void;
    downloadImage($event: any, image: ImageResourceInfo): void;
    exportImage($event: any, image: ImageResourceInfo): void;
    importImage(): void;
    selectImage($event: any, image: ImageResourceInfo): void;
    rowClick($event: any, image: ImageResourceInfo): void;
    uploadImage(): void;
    editImage($event: Event, image: ImageResourceInfo, itemIndex?: number): void;
    embedImage($event: Event, image: ImageResourceInfo, itemIndex?: number): void;
    protected updatedRouterParamsAndData(queryParams: object, queryParamsHandling?: QueryParamsHandling): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageGalleryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageGalleryComponent, "tb-image-gallery", never, { "pageMode": { "alias": "pageMode"; "required": false; }; "dialogMode": { "alias": "dialogMode"; "required": false; }; "imageSubType": { "alias": "imageSubType"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "selectionMode": { "alias": "selectionMode"; "required": false; }; }, { "imageSelected": "imageSelected"; }, never, never, false, never>;
}
export {};
