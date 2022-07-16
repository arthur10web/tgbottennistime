const TelegramBot = require('node-telegram-bot-api')
const TOKEN ='5336562560:AAGyzyV_Fo4bemAj0lH3_6XhVE5zhzPr_Us'
console.log("Bot is working")
const fs=require('fs')
const { brotliCompress } = require('zlib')
const bot = new TelegramBot(TOKEN,{
    polling:true
    
})
const myKeyboard ={
    reply_markup:JSON.stringify({
        inline_keyboard:[
            [{text:'1',callback_data:'first'}]
        ]
    })
}

const start =() =>{
    
bot.setMyCommands([
    {command:'/start',description:'старт'},
    {command:'/info',description:'информация'},
    {command:'/test',description:'Пройти тест'},
    {command:'/help',description:'Помощь'}
])

bot.on('message',msg =>{
    let points = 0;
    const text =msg.text;
    const chatId = msg.chat.id;
    if(text ==='/start'){
        return bot.sendMessage(chatId,`Привет ${msg.from.first_name}`)
    }
    if(text === '/info'){
       return bot.sendMessage(chatId,` ${msg.from.first_name},этот Бот расскажет тебе как пройти один тест,если ты запутался ,то напиши и отправь /help`)
    }
    if(text === '/help'){
        return bot.sendMessage(chatId,` ${msg.from.first_name},как только ты напишешь /test ,тебе отправится тест в формате документа,чтобы его пройти тебе нужно открыть его с помощью любого браузера(Google,Opera,Яндекс и тд) далее  заполнить поля "Ваше имя и фамилия","Ваша почта",Быстро отвечать на предложенные вопросы,нажать на кнопку "Подсчитать результа" и "Оттправить результат",после этого тест будет считать пройденным.` )
     }
     if(text === '/test'){
        //  return fs.readFile(__dirname + '/test.rar',(err,file)=>{
        //      bot.sendDocument(chatId,file)
        //  })
        return bot.sendMessage(chatId,'https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1Pd0sF8agAisNRCWUOo23lUSW_837ByNM')
    //1V79wzs28UaGBlvcsTprroyCgT-Yof-zz  https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1xopbSSoAemQ4VRYpT4bFKjiamTc2jbB9'
     }//https://drive.google.com/file/d/1Pd0sF8agAisNRCWUOo23lUSW_837ByNM/view?usp=sharing
})
}
start()