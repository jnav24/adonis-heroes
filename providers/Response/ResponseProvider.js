'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class ResponseProvider extends ServiceProvider {
    /**
     * Register namespaces to the IoC container
     *
     * @method register
     *
     * @return {void}
     */
    register () {
        this.app.singleton('Response/ResponseProvider', () => {
            return new (require('./ApiResponse'))();
        });
    }

    /**
     * Attach context getter when all providers have
     * been registered
     *
     * @method boot
     *
     * @return {void}
     */
    boot () {
        //
    }
}

module.exports = ResponseProvider
