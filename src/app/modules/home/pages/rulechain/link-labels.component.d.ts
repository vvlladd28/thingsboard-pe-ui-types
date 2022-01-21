import { ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { LinkLabel } from '@shared/models/rule-node.models';
import { Observable } from 'rxjs';
import { TruncatePipe } from '@shared/pipe/truncate.pipe';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { TranslateService } from '@ngx-translate/core';
import { RuleChainService } from '@core/http/rule-chain.service';
import * as i0 from "@angular/core";
export declare class LinkLabelsComponent implements ControlValueAccessor, OnInit, OnChanges {
    private fb;
    truncate: TruncatePipe;
    translate: TranslateService;
    private ruleChainService;
    chipList: MatChipList;
    matAutocomplete: MatAutocomplete;
    labelInput: ElementRef<HTMLInputElement>;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private allowCustomValue;
    get allowCustom(): boolean;
    set allowCustom(value: boolean);
    allowedLabels: {
        [label: string]: LinkLabel;
    };
    sourceRuleChainId: string;
    linksFormGroup: FormGroup;
    modelValue: Array<string>;
    private labelsList;
    separatorKeysCodes: number[];
    filteredLabels: Observable<Array<LinkLabel>>;
    labels: Array<LinkLabel>;
    searchText: string;
    private propagateChange;
    constructor(fb: FormBuilder, truncate: TruncatePipe, translate: TranslateService, ruleChainService: RuleChainService);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string[]): void;
    prepareLabelsList(): Observable<Array<LinkLabel>>;
    displayLabelFn(label?: LinkLabel): string | undefined;
    textIsNotEmpty(text: string): boolean;
    createLinkLabel($event: Event, value: string): void;
    add(event: MatChipInputEvent): void;
    private fetchLabels;
    private transformLinkLabel;
    remove(label: LinkLabel): void;
    selected(event: MatAutocompleteSelectedEvent): void;
    addLabel(label: LinkLabel): void;
    onFocus(): void;
    clear(value?: string): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkLabelsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LinkLabelsComponent, "tb-link-labels", never, { "required": "required"; "disabled": "disabled"; "allowCustom": "allowCustom"; "allowedLabels": "allowedLabels"; "sourceRuleChainId": "sourceRuleChainId"; }, {}, never, never>;
}
