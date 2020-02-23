import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'bulk-payment',
    loadChildren: () => import('./bulk-payment/bulk-payment.module').then(m => m.BulkPaymentModule ),
  },
  { path: 'overview-page',
    loadChildren: () => import('./overview-page/overview.module').then(m => m.OverviewModule),
  },
  { path: '',
    redirectTo: '/overview-page',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
