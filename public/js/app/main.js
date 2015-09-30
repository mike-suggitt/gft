define(function(require) {

    var $ = require('jquery');
    var Subject = require('./subject');
    var ItemList = require('./itemlist');

    var s = new Subject();
    var il = new ItemList('#itemlist');

    s.observe(il);


    var $itemInput = $('#item_name');

    $('#addItem').click(function() {
        s.notify('add', $itemInput.val());
    });

});