"use strict";
var _s0_t0;
export {_s0_t0 as buildLigations};
var r1_buildLigations, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8;
var _r1_t2 = function _r1_t8(r165_t) {
    var r165_n, r165_i, r165_a, _r165_t3, _r165_t4, _r165_t5, _r165_t6, _r165_t7, _r165_t8, _r165_t9, _r165_t10, _r165_t11, _r165_t12, _r165_t13, _r165_t14, _r165_t15, _r165_t16, _r165_t17, _r165_t18, _r165_t19, _r165_t20, _r165_t21, _r165_t22, _r165_t23, _r165_t24, _r165_t25, _r165_t26;
    var _r165_t0 = function () {
        _r165_t7 = function (_r165_t8) {
            _r165_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r165_t8
            };
        };
        _r165_t9 = r165_t instanceof Array;
        if (_r165_t9) {
            _r165_t10 = r165_n = r165_t.length;
            _r165_t11 = r165_i = 0;
            _r165_t12 = function (_r165_t14) {
                return _r165_t7(_r165_t14);
            };
            _r165_t13 = function (_r165_t15) {
                _r165_t16 = r165_i < r165_n;
                if (_r165_t16) {
                    _r165_t0 = function (_r165_t17) {
                        return _r165_t13(r165_i = r165_i + 1);
                    };
                    return {
                        "value": [r165_i, r165_t[r165_i]],
                        "done": false
                    };
                } else return _r165_t12(_r165_t15);
            };
            return _r165_t13();
        } else {
            _r165_t18 = r165_a = Object.keys(r165_t);
            _r165_t19 = r165_n = r165_a.length;
            _r165_t20 = r165_i = 0;
            _r165_t21 = function (_r165_t23) {
                return _r165_t7(_r165_t23);
            };
            _r165_t22 = function (_r165_t24) {
                _r165_t25 = r165_i < r165_n;
                if (_r165_t25) {
                    _r165_t0 = function (_r165_t26) {
                        return _r165_t22(r165_i = r165_i + 1);
                    };
                    return {
                        "value": [r165_a[r165_i], r165_t[r165_a[r165_i]]],
                        "done": false
                    };
                } else return _r165_t21(_r165_t24);
            };
            return _r165_t22();
        }
    };
    var _r165_t1 = function (x) {
        try {
            return _r165_t0(x);
        } catch (ex) {
            return _r165_t2(ex);
        }
    };
    var _r165_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t8) _r165_t3 = this; else {
        _r165_t4 = function () {
            void 0;
        };
        _r165_t4.prototype = _r1_t8.prototype;
        _r165_t3 = new _r165_t4();
    }
    _r165_t3[Symbol.iterator] = function () {
        return _r165_t3;
    };
    _r165_t3.next = _r165_t1;
    _r165_t3.throw = function (x) {
        return _r165_t2(x);
    };
    return _r165_t3;
};
var r1_Map = Map;
var r1_Set = Set;
var r1_arrowBarX = function (r146_s) {
    var _r146_t0, _r146_t1;
    return function (r147_t) {
        var _r147_t0, _r147_t1;
        return r147_t.map(function (r148_x) {
            var _r148_t0, _r148_t1;
            return "" + r148_x + ".arrowBar." + r146_s;
        });
    };
};
var r1_lsx = function (r149_s) {
    var _r149_t0, _r149_t1;
    return function (r150_t) {
        var _r150_t0, _r150_t1;
        return r150_t.map(function (r151_x) {
            var _r151_t0, _r151_t1;
            return "" + r151_x + ".lig." + r149_s;
        });
    };
};
var r1_csx = function (r152_s) {
    var _r152_t0, _r152_t1;
    return function (r153_t) {
        var _r153_t0, _r153_t1;
        return r153_t.map(function (r154_x) {
            var _r154_t0, _r154_t1;
            return "" + r154_x + "." + r152_s;
        });
    };
};
var r1_just = function (r155_s) {
    var _r155_t0, _r155_t1;
    return function (r156_t) {
        var _r156_t0, _r156_t1;
        return r156_t.map(function (r157_x) {
            var _r157_t0, _r157_t1;
            return r155_s;
        });
    };
};
var r1_xn$lookaround$5sIl = null;
var r1_advance = function (r158_t) {
    var _r158_t0, _r158_t1;
    return null;
};
var r1_ident = function (r159_t) {
    var _r159_t0, _r159_t1;
    return r159_t.map(function (r160_x) {
        var _r160_t0, _r160_t1;
        return r160_x;
    });
};
_s0_t0 = r1_buildLigations = function (r162_gsub, r162_para, r162_plm) {
    var r162_featureTag, r162_feature, _r162_t2, _r162_t3, _r162_t4;
    var r162_features = new r1_Map();
    var _r162_t0 = _r1_t2(r162_plm)[Symbol.iterator]();
    var _r162_t1 = void 0;
    while (!(_r162_t1 = _r162_t0.next()).done) {
        _r162_t2 = _r162_t1.value;
        r162_featureTag = _r162_t2[0];
        r162_feature = r162_gsub.addCommonFeature(r162_gsub.createFeature(r162_featureTag));
        r162_features.set(r162_featureTag, r162_feature);
    }
    return r1_buildLigationsImpl(r162_gsub, r162_para, r1_DoLigGroupT(r162_gsub, r162_plm, r162_features));
};
var r1_DoLigGroupT = function (r167_gsub, r167_plm, r167_features) {
    var _r167_t0, _r167_t1;
    return function (r168_F) {
        var r168_featureTag, r168_groups, r168_feature, r168_fUnique, r168_lookups, r168_lookup, _r168_t2, _r168_t3, _r168_t4, _r168_t5, _r168_t6, _r168_t7, _r168_t8, _r168_t10, _r168_t11, _r168_t12;
        var r168_deDupeGroups = new r1_Map();
        var r168_deDupe = function (r169_lookupsToPush) {
            var r169_raw, r169_lookup, _r169_t3, _r169_t4;
            var r169_h = JSON.stringify(r169_lookupsToPush);
            var r169_g = r168_deDupeGroups.get(r169_h);
            if (r169_g) return [false, r169_g];
            var r169_results = [];
            var r169_rec = r167_gsub.beginBlock();
            var r169_lastLookupInGroup = null;
            var _r169_t0 = r169_lookupsToPush;
            var _r169_t1 = _r169_t0.length;
            var _r169_t2 = 0;
            while (_r169_t2 < _r169_t1) {
                r169_raw = _r169_t0[_r169_t2];
                r169_lookup = r167_gsub.createLookup(r169_raw);
                if (r169_lastLookupInGroup) r167_gsub.setDependency(r169_lastLookupInGroup, r169_lookup);
                r169_lastLookupInGroup = r169_lookup;
                r169_results.push(r169_lookup);
                _r169_t2 = _r169_t2 + 1;
            }
            r167_gsub.endBlock(r169_rec);
            r168_deDupeGroups.set(r169_h, r169_results);
            return [true, r169_results];
        };
        var _r168_t0 = _r1_t2(r167_plm)[Symbol.iterator]();
        var _r168_t1 = void 0;
        var _r168_t9 = !(_r168_t1 = _r168_t0.next()).done;
        while (_r168_t9) {
            _r168_t2 = _r168_t1.value;
            r168_featureTag = _r168_t2[0];
            r168_groups = _r168_t2[1];
            r168_feature = r167_features.get(r168_featureTag);
            _r168_t3 = r168_deDupe(r1_DoFeatureLigGroup(r167_gsub, r168_feature, r168_groups, r168_F));
            r168_fUnique = _r168_t3[0];
            r168_lookups = _r168_t3[1];
            _r168_t4 = r168_lookups;
            _r168_t5 = _r168_t4.length;
            _r168_t6 = 0;
            _r168_t11 = _r168_t6 < _r168_t5;
            while (_r168_t11) {
                _r168_t12 = (r168_lookup = _r168_t4[_r168_t6], r168_feature.addLookup(r168_lookup), _r168_t6 = _r168_t6 + 1);
                _r168_t11 = _r168_t6 < _r168_t5;
            }
            _r168_t10 = _r168_t12;
            _r168_t9 = !(_r168_t1 = _r168_t0.next()).done;
        }
        return _r168_t10;
    };
};
var r1_DoFeatureLigGroup = function (r175_gsub, r175_feature, r175_groups, r175_F) {
    var _r175_t0, _r175_t1;
    var r175_hasLG = function (r176_ln) {
        var _r176_t0, _r176_t1;
        return r175_groups.indexOf(r176_ln) >= 0;
    };
    var r175_lookupNamePrefix = "lig_" + r175_feature.tag + "_";
    var r175_lookupsToPush = [];
    var r175_filterNulls = function (r177__rules) {
        var r177_rule, _r177_t3, _r177_t4;
        if (!r177__rules) return r177__rules;
        var r177_rules = [];
        var _r177_t0 = r177__rules;
        var _r177_t1 = _r177_t0.length;
        var _r177_t2 = 0;
        while (_r177_t2 < _r177_t1) {
            r177_rule = _r177_t0[_r177_t2];
            if (r177_rule) r177_rules.push(r177_rule);
            _r177_t2 = _r177_t2 + 1;
        }
        return r177_rules;
    };
    var r175_CreateLigationLookup = function (r180__rules) {
        var _r180_t0, _r180_t1;
        var r180_rules = r175_filterNulls(r180__rules);
        return r180_rules && r180_rules.length ? r175_lookupsToPush.push({
            "type": "gsub_chaining",
            "rules": r180_rules
        }) : void 0;
    };
    var r175_CreateReverseLigationLookup = function (r181__rules) {
        var _r181_t0, _r181_t1;
        var r181_rules = r175_filterNulls(r181__rules);
        return r181_rules && r181_rules.length ? r175_lookupsToPush.push({
            "type": "gsub_reverse",
            "rules": r181_rules
        }) : void 0;
    };
    r175_F(r175_hasLG, r175_CreateLigationLookup, r175_CreateReverseLigationLookup);
    return r175_lookupsToPush;
};
var r1_buildLigationsImpl = function (r187_gsub, r187_para, r187_xn$LigGroup$2Lrc9) {
    var r187_gr, r187_gnFrom, r187_gnTo, r187_sfx, r187_src, _r187_t3, _r187_t4, _r187_t5;
    var _r187_t0 = r187_gsub.ChainRuleBuilder();
    var r187_xn$chainrule$1aao = _r187_t0[0];
    var r187_xn$reverserule$3qIs = _r187_t0[1];
    var r187_less = ["less"];
    var r187_lessAndEquiv = ["less", "less.lig.shift0", "less.lig.shift0.anti"];
    var r187_greater = ["greater"];
    var r187_greaterAndEquiv = ["greater", "greater.lig.shift0", "greater.lig.shift0.anti"];
    var r187_lessOrGreater = [].concat(r187_less, r187_greater);
    var r187_lessOrGreaterAndEquiv = [].concat(r187_lessAndEquiv, r187_greaterAndEquiv);
    var r187_hyphen = ["hyphen"];
    var r187_equal = ["equal"];
    var r187_anyStraightRod = ["hyphen", "equal"];
    var r187_anyWave = ["asciiTilde", "asciiTilde.low", "asciiTilde.high"];
    var r187_bar = ["bar"];
    var r187_slash = ["slash"];
    var r187_exclam = ["exclam"];
    var r187_backslash = ["backslash"];
    var r187_underscore = ["underscore"];
    var r187_anyBar = ["bar", "slash", "backslash"];
    var r187_regexLookAround = r187_less.concat(r187_hyphen, r187_equal, r187_exclam, r187_greater, r187_anyBar);
    r187_xn$LigGroup$2Lrc9(function (r189_hasLG, r189_CreateLigationLookup, r189_CreateReverseLigationLookup) {
        var _r189_t0, _r189_t1;
        return r189_hasLG("brst") ? r189_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": ["parenLeft"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["asterisk"],
            "right": ["asterisk/sMid"]
        }), r187_xn$chainrule$1aao({
            "left": ["asterisk"],
            "right": ["asterisk/sMid"]
        }, {
            "left": ["parenRight"],
            "right": r1_xn$lookaround$5sIl
        })]) : void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r195_hasLG, r195_CreateLigationLookup, r195_CreateReverseLigationLookup) {
        var _r195_t0, _r195_t1;
        return r195_hasLG("center-ops") ? r195_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": ["parenLeft", "bracketLeft", "braceLeft"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["colon"],
            "right": ["colon/mid"]
        }), r187_xn$chainrule$1aao({
            "left": ["colon"],
            "right": ["colon/mid"]
        }, {
            "left": ["parenRight", "bracketRight", "braceRight"],
            "right": r1_xn$lookaround$5sIl
        })]) : void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r201_hasLG, r201_CreateLigationLookup, r201_CreateReverseLigationLookup) {
        var r201_triggerL, r201_triggerR, r201_skipL, r201_skipR, r201_acops, r201_acskip, r201_opcGroups, r201_opcFrom, r201_opcTo, r201_C, _r201_t0, _r201_t1;
        return r201_hasLG("center-ops") ? (r201_triggerL = [], r201_triggerR = [], r201_skipL = ["slash", "backslash", "at", "ampersand", "percent", "numberSign"], r201_skipR = ["slash", "backslash", "at", "ampersand", "percent", "numberSign"], r201_hasLG("center-op-trigger-plus-minus-l") ? r201_triggerL.push("plus", "minus", "hyphen") : void 0, r201_hasLG("center-op-trigger-plus-minus-r") ? r201_triggerR.push("plus", "minus", "hyphen") : void 0, r201_hasLG("center-op-trigger-equal-l") ? r201_triggerL.push("equal", "ident") : void 0, r201_hasLG("center-op-trigger-equal-r") ? r201_triggerR.push("equal", "ident") : void 0, r201_hasLG("center-op-trigger-bar-l") ? r201_triggerL.push("bar") : void 0, r201_hasLG("center-op-trigger-bar-r") ? r201_triggerR.push("bar") : void 0, r201_hasLG("center-op-trigger-slash-l") ? r201_triggerL.push("slash", "backslash") : void 0, r201_hasLG("center-op-trigger-slash-r") ? r201_triggerR.push("slash", "backslash") : void 0, r201_hasLG("center-op-trigger-angle-inside") ? (r201_triggerR.push("less"), r201_triggerL.push("greater")) : void 0, r201_hasLG("center-op-trigger-angle-outside") ? (r201_triggerL.push("less"), r201_triggerR.push("greater")) : void 0, !r201_hasLG("center-op-trigger-bar-l") ? r201_skipL.push("bar") : void 0, !r201_hasLG("center-op-trigger-bar-r") ? r201_skipR.push("bar") : void 0, r201_acops = function () {
            var _r202_t0, _r202_t1;
            return r201_hasLG("bar-triggers-op-centering") ? ["less", "greater", "hyphen", "equal", "plus", "slash", "bar", "backslash"] : ["less", "greater", "hyphen", "equal", "plus"];
        }, r201_acskip = function () {
            var _r203_t0, _r203_t1;
            return r201_hasLG("bar-triggers-op-centering") ? ["at", "ampersand", "percent", "numberSign"] : ["slash", "bar", "backslash", "at", "ampersand", "percent", "numberSign"];
        }, r201_opcGroups = [{
            "left": ["asterisk"],
            "right": ["asterisk/sMid"]
        }, {
            "left": ["asciiTilde"],
            "right": ["asciiTilde.low"]
        }], r201_hasLG("center-op-influence-dot") ? r201_opcGroups.push({
            "left": ["period"],
            "right": ["period/mid"]
        }) : void 0, r201_hasLG("center-op-influence-colon") ? r201_opcGroups.push({
            "left": ["colon"],
            "right": ["colon/mid"]
        }) : void 0, r201_opcFrom = r201_opcGroups.map(function (r208_x) {
            var _r208_t0, _r208_t1;
            return r208_x.left[0];
        }), r201_opcTo = r201_opcGroups.map(function (r209_x) {
            var _r209_t0, _r209_t1;
            return r209_x.right[0];
        }), r201_C = {
            "left": r201_opcFrom,
            "right": r201_opcTo
        }, r201_CreateLigationLookup([r187_xn$chainrule$1aao(r201_C, r201_C, r201_skipL, r201_skipL, r201_triggerL), r187_xn$chainrule$1aao(r201_C, r201_C, r201_skipL, r201_triggerL), r187_xn$chainrule$1aao(r201_C, r201_C, r201_triggerL), r187_xn$chainrule$1aao(r201_C, r201_skipL, r201_skipL, r201_triggerL), r187_xn$chainrule$1aao(r201_C, r201_skipL, r201_triggerL), r187_xn$chainrule$1aao(r201_C, r201_triggerL), r187_xn$chainrule$1aao(r201_triggerR, r201_skipR, r201_skipR, r201_C), r187_xn$chainrule$1aao(r201_triggerR, r201_skipR, r201_C), r187_xn$chainrule$1aao(r201_triggerR, r201_C)]), r201_CreateLigationLookup([r187_xn$chainrule$1aao(r201_opcTo, r201_skipR, r201_skipR, r201_C), r187_xn$chainrule$1aao(r201_opcTo, r201_skipR, r201_C), r187_xn$chainrule$1aao(r201_opcTo, r201_C)]), r201_CreateReverseLigationLookup([r187_xn$reverserule$3qIs(r201_C, r201_skipL, r201_skipL, r201_opcTo), r187_xn$reverserule$3qIs(r201_C, r201_skipL, r201_opcTo), r187_xn$reverserule$3qIs(r201_C, r201_opcTo)]), r201_CreateLigationLookup([r187_xn$chainrule$1aao(r201_C, r201_skipR, r201_skipR, r201_opcTo), r187_xn$chainrule$1aao(r201_C, r201_skipR, r201_opcTo), r187_xn$chainrule$1aao(r201_C, r201_opcTo)])) : void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r212_hasLG, r212_CreateLigationLookup, r212_CreateReverseLigationLookup) {
        var _r212_t0, _r212_t1;
        return r212_hasLG("slash-asterisk") ? (r212_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": ["slash"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["asterisk"],
            "right": r1_just("asterisk/slashTop")
        }), r187_xn$chainrule$1aao({
            "left": ["asterisk"],
            "right": r1_just("asterisk/slashBot")
        }, {
            "left": ["slash"],
            "right": r1_xn$lookaround$5sIl
        })]), r212_CreateReverseLigationLookup([r187_xn$reverserule$3qIs({
            "left": ["asterisk"],
            "right": r1_just("asterisk/slashBot")
        }, {
            "left": ["asterisk/slashBot"],
            "right": r1_xn$lookaround$5sIl
        }), r187_xn$reverserule$3qIs({
            "left": ["asterisk/slashTop"],
            "right": r1_just("asterisk/sMid/ligComment")
        }, {
            "left": ["asterisk/slashBot"],
            "right": r1_xn$lookaround$5sIl
        })]), r212_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": ["asterisk/slashTop"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["asterisk"],
            "right": ["asterisk/slashTop"]
        }), r187_xn$chainrule$1aao({
            "left": ["asterisk/sMid/ligComment"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["asterisk", "asterisk/slashBot"],
            "right": r1_just("asterisk/sMid/ligComment")
        })])) : void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r226_hasLG, r226_CreateLigationLookup, r226_CreateReverseLigationLookup) {
        var r226_dottyPunctuationSets, r226_dottyConnected, r226_dpShort, r226_dpTall, r226_dp, r226_dLeft, r226_dRight, r226_dLeftHalf, r226_dRightHalf, r226_dMid, r226_boundary, _r226_t0, _r226_t1, _r226_t2, _r226_t3, _r226_t4, _r226_t5, _r226_t6, _r226_t7, _r226_t8, _r226_t9, _r226_t10, _r226_t11, _r226_t12, _r226_tag13;
        if (r226_hasLG("kern-dotty")) {
            r226_dottyPunctuationSets = [[["period", "period/mid"], ["colon", "colon/mid", "question", "exclam"]], [["comma"], ["semicolon"]]];
            r226_dottyConnected = [["equal", "hyphen", "plus", "less", "greater", "asterisk", "asciiTilde", "asciiCaret"], ["parenLeft", "parenRight", "bracketLeft", "bracketRight", "braceLeft", "braceRight", "numberSign", "ampersand", "slash", "bar"]];
            _r226_t0 = r226_dottyPunctuationSets;
            _r226_t1 = _r226_t0.length;
            _r226_t2 = 0;
            _r226_t10 = _r226_t2 < _r226_t1;
            while (_r226_t10) {
                _r226_t3 = _r226_t0[_r226_t2];
                r226_dpShort = _r226_t3[0];
                r226_dpTall = _r226_t3[1];
                r226_dp = [].concat(r226_dpShort, r226_dpTall);
                r226_dLeft = r1_lsx("dLeft")(r226_dp);
                r226_dRight = r1_lsx("dRight")(r226_dp);
                r226_dLeftHalf = r1_lsx("dLeftHalf")(r226_dp);
                r226_dRightHalf = r1_lsx("dRightHalf")(r226_dp);
                r226_dMid = r1_lsx("dMid")(r226_dp);
                r226_CreateLigationLookup([r187_xn$chainrule$1aao({
                    "left": r226_dRight.concat(r226_dMid),
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r226_dp,
                    "right": r226_dMid
                }, {
                    "left": r226_dp,
                    "right": r1_xn$lookaround$5sIl
                }), r187_xn$chainrule$1aao({
                    "left": r226_dRight.concat(r226_dMid),
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r226_dp,
                    "right": r226_dLeft
                }), r187_xn$chainrule$1aao({
                    "left": r226_dp,
                    "right": r226_dRight
                }, {
                    "left": r226_dp,
                    "right": r1_xn$lookaround$5sIl
                })]);
                _r226_t4 = r226_dottyConnected;
                _r226_t5 = _r226_t4.length;
                _r226_t6 = 0;
                while (_r226_t6 < _r226_t5) {
                    r226_boundary = _r226_t4[_r226_t6];
                    (function () {
                        var r237_dg = r226_boundary === r226_dottyConnected[0] ? r226_dp : r226_dpTall;
                        var r237_dgLeft = r1_lsx("dLeftHalf")(r237_dg);
                        var r237_dgRight = r1_lsx("dRightHalf")(r237_dg);
                        var r237_dgLeftHalf = r1_lsx("dLeftHalf")(r237_dg);
                        var r237_dgRightHalf = r1_lsx("dRightHalf")(r237_dg);
                        var r237_dgMid = r1_lsx("dMid")(r237_dg);
                        return r226_CreateLigationLookup([r187_xn$chainrule$1aao({
                            "left": r226_boundary,
                            "right": r1_xn$lookaround$5sIl
                        }, {
                            "left": r237_dgRight,
                            "right": r237_dgMid
                        }, {
                            "left": r237_dgLeft,
                            "right": r237_dgMid
                        }, {
                            "left": r226_boundary,
                            "right": r1_xn$lookaround$5sIl
                        }), r187_xn$chainrule$1aao({
                            "left": r226_boundary,
                            "right": r1_xn$lookaround$5sIl
                        }, {
                            "left": r237_dgRight,
                            "right": r237_dgMid
                        }, {
                            "left": r237_dgMid.concat(r237_dgLeft),
                            "right": r1_xn$lookaround$5sIl
                        }), r187_xn$chainrule$1aao({
                            "left": r237_dgMid.concat(r237_dgRight),
                            "right": r1_xn$lookaround$5sIl
                        }, {
                            "left": r237_dgLeft,
                            "right": r237_dgMid
                        }, {
                            "left": r226_boundary,
                            "right": r1_xn$lookaround$5sIl
                        })]);
                    })();
                    _r226_t6 = _r226_t6 + 1;
                }
                r226_CreateLigationLookup([r187_xn$chainrule$1aao({
                    "left": r226_dRight,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r226_dMid,
                    "right": r226_dRightHalf
                }, {
                    "left": r226_dMid,
                    "right": r226_dLeftHalf
                }, {
                    "left": r226_dLeft,
                    "right": r1_xn$lookaround$5sIl
                }), r187_xn$chainrule$1aao({
                    "left": r226_dRight,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r226_dMid,
                    "right": r226_dRightHalf
                }, {
                    "left": r226_dMid,
                    "right": r1_xn$lookaround$5sIl
                }), r187_xn$chainrule$1aao({
                    "left": r226_dMid,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r226_dMid,
                    "right": r226_dLeftHalf
                }, {
                    "left": r226_dLeft,
                    "right": r1_xn$lookaround$5sIl
                }), r187_xn$chainrule$1aao({
                    "left": r226_dRight,
                    "right": r226_dRightHalf
                }, {
                    "left": r226_dLeft,
                    "right": r226_dLeftHalf
                })]);
                _r226_t11 = _r226_t2 = _r226_t2 + 1;
                _r226_t10 = _r226_t2 < _r226_t1;
            }
            return _r226_t11;
        } else return void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r261_hasLG, r261_CreateLigationLookup, r261_CreateReverseLigationLookup) {
        var _r261_t0, _r261_t1;
        return r261_hasLG("trig") ? (r261_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": r187_less,
            "right": r1_lsx("trig")
        }, {
            "left": ["bar"],
            "right": r1_lsx("trig")
        }), r187_xn$chainrule$1aao({
            "left": ["bar"],
            "right": r1_lsx("trig")
        }, {
            "left": r187_greater,
            "right": r1_lsx("trig")
        }), r187_xn$chainrule$1aao({
            "left": r1_lsx("trig")(["bar"]),
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_greater,
            "right": r1_lsx("trig")
        }), r187_xn$chainrule$1aao({
            "left": r1_lsx("trig")(["bar"]),
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["bar"],
            "right": r1_lsx("trig")
        })]), r261_CreateReverseLigationLookup([r187_xn$reverserule$3qIs({
            "left": ["bar"],
            "right": r1_lsx("trig")(["bar"])
        }, {
            "left": r1_lsx("trig")(["bar"]),
            "right": r1_xn$lookaround$5sIl
        })]), r261_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": ["bar"],
            "right": r1_lsx("trig")(["bar"])
        }, {
            "left": r1_lsx("trig")(["bar"]),
            "right": r1_xn$lookaround$5sIl
        })])) : void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r275_hasLG, r275_CreateLigationLookup, r275_CreateReverseLigationLookup) {
        var _r275_t0, _r275_t1;
        return r275_hasLG("llggeq") ? r275_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_less,
            "right": r1_advance
        }, {
            "left": r187_less,
            "right": r1_advance
        }, {
            "left": r187_less,
            "right": r1_advance
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }), r187_xn$chainrule$1aao({
            "left": r187_less,
            "right": r1_advance
        }, {
            "left": r187_less,
            "right": r1_advance
        }, {
            "left": r187_less,
            "right": r1_advance
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }), r187_xn$chainrule$1aao({
            "left": r187_less,
            "right": r1_lsx("shiftN0h")
        }, {
            "left": r187_less,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_less,
            "right": r1_lsx("shift0h")
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }), r187_xn$chainrule$1aao({
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_greater,
            "right": r1_advance
        }, {
            "left": r187_greater,
            "right": r1_advance
        }, {
            "left": r187_greater,
            "right": r1_advance
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }), r187_xn$chainrule$1aao({
            "left": r187_greater,
            "right": r1_advance
        }, {
            "left": r187_greater,
            "right": r1_advance
        }, {
            "left": r187_greater,
            "right": r1_advance
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }), r187_xn$chainrule$1aao({
            "left": r187_greater,
            "right": r1_lsx("shift0h")
        }, {
            "left": r187_greater,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_greater,
            "right": r1_lsx("shiftN0h")
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }), r187_xn$chainrule$1aao({
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_less,
            "right": r1_advance
        }, {
            "left": r187_less,
            "right": r1_advance
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }), r187_xn$chainrule$1aao({
            "left": r187_less,
            "right": r1_advance
        }, {
            "left": r187_less,
            "right": r1_advance
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }), r187_xn$chainrule$1aao({
            "left": r187_less,
            "right": r1_lsx("shiftN0h")
        }, {
            "left": r187_less,
            "right": r1_lsx("shift0h")
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }), r187_xn$chainrule$1aao({
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_greater,
            "right": r1_advance
        }, {
            "left": r187_greater,
            "right": r1_advance
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }), r187_xn$chainrule$1aao({
            "left": r187_greater,
            "right": r1_advance
        }, {
            "left": r187_greater,
            "right": r1_advance
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }), r187_xn$chainrule$1aao({
            "left": r187_greater,
            "right": r1_lsx("shift0h")
        }, {
            "left": r187_greater,
            "right": r1_lsx("shiftN0h")
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        })]) : void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r327_hasLG, r327_CreateLigationLookup, r327_CreateReverseLigationLookup) {
        var _r327_t0, _r327_t1;
        return r327_hasLG("html-comment") ? r327_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": r187_less,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_exclam,
            "right": r1_lsx("htmlcommentstart")
        }, {
            "left": r187_hyphen,
            "right": r1_lsx("lxc")
        }, {
            "left": r187_hyphen,
            "right": r1_lsx("cc")
        }, {
            "left": r187_hyphen,
            "right": r1_lsx("cf")
        }), r187_xn$chainrule$1aao({
            "left": r187_less,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_exclam,
            "right": r1_lsx("htmlcommentstart")
        }, {
            "left": r187_hyphen,
            "right": r1_lsx("lxc")
        }, {
            "left": r187_hyphen,
            "right": r1_lsx("cf")
        })]) : void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r338_hasLG, r338_CreateLigationLookup, r338_CreateReverseLigationLookup) {
        var r338_rodCls, r338_dbl, r338_ltgt, r338_CRod, r338_groupNameSuffix, _r338_t3, _r338_t7, _r338_t8, _r338_t9, _r338_t11, _r338_t12, _r338_tag13, _r338_t14, _r338_tag15;
        var r338_CBarSingular = function (r339_k) {
            var _r339_t0, _r339_t1;
            var r339_hyphenSet = new r1_Set(r187_hyphen);
            var r339_fHyphen = r1_arrowBarX(r339_k);
            var r339_fWave = r1_just("wave.lig." + r339_k);
            return function (r340_t) {
                var _r340_t0, _r340_t1;
                var r340_hyphenResults = r339_fHyphen(r340_t);
                var r340_waveResults = r339_fWave(r340_t);
                return r340_t.map(function (r341_x, r341_j) {
                    var _r341_t0, _r341_t1;
                    return r339_hyphenSet.has(r341_x) ? r340_hyphenResults[r341_j] : r340_waveResults[r341_j];
                });
            };
        };
        var r338_ArrowFormationConfig = [[r187_equal, 1, 1, r1_arrowBarX, "equal"], [r187_hyphen, 0, 0, r338_CBarSingular, "hyphen"], [r187_anyWave, 0, 0, r338_CBarSingular, "wave"]];
        var r338_ArrowExtensionConfig = [[r187_equal, r1_arrowBarX], [r187_hyphen, r1_arrowBarX], [r187_anyWave, function (r342_k) {
            var _r342_t0, _r342_t1;
            return r1_just("wave.lig." + r342_k);
        }]];
        var _r338_t0 = r338_ArrowFormationConfig;
        var _r338_t1 = _r338_t0.length;
        var _r338_t2 = 0;
        while (_r338_t2 < _r338_t1) {
            _r338_t3 = _r338_t0[_r338_t2];
            r338_rodCls = _r338_t3[0];
            r338_dbl = _r338_t3[1];
            r338_ltgt = _r338_t3[2];
            r338_CRod = _r338_t3[3];
            r338_groupNameSuffix = _r338_t3[4];
            (function () {
                var r346_lBar, r346_kl, r346_envL, r346_rBar, r346_kr, r346_envR, _r346_t3, _r346_t4, _r346_t5, _r346_t6, _r346_t7, _r346_t11, _r346_t15;
                var r346_heads = [];
                var r346_rods = [];
                var r346_doLT = !r338_ltgt || r338_hasLG("arrow-l-" + r338_groupNameSuffix) && !r338_hasLG("lteq") && !r338_hasLG("lteq-separate");
                var r346_doLTAlt = !r338_ltgt || r338_hasLG("counter-arrow-l-" + r338_groupNameSuffix) && !r338_hasLG("eqlt") && !r338_hasLG("eqlt-separate");
                var r346_doRT = !r338_ltgt || r338_hasLG("counter-arrow-r-" + r338_groupNameSuffix) && !r338_hasLG("gteq") && !r338_hasLG("gteq-separate");
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": ["parenLeft"],
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": ["question"],
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_regexLookAround,
                    "right": r1_advance
                }, {
                    "left": r187_regexLookAround,
                    "right": r1_advance
                }, {
                    "left": r187_regexLookAround,
                    "right": r1_advance
                }, {
                    "left": r187_regexLookAround,
                    "right": r1_advance
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": ["parenLeft"],
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": ["question"],
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_regexLookAround,
                    "right": r1_advance
                }, {
                    "left": r187_regexLookAround,
                    "right": r1_advance
                }, {
                    "left": r187_regexLookAround,
                    "right": r1_advance
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": ["parenLeft"],
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": ["question"],
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_regexLookAround,
                    "right": r1_advance
                }, {
                    "left": r187_regexLookAround,
                    "right": r1_advance
                }));
                var r346_CJoinHeadForce = function () {
                    var _r362_t0, _r362_t1;
                    return r338_dbl ? r1_lsx("dblhead") : r1_lsx("shift0.head");
                };
                var r346_CJoinHeadMid = function () {
                    var _r363_t0, _r363_t1;
                    return r338_dbl ? r1_lsx("dblhead.mid") : r1_lsx("shift0.mid");
                };
                var r346_CJoinHeadForceShift1 = function () {
                    var _r364_t0, _r364_t1;
                    return r338_dbl ? r1_lsx("dblhead.shift1") : r1_lsx("shift1.head");
                };
                var r346_CAntiHeadForce = function () {
                    var _r365_t0, _r365_t1;
                    return r338_dbl ? r1_lsx("hole") : r1_lsx("shift0.anti");
                };
                var r346_CAntiHeadForceShiftN1 = function () {
                    var _r366_t0, _r366_t1;
                    return r338_dbl ? r1_lsx("hole.shiftN1") : r1_lsx("shiftN1.anti");
                };
                var r346_LJoinHeadForce = function () {
                    var _r367_t0, _r367_t1;
                    return r338_hasLG("arrow-l-" + r338_groupNameSuffix) ? r346_CJoinHeadForce() : r1_advance;
                };
                var r346_LJoinHeadForceLR = function () {
                    var _r368_t0, _r368_t1;
                    return r338_hasLG("arrow-lr-" + r338_groupNameSuffix) ? r346_CJoinHeadForce() : r1_advance;
                };
                var r346_LJoinHeadForceShift1 = function () {
                    var _r369_t0, _r369_t1;
                    return r338_hasLG("arrow-l-" + r338_groupNameSuffix) ? r346_CJoinHeadForceShift1() : r1_advance;
                };
                var r346_LJoinHeadForceShift1LR = function () {
                    var _r370_t0, _r370_t1;
                    return r338_hasLG("arrow-lr-" + r338_groupNameSuffix) ? r346_CJoinHeadForce() : r1_advance;
                };
                var r346_LMiddleHead = function () {
                    var _r371_t0, _r371_t1;
                    return r338_hasLG("counter-arrow-l-" + r338_groupNameSuffix) ? r346_CJoinHeadMid() : r338_hasLG("arrow-l-" + r338_groupNameSuffix) ? r346_LJoinHeadForce() : r1_advance;
                };
                var r346_LAntiHeadForce = function () {
                    var _r372_t0, _r372_t1;
                    return r338_hasLG("counter-arrow-l-" + r338_groupNameSuffix) ? r346_CAntiHeadForce() : r1_advance;
                };
                var r346_LAntiHeadForceShiftN1 = function () {
                    var _r373_t0, _r373_t1;
                    return r338_hasLG("counter-arrow-l-" + r338_groupNameSuffix) ? r346_CAntiHeadForceShiftN1() : r1_advance;
                };
                var r346_RJoinHeadForce = function () {
                    var _r374_t0, _r374_t1;
                    return r338_hasLG("arrow-r-" + r338_groupNameSuffix) ? r346_CJoinHeadForce() : r1_advance;
                };
                var r346_RJoinHeadForceLR = function () {
                    var _r375_t0, _r375_t1;
                    return r338_hasLG("arrow-lr-" + r338_groupNameSuffix) ? r346_CJoinHeadForce() : r1_advance;
                };
                var r346_RJoinHeadForceShift1 = function () {
                    var _r376_t0, _r376_t1;
                    return r338_hasLG("arrow-r-" + r338_groupNameSuffix) ? r346_CJoinHeadForceShift1() : r1_advance;
                };
                var r346_RJoinHeadForceShift1LR = function () {
                    var _r377_t0, _r377_t1;
                    return r338_hasLG("arrow-lr-" + r338_groupNameSuffix) ? r346_CJoinHeadForce() : r1_advance;
                };
                var r346_RMiddleHead = function () {
                    var _r378_t0, _r378_t1;
                    return r338_hasLG("counter-arrow-r-" + r338_groupNameSuffix) ? r346_CJoinHeadMid() : r338_hasLG("arrow-r-" + r338_groupNameSuffix) ? r346_RJoinHeadForce() : r1_advance;
                };
                var r346_RAntiHeadForce = function () {
                    var _r379_t0, _r379_t1;
                    return r338_hasLG("counter-arrow-r-" + r338_groupNameSuffix) ? r346_CAntiHeadForce() : r1_advance;
                };
                var r346_RAntiHeadForceShiftN1 = function () {
                    var _r380_t0, _r380_t1;
                    return r338_hasLG("counter-arrow-r-" + r338_groupNameSuffix) ? r346_CAntiHeadForceShiftN1() : r1_advance;
                };
                var r346_LAntiHeadAmbig = function () {
                    var _r381_t0, _r381_t1;
                    return r346_doLTAlt ? r346_LAntiHeadForce() : r1_advance;
                };
                var r346_RJoinHeadAmbig = r346_RJoinHeadForce;
                var r346_LJoinHeadAmbig = function () {
                    var _r382_t0, _r382_t1;
                    return r346_doLT ? r346_LJoinHeadForce() : r1_advance;
                };
                var r346_RAntiHeadAmbig = function () {
                    var _r383_t0, _r383_t1;
                    return r346_doRT ? r346_RAntiHeadForce() : r1_advance;
                };
                var r346_CollectApply = function (r384_ck, r384_fns) {
                    var r384_fnT, r384_fn, r384_transformed, r384_g, _r384_t3, _r384_t4, _r384_t5, _r384_t6, _r384_t7;
                    var r384_a = new r1_Set();
                    var _r384_t0 = r384_fns;
                    var _r384_t1 = _r384_t0.length;
                    var _r384_t2 = 0;
                    while (_r384_t2 < _r384_t1) {
                        r384_fnT = _r384_t0[_r384_t2];
                        r384_fn = r384_fnT();
                        r384_transformed = r384_fn ? r384_fn(r384_ck) : r384_ck;
                        _r384_t3 = r384_transformed;
                        _r384_t4 = _r384_t3.length;
                        _r384_t5 = 0;
                        while (_r384_t5 < _r384_t4) {
                            r384_g = _r384_t3[_r384_t5];
                            r384_a.add(r384_g);
                            _r384_t5 = _r384_t5 + 1;
                        }
                        _r384_t2 = _r384_t2 + 1;
                    }
                    return Array.from(r384_a);
                };
                var r346_arrowIndicator = r187_anyBar.concat(r346_CollectApply(r187_less.concat(r187_greater), [function () {
                    var _r389_t0, _r389_t1;
                    return r1_ident;
                }, r346_CJoinHeadForce, r346_CJoinHeadForceShift1, r346_CAntiHeadForce, r346_CAntiHeadForceShiftN1, r346_CJoinHeadMid]));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_greater,
                    "right": r346_RJoinHeadForceShift1()
                }, {
                    "left": r187_greater,
                    "right": r346_RAntiHeadForce()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_less,
                    "right": r346_LAntiHeadForce()
                }, {
                    "left": r187_less,
                    "right": r346_LJoinHeadForceShift1()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_greater,
                    "right": r346_RJoinHeadForce()
                }, {
                    "left": r187_less,
                    "right": r346_LJoinHeadForce()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_less,
                    "right": r346_LAntiHeadForce()
                }, {
                    "left": r187_greater,
                    "right": r346_RAntiHeadForce()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_greater,
                    "right": r346_RMiddleHead()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_less,
                    "right": r346_LMiddleHead()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r187_less,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_less,
                    "right": r346_LJoinHeadForceShift1LR()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_greater,
                    "right": r346_RJoinHeadForceShift1LR()
                }, {
                    "left": r187_greater,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r187_less,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_less,
                    "right": r346_LJoinHeadForceShift1LR()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_greater,
                    "right": r346_RJoinHeadForceLR()
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r187_less,
                    "right": r346_LJoinHeadForceLR()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_greater,
                    "right": r346_RJoinHeadForceShift1LR()
                }, {
                    "left": r187_greater,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r187_less,
                    "right": r346_LJoinHeadForceLR()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_greater,
                    "right": r346_RJoinHeadForceLR()
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_greater,
                    "right": r346_RJoinHeadForceShift1()
                }, {
                    "left": r187_greater,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_less,
                    "right": r346_LAntiHeadForceShiftN1()
                }, {
                    "left": r187_less,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r187_greater,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_greater,
                    "right": r346_RAntiHeadForceShiftN1()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r187_less,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_less,
                    "right": r346_LJoinHeadForceShift1()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_greater,
                    "right": r346_RJoinHeadForce()
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_less,
                    "right": r346_LAntiHeadForce()
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r187_greater,
                    "right": r346_RAntiHeadForce()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r187_less,
                    "right": r346_LJoinHeadForce()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r346_arrowIndicator,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_greater,
                    "right": r346_RJoinHeadForce()
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r346_arrowIndicator,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_less,
                    "right": r346_LAntiHeadForce()
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r187_greater,
                    "right": r346_RAntiHeadForce()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r346_arrowIndicator,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r187_less,
                    "right": r346_LJoinHeadForce()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r346_arrowIndicator,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_greater,
                    "right": r346_RJoinHeadAmbig()
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r187_less,
                    "right": r346_LAntiHeadAmbig()
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r187_greater,
                    "right": r346_RAntiHeadAmbig()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }));
                r346_heads.push(r187_xn$chainrule$1aao({
                    "left": r187_less,
                    "right": r346_LJoinHeadAmbig()
                }, {
                    "left": r338_rodCls,
                    "right": r1_xn$lookaround$5sIl
                }));
                var r346_kindLeftMid = [[false, "l", r346_CollectApply(r187_less, [r346_CJoinHeadForce, r346_CJoinHeadMid])], [false, "l1", r346_CollectApply(r187_less, [r346_CJoinHeadForceShift1])], [false, "j", r346_CollectApply(r187_greater, [r346_CAntiHeadForce, r346_CJoinHeadMid])], [true, "m", r187_anyBar], [false, "j1", r346_CollectApply(r187_greater, [r346_CAntiHeadForceShiftN1])]];
                var r346_kindRightMid = [[false, "r", r346_CollectApply(r187_greater, [r346_CJoinHeadForce, r346_CJoinHeadMid])], [false, "r1", r346_CollectApply(r187_greater, [r346_CJoinHeadForceShift1])], [false, "j", r346_CollectApply(r187_less, [r346_CAntiHeadForce, r346_CJoinHeadMid])], [true, "m", r187_anyBar], [false, "j1", r346_CollectApply(r187_less, [r346_CAntiHeadForceShiftN1])]];
                var _r346_t0 = r346_kindLeftMid;
                var _r346_t1 = _r346_t0.length;
                var _r346_t2 = 0;
                while (_r346_t2 < _r346_t1) {
                    _r346_t3 = _r346_t0[_r346_t2];
                    r346_lBar = _r346_t3[0];
                    r346_kl = _r346_t3[1];
                    r346_envL = _r346_t3[2];
                    _r346_t4 = r346_kindRightMid;
                    _r346_t5 = _r346_t4.length;
                    _r346_t6 = 0;
                    while (_r346_t6 < _r346_t5) {
                        _r346_t7 = _r346_t4[_r346_t6];
                        r346_rBar = _r346_t7[0];
                        r346_kr = _r346_t7[1];
                        r346_envR = _r346_t7[2];
                        if (!r346_lBar || !r346_rBar) r346_rods.push(r187_xn$chainrule$1aao({
                            "left": r346_envL,
                            "right": r1_xn$lookaround$5sIl
                        }, {
                            "left": r338_rodCls,
                            "right": r338_CRod("" + r346_kl + "" + r346_kr)
                        }, {
                            "left": r346_envR,
                            "right": r1_xn$lookaround$5sIl
                        }));
                        _r346_t6 = _r346_t6 + 1;
                    }
                    _r346_t2 = _r346_t2 + 1;
                }
                var _r346_t8 = r346_kindLeftMid;
                var _r346_t9 = _r346_t8.length;
                var _r346_t10 = 0;
                while (_r346_t10 < _r346_t9) {
                    _r346_t11 = _r346_t8[_r346_t10];
                    r346_lBar = _r346_t11[0];
                    r346_kl = _r346_t11[1];
                    r346_envL = _r346_t11[2];
                    if (!r346_lBar) r346_rods.push(r187_xn$chainrule$1aao({
                        "left": r346_envL,
                        "right": r1_xn$lookaround$5sIl
                    }, {
                        "left": r338_rodCls,
                        "right": r338_CRod("" + r346_kl + "f")
                    }));
                    _r346_t10 = _r346_t10 + 1;
                }
                var _r346_t12 = r346_kindRightMid;
                var _r346_t13 = _r346_t12.length;
                var _r346_t14 = 0;
                while (_r346_t14 < _r346_t13) {
                    _r346_t15 = _r346_t12[_r346_t14];
                    r346_rBar = _r346_t15[0];
                    r346_kr = _r346_t15[1];
                    r346_envR = _r346_t15[2];
                    if (!r346_rBar) r346_rods.push(r187_xn$chainrule$1aao({
                        "left": r338_rodCls,
                        "right": r338_CRod("f" + r346_kr)
                    }, {
                        "left": r346_envR,
                        "right": r1_xn$lookaround$5sIl
                    }));
                    _r346_t14 = _r346_t14 + 1;
                }
                r338_CreateLigationLookup(r346_heads);
                return r338_CreateLigationLookup(r346_rods);
            })();
            _r338_t2 = _r338_t2 + 1;
        }
        var _r338_t4 = r338_ArrowExtensionConfig;
        var _r338_t5 = _r338_t4.length;
        var _r338_t6 = 0;
        var _r338_t10 = _r338_t6 < _r338_t5;
        while (_r338_t10) {
            _r338_t7 = _r338_t4[_r338_t6];
            r338_rodCls = _r338_t7[0];
            r338_CRod = _r338_t7[1];
            (function () {
                var r490_lc, r490_rc;
                var r490_rodTermLeft = [];
                var r490_rodConnLeft = [];
                var _r490_t0 = ["l", "l1", "j", "j1", "c", "z", "m"];
                var _r490_t1 = _r490_t0.length;
                var _r490_t2 = 0;
                while (_r490_t2 < _r490_t1) {
                    r490_lc = _r490_t0[_r490_t2];
                    r490_rodTermLeft = r490_rodTermLeft.concat(r338_CRod("" + r490_lc + "f")(r338_rodCls));
                    r490_rodConnLeft = r490_rodConnLeft.concat(r338_CRod("" + r490_lc + "c")(r338_rodCls));
                    _r490_t2 = _r490_t2 + 1;
                }
                var r490_rodTermRight = [];
                var r490_rodConnRight = [];
                var _r490_t3 = ["r", "r1", "j", "j1", "c", "z", "m"];
                var _r490_t4 = _r490_t3.length;
                var _r490_t5 = 0;
                while (_r490_t5 < _r490_t4) {
                    r490_rc = _r490_t3[_r490_t5];
                    r490_rodTermRight = r490_rodTermRight.concat(r338_CRod("f" + r490_rc)(r338_rodCls));
                    r490_rodConnRight = r490_rodConnRight.concat(r338_CRod("c" + r490_rc)(r338_rodCls));
                    _r490_t5 = _r490_t5 + 1;
                }
                r338_CreateLigationLookup([r187_xn$chainrule$1aao({
                    "left": r490_rodTermLeft,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r338_rodCls,
                    "right": r338_CRod("zf")
                })]);
                r338_CreateReverseLigationLookup([r187_xn$reverserule$3qIs({
                    "left": r338_rodCls,
                    "right": r338_CRod("fz")
                }, {
                    "left": r490_rodTermRight,
                    "right": r1_xn$lookaround$5sIl
                })]);
                r338_CreateLigationLookup([r187_xn$chainrule$1aao({
                    "left": r338_rodCls,
                    "right": r338_CRod("fz")
                }, {
                    "left": r490_rodTermRight,
                    "right": r1_xn$lookaround$5sIl
                })]);
                r338_CreateLigationLookup([r187_xn$chainrule$1aao({
                    "left": r490_rodTermLeft,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r338_CRod("zf")(r338_rodCls),
                    "right": r338_CRod("zm")(r338_rodCls)
                }, {
                    "left": r187_anyBar,
                    "right": r1_lsx("dMid")
                }), r187_xn$chainrule$1aao({
                    "left": r187_anyBar,
                    "right": r1_lsx("dMid")
                }, {
                    "left": r338_CRod("fz")(r338_rodCls),
                    "right": r338_CRod("mz")(r338_rodCls)
                }, {
                    "left": r490_rodTermRight,
                    "right": r1_xn$lookaround$5sIl
                })]);
                return r338_CreateLigationLookup([r187_xn$chainrule$1aao({
                    "left": r490_rodTermLeft,
                    "right": r490_rodConnLeft
                }, {
                    "left": r490_rodTermRight,
                    "right": r490_rodConnRight
                })]);
            })();
            _r338_t11 = _r338_t6 = _r338_t6 + 1;
            _r338_t10 = _r338_t6 < _r338_t5;
        }
        return _r338_t11;
    });
    r187_xn$LigGroup$2Lrc9(function (r510_hasLG, r510_CreateLigationLookup, r510_CreateReverseLigationLookup) {
        var r510_lAll, r510_lNeut, r510_gAll, r510_gNeut, r510_lgAll, r510_lgNeut, _r510_t0, _r510_t1;
        return r510_hasLG("llgg") ? (r510_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": ["parenLeft"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["question"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }), r187_xn$chainrule$1aao({
            "left": ["parenLeft"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["question"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }), r187_xn$chainrule$1aao({
            "left": ["parenLeft"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["question"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }), r187_xn$chainrule$1aao({
            "left": r187_less,
            "right": r1_lsx("shiftN0h")
        }, {
            "left": r187_less,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_less,
            "right": r1_lsx("shift0h")
        }), r187_xn$chainrule$1aao({
            "left": r187_greater,
            "right": r1_lsx("shift0h")
        }, {
            "left": r187_greater,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_greater,
            "right": r1_lsx("shiftN0h")
        }), r187_xn$chainrule$1aao({
            "left": r187_less,
            "right": r1_lsx("shiftN0h")
        }, {
            "left": r187_less,
            "right": r1_lsx("shift0h")
        }), r187_xn$chainrule$1aao({
            "left": r187_greater,
            "right": r1_lsx("shift0h")
        }, {
            "left": r187_greater,
            "right": r1_lsx("shiftN0h")
        })]), r510_lAll = ["less", "less.lig.shift0h", "less.lig.shiftN0h"], r510_lNeut = ["less", "less", "less"], r510_gAll = ["greater", "greater.lig.shift0h", "greater.lig.shiftN0h"], r510_gNeut = ["greater", "greater", "greater"], r510_lgAll = r510_lAll.concat(r510_gAll), r510_lgNeut = r510_lNeut.concat(r510_gNeut), r510_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": r510_lgAll,
            "right": r510_lgNeut
        }, {
            "left": r510_lgAll,
            "right": r510_lgNeut
        }, {
            "left": r510_lgAll,
            "right": r510_lgNeut
        }, {
            "left": r510_lgAll,
            "right": r1_xn$lookaround$5sIl
        })]), r510_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": r510_lgAll,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r510_lgAll,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r510_lgAll,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r510_lgAll,
            "right": r510_lgNeut
        })]), r510_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": r510_lAll,
            "right": r510_lNeut
        }, {
            "left": r510_lAll,
            "right": r510_lNeut
        }, {
            "left": r510_gAll,
            "right": r510_gNeut
        }), r187_xn$chainrule$1aao({
            "left": r510_gAll,
            "right": r510_gNeut
        }, {
            "left": r510_gAll,
            "right": r510_gNeut
        }, {
            "left": r510_lAll,
            "right": r510_lNeut
        }), r187_xn$chainrule$1aao({
            "left": r510_lAll,
            "right": r510_lNeut
        }, {
            "left": r510_gAll,
            "right": r510_gNeut
        }, {
            "left": r510_gAll,
            "right": r510_gNeut
        }), r187_xn$chainrule$1aao({
            "left": r510_gAll,
            "right": r510_gNeut
        }, {
            "left": r510_lAll,
            "right": r510_lNeut
        }, {
            "left": r510_lAll,
            "right": r510_lNeut
        })])) : void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r557_hasLG, r557_CreateLigationLookup, r557_CreateReverseLigationLookup) {
        var _r557_t0, _r557_t1;
        return r557_hasLG("logic") ? r557_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": r187_slash,
            "right": r1_csx("left")
        }, {
            "left": r187_backslash,
            "right": r1_csx("right")
        }), r187_xn$chainrule$1aao({
            "left": r187_backslash,
            "right": r1_csx("left")
        }, {
            "left": r187_slash,
            "right": r1_csx("right")
        }), r187_xn$chainrule$1aao({
            "left": r187_bar,
            "right": r1_lsx("dMid")
        }, {
            "left": r187_anyStraightRod,
            "right": r1_lsx("mf")
        }), r187_xn$chainrule$1aao({
            "left": r187_anyStraightRod,
            "right": r1_lsx("fm")
        }, {
            "left": r187_bar,
            "right": r1_lsx("dMid")
        }), r187_xn$chainrule$1aao({
            "left": r187_underscore,
            "right": r1_lsx("fm")
        }, {
            "left": r187_bar,
            "right": r1_lsx("bottomMid")
        }, {
            "left": r187_underscore,
            "right": r1_lsx("mf")
        })]) : void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r570_hasLG, r570_CreateLigationLookup, r570_CreateReverseLigationLookup) {
        var _r570_t0, _r570_t1;
        var r570_AnyEqualEnding = ["equal", "equal.lig.cf", "equal.lig.jf", "equal.lig.xf", "ident.lig.cf", "ident.lig.yf"];
        return r570_CreateLigationLookup([r570_hasLG("eqeq") ? r187_xn$chainrule$1aao({
            "left": ["equal.lig.cf", "equal.lig.zf"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_equal,
            "right": r1_lsx("zf")
        }) : void 0, r570_hasLG("eqexeq") ? r187_xn$chainrule$1aao({
            "left": r187_equal,
            "right": r1_just("ident.lig.fc")
        }, {
            "left": r187_exclam,
            "right": ["neq.allow-dot.1m"]
        }, {
            "left": r187_equal,
            "right": r1_just("ident.lig.yf")
        }) : r570_hasLG("eqexeq-dl") ? r187_xn$chainrule$1aao({
            "left": r187_equal,
            "right": r1_lsx("fc")
        }, {
            "left": r187_exclam,
            "right": ["neq.allow-dot.1m"]
        }, {
            "left": r187_equal,
            "right": r1_lsx("yf")
        }) : true ? r187_xn$chainrule$1aao({
            "left": r570_AnyEqualEnding,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_exclam,
            "right": r1_advance
        }, {
            "left": r187_equal,
            "right": r1_xn$lookaround$5sIl
        }) : void 0, r570_hasLG("exeqeqeq") ? r187_xn$chainrule$1aao({
            "left": r187_exclam,
            "right": ["neq.allow-dot.4l"]
        }, {
            "left": r187_equal,
            "right": r1_just("ident.lig.xc")
        }, {
            "left": r187_equal,
            "right": r1_just("ident.lig.cc")
        }, {
            "left": r187_equal,
            "right": r1_just("ident.lig.cf")
        }) : r570_hasLG("exeq") ? r187_xn$chainrule$1aao({
            "left": r187_exclam,
            "right": ["neq.allow-dot.4l"]
        }, {
            "left": r187_equal,
            "right": r1_lsx("xc")
        }, {
            "left": r187_equal,
            "right": r1_lsx("cc")
        }, {
            "left": r187_equal,
            "right": r1_lsx("cf")
        }) : void 0, r570_hasLG("eqeq") ? r187_xn$chainrule$1aao({
            "left": r187_equal,
            "right": r1_lsx("fc")
        }, {
            "left": r187_equal,
            "right": r1_lsx("cc")
        }, {
            "left": r187_equal,
            "right": r1_lsx("cc")
        }, {
            "left": r187_equal,
            "right": r1_lsx("cf")
        }) : void 0, r570_hasLG("exeqeq") ? r187_xn$chainrule$1aao({
            "left": r187_exclam,
            "right": ["neq.allow-dot.3l"]
        }, {
            "left": r187_equal,
            "right": r1_just("ident.lig.xc")
        }, {
            "left": r187_equal,
            "right": r1_just("ident.lig.cf")
        }) : r570_hasLG("exeq") ? r187_xn$chainrule$1aao({
            "left": r187_exclam,
            "right": ["neq.allow-dot.3l"]
        }, {
            "left": r187_equal,
            "right": r1_lsx("xc")
        }, {
            "left": r187_equal,
            "right": r1_lsx("cf")
        }) : void 0, r570_hasLG("eqslasheq") ? r187_xn$chainrule$1aao({
            "left": r187_equal,
            "right": r1_just("ident.lig.fc")
        }, {
            "left": r187_slash,
            "right": ["neq.bar-only.1m"]
        }, {
            "left": r187_equal,
            "right": r1_just("ident.lig.yf")
        }) : r570_hasLG("slasheq") ? r187_xn$chainrule$1aao({
            "left": r187_equal,
            "right": r1_lsx("fc")
        }, {
            "left": r187_slash,
            "right": ["neq.bar-only.1m"]
        }, {
            "left": r187_equal,
            "right": r1_lsx("yf")
        }) : void 0, r570_hasLG("eqeqeq") ? r187_xn$chainrule$1aao({
            "left": r187_equal,
            "right": r1_just("ident.lig.fc")
        }, {
            "left": r187_equal,
            "right": r1_just("ident.lig.cc")
        }, {
            "left": r187_equal,
            "right": r1_just("ident.lig.cf")
        }) : r570_hasLG("eqeq") ? r187_xn$chainrule$1aao({
            "left": r187_equal,
            "right": r1_lsx("fc")
        }, {
            "left": r187_equal,
            "right": r1_lsx("cc")
        }, {
            "left": r187_equal,
            "right": r1_lsx("cf")
        }) : void 0, r570_hasLG("tildeeq") ? r187_xn$chainrule$1aao({
            "left": r187_anyWave,
            "right": r1_just("neq.bar-only.2l")
        }, {
            "left": r187_equal,
            "right": r1_lsx("xf")
        }) : void 0, r570_hasLG("slasheq") ? r187_xn$chainrule$1aao({
            "left": r187_slash,
            "right": ["neq.bar-only.2l"]
        }, {
            "left": r187_equal,
            "right": r1_lsx("xf")
        }) : void 0, r570_hasLG("exeq") ? r187_xn$chainrule$1aao({
            "left": r187_exclam,
            "right": ["neq.allow-dot.2l"]
        }, {
            "left": r187_equal,
            "right": r1_lsx("xf")
        }) : void 0, r570_hasLG("eqeq") ? r187_xn$chainrule$1aao({
            "left": r187_equal,
            "right": r1_lsx("fc")
        }, {
            "left": r187_equal,
            "right": r1_lsx("cf")
        }) : void 0]);
    });
    r187_xn$LigGroup$2Lrc9(function (r621_hasLG, r621_CreateLigationLookup, r621_CreateReverseLigationLookup) {
        var r621_acops, _r621_t0, _r621_t1;
        return r621_hasLG("lteq") || r621_hasLG("eqlt") || r621_hasLG("gteq") ? (r621_acops = ["less", "greater", "hyphen", "equal", "plus", "slash", "bar", "backslash"], r621_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": ["parenLeft"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["question"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }), r187_xn$chainrule$1aao({
            "left": ["parenLeft"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["question"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }), r187_xn$chainrule$1aao({
            "left": ["parenLeft"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["question"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }, {
            "left": r187_regexLookAround,
            "right": r1_advance
        }), r621_hasLG("lteq") ? r187_xn$chainrule$1aao({
            "left": r621_acops,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_lessAndEquiv,
            "right": r1_advance
        }, {
            "left": r187_equal,
            "right": r1_advance
        }) : void 0, r621_hasLG("lteq") ? r187_xn$chainrule$1aao({
            "left": r187_lessAndEquiv,
            "right": r1_advance
        }, {
            "left": r187_equal,
            "right": r1_advance
        }, {
            "left": r621_acops,
            "right": r1_xn$lookaround$5sIl
        }) : void 0, r621_hasLG("lteq") ? r187_xn$chainrule$1aao({
            "left": r187_lessAndEquiv,
            "right": r1_just("less.lig2")
        }, {
            "left": r187_equal,
            "right": ["eq.at-lteq.lig2"]
        }) : void 0, r621_hasLG("eqlt") ? r187_xn$chainrule$1aao({
            "left": r621_acops,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_equal,
            "right": r1_advance
        }, {
            "left": r187_lessAndEquiv,
            "right": r1_advance
        }) : void 0, r621_hasLG("eqlt") ? r187_xn$chainrule$1aao({
            "left": r187_equal,
            "right": r1_advance
        }, {
            "left": r187_lessAndEquiv,
            "right": r1_advance
        }, {
            "left": r621_acops,
            "right": r1_xn$lookaround$5sIl
        }) : void 0, r621_hasLG("eqlt") ? r187_xn$chainrule$1aao({
            "left": r187_equal,
            "right": r1_just("less.lig2")
        }, {
            "left": r187_lessAndEquiv,
            "right": ["eq.at-lteq.lig2"]
        }) : void 0, r621_hasLG("gteq") ? r187_xn$chainrule$1aao({
            "left": r621_acops,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_greaterAndEquiv,
            "right": r1_advance
        }, {
            "left": r187_equal,
            "right": r1_advance
        }) : void 0, r621_hasLG("gteq") ? r187_xn$chainrule$1aao({
            "left": r187_greaterAndEquiv,
            "right": r1_advance
        }, {
            "left": r187_equal,
            "right": r1_advance
        }, {
            "left": r621_acops,
            "right": r1_xn$lookaround$5sIl
        }) : void 0, r621_hasLG("gteq") ? r187_xn$chainrule$1aao({
            "left": r187_greaterAndEquiv,
            "right": r1_just("greater.lig2")
        }, {
            "left": r187_equal,
            "right": ["eq.at-gteq.lig2"]
        }) : void 0])) : void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r662_hasLG, r662_CreateLigationLookup, r662_CreateReverseLigationLookup) {
        var _r662_t0, _r662_t1;
        return r662_CreateLigationLookup([r662_hasLG("ltgt-diamond") ? r187_xn$chainrule$1aao({
            "left": r187_lessAndEquiv,
            "right": r1_just("less.lig.diamond")
        }, {
            "left": r187_greaterAndEquiv,
            "right": r1_just("greater.lig.diamond")
        }) : r662_hasLG("ltgt-diamond-tag") ? r187_xn$chainrule$1aao({
            "left": r187_lessAndEquiv,
            "right": r1_just("less.lig.diamond.tag")
        }, {
            "left": r187_greaterAndEquiv,
            "right": r1_just("greater.lig.diamond.tag")
        }) : r662_hasLG("ltgt-ne") ? r187_xn$chainrule$1aao({
            "left": r187_lessAndEquiv,
            "right": r1_just("neq.bar-only.2l")
        }, {
            "left": r187_greaterAndEquiv,
            "right": r1_just("equal.lig.xf")
        }) : void 0]);
    });
    r187_xn$LigGroup$2Lrc9(function (r670_hasLG, r670_CreateLigationLookup, r670_CreateReverseLigationLookup) {
        var _r670_t0, _r670_t1;
        return r670_CreateLigationLookup([r670_hasLG("ltgt-slash-tag") ? r187_xn$chainrule$1aao({
            "left": r187_lessAndEquiv,
            "right": r1_just("less.lig.tag-slash")
        }, {
            "left": r187_slash,
            "right": r1_xn$lookaround$5sIl
        }) : void 0, r670_hasLG("ltgt-slash-tag") ? r187_xn$chainrule$1aao({
            "left": r187_slash,
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_greaterAndEquiv,
            "right": r1_just("greater.lig.tag-slash")
        }) : void 0]);
    });
    r187_xn$LigGroup$2Lrc9(function (r676_hasLG, r676_CreateLigationLookup, r676_CreateReverseLigationLookup) {
        var _r676_t0, _r676_t1;
        return r676_hasLG("colon-greater-as-colon-arrow") ? r676_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": ["colon/mid"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_greaterAndEquiv,
            "right": r1_just("greaterArrow")
        })]) : void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r680_hasLG, r680_CreateLigationLookup, r680_CreateReverseLigationLookup) {
        var _r680_t0, _r680_t1;
        return r680_CreateLigationLookup([r680_hasLG("brack-bar") ? r187_xn$chainrule$1aao({
            "left": ["bracketLeft"],
            "right": r1_advance
        }, {
            "left": ["bar"],
            "right": r1_advance
        }, {
            "left": ["bracketRight"],
            "right": r1_advance
        }) : void 0, r680_hasLG("brack-bar") ? r187_xn$chainrule$1aao({
            "left": ["bracketLeft"],
            "right": ["ligExtBracketLeft"]
        }, {
            "left": ["bar"],
            "right": ["ligBarInsideBracketLeft"]
        }) : void 0, r680_hasLG("brack-bar") ? r187_xn$chainrule$1aao({
            "left": ["bar"],
            "right": ["ligBarInsideBracketRight"]
        }, {
            "left": ["bracketRight"],
            "right": ["ligExtBracketRight"]
        }) : void 0, r680_hasLG("brace-bar") ? r187_xn$chainrule$1aao({
            "left": ["braceLeft"],
            "right": r1_advance
        }, {
            "left": ["bar"],
            "right": r1_advance
        }, {
            "left": ["braceRight"],
            "right": r1_advance
        }) : void 0, r680_hasLG("brace-bar") ? r187_xn$chainrule$1aao({
            "left": ["braceLeft"],
            "right": ["ligExtBraceLeft"]
        }, {
            "left": ["bar"],
            "right": ["ligBarInsideBracketLeft"]
        }) : void 0, r680_hasLG("brace-bar") ? r187_xn$chainrule$1aao({
            "left": ["bar"],
            "right": ["ligBarInsideBracketRight"]
        }, {
            "left": ["braceRight"],
            "right": ["ligExtBraceRight"]
        }) : void 0]);
    });
    var r187_ChainingConfig = {
        "plus": ["plus", "plus"],
        "minus": ["hyphen", "hyphen"],
        "tilde": ["asciiTilde", "wave"]
    };
    var _r187_t1 = Object.entries(r187_ChainingConfig)[Symbol.iterator]();
    var _r187_t2 = void 0;
    while (!(_r187_t2 = _r187_t1.next()).done) {
        _r187_t3 = _r187_t2.value;
        r187_gr = _r187_t3[0];
        r187_gnFrom = _r187_t3[1][0];
        r187_gnTo = _r187_t3[1][1];
        _r187_t3[1];
        r187_sfx = function (r696_suffix) {
            var _r696_t0, _r696_t1;
            return r1_lsx(r696_suffix)([r187_gnTo]);
        };
        r187_src = function () {
            var _r697_t0, _r697_t1;
            return [r187_gnFrom];
        };
        r187_xn$LigGroup$2Lrc9(function (r699_hasLG, r699_CreateLigationLookup, r699_CreateReverseLigationLookup) {
            var _r699_t0, _r699_t1;
            return r699_hasLG("" + r187_gr + "-" + r187_gr + "-" + r187_gr) ? (r699_CreateLigationLookup([r187_xn$chainrule$1aao({
                "left": [].concat(r187_sfx("cf"), r187_sfx("zf")),
                "right": r1_xn$lookaround$5sIl
            }, {
                "left": r187_src(),
                "right": r187_sfx("zf")
            }), r187_xn$chainrule$1aao({
                "left": r187_src(),
                "right": r187_sfx("fc")
            }, {
                "left": r187_src(),
                "right": r187_sfx("cc")
            }, {
                "left": r187_src(),
                "right": r187_sfx("cc")
            }, {
                "left": r187_src(),
                "right": r187_sfx("cf")
            }), r187_xn$chainrule$1aao({
                "left": r187_src(),
                "right": r187_sfx("fc")
            }, {
                "left": r187_src(),
                "right": r187_sfx("cc")
            }, {
                "left": r187_src(),
                "right": r187_sfx("cf")
            }), r187_xn$chainrule$1aao({
                "left": r187_src(),
                "right": r699_hasLG("" + r187_gr + "-" + r187_gr) ? r187_sfx("fc") : r1_advance
            }, {
                "left": r187_src(),
                "right": r699_hasLG("" + r187_gr + "-" + r187_gr) ? r187_sfx("cf") : r1_advance
            })]), r699_CreateLigationLookup([r187_xn$chainrule$1aao({
                "left": [r187_sfx("jf")],
                "right": [r187_sfx("jc")]
            }, {
                "left": r187_src(),
                "right": [r187_sfx("cc")]
            }, {
                "left": [r187_sfx("fj")],
                "right": [r187_sfx("cj")]
            }), r187_xn$chainrule$1aao({
                "left": [r187_sfx("jf")],
                "right": [r187_sfx("jc")]
            }, {
                "left": [r187_sfx("fc")],
                "right": [r187_sfx("cc")]
            }), r187_xn$chainrule$1aao({
                "left": [r187_sfx("zf")],
                "right": [r187_sfx("zc")]
            }, {
                "left": [r187_sfx("fj")],
                "right": [r187_sfx("cj")]
            })])) : void 0;
        });
    }
    r187_xn$LigGroup$2Lrc9(function (r719_hasLG, r719_CreateLigationLookup, r719_CreateReverseLigationLookup) {
        var _r719_t0, _r719_t1;
        return r719_hasLG("plus-plus-plus") ? r719_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": ["plus.lig.fc"],
            "right": ["plus.lig.fc.s"]
        }, {
            "left": ["plus.lig.cc"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["plus.lig.cf"],
            "right": ["plus.lig.cf.s"]
        }), r187_xn$chainrule$1aao({
            "left": ["plus.lig.fc"],
            "right": ["plus.lig.fc.s"]
        }, {
            "left": ["plus.lig.cf"],
            "right": ["plus.lig.cf.s"]
        })]) : void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r726_hasLG, r726_CreateLigationLookup, r726_CreateReverseLigationLookup) {
        var _r726_t0, _r726_t1;
        return r726_hasLG("underscore-underscore-underscore") ? (r726_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": r1_lsx("cf")(r187_underscore),
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": r187_underscore,
            "right": r1_lsx("cf")
        }), r187_xn$chainrule$1aao({
            "left": r187_underscore,
            "right": r1_lsx("fc")
        }, {
            "left": r187_underscore,
            "right": r1_lsx("cc")
        }, {
            "left": r187_underscore,
            "right": r1_lsx("cc")
        }, {
            "left": r187_underscore,
            "right": r1_lsx("cf")
        }), r187_xn$chainrule$1aao({
            "left": r187_underscore,
            "right": r1_lsx("fc")
        }, {
            "left": r187_underscore,
            "right": r1_lsx("cc")
        }, {
            "left": r187_underscore,
            "right": r1_lsx("cf")
        }), r187_xn$chainrule$1aao({
            "left": r187_underscore,
            "right": r726_hasLG("underscore-underscore") ? r1_lsx("fc") : r1_advance
        }, {
            "left": r187_underscore,
            "right": r726_hasLG("underscore-underscore") ? r1_lsx("cf") : r1_advance
        })]), r726_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": r1_lsx("cf")(r187_underscore),
            "right": r1_lsx("cc")(r187_underscore)
        }, {
            "left": r1_lsx("cf")(r187_underscore),
            "right": r1_xn$lookaround$5sIl
        })])) : void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r741_hasLG, r741_CreateLigationLookup, r741_CreateReverseLigationLookup) {
        var _r741_t0, _r741_t1;
        return r741_hasLG("hash-hash-hash") ? r741_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": ["numberSign.jr"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["numberSign"],
            "right": r1_csx("jr")
        }), r187_xn$chainrule$1aao({
            "left": ["numberSign"],
            "right": r1_advance
        }, {
            "left": ["numberSign"],
            "right": r1_csx("jr")
        }, {
            "left": ["numberSign"],
            "right": r1_csx("jr")
        }, {
            "left": ["numberSign"],
            "right": r1_csx("jr")
        }), r187_xn$chainrule$1aao({
            "left": ["numberSign"],
            "right": r1_advance
        }, {
            "left": ["numberSign"],
            "right": r1_csx("jr")
        }, {
            "left": ["numberSign"],
            "right": r1_csx("jr")
        }), r187_xn$chainrule$1aao({
            "left": ["numberSign"],
            "right": r1_advance
        }, {
            "left": ["numberSign"],
            "right": r741_hasLG("hash-hash") ? r1_csx("jr") : r1_advance
        })]) : void 0;
    });
    r187_xn$LigGroup$2Lrc9(function (r754_hasLG, r754_CreateLigationLookup, r754_CreateReverseLigationLookup) {
        var r754_chBar, r754_dp, r754_dLeft, r754_dRight, r754_dLeftHalf, r754_dRightHalf, r754_dMid, _r754_t0, _r754_t1, _r754_t2, _r754_t3, _r754_t4, _r754_t5, _r754_t6, _r754_t7;
        if (r754_hasLG("kern-bars")) {
            _r754_t0 = r187_anyBar;
            _r754_t1 = _r754_t0.length;
            _r754_t2 = 0;
            _r754_t6 = _r754_t2 < _r754_t1;
            while (_r754_t6) {
                _r754_t7 = (r754_chBar = _r754_t0[_r754_t2], r754_dp = [r754_chBar], r754_dLeft = r1_lsx("dLeft")(r754_dp), r754_dRight = r1_lsx("dRight")(r754_dp), r754_dLeftHalf = r1_lsx("dLeftHalf")(r754_dp), r754_dRightHalf = r1_lsx("dRightHalf")(r754_dp), r754_dMid = r1_lsx("dMid")(r754_dp), r754_CreateLigationLookup([r187_xn$chainrule$1aao({
                    "left": r754_dRight.concat(r754_dMid),
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r754_dp,
                    "right": r754_dMid
                }, {
                    "left": r754_dp.concat(r754_dMid),
                    "right": r1_xn$lookaround$5sIl
                }), r187_xn$chainrule$1aao({
                    "left": r754_dRight.concat(r754_dMid),
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r754_dp,
                    "right": r754_dLeft
                }), r187_xn$chainrule$1aao({
                    "left": r754_dp,
                    "right": r754_dRight
                }, {
                    "left": r754_dp.concat(r754_dMid),
                    "right": r1_xn$lookaround$5sIl
                })]), r754_CreateLigationLookup([r187_xn$chainrule$1aao({
                    "left": r754_dRight,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r754_dMid,
                    "right": r754_dRightHalf
                }, {
                    "left": r754_dMid,
                    "right": r754_dLeftHalf
                }, {
                    "left": r754_dLeft,
                    "right": r1_xn$lookaround$5sIl
                }), r187_xn$chainrule$1aao({
                    "left": r754_dRight,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r754_dMid,
                    "right": r754_dRightHalf
                }, {
                    "left": r754_dMid,
                    "right": r1_xn$lookaround$5sIl
                }), r187_xn$chainrule$1aao({
                    "left": r754_dMid,
                    "right": r1_xn$lookaround$5sIl
                }, {
                    "left": r754_dMid,
                    "right": r754_dLeftHalf
                }, {
                    "left": r754_dLeft,
                    "right": r1_xn$lookaround$5sIl
                }), r187_xn$chainrule$1aao({
                    "left": r754_dRight,
                    "right": r754_dRightHalf
                }, {
                    "left": r754_dLeft,
                    "right": r754_dLeftHalf
                })]), _r754_t2 = _r754_t2 + 1);
                _r754_t6 = _r754_t2 < _r754_t1;
            }
            return _r754_t7;
        } else return void 0;
    });
    return r187_xn$LigGroup$2Lrc9(function (r776_hasLG, r776_CreateLigationLookup, r776_CreateReverseLigationLookup) {
        var _r776_t0, _r776_t1;
        return r776_hasLG("markdown-checkboxes") ? (r776_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": ["asterisk", "asterisk/sMid", "hyphen", "plus"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["space"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["bracketLeft"],
            "right": ["markdownCheckBox/leftHalfBorder"]
        }, {
            "left": ["space", "x", "X"],
            "right": ["space", "markdownCheckBox/cross", "markdownCheckBox/cross"]
        }, {
            "left": ["bracketRight"],
            "right": ["markdownCheckBox/rightHalfBorder"]
        })]), r776_CreateLigationLookup([r187_xn$chainrule$1aao({
            "left": ["asterisk"],
            "right": ["asterisk/sMid"]
        }, {
            "left": ["space"],
            "right": r1_xn$lookaround$5sIl
        }, {
            "left": ["markdownCheckBox/leftHalfBorder"],
            "right": r1_xn$lookaround$5sIl
        })])) : void 0;
    });
};


