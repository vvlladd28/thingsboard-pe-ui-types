import { MarkedOptionsService } from '@shared/components/marked-options.service';
import * as i0 from "@angular/core";
import * as i1 from "@shared/components/footer.component";
import * as i2 from "@shared/components/logo.component";
import * as i3 from "@shared/components/footer-fab-buttons.component";
import * as i4 from "@shared/components/toast.directive";
import * as i5 from "@shared/components/fullscreen.directive";
import * as i6 from "@shared/components/circular-progress.directive";
import * as i7 from "@shared/components/hotkeys.directive";
import * as i8 from "@shared/components/tb-anchor.component";
import * as i9 from "@shared/components/popover.component";
import * as i10 from "@shared/components/directives/sring-template-outlet.directive";
import * as i11 from "@shared/components/directives/component-outlet.directive";
import * as i12 from "@shared/components/markdown.component";
import * as i13 from "@shared/components/help.component";
import * as i14 from "@shared/components/help-markdown.component";
import * as i15 from "@shared/components/help-popup.component";
import * as i16 from "@shared/components/tb-checkbox.component";
import * as i17 from "@shared/components/tb-error.component";
import * as i18 from "@shared/components/cheatsheet.component";
import * as i19 from "@shared/components/breadcrumb.component";
import * as i20 from "@shared/components/user-menu.component";
import * as i21 from "@shared/components/time/timewindow.component";
import * as i22 from "@shared/components/time/timewindow-panel.component";
import * as i23 from "@shared/components/time/timewindow-config-dialog.component";
import * as i24 from "@shared/components/time/timeinterval.component";
import * as i25 from "@shared/components/time/timezone.component";
import * as i26 from "@shared/components/time/timezone-panel.component";
import * as i27 from "@shared/components/time/quick-time-interval.component";
import * as i28 from "@shared/components/time/datapoints-limit.component";
import * as i29 from "@shared/components/dashboard-select.component";
import * as i30 from "@shared/components/dashboard-select-panel.component";
import * as i31 from "@shared/components/time/datetime-period.component";
import * as i32 from "@shared/components/time/datetime.component";
import * as i33 from "@shared/components/time/timezone-select.component";
import * as i34 from "@shared/components/value-input.component";
import * as i35 from "@shared/components/dashboard-autocomplete.component";
import * as i36 from "@shared/components/dashboard-state-autocomplete.component";
import * as i37 from "@shared/components/entity/entity-subtype-autocomplete.component";
import * as i38 from "@shared/components/entity/entity-subtype-select.component";
import * as i39 from "@shared/components/entity/entity-subtype-list.component";
import * as i40 from "@shared/components/entity/entity-autocomplete.component";
import * as i41 from "@shared/components/entity/entity-list.component";
import * as i42 from "@shared/components/entity/entity-type-select.component";
import * as i43 from "@shared/components/entity/entity-select.component";
import * as i44 from "@shared/components/group/entity-group-autocomplete.component";
import * as i45 from "@shared/components/group/owner-autocomplete.component";
import * as i46 from "@shared/components/group/entity-group-select.component";
import * as i47 from "@shared/components/group/entity-group-list.component";
import * as i48 from "@shared/components/group/edge-entity-group-list.component";
import * as i49 from "@shared/components/originator-select.component";
import * as i50 from "@shared/components/entity/entity-keys-list.component";
import * as i51 from "@shared/components/entity/entity-list-select.component";
import * as i52 from "@shared/components/entity/entity-type-list.component";
import * as i53 from "@shared/components/queue/queue-autocomplete.component";
import * as i54 from "@shared/components/relation/relation-type-autocomplete.component";
import * as i55 from "@shared/components/socialshare-panel.component";
import * as i56 from "@shared/components/string-items-list.component";
import * as i57 from "@shared/components/json-object-edit.component";
import * as i58 from "@shared/components/json-object-view.component";
import * as i59 from "@shared/components/json-content.component";
import * as i60 from "@shared/components/js-func.component";
import * as i61 from "@shared/components/css.component";
import * as i62 from "@shared/components/html.component";
import * as i63 from "@shared/components/svg-xml.component";
import * as i64 from "@shared/components/fab-toolbar.component";
import * as i65 from "@shared/components/widgets-bundle-select.component";
import * as i66 from "@shared/components/dialog/confirm-dialog.component";
import * as i67 from "@shared/components/dialog/alert-dialog.component";
import * as i68 from "@shared/components/dialog/error-alert-dialog.component";
import * as i69 from "@shared/components/dialog/progress-dialog.component";
import * as i70 from "@shared/components/dialog/todo-dialog.component";
import * as i71 from "@shared/components/dialog/color-picker-dialog.component";
import * as i72 from "@shared/components/dialog/material-icons-dialog.component";
import * as i73 from "@shared/components/color-input.component";
import * as i74 from "@shared/components/material-icon-select.component";
import * as i75 from "@shared/components/dialog/node-script-test-dialog.component";
import * as i76 from "@shared/components/json-form/json-form.component";
import * as i77 from "@shared/components/image-input.component";
import * as i78 from "@shared/components/multiple-image-input.component";
import * as i79 from "@shared/components/file-input.component";
import * as i80 from "@shared/components/message-type-autocomplete.component";
import * as i81 from "@shared/components/kv-map.component";
import * as i82 from "@shared/components/nav-tree.component";
import * as i83 from "@shared/components/led-light.component";
import * as i84 from "@shared/components/markdown-editor.component";
import * as i85 from "@shared/directives/truncate-with-tooltip.directive";
import * as i86 from "@shared/directives/context-menu.directive";
import * as i87 from "@shared/pipe/nospace.pipe";
import * as i88 from "@shared/pipe/milliseconds-to-time-string.pipe";
import * as i89 from "@shared/pipe/enum-to-array.pipe";
import * as i90 from "@shared/pipe/highlight.pipe";
import * as i91 from "@shared/pipe/truncate.pipe";
import * as i92 from "@shared/pipe/tbJson.pipe";
import * as i93 from "@shared/pipe/file-size.pipe";
import * as i94 from "@shared/pipe/date-ago.pipe";
import * as i95 from "@shared/pipe/image.pipe";
import * as i96 from "@shared/pipe/custom-translate.pipe";
import * as i97 from "@shared/pipe/safe.pipe";
import * as i98 from "@shared/pipe/short-number.pipe";
import * as i99 from "@shared/pipe/selectable-columns.pipe";
import * as i100 from "@shared/pipe/keyboard-shortcut.pipe";
import * as i101 from "@shared/pipe/permission.pipes";
import * as i102 from "@shared/components/directives/tb-json-to-string.directive";
import * as i103 from "@shared/components/dialog/json-object-edit-dialog.component";
import * as i104 from "@shared/components/time/history-selector/history-selector.component";
import * as i105 from "@shared/components/entity/entity-gateway-select.component";
import * as i106 from "@shared/components/contact.component";
import * as i107 from "@shared/components/widgets-bundle-search.component";
import * as i108 from "@shared/components/role/group-permissions.component";
import * as i109 from "@shared/components/role/group-permission-dialog.component";
import * as i110 from "./components/group/share-entity-group.component";
import * as i111 from "@shared/components/ota-package/ota-package-autocomplete.component";
import * as i112 from "@shared/components/button/copy-button.component";
import * as i113 from "@shared/components/button/toggle-password.component";
import * as i114 from "@shared/components/protobuf-content.component";
import * as i115 from "@shared/components/vc/branch-autocomplete.component";
import * as i116 from "@shared/components/country-autocomplete.component";
import * as i117 from "@shared/components/phone-input.component";
import * as i118 from "./components/spark-line/tb-spark-line.component";
import * as i119 from "@shared/components/script-lang.component";
import * as i120 from "@shared/components/notification/notification.component";
import * as i121 from "@shared/components/notification/template-autocomplete.component";
import * as i122 from "@shared/components/slack-conversation-autocomplete.component";
import * as i123 from "@shared/layout/layout.directives";
import * as i124 from "@shared/components/theme-color-select.component";
import * as i125 from "@shared/components/color-picker/color-picker.component";
import * as i126 from "@shared/components/color-picker/color-picker-panel.component";
import * as i127 from "@shared/components/resource/resource-autocomplete.component";
import * as i128 from "@shared/components/toggle-header.component";
import * as i129 from "@shared/components/toggle-select.component";
import * as i130 from "@shared/components/unit-input.component";
import * as i131 from "@shared/components/string-autocomplete.component";
import * as i132 from "@shared/components/material-icons.component";
import * as i133 from "@shared/components/rule-chain/rule-chain-select.component";
import * as i134 from "@shared/components/rule-chain/rule-chain-select-panel.component";
import * as i135 from "@shared/components/icon.component";
import * as i136 from "@shared/components/hint-tooltip-icon.component";
import * as i137 from "@shared/import-export/import-dialog.component";
import * as i138 from "@shared/import-export/import-dialog-csv.component";
import * as i139 from "@shared/import-export/export-widgets-bundle-dialog.component";
import * as i140 from "@shared/import-export/table-columns-assignment.component";
import * as i141 from "@shared/components/grid/scroll-grid.component";
import * as i142 from "@shared/components/image/image-gallery.component";
import * as i143 from "@shared/components/image/upload-image-dialog.component";
import * as i144 from "@shared/components/image/image-dialog.component";
import * as i145 from "@shared/components/image/image-references.component";
import * as i146 from "@shared/components/image/images-in-use-dialog.component";
import * as i147 from "@shared/components/image/gallery-image-input.component";
import * as i148 from "@shared/components/image/multiple-gallery-image-input.component";
import * as i149 from "@shared/components/image/embed-image-dialog.component";
import * as i150 from "@shared/components/image/image-gallery-dialog.component";
import * as i151 from "@shared/components/button/widget-button.component";
import * as i152 from "@shared/components/color-picker/hex-input.component";
import * as i153 from "@shared/components/image/scada-symbol-input.component";
import * as i154 from "@shared/components/custom-menu-autocomplete.component";
import * as i155 from "@angular/common";
import * as i156 from "@angular/router";
import * as i157 from "@ngx-translate/core";
import * as i158 from "@angular/material/badge";
import * as i159 from "@angular/material/button";
import * as i160 from "@angular/material/button-toggle";
import * as i161 from "@angular/material/checkbox";
import * as i162 from "@angular/material/icon";
import * as i163 from "@angular/material/card";
import * as i164 from "@angular/material/progress-bar";
import * as i165 from "@angular/material/input";
import * as i166 from "@angular/material/snack-bar";
import * as i167 from "@angular/material/sidenav";
import * as i168 from "@angular/material/toolbar";
import * as i169 from "@angular/material/menu";
import * as i170 from "@angular/material/grid-list";
import * as i171 from "@angular/material/dialog";
import * as i172 from "@angular/material/select";
import * as i173 from "@angular/material/tooltip";
import * as i174 from "@angular/material/table";
import * as i175 from "@angular/material/paginator";
import * as i176 from "@angular/material/sort";
import * as i177 from "@angular/material/progress-spinner";
import * as i178 from "@angular/material/divider";
import * as i179 from "@angular/material/tabs";
import * as i180 from "@angular/material/radio";
import * as i181 from "@angular/material/slide-toggle";
import * as i182 from "@angular/material/datepicker";
import * as i183 from "@mat-datetimepicker/core";
import * as i184 from "ngx-daterangepicker-material";
import * as i185 from "@angular/material/slider";
import * as i186 from "@angular/material/expansion";
import * as i187 from "@angular/material/stepper";
import * as i188 from "@angular/material/autocomplete";
import * as i189 from "@angular/material/chips";
import * as i190 from "@angular/material/list";
import * as i191 from "@angular/cdk/drag-drop";
import * as i192 from "angular-gridster2";
import * as i193 from "ngx-clipboard";
import * as i194 from "@angular/flex-layout";
import * as i195 from "@angular/forms";
import * as i196 from "@angular/cdk/overlay";
import * as i197 from "ngx-sharebuttons";
import * as i198 from "angular2-hotkeys";
import * as i199 from "@iplab/ngx-color-picker";
import * as i200 from "@fullcalendar/angular";
import * as i201 from "ngx-hm-carousel";
import * as i202 from "ngx-drag-drop";
import * as i203 from "@flowjs/ngx-flow";
import * as i204 from "ngx-flowchart";
import * as i205 from "ngx-markdown";
import * as i206 from "@tinymce/tinymce-angular";
export declare function MarkedOptionsFactory(markedOptionsService: MarkedOptionsService): MarkedOptionsService;
export declare class SharedModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SharedModule, [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.TbHotkeysDirective, typeof i8.TbAnchorComponent, typeof i9.TbPopoverComponent, typeof i10.TbStringTemplateOutletDirective, typeof i11.TbComponentOutletDirective, typeof i9.TbPopoverDirective, typeof i12.TbMarkdownComponent, typeof i13.HelpComponent, typeof i14.HelpMarkdownComponent, typeof i15.HelpPopupComponent, typeof i16.TbCheckboxComponent, typeof i4.TbSnackBarComponent, typeof i17.TbErrorComponent, typeof i18.TbCheatSheetComponent, typeof i19.BreadcrumbComponent, typeof i20.UserMenuComponent, typeof i21.TimewindowComponent, typeof i22.TimewindowPanelComponent, typeof i23.TimewindowConfigDialogComponent, typeof i24.TimeintervalComponent, typeof i25.TimezoneComponent, typeof i26.TimezonePanelComponent, typeof i27.QuickTimeIntervalComponent, typeof i28.DatapointsLimitComponent, typeof i29.DashboardSelectComponent, typeof i30.DashboardSelectPanelComponent, typeof i31.DatetimePeriodComponent, typeof i32.DatetimeComponent, typeof i33.TimezoneSelectComponent, typeof i34.ValueInputComponent, typeof i35.DashboardAutocompleteComponent, typeof i36.DashboardStateAutocompleteComponent, typeof i37.EntitySubTypeAutocompleteComponent, typeof i38.EntitySubTypeSelectComponent, typeof i39.EntitySubTypeListComponent, typeof i40.EntityAutocompleteComponent, typeof i41.EntityListComponent, typeof i42.EntityTypeSelectComponent, typeof i43.EntitySelectComponent, typeof i44.EntityGroupAutocompleteComponent, typeof i45.OwnerAutocompleteComponent, typeof i46.EntityGroupSelectComponent, typeof i47.EntityGroupListComponent, typeof i48.EdgeEntityGroupListComponent, typeof i49.OriginatorSelectComponent, typeof i50.EntityKeysListComponent, typeof i51.EntityListSelectComponent, typeof i52.EntityTypeListComponent, typeof i53.QueueAutocompleteComponent, typeof i54.RelationTypeAutocompleteComponent, typeof i55.SocialSharePanelComponent, typeof i56.StringItemsListComponent, typeof i57.JsonObjectEditComponent, typeof i58.JsonObjectViewComponent, typeof i59.JsonContentComponent, typeof i60.JsFuncComponent, typeof i61.CssComponent, typeof i62.HtmlComponent, typeof i63.SvgXmlComponent, typeof i64.FabTriggerDirective, typeof i64.FabActionsDirective, typeof i64.FabToolbarComponent, typeof i65.WidgetsBundleSelectComponent, typeof i66.ConfirmDialogComponent, typeof i67.AlertDialogComponent, typeof i68.ErrorAlertDialogComponent, typeof i69.ProgressDialogComponent, typeof i70.TodoDialogComponent, typeof i71.ColorPickerDialogComponent, typeof i72.MaterialIconsDialogComponent, typeof i73.ColorInputComponent, typeof i74.MaterialIconSelectComponent, typeof i75.NodeScriptTestDialogComponent, typeof i76.JsonFormComponent, typeof i77.ImageInputComponent, typeof i78.MultipleImageInputComponent, typeof i79.FileInputComponent, typeof i80.MessageTypeAutocompleteComponent, typeof i81.KeyValMapComponent, typeof i82.NavTreeComponent, typeof i83.LedLightComponent, typeof i84.MarkdownEditorComponent, typeof i85.TruncateWithTooltipDirective, typeof i86.ContextMenuDirective, typeof i87.NospacePipe, typeof i88.MillisecondsToTimeStringPipe, typeof i89.EnumToArrayPipe, typeof i90.HighlightPipe, typeof i91.TruncatePipe, typeof i92.TbJsonPipe, typeof i93.FileSizePipe, typeof i94.DateAgoPipe, typeof i95.ImagePipe, typeof i96.CustomTranslatePipe, typeof i97.SafePipe, typeof i98.ShortNumberPipe, typeof i99.SelectableColumnsPipe, typeof i100.KeyboardShortcutPipe, typeof i101.HasGenericPermissionPipe, typeof i101.HasEntityGroupPermissionPipe, typeof i101.HasGroupEntityPermissionPipe, typeof i101.HasGroupEntityOrGenericPermissionPipe, typeof i102.TbJsonToStringDirective, typeof i103.JsonObjectEditDialogComponent, typeof i104.HistorySelectorComponent, typeof i105.EntityGatewaySelectComponent, typeof i106.ContactComponent, typeof i107.WidgetsBundleSearchComponent, typeof i108.GroupPermissionsComponent, typeof i109.GroupPermissionDialogComponent, typeof i110.ShareEntityGroupComponent, typeof i111.OtaPackageAutocompleteComponent, typeof i107.WidgetsBundleSearchComponent, typeof i112.CopyButtonComponent, typeof i113.TogglePasswordComponent, typeof i114.ProtobufContentComponent, typeof i115.BranchAutocompleteComponent, typeof i116.CountryAutocompleteComponent, typeof i117.PhoneInputComponent, typeof i118.TbSparkLineComponent, typeof i119.TbScriptLangComponent, typeof i120.NotificationComponent, typeof i121.TemplateAutocompleteComponent, typeof i122.SlackConversationAutocompleteComponent, typeof i123.MdLgLayoutDirective, typeof i123.MdLgLayoutAlignDirective, typeof i123.MdLgLayoutGapDirective, typeof i123.MdLgShowHideDirective, typeof i123.GtMdLgLayoutDirective, typeof i123.GtMdLgLayoutAlignDirective, typeof i123.GtMdLgLayoutGapDirective, typeof i123.GtMdLgShowHideDirective, typeof i124.ThemeColorSelectComponent, typeof i125.ColorPickerComponent, typeof i126.ColorPickerPanelComponent, typeof i127.ResourceAutocompleteComponent, typeof i128.ToggleHeaderComponent, typeof i128.ToggleOption, typeof i129.ToggleSelectComponent, typeof i130.UnitInputComponent, typeof i131.StringAutocompleteComponent, typeof i132.MaterialIconsComponent, typeof i133.RuleChainSelectComponent, typeof i134.RuleChainSelectPanelComponent, typeof i135.TbIconComponent, typeof i136.HintTooltipIconComponent, typeof i137.ImportDialogComponent, typeof i138.ImportDialogCsvComponent, typeof i139.ExportWidgetsBundleDialogComponent, typeof i140.TableColumnsAssignmentComponent, typeof i141.ScrollGridComponent, typeof i142.ImageGalleryComponent, typeof i143.UploadImageDialogComponent, typeof i144.ImageDialogComponent, typeof i145.ImageReferencesComponent, typeof i146.ImagesInUseDialogComponent, typeof i147.GalleryImageInputComponent, typeof i148.MultipleGalleryImageInputComponent, typeof i149.EmbedImageDialogComponent, typeof i150.ImageGalleryDialogComponent, typeof i151.WidgetButtonComponent, typeof i152.HexInputComponent, typeof i153.ScadaSymbolInputComponent, typeof i154.CustomMenuAutocompleteComponent], [typeof i155.CommonModule, typeof i156.RouterModule, typeof i157.TranslateModule, typeof i158.MatBadgeModule, typeof i159.MatButtonModule, typeof i160.MatButtonToggleModule, typeof i161.MatCheckboxModule, typeof i162.MatIconModule, typeof i163.MatCardModule, typeof i164.MatProgressBarModule, typeof i165.MatInputModule, typeof i166.MatSnackBarModule, typeof i167.MatSidenavModule, typeof i168.MatToolbarModule, typeof i169.MatMenuModule, typeof i170.MatGridListModule, typeof i171.MatDialogModule, typeof i172.MatSelectModule, typeof i173.MatTooltipModule, typeof i174.MatTableModule, typeof i175.MatPaginatorModule, typeof i176.MatSortModule, typeof i177.MatProgressSpinnerModule, typeof i178.MatDividerModule, typeof i179.MatTabsModule, typeof i180.MatRadioModule, typeof i181.MatSlideToggleModule, typeof i182.MatDatepickerModule, typeof i183.MatNativeDatetimeModule, typeof i183.MatDatetimepickerModule, typeof i184.NgxDaterangepickerMd, typeof i185.MatSliderModule, typeof i186.MatExpansionModule, typeof i187.MatStepperModule, typeof i188.MatAutocompleteModule, typeof i189.MatChipsModule, typeof i190.MatListModule, typeof i191.DragDropModule, typeof i192.GridsterModule, typeof i193.ClipboardModule, typeof i194.FlexLayoutModule, typeof i195.FormsModule, typeof i195.ReactiveFormsModule, typeof i196.OverlayModule, typeof i197.ShareButtonDirective, typeof i198.HotkeyModule, typeof i199.ColorPickerModule, typeof i200.FullCalendarModule, typeof i201.NgxHmCarouselComponent, typeof i201.NgxHmCarouselDynamicDirective, typeof i201.NgxHmCarouselItemDirective, typeof i202.DndModule, typeof i203.NgxFlowModule, typeof i204.NgxFlowchartModule, typeof i205.MarkdownModule], [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.TbHotkeysDirective, typeof i8.TbAnchorComponent, typeof i10.TbStringTemplateOutletDirective, typeof i11.TbComponentOutletDirective, typeof i9.TbPopoverDirective, typeof i12.TbMarkdownComponent, typeof i13.HelpComponent, typeof i14.HelpMarkdownComponent, typeof i15.HelpPopupComponent, typeof i16.TbCheckboxComponent, typeof i17.TbErrorComponent, typeof i18.TbCheatSheetComponent, typeof i19.BreadcrumbComponent, typeof i20.UserMenuComponent, typeof i21.TimewindowComponent, typeof i22.TimewindowPanelComponent, typeof i23.TimewindowConfigDialogComponent, typeof i24.TimeintervalComponent, typeof i25.TimezoneComponent, typeof i26.TimezonePanelComponent, typeof i27.QuickTimeIntervalComponent, typeof i28.DatapointsLimitComponent, typeof i29.DashboardSelectComponent, typeof i31.DatetimePeriodComponent, typeof i32.DatetimeComponent, typeof i33.TimezoneSelectComponent, typeof i35.DashboardAutocompleteComponent, typeof i36.DashboardStateAutocompleteComponent, typeof i37.EntitySubTypeAutocompleteComponent, typeof i38.EntitySubTypeSelectComponent, typeof i39.EntitySubTypeListComponent, typeof i40.EntityAutocompleteComponent, typeof i41.EntityListComponent, typeof i42.EntityTypeSelectComponent, typeof i43.EntitySelectComponent, typeof i44.EntityGroupAutocompleteComponent, typeof i45.OwnerAutocompleteComponent, typeof i46.EntityGroupSelectComponent, typeof i47.EntityGroupListComponent, typeof i48.EdgeEntityGroupListComponent, typeof i49.OriginatorSelectComponent, typeof i50.EntityKeysListComponent, typeof i51.EntityListSelectComponent, typeof i52.EntityTypeListComponent, typeof i53.QueueAutocompleteComponent, typeof i54.RelationTypeAutocompleteComponent, typeof i55.SocialSharePanelComponent, typeof i56.StringItemsListComponent, typeof i57.JsonObjectEditComponent, typeof i58.JsonObjectViewComponent, typeof i59.JsonContentComponent, typeof i60.JsFuncComponent, typeof i61.CssComponent, typeof i62.HtmlComponent, typeof i63.SvgXmlComponent, typeof i64.FabTriggerDirective, typeof i64.FabActionsDirective, typeof i102.TbJsonToStringDirective, typeof i64.FabToolbarComponent, typeof i65.WidgetsBundleSelectComponent, typeof i34.ValueInputComponent, typeof i158.MatBadgeModule, typeof i159.MatButtonModule, typeof i160.MatButtonToggleModule, typeof i161.MatCheckboxModule, typeof i162.MatIconModule, typeof i163.MatCardModule, typeof i164.MatProgressBarModule, typeof i165.MatInputModule, typeof i166.MatSnackBarModule, typeof i167.MatSidenavModule, typeof i168.MatToolbarModule, typeof i169.MatMenuModule, typeof i170.MatGridListModule, typeof i171.MatDialogModule, typeof i172.MatSelectModule, typeof i173.MatTooltipModule, typeof i174.MatTableModule, typeof i175.MatPaginatorModule, typeof i176.MatSortModule, typeof i177.MatProgressSpinnerModule, typeof i178.MatDividerModule, typeof i179.MatTabsModule, typeof i180.MatRadioModule, typeof i181.MatSlideToggleModule, typeof i182.MatDatepickerModule, typeof i183.MatNativeDatetimeModule, typeof i183.MatDatetimepickerModule, typeof i184.NgxDaterangepickerMd, typeof i185.MatSliderModule, typeof i186.MatExpansionModule, typeof i187.MatStepperModule, typeof i188.MatAutocompleteModule, typeof i189.MatChipsModule, typeof i190.MatListModule, typeof i191.DragDropModule, typeof i192.GridsterModule, typeof i193.ClipboardModule, typeof i194.FlexLayoutModule, typeof i195.FormsModule, typeof i195.ReactiveFormsModule, typeof i196.OverlayModule, typeof i198.HotkeyModule, typeof i199.ColorPickerModule, typeof i201.NgxHmCarouselComponent, typeof i201.NgxHmCarouselDynamicDirective, typeof i201.NgxHmCarouselItemDirective, typeof i206.EditorModule, typeof i200.FullCalendarModule, typeof i202.DndModule, typeof i204.NgxFlowchartModule, typeof i205.MarkdownModule, typeof i66.ConfirmDialogComponent, typeof i67.AlertDialogComponent, typeof i68.ErrorAlertDialogComponent, typeof i69.ProgressDialogComponent, typeof i70.TodoDialogComponent, typeof i71.ColorPickerDialogComponent, typeof i72.MaterialIconsDialogComponent, typeof i73.ColorInputComponent, typeof i74.MaterialIconSelectComponent, typeof i75.NodeScriptTestDialogComponent, typeof i76.JsonFormComponent, typeof i77.ImageInputComponent, typeof i78.MultipleImageInputComponent, typeof i79.FileInputComponent, typeof i80.MessageTypeAutocompleteComponent, typeof i81.KeyValMapComponent, typeof i82.NavTreeComponent, typeof i83.LedLightComponent, typeof i84.MarkdownEditorComponent, typeof i85.TruncateWithTooltipDirective, typeof i86.ContextMenuDirective, typeof i87.NospacePipe, typeof i88.MillisecondsToTimeStringPipe, typeof i89.EnumToArrayPipe, typeof i90.HighlightPipe, typeof i91.TruncatePipe, typeof i92.TbJsonPipe, typeof i100.KeyboardShortcutPipe, typeof i93.FileSizePipe, typeof i94.DateAgoPipe, typeof i95.ImagePipe, typeof i96.CustomTranslatePipe, typeof i97.SafePipe, typeof i98.ShortNumberPipe, typeof i99.SelectableColumnsPipe, typeof i156.RouterModule, typeof i101.HasGenericPermissionPipe, typeof i101.HasEntityGroupPermissionPipe, typeof i101.HasGroupEntityPermissionPipe, typeof i101.HasGroupEntityOrGenericPermissionPipe, typeof i157.TranslateModule, typeof i103.JsonObjectEditDialogComponent, typeof i104.HistorySelectorComponent, typeof i105.EntityGatewaySelectComponent, typeof i106.ContactComponent, typeof i107.WidgetsBundleSearchComponent, typeof i108.GroupPermissionsComponent, typeof i109.GroupPermissionDialogComponent, typeof i110.ShareEntityGroupComponent, typeof i111.OtaPackageAutocompleteComponent, typeof i107.WidgetsBundleSearchComponent, typeof i112.CopyButtonComponent, typeof i113.TogglePasswordComponent, typeof i114.ProtobufContentComponent, typeof i115.BranchAutocompleteComponent, typeof i116.CountryAutocompleteComponent, typeof i117.PhoneInputComponent, typeof i118.TbSparkLineComponent, typeof i119.TbScriptLangComponent, typeof i120.NotificationComponent, typeof i121.TemplateAutocompleteComponent, typeof i122.SlackConversationAutocompleteComponent, typeof i123.MdLgLayoutDirective, typeof i123.MdLgLayoutAlignDirective, typeof i123.MdLgLayoutGapDirective, typeof i123.MdLgShowHideDirective, typeof i123.GtMdLgLayoutDirective, typeof i123.GtMdLgLayoutAlignDirective, typeof i123.GtMdLgLayoutGapDirective, typeof i123.GtMdLgShowHideDirective, typeof i124.ThemeColorSelectComponent, typeof i125.ColorPickerComponent, typeof i126.ColorPickerPanelComponent, typeof i127.ResourceAutocompleteComponent, typeof i128.ToggleHeaderComponent, typeof i128.ToggleOption, typeof i129.ToggleSelectComponent, typeof i130.UnitInputComponent, typeof i131.StringAutocompleteComponent, typeof i132.MaterialIconsComponent, typeof i133.RuleChainSelectComponent, typeof i134.RuleChainSelectPanelComponent, typeof i135.TbIconComponent, typeof i136.HintTooltipIconComponent, typeof i137.ImportDialogComponent, typeof i138.ImportDialogCsvComponent, typeof i139.ExportWidgetsBundleDialogComponent, typeof i140.TableColumnsAssignmentComponent, typeof i141.ScrollGridComponent, typeof i142.ImageGalleryComponent, typeof i143.UploadImageDialogComponent, typeof i144.ImageDialogComponent, typeof i145.ImageReferencesComponent, typeof i146.ImagesInUseDialogComponent, typeof i147.GalleryImageInputComponent, typeof i148.MultipleGalleryImageInputComponent, typeof i149.EmbedImageDialogComponent, typeof i150.ImageGalleryDialogComponent, typeof i151.WidgetButtonComponent, typeof i153.ScadaSymbolInputComponent, typeof i154.CustomMenuAutocompleteComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SharedModule>;
}
