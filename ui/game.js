$.widget("thms.game", {
	_create: function() {
		this._makeParts();
		this._makeBindings();
		this.numbers.choose(1);
		this.board.mark(3, 7, true);
		this.board.mark(8, 7, true);
		this.board.mark(14, 4);
	},
	_makeParts: function() {
		this.boardel = $('<div>').board();
		this.numbersel = $('<div>').numbers();
		this.numbers = this.numbersel.data("thms-numbers");
		this.board = this.boardel.data("thms-board");
		this.element.append(this.boardel);
		this.element.append("<br>");
		this.element.append(this.numbersel);
	},
	_makeBindings: function() {
		var game = this;
		this.boardel.on("boardhit", function(ev, data) {
			game.boardel.board("mark", data.pos, game.num);
		});
		this.numbersel.on("numberschoose", function(ev, data) {
			game.num = data.num;
		});
	},
});
