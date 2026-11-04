"use strict";
import * as _s0_t0 from "@iosevka/glyph/relation";
import * as _s0_t1 from "@iosevka/util";
import * as _s0_t2 from "../meta/unicode-knowledge.mjs";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t4 = function _r1_t10(r321_lo, r321_hi) {
    var r321_j, _r321_t3, _r321_t4, _r321_t5, _r321_t6, _r321_t7, _r321_t8, _r321_t9, _r321_t10, _r321_t11, _r321_t12, _r321_t13;
    var _r321_t0 = function () {
        _r321_t7 = r321_j = r321_lo;
        _r321_t8 = function (_r321_t10) {
            _r321_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r321_t10
            };
        };
        _r321_t9 = function (_r321_t11) {
            _r321_t12 = r321_j < r321_hi;
            if (_r321_t12) {
                _r321_t0 = function (_r321_t13) {
                    return _r321_t9(r321_j = r321_j + 1);
                };
                return {
                    "value": r321_j,
                    "done": false
                };
            } else return _r321_t8(_r321_t11);
        };
        return _r321_t9();
    };
    var _r321_t1 = function (x) {
        try {
            return _r321_t0(x);
        } catch (ex) {
            return _r321_t2(ex);
        }
    };
    var _r321_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r321_t3 = this; else {
        _r321_t4 = function () {
            void 0;
        };
        _r321_t4.prototype = _r1_t10.prototype;
        _r321_t3 = new _r321_t4();
    }
    _r321_t3[Symbol.iterator] = function () {
        return _r321_t3;
    };
    _r321_t3.next = _r321_t1;
    _r321_t3.throw = function (x) {
        return _r321_t2(x);
    };
    return _r321_t3;
};
var _r1_t8 = _s0_t0;
var r1_Dotless = _r1_t8.Dotless;
var r1_AnyDerivingCv = _r1_t8.AnyDerivingCv;
var r1_DotlessOrNot = _r1_t8.DotlessOrNot;
var r1_getGrTree = _r1_t8.getGrTree;
var r1_CvDecompose = _r1_t8.CvDecompose;
var r1_LeaningMark = _r1_t8.LeaningMark;
var r1_LeaningMarkSpacer = _r1_t8.LeaningMarkSpacer;
var _r1_t9 = _s0_t1;
var r1_fallback = _r1_t9.fallback;
var r1_ArrayUtil = _r1_t9.ArrayUtil;
var r1_MatchUtil = _r1_t9.MatchUtil;
var r1_constant = _r1_t9.constant;
var r1_UnicodeKnowledge = _s0_t2;
var r1_Map = Map;
var r1_Set = Set;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r311_block, _r311_t4, _r311_t6;
    var _r311_t3 = this;
    var _r311_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r311_t1 = _r311_t0.length;
    var _r311_t2 = 0;
    var _r311_t5 = _r311_t2 < _r311_t1;
    while (_r311_t5) {
        _r311_t6 = (r311_block = _r311_t0[_r311_t2], r311_block(_r311_t3), _r311_t2 = _r311_t2 + 1);
        _r311_t5 = _r311_t2 < _r311_t1;
    }
    return _r311_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r315_xn$Capture_Ext$2Lrc2b) {
    var _r315_t0, _r315_t1;
    r315_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r315_xn$Capture_Ext$2Lrc2b, "AutoBuild-Accents", function (r316_xn$Capture$2Lrc8, r316_xn$ExportCapture$2Lrc4b) {
        var r316_code, r316__id, _r316_t12, _r316_t13, _r316_t14, _r316_tag15, _r316_t17, _r316_t18, _r316_tag19;
        var _r316_t0 = r316_xn$Capture$2Lrc8;
        var r316_xn$GlyphSaveSink$2Lrc4b = _r316_t0["$GlyphSaveSink$"];
        var r316_xn$NamedParameterPair$2Lrc9b = _r316_t0["$NamedParameterPair$"];
        var r316_xn$Exec$2Lrc5 = _r316_t0["$Exec$"];
        var r316_glyphStore = _r316_t0.glyphStore;
        var r316_AS_BASE = _r316_t0.AS_BASE;
        var r316_ALSO_METRICS = _r316_t0.ALSO_METRICS;
        var _r316_t1 = r316_xn$Capture$2Lrc8.Metrics;
        var _r316_t2 = r316_xn$Capture$2Lrc8.SpiroFns;
        var _r316_t3 = r316_xn$Capture$2Lrc8.SpiroFns;
        var r316_xn$decor$0cao = _r316_t3["decor@"];
        var r316_xn$decor$0cao1 = _r316_t3["decor@@"];
        var r316_xn$decor$0cao11 = _r316_t3["decor@@@"];
        var _r316_t4 = r316_xn$Capture$2Lrc8.BooleFns;
        var _r316_t5 = r316_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r316_xn$queryglyph$1aao = _r316_t5["query-glyph"];
        var r316_xn$referglyph$1aao = _r316_t5["refer-glyph"];
        var r316_NameUni = _r316_t5.NameUni;
        var _r316_t6 = r316_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Accent-Builder"].resolve();
        var r316_TransformGlyphCompositionSequence = _r316_t6.TransformGlyphCompositionSequence;
        var r316_suggestName = function (r319__name) {
            var r319_j, _r319_t0, _r319_t1;
            var r319_name = r319__name;
            if (r316_xn$queryglyph$1aao(r319_name)) {
                r319_j = 2;
                while (r316_xn$queryglyph$1aao(r319_name + r319_j)) r319_j = r319_j + 1;
                r319_name = r319_name + r319_j;
            }
            return r319_name;
        };
        var r316_suggestMappedName = function (r320_map, r320_key, r320_name) {
            var _r320_t0, _r320_t1;
            if (r320_map[r320_key]) return r320_map[r320_key];
            var r320_amended = r316_suggestName(r320_name);
            r320_map[r320_key] = r320_amended;
            return r320_amended;
        };
        var r316_foundDecompositions = {};
        var r316_goalCodes = _r1_t4(0, 131071);
        var _r316_t7 = r316_goalCodes[Symbol.iterator]();
        var _r316_t8 = void 0;
        while (!(_r316_t8 = _r316_t7.next()).done) {
            r316_code = _r316_t8.value;
            if (!r316_glyphStore.queryByUnicode(r316_code)) (function () {
                var r325_partName, r325_part, r325_nfdChars, r325_partChar, r325_glyphName, _r325_t0, _r325_t1, _r325_t2, _r325_t3, _r325_t4;
                var r325_parts = [];
                var r325_allFound = true;
                var r325_customDecomp = r1_UnicodeKnowledge.decompOverrides[r316_code];
                var r325_str = String.fromCodePoint(r316_code);
                var r325_nfd = r325_str.normalize("NFD");
                if (r325_customDecomp) {
                    _r325_t0 = r325_customDecomp[Symbol.iterator]();
                    _r325_t1 = void 0;
                    while (!(_r325_t1 = _r325_t0.next()).done) {
                        r325_partName = _r325_t1.value;
                        r325_part = r316_glyphStore.queryByName(r325_partName);
                        if (!r325_part) r325_allFound = false; else r325_parts.push(r325_part);
                    }
                } else if (r325_str !== r325_nfd) {
                    r325_nfdChars = Array.from(r325_nfd);
                    _r325_t2 = r325_nfdChars;
                    _r325_t3 = _r325_t2.length;
                    _r325_t4 = 0;
                    while (_r325_t4 < _r325_t3) {
                        r325_partChar = _r325_t2[_r325_t4];
                        r325_part = r316_glyphStore.queryByUnicode(r325_partChar.codePointAt(0));
                        if (!r325_part) r325_allFound = false; else r325_parts.push(r325_part);
                        _r325_t4 = _r325_t4 + 1;
                    }
                }
                return r325_allFound && r325_parts.length ? (r325_glyphName = r316_NameUni(r316_code), r316_TransformGlyphCompositionSequence(r325_parts), r316_foundDecompositions[r325_glyphName] = [r325_glyphName, r316_code, r325_parts]) : void 0;
            })();
        }
        var r316_s_goalName = void 0;
        var r316_s_code = void 0;
        var r316_s_parts = void 0;
        var r316_recursivelyDecompose = function (r328_g, r328_sink) {
            var r328_gnPart, _r328_t0, _r328_t1, _r328_t2, _r328_t3, _r328_t4, _r328_t5, _r328_t6, _r328_t7;
            var r328_decomposition = r1_CvDecompose.get(r328_g);
            if (r328_decomposition) {
                _r328_t0 = r328_decomposition;
                _r328_t1 = _r328_t0.length;
                _r328_t2 = 0;
                _r328_t6 = _r328_t2 < _r328_t1;
                while (_r328_t6) {
                    _r328_t7 = (r328_gnPart = _r328_t0[_r328_t2], r328_g = r316_xn$queryglyph$1aao(r328_gnPart), r328_g ? r316_recursivelyDecompose(r328_g, r328_sink) : void 0, _r328_t2 = _r328_t2 + 1);
                    _r328_t6 = _r328_t2 < _r328_t1;
                }
                return _r328_t7;
            } else return r328_sink.push(r316_glyphStore.queryNameOf(r328_g));
        };
        var r316_construction = new r316_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
            var r331_part, r331_decomposeParts, _r331_t3, _r331_t4, _r331_t5, _r331_t6, _r331_t7;
            r331_currentGlyph.include(r316_s_parts[0], r316_AS_BASE, r316_ALSO_METRICS);
            var r331_nonTrivial = r1_AnyDerivingCv.hasNonDerivingVariants(r316_s_parts[0]);
            var _r331_t0 = r316_s_parts.slice(1);
            var _r331_t1 = _r331_t0.length;
            var _r331_t2 = 0;
            while (_r331_t2 < _r331_t1) {
                r331_part = _r331_t0[_r331_t2];
                if (r331_part) {
                    r331_currentGlyph.include(r331_part);
                    if (r331_part.markAnchors && r331_part.markAnchors.bottomRight) {
                        r331_currentGlyph.ejectTagged("serifRB");
                        r331_nonTrivial = true;
                    }
                }
                _r331_t2 = _r331_t2 + 1;
            }
            if (!r331_nonTrivial && r1_AnyDerivingCv.query(r316_s_parts[0])) {
                r331_decomposeParts = [];
                _r331_t3 = r316_s_parts;
                _r331_t4 = _r331_t3.length;
                _r331_t5 = 0;
                while (_r331_t5 < _r331_t4) {
                    r331_part = _r331_t3[_r331_t5];
                    r316_recursivelyDecompose(r331_part, r331_decomposeParts);
                    _r331_t5 = _r331_t5 + 1;
                }
                r1_CvDecompose.set(r331_currentGlyph, r331_decomposeParts);
            }
            return void 0;
        });
        var r316_RootGlyphProc = function (r337_goalName, r337_code, r337_parts) {
            var _r337_t0, _r337_t1;
            r316_s_goalName = r337_goalName;
            r316_s_code = r337_code;
            r316_s_parts = r337_parts;
            return r316_xn$GlyphSaveSink$2Lrc4b.save(r337_goalName, r337_code, r316_construction);
        };
        var r316_NeedBuildMesh = function (r339_glyphName, r339_part0Name) {
            var _r339_t0, _r339_t1;
            var r339_g = r316_xn$queryglyph$1aao(r339_glyphName);
            var r339_part0 = r316_xn$queryglyph$1aao(r339_part0Name);
            if (!r339_g) return false;
            if (!r339_part0) return false;
            if (!r1_CvDecompose.get(r339_g)) return true;
            if (r1_DotlessOrNot.query(r339_part0)) return true;
            return false;
        };
        var _r316_t9 = Object.keys(r316_foundDecompositions);
        var _r316_t10 = _r316_t9.length;
        var _r316_t11 = 0;
        var _r316_t16 = _r316_t11 < _r316_t10;
        while (_r316_t16) {
            r316__id = _r316_t9[_r316_t11];
            (function () {
                var r343_part0Name, r343_dstTree, r343_targetNameMap, r343_tree, r343_gr, r343_origBase, r343_relBase, r343_origGN, r343_relGN, r343_parts1, _r343_t1, _r343_t2, _r343_t3, _r343_t4, _r343_t5, _r343_t6, _r343_t7;
                var _r343_t0 = r316_foundDecompositions[r316__id];
                var r343_glyphName = _r343_t0[0];
                var r343_code = _r343_t0[1];
                var r343_parts = _r343_t0[2];
                var r343_saved = r316_RootGlyphProc(r343_glyphName, r343_code, r343_parts);
                if (r343_saved) {
                    r343_part0Name = r316_glyphStore.queryNameOf(r343_parts[0]);
                    if (r343_parts[0] !== r316_xn$queryglyph$1aao(r343_part0Name)) throw new Error("Unreachable");
                }
                if (r316_NeedBuildMesh(r343_glyphName, r343_part0Name)) {
                    r343_dstTree = [];
                    r343_targetNameMap = {};
                    r343_targetNameMap[r343_part0Name] = r343_glyphName;
                    r343_tree = r1_getGrTree(r343_part0Name, [r1_DotlessOrNot, r1_AnyDerivingCv], r316_xn$queryglyph$1aao);
                    _r343_t1 = r343_tree;
                    _r343_t2 = _r343_t1.length;
                    _r343_t3 = 0;
                    _r343_t6 = _r343_t3 < _r343_t2;
                    while (_r343_t6) {
                        _r343_t4 = _r343_t1[_r343_t3];
                        r343_gr = _r343_t4[0];
                        r343_origBase = _r343_t4[1];
                        r343_relBase = _r343_t4[2];
                        r343_origGN = r343_targetNameMap[r343_origBase];
                        if (!r343_origGN) throw new Error("Unreachable");
                        r343_relGN = r316_suggestMappedName(r343_targetNameMap, r343_relBase, r343_gr.amendName(r343_origGN));
                        r343_parts1 = r343_parts.slice(0);
                        r343_parts1[0] = r316_xn$queryglyph$1aao(r343_relBase);
                        if (!r316_xn$queryglyph$1aao(r343_relGN)) r316_RootGlyphProc(r343_relGN, null, r343_parts1);
                        if (r316_xn$queryglyph$1aao(r343_origGN)) r343_gr.set(r316_xn$queryglyph$1aao(r343_origGN), r343_relGN);
                        _r343_t7 = _r343_t3 = _r343_t3 + 1;
                        _r343_t6 = _r343_t3 < _r343_t2;
                    }
                    _r343_t5 = _r343_t7;
                }
                return _r343_t5;
            })();
            _r316_t17 = _r316_t11 = _r316_t11 + 1;
            _r316_t16 = _r316_t11 < _r316_t10;
        }
        return _r316_t17;
    });
    return void 0;
});


