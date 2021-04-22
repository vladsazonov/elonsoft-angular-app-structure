import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorSnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  public showError(message: string, duration?: number): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, '', {
      duration: duration || duration === null ? duration : 5000,
      panelClass: 'error-snackbar'
    });
  }
}
