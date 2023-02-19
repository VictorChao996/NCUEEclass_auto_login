# NCU EEclass auto login
<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#intro">Intro 介紹</a></li>
        <li><a href="#feature">Feature 特色</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#notices">Notices</a></li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

### Intro
This is a simple node script for login NCU eeclass. 懶人專用登入程式。

### Feature 
1. Auto login to NCU eeclass system.
2. Auto Logout and close the window after the "waiting time"
   - default: the account will not logout automatically
   - You can set your own waiting time in the .env file

> **note** see installation for more details.

### Built With
- node.js
- npm package
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
- **Windows Enviroment**
- [Microsoft Edge Driver](https://developer.microsoft.com/zh-tw/microsoft-edge/tools/webdriver/)
- install node.js

### Installation
1. clone the this repo
2. install npm package
```shell
    npm init
    npm install
```
3. make your own .env file with the following content
```txt
ACCOUNT = "[your NCU student account]"
PASSWORD = "[Your NCU student password]"
WAIT_TIME = "[Time is milliseconds]"
```
- Example 1 (close after 8 seconds):
```
ACCOUNT = "account"
PASSWORD = "password"
WAIT_TIME = "8000"
```
- Example 2 (Don't close automatically):
```
ACCOUNT = "account"
PASSWORD = "password"
```
> **Warning** This step could not be skipped !

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage
### Execute from the folder
- Double click on the execute.bat file to execute the script.

### Execute from anywhere
- Make a shortcut for execute.bat for where you want to run the script.**(Ex: Desktop)**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Notices
> **Warning**
> - The browser driver and index.js should be in the same file.

> **Note**
> - 參考文件:https://www.selenium.dev/documentation/webdriver/getting_started/first_script/