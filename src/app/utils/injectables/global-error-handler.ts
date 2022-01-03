
import { ErrorHandler, Injectable } from '@angular/core';
import { handleError as handleErrorUtil } from '../error';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  handleError(error: any) {
    handleErrorUtil(error)
  }
}