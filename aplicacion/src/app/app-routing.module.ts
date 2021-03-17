
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { MessageComponent } from './message/message.component';

const routes: Routes =
  [
    {
      path: 'home',
      component: RootComponent
    },
    {
      path: 'message',
      component: MessageComponent
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
