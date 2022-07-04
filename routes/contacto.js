var express = require('express');
var router = express.Router()
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
    res.render( 'contacto' ,{
      isContacto: true
    });
  });
  router.post('/', async function(req, res, next){
    //console.log(req.body) capturando datos
    var nombre = req.body.nombre;
    var email = req.body.email;
    var tel = req.body.tel;
    var comentarios = req.body.comentarios;
    //console.log(req.body.nombre) capturando datos
    
    var obj = {
      to: 'valentinagustina3@gmail.com',
      subject: 'contacto desde la pagina web',
      html: nombre + "se contacto a traves de la web y quiere mas info a este correo" + email + "<br> su tel es:" + tel + "su comentario es:" + comentarios +"."
    }
    var transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
      }
    })

      var info = await transport.sendMail(obj);
      res.render ('contacto' ,{
      message:'mensaje enviado correctamente',
      isContacto: true
      })
    })
    


module.exports = router;