const supabase = require("./supabase")

class Cadastro {
    static async cadastro(req, res) {
        console.log('Requisição: ', req.body);
        try {
            const response = await supabase
                .from('users')
                .insert([
                    { nome: req.body.nome, email: req.body.email, senha: req.body.password },
                ])

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = Cadastro