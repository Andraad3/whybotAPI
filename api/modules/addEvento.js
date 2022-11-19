const supabase = require("./supabase")

class AddEvento {
    static async addEvento(req, res) {
        console.log('Requisição: ', req);
        try {
            const { data, error } = await supabase.from('userEventos').insert([
              { some_column: 'someValue', other_column: 'otherValue' },
            ])

            return res.status(200).json({ data, error })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = AddEvento