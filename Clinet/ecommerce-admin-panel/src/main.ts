import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router'; 
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptor } from './app/auth/auth.interceptor'; 
import { BaseChartDirective   } from 'ng2-charts';

import { appRoutes } from './app/app.routes';  

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(appRoutes), // ✅ Use correct array here
    importProvidersFrom(BrowserAnimationsModule,BaseChartDirective  )
  ]
});
