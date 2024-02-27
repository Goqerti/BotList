// Bu Bot t.me/Sirvhan tərəfindən kodlanmışdır.
// Credits verdiyiniz halda istifadə edə bilərsiniz.

const { Telegraf,Telegram  } = require('telegraf')
const config = require("./config")
const telegram = new Telegram(config.token)
const bot = new Telegraf(config.token)

bot.start(ctx=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Salam, 21 bir-birindən fərqli kurslarla dolu olan Udemy Kurs paketi ilə maraqlandığını gördük. 😎Əgər Sadəcə evdən işləyərək pul qazandıracaq Bacarıqlar öyrənmək istəyirsənsə, o təklif indi ayağına gəldi.\n⚡️Heç bir Udemy hesabına ehtiyac yoxdur.\nBir dəfə ödəniş et və Ömürlük Sənin olsun!\n💵Videoları izləmək üçün sadəcə Telegram hesabının olması yetərlidir.\n\nDaha ƏTRAFLI MƏLUMAT üçün\n@asitlavanik hesabı\nilə əlaqə saxlayarsınız ✅",
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Udemy Paketlərimiz 🔮",callback_data: "bot"},{text: "Haqqımızda",callback_data: "haqqimizda"}],
                    [{text: "ƏLAQƏ ☎️",url: "https://t.me/asitlavanik"}]
                ]
            }
        }
    )
})
bot.action("haqqimizda",ctx=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Udemy Paketini 1 ay ərzində\n40 - dan çox satışı olunmuşdur\nyəni ki, sizdə bu Paket sayəsində\nVirtualdan pul qazanmayı öyrənə bilərsiniz.\n\nQEYD: sizdə belə botların olmasını,\nqurdurmasını istəyirsinizsə aşağıdakı\nBOTLARIN QURULMASI buttonuna\nklik edə bilərsiniz ✅",
        {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "BOTLARIN QURULMASI 👾", callback_data: "gizlilik" }],
                    [{ text: "🏠 Ana Səhifə", callback_data: "yenidenstart" }],
                ]
            }
        }
    )
})
bot.action("gizlilik",ctx=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Sizdə tam güvənli şəkildə\nŞəxsi Bot və yaxud\nQrupunuz üçün Bot\nQurdurmaq istəyirsinizsə aşağıdakı\nƏLAQƏ buttonuna Klik edin ",
        {
         reply_markup: {
                inline_keyboard: [
                    [{ text: "🏠 Ana Səhifə", callback_data: "yenidenstart" }],
                    [{ text: "ƏLAQƏ ☎️", url: "https://t.me/The_ferid" }],
                ]
            }
        }
    )
})
bot.action("yenidenstart",ctx=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Salam, 21 bir-birindən fərqli kurslarla dolu olan Udemy Kurs paketi ilə maraqlandığını gördük. 😎Əgər Sadəcə evdən işləyərək pul qazandıracaq Bacarıqlar öyrənmək istəyirsənsə, o təklif indi ayağına gəldi.\n⚡️Heç bir Udemy hesabına ehtiyac yoxdur.\nBir dəfə ödəniş et və Ömürlük Sənin olsun!\n💵Videoları izləmək üçün sadəcə Telegram hesabının olması yetərlidir.\n\nDaha ƏTRAFLI MƏLUMAT üçün\n@asitlavanik hesabı\nilə əlaqə saxlayarsınız ✅",
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Udemy Paketlərimiz 🔮",callback_data: "bot"},{text: "Haqqımızda",callback_data: "haqqimizda"}],
                    [{text: "ƏLAQƏ ☎️",url: "https://t.me/asitlavanik"}]
                ]
            }
        }
    )
})
// İstədiyiniz kimi button artıra bilərsiniz nodejs bilmirsinizsə, @Sirvhan yazın kömək edək.
bot.action("bot",ctx=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Hansı Paketi axtarırsınız? 🔮",
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Nirvana Premium",callback_data: "game"},{text: "The Real World və İman Gandzi bütün Kursları",callback_data: "music"}],
                    [{text: "ƏLAQƏ ☎️",url: "https://t.me/asitlavanik"}]
                ]
            }
        }
    )
})
bot.action("music",ctx=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Paketə Daxildir\n\nKripto Valyuta, Traderlik, SMM,\nMətnyazarlığı, Dropshipping və daha çoxu\nNirvana Premium Paketi alana bu paket hədiyyə🥳",
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "🏠 Ana Səhifə",callback_data: "yenidenstart"},
                    [{text: "ƏLAQƏ ☎️",url: "https://t.me/asitlavanik"}]
                ]
            }
        }
    )
})
bot.action("game",ctx=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Paketə Daxildir\n\n1. Dropshipping A-dan Z-yə ilk satış.✅\n2. Amazon FBA✅\n3. Kripto, Bitcoin, Blockchain sistemləri (giriş)✅\n4. Finansal Analize giriş.(Maliyyə analizi)✅\n5. Birja, Kripto, Forex texniki analiz✅\n6. Forex Qazandıran Alım-Satım✅\n7. Google Gsuite✅\n8. Peşəkar Digital Marketing✅\n9. Digital Satış - 3 kurs birdən✅\n10. Google Analytics✅ \n11. Google Adwords öyrən✅\n12. İnstagramda Uğurlu Olmaq✅\n13. Youtuber Seti✅\n14. After Effect✅\n15. Adobe Premiere✅\n16. CorelDraw öyrən✅\n17. Adobe PhotoShop✅ (effektlər necə hazırlanır.)✅\n18. Adobe İllustrator✅\n19. Microsoft Excell✅\n20. Microsoft Word✅\n21. Mühasibatlıq-Əsas nüanslar.✅\n\nALMAQ İSTƏYƏN ŞƏXSLƏR\nƏLAQƏ BUTTONUNA KEÇİD EDƏ BİLƏR",
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "🏠 Ana Səhifə",callback_data: "yenidenstart"},
                    [{text: "ƏLAQƏ ☎️",url: "https://t.me/asitlavanik"}]
                ]
            }
        }
    )
})

//xətaları göstərsin
bot.catch((err) => {
    console.log('Error: ', err)
})

// Botun nickname alan kod
bot.telegram.getMe().then(botInfo => {
    bot.options.username = botInfo.username
    console.log(`Bot Aktif Oldu => ${bot.options.username}`)
})

bot.launch()

// Bu, botumuzu yavaşca dayandırmağa imkan verir.
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
