const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "."

const GN = "."

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'abu', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "Aʙᴜ sᴇʀ ɪs Mʏ Oᴡɴᴇʀ";

    var i = Math.floor(2*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));

asena.addCommand({pattern: 'kalan', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();

        r_text[1] = "Kᴀʟɴ Sᴇʀ ɪs Mʏ 2Oᴡɴᴇʀ";

        var i = Math.floor(2*Math.random())

        await message.client.sendMessage(

            message.jid,(r_text[i]), MessageType.text);

        }));    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'nijin', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

            r_text[1] = "Aʙᴜ sᴇʀ ɪs Mʏ Oᴡɴᴇʀ";

            var i = Math.floor(2*Math.random())

            await message.client.sendMessage(

                message.jid,(r_text[i]), MessageType.text);

            }));

        asena.addCommand({pattern: 'husni', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {

                var r_text = new Array ();

                r_text[1] = "Kᴀʟɴ Sᴇʀ ɪs Mʏ 2 Oᴡɴᴇʀ";
          
                var i = Math.floor(2*Math.random())

                await message.client.sendMessage(

                    message.jid,(r_text[i]), MessageType.text);

                }));    


}
