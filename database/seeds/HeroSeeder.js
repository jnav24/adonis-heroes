'use strict'

/*
|--------------------------------------------------------------------------
| HeroSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class HeroSeeder {
    async run () {
        const heroes = await Database.table('heroes')
            .insert([
                {
                    "name": "Batman",
                    "alias": "Bruce Wayne",
                    "gender": "Male",
                    "species": "Human",
                    "universe": "DC"
                },
                {
                    "name": "Wolverine",
                    "alias": "Logan",
                    "gender": "Male",
                    "species": "Mutant",
                    "universe": "Marvel"
                },
                {
                    "name": "Superman",
                    "alias": "Clark Kent",
                    "gender": "Male",
                    "species": "Kryptonian",
                    "universe": "DC"
                },
                {
                    "name": "Captain America",
                    "alias": "Steve Rogers",
                    "gender": "Male",
                    "species": "Human",
                    "universe": "Marvel"
                },
                {
                    "name": "Wonder Woman",
                    "alias": "Diana of Themyscira",
                    "gender": "Female",
                    "species": "Demigod",
                    "universe": "DC"
                },
                {
                    "name": "DareDevil",
                    "alias": "Matt Murdock",
                    "gender": "Male",
                    "species": "Human",
                    "universe": "Marvel"
                },
                {
                    "name": "Spider-man",
                    "alias": "Peter Parker",
                    "gender": "Male",
                    "species": "Human",
                    "universe": "Marvel"
                },
                {
                    "name": "Miss Martian",
                    "alias": "M'gann M'orzz",
                    "gender": "Female",
                    "species": "Martian",
                    "universe": "DC"
                },
                {
                    "name": "Jean Grey",
                    "alias": "Jean Grey-Summers",
                    "gender": "Female",
                    "species": "Mutant",
                    "universe": "Marvel"
                },
                {
                    "name": "She-Hulk",
                    "alias": "Jennifer Walters",
                    "gender": "Female",
                    "species": "Human",
                    "universe": "Marvel"
                },
                {
                    "name": "Gamora",
                    "alias": "Gamora Zen Whoberi Ben Titan",
                    "gender": "Female",
                    "species": "Zen-Whoberis",
                    "universe": "Marvel"
                },
                {
                    "name": "Static",
                    "alias": "Virgil Hawkins",
                    "gender": "Male",
                    "species": "Human",
                    "universe": "DC"
                },
                {
                    "name": "Sersi",
                    "alias": "Sersi",
                    "gender": "Female",
                    "species": "Eternal",
                    "universe": "Marvel"
                },
                {
                    "name": "Jay Garrick",
                    "alias": "Jason Peter Garrick",
                    "gender": "Male",
                    "species": "Human",
                    "universe": "DC"
                },
                {
                    "name": "Raven",
                    "alias": "Raven",
                    "gender": "Female",
                    "species": "DemiDemon",
                    "universe": "DC"
                },
                {
                    "name": "John Stewart",
                    "alias": "John Stewart",
                    "gender": "Male",
                    "species": "Human",
                    "universe": "DC"
                },
                {
                    "name": "Catwoman",
                    "alias": "Selina Kyle",
                    "gender": "Female",
                    "species": "Human",
                    "universe": "DC"
                },
                {
                    "name": "Blade",
                    "alias": "Eric Brooks",
                    "gender": "Male",
                    "species": "Dhampir",
                    "universe": "Marvel"
                },
                {
                    "name": "Black Cat",
                    "alias": "Felicia Hardy",
                    "gender": "Female",
                    "species": "Human",
                    "universe": "Marvel"
                },
                {
                    "name": "Starfire",
                    "alias": "Koriand'r",
                    "gender": "Female",
                    "species": "Tamaran",
                    "universe": "DC"
                }
            ])

    }
}

module.exports = HeroSeeder
