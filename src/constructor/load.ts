
type db_loader_options = {
    peers: Array<string> | null,
}

// load database
var load_database = function (args:Array<any>) {

    // require database radix and indexedDB
    require('../../lib/gun/lib/radix'), 
    require('../../lib/gun/lib/radisk'), 
    require('../../lib/gun/lib/store'),
    require('../../lib/gun/lib/rindexed');

    var options:db_loader_options = args[1];
    var db = new window.ddeep.db({...options, localStorage: false});

    return db;

};

var load = function (...args:any) {

    var type = args[0];
    var options = args;

    if (type === 'database') {
        return load_database(args)
    }

}

module.exports = load;