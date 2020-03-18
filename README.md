## WalletShell - GUI wallet for traaittPlatform.

![WalletShell Screens](https://github.com/traaittPlatform/traaittPlatform-WalletShell/blob/master/src/WalletShell.gif "WalletShell Screens")

### Features:

This wallet contains the basic functions required to manage your TurtleCoin assets:

* Wallet creation:
  * Create new wallet.
  * Import/recover from private keys OR mnemonic seed.
* Basic wallet operation/transactions:
  * Open an existing  wallet
  * Display wallet address & balance
  * Display & Backup private keys/seed
  * Sending/transferring. Integrated Address or Payment ID are supported. Also provides address lookup from your addressbook.
  * Transactions history listing/sorting/searching/detail.
  * Incoming transaction notification.
  * Export incoming, outgoing, or all transactions to csv file.
  * Rescan wallet from specific block height.
  * Perform wallet optimization.
  * Utilities: generate payment id and integrated address.
* Address book:
  * Add/Edit/Delete address entry.
  * Listing/sorting/searching existing entries.
  * Allow to store same wallet address with different payment id.
  * Autosave address after sending to new/unknown recipient
  * Allow to optionally create password protected address book.
* Misc:
  * Option to use system tray (on closing/minimizing wallet)
  * Provides list of public nodes, fetch/updated daily from [turtlecoin-nodes-json](https://github.com/turtlecoin/turtlecoin-nodes-json) repo.
  * Allow to add custom node address.
  * Theme: Dark & Light Mode
  * [Keyboard shortcuts](docs/shortcut.md)

### Download &amp; Run WalletShell

#### Windows:
1. Download the latest installer here: https://github.com/traaittplatform/traaittplatform-walletshell/releases/latest
2. Run the installer (`walletshell-<version>-win-setup.exe`) and follow the installation wizard.
3. Launch WalletShell via start menu or desktop shortcut.

#### GNU/Linux (AppImage):
1. Download latest AppImage bundle here: https://github.com/traaittplatform/traaittplatform-walletshell/releases/latest
2. Make it executable, either via GUI file manager or command line, e.g. `chmod +x walletshell-<version>-linux.AppImage`
3. Run/execute the file, double click in file manager, or run via shell/command line (See: https://docs.appimage.org/user-guide/run-appimages.html)

#### macOS
1. Download latest archive here: https://github.com/traaittplatform/traaittplatform-walletshell/releases/latest
2. Extract downloaded zip archived
3. Run the executable binary (`WalletShell.app/Contents/MacOs/WalletShell`)

### Using WalletShell
Please visit our wiki page: [WalletShell User Guide](../../wiki).

### Building/Packaging WalletShell
You need to have `Node.js` and `npm` installed, go to https://nodejs.org and find out how to get it installed on your platform.

Once you have Node+npm installed:
```
# assuming you're building it on GNU/Linux
# first, download traaitt-service binary for each platform
# from traaittPlatform official repo
# https://github.com/traaittplatform/traaittplatform/releases
# extract the traaitt-service executable somewhere

# clone the repo
$ git clone https://github.com/traaittplatform/traaittplatform-walletshell
$ cd traaittPlatform-WalletShell

# install dependencies
$ npm install

# create build+dist directory
$ mkdir -p ./build && mkdir -p ./dist

# copy/symlink icons from assets, required for packaging
$ cp ./src/assets/icon.* ./build/

# build GNU/Linux package
$ mkdir -p ./bin/lin
$ cp ../traaittPlatform/build/src/traaitt-service ./bin/lin/
$ npm run dist-lin

# build Windows package (you need to have wine 2.0+ installed)
$ mkdir -p ./bin/win
$ cp ../traaittPlatform/build/src/traaitt-service ./bin/win/
$ npm run dist-win

# build OSX package
$ mkdir -p ./bin/osx
$ cp ../traaittPlatform/build/src/traaitt-service ./bin/osx
$ npm run dist-mac
```

Resulting packages or installer can be found inside `dist/` directory.

![WalletShell](docs/walletshell.png)
