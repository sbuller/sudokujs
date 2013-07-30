$.widget("thms.game", {
	_create: function() {
		this._makeParts();
		this._makeBindings();
		this.numbers.data("thms-numbers").choose(1);
	},
	_makeParts: function() {
		this.board = $('<div>').board();
		this.numbers = $('<div>').numbers();
		this.element.append(this.board);
		this.element.append("<br>");
		this.element.append(this.numbers);
	},
	_makeBindings: function() {
		var game = this;
		this.board.on("boardhit", function(ev, data) {
			game.board.board("mark", data.pos, game.num);
		});
		this.numbers.on("numberschoose", function(ev, data) {
			game.num = data.num;
		});
	},
});
