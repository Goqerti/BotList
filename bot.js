// Bu Bot t.me/Sirvhan tərəfindən kodlanmışdır.
// Credits verdiyiniz halda istifadə edə bilərsiniz.

const { Telegraf,Telegram  } = require('telegraf')
const config = require("./config")
const telegram = new Telegram(config.token)
const bot = new Telegraf(config.token)

bot.start(ctx=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        "👨🏻 Salam!\n\nSizin komanda adı Komandasının hazırladığı botları bir botda cəmləyən botam.İstədiyiniz bot haqqında burdan baxa bilər, qrupunuza qata bilər və başlada bilərsiniz",
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Botlarımız 👨🏻‍💻",callback_data: "bot"},{text: "Haqqımızda ℹ",callback_data: "haqqimizda"}],
                    [{text: "Kanalımız 🇦🇿",url: "https://t.me/sizinkanal"}]
                ]
            }
        }
    )
})
bot.action("haqqimizda",ctx=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Biz Sizin komanda adı Komandası olaraq sizlər üçün, yeni botlar hazırlayır, hazırladığı bot'larını təkminləşdirib yeni güncəlləmələr hazırlayır✅\n\nGizlilik haqqında məlumat almaq üçün aşağıdakı buttona klik et🛎",
        {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🛎 Gizlilik", callback_data: "gizlilik" }],
                    [{ text: "👨🏻 Ana Səhifə", callback_data: "yenidenstart" }],
                ]
            }
        }
    )
})
bot.action("gizlilik",ctx=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Botlarımızdan istifadə edənlərdə çox yaxşı bilirki botlarımız tamamilə güvənlidir✅\nBiz yalnız sizlər üçün işləyirik heç bir federasiya yaxud birləşmə ilə düşmən deyilik yaxud bundan sonrada heçkimlə düşmən olmuyacıq✅\nBizim botlarda qrup sıfırlama yaxud başqa qruplara ziyan verici hərəkətlər görə bilmərsiniz və görməyəcəksiniz🛎\n\nSizlərdən aldığımız məlumatlar hərkəsin əldə edəcəyi məlumatlardı🙂\nℹ CHAT İD\nℹ USER İD",
        {
         reply_markup: {
                inline_keyboard: [
                    [{ text: "👨🏻 Ana Səhifə", callback_data: "yenidenstart" }],
                    [{ text: "Kanalımız✅", url: "https://t.me/sizinkanal" }],
                ]
            }
        }
    )
})
bot.action("yenidenstart",ctx=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        "👨🏻 Salam!\n\nMən Crazy Komandasının hazırladığı botları bir botda cəmləyən botam.İstədiyiniz bot haqqında burdan baxa bilər, qrupunuza qata bilər və başlada bilərsiniz.",
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Botlarımız 👨🏻‍💻",callback_data: "bot"},{text: "Haqqımızda ℹ",callback_data: "haqqimizda"}],
                    [{text: "Kanalımız 🇦🇿",url: "https://t.me/sizinkanal"}]
                ]
            }
        }
    )
})
// İstədiyiniz kimi button artıra bilərsiniz nodejs bilmirsinizsə, @Sirvhan yazın kömək edək.
bot.action("bot",ctx=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        "🤖 Hansı bot haqqında məlumat almaq istəyirsiniz?",
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "🎮 Sizin oyun bot adı",callback_data: "game"},{text: "🇦🇿 Sizin Music bot",callback_data: "music"}],
                    [{text: "Kanalımız 🇦🇿",url: "https://t.me/sizinkanal"}]
                ]
            }
        }
    )
})
bot.action("music",ctx=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Sizin Music sizlərə qruplarınızda rahat və sürətli musiqi dinləməyə kömək edir✅\n\nƏlavə məlumat üçün kömək buttonuna klik edin.",
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "👨🏻 Ana Səhifə",callback_data: "yenidenstart"},{text: "Kömək ℹ",url: "https://t.me/sizinbotadı?start"}],
                    [{text: "Bot'u qruplarınıza Əlavə edin✅",url: "https://t.me/sizinbotadı?startgroup=a"}]
                ]
            }
        }
    )
})
bot.action("game",ctx=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        "SİZİN BOT ADI ilə qruplarınızda maraqlı oyun oynaya bilərsiniz✅\n\nƏlavə məlumat üçün kömək buttonuna klik edin.",
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "👨🏻 Ana Səhifə",callback_data: "yenidenstart"},{text: "Kömək ℹ",url: "https://t.me/sizinbotadı?start"}],
                    [{text: "Bot'u qruplarınıza Əlavə edin✅",url: "https://t.me/sizinbotadı?startgroup=a"}]
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
