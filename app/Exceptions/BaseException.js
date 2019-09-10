'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')
const ApiResponse = use('Response/ResponseProvider')

class BaseException extends LogicalException {
    constructor(message, error = null, status = 401, code = '') {
        super(message, status, code);
        this.message = message;
        this.error = !ApiResponse.isErrorType(error) ? ApiResponse.getDefaultError() : error;
        this.status = 401;
        this.code = code;
    }
}

module.exports = BaseException
