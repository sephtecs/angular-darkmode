import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginComponent } from './components/login/login.component';

import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PopulateFeedComponent } from './components/populate-feed/populate-feed.component';
import { ViewProfileComponentComponent } from './components/view-profile-component/view-profile-component.component';
<<<<<<< HEAD
import { TopComponent } from './components/top/top.component';
import { ImageService } from './services/image.service';
import { DatePipe } from './pipes/date.pipe';

=======
import { EditUserProfileComponent } from './components/edit-user-profile/edit-user-profile.component';
>>>>>>> 1a14c4a (Created edit-user-profile component, imported and declared it in app.module)


@NgModule({
  declarations: [
    AppComponent,
    PostFeedComponent,
    CreatePostComponent,
    PopulateFeedComponent,
    ViewProfileComponentComponent,
<<<<<<< HEAD
    RegisterFormComponent,
    LoginComponent,
    TopComponent,
    DatePipe,
=======
    EditUserProfileComponent
>>>>>>> 1a14c4a (Created edit-user-profile component, imported and declared it in app.module)
  ],
  
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
