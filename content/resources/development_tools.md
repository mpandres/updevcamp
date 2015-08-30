+++
date = "2015-01-19T08:34:02+08:00"
title = "Development Tools"
authors = ["neil"]

+++

Here are the recommended development tools of the Development Committee.

## Linux
**Supported Distributions**
1. Ubuntu (Precise Pangolin)
2. ElementaryOS (Luna)
3. Linux Mint (Cinnamon)

Before installing, please make sure to update and upgrade your system.
```bash
sudo apt-get update
sudo apt-get upgrade
```

### Firefox

To install Firefox, input the following via terminal:
```bash
sudo apt-get install firefox
```

### Google Chrome
**Installation**
1. Download the [package](https://www.google.com/chrome/browser/desktop).
2. Open the downloaded package using the Software Center app.
3. Within the app, you can now install Google Chrome.

**Plug-ins**

1. For testing your own API service, you can check [Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en).
2. For picking colors from websites, you can check [ColorPick Eyedropper](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en).

### Sublime Text 3

To install Sublime Text 3, input the following via terminal:
```bash
sudo add-apt-repository ppa:webupd8team/sublime-text-3
sudo apt-get update
sudo apt-get install sublime-text-installer
```

Congrats! Now you have Sublime Text 3 installed in your machine.

Customize your editor for more uniform environment:

1. Install Sublime's package manager. Instructions can be found here: ```https://sublime.wbond.net/installation```
2. Open SublimeText 3, select ```Package Control:Install Package``` (shortcut: CTRL+SHIFT+P)
3. Search and install ```Theme - Soda SolarizedDark```
4. Open Preferences > Settings - User and activate the theme, color scheme, and indent using spaces with this configuration:

```javascript
{
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
  "detect_indentation": false,
  "color_scheme": "Packages/Color Scheme - Default/Solarized (Dark).tmTheme",
  "theme": "Soda SolarizedDark.sublime-theme",
  "ignored_packages":
  [
    "Vintage"
  ]
}
```

Finally, restart Sublime Text.

### Atom

**Installation**
1. Download the [package](https://atom.io).
2. Open the downloaded package using the Software Center app.
3. Within the app, you can now install Atom.

**Configuration**
1. Run Atom.
2. Go to ```Settings```. (shortcut: Ctrl + ,)
3. Go to ```Themes``` tab. Search and install ```Solarized Dark UI```.
4. Set your theme and syntax to ```Solarized Dark```.

### Git

To install git, input the following via terminal:
```bash
sudo apt-get install git
```
