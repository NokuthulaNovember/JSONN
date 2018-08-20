import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CoursesProvider } from '../providers/courses/courses';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { CoursePage } from '../pages/course/course';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CoursePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CoursePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CoursePage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoursesProvider
  ]
})
export class AppModule {}
