import { Type } from '@angular/core';
import { DynamicComponentFactoryService } from '@core/services/dynamic-component-factory.service';
import { WidgetService } from '@core/http/widget.service';
import { Observable } from 'rxjs';
import { WidgetInfo } from '@home/models/widget-component.models';
import { UtilsService } from '@core/services/utils.service';
import { ResourcesService } from '@core/services/resources.service';
import { Widget } from '@shared/models/widget.models';
import { TranslateService } from '@ngx-translate/core';
import { IModulesMap } from '@modules/common/modules-map.models';
import { ReportService } from '@core/http/report.service';
import * as i0 from "@angular/core";
export declare class WidgetComponentService {
    private window;
    private modulesMap;
    private homeComponentsModule;
    private dynamicComponentFactoryService;
    private widgetService;
    private utils;
    private resources;
    private translate;
    private reportService;
    private cssParser;
    private widgetsInfoFetchQueue;
    private init$;
    private missingWidgetType;
    private errorWidgetType;
    private editingWidgetType;
    constructor(window: Window, modulesMap: IModulesMap, homeComponentsModule: Type<any>, dynamicComponentFactoryService: DynamicComponentFactoryService, widgetService: WidgetService, utils: UtilsService, resources: ResourcesService, translate: TranslateService, reportService: ReportService);
    private init;
    getInstantWidgetInfo(widget: Widget): WidgetInfo;
    getWidgetInfo(bundleAlias: string, widgetTypeAlias: string, isSystem: boolean): Observable<WidgetInfo>;
    private getWidgetInfoInternal;
    private loadWidget;
    private loadWidgetResources;
    private registerWidgetSettingsForms;
    private createWidgetControllerDescriptor;
    private processWidgetLoadError;
    private resolveWidgetsInfoFetchQueue;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetComponentService, [null, { optional: true; }, null, null, null, null, null, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WidgetComponentService>;
}
