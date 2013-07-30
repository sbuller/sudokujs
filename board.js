$.widget("thms.board", {
	options: {},
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
	mark: function(pos, num) { this.cell(pos).text(num); },
	val: function(pos) { return this.cell(pos).text(); },
});
