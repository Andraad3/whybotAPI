const supabase = require("./supabase");

class GetEventos {
    static async getEventos(req, res) {
        console.log('Requisição: ', req);
        try {
        let response = await supabase.from('evento').select('*')

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = GetEventos