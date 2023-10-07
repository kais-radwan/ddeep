
var on:any = (instance:any, listener:on_listener, cb:Function) => {

    if (listener === "listen" || listener === "any" || !listener) {
        instance.subscribe( (data:any) => { if (cb) cb(data) });
    }

    if (listener === "update") {
        var cache:any;
        instance.subscribe( (data:any) => {
            var match = data;
            if (typeof match === "object") match = JSON.stringify(match);
            if (data !== cache) {
                cb(data);
                window.ddeep.events.emit('msg', data);
                cache = match;
            }
        })
    }

    if (listener === "delete") {
        instance.subscribe( (data:any) => {
            if (data === null) { cb(null) };
        })
    }

}


module.exports = on;