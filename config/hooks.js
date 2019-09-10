'use strict'

const { hooks } = require('@adonisjs/ignitor')

hooks.after.httpServer(() => {
    const Response = use('Adonis/Src/Response')

    Response.macro('getSuccess', function (data, message = 'Request made successfully')  {
        const status = 200;
        this.status(status).send({
            status,
            message,
            data,
        })
    })
})
