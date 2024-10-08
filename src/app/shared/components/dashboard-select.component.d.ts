import { ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { DashboardInfo } from '@app/shared/models/dashboard.models';
import { DashboardService } from '@core/http/dashboard.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TooltipPosition } from '@angular/material/tooltip';
import { CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Operation } from '@shared/models/security.models';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class DashboardSelectComponent implements ControlValueAccessor, OnInit {
    private store;
    private dashboardService;
    private utils;
    private overlay;
    private breakpointObserver;
    private viewContainerRef;
    private nativeElement;
    private document;
    private window;
    groupId: string;
    customerId: string;
    operation: Operation;
    tooltipPosition: TooltipPosition;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    dashboards$: Observable<Array<DashboardInfo>>;
    dashboardId: string | null;
    dashboardSelectPanelOrigin: CdkOverlayOrigin;
    private propagateChange;
    constructor(store: Store<AppState>, dashboardService: DashboardService, utils: UtilsService, overlay: Overlay, breakpointObserver: BreakpointObserver, viewContainerRef: ViewContainerRef, nativeElement: ElementRef, document: Document, window: Window);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | null): void;
    dashboardIdChanged(): void;
    openDashboardSelectPanel(): void;
    getDashboardTitle(title: string): string;
    private updateView;
    private getDashboards;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardSelectComponent, "tb-dashboard-select", never, { "groupId": { "alias": "groupId"; "required": false; }; "customerId": { "alias": "customerId"; "required": false; }; "operation": { "alias": "operation"; "required": false; }; "tooltipPosition": { "alias": "tooltipPosition"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
