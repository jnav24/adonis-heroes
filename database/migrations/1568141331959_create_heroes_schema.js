'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateHeroesSchema extends Schema {
    up () {
        this.create('heroes', (table) => {
            table.increments()
            table.string('name')
            table.string('alias')
            table.string('gender')
            table.string('species')
            table.string('universe')
            table.string('slug')
            table.string('image')
            table.text('description')
            table.timestamps()
        })
    }

    down () {
        this.drop('create_heroes')
    }
}

module.exports = CreateHeroesSchema
