$.widget("thms.numbers", {
	options: {},
	_create: function() {
		this._makeElements();
		this._makeBindings();
	},
	_makeBindings: function() {
		var numbers = this;
		this.element.on('click', function(ev) {
			var i = numbers.element.find("td").index(ev.target) + 1;
			numbers._trigger('choose', null, { num: i });
		});
		this.element.on('numberschoose', function(ev, data) {
			numbers._update(data.num);
		});
	},
	_makeElements: function() {
		var tr = $("<tr>");
		for (var i = 1; i<=9; i++) {
			tr.append($("<td>" + i + "</td>"));
		}
		this.element.append($("<table>").append(tr));
	},
	_update: function(num) {
		this.num = num;
		var cells = this.element.find("td");
		for (var i=0; i<9; i++) {
			cells.eq(i).css("background-color", "white");
		}
		cells.eq(num - 1).css("background-color", "yellow");
		this._trigger('number', null, { num: num });
	},
	choose: function(num) {
		this._trigger('choose', null, { num: num });
	}
});
