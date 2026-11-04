"use strict";
var _s0_t0;
export {_s0_t0 as buildGsubThousands};
var r1_buildGsubThousands, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
_s0_t0 = r1_buildGsubThousands = function (r145_gsub, r145_para) {
    var _r145_t1, _r145_t2;
    var r145_rec = r145_gsub.beginBlock();
    var r145_Thousand = r145_gsub.addCommonFeature(r145_gsub.createFeature("THND"));
    var _r145_t0 = r145_gsub.ChainRuleBuilder();
    var r145_xn$chainrule$1aao = _r145_t0[0];
    var r145_xn$reverserule$3qIs = _r145_t0[1];
    var r145_numberGlyphIDs = ["zero.lnum", "one.lnum", "two.lnum", "three.lnum", "four.lnum", "five.lnum", "six.lnum", "seven.lnum", "eight.lnum", "nine.lnum"];
    var r145_nd = function (r146_s) {
        var _r146_t0, _r146_t1;
        return r145_numberGlyphIDs.map(function (r147_x) {
            var _r147_t0, _r147_t1;
            return "" + r147_x + ".nd" + r146_s;
        });
    };
    var r145_a = r145_Thousand.addLookup(r145_gsub.createLookup({
        "type": "gsub_chaining",
        "rules": [r145_xn$chainrule$1aao({
            "left": ["period"],
            "right": null
        }, {
            "left": r145_numberGlyphIDs,
            "right": r145_nd(2)
        }, {
            "left": r145_numberGlyphIDs,
            "right": null
        }, {
            "left": r145_numberGlyphIDs,
            "right": null
        }), r145_xn$chainrule$1aao({
            "left": r145_nd(2),
            "right": null
        }, {
            "left": r145_numberGlyphIDs,
            "right": r145_nd(1)
        }), r145_xn$chainrule$1aao({
            "left": r145_nd(1),
            "right": null
        }, {
            "left": r145_numberGlyphIDs,
            "right": r145_nd(6)
        }), r145_xn$chainrule$1aao({
            "left": r145_nd(6),
            "right": null
        }, {
            "left": r145_numberGlyphIDs,
            "right": r145_nd(5)
        }), r145_xn$chainrule$1aao({
            "left": r145_nd(5),
            "right": null
        }, {
            "left": r145_numberGlyphIDs,
            "right": r145_nd(4)
        }), r145_xn$chainrule$1aao({
            "left": r145_nd(4),
            "right": null
        }, {
            "left": r145_numberGlyphIDs,
            "right": r145_nd(3)
        }), r145_xn$chainrule$1aao({
            "left": r145_nd(3),
            "right": null
        }, {
            "left": r145_numberGlyphIDs,
            "right": r145_nd(2)
        })]
    }));
    var r145_b = r145_Thousand.addLookup(r145_gsub.createLookup({
        "type": "gsub_chaining",
        "rules": [r145_xn$chainrule$1aao({
            "left": r145_numberGlyphIDs,
            "right": r145_nd(0)
        }, {
            "left": r145_numberGlyphIDs,
            "right": null
        }, {
            "left": r145_numberGlyphIDs,
            "right": null
        }, {
            "left": r145_numberGlyphIDs,
            "right": null
        }), r145_xn$chainrule$1aao({
            "left": r145_nd(0),
            "right": null
        }, {
            "left": r145_numberGlyphIDs,
            "right": r145_nd(0)
        })]
    }));
    var r145_c = r145_Thousand.addLookup(r145_gsub.createLookup({
        "type": "gsub_reverse",
        "rules": [r145_xn$reverserule$3qIs({
            "left": r145_nd(0),
            "right": r145_nd(1)
        }, {
            "left": r145_nd(0),
            "right": null
        }), r145_xn$reverserule$3qIs({
            "left": r145_nd(0),
            "right": r145_nd(2)
        }, {
            "left": r145_nd(1),
            "right": null
        }), r145_xn$reverserule$3qIs({
            "left": r145_nd(0),
            "right": r145_nd(3)
        }, {
            "left": r145_nd(2),
            "right": null
        }), r145_xn$reverserule$3qIs({
            "left": r145_nd(0),
            "right": r145_nd(4)
        }, {
            "left": r145_nd(3),
            "right": null
        }), r145_xn$reverserule$3qIs({
            "left": r145_nd(0),
            "right": r145_nd(5)
        }, {
            "left": r145_nd(4),
            "right": null
        }), r145_xn$reverserule$3qIs({
            "left": r145_nd(0),
            "right": r145_nd(6)
        }, {
            "left": r145_nd(5),
            "right": null
        }), r145_xn$reverserule$3qIs({
            "left": r145_nd(0),
            "right": r145_nd(1)
        }, {
            "left": r145_nd(6),
            "right": null
        })]
    }));
    r145_gsub.setDependency(r145_a, r145_b);
    r145_gsub.setDependency(r145_b, r145_c);
    return r145_gsub.endBlock(r145_rec);
};


