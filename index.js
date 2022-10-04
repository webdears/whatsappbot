// const qrcode = require('qrcode-terminal');
const fs = require('fs');
const express= require('express');
const app =express();
const port =process.env.PORT || 8000;
const {Client,LocalAuth,LegacySessionAuth,MessageMedia,ChatTypes,Buttons,List}=require('whatsapp-web.js');


var http = require('http');

 function onRequest(request, response) { response.writeHead(200, {'Content-Type': 'text/html'}); 
 fs.readFile('./index.html', null, function(error, data) {
     if (error) { response.writeHead(404);
     response.write('File not found!'); } 
else { response.write(data); } response.end(); });}
 http.createServer(onRequest).listen(port);
// const client = new Client();
// const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
// let sessionData;
// if(fs.existsSync(SESSION_FILE_PATH)) {
//     sessionData = require(SESSION_FILE_PATH);
// }
const client = new Client({
    authStrategy: new LocalAuth({
        session: {}
        // session: sessionData
    })
});
// client.on('authenticated', (session) => {
//     sessionData = session;
//     fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
//         if (err) {
//             console.error(err);
//         }
//     });
// });
const qrcoden = require('qrcode');
client.on('qr', qr => {
    // qrcode.generate(qr, {small: true}); 
 

run().catch(error => console.error(error.stack));

async function run() {
  const res = await qrcoden.toDataURL(qr);

  fs.writeFileSync('./index.html', `<img src="${res}">`);
  console.log('Wrote to ./qr.html');
}
  }
);





// const venom = require('venom-bot');


  
//       console.log(asciiQR); // Optional to log the QR in the terminal
//       var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
//         response = {};

//       if (matches.length !== 3) {
//         return new Error('Invalid input string');
//       }
//       response.type = matches[1];
//       response.data = new Buffer.from(matches[2], 'base64');

     







client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async message => {
	// if(message.body === '!ping') {
		// message.reply('pong');
	// }
    
        // client.sendMessage("919538474018@c.us",productsList)
   message.getContact().then((result) => {
       
       if(result.number=="919341269808" || result.number=="919538474018"){
    //    if(true){
        if(message.hasMedia) {
           message.downloadMedia().then((res)=>{

                // console.log(res);
                const media = new MessageMedia(res.mimetype, res.data,res.filename);
                console.log(message);
    
                var axios = require("axios").default;

                var options = {
                  method: 'POST',
                  url: 'https://personal-portfolio-webdears.000webhostapp.com/whats.php'
                };
                
                axios.request(options).then(function (response) {
                    for (let i of response.data){
                        client.sendMessage(`91${i.contact}@c.us`,media,{caption:message.body}).then((rep)=>{
                            console.log(2)
                        })
                    }

                  console.log(response.data);
                }).catch(function (error) {
                  console.error(error);
                });
  

            });
            // do something with the media data here
        }
        else{

            // var but= new Buttons("coool",[{id:"",body:"hi"},{id:"",body:"hi"}], "jj", "hhho")

            // client.sendButtons("919538474018@c.us",but).then((i)={})
                 
            // for(let i=0;i<50;i++){
                // client.sendButtons("919538474018@c.us",'Body text/ MessageMedia instance', [{id:'customId',body:'button1'}], 'Title here, doesn\'t work with media', 'Footer here'), {caption: 'if you used a MessageMedia instance, use the caption here'}
                // client.sendMessage("919538474018@c.us", bbut)
                client.sendMessage("919538474018@c.us","hi");
            // }
        }
    }
    
    else{
        client.sendMessage(message.from,`hi ${message.notifyName}` );
    }
   }).catch((err) => {
    
   });
    
});
// var chats =client.getChats();
// console.log(chats)
 
// client.on('authenticated', (session) => {
//     sessionData = session;
//     fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
//         if (err) {
//             console.error(err);
//         }
//     });
// });
 
client.initialize();
// const productsList = new List(
//     "Here's our list of products at 50% off",
//     "View all products",
//     [
//       {
//         title: "Products list",
//         rows: [
//           { id: "apple", title: "Apple" },
//           { id: "mango", title: "Mango" },
//           { id: "banana", title: "Banana" },
//         ],
//       },
//     ],  "Please select a product"
//     );
// app.use(express.static(__dirname))
// app.get('/',(req,res)=>{

// res.render('index')
// // res.send("hfjjff");
// })
// app.listen(port,()=>{

//     console.log(`${port}`)
// })