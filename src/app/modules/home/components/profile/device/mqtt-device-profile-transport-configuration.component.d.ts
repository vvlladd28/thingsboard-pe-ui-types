import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { MqttDeviceProfileTransportConfiguration, TransportPayloadType } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class MqttDeviceProfileTransportConfigurationComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private store;
    private fb;
    transportPayloadTypes: string[];
    transportPayloadTypeTranslations: Map<TransportPayloadType, string>;
    mqttDeviceProfileTransportConfigurationFormGroup: FormGroup;
    private destroy$;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    get protoPayloadType(): boolean;
    get compatibilityWithJsonPayloadFormatEnabled(): boolean;
    writeValue(value: MqttDeviceProfileTransportConfiguration | null): void;
    private updateModel;
    private updateTransportPayloadBasedControls;
    private validationMQTTTopic;
    private uniqueDeviceTopicValidator;
    static ɵfac: i0.ɵɵFactoryDeclaration<MqttDeviceProfileTransportConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MqttDeviceProfileTransportConfigurationComponent, "tb-mqtt-device-profile-transport-configuration", never, { "required": "required"; "disabled": "disabled"; }, {}, never, never>;
}
