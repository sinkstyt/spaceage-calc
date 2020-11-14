# _Welcome to the Space Age Life Expectancy Calculator_
-----------------------------------------------------------
### By _**Tyler Sinks**_
![A smiling photo of the author](src/assets/img/TylerfromIMG_1771.png)

## _What the Whole Thing Does_
* it takes in your age, sex, country and determines life expectancy given the possiblitly that you live on:
  * Earth,
  * Mercury,
  * Venus,
  * Jupiter, or
  * Mars
* of course the "years" expectancy on planets aside from Earth are adjusted for their orbit-times in comparison to Earth's
* Created 13 November, 2020
* Last major revision 13 November, 2020

### _This Project's Reason for Being_
_This project functions as an exploratory work. Tyler built it with the hope that he will get practice in a test-driven development paradigm with:_
* **building out an environment** inclusive of these tools:

  * **node packet manager** (npm) for managing packages
  * **webpack** for bundling and slimming down the `<link>` party that used to run amok in previous `<head>`s
  * **linting** namely ESLint this go around (version 6.3.0)
  * **testing** using **Jest**
  * **more ECMAScript2015 tools** like Classes and template literals, `import` and `export` keywords for .js files

* the Epicodus program includes the following modules *(with start dates listed above each module):*
![A portion of a screenshot from the Epicodus website describing my particular cohort](src/assets/img/EpicodusModules.png)
* initially created in response to a project prompt called "Super Galactic Age Calculator" to be designed and coded completely solo and within a nine hour window on **"13 November, 2020"**

## Setup/Installation Requirements

**Software that this project requires:**
1. a web browser
2. a plain text editor, such as `Basic Text Editor` available for Windows devices, or developer-go-to text editors such as Visual Studio Code, Sublime Text, Atom, or VIM _(for that old-school look)_
3. a command line (or "Terminal.app" on a Mac) program for entering git prompts as they are offered/suggested to be used verbatim from this README.md
4. External libraries and dependencies will be installed when following the **Installing with npm Route**
5. It may be worthwhile checking to ensure git is installed on one's machine if local installation is desired:
    5a. from the command line or terminal:
        `$ git --version`
        * For reference, my machine told me I have version 2.23.0

**Most straightforward way to just see the rendered page:**
* [Click this link](https://sinkstyt.github.io/spaceage-calc/index.html) to load the site as it is currently hosted by GitHub Pages
    * _Should this link fail you in any way, you could alternatively copy and paste the full address below into a web browser's address bar:_
    #### https://sinkstyt.github.io/spaceage-calc/index.html ####

## To Install the Whole Thing Locally

**Let's Call This: "Taking the `npm` Route"**
1. Launch your terminal application (Terminal.app comes installed as default for the Mac OS)
2. Navigate to (or even first _create_) the directory to which you would like to copy the project's files to your machine. _AN EXAMPLE:_
    2a. `$  pwd`
    * > `{Users}\{YOUR_USER_NAME}\`
    2b. `$  mkdir spaceage-calculator`
    2c. `$  cd spaceage-calculator`
    * > `{Users}\{YOUR_USER_NAME}\spaceage-calculator`
3. Now that you are in the destination directory, pull the files down to your machine from this README's GitHub repository. A suggested series of command line prompts follows by which one might do this:
    3a. `$~  pwd`
    * > `{Users}\{YOUR_USER_NAME}\spaceage-calculator`
    3b. `$~  git clone https://github.com/sinkstyt/spaceage-calc.git`[^bignote]
        _Something like this will then be printed to your console:_
        > Cloning into 'live-share'...
        > remote: Enumerating objects: 72, done.
        > remote: Counting objects: 100% (72/72), done.
        > remote: Compressing objects: 100% (58/58), done.
        > remote: Total 6989 (delta 24), reused 39 (delta 14), pack-reused 6917
        > Receiving objects: 100% (6989/6989), 51.25 MiB | 9.65 MiB/s, done.
        > Resolving deltas: 100% (4274/4274), done.
4. Now you are welcome to allow yourself a feeling of accomplishment since the necessary files have been brought to your local directory. **Nearly there.**
5. From the root directory of this project's files, launch your text editor of choice (eg. Visual Studio Code):
    `code .`
    > The expected result of this command is a new window opens in VSCode with the root directory and all included files accessible from the File Explorer.
6. From VSCode's terminal, navigate to the root directory for this project (very likely just pressing `<CONTROL> + <BACKTICK>` will open the VSCode terminal to just the right directory)
7. `$ npm install`
8. `$ npm run build`
9. `$ npm start`

## Known Bugs

_I am sure that some of the hypertext links will break within days if not hours_
_No bugs known at time of last major revision_

## Support and Contact Details

_Please let me know if you would like to share suggestions for the page. I am fine with being reached by email._
_tyler.sinks@gmail.com_

## Technologies Used

_html_
_css_
_Bootstrap_
_jQuery_
_JavaScript_
_npm_
_webpack_
_ESLint_
_Jest_

### License

*MIT 2.0*

Copyright (c) 2020 **_Tyler Sinks_**

[^bignote]: If you're having trouble finding that nice green "Code" button:
    * a .png of it at time of README composition is this: ![the green Code button seen near the top right of any repository hosted on GitHub](src/assets/img/greenCodeButton.png)
    * Alternatively &mdash; should you not be able to use this button to load this project's URL to your clipboard &mdash; I give the URL to you here as well:
    https://github.com/sinkstyt/spaceage-calc.git