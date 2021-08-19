const users = require('../database/Usuarios.json') 

module.exports = {
    showLogin: (req, res) =>{
        return res.render('admin/login');
    },
    login: (req, res) =>{
        //res.send("teste ok");
        // 1º Capturar o email e a senha informado
        
        // Desconstrução
        const {email, senha} = req.body;

        /* S/ Desconstrução
        const email = req.body.email;
        const senha = req.body.senha; 
        */

        // 2º Buscar no array de users se existe 
        const user = users.find(u => u.email == email && u.senha == senha);

        // Verifica se retornar user e msg de sucesso
        if (!user) {
            res.send("verifique os dados");
            return res.redirect('/admin/login?err=1')
        }
        else
            return res.send(user);
    }

}