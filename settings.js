const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6283825946836'] //ur owner number
global.ownernomer = "6283825946836" //ur owner number2
global.ownername = "🎭Danzuko" //ur owner name
global.ytname = "" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "indonesia, tegal, suradadi" //ur location

//new
global.botname = "©DaniKun_Botz"
global.ownernumber = '6283825946836'
global.ownername = '🎭DanZuko'
global.ownerNumber = ["6283825946836@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@DGXeon"
global.websitex = "https://youtu.be/ecl-JDVDz3E"
global.wagc = "https://chat.whatsapp.com/CvdJmhR93EX80nvngEAtmv"
global.themeemoji = '🎭'
global.wm = "©Danikun_Botz."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD7' //script link
global.packname = "Sticker By"
global.author = "Danikun\n\n\nA whatsapp bot developed by\n🎭Danzuko\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : +6283825946836"
global.creator = "6283825946836@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: '_Menampilkan Hasil📄_!',
    admin: '_Fitur ini hanya dapat di gunakan oleh admin tod🎭_',
    botAdmin: '_Minimal Bot Jadiin Admin lah anjing🗿_',
    premime: '_Fiture khusus premium Anda harus mendaftar dulu menggunakan KTP🎭_',
    owner: '_Fiture ini cukup gwe ajah yang menggunakanya🎭_',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: '_Tunggu sebentar bre..._',
    linkm: '_dimana linknya lol_?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})