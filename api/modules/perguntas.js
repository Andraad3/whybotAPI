const supabase = require("./supabase")

class Perguntas {
    static async perguntas(req, res) {
        console.log('Requisição: ', req);
        try {
            switch (req.tipo) {
                case 1:
                    let { data: evento, error } = await supabase.from('evento').select('status').eq('id', 1)
                    return res.status(200).json(evento)
                    break;
                case 2:
                    let { data: evento2, error2 } = await supabase.from('evento').select('duracao').eq('id', 1)
                    return res.status(200).json(evento2)
                    break;
                case 3:
                    let { data: evento3, error3 } = await supabase.from('evento').select('localizacao').eq('id', 1)
                    return res.status(200).json(evento3)
                    break;
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = Perguntas