import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { MessageComponent } from './message/message.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ChatService } from './core/chat.service';
import { DataService } from './core/data.service';
@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    MessageComponent,

  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,

  ],
  providers: [ChatService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
