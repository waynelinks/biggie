import { ValidationError } from 'express-validator'

import { CustomError } from './CustomError'
import { BAD_REQUEST } from './responseCodes'

export class RequestValidationError extends CustomError {
  statusCode = BAD_REQUEST

  constructor(public errors: ValidationError[]) {
    super('Invalid Credentials!')

    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }

  serializeErrors() {
    return this.errors.map((err) => ({ message: err.msg, field: err.param }))
  }
}
