import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnchorModalComponent } from './anchor-modal/anchor-modal.component';
import { BetaModalComponent } from './beta-modal/beta-modal.component';
import { PicModalComponent } from './pic-modal/pic-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnchorModalComponent,
    BetaModalComponent,
    PicModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
