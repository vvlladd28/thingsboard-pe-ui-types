import { ChangeDetectorRef, ComponentFactoryResolver, Injector, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { BaseData, HasId } from '@shared/models/base-data';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BroadcastService } from '@core/services/broadcast.service';
import { EntityDetailsPanelComponent } from '@home/components/entity/entity-details-panel.component';
import { DialogService } from '@core/services/dialog.service';
import { EntityGroupStateInfo } from '@home/models/group/group-entities-table-config.models';
import { IEntityDetailsPageComponent } from '@home/models/entity/entity-details-page-component.models';
import * as i0 from "@angular/core";
export declare class EntityDetailsPageComponent extends EntityDetailsPanelComponent implements IEntityDetailsPageComponent, OnInit, OnDestroy {
    private route;
    private router;
    protected injector: Injector;
    protected cd: ChangeDetectorRef;
    protected componentFactoryResolver: ComponentFactoryResolver;
    private broadcast;
    private translate;
    private dialogService;
    protected store: Store<AppState>;
    headerTitle: string;
    headerSubtitle: string;
    isReadOnly: boolean;
    entityGroup: EntityGroupStateInfo<BaseData<HasId>>;
    backNavigationCommands?: any[];
    set entitiesTableConfig(entitiesTableConfig: EntityTableConfig<BaseData<HasId>>);
    get entitiesTableConfig(): EntityTableConfig<BaseData<HasId>>;
    'tb-absolute-fill': any;
    constructor(route: ActivatedRoute, router: Router, injector: Injector, cd: ChangeDetectorRef, componentFactoryResolver: ComponentFactoryResolver, broadcast: BroadcastService, translate: TranslateService, dialogService: DialogService, store: Store<AppState>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    reload(): void;
    onToggleDetailsEditMode(): void;
    onApplyDetails(): void;
    confirmForm(): UntypedFormGroup;
    goBack(): void;
    private onUpdateEntity;
    private deleteEntity;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityDetailsPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityDetailsPageComponent, "tb-entity-details-page", never, {}, {}, never, never, false, never>;
}
