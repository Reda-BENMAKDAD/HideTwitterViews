# hideTwitterViews

## Description

>`hideTwitterViews` is a simple Chrome extension that removes the views count from tweets on Twitter. With this extension, you can browse Twitter without seeing the number of views for each tweet.

## Installation

To install the `hideTwitterViews` extension, follow these steps:

1. Download the source code by clicking on the "Code" button on the GitHub repository page and then clicking "Download ZIP" || or clone the repository.
2. Extract the downloaded ZIP file to a folder on your computer.
3. Open the Chrome browser and go to the "Extensions" page (chrome://extensions/).
4. Turn on the "Developer mode" toggle in the top right corner of the page.
5. Click on the "Load unpacked" button in the top left corner of the page.
6. Select the folder where you extracted the extension files and click "Select".

That's it! The `hideTwitterViews` extension should now be installed in your Chrome browser.

## Usage

Once the extension is installed, simply browse Twitter as you normally would. The views count will no longer be displayed for any tweet.

## Contributing

If you'd like to contribute to this project, feel free to submit a pull request or open an issue on the [GitHub repository](https://github.com/Reda-BENMAKDAD/hideTwitterViews).

## License

This project is licensed under the [MIT License](https://github.com/Reda-BENMAKDAD/HideTwitterViews/blob/main/LICENSE).

# Technologies
i used html, css, javascript to create this extension, nothing crazy, just standard chrome extensions stuff.

# Idea
when twitter added this views thing, it annoyed me, so I learned how to make chrome extensions and made this to remove the twitter view.

# How a chrome extension works
it is really easy to understand, a chrome extension is just a folder that contains the following things:
- a manifest.json file: this file contains information about the extension, basically it tells the browser what is the name of the extension, what is the version, what is the icon, what is the description, what is the popup page, what are the scripts that should run and on wich pages, etc...

- a popup.html file: this file contains the html code of the popup page, the popup page is the page that opens when you click on the extension icon, it is a small page that can contain anything you want, it can be a form, a button, a video, an image, etc...

- a popup.js file: this file contains the javascript code of the popup page, it is the code that will run when you click on the extension icon, it can be used to make the popup page interactive, for example, you can make a button that changes the background color of the page when you click on it.

- a content.js file: this file contains the javascript code that will run on the pages that you specified in the manifest.json file, it can be used to modify the content of the page, for example, you can use it to remove the views count from tweets on twitter.

> that's it to get started, you just make a manifest.json file to tell what scripts should run and on which sites, you make the scripts, and a popup page if you want, and that's it, you have a chrome extension.

for more information, you can check the [official documentation](https://developer.chrome.com/docs/extensions/mv3/getstarted/).

