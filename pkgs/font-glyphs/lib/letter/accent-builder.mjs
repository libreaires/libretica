"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
import * as _s0_t2 from "../meta/unicode-knowledge.mjs";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_fallback = _r1_t8.fallback;
var r1_ArrayUtil = _r1_t8.ArrayUtil;
var r1_MatchUtil = _r1_t8.MatchUtil;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
var r1_LeaningMark = _r1_t9.LeaningMark;
var r1_LeaningMarkSpacer = _r1_t9.LeaningMarkSpacer;
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
    r315_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r315_xn$Capture_Ext$2Lrc2b, "Letter-Accent-Builder", function (r316_xn$Capture$2Lrc8, r316_xn$ExportCapture$2Lrc4b) {
        var r316_produceLeaningMark, _r316_t6, _r316_t7;
        var _r316_t0 = r316_xn$Capture$2Lrc8;
        var r316_xn$GlyphSaveSink$2Lrc4b = _r316_t0["$GlyphSaveSink$"];
        var r316_xn$NamedParameterPair$2Lrc9b = _r316_t0["$NamedParameterPair$"];
        var r316_xn$Exec$2Lrc5 = _r316_t0["$Exec$"];
        var _r316_t1 = r316_xn$Capture$2Lrc8.Metrics;
        var _r316_t2 = r316_xn$Capture$2Lrc8.SpiroFns;
        var r316_g2 = _r316_t2.g2;
        var _r316_t3 = r316_xn$Capture$2Lrc8.SpiroFns;
        var r316_xn$decor$0cao = _r316_t3["decor@"];
        var r316_xn$decor$0cao1 = _r316_t3["decor@@"];
        var r316_xn$decor$0cao11 = _r316_t3["decor@@@"];
        var _r316_t4 = r316_xn$Capture$2Lrc8.BooleFns;
        var _r316_t5 = r316_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r316_xn$queryglyph$1aao = _r316_t5["query-glyph"];
        var r316_xn$referglyph$1aao = _r316_t5["refer-glyph"];
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r319_t0, _r319_t1;
            return {
                "TransformGlyphCompositionSequence": r316_TransformGlyphCompositionSequence
            };
        });
        var r316_TransformGlyphCompositionSequence = function (r320_parts) {
            var _r320_t0, _r320_t1;
            r316_substParts(r320_parts, new r316_xn$NamedParameterPair$2Lrc9b("ignore", r316_isMarkExcluding("above")), new r316_xn$NamedParameterPair$2Lrc9b("input", [r316_dotless]), new r316_xn$NamedParameterPair$2Lrc9b("lookAhead", [r316_isMark("above")]), new r316_xn$NamedParameterPair$2Lrc9b("replace", r316_dotless));
            r316_substParts(r320_parts, new r316_xn$NamedParameterPair$2Lrc9b("ignore", r316_iotaLF.ignore), new r316_xn$NamedParameterPair$2Lrc9b("backtrack", [r316_hasBaseAnchor("lf")]), new r316_xn$NamedParameterPair$2Lrc9b("input", [r316_iotaLF.matcher]), new r316_xn$NamedParameterPair$2Lrc9b("replace", r316_iotaLF.production));
            r316_substParts(r320_parts, new r316_xn$NamedParameterPair$2Lrc9b("ignore", r316_ogonek.ignore), new r316_xn$NamedParameterPair$2Lrc9b("backtrack", [r316_hasBaseAnchor("trailing")]), new r316_xn$NamedParameterPair$2Lrc9b("input", [r316_ogonek.matcher]), new r316_xn$NamedParameterPair$2Lrc9b("replace", r316_ogonek.production));
            r316_substParts(r320_parts, new r316_xn$NamedParameterPair$2Lrc9b("input", [r316_markComposition.matchFirst, r316_markComposition.matchSecond]), new r316_xn$NamedParameterPair$2Lrc9b("replace", r316_markComposition.production));
            r316_substParts(r320_parts, new r316_xn$NamedParameterPair$2Lrc9b("backtrack", [r316_hasBaseAnchor("grekUpperTonos")]), new r316_xn$NamedParameterPair$2Lrc9b("input", [r316_upperTonos.matcher]), new r316_xn$NamedParameterPair$2Lrc9b("replace", r316_upperTonos.production));
            r316_substParts(r320_parts, new r316_xn$NamedParameterPair$2Lrc9b("ignore", r316_isMarkExcluding("above")), new r316_xn$NamedParameterPair$2Lrc9b("backtrack", [r1_MatchUtil.either(r316_hasBaseAnchor("leaningAbove"), r316_isMark("leaningAbove"))]), new r316_xn$NamedParameterPair$2Lrc9b("input", [r316_isMark("above")]), new r316_xn$NamedParameterPair$2Lrc9b("replace", r316_produceLeaningMark("mark/suppressLeaningAboveAnchor")));
            return r316_substParts(r320_parts, new r316_xn$NamedParameterPair$2Lrc9b("ignore", r316_isMarkExcluding("below")), new r316_xn$NamedParameterPair$2Lrc9b("backtrack", [r1_MatchUtil.either(r316_hasBaseAnchor("leaningBelow"), r316_isMark("leaningBelow"))]), new r316_xn$NamedParameterPair$2Lrc9b("input", [r316_isMark("below")]), new r316_xn$NamedParameterPair$2Lrc9b("replace", r316_produceLeaningMark("mark/suppressLeaningBelowAnchor")));
        };
        var r316_substParts = function () {
            var r347_m, r347_inputGlyphs, r347_producedGlyphs, r347_i, _r347_t5, _r347_t6, _r347_t7;
            var _r347_t8 = arguments;
            var r347_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r347_t8, 0);
            var _r347_t0 = [];
            var _r347_t1 = 0;
            while (_r347_t1 < r347_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r347_xn$flexarguments$2Lrc7uIe5[_r347_t1] instanceof r316_xn$NamedParameterPair$2Lrc9b)) _r347_t0.push(r347_xn$flexarguments$2Lrc7uIe5[_r347_t1]);
                _r347_t1 = _r347_t1 + 1;
            }
            var _r347_t2 = r347_xn$flexarguments$2Lrc7uIe5;
            var _r347_t3 = _r347_t2.length;
            var _r347_t4 = 0;
            while (_r347_t4 < _r347_t3) {
                _r347_t1 = _r347_t2[_r347_t4];
                if (_r347_t1 && _r347_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r347_t1.left === "parts") r347_parts = _r347_t1.right;
                if (_r347_t1 && _r347_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r347_t1.left === "ignore") r347_ignore = _r347_t1.right;
                if (_r347_t1 && _r347_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r347_t1.left === "backtrack") r347_backtrack = _r347_t1.right;
                if (_r347_t1 && _r347_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r347_t1.left === "input") r347_input = _r347_t1.right;
                if (_r347_t1 && _r347_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r347_t1.left === "lookAhead") r347_lookAhead = _r347_t1.right;
                if (_r347_t1 && _r347_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r347_t1.left === "replace") r347_replace = _r347_t1.right;
                _r347_t4 = _r347_t4 + 1;
            }
            var r347_parts = r1_fallback(r347_parts, _r347_t0[0]);
            var r347_ignore = r1_fallback(r347_ignore, _r347_t0[1], r1_MatchUtil.never);
            var r347_backtrack = r1_fallback(r347_backtrack, _r347_t0[2], []);
            var r347_input = r1_fallback(r347_input, _r347_t0[3]);
            var r347_lookAhead = r1_fallback(r347_lookAhead, _r347_t0[4], []);
            var r347_replace = r1_fallback(r347_replace, _r347_t0[5]);
            var r347_igl = 0;
            while (r347_igl < r347_parts.length) {
                r347_m = r316_substMatch(r347_parts, r347_igl, r347_ignore, r347_backtrack, r347_input, r347_lookAhead);
                if (!r347_m) r347_igl = r347_igl + 1; else {
                    r347_inputGlyphs = r1_ArrayUtil.mapIndexToItems(r347_parts, r347_m);
                    r347_producedGlyphs = r347_replace.apply(null, r347_inputGlyphs);
                    _r347_t5 = r347_m.length - 1;
                    _r347_t6 = 0;
                    r347_i = _r347_t5;
                    while (r347_i >= _r347_t6) {
                        r347_parts.splice(r347_m[r347_i], 1);
                        r347_i = r347_i - 1;
                    }
                    r1_ArrayUtil.insertSliceAt(r347_parts, r347_m[0], r347_producedGlyphs);
                    r347_igl = r347_m[r347_m.length - 1] + 1 + r347_producedGlyphs.length - r347_m.length;
                }
            }
            return r347_parts;
        };
        var r316_substMatch = function (r352_parts, r352_igl, r352_ignore, r352_backtrack, r352_input, r352_lookAhead) {
            var _r352_t6, _r352_t7;
            if (r352_igl >= r352_parts.length) return null;
            if (r352_ignore(r352_parts[r352_igl])) return null;
            if (!r352_input[0](r352_parts[r352_igl])) return null;
            var r352_m = [r352_igl];
            var r352_iglInput = r352_igl + 1;
            var _r352_t0 = 1;
            var _r352_t1 = r352_input.length;
            var r352_iInput = _r352_t0;
            while (r352_iInput < _r352_t1) {
                while (r352_iglInput < r352_parts.length && r352_ignore(r352_parts[r352_iglInput])) r352_iglInput = r352_iglInput + 1;
                if (r352_iglInput >= r352_parts.length) return null;
                if (!r352_input[r352_iInput](r352_parts[r352_iglInput])) return null;
                r352_m.push(r352_iglInput);
                r352_iglInput = r352_iglInput + 1;
                r352_iInput = r352_iInput + 1;
            }
            var r352_iglLookAhead = r352_iglInput;
            var _r352_t2 = 0;
            var _r352_t3 = r352_lookAhead.length;
            var r352_iLookAhead = _r352_t2;
            while (r352_iLookAhead < _r352_t3) {
                while (r352_iglLookAhead < r352_parts.length && r352_ignore(r352_parts[r352_iglLookAhead])) r352_iglLookAhead = r352_iglLookAhead + 1;
                if (r352_iglLookAhead >= r352_parts.length) return null;
                if (!r352_lookAhead[r352_iLookAhead](r352_parts[r352_iglLookAhead])) return null;
                r352_iglLookAhead = r352_iglLookAhead + 1;
                r352_iLookAhead = r352_iLookAhead + 1;
            }
            var r352_iglBacktrack = r352_igl - 1;
            var _r352_t4 = r352_backtrack.length - 1;
            var _r352_t5 = 0;
            var r352_iBacktrack = _r352_t4;
            while (r352_iBacktrack >= _r352_t5) {
                while (r352_iglBacktrack >= 0 && r352_ignore(r352_parts[r352_iglBacktrack])) r352_iglBacktrack = r352_iglBacktrack - 1;
                if (r352_iglBacktrack < 0) return null;
                if (!r352_backtrack[r352_iBacktrack](r352_parts[r352_iglBacktrack])) return null;
                r352_iglBacktrack = r352_iglBacktrack - 1;
                r352_iBacktrack = r352_iBacktrack - 1;
            }
            return r352_m;
        };
        var r316_dotless = function (r356_g) {
            var _r356_t0, _r356_t1;
            var r356_gDotless = r316_xn$queryglyph$1aao(r1_Dotless.get(r356_g));
            if (!r356_gDotless) return null;
            return [r356_gDotless];
        };
        var r316_isMark = function (r357_k) {
            var _r357_t0, _r357_t1;
            return function (r358_g) {
                var _r358_t0, _r358_t1;
                return r358_g && r358_g.markAnchors && r358_g.markAnchors[r357_k];
            };
        };
        var r316_isMarkExcluding = function (r359_k) {
            var _r359_t0, _r359_t1;
            return function (r360_g) {
                var _r360_t0, _r360_t1;
                return r360_g && r360_g.markAnchors && Object.keys(r360_g.markAnchors).length && !r360_g.markAnchors[r359_k];
            };
        };
        var r316_hasBaseAnchor = function (r361_k) {
            var _r361_t0, _r361_t1;
            return function (r362_g) {
                var _r362_t0, _r362_t1;
                return r362_g && r362_g.baseAnchors && r362_g.baseAnchors[r361_k];
            };
        };
        var r316_markSubst = function (r363_uk) {
            var r363_k, r363_v, r363_gFrom, r363_gTo, _r363_t2, _r363_t3, _r363_t4;
            var r363_mapping = new r1_Map();
            var _r363_t0 = Object.entries(r363_uk)[Symbol.iterator]();
            var _r363_t1 = void 0;
            while (!(_r363_t1 = _r363_t0.next()).done) {
                _r363_t2 = _r363_t1.value;
                r363_k = _r363_t2[0];
                r363_v = _r363_t2[1];
                r363_gFrom = r316_xn$queryglyph$1aao(r363_k);
                r363_gTo = r316_xn$queryglyph$1aao(r363_v);
                r363_mapping.set(r363_gFrom, r363_gTo);
            }
            var r363_matcher = function (r365_g) {
                var _r365_t0, _r365_t1;
                return r363_mapping.has(r365_g);
            };
            var r363_ignore = function (r366_g) {
                var _r366_t0, _r366_t1;
                return r366_g && r366_g.markAnchors && Object.keys(r366_g.markAnchors).length && !r363_matcher(r366_g);
            };
            var r363_production = function (r367_g) {
                var _r367_t0, _r367_t1;
                return [r363_mapping.get(r367_g) || r367_g];
            };
            return {
                "matcher": r363_matcher,
                "ignore": r363_ignore,
                "production": r363_production
            };
        };
        var r316_markSplit = function (r368_uk) {
            var r368_k, r368_v, r368_gFrom, r368_gsTo, _r368_t2, _r368_t3, _r368_t4;
            var r368_mapping = new r1_Map();
            var _r368_t0 = Object.entries(r368_uk)[Symbol.iterator]();
            var _r368_t1 = void 0;
            while (!(_r368_t1 = _r368_t0.next()).done) {
                _r368_t2 = _r368_t1.value;
                r368_k = _r368_t2[0];
                r368_v = _r368_t2[1];
                r368_gFrom = r316_xn$queryglyph$1aao(r368_k);
                r368_gsTo = r368_v.map(r316_xn$queryglyph$1aao);
                r368_mapping.set(r368_gFrom, r368_gsTo);
            }
            var r368_matcher = function (r370_g) {
                var _r370_t0, _r370_t1;
                return r368_mapping.has(r370_g);
            };
            var r368_ignore = function (r371_g) {
                var _r371_t0, _r371_t1;
                return r371_g && r371_g.markAnchors && Object.keys(r371_g.markAnchors).length && !r368_matcher(r371_g);
            };
            var r368_production = function (r372_g) {
                var _r372_t0, _r372_t1;
                return r368_mapping.get(r372_g) || [r372_g];
            };
            return {
                "matcher": r368_matcher,
                "ignore": r368_ignore,
                "production": r368_production
            };
        };
        var r316_markCombine = function (r373_uk) {
            var r373_k1, r373_k2, r373_v, r373_g1, r373_g2, r373_g3, r373_mm, _r373_t3, _r373_t4, _r373_t5;
            var r373_first = new r1_Set();
            var r373_second = new r1_Set();
            var r373_mapping = new r1_Map();
            var _r373_t0 = r373_uk;
            var _r373_t1 = _r373_t0.length;
            var _r373_t2 = 0;
            while (_r373_t2 < _r373_t1) {
                _r373_t3 = _r373_t0[_r373_t2];
                r373_k1 = _r373_t3[0][0];
                r373_k2 = _r373_t3[0][1];
                _r373_t3[0];
                r373_v = _r373_t3[1];
                r373_g1 = r316_xn$queryglyph$1aao(r373_k1);
                r373_g2 = r316_xn$queryglyph$1aao(r373_k2);
                r373_g3 = r316_xn$queryglyph$1aao(r373_v);
                if (r373_g1 && r373_g2 && r373_g3) {
                    r373_first.add(r373_g1);
                    r373_second.add(r373_g2);
                    r373_mm = r373_mapping.get(r373_g1);
                    if (!r373_mm) {
                        r373_mm = new r1_Map();
                        r373_mapping.set(r373_g1, r373_mm);
                    }
                    r373_mm.set(r373_g2, r373_g3);
                }
                _r373_t2 = _r373_t2 + 1;
            }
            var r373_matchFirst = function (r375_g) {
                var _r375_t0, _r375_t1;
                return r373_first.has(r375_g);
            };
            var r373_matchSecond = function (r376_g) {
                var _r376_t0, _r376_t1;
                return r373_second.has(r376_g);
            };
            var r373_production = function (r377_g1, r377_g2) {
                var _r377_t0, _r377_t1;
                var r377_mm = r373_mapping.get(r377_g1);
                if (!r377_mm) return [r377_g1, r377_g2];
                var r377_g3 = r377_mm.get(r377_g2);
                if (!r377_g3) return [r377_g1, r377_g2];
                return [r377_g3];
            };
            return {
                "matchFirst": r373_matchFirst,
                "matchSecond": r373_matchSecond,
                "production": r373_production
            };
        };
        var r316_iotaLF = r316_markSubst(r1_UnicodeKnowledge.iotaBelowToLfTf);
        var r316_ogonek = r316_markSplit(r1_UnicodeKnowledge.ogonekBelowToTRTf);
        var r316_upperTonos = r316_markSubst(r1_UnicodeKnowledge.upperGrekMarkToTonosTf);
        var r316_markComposition = r316_markCombine(r1_UnicodeKnowledge.markCompositionTf);
        return r316_produceLeaningMark = function (r378_gnSuppressAnchor) {
            var _r378_t0, _r378_t1;
            return function (r379_g) {
                var _r379_t0, _r379_t1;
                var r379_spacer = r316_xn$queryglyph$1aao(r1_LeaningMarkSpacer.get(r379_g));
                var r379_alternative = r316_xn$queryglyph$1aao(r1_LeaningMark.get(r379_g));
                if (r379_spacer && r379_alternative) return [r379_spacer, r379_alternative];
                return [r316_xn$queryglyph$1aao(r378_gnSuppressAnchor), r379_g];
            };
        };
    });
    return void 0;
});


