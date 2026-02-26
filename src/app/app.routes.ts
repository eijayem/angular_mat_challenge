import { Routes } from '@angular/router';
import { TemplateDemo } from './template-demo/template-demo';
import { ReactiveDemo } from './reactive-demo/reactive-demo';
import { CustomDemo } from './custom-demo/custom-demo';
import { Register } from './register/register';
import { NewRegister } from './new-register/new-register';

export const routes: Routes = [
  { path: '', redirectTo: 'template-demo', pathMatch: 'full' },
  { path: 'template-demo', component: TemplateDemo },
  { path: 'reactive-demo', component: ReactiveDemo },
  { path: 'custom-demo', component: CustomDemo },
  { path: 'register', component: Register },
  { path: 'new-register', component: NewRegister },

];
