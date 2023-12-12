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
import * as i23 from "@shared/components/time/timeinterval.component";
import * as i24 from "@shared/components/time/quick-time-interval.component";
import * as i25 from "@shared/components/dashboard-select.component";
import * as i26 from "@shared/components/dashboard-select-panel.component";
import * as i27 from "@shared/components/time/datetime-period.component";
import * as i28 from "@shared/components/time/datetime.component";
import * as i29 from "@shared/components/time/timezone-select.component";
import * as i30 from "@shared/components/value-input.component";
import * as i31 from "@shared/components/dashboard-autocomplete.component";
import * as i32 from "@shared/components/dashboard-state-autocomplete.component";
import * as i33 from "@shared/components/entity/entity-subtype-autocomplete.component";
import * as i34 from "@shared/components/entity/entity-subtype-select.component";
import * as i35 from "@shared/components/entity/entity-subtype-list.component";
import * as i36 from "@shared/components/entity/entity-autocomplete.component";
import * as i37 from "@shared/components/entity/entity-list.component";
import * as i38 from "@shared/components/entity/entity-type-select.component";
import * as i39 from "@shared/components/entity/entity-select.component";
import * as i40 from "@shared/components/group/entity-group-autocomplete.component";
import * as i41 from "@shared/components/group/owner-autocomplete.component";
import * as i42 from "@shared/components/group/entity-group-select.component";
import * as i43 from "@shared/components/group/entity-group-list.component";
import * as i44 from "@shared/components/group/edge-entity-group-list.component";
import * as i45 from "@shared/components/originator-select.component";
import * as i46 from "@shared/components/entity/entity-keys-list.component";
import * as i47 from "@shared/components/entity/entity-list-select.component";
import * as i48 from "@shared/components/entity/entity-type-list.component";
import * as i49 from "@shared/components/queue/queue-autocomplete.component";
import * as i50 from "@shared/components/relation/relation-type-autocomplete.component";
import * as i51 from "@shared/components/socialshare-panel.component";
import * as i52 from "@shared/components/string-items-list.component";
import * as i53 from "@shared/components/json-object-edit.component";
import * as i54 from "@shared/components/json-object-view.component";
import * as i55 from "@shared/components/json-content.component";
import * as i56 from "@shared/components/js-func.component";
import * as i57 from "@shared/components/css.component";
import * as i58 from "@shared/components/html.component";
import * as i59 from "@shared/components/fab-toolbar.component";
import * as i60 from "@shared/components/widgets-bundle-select.component";
import * as i61 from "@shared/components/dialog/confirm-dialog.component";
import * as i62 from "@shared/components/dialog/alert-dialog.component";
import * as i63 from "@shared/components/dialog/error-alert-dialog.component";
import * as i64 from "@shared/components/dialog/progress-dialog.component";
import * as i65 from "@shared/components/dialog/todo-dialog.component";
import * as i66 from "@shared/components/dialog/color-picker-dialog.component";
import * as i67 from "@shared/components/dialog/material-icons-dialog.component";
import * as i68 from "@shared/components/color-input.component";
import * as i69 from "@shared/components/material-icon-select.component";
import * as i70 from "@shared/components/dialog/node-script-test-dialog.component";
import * as i71 from "@shared/components/json-form/json-form.component";
import * as i72 from "@shared/components/image-input.component";
import * as i73 from "@shared/components/multiple-image-input.component";
import * as i74 from "@shared/components/file-input.component";
import * as i75 from "@shared/components/message-type-autocomplete.component";
import * as i76 from "@shared/components/kv-map.component";
import * as i77 from "@shared/components/nav-tree.component";
import * as i78 from "@shared/components/led-light.component";
import * as i79 from "@shared/components/markdown-editor.component";
import * as i80 from "@shared/pipe/nospace.pipe";
import * as i81 from "@shared/pipe/milliseconds-to-time-string.pipe";
import * as i82 from "@shared/pipe/enum-to-array.pipe";
import * as i83 from "@shared/pipe/highlight.pipe";
import * as i84 from "@shared/pipe/truncate.pipe";
import * as i85 from "@shared/pipe/tbJson.pipe";
import * as i86 from "@shared/pipe/file-size.pipe";
import * as i87 from "@shared/pipe/date-ago.pipe";
import * as i88 from "@shared/pipe/image.pipe";
import * as i89 from "@shared/pipe/safe.pipe";
import * as i90 from "@shared/pipe/short-number.pipe";
import * as i91 from "@shared/pipe/selectable-columns.pipe";
import * as i92 from "@shared/pipe/keyboard-shortcut.pipe";
import * as i93 from "@shared/pipe/permission.pipes";
import * as i94 from "@shared/components/directives/tb-json-to-string.directive";
import * as i95 from "@shared/components/dialog/json-object-edit-dialog.component";
import * as i96 from "@shared/components/time/history-selector/history-selector.component";
import * as i97 from "@shared/components/entity/entity-gateway-select.component";
import * as i98 from "@shared/components/contact.component";
import * as i99 from "@shared/components/widgets-bundle-search.component";
import * as i100 from "@shared/components/role/group-permissions.component";
import * as i101 from "@shared/components/role/group-permission-dialog.component";
import * as i102 from "./components/group/share-entity-group.component";
import * as i103 from "@shared/components/ota-package/ota-package-autocomplete.component";
import * as i104 from "@shared/components/button/copy-button.component";
import * as i105 from "@shared/components/button/toggle-password.component";
import * as i106 from "@shared/components/protobuf-content.component";
import * as i107 from "@shared/components/vc/branch-autocomplete.component";
import * as i108 from "@shared/components/phone-input.component";
import * as i109 from "./components/spark-line/tb-spark-line.component";
import * as i110 from "@shared/components/script-lang.component";
import * as i111 from "@shared/components/notification/notification.component";
import * as i112 from "@shared/components/notification/template-autocomplete.component";
import * as i113 from "@shared/components/slack-conversation-autocomplete.component";
import * as i114 from "@shared/layout/layout.directives";
import * as i115 from "@shared/components/theme-color-select.component";
import * as i116 from "@shared/components/color-picker/color-picker.component";
import * as i117 from "@shared/components/color-picker/color-picker-panel.component";
import * as i118 from "@shared/components/resource/resource-autocomplete.component";
import * as i119 from "@shared/components/toggle-header.component";
import * as i120 from "@shared/components/toggle-select.component";
import * as i121 from "@shared/components/unit-input.component";
import * as i122 from "@shared/components/string-autocomplete.component";
import * as i123 from "@shared/components/material-icons.component";
import * as i124 from "@shared/components/rule-chain/rule-chain-select.component";
import * as i125 from "@shared/components/icon.component";
import * as i126 from "@shared/components/hint-tooltip-icon.component";
import * as i127 from "@shared/import-export/import-dialog.component";
import * as i128 from "@shared/import-export/import-dialog-csv.component";
import * as i129 from "@shared/import-export/export-widgets-bundle-dialog.component";
import * as i130 from "@shared/import-export/table-columns-assignment.component";
import * as i131 from "@shared/components/grid/scroll-grid.component";
import * as i132 from "@shared/components/image/image-gallery.component";
import * as i133 from "@shared/components/image/upload-image-dialog.component";
import * as i134 from "@shared/components/image/image-dialog.component";
import * as i135 from "@shared/components/image/image-references.component";
import * as i136 from "@shared/components/image/images-in-use-dialog.component";
import * as i137 from "@shared/components/image/gallery-image-input.component";
import * as i138 from "@shared/components/image/multiple-gallery-image-input.component";
import * as i139 from "@angular/common";
import * as i140 from "@angular/router";
import * as i141 from "@ngx-translate/core";
import * as i142 from "@angular/material/badge";
import * as i143 from "@angular/material/button";
import * as i144 from "@angular/material/button-toggle";
import * as i145 from "@angular/material/checkbox";
import * as i146 from "@angular/material/icon";
import * as i147 from "@angular/material/card";
import * as i148 from "@angular/material/progress-bar";
import * as i149 from "@angular/material/input";
import * as i150 from "@angular/material/snack-bar";
import * as i151 from "@angular/material/sidenav";
import * as i152 from "@angular/material/toolbar";
import * as i153 from "@angular/material/menu";
import * as i154 from "@angular/material/grid-list";
import * as i155 from "@angular/material/dialog";
import * as i156 from "@angular/material/select";
import * as i157 from "@angular/material/tooltip";
import * as i158 from "@angular/material/table";
import * as i159 from "@angular/material/paginator";
import * as i160 from "@angular/material/sort";
import * as i161 from "@angular/material/progress-spinner";
import * as i162 from "@angular/material/divider";
import * as i163 from "@angular/material/tabs";
import * as i164 from "@angular/material/radio";
import * as i165 from "@angular/material/slide-toggle";
import * as i166 from "@angular/material/datepicker";
import * as i167 from "@mat-datetimepicker/core";
import * as i168 from "ngx-daterangepicker-material";
import * as i169 from "@angular/material/slider";
import * as i170 from "@angular/material/expansion";
import * as i171 from "@angular/material/stepper";
import * as i172 from "@angular/material/autocomplete";
import * as i173 from "@angular/material/chips";
import * as i174 from "@angular/material/list";
import * as i175 from "@angular/cdk/drag-drop";
import * as i176 from "angular-gridster2";
import * as i177 from "ngx-clipboard";
import * as i178 from "@angular/flex-layout";
import * as i179 from "@angular/forms";
import * as i180 from "@angular/cdk/overlay";
import * as i181 from "ngx-sharebuttons";
import * as i182 from "angular2-hotkeys";
import * as i183 from "@iplab/ngx-color-picker";
import * as i184 from "ngx-hm-carousel";
import * as i185 from "@fullcalendar/angular";
import * as i186 from "ngx-drag-drop";
import * as i187 from "@flowjs/ngx-flow";
import * as i188 from "ngx-flowchart";
import * as i189 from "ngx-markdown";
import * as i190 from "@tinymce/tinymce-angular";
export declare function MarkedOptionsFactory(markedOptionsService: MarkedOptionsService): MarkedOptionsService;
export declare class SharedModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SharedModule, [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.TbHotkeysDirective, typeof i8.TbAnchorComponent, typeof i9.TbPopoverComponent, typeof i10.TbStringTemplateOutletDirective, typeof i11.TbComponentOutletDirective, typeof i9.TbPopoverDirective, typeof i12.TbMarkdownComponent, typeof i13.HelpComponent, typeof i14.HelpMarkdownComponent, typeof i15.HelpPopupComponent, typeof i16.TbCheckboxComponent, typeof i4.TbSnackBarComponent, typeof i17.TbErrorComponent, typeof i18.TbCheatSheetComponent, typeof i19.BreadcrumbComponent, typeof i20.UserMenuComponent, typeof i21.TimewindowComponent, typeof i22.TimewindowPanelComponent, typeof i23.TimeintervalComponent, typeof i24.QuickTimeIntervalComponent, typeof i25.DashboardSelectComponent, typeof i26.DashboardSelectPanelComponent, typeof i27.DatetimePeriodComponent, typeof i28.DatetimeComponent, typeof i29.TimezoneSelectComponent, typeof i30.ValueInputComponent, typeof i31.DashboardAutocompleteComponent, typeof i32.DashboardStateAutocompleteComponent, typeof i33.EntitySubTypeAutocompleteComponent, typeof i34.EntitySubTypeSelectComponent, typeof i35.EntitySubTypeListComponent, typeof i36.EntityAutocompleteComponent, typeof i37.EntityListComponent, typeof i38.EntityTypeSelectComponent, typeof i39.EntitySelectComponent, typeof i40.EntityGroupAutocompleteComponent, typeof i41.OwnerAutocompleteComponent, typeof i42.EntityGroupSelectComponent, typeof i43.EntityGroupListComponent, typeof i44.EdgeEntityGroupListComponent, typeof i45.OriginatorSelectComponent, typeof i46.EntityKeysListComponent, typeof i47.EntityListSelectComponent, typeof i48.EntityTypeListComponent, typeof i49.QueueAutocompleteComponent, typeof i50.RelationTypeAutocompleteComponent, typeof i51.SocialSharePanelComponent, typeof i52.StringItemsListComponent, typeof i53.JsonObjectEditComponent, typeof i54.JsonObjectViewComponent, typeof i55.JsonContentComponent, typeof i56.JsFuncComponent, typeof i57.CssComponent, typeof i58.HtmlComponent, typeof i59.FabTriggerDirective, typeof i59.FabActionsDirective, typeof i59.FabToolbarComponent, typeof i60.WidgetsBundleSelectComponent, typeof i61.ConfirmDialogComponent, typeof i62.AlertDialogComponent, typeof i63.ErrorAlertDialogComponent, typeof i64.ProgressDialogComponent, typeof i65.TodoDialogComponent, typeof i66.ColorPickerDialogComponent, typeof i67.MaterialIconsDialogComponent, typeof i68.ColorInputComponent, typeof i69.MaterialIconSelectComponent, typeof i70.NodeScriptTestDialogComponent, typeof i71.JsonFormComponent, typeof i72.ImageInputComponent, typeof i73.MultipleImageInputComponent, typeof i74.FileInputComponent, typeof i75.MessageTypeAutocompleteComponent, typeof i76.KeyValMapComponent, typeof i77.NavTreeComponent, typeof i78.LedLightComponent, typeof i79.MarkdownEditorComponent, typeof i80.NospacePipe, typeof i81.MillisecondsToTimeStringPipe, typeof i82.EnumToArrayPipe, typeof i83.HighlightPipe, typeof i84.TruncatePipe, typeof i85.TbJsonPipe, typeof i86.FileSizePipe, typeof i87.DateAgoPipe, typeof i88.ImagePipe, typeof i89.SafePipe, typeof i90.ShortNumberPipe, typeof i91.SelectableColumnsPipe, typeof i92.KeyboardShortcutPipe, typeof i93.HasGenericPermissionPipe, typeof i93.HasEntityGroupPermissionPipe, typeof i93.HasGroupEntityPermissionPipe, typeof i93.HasGroupEntityOrGenericPermissionPipe, typeof i94.TbJsonToStringDirective, typeof i95.JsonObjectEditDialogComponent, typeof i96.HistorySelectorComponent, typeof i97.EntityGatewaySelectComponent, typeof i98.ContactComponent, typeof i99.WidgetsBundleSearchComponent, typeof i100.GroupPermissionsComponent, typeof i101.GroupPermissionDialogComponent, typeof i102.ShareEntityGroupComponent, typeof i103.OtaPackageAutocompleteComponent, typeof i99.WidgetsBundleSearchComponent, typeof i104.CopyButtonComponent, typeof i105.TogglePasswordComponent, typeof i106.ProtobufContentComponent, typeof i107.BranchAutocompleteComponent, typeof i108.PhoneInputComponent, typeof i109.TbSparkLineComponent, typeof i110.TbScriptLangComponent, typeof i111.NotificationComponent, typeof i112.TemplateAutocompleteComponent, typeof i113.SlackConversationAutocompleteComponent, typeof i114.MdLgLayoutDirective, typeof i114.MdLgLayoutAlignDirective, typeof i114.MdLgLayoutGapDirective, typeof i114.MdLgShowHideDirective, typeof i114.GtMdLgLayoutDirective, typeof i114.GtMdLgLayoutAlignDirective, typeof i114.GtMdLgLayoutGapDirective, typeof i114.GtMdLgShowHideDirective, typeof i115.ThemeColorSelectComponent, typeof i116.ColorPickerComponent, typeof i117.ColorPickerPanelComponent, typeof i118.ResourceAutocompleteComponent, typeof i119.ToggleHeaderComponent, typeof i119.ToggleOption, typeof i120.ToggleSelectComponent, typeof i121.UnitInputComponent, typeof i122.StringAutocompleteComponent, typeof i123.MaterialIconsComponent, typeof i124.RuleChainSelectComponent, typeof i125.TbIconComponent, typeof i126.HintTooltipIconComponent, typeof i127.ImportDialogComponent, typeof i128.ImportDialogCsvComponent, typeof i129.ExportWidgetsBundleDialogComponent, typeof i130.TableColumnsAssignmentComponent, typeof i131.ScrollGridComponent, typeof i132.ImageGalleryComponent, typeof i133.UploadImageDialogComponent, typeof i134.ImageDialogComponent, typeof i135.ImageReferencesComponent, typeof i136.ImagesInUseDialogComponent, typeof i137.GalleryImageInputComponent, typeof i138.MultipleGalleryImageInputComponent], [typeof i139.CommonModule, typeof i140.RouterModule, typeof i141.TranslateModule, typeof i142.MatBadgeModule, typeof i143.MatButtonModule, typeof i144.MatButtonToggleModule, typeof i145.MatCheckboxModule, typeof i146.MatIconModule, typeof i147.MatCardModule, typeof i148.MatProgressBarModule, typeof i149.MatInputModule, typeof i150.MatSnackBarModule, typeof i151.MatSidenavModule, typeof i152.MatToolbarModule, typeof i153.MatMenuModule, typeof i154.MatGridListModule, typeof i155.MatDialogModule, typeof i156.MatSelectModule, typeof i157.MatTooltipModule, typeof i158.MatTableModule, typeof i159.MatPaginatorModule, typeof i160.MatSortModule, typeof i161.MatProgressSpinnerModule, typeof i162.MatDividerModule, typeof i163.MatTabsModule, typeof i164.MatRadioModule, typeof i165.MatSlideToggleModule, typeof i166.MatDatepickerModule, typeof i167.MatNativeDatetimeModule, typeof i167.MatDatetimepickerModule, typeof i168.NgxDaterangepickerMd, typeof i169.MatSliderModule, typeof i170.MatExpansionModule, typeof i171.MatStepperModule, typeof i172.MatAutocompleteModule, typeof i173.MatChipsModule, typeof i174.MatListModule, typeof i175.DragDropModule, typeof i176.GridsterModule, typeof i177.ClipboardModule, typeof i178.FlexLayoutModule, typeof i179.FormsModule, typeof i179.ReactiveFormsModule, typeof i180.OverlayModule, typeof i181.ShareModule, typeof i182.HotkeyModule, typeof i183.ColorPickerModule, typeof i184.NgxHmCarouselModule, typeof i185.FullCalendarModule, typeof i186.DndModule, typeof i187.NgxFlowModule, typeof i188.NgxFlowchartModule, typeof i189.MarkdownModule], [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.TbHotkeysDirective, typeof i8.TbAnchorComponent, typeof i10.TbStringTemplateOutletDirective, typeof i11.TbComponentOutletDirective, typeof i9.TbPopoverDirective, typeof i12.TbMarkdownComponent, typeof i13.HelpComponent, typeof i14.HelpMarkdownComponent, typeof i15.HelpPopupComponent, typeof i16.TbCheckboxComponent, typeof i17.TbErrorComponent, typeof i18.TbCheatSheetComponent, typeof i19.BreadcrumbComponent, typeof i20.UserMenuComponent, typeof i21.TimewindowComponent, typeof i22.TimewindowPanelComponent, typeof i23.TimeintervalComponent, typeof i24.QuickTimeIntervalComponent, typeof i25.DashboardSelectComponent, typeof i27.DatetimePeriodComponent, typeof i28.DatetimeComponent, typeof i29.TimezoneSelectComponent, typeof i31.DashboardAutocompleteComponent, typeof i32.DashboardStateAutocompleteComponent, typeof i33.EntitySubTypeAutocompleteComponent, typeof i34.EntitySubTypeSelectComponent, typeof i35.EntitySubTypeListComponent, typeof i36.EntityAutocompleteComponent, typeof i37.EntityListComponent, typeof i38.EntityTypeSelectComponent, typeof i39.EntitySelectComponent, typeof i40.EntityGroupAutocompleteComponent, typeof i41.OwnerAutocompleteComponent, typeof i42.EntityGroupSelectComponent, typeof i43.EntityGroupListComponent, typeof i44.EdgeEntityGroupListComponent, typeof i45.OriginatorSelectComponent, typeof i46.EntityKeysListComponent, typeof i47.EntityListSelectComponent, typeof i48.EntityTypeListComponent, typeof i49.QueueAutocompleteComponent, typeof i50.RelationTypeAutocompleteComponent, typeof i51.SocialSharePanelComponent, typeof i52.StringItemsListComponent, typeof i53.JsonObjectEditComponent, typeof i54.JsonObjectViewComponent, typeof i55.JsonContentComponent, typeof i56.JsFuncComponent, typeof i57.CssComponent, typeof i58.HtmlComponent, typeof i59.FabTriggerDirective, typeof i59.FabActionsDirective, typeof i94.TbJsonToStringDirective, typeof i59.FabToolbarComponent, typeof i60.WidgetsBundleSelectComponent, typeof i30.ValueInputComponent, typeof i142.MatBadgeModule, typeof i143.MatButtonModule, typeof i144.MatButtonToggleModule, typeof i145.MatCheckboxModule, typeof i146.MatIconModule, typeof i147.MatCardModule, typeof i148.MatProgressBarModule, typeof i149.MatInputModule, typeof i150.MatSnackBarModule, typeof i151.MatSidenavModule, typeof i152.MatToolbarModule, typeof i153.MatMenuModule, typeof i154.MatGridListModule, typeof i155.MatDialogModule, typeof i156.MatSelectModule, typeof i157.MatTooltipModule, typeof i158.MatTableModule, typeof i159.MatPaginatorModule, typeof i160.MatSortModule, typeof i161.MatProgressSpinnerModule, typeof i162.MatDividerModule, typeof i163.MatTabsModule, typeof i164.MatRadioModule, typeof i165.MatSlideToggleModule, typeof i166.MatDatepickerModule, typeof i167.MatNativeDatetimeModule, typeof i167.MatDatetimepickerModule, typeof i168.NgxDaterangepickerMd, typeof i169.MatSliderModule, typeof i170.MatExpansionModule, typeof i171.MatStepperModule, typeof i172.MatAutocompleteModule, typeof i173.MatChipsModule, typeof i174.MatListModule, typeof i175.DragDropModule, typeof i176.GridsterModule, typeof i177.ClipboardModule, typeof i178.FlexLayoutModule, typeof i179.FormsModule, typeof i179.ReactiveFormsModule, typeof i180.OverlayModule, typeof i181.ShareModule, typeof i182.HotkeyModule, typeof i183.ColorPickerModule, typeof i184.NgxHmCarouselModule, typeof i190.EditorModule, typeof i185.FullCalendarModule, typeof i186.DndModule, typeof i188.NgxFlowchartModule, typeof i189.MarkdownModule, typeof i61.ConfirmDialogComponent, typeof i62.AlertDialogComponent, typeof i63.ErrorAlertDialogComponent, typeof i64.ProgressDialogComponent, typeof i65.TodoDialogComponent, typeof i66.ColorPickerDialogComponent, typeof i67.MaterialIconsDialogComponent, typeof i68.ColorInputComponent, typeof i69.MaterialIconSelectComponent, typeof i70.NodeScriptTestDialogComponent, typeof i71.JsonFormComponent, typeof i72.ImageInputComponent, typeof i73.MultipleImageInputComponent, typeof i74.FileInputComponent, typeof i75.MessageTypeAutocompleteComponent, typeof i76.KeyValMapComponent, typeof i77.NavTreeComponent, typeof i78.LedLightComponent, typeof i79.MarkdownEditorComponent, typeof i80.NospacePipe, typeof i81.MillisecondsToTimeStringPipe, typeof i82.EnumToArrayPipe, typeof i83.HighlightPipe, typeof i84.TruncatePipe, typeof i85.TbJsonPipe, typeof i92.KeyboardShortcutPipe, typeof i86.FileSizePipe, typeof i87.DateAgoPipe, typeof i88.ImagePipe, typeof i89.SafePipe, typeof i90.ShortNumberPipe, typeof i91.SelectableColumnsPipe, typeof i140.RouterModule, typeof i93.HasGenericPermissionPipe, typeof i93.HasEntityGroupPermissionPipe, typeof i93.HasGroupEntityPermissionPipe, typeof i93.HasGroupEntityOrGenericPermissionPipe, typeof i141.TranslateModule, typeof i95.JsonObjectEditDialogComponent, typeof i96.HistorySelectorComponent, typeof i97.EntityGatewaySelectComponent, typeof i98.ContactComponent, typeof i99.WidgetsBundleSearchComponent, typeof i100.GroupPermissionsComponent, typeof i101.GroupPermissionDialogComponent, typeof i102.ShareEntityGroupComponent, typeof i103.OtaPackageAutocompleteComponent, typeof i99.WidgetsBundleSearchComponent, typeof i104.CopyButtonComponent, typeof i105.TogglePasswordComponent, typeof i106.ProtobufContentComponent, typeof i107.BranchAutocompleteComponent, typeof i108.PhoneInputComponent, typeof i109.TbSparkLineComponent, typeof i110.TbScriptLangComponent, typeof i111.NotificationComponent, typeof i112.TemplateAutocompleteComponent, typeof i113.SlackConversationAutocompleteComponent, typeof i114.MdLgLayoutDirective, typeof i114.MdLgLayoutAlignDirective, typeof i114.MdLgLayoutGapDirective, typeof i114.MdLgShowHideDirective, typeof i114.GtMdLgLayoutDirective, typeof i114.GtMdLgLayoutAlignDirective, typeof i114.GtMdLgLayoutGapDirective, typeof i114.GtMdLgShowHideDirective, typeof i115.ThemeColorSelectComponent, typeof i116.ColorPickerComponent, typeof i117.ColorPickerPanelComponent, typeof i118.ResourceAutocompleteComponent, typeof i119.ToggleHeaderComponent, typeof i119.ToggleOption, typeof i120.ToggleSelectComponent, typeof i121.UnitInputComponent, typeof i122.StringAutocompleteComponent, typeof i123.MaterialIconsComponent, typeof i124.RuleChainSelectComponent, typeof i125.TbIconComponent, typeof i126.HintTooltipIconComponent, typeof i127.ImportDialogComponent, typeof i128.ImportDialogCsvComponent, typeof i129.ExportWidgetsBundleDialogComponent, typeof i130.TableColumnsAssignmentComponent, typeof i131.ScrollGridComponent, typeof i132.ImageGalleryComponent, typeof i133.UploadImageDialogComponent, typeof i134.ImageDialogComponent, typeof i135.ImageReferencesComponent, typeof i136.ImagesInUseDialogComponent, typeof i137.GalleryImageInputComponent, typeof i138.MultipleGalleryImageInputComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SharedModule>;
}
