import { AfterViewInit, ChangeDetectorRef, DoCheck, IterableDiffers, KeyValueDiffers, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { AuthUser } from '@shared/models/user.model';
import { Timewindow } from '@shared/models/time/time.models';
import { TimeService } from '@core/services/time.service';
import { GridsterComponent, GridsterConfig } from 'angular-gridster2';
import { DashboardCallbacks, DashboardWidget, IDashboardComponent } from '../../models/dashboard-component.models';
import { Subject, Subscription } from 'rxjs';
import { WidgetLayouts } from '@shared/models/dashboard.models';
import { DialogService } from '@core/services/dialog.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { IAliasController, IStateController } from '@app/core/api/widget-api.models';
import { Widget, WidgetPosition } from '@app/shared/models/widget.models';
import { MatMenuTrigger } from '@angular/material/menu';
import { SafeStyle } from '@angular/platform-browser';
import { UtilsService } from '@core/services/utils.service';
import { WidgetComponentAction } from '@home/components/widget/widget-container.component';
import * as i0 from "@angular/core";
export declare class DashboardComponent extends PageComponent implements IDashboardComponent, DoCheck, OnInit, OnDestroy, AfterViewInit, OnChanges {
    protected store: Store<AppState>;
    utils: UtilsService;
    private timeService;
    private dialogService;
    private breakpointObserver;
    private differs;
    private kvDiffers;
    private cd;
    private ngZone;
    authUser: AuthUser;
    widgets: Iterable<Widget>;
    widgetLayouts: WidgetLayouts;
    callbacks: DashboardCallbacks;
    aliasController: IAliasController;
    stateController: IStateController;
    columns: number;
    margin: number;
    isEdit: boolean;
    autofillHeight: boolean;
    mobileAutofillHeight: boolean;
    mobileRowHeight: number;
    isMobile: boolean;
    isMobileDisabled: boolean;
    isEditActionEnabled: boolean;
    isExportActionEnabled: boolean;
    isRemoveActionEnabled: boolean;
    disableWidgetInteraction: boolean;
    dashboardStyle: {
        [klass: string]: any;
    };
    backgroundImage: SafeStyle | string;
    dashboardClass: string;
    ignoreLoading: boolean;
    dashboardTimewindow: Timewindow;
    parentDashboard?: IDashboardComponent;
    dashboardTimewindowChangedSubject: Subject<Timewindow>;
    dashboardTimewindowChanged: import("rxjs").Observable<Timewindow>;
    originalDashboardTimewindow: Timewindow;
    gridsterOpts: GridsterConfig;
    isWidgetExpanded: boolean;
    isMobileSize: boolean;
    gridster: GridsterComponent;
    dashboardMenuTrigger: MatMenuTrigger;
    dashboardMenuPosition: {
        x: string;
        y: string;
    };
    dashboardContextMenuEvent: MouseEvent;
    widgetMenuTrigger: MatMenuTrigger;
    widgetMenuPosition: {
        x: string;
        y: string;
    };
    widgetContextMenuEvent: MouseEvent;
    dashboardWidgets: any;
    breakpointObserverSubscription: Subscription;
    private optionsChangeNotificationsPaused;
    private gridsterResize$;
    constructor(store: Store<AppState>, utils: UtilsService, timeService: TimeService, dialogService: DialogService, breakpointObserver: BreakpointObserver, differs: IterableDiffers, kvDiffers: KeyValueDiffers, cd: ChangeDetectorRef, ngZone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private updateWidgets;
    private updateWidgetLayouts;
    ngAfterViewInit(): void;
    onUpdateTimewindow(startTimeMs: number, endTimeMs: number, interval?: number, persist?: boolean): void;
    onResetTimewindow(): void;
    isAutofillHeight(): boolean;
    openDashboardContextMenu($event: MouseEvent): void;
    private openWidgetContextMenu;
    onWidgetFullscreenChanged(expanded: boolean): void;
    onWidgetComponentAction(action: WidgetComponentAction, widget: DashboardWidget): void;
    private widgetMouseDown;
    private widgetClicked;
    private editWidget;
    private exportWidget;
    private removeWidget;
    highlightWidget(widgetId: string, delay?: number): void;
    selectWidget(widgetId: string, delay?: number): void;
    getSelectedWidget(): Widget;
    getEventGridPosition(event: Event): WidgetPosition;
    resetHighlight(): void;
    private scrollToWidget;
    private updateMobileOpts;
    private onGridsterParentResize;
    private updateLayoutOpts;
    private updateEditingOpts;
    notifyGridsterOptionsChanged(): void;
    pauseChangeNotifications(): void;
    resumeChangeNotifications(): void;
    notifyLayoutUpdated(): void;
    private detectRowSize;
    private checkIsMobileSize;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardComponent, "tb-dashboard", never, { "widgets": "widgets"; "widgetLayouts": "widgetLayouts"; "callbacks": "callbacks"; "aliasController": "aliasController"; "stateController": "stateController"; "columns": "columns"; "margin": "margin"; "isEdit": "isEdit"; "autofillHeight": "autofillHeight"; "mobileAutofillHeight": "mobileAutofillHeight"; "mobileRowHeight": "mobileRowHeight"; "isMobile": "isMobile"; "isMobileDisabled": "isMobileDisabled"; "isEditActionEnabled": "isEditActionEnabled"; "isExportActionEnabled": "isExportActionEnabled"; "isRemoveActionEnabled": "isRemoveActionEnabled"; "disableWidgetInteraction": "disableWidgetInteraction"; "dashboardStyle": "dashboardStyle"; "backgroundImage": "backgroundImage"; "dashboardClass": "dashboardClass"; "ignoreLoading": "ignoreLoading"; "dashboardTimewindow": "dashboardTimewindow"; "parentDashboard": "parentDashboard"; }, {}, never, never>;
}
