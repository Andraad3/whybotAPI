const supabase = require("./supabase")

class GetEvento {
    static async getEvento(req, res) {
        console.log('Requisição: ', req);
        try {
            let response = await supabase.from('evento').select('*').eq('id', req.query.id)

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = GetEvento