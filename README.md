A very simple script to send the IP address of the computer it is running on to an e-mail address created using [Ethereal](https://ethereal.email/).

# Why?

My dad asked me to make a program that gets the computer's IP address and sends an e-mail with it somewhere. This is the simplest way I could come up to do just that.

# TL;DR installation and setup

Make sure you have [Node.js](https://nodejs.org/en/download) installed. Create an [Ethereal e-mail](https://ethereal.email/). Clone this repository. Create a .env file and put the account details in it with the `ADDRESS` and `PASSWORD` keys. Use npm to install dependencies and run ip-mailer via either npm or Node.

# Extensive(-ish) installation and setup
### Installing node

First, make sure an up-to-date version of Node.JS is installed.
To check if Node is installed, open a terminal/command prompt and run the following command:
```sh
node -v
```

If you don't have it installed, you can get it from here:
- https://nodejs.org/en/download

### Downloading ip-mailer

You can download ip-mailer manually via Github's interface by pressing **Code** and then **Download ZIP**, or through cloning it via git (recommended). To do this, navigate to your Downloads folder (or anywhere convenient), then run the following command in a terminal:
```sh
git clone https://github.com/valenthyne-ut/ip-mailer
```

### Setting up an Ethereal account

In your browser, go to https://ethereal.email/ and create an account. Save the account details somewhere since the credentials are only shown once.

After this, open the root folder of ip-mailer and create a file with the name `.env`. Then, in this file, write the following:

```properties
ADDRESS=__YOUR_ETHEREAL_EMAIL_ADDRESS_HERE__
PASSWORD=__YOUR_ETHEREAL_EMAIL_PASSWORD_HERE__
```

and substitute the two fields with your e-mail and password provided to you by Ethereal.

### Running ip-mailer

Running ip-mailer is very simple. All you have to do is install it's dependencies, build it and start it via either npm or Node. To do this, run the following commands whilst you're in the root folder of ip-mailer:

```sh
npm install --omit=dev
npm run build

# To start ip-mailer via npm..
npm start

# To start ip-mailer via Node..
node ./dist/index.js
```

Now, if you did everything right, you can check your messages [here](https://ethereal.email/messages) and see that you've received a new one with the current date and time. If you click on it, the IP address should be present in the body.