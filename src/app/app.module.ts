import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesService } from './services.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
const routes: Routes = []; // sets up routes constant where you define your routes
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    HomeComponent,
    EditPersonComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
