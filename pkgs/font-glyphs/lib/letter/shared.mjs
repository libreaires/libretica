"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/spiro-control";
import * as _s0_t2 from "@iosevka/glyph/relation";
import * as _s0_t3 from "../meta/aesthetics.mjs";
var _s0_t4;
export {_s0_t4 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t13;
var _r1_t2 = function _r1_t13(r348_t) {
    var r348_n, r348_i, r348_a, _r348_t3, _r348_t4, _r348_t5, _r348_t6, _r348_t7, _r348_t8, _r348_t9, _r348_t10, _r348_t11, _r348_t12, _r348_t13, _r348_t14, _r348_t15, _r348_t16, _r348_t17, _r348_t18, _r348_t19, _r348_t20, _r348_t21, _r348_t22, _r348_t23, _r348_t24, _r348_t25, _r348_t26;
    var _r348_t0 = function () {
        _r348_t7 = function (_r348_t8) {
            _r348_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r348_t8
            };
        };
        _r348_t9 = r348_t instanceof Array;
        if (_r348_t9) {
            _r348_t10 = r348_n = r348_t.length;
            _r348_t11 = r348_i = 0;
            _r348_t12 = function (_r348_t14) {
                return _r348_t7(_r348_t14);
            };
            _r348_t13 = function (_r348_t15) {
                _r348_t16 = r348_i < r348_n;
                if (_r348_t16) {
                    _r348_t0 = function (_r348_t17) {
                        return _r348_t13(r348_i = r348_i + 1);
                    };
                    return {
                        "value": [r348_i, r348_t[r348_i]],
                        "done": false
                    };
                } else return _r348_t12(_r348_t15);
            };
            return _r348_t13();
        } else {
            _r348_t18 = r348_a = Object.keys(r348_t);
            _r348_t19 = r348_n = r348_a.length;
            _r348_t20 = r348_i = 0;
            _r348_t21 = function (_r348_t23) {
                return _r348_t7(_r348_t23);
            };
            _r348_t22 = function (_r348_t24) {
                _r348_t25 = r348_i < r348_n;
                if (_r348_t25) {
                    _r348_t0 = function (_r348_t26) {
                        return _r348_t22(r348_i = r348_i + 1);
                    };
                    return {
                        "value": [r348_a[r348_i], r348_t[r348_a[r348_i]]],
                        "done": false
                    };
                } else return _r348_t21(_r348_t24);
            };
            return _r348_t22();
        }
    };
    var _r348_t1 = function (x) {
        try {
            return _r348_t0(x);
        } catch (ex) {
            return _r348_t2(ex);
        }
    };
    var _r348_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t13) _r348_t3 = this; else {
        _r348_t4 = function () {
            void 0;
        };
        _r348_t4.prototype = _r1_t13.prototype;
        _r348_t3 = new _r348_t4();
    }
    _r348_t3[Symbol.iterator] = function () {
        return _r348_t3;
    };
    _r348_t3.next = _r348_t1;
    _r348_t3.throw = function (x) {
        return _r348_t2(x);
    };
    return _r348_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_FunctionInterpolator = _r1_t9.FunctionInterpolator;
var _r1_t10 = _s0_t2;
var r1_Dotless = _r1_t10.Dotless;
var r1_CvDecompose = _r1_t10.CvDecompose;
var _r1_t11 = _s0_t2;
var r1_RightDependentTrigger = _r1_t11.RightDependentTrigger;
var r1_RightDependentLink = _r1_t11.RightDependentLink;
var r1_DependentSelector = _r1_t11.DependentSelector;
var _r1_t12 = _s0_t3;
var r1_DesignParameters = _r1_t12.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t4 = r1_apply = function () {
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
    r315_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r315_xn$Capture_Ext$2Lrc2b, "Letter-Shared", function (r316_xn$Capture$2Lrc8, r316_xn$ExportCapture$2Lrc4b) {
        var r316_CreateTurnedLetter, _r316_t9, _r316_t10;
        var _r316_t0 = r316_xn$Capture$2Lrc8;
        var r316_xn$GlyphSaveSink$2Lrc4b = _r316_t0["$GlyphSaveSink$"];
        var r316_xn$NamedParameterPair$2Lrc9b = _r316_t0["$NamedParameterPair$"];
        var r316_xn$Exec$2Lrc5 = _r316_t0["$Exec$"];
        var r316_AS_BASE = _r316_t0.AS_BASE;
        var r316_ALSO_METRICS = _r316_t0.ALSO_METRICS;
        var _r316_t1 = r316_xn$Capture$2Lrc8.Metrics;
        var r316_Width = _r316_t1.Width;
        var r316_CAP = _r316_t1.CAP;
        var r316_ApparentTranslate = _r316_t1.ApparentTranslate;
        var r316_AccentStackOffset = _r316_t1.AccentStackOffset;
        var _r316_t2 = r316_xn$Capture$2Lrc8.SpiroFns;
        var _r316_t3 = r316_xn$Capture$2Lrc8.SpiroFns;
        var r316_xn$decor$0cao = _r316_t3["decor@"];
        var r316_xn$decor$0cao1 = _r316_t3["decor@@"];
        var r316_xn$decor$0cao11 = _r316_t3["decor@@@"];
        var _r316_t4 = r316_xn$Capture$2Lrc8.BooleFns;
        var _r316_t5 = r316_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r316_FlipAround = _r316_t5.FlipAround;
        var _r316_t6 = r316_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r316_xn$queryglyph$1aao = _r316_t6["query-glyph"];
        var r316_xn$referglyph$1aao = _r316_t6["refer-glyph"];
        var r316_xn$selectvariant$7Hrq = _r316_t6["select-variant"];
        var r316_xn$deriveglyphs$7Hrq = _r316_t6["derive-glyphs"];
        var r316_xn$derivemultipartglyphs$7Hrq65 = _r316_t6["derive-multi-part-glyphs"];
        var _r316_t7 = r316_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r316_TurnMarks = _r316_t7.TurnMarks;
        var r316_LeaningAnchorMap = _r316_t7.LeaningAnchorMap;
        var _r316_t8 = r316_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Accent-Builder"].resolve();
        var r316_TransformGlyphCompositionSequence = _r316_t8.TransformGlyphCompositionSequence;
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r322_t0, _r322_t1;
            return {
                "CreateAccentedComposition": r316_CreateAccentedComposition
            };
        });
        var r316_CreateAccentedComposition = function (r323_dst, r323_u, r323_srcGid, r323_accentGid) {
            var _r323_t0, _r323_t1;
            return r316_CreateMultiAccentedComposition(r323_dst, r323_u, r323_srcGid, [r323_accentGid]);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r325_t0, _r325_t1;
            return {
                "CreateMultiAccentedComposition": r316_CreateMultiAccentedComposition
            };
        });
        var r316_CreateMultiAccentedComposition = function (r326_dst, r326_u, r326_gnSrc, r326_gnAccents) {
            var _r326_t0, _r326_t1;
            return r316_xn$derivemultipartglyphs$7Hrq65(r326_dst, r326_u, [r326_gnSrc].concat(r326_gnAccents), function (r327_gns, r327_gr) {
                var _r327_t0, _r327_t1;
                return new r316_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                    var r329_part, _r329_t3, _r329_t4;
                    var r329_glyphParts = r327_gns.map(function (r330_gn) {
                        var _r330_t0, _r330_t1;
                        return r316_xn$queryglyph$1aao(r330_gn);
                    });
                    r316_TransformGlyphCompositionSequence(r329_glyphParts);
                    r329_currentGlyph.include(r329_glyphParts[0], r316_AS_BASE, r316_ALSO_METRICS);
                    var _r329_t0 = r329_glyphParts.slice(1);
                    var _r329_t1 = _r329_t0.length;
                    var _r329_t2 = 0;
                    while (_r329_t2 < _r329_t1) {
                        r329_part = _r329_t0[_r329_t2];
                        if (r329_part) r329_currentGlyph.include(r329_part);
                        _r329_t2 = _r329_t2 + 1;
                    }
                    if (!r327_gr) if (r327_gns.length === 2 && r327_gns[1].endsWith("tittleAbove")) r1_Dotless.set(r329_currentGlyph, r327_gns[0]); else r1_CvDecompose.set(r329_currentGlyph, r327_gns);
                    return void 0;
                });
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r335_t0, _r335_t1;
            return {
                "CreateCommaCaronComposition": r316_CreateCommaCaronComposition
            };
        });
        var r316_CreateCommaCaronComposition = function (r336_dst, r336_u, r336_sourceGid, r336_offset) {
            var _r336_t0, _r336_t1;
            return r316_xn$derivemultipartglyphs$7Hrq65(r336_dst, r336_u, [r336_sourceGid, "commaTR"], function (r337_gns, r337_gr) {
                var _r337_t0, _r337_t1;
                return new r316_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                    var _r339_t1, _r339_t2;
                    var _r339_t0 = r337_gns;
                    var r339_base = _r339_t0[0];
                    var r339_comma = _r339_t0[1];
                    var r339_baseGlyph = r316_xn$queryglyph$1aao(r339_base);
                    var r339_commaOffset = r1_fallback(r336_offset, r316_Width / 2 * Math.pow(r339_baseGlyph.advanceWidth / r316_Width * 2, 2 / 3));
                    r339_currentGlyph.include(r316_xn$referglyph$1aao(r339_comma));
                    r339_currentGlyph.include(r316_ApparentTranslate(r339_commaOffset, 0));
                    r339_currentGlyph.include(r316_xn$referglyph$1aao(r339_base), r316_AS_BASE, r316_ALSO_METRICS);
                    return void 0;
                });
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r345_t0, _r345_t1;
            return {
                "CreateDependentComposite": r316_CreateDependentComposite
            };
        });
        var r316_CreateDependentComposite = function (r346_gidDst, r346_unicode, r346_gidPart1, r346_gidPart2Map) {
            var r346_key, r346_g, _r346_t2, _r346_t3, _r346_t4;
            var r346_sourceGidList = [r346_gidPart1];
            var r346_keyToIndexMap = {};
            var _r346_t0 = _r1_t2(r346_gidPart2Map)[Symbol.iterator]();
            var _r346_t1 = void 0;
            while (!(_r346_t1 = _r346_t0.next()).done) {
                _r346_t2 = _r346_t1.value;
                r346_key = _r346_t2[0];
                r346_g = _r346_t2[1];
                r346_keyToIndexMap[r346_key] = r346_sourceGidList.length;
                r346_sourceGidList.push(r346_g);
            }
            return r316_xn$derivemultipartglyphs$7Hrq65(r346_gidDst, r346_unicode, r346_sourceGidList, function (r350_src) {
                var _r350_t0, _r350_t1;
                return new r316_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                    var _r352_t0, _r352_t1;
                    var r352_a = r350_src[0];
                    var r352_selector = r1_DependentSelector.get(r316_xn$queryglyph$1aao(r352_a));
                    var r352_b = r350_src[r346_keyToIndexMap[r352_selector]];
                    r352_currentGlyph.include(r316_xn$referglyph$1aao(r352_a), r316_AS_BASE, r316_ALSO_METRICS);
                    r352_currentGlyph.include(r316_xn$referglyph$1aao(r352_b));
                    return void 0;
                });
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r356_t0, _r356_t1;
            return {
                "CreateSelectorVariants": r316_CreateSelectorVariants
            };
        });
        var r316_CreateSelectorVariants = function () {
            var r357_item, _r357_t8;
            var _r357_t9 = arguments;
            var r357_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r357_t9, 0);
            var _r357_t0 = [];
            var _r357_t1 = 0;
            while (_r357_t1 < r357_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r357_xn$flexarguments$2Lrc7uIe5[_r357_t1] instanceof r316_xn$NamedParameterPair$2Lrc9b)) _r357_t0.push(r357_xn$flexarguments$2Lrc7uIe5[_r357_t1]);
                _r357_t1 = _r357_t1 + 1;
            }
            var _r357_t2 = r357_xn$flexarguments$2Lrc7uIe5;
            var _r357_t3 = _r357_t2.length;
            var _r357_t4 = 0;
            while (_r357_t4 < _r357_t3) {
                _r357_t1 = _r357_t2[_r357_t4];
                if (_r357_t1 && _r357_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r357_t1.left === "name") r357_name = _r357_t1.right;
                if (_r357_t1 && _r357_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r357_t1.left === "code") r357_code = _r357_t1.right;
                if (_r357_t1 && _r357_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r357_t1.left === "selectors") r357_selectors = _r357_t1.right;
                if (_r357_t1 && _r357_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r357_t1.left === "follow") r357_follow = _r357_t1.right;
                _r357_t4 = _r357_t4 + 1;
            }
            var r357_name = r1_fallback(r357_name, _r357_t0[0]);
            var r357_code = r1_fallback(r357_code, _r357_t0[1]);
            var r357_selectors = r1_fallback(r357_selectors, _r357_t0[2]);
            var r357_follow = r1_fallback(r357_follow, _r357_t0[3], r357_name);
            r316_xn$selectvariant$7Hrq("" + r357_name + "/selector", new r316_xn$NamedParameterPair$2Lrc9b("follow", r357_follow));
            var r357_obj = {};
            var _r357_t5 = r357_selectors;
            var _r357_t6 = _r357_t5.length;
            var _r357_t7 = 0;
            while (_r357_t7 < _r357_t6) {
                r357_item = _r357_t5[_r357_t7];
                r357_obj[r357_item] = "" + r357_name + "." + r357_item;
                _r357_t7 = _r357_t7 + 1;
            }
            return r316_CreateDependentComposite(r357_name, r357_code, "" + r357_name + "/selector", r357_obj);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r365_t0, _r365_t1;
            return {
                "DefineSelectorGlyph": r316_DefineSelectorGlyph
            };
        });
        var r316_DefineSelectorGlyph = function (r366_name, r366_selector, r366_df, r366_mk) {
            var _r366_t0, _r366_t1;
            return r316_xn$GlyphSaveSink$2Lrc4b.save("" + r366_name + "/selector." + r366_selector, null, new r316_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                var _r369_t0, _r369_t1;
                r369_currentGlyph.include(r366_df);
                r369_currentGlyph.include(r366_df.markSet[r366_mk]());
                r369_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                r1_DependentSelector.set(r369_currentGlyph, r366_selector);
                return void 0;
            }));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r374_t0, _r374_t1;
            return {
                "SetGrekUpperTonos": r316_SetGrekUpperTonos
            };
        });
        var r316_SetGrekUpperTonos = function (r375_kern) {
            var _r375_t0, _r375_t1;
            return new r316_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                var _r377_t0, _r377_t1;
                r377_currentGlyph.setBaseAnchor("grekUpperTonos", r375_kern, r316_CAP - 0.75 * r316_AccentStackOffset);
                return void 0;
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r380_t0, _r380_t1;
            return {
                "CreateTurnedLetter": r316_CreateTurnedLetter
            };
        });
        return r316_CreateTurnedLetter = function (r381_dstGid, r381_unicode, r381_srcGid, r381__cx, r381__cy, r381__df) {
            var _r381_t0, _r381_t1;
            return r316_xn$deriveglyphs$7Hrq(r381_dstGid, r381_unicode, r381_srcGid, function (r382_src, r382_gr) {
                var _r382_t0, _r382_t1;
                return new r316_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                    var _r384_t0, _r384_t1;
                    r384_currentGlyph.include(r316_xn$referglyph$1aao(r382_src), r316_AS_BASE, r316_ALSO_METRICS);
                    var r384_cx = r381__cx instanceof Function ? r381__cx.call(r384_currentGlyph) : r381__cx;
                    var r384_cy = r381__cy instanceof Function ? r381__cy.call(r384_currentGlyph) : r381__cy;
                    r384_currentGlyph.include(r316_FlipAround(r384_cx, r384_cy));
                    r384_currentGlyph.include(r316_TurnMarks(r384_cx, r384_cy, r381__df));
                    return void 0;
                });
            });
        };
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r390_xn$Capture_Ext$2Lrc2b) {
    var _r390_t0, _r390_t1;
    r390_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r390_xn$Capture_Ext$2Lrc2b, "Letter-Blackboard", function (r391_xn$Capture$2Lrc8, r391_xn$ExportCapture$2Lrc4b) {
        var _r391_t8, _r391_t9;
        var _r391_t0 = r391_xn$Capture$2Lrc8;
        var r391_xn$GlyphSaveSink$2Lrc4b = _r391_t0["$GlyphSaveSink$"];
        var r391_xn$NamedParameterPair$2Lrc9b = _r391_t0["$NamedParameterPair$"];
        var r391_xn$Exec$2Lrc5 = _r391_t0["$Exec$"];
        var _r391_t1 = r391_xn$Capture$2Lrc8.Metrics;
        var r391_Width = _r391_t1.Width;
        var r391_XH = _r391_t1.XH;
        var r391_AdviceStroke = _r391_t1.AdviceStroke;
        var r391_AccentStackOffset = _r391_t1.AccentStackOffset;
        var _r391_t2 = r391_xn$Capture$2Lrc8.SpiroFns;
        var _r391_t3 = r391_xn$Capture$2Lrc8.SpiroFns;
        var r391_xn$decor$0cao = _r391_t3["decor@"];
        var r391_xn$decor$0cao1 = _r391_t3["decor@@"];
        var r391_xn$decor$0cao11 = _r391_t3["decor@@@"];
        var _r391_t4 = r391_xn$Capture$2Lrc8.BooleFns;
        var r391_union = _r391_t4.union;
        var _r391_t5 = r391_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r391_DotStrokeAt = _r391_t5.DotStrokeAt;
        var r391_HBar = _r391_t5.HBar;
        var r391_VBar = _r391_t5.VBar;
        r391_xn$ExportCapture$2Lrc4b(function () {
            var _r394_t0, _r394_t1;
            return {
                "BBS": r391_BBS,
                "BBD": r391_BBD
            };
        });
        var r391_BBS = r391_AdviceStroke(6);
        var r391_BBD = r1_clamp(r391_Width / 5.5, r391_Width / 4, r391_BBS * 2);
        r391_xn$ExportCapture$2Lrc4b(function () {
            var _r396_t0, _r396_t1;
            return {
                "BBBarLeft": r391_BBBarLeft
            };
        });
        var r391_BBBarLeft = function () {
            var _r397_t5;
            var _r397_t6 = arguments;
            var r397_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r397_t6, 0);
            var _r397_t0 = [];
            var _r397_t1 = 0;
            while (_r397_t1 < r397_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r397_xn$flexarguments$2Lrc7uIe5[_r397_t1] instanceof r391_xn$NamedParameterPair$2Lrc9b)) _r397_t0.push(r397_xn$flexarguments$2Lrc7uIe5[_r397_t1]);
                _r397_t1 = _r397_t1 + 1;
            }
            var _r397_t2 = r397_xn$flexarguments$2Lrc7uIe5;
            var _r397_t3 = _r397_t2.length;
            var _r397_t4 = 0;
            while (_r397_t4 < _r397_t3) {
                _r397_t1 = _r397_t2[_r397_t4];
                if (_r397_t1 && _r397_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r397_t1.left === "x") r397_x = _r397_t1.right;
                if (_r397_t1 && _r397_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r397_t1.left === "yBot") r397_yBot = _r397_t1.right;
                if (_r397_t1 && _r397_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r397_t1.left === "yTop") r397_yTop = _r397_t1.right;
                if (_r397_t1 && _r397_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r397_t1.left === "bbs") r397_bbs = _r397_t1.right;
                if (_r397_t1 && _r397_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r397_t1.left === "bbd") r397_bbd = _r397_t1.right;
                _r397_t4 = _r397_t4 + 1;
            }
            var r397_x = r1_fallback(r397_x, _r397_t0[0]);
            var r397_yBot = r1_fallback(r397_yBot, _r397_t0[1]);
            var r397_yTop = r1_fallback(r397_yTop, _r397_t0[2]);
            var r397_bbs = r1_fallback(r397_bbs, _r397_t0[3], r391_BBS);
            var r397_bbd = r1_fallback(r397_bbd, _r397_t0[4], r391_BBD);
            return r391_union(r391_VBar.l(r397_x, r397_yBot, r397_yTop, r397_bbs), r391_VBar.l(r397_x + r397_bbd, r397_yBot, r397_yTop, r397_bbs), r391_HBar.t(r397_x, r397_x + r397_bbd, r397_yTop, r397_bbs), r391_HBar.b(r397_x, r397_x + r397_bbd, r397_yBot, r397_bbs));
        };
        r391_xn$ExportCapture$2Lrc4b(function () {
            var _r403_t0, _r403_t1;
            return {
                "BBBarCenter": r391_BBBarCenter
            };
        });
        var r391_BBBarCenter = function () {
            var _r404_t5;
            var _r404_t6 = arguments;
            var r404_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r404_t6, 0);
            var _r404_t0 = [];
            var _r404_t1 = 0;
            while (_r404_t1 < r404_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r404_xn$flexarguments$2Lrc7uIe5[_r404_t1] instanceof r391_xn$NamedParameterPair$2Lrc9b)) _r404_t0.push(r404_xn$flexarguments$2Lrc7uIe5[_r404_t1]);
                _r404_t1 = _r404_t1 + 1;
            }
            var _r404_t2 = r404_xn$flexarguments$2Lrc7uIe5;
            var _r404_t3 = _r404_t2.length;
            var _r404_t4 = 0;
            while (_r404_t4 < _r404_t3) {
                _r404_t1 = _r404_t2[_r404_t4];
                if (_r404_t1 && _r404_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r404_t1.left === "x") r404_x = _r404_t1.right;
                if (_r404_t1 && _r404_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r404_t1.left === "yBot") r404_yBot = _r404_t1.right;
                if (_r404_t1 && _r404_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r404_t1.left === "yTop") r404_yTop = _r404_t1.right;
                if (_r404_t1 && _r404_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r404_t1.left === "bbs") r404_bbs = _r404_t1.right;
                if (_r404_t1 && _r404_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r404_t1.left === "bbd") r404_bbd = _r404_t1.right;
                _r404_t4 = _r404_t4 + 1;
            }
            var r404_x = r1_fallback(r404_x, _r404_t0[0]);
            var r404_yBot = r1_fallback(r404_yBot, _r404_t0[1]);
            var r404_yTop = r1_fallback(r404_yTop, _r404_t0[2]);
            var r404_bbs = r1_fallback(r404_bbs, _r404_t0[3], r391_BBS);
            var r404_bbd = r1_fallback(r404_bbd, _r404_t0[4], r391_BBD);
            return r391_union(r391_VBar.m(r404_x - r404_bbd / 2, r404_yBot, r404_yTop, r404_bbs), r391_VBar.m(r404_x + r404_bbd / 2, r404_yBot, r404_yTop, r404_bbs), r391_HBar.t(r404_x - r404_bbd / 2, r404_x + r404_bbd / 2, r404_yTop, r404_bbs), r391_HBar.b(r404_x - r404_bbd / 2, r404_x + r404_bbd / 2, r404_yBot, r404_bbs));
        };
        r391_xn$ExportCapture$2Lrc4b(function () {
            var _r410_t0, _r410_t1;
            return {
                "BBBarRight": r391_BBBarRight
            };
        });
        var r391_BBBarRight = function () {
            var _r411_t5;
            var _r411_t6 = arguments;
            var r411_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r411_t6, 0);
            var _r411_t0 = [];
            var _r411_t1 = 0;
            while (_r411_t1 < r411_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r411_xn$flexarguments$2Lrc7uIe5[_r411_t1] instanceof r391_xn$NamedParameterPair$2Lrc9b)) _r411_t0.push(r411_xn$flexarguments$2Lrc7uIe5[_r411_t1]);
                _r411_t1 = _r411_t1 + 1;
            }
            var _r411_t2 = r411_xn$flexarguments$2Lrc7uIe5;
            var _r411_t3 = _r411_t2.length;
            var _r411_t4 = 0;
            while (_r411_t4 < _r411_t3) {
                _r411_t1 = _r411_t2[_r411_t4];
                if (_r411_t1 && _r411_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r411_t1.left === "x") r411_x = _r411_t1.right;
                if (_r411_t1 && _r411_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r411_t1.left === "yBot") r411_yBot = _r411_t1.right;
                if (_r411_t1 && _r411_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r411_t1.left === "yTop") r411_yTop = _r411_t1.right;
                if (_r411_t1 && _r411_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r411_t1.left === "bbs") r411_bbs = _r411_t1.right;
                if (_r411_t1 && _r411_t1 instanceof r391_xn$NamedParameterPair$2Lrc9b && _r411_t1.left === "bbd") r411_bbd = _r411_t1.right;
                _r411_t4 = _r411_t4 + 1;
            }
            var r411_x = r1_fallback(r411_x, _r411_t0[0]);
            var r411_yBot = r1_fallback(r411_yBot, _r411_t0[1]);
            var r411_yTop = r1_fallback(r411_yTop, _r411_t0[2]);
            var r411_bbs = r1_fallback(r411_bbs, _r411_t0[3], r391_BBS);
            var r411_bbd = r1_fallback(r411_bbd, _r411_t0[4], r391_BBD);
            return r391_union(r391_VBar.r(r411_x, r411_yBot, r411_yTop, r411_bbs), r391_VBar.r(r411_x - r411_bbd, r411_yBot, r411_yTop, r411_bbs), r391_HBar.t(r411_x, r411_x - r411_bbd, r411_yTop, r411_bbs), r391_HBar.b(r411_x, r411_x - r411_bbd, r411_yBot, r411_bbs));
        };
        var _r391_t6 = r391_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r391_markMiddle = _r391_t6.markMiddle;
        var _r391_t7 = r391_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r391_aboveMarkStack = _r391_t7.aboveMarkStack;
        return r391_xn$GlyphSaveSink$2Lrc4b.save("mathbb/dotAbove", null, new r391_xn$Capture$2Lrc8.GlyphProc(function (r420_currentGlyph) {
            var _r420_t0, _r420_t1;
            r420_currentGlyph.setWidth(0);
            r420_currentGlyph.setMarkAnchor("above", r391_markMiddle, r391_XH, r391_markMiddle, r391_aboveMarkStack);
            r420_currentGlyph.setBaseAnchor("aboveBraceL", r391_markMiddle, r391_XH + r391_AccentStackOffset);
            r420_currentGlyph.setBaseAnchor("aboveBraceR", r391_markMiddle, r391_XH + r391_AccentStackOffset);
            r420_currentGlyph.include(r391_DotStrokeAt(r391_markMiddle, r391_XH + r391_AccentStackOffset, r391_BBD / 2 + r391_BBS, r391_BBS));
            return void 0;
        }));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r428_xn$Capture_Ext$2Lrc2b) {
    var _r428_t0, _r428_t1;
    r428_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r428_xn$Capture_Ext$2Lrc2b, "Letter-Shared-Metrics", function (r429_xn$Capture$2Lrc8, r429_xn$ExportCapture$2Lrc4b) {
        var r429_EFVJutLength, _r429_t5, _r429_t6;
        var _r429_t0 = r429_xn$Capture$2Lrc8;
        var r429_xn$GlyphSaveSink$2Lrc4b = _r429_t0["$GlyphSaveSink$"];
        var r429_xn$NamedParameterPair$2Lrc9b = _r429_t0["$NamedParameterPair$"];
        var r429_xn$Exec$2Lrc5 = _r429_t0["$Exec$"];
        var _r429_t1 = r429_xn$Capture$2Lrc8.Metrics;
        var r429_DesignParameters = _r429_t1.DesignParameters;
        var r429_HSwToV = _r429_t1.HSwToV;
        var r429_Stroke = _r429_t1.Stroke;
        var r429_VJut = _r429_t1.VJut;
        var _r429_t2 = r429_xn$Capture$2Lrc8.SpiroFns;
        var _r429_t3 = r429_xn$Capture$2Lrc8.SpiroFns;
        var r429_xn$decor$0cao = _r429_t3["decor@"];
        var r429_xn$decor$0cao1 = _r429_t3["decor@@"];
        var r429_xn$decor$0cao11 = _r429_t3["decor@@@"];
        var _r429_t4 = r429_xn$Capture$2Lrc8.BooleFns;
        r429_xn$ExportCapture$2Lrc4b(function () {
            var _r431_t0, _r431_t1;
            return {
                "BowlXDepth": r429_BowlXDepth
            };
        });
        var r429_BowlXDepth = function (r432_top, r432_bottom, r432_left, r432_right, r432__sw) {
            var _r432_t0, _r432_t1;
            var r432_sw = r1_fallback(r432__sw, r429_Stroke);
            var r432_trShrink = Math.sqrt((r432_right - r432_left) / (r432_top - r432_bottom));
            return Math.max(r429_HSwToV(1.25 * r432_sw), r432_trShrink * Math.min((r432_top - r432_bottom) * 0.45, (r432_right - r432_left + r429_HSwToV(r432_sw)) * 0.875));
        };
        r429_xn$ExportCapture$2Lrc4b(function () {
            var _r434_t0, _r434_t1;
            return {
                "EFMidBarShrinkK": r429_EFMidBarShrinkK,
                "EFMidBarPosY": r429_EFMidBarPosY,
                "EFVJutLength": r429_EFVJutLength
            };
        });
        var r429_EFMidBarShrinkK = function (r435_df, r435_fSerifRT, r435__swRef) {
            var _r435_t0, _r435_t1;
            var r435_swRef = r1_fallback(r435__swRef, r435_df.mvs);
            return 1 + (Math.max(0.15 * (r435_df.rightSB - r435_df.leftSB), 0.5 * r435_swRef) + (r435_fSerifRT ? 0.25 : 0) * r435_swRef) / r435_df.leftSB;
        };
        var r429_EFMidBarPosY = function (r436_top, r436_bot, r436__pyBar) {
            var _r436_t0, _r436_t1;
            return r1_mix(r436_bot, r436_top, r1_fallback(r436__pyBar, r429_DesignParameters.upperEBarPos));
        };
        return r429_EFVJutLength = function (r437_top, r437_bot, r437__pyBar, r437__stroke, r437__jutTop, r437__jutBot) {
            var _r437_t0, _r437_t1;
            var r437_height = r437_top - r437_bot;
            var r437_barPos = r429_EFMidBarPosY(r437_height, 0, r437__pyBar);
            var r437_stroke = r1_fallback(r437__stroke, r429_Stroke);
            var r437_jutTop = r1_fallback(r437__jutTop, Math.min(r429_VJut, r1_mix(r437_stroke, r437_height - (r437_barPos + r437_stroke / 2), 0.5)));
            var r437_jutBot = r1_fallback(r437__jutBot, Math.min(r429_VJut, r1_mix(r437_stroke, 0 + (r437_barPos - r437_stroke / 2), 0.5)));
            var r437_coJutTop = r437_height - (r437_barPos - r437_stroke / 2) - r437_jutTop;
            var r437_coJutBot = 0 + (r437_barPos + r437_stroke / 2) - r437_jutBot;
            var r437_jutMid = r1_mix(r437_stroke / 2, Math.min(r429_VJut, r437_coJutTop, r437_coJutBot) - r437_stroke / 2, 0.5);
            return [r437_jutTop, r437_jutBot, r437_jutMid];
        };
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r440_xn$Capture_Ext$2Lrc2b) {
    var _r440_t0, _r440_t1;
    r440_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r440_xn$Capture_Ext$2Lrc2b, "Letter-Shared-Shapes", function (r441_xn$Capture$2Lrc8, r441_xn$ExportCapture$2Lrc4b) {
        var _r441_t9, _r441_t10, _r441_t11, _r441_tag12, _r441_t13, _r441_tag14, _r441_t15, _r441_tag16, _r441_t17, _r441_tag18, _r441_t19, _r441_tag20, _r441_t21, _r441_tag22, _r441_t23, _r441_tag24, _r441_t25, _r441_tag26, _r441_t27, _r441_tag28, _r441_t29, _r441_tag30, _r441_t31, _r441_tag32, _r441_t33, _r441_tag34, _r441_t35, _r441_tag36, _r441_t37, _r441_tag38, _r441_t39, _r441_tag40, _r441_t41, _r441_tag42;
        var _r441_t0 = r441_xn$Capture$2Lrc8;
        var r441_xn$GlyphSaveSink$2Lrc4b = _r441_t0["$GlyphSaveSink$"];
        var r441_xn$NamedParameterPair$2Lrc9b = _r441_t0["$NamedParameterPair$"];
        var r441_xn$Exec$2Lrc5 = _r441_t0["$Exec$"];
        var r441_para = _r441_t0.para;
        var r441_AS_BASE = _r441_t0.AS_BASE;
        var r441_ALSO_METRICS = _r441_t0.ALSO_METRICS;
        var r441_DivFrame = _r441_t0.DivFrame;
        var _r441_t1 = r441_xn$Capture$2Lrc8.Metrics;
        var r441_DesignParameters = _r441_t1.DesignParameters;
        var r441_Width = _r441_t1.Width;
        var r441_SB = _r441_t1.SB;
        var r441_XH = _r441_t1.XH;
        var r441_Ascender = _r441_t1.Ascender;
        var r441_Descender = _r441_t1.Descender;
        var r441_ApparentTranslate = _r441_t1.ApparentTranslate;
        var r441_TanSlope = _r441_t1.TanSlope;
        var r441_HVContrast = _r441_t1.HVContrast;
        var r441_HSwToV = _r441_t1.HSwToV;
        var r441_Upward = _r441_t1.Upward;
        var r441_Downward = _r441_t1.Downward;
        var r441_Rightward = _r441_t1.Rightward;
        var r441_Leftward = _r441_t1.Leftward;
        var r441_O = _r441_t1.O;
        var r441_OX = _r441_t1.OX;
        var r441_Hook = _r441_t1.Hook;
        var r441_HookX = _r441_t1.HookX;
        var r441_TailX = _r441_t1.TailX;
        var r441_TailY = _r441_t1.TailY;
        var r441_DiagTailAngle = _r441_t1.DiagTailAngle;
        var r441_DiagTailDepth = _r441_t1.DiagTailDepth;
        var r441_AdviceStroke = _r441_t1.AdviceStroke;
        var r441_Stroke = _r441_t1.Stroke;
        var r441_HalfStroke = _r441_t1.HalfStroke;
        var r441_QuarterStroke = _r441_t1.QuarterStroke;
        var r441_OverlayStroke = _r441_t1.OverlayStroke;
        var r441_Jut = _r441_t1.Jut;
        var r441_LongJut = _r441_t1.LongJut;
        var r441_MidJutSide = _r441_t1.MidJutSide;
        var r441_MidJutCenter = _r441_t1.MidJutCenter;
        var r441_LongVJut = _r441_t1.LongVJut;
        var r441_VJutStroke = _r441_t1.VJutStroke;
        var r441_CThinB = _r441_t1.CThinB;
        var r441_RightSB = _r441_t1.RightSB;
        var r441_SideJut = _r441_t1.SideJut;
        var r441_DToothlessRise = _r441_t1.DToothlessRise;
        var r441_ShoulderFine = _r441_t1.ShoulderFine;
        var r441_TightBendInnerRadius = _r441_t1.TightBendInnerRadius;
        var r441_ArchDepthA = _r441_t1.ArchDepthA;
        var r441_ArchDepthB = _r441_t1.ArchDepthB;
        var r441_SmallArchDepthA = _r441_t1.SmallArchDepthA;
        var r441_SmallArchDepthB = _r441_t1.SmallArchDepthB;
        var r441_YSmoothMidR = _r441_t1.YSmoothMidR;
        var r441_YSmoothMidL = _r441_t1.YSmoothMidL;
        var r441_SerifShiftX = _r441_t1.SerifShiftX;
        var r441_SerifShiftS = _r441_t1.SerifShiftS;
        var r441_TINY = _r441_t1.TINY;
        var _r441_t2 = r441_xn$Capture$2Lrc8.SpiroFns;
        var r441_g4 = _r441_t2.g4;
        var r441_g2 = _r441_t2.g2;
        var r441_corner = _r441_t2.corner;
        var r441_flat = _r441_t2.flat;
        var r441_curl = _r441_t2.curl;
        var r441_end = _r441_t2.end;
        var r441_straight = _r441_t2.straight;
        var r441_widths = _r441_t2.widths;
        var r441_heading = _r441_t2.heading;
        var r441_alsoThruThem = _r441_t2.alsoThruThem;
        var r441_quadControls = _r441_t2.quadControls;
        var r441_archv = _r441_t2.archv;
        var r441_arcvh = _r441_t2.arcvh;
        var r441_dispiro = _r441_t2.dispiro;
        var r441_xn$spirooutline$1aao = _r441_t2["spiro-outline"];
        var _r441_t3 = r441_xn$Capture$2Lrc8.SpiroFns;
        var r441_xn$decor$0cao = _r441_t3["decor@"];
        var r441_xn$decor$0cao1 = _r441_t3["decor@@"];
        var r441_xn$decor$0cao11 = _r441_t3["decor@@@"];
        var _r441_t4 = r441_xn$Capture$2Lrc8.BooleFns;
        var r441_union = _r441_t4.union;
        var r441_intersection = _r441_t4.intersection;
        var r441_difference = _r441_t4.difference;
        var _r441_t5 = r441_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r441_xn$noshape$3cah = _r441_t5["no-shape"];
        var r441_tagged = _r441_t5.tagged;
        var r441_Rect = _r441_t5.Rect;
        var r441_MaskAbove = _r441_t5.MaskAbove;
        var r441_MaskBelow = _r441_t5.MaskBelow;
        var r441_HSerif = _r441_t5.HSerif;
        var r441_HBar = _r441_t5.HBar;
        var r441_HOverlayBar = _r441_t5.HOverlayBar;
        var r441_HOverlayObliqueBar = _r441_t5.HOverlayObliqueBar;
        var r441_VBar = _r441_t5.VBar;
        var r441_HookEnd = _r441_t5.HookEnd;
        var r441_flatside = _r441_t5.flatside;
        var r441_Arch = _r441_t5.Arch;
        var r441_FlipAround = _r441_t5.FlipAround;
        var r441_xn$withtransform$5sIl = _r441_t5["with-transform"];
        var r441_ExtLineCenter = _r441_t5.ExtLineCenter;
        var _r441_t6 = r441_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r441_xn$referglyph$1aao = _r441_t6["refer-glyph"];
        var _r441_t7 = r441_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r441_ExtendAboveBaseAnchors = _r441_t7.ExtendAboveBaseAnchors;
        var r441_ExtendBelowBaseAnchors = _r441_t7.ExtendBelowBaseAnchors;
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r446_t0, _r446_t1;
            return {
                "RightwardTailedBar": r441_RightwardTailedBar
            };
        });
        var r441_RightwardTailedBar = function () {
            var _r447_t5;
            var _r447_t6 = arguments;
            var r447_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r447_t6, 0);
            var _r447_t0 = [];
            var _r447_t1 = 0;
            while (_r447_t1 < r447_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r447_xn$flexarguments$2Lrc7uIe5[_r447_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r447_t0.push(r447_xn$flexarguments$2Lrc7uIe5[_r447_t1]);
                _r447_t1 = _r447_t1 + 1;
            }
            var _r447_t2 = r447_xn$flexarguments$2Lrc7uIe5;
            var _r447_t3 = _r447_t2.length;
            var _r447_t4 = 0;
            while (_r447_t4 < _r447_t3) {
                _r447_t1 = _r447_t2[_r447_t4];
                if (_r447_t1 && _r447_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r447_t1.left === "x") r447_x = _r447_t1.right;
                if (_r447_t1 && _r447_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r447_t1.left === "low") r447_low = _r447_t1.right;
                if (_r447_t1 && _r447_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r447_t1.left === "high") r447_high = _r447_t1.right;
                if (_r447_t1 && _r447_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r447_t1.left === "sw") r447_sw = _r447_t1.right;
                _r447_t4 = _r447_t4 + 1;
            }
            var r447_x = r1_fallback(r447_x, _r447_t0[0]);
            var r447_low = r1_fallback(r447_low, _r447_t0[1]);
            var r447_high = r1_fallback(r447_high, _r447_t0[2]);
            var r447_sw = r1_fallback(r447_sw, _r447_t0[3], r441_Stroke);
            var r447_hookDepth = Math.max(r441_SideJut, r441_AdviceStroke(8), 0.625 * (r441_SB - 0));
            var r447_hookTurn = Math.max(0 + r441_AdviceStroke(16), r447_hookDepth - r441_AdviceStroke(16));
            return r441_dispiro(r441_widths.lhs(r447_sw), r441_flat(r447_x - r441_HSwToV(r447_sw), r447_high, r441_heading(r441_Downward)), r441_curl(r447_x - r441_HSwToV(r447_sw), r447_low + r441_O + r447_sw + r447_hookTurn, r441_heading(r441_Downward)), r441_arcvh(), r441_flat(r447_x + r447_hookTurn, r447_low + r441_O, r441_heading(r441_Rightward)), r441_curl(r447_x + r447_hookDepth + Math.max(0, r447_sw * r441_TanSlope), r447_low + r441_O));
        };
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r453_t0, _r453_t1;
            return {
                "LeftwardTailedBar": r441_LeftwardTailedBar
            };
        });
        var r441_LeftwardTailedBar = function () {
            var _r454_t5;
            var _r454_t6 = arguments;
            var r454_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r454_t6, 0);
            var _r454_t0 = [];
            var _r454_t1 = 0;
            while (_r454_t1 < r454_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r454_xn$flexarguments$2Lrc7uIe5[_r454_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r454_t0.push(r454_xn$flexarguments$2Lrc7uIe5[_r454_t1]);
                _r454_t1 = _r454_t1 + 1;
            }
            var _r454_t2 = r454_xn$flexarguments$2Lrc7uIe5;
            var _r454_t3 = _r454_t2.length;
            var _r454_t4 = 0;
            while (_r454_t4 < _r454_t3) {
                _r454_t1 = _r454_t2[_r454_t4];
                if (_r454_t1 && _r454_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r454_t1.left === "x") r454_x = _r454_t1.right;
                if (_r454_t1 && _r454_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r454_t1.left === "low") r454_low = _r454_t1.right;
                if (_r454_t1 && _r454_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r454_t1.left === "high") r454_high = _r454_t1.right;
                if (_r454_t1 && _r454_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r454_t1.left === "sw") r454_sw = _r454_t1.right;
                _r454_t4 = _r454_t4 + 1;
            }
            var r454_x = r1_fallback(r454_x, _r454_t0[0]);
            var r454_low = r1_fallback(r454_low, _r454_t0[1]);
            var r454_high = r1_fallback(r454_high, _r454_t0[2]);
            var r454_sw = r1_fallback(r454_sw, _r454_t0[3], r441_Stroke);
            var r454_hookDepth = Math.max(r441_SideJut, r441_AdviceStroke(8), 0.625 * (r441_SB - 0));
            var r454_hookTurn = Math.max(0 + r441_AdviceStroke(16), r454_hookDepth - r441_AdviceStroke(16));
            return r441_dispiro(r441_widths.rhs(r454_sw), r441_flat(r454_x + r441_HSwToV(r454_sw), r454_high, r441_heading(r441_Downward)), r441_curl(r454_x + r441_HSwToV(r454_sw), r454_low + r441_O + r454_sw + r454_hookTurn, r441_heading(r441_Downward)), r441_arcvh(), r441_flat(r454_x - r454_hookTurn, r454_low + r441_O, r441_heading(r441_Leftward)), r441_curl(r454_x - r454_hookDepth + Math.min(0, r454_sw * r441_TanSlope), r454_low + r441_O));
        };
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r460_t0, _r460_t1;
            return {
                "RightwardDiagTailedBar": r441_RightwardDiagTailedBar
            };
        });
        var r441_RightwardDiagTailedBar = function () {
            var _r461_t5;
            var _r461_t6 = arguments;
            var r461_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r461_t6, 0);
            var _r461_t0 = [];
            var _r461_t1 = 0;
            while (_r461_t1 < r461_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r461_xn$flexarguments$2Lrc7uIe5[_r461_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r461_t0.push(r461_xn$flexarguments$2Lrc7uIe5[_r461_t1]);
                _r461_t1 = _r461_t1 + 1;
            }
            var _r461_t2 = r461_xn$flexarguments$2Lrc7uIe5;
            var _r461_t3 = _r461_t2.length;
            var _r461_t4 = 0;
            while (_r461_t4 < _r461_t3) {
                _r461_t1 = _r461_t2[_r461_t4];
                if (_r461_t1 && _r461_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r461_t1.left === "x") r461_x = _r461_t1.right;
                if (_r461_t1 && _r461_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r461_t1.left === "low") r461_low = _r461_t1.right;
                if (_r461_t1 && _r461_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r461_t1.left === "high") r461_high = _r461_t1.right;
                if (_r461_t1 && _r461_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r461_t1.left === "sw") r461_sw = _r461_t1.right;
                _r461_t4 = _r461_t4 + 1;
            }
            var r461_x = r1_fallback(r461_x, _r461_t0[0]);
            var r461_low = r1_fallback(r461_low, _r461_t0[1]);
            var r461_high = r1_fallback(r461_high, _r461_t0[2]);
            var r461_sw = r1_fallback(r461_sw, _r461_t0[3], r441_Stroke);
            return r441_dispiro(r441_widths.center(r461_sw), r441_flat(r461_x - r441_HSwToV(0.5 * r461_sw), r461_high, r441_heading(r441_Downward)), r441_DiagTail.R(r461_x - r441_HSwToV(0.5 * r461_sw), r461_low, 0.875 * r441_Hook - 0.375 * r461_sw, r461_sw));
        };
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r467_t0, _r467_t1;
            return {
                "LeftwardDiagTailedBar": r441_LeftwardDiagTailedBar
            };
        });
        var r441_LeftwardDiagTailedBar = function () {
            var _r468_t5;
            var _r468_t6 = arguments;
            var r468_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r468_t6, 0);
            var _r468_t0 = [];
            var _r468_t1 = 0;
            while (_r468_t1 < r468_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r468_xn$flexarguments$2Lrc7uIe5[_r468_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r468_t0.push(r468_xn$flexarguments$2Lrc7uIe5[_r468_t1]);
                _r468_t1 = _r468_t1 + 1;
            }
            var _r468_t2 = r468_xn$flexarguments$2Lrc7uIe5;
            var _r468_t3 = _r468_t2.length;
            var _r468_t4 = 0;
            while (_r468_t4 < _r468_t3) {
                _r468_t1 = _r468_t2[_r468_t4];
                if (_r468_t1 && _r468_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r468_t1.left === "x") r468_x = _r468_t1.right;
                if (_r468_t1 && _r468_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r468_t1.left === "low") r468_low = _r468_t1.right;
                if (_r468_t1 && _r468_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r468_t1.left === "high") r468_high = _r468_t1.right;
                if (_r468_t1 && _r468_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r468_t1.left === "sw") r468_sw = _r468_t1.right;
                _r468_t4 = _r468_t4 + 1;
            }
            var r468_x = r1_fallback(r468_x, _r468_t0[0]);
            var r468_low = r1_fallback(r468_low, _r468_t0[1]);
            var r468_high = r1_fallback(r468_high, _r468_t0[2]);
            var r468_sw = r1_fallback(r468_sw, _r468_t0[3], r441_Stroke);
            return r441_dispiro(r441_widths.center(r468_sw), r441_flat(r468_x + r441_HSwToV(0.5 * r468_sw), r468_high, r441_heading(r441_Downward)), r441_DiagTail.L(r468_x + r441_HSwToV(0.5 * r468_sw), r468_low, 0.875 * r441_Hook - 0.375 * r468_sw, r468_sw));
        };
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r474_t0, _r474_t1;
            return {
                "CurlyTail": r441_CurlyTail
            };
        });
        var r441_CurlyTail = (function () {
            var r477_n, r477_f;
            var r477_exports = {};
            var r477_normalBlender = function (r484_before, r484__after, r484_args) {
                var r484_terminalDeltaY, r484_terminalDeltaX, _r484_t0, _r484_t1;
                var r484_ltr = r484_args.xOuter > r484_before.x;
                var r484_rInner = 0.5 * Math.abs(r484_args.xOuter - r484_before.x) - r441_HSwToV(r484_args.fine);
                var r484_top = r1_fallback(r484_args.yLoopTop, r484_args.bottom + 2 * (r484_args.fine + r484_rInner));
                var r484_yOuter = (r484_ltr ? r441_YSmoothMidR : r441_YSmoothMidL)(r484_top, r484_args.bottom);
                return [r441_Arch[r484_ltr ? "lhs" : "rhs"](r484_args.bottom, new r441_xn$NamedParameterPair$2Lrc9b("sw", r484_args.fine), new r441_xn$NamedParameterPair$2Lrc9b("swBefore", r484_args.swBefore)), r441_g4(r484_args.xOuter, r484_yOuter), r484_args.flat ? [r441_flat(r441_Arch["adjust-x"].top(r1_mix(r484_args.xOuter, r484_before.x, 0.5)), r484_top), r441_curl(r484_args.x2, r484_top)] : (r484_terminalDeltaY = 0.01, r484_terminalDeltaX = r484_terminalDeltaY * r484_args.terminalSlopeAdj * (r1_mix(r484_before.x, r484_args.xOuter, 0.5) - r484_args.x2) / (r484_top - r484_args.y2), [r441_Arch[r484_ltr ? "lhs" : "rhs"](r484_top, new r441_xn$NamedParameterPair$2Lrc9b("sw", r484_args.fine), new r441_xn$NamedParameterPair$2Lrc9b("mockPost", {
                    "x": r1_mix(r484_args.x2, r484_args.xOuter, 0.33),
                    "y": r484_args.bottom
                }), new r441_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r441_g2(r484_args.x2 + r484_terminalDeltaX, r484_args.y2 + r484_terminalDeltaY), r441_g2(r484_args.x2, r484_args.y2)])];
            };
            r477_exports.n = r477_n = function () {
                var _r492_t5;
                var _r492_t6 = arguments;
                var r492_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r492_t6, 0);
                var _r492_t0 = [];
                var _r492_t1 = 0;
                while (_r492_t1 < r492_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r492_xn$flexarguments$2Lrc7uIe5[_r492_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r492_t0.push(r492_xn$flexarguments$2Lrc7uIe5[_r492_t1]);
                    _r492_t1 = _r492_t1 + 1;
                }
                var _r492_t2 = r492_xn$flexarguments$2Lrc7uIe5;
                var _r492_t3 = _r492_t2.length;
                var _r492_t4 = 0;
                while (_r492_t4 < _r492_t3) {
                    _r492_t1 = _r492_t2[_r492_t4];
                    if (_r492_t1 && _r492_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r492_t1.left === "fine") r492_fine = _r492_t1.right;
                    if (_r492_t1 && _r492_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r492_t1.left === "bottom") r492_bottom = _r492_t1.right;
                    if (_r492_t1 && _r492_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r492_t1.left === "xOuter") r492_xOuter = _r492_t1.right;
                    if (_r492_t1 && _r492_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r492_t1.left === "x2") r492_x2 = _r492_t1.right;
                    if (_r492_t1 && _r492_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r492_t1.left === "y2") r492_y2 = _r492_t1.right;
                    if (_r492_t1 && _r492_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r492_t1.left === "yLoopTop") r492_yLoopTop = _r492_t1.right;
                    if (_r492_t1 && _r492_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r492_t1.left === "swBefore") r492_swBefore = _r492_t1.right;
                    if (_r492_t1 && _r492_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r492_t1.left === "terminalSlopeAdj") r492_terminalSlopeAdj = _r492_t1.right;
                    _r492_t4 = _r492_t4 + 1;
                }
                var r492_fine = r1_fallback(r492_fine, _r492_t0[0]);
                var r492_bottom = r1_fallback(r492_bottom, _r492_t0[1]);
                var r492_xOuter = r1_fallback(r492_xOuter, _r492_t0[2]);
                var r492_x2 = r1_fallback(r492_x2, _r492_t0[3]);
                var r492_y2 = r1_fallback(r492_y2, _r492_t0[4]);
                var r492_yLoopTop = r1_fallback(r492_yLoopTop, _r492_t0[5]);
                var r492_swBefore = r1_fallback(r492_swBefore, _r492_t0[6], r441_Stroke);
                var r492_terminalSlopeAdj = r1_fallback(r492_terminalSlopeAdj, _r492_t0[7], 0.5);
                return new r1_FunctionInterpolator(r477_normalBlender, {
                    "flat": false,
                    "fine": r492_fine,
                    "bottom": r492_bottom,
                    "xOuter": r492_xOuter,
                    "x2": r492_x2,
                    "y2": r492_y2,
                    "yLoopTop": r492_yLoopTop,
                    "swBefore": r492_swBefore,
                    "terminalSlopeAdj": r492_terminalSlopeAdj
                });
            };
            r477_exports.f = r477_f = function () {
                var _r498_t5;
                var _r498_t6 = arguments;
                var r498_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r498_t6, 0);
                var _r498_t0 = [];
                var _r498_t1 = 0;
                while (_r498_t1 < r498_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r498_xn$flexarguments$2Lrc7uIe5[_r498_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r498_t0.push(r498_xn$flexarguments$2Lrc7uIe5[_r498_t1]);
                    _r498_t1 = _r498_t1 + 1;
                }
                var _r498_t2 = r498_xn$flexarguments$2Lrc7uIe5;
                var _r498_t3 = _r498_t2.length;
                var _r498_t4 = 0;
                while (_r498_t4 < _r498_t3) {
                    _r498_t1 = _r498_t2[_r498_t4];
                    if (_r498_t1 && _r498_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r498_t1.left === "fine") r498_fine = _r498_t1.right;
                    if (_r498_t1 && _r498_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r498_t1.left === "bottom") r498_bottom = _r498_t1.right;
                    if (_r498_t1 && _r498_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r498_t1.left === "xOuter") r498_xOuter = _r498_t1.right;
                    if (_r498_t1 && _r498_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r498_t1.left === "x2") r498_x2 = _r498_t1.right;
                    if (_r498_t1 && _r498_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r498_t1.left === "yLoopTop") r498_yLoopTop = _r498_t1.right;
                    if (_r498_t1 && _r498_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r498_t1.left === "swBefore") r498_swBefore = _r498_t1.right;
                    if (_r498_t1 && _r498_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r498_t1.left === "terminalSlopeAdj") r498_terminalSlopeAdj = _r498_t1.right;
                    _r498_t4 = _r498_t4 + 1;
                }
                var r498_fine = r1_fallback(r498_fine, _r498_t0[0]);
                var r498_bottom = r1_fallback(r498_bottom, _r498_t0[1]);
                var r498_xOuter = r1_fallback(r498_xOuter, _r498_t0[2]);
                var r498_x2 = r1_fallback(r498_x2, _r498_t0[3]);
                var r498_yLoopTop = r1_fallback(r498_yLoopTop, _r498_t0[4]);
                var r498_swBefore = r1_fallback(r498_swBefore, _r498_t0[5], r441_Stroke);
                var r498_terminalSlopeAdj = r1_fallback(r498_terminalSlopeAdj, _r498_t0[6], 0.5);
                return new r1_FunctionInterpolator(r477_normalBlender, {
                    "flat": true,
                    "fine": r498_fine,
                    "bottom": r498_bottom,
                    "xOuter": r498_xOuter,
                    "x2": r498_x2,
                    "yLoopTop": r498_yLoopTop,
                    "swBefore": r498_swBefore,
                    "terminalSlopeAdj": r498_terminalSlopeAdj
                });
            };
            return r477_exports;
        })();
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r503_t0, _r503_t1;
            return {
                "HCurlyTail": r441_HCurlyTail
            };
        });
        var r441_HCurlyTail = function (r504_fine, r504_wide, r504_rinner, r504_left, r504_m1, r504__right, r504_x1, r504_x2, r504_y2) {
            var _r504_t0, _r504_t1;
            return new r441_xn$Capture$2Lrc8.GlyphProc(function (r506_currentGlyph) {
                var _r506_t0, _r506_t1;
                var r506_right = r504__right - r504_fine;
                var r506_mid = r506_right - r504_rinner + r441_O;
                r506_currentGlyph.include(r441_dispiro(r441_widths.rhs(r504_wide), r441_flat(r504_left, r504_wide, r441_heading(r441_Rightward)), r441_curl(r504_m1, r504_wide, r441_heading(r441_Rightward)), r441_archv(8), r441_g4(r506_right, r504_wide + r504_rinner - r441_O / 2, r441_widths.heading(0, r504_fine, {
                    "x": -r441_HVContrast,
                    "y": (r504_wide - r504_fine) / (r504_wide + r504_rinner * 2 - r441_O)
                })), r441_arcvh(8), r441_g4.left.mid(r506_mid, r504_wide + r504_rinner * 2 - r441_O, r441_heading(r441_Leftward)), r441_quadControls((r504_x1 - r506_mid) / (r504_x2 - r506_mid), 0, 8), r441_g4(r504_x2, r504_y2)));
                return void 0;
            });
        };
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r509_t0, _r509_t1;
            return {
                "nShoulder": r441_nShoulder
            };
        });
        var r441_nShoulder = (function () {
            var r512_knots, r512_shape, r512_mask, r512_earlessCorner, r512_earlessRounded;
            var r512_exports = {};
            r512_exports.knots = r512_knots = function () {
                var _r521_t5;
                var _r521_t6 = arguments;
                var r521_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r521_t6, 0);
                var _r521_t0 = [];
                var _r521_t1 = 0;
                while (_r521_t1 < r521_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r521_xn$flexarguments$2Lrc7uIe5[_r521_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r521_t0.push(r521_xn$flexarguments$2Lrc7uIe5[_r521_t1]);
                    _r521_t1 = _r521_t1 + 1;
                }
                var _r521_t2 = r521_xn$flexarguments$2Lrc7uIe5;
                var _r521_t3 = _r521_t2.length;
                var _r521_t4 = 0;
                while (_r521_t4 < _r521_t3) {
                    _r521_t1 = _r521_t2[_r521_t4];
                    if (_r521_t1 && _r521_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r521_t1.left === "left") r521_left = _r521_t1.right;
                    if (_r521_t1 && _r521_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r521_t1.left === "right") r521_right = _r521_t1.right;
                    if (_r521_t1 && _r521_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r521_t1.left === "fine") r521_fine = _r521_t1.right;
                    if (_r521_t1 && _r521_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r521_t1.left === "top") r521_top = _r521_t1.right;
                    if (_r521_t1 && _r521_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r521_t1.left === "bottom") r521_bottom = _r521_t1.right;
                    if (_r521_t1 && _r521_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r521_t1.left === "ada") r521_ada = _r521_t1.right;
                    if (_r521_t1 && _r521_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r521_t1.left === "adb") r521_adb = _r521_t1.right;
                    if (_r521_t1 && _r521_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r521_t1.left === "stroke") r521_stroke = _r521_t1.right;
                    if (_r521_t1 && _r521_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r521_t1.left === "fMask") r521_fMask = _r521_t1.right;
                    if (_r521_t1 && _r521_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r521_t1.left === "leftY0") r521_leftY0 = _r521_t1.right;
                    _r521_t4 = _r521_t4 + 1;
                }
                var r521_left = r1_fallback(r521_left, _r521_t0[0]);
                var r521_right = r1_fallback(r521_right, _r521_t0[1]);
                var r521_fine = r1_fallback(r521_fine, _r521_t0[2], r441_ShoulderFine);
                var r521_top = r1_fallback(r521_top, _r521_t0[3], r441_XH);
                var r521_bottom = r1_fallback(r521_bottom, _r521_t0[4], 0);
                var r521_ada = r1_fallback(r521_ada, _r521_t0[5], r441_SmallArchDepthA);
                var r521_adb = r1_fallback(r521_adb, _r521_t0[6], r441_SmallArchDepthB);
                var r521_stroke = r1_fallback(r521_stroke, _r521_t0[7], r441_Stroke);
                var r521_fMask = r1_fallback(r521_fMask, _r521_t0[8], false);
                var r521_leftY0 = r1_fallback(r521_leftY0, _r521_t0[9], r521_top - r521_ada - r441_TINY);
                return [r441_flat(r521_left - r441_HSwToV(r521_fine), r521_leftY0, r441_widths.rhs(r521_fine)), r441_curl(r521_left - r441_HSwToV(r521_fine), Math.max(r521_top - r521_ada, r521_leftY0 + r441_TINY)), r441_Arch.rhs(r521_top, new r441_xn$NamedParameterPair$2Lrc9b("sw", r521_stroke), new r441_xn$NamedParameterPair$2Lrc9b("swBefore", r521_fine)), r441_flat(r521_right, Math.max(r521_top - r521_adb, r521_bottom + r441_TINY), r441_widths.rhs(r521_stroke)), (r521_fMask ? r441_corner : r441_curl)(r521_right, r521_bottom, r441_widths.rhs.heading(r521_stroke, r441_Downward)), !r521_fMask ? [] : [r441_corner(r521_left, r521_bottom)]];
            };
            r512_exports.shape = r512_shape = function () {
                var _r528_t0;
                var _r528_t1 = arguments;
                var r528_a = Array.prototype.slice.call(_r528_t1, 0);
                return r441_dispiro(r512_knots.apply(null, r528_a));
            };
            r512_exports.mask = r512_mask = function () {
                var _r530_t0;
                var _r530_t1 = arguments;
                var r530_a = Array.prototype.slice.call(_r530_t1, 0);
                return r441_xn$spirooutline$1aao(r512_knots.apply(null, r530_a.concat([new r441_xn$NamedParameterPair$2Lrc9b("fMask", true)])));
            };
            r512_exports.earlessCorner = r512_earlessCorner = function () {
                var _r534_t5;
                var _r534_t6 = arguments;
                var r534_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r534_t6, 0);
                var _r534_t0 = [];
                var _r534_t1 = 0;
                while (_r534_t1 < r534_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r534_xn$flexarguments$2Lrc7uIe5[_r534_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r534_t0.push(r534_xn$flexarguments$2Lrc7uIe5[_r534_t1]);
                    _r534_t1 = _r534_t1 + 1;
                }
                var _r534_t2 = r534_xn$flexarguments$2Lrc7uIe5;
                var _r534_t3 = _r534_t2.length;
                var _r534_t4 = 0;
                while (_r534_t4 < _r534_t3) {
                    _r534_t1 = _r534_t2[_r534_t4];
                    if (_r534_t1 && _r534_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r534_t1.left === "left") r534_left = _r534_t1.right;
                    if (_r534_t1 && _r534_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r534_t1.left === "right") r534_right = _r534_t1.right;
                    if (_r534_t1 && _r534_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r534_t1.left === "top") r534_top = _r534_t1.right;
                    if (_r534_t1 && _r534_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r534_t1.left === "bottom") r534_bottom = _r534_t1.right;
                    if (_r534_t1 && _r534_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r534_t1.left === "ada") r534_ada = _r534_t1.right;
                    if (_r534_t1 && _r534_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r534_t1.left === "adb") r534_adb = _r534_t1.right;
                    if (_r534_t1 && _r534_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r534_t1.left === "stroke") r534_stroke = _r534_t1.right;
                    if (_r534_t1 && _r534_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r534_t1.left === "rise") r534_rise = _r534_t1.right;
                    _r534_t4 = _r534_t4 + 1;
                }
                var r534_left = r1_fallback(r534_left, _r534_t0[0]);
                var r534_right = r1_fallback(r534_right, _r534_t0[1]);
                var r534_top = r1_fallback(r534_top, _r534_t0[2], r441_XH);
                var r534_bottom = r1_fallback(r534_bottom, _r534_t0[3], 0);
                var r534_ada = r1_fallback(r534_ada, _r534_t0[4], r441_SmallArchDepthA);
                var r534_adb = r1_fallback(r534_adb, _r534_t0[5], r441_SmallArchDepthB);
                var r534_stroke = r1_fallback(r534_stroke, _r534_t0[6], r441_Stroke);
                var r534_rise = r1_fallback(r534_rise, _r534_t0[7], r441_DToothlessRise);
                return r441_dispiro(r441_widths.rhs(r534_stroke), r534_rise ? [r441_g4(r534_left, r534_top - r534_rise), r441_Arch.rhs(r534_top, new r441_xn$NamedParameterPair$2Lrc9b("sw", r534_stroke), new r441_xn$NamedParameterPair$2Lrc9b("blendPre", []))] : [r441_flat(r534_left + r441_TINY, r534_top, r441_heading(r441_Rightward)), r441_curl(r441_Arch["adjust-x"].top(r1_mix(r534_left, r534_right, 0.5), new r441_xn$NamedParameterPair$2Lrc9b("sw", r534_stroke)), r534_top), r441_archv()], r441_flat(r534_right, Math.max(r534_top - r534_adb, r534_bottom + r441_TINY)), r441_curl(r534_right, r534_bottom, r441_heading(r441_Downward)));
            };
            r512_exports.earlessRounded = r512_earlessRounded = function () {
                var _r543_t5;
                var _r543_t6 = arguments;
                var r543_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r543_t6, 0);
                var _r543_t0 = [];
                var _r543_t1 = 0;
                while (_r543_t1 < r543_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r543_xn$flexarguments$2Lrc7uIe5[_r543_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r543_t0.push(r543_xn$flexarguments$2Lrc7uIe5[_r543_t1]);
                    _r543_t1 = _r543_t1 + 1;
                }
                var _r543_t2 = r543_xn$flexarguments$2Lrc7uIe5;
                var _r543_t3 = _r543_t2.length;
                var _r543_t4 = 0;
                while (_r543_t4 < _r543_t3) {
                    _r543_t1 = _r543_t2[_r543_t4];
                    if (_r543_t1 && _r543_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r543_t1.left === "left") r543_left = _r543_t1.right;
                    if (_r543_t1 && _r543_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r543_t1.left === "right") r543_right = _r543_t1.right;
                    if (_r543_t1 && _r543_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r543_t1.left === "top") r543_top = _r543_t1.right;
                    if (_r543_t1 && _r543_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r543_t1.left === "bottom") r543_bottom = _r543_t1.right;
                    if (_r543_t1 && _r543_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r543_t1.left === "ada") r543_ada = _r543_t1.right;
                    if (_r543_t1 && _r543_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r543_t1.left === "adb") r543_adb = _r543_t1.right;
                    if (_r543_t1 && _r543_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r543_t1.left === "stroke") r543_stroke = _r543_t1.right;
                    if (_r543_t1 && _r543_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r543_t1.left === "leftY0") r543_leftY0 = _r543_t1.right;
                    _r543_t4 = _r543_t4 + 1;
                }
                var r543_left = r1_fallback(r543_left, _r543_t0[0]);
                var r543_right = r1_fallback(r543_right, _r543_t0[1]);
                var r543_top = r1_fallback(r543_top, _r543_t0[2], r441_XH);
                var r543_bottom = r1_fallback(r543_bottom, _r543_t0[3], 0);
                var r543_ada = r1_fallback(r543_ada, _r543_t0[4], r441_SmallArchDepthA);
                var r543_adb = r1_fallback(r543_adb, _r543_t0[5], r441_SmallArchDepthB);
                var r543_stroke = r1_fallback(r543_stroke, _r543_t0[6], r441_Stroke);
                var r543_leftY0 = r1_fallback(r543_leftY0, _r543_t0[7], r543_bottom);
                return r441_dispiro(r441_flat(r543_left, r543_leftY0, r441_widths.rhs.heading(r543_stroke, r441_Upward)), r441_curl(r543_left, Math.max(r543_top - r543_ada, r543_leftY0 + r441_TINY)), r441_Arch.rhs(r543_top, new r441_xn$NamedParameterPair$2Lrc9b("sw", r543_stroke)), r441_flat(r543_right, Math.max(r543_top - r543_adb, r543_bottom + r441_TINY)), r441_curl(r543_right, r543_bottom, r441_heading(r441_Downward)));
            };
            return r512_exports;
        })();
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r549_t0, _r549_t1;
            return {
                "uBowl": r441_uBowl
            };
        });
        var r441_uBowl = (function () {
            var r552_knots, r552_shape, r552_mask, r552_toothlessCorner, r552_toothlessRounded;
            var r552_exports = {};
            r552_exports.knots = r552_knots = function () {
                var _r561_t5;
                var _r561_t6 = arguments;
                var r561_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r561_t6, 0);
                var _r561_t0 = [];
                var _r561_t1 = 0;
                while (_r561_t1 < r561_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r561_xn$flexarguments$2Lrc7uIe5[_r561_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r561_t0.push(r561_xn$flexarguments$2Lrc7uIe5[_r561_t1]);
                    _r561_t1 = _r561_t1 + 1;
                }
                var _r561_t2 = r561_xn$flexarguments$2Lrc7uIe5;
                var _r561_t3 = _r561_t2.length;
                var _r561_t4 = 0;
                while (_r561_t4 < _r561_t3) {
                    _r561_t1 = _r561_t2[_r561_t4];
                    if (_r561_t1 && _r561_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r561_t1.left === "left") r561_left = _r561_t1.right;
                    if (_r561_t1 && _r561_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r561_t1.left === "right") r561_right = _r561_t1.right;
                    if (_r561_t1 && _r561_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r561_t1.left === "fine") r561_fine = _r561_t1.right;
                    if (_r561_t1 && _r561_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r561_t1.left === "top") r561_top = _r561_t1.right;
                    if (_r561_t1 && _r561_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r561_t1.left === "bottom") r561_bottom = _r561_t1.right;
                    if (_r561_t1 && _r561_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r561_t1.left === "ada") r561_ada = _r561_t1.right;
                    if (_r561_t1 && _r561_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r561_t1.left === "adb") r561_adb = _r561_t1.right;
                    if (_r561_t1 && _r561_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r561_t1.left === "stroke") r561_stroke = _r561_t1.right;
                    if (_r561_t1 && _r561_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r561_t1.left === "fMask") r561_fMask = _r561_t1.right;
                    if (_r561_t1 && _r561_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r561_t1.left === "rightY0") r561_rightY0 = _r561_t1.right;
                    _r561_t4 = _r561_t4 + 1;
                }
                var r561_left = r1_fallback(r561_left, _r561_t0[0]);
                var r561_right = r1_fallback(r561_right, _r561_t0[1]);
                var r561_fine = r1_fallback(r561_fine, _r561_t0[2], r441_ShoulderFine);
                var r561_top = r1_fallback(r561_top, _r561_t0[3], r441_XH);
                var r561_bottom = r1_fallback(r561_bottom, _r561_t0[4], 0);
                var r561_ada = r1_fallback(r561_ada, _r561_t0[5], r441_SmallArchDepthA);
                var r561_adb = r1_fallback(r561_adb, _r561_t0[6], r441_SmallArchDepthB);
                var r561_stroke = r1_fallback(r561_stroke, _r561_t0[7], r441_Stroke);
                var r561_fMask = r1_fallback(r561_fMask, _r561_t0[8], false);
                var r561_rightY0 = r1_fallback(r561_rightY0, _r561_t0[9], r561_bottom + r561_ada + r441_TINY);
                return [r441_flat(r561_right + r441_HSwToV(r561_fine), r561_rightY0, r441_widths.rhs(r561_fine)), r441_curl(r561_right + r441_HSwToV(r561_fine), Math.min(r561_bottom + r561_ada, r561_rightY0 - r441_TINY)), r441_Arch.rhs(r561_bottom, new r441_xn$NamedParameterPair$2Lrc9b("sw", r561_stroke), new r441_xn$NamedParameterPair$2Lrc9b("swBefore", r561_fine)), r441_flat(r561_left, Math.min(r561_bottom + r561_adb, r561_top - r441_TINY), r441_widths.rhs(r561_stroke)), (r561_fMask ? r441_corner : r441_curl)(r561_left, r561_top, r441_widths.rhs.heading(r561_stroke, r441_Upward)), r561_fMask ? [r441_corner(r561_right, r561_top)] : []];
            };
            r552_exports.shape = r552_shape = function () {
                var _r568_t0;
                var _r568_t1 = arguments;
                var r568_a = Array.prototype.slice.call(_r568_t1, 0);
                return r441_dispiro(r552_knots.apply(null, r568_a));
            };
            r552_exports.mask = r552_mask = function () {
                var _r570_t0;
                var _r570_t1 = arguments;
                var r570_a = Array.prototype.slice.call(_r570_t1, 0);
                return r441_xn$spirooutline$1aao(r552_knots.apply(null, r570_a.concat([new r441_xn$NamedParameterPair$2Lrc9b("fMask", true)])));
            };
            r552_exports.toothlessCorner = r552_toothlessCorner = function () {
                var _r574_t5;
                var _r574_t6 = arguments;
                var r574_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r574_t6, 0);
                var _r574_t0 = [];
                var _r574_t1 = 0;
                while (_r574_t1 < r574_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r574_xn$flexarguments$2Lrc7uIe5[_r574_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r574_t0.push(r574_xn$flexarguments$2Lrc7uIe5[_r574_t1]);
                    _r574_t1 = _r574_t1 + 1;
                }
                var _r574_t2 = r574_xn$flexarguments$2Lrc7uIe5;
                var _r574_t3 = _r574_t2.length;
                var _r574_t4 = 0;
                while (_r574_t4 < _r574_t3) {
                    _r574_t1 = _r574_t2[_r574_t4];
                    if (_r574_t1 && _r574_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r574_t1.left === "left") r574_left = _r574_t1.right;
                    if (_r574_t1 && _r574_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r574_t1.left === "right") r574_right = _r574_t1.right;
                    if (_r574_t1 && _r574_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r574_t1.left === "top") r574_top = _r574_t1.right;
                    if (_r574_t1 && _r574_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r574_t1.left === "bottom") r574_bottom = _r574_t1.right;
                    if (_r574_t1 && _r574_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r574_t1.left === "ada") r574_ada = _r574_t1.right;
                    if (_r574_t1 && _r574_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r574_t1.left === "adb") r574_adb = _r574_t1.right;
                    if (_r574_t1 && _r574_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r574_t1.left === "stroke") r574_stroke = _r574_t1.right;
                    if (_r574_t1 && _r574_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r574_t1.left === "rise") r574_rise = _r574_t1.right;
                    _r574_t4 = _r574_t4 + 1;
                }
                var r574_left = r1_fallback(r574_left, _r574_t0[0]);
                var r574_right = r1_fallback(r574_right, _r574_t0[1]);
                var r574_top = r1_fallback(r574_top, _r574_t0[2], r441_XH);
                var r574_bottom = r1_fallback(r574_bottom, _r574_t0[3], 0);
                var r574_ada = r1_fallback(r574_ada, _r574_t0[4], r441_SmallArchDepthA);
                var r574_adb = r1_fallback(r574_adb, _r574_t0[5], r441_SmallArchDepthB);
                var r574_stroke = r1_fallback(r574_stroke, _r574_t0[6], r441_Stroke);
                var r574_rise = r1_fallback(r574_rise, _r574_t0[7], r441_DToothlessRise);
                return r441_dispiro(r441_flat(r574_left, r574_top, r441_widths.lhs.heading(r574_stroke, r441_Downward)), r441_curl(r574_left, Math.min(r574_bottom + r574_adb, r574_top - r441_TINY)), r574_rise ? [r441_Arch.lhs(r574_bottom, new r441_xn$NamedParameterPair$2Lrc9b("sw", r574_stroke), new r441_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r441_g4(r574_right, r574_bottom + r574_rise, r441_widths.lhs(r574_stroke))] : [r441_arcvh(), r441_flat(r441_Arch["adjust-x"].bot(r1_mix(r574_left, r574_right, 0.5), new r441_xn$NamedParameterPair$2Lrc9b("sw", r574_stroke)), r574_bottom), r441_curl(r574_right - r441_TINY, r574_bottom, r441_heading(r441_Rightward))]);
            };
            r552_exports.toothlessRounded = r552_toothlessRounded = function () {
                var _r583_t5;
                var _r583_t6 = arguments;
                var r583_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r583_t6, 0);
                var _r583_t0 = [];
                var _r583_t1 = 0;
                while (_r583_t1 < r583_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r583_xn$flexarguments$2Lrc7uIe5[_r583_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r583_t0.push(r583_xn$flexarguments$2Lrc7uIe5[_r583_t1]);
                    _r583_t1 = _r583_t1 + 1;
                }
                var _r583_t2 = r583_xn$flexarguments$2Lrc7uIe5;
                var _r583_t3 = _r583_t2.length;
                var _r583_t4 = 0;
                while (_r583_t4 < _r583_t3) {
                    _r583_t1 = _r583_t2[_r583_t4];
                    if (_r583_t1 && _r583_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r583_t1.left === "left") r583_left = _r583_t1.right;
                    if (_r583_t1 && _r583_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r583_t1.left === "right") r583_right = _r583_t1.right;
                    if (_r583_t1 && _r583_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r583_t1.left === "top") r583_top = _r583_t1.right;
                    if (_r583_t1 && _r583_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r583_t1.left === "bottom") r583_bottom = _r583_t1.right;
                    if (_r583_t1 && _r583_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r583_t1.left === "ada") r583_ada = _r583_t1.right;
                    if (_r583_t1 && _r583_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r583_t1.left === "adb") r583_adb = _r583_t1.right;
                    if (_r583_t1 && _r583_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r583_t1.left === "stroke") r583_stroke = _r583_t1.right;
                    if (_r583_t1 && _r583_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r583_t1.left === "rightY0") r583_rightY0 = _r583_t1.right;
                    _r583_t4 = _r583_t4 + 1;
                }
                var r583_left = r1_fallback(r583_left, _r583_t0[0]);
                var r583_right = r1_fallback(r583_right, _r583_t0[1]);
                var r583_top = r1_fallback(r583_top, _r583_t0[2], r441_XH);
                var r583_bottom = r1_fallback(r583_bottom, _r583_t0[3], 0);
                var r583_ada = r1_fallback(r583_ada, _r583_t0[4], r441_SmallArchDepthA);
                var r583_adb = r1_fallback(r583_adb, _r583_t0[5], r441_SmallArchDepthB);
                var r583_stroke = r1_fallback(r583_stroke, _r583_t0[6], r441_Stroke);
                var r583_rightY0 = r1_fallback(r583_rightY0, _r583_t0[7], r583_top);
                return r441_dispiro(r441_flat(r583_left, r583_top, r441_widths.lhs.heading(r583_stroke, r441_Downward)), r441_curl(r583_left, Math.min(r583_bottom + r583_adb, r583_top - r441_TINY)), r441_Arch.lhs(r583_bottom, new r441_xn$NamedParameterPair$2Lrc9b("sw", r583_stroke)), r441_flat(r583_right, Math.min(r583_bottom + r583_ada, r583_rightY0 - r441_TINY)), r441_curl(r583_right, r583_rightY0, r441_heading(r441_Upward)));
            };
            return r552_exports;
        })();
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r589_t0, _r589_t1;
            return {
                "OBarLeft": r441_OBarLeft
            };
        });
        var r441_OBarLeft = (function () {
            var r592_arcStart, r592_arcEnd, r592_shape, r592_toothlessCorner, r592_toothlessRounded, r592_earlessCorner, r592_earlessRounded;
            var r592_exports = {};
            var r592_kSkewShift = 0.5;
            r592_exports.arcStart = r592_arcStart = function () {
                var _r601_t5;
                var _r601_t6 = arguments;
                var r601_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r601_t6, 0);
                var _r601_t0 = [];
                var _r601_t1 = 0;
                while (_r601_t1 < r601_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r601_xn$flexarguments$2Lrc7uIe5[_r601_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r601_t0.push(r601_xn$flexarguments$2Lrc7uIe5[_r601_t1]);
                    _r601_t1 = _r601_t1 + 1;
                }
                var _r601_t2 = r601_xn$flexarguments$2Lrc7uIe5;
                var _r601_t3 = _r601_t2.length;
                var _r601_t4 = 0;
                while (_r601_t4 < _r601_t3) {
                    _r601_t1 = _r601_t2[_r601_t4];
                    if (_r601_t1 && _r601_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r601_t1.left === "top") r601_top = _r601_t1.right;
                    if (_r601_t1 && _r601_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r601_t1.left === "left") r601_left = _r601_t1.right;
                    if (_r601_t1 && _r601_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r601_t1.left === "right") r601_right = _r601_t1.right;
                    if (_r601_t1 && _r601_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r601_t1.left === "sw") r601_sw = _r601_t1.right;
                    if (_r601_t1 && _r601_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r601_t1.left === "fine") r601_fine = _r601_t1.right;
                    if (_r601_t1 && _r601_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r601_t1.left === "ada") r601_ada = _r601_t1.right;
                    if (_r601_t1 && _r601_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r601_t1.left === "adb") r601_adb = _r601_t1.right;
                    if (_r601_t1 && _r601_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r601_t1.left === "ystart") r601_ystart = _r601_t1.right;
                    _r601_t4 = _r601_t4 + 1;
                }
                var r601_top = r1_fallback(r601_top, _r601_t0[0], r441_XH);
                var r601_left = r1_fallback(r601_left, _r601_t0[1], r441_SB);
                var r601_right = r1_fallback(r601_right, _r601_t0[2], r441_RightSB);
                var r601_sw = r1_fallback(r601_sw, _r601_t0[3], r441_Stroke);
                var r601_fine = r1_fallback(r601_fine, _r601_t0[4], r441_ShoulderFine);
                var r601_ada = r1_fallback(r601_ada, _r601_t0[5], r441_SmallArchDepthA);
                var r601_adb = r1_fallback(r601_adb, _r601_t0[6], r441_SmallArchDepthB);
                var r601_ystart = r1_fallback(r601_ystart, _r601_t0[7], r601_top - r601_ada - r441_TINY);
                var r601_xstart = r601_left + r441_HSwToV(r601_sw - r601_fine);
                return [r441_flat(r601_xstart, r601_ystart, r441_widths.rhs(r601_fine)), r441_curl(r601_xstart, Math.max(r601_top - r601_ada, r601_ystart + r441_TINY)), r441_Arch.rhs(r601_top, new r441_xn$NamedParameterPair$2Lrc9b("sw", r601_sw), new r441_xn$NamedParameterPair$2Lrc9b("swBefore", r601_fine))];
            };
            r592_exports.arcEnd = r592_arcEnd = function () {
                var _r609_t5;
                var _r609_t6 = arguments;
                var r609_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r609_t6, 0);
                var _r609_t0 = [];
                var _r609_t1 = 0;
                while (_r609_t1 < r609_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r609_xn$flexarguments$2Lrc7uIe5[_r609_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r609_t0.push(r609_xn$flexarguments$2Lrc7uIe5[_r609_t1]);
                    _r609_t1 = _r609_t1 + 1;
                }
                var _r609_t2 = r609_xn$flexarguments$2Lrc7uIe5;
                var _r609_t3 = _r609_t2.length;
                var _r609_t4 = 0;
                while (_r609_t4 < _r609_t3) {
                    _r609_t1 = _r609_t2[_r609_t4];
                    if (_r609_t1 && _r609_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r609_t1.left === "bot") r609_bot = _r609_t1.right;
                    if (_r609_t1 && _r609_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r609_t1.left === "left") r609_left = _r609_t1.right;
                    if (_r609_t1 && _r609_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r609_t1.left === "right") r609_right = _r609_t1.right;
                    if (_r609_t1 && _r609_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r609_t1.left === "sw") r609_sw = _r609_t1.right;
                    if (_r609_t1 && _r609_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r609_t1.left === "fine") r609_fine = _r609_t1.right;
                    if (_r609_t1 && _r609_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r609_t1.left === "ada") r609_ada = _r609_t1.right;
                    if (_r609_t1 && _r609_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r609_t1.left === "adb") r609_adb = _r609_t1.right;
                    if (_r609_t1 && _r609_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r609_t1.left === "yend") r609_yend = _r609_t1.right;
                    _r609_t4 = _r609_t4 + 1;
                }
                var r609_bot = r1_fallback(r609_bot, _r609_t0[0], 0);
                var r609_left = r1_fallback(r609_left, _r609_t0[1], r441_SB);
                var r609_right = r1_fallback(r609_right, _r609_t0[2], r441_RightSB);
                var r609_sw = r1_fallback(r609_sw, _r609_t0[3], r441_Stroke);
                var r609_fine = r1_fallback(r609_fine, _r609_t0[4], r441_ShoulderFine);
                var r609_ada = r1_fallback(r609_ada, _r609_t0[5], r441_SmallArchDepthA);
                var r609_adb = r1_fallback(r609_adb, _r609_t0[6], r441_SmallArchDepthB);
                var r609_yend = r1_fallback(r609_yend, _r609_t0[7], r609_bot + r609_adb + r441_TINY);
                var r609_xend = r609_left + r441_HSwToV(r609_sw - r609_fine);
                return [r441_Arch.rhs(r609_bot, new r441_xn$NamedParameterPair$2Lrc9b("sw", r609_sw), new r441_xn$NamedParameterPair$2Lrc9b("swAfter", r609_fine)), r441_flat(r609_xend, Math.min(r609_bot + r609_adb, r609_yend - r441_TINY), r441_widths.rhs(r609_fine)), r441_curl(r609_xend, r609_yend)];
            };
            r592_exports.shape = r592_shape = function () {
                var _r617_t5;
                var _r617_t6 = arguments;
                var r617_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r617_t6, 0);
                var _r617_t0 = [];
                var _r617_t1 = 0;
                while (_r617_t1 < r617_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r617_xn$flexarguments$2Lrc7uIe5[_r617_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r617_t0.push(r617_xn$flexarguments$2Lrc7uIe5[_r617_t1]);
                    _r617_t1 = _r617_t1 + 1;
                }
                var _r617_t2 = r617_xn$flexarguments$2Lrc7uIe5;
                var _r617_t3 = _r617_t2.length;
                var _r617_t4 = 0;
                while (_r617_t4 < _r617_t3) {
                    _r617_t1 = _r617_t2[_r617_t4];
                    if (_r617_t1 && _r617_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r617_t1.left === "top") r617_top = _r617_t1.right;
                    if (_r617_t1 && _r617_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r617_t1.left === "bot") r617_bot = _r617_t1.right;
                    if (_r617_t1 && _r617_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r617_t1.left === "left") r617_left = _r617_t1.right;
                    if (_r617_t1 && _r617_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r617_t1.left === "right") r617_right = _r617_t1.right;
                    if (_r617_t1 && _r617_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r617_t1.left === "sw") r617_sw = _r617_t1.right;
                    if (_r617_t1 && _r617_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r617_t1.left === "fine") r617_fine = _r617_t1.right;
                    if (_r617_t1 && _r617_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r617_t1.left === "ada") r617_ada = _r617_t1.right;
                    if (_r617_t1 && _r617_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r617_t1.left === "adb") r617_adb = _r617_t1.right;
                    _r617_t4 = _r617_t4 + 1;
                }
                var r617_top = r1_fallback(r617_top, _r617_t0[0], r441_XH);
                var r617_bot = r1_fallback(r617_bot, _r617_t0[1], 0);
                var r617_left = r1_fallback(r617_left, _r617_t0[2], r441_SB);
                var r617_right = r1_fallback(r617_right, _r617_t0[3], r441_RightSB);
                var r617_sw = r1_fallback(r617_sw, _r617_t0[4], r441_Stroke);
                var r617_fine = r1_fallback(r617_fine, _r617_t0[5], r441_ShoulderFine);
                var r617_ada = r1_fallback(r617_ada, _r617_t0[6], r441_SmallArchDepthA);
                var r617_adb = r1_fallback(r617_adb, _r617_t0[7], r441_SmallArchDepthB);
                return r441_dispiro(r441_widths.lhs(r617_fine), r441_flatside.ld(r617_left + r441_HSwToV(r617_sw - r617_fine), r617_bot, r617_top, r617_ada, r617_adb, 0), r441_Arch.lhs(r617_bot, new r441_xn$NamedParameterPair$2Lrc9b("sw", r617_sw), new r441_xn$NamedParameterPair$2Lrc9b("swBefore", r617_fine)), r441_flatside.ru(r617_right, r617_bot, r617_top, r617_ada, r617_adb), r441_Arch.lhs(r617_top, new r441_xn$NamedParameterPair$2Lrc9b("sw", r617_sw), new r441_xn$NamedParameterPair$2Lrc9b("swAfter", r617_fine)), r441_flatside.ld(r617_left + r441_HSwToV(r617_sw - r617_fine), r617_bot, r617_top, r617_ada, r617_adb, 0, r441_widths.lhs(r617_fine)));
            };
            r592_exports.toothlessCorner = r592_toothlessCorner = function () {
                var _r627_t5;
                var _r627_t6 = arguments;
                var r627_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r627_t6, 0);
                var _r627_t0 = [];
                var _r627_t1 = 0;
                while (_r627_t1 < r627_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r627_xn$flexarguments$2Lrc7uIe5[_r627_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r627_t0.push(r627_xn$flexarguments$2Lrc7uIe5[_r627_t1]);
                    _r627_t1 = _r627_t1 + 1;
                }
                var _r627_t2 = r627_xn$flexarguments$2Lrc7uIe5;
                var _r627_t3 = _r627_t2.length;
                var _r627_t4 = 0;
                while (_r627_t4 < _r627_t3) {
                    _r627_t1 = _r627_t2[_r627_t4];
                    if (_r627_t1 && _r627_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r627_t1.left === "top") r627_top = _r627_t1.right;
                    if (_r627_t1 && _r627_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r627_t1.left === "bot") r627_bot = _r627_t1.right;
                    if (_r627_t1 && _r627_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r627_t1.left === "left") r627_left = _r627_t1.right;
                    if (_r627_t1 && _r627_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r627_t1.left === "right") r627_right = _r627_t1.right;
                    if (_r627_t1 && _r627_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r627_t1.left === "rise") r627_rise = _r627_t1.right;
                    if (_r627_t1 && _r627_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r627_t1.left === "sw") r627_sw = _r627_t1.right;
                    if (_r627_t1 && _r627_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r627_t1.left === "fine") r627_fine = _r627_t1.right;
                    if (_r627_t1 && _r627_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r627_t1.left === "ada") r627_ada = _r627_t1.right;
                    if (_r627_t1 && _r627_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r627_t1.left === "adb") r627_adb = _r627_t1.right;
                    if (_r627_t1 && _r627_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r627_t1.left === "ystart") r627_ystart = _r627_t1.right;
                    _r627_t4 = _r627_t4 + 1;
                }
                var r627_top = r1_fallback(r627_top, _r627_t0[0], r441_XH);
                var r627_bot = r1_fallback(r627_bot, _r627_t0[1], 0);
                var r627_left = r1_fallback(r627_left, _r627_t0[2], r441_SB);
                var r627_right = r1_fallback(r627_right, _r627_t0[3], r441_RightSB);
                var r627_rise = r1_fallback(r627_rise, _r627_t0[4], r441_DToothlessRise);
                var r627_sw = r1_fallback(r627_sw, _r627_t0[5], r441_Stroke);
                var r627_fine = r1_fallback(r627_fine, _r627_t0[6], r441_ShoulderFine);
                var r627_ada = r1_fallback(r627_ada, _r627_t0[7], r441_SmallArchDepthA);
                var r627_adb = r1_fallback(r627_adb, _r627_t0[8], r441_SmallArchDepthB);
                var r627_ystart = r1_fallback(r627_ystart, _r627_t0[9], r627_top - r627_ada - r441_TINY);
                return r441_dispiro(r441_widths.lhs(r627_sw), r627_rise ? [r441_g4(r627_left, r627_bot + r627_rise), r441_Arch.lhs(r627_bot, new r441_xn$NamedParameterPair$2Lrc9b("sw", r627_sw), new r441_xn$NamedParameterPair$2Lrc9b("blendPre", []))] : [r441_flat(r627_left + r441_TINY, r627_bot, r441_heading(r441_Rightward)), r441_curl(r441_Arch["adjust-x"].bot(r1_mix(r627_left, r627_right, 0.5), new r441_xn$NamedParameterPair$2Lrc9b("sw", r627_sw)), r627_bot), r441_archv()], r441_flatside.ru(r627_right, r627_bot, r627_top, r627_ada, r627_adb), r441_Arch.lhs(r627_top, new r441_xn$NamedParameterPair$2Lrc9b("sw", r627_sw), new r441_xn$NamedParameterPair$2Lrc9b("swAfter", r627_fine)), r441_flat(r627_left + r441_HSwToV(r627_sw - r627_fine), Math.max(r627_top - r627_ada, r627_ystart + r441_TINY), r441_widths.lhs(r627_fine)), r441_curl(r627_left + r441_HSwToV(r627_sw - r627_fine), r627_ystart, r441_widths.lhs(r627_fine)));
            };
            r592_exports.toothlessRounded = r592_toothlessRounded = function () {
                var _r638_t5;
                var _r638_t6 = arguments;
                var r638_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r638_t6, 0);
                var _r638_t0 = [];
                var _r638_t1 = 0;
                while (_r638_t1 < r638_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r638_xn$flexarguments$2Lrc7uIe5[_r638_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r638_t0.push(r638_xn$flexarguments$2Lrc7uIe5[_r638_t1]);
                    _r638_t1 = _r638_t1 + 1;
                }
                var _r638_t2 = r638_xn$flexarguments$2Lrc7uIe5;
                var _r638_t3 = _r638_t2.length;
                var _r638_t4 = 0;
                while (_r638_t4 < _r638_t3) {
                    _r638_t1 = _r638_t2[_r638_t4];
                    if (_r638_t1 && _r638_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r638_t1.left === "top") r638_top = _r638_t1.right;
                    if (_r638_t1 && _r638_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r638_t1.left === "bot") r638_bot = _r638_t1.right;
                    if (_r638_t1 && _r638_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r638_t1.left === "left") r638_left = _r638_t1.right;
                    if (_r638_t1 && _r638_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r638_t1.left === "right") r638_right = _r638_t1.right;
                    if (_r638_t1 && _r638_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r638_t1.left === "yTerminal") r638_yTerminal = _r638_t1.right;
                    if (_r638_t1 && _r638_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r638_t1.left === "sw") r638_sw = _r638_t1.right;
                    if (_r638_t1 && _r638_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r638_t1.left === "fine") r638_fine = _r638_t1.right;
                    if (_r638_t1 && _r638_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r638_t1.left === "ada") r638_ada = _r638_t1.right;
                    if (_r638_t1 && _r638_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r638_t1.left === "adb") r638_adb = _r638_t1.right;
                    if (_r638_t1 && _r638_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r638_t1.left === "ystart") r638_ystart = _r638_t1.right;
                    _r638_t4 = _r638_t4 + 1;
                }
                var r638_top = r1_fallback(r638_top, _r638_t0[0], r441_XH);
                var r638_bot = r1_fallback(r638_bot, _r638_t0[1], 0);
                var r638_left = r1_fallback(r638_left, _r638_t0[2], r441_SB);
                var r638_right = r1_fallback(r638_right, _r638_t0[3], r441_RightSB);
                var r638_yTerminal = r1_fallback(r638_yTerminal, _r638_t0[4], r638_top);
                var r638_sw = r1_fallback(r638_sw, _r638_t0[5], r441_Stroke);
                var r638_fine = r1_fallback(r638_fine, _r638_t0[6], r441_ShoulderFine);
                var r638_ada = r1_fallback(r638_ada, _r638_t0[7], r441_SmallArchDepthA);
                var r638_adb = r1_fallback(r638_adb, _r638_t0[8], r441_SmallArchDepthB);
                var r638_ystart = r1_fallback(r638_ystart, _r638_t0[9], r638_top - r638_ada - r441_TINY);
                return r441_dispiro(r441_flat(r638_left, r638_yTerminal, r441_widths.lhs.heading(r638_sw, r441_Downward)), r441_curl(r638_left, Math.min(r638_bot + r638_adb, r638_yTerminal - r441_TINY)), r441_Arch.lhs(r638_bot, new r441_xn$NamedParameterPair$2Lrc9b("sw", r638_sw)), r441_flatside.ru(r638_right, r638_bot, r638_top, r638_ada, r638_adb), r441_Arch.lhs(r638_top, new r441_xn$NamedParameterPair$2Lrc9b("sw", r638_sw), new r441_xn$NamedParameterPair$2Lrc9b("swAfter", r638_fine)), r441_flat(r638_left + r441_HSwToV(r638_sw - r638_fine), Math.max(r638_top - r638_ada, r638_ystart + r441_TINY), r441_widths.lhs(r638_fine)), r441_curl(r638_left + r441_HSwToV(r638_sw - r638_fine), r638_ystart, r441_widths.lhs(r638_fine)));
            };
            r592_exports.earlessCorner = r592_earlessCorner = function () {
                var _r647_t5;
                var _r647_t6 = arguments;
                var r647_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r647_t6, 0);
                var _r647_t0 = [];
                var _r647_t1 = 0;
                while (_r647_t1 < r647_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r647_xn$flexarguments$2Lrc7uIe5[_r647_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r647_t0.push(r647_xn$flexarguments$2Lrc7uIe5[_r647_t1]);
                    _r647_t1 = _r647_t1 + 1;
                }
                var _r647_t2 = r647_xn$flexarguments$2Lrc7uIe5;
                var _r647_t3 = _r647_t2.length;
                var _r647_t4 = 0;
                while (_r647_t4 < _r647_t3) {
                    _r647_t1 = _r647_t2[_r647_t4];
                    if (_r647_t1 && _r647_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r647_t1.left === "top") r647_top = _r647_t1.right;
                    if (_r647_t1 && _r647_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r647_t1.left === "bot") r647_bot = _r647_t1.right;
                    if (_r647_t1 && _r647_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r647_t1.left === "left") r647_left = _r647_t1.right;
                    if (_r647_t1 && _r647_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r647_t1.left === "right") r647_right = _r647_t1.right;
                    if (_r647_t1 && _r647_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r647_t1.left === "rise") r647_rise = _r647_t1.right;
                    if (_r647_t1 && _r647_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r647_t1.left === "sw") r647_sw = _r647_t1.right;
                    if (_r647_t1 && _r647_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r647_t1.left === "fine") r647_fine = _r647_t1.right;
                    if (_r647_t1 && _r647_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r647_t1.left === "ada") r647_ada = _r647_t1.right;
                    if (_r647_t1 && _r647_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r647_t1.left === "adb") r647_adb = _r647_t1.right;
                    if (_r647_t1 && _r647_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r647_t1.left === "yend") r647_yend = _r647_t1.right;
                    _r647_t4 = _r647_t4 + 1;
                }
                var r647_top = r1_fallback(r647_top, _r647_t0[0], r441_XH);
                var r647_bot = r1_fallback(r647_bot, _r647_t0[1], 0);
                var r647_left = r1_fallback(r647_left, _r647_t0[2], r441_SB);
                var r647_right = r1_fallback(r647_right, _r647_t0[3], r441_RightSB);
                var r647_rise = r1_fallback(r647_rise, _r647_t0[4], r441_DToothlessRise);
                var r647_sw = r1_fallback(r647_sw, _r647_t0[5], r441_Stroke);
                var r647_fine = r1_fallback(r647_fine, _r647_t0[6], r441_ShoulderFine);
                var r647_ada = r1_fallback(r647_ada, _r647_t0[7], r441_SmallArchDepthA);
                var r647_adb = r1_fallback(r647_adb, _r647_t0[8], r441_SmallArchDepthB);
                var r647_yend = r1_fallback(r647_yend, _r647_t0[9], r647_bot + r647_adb + r441_TINY);
                return r441_dispiro(r441_flat(r647_left + r441_HSwToV(r647_sw - r647_fine), r647_yend, r441_widths.lhs(r647_fine)), r441_curl(r647_left + r441_HSwToV(r647_sw - r647_fine), Math.min(r647_bot + r647_adb, r647_yend - r441_TINY), r441_widths.lhs(r647_fine)), r441_Arch.lhs(r647_bot, new r441_xn$NamedParameterPair$2Lrc9b("sw", r647_sw), new r441_xn$NamedParameterPair$2Lrc9b("swBefore", r647_fine)), r441_flatside.ru(r647_right, r647_bot, r647_top, r647_ada, r647_adb), r647_rise ? [r441_Arch.lhs(r647_top, new r441_xn$NamedParameterPair$2Lrc9b("sw", r647_sw), new r441_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r441_g4(r647_left, r647_top - r647_rise, r441_widths.lhs(r647_sw))] : [r441_arcvh(), r441_flat(r441_Arch["adjust-x"].top(r1_mix(r647_left, r647_right, 0.5), new r441_xn$NamedParameterPair$2Lrc9b("sw", r647_sw)), r647_top), r441_curl(r647_left + r441_TINY, r647_top, r441_heading(r441_Leftward))]);
            };
            r592_exports.earlessRounded = r592_earlessRounded = function () {
                var _r658_t5;
                var _r658_t6 = arguments;
                var r658_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r658_t6, 0);
                var _r658_t0 = [];
                var _r658_t1 = 0;
                while (_r658_t1 < r658_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r658_xn$flexarguments$2Lrc7uIe5[_r658_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r658_t0.push(r658_xn$flexarguments$2Lrc7uIe5[_r658_t1]);
                    _r658_t1 = _r658_t1 + 1;
                }
                var _r658_t2 = r658_xn$flexarguments$2Lrc7uIe5;
                var _r658_t3 = _r658_t2.length;
                var _r658_t4 = 0;
                while (_r658_t4 < _r658_t3) {
                    _r658_t1 = _r658_t2[_r658_t4];
                    if (_r658_t1 && _r658_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r658_t1.left === "top") r658_top = _r658_t1.right;
                    if (_r658_t1 && _r658_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r658_t1.left === "bot") r658_bot = _r658_t1.right;
                    if (_r658_t1 && _r658_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r658_t1.left === "left") r658_left = _r658_t1.right;
                    if (_r658_t1 && _r658_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r658_t1.left === "right") r658_right = _r658_t1.right;
                    if (_r658_t1 && _r658_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r658_t1.left === "yTerminal") r658_yTerminal = _r658_t1.right;
                    if (_r658_t1 && _r658_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r658_t1.left === "sw") r658_sw = _r658_t1.right;
                    if (_r658_t1 && _r658_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r658_t1.left === "fine") r658_fine = _r658_t1.right;
                    if (_r658_t1 && _r658_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r658_t1.left === "ada") r658_ada = _r658_t1.right;
                    if (_r658_t1 && _r658_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r658_t1.left === "adb") r658_adb = _r658_t1.right;
                    if (_r658_t1 && _r658_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r658_t1.left === "yend") r658_yend = _r658_t1.right;
                    _r658_t4 = _r658_t4 + 1;
                }
                var r658_top = r1_fallback(r658_top, _r658_t0[0], r441_XH);
                var r658_bot = r1_fallback(r658_bot, _r658_t0[1], 0);
                var r658_left = r1_fallback(r658_left, _r658_t0[2], r441_SB);
                var r658_right = r1_fallback(r658_right, _r658_t0[3], r441_RightSB);
                var r658_yTerminal = r1_fallback(r658_yTerminal, _r658_t0[4], r658_bot);
                var r658_sw = r1_fallback(r658_sw, _r658_t0[5], r441_Stroke);
                var r658_fine = r1_fallback(r658_fine, _r658_t0[6], r441_ShoulderFine);
                var r658_ada = r1_fallback(r658_ada, _r658_t0[7], r441_SmallArchDepthA);
                var r658_adb = r1_fallback(r658_adb, _r658_t0[8], r441_SmallArchDepthB);
                var r658_yend = r1_fallback(r658_yend, _r658_t0[9], r658_bot + r658_adb + r441_TINY);
                return r441_dispiro(r441_flat(r658_left + r441_HSwToV(r658_sw - r658_fine), r658_yend, r441_widths.lhs(r658_fine)), r441_curl(r658_left + r441_HSwToV(r658_sw - r658_fine), Math.min(r658_bot + r658_adb, r658_yend - r441_TINY), r441_widths.lhs(r658_fine)), r441_Arch.lhs(r658_bot, new r441_xn$NamedParameterPair$2Lrc9b("sw", r658_sw), new r441_xn$NamedParameterPair$2Lrc9b("swBefore", r658_fine)), r441_flatside.ru(r658_right, r658_bot, r658_top, r658_ada, r658_adb), r441_Arch.lhs(r658_top, new r441_xn$NamedParameterPair$2Lrc9b("sw", r658_sw)), r441_flat(r658_left, Math.max(r658_top - r658_ada, r658_yTerminal + r441_TINY)), r441_curl(r658_left, r658_yTerminal, r441_widths.lhs.heading(r658_sw, r441_Downward)));
            };
            return r592_exports;
        })();
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r666_t0, _r666_t1;
            return {
                "OBarRight": r441_OBarRight
            };
        });
        var r441_OBarRight = (function () {
            var r669_arcStart, r669_arcEnd, r669_shape, r669_toothlessCorner, r669_toothlessRounded, r669_earlessCorner, r669_earlessRounded;
            var r669_exports = {};
            var r669_kSkewShift = 0.5;
            r669_exports.arcStart = r669_arcStart = function () {
                var _r678_t5;
                var _r678_t6 = arguments;
                var r678_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r678_t6, 0);
                var _r678_t0 = [];
                var _r678_t1 = 0;
                while (_r678_t1 < r678_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r678_xn$flexarguments$2Lrc7uIe5[_r678_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r678_t0.push(r678_xn$flexarguments$2Lrc7uIe5[_r678_t1]);
                    _r678_t1 = _r678_t1 + 1;
                }
                var _r678_t2 = r678_xn$flexarguments$2Lrc7uIe5;
                var _r678_t3 = _r678_t2.length;
                var _r678_t4 = 0;
                while (_r678_t4 < _r678_t3) {
                    _r678_t1 = _r678_t2[_r678_t4];
                    if (_r678_t1 && _r678_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r678_t1.left === "top") r678_top = _r678_t1.right;
                    if (_r678_t1 && _r678_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r678_t1.left === "left") r678_left = _r678_t1.right;
                    if (_r678_t1 && _r678_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r678_t1.left === "right") r678_right = _r678_t1.right;
                    if (_r678_t1 && _r678_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r678_t1.left === "sw") r678_sw = _r678_t1.right;
                    if (_r678_t1 && _r678_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r678_t1.left === "fine") r678_fine = _r678_t1.right;
                    if (_r678_t1 && _r678_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r678_t1.left === "ada") r678_ada = _r678_t1.right;
                    if (_r678_t1 && _r678_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r678_t1.left === "adb") r678_adb = _r678_t1.right;
                    if (_r678_t1 && _r678_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r678_t1.left === "ystart") r678_ystart = _r678_t1.right;
                    _r678_t4 = _r678_t4 + 1;
                }
                var r678_top = r1_fallback(r678_top, _r678_t0[0], r441_XH);
                var r678_left = r1_fallback(r678_left, _r678_t0[1], r441_SB);
                var r678_right = r1_fallback(r678_right, _r678_t0[2], r441_RightSB);
                var r678_sw = r1_fallback(r678_sw, _r678_t0[3], r441_Stroke);
                var r678_fine = r1_fallback(r678_fine, _r678_t0[4], r441_ShoulderFine);
                var r678_ada = r1_fallback(r678_ada, _r678_t0[5], r441_SmallArchDepthA);
                var r678_adb = r1_fallback(r678_adb, _r678_t0[6], r441_SmallArchDepthB);
                var r678_ystart = r1_fallback(r678_ystart, _r678_t0[7], r678_top - r678_adb - r441_TINY);
                var r678_xstart = r678_right - r441_HSwToV(r678_sw - r678_fine);
                return [r441_flat(r678_xstart, r678_ystart, r441_widths.lhs(r678_fine)), r441_curl(r678_xstart, Math.max(r678_top - r678_adb, r678_ystart + r441_TINY)), r441_Arch.lhs(r678_top, new r441_xn$NamedParameterPair$2Lrc9b("sw", r678_sw), new r441_xn$NamedParameterPair$2Lrc9b("swBefore", r678_fine))];
            };
            r669_exports.arcEnd = r669_arcEnd = function () {
                var _r686_t5;
                var _r686_t6 = arguments;
                var r686_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r686_t6, 0);
                var _r686_t0 = [];
                var _r686_t1 = 0;
                while (_r686_t1 < r686_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r686_xn$flexarguments$2Lrc7uIe5[_r686_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r686_t0.push(r686_xn$flexarguments$2Lrc7uIe5[_r686_t1]);
                    _r686_t1 = _r686_t1 + 1;
                }
                var _r686_t2 = r686_xn$flexarguments$2Lrc7uIe5;
                var _r686_t3 = _r686_t2.length;
                var _r686_t4 = 0;
                while (_r686_t4 < _r686_t3) {
                    _r686_t1 = _r686_t2[_r686_t4];
                    if (_r686_t1 && _r686_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r686_t1.left === "bot") r686_bot = _r686_t1.right;
                    if (_r686_t1 && _r686_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r686_t1.left === "left") r686_left = _r686_t1.right;
                    if (_r686_t1 && _r686_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r686_t1.left === "right") r686_right = _r686_t1.right;
                    if (_r686_t1 && _r686_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r686_t1.left === "sw") r686_sw = _r686_t1.right;
                    if (_r686_t1 && _r686_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r686_t1.left === "fine") r686_fine = _r686_t1.right;
                    if (_r686_t1 && _r686_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r686_t1.left === "ada") r686_ada = _r686_t1.right;
                    if (_r686_t1 && _r686_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r686_t1.left === "adb") r686_adb = _r686_t1.right;
                    if (_r686_t1 && _r686_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r686_t1.left === "yend") r686_yend = _r686_t1.right;
                    _r686_t4 = _r686_t4 + 1;
                }
                var r686_bot = r1_fallback(r686_bot, _r686_t0[0], 0);
                var r686_left = r1_fallback(r686_left, _r686_t0[1], r441_SB);
                var r686_right = r1_fallback(r686_right, _r686_t0[2], r441_RightSB);
                var r686_sw = r1_fallback(r686_sw, _r686_t0[3], r441_Stroke);
                var r686_fine = r1_fallback(r686_fine, _r686_t0[4], r441_ShoulderFine);
                var r686_ada = r1_fallback(r686_ada, _r686_t0[5], r441_SmallArchDepthA);
                var r686_adb = r1_fallback(r686_adb, _r686_t0[6], r441_SmallArchDepthB);
                var r686_yend = r1_fallback(r686_yend, _r686_t0[7], r686_bot + r686_ada + r441_TINY);
                var r686_xend = r686_right - r441_HSwToV(r686_sw - r686_fine);
                return [r441_Arch.lhs(r686_bot, new r441_xn$NamedParameterPair$2Lrc9b("sw", r686_sw), new r441_xn$NamedParameterPair$2Lrc9b("swAfter", r686_fine)), r441_flat(r686_xend, Math.min(r686_bot + r686_ada, r686_yend - r441_TINY), r441_widths.lhs(r686_fine)), r441_curl(r686_xend, r686_yend)];
            };
            r669_exports.shape = r669_shape = function () {
                var _r694_t5;
                var _r694_t6 = arguments;
                var r694_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r694_t6, 0);
                var _r694_t0 = [];
                var _r694_t1 = 0;
                while (_r694_t1 < r694_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r694_xn$flexarguments$2Lrc7uIe5[_r694_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r694_t0.push(r694_xn$flexarguments$2Lrc7uIe5[_r694_t1]);
                    _r694_t1 = _r694_t1 + 1;
                }
                var _r694_t2 = r694_xn$flexarguments$2Lrc7uIe5;
                var _r694_t3 = _r694_t2.length;
                var _r694_t4 = 0;
                while (_r694_t4 < _r694_t3) {
                    _r694_t1 = _r694_t2[_r694_t4];
                    if (_r694_t1 && _r694_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r694_t1.left === "top") r694_top = _r694_t1.right;
                    if (_r694_t1 && _r694_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r694_t1.left === "bot") r694_bot = _r694_t1.right;
                    if (_r694_t1 && _r694_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r694_t1.left === "left") r694_left = _r694_t1.right;
                    if (_r694_t1 && _r694_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r694_t1.left === "right") r694_right = _r694_t1.right;
                    if (_r694_t1 && _r694_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r694_t1.left === "sw") r694_sw = _r694_t1.right;
                    if (_r694_t1 && _r694_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r694_t1.left === "fine") r694_fine = _r694_t1.right;
                    if (_r694_t1 && _r694_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r694_t1.left === "ada") r694_ada = _r694_t1.right;
                    if (_r694_t1 && _r694_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r694_t1.left === "adb") r694_adb = _r694_t1.right;
                    _r694_t4 = _r694_t4 + 1;
                }
                var r694_top = r1_fallback(r694_top, _r694_t0[0], r441_XH);
                var r694_bot = r1_fallback(r694_bot, _r694_t0[1], 0);
                var r694_left = r1_fallback(r694_left, _r694_t0[2], r441_SB);
                var r694_right = r1_fallback(r694_right, _r694_t0[3], r441_RightSB);
                var r694_sw = r1_fallback(r694_sw, _r694_t0[4], r441_Stroke);
                var r694_fine = r1_fallback(r694_fine, _r694_t0[5], r441_ShoulderFine);
                var r694_ada = r1_fallback(r694_ada, _r694_t0[6], r441_SmallArchDepthA);
                var r694_adb = r1_fallback(r694_adb, _r694_t0[7], r441_SmallArchDepthB);
                return r441_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r441_xn$Capture$2Lrc8.GlyphProc(function (r700_currentGlyph) {
                    var _r700_t0, _r700_t1;
                    r700_currentGlyph.include(r441_OBarLeft.shape(new r441_xn$NamedParameterPair$2Lrc9b("top", r694_top), new r441_xn$NamedParameterPair$2Lrc9b("bot", r694_bot), new r441_xn$NamedParameterPair$2Lrc9b("left", r694_left), new r441_xn$NamedParameterPair$2Lrc9b("right", r694_right), new r441_xn$NamedParameterPair$2Lrc9b("sw", r694_sw), new r441_xn$NamedParameterPair$2Lrc9b("fine", r694_fine), new r441_xn$NamedParameterPair$2Lrc9b("ada", r694_ada), new r441_xn$NamedParameterPair$2Lrc9b("adb", r694_adb)), true, true);
                    r700_currentGlyph.include(r441_FlipAround(r1_mix(r694_left, r694_right, 0.5), r1_mix(r694_bot, r694_top, 0.5)));
                    return void 0;
                }));
            };
            r669_exports.toothlessCorner = r669_toothlessCorner = function () {
                var _r713_t5;
                var _r713_t6 = arguments;
                var r713_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r713_t6, 0);
                var _r713_t0 = [];
                var _r713_t1 = 0;
                while (_r713_t1 < r713_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r713_xn$flexarguments$2Lrc7uIe5[_r713_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r713_t0.push(r713_xn$flexarguments$2Lrc7uIe5[_r713_t1]);
                    _r713_t1 = _r713_t1 + 1;
                }
                var _r713_t2 = r713_xn$flexarguments$2Lrc7uIe5;
                var _r713_t3 = _r713_t2.length;
                var _r713_t4 = 0;
                while (_r713_t4 < _r713_t3) {
                    _r713_t1 = _r713_t2[_r713_t4];
                    if (_r713_t1 && _r713_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r713_t1.left === "top") r713_top = _r713_t1.right;
                    if (_r713_t1 && _r713_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r713_t1.left === "bot") r713_bot = _r713_t1.right;
                    if (_r713_t1 && _r713_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r713_t1.left === "left") r713_left = _r713_t1.right;
                    if (_r713_t1 && _r713_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r713_t1.left === "right") r713_right = _r713_t1.right;
                    if (_r713_t1 && _r713_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r713_t1.left === "rise") r713_rise = _r713_t1.right;
                    if (_r713_t1 && _r713_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r713_t1.left === "sw") r713_sw = _r713_t1.right;
                    if (_r713_t1 && _r713_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r713_t1.left === "fine") r713_fine = _r713_t1.right;
                    if (_r713_t1 && _r713_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r713_t1.left === "ada") r713_ada = _r713_t1.right;
                    if (_r713_t1 && _r713_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r713_t1.left === "adb") r713_adb = _r713_t1.right;
                    if (_r713_t1 && _r713_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r713_t1.left === "ystart") r713_ystart = _r713_t1.right;
                    _r713_t4 = _r713_t4 + 1;
                }
                var r713_top = r1_fallback(r713_top, _r713_t0[0], r441_XH);
                var r713_bot = r1_fallback(r713_bot, _r713_t0[1], 0);
                var r713_left = r1_fallback(r713_left, _r713_t0[2], r441_SB);
                var r713_right = r1_fallback(r713_right, _r713_t0[3], r441_RightSB);
                var r713_rise = r1_fallback(r713_rise, _r713_t0[4], r441_DToothlessRise);
                var r713_sw = r1_fallback(r713_sw, _r713_t0[5], r441_Stroke);
                var r713_fine = r1_fallback(r713_fine, _r713_t0[6], r441_ShoulderFine);
                var r713_ada = r1_fallback(r713_ada, _r713_t0[7], r441_SmallArchDepthA);
                var r713_adb = r1_fallback(r713_adb, _r713_t0[8], r441_SmallArchDepthB);
                var r713_ystart = r1_fallback(r713_ystart, _r713_t0[9], r713_top - r713_adb - r441_TINY);
                return r441_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r441_xn$Capture$2Lrc8.GlyphProc(function (r719_currentGlyph) {
                    var _r719_t0, _r719_t1;
                    r719_currentGlyph.include(r441_OBarLeft.earlessCorner(new r441_xn$NamedParameterPair$2Lrc9b("top", r713_top), new r441_xn$NamedParameterPair$2Lrc9b("bot", r713_bot), new r441_xn$NamedParameterPair$2Lrc9b("left", r713_left), new r441_xn$NamedParameterPair$2Lrc9b("right", r713_right), new r441_xn$NamedParameterPair$2Lrc9b("rise", r713_rise), new r441_xn$NamedParameterPair$2Lrc9b("sw", r713_sw), new r441_xn$NamedParameterPair$2Lrc9b("fine", r713_fine), new r441_xn$NamedParameterPair$2Lrc9b("ada", r713_ada), new r441_xn$NamedParameterPair$2Lrc9b("adb", r713_adb), new r441_xn$NamedParameterPair$2Lrc9b("yend", r713_top - r713_ystart)), true, true);
                    r719_currentGlyph.include(r441_FlipAround(r1_mix(r713_left, r713_right, 0.5), r1_mix(r713_bot, r713_top, 0.5)));
                    return void 0;
                }));
            };
            r669_exports.toothlessRounded = r669_toothlessRounded = function () {
                var _r734_t5;
                var _r734_t6 = arguments;
                var r734_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r734_t6, 0);
                var _r734_t0 = [];
                var _r734_t1 = 0;
                while (_r734_t1 < r734_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r734_xn$flexarguments$2Lrc7uIe5[_r734_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r734_t0.push(r734_xn$flexarguments$2Lrc7uIe5[_r734_t1]);
                    _r734_t1 = _r734_t1 + 1;
                }
                var _r734_t2 = r734_xn$flexarguments$2Lrc7uIe5;
                var _r734_t3 = _r734_t2.length;
                var _r734_t4 = 0;
                while (_r734_t4 < _r734_t3) {
                    _r734_t1 = _r734_t2[_r734_t4];
                    if (_r734_t1 && _r734_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r734_t1.left === "top") r734_top = _r734_t1.right;
                    if (_r734_t1 && _r734_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r734_t1.left === "bot") r734_bot = _r734_t1.right;
                    if (_r734_t1 && _r734_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r734_t1.left === "left") r734_left = _r734_t1.right;
                    if (_r734_t1 && _r734_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r734_t1.left === "right") r734_right = _r734_t1.right;
                    if (_r734_t1 && _r734_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r734_t1.left === "yTerminal") r734_yTerminal = _r734_t1.right;
                    if (_r734_t1 && _r734_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r734_t1.left === "sw") r734_sw = _r734_t1.right;
                    if (_r734_t1 && _r734_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r734_t1.left === "fine") r734_fine = _r734_t1.right;
                    if (_r734_t1 && _r734_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r734_t1.left === "ada") r734_ada = _r734_t1.right;
                    if (_r734_t1 && _r734_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r734_t1.left === "adb") r734_adb = _r734_t1.right;
                    if (_r734_t1 && _r734_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r734_t1.left === "ystart") r734_ystart = _r734_t1.right;
                    _r734_t4 = _r734_t4 + 1;
                }
                var r734_top = r1_fallback(r734_top, _r734_t0[0], r441_XH);
                var r734_bot = r1_fallback(r734_bot, _r734_t0[1], 0);
                var r734_left = r1_fallback(r734_left, _r734_t0[2], r441_SB);
                var r734_right = r1_fallback(r734_right, _r734_t0[3], r441_RightSB);
                var r734_yTerminal = r1_fallback(r734_yTerminal, _r734_t0[4], r734_top);
                var r734_sw = r1_fallback(r734_sw, _r734_t0[5], r441_Stroke);
                var r734_fine = r1_fallback(r734_fine, _r734_t0[6], r441_ShoulderFine);
                var r734_ada = r1_fallback(r734_ada, _r734_t0[7], r441_SmallArchDepthA);
                var r734_adb = r1_fallback(r734_adb, _r734_t0[8], r441_SmallArchDepthB);
                var r734_ystart = r1_fallback(r734_ystart, _r734_t0[9], r734_top - r734_adb - r441_TINY);
                return r441_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r441_xn$Capture$2Lrc8.GlyphProc(function (r740_currentGlyph) {
                    var _r740_t0, _r740_t1;
                    r740_currentGlyph.include(r441_OBarLeft.earlessRounded(new r441_xn$NamedParameterPair$2Lrc9b("top", r734_top), new r441_xn$NamedParameterPair$2Lrc9b("bot", r734_bot), new r441_xn$NamedParameterPair$2Lrc9b("left", r734_left), new r441_xn$NamedParameterPair$2Lrc9b("right", r734_right), new r441_xn$NamedParameterPair$2Lrc9b("sw", r734_sw), new r441_xn$NamedParameterPair$2Lrc9b("fine", r734_fine), new r441_xn$NamedParameterPair$2Lrc9b("yTerminal", r734_top - r734_yTerminal), new r441_xn$NamedParameterPair$2Lrc9b("ada", r734_ada), new r441_xn$NamedParameterPair$2Lrc9b("adb", r734_adb), new r441_xn$NamedParameterPair$2Lrc9b("yend", r734_top - r734_ystart)), true, true);
                    r740_currentGlyph.include(r441_FlipAround(r1_mix(r734_left, r734_right, 0.5), r1_mix(r734_bot, r734_top, 0.5)));
                    return void 0;
                }));
            };
            r669_exports.earlessCorner = r669_earlessCorner = function () {
                var _r755_t5;
                var _r755_t6 = arguments;
                var r755_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r755_t6, 0);
                var _r755_t0 = [];
                var _r755_t1 = 0;
                while (_r755_t1 < r755_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r755_xn$flexarguments$2Lrc7uIe5[_r755_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r755_t0.push(r755_xn$flexarguments$2Lrc7uIe5[_r755_t1]);
                    _r755_t1 = _r755_t1 + 1;
                }
                var _r755_t2 = r755_xn$flexarguments$2Lrc7uIe5;
                var _r755_t3 = _r755_t2.length;
                var _r755_t4 = 0;
                while (_r755_t4 < _r755_t3) {
                    _r755_t1 = _r755_t2[_r755_t4];
                    if (_r755_t1 && _r755_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r755_t1.left === "top") r755_top = _r755_t1.right;
                    if (_r755_t1 && _r755_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r755_t1.left === "bot") r755_bot = _r755_t1.right;
                    if (_r755_t1 && _r755_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r755_t1.left === "left") r755_left = _r755_t1.right;
                    if (_r755_t1 && _r755_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r755_t1.left === "right") r755_right = _r755_t1.right;
                    if (_r755_t1 && _r755_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r755_t1.left === "rise") r755_rise = _r755_t1.right;
                    if (_r755_t1 && _r755_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r755_t1.left === "sw") r755_sw = _r755_t1.right;
                    if (_r755_t1 && _r755_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r755_t1.left === "fine") r755_fine = _r755_t1.right;
                    if (_r755_t1 && _r755_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r755_t1.left === "ada") r755_ada = _r755_t1.right;
                    if (_r755_t1 && _r755_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r755_t1.left === "adb") r755_adb = _r755_t1.right;
                    if (_r755_t1 && _r755_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r755_t1.left === "yend") r755_yend = _r755_t1.right;
                    _r755_t4 = _r755_t4 + 1;
                }
                var r755_top = r1_fallback(r755_top, _r755_t0[0], r441_XH);
                var r755_bot = r1_fallback(r755_bot, _r755_t0[1], 0);
                var r755_left = r1_fallback(r755_left, _r755_t0[2], r441_SB);
                var r755_right = r1_fallback(r755_right, _r755_t0[3], r441_RightSB);
                var r755_rise = r1_fallback(r755_rise, _r755_t0[4], r441_DToothlessRise);
                var r755_sw = r1_fallback(r755_sw, _r755_t0[5], r441_Stroke);
                var r755_fine = r1_fallback(r755_fine, _r755_t0[6], r441_ShoulderFine);
                var r755_ada = r1_fallback(r755_ada, _r755_t0[7], r441_SmallArchDepthA);
                var r755_adb = r1_fallback(r755_adb, _r755_t0[8], r441_SmallArchDepthB);
                var r755_yend = r1_fallback(r755_yend, _r755_t0[9], r755_bot + r755_ada + r441_TINY);
                return r441_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r441_xn$Capture$2Lrc8.GlyphProc(function (r761_currentGlyph) {
                    var _r761_t0, _r761_t1;
                    r761_currentGlyph.include(r441_OBarLeft.toothlessCorner(new r441_xn$NamedParameterPair$2Lrc9b("top", r755_top), new r441_xn$NamedParameterPair$2Lrc9b("bot", r755_bot), new r441_xn$NamedParameterPair$2Lrc9b("left", r755_left), new r441_xn$NamedParameterPair$2Lrc9b("right", r755_right), new r441_xn$NamedParameterPair$2Lrc9b("rise", r755_rise), new r441_xn$NamedParameterPair$2Lrc9b("sw", r755_sw), new r441_xn$NamedParameterPair$2Lrc9b("fine", r755_fine), new r441_xn$NamedParameterPair$2Lrc9b("ada", r755_ada), new r441_xn$NamedParameterPair$2Lrc9b("adb", r755_adb), new r441_xn$NamedParameterPair$2Lrc9b("ystart", r755_top - r755_yend)), true, true);
                    r761_currentGlyph.include(r441_FlipAround(r1_mix(r755_left, r755_right, 0.5), r1_mix(r755_bot, r755_top, 0.5)));
                    return void 0;
                }));
            };
            r669_exports.earlessRounded = r669_earlessRounded = function () {
                var _r776_t5;
                var _r776_t6 = arguments;
                var r776_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r776_t6, 0);
                var _r776_t0 = [];
                var _r776_t1 = 0;
                while (_r776_t1 < r776_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r776_xn$flexarguments$2Lrc7uIe5[_r776_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r776_t0.push(r776_xn$flexarguments$2Lrc7uIe5[_r776_t1]);
                    _r776_t1 = _r776_t1 + 1;
                }
                var _r776_t2 = r776_xn$flexarguments$2Lrc7uIe5;
                var _r776_t3 = _r776_t2.length;
                var _r776_t4 = 0;
                while (_r776_t4 < _r776_t3) {
                    _r776_t1 = _r776_t2[_r776_t4];
                    if (_r776_t1 && _r776_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r776_t1.left === "top") r776_top = _r776_t1.right;
                    if (_r776_t1 && _r776_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r776_t1.left === "bot") r776_bot = _r776_t1.right;
                    if (_r776_t1 && _r776_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r776_t1.left === "left") r776_left = _r776_t1.right;
                    if (_r776_t1 && _r776_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r776_t1.left === "right") r776_right = _r776_t1.right;
                    if (_r776_t1 && _r776_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r776_t1.left === "yTerminal") r776_yTerminal = _r776_t1.right;
                    if (_r776_t1 && _r776_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r776_t1.left === "sw") r776_sw = _r776_t1.right;
                    if (_r776_t1 && _r776_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r776_t1.left === "fine") r776_fine = _r776_t1.right;
                    if (_r776_t1 && _r776_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r776_t1.left === "ada") r776_ada = _r776_t1.right;
                    if (_r776_t1 && _r776_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r776_t1.left === "adb") r776_adb = _r776_t1.right;
                    if (_r776_t1 && _r776_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r776_t1.left === "yend") r776_yend = _r776_t1.right;
                    _r776_t4 = _r776_t4 + 1;
                }
                var r776_top = r1_fallback(r776_top, _r776_t0[0], r441_XH);
                var r776_bot = r1_fallback(r776_bot, _r776_t0[1], 0);
                var r776_left = r1_fallback(r776_left, _r776_t0[2], r441_SB);
                var r776_right = r1_fallback(r776_right, _r776_t0[3], r441_RightSB);
                var r776_yTerminal = r1_fallback(r776_yTerminal, _r776_t0[4], r776_bot);
                var r776_sw = r1_fallback(r776_sw, _r776_t0[5], r441_Stroke);
                var r776_fine = r1_fallback(r776_fine, _r776_t0[6], r441_ShoulderFine);
                var r776_ada = r1_fallback(r776_ada, _r776_t0[7], r441_SmallArchDepthA);
                var r776_adb = r1_fallback(r776_adb, _r776_t0[8], r441_SmallArchDepthB);
                var r776_yend = r1_fallback(r776_yend, _r776_t0[9], r776_bot + r776_ada + r441_TINY);
                return r441_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r441_xn$Capture$2Lrc8.GlyphProc(function (r782_currentGlyph) {
                    var _r782_t0, _r782_t1;
                    r782_currentGlyph.include(r441_OBarLeft.toothlessRounded(new r441_xn$NamedParameterPair$2Lrc9b("top", r776_top), new r441_xn$NamedParameterPair$2Lrc9b("bot", r776_bot), new r441_xn$NamedParameterPair$2Lrc9b("left", r776_left), new r441_xn$NamedParameterPair$2Lrc9b("right", r776_right), new r441_xn$NamedParameterPair$2Lrc9b("sw", r776_sw), new r441_xn$NamedParameterPair$2Lrc9b("fine", r776_fine), new r441_xn$NamedParameterPair$2Lrc9b("yTerminal", r776_top - r776_yTerminal), new r441_xn$NamedParameterPair$2Lrc9b("ada", r776_ada), new r441_xn$NamedParameterPair$2Lrc9b("adb", r776_adb), new r441_xn$NamedParameterPair$2Lrc9b("ystart", r776_top - r776_yend)), true, true);
                    r782_currentGlyph.include(r441_FlipAround(r1_mix(r776_left, r776_right, 0.5), r1_mix(r776_bot, r776_top, 0.5)));
                    return void 0;
                }));
            };
            return r669_exports;
        })();
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r796_t0, _r796_t1;
            return {
                "FlatHookDepth": r441_FlatHookDepth
            };
        });
        var r441_FlatHookDepth = function (r797_df, r797_s) {
            var _r797_t0, _r797_t1;
            return {
                "x": r1_fallback(r797_s, 1) * r441_FlatHookDepthImpl(Math.min(1, Math.sqrt(r797_df.adws)), r441_HVContrast),
                "y": r1_fallback(r797_s, 1) * r441_FlatHookDepthImpl(Math.min(1, Math.sqrt(r797_df.adws)), 1)
            };
        };
        var r441_FlatHookDepthImpl = function (r798_sHook, r798_sStroke) {
            var _r798_t0, _r798_t1;
            var r798_kFlathook = 15 / 16;
            return Math.max(r798_kFlathook * r798_sHook * r441_Hook, r798_sStroke * r441_Stroke * 1.375, Math.min(r798_kFlathook * r798_sHook * r441_Hook, r798_sStroke * r441_Stroke * 1.625));
        };
        var _r441_t8 = r441_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r441_markMiddle = _r441_t8.markMiddle;
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r801_t0, _r801_t1;
            return {
                "ConnectedCedilla": r441_ConnectedCedilla
            };
        });
        var r441_ConnectedCedilla = function (r802_src, r802_sel) {
            var _r802_t0, _r802_t1;
            return new r441_xn$Capture$2Lrc8.GlyphProc(function (r804_currentGlyph) {
                var _r804_t0, _r804_t1;
                r804_currentGlyph.include(r441_xn$referglyph$1aao(r802_src), r441_AS_BASE, r441_ALSO_METRICS);
                var r804_mk = r804_currentGlyph.baseAnchors.leaningBelow || r804_currentGlyph.baseAnchors.below;
                var r804_tfm = r441_ApparentTranslate(r804_mk.x - r441_markMiddle, r804_mk.y - 0);
                r804_currentGlyph.include(r441_difference(r441_xn$withtransform$5sIl(r804_tfm, r441_xn$referglyph$1aao("cedillaExtShapeBelow")), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 0.25), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 0.5), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 0.75), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 1), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 1.25), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 1.5), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 1.75), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 2), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 2.25), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 2.5), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 2.75), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 3), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 3.25), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 3.5), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 3.75), r441_xn$referglyph$1aao(r802_src)), r441_xn$withtransform$5sIl(r441_ApparentTranslate(0, r441_Stroke * 4), r441_xn$referglyph$1aao(r802_src))));
                r804_currentGlyph.include(r441_xn$referglyph$1aao("blankBelow"));
                r804_currentGlyph.include(r441_xn$referglyph$1aao("blankLeaningBelow"));
                return void 0;
            });
        };
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r810_t0, _r810_t1;
            return {
                "SerifedArcStart": r441_SerifedArcStart
            };
        });
        var r441_SerifedArcStart = (function () {
            var r813_RtlLhs, r813_LtrRhs;
            var r813_exports = {};
            r813_exports.RtlLhs = r813_RtlLhs = function () {
                var _r821_t5;
                var _r821_t6 = arguments;
                var r821_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r821_t6, 0);
                var _r821_t0 = [];
                var _r821_t1 = 0;
                while (_r821_t1 < r821_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r821_xn$flexarguments$2Lrc7uIe5[_r821_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r821_t0.push(r821_xn$flexarguments$2Lrc7uIe5[_r821_t1]);
                    _r821_t1 = _r821_t1 + 1;
                }
                var _r821_t2 = r821_xn$flexarguments$2Lrc7uIe5;
                var _r821_t3 = _r821_t2.length;
                var _r821_t4 = 0;
                while (_r821_t4 < _r821_t3) {
                    _r821_t1 = _r821_t2[_r821_t4];
                    if (_r821_t1 && _r821_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r821_t1.left === "sx") r821_sx = _r821_t1.right;
                    if (_r821_t1 && _r821_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r821_t1.left === "cy") r821_cy = _r821_t1.right;
                    if (_r821_t1 && _r821_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r821_t1.left === "sw") r821_sw = _r821_t1.right;
                    if (_r821_t1 && _r821_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r821_t1.left === "hook") r821_hook = _r821_t1.right;
                    if (_r821_t1 && _r821_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r821_t1.left === "swSerif") r821_swSerif = _r821_t1.right;
                    if (_r821_t1 && _r821_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r821_t1.left === "swAfter") r821_swAfter = _r821_t1.right;
                    if (_r821_t1 && _r821_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r821_t1.left === "o") r821_o = _r821_t1.right;
                    _r821_t4 = _r821_t4 + 1;
                }
                var r821_sx = r1_fallback(r821_sx, _r821_t0[0]);
                var r821_cy = r1_fallback(r821_cy, _r821_t0[1]);
                var r821_sw = r1_fallback(r821_sw, _r821_t0[2]);
                var r821_hook = r1_fallback(r821_hook, _r821_t0[3]);
                var r821_swSerif = r1_fallback(r821_swSerif, _r821_t0[4], r441_ArcStartSerifWidth(r821_sw));
                var r821_swAfter = r1_fallback(r821_swAfter, _r821_t0[5], void 0);
                var r821_o = r1_fallback(r821_o, _r821_t0[6], void 0);
                var r821_fine = r821_swSerif * r1_mix(r441_CThinB, r441_ShoulderFine / r441_Stroke, 0.5);
                return [r441_g4.up.start(r821_sx - r441_HSwToV(r821_swSerif - r821_fine), r821_cy - r441_ArcStartSerifDepth(r821_hook), r441_widths.lhs.heading(r821_fine, r441_Upward)), r441_Arch.lhs(r821_cy, new r441_xn$NamedParameterPair$2Lrc9b("sw", r821_sw), new r441_xn$NamedParameterPair$2Lrc9b("swBefore", r821_fine), new r441_xn$NamedParameterPair$2Lrc9b("swAfter", r821_swAfter), new r441_xn$NamedParameterPair$2Lrc9b("o", r821_o))];
            };
            r813_exports.LtrRhs = r813_LtrRhs = function () {
                var _r831_t5;
                var _r831_t6 = arguments;
                var r831_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r831_t6, 0);
                var _r831_t0 = [];
                var _r831_t1 = 0;
                while (_r831_t1 < r831_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r831_xn$flexarguments$2Lrc7uIe5[_r831_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r831_t0.push(r831_xn$flexarguments$2Lrc7uIe5[_r831_t1]);
                    _r831_t1 = _r831_t1 + 1;
                }
                var _r831_t2 = r831_xn$flexarguments$2Lrc7uIe5;
                var _r831_t3 = _r831_t2.length;
                var _r831_t4 = 0;
                while (_r831_t4 < _r831_t3) {
                    _r831_t1 = _r831_t2[_r831_t4];
                    if (_r831_t1 && _r831_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r831_t1.left === "sx") r831_sx = _r831_t1.right;
                    if (_r831_t1 && _r831_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r831_t1.left === "cy") r831_cy = _r831_t1.right;
                    if (_r831_t1 && _r831_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r831_t1.left === "sw") r831_sw = _r831_t1.right;
                    if (_r831_t1 && _r831_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r831_t1.left === "hook") r831_hook = _r831_t1.right;
                    if (_r831_t1 && _r831_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r831_t1.left === "swSerif") r831_swSerif = _r831_t1.right;
                    if (_r831_t1 && _r831_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r831_t1.left === "swAfter") r831_swAfter = _r831_t1.right;
                    if (_r831_t1 && _r831_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r831_t1.left === "o") r831_o = _r831_t1.right;
                    _r831_t4 = _r831_t4 + 1;
                }
                var r831_sx = r1_fallback(r831_sx, _r831_t0[0]);
                var r831_cy = r1_fallback(r831_cy, _r831_t0[1]);
                var r831_sw = r1_fallback(r831_sw, _r831_t0[2]);
                var r831_hook = r1_fallback(r831_hook, _r831_t0[3]);
                var r831_swSerif = r1_fallback(r831_swSerif, _r831_t0[4], r441_ArcStartSerifWidth(r831_sw));
                var r831_swAfter = r1_fallback(r831_swAfter, _r831_t0[5], void 0);
                var r831_o = r1_fallback(r831_o, _r831_t0[6], void 0);
                var r831_fine = r831_swSerif * r1_mix(r441_CThinB, r441_ShoulderFine / r441_Stroke, 0.5);
                return [r441_g4.up.start(r831_sx + r441_HSwToV(r831_swSerif - r831_fine), r831_cy - r441_ArcStartSerifDepth(r831_hook), r441_widths.rhs.heading(r831_fine, r441_Upward)), r441_Arch.rhs(r831_cy, new r441_xn$NamedParameterPair$2Lrc9b("sw", r831_sw), new r441_xn$NamedParameterPair$2Lrc9b("swBefore", r831_fine), new r441_xn$NamedParameterPair$2Lrc9b("swAfter", r831_swAfter), new r441_xn$NamedParameterPair$2Lrc9b("o", r831_o))];
            };
            return r813_exports;
        })();
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r841_t0, _r841_t1;
            return {
                "SerifedArcEnd": r441_SerifedArcEnd
            };
        });
        var r441_SerifedArcEnd = (function () {
            var r844_RtlRhs, r844_LtrLhs;
            var r844_exports = {};
            r844_exports.RtlRhs = r844_RtlRhs = function () {
                var _r852_t5;
                var _r852_t6 = arguments;
                var r852_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r852_t6, 0);
                var _r852_t0 = [];
                var _r852_t1 = 0;
                while (_r852_t1 < r852_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r852_xn$flexarguments$2Lrc7uIe5[_r852_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r852_t0.push(r852_xn$flexarguments$2Lrc7uIe5[_r852_t1]);
                    _r852_t1 = _r852_t1 + 1;
                }
                var _r852_t2 = r852_xn$flexarguments$2Lrc7uIe5;
                var _r852_t3 = _r852_t2.length;
                var _r852_t4 = 0;
                while (_r852_t4 < _r852_t3) {
                    _r852_t1 = _r852_t2[_r852_t4];
                    if (_r852_t1 && _r852_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r852_t1.left === "ex") r852_ex = _r852_t1.right;
                    if (_r852_t1 && _r852_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r852_t1.left === "cy") r852_cy = _r852_t1.right;
                    if (_r852_t1 && _r852_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r852_t1.left === "sw") r852_sw = _r852_t1.right;
                    if (_r852_t1 && _r852_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r852_t1.left === "hook") r852_hook = _r852_t1.right;
                    if (_r852_t1 && _r852_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r852_t1.left === "swSerif") r852_swSerif = _r852_t1.right;
                    if (_r852_t1 && _r852_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r852_t1.left === "swBefore") r852_swBefore = _r852_t1.right;
                    if (_r852_t1 && _r852_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r852_t1.left === "o") r852_o = _r852_t1.right;
                    _r852_t4 = _r852_t4 + 1;
                }
                var r852_ex = r1_fallback(r852_ex, _r852_t0[0]);
                var r852_cy = r1_fallback(r852_cy, _r852_t0[1]);
                var r852_sw = r1_fallback(r852_sw, _r852_t0[2]);
                var r852_hook = r1_fallback(r852_hook, _r852_t0[3]);
                var r852_swSerif = r1_fallback(r852_swSerif, _r852_t0[4], r441_ArcStartSerifWidth(r852_sw));
                var r852_swBefore = r1_fallback(r852_swBefore, _r852_t0[5], void 0);
                var r852_o = r1_fallback(r852_o, _r852_t0[6], void 0);
                var r852_fine = r852_swSerif * r1_mix(r441_CThinB, r441_ShoulderFine / r441_Stroke, 0.5);
                return [r441_Arch.rhs(r852_cy, new r441_xn$NamedParameterPair$2Lrc9b("sw", r852_sw), new r441_xn$NamedParameterPair$2Lrc9b("swBefore", r852_swBefore), new r441_xn$NamedParameterPair$2Lrc9b("swAfter", r852_fine), new r441_xn$NamedParameterPair$2Lrc9b("o", r852_o)), r441_g4.up.end(r852_ex + r441_HSwToV(r852_swSerif - r852_fine), r852_cy + r441_ArcStartSerifDepth(r852_hook), r441_widths.rhs.heading(r852_fine, r441_Upward))];
            };
            r844_exports.LtrLhs = r844_LtrLhs = function () {
                var _r862_t5;
                var _r862_t6 = arguments;
                var r862_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r862_t6, 0);
                var _r862_t0 = [];
                var _r862_t1 = 0;
                while (_r862_t1 < r862_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r862_xn$flexarguments$2Lrc7uIe5[_r862_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r862_t0.push(r862_xn$flexarguments$2Lrc7uIe5[_r862_t1]);
                    _r862_t1 = _r862_t1 + 1;
                }
                var _r862_t2 = r862_xn$flexarguments$2Lrc7uIe5;
                var _r862_t3 = _r862_t2.length;
                var _r862_t4 = 0;
                while (_r862_t4 < _r862_t3) {
                    _r862_t1 = _r862_t2[_r862_t4];
                    if (_r862_t1 && _r862_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r862_t1.left === "ex") r862_ex = _r862_t1.right;
                    if (_r862_t1 && _r862_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r862_t1.left === "cy") r862_cy = _r862_t1.right;
                    if (_r862_t1 && _r862_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r862_t1.left === "sw") r862_sw = _r862_t1.right;
                    if (_r862_t1 && _r862_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r862_t1.left === "hook") r862_hook = _r862_t1.right;
                    if (_r862_t1 && _r862_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r862_t1.left === "swSerif") r862_swSerif = _r862_t1.right;
                    if (_r862_t1 && _r862_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r862_t1.left === "swBefore") r862_swBefore = _r862_t1.right;
                    if (_r862_t1 && _r862_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r862_t1.left === "o") r862_o = _r862_t1.right;
                    _r862_t4 = _r862_t4 + 1;
                }
                var r862_ex = r1_fallback(r862_ex, _r862_t0[0]);
                var r862_cy = r1_fallback(r862_cy, _r862_t0[1]);
                var r862_sw = r1_fallback(r862_sw, _r862_t0[2]);
                var r862_hook = r1_fallback(r862_hook, _r862_t0[3]);
                var r862_swSerif = r1_fallback(r862_swSerif, _r862_t0[4], r441_ArcStartSerifWidth(r862_sw));
                var r862_swBefore = r1_fallback(r862_swBefore, _r862_t0[5], void 0);
                var r862_o = r1_fallback(r862_o, _r862_t0[6], void 0);
                var r862_fine = r862_swSerif * r1_mix(r441_CThinB, r441_ShoulderFine / r441_Stroke, 0.5);
                return [r441_Arch.lhs(r862_cy, new r441_xn$NamedParameterPair$2Lrc9b("sw", r862_sw), new r441_xn$NamedParameterPair$2Lrc9b("swBefore", r862_swBefore), new r441_xn$NamedParameterPair$2Lrc9b("swAfter", r862_fine), new r441_xn$NamedParameterPair$2Lrc9b("o", r862_o)), r441_g4.up.end(r862_ex - r441_HSwToV(r862_swSerif - r862_fine), r862_cy + r441_ArcStartSerifDepth(r862_hook), r441_widths.lhs.heading(r862_fine, r441_Upward))];
            };
            return r844_exports;
        })();
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r872_t0, _r872_t1;
            return {
                "InwardSlabArcStart": r441_InwardSlabArcStart
            };
        });
        var r441_InwardSlabArcStart = (function () {
            var r875_RtlLhs, r875_LtrRhs;
            var r875_exports = {};
            r875_exports.RtlLhs = r875_RtlLhs = function () {
                var _r883_t5;
                var _r883_t6 = arguments;
                var r883_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r883_t6, 0);
                var _r883_t0 = [];
                var _r883_t1 = 0;
                while (_r883_t1 < r883_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r883_xn$flexarguments$2Lrc7uIe5[_r883_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r883_t0.push(r883_xn$flexarguments$2Lrc7uIe5[_r883_t1]);
                    _r883_t1 = _r883_t1 + 1;
                }
                var _r883_t2 = r883_xn$flexarguments$2Lrc7uIe5;
                var _r883_t3 = _r883_t2.length;
                var _r883_t4 = 0;
                while (_r883_t4 < _r883_t3) {
                    _r883_t1 = _r883_t2[_r883_t4];
                    if (_r883_t1 && _r883_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r883_t1.left === "ex") r883_ex = _r883_t1.right;
                    if (_r883_t1 && _r883_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r883_t1.left === "cy") r883_cy = _r883_t1.right;
                    if (_r883_t1 && _r883_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r883_t1.left === "sw") r883_sw = _r883_t1.right;
                    if (_r883_t1 && _r883_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r883_t1.left === "hook") r883_hook = _r883_t1.right;
                    if (_r883_t1 && _r883_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r883_t1.left === "swSerif") r883_swSerif = _r883_t1.right;
                    if (_r883_t1 && _r883_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r883_t1.left === "swAfter") r883_swAfter = _r883_t1.right;
                    if (_r883_t1 && _r883_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r883_t1.left === "o") r883_o = _r883_t1.right;
                    _r883_t4 = _r883_t4 + 1;
                }
                var r883_ex = r1_fallback(r883_ex, _r883_t0[0]);
                var r883_cy = r1_fallback(r883_cy, _r883_t0[1]);
                var r883_sw = r1_fallback(r883_sw, _r883_t0[2]);
                var r883_hook = r1_fallback(r883_hook, _r883_t0[3]);
                var r883_swSerif = r1_fallback(r883_swSerif, _r883_t0[4], r441_ArcStartSerifWidth(r883_sw));
                var r883_swAfter = r1_fallback(r883_swAfter, _r883_t0[5], void 0);
                var r883_o = r1_fallback(r883_o, _r883_t0[6], void 0);
                return [r441_g2(r883_ex, r883_cy - r441_DToothlessRise, r441_widths.lhs(r883_sw)), r441_Arch.lhs(r883_cy, new r441_xn$NamedParameterPair$2Lrc9b("sw", r883_sw), new r441_xn$NamedParameterPair$2Lrc9b("swAfter", r883_swAfter), new r441_xn$NamedParameterPair$2Lrc9b("blendPre", []), new r441_xn$NamedParameterPair$2Lrc9b("o", r883_o))];
            };
            r875_exports.LtrRhs = r875_LtrRhs = function () {
                var _r893_t5;
                var _r893_t6 = arguments;
                var r893_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r893_t6, 0);
                var _r893_t0 = [];
                var _r893_t1 = 0;
                while (_r893_t1 < r893_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r893_xn$flexarguments$2Lrc7uIe5[_r893_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r893_t0.push(r893_xn$flexarguments$2Lrc7uIe5[_r893_t1]);
                    _r893_t1 = _r893_t1 + 1;
                }
                var _r893_t2 = r893_xn$flexarguments$2Lrc7uIe5;
                var _r893_t3 = _r893_t2.length;
                var _r893_t4 = 0;
                while (_r893_t4 < _r893_t3) {
                    _r893_t1 = _r893_t2[_r893_t4];
                    if (_r893_t1 && _r893_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r893_t1.left === "ex") r893_ex = _r893_t1.right;
                    if (_r893_t1 && _r893_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r893_t1.left === "cy") r893_cy = _r893_t1.right;
                    if (_r893_t1 && _r893_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r893_t1.left === "sw") r893_sw = _r893_t1.right;
                    if (_r893_t1 && _r893_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r893_t1.left === "hook") r893_hook = _r893_t1.right;
                    if (_r893_t1 && _r893_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r893_t1.left === "swSerif") r893_swSerif = _r893_t1.right;
                    if (_r893_t1 && _r893_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r893_t1.left === "swAfter") r893_swAfter = _r893_t1.right;
                    if (_r893_t1 && _r893_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r893_t1.left === "o") r893_o = _r893_t1.right;
                    _r893_t4 = _r893_t4 + 1;
                }
                var r893_ex = r1_fallback(r893_ex, _r893_t0[0]);
                var r893_cy = r1_fallback(r893_cy, _r893_t0[1]);
                var r893_sw = r1_fallback(r893_sw, _r893_t0[2]);
                var r893_hook = r1_fallback(r893_hook, _r893_t0[3]);
                var r893_swSerif = r1_fallback(r893_swSerif, _r893_t0[4], r441_ArcStartSerifWidth(r893_sw));
                var r893_swAfter = r1_fallback(r893_swAfter, _r893_t0[5], void 0);
                var r893_o = r1_fallback(r893_o, _r893_t0[6], void 0);
                return [r441_g2(r893_ex, r893_cy - r441_DToothlessRise, r441_widths.rhs(r893_sw)), r441_Arch.rhs(r893_cy, new r441_xn$NamedParameterPair$2Lrc9b("sw", r893_sw), new r441_xn$NamedParameterPair$2Lrc9b("swAfter", r893_swAfter), new r441_xn$NamedParameterPair$2Lrc9b("blendPre", []), new r441_xn$NamedParameterPair$2Lrc9b("o", r893_o))];
            };
            return r875_exports;
        })();
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r903_t0, _r903_t1;
            return {
                "InwardSlabArcEnd": r441_InwardSlabArcEnd
            };
        });
        var r441_InwardSlabArcEnd = (function () {
            var r906_RtlRhs, r906_LtrLhs;
            var r906_exports = {};
            r906_exports.RtlRhs = r906_RtlRhs = function () {
                var _r914_t5;
                var _r914_t6 = arguments;
                var r914_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r914_t6, 0);
                var _r914_t0 = [];
                var _r914_t1 = 0;
                while (_r914_t1 < r914_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r914_xn$flexarguments$2Lrc7uIe5[_r914_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r914_t0.push(r914_xn$flexarguments$2Lrc7uIe5[_r914_t1]);
                    _r914_t1 = _r914_t1 + 1;
                }
                var _r914_t2 = r914_xn$flexarguments$2Lrc7uIe5;
                var _r914_t3 = _r914_t2.length;
                var _r914_t4 = 0;
                while (_r914_t4 < _r914_t3) {
                    _r914_t1 = _r914_t2[_r914_t4];
                    if (_r914_t1 && _r914_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r914_t1.left === "sx") r914_sx = _r914_t1.right;
                    if (_r914_t1 && _r914_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r914_t1.left === "cy") r914_cy = _r914_t1.right;
                    if (_r914_t1 && _r914_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r914_t1.left === "sw") r914_sw = _r914_t1.right;
                    if (_r914_t1 && _r914_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r914_t1.left === "hook") r914_hook = _r914_t1.right;
                    if (_r914_t1 && _r914_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r914_t1.left === "swSerif") r914_swSerif = _r914_t1.right;
                    if (_r914_t1 && _r914_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r914_t1.left === "swBefore") r914_swBefore = _r914_t1.right;
                    if (_r914_t1 && _r914_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r914_t1.left === "o") r914_o = _r914_t1.right;
                    _r914_t4 = _r914_t4 + 1;
                }
                var r914_sx = r1_fallback(r914_sx, _r914_t0[0]);
                var r914_cy = r1_fallback(r914_cy, _r914_t0[1]);
                var r914_sw = r1_fallback(r914_sw, _r914_t0[2]);
                var r914_hook = r1_fallback(r914_hook, _r914_t0[3]);
                var r914_swSerif = r1_fallback(r914_swSerif, _r914_t0[4], r441_ArcStartSerifWidth(r914_sw));
                var r914_swBefore = r1_fallback(r914_swBefore, _r914_t0[5], void 0);
                var r914_o = r1_fallback(r914_o, _r914_t0[6], void 0);
                return [r441_Arch.rhs(r914_cy, new r441_xn$NamedParameterPair$2Lrc9b("sw", r914_sw), new r441_xn$NamedParameterPair$2Lrc9b("swBefore", r914_swBefore), new r441_xn$NamedParameterPair$2Lrc9b("blendPost", []), new r441_xn$NamedParameterPair$2Lrc9b("o", r914_o)), r441_g2(r914_sx, r914_cy + r441_DToothlessRise, r441_widths.rhs(r914_sw))];
            };
            r906_exports.LtrLhs = r906_LtrLhs = function () {
                var _r924_t5;
                var _r924_t6 = arguments;
                var r924_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r924_t6, 0);
                var _r924_t0 = [];
                var _r924_t1 = 0;
                while (_r924_t1 < r924_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r924_xn$flexarguments$2Lrc7uIe5[_r924_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r924_t0.push(r924_xn$flexarguments$2Lrc7uIe5[_r924_t1]);
                    _r924_t1 = _r924_t1 + 1;
                }
                var _r924_t2 = r924_xn$flexarguments$2Lrc7uIe5;
                var _r924_t3 = _r924_t2.length;
                var _r924_t4 = 0;
                while (_r924_t4 < _r924_t3) {
                    _r924_t1 = _r924_t2[_r924_t4];
                    if (_r924_t1 && _r924_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r924_t1.left === "sx") r924_sx = _r924_t1.right;
                    if (_r924_t1 && _r924_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r924_t1.left === "cy") r924_cy = _r924_t1.right;
                    if (_r924_t1 && _r924_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r924_t1.left === "sw") r924_sw = _r924_t1.right;
                    if (_r924_t1 && _r924_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r924_t1.left === "hook") r924_hook = _r924_t1.right;
                    if (_r924_t1 && _r924_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r924_t1.left === "swSerif") r924_swSerif = _r924_t1.right;
                    if (_r924_t1 && _r924_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r924_t1.left === "swBefore") r924_swBefore = _r924_t1.right;
                    if (_r924_t1 && _r924_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r924_t1.left === "o") r924_o = _r924_t1.right;
                    _r924_t4 = _r924_t4 + 1;
                }
                var r924_sx = r1_fallback(r924_sx, _r924_t0[0]);
                var r924_cy = r1_fallback(r924_cy, _r924_t0[1]);
                var r924_sw = r1_fallback(r924_sw, _r924_t0[2]);
                var r924_hook = r1_fallback(r924_hook, _r924_t0[3]);
                var r924_swSerif = r1_fallback(r924_swSerif, _r924_t0[4], r441_ArcStartSerifWidth(r924_sw));
                var r924_swBefore = r1_fallback(r924_swBefore, _r924_t0[5], void 0);
                var r924_o = r1_fallback(r924_o, _r924_t0[6], void 0);
                return [r441_Arch.lhs(r924_cy, new r441_xn$NamedParameterPair$2Lrc9b("sw", r924_sw), new r441_xn$NamedParameterPair$2Lrc9b("swBefore", r924_swBefore), new r441_xn$NamedParameterPair$2Lrc9b("blendPost", []), new r441_xn$NamedParameterPair$2Lrc9b("o", r924_o)), r441_g2(r924_sx, r924_cy + r441_DToothlessRise, r441_widths.lhs(r924_sw))];
            };
            return r906_exports;
        })();
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r934_t0, _r934_t1;
            return {
                "ArcStartSerifWidth": r441_ArcStartSerifWidth
            };
        });
        var r441_ArcStartSerifWidth = function (r935_stroke) {
            var _r935_t0, _r935_t1;
            return r1_clamp(r935_stroke * 0.875, r935_stroke, r441_VJutStroke);
        };
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r937_t0, _r937_t1;
            return {
                "ArcStartSerifDepth": r441_ArcStartSerifDepth
            };
        });
        var r441_ArcStartSerifDepth = function (r938_hook) {
            var _r938_t0, _r938_t1;
            return r938_hook - 0;
        };
        var r441_ArcStartInwardSerifDepth = function (r939_hook, r939_stroke) {
            var _r939_t0, _r939_t1;
            return Math.max(r939_hook, r441_DToothlessRise + r939_stroke);
        };
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r941_t0, _r941_t1;
            return {
                "ArcStartSerif": r441_ArcStartSerif
            };
        });
        var r441_ArcStartSerif = (function () {
            var r944_L, r944_R, r944_InwardL, r944_InwardR;
            var r944_exports = {};
            r944_exports.L = r944_L = function (r952_cx, r952_cy, r952_stroke, r952_hook, r952_overflow) {
                var _r952_t0, _r952_t1;
                return r441_tagged("arcStartSerifL", r441_VBar.l(r952_cx, r952_cy - r441_ArcStartSerifDepth(r952_hook), r952_cy + r1_fallback(r952_overflow, 0), r441_ArcStartSerifWidth(r952_stroke)));
            };
            r944_exports.R = r944_R = function (r954_cx, r954_cy, r954_stroke, r954_hook, r954_overflow) {
                var _r954_t0, _r954_t1;
                return r441_tagged("arcStartSerifR", r441_VBar.r(r954_cx, r954_cy - r441_ArcStartSerifDepth(r954_hook), r954_cy + r1_fallback(r954_overflow, 0), r441_ArcStartSerifWidth(r954_stroke)));
            };
            r944_exports.InwardL = r944_InwardL = function (r956_cx, r956_cy, r956_stroke, r956_hook) {
                var _r956_t0, _r956_t1;
                return r441_tagged("arcStartSerifL", r441_VBar.l(r956_cx, r956_cy - r441_ArcStartInwardSerifDepth(r956_hook, r956_stroke), r956_cy - r441_DToothlessRise, r441_ArcStartSerifWidth(r956_stroke)));
            };
            r944_exports.InwardR = r944_InwardR = function (r958_cx, r958_cy, r958_stroke, r958_hook) {
                var _r958_t0, _r958_t1;
                return r441_tagged("arcStartSerifR", r441_VBar.r(r958_cx, r958_cy - r441_ArcStartInwardSerifDepth(r958_hook, r958_stroke), r958_cy - r441_DToothlessRise, r441_ArcStartSerifWidth(r958_stroke)));
            };
            return r944_exports;
        })();
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r960_t0, _r960_t1;
            return {
                "ArcEndSerif": r441_ArcEndSerif
            };
        });
        var r441_ArcEndSerif = (function () {
            var r963_L, r963_R, r963_InwardL, r963_InwardR;
            var r963_exports = {};
            r963_exports.L = r963_L = function (r971_cx, r971_cy, r971_stroke, r971_hook, r971_overflow) {
                var _r971_t0, _r971_t1;
                return r441_tagged("arcEndSerifL", r441_VBar.l(r971_cx, r971_cy + r441_ArcStartSerifDepth(r971_hook), r971_cy - r1_fallback(r971_overflow, 0), r441_ArcStartSerifWidth(r971_stroke)));
            };
            r963_exports.R = r963_R = function (r973_cx, r973_cy, r973_stroke, r973_hook, r973_overflow) {
                var _r973_t0, _r973_t1;
                return r441_tagged("arcEndSerifR", r441_VBar.r(r973_cx, r973_cy + r441_ArcStartSerifDepth(r973_hook), r973_cy - r1_fallback(r973_overflow, 0), r441_ArcStartSerifWidth(r973_stroke)));
            };
            r963_exports.InwardL = r963_InwardL = function (r975_cx, r975_cy, r975_stroke, r975_hook) {
                var _r975_t0, _r975_t1;
                return r441_tagged("arcEndSerifL", r441_VBar.l(r975_cx, r975_cy + r441_ArcStartInwardSerifDepth(r975_hook, r975_stroke), r975_cy + r441_DToothlessRise, r441_ArcStartSerifWidth(r975_stroke)));
            };
            r963_exports.InwardR = r963_InwardR = function (r977_cx, r977_cy, r977_stroke, r977_hook) {
                var _r977_t0, _r977_t1;
                return r441_tagged("arcEndSerifR", r441_VBar.r(r977_cx, r977_cy + r441_ArcStartInwardSerifDepth(r977_hook, r977_stroke), r977_cy + r441_DToothlessRise, r441_ArcStartSerifWidth(r977_stroke)));
            };
            return r963_exports;
        })();
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r979_t0, _r979_t1;
            return {
                "DiagTail": r441_DiagTail
            };
        });
        var r441_DiagTail = (function () {
            var r982_StdDepth, r982_F, r982_R, r982_L;
            var r982_exports = {};
            r982_exports.StdDepth = r982_StdDepth = function (r990_df, r990_sw) {
                var _r990_t0, _r990_t1;
                return Math.max(0.5 * r990_sw, r990_df.adws * r441_para.unitWidthScalar * r441_DiagTailDepth - 0.25 * r990_sw);
            };
            var r982_FineSw = function (r991_sw) {
                var _r991_t0, _r991_t1;
                var r991_mocFine = r441_AdviceStroke(2.5) * (r991_sw / r441_Stroke);
                return r991_mocFine / r1_mix(1, r441_HVContrast, 0.375);
            };
            var r982_DiagTailSuperness = r1_DesignParameters.superness;
            var r982_superEllipse = function (r992_theta) {
                var _r992_t0, _r992_t1;
                return [Math.pow(Math.cos(r992_theta), 2 / r982_DiagTailSuperness), Math.pow(Math.sin(r992_theta), 2 / r982_DiagTailSuperness)];
            };
            var r982_superEllipseDerivative = function (r995_theta) {
                var _r995_t0, _r995_t1;
                var r995_dc = 2 / r982_DiagTailSuperness * Math.sin(-r995_theta) * Math.pow(Math.cos(r995_theta), 2 / r982_DiagTailSuperness - 1);
                var r995_ds = 2 / r982_DiagTailSuperness * Math.cos(-r995_theta) * Math.pow(Math.sin(r995_theta), 2 / r982_DiagTailSuperness - 1);
                var r995_h = Math.hypot(r995_dc, r995_ds);
                return [r995_dc / r995_h, r995_ds / r995_h];
            };
            var r982_FArc = function (r998_tailAngle, r998_n) {
                var r998_t, r998_tc, r998_ts, r998_ec, r998_es, _r998_t2, _r998_t3, _r998_t4, _r998_t5;
                var r998_results = [];
                var _r998_t0 = 1;
                var _r998_t1 = r998_n;
                var r998_i = _r998_t0;
                while (r998_i < _r998_t1) {
                    r998_t = r998_i / r998_n;
                    _r998_t2 = r982_superEllipse(r998_t * r998_tailAngle);
                    r998_tc = _r998_t2[0];
                    r998_ts = _r998_t2[1];
                    _r998_t3 = r982_superEllipse(r998_tailAngle);
                    r998_ec = _r998_t3[0];
                    r998_es = _r998_t3[1];
                    r998_results.push([r998_ts / r998_es, (1 - r998_tc) / (1 - r998_ec)]);
                    r998_i = r998_i + 1;
                }
                return r998_results;
            };
            r982_exports.F = r982_F = function (r1001_sign, r1001_cx, r1001_cy, r1001_rIn, r1001_angle, r1001_depth, r1001_sw) {
                var _r1001_t2, _r1001_t3;
                var r1001_tailAngle = r1001_angle / 180 * Math.PI;
                var _r1001_t0 = r982_superEllipse(r1001_tailAngle);
                var r1001_cosAngle = _r1001_t0[0];
                var r1001_sinAngle = _r1001_t0[1];
                var _r1001_t1 = r982_superEllipseDerivative(r1001_tailAngle);
                var r1001_dCosAngle = _r1001_t1[0];
                var r1001_dSinAngle = _r1001_t1[1];
                var r1001_fine = r982_FineSw(r1001_sw);
                var r1001_dxTurn = r1001_rIn;
                var r1001_dxTailStart = r1001_dxTurn + r1001_sinAngle * r1001_rIn;
                var r1001_dyTailStart = r1001_rIn + r1001_fine - r1001_cosAngle * r1001_rIn;
                var r1001_dxDepth = (r1001_depth - 0.25 * r1001_sw) * +r1001_dSinAngle;
                var r1001_dyDepth = (r1001_depth - 0.25 * r1001_sw) * -r1001_dCosAngle;
                return [r441_g4[r1001_sign > 0 ? "right" : "left"].mid(r1001_cx + r1001_sign * r1001_dxTurn, r1001_cy + r441_O + r1001_fine, (r1001_sign > 0 ? r441_widths.rhs : r441_widths.lhs)(r1001_fine)), r441_alsoThruThem(r982_FArc(r1001_tailAngle, 4)), r441_flat(r1001_cx + r1001_sign * r1001_dxTailStart, r1001_cy + r441_O + r1001_dyTailStart), r441_curl(r1001_cx + r1001_sign * (r1001_dxTailStart + r1001_dxDepth), r1001_cy + r441_O + r1001_dyTailStart + r1001_dyDepth)];
            };
            r982_exports.R = r982_R = function (r1003_cx, r1003_cy, r1003_depth, r1003_sw) {
                var _r1003_t0, _r1003_t1;
                var r1003_rInY = 1 * r441_TightBendInnerRadius;
                var r1003_innerX = r1003_cx + r441_HSwToV(0.5 * r1003_sw);
                return [r441_curl(r1003_innerX, r1003_cy + r982_FineSw(r1003_sw) + r1003_rInY, r441_widths.rhs(r1003_sw)), r441_arcvh(8, r982_DiagTailSuperness), r982_F(+1, r1003_innerX, r1003_cy, r1003_rInY, r441_DiagTailAngle, r1003_depth, r1003_sw)];
            };
            r982_exports.L = r982_L = function (r1005_cx, r1005_cy, r1005_depth, r1005_sw) {
                var _r1005_t0, _r1005_t1;
                var r1005_rInY = 1 * r441_TightBendInnerRadius;
                var r1005_innerX = r1005_cx - r441_HSwToV(0.5 * r1005_sw);
                return [r441_curl(r1005_innerX, r1005_cy + r982_FineSw(r1005_sw) + r1005_rInY, r441_widths.lhs(r1005_sw)), r441_arcvh(8, r982_DiagTailSuperness), r982_F(-1, r1005_innerX, r1005_cy, r1005_rInY, r441_DiagTailAngle, r1005_depth, r1005_sw)];
            };
            return r982_exports;
        })();
        var r441_JutIn = function (r1006_left, r1006_right, r1006_jut, r1006_swRef, r1006_hSplit) {
            var _r1006_t0, _r1006_t1;
            var r1006_ink = r441_HSwToV(r1006_swRef);
            var r1006_gap = (r1006_right - r1006_left - r1006_hSplit * r1006_ink) / (r1006_hSplit - 1);
            return Math.min(r1006_jut, 0.5 * r1006_ink + Math.max(r441_Stroke * r441_TanSlope, 0.375 * r1006_gap));
        };
        var r441_CSerifFrame = (function (r1008_Super) {
            var _r1008_t0, _r1008_t1;
            var r1008_Constructor = function () {
                var _r1009_t0, _r1009_t1;
                return void 0;
            };
            var r1008_Type = function () {
                var _r1010_t0 = this;
                var _r1010_t1 = arguments;
                r1008_Constructor.apply(_r1010_t0, _r1010_t1);
                return void 0;
            };
            var r1008_Symbol = Symbol;
            (function () {
                var r1012_protectedTerms, _r1012_t0, _r1012_t1;
                r1008_Type.protectedTerms = r1012_protectedTerms = Object.create(r1008_Super.protectedTerms || null);
                r1008_Constructor = function (r1040_top, r1040_bot, r1040_left, r1040_right, r1040_swRef, r1040_swSerif, r1040_adws, r1040_hSplit, r1040_fForceSymmetric) {
                    var _r1040_t1;
                    var _r1040_t0 = this;
                    _r1040_t0.top = r1040_top;
                    _r1040_t0.bot = r1040_bot;
                    _r1040_t0.left = r1040_left;
                    _r1040_t0.right = r1040_right;
                    _r1040_t0.swRef = r1040_swRef;
                    _r1040_t0.swSerif = r1040_swSerif;
                    _r1040_t0.adws = r1040_adws;
                    _r1040_t0.hSplit = r1040_hSplit;
                    _r1040_t0.fForceSymmetric = r1040_fForceSymmetric;
                    var r1040_ink = r441_HSwToV(r1040_swRef);
                    var r1040_coInk = r441_HSwToV(r441_Stroke - r1040_swRef);
                    var r1040_gap = (r1040_right - r1040_left - r1040_hSplit * r1040_ink) / (r1040_hSplit - 1);
                    var r1040_jutFS = r441_MidJutSide - 0.5 * r1040_coInk;
                    var r1040_jutFC = r441_MidJutCenter - 0.5 * r1040_coInk;
                    var r1040_jut = Math.min(r441_Jut - 0.5 * r1040_coInk, r1_mix(0.5 * r1040_ink, r441_Jut, Math.min(1, r1040_adws * 2.25 / r1040_hSplit)));
                    var r1040_sideJut = r1040_jut - 0.5 * r1040_ink;
                    var r1040_jutIn = r1040_fForceSymmetric ? r1040_jut : r441_JutIn(r1040_left, r1040_right, r1040_jut, r1040_swRef, r1040_hSplit);
                    var r1040_sideJutIn = r1040_jutIn - 0.5 * r1040_ink;
                    var r1040_lBarCenter = r1040_left + 0.5 * r1040_ink;
                    var r1040_lBarInner = r1040_left + 1 * r1040_ink;
                    var r1040_rBarCenter = r1040_right - 0.5 * r1040_ink;
                    var r1040_rBarInner = r1040_right - 1 * r1040_ink;
                    _r1040_t0.jut = r1040_jut;
                    _r1040_t0.jutIn = r1040_jutIn;
                    _r1040_t0.sideJut = r1040_sideJut;
                    _r1040_t0.sideJutIn = r1040_sideJutIn;
                    _r1040_t0.enoughSpaceForFullSerifs = 0.5 * r1040_ink + 0.375 * r1040_gap > r441_para.refJut;
                    _r1040_t0.lt = {
                        "full": r441_tagged("serifLT", r441_HSerif.mtAsymmetric(r1040_lBarCenter, r1040_top, r1040_jut, r1040_jutIn, r1040_swSerif)),
                        "fullExt": function (r1046_s) {
                            var _r1046_t0, _r1046_t1;
                            return r441_tagged("serifLT", r441_HSerif.mtAsymmetric(r1040_lBarCenter, r1040_top, r1040_jut, r441_JutIn(r1040_left, r1040_right, r1040_jut, r1040_swRef, r1046_s), r1040_swSerif));
                        },
                        "fullSide": r441_tagged("serifLT", r441_HSerif.mtAsymmetric(r1040_lBarCenter, r1040_top, r1040_jut, r1040_jutFS, r1040_swSerif)),
                        "outer": r441_tagged("serifLT", r441_HSerif.lt(r1040_left, r1040_top, r1040_sideJut, r1040_swSerif)),
                        "inner": r441_tagged("serifLT", r441_HSerif.rt(r1040_lBarInner, r1040_top, r1040_sideJutIn, r1040_swSerif))
                    };
                    _r1040_t0.rt = {
                        "full": r441_tagged("serifRT", r441_HSerif.mtAsymmetric(r1040_rBarCenter, r1040_top, r1040_jutIn, r1040_jut, r1040_swSerif)),
                        "fullExt": function (r1047_s) {
                            var _r1047_t0, _r1047_t1;
                            return r441_tagged("serifRT", r441_HSerif.mtAsymmetric(r1040_rBarCenter, r1040_top, r441_JutIn(r1040_left, r1040_right, r1040_jut, r1040_swRef, r1047_s), r1040_jut, r1040_swSerif));
                        },
                        "fullSide": r441_tagged("serifRT", r441_HSerif.mtAsymmetric(r1040_rBarCenter, r1040_top, r1040_jutFS, r1040_jut, r1040_swSerif)),
                        "outer": r441_tagged("serifRT", r441_HSerif.rt(r1040_right, r1040_top, r1040_sideJut, r1040_swSerif)),
                        "inner": r441_tagged("serifRT", r441_HSerif.lt(r1040_rBarInner, r1040_top, r1040_sideJutIn, r1040_swSerif))
                    };
                    _r1040_t0.lb = {
                        "full": r441_tagged("serifLB", r441_HSerif.mbAsymmetric(r1040_lBarCenter, r1040_bot, r1040_jut, r1040_jutIn, r1040_swSerif)),
                        "fullExt": function (r1048_s) {
                            var _r1048_t0, _r1048_t1;
                            return r441_tagged("serifLB", r441_HSerif.mbAsymmetric(r1040_lBarCenter, r1040_bot, r1040_jut, r441_JutIn(r1040_left, r1040_right, r1040_jut, r1040_swRef, r1048_s), r1040_swSerif));
                        },
                        "fullSide": r441_tagged("serifLB", r441_HSerif.mbAsymmetric(r1040_lBarCenter, r1040_bot, r1040_jut, r1040_jutFS, r1040_swSerif)),
                        "outer": r441_tagged("serifLB", r441_HSerif.lb(r1040_left, r1040_bot, r1040_sideJut, r1040_swSerif)),
                        "inner": r441_tagged("serifLB", r441_HSerif.rb(r1040_lBarInner, r1040_bot, r1040_sideJutIn, r1040_swSerif))
                    };
                    _r1040_t0.rb = {
                        "full": r441_tagged("serifRB", r441_HSerif.mbAsymmetric(r1040_rBarCenter, r1040_bot, r1040_jutIn, r1040_jut, r1040_swSerif)),
                        "fullExt": function (r1049_s) {
                            var _r1049_t0, _r1049_t1;
                            return r441_tagged("serifRB", r441_HSerif.mbAsymmetric(r1040_rBarCenter, r1040_bot, r441_JutIn(r1040_left, r1040_right, r1040_jut, r1040_swRef, r1049_s), r1040_jut, r1040_swSerif));
                        },
                        "fullSide": r441_tagged("serifRB", r441_HSerif.mbAsymmetric(r1040_rBarCenter, r1040_bot, r1040_jutFS, r1040_jut, r1040_swSerif)),
                        "outer": r441_tagged("serifRB", r441_HSerif.rb(r1040_right, r1040_bot, r1040_sideJut, r1040_swSerif)),
                        "inner": r441_tagged("serifRB", r441_HSerif.lb(r1040_rBarInner, r1040_bot, r1040_sideJutIn, r1040_swSerif))
                    };
                    _r1040_t0.mb = {
                        "full": r441_tagged("serifMB", r441_HSerif.mbAsymmetric(r1_mix(r1040_lBarCenter, r1040_rBarCenter, 0.5), r1040_bot, r1040_jutIn, r1040_jutIn, r1040_swSerif)),
                        "fullAt": function (r1050_x) {
                            var _r1050_t0, _r1050_t1;
                            return r441_tagged("serifMB", r441_HSerif.mbAsymmetric(r1050_x, r1040_bot, r1040_jutIn, r1040_jutIn, r1040_swSerif));
                        },
                        "fullCenter": r441_tagged("serifMB", r441_HSerif.mbAsymmetric(r1_mix(r1040_lBarCenter, r1040_rBarCenter, 0.5), r1040_bot, r1040_jutFC, r1040_jutFC, r1040_swSerif)),
                        "fullCenterAt": function (r1051_x) {
                            var _r1051_t0, _r1051_t1;
                            return r441_tagged("serifMB", r441_HSerif.mbAsymmetric(r1051_x, r1040_bot, r1040_jutFC, r1040_jutFC, r1040_swSerif));
                        },
                        "left": r441_tagged("serifMB", r441_HSerif.mbAsymmetric(r1_mix(r1040_lBarCenter, r1040_rBarCenter, 0.5), r1040_bot, r1040_jutIn, 0, r1040_swSerif)),
                        "leftAt": function (r1052_x) {
                            var _r1052_t0, _r1052_t1;
                            return r441_tagged("serifMB", r441_HSerif.mbAsymmetric(r1052_x, r1040_bot, r1040_jutIn, 0, r1040_swSerif));
                        },
                        "right": r441_tagged("serifMB", r441_HSerif.mbAsymmetric(r1_mix(r1040_lBarCenter, r1040_rBarCenter, 0.5), r1040_bot, 0, r1040_jutIn, r1040_swSerif)),
                        "rightAt": function (r1053_x) {
                            var _r1053_t0, _r1053_t1;
                            return r441_tagged("serifMB", r441_HSerif.mbAsymmetric(r1053_x, r1040_bot, 0, r1040_jutIn, r1040_swSerif));
                        }
                    };
                    _r1040_t0.mt = {
                        "full": r441_tagged("serifMT", r441_HSerif.mtAsymmetric(r1_mix(r1040_lBarCenter, r1040_rBarCenter, 0.5), r1040_top, r1040_jutIn, r1040_jutIn, r1040_swSerif)),
                        "fullAt": function (r1054_x) {
                            var _r1054_t0, _r1054_t1;
                            return r441_tagged("serifMT", r441_HSerif.mtAsymmetric(r1054_x, r1040_top, r1040_jutIn, r1040_jutIn, r1040_swSerif));
                        },
                        "fullCenter": r441_tagged("serifMT", r441_HSerif.mtAsymmetric(r1_mix(r1040_lBarCenter, r1040_rBarCenter, 0.5), r1040_top, r1040_jutFC, r1040_jutFC, r1040_swSerif)),
                        "fullCenterAt": function (r1055_x) {
                            var _r1055_t0, _r1055_t1;
                            return r441_tagged("serifMT", r441_HSerif.mtAsymmetric(r1055_x, r1040_top, r1040_jutFC, r1040_jutFC, r1040_swSerif));
                        },
                        "left": r441_tagged("serifMT", r441_HSerif.mtAsymmetric(r1_mix(r1040_lBarCenter, r1040_rBarCenter, 0.5), r1040_top, r1040_jutIn, 0, r1040_swSerif)),
                        "leftAt": function (r1056_x) {
                            var _r1056_t0, _r1056_t1;
                            return r441_tagged("serifMT", r441_HSerif.mtAsymmetric(r1056_x, r1040_top, r1040_jutIn, 0, r1040_swSerif));
                        },
                        "right": r441_tagged("serifMT", r441_HSerif.mtAsymmetric(r1_mix(r1040_lBarCenter, r1040_rBarCenter, 0.5), r1040_top, 0, r1040_jutIn, r1040_swSerif)),
                        "rightAt": function (r1057_x) {
                            var _r1057_t0, _r1057_t1;
                            return r441_tagged("serifMT", r441_HSerif.mtAsymmetric(r1057_x, r1040_top, 0, r1040_jutIn, r1040_swSerif));
                        }
                    };
                    return void 0;
                };
                r1008_Type.prototype.slice = function (r1058_l, r1058_r) {
                    var _r1058_t1;
                    var _r1058_t0 = this;
                    var r1058_ink = r441_HSwToV(_r1058_t0.swRef);
                    var r1058_gap = (_r1058_t0.right - _r1058_t0.left - _r1058_t0.hSplit * r1058_ink) / (_r1058_t0.hSplit - 1);
                    var r1058_l1 = _r1058_t0.left + (r1058_ink + r1058_gap) * r1058_l;
                    var r1058_r1 = _r1058_t0.left + (r1058_ink + r1058_gap) * r1058_r + r1058_ink;
                    return new r441_CSerifFrame(_r1058_t0.top, _r1058_t0.bot, r1058_l1, r1058_r1, _r1058_t0.swRef, _r1058_t0.swSerif, _r1058_t0.adws, r1058_r - r1058_l + 1);
                };
                return void 0;
            }).call(r1008_Type.prototype);
            return r1008_Type;
        })(Object);
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r1065_t0, _r1065_t1;
            return {
                "SerifFrame": r441_SerifFrame
            };
        });
        var r441_SerifFrame = function () {
            var _r1067_t5;
            var _r1067_t6 = arguments;
            var r1067_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1067_t6, 0);
            var _r1067_t0 = [];
            var _r1067_t1 = 0;
            while (_r1067_t1 < r1067_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r1067_xn$flexarguments$2Lrc7uIe5[_r1067_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1067_t0.push(r1067_xn$flexarguments$2Lrc7uIe5[_r1067_t1]);
                _r1067_t1 = _r1067_t1 + 1;
            }
            var _r1067_t2 = r1067_xn$flexarguments$2Lrc7uIe5;
            var _r1067_t3 = _r1067_t2.length;
            var _r1067_t4 = 0;
            while (_r1067_t4 < _r1067_t3) {
                _r1067_t1 = _r1067_t2[_r1067_t4];
                if (_r1067_t1 && _r1067_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1067_t1.left === "top") r1067_top = _r1067_t1.right;
                if (_r1067_t1 && _r1067_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1067_t1.left === "bot") r1067_bot = _r1067_t1.right;
                if (_r1067_t1 && _r1067_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1067_t1.left === "left") r1067_left = _r1067_t1.right;
                if (_r1067_t1 && _r1067_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1067_t1.left === "right") r1067_right = _r1067_t1.right;
                if (_r1067_t1 && _r1067_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1067_t1.left === "swRef") r1067_swRef = _r1067_t1.right;
                if (_r1067_t1 && _r1067_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1067_t1.left === "swSerif") r1067_swSerif = _r1067_t1.right;
                if (_r1067_t1 && _r1067_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1067_t1.left === "adws") r1067_adws = _r1067_t1.right;
                if (_r1067_t1 && _r1067_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1067_t1.left === "hSplit") r1067_hSplit = _r1067_t1.right;
                if (_r1067_t1 && _r1067_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1067_t1.left === "fForceSymmetric") r1067_fForceSymmetric = _r1067_t1.right;
                _r1067_t4 = _r1067_t4 + 1;
            }
            var r1067_top = r1_fallback(r1067_top, _r1067_t0[0]);
            var r1067_bot = r1_fallback(r1067_bot, _r1067_t0[1]);
            var r1067_left = r1_fallback(r1067_left, _r1067_t0[2]);
            var r1067_right = r1_fallback(r1067_right, _r1067_t0[3]);
            var r1067_swRef = r1_fallback(r1067_swRef, _r1067_t0[4], r441_Stroke);
            var r1067_swSerif = r1_fallback(r1067_swSerif, _r1067_t0[5], r1067_swRef);
            var r1067_adws = r1_fallback(r1067_adws, _r1067_t0[6], 1);
            var r1067_hSplit = r1_fallback(r1067_hSplit, _r1067_t0[7], 2);
            var r1067_fForceSymmetric = r1_fallback(r1067_fForceSymmetric, _r1067_t0[8], false);
            return new r441_CSerifFrame(r1067_top, r1067_bot, r1067_left, r1067_right, r1067_swRef, r1067_swSerif, r1067_adws, r1067_hSplit, r1067_fForceSymmetric);
        };
        r441_SerifFrame.fromDf = function () {
            var _r1071_t5;
            var _r1071_t6 = arguments;
            var r1071_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1071_t6, 0);
            var _r1071_t0 = [];
            var _r1071_t1 = 0;
            while (_r1071_t1 < r1071_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r1071_xn$flexarguments$2Lrc7uIe5[_r1071_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1071_t0.push(r1071_xn$flexarguments$2Lrc7uIe5[_r1071_t1]);
                _r1071_t1 = _r1071_t1 + 1;
            }
            var _r1071_t2 = r1071_xn$flexarguments$2Lrc7uIe5;
            var _r1071_t3 = _r1071_t2.length;
            var _r1071_t4 = 0;
            while (_r1071_t4 < _r1071_t3) {
                _r1071_t1 = _r1071_t2[_r1071_t4];
                if (_r1071_t1 && _r1071_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1071_t1.left === "df") r1071_df = _r1071_t1.right;
                if (_r1071_t1 && _r1071_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1071_t1.left === "top") r1071_top = _r1071_t1.right;
                if (_r1071_t1 && _r1071_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1071_t1.left === "bot") r1071_bot = _r1071_t1.right;
                if (_r1071_t1 && _r1071_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1071_t1.left === "swRef") r1071_swRef = _r1071_t1.right;
                if (_r1071_t1 && _r1071_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1071_t1.left === "swSerif") r1071_swSerif = _r1071_t1.right;
                if (_r1071_t1 && _r1071_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1071_t1.left === "fForceSymmetric") r1071_fForceSymmetric = _r1071_t1.right;
                _r1071_t4 = _r1071_t4 + 1;
            }
            var r1071_df = r1_fallback(r1071_df, _r1071_t0[0]);
            var r1071_top = r1_fallback(r1071_top, _r1071_t0[1]);
            var r1071_bot = r1_fallback(r1071_bot, _r1071_t0[2]);
            var r1071_swRef = r1_fallback(r1071_swRef, _r1071_t0[3], r1071_df.mvs);
            var r1071_swSerif = r1_fallback(r1071_swSerif, _r1071_t0[4], r1071_swRef);
            var r1071_fForceSymmetric = r1_fallback(r1071_fForceSymmetric, _r1071_t0[5], false);
            return r441_SerifFrame(r1071_top, r1071_bot, r1071_df.leftSB, r1071_df.rightSB, new r441_xn$NamedParameterPair$2Lrc9b("swRef", r1071_swRef), new r441_xn$NamedParameterPair$2Lrc9b("adws", r1071_df.adws), new r441_xn$NamedParameterPair$2Lrc9b("hSplit", Math.max(2, r1071_df.hPack)), new r441_xn$NamedParameterPair$2Lrc9b("swSerif", r1071_swSerif), new r441_xn$NamedParameterPair$2Lrc9b("fForceSymmetric", r1071_fForceSymmetric));
        };
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r1082_t0, _r1082_t1;
            return {
                "WithSerifOverflowMask": r441_WithSerifOverflowMask
            };
        });
        var r441_WithSerifOverflowMask = function (r1083_fEnable, r1083_box, r1083_s) {
            var _r1083_t0, _r1083_t1;
            if (!r1083_fEnable) return r1083_s;
            var r1083_leftCenter = r1083_box.l + r441_HSwToV(r441_HalfStroke);
            var r1083_rightCenter = r1083_box.r - r441_HSwToV(r441_HalfStroke);
            return r441_intersection(r1083_s, r441_union(r441_Rect(r1083_box.t, r1_mix(r1083_box.t, r1083_box.b, 0.5), r1083_leftCenter - r441_Jut, r1083_rightCenter + r441_Jut - r441_SerifShiftS), r441_Rect(r1_mix(r1083_box.t, r1083_box.b, 0.5), r1083_box.b, r1083_leftCenter - r441_Jut + r441_SerifShiftS, r1083_rightCenter + r441_Jut)));
        };
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r1085_t0, _r1085_t1;
            return {
                "LegShape": r441_LegShape
            };
        });
        var r441_LegShape = function () {
            var _r1086_t5;
            var _r1086_t6 = arguments;
            var r1086_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1086_t6, 0);
            var _r1086_t0 = [];
            var _r1086_t1 = 0;
            while (_r1086_t1 < r1086_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r1086_xn$flexarguments$2Lrc7uIe5[_r1086_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1086_t0.push(r1086_xn$flexarguments$2Lrc7uIe5[_r1086_t1]);
                _r1086_t1 = _r1086_t1 + 1;
            }
            var _r1086_t2 = r1086_xn$flexarguments$2Lrc7uIe5;
            var _r1086_t3 = _r1086_t2.length;
            var _r1086_t4 = 0;
            while (_r1086_t4 < _r1086_t3) {
                _r1086_t1 = _r1086_t2[_r1086_t4];
                if (_r1086_t1 && _r1086_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1086_t1.left === "ztop") r1086_ztop = _r1086_t1.right;
                if (_r1086_t1 && _r1086_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1086_t1.left === "zbot") r1086_zbot = _r1086_t1.right;
                if (_r1086_t1 && _r1086_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1086_t1.left === "xmid") r1086_xmid = _r1086_t1.right;
                if (_r1086_t1 && _r1086_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1086_t1.left === "sw") r1086_sw = _r1086_t1.right;
                _r1086_t4 = _r1086_t4 + 1;
            }
            var r1086_ztop = r1_fallback(r1086_ztop, _r1086_t0[0]);
            var r1086_zbot = r1_fallback(r1086_zbot, _r1086_t0[1]);
            var r1086_xmid = r1_fallback(r1086_xmid, _r1086_t0[2]);
            var r1086_sw = r1_fallback(r1086_sw, _r1086_t0[3], r441_Stroke);
            return new r441_xn$Capture$2Lrc8.GlyphProc(function (r1092_currentGlyph) {
                var _r1092_t0, _r1092_t1;
                r1092_currentGlyph.include(r441_dispiro(r441_widths.lhs(r1086_sw), r441_flat(r1086_ztop.x, r1086_ztop.y, r441_heading(r441_Downward)), r441_curl(r1086_xmid, r1_mix(r1086_ztop.y, r1086_zbot.y + r1086_sw / 2 + r441_TailY, 0.75)), r441_alsoThruThem([[0.2, 0.76], [0.3, 0.85], [0.5, 0.94]]), r441_straight.left.end(r1086_zbot.x, r1086_zbot.y + r1086_sw, r441_heading(r441_Leftward))));
                return void 0;
            });
        };
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r1095_t0, _r1095_t1;
            return {
                "UpwardHookShape": r441_UpwardHookShape
            };
        });
        var r441_UpwardHookShape = function () {
            var _r1096_t5;
            var _r1096_t6 = arguments;
            var r1096_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1096_t6, 0);
            var _r1096_t0 = [];
            var _r1096_t1 = 0;
            while (_r1096_t1 < r1096_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r1096_xn$flexarguments$2Lrc7uIe5[_r1096_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1096_t0.push(r1096_xn$flexarguments$2Lrc7uIe5[_r1096_t1]);
                _r1096_t1 = _r1096_t1 + 1;
            }
            var _r1096_t2 = r1096_xn$flexarguments$2Lrc7uIe5;
            var _r1096_t3 = _r1096_t2.length;
            var _r1096_t4 = 0;
            while (_r1096_t4 < _r1096_t3) {
                _r1096_t1 = _r1096_t2[_r1096_t4];
                if (_r1096_t1 && _r1096_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1096_t1.left === "left") r1096_left = _r1096_t1.right;
                if (_r1096_t1 && _r1096_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1096_t1.left === "right") r1096_right = _r1096_t1.right;
                if (_r1096_t1 && _r1096_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1096_t1.left === "ybegin") r1096_ybegin = _r1096_t1.right;
                if (_r1096_t1 && _r1096_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1096_t1.left === "yend") r1096_yend = _r1096_t1.right;
                if (_r1096_t1 && _r1096_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1096_t1.left === "bottom") r1096_bottom = _r1096_t1.right;
                if (_r1096_t1 && _r1096_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1096_t1.left === "ada") r1096_ada = _r1096_t1.right;
                if (_r1096_t1 && _r1096_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1096_t1.left === "adb") r1096_adb = _r1096_t1.right;
                if (_r1096_t1 && _r1096_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1096_t1.left === "sw") r1096_sw = _r1096_t1.right;
                _r1096_t4 = _r1096_t4 + 1;
            }
            var r1096_left = r1_fallback(r1096_left, _r1096_t0[0]);
            var r1096_right = r1_fallback(r1096_right, _r1096_t0[1]);
            var r1096_ybegin = r1_fallback(r1096_ybegin, _r1096_t0[2]);
            var r1096_yend = r1_fallback(r1096_yend, _r1096_t0[3]);
            var r1096_bottom = r1_fallback(r1096_bottom, _r1096_t0[4], 0);
            var r1096_ada = r1_fallback(r1096_ada, _r1096_t0[5], r441_ArchDepthA);
            var r1096_adb = r1_fallback(r1096_adb, _r1096_t0[6], r441_ArchDepthB);
            var r1096_sw = r1_fallback(r1096_sw, _r1096_t0[7], r441_Stroke);
            return new r441_xn$Capture$2Lrc8.GlyphProc(function (r1102_currentGlyph) {
                var _r1102_t0, _r1102_t1;
                r1102_currentGlyph.include(r441_dispiro(r441_widths.lhs(r1096_sw), r441_flat(r1096_left, r1096_ybegin, r441_heading(r441_Downward)), r441_curl(r1096_left, Math.min(r1096_bottom + r1096_adb, r1096_ybegin - r441_TINY)), r441_Arch.lhs(r1096_bottom, new r441_xn$NamedParameterPair$2Lrc9b("sw", r1096_sw)), r441_flat(r1096_right, Math.min(r1096_bottom + r1096_ada, r1096_yend - r441_TINY)), r441_curl(r1096_right, r1096_yend, r441_heading(r441_Upward))));
                return void 0;
            });
        };
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r1106_t0, _r1106_t1;
            return {
                "RhoticHookShape": r441_RhoticHookShape
            };
        });
        var r441_RhoticHookShape = function () {
            var _r1107_t5;
            var _r1107_t6 = arguments;
            var r1107_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1107_t6, 0);
            var _r1107_t0 = [];
            var _r1107_t1 = 0;
            while (_r1107_t1 < r1107_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r1107_xn$flexarguments$2Lrc7uIe5[_r1107_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1107_t0.push(r1107_xn$flexarguments$2Lrc7uIe5[_r1107_t1]);
                _r1107_t1 = _r1107_t1 + 1;
            }
            var _r1107_t2 = r1107_xn$flexarguments$2Lrc7uIe5;
            var _r1107_t3 = _r1107_t2.length;
            var _r1107_t4 = 0;
            while (_r1107_t4 < _r1107_t3) {
                _r1107_t1 = _r1107_t2[_r1107_t4];
                if (_r1107_t1 && _r1107_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1107_t1.left === "left") r1107_left = _r1107_t1.right;
                if (_r1107_t1 && _r1107_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1107_t1.left === "right") r1107_right = _r1107_t1.right;
                if (_r1107_t1 && _r1107_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1107_t1.left === "y") r1107_y = _r1107_t1.right;
                if (_r1107_t1 && _r1107_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1107_t1.left === "rise") r1107_rise = _r1107_t1.right;
                if (_r1107_t1 && _r1107_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1107_t1.left === "sw") r1107_sw = _r1107_t1.right;
                if (_r1107_t1 && _r1107_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1107_t1.left === "doHook") r1107_doHook = _r1107_t1.right;
                _r1107_t4 = _r1107_t4 + 1;
            }
            var r1107_left = r1_fallback(r1107_left, _r1107_t0[0]);
            var r1107_right = r1_fallback(r1107_right, _r1107_t0[1]);
            var r1107_y = r1_fallback(r1107_y, _r1107_t0[2]);
            var r1107_rise = r1_fallback(r1107_rise, _r1107_t0[3]);
            var r1107_sw = r1_fallback(r1107_sw, _r1107_t0[4], r441_AdviceStroke(5));
            var r1107_doHook = r1_fallback(r1107_doHook, _r1107_t0[5], false);
            return new r441_xn$Capture$2Lrc8.GlyphProc(function (r1113_currentGlyph) {
                var _r1113_t0, _r1113_t1;
                var r1113_mid = r1_mix(r1107_left, r1107_right, 0.5);
                r1113_currentGlyph.include(r441_dispiro(r441_widths.rhs(r1107_sw), r441_g2(r1107_left - r441_HSwToV(0.5 * r1107_sw), r1107_y + 0), r441_g2(r1113_mid - r441_HSwToV(0.5 * r1107_sw), r1107_y + r1107_rise)));
                r1113_currentGlyph.include(r441_dispiro(r441_widths.center(r1107_sw), r441_flat(r1113_mid, r1107_y + r1107_rise, r441_heading(r441_Downward)), r441_curl(r1113_mid, r1107_y + (r1107_doHook ? 0 : r1107_rise - 1), r441_heading(r441_Downward)), r1107_doHook ? [r441_HookEnd(r1107_y - r1107_rise, new r441_xn$NamedParameterPair$2Lrc9b("sw", r1107_sw))] : [r441_arcvh()], r441_g4(r1107_right - (r1107_doHook ? r1107_sw : 0), r1107_y - (r1107_doHook ? r1107_rise * 0.5 : r1107_rise), r1107_doHook ? void 0 : r441_heading(r441_Rightward))));
                return void 0;
            });
        };
        r441_xn$ExportCapture$2Lrc4b(function () {
            var _r1118_t0, _r1118_t1;
            return {
                "VerticalHook": r441_VerticalHook
            };
        });
        var r441_VerticalHook = (function () {
            var r1121_m, r1121_l, r1121_r;
            var r1121_exports = {};
            r1121_exports.m = r1121_m = function () {
                var _r1129_t5;
                var _r1129_t6 = arguments;
                var r1129_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1129_t6, 0);
                var _r1129_t0 = [];
                var _r1129_t1 = 0;
                while (_r1129_t1 < r1129_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r1129_xn$flexarguments$2Lrc7uIe5[_r1129_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1129_t0.push(r1129_xn$flexarguments$2Lrc7uIe5[_r1129_t1]);
                    _r1129_t1 = _r1129_t1 + 1;
                }
                var _r1129_t2 = r1129_xn$flexarguments$2Lrc7uIe5;
                var _r1129_t3 = _r1129_t2.length;
                var _r1129_t4 = 0;
                while (_r1129_t4 < _r1129_t3) {
                    _r1129_t1 = _r1129_t2[_r1129_t4];
                    if (_r1129_t1 && _r1129_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1129_t1.left === "x") r1129_x = _r1129_t1.right;
                    if (_r1129_t1 && _r1129_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1129_t1.left === "y") r1129_y = _r1129_t1.right;
                    if (_r1129_t1 && _r1129_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1129_t1.left === "xDepth") r1129_xDepth = _r1129_t1.right;
                    if (_r1129_t1 && _r1129_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1129_t1.left === "yDepth") r1129_yDepth = _r1129_t1.right;
                    if (_r1129_t1 && _r1129_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1129_t1.left === "sw") r1129_sw = _r1129_t1.right;
                    if (_r1129_t1 && _r1129_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1129_t1.left === "yExtension") r1129_yExtension = _r1129_t1.right;
                    _r1129_t4 = _r1129_t4 + 1;
                }
                var r1129_x = r1_fallback(r1129_x, _r1129_t0[0]);
                var r1129_y = r1_fallback(r1129_y, _r1129_t0[1]);
                var r1129_xDepth = r1_fallback(r1129_xDepth, _r1129_t0[2]);
                var r1129_yDepth = r1_fallback(r1129_yDepth, _r1129_t0[3]);
                var r1129_sw = r1_fallback(r1129_sw, _r1129_t0[4], r441_Stroke);
                var r1129_yExtension = r1_fallback(r1129_yExtension, _r1129_t0[5], 0);
                var r1129_hd = r441_FlatHookDepth(r441_DivFrame(1));
                var r1129_hdX = r1129_xDepth < 0 ? -r1129_hd.x : r1129_hd.x;
                var r1129_hdY = r1129_yDepth < 0 ? -r1129_hd.y : r1129_hd.y;
                var r1129_y2 = r1129_yDepth > 0 ? Math.min(r1129_y - r1129_yDepth + r1129_hd.y - 0.25 * r1129_sw, r1129_y - r441_TINY) : Math.max(r1129_y - r1129_yDepth - r1129_hd.y + 0.25 * r1129_sw, r1129_y + r441_TINY);
                var r1129_x3 = r1129_xDepth > 0 ? Math.min(r1129_x + r1129_xDepth - r441_TINY, r1129_x + r1129_hd.x - r441_HSwToV(0.25 * r1129_sw)) : Math.max(r1129_x + r1129_xDepth + r441_TINY, r1129_x - r1129_hd.x + r441_HSwToV(0.25 * r1129_sw));
                return r441_dispiro(r441_widths.center(r1129_sw), r441_flat(r1129_x, r1129_y + r1129_yExtension, r441_heading(r1129_yDepth > 0 ? r441_Downward : r441_Upward)), r441_curl(r1129_x, r1129_y2, r441_heading(r1129_yDepth > 0 ? r441_Downward : r441_Upward)), r441_arcvh(), r441_flat(r1129_x3, r1129_y - r1129_yDepth), r441_curl(r1129_x + r1129_xDepth, r1129_y - r1129_yDepth));
            };
            r1121_exports.l = r1121_l = function () {
                var _r1135_t5;
                var _r1135_t6 = arguments;
                var r1135_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1135_t6, 0);
                var _r1135_t0 = [];
                var _r1135_t1 = 0;
                while (_r1135_t1 < r1135_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r1135_xn$flexarguments$2Lrc7uIe5[_r1135_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1135_t0.push(r1135_xn$flexarguments$2Lrc7uIe5[_r1135_t1]);
                    _r1135_t1 = _r1135_t1 + 1;
                }
                var _r1135_t2 = r1135_xn$flexarguments$2Lrc7uIe5;
                var _r1135_t3 = _r1135_t2.length;
                var _r1135_t4 = 0;
                while (_r1135_t4 < _r1135_t3) {
                    _r1135_t1 = _r1135_t2[_r1135_t4];
                    if (_r1135_t1 && _r1135_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1135_t1.left === "x") r1135_x = _r1135_t1.right;
                    if (_r1135_t1 && _r1135_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1135_t1.left === "y") r1135_y = _r1135_t1.right;
                    if (_r1135_t1 && _r1135_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1135_t1.left === "xDepth") r1135_xDepth = _r1135_t1.right;
                    if (_r1135_t1 && _r1135_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1135_t1.left === "yDepth") r1135_yDepth = _r1135_t1.right;
                    if (_r1135_t1 && _r1135_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1135_t1.left === "sw") r1135_sw = _r1135_t1.right;
                    if (_r1135_t1 && _r1135_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1135_t1.left === "yExtension") r1135_yExtension = _r1135_t1.right;
                    _r1135_t4 = _r1135_t4 + 1;
                }
                var r1135_x = r1_fallback(r1135_x, _r1135_t0[0]);
                var r1135_y = r1_fallback(r1135_y, _r1135_t0[1]);
                var r1135_xDepth = r1_fallback(r1135_xDepth, _r1135_t0[2]);
                var r1135_yDepth = r1_fallback(r1135_yDepth, _r1135_t0[3]);
                var r1135_sw = r1_fallback(r1135_sw, _r1135_t0[4], r441_Stroke);
                var r1135_yExtension = r1_fallback(r1135_yExtension, _r1135_t0[5], 0);
                return r1121_m(new r441_xn$NamedParameterPair$2Lrc9b("x", r1135_x + r441_HSwToV(0.5 * r1135_sw)), new r441_xn$NamedParameterPair$2Lrc9b("y", r1135_y), new r441_xn$NamedParameterPair$2Lrc9b("xDepth", r1135_xDepth), new r441_xn$NamedParameterPair$2Lrc9b("yDepth", r1135_yDepth), new r441_xn$NamedParameterPair$2Lrc9b("sw", r1135_sw), new r441_xn$NamedParameterPair$2Lrc9b("yExtension", r1135_yExtension));
            };
            r1121_exports.r = r1121_r = function () {
                var _r1147_t5;
                var _r1147_t6 = arguments;
                var r1147_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1147_t6, 0);
                var _r1147_t0 = [];
                var _r1147_t1 = 0;
                while (_r1147_t1 < r1147_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r1147_xn$flexarguments$2Lrc7uIe5[_r1147_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1147_t0.push(r1147_xn$flexarguments$2Lrc7uIe5[_r1147_t1]);
                    _r1147_t1 = _r1147_t1 + 1;
                }
                var _r1147_t2 = r1147_xn$flexarguments$2Lrc7uIe5;
                var _r1147_t3 = _r1147_t2.length;
                var _r1147_t4 = 0;
                while (_r1147_t4 < _r1147_t3) {
                    _r1147_t1 = _r1147_t2[_r1147_t4];
                    if (_r1147_t1 && _r1147_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1147_t1.left === "x") r1147_x = _r1147_t1.right;
                    if (_r1147_t1 && _r1147_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1147_t1.left === "y") r1147_y = _r1147_t1.right;
                    if (_r1147_t1 && _r1147_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1147_t1.left === "xDepth") r1147_xDepth = _r1147_t1.right;
                    if (_r1147_t1 && _r1147_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1147_t1.left === "yDepth") r1147_yDepth = _r1147_t1.right;
                    if (_r1147_t1 && _r1147_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1147_t1.left === "sw") r1147_sw = _r1147_t1.right;
                    if (_r1147_t1 && _r1147_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1147_t1.left === "yExtension") r1147_yExtension = _r1147_t1.right;
                    _r1147_t4 = _r1147_t4 + 1;
                }
                var r1147_x = r1_fallback(r1147_x, _r1147_t0[0]);
                var r1147_y = r1_fallback(r1147_y, _r1147_t0[1]);
                var r1147_xDepth = r1_fallback(r1147_xDepth, _r1147_t0[2]);
                var r1147_yDepth = r1_fallback(r1147_yDepth, _r1147_t0[3]);
                var r1147_sw = r1_fallback(r1147_sw, _r1147_t0[4], r441_Stroke);
                var r1147_yExtension = r1_fallback(r1147_yExtension, _r1147_t0[5], 0);
                return r1121_m(new r441_xn$NamedParameterPair$2Lrc9b("x", r1147_x - r441_HSwToV(0.5 * r1147_sw)), new r441_xn$NamedParameterPair$2Lrc9b("y", r1147_y), new r441_xn$NamedParameterPair$2Lrc9b("xDepth", r1147_xDepth), new r441_xn$NamedParameterPair$2Lrc9b("yDepth", r1147_yDepth), new r441_xn$NamedParameterPair$2Lrc9b("sw", r1147_sw), new r441_xn$NamedParameterPair$2Lrc9b("yExtension", r1147_yExtension));
            };
            return r1121_exports;
        })();
        (function () {
            var _r1159_t0, _r1159_tag1, _r1159_t2, _r1159_tag3;
            var r1159_xLinkStroke = function (r1160_xLink, r1160_x, r1160_yAttach, r1160_sw, r1160_refSw) {
                var _r1160_t0, _r1160_t1;
                return r1160_xLink === void 0 ? r441_xn$noshape$3cah() : r441_HBar.b(Math.min(r1160_xLink, r1160_x - r441_HSwToV(0.5 * r1160_sw)), Math.max(r1160_xLink, r1160_x + r441_HSwToV(0.5 * r1160_sw)), r1160_yAttach, r1160_refSw);
            };
            var r1159_Descenders = function (r1161_Impl) {
                var _r1161_t0, _r1161_t1, _r1161_t2, _r1161_tag3;
                return (function () {
                    var r1164_Sw, r1164_adviceGap, r1164_m, r1164_l, r1164_r, r1164_lExt, r1164_mExt, r1164_rExt, r1164_lSideJut, r1164_rSideJut;
                    var r1164_exports = {};
                    r1164_exports.Sw = r1164_Sw = r441_ArcStartSerifWidth;
                    r1164_exports.adviceGap = r1164_adviceGap = function (r1173_refSw) {
                        var _r1173_t0, _r1173_t1;
                        return r441_HSwToV(r1164_Sw(r1173_refSw)) + Math.max(r441_Width / 16, r441_AdviceStroke(12));
                    };
                    r1164_exports.m = r1164_m = function () {
                        var _r1175_t5;
                        var _r1175_t6 = arguments;
                        var r1175_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1175_t6, 0);
                        var _r1175_t0 = [];
                        var _r1175_t1 = 0;
                        while (_r1175_t1 < r1175_xn$flexarguments$2Lrc7uIe5.length) {
                            if (!(r1175_xn$flexarguments$2Lrc7uIe5[_r1175_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1175_t0.push(r1175_xn$flexarguments$2Lrc7uIe5[_r1175_t1]);
                            _r1175_t1 = _r1175_t1 + 1;
                        }
                        var _r1175_t2 = r1175_xn$flexarguments$2Lrc7uIe5;
                        var _r1175_t3 = _r1175_t2.length;
                        var _r1175_t4 = 0;
                        while (_r1175_t4 < _r1175_t3) {
                            _r1175_t1 = _r1175_t2[_r1175_t4];
                            if (_r1175_t1 && _r1175_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1175_t1.left === "x") r1175_x = _r1175_t1.right;
                            if (_r1175_t1 && _r1175_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1175_t1.left === "y") r1175_y = _r1175_t1.right;
                            if (_r1175_t1 && _r1175_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1175_t1.left === "xLink") r1175_xLink = _r1175_t1.right;
                            if (_r1175_t1 && _r1175_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1175_t1.left === "yAttach") r1175_yAttach = _r1175_t1.right;
                            if (_r1175_t1 && _r1175_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1175_t1.left === "yOverflow") r1175_yOverflow = _r1175_t1.right;
                            if (_r1175_t1 && _r1175_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1175_t1.left === "refSw") r1175_refSw = _r1175_t1.right;
                            if (_r1175_t1 && _r1175_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1175_t1.left === "maskOut") r1175_maskOut = _r1175_t1.right;
                            _r1175_t4 = _r1175_t4 + 1;
                        }
                        var r1175_x = r1_fallback(r1175_x, _r1175_t0[0]);
                        var r1175_y = r1_fallback(r1175_y, _r1175_t0[1]);
                        var r1175_xLink = r1_fallback(r1175_xLink, _r1175_t0[2]);
                        var r1175_yAttach = r1_fallback(r1175_yAttach, _r1175_t0[3], r1175_y);
                        var r1175_yOverflow = r1_fallback(r1175_yOverflow, _r1175_t0[4], 0);
                        var r1175_refSw = r1_fallback(r1175_refSw, _r1175_t0[5], r441_Stroke);
                        var r1175_maskOut = r1_fallback(r1175_maskOut, _r1175_t0[6], null);
                        var r1175_sw = r1164_Sw(r1175_refSw);
                        return r1161_Impl(r1175_x, r1175_y, r1175_xLink, r1175_yAttach, r1175_yOverflow, r1175_sw, r1175_refSw, r1175_maskOut);
                    };
                    r1164_exports.l = r1164_l = function () {
                        var _r1181_t5;
                        var _r1181_t6 = arguments;
                        var r1181_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1181_t6, 0);
                        var _r1181_t0 = [];
                        var _r1181_t1 = 0;
                        while (_r1181_t1 < r1181_xn$flexarguments$2Lrc7uIe5.length) {
                            if (!(r1181_xn$flexarguments$2Lrc7uIe5[_r1181_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1181_t0.push(r1181_xn$flexarguments$2Lrc7uIe5[_r1181_t1]);
                            _r1181_t1 = _r1181_t1 + 1;
                        }
                        var _r1181_t2 = r1181_xn$flexarguments$2Lrc7uIe5;
                        var _r1181_t3 = _r1181_t2.length;
                        var _r1181_t4 = 0;
                        while (_r1181_t4 < _r1181_t3) {
                            _r1181_t1 = _r1181_t2[_r1181_t4];
                            if (_r1181_t1 && _r1181_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1181_t1.left === "x") r1181_x = _r1181_t1.right;
                            if (_r1181_t1 && _r1181_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1181_t1.left === "y") r1181_y = _r1181_t1.right;
                            if (_r1181_t1 && _r1181_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1181_t1.left === "xLink") r1181_xLink = _r1181_t1.right;
                            if (_r1181_t1 && _r1181_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1181_t1.left === "yAttach") r1181_yAttach = _r1181_t1.right;
                            if (_r1181_t1 && _r1181_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1181_t1.left === "yOverflow") r1181_yOverflow = _r1181_t1.right;
                            if (_r1181_t1 && _r1181_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1181_t1.left === "refSw") r1181_refSw = _r1181_t1.right;
                            if (_r1181_t1 && _r1181_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1181_t1.left === "maskOut") r1181_maskOut = _r1181_t1.right;
                            _r1181_t4 = _r1181_t4 + 1;
                        }
                        var r1181_x = r1_fallback(r1181_x, _r1181_t0[0]);
                        var r1181_y = r1_fallback(r1181_y, _r1181_t0[1]);
                        var r1181_xLink = r1_fallback(r1181_xLink, _r1181_t0[2]);
                        var r1181_yAttach = r1_fallback(r1181_yAttach, _r1181_t0[3], r1181_y);
                        var r1181_yOverflow = r1_fallback(r1181_yOverflow, _r1181_t0[4], 0);
                        var r1181_refSw = r1_fallback(r1181_refSw, _r1181_t0[5], r441_Stroke);
                        var r1181_maskOut = r1_fallback(r1181_maskOut, _r1181_t0[6], null);
                        var r1181_sw = r1164_Sw(r1181_refSw);
                        return r1161_Impl(r1181_x + r441_HSwToV(0.5 * r1181_sw), r1181_y, r1181_xLink, r1181_yAttach, r1181_yOverflow, r1181_sw, r1181_refSw, r1181_maskOut);
                    };
                    r1164_exports.r = r1164_r = function () {
                        var _r1187_t5;
                        var _r1187_t6 = arguments;
                        var r1187_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1187_t6, 0);
                        var _r1187_t0 = [];
                        var _r1187_t1 = 0;
                        while (_r1187_t1 < r1187_xn$flexarguments$2Lrc7uIe5.length) {
                            if (!(r1187_xn$flexarguments$2Lrc7uIe5[_r1187_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1187_t0.push(r1187_xn$flexarguments$2Lrc7uIe5[_r1187_t1]);
                            _r1187_t1 = _r1187_t1 + 1;
                        }
                        var _r1187_t2 = r1187_xn$flexarguments$2Lrc7uIe5;
                        var _r1187_t3 = _r1187_t2.length;
                        var _r1187_t4 = 0;
                        while (_r1187_t4 < _r1187_t3) {
                            _r1187_t1 = _r1187_t2[_r1187_t4];
                            if (_r1187_t1 && _r1187_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1187_t1.left === "x") r1187_x = _r1187_t1.right;
                            if (_r1187_t1 && _r1187_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1187_t1.left === "y") r1187_y = _r1187_t1.right;
                            if (_r1187_t1 && _r1187_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1187_t1.left === "xLink") r1187_xLink = _r1187_t1.right;
                            if (_r1187_t1 && _r1187_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1187_t1.left === "yAttach") r1187_yAttach = _r1187_t1.right;
                            if (_r1187_t1 && _r1187_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1187_t1.left === "yOverflow") r1187_yOverflow = _r1187_t1.right;
                            if (_r1187_t1 && _r1187_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1187_t1.left === "refSw") r1187_refSw = _r1187_t1.right;
                            if (_r1187_t1 && _r1187_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1187_t1.left === "maskOut") r1187_maskOut = _r1187_t1.right;
                            _r1187_t4 = _r1187_t4 + 1;
                        }
                        var r1187_x = r1_fallback(r1187_x, _r1187_t0[0]);
                        var r1187_y = r1_fallback(r1187_y, _r1187_t0[1]);
                        var r1187_xLink = r1_fallback(r1187_xLink, _r1187_t0[2]);
                        var r1187_yAttach = r1_fallback(r1187_yAttach, _r1187_t0[3], r1187_y);
                        var r1187_yOverflow = r1_fallback(r1187_yOverflow, _r1187_t0[4], 0);
                        var r1187_refSw = r1_fallback(r1187_refSw, _r1187_t0[5], r441_Stroke);
                        var r1187_maskOut = r1_fallback(r1187_maskOut, _r1187_t0[6], null);
                        var r1187_sw = r1164_Sw(r1187_refSw);
                        return r1161_Impl(r1187_x - r441_HSwToV(0.5 * r1187_sw), r1187_y, r1187_xLink, r1187_yAttach, r1187_yOverflow, r1187_sw, r1187_refSw, r1187_maskOut);
                    };
                    r1164_exports.lExt = r1164_lExt = function () {
                        var _r1193_t5;
                        var _r1193_t6 = arguments;
                        var r1193_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1193_t6, 0);
                        var _r1193_t0 = [];
                        var _r1193_t1 = 0;
                        while (_r1193_t1 < r1193_xn$flexarguments$2Lrc7uIe5.length) {
                            if (!(r1193_xn$flexarguments$2Lrc7uIe5[_r1193_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1193_t0.push(r1193_xn$flexarguments$2Lrc7uIe5[_r1193_t1]);
                            _r1193_t1 = _r1193_t1 + 1;
                        }
                        var _r1193_t2 = r1193_xn$flexarguments$2Lrc7uIe5;
                        var _r1193_t3 = _r1193_t2.length;
                        var _r1193_t4 = 0;
                        while (_r1193_t4 < _r1193_t3) {
                            _r1193_t1 = _r1193_t2[_r1193_t4];
                            if (_r1193_t1 && _r1193_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1193_t1.left === "x") r1193_x = _r1193_t1.right;
                            if (_r1193_t1 && _r1193_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1193_t1.left === "y") r1193_y = _r1193_t1.right;
                            if (_r1193_t1 && _r1193_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1193_t1.left === "xLink") r1193_xLink = _r1193_t1.right;
                            if (_r1193_t1 && _r1193_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1193_t1.left === "yAttach") r1193_yAttach = _r1193_t1.right;
                            if (_r1193_t1 && _r1193_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1193_t1.left === "yOverflow") r1193_yOverflow = _r1193_t1.right;
                            if (_r1193_t1 && _r1193_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1193_t1.left === "sw") r1193_sw = _r1193_t1.right;
                            if (_r1193_t1 && _r1193_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1193_t1.left === "maskOut") r1193_maskOut = _r1193_t1.right;
                            _r1193_t4 = _r1193_t4 + 1;
                        }
                        var r1193_x = r1_fallback(r1193_x, _r1193_t0[0]);
                        var r1193_y = r1_fallback(r1193_y, _r1193_t0[1]);
                        var r1193_xLink = r1_fallback(r1193_xLink, _r1193_t0[2]);
                        var r1193_yAttach = r1_fallback(r1193_yAttach, _r1193_t0[3], r1193_y);
                        var r1193_yOverflow = r1_fallback(r1193_yOverflow, _r1193_t0[4], 0);
                        var r1193_sw = r1_fallback(r1193_sw, _r1193_t0[5], r441_Stroke);
                        var r1193_maskOut = r1_fallback(r1193_maskOut, _r1193_t0[6], null);
                        return r1161_Impl(r1193_x + r441_HSwToV(0.5 * r1193_sw), r1193_y, r1193_xLink, r1193_yAttach, r1193_yOverflow, r1193_sw, r1193_sw, r1193_maskOut);
                    };
                    r1164_exports.mExt = r1164_mExt = function () {
                        var _r1199_t5;
                        var _r1199_t6 = arguments;
                        var r1199_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1199_t6, 0);
                        var _r1199_t0 = [];
                        var _r1199_t1 = 0;
                        while (_r1199_t1 < r1199_xn$flexarguments$2Lrc7uIe5.length) {
                            if (!(r1199_xn$flexarguments$2Lrc7uIe5[_r1199_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1199_t0.push(r1199_xn$flexarguments$2Lrc7uIe5[_r1199_t1]);
                            _r1199_t1 = _r1199_t1 + 1;
                        }
                        var _r1199_t2 = r1199_xn$flexarguments$2Lrc7uIe5;
                        var _r1199_t3 = _r1199_t2.length;
                        var _r1199_t4 = 0;
                        while (_r1199_t4 < _r1199_t3) {
                            _r1199_t1 = _r1199_t2[_r1199_t4];
                            if (_r1199_t1 && _r1199_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1199_t1.left === "x") r1199_x = _r1199_t1.right;
                            if (_r1199_t1 && _r1199_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1199_t1.left === "y") r1199_y = _r1199_t1.right;
                            if (_r1199_t1 && _r1199_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1199_t1.left === "xLink") r1199_xLink = _r1199_t1.right;
                            if (_r1199_t1 && _r1199_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1199_t1.left === "yAttach") r1199_yAttach = _r1199_t1.right;
                            if (_r1199_t1 && _r1199_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1199_t1.left === "yOverflow") r1199_yOverflow = _r1199_t1.right;
                            if (_r1199_t1 && _r1199_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1199_t1.left === "sw") r1199_sw = _r1199_t1.right;
                            if (_r1199_t1 && _r1199_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1199_t1.left === "maskOut") r1199_maskOut = _r1199_t1.right;
                            _r1199_t4 = _r1199_t4 + 1;
                        }
                        var r1199_x = r1_fallback(r1199_x, _r1199_t0[0]);
                        var r1199_y = r1_fallback(r1199_y, _r1199_t0[1]);
                        var r1199_xLink = r1_fallback(r1199_xLink, _r1199_t0[2]);
                        var r1199_yAttach = r1_fallback(r1199_yAttach, _r1199_t0[3], r1199_y);
                        var r1199_yOverflow = r1_fallback(r1199_yOverflow, _r1199_t0[4], 0);
                        var r1199_sw = r1_fallback(r1199_sw, _r1199_t0[5], r441_Stroke);
                        var r1199_maskOut = r1_fallback(r1199_maskOut, _r1199_t0[6], null);
                        return r1161_Impl(r1199_x, r1199_y, r1199_xLink, r1199_yAttach, r1199_yOverflow, r1199_sw, r1199_sw, r1199_maskOut);
                    };
                    r1164_exports.rExt = r1164_rExt = function () {
                        var _r1205_t5;
                        var _r1205_t6 = arguments;
                        var r1205_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1205_t6, 0);
                        var _r1205_t0 = [];
                        var _r1205_t1 = 0;
                        while (_r1205_t1 < r1205_xn$flexarguments$2Lrc7uIe5.length) {
                            if (!(r1205_xn$flexarguments$2Lrc7uIe5[_r1205_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1205_t0.push(r1205_xn$flexarguments$2Lrc7uIe5[_r1205_t1]);
                            _r1205_t1 = _r1205_t1 + 1;
                        }
                        var _r1205_t2 = r1205_xn$flexarguments$2Lrc7uIe5;
                        var _r1205_t3 = _r1205_t2.length;
                        var _r1205_t4 = 0;
                        while (_r1205_t4 < _r1205_t3) {
                            _r1205_t1 = _r1205_t2[_r1205_t4];
                            if (_r1205_t1 && _r1205_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1205_t1.left === "x") r1205_x = _r1205_t1.right;
                            if (_r1205_t1 && _r1205_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1205_t1.left === "y") r1205_y = _r1205_t1.right;
                            if (_r1205_t1 && _r1205_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1205_t1.left === "xLink") r1205_xLink = _r1205_t1.right;
                            if (_r1205_t1 && _r1205_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1205_t1.left === "yAttach") r1205_yAttach = _r1205_t1.right;
                            if (_r1205_t1 && _r1205_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1205_t1.left === "yOverflow") r1205_yOverflow = _r1205_t1.right;
                            if (_r1205_t1 && _r1205_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1205_t1.left === "sw") r1205_sw = _r1205_t1.right;
                            if (_r1205_t1 && _r1205_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1205_t1.left === "maskOut") r1205_maskOut = _r1205_t1.right;
                            _r1205_t4 = _r1205_t4 + 1;
                        }
                        var r1205_x = r1_fallback(r1205_x, _r1205_t0[0]);
                        var r1205_y = r1_fallback(r1205_y, _r1205_t0[1]);
                        var r1205_xLink = r1_fallback(r1205_xLink, _r1205_t0[2]);
                        var r1205_yAttach = r1_fallback(r1205_yAttach, _r1205_t0[3], r1205_y);
                        var r1205_yOverflow = r1_fallback(r1205_yOverflow, _r1205_t0[4], 0);
                        var r1205_sw = r1_fallback(r1205_sw, _r1205_t0[5], r441_Stroke);
                        var r1205_maskOut = r1_fallback(r1205_maskOut, _r1205_t0[6], null);
                        return r1161_Impl(r1205_x - r441_HSwToV(0.5 * r1205_sw), r1205_y, r1205_xLink, r1205_yAttach, r1205_yOverflow, r1205_sw, r1205_sw, r1205_maskOut);
                    };
                    r1164_exports.lSideJut = r1164_lSideJut = function () {
                        var _r1211_t5;
                        var _r1211_t6 = arguments;
                        var r1211_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1211_t6, 0);
                        var _r1211_t0 = [];
                        var _r1211_t1 = 0;
                        while (_r1211_t1 < r1211_xn$flexarguments$2Lrc7uIe5.length) {
                            if (!(r1211_xn$flexarguments$2Lrc7uIe5[_r1211_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1211_t0.push(r1211_xn$flexarguments$2Lrc7uIe5[_r1211_t1]);
                            _r1211_t1 = _r1211_t1 + 1;
                        }
                        var _r1211_t2 = r1211_xn$flexarguments$2Lrc7uIe5;
                        var _r1211_t3 = _r1211_t2.length;
                        var _r1211_t4 = 0;
                        while (_r1211_t4 < _r1211_t3) {
                            _r1211_t1 = _r1211_t2[_r1211_t4];
                            if (_r1211_t1 && _r1211_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1211_t1.left === "x") r1211_x = _r1211_t1.right;
                            if (_r1211_t1 && _r1211_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1211_t1.left === "y") r1211_y = _r1211_t1.right;
                            if (_r1211_t1 && _r1211_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1211_t1.left === "yOverflow") r1211_yOverflow = _r1211_t1.right;
                            if (_r1211_t1 && _r1211_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1211_t1.left === "refSw") r1211_refSw = _r1211_t1.right;
                            if (_r1211_t1 && _r1211_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1211_t1.left === "jut") r1211_jut = _r1211_t1.right;
                            if (_r1211_t1 && _r1211_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1211_t1.left === "sideJut") r1211_sideJut = _r1211_t1.right;
                            _r1211_t4 = _r1211_t4 + 1;
                        }
                        var r1211_x = r1_fallback(r1211_x, _r1211_t0[0]);
                        var r1211_y = r1_fallback(r1211_y, _r1211_t0[1]);
                        var r1211_yOverflow = r1_fallback(r1211_yOverflow, _r1211_t0[2], 0);
                        var r1211_refSw = r1_fallback(r1211_refSw, _r1211_t0[3], r441_Stroke);
                        var r1211_jut = r1_fallback(r1211_jut, _r1211_t0[4], r441_Jut);
                        var r1211_sideJut = r1_fallback(r1211_sideJut, _r1211_t0[5], r1211_jut - r441_HSwToV(0.5 * r1211_refSw));
                        var r1211_sw = r1164_Sw(r1211_refSw);
                        var r1211_xLink = r1211_x + r441_HSwToV(0.5 * r1211_refSw) - Math.max(0, r441_TanSlope * r1211_sw);
                        var r1211_xPos = r1211_x + r441_HSwToV(0.5 * r1211_sw) - r1211_sideJut + r1211_sw * (r441_SerifShiftX - r441_TanSlope);
                        return r1161_Impl(r1211_xPos, r1211_y, r1211_xLink, r1211_y, r1211_yOverflow, r1211_sw, r1211_refSw);
                    };
                    r1164_exports.rSideJut = r1164_rSideJut = function () {
                        var _r1217_t5;
                        var _r1217_t6 = arguments;
                        var r1217_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1217_t6, 0);
                        var _r1217_t0 = [];
                        var _r1217_t1 = 0;
                        while (_r1217_t1 < r1217_xn$flexarguments$2Lrc7uIe5.length) {
                            if (!(r1217_xn$flexarguments$2Lrc7uIe5[_r1217_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1217_t0.push(r1217_xn$flexarguments$2Lrc7uIe5[_r1217_t1]);
                            _r1217_t1 = _r1217_t1 + 1;
                        }
                        var _r1217_t2 = r1217_xn$flexarguments$2Lrc7uIe5;
                        var _r1217_t3 = _r1217_t2.length;
                        var _r1217_t4 = 0;
                        while (_r1217_t4 < _r1217_t3) {
                            _r1217_t1 = _r1217_t2[_r1217_t4];
                            if (_r1217_t1 && _r1217_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1217_t1.left === "x") r1217_x = _r1217_t1.right;
                            if (_r1217_t1 && _r1217_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1217_t1.left === "y") r1217_y = _r1217_t1.right;
                            if (_r1217_t1 && _r1217_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1217_t1.left === "yOverflow") r1217_yOverflow = _r1217_t1.right;
                            if (_r1217_t1 && _r1217_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1217_t1.left === "refSw") r1217_refSw = _r1217_t1.right;
                            if (_r1217_t1 && _r1217_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1217_t1.left === "jut") r1217_jut = _r1217_t1.right;
                            if (_r1217_t1 && _r1217_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1217_t1.left === "sideJut") r1217_sideJut = _r1217_t1.right;
                            _r1217_t4 = _r1217_t4 + 1;
                        }
                        var r1217_x = r1_fallback(r1217_x, _r1217_t0[0]);
                        var r1217_y = r1_fallback(r1217_y, _r1217_t0[1]);
                        var r1217_yOverflow = r1_fallback(r1217_yOverflow, _r1217_t0[2], 0);
                        var r1217_refSw = r1_fallback(r1217_refSw, _r1217_t0[3], r441_Stroke);
                        var r1217_jut = r1_fallback(r1217_jut, _r1217_t0[4], r441_Jut);
                        var r1217_sideJut = r1_fallback(r1217_sideJut, _r1217_t0[5], r1217_jut - r441_HSwToV(0.5 * r1217_refSw));
                        var r1217_sw = r1164_Sw(r1217_refSw);
                        var r1217_xLink = r1217_x - r441_HSwToV(0.5 * r1217_refSw) - Math.min(0, r441_TanSlope * r1217_sw);
                        var r1217_xPos = r1217_x - r441_HSwToV(0.5 * r1217_sw) + r1217_sideJut + r1217_sw * (r441_SerifShiftX + r441_TanSlope);
                        return r1161_Impl(r1217_xPos, r1217_y, r1217_xLink, r1217_y, r1217_yOverflow, r1217_sw, r1217_refSw);
                    };
                    return r1164_exports;
                })();
            };
            r441_xn$ExportCapture$2Lrc4b(function () {
                var _r1223_t0, _r1223_t1;
                return {
                    "CyrDescender": r1159_CyrDescender
                };
            });
            var r1159_CyrDescender = r1159_Descenders(function (r1224_x, r1224_y, r1224_xLink, r1224_yAttach, r1224_yOverflow, r1224_sw, r1224_refSw) {
                var _r1224_t0, _r1224_t1;
                return new r441_xn$Capture$2Lrc8.GlyphProc(function (r1226_currentGlyph) {
                    var _r1226_t0, _r1226_t1;
                    var r1226_extension = -r441_LongVJut + r441_QuarterStroke;
                    r1226_currentGlyph.include(r441_ExtendBelowBaseAnchors(r1224_y + r1226_extension));
                    r1226_currentGlyph.include(r441_union(r1159_xLinkStroke(r1224_xLink, r1224_x, r1224_yAttach, r1224_sw, r1224_refSw), r441_VBar.m(r1224_x, r1224_yAttach, r1224_y + r1226_extension, r1224_sw)));
                    return void 0;
                });
            });
            r441_xn$ExportCapture$2Lrc4b(function () {
                var _r1230_t0, _r1230_t1;
                return {
                    "CyrTailDescender": r1159_CyrTailDescender
                };
            });
            var r1159_CyrTailDescender = r1159_Descenders(function (r1231_x, r1231_y, r1231_xLink, r1231_yAttach, r1231_yOverflow, r1231_sw, r1231_refSw) {
                var _r1231_t0, _r1231_t1;
                return new r441_xn$Capture$2Lrc8.GlyphProc(function (r1233_currentGlyph) {
                    var _r1233_t0, _r1233_t1;
                    var r1233_extension = -r441_LongVJut + r441_QuarterStroke;
                    r1233_currentGlyph.include(r441_ExtendBelowBaseAnchors(r1231_y + r1233_extension));
                    r1233_currentGlyph.include(r441_union(r1159_xLinkStroke(r1231_xLink, r1231_x, r1231_yAttach, r1231_sw, r1231_refSw), r441_intersection(r441_MaskBelow(r1231_yAttach + r441_Stroke), r441_MaskAbove(r1231_y + r1233_extension), r441_ExtLineCenter(r1231_x + r1_mix(0, r441_Descender, 0.24), r1231_y + (r441_Descender + 0.5 * r1231_sw), r1231_x, r1231_y, r1231_sw, 16))));
                    return void 0;
                });
            });
            r441_xn$ExportCapture$2Lrc4b(function () {
                var _r1237_t0, _r1237_t1;
                return {
                    "CyrCurlDescender": r1159_CyrCurlDescender
                };
            });
            var r1159_CyrCurlDescender = r1159_Descenders(function (r1238_x, r1238_y, r1238_xLink, r1238_yAttach, r1238_yOverflow, r1238_sw, r1238_refSw) {
                var _r1238_t0, _r1238_t1;
                return new r441_xn$Capture$2Lrc8.GlyphProc(function (r1240_currentGlyph) {
                    var _r1240_t0, _r1240_t1;
                    var r1240_thinStroke = Math.min(0.25 * (0 - r441_Descender), r441_AdviceStroke(4));
                    var r1240_r = (0 - r441_Descender) / 2;
                    var r1240_sr = 0.5 * (r1240_r + r1240_thinStroke);
                    var r1240_xr = Math.max(r1238_x + r441_HSwToV(r1238_sw - r1240_thinStroke), r1238_x + r441_HSwToV(0.5 * r1238_sw));
                    var r1240_xl = r441_SB + r441_OX;
                    r1240_currentGlyph.include(r441_union(r1159_xLinkStroke(r1238_xLink, r1238_x, r1238_yAttach, r1238_sw, r1238_refSw), r441_dispiro(r441_widths.rhs(r1240_thinStroke), r441_straight.down.start(r1240_xr, r1238_y - 0, r441_heading(r441_Downward)), r441_straight.down.mid(r1240_xr, r1238_y - r1240_r, r441_heading(r441_Downward)), r441_arcvh(), r441_flat(r1240_xr - r1240_r, r1238_y - 2 * r1240_r, r441_heading(r441_Leftward)), r441_curl(r1240_xl + r1240_sr, r1238_y - 2 * r1240_r, r441_heading(r441_Leftward)), r441_archv(), r441_g2.up.mid(r1240_xl, r1238_y - 2 * r1240_r + r1240_sr, r441_heading(r441_Upward)), r441_arcvh(), r441_flat(r1240_xl + r1240_sr, r1238_y - 2 * r1240_r + 2 * r1240_sr, r441_heading(r441_Rightward)), r441_curl(r1240_xr - r1240_r, r1238_y - 2 * r1240_r + 2 * r1240_sr, r441_heading(r441_Rightward)))));
                    return void 0;
                });
            });
            r441_xn$ExportCapture$2Lrc4b(function () {
                var _r1243_t0, _r1243_t1;
                return {
                    "PalatalHook": r1159_PalatalHook
                };
            });
            var r1159_PalatalHook = r1159_Descenders(function (r1244_x, r1244_y, r1244_xLink, r1244_yAttach, r1244_yOverflow, r1244_sw, r1244_refSw, r1244_maskOut) {
                var _r1244_t0, _r1244_t1;
                return new r441_xn$Capture$2Lrc8.GlyphProc(function (r1246_currentGlyph) {
                    var _r1246_t0, _r1246_t1;
                    var r1246_fullDepth = -r441_Descender - 0.5 * r1244_sw - r441_O;
                    r1246_currentGlyph.include(r441_ExtendBelowBaseAnchors(r1244_y + r441_Descender));
                    r1246_currentGlyph.include(r441_difference(r441_union(r1159_xLinkStroke(r1244_xLink, r1244_x, r1244_yAttach, r1244_sw, r1244_refSw), r441_VerticalHook.m(new r441_xn$NamedParameterPair$2Lrc9b("x", r1244_x), new r441_xn$NamedParameterPair$2Lrc9b("y", r1244_y - (r1246_fullDepth - r441_TailY)), new r441_xn$NamedParameterPair$2Lrc9b("xDepth", -r441_TailX), new r441_xn$NamedParameterPair$2Lrc9b("yDepth", r441_TailY), new r441_xn$NamedParameterPair$2Lrc9b("sw", r1244_sw), new r441_xn$NamedParameterPair$2Lrc9b("yExtension", Math.max(0, r1244_yAttach + r1244_yOverflow - r1244_y + (r1246_fullDepth - r441_TailY))))), r1244_maskOut ? r1244_maskOut : r441_xn$noshape$3cah()));
                    return void 0;
                });
            });
            r441_xn$ExportCapture$2Lrc4b(function () {
                var _r1256_t0, _r1256_t1;
                return {
                    "RetroflexHook": r1159_RetroflexHook
                };
            });
            var r1159_RetroflexHook = r1159_Descenders(function (r1257_x, r1257_y, r1257_xLink, r1257_yAttach, r1257_yOverflow, r1257_sw, r1257_refSw, r1257_maskOut) {
                var _r1257_t0, _r1257_t1;
                return new r441_xn$Capture$2Lrc8.GlyphProc(function (r1259_currentGlyph) {
                    var _r1259_t0, _r1259_t1;
                    var r1259_fullDepth = -r441_Descender - 0.5 * r1257_sw - r441_O;
                    r1259_currentGlyph.include(r441_ExtendBelowBaseAnchors(r1257_y + r441_Descender));
                    r1259_currentGlyph.include(r441_difference(r441_union(r1159_xLinkStroke(r1257_xLink, r1257_x, r1257_yAttach, r1257_sw, r1257_refSw), r441_VerticalHook.m(new r441_xn$NamedParameterPair$2Lrc9b("x", r1257_x), new r441_xn$NamedParameterPair$2Lrc9b("y", r1257_y - (r1259_fullDepth - r441_TailY)), new r441_xn$NamedParameterPair$2Lrc9b("xDepth", r441_TailX), new r441_xn$NamedParameterPair$2Lrc9b("yDepth", r441_TailY), new r441_xn$NamedParameterPair$2Lrc9b("sw", r1257_sw), new r441_xn$NamedParameterPair$2Lrc9b("yExtension", Math.max(0, r1257_yAttach + r1257_yOverflow - r1257_y + (r1259_fullDepth - r441_TailY))))), r1257_maskOut ? r1257_maskOut : r441_xn$noshape$3cah()));
                    return void 0;
                });
            });
            r441_xn$ExportCapture$2Lrc4b(function () {
                var _r1269_t0, _r1269_t1;
                return {
                    "HalfRingDescender": r1159_HalfRingDescender
                };
            });
            var r1159_HalfRingDescender = function (r1270_x, r1270_y) {
                var _r1270_t0, _r1270_t1;
                return new r441_xn$Capture$2Lrc8.GlyphProc(function (r1272_currentGlyph) {
                    var _r1272_t0, _r1272_t1, _r1272_t2, _r1272_t3;
                    var r1272_sw = Math.min(r441_AdviceStroke(3), 0.5 * (0 - r441_Descender));
                    var r1272_r = (r1272_sw - r441_Descender) / 2;
                    r1272_currentGlyph.include(r441_ExtendBelowBaseAnchors(r1270_y + r441_Descender));
                    r1272_currentGlyph.include((_r1272_t0 = r1270_y + r1272_sw, _r1272_t1 = r1270_y + r1272_sw - 2 * r1272_r, r441_dispiro(r441_widths.lhs(r1272_sw), r441_g4.left.start(r1270_x, _r1272_t0, r441_heading(r441_Leftward)), r441_archv(), r441_g4.down.mid(r1270_x - r1272_r, r1_mix(_r1272_t0, _r1272_t1, 0.5), r441_heading(r441_Downward)), r441_arcvh(), r441_flat(r1270_x, _r1272_t1, r441_heading(r441_Rightward)), r441_curl(r1270_x + r441_HSwToV(r441_Stroke), _r1272_t1))));
                    return void 0;
                });
            };
            r441_xn$ExportCapture$2Lrc4b(function () {
                var _r1277_t0, _r1277_t1;
                return {
                    "MidHook": r1159_MidHook
                };
            });
            var r1159_MidHook = (function () {
                var r1280_general, r1280_m;
                var r1280_exports = {};
                r1280_exports.general = r1280_general = function () {
                    var _r1288_t5;
                    var _r1288_t6 = arguments;
                    var r1288_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1288_t6, 0);
                    var _r1288_t0 = [];
                    var _r1288_t1 = 0;
                    while (_r1288_t1 < r1288_xn$flexarguments$2Lrc7uIe5.length) {
                        if (!(r1288_xn$flexarguments$2Lrc7uIe5[_r1288_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1288_t0.push(r1288_xn$flexarguments$2Lrc7uIe5[_r1288_t1]);
                        _r1288_t1 = _r1288_t1 + 1;
                    }
                    var _r1288_t2 = r1288_xn$flexarguments$2Lrc7uIe5;
                    var _r1288_t3 = _r1288_t2.length;
                    var _r1288_t4 = 0;
                    while (_r1288_t4 < _r1288_t3) {
                        _r1288_t1 = _r1288_t2[_r1288_t4];
                        if (_r1288_t1 && _r1288_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1288_t1.left === "left") r1288_left = _r1288_t1.right;
                        if (_r1288_t1 && _r1288_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1288_t1.left === "right") r1288_right = _r1288_t1.right;
                        if (_r1288_t1 && _r1288_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1288_t1.left === "top") r1288_top = _r1288_t1.right;
                        if (_r1288_t1 && _r1288_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1288_t1.left === "bottom") r1288_bottom = _r1288_t1.right;
                        if (_r1288_t1 && _r1288_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1288_t1.left === "ada") r1288_ada = _r1288_t1.right;
                        if (_r1288_t1 && _r1288_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1288_t1.left === "adb") r1288_adb = _r1288_t1.right;
                        if (_r1288_t1 && _r1288_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1288_t1.left === "sw") r1288_sw = _r1288_t1.right;
                        if (_r1288_t1 && _r1288_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1288_t1.left === "xDepth") r1288_xDepth = _r1288_t1.right;
                        _r1288_t4 = _r1288_t4 + 1;
                    }
                    var r1288_left = r1_fallback(r1288_left, _r1288_t0[0]);
                    var r1288_right = r1_fallback(r1288_right, _r1288_t0[1]);
                    var r1288_top = r1_fallback(r1288_top, _r1288_t0[2]);
                    var r1288_bottom = r1_fallback(r1288_bottom, _r1288_t0[3], 0);
                    var r1288_ada = r1_fallback(r1288_ada, _r1288_t0[4], r441_ArchDepthA);
                    var r1288_adb = r1_fallback(r1288_adb, _r1288_t0[5], r441_ArchDepthB);
                    var r1288_sw = r1_fallback(r1288_sw, _r1288_t0[6], r441_Stroke);
                    var r1288_xDepth = r1_fallback(r1288_xDepth, _r1288_t0[7], -r441_HookX);
                    return new r441_xn$Capture$2Lrc8.GlyphProc(function (r1294_currentGlyph) {
                        var _r1294_t0, _r1294_t1;
                        r1294_currentGlyph.include(r441_nShoulder.shape(new r441_xn$NamedParameterPair$2Lrc9b("left", r1288_left), new r441_xn$NamedParameterPair$2Lrc9b("right", r1288_right), new r441_xn$NamedParameterPair$2Lrc9b("top", r1288_top), new r441_xn$NamedParameterPair$2Lrc9b("bottom", r1288_bottom), new r441_xn$NamedParameterPair$2Lrc9b("ada", r1288_ada), new r441_xn$NamedParameterPair$2Lrc9b("adb", r1288_adb), new r441_xn$NamedParameterPair$2Lrc9b("stroke", r1288_sw)), true, true);
                        r1294_currentGlyph.include(r441_VerticalHook.r(r1288_right, r1288_bottom, r1288_xDepth, r441_Hook, r1288_sw));
                        return void 0;
                    });
                };
                r1280_exports.m = r1280_m = function (r1305_df, r1305_top) {
                    var _r1305_t0, _r1305_t1;
                    return r1280_general(new r441_xn$NamedParameterPair$2Lrc9b("left", r1305_df.middle + r441_HSwToV(0.5 * r1305_df.mvs)), new r441_xn$NamedParameterPair$2Lrc9b("right", r1305_df.rightSB), new r441_xn$NamedParameterPair$2Lrc9b("top", r1305_top * 0.625 + r1305_df.mvs / 4), new r441_xn$NamedParameterPair$2Lrc9b("ada", r441_ArchDepthA), new r441_xn$NamedParameterPair$2Lrc9b("adb", r441_ArchDepthB), new r441_xn$NamedParameterPair$2Lrc9b("sw", r1305_df.mvs), new r441_xn$NamedParameterPair$2Lrc9b("xDepth", 0 - Math.max(r441_HSwToV(r1305_df.mvs), Math.min(r441_HookX, 0.5 * (r1305_df.rightSB - r1305_df.leftSB - r441_HSwToV(2 * r1305_df.mvs))))));
                };
                return r1280_exports;
            })();
            r441_xn$ExportCapture$2Lrc4b(function () {
                var _r1314_t0, _r1314_t1;
                return {
                    "EngHook": r1159_EngHook
                };
            });
            var r1159_EngHook = function () {
                var _r1315_t5;
                var _r1315_t6 = arguments;
                var r1315_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1315_t6, 0);
                var _r1315_t0 = [];
                var _r1315_t1 = 0;
                while (_r1315_t1 < r1315_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r1315_xn$flexarguments$2Lrc7uIe5[_r1315_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1315_t0.push(r1315_xn$flexarguments$2Lrc7uIe5[_r1315_t1]);
                    _r1315_t1 = _r1315_t1 + 1;
                }
                var _r1315_t2 = r1315_xn$flexarguments$2Lrc7uIe5;
                var _r1315_t3 = _r1315_t2.length;
                var _r1315_t4 = 0;
                while (_r1315_t4 < _r1315_t3) {
                    _r1315_t1 = _r1315_t2[_r1315_t4];
                    if (_r1315_t1 && _r1315_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1315_t1.left === "x") r1315_x = _r1315_t1.right;
                    if (_r1315_t1 && _r1315_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1315_t1.left === "yStart") r1315_yStart = _r1315_t1.right;
                    if (_r1315_t1 && _r1315_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1315_t1.left === "yEnd") r1315_yEnd = _r1315_t1.right;
                    if (_r1315_t1 && _r1315_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1315_t1.left === "sw") r1315_sw = _r1315_t1.right;
                    _r1315_t4 = _r1315_t4 + 1;
                }
                var r1315_x = r1_fallback(r1315_x, _r1315_t0[0]);
                var r1315_yStart = r1_fallback(r1315_yStart, _r1315_t0[1]);
                var r1315_yEnd = r1_fallback(r1315_yEnd, _r1315_t0[2]);
                var r1315_sw = r1_fallback(r1315_sw, _r1315_t0[3], r441_Stroke);
                return r441_VerticalHook.r(r1315_x, r1315_yEnd + r441_Hook + 0.5 * r1315_sw, -r441_HookX, r441_Hook, new r441_xn$NamedParameterPair$2Lrc9b("yExtension", Math.max(0, r1315_yStart - (r1315_yEnd + r441_Hook + 0.5 * r1315_sw))), new r441_xn$NamedParameterPair$2Lrc9b("sw", r1315_sw));
            };
            r441_xn$ExportCapture$2Lrc4b(function () {
                var _r1323_t0, _r1323_t1;
                return {
                    "TopHook": r1159_TopHook
                };
            });
            var r1159_TopHook = (function () {
                var r1326_toLeft, r1326_toRight;
                var r1326_exports = {};
                var r1326_ward = function (r1333_sign) {
                    var _r1333_t0, _r1333_t1, _r1333_t2, _r1333_tag3;
                    return (function () {
                        var r1336_lBarOuter, r1336_lBarInner, r1336_rBarOuter, r1336_rBarInner, r1336_mBarOuter, r1336_mBarInner, r1336_arcStart;
                        var r1336_exports = {};
                        r1336_exports.lBarOuter = r1336_lBarOuter = function () {
                            var _r1344_t5;
                            var _r1344_t6 = arguments;
                            var r1344_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1344_t6, 0);
                            var _r1344_t0 = [];
                            var _r1344_t1 = 0;
                            while (_r1344_t1 < r1344_xn$flexarguments$2Lrc7uIe5.length) {
                                if (!(r1344_xn$flexarguments$2Lrc7uIe5[_r1344_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1344_t0.push(r1344_xn$flexarguments$2Lrc7uIe5[_r1344_t1]);
                                _r1344_t1 = _r1344_t1 + 1;
                            }
                            var _r1344_t2 = r1344_xn$flexarguments$2Lrc7uIe5;
                            var _r1344_t3 = _r1344_t2.length;
                            var _r1344_t4 = 0;
                            while (_r1344_t4 < _r1344_t3) {
                                _r1344_t1 = _r1344_t2[_r1344_t4];
                                if (_r1344_t1 && _r1344_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1344_t1.left === "x") r1344_x = _r1344_t1.right;
                                if (_r1344_t1 && _r1344_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1344_t1.left === "yBot") r1344_yBot = _r1344_t1.right;
                                if (_r1344_t1 && _r1344_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1344_t1.left === "yTop") r1344_yTop = _r1344_t1.right;
                                if (_r1344_t1 && _r1344_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1344_t1.left === "sw") r1344_sw = _r1344_t1.right;
                                _r1344_t4 = _r1344_t4 + 1;
                            }
                            var r1344_x = r1_fallback(r1344_x, _r1344_t0[0]);
                            var r1344_yBot = r1_fallback(r1344_yBot, _r1344_t0[1]);
                            var r1344_yTop = r1_fallback(r1344_yTop, _r1344_t0[2]);
                            var r1344_sw = r1_fallback(r1344_sw, _r1344_t0[3], r441_Stroke);
                            return new r441_xn$Capture$2Lrc8.GlyphProc(function (r1350_currentGlyph) {
                                var _r1350_t0, _r1350_t1;
                                var r1350_fullDepth = r441_Ascender - r441_XH - 0.5 * r1344_sw - r441_O;
                                var r1350_yHookStart = r1344_yTop + (r1350_fullDepth - r441_TailY);
                                r1350_currentGlyph.include(r441_ExtendAboveBaseAnchors(r1344_yTop + (r441_Ascender - r441_XH)));
                                r1350_currentGlyph.include(r441_union(r441_VBar.l(r1344_x, r1344_yBot, r1350_yHookStart, r1344_sw), r441_VerticalHook.l(r1344_x, r1350_yHookStart, r1333_sign * r441_TailX, -r441_TailY, new r441_xn$NamedParameterPair$2Lrc9b("sw", r1344_sw))));
                                return void 0;
                            });
                        };
                        r1336_exports.lBarInner = r1336_lBarInner = function () {
                            var _r1355_t5;
                            var _r1355_t6 = arguments;
                            var r1355_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1355_t6, 0);
                            var _r1355_t0 = [];
                            var _r1355_t1 = 0;
                            while (_r1355_t1 < r1355_xn$flexarguments$2Lrc7uIe5.length) {
                                if (!(r1355_xn$flexarguments$2Lrc7uIe5[_r1355_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1355_t0.push(r1355_xn$flexarguments$2Lrc7uIe5[_r1355_t1]);
                                _r1355_t1 = _r1355_t1 + 1;
                            }
                            var _r1355_t2 = r1355_xn$flexarguments$2Lrc7uIe5;
                            var _r1355_t3 = _r1355_t2.length;
                            var _r1355_t4 = 0;
                            while (_r1355_t4 < _r1355_t3) {
                                _r1355_t1 = _r1355_t2[_r1355_t4];
                                if (_r1355_t1 && _r1355_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1355_t1.left === "x") r1355_x = _r1355_t1.right;
                                if (_r1355_t1 && _r1355_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1355_t1.left === "yBot") r1355_yBot = _r1355_t1.right;
                                if (_r1355_t1 && _r1355_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1355_t1.left === "yTop") r1355_yTop = _r1355_t1.right;
                                if (_r1355_t1 && _r1355_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1355_t1.left === "sw") r1355_sw = _r1355_t1.right;
                                _r1355_t4 = _r1355_t4 + 1;
                            }
                            var r1355_x = r1_fallback(r1355_x, _r1355_t0[0]);
                            var r1355_yBot = r1_fallback(r1355_yBot, _r1355_t0[1]);
                            var r1355_yTop = r1_fallback(r1355_yTop, _r1355_t0[2]);
                            var r1355_sw = r1_fallback(r1355_sw, _r1355_t0[3], r441_Stroke);
                            return new r441_xn$Capture$2Lrc8.GlyphProc(function (r1361_currentGlyph) {
                                var _r1361_t0, _r1361_t1;
                                var r1361_yHookStart = r1355_yTop - r441_O - r441_TailY - 0.5 * r1355_sw;
                                r1361_currentGlyph.include(r441_union(r441_VBar.l(r1355_x, r1355_yBot, r1361_yHookStart, r1355_sw), r441_VerticalHook.l(r1355_x, r1361_yHookStart, r1333_sign * r441_TailX, -r441_TailY, new r441_xn$NamedParameterPair$2Lrc9b("sw", r1355_sw))));
                                return void 0;
                            });
                        };
                        r1336_exports.rBarOuter = r1336_rBarOuter = function () {
                            var _r1365_t5;
                            var _r1365_t6 = arguments;
                            var r1365_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1365_t6, 0);
                            var _r1365_t0 = [];
                            var _r1365_t1 = 0;
                            while (_r1365_t1 < r1365_xn$flexarguments$2Lrc7uIe5.length) {
                                if (!(r1365_xn$flexarguments$2Lrc7uIe5[_r1365_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1365_t0.push(r1365_xn$flexarguments$2Lrc7uIe5[_r1365_t1]);
                                _r1365_t1 = _r1365_t1 + 1;
                            }
                            var _r1365_t2 = r1365_xn$flexarguments$2Lrc7uIe5;
                            var _r1365_t3 = _r1365_t2.length;
                            var _r1365_t4 = 0;
                            while (_r1365_t4 < _r1365_t3) {
                                _r1365_t1 = _r1365_t2[_r1365_t4];
                                if (_r1365_t1 && _r1365_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1365_t1.left === "x") r1365_x = _r1365_t1.right;
                                if (_r1365_t1 && _r1365_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1365_t1.left === "yBot") r1365_yBot = _r1365_t1.right;
                                if (_r1365_t1 && _r1365_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1365_t1.left === "yTop") r1365_yTop = _r1365_t1.right;
                                if (_r1365_t1 && _r1365_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1365_t1.left === "sw") r1365_sw = _r1365_t1.right;
                                _r1365_t4 = _r1365_t4 + 1;
                            }
                            var r1365_x = r1_fallback(r1365_x, _r1365_t0[0]);
                            var r1365_yBot = r1_fallback(r1365_yBot, _r1365_t0[1]);
                            var r1365_yTop = r1_fallback(r1365_yTop, _r1365_t0[2]);
                            var r1365_sw = r1_fallback(r1365_sw, _r1365_t0[3], r441_Stroke);
                            return r1336_lBarOuter(r1365_x - r441_HSwToV(r1365_sw), r1365_yBot, r1365_yTop, new r441_xn$NamedParameterPair$2Lrc9b("sw", r1365_sw));
                        };
                        r1336_exports.rBarInner = r1336_rBarInner = function () {
                            var _r1372_t5;
                            var _r1372_t6 = arguments;
                            var r1372_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1372_t6, 0);
                            var _r1372_t0 = [];
                            var _r1372_t1 = 0;
                            while (_r1372_t1 < r1372_xn$flexarguments$2Lrc7uIe5.length) {
                                if (!(r1372_xn$flexarguments$2Lrc7uIe5[_r1372_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1372_t0.push(r1372_xn$flexarguments$2Lrc7uIe5[_r1372_t1]);
                                _r1372_t1 = _r1372_t1 + 1;
                            }
                            var _r1372_t2 = r1372_xn$flexarguments$2Lrc7uIe5;
                            var _r1372_t3 = _r1372_t2.length;
                            var _r1372_t4 = 0;
                            while (_r1372_t4 < _r1372_t3) {
                                _r1372_t1 = _r1372_t2[_r1372_t4];
                                if (_r1372_t1 && _r1372_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1372_t1.left === "x") r1372_x = _r1372_t1.right;
                                if (_r1372_t1 && _r1372_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1372_t1.left === "yBot") r1372_yBot = _r1372_t1.right;
                                if (_r1372_t1 && _r1372_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1372_t1.left === "yTop") r1372_yTop = _r1372_t1.right;
                                if (_r1372_t1 && _r1372_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1372_t1.left === "sw") r1372_sw = _r1372_t1.right;
                                _r1372_t4 = _r1372_t4 + 1;
                            }
                            var r1372_x = r1_fallback(r1372_x, _r1372_t0[0]);
                            var r1372_yBot = r1_fallback(r1372_yBot, _r1372_t0[1]);
                            var r1372_yTop = r1_fallback(r1372_yTop, _r1372_t0[2]);
                            var r1372_sw = r1_fallback(r1372_sw, _r1372_t0[3], r441_Stroke);
                            return r1336_lBarInner(r1372_x - r441_HSwToV(r1372_sw), r1372_yBot, r1372_yTop, new r441_xn$NamedParameterPair$2Lrc9b("sw", r1372_sw));
                        };
                        r1336_exports.mBarOuter = r1336_mBarOuter = function () {
                            var _r1379_t5;
                            var _r1379_t6 = arguments;
                            var r1379_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1379_t6, 0);
                            var _r1379_t0 = [];
                            var _r1379_t1 = 0;
                            while (_r1379_t1 < r1379_xn$flexarguments$2Lrc7uIe5.length) {
                                if (!(r1379_xn$flexarguments$2Lrc7uIe5[_r1379_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1379_t0.push(r1379_xn$flexarguments$2Lrc7uIe5[_r1379_t1]);
                                _r1379_t1 = _r1379_t1 + 1;
                            }
                            var _r1379_t2 = r1379_xn$flexarguments$2Lrc7uIe5;
                            var _r1379_t3 = _r1379_t2.length;
                            var _r1379_t4 = 0;
                            while (_r1379_t4 < _r1379_t3) {
                                _r1379_t1 = _r1379_t2[_r1379_t4];
                                if (_r1379_t1 && _r1379_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1379_t1.left === "x") r1379_x = _r1379_t1.right;
                                if (_r1379_t1 && _r1379_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1379_t1.left === "yBot") r1379_yBot = _r1379_t1.right;
                                if (_r1379_t1 && _r1379_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1379_t1.left === "yTop") r1379_yTop = _r1379_t1.right;
                                if (_r1379_t1 && _r1379_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1379_t1.left === "sw") r1379_sw = _r1379_t1.right;
                                _r1379_t4 = _r1379_t4 + 1;
                            }
                            var r1379_x = r1_fallback(r1379_x, _r1379_t0[0]);
                            var r1379_yBot = r1_fallback(r1379_yBot, _r1379_t0[1]);
                            var r1379_yTop = r1_fallback(r1379_yTop, _r1379_t0[2]);
                            var r1379_sw = r1_fallback(r1379_sw, _r1379_t0[3], r441_Stroke);
                            return r1336_lBarOuter(r1379_x - r441_HSwToV(0.5 * r1379_sw), r1379_yBot, r1379_yTop, new r441_xn$NamedParameterPair$2Lrc9b("sw", r1379_sw));
                        };
                        r1336_exports.mBarInner = r1336_mBarInner = function () {
                            var _r1386_t5;
                            var _r1386_t6 = arguments;
                            var r1386_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1386_t6, 0);
                            var _r1386_t0 = [];
                            var _r1386_t1 = 0;
                            while (_r1386_t1 < r1386_xn$flexarguments$2Lrc7uIe5.length) {
                                if (!(r1386_xn$flexarguments$2Lrc7uIe5[_r1386_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1386_t0.push(r1386_xn$flexarguments$2Lrc7uIe5[_r1386_t1]);
                                _r1386_t1 = _r1386_t1 + 1;
                            }
                            var _r1386_t2 = r1386_xn$flexarguments$2Lrc7uIe5;
                            var _r1386_t3 = _r1386_t2.length;
                            var _r1386_t4 = 0;
                            while (_r1386_t4 < _r1386_t3) {
                                _r1386_t1 = _r1386_t2[_r1386_t4];
                                if (_r1386_t1 && _r1386_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1386_t1.left === "x") r1386_x = _r1386_t1.right;
                                if (_r1386_t1 && _r1386_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1386_t1.left === "yBot") r1386_yBot = _r1386_t1.right;
                                if (_r1386_t1 && _r1386_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1386_t1.left === "yTop") r1386_yTop = _r1386_t1.right;
                                if (_r1386_t1 && _r1386_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1386_t1.left === "sw") r1386_sw = _r1386_t1.right;
                                _r1386_t4 = _r1386_t4 + 1;
                            }
                            var r1386_x = r1_fallback(r1386_x, _r1386_t0[0]);
                            var r1386_yBot = r1_fallback(r1386_yBot, _r1386_t0[1]);
                            var r1386_yTop = r1_fallback(r1386_yTop, _r1386_t0[2]);
                            var r1386_sw = r1_fallback(r1386_sw, _r1386_t0[3], r441_Stroke);
                            return r1336_lBarInner(r1386_x - r441_HSwToV(0.5 * r1386_sw), r1386_yBot, r1386_yTop, new r441_xn$NamedParameterPair$2Lrc9b("sw", r1386_sw));
                        };
                        r1336_exports.arcStart = r1336_arcStart = function () {
                            var _r1393_t5;
                            var _r1393_t6 = arguments;
                            var r1393_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1393_t6, 0);
                            var _r1393_t0 = [];
                            var _r1393_t1 = 0;
                            while (_r1393_t1 < r1393_xn$flexarguments$2Lrc7uIe5.length) {
                                if (!(r1393_xn$flexarguments$2Lrc7uIe5[_r1393_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1393_t0.push(r1393_xn$flexarguments$2Lrc7uIe5[_r1393_t1]);
                                _r1393_t1 = _r1393_t1 + 1;
                            }
                            var _r1393_t2 = r1393_xn$flexarguments$2Lrc7uIe5;
                            var _r1393_t3 = _r1393_t2.length;
                            var _r1393_t4 = 0;
                            while (_r1393_t4 < _r1393_t3) {
                                _r1393_t1 = _r1393_t2[_r1393_t4];
                                if (_r1393_t1 && _r1393_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1393_t1.left === "cx") r1393_cx = _r1393_t1.right;
                                if (_r1393_t1 && _r1393_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1393_t1.left === "cy") r1393_cy = _r1393_t1.right;
                                if (_r1393_t1 && _r1393_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1393_t1.left === "hookY") r1393_hookY = _r1393_t1.right;
                                if (_r1393_t1 && _r1393_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1393_t1.left === "refSw") r1393_refSw = _r1393_t1.right;
                                _r1393_t4 = _r1393_t4 + 1;
                            }
                            var r1393_cx = r1_fallback(r1393_cx, _r1393_t0[0]);
                            var r1393_cy = r1_fallback(r1393_cy, _r1393_t0[1]);
                            var r1393_hookY = r1_fallback(r1393_hookY, _r1393_t0[2]);
                            var r1393_refSw = r1_fallback(r1393_refSw, _r1393_t0[3], r441_Stroke);
                            var r1393_sw = r441_ArcStartSerifWidth(r1393_refSw);
                            var r1393_fullDepth = r441_Ascender - r441_XH - 0.5 * r1393_sw - r441_O;
                            var r1393_yHookStart = r1393_cy + (r1393_fullDepth - r441_TailY);
                            return r441_union(r441_VBar.r(r1393_cx, r1393_cy - r1393_hookY + r441_O * 2, r1393_yHookStart, r1393_sw), r441_VerticalHook.r(r1393_cx, r1393_yHookStart, r1333_sign * r441_TailX, -r441_TailY, r1393_sw));
                        };
                        return r1336_exports;
                    })();
                };
                r1326_exports.toLeft = r1326_toLeft = r1326_ward(-1);
                r1326_exports.toRight = r1326_toRight = r1326_ward(+1);
                return r1326_exports;
            })();
            r441_xn$ExportCapture$2Lrc4b(function () {
                var _r1401_t0, _r1401_t1;
                return {
                    "LeftHook": r1159_LeftHook
                };
            });
            var r1159_LeftHook = function (r1402_x, r1402_y, r1402_xextend) {
                var _r1402_t0, _r1402_t1;
                return new r441_xn$Capture$2Lrc8.GlyphProc(function (r1404_currentGlyph) {
                    var _r1404_t0, _r1404_t1;
                    var r1404_fine = r441_AdviceStroke(4.25);
                    r1404_currentGlyph.include(r441_dispiro(r441_widths.lhs(r1404_fine), r441_flat(r1_fallback(r1402_xextend, r1402_x + 1), r1402_y), r441_curl(r1402_x, r1402_y), r441_archv(8), r441_g4.down.end(r1402_x - r1159_LeftHook.extension, r1402_y - r441_HookX, r441_heading(r441_Downward))));
                    return void 0;
                });
            };
            return r1159_LeftHook.extension = Math.max(r441_Width * 0.2, r441_AdviceStroke(4.25) * 1.5);
        })();
        (function () {
            var r1407_BeltOverlayAt = function (r1408_x, r1408_y) {
                var _r1408_t0, _r1408_t1;
                var r1408_fine = r441_AdviceStroke(4.5);
                var r1408_r = r441_XH * 0.05;
                return r441_dispiro(r441_widths.rhs(r1408_fine), r441_flat(r1408_x, r1408_y + r1408_r, r441_heading(r441_Leftward)), r441_curl(r1408_x - r441_HalfStroke - r1408_r * 1.5, r1408_y + r1408_r), r441_archv(), r441_g4.down.mid(r1408_x - r441_HalfStroke - r1408_r * 2.5, r1408_y, r441_heading(r441_Downward)), r441_arcvh(), r441_flat(r1408_x - r441_HalfStroke - r1408_r * 1.5, r1408_y - r1408_r), r441_curl(r1408_x + r441_HalfStroke + r1408_r * 1.5 + r1408_fine, r1408_y - r1408_r));
            };
            r441_xn$ExportCapture$2Lrc4b(function () {
                var _r1410_t0, _r1410_t1;
                return {
                    "BeltOverlay": r1407_BeltOverlay
                };
            });
            var r1407_BeltOverlay = function (r1411_top, r1411_xMiddle) {
                var _r1411_t0, _r1411_t1;
                return r1407_BeltOverlayAt(r1411_xMiddle, 0.5 * r1411_top);
            };
            return r1407_BeltOverlay.at = r1407_BeltOverlayAt;
        })();
        return (function () {
            var r1413_base, _r1413_leti2, _r1413_t4, _r1413_t5, _r1413_t6, _r1413_tag7;
            r441_xn$ExportCapture$2Lrc4b(function () {
                var _r1415_t0, _r1415_t1;
                return {
                    "LetterBarOverlay": r1413_LetterBarOverlay,
                    "LetterObliqueBarOverlay": r1413_LetterObliqueBarOverlay
                };
            });
            var r1413_BarOverlayImpl = function () {
                var _r1416_t6;
                var _r1416_t7 = arguments;
                var r1416_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1416_t7, 0);
                var _r1416_t0 = [];
                var _r1416_t1 = 0;
                while (_r1416_t1 < r1416_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r1416_xn$flexarguments$2Lrc7uIe5[_r1416_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1416_t0.push(r1416_xn$flexarguments$2Lrc7uIe5[_r1416_t1]);
                    _r1416_t1 = _r1416_t1 + 1;
                }
                var _r1416_t2 = r1416_xn$flexarguments$2Lrc7uIe5;
                var _r1416_t3 = _r1416_t2.length;
                var _r1416_t4 = 0;
                while (_r1416_t4 < _r1416_t3) {
                    _r1416_t1 = _r1416_t2[_r1416_t4];
                    if (_r1416_t1 && _r1416_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1416_t1.left === "barFunc") r1416_barFunc = _r1416_t1.right;
                    if (_r1416_t1 && _r1416_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1416_t1.left === "x") r1416_x = _r1416_t1.right;
                    if (_r1416_t1 && _r1416_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1416_t1.left === "y") r1416_y = _r1416_t1.right;
                    if (_r1416_t1 && _r1416_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1416_t1.left === "space") r1416_space = _r1416_t1.right;
                    if (_r1416_t1 && _r1416_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1416_t1.left === "refSw") r1416_refSw = _r1416_t1.right;
                    if (_r1416_t1 && _r1416_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1416_t1.left === "pXInSw") r1416_pXInSw = _r1416_t1.right;
                    if (_r1416_t1 && _r1416_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1416_t1.left === "sw") r1416_sw = _r1416_t1.right;
                    _r1416_t4 = _r1416_t4 + 1;
                }
                var r1416_barFunc = r1_fallback(r1416_barFunc, _r1416_t0[0]);
                var r1416_x = r1_fallback(r1416_x, _r1416_t0[1]);
                var r1416_y = r1_fallback(r1416_y, _r1416_t0[2]);
                var r1416_space = r1_fallback(r1416_space, _r1416_t0[3]);
                var r1416_refSw = r1_fallback(r1416_refSw, _r1416_t0[4]);
                var r1416_pXInSw = r1_fallback(r1416_pXInSw, _r1416_t0[5]);
                var r1416_sw = r1_fallback(r1416_sw, _r1416_t0[6]);
                var _r1416_t5 = r1416_space;
                var r1416_xLeftSpace = _r1416_t5[0];
                var r1416_xRightSpace = _r1416_t5[1];
                var r1416_xLeftEdge = r1416_x - (0 + r1416_pXInSw) * r441_HSwToV(r1416_refSw);
                var r1416_xRightEdge = r1416_x + (1 - r1416_pXInSw) * r441_HSwToV(r1416_refSw);
                var r1416_p = (r1416_xLeftEdge - r1416_xLeftSpace) / (r1416_xRightSpace - r1416_xRightEdge + (r1416_xLeftEdge - r1416_xLeftSpace));
                var r1416_xC = r1_mix(r1416_xLeftEdge, r1416_xRightEdge, r1_mix(0.5, 1 - r1416_p, 0.5));
                var r1416_jut = 0.75 * r441_LongJut;
                return r1416_barFunc(Math.min(r1416_xLeftEdge - r441_SideJut, Math.max(r1416_xC - r1416_jut, r1_mix(r1416_xLeftSpace, r1416_xLeftEdge, 0.3))), Math.max(r1416_xRightEdge + r441_SideJut, Math.min(r1416_xC + r1416_jut, r1_mix(r1416_xRightSpace, r1416_xRightEdge, 0.3))), r1416_y, r1416_sw);
            };
            var r1413_calcYAndSw = function (r1421_bot, r1421_top, r1421_py, r1421_sw) {
                var _r1421_t0, _r1421_t1;
                var r1421_y = r1_mix(r1421_bot, r1421_top, r1421_py);
                var r1421_sw1 = Math.min(r1421_sw, 1.25 * (r1421_top - r1421_bot) * (0 + r1421_py), 1.25 * (r1421_top - r1421_bot) * (1 - r1421_py));
                return [r1421_y, r1421_sw1];
            };
            var r1413_LetterBarOverlay = function () {
                var _r1422_t5;
                var _r1422_t6 = arguments;
                var r1422_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1422_t6, 0);
                var _r1422_t0 = [];
                var _r1422_t1 = 0;
                while (_r1422_t1 < r1422_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r1422_xn$flexarguments$2Lrc7uIe5[_r1422_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1422_t0.push(r1422_xn$flexarguments$2Lrc7uIe5[_r1422_t1]);
                    _r1422_t1 = _r1422_t1 + 1;
                }
                var _r1422_t2 = r1422_xn$flexarguments$2Lrc7uIe5;
                var _r1422_t3 = _r1422_t2.length;
                var _r1422_t4 = 0;
                while (_r1422_t4 < _r1422_t3) {
                    _r1422_t1 = _r1422_t2[_r1422_t4];
                    if (_r1422_t1 && _r1422_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1422_t1.left === "x") r1422_x = _r1422_t1.right;
                    if (_r1422_t1 && _r1422_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1422_t1.left === "y") r1422_y = _r1422_t1.right;
                    if (_r1422_t1 && _r1422_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1422_t1.left === "space") r1422_space = _r1422_t1.right;
                    if (_r1422_t1 && _r1422_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1422_t1.left === "refSw") r1422_refSw = _r1422_t1.right;
                    if (_r1422_t1 && _r1422_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1422_t1.left === "pXInSw") r1422_pXInSw = _r1422_t1.right;
                    if (_r1422_t1 && _r1422_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1422_t1.left === "sw") r1422_sw = _r1422_t1.right;
                    _r1422_t4 = _r1422_t4 + 1;
                }
                var r1422_x = r1_fallback(r1422_x, _r1422_t0[0]);
                var r1422_y = r1_fallback(r1422_y, _r1422_t0[1]);
                var r1422_space = r1_fallback(r1422_space, _r1422_t0[2]);
                var r1422_refSw = r1_fallback(r1422_refSw, _r1422_t0[3]);
                var r1422_pXInSw = r1_fallback(r1422_pXInSw, _r1422_t0[4]);
                var r1422_sw = r1_fallback(r1422_sw, _r1422_t0[5]);
                return r1413_BarOverlayImpl(r441_HOverlayBar, r1422_x, r1422_y, r1422_space, r1422_refSw, r1422_pXInSw, r1422_sw);
            };
            var r1413_LetterObliqueBarOverlay = function () {
                var _r1427_t5;
                var _r1427_t6 = arguments;
                var r1427_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1427_t6, 0);
                var _r1427_t0 = [];
                var _r1427_t1 = 0;
                while (_r1427_t1 < r1427_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r1427_xn$flexarguments$2Lrc7uIe5[_r1427_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1427_t0.push(r1427_xn$flexarguments$2Lrc7uIe5[_r1427_t1]);
                    _r1427_t1 = _r1427_t1 + 1;
                }
                var _r1427_t2 = r1427_xn$flexarguments$2Lrc7uIe5;
                var _r1427_t3 = _r1427_t2.length;
                var _r1427_t4 = 0;
                while (_r1427_t4 < _r1427_t3) {
                    _r1427_t1 = _r1427_t2[_r1427_t4];
                    if (_r1427_t1 && _r1427_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1427_t1.left === "x") r1427_x = _r1427_t1.right;
                    if (_r1427_t1 && _r1427_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1427_t1.left === "y") r1427_y = _r1427_t1.right;
                    if (_r1427_t1 && _r1427_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1427_t1.left === "space") r1427_space = _r1427_t1.right;
                    if (_r1427_t1 && _r1427_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1427_t1.left === "refSw") r1427_refSw = _r1427_t1.right;
                    if (_r1427_t1 && _r1427_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1427_t1.left === "pXInSw") r1427_pXInSw = _r1427_t1.right;
                    if (_r1427_t1 && _r1427_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1427_t1.left === "sw") r1427_sw = _r1427_t1.right;
                    _r1427_t4 = _r1427_t4 + 1;
                }
                var r1427_x = r1_fallback(r1427_x, _r1427_t0[0]);
                var r1427_y = r1_fallback(r1427_y, _r1427_t0[1]);
                var r1427_space = r1_fallback(r1427_space, _r1427_t0[2]);
                var r1427_refSw = r1_fallback(r1427_refSw, _r1427_t0[3]);
                var r1427_pXInSw = r1_fallback(r1427_pXInSw, _r1427_t0[4]);
                var r1427_sw = r1_fallback(r1427_sw, _r1427_t0[5]);
                return r1413_BarOverlayImpl(r441_HOverlayObliqueBar, r1427_x, r1427_y, r1427_space, r1427_refSw, r1427_pXInSw, r1427_sw);
            };
            var _r1413_t0 = [r1413_LetterBarOverlay, r1413_LetterObliqueBarOverlay][Symbol.iterator]();
            var _r1413_t1 = void 0;
            var _r1413_t3 = !(_r1413_t1 = _r1413_t0.next()).done;
            while (_r1413_t3) {
                r1413_base = _r1413_t1.value;
                _r1413_t5 = r1413_base;
                _r1413_t4 = (function (_r1413_leti2) {
                    var r1433_base = _r1413_leti2;
                    r1433_base.l = function () {
                        var _r1434_t5;
                        var _r1434_t6 = arguments;
                        var r1434_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1434_t6, 0);
                        var _r1434_t0 = [];
                        var _r1434_t1 = 0;
                        while (_r1434_t1 < r1434_xn$flexarguments$2Lrc7uIe5.length) {
                            if (!(r1434_xn$flexarguments$2Lrc7uIe5[_r1434_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1434_t0.push(r1434_xn$flexarguments$2Lrc7uIe5[_r1434_t1]);
                            _r1434_t1 = _r1434_t1 + 1;
                        }
                        var _r1434_t2 = r1434_xn$flexarguments$2Lrc7uIe5;
                        var _r1434_t3 = _r1434_t2.length;
                        var _r1434_t4 = 0;
                        while (_r1434_t4 < _r1434_t3) {
                            _r1434_t1 = _r1434_t2[_r1434_t4];
                            if (_r1434_t1 && _r1434_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1434_t1.left === "x") r1434_x = _r1434_t1.right;
                            if (_r1434_t1 && _r1434_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1434_t1.left === "y") r1434_y = _r1434_t1.right;
                            if (_r1434_t1 && _r1434_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1434_t1.left === "space") r1434_space = _r1434_t1.right;
                            if (_r1434_t1 && _r1434_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1434_t1.left === "refSw") r1434_refSw = _r1434_t1.right;
                            if (_r1434_t1 && _r1434_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1434_t1.left === "sw") r1434_sw = _r1434_t1.right;
                            _r1434_t4 = _r1434_t4 + 1;
                        }
                        var r1434_x = r1_fallback(r1434_x, _r1434_t0[0]);
                        var r1434_y = r1_fallback(r1434_y, _r1434_t0[1]);
                        var r1434_space = r1_fallback(r1434_space, _r1434_t0[2], [0, r441_Width]);
                        var r1434_refSw = r1_fallback(r1434_refSw, _r1434_t0[3], r441_Stroke);
                        var r1434_sw = r1_fallback(r1434_sw, _r1434_t0[4], r441_OverlayStroke);
                        return r1433_base(r1434_x, r1434_y, new r441_xn$NamedParameterPair$2Lrc9b("space", r1434_space), new r441_xn$NamedParameterPair$2Lrc9b("refSw", r1434_refSw), new r441_xn$NamedParameterPair$2Lrc9b("pXInSw", 0), new r441_xn$NamedParameterPair$2Lrc9b("sw", r1434_sw));
                    };
                    r1433_base.m = function () {
                        var _r1443_t5;
                        var _r1443_t6 = arguments;
                        var r1443_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1443_t6, 0);
                        var _r1443_t0 = [];
                        var _r1443_t1 = 0;
                        while (_r1443_t1 < r1443_xn$flexarguments$2Lrc7uIe5.length) {
                            if (!(r1443_xn$flexarguments$2Lrc7uIe5[_r1443_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1443_t0.push(r1443_xn$flexarguments$2Lrc7uIe5[_r1443_t1]);
                            _r1443_t1 = _r1443_t1 + 1;
                        }
                        var _r1443_t2 = r1443_xn$flexarguments$2Lrc7uIe5;
                        var _r1443_t3 = _r1443_t2.length;
                        var _r1443_t4 = 0;
                        while (_r1443_t4 < _r1443_t3) {
                            _r1443_t1 = _r1443_t2[_r1443_t4];
                            if (_r1443_t1 && _r1443_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1443_t1.left === "x") r1443_x = _r1443_t1.right;
                            if (_r1443_t1 && _r1443_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1443_t1.left === "y") r1443_y = _r1443_t1.right;
                            if (_r1443_t1 && _r1443_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1443_t1.left === "space") r1443_space = _r1443_t1.right;
                            if (_r1443_t1 && _r1443_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1443_t1.left === "refSw") r1443_refSw = _r1443_t1.right;
                            if (_r1443_t1 && _r1443_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1443_t1.left === "sw") r1443_sw = _r1443_t1.right;
                            _r1443_t4 = _r1443_t4 + 1;
                        }
                        var r1443_x = r1_fallback(r1443_x, _r1443_t0[0]);
                        var r1443_y = r1_fallback(r1443_y, _r1443_t0[1]);
                        var r1443_space = r1_fallback(r1443_space, _r1443_t0[2], [0, r441_Width]);
                        var r1443_refSw = r1_fallback(r1443_refSw, _r1443_t0[3], r441_Stroke);
                        var r1443_sw = r1_fallback(r1443_sw, _r1443_t0[4], r441_OverlayStroke);
                        return r1433_base(r1443_x, r1443_y, new r441_xn$NamedParameterPair$2Lrc9b("space", r1443_space), new r441_xn$NamedParameterPair$2Lrc9b("refSw", r1443_refSw), new r441_xn$NamedParameterPair$2Lrc9b("pXInSw", 0.5), new r441_xn$NamedParameterPair$2Lrc9b("sw", r1443_sw));
                    };
                    r1433_base.r = function () {
                        var _r1452_t5;
                        var _r1452_t6 = arguments;
                        var r1452_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1452_t6, 0);
                        var _r1452_t0 = [];
                        var _r1452_t1 = 0;
                        while (_r1452_t1 < r1452_xn$flexarguments$2Lrc7uIe5.length) {
                            if (!(r1452_xn$flexarguments$2Lrc7uIe5[_r1452_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1452_t0.push(r1452_xn$flexarguments$2Lrc7uIe5[_r1452_t1]);
                            _r1452_t1 = _r1452_t1 + 1;
                        }
                        var _r1452_t2 = r1452_xn$flexarguments$2Lrc7uIe5;
                        var _r1452_t3 = _r1452_t2.length;
                        var _r1452_t4 = 0;
                        while (_r1452_t4 < _r1452_t3) {
                            _r1452_t1 = _r1452_t2[_r1452_t4];
                            if (_r1452_t1 && _r1452_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1452_t1.left === "x") r1452_x = _r1452_t1.right;
                            if (_r1452_t1 && _r1452_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1452_t1.left === "y") r1452_y = _r1452_t1.right;
                            if (_r1452_t1 && _r1452_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1452_t1.left === "space") r1452_space = _r1452_t1.right;
                            if (_r1452_t1 && _r1452_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1452_t1.left === "refSw") r1452_refSw = _r1452_t1.right;
                            if (_r1452_t1 && _r1452_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1452_t1.left === "sw") r1452_sw = _r1452_t1.right;
                            _r1452_t4 = _r1452_t4 + 1;
                        }
                        var r1452_x = r1_fallback(r1452_x, _r1452_t0[0]);
                        var r1452_y = r1_fallback(r1452_y, _r1452_t0[1]);
                        var r1452_space = r1_fallback(r1452_space, _r1452_t0[2], [0, r441_Width]);
                        var r1452_refSw = r1_fallback(r1452_refSw, _r1452_t0[3], r441_Stroke);
                        var r1452_sw = r1_fallback(r1452_sw, _r1452_t0[4], r441_OverlayStroke);
                        return r1433_base(r1452_x, r1452_y, new r441_xn$NamedParameterPair$2Lrc9b("space", r1452_space), new r441_xn$NamedParameterPair$2Lrc9b("refSw", r1452_refSw), new r441_xn$NamedParameterPair$2Lrc9b("pXInSw", 1), new r441_xn$NamedParameterPair$2Lrc9b("sw", r1452_sw));
                    };
                    r1433_base.l.in = function () {
                        var _r1461_t6;
                        var _r1461_t7 = arguments;
                        var r1461_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1461_t7, 0);
                        var _r1461_t0 = [];
                        var _r1461_t1 = 0;
                        while (_r1461_t1 < r1461_xn$flexarguments$2Lrc7uIe5.length) {
                            if (!(r1461_xn$flexarguments$2Lrc7uIe5[_r1461_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1461_t0.push(r1461_xn$flexarguments$2Lrc7uIe5[_r1461_t1]);
                            _r1461_t1 = _r1461_t1 + 1;
                        }
                        var _r1461_t2 = r1461_xn$flexarguments$2Lrc7uIe5;
                        var _r1461_t3 = _r1461_t2.length;
                        var _r1461_t4 = 0;
                        while (_r1461_t4 < _r1461_t3) {
                            _r1461_t1 = _r1461_t2[_r1461_t4];
                            if (_r1461_t1 && _r1461_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1461_t1.left === "x") r1461_x = _r1461_t1.right;
                            if (_r1461_t1 && _r1461_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1461_t1.left === "bot") r1461_bot = _r1461_t1.right;
                            if (_r1461_t1 && _r1461_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1461_t1.left === "top") r1461_top = _r1461_t1.right;
                            if (_r1461_t1 && _r1461_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1461_t1.left === "py") r1461_py = _r1461_t1.right;
                            if (_r1461_t1 && _r1461_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1461_t1.left === "space") r1461_space = _r1461_t1.right;
                            if (_r1461_t1 && _r1461_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1461_t1.left === "refSw") r1461_refSw = _r1461_t1.right;
                            if (_r1461_t1 && _r1461_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1461_t1.left === "sw") r1461_sw = _r1461_t1.right;
                            _r1461_t4 = _r1461_t4 + 1;
                        }
                        var r1461_x = r1_fallback(r1461_x, _r1461_t0[0]);
                        var r1461_bot = r1_fallback(r1461_bot, _r1461_t0[1]);
                        var r1461_top = r1_fallback(r1461_top, _r1461_t0[2]);
                        var r1461_py = r1_fallback(r1461_py, _r1461_t0[3], 0.5);
                        var r1461_space = r1_fallback(r1461_space, _r1461_t0[4], [0, r441_Width]);
                        var r1461_refSw = r1_fallback(r1461_refSw, _r1461_t0[5], r441_Stroke);
                        var r1461_sw = r1_fallback(r1461_sw, _r1461_t0[6], r441_OverlayStroke);
                        var _r1461_t5 = r1413_calcYAndSw(r1461_bot, r1461_top, r1461_py, r1461_sw);
                        var r1461_y = _r1461_t5[0];
                        var r1461_sw1 = _r1461_t5[1];
                        return r1433_base(r1461_x, r1461_y, new r441_xn$NamedParameterPair$2Lrc9b("space", r1461_space), new r441_xn$NamedParameterPair$2Lrc9b("refSw", r1461_refSw), new r441_xn$NamedParameterPair$2Lrc9b("pXInSw", 0), new r441_xn$NamedParameterPair$2Lrc9b("sw", r1461_sw1));
                    };
                    r1433_base.m.in = function () {
                        var _r1470_t6;
                        var _r1470_t7 = arguments;
                        var r1470_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1470_t7, 0);
                        var _r1470_t0 = [];
                        var _r1470_t1 = 0;
                        while (_r1470_t1 < r1470_xn$flexarguments$2Lrc7uIe5.length) {
                            if (!(r1470_xn$flexarguments$2Lrc7uIe5[_r1470_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1470_t0.push(r1470_xn$flexarguments$2Lrc7uIe5[_r1470_t1]);
                            _r1470_t1 = _r1470_t1 + 1;
                        }
                        var _r1470_t2 = r1470_xn$flexarguments$2Lrc7uIe5;
                        var _r1470_t3 = _r1470_t2.length;
                        var _r1470_t4 = 0;
                        while (_r1470_t4 < _r1470_t3) {
                            _r1470_t1 = _r1470_t2[_r1470_t4];
                            if (_r1470_t1 && _r1470_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1470_t1.left === "x") r1470_x = _r1470_t1.right;
                            if (_r1470_t1 && _r1470_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1470_t1.left === "bot") r1470_bot = _r1470_t1.right;
                            if (_r1470_t1 && _r1470_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1470_t1.left === "top") r1470_top = _r1470_t1.right;
                            if (_r1470_t1 && _r1470_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1470_t1.left === "py") r1470_py = _r1470_t1.right;
                            if (_r1470_t1 && _r1470_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1470_t1.left === "space") r1470_space = _r1470_t1.right;
                            if (_r1470_t1 && _r1470_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1470_t1.left === "refSw") r1470_refSw = _r1470_t1.right;
                            if (_r1470_t1 && _r1470_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1470_t1.left === "sw") r1470_sw = _r1470_t1.right;
                            _r1470_t4 = _r1470_t4 + 1;
                        }
                        var r1470_x = r1_fallback(r1470_x, _r1470_t0[0]);
                        var r1470_bot = r1_fallback(r1470_bot, _r1470_t0[1]);
                        var r1470_top = r1_fallback(r1470_top, _r1470_t0[2]);
                        var r1470_py = r1_fallback(r1470_py, _r1470_t0[3], 0.5);
                        var r1470_space = r1_fallback(r1470_space, _r1470_t0[4], [0, r441_Width]);
                        var r1470_refSw = r1_fallback(r1470_refSw, _r1470_t0[5], r441_Stroke);
                        var r1470_sw = r1_fallback(r1470_sw, _r1470_t0[6], r441_OverlayStroke);
                        var _r1470_t5 = r1413_calcYAndSw(r1470_bot, r1470_top, r1470_py, r1470_sw);
                        var r1470_y = _r1470_t5[0];
                        var r1470_sw1 = _r1470_t5[1];
                        return r1433_base(r1470_x, r1470_y, new r441_xn$NamedParameterPair$2Lrc9b("space", r1470_space), new r441_xn$NamedParameterPair$2Lrc9b("refSw", r1470_refSw), new r441_xn$NamedParameterPair$2Lrc9b("pXInSw", 0.5), new r441_xn$NamedParameterPair$2Lrc9b("sw", r1470_sw1));
                    };
                    return r1433_base.r.in = function () {
                        var _r1479_t6;
                        var _r1479_t7 = arguments;
                        var r1479_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1479_t7, 0);
                        var _r1479_t0 = [];
                        var _r1479_t1 = 0;
                        while (_r1479_t1 < r1479_xn$flexarguments$2Lrc7uIe5.length) {
                            if (!(r1479_xn$flexarguments$2Lrc7uIe5[_r1479_t1] instanceof r441_xn$NamedParameterPair$2Lrc9b)) _r1479_t0.push(r1479_xn$flexarguments$2Lrc7uIe5[_r1479_t1]);
                            _r1479_t1 = _r1479_t1 + 1;
                        }
                        var _r1479_t2 = r1479_xn$flexarguments$2Lrc7uIe5;
                        var _r1479_t3 = _r1479_t2.length;
                        var _r1479_t4 = 0;
                        while (_r1479_t4 < _r1479_t3) {
                            _r1479_t1 = _r1479_t2[_r1479_t4];
                            if (_r1479_t1 && _r1479_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1479_t1.left === "x") r1479_x = _r1479_t1.right;
                            if (_r1479_t1 && _r1479_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1479_t1.left === "bot") r1479_bot = _r1479_t1.right;
                            if (_r1479_t1 && _r1479_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1479_t1.left === "top") r1479_top = _r1479_t1.right;
                            if (_r1479_t1 && _r1479_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1479_t1.left === "py") r1479_py = _r1479_t1.right;
                            if (_r1479_t1 && _r1479_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1479_t1.left === "space") r1479_space = _r1479_t1.right;
                            if (_r1479_t1 && _r1479_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1479_t1.left === "refSw") r1479_refSw = _r1479_t1.right;
                            if (_r1479_t1 && _r1479_t1 instanceof r441_xn$NamedParameterPair$2Lrc9b && _r1479_t1.left === "sw") r1479_sw = _r1479_t1.right;
                            _r1479_t4 = _r1479_t4 + 1;
                        }
                        var r1479_x = r1_fallback(r1479_x, _r1479_t0[0]);
                        var r1479_bot = r1_fallback(r1479_bot, _r1479_t0[1]);
                        var r1479_top = r1_fallback(r1479_top, _r1479_t0[2]);
                        var r1479_py = r1_fallback(r1479_py, _r1479_t0[3], 0.5);
                        var r1479_space = r1_fallback(r1479_space, _r1479_t0[4], [0, r441_Width]);
                        var r1479_refSw = r1_fallback(r1479_refSw, _r1479_t0[5], r441_Stroke);
                        var r1479_sw = r1_fallback(r1479_sw, _r1479_t0[6], r441_OverlayStroke);
                        var _r1479_t5 = r1413_calcYAndSw(r1479_bot, r1479_top, r1479_py, r1479_sw);
                        var r1479_y = _r1479_t5[0];
                        var r1479_sw1 = _r1479_t5[1];
                        return r1433_base(r1479_x, r1479_y, new r441_xn$NamedParameterPair$2Lrc9b("space", r1479_space), new r441_xn$NamedParameterPair$2Lrc9b("refSw", r1479_refSw), new r441_xn$NamedParameterPair$2Lrc9b("pXInSw", 1), new r441_xn$NamedParameterPair$2Lrc9b("sw", r1479_sw1));
                    };
                })(_r1413_t5);
                _r1413_t3 = !(_r1413_t1 = _r1413_t0.next()).done;
            }
            return _r1413_t4;
        })();
    });
    return void 0;
});


