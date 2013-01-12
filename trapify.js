
var Trapify = true; //₲ⱢØƁ∆Ɫ ₣Ɫ∆₲ ₮Ø ₮ṲЯИ Ø₣₣ ỊИ ϾØИϨØⱢЄ
$(document).ready(function() {
	var trap_maps = {
		A: "∆",
		B: "Ɓ",
		C: "Ͼ",
		D: "Ɖ",
		E: "Є",
		F: "₣",
		G: "₲",
		H: "ῌ",
		I: "Ị",
		J: "",
		K: "",
		L: "Ɫ",
		M: "",
		N: "И",
		O: "Ø",
		P: "Ᵽ",
		Q: "",
		R: "Я",
		S: "Ϩ",
		T: "₮",
		U: "Ṳ",
		V: "",
		W: "Ш",
		X: "",
		Y: "Ϋ",
		Z: "",
		".": "",
		"-": "︻╦╤─",
		"?": "",
		"!": "!!!",
		"--": "︻╦╤─ ︻╦╤─ ︻╦╤─",
		"[": "︻╦╤─",
		"]": "─╤╦︻",
		"?": "???",
		WITH: "ШỊ₮",
		"YOU ALL": "Ϋ'∆ⱢⱢ",
		YOU: "Ϋ'∆ⱢⱢ",
		CRAZY: "ϾЯ∆ΫΫΫ",
		"<": "︻╦╤─",
		">": "─╤╦︻",
		STUFF: "ȘĦİ†"
	};
	var ignore = ["u","user","email","username","session[username_or_email]","recaptcha_response_field"];
	$("[type=text],textarea").keyup(function() {
		var me = $(this);
		if(Trapify && $.inArray(me.attr("name"), ignore) < 0) {
			var pretrap = me.val().split(" ");
			var trap = $.map(pretrap, function(value) {
				value = value.toUpperCase();
				var trap_val = trap_maps[value];
				if(!trap_val) {
					trap_val = $.map(value, function(v) {
						return trap_maps[v] ? trap_maps[v] : v
					}).join("")
				}
				return trap_val
			}).join(" ");
			me.val(trap);
		}
		return false
	});

});