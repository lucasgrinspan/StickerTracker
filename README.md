# StickerTracker
Track your World Cup stickers

Built with JavaScript, HTML, CSS, using Electron

Usually with the World Cup albums, you have to write down lists or print them out and highlight the ones you already have. This makes it hard to specifically see which stickers your friends are missing or have repeated since no one follows a common format. Also, you have to cross reference the list constantly when discussing new stickers or trying to set up a trade. This program fixes all those issues by providing a fast way to see which stickers you have, are missing, and have repeated. Setting up trades, sharing your lists, and managing the stickers is quick and easy on the Sticker Tracker.

***
When you start the program for the first time, you'll get to a screen that looks like this:
![Startup screen](https://github.com/lucasgrinspan/StickerTracker/blob/master/Screenshots/StartScreen.png)
Each square in the grid on the right represents a sticker, but they're all empty because no stickers have been added yet. In total, there are 682 collectible stickers.

Once you start collecting stickers and adding them through the program, the screen will look something like this:
![In progress screen](https://github.com/lucasgrinspan/StickerTracker/blob/master/Screenshots/ProgressScreen.png)
Each shaded box represents a sticker that you own. Additionally, the program counts the stickers for you and displays a progress percentage. All of the buttons on the left represent a specific feature. Let's go through them.

## LiveTime Hover Feature
![Hover feature in action](https://github.com/lucasgrinspan/StickerTracker/blob/master/Screenshots/HoverFeature.png)
Hovering over any cell on the grid with your pointer will show you the name of the card, how many copies you have, and the card number at the top. This works whenever the grid is visible, even if you are adding or removing cards using the features below.

## Add Sticker
![Adding a sticker](https://github.com/lucasgrinspan/StickerTracker/blob/master/Screenshots/AddFeature.png)
When you click "Add Sticker", you will be provided with a text box where you enter the stickers that you recieved. As you type, the program will highlight the boxes with your additions live. If the box is green, that means you are recieving your first copy of that sticker. If it is orange, you already have the sticker and are recieving another copy. Clicking Done saves your changes and returns you back to the main screen.

## Remove Sticker
![Removing stickers](https://github.com/lucasgrinspan/StickerTracker/blob/master/Screenshots/RemoveFeature.png)
If you wish to delete any stickers from the program, type them into the box. The program also automatically highlights the boxes in red representing the stickers that you are removing. Clicking Done saves your changes and returns you back to the main page.

## Conduct Trade
![Trading stickers](https://github.com/lucasgrinspan/StickerTracker/blob/master/Screenshots/Trade1.png)
![Trading stickers](https://github.com/lucasgrinspan/StickerTracker/blob/master/Screenshots/Trade2.png)
The Conduct Trade button basically combines the functions of both Add and Remove together. The program first prompts you to input which stickers you are giving away and which stickers you are recieving. It also warns you when you are recieving a sticker that you already have or if you are giving away your last copy (making the trade a poor one).

## Check Sticker
![Checking stickers](https://github.com/lucasgrinspan/StickerTracker/blob/master/Screenshots/CheckFeature.png)
If your friend sends you a list of stickers and asks you which stickers of which you're missing or that you don't have. It's tedious and time consuming to individually check each sticker with your album or a written list. In the program, you click "Check Sticker" and you type in the list. The program will then list and highlight the status of those stickers. Green means you have zero copies. Orange means you have only one. Red means you have multiple copies. The text input and the program feedback are both scrollable.

## Get Missing
![Getting missing stickers](https://github.com/lucasgrinspan/StickerTracker/blob/master/Screenshots/MissingFeature.png)
If you need to share the list of stickers that you're missing, this feature outputs a space separated list of stickers that you currently need. There's even a convenient Copy to Clipboard button.

## Get Repeats
![Getting repeated stickers](https://github.com/lucasgrinspan/StickerTracker/blob/master/Screenshots/RepeatFeature.png)
If you need to share a list of stickers that you have extra, then this feature will return a list of stickers that you have more than one of.

## Error Handling
![Faulty input](https://github.com/lucasgrinspan/StickerTracker/blob/master/Screenshots/ErrorText1.png)
If you type in something that is not formatted correctly, basically anything that is not a space or a number between 0 and 681, then the text box will turn red, alerting you that something's wrong.
![Removing a sticker you don't have](https://github.com/lucasgrinspan/StickerTracker/blob/master/Screenshots/ErrorText2.png)
If you try to remove a sticker you don't have, by using the Remove feature or the Trade feature, then the program will also tell you of your mistake. 

## Planned Features
* Share albums with friends using codes and automatically set up compatible trades between them
* Provide way to view images of each sticker
* Import and export the album list through txt files
* Add support for future/past World Cup albums

All changes between uses are saved to the local files. Collect responsibly. Thank you for viewing!
