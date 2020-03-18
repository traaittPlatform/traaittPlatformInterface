var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'traaittPlatform';
config.appDescription = 'WalletShell';
config.appSlogan = 'traaitt digital software distribution!';
config.appId = 'traaittplatform.walletshell';
config.appGitRepo = 'https://github.com/traaittplatform/traaittplatform-walletshell';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 23896;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'etrx';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'traaitt-service';

// version on the bundled service (traaitt-service)
config.walletServiceBinaryVersion = "v0.13.0";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. traaitt-service)
config.walletServiceRpcPort = 8337;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://traaittchain.com/transaction.html?hash=[[TX_HASH]]';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'us-east.traaittnode.com';


// remote node list update url, set to null if you don't have one
// for ETRX:
// raw list: https://raw.githubusercontent.com/turtlecoin/turtlecoin-nodes-json/master/turtlecoin-nodes.json
// filtered: https://trtl.nodes.pub/api/getNodes
config.remoteNodeListUpdateUrl = 'https://raw.githubusercontent.com/traaittplatform/traaittplatform-nodes/master/traaittplatform-nodes.json';

// set to false if using raw/unfiltered node list
config.remoteNodeListFiltered = false;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'us-east.traaittnode.com',
];
config.remoteNodeCacheSupported = true;
config.remoteNodeSslSupported = true;

// your currency name
config.assetName = 'traaittPlatform';
// your currency ticker
config.assetTicker = 'ETRX';
// your currency address prefix, for address validation
config.addressPrefix = 'TR';
// standard wallet address length, for address validation
config.addressLength = 97;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction
config.minimumFee = 1;
// minimum amount for sending transaction
config.mininumSend = 1;
// default mixin/anonimity for transaction
config.defaultMixin = 2;
// to represent human readable value
config.decimalPlaces = 2;
// to convert from atomic unit
config.decimalDivisor = 10 ** config.decimalPlaces;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
