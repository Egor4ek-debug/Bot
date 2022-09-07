import { Telegraf } from 'telegraf';
import { exec } from 'child_process';
import 'dotenv/config';

const bot = new Telegraf(process.env.TOKEN);
// const PORT = process.env.PORT || 5000;
// const URL = process.env.URL;

bot.start((ctx) => ctx.reply('ку'));
bot.hears('Turn off', (ctx) => {
  ctx.reply('Ок, ща выключу');
  exec('shutdown /s');
});
bot.on('message', (msg) => {
  let discord = 'discord';
  let steam = 'steam';
  let lol = 'lol';
  if (msg.message.text.toLowerCase().includes(discord)) {
    exec(
      'C:\\Users\\nabat\\AppData\\Local\\Discord\\Update.exe --processStart Discord.exe'
    );
    msg.reply(`open ${discord} for ${msg.from.username} `);
  } else if (msg.message.text.toString().toLowerCase().includes(steam)) {
    exec('D:\\Steam\\Steam.exe');
    msg.reply(`open ${steam} for ${msg.from.username} `);
  } else if (msg.message.text.toString().toLowerCase().includes(lol)) {
    exec(
      '"D:\\Riot Games\\Riot Client\\RiotClientServices.exe" --launch-product=league_of_legends --launch-patchline=live'
    );
    msg.reply(`open ${lol} for ${msg.from.username} `);
  }
});
// bot.telegram.setWebhook(`${URL}/bot${process.env.TOKEN}`);
// bot.startWebhook(`${URL}/bot${process.env.TOKEN}}`, null, PORT);
bot
  .launch()
  .then(() => {
    console.log('started');
  })
  .catch((err) => console.log(err));
