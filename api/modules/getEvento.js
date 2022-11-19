const supabase = require("./supabase")

class GetEvento {
    static async getEvento(req, res) {
        console.log('Requisição: ', req);
        try {
            let { data: evento, error } = await supabase.from('evento').select('*').eq('id', 1)

            return res.status(200).json(evento)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = GetEvento