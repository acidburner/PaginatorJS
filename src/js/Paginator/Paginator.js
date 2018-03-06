'use strict';

var $ = require('jquery');

class Paginator {
    constructor(settings) {
        if (!settings) {
            settings = {};
            settings.elem = "#paginator";
        }
        this.settings = settings;
        this.$container = $(settings.elem);
    }
    test() {
        console.log('test');
        return true;
    }
}