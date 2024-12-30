import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityGroupService } from '@core/http/entity-group.service';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { EntityInfoData } from '@shared/models/entity.models';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import * as i0 from "@angular/core";
export declare class EntityGroupAutocompleteComponent implements ControlValueAccessor, OnInit, OnDestroy {
    translate: TranslateService;
    private entityGroupService;
    private fb;
    selectEntityGroupFormGroup: FormGroup;
    modelValue: EntityId | string | null;
    private groupTypeValue;
    get groupType(): EntityType;
    set groupType(value: EntityType);
    private ownerIdValue;
    get ownerId(): EntityId;
    set ownerId(value: EntityId | null);
    excludeGroupIds: Array<string>;
    excludeGroupAll: boolean;
    placeholderText: string;
    notFoundText: string;
    requiredText: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    appearance: MatFormFieldAppearance;
    useFullEntityId: boolean;
    entityGroupLoaded: EventEmitter<EntityInfoData>;
    entityGroupInput: ElementRef<HTMLInputElement>;
    filteredEntityGroups: Observable<Array<EntityInfoData>>;
    allEntityGroups: Observable<Array<EntityInfoData>>;
    searchText: string;
    private pristine;
    private cleanFilteredEntityGroups;
    private propagateChange;
    constructor(translate: TranslateService, entityGroupService: EntityGroupService, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    getCurrentEntityGroup(): EntityInfoData | null;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | EntityInfoData | EntityId | null): void;
    onFocus(): void;
    reset(keepEntityGroup?: boolean): void;
    updateView(value: EntityId | string | null, entityGroup: EntityInfoData | string | null): void;
    displayEntityGroupFn(entityGroup?: EntityInfoData): string | undefined;
    fetchEntityGroups(searchText?: string): Observable<Array<EntityInfoData>>;
    getEntityGroups(pageLink: PageLink): Observable<PageData<EntityInfoData>>;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupAutocompleteComponent, "tb-entity-group-autocomplete", never, { "groupType": { "alias": "groupType"; "required": true; }; "ownerId": { "alias": "ownerId"; "required": false; }; "excludeGroupIds": { "alias": "excludeGroupIds"; "required": false; }; "excludeGroupAll": { "alias": "excludeGroupAll"; "required": false; }; "placeholderText": { "alias": "placeholderText"; "required": false; }; "notFoundText": { "alias": "notFoundText"; "required": true; }; "requiredText": { "alias": "requiredText"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "useFullEntityId": { "alias": "useFullEntityId"; "required": false; }; }, { "entityGroupLoaded": "entityGroupLoaded"; }, never, never, false, never>;
}
