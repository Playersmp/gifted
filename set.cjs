const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Gifted~Gq5CzTqB#lXPDqKRLt5JhVU857RYAbXWzRLcONohd4pOBqvP3fJA",
  PREFIX: process.env.PREFIX || '.',
  AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || '💚', // For liking whatsapp status updates(stories)
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS !== undefined ? process.env.AUTO_READ_STATUS === 'false' : dalse,
  AUTOLIKE_STATUS: process.env.AUTOLIKE_STATUS !== undefined ? process.env.AUTOLIKE_STATUS === 'false' : false,
  AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS !== undefined ? process.env.AUTO_REPLY_STATUS === 'falss' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '✅️ Status Viewed by Gifted-Md',
  AUTO_DOWNLOAD: process.env.AUTO_DOWNLOAD !== undefined ? process.env.AUTO_DOWNLOAD === 'true' : false,
  AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES !== undefined ? process.env.AUTO_READ_MESSAGES === 'false' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'false' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'fals' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'false' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'trye' : false,
  ANTIDELETE: process.env.ANTIDELETE !== undefined ? process.env.ANTIDELETE === 'true' : false,
  
  
  AUTO_REJECT_CALLS: process.env.AUTO_REJECT_CALLS !== undefined ? process.env.AUTO_REJECT_CALLS === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "♡zak♡",
  AUTO_BLOCK: process.env.AUTO_BLOCK || "212,99,90",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "18768375254",
  SUDO_NUMBERS: process.env.SUDO_NUMBERS || " ",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyAkHGe6qWMujR2BjM468vQbY2RIbp0VXyc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
