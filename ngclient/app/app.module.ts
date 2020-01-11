import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './character/detail/detail.component';
import { CharacterListComponent } from './character/list/list.component';
import { CharacterComponent } from './character/character.component';
import CharacterListService from './character/list/list.service';
import CharacterDetailService from './character/detail/detail.service';
import Service from './service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent,
    CharacterListComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'angular', component: CharacterComponent }
    ])
  ],
  providers: [
    CharacterListService,
    CharacterDetailService,
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
