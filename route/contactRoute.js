var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'paulinkladi@gmail.com',
//     pass: 'html#@90'
//   }
// });



const contactRoute = (req,res) => {
            email = req.body.email
            name = req.body.name
            message = req.message.
            console.log(to)
            console.log(subject)
            console.log(message)
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'paulinkladi@gmail.com',
                  pass: 'html#@9065'
                }
              });

              var mailOptions = {
                from: 'youremail@gmail.com',
                to: 'paulinkladi@gmail.com',
                subject: 'Sending Email using Node.js',
                text: 'That was easy!'
              };
              
            //   transporter.sendMail(mailOptions, function(error, info){
            //         if (error) {
            //         console.log(error);
            //         } else {
            //         console.log('Email sent: ' + info.response);
            //         }
            //   });

            }

module.exports = contactRoute;




