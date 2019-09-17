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
                    "slug": "batman",
                    "alias": "Bruce Wayne",
                    "gender": "Male",
                    "species": "Human",
                    "universe": "DC",
                    "image": 'https://vignette.wikia.nocookie.net/marvel_dc/images/a/a6/Batman_Vol_2_2_Variant_Textless.jpg/revision/latest?cb=20120228075313',
                    "description": "Batman is the superhero protector of Gotham City, a man dressed like a bat who fights against evil and strikes terror into the hearts of criminals everywhere. In his secret identity he is Bruce Wayne, billionaire industrialist and notorious playboy. Although he has no superhuman powers, he is one of the world's smartest men and greatest fighters. His physical prowess and technical ingenuity make him an incredibly dangerous opponent. He is also a founding member of the Justice League.",
                },
                {
                    "name": "Wolverine",
                    "alias": "Logan",
                    "gender": "Male",
                    "species": "Mutant",
                    "universe": "Marvel",
                    "slug": "wolverine",
                    "image": "https://upload.wikimedia.org/wikipedia/en/c/c8/Marvelwolverine.jpg",
                    "description": "From the northern wilderness of Canada hails one of the gruffest, most irascible, totally cynical and brooding member of the X-Men ever to grace the team with his presence. A mutant with an unstoppable healing power, adamantium metal claws and no-nonsense attitude makes the man called Logan, one of the most ferocious heroes in the universe.",
                },
                {
                    "name": "Superman",
                    "alias": "Clark Kent",
                    "gender": "Male",
                    "species": "Kryptonian",
                    "universe": "DC",
                    "slug": "superman",
                    "image": "https://vignette.wikia.nocookie.net/marvel_dc/images/a/a8/Action_Comics_Vol_1_1000_Textless.jpg/revision/latest?cb=20180411074920",
                    "description": "Superman is the last son of Krypton, sent as the dying planet's last hope to Earth, where he grew to become its protector. Though he was apparently killed shortly after the Darkseid War, his essence merged with the New Earth Superman in Rebirth, creating a new, merged timeline for Superman.",
                },
                {
                    "name": "Captain America",
                    "alias": "Steve Rogers",
                    "gender": "Male",
                    "species": "Human",
                    "universe": "Marvel",
                    "slug": "captain-america",
                    "image": "https://vignette.wikia.nocookie.net/marveldatabase/images/b/b1/Captain_America_Vol_6_2_Textless.jpg/revision/latest/scale-to-width-down/658?cb=20110719042719",
                    "description": "From the dark days of world war to the explosive challenges of today, Super-Soldier Captain America stands ready as a shining sentinel of liberty to shield the oppressed and fight for freedom everywhere. Captain America is a ultimate main protagonist patriotic superhero from Marvel comics who fought against Red Skull during WWII as part of a secret Super-Soldier Serum experiment - he was revived in the modern age by the Avengers and became their leader as a champion of the ideals of truth, justice and the American way.",
                },
                {
                    "name": "Wonder Woman",
                    "alias": "Diana of Themyscira",
                    "gender": "Female",
                    "species": "Demigod",
                    "universe": "DC",
                    "slug": "wonder-woman",
                    "image": "https://vignette.wikia.nocookie.net/marvel_dc/images/c/cc/Wonder_Woman_Vol_5_4_Textless.jpg/revision/latest/scale-to-width-down/688?cb=20160810132845",
                    "description": "Wonder Woman is the princess Diana, the daughter of Hippolyta, Queen of the Amazons, and Zeus, the mightiest of the Gods of Olympus. Diana volunteered to leave behind her home of Themyscira and champion the Amazons' message of peace, fighting for justice and equality in Man's World. She is a founding member of the Justice League.",
                },
                {
                    "name": "DareDevil",
                    "alias": "Matt Murdock",
                    "gender": "Male",
                    "species": "Human",
                    "universe": "Marvel",
                    "slug": "daredevil",
                    "image": "https://vignette.wikia.nocookie.net/marveldatabase/images/7/75/Daredevil_Vol_4_1_Marvel_Comics_75th_Anniversary_Variant_Textless.jpg/revision/latest/scale-to-width-down/648?cb=20131212205421",
                    "description": "As a boy, Matt Murdock lost his sight—and gained superhuman senses—in an accident that taught him to live without fear. He went on to study law, leading him to a life of crime fighting in New York; as both a lawyer and as the vigilante Daredevil. Matt Murdock grew up in New York City in Hell's Kitchen, as such crime and poverty were everyday sights for him. Matt was born into poverty however his father, Jack, worked tirelessly as a boxer to save up for Matt's future to give him a life, leaving Matt with a decent college fund considering his home-life. As a result of his fathers tireless efforts Matt applied himself to the study of law. One day Matt saw a blind man in his neighborhood about to be hit by a truck and pushed him out of the way. The man was saved but the truck spilled some of it's cargo, toxic waste as it turned out, and hitting Matt, blinding him. Though Matt got prompt medical attention the damage to his eyes was extensive and he was permanently blind.",
                },
                {
                    "name": "Spider-man",
                    "alias": "Peter Parker",
                    "gender": "Male",
                    "species": "Human",
                    "universe": "Marvel",
                    "slug": "spider-man",
                    "image": "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
                    "description": "As a result of a radioactive spider bite, high schooler Peter Parker developed powers and abilities similar to that of a spider. After Peter's selfishness indirectly resulted in the death of his beloved Uncle Ben, Peter decided to live up to the motto that \"With great power there must also come great responsibility,\" and thus became the superhero known as Spider-Man.",
                },
                {
                    "name": "Miss Martian",
                    "alias": "M'gann M'orzz",
                    "gender": "Female",
                    "species": "Martian",
                    "universe": "DC",
                    "slug": "miss-martian",
                    "image": "https://vignette.wikia.nocookie.net/marvel_dc/images/9/97/Megan_Morse.jpg/revision/latest?cb=20121228175112",
                    "description": "Miss Martian is the younger female counterpart to Martian Manhunter, a super-hero active as a member of the Teen Titans. She is a member of the malevolent White Martians race unlike her Green Martian predecessor, although she works hard to prove herself and discredit the stereotype. In her civilian identity, she is high-school student Megan Morse.",
                },
                {
                    "name": "Jean Grey",
                    "alias": "Jean Grey-Summers",
                    "gender": "Female",
                    "species": "Mutant",
                    "universe": "Marvel",
                    "slug": "jean-grey",
                    "image": "https://vignette.wikia.nocookie.net/marveldatabase/images/b/bd/X-Men_Vol_5_1_Artgerm_Virgin_Variant.jpg/revision/latest/scale-to-width-down/250?cb=20190904135528",
                    "description": "As a founding member of the X-Men, Jean Grey has been fighting for the peaceful coexistence of mutants and humans, as Marvel Girl and later Phoenix, most of her life. While piloting a spacecraft back to Earth, Jean was saved by the Phoenix Force and placed in a cocoon to heal, while the Phoenix impersonated her. After returning, Jean joined the founding members of X-Men in X-Factor and later became an X-Man once again.",
                },
                {
                    "name": "She-Hulk",
                    "alias": "Jennifer Walters",
                    "gender": "Female",
                    "species": "Human",
                    "universe": "Marvel",
                    "slug": "she-hulk",
                    "image": "https://vignette.wikia.nocookie.net/marveldatabase/images/b/be/Jennifer_Walters_%28Earth-616%29_from_Avengers_Vol_8_4_cover_001.jpg/revision/latest/scale-to-width-down/639?cb=20180920040815",
                    "description": "Lawyer Jennifer Walters was transformed into a Gamma-powered Super Hero thanks to her cousin Bruce Banner, and backs up her sensational strength with her savage wit and confidence. Jennifer Walters was originally a lawyer who was injured in a shooting resulting from gangland violence. When her doctors determined she was in need of a blood transfusion to survive they contacted her cousin Bruce Banner to be a donor. Bruce Banner was trepidations about donating as he was hiding his identity as the Hulk and feared what his blood might do to Jennifer but with no other living relatives Bruce was literally the only person with compatible blood to save Jennifer without complications. With Jennifer's life at stake Bruce decided to risk it, hoping that his condition was not transferable. Once the transfer was complete there seemed to be no initial complications and Jennifer was brought out of critical condition.",
                },
                {
                    "name": "Gamora",
                    "alias": "Gamora Zen Whoberi Ben Titan",
                    "gender": "Female",
                    "species": "Zen-Whoberis",
                    "universe": "Marvel",
                    "slug": "gamora",
                    "image": "https://www.writeups.org/wp-content/uploads/Gamora-Marvel-Comics-Guardians-of-the-Galaxy-3-i.jpg",
                    "description": "After seeing the Zen-Whoberi people nearly completely wiped from existence by the Badoon, Thanos took the lone survivor and decided to turn her into the deadliest woman in the universe. That woman is Gamora, an incredibly adept student in the art of combat, war, and death, who has done both evil and good during her galaxy-wide travels. Among her victories: keeping reality safe alongside Adam Warlock, Infinity Watch, and the Guardians of the Galaxy, her current team-turned-family.",
                },
                {
                    "name": "Static",
                    "alias": "Virgil Hawkins",
                    "gender": "Male",
                    "species": "Human",
                    "universe": "DC",
                    "slug": "static",
                    "image": "https://vignette.wikia.nocookie.net/marvel_dc/images/4/47/Static_Shock_Vol_1_1_Textless.jpg/revision/latest/scale-to-width-down/658?cb=20160218185114",
                    "description": "Born and raised in Dakota City, Virgil Hawkins was a bright student, though his mouth often got him into trouble. He was the subject of much bullying at school, especially from Biz Money B. One of his friends, Larry Wade, suggested he could end the torment on the Big Bang, a scheduled meet of all major gangs. It went wrong when all present were exposed to a mysterious toxin that granted everyone super powers.",
                },
                {
                    "name": "Sersi",
                    "alias": "Sersi",
                    "gender": "Female",
                    "species": "Eternal",
                    "universe": "Marvel",
                    "slug": "sersi",
                    "image": "https://pbs.twimg.com/media/ECwvhHgVAAIcXkS.jpg",
                    "description": "Sersi is a member of the Eternals, a species diverted from humanity by experiments conducted by the Celestials one million years ago. Sersi is a fourth generation member of the Eternals , an evolutionary offshoot of prehistoric humans created by the Celestials. Sersi is the daughter of the Eternals Helios and Perse, and was probably born in Olympia, some time after the Great Cataclysm that destroyed the continents of Mu and Lemuria , during an extended period known as the Hyborian Age. At a young age, Sersi differed from her fellow Eternals in her desire to live amongst humans. It was during her time in ancient Mesopotamia that Sersi first met Captain America, who had traveled back in time. While Sersi still had the appearance of a child at this time, she was already thousands of years old.",
                },
                {
                    "name": "Jay Garrick",
                    "alias": "Jason Peter Garrick",
                    "gender": "Male",
                    "species": "Human",
                    "universe": "DC",
                    "slug": "jay-garrick",
                    "image": "https://vignette.wikia.nocookie.net/marvel_dc/images/c/c2/Flash_Jay_Garrick_0002.jpg/revision/latest?cb=20100510161228",
                    "description": "Jay Garrick is a speedster and the original super-hero known as The Flash. He was a Golden Age character who first appeared during World War II as a member of the Justice Society of America and the All-Star Squadron. His earliest adventures in Keystone City took place on Earth-Two, although he was introduced into mainstream continuity during the Crisis on Infinite Earths. Garrick's career inspired his successor, Barry Allen to become the second Flash. They teamed up on many occasions, along with Kid Flash and other members of the Flash Family. As one of the oldest surviving super-heroes, he continues to fight against evil and acts as a mentor to the younger generation. Joan Williams is his wife of many years whom he currently lives with.",
                },
                {
                    "name": "Raven",
                    "alias": "Raven",
                    "gender": "Female",
                    "species": "DemiDemon",
                    "universe": "DC",
                    "slug": "raven",
                    "image": "https://vignette.wikia.nocookie.net/marvel_dc/images/9/9a/Raven_Daughter_of_Darkness_Vol_1_1_Textless.jpg/revision/latest/scale-to-width-down/658?cb=20180124221528",
                    "description": "The woman later known as Raven was born of the demon Trigon, a demonic entity who had conquered many worlds and fathered many sons; however this was his first and (so far) only daughter. Trigon murdered the women who birthed his sons, however he allowed his daughter's mother Arella to live, believing that his daughter needed to be raised by a human in order to help her reshape the under-realms in his image.",
                },
                {
                    "name": "John Stewart",
                    "alias": "John Stewart",
                    "gender": "Male",
                    "species": "Human",
                    "universe": "DC",
                    "slug": "john-stewart",
                    "image": "https://vignette.wikia.nocookie.net/marvel_dc/images/3/37/Green_Lantern_The_Lost_Army_Vol_1_3_Variant_B.jpg/revision/latest/scale-to-width-down/660?cb=20150820004846",
                    "description": "John Stewart is one of Earth's Green Lanterns, the leader of the Green Lantern Corps and a member it's Honor Guard. He is noted for being an excellent sniper as well as a skilled architect. He is a marine soldier who was chosen by the corps to become a Green Lantern. As a kid, Stewart was a fan of comic books. His favorite superhero team was the Justice Guild. After an alien invasion, he and the world's greatest superheroes joined together to fight the aliens and became the Justice League. In one of his adventures, he learned the Justice Guild was from an alternate Earth",
                },
                {
                    "name": "Catwoman",
                    "alias": "Selina Kyle",
                    "gender": "Female",
                    "species": "Human",
                    "universe": "DC",
                    "slug": "catwoman",
                    "image": "https://vignette.wikia.nocookie.net/marvel_dc/images/e/e8/Catwoman_Vol_4_47_Textless.jpg/revision/latest/scale-to-width-down/666?cb=20160916171703",
                    "description": "Selina Kyle is Catwoman, a Gotham City expert thief who crossed paths with Batman on several occasions. Having largely left behind her villainous ways, she now operates as a frequent ally of the Batman Family. Selina Kyle's origins are obscure, though she is usually depicted as based in Gotham's red light district, implying a history of prostitution. She spent most of her life training herself to be a professional thief, robbing only high-profile targets instead of petty mugging. Because of her more-or-less harmless methods, Batman allows her to slip through the cracks.",
                },
                {
                    "name": "Blade",
                    "alias": "Eric Brooks",
                    "gender": "Male",
                    "species": "Dhampir",
                    "universe": "Marvel",
                    "slug": "blade",
                    "image": "https://vignette.wikia.nocookie.net/marveldatabase/images/5/57/Eric_Brooks_%28Earth-616%29_from_Avengers_Vol_8_12_001.jpg/revision/latest/scale-to-width-down/650?cb=20190202030107",
                    "description": "A human-vampire hybrid since his tragic birth, Blade has spent his long life seeking to rid the world of vampires like the one that killed his mother. Over the years, he has mastered his own style of fighting monsters of all kinds. Eric Brooks, the man later known as Blade, was born in 1929 in Soho, London, England, United Kingdom. His father, Lucas Cross, a member of the secret society the Order of Tyrana, sent his pregnant wife Tara to England before he was taken prisoner in Latveria. There she took the name Vanessa Brooks and found shelter with brothel owner Madame Vanity, another member of the Order of Tyrana. Experiencing labor complications, Tara was forced to seek a doctor's assistance.",
                },
                {
                    "name": "Black Cat",
                    "alias": "Felicia Hardy",
                    "gender": "Female",
                    "species": "Human",
                    "universe": "Marvel",
                    "slug": "black-cat",
                    "image": "https://vignette.wikia.nocookie.net/marveldatabase/images/f/fd/Amazing_Spider-Man_Vol_5_1_Crain_Exclusive_Black_Cat_Variant.jpg/revision/latest?cb=20180723081925",
                    "description": "A traumatic past and sly father push Black Cat into a life of crime, at which she excels thanks to her abilities. Felicia Hardy allies herself with Spider-Man for the common good and often sets aside her criminal activity to pursue a life of heroics. Though hurt by his rejection and briefly returning to her antagonistic ways, Black Cat eventually stayed heroic and she and Spider-Man maintained a solid friendship. Following his forgetting his marriage to Mary Jane, Spider-Man has begun seeing Black Cat romantically again.",
                },
                {
                    "name": "Starfire",
                    "alias": "Koriand'r",
                    "gender": "Female",
                    "species": "Tamaran",
                    "universe": "DC",
                    "slug": "starfire",
                    "image": "https://vignette.wikia.nocookie.net/marvel_dc/images/f/f8/Justice_League_Odyssey_Vol_1_4_Textless_Variant.jpg/revision/latest/scale-to-width-down/660?cb=20190103172022",
                    "description": "Koriand'r is an alien princess from the planet Tamaran who lived in peace and happiness until her home planet was conquered. Banished from Tamaran, Koriand'r was enslaved and experimented on, granting her extraordinary powers which she used to lead a rebellion and liberate herself and her fellow slaves from their captors. She became known throughout the cosmos as Starfire, and settled on Earth, where she became a member of the superhero teams the Outlaws and the Teen Titans.",
                }
            ])

    }
}

module.exports = HeroSeeder
