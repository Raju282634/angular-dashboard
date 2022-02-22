import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import { AreaWidgetComponent } from './widgets/area-widget/area-widget.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardWidgetComponent } from './widgets/card-widget/card-widget.component';
import { TableWidgetComponent } from './widgets/table-widget/table-widget.component';
import { PieWidgetComponent } from './widgets/pie-widget/pie-widget.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaWidgetComponent,
    CardWidgetComponent,
    TableWidgetComponent,
    PieWidgetComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaWidgetComponent,
    CardWidgetComponent,
    TableWidgetComponent
  ],
})
export class SharedModule { }
