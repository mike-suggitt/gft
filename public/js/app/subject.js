define(function(require) {

    var Subject = function() {
        this._observers = [];
    };
    Subject.prototype.observe = function(observer) {
        this._observers.push(observer);
    };

    Subject.prototype.unobserve = function(){
        for(var i=0;i<this._observers.length;i++) {
            if( this._observers[ i ] === obj ) {
                this._observers.splice(i, 1);
                break;
            }
        }
    };

    Subject.prototype.notify = function() {
        for(var i=0;i<this._observers.length;i++) {
            this._observers[i].notify.apply(this._observers[i], arguments);
        }
    };

    return Subject;
});