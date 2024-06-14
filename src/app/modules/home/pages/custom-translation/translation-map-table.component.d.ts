import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { MatSort } from '@angular/material/sort';
import { PageLink } from '@shared/models/page/page-link';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomTranslationService } from '@core/http/custom-translation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { CustomTranslationEditInfo, CustomTranslationState } from '@shared/models/custom-translation.model';
import { MatPaginator } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
interface CustomTranslationMap {
    key: string;
    original: string;
    translate: string;
    edit?: boolean;
    new?: boolean;
    untranslated?: boolean;
}
export declare class TranslationMapTableComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private fb;
    private customTranslationService;
    private cd;
    private elementRef;
    private router;
    private route;
    private translate;
    searchInputField: ElementRef;
    sort: MatSort;
    paginator: MatPaginator;
    table: ElementRef;
    localeCode: string;
    localeName: string;
    readonly: boolean;
    changeFullscreen: EventEmitter<boolean>;
    textSearch: import("@angular/forms").FormControl<string>;
    textSearchMode: boolean;
    readonly defaultLang: string;
    private defaultPageSize;
    pageSizeOptions: number[];
    dataSource: CustomTranslationMapDatasource;
    pageLink: PageLink;
    displayedColumns: string[];
    fullscreen: boolean;
    hidePageSize: boolean;
    CustomTranslationState: typeof CustomTranslationState;
    newTranslated: boolean;
    newKey: FormGroup;
    filterParams: import("@angular/forms").FormControl<CustomTranslationState[]>;
    private tableResize$;
    private destroy$;
    private defaultSortOrder;
    constructor(store: Store<AppState>, fb: FormBuilder, customTranslationService: CustomTranslationService, cd: ChangeDetectorRef, elementRef: ElementRef, router: Router, route: ActivatedRoute, translate: TranslateService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    trackByLocale(index: number, translate: CustomTranslationMap): string;
    private initSubscriptions;
    private updatedRouterParams;
    private updateData;
    enterSearchMode(): void;
    exitSearchMode(): void;
    toggleFullscreen(): void;
    toggleEditMode($event: Event, translation: CustomTranslationEditInfo): void;
    nextRowTab($event: Event, translate: CustomTranslationEditInfo): void;
    private toggleEditModeInElement;
    toggleAddNewTranslated($event: Event): void;
    deleteNewTranslated($event: Event, translate?: CustomTranslationEditInfo): void;
    private resetNewKeyForm;
    addNewTranslated(): void;
    updatedTranslated(translate: CustomTranslationEditInfo): void;
    private resetTranslationEdit;
    returnDefaultTranslation($event: Event, translation: CustomTranslationEditInfo): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslationMapTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TranslationMapTableComponent, "tb-translation-map-table", never, { "localeCode": "localeCode"; "localeName": "localeName"; "readonly": "readonly"; }, { "changeFullscreen": "changeFullscreen"; }, never, never, false, never>;
}
export declare class CustomTranslationMapDatasource implements DataSource<CustomTranslationEditInfo> {
    private customTranslationService;
    private localeCode;
    private cd;
    private translate;
    private translationInfo;
    private totalPageDataSubject;
    dataLoading: boolean;
    private allTranslation;
    private defaultLang;
    constructor(customTranslationService: CustomTranslationService, localeCode: string, cd: ChangeDetectorRef, translate: TranslateService);
    connect(): Observable<CustomTranslationEditInfo[] | ReadonlyArray<CustomTranslationEditInfo>>;
    disconnect(): void;
    currentTranslations(): Array<CustomTranslationEditInfo>;
    loadTranslateInfo(pageLink: PageLink, filterParams: Array<CustomTranslationState>, reload?: boolean): void;
    updateTranslation(key: string, translate: string, state: CustomTranslationState, saveOrigin?: boolean): void;
    addedTranslation(key: string, translate: string, original: string): void;
    deleteTranslation(key: string): void;
    private fetchTranslation;
    private getAllTranslations;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
    private flattenKeys;
    private updateKeyInTranslationService;
}
export {};