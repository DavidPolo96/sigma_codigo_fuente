import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistryComponent } from './components/registry/registry.component';


const routes: Routes = [
	{ path: 'registry', component:  RegistryComponent },
	{ path: '',   redirectTo: '/registry', pathMatch: 'full' },
	{ path: '**', component: RegistryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
