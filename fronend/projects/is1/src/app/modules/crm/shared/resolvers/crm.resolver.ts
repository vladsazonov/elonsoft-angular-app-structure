import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Store } from '@ngxs/store';

import { Observable } from 'rxjs';

import { FetchComplex } from '../../state/complex.actions';

@Injectable()
export class ComplexResolver implements Resolve<any> {
  constructor(private store: Store, private location: Location) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const complexId = +route.paramMap.get('id');

    const url = this.location.path();
    const listingId = +url.split('/')[2];

    return this.store.dispatch(new FetchComplex(listingId, complexId));
  }
}
