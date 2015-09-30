define(function(require) {

    var $ = require('jquery');
    var Handlebars = require('handlebars');
    var template = require('text!./itemlist.hbs');

    var ItemList = function(el){
        this.$el = $(el);
        this.template = Handlebars.compile(template);
        this._items = [];
        this.render();
    };
    ItemList.prototype.notify = function(topic, item) {
        if(topic == 'add') {
            this.addItem(item);
        }
        else if(topic == 'delete') {
            this.removeItem(item);
        }
    };

    ItemList.prototype.addItem = function(item) {
        this._items.push(item);
        this.render();
    };

    ItemList.prototype.removeItem = function(index) {
        this._items.splice(index, 1);
        this.render();
    };


    ItemList.prototype.render = function() {
        var html = this.template({
            items: this._items
        });
        this.$el.html(html);
        $('.delete', this.$el).off().click(function(e) {
            var index = $(e.currentTarget).parent().attr('data-id');
            this.notify('delete', index);
        }.bind(this))
    };

    return ItemList;
});