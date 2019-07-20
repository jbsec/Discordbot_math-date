/* Setup

   1. Create a .env file (click add file then remane it to .env)

   2. Put "token=" (without quotes) into the .env file followed by your Discord Bot token (No spaces!)

*/

/* If you use uptimerobot to ping, delete this line and line 20

const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var d = new Date(); // call this for date
var h = new Date(); // cal this for hour

client.on('message', message => {
  // Here is where you need to code
  if(message.content == "Hello discord bot!") {
    message.channel.send("Hello!");
  }
   if(message.content == "hello discord bot!") {
    message.channel.send("Hello!");
  }
   if(message.content == "Hello discord bot") {
    message.channel.send("Hello!");
  }
   if(message.content == "hello discord bot") {
    message.channel.send("Hello!");
  }
   if(message.content == "hello bot") {
    message.channel.send("Hello!");
  }
  if(message.content == "Hello bot!") {
    message.channel.send("Hello!");
  }
  if(message.content == "Hello bot") {
    message.channel.send("Hello!");
  }
  if(message.content == "day") {
    message.channel.send(document.getElementById("demo").innerHTML = d.getDay());
  }
  if(message.content == "hour") {
   message.channel.send(document.getElementById("demo").innerHTML = h.getHours());
  }
  if(message.content == "random number") {
   message.channel.send(document.getElementById("demo").innerHTML = Math.random());
  }
});

client.login(process.env.token);
