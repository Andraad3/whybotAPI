const supabase = require("./supabase")

class Cadastro {
    static async cadastro(req, res) {
        console.log('Requisição: ', req);
        try {
            const { data: imovel, error } = await supabase
                .from('users')
                .insert([
                    { some_column: 'someValue', other_column: 'otherValue' },
                ])

            return res.status(200).json({ imovel, error })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = Cadastro