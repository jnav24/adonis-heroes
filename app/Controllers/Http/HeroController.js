'use strict'

const BadRequestException = use('App/Exceptions/BadRequestException')
const ValidationException = use('App/Exceptions/ValidationException')
const User = use('App/Models/Hero')
const { validate } = use('Validator')

class HeroController {
    async index({ request, response }) {
        try {
            let users = await User.all();

            if (!users) {
                users = [];
            }

            return response.getSuccess({
                data: users,
            });
        } catch (error) {
            throw new BadRequestException(`Unable to retrieve heroes`, error);
        }
    }

    async show({ params, request, response }) {
        try {
            const rules = {
                id: 'required|number|above:0',
                name: 'required|min:3',
            };
            const validation = await validate(params, rules);

            if (validation.fails()) {
                const message = validation.messages().map((message) => message.message).join(', ');
                throw new ValidationException(`${message}`);
            }

            const user = await User
                .query()
                .where('id', '=', params.id)
                .where('slug', '=', params.name)
                .first();

            if (!user || !Object.keys(user).length) {
                throw new BadRequestException(`Hero does not exist`);
            }

            return response.getSuccess({
                data: {
                    user,
                },
            });
        } catch (error) {
            throw new BadRequestException(`Unable to retrieve hero`, error);
        }
    }
}

module.exports = HeroController
