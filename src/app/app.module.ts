import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';

import { DialogContentExampleDialog, GridsComponent } from './grids/grids.component';

import { FooterbarsComponent } from './navBars/footerbars/footerbars.component';
import { LeftnavigationComponent } from './navBars/leftnavigation/leftnavigation.component';
import { TopmenuComponent } from './navBars/topmenu/topmenu.component';
import { HomeComponent } from './home/home.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { MiningComponent } from './charts/mining/mining.component';
import { ConstructionComponent } from './charts/construction/construction.component';
import { WaterEnergyComponent } from './charts/water-energy/water-energy.component';
import { HttpServiceService } from './Service/http-service.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonServiceService } from './Service/common-service.service';
import { HttpConfigInterceptor } from './Service/http-interceptor.service';
import { CreateProjectComponent, DialogDataExampleDialog } from './create-project/create-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutprojectComponent } from './aboutproject/aboutproject.component';
import { SubMenuComponent } from './navBars/sub-menu/sub-menu.component';


@NgModule({
  declarations: [
    DialogDataExampleDialog,
    
    AppComponent,
    DialogContentExampleDialog,
    GridsComponent,
    FooterbarsComponent,
    LeftnavigationComponent,
    TopmenuComponent,
    HomeComponent,
    MiningComponent,
    ConstructionComponent,
    WaterEnergyComponent,
    CreateProjectComponent,
    AboutprojectComponent,
    SubMenuComponent
   
   
  ],
  imports: [
   
    NgxChartsModule ,
    ReactiveFormsModule,
    HttpClientModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    
  ],
  providers: [HttpServiceService,CommonServiceService,{provide: HTTP_INTERCEPTORS,
    useClass: HttpConfigInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
