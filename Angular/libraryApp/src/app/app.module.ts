import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[CoreModule]
})
export class AppModule { }
