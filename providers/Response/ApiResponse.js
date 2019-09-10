'use strict'

const Env = use('Env')

class ApiResponse {
    getErrorObject(request, message, err, status) {
        const { poweredBy } = this.getPoweredBy(request)

        let error = '';

        if (['development'].indexOf(Env.get('NODE_ENV')) > -1) {
            error = `${err.name}: ${err.message}`;
        }

        return {
            message,
            error,
            status,
            poweredBy,
        }
    }

    getDefaultError() {
        return {
            name: 'DefaultError',
            message: 'Something unexpected has occurred',
        }
    }

    isErrorType(error) {
        if (!error || typeof error !== 'object') {
            return false;
        }

        if (!error.name && !error.message) {
            return false
        }

        return true;
    }
}

module.exports = ApiResponse;
