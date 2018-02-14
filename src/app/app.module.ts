import { CurComponentService } from './cur-component.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MomentModule } from 'angular2-moment/moment.module';
import {CalendarComponent} from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { FullCalendarModule } from 'ng-fullcalendar';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule , MatButtonModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { StartComponent } from './start/start.component';
import { ContainerBasicsComponent } from './container-basics/container-basics.component';
import { BasicRowColumnComponent } from './basic-row-column/basic-row-column.component';
import { ReversedRowColumnComponent } from './reversed-row-column/reversed-row-column.component';
import { MainCrossAxisComponent } from './main-cross-axis/main-cross-axis.component';
import { JustifyingContentComponent } from './justifying-content/justifying-content.component';
import { GapAndWrapComponent } from './gap-and-wrap/gap-and-wrap.component';
import { ItemsAndAlignmentComponent } from './items-and-alignment/items-and-alignment.component';
import { HolyGrailComponent } from './holy-grail/holy-grail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BsDatepickerModule.forRoot(),
        ButtonsModule.forRoot(),
        ModalModule.forRoot(),
        FlexLayoutModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MomentModule ,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        routedComponents,
        StartComponent,
        ContainerBasicsComponent,
        BasicRowColumnComponent,
        ReversedRowColumnComponent,
        MainCrossAxisComponent,
        JustifyingContentComponent,
        GapAndWrapComponent,
        ItemsAndAlignmentComponent,
        HolyGrailComponent
    ],
    providers: [
        CurComponentService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
