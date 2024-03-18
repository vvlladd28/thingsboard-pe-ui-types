import { FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { DeliveryMethodsTemplates, NotificationDeliveryMethod, NotificationTemplate, NotificationType } from '@shared/models/notification.models';
import { Subject } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare abstract class TemplateConfiguration<T, R = any> extends DialogComponent<T, R> implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<T, R>;
    protected fb: FormBuilder;
    templateNotificationForm: FormGroup;
    notificationTemplateConfigurationForm: FormGroup;
    notificationDeliveryMethods: NotificationDeliveryMethod[];
    notificationDeliveryMethodInfoMap: Map<NotificationDeliveryMethod, import("@shared/models/notification.models").NotificationDeliveryMethodInfo>;
    notificationTemplateTypeTranslateMap: Map<NotificationType, import("@shared/models/notification.models").NotificationTemplateTypeTranslate>;
    deliveryConfiguration: Partial<DeliveryMethodsTemplates>;
    protected readonly destroy$: Subject<void>;
    protected deliveryMethodFormsMap: Map<NotificationDeliveryMethod, FormGroup>;
    protected constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<T, R>, fb: FormBuilder);
    ngOnDestroy(): void;
    atLeastOne(): (group: FormGroup) => ValidationErrors | null;
    protected getNotificationTemplateValue(): NotificationTemplate;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateConfiguration<any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TemplateConfiguration<any, any>, never, never, {}, {}, never, never, false, never>;
}
