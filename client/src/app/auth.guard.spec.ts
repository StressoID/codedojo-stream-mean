import { async, inject, TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

describe('AuthGuard', () => {


  let store = {};
  beforeEach(() => {
    store = {};
    spyOn(localStorage, 'getItem').and.callFake((key: string): string => {
   		return JSON.stringify(store[key]) || null;
  	});
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard],
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('not have user in localStorage ', inject([AuthGuard, Router], (guard: AuthGuard, router: Router) => {

  	spyOn(router, 'navigate');

  	expect(guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)).toBeFalsy();
    expect(router.navigate).toHaveBeenCalledWith(['']);

  }));

  it('route to / page when localStorage contain user ', inject([AuthGuard, Router], (guard: AuthGuard, router: Router) => {

  	store['user'] = 'Dyadya vanya';

  	spyOn(router, 'navigate');

  	expect(guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)).toBeTruthy();
    expect(router.navigate).not.toHaveBeenCalled();
  }));
});
