"use strict";
import * as _s0_t0 from "./table-util.mjs";
import * as _s0_t1 from "@iosevka/glyph/relation";
import * as _s0_t2 from "@iosevka/font-glyphs/unicode-knowledge";
var _s0_t3;
export {_s0_t3 as buildCCMP};
var _s0_t4;
export {_s0_t4 as buildCCMPPostCvSs};
var r1_buildCCMP, r1_buildCCMPPostCvSs, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_UkMapToLookup = _r1_t8.UkMapToLookup;
var r1_UkLigatureToLookup = _r1_t8.UkLigatureToLookup;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
var r1_TieMark = _r1_t9.TieMark;
var r1_TieGlyph = _r1_t9.TieGlyph;
var r1_OgonekTrY = _r1_t9.OgonekTrY;
var r1_IsSuperscript = _r1_t9.IsSuperscript;
var r1_IsSubscript = _r1_t9.IsSubscript;
var r1_LeaningMark = _r1_t9.LeaningMark;
var r1_LeaningMarkSpacer = _r1_t9.LeaningMarkSpacer;
var r1_NLDAcuteVariant = _r1_t9.NLDAcuteVariant;
var r1_HBSCaronVariant = _r1_t9.HBSCaronVariant;
var r1_UnicodeKnowledge = _s0_t2;
var r1_Map = Map;
var r1_Set = Set;
_s0_t3 = r1_buildCCMP = function (r155_gsub, r155_glyphStore, r155_markGlyphs) {
    var _r155_t0, _r155_t1;
    var r155_anyMark = Array.from(r155_markGlyphs.all);
    var r155_aboveMark = r1_filterMarkByClass(r155_markGlyphs, "above");
    var r155_ccmp = r155_gsub.addCommonFeature(r155_gsub.createFeature("ccmp"));
    var r155_xn$ExecCcmpGroup$2Lrc4b = function (r156_fn) {
        var _r156_t1, _r156_t2;
        var r156_addedLookups = [];
        var r156_xn$exportlookup$7Hrq = function (r157_lookup) {
            var _r157_t0, _r157_t1;
            r155_ccmp.addLookup(r157_lookup);
            return r156_addedLookups.push(r157_lookup);
        };
        var r156_rec = r155_gsub.beginBlock();
        var _r156_t0 = r155_gsub.ChainRuleBuilder();
        var r156_xn$chainrule$1aao = _r156_t0[0];
        r156_fn(r156_xn$exportlookup$7Hrq, r156_xn$chainrule$1aao);
        var r156_j = 1;
        while (r156_j < r156_addedLookups.length) {
            r155_gsub.setDependency(r156_addedLookups[r156_j - 1], r156_addedLookups[r156_j]);
            r156_j = r156_j + 1;
        }
        return r155_gsub.endBlock(r156_rec);
    };
    r155_xn$ExecCcmpGroup$2Lrc4b(function (r159_xn$exportlookup$7Hrq, r159_xn$chainrule$1aao) {
        var _r159_t0, _r159_t1;
        var r159_combineLookup = r155_gsub.createLookup({
            "type": "gsub_ligature",
            "substitutions": r1_UkLigatureToLookup(r1_UnicodeKnowledge.ccmpCombinations, function (r160_u) {
                var _r160_t0, _r160_t1;
                return r155_glyphStore.queryNameByUnicode(r160_u);
            })
        });
        return r159_xn$exportlookup$7Hrq(r159_combineLookup);
    });
    r155_xn$ExecCcmpGroup$2Lrc4b(function (r162_xn$exportlookup$7Hrq, r162_xn$chainrule$1aao) {
        var r162_gn, r162_g, _r162_t2, _r162_t3, _r162_t4;
        var r162_groupGrekUpperTonos = [];
        var r162_groupLF = [];
        var r162_dotlessFrom = [];
        var r162_dotlessTo = [];
        var _r162_t0 = r155_glyphStore.namedEntries()[Symbol.iterator]();
        var _r162_t1 = void 0;
        while (!(_r162_t1 = _r162_t0.next()).done) {
            _r162_t2 = _r162_t1.value;
            r162_gn = _r162_t2[0];
            r162_g = _r162_t2[1];
            if (r162_gn[0] !== ".") {
                if (r162_g.baseAnchors.lf) r162_groupLF.push(r162_gn);
                if (r162_g.baseAnchors.grekUpperTonos) r162_groupGrekUpperTonos.push(r162_gn);
                if (r1_Dotless.get(r162_g)) {
                    r162_dotlessFrom.push(r162_gn);
                    r162_dotlessTo.push(r1_Dotless.get(r162_g));
                }
            }
        }
        var r162_IotaLF = function () {
            var _r164_t0, _r164_t1;
            return r1_UkMapToLookup(r1_UnicodeKnowledge.iotaBelowToLfTf);
        };
        var r162_GrekUpperTonosTf = function () {
            var _r165_t0, _r165_t1;
            return r1_UkMapToLookup(r1_UnicodeKnowledge.upperGrekMarkToTonosTf);
        };
        r162_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_chaining",
            "ignoreGlyphs": r1_filterMarkByClassNegated(r155_markGlyphs, "above"),
            "rules": [r162_xn$chainrule$1aao({
                "left": r162_dotlessFrom,
                "right": r162_dotlessTo
            }, {
                "left": r155_aboveMark,
                "right": null
            }), r162_xn$chainrule$1aao(r162_groupGrekUpperTonos, r162_GrekUpperTonosTf())]
        }));
        r162_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_chaining",
            "ignoreGlyphs": r1_filterMarkByClassNegated(r155_markGlyphs, "below"),
            "rules": [r162_xn$chainrule$1aao(r162_groupLF, r162_IotaLF())]
        }));
        r162_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_ligature",
            "substitutions": r1_UkLigatureToLookup(r1_UnicodeKnowledge.markCompositionTf, function (r168_n) {
                var _r168_t0, _r168_t1;
                return r168_n;
            })
        }));
        return r162_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_multiple",
            "substitutions": {
                "parenAbove": ["leftParenAbove", "rightParenAbove"],
                "doubleParenAbove": ["leftDoubleParenAbove", "rightDoubleParenAbove"],
                "brackAbove": ["leftBrackAbove", "rightBrackAbove"],
                "parenBelow": ["leftParenBelow", "rightParenBelow"],
                "parenOver": ["leftParenOver", "rightParenOver"]
            }
        }));
    });
    r155_xn$ExecCcmpGroup$2Lrc4b(function (r170_xn$exportlookup$7Hrq, r170_xn$chainrule$1aao) {
        var r170_gid, r170_g, _r170_t2, _r170_t3, _r170_t4;
        var r170_TieMarkFrom = [];
        var r170_TieMarkTo = [];
        var r170_TieGlyphs = [];
        var _r170_t0 = r155_glyphStore.namedEntries()[Symbol.iterator]();
        var _r170_t1 = void 0;
        while (!(_r170_t1 = _r170_t0.next()).done) {
            _r170_t2 = _r170_t1.value;
            r170_gid = _r170_t2[0];
            r170_g = _r170_t2[1];
            if (r170_gid[0] !== ".") {
                if (r1_TieGlyph.get(r170_g)) r170_TieGlyphs.push(r170_gid);
                if (r1_TieMark.get(r170_g)) {
                    r170_TieMarkFrom.push(r170_gid);
                    r170_TieMarkTo.push(r1_TieMark.get(r170_g));
                }
            }
        }
        var r170_lookupTieMarkLigature = r155_gsub.createLookup({
            "type": "gsub_ligature",
            "substitutions": [].concat(r170_TieMarkFrom.map(function (r172_gnFrom, r172_idx) {
                var _r172_t0, _r172_t1;
                return {
                    "from": ["cgj", r172_gnFrom],
                    "to": r170_TieMarkTo[r172_idx]
                };
            }))
        });
        return r170_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_chaining",
            "rules": [{
                "match": [r170_TieGlyphs.concat(r170_TieMarkTo), ["cgj"], r170_TieMarkFrom],
                "inputBegins": 1,
                "inputEnds": 3,
                "apply": [{
                    "at": 1,
                    "lookup": r170_lookupTieMarkLigature
                }]
            }]
        }));
    });
    r155_xn$ExecCcmpGroup$2Lrc4b(function (r174_xn$exportlookup$7Hrq, r174_xn$chainrule$1aao) {
        var _r174_t0, _r174_t1;
        return r174_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_ligature",
            "ignoreGlyphs": r1_filterMarkByClassNegated(r155_markGlyphs, "above"),
            "substitutions": [{
                "from": ["b", "dotAbove"],
                "to": "bDot"
            }, {
                "from": ["d", "dotAbove"],
                "to": "dDot"
            }, {
                "from": ["h", "dotAbove"],
                "to": "hDot"
            }, {
                "from": ["k", "dotAbove"],
                "to": "kDot"
            }]
        }));
    });
    r155_xn$ExecCcmpGroup$2Lrc4b(function (r176_xn$exportlookup$7Hrq, r176_xn$chainrule$1aao) {
        var r176_gn, r176_g, r176_nldVariant, _r176_t2, _r176_t3, _r176_t4;
        var r176_substitutions = [];
        var _r176_t0 = r155_glyphStore.namedEntries()[Symbol.iterator]();
        var _r176_t1 = void 0;
        while (!(_r176_t1 = _r176_t0.next()).done) {
            _r176_t2 = _r176_t1.value;
            r176_gn = _r176_t2[0];
            r176_g = _r176_t2[1];
            r176_nldVariant = r1_NLDAcuteVariant.get(r176_g);
            if (r176_nldVariant) r176_substitutions.push({
                "from": [r176_gn, "acuteAbove"],
                "to": r176_nldVariant
            });
        }
        return r176_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_ligature",
            "substitutions": r176_substitutions
        }));
    });
    r155_xn$ExecCcmpGroup$2Lrc4b(function (r179_xn$exportlookup$7Hrq, r179_xn$chainrule$1aao) {
        var r179_gn, r179_g, r179_hbsVariant, _r179_t2, _r179_t3, _r179_t4;
        var r179_substitutions = [];
        var _r179_t0 = r155_glyphStore.namedEntries()[Symbol.iterator]();
        var _r179_t1 = void 0;
        while (!(_r179_t1 = _r179_t0.next()).done) {
            _r179_t2 = _r179_t1.value;
            r179_gn = _r179_t2[0];
            r179_g = _r179_t2[1];
            r179_hbsVariant = r1_HBSCaronVariant.get(r179_g);
            if (r179_hbsVariant) r179_substitutions.push({
                "from": [r179_gn, "caronAbove"],
                "to": r179_hbsVariant
            });
        }
        return r179_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_ligature",
            "substitutions": r179_substitutions
        }));
    });
    r155_xn$ExecCcmpGroup$2Lrc4b(function (r182_xn$exportlookup$7Hrq, r182_xn$chainrule$1aao) {
        var r182_mkCenter, r182_mkLeaning, r182_basesToConsider, r182_markFrom, r182_markTo, r182_markSpacer, r182_splitMapping, r182_gn, r182_g, r182_lookupTurnMarkIntoLeaningAndSpacer, _r182_t3, _r182_t4, _r182_t5, _r182_t6, _r182_t7, _r182_t8, _r182_t10;
        var r182_LeaningAnchorMap = [["above", "leaningAbove"], ["below", "leaningBelow"]];
        var _r182_t0 = r182_LeaningAnchorMap;
        var _r182_t1 = _r182_t0.length;
        var _r182_t2 = 0;
        var _r182_t9 = _r182_t2 < _r182_t1;
        while (_r182_t9) {
            _r182_t3 = _r182_t0[_r182_t2];
            r182_mkCenter = _r182_t3[0];
            r182_mkLeaning = _r182_t3[1];
            r182_basesToConsider = [];
            r182_markFrom = [];
            r182_markTo = [];
            r182_markSpacer = [];
            r182_splitMapping = [];
            _r182_t4 = r155_glyphStore.namedEntries()[Symbol.iterator]();
            _r182_t5 = void 0;
            while (!(_r182_t5 = _r182_t4.next()).done) {
                _r182_t6 = _r182_t5.value;
                r182_gn = _r182_t6[0];
                r182_g = _r182_t6[1];
                if (r182_gn[0] !== ".") {
                    if (!r155_markGlyphs.all.has(r182_gn) && r182_g.baseAnchors[r182_mkLeaning]) r182_basesToConsider.push(r182_gn);
                    if (r182_g.markAnchors[r182_mkCenter] && r1_LeaningMark.get(r182_g) && r1_LeaningMarkSpacer.get(r182_g)) {
                        r182_markFrom.push(r182_gn);
                        r182_markTo.push(r1_LeaningMark.get(r182_g));
                        r182_markSpacer.push(r1_LeaningMarkSpacer.get(r182_g));
                        r182_splitMapping.push([r182_gn, [r1_LeaningMarkSpacer.get(r182_g), r1_LeaningMark.get(r182_g)]]);
                    }
                }
            }
            r182_lookupTurnMarkIntoLeaningAndSpacer = r155_gsub.createLookup({
                "type": "gsub_multiple",
                "substitutions": Object.fromEntries(r182_splitMapping)
            });
            r182_xn$exportlookup$7Hrq(r155_gsub.createLookup({
                "type": "gsub_chaining",
                "ignoreGlyphs": r1_filterMarkByClassNegated(r155_markGlyphs, r182_mkCenter),
                "rules": [{
                    "match": [r182_basesToConsider.concat(r182_markSpacer), r182_markFrom],
                    "inputBegins": 1,
                    "inputEnds": 2,
                    "apply": [{
                        "at": 1,
                        "lookup": r182_lookupTurnMarkIntoLeaningAndSpacer
                    }]
                }]
            }));
            _r182_t10 = _r182_t2 = _r182_t2 + 1;
            _r182_t9 = _r182_t2 < _r182_t1;
        }
        return _r182_t10;
    });
    r155_xn$ExecCcmpGroup$2Lrc4b(function (r186_xn$exportlookup$7Hrq, r186_xn$chainrule$1aao) {
        var r186_gn, r186_g, _r186_t2, _r186_t3, _r186_t4;
        var r186_superscripts = [];
        var r186_subscripts = [];
        var _r186_t0 = r155_glyphStore.namedEntries()[Symbol.iterator]();
        var _r186_t1 = void 0;
        while (!(_r186_t1 = _r186_t0.next()).done) {
            _r186_t2 = _r186_t1.value;
            r186_gn = _r186_t2[0];
            r186_g = _r186_t2[1];
            if (r186_gn[0] !== ".") {
                if (r1_IsSuperscript.get(r186_g)) r186_superscripts.push(r186_gn);
                if (r1_IsSubscript.get(r186_g)) r186_subscripts.push(r186_gn);
            }
        }
        return r186_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_chaining",
            "ignoreGlyphs": r155_anyMark,
            "rules": [r186_xn$chainrule$1aao(r186_superscripts, {
                "left": ["rhoticHook"],
                "right": ["rhoticHook/sup"]
            }), r186_xn$chainrule$1aao(r186_subscripts, {
                "left": ["rhoticHook"],
                "right": ["rhoticHook/sub"]
            })]
        }));
    });
    r155_xn$ExecCcmpGroup$2Lrc4b(function (r191_xn$exportlookup$7Hrq, r191_xn$chainrule$1aao) {
        var _r191_t0, _r191_t1;
        var r191_ToneToToneStart = function (r192_toneEnd) {
            var _r192_t2, _r192_t3;
            var r192_f = [];
            var r192_e = [];
            var _r192_t0 = 4;
            var _r192_t1 = 0;
            var r192_toneStart = _r192_t0;
            while (r192_toneStart >= _r192_t1) {
                r192_f.push("tone" + r192_toneStart);
                r192_e.push("toneStart" + r192_toneStart + r192_toneEnd);
                r192_toneStart = r192_toneStart - 1;
            }
            return {
                "left": r192_f,
                "right": r192_e
            };
        };
        var r191_ToneToToneEnd = function (r195_toneStart) {
            var _r195_t2, _r195_t3;
            var r195_f = [];
            var r195_e = [];
            var _r195_t0 = 4;
            var _r195_t1 = 0;
            var r195_toneEnd = _r195_t0;
            while (r195_toneEnd >= _r195_t1) {
                r195_f.push("tone" + r195_toneEnd);
                r195_e.push("toneEnd" + r195_toneStart + r195_toneEnd);
                r195_toneEnd = r195_toneEnd - 1;
            }
            return {
                "left": r195_f,
                "right": r195_e
            };
        };
        var r191_ToneStartOrMidAt = function (r198_y) {
            var _r198_t4, _r198_t5, _r198_t6, _r198_t7;
            var r198_f = [];
            var _r198_t0 = 4;
            var _r198_t1 = 0;
            var r198_toneEnd = _r198_t0;
            while (r198_toneEnd >= _r198_t1) {
                r198_f.push("toneStart" + r198_y + r198_toneEnd);
                r198_toneEnd = r198_toneEnd - 1;
            }
            var _r198_t2 = 4;
            var _r198_t3 = 0;
            var r198_toneStart = _r198_t2;
            while (r198_toneStart >= _r198_t3) {
                _r198_t4 = 4;
                _r198_t5 = 0;
                r198_toneEnd = _r198_t4;
                while (r198_toneEnd >= _r198_t5) {
                    r198_f.push("toneMid" + r198_toneStart + r198_y + r198_toneEnd);
                    r198_toneEnd = r198_toneEnd - 1;
                }
                r198_toneStart = r198_toneStart - 1;
            }
            return r198_f;
        };
        var r191_ToneStartToToneMid = function (r202_toneStart) {
            var r202_toneEnd, _r202_t2, _r202_t3, _r202_t4, _r202_t5;
            var r202_f = [];
            var r202_e = [];
            var _r202_t0 = 4;
            var _r202_t1 = 0;
            var r202_toneMid = _r202_t0;
            while (r202_toneMid >= _r202_t1) {
                _r202_t2 = 4;
                _r202_t3 = 0;
                r202_toneEnd = _r202_t2;
                while (r202_toneEnd >= _r202_t3) {
                    r202_f.push("toneStart" + r202_toneMid + r202_toneEnd);
                    r202_e.push("toneMid" + r202_toneStart + r202_toneMid + r202_toneEnd);
                    r202_toneEnd = r202_toneEnd - 1;
                }
                r202_toneMid = r202_toneMid - 1;
            }
            return {
                "left": r202_f,
                "right": r202_e
            };
        };
        var r191_ToneSandhiToToneStart = function (r206_toneEnd) {
            var _r206_t2, _r206_t3;
            var r206_f = [];
            var r206_e = [];
            var _r206_t0 = 4;
            var _r206_t1 = 0;
            var r206_toneStart = _r206_t0;
            while (r206_toneStart >= _r206_t1) {
                r206_f.push("toneSandhi" + r206_toneStart);
                r206_e.push("toneSandhiStart" + r206_toneStart + r206_toneEnd);
                r206_toneStart = r206_toneStart - 1;
            }
            return {
                "left": r206_f,
                "right": r206_e
            };
        };
        var r191_ToneSandhiToToneEnd = function (r209_toneStart) {
            var _r209_t2, _r209_t3;
            var r209_f = [];
            var r209_e = [];
            var _r209_t0 = 4;
            var _r209_t1 = 0;
            var r209_toneEnd = _r209_t0;
            while (r209_toneEnd >= _r209_t1) {
                r209_f.push("toneSandhi" + r209_toneEnd);
                r209_e.push("toneSandhiEnd" + r209_toneStart + r209_toneEnd);
                r209_toneEnd = r209_toneEnd - 1;
            }
            return {
                "left": r209_f,
                "right": r209_e
            };
        };
        var r191_ToneSandhiStartOrMidAt = function (r212_y) {
            var _r212_t4, _r212_t5, _r212_t6, _r212_t7;
            var r212_f = [];
            var _r212_t0 = 4;
            var _r212_t1 = 0;
            var r212_toneEnd = _r212_t0;
            while (r212_toneEnd >= _r212_t1) {
                r212_f.push("toneSandhiStart" + r212_y + r212_toneEnd);
                r212_toneEnd = r212_toneEnd - 1;
            }
            var _r212_t2 = 4;
            var _r212_t3 = 0;
            var r212_toneStart = _r212_t2;
            while (r212_toneStart >= _r212_t3) {
                _r212_t4 = 4;
                _r212_t5 = 0;
                r212_toneEnd = _r212_t4;
                while (r212_toneEnd >= _r212_t5) {
                    r212_f.push("toneSandhiMid" + r212_toneStart + r212_y + r212_toneEnd);
                    r212_toneEnd = r212_toneEnd - 1;
                }
                r212_toneStart = r212_toneStart - 1;
            }
            return r212_f;
        };
        var r191_ToneSandhiStartToToneMid = function (r216_toneStart) {
            var r216_toneEnd, _r216_t2, _r216_t3, _r216_t4, _r216_t5;
            var r216_f = [];
            var r216_e = [];
            var _r216_t0 = 4;
            var _r216_t1 = 0;
            var r216_toneMid = _r216_t0;
            while (r216_toneMid >= _r216_t1) {
                _r216_t2 = 4;
                _r216_t3 = 0;
                r216_toneEnd = _r216_t2;
                while (r216_toneEnd >= _r216_t3) {
                    r216_f.push("toneSandhiStart" + r216_toneMid + r216_toneEnd);
                    r216_e.push("toneSandhiMid" + r216_toneStart + r216_toneMid + r216_toneEnd);
                    r216_toneEnd = r216_toneEnd - 1;
                }
                r216_toneMid = r216_toneMid - 1;
            }
            return {
                "left": r216_f,
                "right": r216_e
            };
        };
        r191_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_chaining",
            "rules": [r191_xn$chainrule$1aao(r191_ToneToToneStart(0), ["tone0"]), r191_xn$chainrule$1aao(r191_ToneToToneStart(1), ["tone1"]), r191_xn$chainrule$1aao(r191_ToneToToneStart(2), ["tone2"]), r191_xn$chainrule$1aao(r191_ToneToToneStart(3), ["tone3"]), r191_xn$chainrule$1aao(r191_ToneToToneStart(4), ["tone4"])]
        }));
        r191_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_chaining",
            "rules": [r191_xn$chainrule$1aao(r191_ToneStartOrMidAt(0), r191_ToneStartToToneMid(0)), r191_xn$chainrule$1aao(r191_ToneStartOrMidAt(1), r191_ToneStartToToneMid(1)), r191_xn$chainrule$1aao(r191_ToneStartOrMidAt(2), r191_ToneStartToToneMid(2)), r191_xn$chainrule$1aao(r191_ToneStartOrMidAt(3), r191_ToneStartToToneMid(3)), r191_xn$chainrule$1aao(r191_ToneStartOrMidAt(4), r191_ToneStartToToneMid(4))]
        }));
        r191_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_chaining",
            "rules": [r191_xn$chainrule$1aao(r191_ToneStartOrMidAt(0), r191_ToneToToneEnd(0)), r191_xn$chainrule$1aao(r191_ToneStartOrMidAt(1), r191_ToneToToneEnd(1)), r191_xn$chainrule$1aao(r191_ToneStartOrMidAt(2), r191_ToneToToneEnd(2)), r191_xn$chainrule$1aao(r191_ToneStartOrMidAt(3), r191_ToneToToneEnd(3)), r191_xn$chainrule$1aao(r191_ToneStartOrMidAt(4), r191_ToneToToneEnd(4))]
        }));
        r191_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_chaining",
            "rules": [r191_xn$chainrule$1aao(r191_ToneSandhiToToneStart(0), ["toneSandhi0"]), r191_xn$chainrule$1aao(r191_ToneSandhiToToneStart(1), ["toneSandhi1"]), r191_xn$chainrule$1aao(r191_ToneSandhiToToneStart(2), ["toneSandhi2"]), r191_xn$chainrule$1aao(r191_ToneSandhiToToneStart(3), ["toneSandhi3"]), r191_xn$chainrule$1aao(r191_ToneSandhiToToneStart(4), ["toneSandhi4"])]
        }));
        r191_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_chaining",
            "rules": [r191_xn$chainrule$1aao(r191_ToneSandhiStartOrMidAt(0), r191_ToneSandhiStartToToneMid(0)), r191_xn$chainrule$1aao(r191_ToneSandhiStartOrMidAt(1), r191_ToneSandhiStartToToneMid(1)), r191_xn$chainrule$1aao(r191_ToneSandhiStartOrMidAt(2), r191_ToneSandhiStartToToneMid(2)), r191_xn$chainrule$1aao(r191_ToneSandhiStartOrMidAt(3), r191_ToneSandhiStartToToneMid(3)), r191_xn$chainrule$1aao(r191_ToneSandhiStartOrMidAt(4), r191_ToneSandhiStartToToneMid(4))]
        }));
        return r191_xn$exportlookup$7Hrq(r155_gsub.createLookup({
            "type": "gsub_chaining",
            "rules": [r191_xn$chainrule$1aao(r191_ToneSandhiStartOrMidAt(0), r191_ToneSandhiToToneEnd(0)), r191_xn$chainrule$1aao(r191_ToneSandhiStartOrMidAt(1), r191_ToneSandhiToToneEnd(1)), r191_xn$chainrule$1aao(r191_ToneSandhiStartOrMidAt(2), r191_ToneSandhiToToneEnd(2)), r191_xn$chainrule$1aao(r191_ToneSandhiStartOrMidAt(3), r191_ToneSandhiToToneEnd(3)), r191_xn$chainrule$1aao(r191_ToneSandhiStartOrMidAt(4), r191_ToneSandhiToToneEnd(4))]
        }));
    });
    return r155_ccmp;
};
_s0_t4 = r1_buildCCMPPostCvSs = function (r221_gsub, r221_ccmp, r221_glyphStore, r221_markGlyphs) {
    var r221_gid, r221_g, _r221_t2, _r221_t3, _r221_t4;
    var r221_anyMark = Array.from(r221_markGlyphs.all);
    var r221_rec = r221_gsub.beginBlock();
    var r221_triggerGlyphs_Normal = [];
    var r221_triggerGlyphs_Y = [];
    var _r221_t0 = r221_glyphStore.namedEntries()[Symbol.iterator]();
    var _r221_t1 = void 0;
    while (!(_r221_t1 = _r221_t0.next()).done) {
        _r221_t2 = _r221_t1.value;
        r221_gid = _r221_t2[0];
        r221_g = _r221_t2[1];
        if (r221_gid[0] !== ".") if (r221_g.baseAnchors.trailing) if (r1_OgonekTrY.get(r221_g)) r221_triggerGlyphs_Y.push(r221_gid); else if (true) r221_triggerGlyphs_Normal.push(r221_gid); else void 0;
    }
    var r221_ogonekSpacerNormal = r221_gsub.createLookup({
        "type": "gsub_multiple",
        "substitutions": r1_UnicodeKnowledge.ogonekBelowToTRTf
    });
    var r221_ogonekSpacerY = r221_gsub.createLookup({
        "type": "gsub_single",
        "substitutions": r1_UnicodeKnowledge.ogonekBelowToTRTf_Y
    });
    r221_ccmp.addLookup(r221_gsub.createLookup({
        "type": "gsub_chaining",
        "ignoreGlyphs": r1_filterMarkByClassNegated(r221_markGlyphs, "below"),
        "rules": [{
            "match": [r221_triggerGlyphs_Y, Object.keys(r1_UnicodeKnowledge.ogonekBelowToTRTf_Y)],
            "inputBegins": 1,
            "inputEnds": 2,
            "apply": [{
                "at": 1,
                "lookup": r221_ogonekSpacerY
            }]
        }, {
            "match": [r221_triggerGlyphs_Normal, Object.keys(r1_UnicodeKnowledge.ogonekBelowToTRTf)],
            "inputBegins": 1,
            "inputEnds": 2,
            "apply": [{
                "at": 1,
                "lookup": r221_ogonekSpacerNormal
            }]
        }]
    }));
    return r221_gsub.endBlock(r221_rec);
};
var r1_objectIsNotEmpty = function (r223_obj) {
    var _r223_t0, _r223_t1;
    return r223_obj && Object.keys(r223_obj).length;
};
var r1_filterMarkByClass = function (r224_markGlyphs, r224_c) {
    var r224_gn, r224_m, _r224_t2, _r224_t3, _r224_t4;
    var r224_marks = [];
    var _r224_t0 = r224_markGlyphs.markAttachClassDef[Symbol.iterator]();
    var _r224_t1 = void 0;
    while (!(_r224_t1 = _r224_t0.next()).done) {
        _r224_t2 = _r224_t1.value;
        r224_gn = _r224_t2[0];
        r224_m = _r224_t2[1];
        if (r224_m === r224_c) r224_marks.push(r224_gn);
    }
    return r224_marks;
};
var r1_filterMarkByClassNegated = function (r226_markGlyphs, r226_c) {
    var r226_gn, r226_m, _r226_t2, _r226_t3, _r226_t4;
    var r226_marks = [];
    var _r226_t0 = r226_markGlyphs.markAttachClassDef[Symbol.iterator]();
    var _r226_t1 = void 0;
    while (!(_r226_t1 = _r226_t0.next()).done) {
        _r226_t2 = _r226_t1.value;
        r226_gn = _r226_t2[0];
        r226_m = _r226_t2[1];
        if (r226_m !== r226_c) r226_marks.push(r226_gn);
    }
    return r226_marks;
};


