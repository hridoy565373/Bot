module.exports.config = {
	name: "suchi",
	version: "1.1.0",
	permission: 0,
	credits: "farhan",
	prefix: true,
	description: "Bot will rep ng tag admin or rep ng tagbot",
	category: "Other",
	usages: "",
	cooldowns: 5
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61563093944158") {
    var aid = ["61563093944158"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
	var msg = ["এটা আমার বস এর বউ লাগে আর ম্যনশন করবি না", " দারা তোদের একটা ব্যবস্হা নিতে হবে খালি জিহাদ এর কলিজা কে ডাকে 🥲", "আবে সালা তোরা নেকামি করবি আর বস এর কলিজা মেনশন দিবি কেন, আমার বস জিহাদ কে মেনশন দে😌", "Assalamu Walaikum আপনি যারে ম্যনশন করতে আছেন ওইটা জিহাদ এর পিচ্চি বউ লাগে", " তুই আর কতো জালাবি আর তোর ভাবিকে ম্যনশন দিবি না🥵🥰😍😏","বস এর কলিজা কে আর ম্যনশন দিবি না তার এখন জানু 🤭 আছে ওকে","বস দেখো এই হালায় খালি তোমার বউ কে মেনশন দেই","ওই ওইটা আমার বস জিহাদ এর পিচ্চি রানি লাগে মেনশন দিস না","পাপির দল এটা তোদের ভাবি লাগে 😩💗","বকা দিমু আর একবার খালি বস জিহাদ এর বউ কে মেনশন দে 😤"];
	return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
