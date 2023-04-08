import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApopupComponent } from './apopup/apopup.component';
import { BpopupComponent } from './bpopup/bpopup.component';
import { CpopupComponent } from './cpopup/cpopup.component';
import { NgxDragResizeModule } from 'ngx-drag-resize';
import { AngularDraggableModule } from 'ngx-draggable-resize';
import { PopAComponent } from './pop-a/pop-a.component';
import { PopBComponent } from './pop-b/pop-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ApopupComponent,
    BpopupComponent,
    CpopupComponent,
    PopAComponent,
    PopBComponent
  ],
  imports: [
    BrowserModule,
    NgxDragResizeModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
