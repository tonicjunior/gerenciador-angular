import { NgModule } from '@angular/core';
import {
  ErrorStateMatcher, MAT_DATE_LOCALE, MAT_LABEL_GLOBAL_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatDividerModule,
  MatIconModule, MatInputModule,
  MatListModule, MatNativeDateModule, MatPaginatorIntl, MatSelectModule,
  MatSidenavModule, MatSnackBarModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule,
  MatTooltipModule, ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorBR} from './MatPaginatorBR';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
 imports: [
   MatInputModule,
   MatTableModule,
   MatButtonModule,
   MatIconModule,
   MatCardModule,
   MatDividerModule,
   MatSnackBarModule,
   MatSelectModule,
   MatDialogModule,
   MatPaginatorModule,
   MatTooltipModule,
   MatListModule,
   MatToolbarModule,
   MatButtonModule,
   MatSidenavModule,
   MatListModule,
   MatTooltipModule,
   MatTableModule,
   MatPaginatorModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatMenuModule,
   MatTabsModule
 ],
 exports: [
   MatTabsModule,
   MatInputModule,
   MatTableModule,
   MatButtonModule,
   MatIconModule,
   MatCardModule,
   MatDividerModule,
   MatSnackBarModule,
   MatSelectModule,
   MatDialogModule,
   MatPaginatorModule,
   MatTooltipModule,
   MatListModule,
   MatToolbarModule,
   MatToolbarModule,
   MatButtonModule,
   MatSidenavModule,
   MatListModule,
   MatTooltipModule,
   MatTableModule,
   MatPaginatorModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatMenuModule

 ],
 declarations: [],
 providers: [
   {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}},
   {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
   {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
   {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},


   {provide: MatPaginatorIntl, useClass: MatPaginatorBR}
 ],
})
export class MaterialModule { }
