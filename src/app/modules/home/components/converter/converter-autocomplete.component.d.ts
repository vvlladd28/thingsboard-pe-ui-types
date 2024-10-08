import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { Converter, ConverterType } from '@shared/models/converter.models';
import { ConverterService } from '@core/http/converter.service';
import { ConverterId } from '@shared/models/id/converter-id';
import { TruncatePipe } from '@shared/pipe/truncate.pipe';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { Operation, Resource } from '@shared/models/security.models';
import * as i0 from "@angular/core";
export declare class ConverterAutocompleteComponent implements ControlValueAccessor, OnInit {
    private store;
    translate: TranslateService;
    truncate: TruncatePipe;
    private converterService;
    dialog: MatDialog;
    private fb;
    selectConverterFormGroup: UntypedFormGroup;
    private modelValue;
    private converterTypeValue;
    useFullEntityId: boolean;
    isEdgeTemplate: boolean;
    addNewConverter: boolean;
    set converterType(converterType: ConverterType);
    excludeEntityIds: Array<string>;
    labelText: string;
    requiredText: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    showDetailsPageLink: boolean;
    converterInput: ElementRef<HTMLElement>;
    converterAutocomplete: MatAutocompleteTrigger;
    entityText: string;
    entityRequiredText: string;
    filteredEntities: Observable<Array<Converter>>;
    searchText: string;
    converterURL: string;
    resource: typeof Resource;
    operation: typeof Operation;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, truncate: TruncatePipe, converterService: ConverterService, dialog: MatDialog, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    private load;
    private getCurrentEntity;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | ConverterId | null): void;
    onFocus(): void;
    private reset;
    private updateView;
    displayEntityFn(converter?: Converter): string | undefined;
    private fetchEntities;
    clear(): void;
    textIsNotEmpty(text: string): boolean;
    createConverter($event: Event, converterName: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConverterAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConverterAutocompleteComponent, "tb-converter-autocomplete", never, { "useFullEntityId": { "alias": "useFullEntityId"; "required": false; }; "isEdgeTemplate": { "alias": "isEdgeTemplate"; "required": false; }; "addNewConverter": { "alias": "addNewConverter"; "required": false; }; "converterType": { "alias": "converterType"; "required": false; }; "excludeEntityIds": { "alias": "excludeEntityIds"; "required": false; }; "labelText": { "alias": "labelText"; "required": false; }; "requiredText": { "alias": "requiredText"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "showDetailsPageLink": { "alias": "showDetailsPageLink"; "required": false; }; }, {}, never, never, false, never>;
}
