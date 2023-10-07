var on = require('./on');

// define types
type on_listener = "listen" | "update" | "delete" | "any" | null | Function;

function build_chain (gun:any) {

    // on listeners
    gun.chain.subscribe = gun.chain.on;
    gun.chain.on = function (listener:on_listener, cb:Function) {
        if (typeof listener === 'function') {
            cb = listener;
            listener = "any";
        }
        on(this, listener, cb);
    };

    // return the new gun
    return gun;

}

module.exports = build_chain;