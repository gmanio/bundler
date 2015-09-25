$(document).on('click', function(){
    alert('test');
})

var Note = Backbone.Model.extend({

    initialize: function() {},

    author: function() {},

    coordinates: function() {},

    allowedToEdit: function(account) {
        return true;
    }

});