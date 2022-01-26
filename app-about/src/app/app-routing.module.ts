import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmptyRouteComponent } from './empty-route/empty-route.component';

@NgModule({
  declarations: [EmptyRouteComponent],
  imports: [
    RouterModule.forRoot([{ path: '**', component: EmptyRouteComponent }]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  exports: [RouterModule],
})
export class AppRoutingModule {}
