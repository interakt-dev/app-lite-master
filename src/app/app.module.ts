import { AngularFireDatabase } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListDetailPage } from '../pages/list-detail/list-detail';
import { LoginPage } from '../pages/login/login';
import { PagamentoPage } from '../pages/pagamento/pagamento';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { environment } from '../environment/environment';
import { GoogleMaps } from '@ionic-native/google-maps';

import { UsersProvider } from '../providers/users/users';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage,
	PagamentoPage,
    ListDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage,
	PagamentoPage,
    ListDetailPage
  ],
  providers: [
    AngularFireDatabase,
    GoogleMaps,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider    
  ]
})
export class AppModule {}
