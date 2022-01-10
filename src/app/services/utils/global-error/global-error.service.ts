
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorService implements ErrorHandler {
  handleError(error: any) {
    console.error('Global Error:', error);
    alert(`Something possibly wrong happened: ${error?.toString() || 'Cannot transform error to a readable form'}`)
  }
}