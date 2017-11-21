import $ from 'jQuery';

class Paginator {
    constructor(settings) {
        this.settings = settings;
        this.$container = $(settings.elem);
    }
    test() {
        //console.log('test');
        return true;
    }
}
let options = {};
options.test = true;
options.elem = '.container';
let page = new Paginator(options);
page.test();