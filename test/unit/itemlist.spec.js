
define(function(require) {

    'use strict';

    var $ = require('jquery');
    var ItemList = require('app/itemlist');

    describe('ItemList', function() {

        var sandbox, itemlist;

        beforeEach(function() {
            sandbox = sinon.sandbox.create();
            $('body').html('<div id="itemlist"></div>');
            itemlist = new ItemList('#itemlist');
        });

        afterEach(function() {
            sandbox.restore();
        });

        it('Can add an item', function() {
            itemlist.notify('add', 'testItem');
            expect(itemlist._items.length).to.equal(1);
            expect(itemlist._items[0]).to.equal('testItem');
        });

        it('Can delete an item', function() {
            itemlist._items = ['testItem'];
            itemlist.notify('delete', 0);
            expect(itemlist._items.length).to.equal(0);
        });

        it('Re-renders when an item is added', function() {
            var stub = sandbox.spy(itemlist, 'render');
            itemlist.notify('add', 'testItem');
            expect(stub).to.have.been.called;
        });

        it('Re-renders when an item is deleted', function() {
            itemlist._items = ['testItem'];
            var stub = sandbox.spy(itemlist, 'render');
            itemlist.notify('delete', 0);
            expect(stub).to.have.been.called;
        });
    });

});
