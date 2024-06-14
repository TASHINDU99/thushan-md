//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://nittava:Iamride9@@nittava.uivsr5o.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "VENOCYBER-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0ZibmNXODd5QURGR2VSamJPTjZ4YklZN0tEbGJtcnB0Y3V0eExXLzAzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pTaEJPbVlaM1BKTDJVVENBSDNUQVJHTXhuVFYwbnFwMmNuOHJnVVMyTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RnUwZ21oR3JySHFSakV2Z0JLK3dPSnJQdllnTHdVU1ArK0pOcTRBOUg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRmhHZ3B6MXlVWTc5TkZMdXp3N2M2ZDlZSjdFUTFVWGtnSEdMdStIL2pBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtOVkdqajVFVWhoQ1R1VldGQTh4L3ZtT29ld2s3M25rRHBUcEV2enM1R1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikczd1I0eWRobU5KRG9sQWxOTXB4WmhCQ3Q0dExsTW9NdkpvWDNWK0VOaEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9iZ0NVMWtlR1Buc0pMUk1iS0c2cjF0cFpDNFlsR05iOS9oR29qTjVWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU4weEF5eW1QWEhnZXoxcm9SQUdBcVp0SUJ3UmhSV0NLUlp4T1B3UnJIOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNIbmY4NWl3ajNyVHFqV0QvVitIRlYxU3I5SW5WSkM2Y1k1SU1UMjJ0czlQU1ZjN0dBTFp4NG53ckUwL1lVdmhzUlRlcG9memV2Uk85Y0pJT3FjZUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiIvMDNtM0JMK1VoWW9nM0ZvY2pXTkdzeHJrM0JLdjBTK1RNNVNIWFVISkU0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYwOTE4NTk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM2QzFCRUYwRERFQTAzMjUyOTlCMkE1MTE3NzI4RkExIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTgzNzc0MzB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYwOTE4NTk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc2NTlEMjNFQzc3M0NFQjk0NDg2ODhGRjczNDYzQjU2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTgzNzc0MzB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYwOTE4NTk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJDQjA4QzIwMjk3NTFCQTdDODZERkYwMTc4QUQ4OTk0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTgzNzc0MzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYwOTE4NTk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUwQUMzMUU5OTUyMTNDN0M5M0IxNjQyMDk3OUYyMjBBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTgzNzc0MzJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImwtRGxFWGluU3JHUkd1bzhxZXg3ZlEiLCJwaG9uZUlkIjoiMDMzZWYxOGUtMGUzNi00YmMxLWE1OGMtNWJiZThkNTExZGFhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5sUk40b04wOTIzZ2xuV2VhSzdBcjdnazg5Yz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQZ2F0Y0N0TEl2NDhvNGY4aFFPNGlPdU5OeTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFRaWU1KVEoiLCJtZSI6eyJpZCI6Ijk0NzYwOTE4NTk5OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU0FOQSBCQkgg8J+kqfCfmI0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ052RzF1OEZFTWUzc2JNR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBkcjdjRmtRL2hwTUs1MEdpWGoyZFQyL2t6RjNMODdKYXkwOHRDVHFrems9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1DTDVVWGRpUDI4OGZjdFluSjRueFd0ODRiZWNUdHkwUnoramIrODRyRzJhQVlxcjFiam5SVE92SGlLVlJ3QXhqWVRtQnJIWk5mMm9XL3MxdXRQOUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5WHoxYVpJWmRDNGF2K0g2L0xVMWloeGZNbS9ML2xzd2p0cXY1UlpDL3AzOUtDUkt3QnJITUVub0NwOXpRd09pV1FobnhNUmRtdmNkNUFyVHMwSVVEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYwOTE4NTk5OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYVhhKzNCWkVQNGFUQ3VkQm9sNDluVTl2NU14ZHkvT3lXc3RQTFFrNnBNNSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxODM3NzQyOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCMlYifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝘨𝘳𝘦𝘢𝘵 𝘥𝘢𝘺 | 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
