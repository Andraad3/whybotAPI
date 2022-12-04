const supabase = require("./supabase")

class Login {
    static async login(req, res) {
        console.log('Requisição: ', req);
        try {
            const response = await supabase
                .from('users')
                .select("*")
                .eq('email', req.body.email)
                .eq('senha', req.body.password)


            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = Login