import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'deals',
    pathMatch: 'full',
    canLoad: [NgxPermissionsGuard],
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [
          'internal_owner',
          'internal_sales_director',
          'internal_sales_department_head',
          'internal_mortgage_department_head',
          'internal_sales_department_manager',
          'internal_mortgage_specialist',
          'internal_financial_monitoring',
          'internal_financial_monitoring_head',
          'internal_bookkeeper',
          'franchisee_owner',
          'franchisee_sales_director',
          'franchisee_sales_department_head',
          'franchisee_mortgage_department_head',
          'franchisee_sales_department_manager',
          'franchisee_mortgage_specialist',
          'franchisee_financial_monitoring',
          'franchisee_financial_monitoring_head',
          'franchisee_bookkeeper'
        ],
        redirectTo: '/'
      }
    }
  },
  {
    path: 'tags',
    loadChildren: () => import('./modules/tags/tags.module').then(m => m.TagsModule),
    canLoad: [NgxPermissionsGuard],
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [
          'internal_owner',
          'internal_sales_director',
          'internal_sales_department_head',
          'internal_mortgage_department_head'
        ],
        redirectTo: '/'
      }
    }
  },
  {
    path: 'contacts',
    loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule),
    canLoad: [NgxPermissionsGuard],
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [
          'internal_owner',
          'internal_sales_director',
          'internal_sales_department_head',
          'internal_mortgage_department_head',
          'internal_financial_monitoring',
          'internal_financial_monitoring_head',
          'franchisee_owner',
          'franchisee_sales_director',
          'franchisee_sales_department_head',
          'franchisee_mortgage_department_head',
          'franchisee_financial_monitoring',
          'franchisee_financial_monitoring_head'
        ],
        redirectTo: '/'
      }
    }
  },
  {
    path: 'deals',
    loadChildren: () => import('./modules/deals/deals.module').then(m => m.DealsModule),
    canLoad: [NgxPermissionsGuard],
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [
          'internal_owner',
          'internal_sales_director',
          'internal_sales_department_head',
          'internal_mortgage_department_head',
          'internal_sales_department_manager',
          'internal_mortgage_specialist',
          'internal_financial_monitoring',
          'internal_financial_monitoring_head',
          'internal_bookkeeper',
          'franchisee_owner',
          'franchisee_sales_director',
          'franchisee_sales_department_head',
          'franchisee_mortgage_department_head',
          'franchisee_sales_department_manager',
          'franchisee_mortgage_specialist',
          'franchisee_financial_monitoring',
          'franchisee_financial_monitoring_head',
          'franchisee_bookkeeper'
        ],
        redirectTo: '/'
      }
    }
  },
  {
    path: 'tasks',
    loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule),
    canLoad: [NgxPermissionsGuard],
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [
          'internal_owner',
          'internal_sales_director',
          'internal_sales_department_head',
          'internal_mortgage_department_head',
          'internal_sales_department_manager',
          'internal_mortgage_specialist',
          'internal_financial_monitoring',
          'internal_financial_monitoring_head',
          'internal_bookkeeper',
          'franchisee_owner',
          'franchisee_sales_director',
          'franchisee_sales_department_head',
          'franchisee_mortgage_department_head',
          'franchisee_sales_department_manager',
          'franchisee_mortgage_specialist',
          'franchisee_financial_monitoring',
          'franchisee_financial_monitoring_head',
          'franchisee_bookkeeper'
        ],
        redirectTo: '/'
      }
    }
  },
  {
    path: 'analytics',
    loadChildren: () => import('./modules/analytics/analytics.module').then(m => m.AnalyticsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule {}
