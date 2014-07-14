/**
 * Custom Commands
 *
 * This is bascially where most of the core custom commands goes.
 * Commands Table of Contents:
 */
 
var customCommands = {
	/*********************************************************
	 * General commands
	 *********************************************************/
	serverhelp: 'sh',
	sh: function(target, room, user) {
		if (!this.canBroadcast()) return false;

        if (!target) {
        	return this.sendReplyBox('' +
        	'/profile - Displays the user\'s money, rank, rating tier, tournament wins, and status.<br/>' +
        	'/status - Sets up or change your status.<br/>' +
			'/pickrandom - [option 1], [option 2], ... - Randomly chooses one of the given options.<br/>' +
			'/poof - Disconnects you from the server and leaves a special message in chat.<br/>' +
			'/shop - Displays a shop. Use /buy to buy things from the shop.<br/>' +
			'/stafflist - Displays a popup showing the list of staff.<br/>'+
			'/transferbucks <i>username</i> - Transfer bucks to other users.<br/>'+
			'/ratingtier - Tells you about rating tiers. <br/>' +
			'/earnbucks - Shows other ways to earn bucks. <br/>' +
			'/tell - Tells a user a message. <br/>' +
			'/regdate <em>username</em> - Shows the registration date of the user<br/><br/>'+
			'/sprite or /model - Shows you a particular animated pokemon model <br/>'+
			'<b>For more commands or help:</b> Do /serverhelp with either of the following categories: <em>tour</em>, <em>profile</em>, <em>staff</em> Example - /serverhelp <em>tour</em>, <em>hangman</em>, <em>poll</em><br/>');
        }

		if (target.toLowerCase() === 'tour') {
			return this.parse('/tour help');
		}

		if (target.toLowerCase() === 'hangman') {
			return this.parse('/hangmanhelp');
		}

		if (target.toLowerCase() === 'poll') {
			return this.sendReply('/poll, /vote, /votes, /pr');
		}

		if (target.toLowerCase() === 'profile') {
			return this.sendReply('|raw|<img src="http://i.imgur.com/sd7CkSw.png" width="100%">');
		}
			if (target.toLowerCase() === 'model' || target.toLowerCase() === 'sprite') {
			return this.sendReply("/"+target.toLowerCase()+" (pokemon), (back, front or shiny). If the second part is not added, the front will be displayed");
		}

		if (target.toLowerCase() === 'staff') {
			if (!user.can('lock')) return this.sendReply('|raw|/serverhelp <i>staff</i> - Access denied.');
			return this.sendReplyBox('' +
			'/hide - Hide your symbol REQUIRES: ~<br/> ' +
			'/show - Show your symbol REQUIRES: ~<br/> ' +
			'/frt <i>user</i> - Changes a user\'s name REQUIRES: ~ <br/>' +
			'/imgdeclare <i>image</i> - Declares an image REQUIRES: &~# <br/>' +
			'/reload - Similar to hotpatch command but better REQUIRES: ~ <br/>' +
			'/pmall - Private messages all users in the server REQUIRES: ~ <br/>' +
			'/moneylog - Sees money transactions between all users REQUIRES: % <br/>' +
			'/givemoney <i>user</i>, <i>amount</i> - Give money to a user REQUIRES: ~ <br/>' +
			'/takemoney <i>user</i>, <i>amount</i> - Take money from a user REQUIRES: ~ <br/>' +
			'/away - Sets user to away REQUIRES: % <br/>' +
			'/back - Sets use back from away REQUIRES: % <br/>' +
			'/db <em>file</em> -  Displays database files REQUIRES: ~ <br/>' +
			'/kick <i>user</i> - Kicks the user from the room. REQUIRES: %@&~');
		}

		return this.sendReply('Could not find ' + target + '.');
	},

	earnmoney: 'earnbucks',
	earnbucks: function(target, room, user) {
		if (!this.canBroadcast()) return false;

		return this.sendReplyBox('' +
		'Follow <a href="https://github.com/CreaturePhil"><u><b>CreaturePhil</b></u></a> on Github for 5 bucks. Once you done so pm an admin. If you don\'t have a Github account' +
		' you can make on <a href="https://github.com/join"><b><u>here</b></u></a>.');
	},
	
	rl: function(target, room, user) {
		if (!this.canBroadcast()) return false;
		
		return this.sendReplyBox('<center>Rules<u/><b/><br/>' +
		'<center>General<u/><b/><br/>' +
		'1. Respect others as you would do for yourself.' +
		'2. Spam or cursing will NOT be tolerated. ' +
		'3. If you weren\'t heard or no one replied to your comment, don\'t keep saying your statement.' +
		'4. No <b>ADVERTISING<b/> of any kind.' +
		'5. Have fun, following the rules, there is not to many of them, so don\'t make a dramatic scene.<br/>' +
		'<center><b><u>Tournaments<u/><b/><br/>' +
		'1. Only make a Tournaments after the command such as /tierpoll was used.' +
		'2. No ending a tour of anykind, Even if the tour was a mistake.' +
		'3. Wait for atleast 5 or more players are in a tour to start it.' +
		'4. No dq\'ing users cause you assume thier afk' +
		'5. When the tournament is done, Wait until 5 more mins to start a new one<br/>' +
		'<center><b><u>Staff Members<u/><b/><br/>' +
		'1. Don\t use commands that take about 3 lines of the chat' +
		'2. No abusing your authority, If Judge sense\'s abuse you will be automatically demoted' +
		'3. No promoting users without them buying the ability to have global voice, Judge will take care of the promoting to a staff rank.' +
		'4. Make sure the chat stays in control' +
		'If a staff member is inactive or atleast 3 days, they will be demoted by 1 rank, If they abuse their power, they will be demoted by 2 rank\'s.<br/>' +
		'<center><b><u>How breaking the rules will be handled.<u/><b/><br/>' +
		'<b><em>1st Offense<em/><b/>: You will be spoken to in public and asked to stop your actions.' +
		'<b><em>2nd Offense<em/><b/>: You will be kicked from the server. The chat will inform you of this as well as why. Breaking the rules again will result in a ban for length to be determined by  an authorized Staff.' +
		'<b><em>3rd Offense<em/><b/>: You will be kicked and banned from the server. Not allowed back in until your ban is lifted.' +
		'The 3rd Offense violations will be reported to an authorized Staff.' +
		'You will then be banned from the chat rooms for a time defined by an authorized Staff. You may also be banned from the Forums to keep you from spamming them with complaints about getting banned. After sufficient time you will be allowed back on to the forums. But not the Chat Rooms. Allowance back into the chat rooms is left to the sole discretion of an authorized Staff.');
	},
	ratingtiers: 'ratingtier',
	ratingtier: function(target, room, user) {
		if (!this.canBroadcast()) return false;

		return this.sendReplyBox('' +
		'<font color="#8C7853"><b>Bronze</b></font>: Less Than 8 Tournament Wins. (Top 100%) <br/>' +
		'<font color="#545454"><b>Silver</b></font>: Between 8 to 19 Tournament Wins. (Top 80%-46.5%)<br/>' +
		'<font color="#FFD700"><b>Gold</b></font>: Between 20 to 39 Tournamenet Wins. (Top 46.5%-13%)<br/>' +
		'<font color="#C0C0C0"><b>Platinum</b></font>: Between 40 to 59 Tournament Wins. (Top 13%-1.5%)<br/>' +
		'<font color="#236B8E"><b>Diamond</b></font>: Between 60 to 99 Tournament Wins. (Top 1.5%-0.1%)<br/>' +
		'<font color="#FF851B"><b>Legend</b></font>: Over 100 Tournament Wins. (Top 0.1%)');
	},

	pr: 'pickrandom',
	pickrandom: function(target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReply(target.split(',').map(function (s) { return s.trim(); }).randomize()[0]);
	},
	
	model: 'sprite',
sprite: function(target, room, user) {
        if (!this.canBroadcast()) return;
		var targets = target.split(',');
			target = targets[0];
				target1 = targets[1];
if (target.toLowerCase().indexOf(' ') !== -1) {
target.toLowerCase().replace(/ /g,'-');
}
        if (target.toLowerCase().length < 4) {
        return this.sendReply('Model not found.');
        }
		var numbers = ['1','2','3','4','5','6','7','8','9','0'];
		for (var i = 0; i < numbers.length; i++) {
		if (target.toLowerCase().indexOf(numbers) == -1 && target.toLowerCase() !== 'porygon2' && !target1) {
        
        
		
		if (target && !target1) {
        return this.sendReply('|html|<img src = "http://www.pkparaiso.com/imagenes/xy/sprites/animados/'+target.toLowerCase().trim().replace(/ /g,'-')+'.gif">');
        }
	if (toId(target1) == 'back' || toId(target1) == 'shiny' || toId(target1) == 'front') {
		if (target && toId(target1) == 'back') {
        return this.sendReply('|html|<img src = "http://play.pokemonshowdown.com/sprites/xyani-back/'+target.toLowerCase().trim().replace(/ /g,'-')+'.gif">');
		}
		if (target && toId(target1) == 'shiny') {
        return this.sendReply('|html|<img src = "http://play.pokemonshowdown.com/sprites/xyani-shiny/'+target.toLowerCase().trim().replace(/ /g,'-')+'.gif">');
		}
		if (target && toId(target1) == 'front') {
        return this.sendReply('|html|<img src = "http://www.pkparaiso.com/imagenes/xy/sprites/animados/'+target.toLowerCase().trim().replace(/ /g,'-')+'.gif">');
	}
	}
	} else {
	return this.sendReply('Model not found.');
	}
	}
	},

	d: 'poof',
	cpoof: 'poof',
	poof: (function () {
		var messages = [
			"has vanished into nothingness!",
			"used Explosion!",
			"fell into the void.",
			"went into a cave without a repel!",
			"has left the building.",
			"was forced to give Roxas0000's mom an oil massage!",
			"was hit by Magikarp's Revenge!",
			"ate a bomb!",
			"is blasting off again!",
			"(Quit: oh god how did this get here i am not good with computer)",
			"was unfortunate and didn't get a cool message.",
			"The Immortal accidently kicked {{user}} from the server!",
		];

		return function(target, room, user) {
			if (Config.poofOff) return this.sendReply("Poof is currently disabled.");
			if (target && !this.can('Broadcast')) return false;
			if (room.id !== 'lobby') return false;
			var message = target || messages[Math.floor(Math.random() * messages.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);
			if (!this.canTalk(message)) return false;

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<strong><font color="' + colour + '">~~ ' + sanitize(message) + ' ~~</font></strong>');
			user.disconnectAll();
		};
	})(),

	regdate: function(target, room, user, connection) { 
		if (!this.canBroadcast()) return;
		if (!target || target == "." || target == "," || target == "'") return this.sendReply('/regdate - Please specify a valid username.');
		var username = target;
		target = target.replace(/\s+/g, '');
		var util = require("util"),
    	http = require("http");

		var options = {
    		host: "www.pokemonshowdown.com",
    		port: 80,
    		path: "/forum/~"+target
		};

		var content = "";   
		var self = this;
		var req = http.request(options, function(res) {

		    res.setEncoding("utf8");
		    res.on("data", function (chunk) {
	        content += chunk;
    		});
	    	res.on("end", function () {
			content = content.split("<em");
			if (content[1]) {
				content = content[1].split("</p>");
				if (content[0]) {
					content = content[0].split("</em>");
					if (content[1]) {
						regdate = content[1];
						data = username+' was registered on'+regdate+'.';
					}
				}
			}
			else {
				data = username+' is not registered.';
			}
			self.sendReplyBox(data);
			room.update();
		    });
		});
		req.end();
	},

	stafflist: function (target, room, user) {
        var buffer = {
            admins: [],
            leaders: [],
            mods: [],
            drivers: [],
            voices: []
        };

        var staffList = fs.readFileSync(path.join(__dirname, './', './config/usergroups.csv'), 'utf8').split('\n');
        var numStaff = 0;
        var staff;

        var len = staffList.length;
        while (len--) {
            staff = staffList[len].split(',');
            if (staff.length >= 2) numStaff++;
            if (staff[1] === '~') {
                buffer.admins.push(staff[0]);
            }
            if (staff[1] === '&') {
                buffer.leaders.push(staff[0]);
            }
            if (staff[1] === '@') {
                buffer.mods.push(staff[0]);
            }
            if (staff[1] === '%') {
                buffer.drivers.push(staff[0]);
            }
            if (staff[1] === '+') {
                buffer.voices.push(staff[0]);
            }
        }

        buffer.admins = buffer.admins.join(', ');
        buffer.leaders = buffer.leaders.join(', ');
        buffer.mods = buffer.mods.join(', ');
        buffer.drivers = buffer.drivers.join(', ');
        buffer.voices = buffer.voices.join(', ');

        this.popupReply('Administrators:\n--------------------\n' + buffer.admins + '\n\nLeaders:\n-------------------- \n' + buffer.leaders + '\n\nModerators:\n-------------------- \n' + buffer.mods + '\n\nDrivers:\n--------------------\n' + buffer.drivers + '\n\nVoices:\n-------------------- \n' + buffer.voices + '\n\n\t\t\t\tTotal Staff Members: ' + numStaff);
    },

	tell: function(target, room, user) {
		if (!target) return false;
		var message = this.splitTarget(target);
		if (!message) return this.sendReply("You forgot the comma.");
		if (user.locked) return this.sendReply("You cannot use this command while locked.");

		message = this.canTalk(message, null);
		if (!message) return false;

		if (!global.tells) global.tells = {};
		if (!tells[toId(this.targetUsername)]) tells[toId(this.targetUsername)] = [];
		if (tells[toId(this.targetUsername)].length > 5) return this.sendReply("User " + this.targetUsername + " has too many tells queued.");

		tells[toId(this.targetUsername)].push(Date().toLocaleString() + " - " + user.getIdentity() + " said: " + message);
		return this.sendReply("Message \"" + message + "\" sent to " + this.targetUsername + ".");
	},
