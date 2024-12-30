import { AfterViewInit, DestroyRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { EntityType } from '@shared/models/entity-type.models';
import { PageComponent } from '@shared/components/page.component';
import { EntityGroupColumn, EntityGroupColumnType, EntityGroupEntityField, EntityGroupSortOrder } from '@shared/models/entity-group.models';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class EntityGroupColumnComponent extends PageComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    protected store: Store<AppState>;
    private dialog;
    private fb;
    private destroyRef;
    modelValue: EntityGroupColumn | null;
    columnFormGroup: UntypedFormGroup;
    entityType: EntityType;
    disabled: boolean;
    defaultSortOrderChanged: EventEmitter<EntityGroupSortOrder>;
    removeColumn: EventEmitter<any>;
    updateColumn: EventEmitter<EntityGroupColumn>;
    columnType: typeof EntityGroupColumnType;
    columnTypes: EntityGroupColumnType[];
    entityFields: {
        [fieldName: string]: EntityGroupEntityField;
    };
    entityFieldKeys: string[];
    sortOrders: string[];
    entityGroupColumnTypeTranslations: Map<EntityGroupColumnType, string>;
    entityGroupSortOrderTranslations: Map<EntityGroupSortOrder, string>;
    constructor(store: Store<AppState>, dialog: MatDialog, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: EntityGroupColumn | null): void;
    private propagateChange;
    private updateModel;
    openColumn($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupColumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupColumnComponent, "tb-entity-group-column", never, { "entityType": { "alias": "entityType"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "defaultSortOrderChanged": "defaultSortOrderChanged"; "removeColumn": "removeColumn"; "updateColumn": "updateColumn"; }, never, never, false, never>;
}
