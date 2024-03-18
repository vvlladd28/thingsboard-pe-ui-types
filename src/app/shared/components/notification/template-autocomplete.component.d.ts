import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityService } from '@core/http/entity.service';
import { TruncatePipe } from '@shared/pipe/truncate.pipe';
import { NotificationTemplate, NotificationType } from '@shared/models/notification.models';
import { NotificationService } from '@core/http/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import * as i0 from "@angular/core";
export declare class TemplateAutocompleteComponent implements ControlValueAccessor, OnInit {
    private store;
    translate: TranslateService;
    truncate: TruncatePipe;
    private entityService;
    private notificationService;
    private fb;
    private dialog;
    notificationDeliveryMethodInfoMap: Map<import("@shared/models/notification.models").NotificationDeliveryMethod, import("@shared/models/notification.models").NotificationDeliveryMethodInfo>;
    selectTemplateFormGroup: FormGroup;
    required: boolean;
    allowCreate: boolean;
    allowEdit: boolean;
    disabled: boolean;
    private notificationTypeValue;
    get notificationTypes(): NotificationType;
    set notificationTypes(type: NotificationType);
    templateInput: ElementRef;
    filteredTemplate: Observable<Array<NotificationTemplate>>;
    searchText: string;
    private modelValue;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, truncate: TruncatePipe, entityService: EntityService, notificationService: NotificationService, fb: FormBuilder, dialog: MatDialog);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    textIsNotEmpty(text: string): boolean;
    writeValue(value: EntityId | null): void;
    onFocus(): void;
    displayTemplateFn(template?: NotificationTemplate): string | undefined;
    clear(): void;
    editTemplate($event: Event): void;
    createTemplate($event: Event, button: MatButton): void;
    private openNotificationTemplateDialog;
    private updateView;
    private fetchTemplate;
    private reset;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TemplateAutocompleteComponent, "tb-template-autocomplete", never, { "required": "required"; "allowCreate": "allowCreate"; "allowEdit": "allowEdit"; "disabled": "disabled"; "notificationTypes": "notificationTypes"; }, {}, never, never, false, never>;
}
