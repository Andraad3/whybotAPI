const supabase = require("./supabase")

class GetEventosUser {
    static async getEventosUser(req, res) {
        console.log('Requisição: ', req);
        try {
        let { data: evento, error } = await supabase.from('userEventos').select('*').eq('idUser', 1)

            return res.status(200).json(evento)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = GetEventosUser