const supabase = require("./supabase")

class Login {
    static async login(req, res) {
        console.log('Requisição: ', req);
        try {
            let { data: Users, error } = await supabase
                .from('users')
                .select("*")
                .eq('email', email)
                .eq('password', senha)


            return res.status(200).json({ Users, error })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = Login