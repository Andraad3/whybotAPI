const supabase = require("./supabase");

class GetEventos {
    static async getEventos(req, res) {
        console.log('Requisição: ', req);
        try {
        let { data: evento, error } = await supabase.from('evento').select('*')

            return res.status(200).json(evento)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = GetEventos