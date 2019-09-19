'use strict'

const BaseException = use('App/Exceptions/BaseException')
const ApiResponse = use('Response/ResponseProvider')

class ValidationException extends BaseException {
    handle(error, { request, response}) {
        return response
            .status(this.status)
            .json(ApiResponse.getErrorObject(request, this.message, this.error, this.status))
    }
}

module.exports = ValidationException
