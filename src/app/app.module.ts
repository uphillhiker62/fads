import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogOutComponent } from './log-out/log-out.component';
import {UserProfileService} from './user-profile/user-profile.service';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';

@NgModule({
 declarations: [
   AppComponent,
   SideNavComponent,
   HomeComponent,
   ProductsComponent,
   UserProfileComponent,
   ContactUsComponent,
   LogOutComponent
 ],
 imports: [
   BrowserModule,
   MatInputModule,
   MatFormFieldModule,
   FormsModule,
   MatCardModule,
   HttpClientModule,
   MatSidenavModule,
   NoopAnimationsModule,
   BrowserAnimationsModule,
   MatButtonModule,
   MatTabsModule,
   RouterModule.forRoot(
     [
       {path: 'home', component: HomeComponent},
       { path: 'products', component: ProductsComponent},
       { path: 'profile', component: UserProfileComponent},
       { path: 'contact', component: ContactUsComponent},
       { path: 'logout', component: LogOutComponent}
     ])
 ],
 providers: [
   UserProfileService
 ],
 bootstrap: [AppComponent]
})
export class AppModule { }