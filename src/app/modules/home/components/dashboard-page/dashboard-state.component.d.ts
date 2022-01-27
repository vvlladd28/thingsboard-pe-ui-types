import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Dashboard } from '@shared/models/dashboard.models';
import { IAliasController } from '@core/api/widget-api.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { IDashboardComponent } from '@home/models/dashboard-component.models';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class DashboardStateComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private cd;
    ctx: WidgetContext;
    stateId: string;
    syncParentStateParams: boolean;
    defaultAutofillLayout: boolean;
    defaultMargin: any;
    defaultBackgroundColor: any;
    entityParamName: string;
    entityId: EntityId;
    currentState: string;
    dashboard: Dashboard;
    parentDashboard: IDashboardComponent;
    parentAliasController: IAliasController;
    stateExists: boolean;
    private stateSubscription;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private updateCurrentState;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardStateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardStateComponent, "tb-dashboard-state", never, { "ctx": "ctx"; "stateId": "stateId"; "syncParentStateParams": "syncParentStateParams"; "defaultAutofillLayout": "defaultAutofillLayout"; "defaultMargin": "defaultMargin"; "defaultBackgroundColor": "defaultBackgroundColor"; "entityParamName": "entityParamName"; "entityId": "entityId"; }, {}, never, never>;
}
