const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "919745617532"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Mathara,Colombo,Sreelanka"
global.mongodb= process.env.MONGODB_URI|| ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan="https://replit.com/@SuhailTechInfo/SuhailMdPairingCode?v=1";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl= process.env.GURL   || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE||"https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ;






global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,919745617532";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919745617532";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "©arjun²²¹-ᴍᴅ" ,// ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "arjun",
  packname: process.env.PACK_NAME || "arjun ",
  botname: process.env.BOT_NAME   || "malwaro-md",
  ownername:process.env.OWNER_NAME|| "It'x malwaro",


  sessionName:process.env.SESSION_ID|| "SESSION_08_28_02_01_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUxLZGdrQSttalBzMHlSYnFQVzh2YUdGTUZUU1U2NkxyTXkzR0NMamNVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2JSVmVDNFJ0emY1N2xkSVY4RnMzZGl2WkhMU2dib2hIZ1VIOWJCUVUwOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUEdlNms5TzBDTC9leUpFc09qcFRFUWEwakdHclhQUHduZDF0VHJnSVd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4UUhKanY1c3Rwb1NOTU1ZdTZraGRQQmNRMFdQeEIwYmtXVk44b2tXL0g4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVEZXQzNE5nTUVRZWxNYU0vUUdiUXZBTXZqM0dwQzdXZmV6Rk1PcnVMR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJTbFZlQmJtcks5bUFjbHhML1Jyd1pUNUlKR2g3emFPY0hBSGRwemUwREU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUp6UHJXSWtzQ21icXVneG9ZdUsxbzE4SzVNKzRiTCtIckgyYlhRdTAzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkxKVEg1b2JkbEE5YTFrVjVpNjhWMC9HdmtGcjhndWpzays4cjVTemJ6cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1lVVRmTTJLc3V1N0JlZ1N1c2dMK0lCWWZQakNQRnNwNUkzdUdKY0xDcUg3UFhFTUxvRVZ6a3oyVktjU0YrTnBOb3IyeGM1S3RSOUtXME5KZi9LdGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJYKzJ4VnpQWWprR01xRzg4RktNS1pISkFmV0trRElJVm9GM0xlWUlXOHc4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTc0NTYxNzUzMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1M0FCQUZFNDcwMUM4RDJGRjgxRUM2MzQwMTgzRkQ3MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA2Nzc2MTMxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTk3NDU2MTc1MzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEMzQjgzODFCMjBCODE2NkMxQTZFMjMzRjM0MjQ0RTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNjc3NjEzNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiLUV4Q2lMOV9RQmV3WWZzTXIwZ3ZEQSIsInBob25lSWQiOiJlOWJiOTM0Yi02MzBlLTRmMjItOGRhOS03NTEyZDhjNmVlYjIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZll0bHhmZURyTVNEYXllN3JGdDFKcWQxZHRVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVtblNSRVZEMEdnM1hSWEtIc3kySnlCQlJtRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUVDdOUE1RUSIsIm1lIjp7ImlkIjoiOTE5NzQ1NjE3NTMyOjI4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFyanVuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMVDM2dE1FRUx1czdhMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXNFc4RStmVnozK2ZldXhmbkgreW9jUitaTk5TckhBbS9veEZmQWo3ZFRvPSIsImFjY291bnRTaWduYXR1cmUiOiJJV1laU1NjU0FQa3pJQ2pMZER1TjJOVzBoRW9Xc0s4NFExWmNIaS81VGhvM0dpeStJemtBaHFmbjdlZThNRDkxRWp1cm5Wcm8yTlFOVUFtVCtOYWxBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRmN1ZWlhcWlZbENaS0FaTnFFWDNTQWdoR0ZSd0hUZkZFNFlHUlUvV0luelM3UGQwQno2WVgwbDMySUZVajZYdTVXd0JFK2Q3cjJGMmJDMld0NmQzaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTk3NDU2MTc1MzI6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnVGdkJQbjFjOS9uM3JzWDV4L3NxSEVmbVRUVXF4d0p2Nk1SWHdJKzNVNiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNjc3NjEyNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMSmEifQ==",
  userImages:process.env.USER_IMAGES|| "text",
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "true",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || false,
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| false,
  antilink_values:process.env.ANTILINK_VALUES|| "https://,chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
