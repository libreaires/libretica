"use strict";
import * as _s0_t0 from "toposort";
var _s0_t1;
export {_s0_t1 as CreateEmptyTable};
var _s0_t2;
export {_s0_t2 as FinalizeTable};
var _s0_t3;
export {_s0_t3 as UkMapToLookup};
var _s0_t4;
export {_s0_t4 as UkLigatureToLookup};
var r1_CreateEmptyTable, r1_FinalizeTable, r1_UkMapToLookup, r1_UkLigatureToLookup, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8;
var _r1_t2 = function _r1_t8(r257_t) {
    var r257_n, r257_i, r257_a, _r257_t3, _r257_t4, _r257_t5, _r257_t6, _r257_t7, _r257_t8, _r257_t9, _r257_t10, _r257_t11, _r257_t12, _r257_t13, _r257_t14, _r257_t15, _r257_t16, _r257_t17, _r257_t18, _r257_t19, _r257_t20, _r257_t21, _r257_t22, _r257_t23, _r257_t24, _r257_t25, _r257_t26;
    var _r257_t0 = function () {
        _r257_t7 = function (_r257_t8) {
            _r257_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r257_t8
            };
        };
        _r257_t9 = r257_t instanceof Array;
        if (_r257_t9) {
            _r257_t10 = r257_n = r257_t.length;
            _r257_t11 = r257_i = 0;
            _r257_t12 = function (_r257_t14) {
                return _r257_t7(_r257_t14);
            };
            _r257_t13 = function (_r257_t15) {
                _r257_t16 = r257_i < r257_n;
                if (_r257_t16) {
                    _r257_t0 = function (_r257_t17) {
                        return _r257_t13(r257_i = r257_i + 1);
                    };
                    return {
                        "value": [r257_i, r257_t[r257_i]],
                        "done": false
                    };
                } else return _r257_t12(_r257_t15);
            };
            return _r257_t13();
        } else {
            _r257_t18 = r257_a = Object.keys(r257_t);
            _r257_t19 = r257_n = r257_a.length;
            _r257_t20 = r257_i = 0;
            _r257_t21 = function (_r257_t23) {
                return _r257_t7(_r257_t23);
            };
            _r257_t22 = function (_r257_t24) {
                _r257_t25 = r257_i < r257_n;
                if (_r257_t25) {
                    _r257_t0 = function (_r257_t26) {
                        return _r257_t22(r257_i = r257_i + 1);
                    };
                    return {
                        "value": [r257_a[r257_i], r257_t[r257_a[r257_i]]],
                        "done": false
                    };
                } else return _r257_t21(_r257_t24);
            };
            return _r257_t22();
        }
    };
    var _r257_t1 = function (x) {
        try {
            return _r257_t0(x);
        } catch (ex) {
            return _r257_t2(ex);
        }
    };
    var _r257_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t8) _r257_t3 = this; else {
        _r257_t4 = function () {
            void 0;
        };
        _r257_t4.prototype = _r1_t8.prototype;
        _r257_t3 = new _r257_t4();
    }
    _r257_t3[Symbol.iterator] = function () {
        return _r257_t3;
    };
    _r257_t3.next = _r257_t1;
    _r257_t3.throw = function (x) {
        return _r257_t2(x);
    };
    return _r257_t3;
};
var r1_toposort = _s0_t0.default;
var r1_Map = Map;
var r1_Set = Set;
_s0_t1 = r1_CreateEmptyTable = function () {
    var _r133_t0, _r133_t1;
    return new r1_LayoutTable();
};
var r1_LayoutTable = (function (r135_Super) {
    var _r135_t0, _r135_t1;
    var r135_Constructor = function () {
        var _r136_t0, _r136_t1;
        return void 0;
    };
    var r135_Type = function () {
        var _r137_t0 = this;
        var _r137_t1 = arguments;
        r135_Constructor.apply(_r137_t0, _r137_t1);
        return void 0;
    };
    var r135_Symbol = Symbol;
    (function () {
        var r139_protectedTerms, _r139_t0, _r139_t1;
        r135_Type.protectedTerms = r139_protectedTerms = Object.create(r135_Super.protectedTerms || null);
        r135_Constructor = function () {
            var _r167_t1;
            var _r167_t0 = this;
            _r167_t0.languages = {};
            _r167_t0.features = {};
            _r167_t0.lookups = {};
            _r167_t0.lookupDep = [];
            _r167_t0.lookupOrder = [];
            return void 0;
        };
        r135_Type.prototype.pickLanguage = function (r173_tag) {
            var _r173_t1;
            var _r173_t0 = this;
            if (_r173_t0.languages[r173_tag]) return _r173_t0.languages[r173_tag];
            var r173_lang = new r1_LayoutLanguage(r173_tag);
            _r173_t0.languages[r173_tag] = r173_lang;
            return r173_lang;
        };
        r135_Type.prototype.copyLanguage = function (r179_tag, r179_tagFrom) {
            var r179_feat, _r179_t4;
            var _r179_t3 = this;
            var r179_langFrom = _r179_t3.pickLanguage(r179_tagFrom);
            var r179_langTo = _r179_t3.pickLanguage(r179_tag);
            var _r179_t0 = r179_langFrom.features;
            var _r179_t1 = _r179_t0.length;
            var _r179_t2 = 0;
            while (_r179_t2 < _r179_t1) {
                r179_feat = _r179_t0[_r179_t2];
                r179_langTo.features.push(r179_feat);
                _r179_t2 = _r179_t2 + 1;
            }
            return r179_langTo;
        };
        r135_Type.prototype.createFeature = function (r187_tag) {
            var _r187_t1, _r187_t3;
            var _r187_t0 = this;
            var r187_feature = new r1_LayoutFeature(r187_tag);
            var r187_n = 0;
            var _r187_t2 = true;
            while (_r187_t2) {
                if (!_r187_t0.features[r187_tag + "_" + r187_n]) {
                    r187_feature.name = r187_tag + "_" + r187_n;
                    _r187_t0.features[r187_tag + "_" + r187_n] = r187_feature;
                    return r187_feature;
                }
                _r187_t3 = r187_n = r187_n + 1;
                _r187_t2 = true;
            }
            return _r187_t3;
        };
        r135_Type.prototype.addCommonFeature = function (r193_fea) {
            var _r193_t1;
            var _r193_t0 = this;
            var r193_dfltDflt = _r193_t0.pickLanguage("DFLT_DFLT");
            var r193_latnDflt = _r193_t0.pickLanguage("latn_DFLT");
            var r193_grekDflt = _r193_t0.pickLanguage("grek_DFLT");
            var r193_cyrlDflt = _r193_t0.pickLanguage("cyrl_DFLT");
            r193_dfltDflt.addFeature(r193_fea);
            r193_latnDflt.addFeature(r193_fea);
            r193_grekDflt.addFeature(r193_fea);
            r193_cyrlDflt.addFeature(r193_fea);
            return r193_fea;
        };
        r135_Type.prototype.createLookup = function (r199_data, r199__prefix) {
            var _r199_t1, _r199_t3;
            var _r199_t0 = this;
            var r199_prefix = r199__prefix || "lookup/";
            var r199_n = 0;
            var _r199_t2 = true;
            while (_r199_t2) {
                if (!_r199_t0.lookups[r199_prefix + r199_n]) return _r199_t0.addLookupNoCheck(r199_prefix + r199_n, r199_data);
                _r199_t3 = r199_n = r199_n + 1;
                _r199_t2 = true;
            }
            return _r199_t3;
        };
        r135_Type.prototype.pickLookup = function (r205_name, r205_fallback) {
            var _r205_t1;
            var _r205_t0 = this;
            if (_r205_t0.lookups[r205_name]) return _r205_t0.lookups[r205_name];
            return _r205_t0.addLookupNoCheck(r205_name, r205_fallback);
        };
        r135_Type.prototype.addLookupNoCheck = function (r211_name, r211_data) {
            var _r211_t1;
            var _r211_t0 = this;
            var r211_lookup = Object.fromEntries(Object.entries(r211_data));
            r211_lookup.name = r211_name;
            _r211_t0.lookups[r211_name] = r211_lookup;
            return r211_lookup;
        };
        r135_Type.prototype.setDependency = function (r217_a, r217_b) {
            var _r217_t1;
            var _r217_t0 = this;
            if (!r217_a.name) throw new Error("Invalid lookup");
            if (!r217_b.name) throw new Error("Invalid lookup");
            return _r217_t0.lookupDep.push([r217_a.name, r217_b.name]);
        };
        r135_Type.prototype.beginBlock = function () {
            var _r223_t1;
            var _r223_t0 = this;
            return {
                "existingLookupNames": new r1_Set(Object.keys(_r223_t0.lookups))
            };
        };
        r135_Type.prototype.endBlock = function (r229_rec) {
            var r229_existing, r229_current, _r229_t2, _r229_t3, _r229_t5, _r229_t7, _r229_t8, _r229_t9;
            var _r229_t4 = this;
            var r229_currentLookupNames = new r1_Set(Object.keys(_r229_t4.lookups));
            var _r229_t0 = r229_rec.existingLookupNames[Symbol.iterator]();
            var _r229_t1 = void 0;
            var _r229_t6 = !(_r229_t1 = _r229_t0.next()).done;
            while (_r229_t6) {
                r229_existing = _r229_t1.value;
                _r229_t2 = r229_currentLookupNames[Symbol.iterator]();
                _r229_t3 = void 0;
                _r229_t8 = !(_r229_t3 = _r229_t2.next()).done;
                while (_r229_t8) {
                    _r229_t9 = (r229_current = _r229_t3.value, !r1_IsUtilityLookupId(r229_existing) && !r1_IsUtilityLookupId(r229_current) && !r229_rec.existingLookupNames.has(r229_current) ? _r229_t4.lookupDep.push([r229_existing, r229_current]) : void 0);
                    _r229_t8 = !(_r229_t3 = _r229_t2.next()).done;
                }
                _r229_t7 = _r229_t9;
                _r229_t6 = !(_r229_t1 = _r229_t0.next()).done;
            }
            return _r229_t7;
        };
        r135_Type.prototype.endBlockAtFront = function (r237_rec) {
            var r237_existing, r237_current, _r237_t2, _r237_t3, _r237_t5, _r237_t7, _r237_t8, _r237_t9;
            var _r237_t4 = this;
            var r237_currentLookupNames = new r1_Set(Object.keys(_r237_t4.lookups));
            var _r237_t0 = r237_rec.existingLookupNames[Symbol.iterator]();
            var _r237_t1 = void 0;
            var _r237_t6 = !(_r237_t1 = _r237_t0.next()).done;
            while (_r237_t6) {
                r237_existing = _r237_t1.value;
                _r237_t2 = r237_currentLookupNames[Symbol.iterator]();
                _r237_t3 = void 0;
                _r237_t8 = !(_r237_t3 = _r237_t2.next()).done;
                while (_r237_t8) {
                    _r237_t9 = (r237_current = _r237_t3.value, !r1_IsUtilityLookupId(r237_existing) && !r1_IsUtilityLookupId(r237_current) && !r237_rec.existingLookupNames.has(r237_current) ? _r237_t4.lookupDep.push([r237_current, r237_existing]) : void 0);
                    _r237_t8 = !(_r237_t3 = _r237_t2.next()).done;
                }
                _r237_t7 = _r237_t9;
                _r237_t6 = !(_r237_t1 = _r237_t0.next()).done;
            }
            return _r237_t7;
        };
        r135_Type.prototype.finalize = function () {
            var r245_front, r245_rear, r245_key, r245_lang, _r245_t2, _r245_t3, _r245_t6, _r245_t8, _r245_t10;
            var _r245_t7 = this;
            var r245_lns = new r1_Set(Object.keys(_r245_t7.lookups));
            var _r245_t0 = r245_lns[Symbol.iterator]();
            var _r245_t1 = void 0;
            while (!(_r245_t1 = _r245_t0.next()).done) {
                r245_front = _r245_t1.value;
                _r245_t2 = r245_lns[Symbol.iterator]();
                _r245_t3 = void 0;
                while (!(_r245_t3 = _r245_t2.next()).done) {
                    r245_rear = _r245_t3.value;
                    if (!r1_IsUtilityLookupId(r245_front) && r1_IsUtilityLookupId(r245_rear)) _r245_t7.lookupDep.push([r245_front, r245_rear]);
                }
            }
            _r245_t7.lookupOrder = r1_toposort(_r245_t7.lookupDep);
            var _r245_t4 = _r1_t2(_r245_t7.languages)[Symbol.iterator]();
            var _r245_t5 = void 0;
            var _r245_t9 = !(_r245_t5 = _r245_t4.next()).done;
            while (_r245_t9) {
                _r245_t10 = (_r245_t6 = _r245_t5.value, r245_key = _r245_t6[0], r245_lang = _r245_t6[1], r245_lang.features ? r245_lang.features.sort() : void 0);
                _r245_t9 = !(_r245_t5 = _r245_t4.next()).done;
            }
            return _r245_t10;
        };
        r135_Type.prototype.ChainRuleBuilder = function () {
            var _r259_t1;
            var _r259_t0 = this;
            var r259_table = _r259_t0;
            var r259_createNewLookup = function (r265_f, r265_t) {
                var _r265_t2, _r265_t3;
                var r265_subst = {};
                var _r265_t0 = 0;
                var _r265_t1 = r265_f.length;
                var r265_j = _r265_t0;
                while (r265_j < _r265_t1) {
                    r265_subst[r265_f[r265_j]] = r265_t[r265_j];
                    r265_j = r265_j + 1;
                }
                return r259_table.createLookup({
                    "type": "gsub_single",
                    "substitutions": r265_subst
                }, r1_UtilityLookupPrefix);
            };
            var r259_getSubLookup = function (r268_left, r268_right) {
                var r268_found, r268_maxMatch, r268_lookupKeys, r268_name, r268_lookup, r268_st, r268_compatible, r268_matchCount, r268_j, _r268_t0, _r268_t1, _r268_t2, _r268_t3, _r268_t4, _r268_t5, _r268_t6, _r268_t7, _r268_t8, _r268_t9, _r268_t10, _r268_t11, _r268_t12;
                if (!r268_right) return null; else if (typeof r268_right === "string") throw new Error("Invalid substitution"); else if (r268_right instanceof Function) return r259_getSubLookup(r268_left, r268_right(r268_left)); else if (true) {
                    r268_found = null;
                    r268_maxMatch = 0;
                    r268_lookupKeys = Object.keys(r259_table.lookups).reverse();
                    _r268_t0 = r268_lookupKeys;
                    _r268_t1 = _r268_t0.length;
                    _r268_t2 = 0;
                    while (_r268_t2 < _r268_t1) {
                        r268_name = _r268_t0[_r268_t2];
                        if (r1_IsUtilityLookupId(r268_name)) {
                            r268_lookup = r259_table.lookups[r268_name];
                            r268_st = r268_lookup.substitutions;
                            r268_compatible = true;
                            r268_matchCount = 0;
                            _r268_t3 = 0;
                            _r268_t4 = r268_left.length;
                            r268_j = _r268_t3;
                            while (r268_j < _r268_t4) {
                                if (r268_st[r268_left[r268_j]] && r268_st[r268_left[r268_j]] !== r268_right[r268_j]) r268_compatible = false;
                                if (r268_st[r268_left[r268_j]] === r268_right[r268_j]) r268_matchCount = r268_matchCount + 1;
                                r268_j = r268_j + 1;
                            }
                            if (r268_compatible && (!r268_found || r268_matchCount > r268_maxMatch)) {
                                r268_found = r268_lookup;
                                r268_maxMatch = r268_matchCount;
                            }
                        }
                        _r268_t2 = _r268_t2 + 1;
                    }
                    if (r268_found) {
                        r268_st = r268_found.substitutions;
                        _r268_t5 = 0;
                        _r268_t6 = r268_left.length;
                        r268_j = _r268_t5;
                        while (r268_j < _r268_t6) {
                            r268_st[r268_left[r268_j]] = r268_right[r268_j];
                            r268_j = r268_j + 1;
                        }
                        return r268_found;
                    }
                    return r259_createNewLookup(r268_left, r268_right);
                } else return void 0;
            };
            var r259_xn$chainrule$1aao = function () {
                var r275_term, r275_lookup, _r275_t6;
                var _r275_t7 = arguments;
                var r275_terms = [].slice.call(_r275_t7, 0).map(function (r276_x) {
                    var _r276_t0, _r276_t1;
                    return r276_x.left ? r276_x : {
                        "left": r276_x,
                        "right": null
                    };
                });
                var r275_rule = {
                    "match": [],
                    "apply": [],
                    "inputBegins": 0,
                    "inputEnds": 0
                };
                var r275_foundi = false;
                var r275_founde = false;
                var _r275_t0 = 0;
                var _r275_t1 = r275_terms.length;
                var r275_j = _r275_t0;
                while (r275_j < _r275_t1) {
                    if (!r275_foundi && r275_terms[r275_j].right) {
                        r275_rule.inputBegins = r275_j;
                        r275_foundi = true;
                    }
                    r275_j = r275_j + 1;
                }
                var _r275_t2 = r275_terms.length - 1;
                var _r275_t3 = 0;
                r275_j = _r275_t2;
                while (r275_j >= _r275_t3) {
                    if (!r275_founde && r275_terms[r275_j].right) {
                        r275_rule.inputEnds = r275_j + 1;
                        r275_founde = true;
                    }
                    r275_j = r275_j - 1;
                }
                var _r275_t4 = 0;
                var _r275_t5 = r275_terms.length;
                r275_j = _r275_t4;
                while (r275_j < _r275_t5) {
                    r275_term = r275_terms[r275_j];
                    r275_rule.match.push(Array.from(new r1_Set(r275_term.left)));
                    r275_lookup = r259_getSubLookup(r275_term.left, r275_term.right);
                    if (r275_lookup) r275_rule.apply.push({
                        "at": r275_j,
                        "lookup": {
                            "name": r275_lookup.name
                        }
                    });
                    r275_j = r275_j + 1;
                }
                return r275_rule;
            };
            var r259_xn$reverserule$3qIs = function () {
                var r283_term, r283_subst, r283_g, r283_toGlyphs, r283_k, _r283_t2, _r283_t3, _r283_t4, _r283_t5, _r283_t6, _r283_t7;
                var _r283_t8 = arguments;
                var r283_terms = [].slice.call(_r283_t8, 0).map(function (r284_x) {
                    var _r284_t0, _r284_t1;
                    return r284_x.left ? r284_x : {
                        "left": r284_x,
                        "right": null
                    };
                });
                var r283_rule = {
                    "match": [],
                    "to": [],
                    "inputIndex": 0
                };
                var r283_foundi = false;
                var _r283_t0 = 0;
                var _r283_t1 = r283_terms.length;
                var r283_j = _r283_t0;
                while (r283_j < _r283_t1) {
                    r283_term = r283_terms[r283_j];
                    r283_subst = new r1_Map();
                    _r283_t2 = r283_term.left;
                    _r283_t3 = _r283_t2.length;
                    _r283_t4 = 0;
                    while (_r283_t4 < _r283_t3) {
                        r283_g = _r283_t2[_r283_t4];
                        r283_subst.set(r283_g, r283_g);
                        _r283_t4 = _r283_t4 + 1;
                    }
                    if (r283_term.right) {
                        if (r283_foundi) throw new Error("Duplicate substitutions in one reverse rule");
                        r283_foundi = true;
                        r283_rule.inputIndex = r283_j;
                        r283_toGlyphs = r283_term.right instanceof Function ? r283_term.right(r283_term.left) : true ? r283_term.right : void 0;
                        _r283_t5 = 0;
                        _r283_t6 = r283_term.left.length;
                        r283_k = _r283_t5;
                        while (r283_k < _r283_t6) {
                            r283_subst.set(r283_term.left[r283_k], r283_toGlyphs[r283_k] || r283_term.left[r283_k]);
                            r283_k = r283_k + 1;
                        }
                        r283_rule.to = Array.from(r283_subst.values());
                    }
                    r283_rule.match[r283_j] = Array.from(r283_subst.keys());
                    r283_j = r283_j + 1;
                }
                return r283_rule;
            };
            return [r259_xn$chainrule$1aao, r259_xn$reverserule$3qIs];
        };
        return void 0;
    }).call(r135_Type.prototype);
    return r135_Type;
})(Object);
var r1_LayoutFeature = (function (r292_Super) {
    var _r292_t0, _r292_t1;
    var r292_Constructor = function () {
        var _r293_t0, _r293_t1;
        return void 0;
    };
    var r292_Type = function () {
        var _r294_t0 = this;
        var _r294_t1 = arguments;
        r292_Constructor.apply(_r294_t0, _r294_t1);
        return void 0;
    };
    var r292_Symbol = Symbol;
    (function () {
        var r296_protectedTerms, _r296_t0, _r296_t1;
        r292_Type.protectedTerms = r296_protectedTerms = Object.create(r292_Super.protectedTerms || null);
        r292_Constructor = function (r324_tag) {
            var _r324_t1;
            var _r324_t0 = this;
            _r324_t0.tag = r324_tag;
            _r324_t0.name = r324_tag;
            _r324_t0.lookups = [];
            return void 0;
        };
        r292_Type.prototype.addLookup = function (r330_lookup) {
            var _r330_t1;
            var _r330_t0 = this;
            if (!r330_lookup.name) throw new Error("Invalid lookup");
            var r330_index = _r330_t0.lookups.indexOf(r330_lookup.name);
            if (r330_index < 0) _r330_t0.lookups.push(r330_lookup.name);
            return r330_lookup;
        };
        return void 0;
    }).call(r292_Type.prototype);
    return r292_Type;
})(Object);
var r1_LayoutLanguage = (function (r337_Super) {
    var _r337_t0, _r337_t1;
    var r337_Constructor = function () {
        var _r338_t0, _r338_t1;
        return void 0;
    };
    var r337_Type = function () {
        var _r339_t0 = this;
        var _r339_t1 = arguments;
        r337_Constructor.apply(_r339_t0, _r339_t1);
        return void 0;
    };
    var r337_Symbol = Symbol;
    (function () {
        var r341_protectedTerms, _r341_t0, _r341_t1;
        r337_Type.protectedTerms = r341_protectedTerms = Object.create(r337_Super.protectedTerms || null);
        r337_Constructor = function (r369_tag) {
            var _r369_t1;
            var _r369_t0 = this;
            _r369_t0.tag = r369_tag;
            _r369_t0.features = [];
            return void 0;
        };
        r337_Type.prototype.addFeature = function (r375_feature) {
            var _r375_t1;
            var _r375_t0 = this;
            if (!r375_feature.name) throw new Error("Invalid feature");
            var r375_index = _r375_t0.features.indexOf(r375_feature.name);
            if (r375_index < 0) _r375_t0.features.push(r375_feature.name);
            return r375_feature;
        };
        return void 0;
    }).call(r337_Type.prototype);
    return r337_Type;
})(Object);
var r1_UtilityLookupPrefix = ".utility-single/";
var r1_IsUtilityLookupId = function (r381_name) {
    var _r381_t0, _r381_t1;
    return r381_name.slice(0, r1_UtilityLookupPrefix.length) === r1_UtilityLookupPrefix;
};
_s0_t2 = r1_FinalizeTable = function (r383_table) {
    var r383_key, r383_lang, _r383_t2, _r383_t3, _r383_t4, _r383_t6;
    r383_table.lookupOrder = r1_toposort(r383_table.lookupDep);
    var _r383_t0 = _r1_t2(r383_table.languages)[Symbol.iterator]();
    var _r383_t1 = void 0;
    var _r383_t5 = !(_r383_t1 = _r383_t0.next()).done;
    while (_r383_t5) {
        _r383_t6 = (_r383_t2 = _r383_t1.value, r383_key = _r383_t2[0], r383_lang = _r383_t2[1], r383_lang.features ? r383_lang.features.sort() : void 0);
        _r383_t5 = !(_r383_t1 = _r383_t0.next()).done;
    }
    return _r383_t6;
};
_s0_t3 = r1_UkMapToLookup = function (r388_m) {
    var r388_k, r388_v, _r388_t2, _r388_t3, _r388_t4;
    var r388_l = [];
    var r388_r = [];
    var _r388_t0 = Object.entries(r388_m)[Symbol.iterator]();
    var _r388_t1 = void 0;
    while (!(_r388_t1 = _r388_t0.next()).done) {
        _r388_t2 = _r388_t1.value;
        r388_k = _r388_t2[0];
        r388_v = _r388_t2[1];
        r388_l.push(r388_k);
        r388_r.push(r388_v);
    }
    return {
        "left": r388_l,
        "right": r388_r
    };
};
_s0_t4 = r1_UkLigatureToLookup = function (r391_data, r391_mapper) {
    var r391_from, r391_to, r391_allFound, r391_fromGlyphNames, r391_toGlyph, r391_u, r391_gn, _r391_t3, _r391_t4, _r391_t5, _r391_t6, _r391_t7, _r391_t8;
    var r391_substitutions = [];
    var _r391_t0 = r391_data;
    var _r391_t1 = _r391_t0.length;
    var _r391_t2 = 0;
    while (_r391_t2 < _r391_t1) {
        _r391_t3 = _r391_t0[_r391_t2];
        r391_from = _r391_t3[0];
        r391_to = _r391_t3[1];
        r391_allFound = true;
        r391_fromGlyphNames = [];
        r391_toGlyph = null;
        _r391_t4 = r391_from;
        _r391_t5 = _r391_t4.length;
        _r391_t6 = 0;
        while (_r391_t6 < _r391_t5) {
            r391_u = _r391_t4[_r391_t6];
            r391_gn = r391_mapper(r391_u);
            if (r391_gn) r391_fromGlyphNames.push(r391_gn); else r391_allFound = false;
            _r391_t6 = _r391_t6 + 1;
        }
        r391_gn = r391_mapper(r391_to);
        if (r391_gn) r391_toGlyph = r391_gn; else r391_allFound = false;
        if (r391_allFound) r391_substitutions.push({
            "from": r391_fromGlyphNames,
            "to": r391_toGlyph
        });
        _r391_t2 = _r391_t2 + 1;
    }
    return r391_substitutions;
};


