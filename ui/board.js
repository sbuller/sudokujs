$.widget("thms.board", {
	options: {
		highlight: { "background-color": "#CC4" },
		background: { "background-color": "white" },
		clue: { "font-weight": "bolder", "font-size": "x-large" },
		mark: { "font-weight": "normal", "font-size": "medium" },
	},
	_create: function() {
		this._makeElements();
		this._drawLines();
		this._bindClicks();
	},
	_makeElements: function() {
		var table = $("<table>");
		for (var j=0; j<9; j++) {
			var tr = $("<tr>");
			for (var i=0; i<9; i++) {
				tr.append($("<td>"));
			}
			table.append(tr);
		}
		table.css(this.options.background);
		this.element.append(table);
	},
	_drawLines: function() {
		this.col(3).css("border-left", "solid 3px black");
		this.col(6).css("border-left", "solid 3px black");
		this.row(3).css("border-top", "solid 3px black");
		this.row(6).css("border-top", "solid 3px black");
	},
	_bindClicks: function() {
		var board = this;
		this.element.on('click', function(ev) {
			var i = board.element.find("td").index(ev.target);
			board._trigger('hit', null, { pos: i });
		});
	},
	cell: function(pos) { return this.element.find("td").eq(pos); },
	row: function(i) { return this.element.find("tr").eq(i).children(); },
	col: function(i) { return this.element.find("td:nth-child(" + (i + 1) + ")"); },
	mark: function(pos, num, clue) {
		var cell = this.cell(pos);
		cell.text(num);
		if (clue) {
			cell.css(this.options.clue);
		} else {
			cell.css(this.options.mark);
		}
	},
	val: function(pos) { return this.cell(pos).text(); },
	highlight: function(pos) { this.cell(pos).css(this.options.highlight); },
	unhighlight: function(pos) { this.cell(pos).css(this.options.background); },
});
