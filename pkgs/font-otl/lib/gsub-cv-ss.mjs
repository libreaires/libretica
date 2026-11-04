"use strict";
import * as _s0_t0 from "@iosevka/glyph/relation";
var _s0_t1;
export {_s0_t1 as buildCVSS};
var r1_buildCVSS, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r264_t) {
    var r264_n, r264_i, r264_a, _r264_t3, _r264_t4, _r264_t5, _r264_t6, _r264_t7, _r264_t8, _r264_t9, _r264_t10, _r264_t11, _r264_t12, _r264_t13, _r264_t14, _r264_t15, _r264_t16, _r264_t17, _r264_t18, _r264_t19, _r264_t20, _r264_t21, _r264_t22, _r264_t23, _r264_t24, _r264_t25, _r264_t26;
    var _r264_t0 = function () {
        _r264_t7 = function (_r264_t8) {
            _r264_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r264_t8
            };
        };
        _r264_t9 = r264_t instanceof Array;
        if (_r264_t9) {
            _r264_t10 = r264_n = r264_t.length;
            _r264_t11 = r264_i = 0;
            _r264_t12 = function (_r264_t14) {
                return _r264_t7(_r264_t14);
            };
            _r264_t13 = function (_r264_t15) {
                _r264_t16 = r264_i < r264_n;
                if (_r264_t16) {
                    _r264_t0 = function (_r264_t17) {
                        return _r264_t13(r264_i = r264_i + 1);
                    };
                    return {
                        "value": [r264_i, r264_t[r264_i]],
                        "done": false
                    };
                } else return _r264_t12(_r264_t15);
            };
            return _r264_t13();
        } else {
            _r264_t18 = r264_a = Object.keys(r264_t);
            _r264_t19 = r264_n = r264_a.length;
            _r264_t20 = r264_i = 0;
            _r264_t21 = function (_r264_t23) {
                return _r264_t7(_r264_t23);
            };
            _r264_t22 = function (_r264_t24) {
                _r264_t25 = r264_i < r264_n;
                if (_r264_t25) {
                    _r264_t0 = function (_r264_t26) {
                        return _r264_t22(r264_i = r264_i + 1);
                    };
                    return {
                        "value": [r264_a[r264_i], r264_t[r264_a[r264_i]]],
                        "done": false
                    };
                } else return _r264_t21(_r264_t24);
            };
            return _r264_t22();
        }
    };
    var _r264_t1 = function (x) {
        try {
            return _r264_t0(x);
        } catch (ex) {
            return _r264_t2(ex);
        }
    };
    var _r264_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9) _r264_t3 = this; else {
        _r264_t4 = function () {
            void 0;
        };
        _r264_t4.prototype = _r1_t9.prototype;
        _r264_t3 = new _r264_t4();
    }
    _r264_t3[Symbol.iterator] = function () {
        return _r264_t3;
    };
    _r264_t3.next = _r264_t1;
    _r264_t3.throw = function (x) {
        return _r264_t2(x);
    };
    return _r264_t3;
};
var _r1_t8 = _s0_t0;
var r1_AnyCv = _r1_t8.AnyCv;
var r1_CvCherryPickingGrs = _r1_t8.CvCherryPickingGrs;
var r1_CvDecompose = _r1_t8.CvDecompose;
var r1_Map = Map;
var r1_Set = Set;
var r1_xn$lookaround$5sIl = null;
var r1_CvLookupManager = (function (r148_Super) {
    var _r148_t0, _r148_t1;
    var r148_Constructor = function () {
        var _r149_t0, _r149_t1;
        return void 0;
    };
    var r148_Type = function () {
        var _r150_t0 = this;
        var _r150_t1 = arguments;
        r148_Constructor.apply(_r150_t0, _r150_t1);
        return void 0;
    };
    var r148_Symbol = Symbol;
    (function () {
        var r152_protectedTerms, _r152_t0, _r152_t1;
        r148_Type.protectedTerms = r152_protectedTerms = Object.create(r148_Super.protectedTerms || null);
        r148_Constructor = function (r180_table, r180_tag, r180_feature) {
            var _r180_t1;
            var _r180_t0 = this;
            _r180_t0.table = r180_table;
            _r180_t0.tag = r180_tag;
            _r180_t0.feature = r180_feature;
            _r180_t0.decompositionLookup = null;
            _r180_t0.altrenatesLookup = null;
            _r180_t0.singleSubstLookups = [];
            _r180_t0.cherryPickingLookups = [];
            return void 0;
        };
        r148_Type.prototype.addDecompositionLookup = function (r186_lookup) {
            var _r186_t1;
            var _r186_t0 = this;
            _r186_t0.decompositionLookups.push(r186_lookup);
            return _r186_t0.feature.addLookup(r186_lookup);
        };
        r148_Type.prototype.createDecompositionSubst = function () {
            var _r192_t1;
            var _r192_t0 = this;
            if (_r192_t0.decompositionLookup) return _r192_t0.decompositionLookup;
            var r192_lookupName = "lookup_cv_decompose_" + _r192_t0.tag;
            var r192_lookup = _r192_t0.table.pickLookup(r192_lookupName, {
                "type": "gsub_multiple",
                "substitutions": {}
            });
            _r192_t0.feature.addLookup(r192_lookup);
            _r192_t0.decompositionLookup = r192_lookup;
            return r192_lookup;
        };
        r148_Type.prototype.createAlternateSubst = function () {
            var _r198_t1;
            var _r198_t0 = this;
            if (_r198_t0.altrenatesLookup) return _r198_t0.altrenatesLookup;
            var r198_lookupName = "lookup_cv_alternates_" + _r198_t0.tag;
            var r198_lookup = _r198_t0.table.pickLookup(r198_lookupName, {
                "type": "gsub_alternate",
                "substitutions": {}
            });
            _r198_t0.feature.addLookup(r198_lookup);
            _r198_t0.altrenatesLookup = r198_lookup;
            return r198_lookup;
        };
        r148_Type.prototype.createSingleSubstFor = function (r204_rank) {
            var _r204_t1;
            var _r204_t0 = this;
            if (_r204_t0.singleSubstLookups[r204_rank]) return _r204_t0.singleSubstLookups[r204_rank];
            var r204_lookupName = "lookup_cv_single_" + _r204_t0.tag + "_" + r204_rank;
            var r204_lookup = _r204_t0.table.pickLookup(r204_lookupName, {
                "type": "gsub_single",
                "substitutions": {}
            });
            _r204_t0.singleSubstLookups[r204_rank] = r204_lookup;
            return r204_lookup;
        };
        r148_Type.prototype.createCherryPickingSubst = function (r210_cpTag) {
            var _r210_t1;
            var _r210_t0 = this;
            var r210_lookupName = "lookup_cv_single_" + _r210_t0.tag + "_cp_" + r210_cpTag;
            var r210_lookup = _r210_t0.table.pickLookup(r210_lookupName, {
                "type": "gsub_single",
                "substitutions": {}
            });
            _r210_t0.cherryPickingLookups.push(r210_lookup);
            return r210_lookup;
        };
        r148_Type.prototype.linkDeps = function () {
            var r216_lookupSS, r216_lookupCP, _r216_t0, _r216_t1, _r216_t2, _r216_t3, _r216_t4, _r216_t5, _r216_t6, _r216_t7, _r216_t8, _r216_t9, _r216_t10, _r216_t11, _r216_t15, _r216_t16, _r216_t17, _r216_t19, _r216_t21;
            var _r216_t18 = this;
            if (_r216_t18.decompositionLookup) {
                if (_r216_t18.altrenatesLookup) _r216_t18.table.setDependency(_r216_t18.decompositionLookup, _r216_t18.altrenatesLookup);
                _r216_t0 = _r216_t18.singleSubstLookups;
                _r216_t1 = _r216_t0.length;
                _r216_t2 = 0;
                while (_r216_t2 < _r216_t1) {
                    r216_lookupSS = _r216_t0[_r216_t2];
                    if (r216_lookupSS) _r216_t18.table.setDependency(_r216_t18.decompositionLookup, r216_lookupSS);
                    _r216_t2 = _r216_t2 + 1;
                }
                _r216_t3 = _r216_t18.cherryPickingLookups;
                _r216_t4 = _r216_t3.length;
                _r216_t5 = 0;
                while (_r216_t5 < _r216_t4) {
                    r216_lookupCP = _r216_t3[_r216_t5];
                    if (r216_lookupCP) _r216_t18.table.setDependency(_r216_t18.decompositionLookup, r216_lookupCP);
                    _r216_t5 = _r216_t5 + 1;
                }
            }
            if (_r216_t18.altrenatesLookup) {
                _r216_t6 = _r216_t18.singleSubstLookups;
                _r216_t7 = _r216_t6.length;
                _r216_t8 = 0;
                while (_r216_t8 < _r216_t7) {
                    r216_lookupSS = _r216_t6[_r216_t8];
                    if (r216_lookupSS) _r216_t18.table.setDependency(_r216_t18.altrenatesLookup, r216_lookupSS);
                    _r216_t8 = _r216_t8 + 1;
                }
                _r216_t9 = _r216_t18.cherryPickingLookups;
                _r216_t10 = _r216_t9.length;
                _r216_t11 = 0;
                while (_r216_t11 < _r216_t10) {
                    r216_lookupCP = _r216_t9[_r216_t11];
                    if (r216_lookupCP) _r216_t18.table.setDependency(r216_lookupCP, _r216_t18.altrenatesLookup);
                    _r216_t11 = _r216_t11 + 1;
                }
            }
            var _r216_t12 = _r216_t18.cherryPickingLookups;
            var _r216_t13 = _r216_t12.length;
            var _r216_t14 = 0;
            var _r216_t20 = _r216_t14 < _r216_t13;
            while (_r216_t20) {
                r216_lookupCP = _r216_t12[_r216_t14];
                if (r216_lookupCP) {
                    _r216_t15 = _r216_t18.singleSubstLookups;
                    _r216_t16 = _r216_t15.length;
                    _r216_t17 = 0;
                    while (_r216_t17 < _r216_t16) {
                        r216_lookupSS = _r216_t15[_r216_t17];
                        if (r216_lookupSS) _r216_t18.table.setDependency(r216_lookupCP, r216_lookupSS);
                        _r216_t17 = _r216_t17 + 1;
                    }
                }
                _r216_t21 = _r216_t14 = _r216_t14 + 1;
                _r216_t20 = _r216_t14 < _r216_t13;
            }
            return _r216_t21;
        };
        r148_Type.prototype.linkCrossDeps = function (r228_other) {
            var r228_lookupSS, _r228_t0, _r228_t1, _r228_t2, _r228_t4, _r228_t5, _r228_t6, _r228_t7;
            var _r228_t3 = this;
            if (_r228_t3.altrenatesLookup && r228_other.altrenatesLookup) _r228_t3.table.setDependency(_r228_t3.altrenatesLookup, r228_other.altrenatesLookup);
            if (r228_other.altrenatesLookup) {
                _r228_t0 = _r228_t3.singleSubstLookups;
                _r228_t1 = _r228_t0.length;
                _r228_t2 = 0;
                _r228_t6 = _r228_t2 < _r228_t1;
                while (_r228_t6) {
                    _r228_t7 = (r228_lookupSS = _r228_t0[_r228_t2], r228_lookupSS ? _r228_t3.table.setDependency(r228_lookupSS, r228_other.altrenatesLookup) : void 0, _r228_t2 = _r228_t2 + 1);
                    _r228_t6 = _r228_t2 < _r228_t1;
                }
                return _r228_t7;
            } else return void 0;
        };
        r148_Type.compare = function (r235_a, r235_b) {
            var _r235_t0, _r235_t1;
            if (r235_a.tag < r235_b.tag) return -1;
            if (r235_a.tag > r235_b.tag) return 1;
            return 0;
        };
        return void 0;
    }).call(r148_Type.prototype);
    return r148_Type;
})(Object);
_s0_t1 = r1_buildCVSS = function (r237_gsub, r237_para, r237_glyphStore) {
    var _r237_t0, _r237_t1, _r237_t2, _r237_tag3, _r237_t4, _r237_tag5, _r237_t6, _r237_tag7, _r237_t8, _r237_tag9, _r237_t10, _r237_tag11;
    var r237_rec = r237_gsub.beginBlock();
    var r237_cvs = new r1_Map();
    (function () {
        var r239_name, r239_prime, r239_feature, r239_cvLookupManager, _r239_t2, _r239_t4;
        var _r239_t0 = r237_para.variants.primes[Symbol.iterator]();
        var _r239_t1 = void 0;
        var _r239_t3 = !(_r239_t1 = _r239_t0.next()).done;
        while (_r239_t3) {
            _r239_t4 = (_r239_t2 = _r239_t1.value, r239_name = _r239_t2[0], r239_prime = _r239_t2[1], r239_prime.tag ? (r239_feature = r237_gsub.addCommonFeature(r237_gsub.createFeature(r239_prime.tag)), r239_cvLookupManager = new r1_CvLookupManager(r237_gsub, r239_prime.tag, r239_feature), r237_cvs.set(r239_prime.tag, r239_cvLookupManager)) : void 0);
            _r239_t3 = !(_r239_t1 = _r239_t0.next()).done;
        }
        return _r239_t4;
    })();
    (function () {
        var r242_gn, r242_glyph, r242_parts, r242_part, r242_gPart, r242_gr, r242_lookup, _r242_t2, _r242_t3, _r242_t4, _r242_t5, _r242_t6, _r242_t7, _r242_t8, _r242_t10, _r242_t11, _r242_t12, _r242_t13;
        var _r242_t0 = r237_glyphStore.namedEntries()[Symbol.iterator]();
        var _r242_t1 = void 0;
        var _r242_t9 = !(_r242_t1 = _r242_t0.next()).done;
        while (_r242_t9) {
            _r242_t2 = _r242_t1.value;
            r242_gn = _r242_t2[0];
            r242_glyph = _r242_t2[1];
            r242_parts = r1_CvDecompose.get(r242_glyph);
            if (r242_parts) {
                _r242_t3 = r242_parts;
                _r242_t4 = _r242_t3.length;
                _r242_t5 = 0;
                _r242_t12 = _r242_t5 < _r242_t4;
                while (_r242_t12) {
                    r242_part = _r242_t3[_r242_t5];
                    r242_gPart = r237_glyphStore.queryByNameEnsured(r242_part);
                    _r242_t6 = r1_AnyCv.query(r242_gPart);
                    _r242_t7 = _r242_t6.length;
                    _r242_t8 = 0;
                    while (_r242_t8 < _r242_t7) {
                        r242_gr = _r242_t6[_r242_t8];
                        if (r242_gr.tag) {
                            r242_lookup = r237_cvs.get(r242_gr.tag).createDecompositionSubst();
                            if (!r242_lookup.substitutions[r242_gn]) r242_lookup.substitutions[r242_gn] = r242_parts;
                        }
                        _r242_t8 = _r242_t8 + 1;
                    }
                    _r242_t13 = _r242_t5 = _r242_t5 + 1;
                    _r242_t12 = _r242_t5 < _r242_t4;
                }
                _r242_t11 = _r242_t13;
            }
            _r242_t10 = _r242_t11;
            _r242_t9 = !(_r242_t1 = _r242_t0.next()).done;
        }
        return _r242_t10;
    })();
    (function () {
        var r248_name, r248_composition, r248_feature, r248_decomp, r248_ssGrs, r248_prime, r248_pv, r248_dl, r248_gr, r248_cvSingle, r248_gn, r248_glyph, r248_subst, r248_cvAlt, _r248_t2, _r248_t3, _r248_t4, _r248_t5, _r248_t6, _r248_t7, _r248_t8, _r248_t9, _r248_t12, _r248_t13, _r248_t14, _r248_t15, _r248_t17, _r248_t18, _r248_t19;
        var r248_grSetUsedBySs = new r1_Set();
        var _r248_t0 = r237_para.variants.composites[Symbol.iterator]();
        var _r248_t1 = void 0;
        while (!(_r248_t1 = _r248_t0.next()).done) {
            _r248_t2 = _r248_t1.value;
            r248_name = _r248_t2[0];
            r248_composition = _r248_t2[1];
            if (r248_composition.tag) {
                r248_feature = r237_gsub.addCommonFeature(r237_gsub.createFeature(r248_composition.tag));
                r248_decomp = r248_composition.decompose(r237_para, r237_para.variants.selectorTree);
                r248_ssGrs = [];
                _r248_t3 = r248_decomp;
                _r248_t4 = _r248_t3.length;
                _r248_t5 = 0;
                while (_r248_t5 < _r248_t4) {
                    _r248_t6 = _r248_t3[_r248_t5];
                    r248_prime = _r248_t6[0];
                    r248_pv = _r248_t6[1];
                    if (r248_pv.tag && r248_pv.rank) {
                        r248_ssGrs.push(r248_pv);
                        r248_dl = r237_cvs.get(r248_pv.tag).decompositionLookup;
                        if (r248_dl) r248_feature.addLookup(r248_dl);
                    }
                    _r248_t5 = _r248_t5 + 1;
                }
                r248_ssGrs.sort(r1_AnyCv.compare);
                _r248_t7 = r248_ssGrs;
                _r248_t8 = _r248_t7.length;
                _r248_t9 = 0;
                while (_r248_t9 < _r248_t8) {
                    r248_gr = _r248_t7[_r248_t9];
                    r248_cvSingle = r237_cvs.get(r248_gr.tag).createSingleSubstFor(r248_gr.rank);
                    r248_feature.addLookup(r248_cvSingle);
                    r248_grSetUsedBySs.add(r248_gr);
                    _r248_t9 = _r248_t9 + 1;
                }
            }
        }
        var _r248_t10 = r237_glyphStore.namedEntriesWithFilter(r1_nonDecomposable)[Symbol.iterator]();
        var _r248_t11 = void 0;
        var _r248_t16 = !(_r248_t11 = _r248_t10.next()).done;
        while (_r248_t16) {
            _r248_t12 = _r248_t11.value;
            r248_gn = _r248_t12[0];
            r248_glyph = _r248_t12[1];
            _r248_t13 = r1_AnyCv.query(r248_glyph);
            _r248_t14 = _r248_t13.length;
            _r248_t15 = 0;
            _r248_t18 = _r248_t15 < _r248_t14;
            while (_r248_t18) {
                _r248_t19 = (r248_gr = _r248_t13[_r248_t15], r248_subst = r248_gr.get(r248_glyph), r248_subst && r248_subst !== r248_gn ? (r248_gr.tag && r248_gr.rank ? (r248_cvAlt = r237_cvs.get(r248_gr.tag).createAlternateSubst(), !r248_cvAlt.substitutions[r248_gn] ? r248_cvAlt.substitutions[r248_gn] = [] : void 0, r248_cvAlt.substitutions[r248_gn][r248_gr.rank - 1] = r237_glyphStore.ensureExists(r248_subst)) : void 0, r248_grSetUsedBySs.has(r248_gr) ? (r248_cvSingle = r237_cvs.get(r248_gr.tag).createSingleSubstFor(r248_gr.rank), r248_cvSingle.substitutions[r248_gn] = r237_glyphStore.ensureExists(r248_subst)) : void 0) : void 0, _r248_t15 = _r248_t15 + 1);
                _r248_t18 = _r248_t15 < _r248_t14;
            }
            _r248_t17 = _r248_t19;
            _r248_t16 = !(_r248_t11 = _r248_t10.next()).done;
        }
        return _r248_t17;
    })();
    (function () {
        var r255_name, r255_prime, r255_cv, r255_cp, r255_gr, r255_feature, r255_lookup, r255_gn, r255_glyph, r255_subst, _r255_t2, _r255_t3, _r255_t4, _r255_t5, _r255_t6, _r255_t7, _r255_t8, _r255_t9, _r255_t10, _r255_t11, _r255_t13, _r255_t14, _r255_t15, _r255_t16;
        var _r255_t0 = r237_para.variants.primes[Symbol.iterator]();
        var _r255_t1 = void 0;
        var _r255_t12 = !(_r255_t1 = _r255_t0.next()).done;
        while (_r255_t12) {
            _r255_t2 = _r255_t1.value;
            r255_name = _r255_t2[0];
            r255_prime = _r255_t2[1];
            if (r255_prime.cherryPicking) {
                r255_cv = r237_cvs.get(r255_prime.tag);
                _r255_t3 = r255_prime.cherryPicking;
                _r255_t4 = _r255_t3.length;
                _r255_t5 = 0;
                _r255_t15 = _r255_t5 < _r255_t4;
                while (_r255_t15) {
                    r255_cp = _r255_t3[_r255_t5];
                    _r255_t6 = r1_CvCherryPickingGrs;
                    _r255_t7 = _r255_t6.length;
                    _r255_t8 = 0;
                    while (_r255_t8 < _r255_t7) {
                        r255_gr = _r255_t6[_r255_t8];
                        if (r255_cp.tag === r255_gr.tag) {
                            r255_feature = r237_gsub.addCommonFeature(r237_gsub.createFeature(r255_cp.tag));
                            r255_lookup = r255_cv.createCherryPickingSubst(r255_cp.tag);
                            if (r255_cv.decompositionLookup) r255_feature.addLookup(r255_cv.decompositionLookup);
                            r255_feature.addLookup(r255_lookup);
                            _r255_t9 = r237_glyphStore.namedEntriesWithFilter(r1_nonDecomposable)[Symbol.iterator]();
                            _r255_t10 = void 0;
                            while (!(_r255_t10 = _r255_t9.next()).done) {
                                _r255_t11 = _r255_t10.value;
                                r255_gn = _r255_t11[0];
                                r255_glyph = _r255_t11[1];
                                r255_subst = r255_gr.get(r255_glyph);
                                if (r255_subst && r255_subst !== r255_gn) r255_lookup.substitutions[r255_gn] = r237_glyphStore.ensureExists(r255_subst);
                            }
                        }
                        _r255_t8 = _r255_t8 + 1;
                    }
                    _r255_t16 = _r255_t5 = _r255_t5 + 1;
                    _r255_t15 = _r255_t5 < _r255_t4;
                }
                _r255_t14 = _r255_t16;
            }
            _r255_t13 = _r255_t14;
            _r255_t12 = !(_r255_t1 = _r255_t0.next()).done;
        }
        return _r255_t13;
    })();
    (function () {
        var r261_cv, r261_st, r261_k, r261_v, r261_idx, _r261_t3, _r261_t4, _r261_t5, _r261_t6, _r261_t7, _r261_t9;
        var r261_sortedCvs = Array.from(r237_cvs.values());
        r261_sortedCvs.sort(r1_CvLookupManager.compare);
        var _r261_t0 = r261_sortedCvs;
        var _r261_t1 = _r261_t0.length;
        var _r261_t2 = 0;
        while (_r261_t2 < _r261_t1) {
            r261_cv = _r261_t0[_r261_t2];
            if (r261_cv.altrenatesLookup) {
                r261_st = r261_cv.altrenatesLookup.substitutions;
                _r261_t3 = _r1_t2(r261_st)[Symbol.iterator]();
                _r261_t4 = void 0;
                while (!(_r261_t4 = _r261_t3.next()).done) {
                    _r261_t5 = _r261_t4.value;
                    r261_k = _r261_t5[0];
                    r261_v = _r261_t5[1];
                    _r261_t6 = 0;
                    _r261_t7 = r261_v.length;
                    r261_idx = _r261_t6;
                    while (r261_idx < _r261_t7) {
                        if (!r261_v[r261_idx]) r261_v[r261_idx] = r261_k;
                        r261_idx = r261_idx + 1;
                    }
                }
            }
            r261_cv.linkDeps();
            _r261_t2 = _r261_t2 + 1;
        }
        var r261_i = 1;
        var _r261_t8 = r261_i < r261_sortedCvs.length;
        while (_r261_t8) {
            _r261_t9 = (r261_sortedCvs[r261_i - 1].linkCrossDeps(r261_sortedCvs[r261_i]), r261_i = r261_i + 1);
            _r261_t8 = r261_i < r261_sortedCvs.length;
        }
        return _r261_t9;
    })();
    r237_gsub.endBlock(r237_rec);
    return r237_cvs;
};
var r1_objectIsNotEmpty = function (r267_obj) {
    var _r267_t0, _r267_t1;
    return r267_obj && Object.keys(r267_obj).length;
};
var r1_nonDecomposable = function (r268_gn, r268_g) {
    var _r268_t0, _r268_t1;
    return !r1_CvDecompose.get(r268_g);
};


