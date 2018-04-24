//Array of sticker names
var stickerNames = ["Panini Logo", "FIFA Logo","World Cup Trophy","2018 World Cup Graphic 1","2018 World Cup Graphic 2","2018 World Cup Logo 1","2018 World Cup Logo 2","Official Ball","Ekaterinburg Arena","Kaliningrad Stadium","Kazan Arena","Spartak Stadium","Nizhny Novgorod Stadium","Luzhniki Stadium","Rostov Arena","Saint Petersburg Stadium","Samara Arena","Mordovia Arena","Fisht Stadium","Volgograd Arena","Moscow 1","Moscow 2","Kaliningrad","Saint Petersburg","Sochi","Rostov-on-Don","Volgograd","Kazan","Nizhny Novgorod","Samara","Yekaterinburg","Saransk","Team Logo - Russia","Team Photo - Russia","Igor Akinfeev","Igor Smolnikov","Viktor Vasin","Mario Fernandes","Fedor Kudryashov","Ilya Kutepov","Dmitri Kombarov","Aleksei Miranchuk","Denis Glushakov","Aleksandr Golovin","Yuri Zhirkov","Aleksandr Samedov","Aleksandr Erokhin","Alan Dzagoev","Daler Kuzyayev","Dmitry Poloz","Fedor Smolov","Aleksandr Kokorin","Team Logo - Saudi Arabia","Team Photo - Saudi Arabia","Abdullah Al-Mayouf","Osama Hawsawi","Abdullah Al-Zori","Mansoor Al-Harbi","Omar Hawsawi","Yasser Al-Shahrani","Motaz Hawsawi ","Mohammed Al-Breik","Taisir Al-Jassim","Salman Al-Faraj","Abdulmalek Al-Khaibri","Salman Al-Moasher ","Yahya Al-Shehri ","Salem Al-Dawsari ","Nawaf Al-Abed","Mohammad Al-Sahlawi","Nasser Al-Shamrani ","Fahad Al-Muwallad ","Team Logo - Egypt","Team Photo - Egypt","Essam El Hadary","Ali Gabr","Ahmed El Mohamady","Omar Gaber","Ramy Rabia","Ahmed Hegazi","Ahmed Abdelmonem Fathy","Mohamed Abdel Shafy","Saad Samir","Tarek Hamed","Mahmoud Kahraba","Mohamed Elneny","Mahmoud Trezeguet","Abdallah Said","Ramadan Sobhi","Ahmed Hassan","Mohamed Salah","Amr Gamal","Team Logo - Uruguay","Team Photo - Uruguay","Fernando Muslera","Maxi Pereira","Diego Godin","Martin Caceres","Jose Gimenez","Sebastian Coates","Gaston Silva","Mathias Corujo","Egidio Arevalo Rios","Alvaro Gonzalez","Nicolas Lodeiro","Carlos Sanchez","Cristian Rodriguez","Matias Vecino","Edinson Cavani","Luis Suarez","Cristhian Stuani","Diego Rolan","Team Logo - Portugal","Team Photo - Portugal","Rui Patricio","Bruno Alves","Pepe","Jose Fonte","Eliseu","Cedric","Raphael Guerreiro","Joao Moutinho","Joao Mario","Danilo Pereira","William Carvalho","Andre Gomes","Ricardo Quaresma","Bernardo Silva","Andre Silva","Gelson Martins","Cristiano Ronaldo","Nani","Team Logo - Spain","Team Photo - Spain","David de Gea","Jordi Alba","Nacho","Nacho Monreal","Gerard Pique","Sergio Ramos","Daniel Carvajal","Sergio Busquets","Thiago Alcantara","Isco","Koke","Marco Asensio","Andres Iniesta","David Villa","Saul Niguez","Alvaro Morata","Vitolo","Diego Costa","Team Logo - Morocco","Team Photo - Morocco","Munir Mohamedi","Medhi Benatia","Nabil Dirar","Romain Saiss","Fouad Chafik","Hamza Mendyl","Achraf Hakimi","Mbark Boussoufa","Karim El Ahmadi","Younes Belhanda","Nordin Amrabat","Faycal Fajr","Hakim Ziyech","Youssef Ait Bennasser","Khalid Boutaib","Rachid Alioui","Aziz Bouhaddouz","Youssef En-Nesyri","Team Logo - Iran","Team Photo - Iran","Alireza Beiranvand","Pejman Montazeri","Vouria Ghafouri","Jalal Hosseini","Milad Mohammadi","Morteza Pouraliganji","Ramin Rezaeian","Ehsan Hajsafi","Omid Ebrahimi","Saeid Ezatolahi","Vahid Amiri","Alireza Jahanbakhsh","Ashkan Dejagah","Saman Ghoddos","Mehdi Taremi","Karim Ansarifard","Reza Ghoochannejhad","Sardar Azmoun","Team Logo - France","Team Photo - France","Hugo Lloris","Raphael Varane","Lucas Digne","Djibril Sidibe","Samuel Umtiti","Layvin Kurzawa","Laurent Koscielny","Blaise Matuidi","N'Golo Kante","Thomas Lemar","Adrien Rabiot","Paul Pogba","Olivier Giroud","Antoine Griezmann","Alexandre Lacazette","Kylian Mbappe","Ousmane Dembele","Anthony Martial","Team Logo - Australia","Team Photo - Australia","Mathew Ryan","Mitchell Langerak","Milos Degenek","Bailey Wright","Aziz Behich","Trent Sainsbury","Ryan McGowan","Mark Milligan","Aaron Mooy","James Troisi","Mile Jedinak","Massimo Luongo","Jackson Irvine","Tom Rogic","Tim Cahill","Mathew Leckie","Tomi Juric","Robbie Kruse","Team Logo - Peur","Team Photo - Peru","Pedro Gallese","Carlos Caceda","Aldo Corzo","Miguel Trauco","Christian Ramos","Luis Advincula","Alberto Rodriguez","Miguel Araujo","Christian Cueva","Renato Tapia","Andy Polo","Yoshimar Yotun","Edison Flores","Paolo Hurtado","Paolo Guerrero","Jefferson Farfan","Raul Ruidiaz","Andre Carrillo","Team Logo - Denmark","Team Photo - Denmark","Kasper Schmeichel","Jannik Vestergaard","Simon Kjaer","Andreas Christensen","Andreas Bjelland","Mathias Jorgensen","Jens Stryger Larsen","Peter Ankersen","Riza Durmisi","William Kvist","Thomas Delaney","Christian Eriksen","Lasse Schone","Pione Sisto","Nicklas Bendtner","Nicolai Jorgensen","Yussuf Poulsen","Andreas Cornelius","Team Logo - Argentina","Team Photo - Argentina","Sergio Romero","Gabriel Mercado","Federico Fazio","Javier Mascherano","Nicolas Otamendi","Marcos Rojo","Ramiro Funes Mori","Lucas Biglia","Enzo Perez","Angel Di Maria","Marcos Acuna","Ever Banega","Eduardo Salvio","Mauro Icardi","Lionel Messi","Paulo Dybala","Sergio Aguero","Gonzalo Higuain","Team Logo - Iceland","Team Photo - Iceland","Hannes Halldorsson","Birkir Saevarsson","Ragnar Sigurosson","Kari Arnason","Ari Skulason","Sverrir Ingason","Hordur Magnusson","Aron Gunnarsson","Birkir Bjarnason","Emil Hallfredsson","Gylfi Sigurdsson","Arnor Ingvi Traustason","Rurik Gislason","Johann Gudmundsson","Alfred Finnbogason","Jon Dadi Bodvarsson","Vidar Orn Kjartansson","Bjorn Sigurdarson","Team Logo - Croatia","Team Photo - Croatia","Danijel Subasic","Sime Vrsaljko","Ivan Strinic","Dejan Lovren","Domagoj Vida","Josip Pivaric","Vedran Corluka","Ivan Rakitic","Luka Modric","Marcelo Brozovic","Marko Rog","Mario Pasalic","Milan Badelj","Mateo Kovacic","Andrej Kramaric","Nikola Kalinic","Mario Mandzukic","Ivan Perisic","Team Logo - Nigeria","Team Photo - Nigeria","Ikechukwu Ezenwa","Elderson Echiejile","Shehu Abdullahi","William Troost-Ekong","Leon Balogun","Kenneth Omeruo","Ola Aina","John Obi Mikel","Ogenyi Onazi","Etebo Oghenekaro ","Wilfred Ndidi","Mikel Agu","Ahmed Musa","Victor Moses","Moses Simon","Odion Ighalo","Alex Iwobi","Kelechi Iheanacho","Team Logo - Brazil","Team Photo - Brazil","Alisson","Dani Alves","Thiago Silva","Miranda","Filipe Luis","Marquinhos","Marcelo","Willian","Paulinho","Fernandinho","Casemiro","Renato Augusto","Giuliano","Philippe Coutinho","Douglas Costa","Roberto Firmino","Gabriel Jesus","Neymar Jr","Team Logo - Switzerland","Team Photo - Switzerland","Yann Sommer","Stephan Lichtsteiner","Manuel Akanji","Michael Lang","Ricardo Rodriguez","Johan Djourou","Fabian Schar","Granit Xhaka ","Steven Zuber","Blerim Dzemaili","Denis Zakaria","Xherdan Shaqiri","Valon Behrami","Gelson Fernandes","Breel Embolo ","Haris Seferovic ","Admir Mehmedi ","Eren Derdiyok ","Team Logo - Costa Rica","Team Photo - Costa Rica","Keylor Navas ","Giancarlo Gonzalez ","Cristian Gamboa ","Bryan Oviedo ","Francisco Calvo ","Kendall Waston ","Ronald Matarrita ","Michael Umana","Johnny Acosta ","Bryan Ruiz","Celso Borges ","Christian Bolanos","Randall Azofeifa","David Guzman ","Rodney Wallace ","Joel Campbell","Marco Urena ","Johan Venegas ","Team Logo - Serbia","Team Photo - Serbia","Vladimir Stojkovic","Branislav Ivanovic","Aleksandar Kolarov","Antonio Rukavina","Matija Nastasic","Dusko Tosic","Nikola Maksimovic","Jagos Vukovic","Dusan Tadic","Sergej Milinkovic-Savic","Nemanja Matic","Luka Milivojevic","Adem Ljajic ","Nemanja Gudelj ","Mijat Gacinovic ","Filip Kostic","Aleksandar Mitrovic","Aleksandar Prijovic","Team Logo - Germany","Team Photo - Germany","Manuel Neuer","Mats Hummels ","Antonio Rudiger ","Jerome Boateng ","Joshua Kimmich ","Jonas Hector ","Julian Draxler ","Toni Kroos ","Emre Can","Leon Goretzka ","Julian Brandt","Sebastian Rudy ","Leroy Sane ","Mesut Ozil ","Sami Khedira ","Mario Gotze ","Thomas Muller ","Timo Werner ","Team Logo - Mexico","Team Photo - Mexico","Guillermo Ochoa ","Hugo Ayala ","Diego Reyes ","Hector Moreno ","Jesus Gallardo ","Miguel Layun ","Carlos Salcedo ","Jonathan dos Santos ","Giovani dos Santos ","Andres Guardado ","Hector Herrera ","Javier Aquino ","Jesus Corona ","Hirving Lozano ","Raul Jimenez ","Carlos Vela ","Javier Hernandez ","Oribe Peralta ","Team Logo - Sweden","Team Photo - Sweden","Robin Olsen ","Mikael Lustig ","Victor Nilsson Lindelof ","Andreas Granqvist ","Martin Olsson ","Ludwig Augustinsson ","Emil Krafth ","Pontus Jansson ","Sebastian Larsson ","Emil Forsberg ","Gustav Svensson","Viktor Claesson ","Jimmy Durmaz ","Albin Ekdal ","Isaac Kiese Thelin ","Marcus Berg ","John Guidetti ","Ola Toivonen ","Team Logo - South Korea","Team Photo - South Korea","Kim Seung-gyu","Kim Young-gwon","Kim Jin-su","Kwak Tae-hwi","Hong Jeong-ho","Jang Hyun-soo","Koo Ja-cheol","Kwon Chang-hoon","Ki Sung-yueng","Nam Tae-hee","Han Kook-young","Lee Chung-yong","Jung Woo-young","Lee Jae-sung","Son Heung-min","Ji Dong-won","Kim Shin-wook","Hwang Hee-chan","Team Logo - Belgium","Team Photo - Belgium","Thibaut Courtois","Toby Alderweireld","Thomas Vermaelen","Jan Vertonghen","Vincent Kompany","Thomas Meunier","Axel Witsel","Radja Nainggolan","Kevin De Bruyne","Marouane Fellaini","Youri Tielemans","Mousa Dembele","Nacer Chadli","Eden Hazard","Yannick Carrasco","Dries Mertens","Michy Batshuayi","Romelu Lukaku","Team Logo - Panama","Team Photo - Panama","Jaime Penedo","Jose Calderon","Michael Murillo","Fidel Escobar","Roman Torres","Adolfo Machado","Eric Davis","Luis Ovalle","Felipe Baloy","Gabriel Gomez","Edgar Barcenas","Armando Cooper","Alberto Quintero","Anibal Godoy","Blas Perez","Gabriel Torres","Luis Tejada","Abdiel Arroyo","Team Logo - Tunisia","Team Photo - Tunisia","Aymen Mathlouthi","Ali Maaloul","Syam Ben Youssef","Aymen Abdennour","Hamdi Nagguez","Yassine Meriah","Oussama Haddadi","Ferjani Sassi","Wahbi Khazri","Mohamed Amine Ben Amor","Ghailene Chaalali","Naim Sliti","Youssef Msakni","Fakhreddine Ben Youssef","Taha Yassine Khenissi","Yoann Touzghar","Anice Badri","Ahmed Akaichi","Team Logo - England","Team Photo - England","Joe Hart","Jordan Pickford","Gary Cahill","Kyle Walker","John Stones","Ryan Bertrand","Danny Rose","Phil Jones","Jordan Henderson","Alex Oxlade-Chamberlain","Dele Alli","Eric Dier","Adam Lallana","Jesse Lingard","Raheem Sterling","Harry Kane","Marcus Rashford","Jamie Vardy","Team Logo - Poland","Team Photo - Poland","Lukasz Fabianski","Wojciech Szczesny","Lukasz Piszczek","Kamil Glik","Michal Pazdan","Thiago Cionek","Bartosz Bereszynski","Artur Jedrzejczyk","Maciej Rybus","Jakub Blaszczykowski","Kamil Grosicki","Grzegorz Krychowiak","Krzysztof Maczynski","Piotr Zielinski","Karol Linetty","Robert Lewandowski","Lukasz Teodorczyk","Arkadiusz Milik","Team Logo - Senegal","Team Photo - Senegal","Khadim N'Diaye","Kara Mbodji","Lamine Gassama","Kalidou Koulibaly","Salif Sane","Saliou Ciss","Moussa Wague","Idrissa Gueye","Cheikhou Kouyate","Cheikh Ndoye","Pape Alioune N'Diaye","Sadio Mane","Moussa Sow","Moussa Konate","Keita Balde","M'Baye Niang","Ismaila Sarr","Mame Diouf","Team Logo - Colombia","Team Photo - Colombia","David Ospina","Cristian Zapata","Santiago Arias","Frank Fabra","Davinson Sanchez","Yerry Mina","Carlos Sanchez","Juan Guillermo Cuadrado","Abel Aguilar","James Rodriguez","Giovanni Moreno","Wílmar Barrios","Radamel Falcao Garcia","Teofilo Gutierrez","Carlos Bacca","Edwin Cardona","Yimmi Chara","Duvan Zapata","Team Logo - Japan","Team Photo - Japan","Eiji Kawashima","Shusaku Nishikawa","Masato Morishige","Yuto Nagatomo","Hiroki Sakai","Tomoaki Makino","Gotoku Sakai","Maya Yoshida","Hotaru Yamaguchi","Shinji Kagawa","Makoto Hasebe","Hiroshi Kiyotake","Keisuke","Honda","Takashi Usami","Genki Haraguchi","Shinji Okazaki","Yuya Kubo","Yuya Osako","Brazil","Germany","Italy","Ururguay","Argentina","England","France", "Spain","Pele - Brazil", "Miroslav Klose - Germany"];
//Reads array from txt file
fs = require('fs');
data = fs.readFileSync('Stickers.txt', 'utf8'); 	
var stickers = new Array(682).fill(0);
var stickerArr = data.split(" ");
var numStickers = stickerArr.length;
var percentage = 100 * numStickers / 682;

document.getElementById("title-stats").innerHTML = String(numStickers) + "/" + String(682) + " (" + String(percentage.toFixed(0)) + "%)";

for (var i = 0; i < stickerArr.length; i++) {
	stickers[parseInt(stickerArr[i], 10)]++;
}
console.log(stickers);

for (var i = 0; i < stickers.length; i++) {
	if (stickers[i] > 0) {
		var box = document.getElementById("box" + i);
		box.style.backgroundColor = "#abb9d1";
	}
}
//validates text input
function validate() {
	var input = document.getElementById("input");
	var nums = document.getElementById("input").value;
	
	if (!/^(?=.*\d)[\d ]+$/.test(nums)) {
    	input.style.backgroundColor = "#ff9191";
	} else {
		input.style.backgroundColor = "#e3e8ef";
	}
	if (nums.length == 0) {
		input.style.backgroundColor = "#e3e8ef";
	}
	
	var stickerNums = nums.split(" ");
	var boxes = document.getElementsByClassName("box");
	//Only execute if currently adding cards
	if (document.getElementById("add-done-button").style.display == "inline-block") {
		var newStickers = 0;
		boxesLoop:
		for (var i = 0; i < boxes.length; i++) {
			for (var j = 0; j < stickerNums.length; j++) {
				if ((boxes[i].id.slice(3) == stickerNums[j]) && (stickerNums[j] != "")) {
					if (stickers[i] == 0) {
						boxes[i].style.backgroundColor = "#61e04a"; //green
						newStickers++;
					} else if (stickers[i] > 0) {
						boxes[i].style.backgroundColor = "#ffa73d"; //orange
					}
					continue boxesLoop;
				} 
				if (stickers[i] == 0) {
					boxes[i].style.backgroundColor = "transparent";
				} else if (stickers[i] > 0) {
					boxes[i].style.backgroundColor = "#abb9d1"
				}
			}
		}
		var percentage = 100 * (newStickers + numStickers) / 682;
		var newStat = String(numStickers + newStickers) + "/" + String(682) + " (" + String(percentage.toFixed(0)) + "%)";
		document.getElementById("title-stats").innerHTML = newStat;
	} else if (document.getElementById("remove-done-button").style.display == "inline-block") {
		var removedStickers = 0;
		errorText = document.getElementById("error-text");
		errorText.style.display = "none";
		boxesLoop1:
		for (var i = 0; i < boxes.length; i++) {
			for (var j = 0; j < stickerNums.length; j++) {
				if ((boxes[i].id.slice(3) == stickerNums[j]) && (stickerNums[j] != "")) {
					if (stickers[i] == 0) {
						errorText.innerHTML = "You are trying to remove a sticker you don't have!"
						errorText.style.color = "#e25538"; //red
						errorText.style.display = "block";
					} else if (stickers[i] > 0) {
						boxes[i].style.backgroundColor = "#e25538"; //red
						removedStickers++;
					}
					continue boxesLoop1;
				} 
				if (stickers[i] == 0) {
					boxes[i].style.backgroundColor = "transparent";
				} else if (stickers[i] > 0) {
					boxes[i].style.backgroundColor = "#abb9d1"
				}
			}
		}
		var percentage = 100 * (numStickers - removedStickers) / 682;
		var newStat = String(numStickers - removedStickers) + "/" + String(682) + " (" + String(percentage.toFixed(0)) + "%)";
		document.getElementById("title-stats").innerHTML = newStat;
	} else if (document.getElementById("trade-next-button").style.display == "inline-block") {
		errorText = document.getElementById("error-text");
		errorText.style.display = "none";
		warningText = document.getElementById("warning-text");
		warningText.style.display = "none";
		boxesLoop2:
		for (var i = 0; i < boxes.length; i++) {
			for (var j = 0; j < stickerNums.length; j++) {
				if ((boxes[i].id.slice(3) == stickerNums[j]) && (stickerNums[j] != "")) {
					if (stickers[i] == 0) {
						errorText.innerHTML = "You are trying to give a sticker you don't have!"
						errorText.style.color = "#e25538"; //red
						errorText.style.display = "block";
					} else if (stickers[i] == 1) {
						warningText.innerHTML = "You are giving away your only copy of a sticker!"
						warningText.style.color = "#aa9300";
						warningText.style.display = "block";
						boxes[i].style.backgroundColor = "#aa9300"; //yellow
					} else if (stickers[i] > 1) {
						boxes[i].style.backgroundColor = "#e25538"; //red
					}
					continue boxesLoop2;
				} 
				if (stickers[i] == 0) {
					boxes[i].style.backgroundColor = "transparent";
				} else if (stickers[i] > 0) {
					boxes[i].style.backgroundColor = "#abb9d1"
				}
			}
		}
	} else if (document.getElementById("trade-done-button").style.display == "inline-block") {
		errorText = document.getElementById("error-text");
		errorText.style.display = "none";
		warningText = document.getElementById("warning-text");
		warningText.style.display = "none";
		boxesLoop3:
		for (var i = 0; i < boxes.length; i++) {
			for (var j = 0; j < stickerNums.length; j++) {
				if ((boxes[i].id.slice(3) == stickerNums[j]) && (stickerNums[j] != "")) {
					if (stickers[i] == 0) {
						boxes[i].style.backgroundColor = "#61e04a"; //green
					} else if (stickers[i] > 0) {
						boxes[i].style.backgroundColor = "#ffa73d"; //orange
						warningText.innerHTML = "You are recieving a sticker you already have!"
						warningText.style.color = "#ffa73d"; //orange
						warningText.style.display = "block";
					}
					continue boxesLoop3;
				} 
				if (stickers[i] == 0) {
					boxes[i].style.backgroundColor = "transparent";
				} else if (stickers[i] > 0) {
					boxes[i].style.backgroundColor = "#abb9d1"
				}
			}
		}
	} else if (document.getElementById("check-done-button").style.display == "inline-block") {
		var haveText = document.getElementById("have-text");
		var missingText = document.getElementById("missing-text");
		var repeatText = document.getElementById("repeats-text");
		haveText.style.display = "none";
		missingText.style.display = "none";
		repeatText.style.display = "none";
		var have = "Have: "
		var missing = "Missing: "
		var repeat = "Repeats: "
		boxesLoop4:
		for (var i = 0; i < boxes.length; i++) {
			for (var j = 0; j < stickerNums.length; j++) {
				if ((boxes[i].id.slice(3) == stickerNums[j]) && (stickerNums[j] != "")) {
					if (stickers[i] == 0) {
						boxes[i].style.backgroundColor = "#61e04a"; //green
						missing = missing + String(i) + " ";
					} else if (stickers[i] == 1) {
						boxes[i].style.backgroundColor = "#ffa73d"; //orange
						have = have + String(i)+ " ";
					} else if (stickers[i] > 1) {
						boxes[i].style.backgroundColor = "#e25538"; //red
						repeat = repeat + String(i) + " ";
					}
					continue boxesLoop4;
				} 
				if (stickers[i] == 0) {
					boxes[i].style.backgroundColor = "transparent";
				} else if (stickers[i] > 0) {
					boxes[i].style.backgroundColor = "#abb9d1";
				}
			}
		}
		if (have.length > 6) {
			haveText.style.display = "block";
			haveText.style.color = "#ffa73d"
			haveText.innerHTML = have;
		}
		if (missing.length > 9) {
			missingText.style.display = "block";
			missingText.style.color = "#61e04a";
			missingText.innerHTML = missing;
		}
		if (repeat.length > 9) {
			repeatText.style.display = "block";
			repeatText.style.color = "#e25538";
			repeatText.innerHTML = repeat;
		}
	}
}

//clears the input field and saves added stickers
function addDone() {
	clearInput();
	var newStickers = document.getElementById("input").value.split(" ");
	for (var i = 0; i < newStickers.length; i++) {
		if (newStickers[i] != "") {
			//Increments sticker count
			if (stickers[newStickers[i]] == 0) {
				numStickers++;
			}
			stickers[newStickers[i]]++;
			document.getElementById("box" + String(newStickers[i])).style.backgroundColor = "#abb9d1";
		}
	}
	document.getElementById("input").value = "";
	saveToFile();
}
//add stickers to list
function add() { 
	createInput();
	document.getElementById("add-text").innerHTML = "Add stickers that you recieved from friends, packs, etc."
	document.getElementById("add-done-button").style.display = "inline-block";
}
function removeDone() {
	var errorText = document.getElementById("error-text");
	if (errorText.style.display != "block") {
		clearInput();
		var removedStickers = document.getElementById("input").value.split(" ");
		for (var i = 0; i < removedStickers.length; i++) {
			if (removedStickers[i] != "") {
				if (stickers[removedStickers[i]] == 1) {
					numStickers--;
					document.getElementById("box" + String(removedStickers[i])).style.backgroundColor = "transparent";
				} else if (stickers[removedStickers[i]] > 1) {
					document.getElementById("box" + String(removedStickers[i])).style.backgroundColor = "#abb9d1";

				}
				if (stickers[removedStickers[i]] > 0) {
					stickers[removedStickers[i]]--;
				}
			}
		}
		document.getElementById("input").value = "";
		saveToFile();
	} else {
		//Creates flashing effect
		var blinkSpeed = 100;
		var counter = 0;
		errorText.style.opacity = "0"
		var blink = setInterval(function () {
    		errorText.style.opacity = (errorText.style.opacity == "1" ? "0" : "1");
    		counter++;
    		if (counter == 3) {
    			clearInterval(blink);
    		} 
		}, blinkSpeed);
	}
}
//remove stickers from list
function remove() {
	createInput();
	document.getElementById("add-text").innerHTML = "Remove stickers that you gave away, lost, etc."
	document.getElementById("remove-done-button").style.display = "inline-block";
}
//Begins trade
function trade() {
	createInput();
	document.getElementById("add-text").innerHTML = "First, enter the stickers that you are giving."
	document.getElementById("trade-next-button").style.display = "inline-block";
}
//Conducts next part of trade
function tradeNext() {
	var errorText = document.getElementById("error-text");
	if (errorText.style.display == "block") {
		//subtract the stickers traded
		if (document.getElementById("input").value == "") {
			clearInput();
			return;
		}
		var givenStickers = document.getElementById("input").value.split(" ");
		document.getElementById("input").value = "";
		for (var i = 0; i < givenStickers.length; i++) {
			if (givenStickers[i] != "") {
				if (stickers[givenStickers[i]] == 1) {
					numStickers--;
					document.getElementById("box" + String(givenStickers[i])).style.backgroundColor = "transparent";
				}
				if (stickers[givenStickers[i]] > 0) {
					stickers[givenStickers[i]]--;
				}
			}
		}
		saveToFile();
		document.getElementById("input").value = "";
		document.getElementById("warning-text").style.display = "none";
		document.getElementById("add-text").innerHTML = "Now, enter the stickers that you are recieving."
		document.getElementById("trade-next-button").style.display = "none";
		document.getElementById("trade-done-button").style.display = "inline-block";
	} else {
		var blinkSpeed = 100;
		var counter = 0;
		errorText.style.opacity = "0";
		var blink = setInterval(function () {
    		errorText.style.opacity = (errorText.style.opacity == "1" ? "0" : "1");
    		counter++;
    		if (counter == 3) {
    			clearInterval(blink);
    		} 
		}, blinkSpeed);
	}
}
function tradeDone() {
	clearInput();
	//add the stickers recieved
	var addedStickers = document.getElementById("input").value.split(" ");
	for (var i = 0; i < addedStickers.length; i++) {
		if (addedStickers[i] != "") {
			//Increments sticker count
			if (stickers[addedStickers[i]] == 0) {
				numStickers++;
			}
			stickers[addedStickers[i]]++;
			document.getElementById("box" + String(addedStickers[i])).style.backgroundColor = "#abb9d1";
		}
	}
	saveToFile();
	document.getElementById("input").value = "";
	//save the stickers
}
//Check the status of certain stickers
function check() {
	createInput();
	document.getElementById("add-text").innerHTML = "Enter stickers to see how many copies of that sticker you have."
	document.getElementById("check-done-button").style.display = "inline-block";
	document.getElementById("text-container").style.display = "block";
}
function checkDone() {
	var boxes = document.getElementsByClassName("box");
	for (var i = 0; i < boxes.length; i++) {
		if (stickers[i] == 0) {
			boxes[i].style.backgroundColor = "transparent";
		} else if (stickers[i] > 0) {
			boxes[i].style.backgroundColor = "#abb9d1"
		}
	}
	clearInput();
	document.getElementById("input").value = "";
	document.getElementById("text-container").style.display = "none";
	var cardTexts = document.getElementsByClassName("card-text");
	for (var i = 0; i < cardTexts.size; i++) {
		cardTexts.innerHTML = "";
	}
	document.getElementById("have-text").innerHTML = "";
	document.getElementById("missing-text").innerHTML = "";
	document.getElementById("repeats-text").innerHTML = "";
}
//Returns missing stickers
function getMissing() {
	createInput();
	document.getElementById("add-text").innerHTML = "You are missing these stickers: ";
	document.getElementById("input-container").style.display = "none";
	document.getElementById("missing-done-button").style.display = "inline-block";
	document.getElementById("copy-button").style.display = "inline-block";
	var missingCards = "";
	for (var i = 0; i < stickers.length; i++) {
		if (stickers[i] == 0) {
			missingCards += (i + " ");
		}
	}
	var cardListDisplay = document.getElementById("card-list-display");
	cardListDisplay.value = missingCards;
	document.getElementById("card-list-display-wrapper").style.display = "block";
}
function copyClipboard() {
	const clipboard = require('electron').clipboard
	clipboard.writeText(document.getElementById("card-list-display").value);
	document.getElementById("copy-button").innerHTML = "Copied!";
}
function missingRepeatDone() {
	clearInput();
	document.getElementById("card-list-display-wrapper").style.display = "none";
	document.getElementById("input-container").style.display = "block";
	document.getElementById("copy-button").innerHTML = "Copy to clipboard";
	document.getElementById("copy-button").style.display = "none";
}
function getRepeat() {
	createInput();
	document.getElementById("add-text").innerHTML = "You have repeats of these stickers: ";
	document.getElementById("input-container").style.display = "none";
	document.getElementById("repeat-done-button").style.display = "inline-block";
	document.getElementById("copy-button").style.display = "inline-block";
	var repeatCards = "";
	for (var i = 0; i < stickers.length; i++) {
		if (stickers[i] > 1) {
			repeatCards += (i + " ");
		}
	}
	var cardListDisplay = document.getElementById("card-list-display");
	cardListDisplay.value = repeatCards;
	document.getElementById("card-list-display-wrapper").style.display = "block";
}
//Sets up input area
function createInput() {
	var buttons = document.getElementsByClassName("button");
	for (var i = 0; i < buttons.length; i++){
  		buttons[i].style.display = "none";
	}
	var functionText = document.getElementById("add-text");
	functionText.style.display = "block";
	var buttonWrapper = document.getElementById("button-wrapper");
	buttonWrapper.style.border = "2px solid #98a5bc";
	buttonWrapper.style.borderRadius = "3px";
	var inputField = document.getElementById("input-field");
	inputField.style.display = "block";
}
//Clears input area
function clearInput() {
	var doneButtons = document.getElementsByClassName("done-button");
	for (var i = 0; i < doneButtons.length; i++) {
		doneButtons[i].style.display = "none";
	}
	var inputField = document.getElementById("input-field");
	inputField.style.display = "none";
	var buttonWrapper = document.getElementById("button-wrapper");
	buttonWrapper.style.border = "none";
	var buttons = document.getElementsByClassName("button");
	for (var i = 0; i < buttons.length; i++) {
  		buttons[i].style.display = "block";
	}
	document.getElementById("error-text").style.display = "none";
	document.getElementById("warning-text").style.display = "none";
}
function highlight() {
 	var boxesReset = document.getElementsByClassName("box");
 	for (var i = 0; i < boxesReset.length; i++) {
 		boxesReset[i].style.border = "1px solid #98a5bc";
 	}
 	var boxes = document.querySelectorAll(":hover");
 	box = boxes[boxes.length - 1];
    box.style.border = "2px solid black";

    var displayArea = document.getElementById("display-area");
    displayArea.style.border = "1px solid #98a5bc";

    var boxID = box.id.slice(3);
    var toolbarNum  = document.getElementById("toolbar-num");
    var stickerName = document.getElementById("sticker-name");
    var pluralName = " copies";
    if (stickers[parseInt(boxID)] == 1) {
    	pluralName = " copy";
    }
    if (boxID !== "play-area") {
    	stickerName.innerHTML = stickerNames[boxID] + " (" + stickers[parseInt(boxID)] + pluralName + ")";
    	toolbarNum.innerHTML = boxID;
	}
    toolbarNum.style.display = "block";
}
function resetHighlight() {
	var boxesReset = document.getElementsByClassName("box");
 	for (var i = 0; i < boxesReset.length; i++) {
 		boxesReset[i].style.border = "1px solid #98a5bc";
 	}
 	document.getElementById("toolbar-num").style.display = "none";
 	document.getElementById("sticker-name").innerHTML = "";
}
function saveToFile() {
	var fs = require('fs');
	var stream = fs.createWriteStream("Stickers.txt");
	stream.once('open', function(fd) {
 	for (var i = 0; i < stickers.length; i++) {
 		for (var j = 0; j < stickers[i]; j++) {
 			stream.write(String(i));
 			stream.write(" ");
 		}
 		if (stickers[i] > 0) {
 			stream.write("\n");
 		}
 	}
	stream.end();
	});
}
