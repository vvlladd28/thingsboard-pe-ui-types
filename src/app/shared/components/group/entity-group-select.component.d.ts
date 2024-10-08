import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityService } from '@core/http/entity.service';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
import { EntityInfoData } from '@shared/models/entity.models';
import { EntityGroupService } from '@core/http/entity-group.service';
import * as i0 from "@angular/core";
export declare class EntityGroupSelectComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    private store;
    private entityService;
    private entityGroupService;
    translate: TranslateService;
    private fb;
    entityGroupSelectFormGroup: UntypedFormGroup;
    modelValue: string;
    allowedGroupTypes: Array<EntityType>;
    excludeGroupTypes: Array<EntityType>;
    defaultGroupType: EntityType;
    excludeGroupIds: Array<string>;
    excludeGroupAll: boolean;
    placeholderText: string;
    notFoundText: string;
    requiredText: string;
    ownerId: EntityId;
    originator: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    currentGroupType: EventEmitter<EntityType>;
    currentGroupInfo: EventEmitter<EntityGroupInfo>;
    displayGroupTypeSelect: boolean;
    entityGroupTypes: Array<EntityType>;
    private propagateChange;
    constructor(store: Store<AppState>, entityService: EntityService, entityGroupService: EntityGroupService, translate: TranslateService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: EntityId | null): void;
    entityGroupLoaded(entityGroup: EntityInfoData): void;
    getCurrentGroupType(): EntityType;
    updateView(groupId: string | null): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupSelectComponent, "tb-entity-group-select", never, { "allowedGroupTypes": { "alias": "allowedGroupTypes"; "required": false; }; "excludeGroupTypes": { "alias": "excludeGroupTypes"; "required": false; }; "defaultGroupType": { "alias": "defaultGroupType"; "required": false; }; "excludeGroupIds": { "alias": "excludeGroupIds"; "required": false; }; "excludeGroupAll": { "alias": "excludeGroupAll"; "required": false; }; "placeholderText": { "alias": "placeholderText"; "required": false; }; "notFoundText": { "alias": "notFoundText"; "required": false; }; "requiredText": { "alias": "requiredText"; "required": false; }; "ownerId": { "alias": "ownerId"; "required": false; }; "originator": { "alias": "originator"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "currentGroupType": "currentGroupType"; "currentGroupInfo": "currentGroupInfo"; }, never, never, false, never>;
}
