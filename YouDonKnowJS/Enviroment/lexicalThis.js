const log = console.log;

var obj = {
  count: 0,
  id: 'awesome',
  cool: function coolFn() {
    if (this.count < 1) {
      setTimeout(() => {
        this.count++;
        console.log('awesome?');
      }, 100);
    }
  },
  sexy() {
    console.log(this.id);
  }
};

var id = 'not awesome';

obj.cool();
obj.sexy();