'use strict'

const BaseException = use('App/Exceptions/BaseException')
const ApiResponse = use('Response/ResponseProvider')

class NotFoundException extends BaseException {
    /**
     * Handle this exception by itself
     */
    handle (error, { response, request }) {
        return response
            .status(this.status)
            .json(ApiResponse.getErrorObject(request, this.message, this.error, this.status));
    }
}

module.exports = NotFoundException
