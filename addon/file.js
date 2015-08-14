import Ember from 'ember';

export default Ember.Object.extend({
    getSecureUrl: function () {
        return this.get('url').replace("http://", "https://s3.amazonaws.com/");
    }
});