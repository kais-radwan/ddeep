// Imports
var gun = require('../../lib/gun/gun.js');
var sea = require('../../lib/gun/sea.js');
var _events = require('events');
var build_db = require('../db/chain');
var _load = require('./load');

// build the database
gun = build_db(gun);

// Init ddeep events
var ddeep_events = new _events();

// build ddeep
var ddeep = {
    events: ddeep_events,
    db: gun,
    load: _load
};

module.exports = ddeep, {db: gun};