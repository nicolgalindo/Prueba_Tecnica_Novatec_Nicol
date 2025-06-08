import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './components/marketplace/components/marketplace/marketplace.component';

const routes: Routes = [
  {
    path:'marketplace',
    component: MarketplaceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
