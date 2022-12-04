const supabase = require("./supabase")

class GetEventosUser {
    static async getEventosUser(req, res) {
        console.log('Requisição: ', req);
        try {
        let response = await supabase.from('userEventos').select('*').eq('idUser', req.query.id)

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = GetEventosUser