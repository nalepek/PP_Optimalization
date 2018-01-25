import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ValuesFormComponent } from './values-form/values-form.component';
import { KeysPipe } from './keys.pipe';
import { ValuesPipe } from './values.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ValuesFormComponent,
    KeysPipe,
    ValuesPipe
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
