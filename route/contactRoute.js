var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'paulinkladi@gmail.com',
//     pass: 'html#@90'
//   }
// });



const contactRoute = (req,res) => {
            email = req.body.email;
            names = req.body.name;
            message = req.body.message;
            //console.log(email);
            //console.log(names);
            //console.log(message);
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: process.env.EMAIL,
                  pass: process.env.PASSWORD
                }
              });

              var mailOptions = {
                from: email,
                to: 'paulinkladi@gmail.com',
                subject: 'Portfolio Contact',
                text: names + "\n" + message
              };

              var data = {
                msg : "Thank you for contacting me"
            }
              
            if(names.length === 0){
              data.msg = "Empty name"
              res.json(data)
            }
            if(email.length === 0){
              data.msg = "Email is empty"
              res.json(data)
            }

            if(email.indexOf('@') == -1){
              data.msg = "Email must include @"
              res.json(data)
            }


            if(message.length === 0){
              data.msg = "Empty Message"
              res.json(data)
            }

              transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                    console.log(error);
                    data.msg = "There was an error"
                    res.json(data)
                    } else {
                    console.log('Email sent: ' + info.response);
                    res.json(data);
                    }
              });
              

            }  

module.exports = contactRoute;




