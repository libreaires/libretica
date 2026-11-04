"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/point";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r529_t) {
    var r529_n, r529_i, r529_a, _r529_t3, _r529_t4, _r529_t5, _r529_t6, _r529_t7, _r529_t8, _r529_t9, _r529_t10, _r529_t11, _r529_t12, _r529_t13, _r529_t14, _r529_t15, _r529_t16, _r529_t17, _r529_t18, _r529_t19, _r529_t20, _r529_t21, _r529_t22, _r529_t23, _r529_t24, _r529_t25, _r529_t26;
    var _r529_t0 = function () {
        _r529_t7 = function (_r529_t8) {
            _r529_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r529_t8
            };
        };
        _r529_t9 = r529_t instanceof Array;
        if (_r529_t9) {
            _r529_t10 = r529_n = r529_t.length;
            _r529_t11 = r529_i = 0;
            _r529_t12 = function (_r529_t14) {
                return _r529_t7(_r529_t14);
            };
            _r529_t13 = function (_r529_t15) {
                _r529_t16 = r529_i < r529_n;
                if (_r529_t16) {
                    _r529_t0 = function (_r529_t17) {
                        return _r529_t13(r529_i = r529_i + 1);
                    };
                    return {
                        "value": [r529_i, r529_t[r529_i]],
                        "done": false
                    };
                } else return _r529_t12(_r529_t15);
            };
            return _r529_t13();
        } else {
            _r529_t18 = r529_a = Object.keys(r529_t);
            _r529_t19 = r529_n = r529_a.length;
            _r529_t20 = r529_i = 0;
            _r529_t21 = function (_r529_t23) {
                return _r529_t7(_r529_t23);
            };
            _r529_t22 = function (_r529_t24) {
                _r529_t25 = r529_i < r529_n;
                if (_r529_t25) {
                    _r529_t0 = function (_r529_t26) {
                        return _r529_t22(r529_i = r529_i + 1);
                    };
                    return {
                        "value": [r529_a[r529_i], r529_t[r529_a[r529_i]]],
                        "done": false
                    };
                } else return _r529_t21(_r529_t24);
            };
            return _r529_t22();
        }
    };
    var _r529_t1 = function (x) {
        try {
            return _r529_t0(x);
        } catch (ex) {
            return _r529_t2(ex);
        }
    };
    var _r529_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r529_t3 = this; else {
        _r529_t4 = function () {
            void 0;
        };
        _r529_t4.prototype = _r1_t10.prototype;
        _r529_t3 = new _r529_t4();
    }
    _r529_t3[Symbol.iterator] = function () {
        return _r529_t3;
    };
    _r529_t3.next = _r529_t1;
    _r529_t3.throw = function (x) {
        return _r529_t2(x);
    };
    return _r529_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Point = _r1_t9.Point;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r308_block, _r308_t4, _r308_t6;
    var _r308_t3 = this;
    var _r308_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r308_t1 = _r308_t0.length;
    var _r308_t2 = 0;
    var _r308_t5 = _r308_t2 < _r308_t1;
    while (_r308_t5) {
        _r308_t6 = (r308_block = _r308_t0[_r308_t2], r308_block(_r308_t3), _r308_t2 = _r308_t2 + 1);
        _r308_t5 = _r308_t2 < _r308_t1;
    }
    return _r308_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r312_xn$Capture_Ext$2Lrc2b) {
    var _r312_t0, _r312_t1;
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-AE-OE", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t9, _r313_t10, _r313_t11, _r313_tag12, _r313_t13, _r313_tag14, _r313_t15, _r313_tag16, _r313_t17, _r313_tag18, _r313_t19, _r313_tag20, _r313_t21, _r313_tag22, _r313_t23, _r313_tag24, _r313_t25, _r313_tag26, _r313_t27, _r313_tag28, _r313_t29, _r313_tag30, _r313_t31, _r313_tag32, _r313_t33, _r313_tag34;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_AHook = _r313_t1.AHook;
        var r313_ArchDepth = _r313_t1.ArchDepth;
        var r313_SmallArchDepth = _r313_t1.SmallArchDepth;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_MidJutCenter = _r313_t1.MidJutCenter;
        var r313_VJut = _r313_t1.VJut;
        var r313_CThin = _r313_t1.CThin;
        var r313_CThinB = _r313_t1.CThinB;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_ArchDepthAOf = _r313_t1.ArchDepthAOf;
        var r313_ArchDepthBOf = _r313_t1.ArchDepthBOf;
        var r313_YSmoothMidL = _r313_t1.YSmoothMidL;
        var r313_ArchDepthAClamped = _r313_t1.ArchDepthAClamped;
        var r313_ArchDepthBClamped = _r313_t1.ArchDepthBClamped;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_OShape = _r313_t5.OShape;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$derivemultipartglyphs$7Hrq65 = _r313_t6["derive-multi-part-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_turned = _r313_t6.turned;
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateTurnedLetter = _r313_t8.CreateTurnedLetter;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r319_t0, _r319_t1;
            return {
                "SubDfAndShift": r313_SubDfAndShift
            };
        });
        var r313_SubDfAndShift = function (r320_pShift, r320_df, r320__o) {
            var _r320_t0, _r320_t1;
            var r320_subDf = r320_df.slice(3, 2, r320__o);
            var r320_subDfFullShift = r320_df.rightSB - r320_subDf.rightSB;
            var r320_shift = r320_pShift * r320_subDfFullShift;
            return [r320_subDf, r320_shift];
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r322_t0, _r322_t1;
            return {
                "SubDfAndShiftEx": r313_SubDfAndShiftEx
            };
        });
        var r313_SubDfAndShiftEx = function (r323_p, r323_q, r323_pShift, r323_df, r323__o) {
            var _r323_t0, _r323_t1;
            var r323_subDf = r323_df.slice(r323_p, r323_q, r323__o);
            var r323_subDfFullShift = r323_df.rightSB - r323_subDf.rightSB;
            var r323_shift = r323_pShift * r323_subDfFullShift;
            return [r323_subDf, r323_shift];
        };
        (function () {
            var r325_suffix, r325_hookStyle, r325_body, _r325_t3, _r325_t5, _r325_t6, _r325_tag7;
            var _r325_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-A"].resolve();
            var r325_DoubleStorey = _r325_t0.DoubleStorey;
            var r325_DoubleStoreyConfig = _r325_t0.DoubleStoreyConfig;
            var _r325_t1 = Object.entries(r325_DoubleStoreyConfig)[Symbol.iterator]();
            var _r325_t2 = void 0;
            var _r325_t4 = !(_r325_t2 = _r325_t1.next()).done;
            while (_r325_t4) {
                _r325_t3 = _r325_t2.value;
                r325_suffix = _r325_t3[0];
                r325_hookStyle = _r325_t3[1][0];
                r325_body = _r325_t3[1][1][0];
                _r325_t3[1][1];
                _r325_t3[1];
                _r325_t5 = (function () {
                    if (r325_body === r325_DoubleStorey.ToothlessRounded) r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                        var _r332_t0, _r332_t1;
                        var r332_df = r332_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                        r332_currentGlyph.include(r332_df.markSet.e());
                        r332_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                        var r332_subDf = r332_df.slice(3, 2);
                        var r332_rise = r313_ArchDepthBClamped(r313_XH, 0, r332_subDf.smallArchDepthA, r332_subDf.smallArchDepthB);
                        r313_xn$GlyphSaveSink$2Lrc4b.save("ae/a." + r325_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r332_currentGlyph, r313_union(r325_DoubleStorey.HookAndBar(r332_subDf, r325_hookStyle, r332_rise, r332_df.mvs, r332_df.mvs * r313_CThinB), r325_DoubleStorey.Arc(r332_subDf, 0, r332_rise, r332_df.mvs, r332_df.mvs * r313_CThinB))));
                        r313_xn$GlyphSaveSink$2Lrc4b.save("ao/a." + r325_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r332_currentGlyph, r313_union(r325_DoubleStorey.HookAndBar(r332_subDf, r325_hookStyle, r332_rise, r332_df.mvs, r332_df.mvs * r313_CThin), r325_DoubleStorey.Arc(r332_subDf, 0, r332_rise, r332_df.mvs, r332_df.mvs * r313_CThin))));
                        r313_xn$GlyphSaveSink$2Lrc4b.save("au/a." + r325_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r332_currentGlyph, r313_union(r325_DoubleStorey.HookAndBar(r332_subDf, r325_hookStyle, r332_rise, r332_df.mvs), r325_DoubleStorey.Arc(r332_subDf, 0, r332_rise, r332_df.mvs, r332_df.mvs * r313_CThinB))));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save("aa." + r325_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                        var _r344_t1, _r344_t2;
                        var r344_df = r344_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                        r344_currentGlyph.include(r344_df.markSet.e());
                        var _r344_t0 = r313_SubDfAndShift(1, r344_df);
                        var r344_subDf = _r344_t0[0];
                        var r344_shift = _r344_t0[1];
                        var r344_barTop = r1_mix(0, r313_XH, r313_DesignParameters.aBarPos) + r344_df.mvs * (0.5 + r313_DesignParameters.aBarStrokeAdj);
                        var r344_ada2 = r313_ArchDepthAOf(r313_SmallArchDepth * r313_DesignParameters.aBarPos);
                        var r344_adb2 = r313_ArchDepthBOf(r313_SmallArchDepth * r313_DesignParameters.aBarPos);
                        var r344_rise = r313_YSmoothMidL(r344_barTop, 0, r344_ada2, r344_adb2);
                        var r344_left = function () {
                            var _r347_t0, _r347_t1;
                            return r313_union(r325_DoubleStorey.HookAndBar(r344_subDf, r325_hookStyle, r344_rise, r344_df.mvs), r325_DoubleStorey.Arc(r344_subDf, 0, r344_rise, r344_df.mvs, r344_df.mvs * r313_CThinB));
                        };
                        var r344_right = function () {
                            var _r348_t0, _r348_t1;
                            return r313_xn$withtransform$5sIl(r313_ApparentTranslate(r344_shift, 0), r325_body(r344_subDf, r325_hookStyle, r344_df.mvs));
                        };
                        r344_currentGlyph.include(r313_difference(r344_right(), r313_intersection(r313_MaskAbove(r344_barTop), r313_union(r313_xn$withtransform$5sIl(r313_ApparentTranslate(-0.25 * r344_df.mvs, 0), r344_left()), r313_xn$withtransform$5sIl(r313_ApparentTranslate(-0.5 * r344_df.mvs, 0), r344_left()), r313_xn$withtransform$5sIl(r313_ApparentTranslate(-0.75 * r344_df.mvs, 0), r344_left()), r313_xn$withtransform$5sIl(r313_ApparentTranslate(-1 * r344_df.mvs, 0), r344_left())))));
                        r344_currentGlyph.include(r313_difference(r344_left(), r313_intersection(r313_MaskBelow(r344_barTop), r313_union(r313_xn$withtransform$5sIl(r313_ApparentTranslate(+0.25 * r344_df.mvs, 0), r344_right()), r313_xn$withtransform$5sIl(r313_ApparentTranslate(+0.5 * r344_df.mvs, 0), r344_right()), r313_xn$withtransform$5sIl(r313_ApparentTranslate(+0.75 * r344_df.mvs, 0), r344_right()), r313_xn$withtransform$5sIl(r313_ApparentTranslate(+1 * r344_df.mvs, 0), r344_right())))));
                        return void 0;
                    }));
                })();
                _r325_t4 = !(_r325_t2 = _r325_t1.next()).done;
            }
            return _r325_t5;
        })();
        (function () {
            var _r352_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
            var r352_OBarLeft = _r352_t0.OBarLeft;
            var r352_OBarRight = _r352_t0.OBarRight;
            var r352_oeOPart = function (r354_pShift) {
                var _r354_t0, _r354_t1;
                return function (r355_df, r355_top, r355_ad, r355_sw, r355_fine) {
                    var _r355_t1, _r355_t2;
                    var _r355_t0 = r313_SubDfAndShift(r354_pShift, r355_df, r355_fine ? 0 : r313_OX);
                    var r355_subDf = _r355_t0[0];
                    var r355_shift = _r355_t0[1];
                    var r355_ada = r355_subDf.archDepthAOf(r355_ad, r355_sw);
                    var r355_adb = r355_subDf.archDepthBOf(r355_ad, r355_sw);
                    return r313_xn$withtransform$5sIl(r313_ApparentTranslate(r355_shift, 0), r355_fine ? (r354_pShift ? r352_OBarLeft : r352_OBarRight).shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r355_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r355_subDf.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r355_subDf.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r355_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r355_fine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r355_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r355_adb)) : r313_OShape(r355_top, 0, r355_subDf.leftSB, r355_subDf.rightSB, r355_sw, r355_ada, r355_adb));
                };
            };
            r313_xn$GlyphSaveSink$2Lrc4b.save("oe/o", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                var _r365_t0, _r365_t1;
                var r365_df = r365_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                r365_currentGlyph.include(r365_df.markSet.e());
                r365_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                r365_currentGlyph.include(r352_oeOPart(0)(r365_df, r313_XH, r313_SmallArchDepth, r365_df.mvs, r365_df.mvs * r313_CThinB));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("AO/O", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                var _r372_t0, _r372_t1;
                var r372_df = r372_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                r372_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                r372_currentGlyph.include(r352_oeOPart(1)(r372_df, r313_CAP, r313_ArchDepth, r372_df.mvs));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("ao/o", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r378_currentGlyph) {
                var _r378_t0, _r378_t1;
                var r378_df = r378_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                r378_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                r378_currentGlyph.include(r352_oeOPart(1)(r378_df, r313_XH, r313_SmallArchDepth, r378_df.mvs, r378_df.mvs * r313_CThin));
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("uo/o", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                var _r384_t0, _r384_t1;
                var r384_df = r384_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                r384_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                var r384_subDf = r384_df.slice(3, 2, r313_OX);
                r384_currentGlyph.include(r352_OBarLeft.earlessRounded(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("left", r384_df.middle - r313_HSwToV(0.5 * r384_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r384_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("yTerminal", r313_XH / 2), new r313_xn$NamedParameterPair$2Lrc9b("sw", r384_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r384_df.mvs * r313_CThin), new r313_xn$NamedParameterPair$2Lrc9b("ada", r384_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r384_subDf.smallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("yend", r313_XH - r313_ArchDepthAClamped(r313_XH, 0, r384_subDf.smallArchDepthA, r384_subDf.smallArchDepthB) + r313_O)));
                return void 0;
            }));
        })();
        (function () {
            var r398_suffix, r398_body, r398_revbody, _r398_t4, _r398_t6, _r398_t7, _r398_tag8;
            var _r398_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-E"].resolve();
            var r398_SmallEConfig = _r398_t0.SmallEConfig;
            var r398_df = r313_DivFrame(r313_para.advanceScaleMM, 3);
            var _r398_t1 = r313_SubDfAndShift(1, r398_df, r313_OX);
            var r398_subDf = _r398_t1[0];
            var r398_shift = _r398_t1[1];
            var _r398_t2 = Object.entries(r398_SmallEConfig)[Symbol.iterator]();
            var _r398_t3 = void 0;
            var _r398_t5 = !(_r398_t3 = _r398_t2.next()).done;
            while (_r398_t5) {
                _r398_t4 = _r398_t3.value;
                r398_suffix = _r398_t4[0];
                r398_body = _r398_t4[1][0];
                r398_revbody = _r398_t4[1][1];
                _r398_t4[1];
                _r398_t6 = (function () {
                    r313_xn$GlyphSaveSink$2Lrc4b.save("ae/e." + r398_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r405_currentGlyph) {
                        var _r405_t0, _r405_t1;
                        r405_currentGlyph.setWidth(0);
                        r405_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                        r405_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(r398_shift, 0), r398_body(r398_subDf, r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r398_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r398_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r398_subDf.smallArchDepthB))));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save("aInve/inve." + r398_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r415_currentGlyph) {
                        var _r415_t0, _r415_t1;
                        r415_currentGlyph.setWidth(0);
                        r415_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                        r415_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(r398_shift, 0), r398_revbody(r398_subDf, r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r398_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r398_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r398_subDf.smallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("turned", true))));
                        return void 0;
                    }));
                })();
                _r398_t5 = !(_r398_t3 = _r398_t2.next()).done;
            }
            return _r398_t6;
        })();
        (function () {
            var r425_prefix, r425_cThin, r425_suffix, r425_Base, r425_Slabs, _r425_t5, _r425_t8, _r425_t9, _r425_tag10, _r425_t12, _r425_t13, _r425_tag14;
            var _r425_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
            var r425_uBowl = _r425_t0.uBowl;
            var _r425_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-U"].resolve();
            var r425_UShapeGroup = _r425_t1.UShapeGroup;
            var r425_USerifs = _r425_t1.USerifs;
            var r425_SmallUConfigT = _r425_t1.SmallUConfigT;
            var r425_df = r313_DivFrame(r313_para.advanceScaleMM, 3);
            var _r425_t2 = r313_SubDfAndShift(1, r425_df, 0);
            var r425_subDf = _r425_t2[0];
            var r425_shift = _r425_t2[1];
            var r425_SmallULeftConfig = {
                "ue": r313_CThinB,
                "uo": r313_CThin
            };
            var _r425_t3 = Object.entries(r425_SmallULeftConfig)[Symbol.iterator]();
            var _r425_t4 = void 0;
            while (!(_r425_t4 = _r425_t3.next()).done) {
                _r425_t5 = _r425_t4.value;
                r425_prefix = _r425_t5[0];
                r425_cThin = _r425_t5[1];
                (function () {
                    return r313_xn$GlyphSaveSink$2Lrc4b.save("" + r425_prefix + "/u.toothlessRoundedSerifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r433_currentGlyph) {
                        var _r433_t0, _r433_t1;
                        r433_currentGlyph.include(r425_df);
                        r433_currentGlyph.include(r425_df.markSet.e());
                        r433_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                        r433_currentGlyph.include(r425_uBowl.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r425_subDf.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r425_subDf.rightSB - r313_HSwToV(r425_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r425_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r425_df.mvs * r425_cThin), new r313_xn$NamedParameterPair$2Lrc9b("ada", r425_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r425_subDf.smallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("rightY0", r313_XH - r313_ArchDepthAClamped(r313_XH, 0, r425_subDf.smallArchDepthA, r425_subDf.smallArchDepthB) + r313_O)));
                        r313_xn$GlyphSaveSink$2Lrc4b.save("" + r425_prefix + "/u.toothlessRoundedMotionSerifed", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r433_currentGlyph, r425_USerifs.MotionToothless(r425_subDf, r313_XH, r425_df.mvs)));
                        return void 0;
                    }));
                })();
            }
            var r425_SmallURightConfig = r425_SmallUConfigT(r425_UShapeGroup(r425_subDf.smallArchDepthA, r425_subDf.smallArchDepthB));
            var _r425_t6 = Object.entries(r425_SmallURightConfig)[Symbol.iterator]();
            var _r425_t7 = void 0;
            var _r425_t11 = !(_r425_t7 = _r425_t6.next()).done;
            while (_r425_t11) {
                _r425_t8 = _r425_t7.value;
                r425_suffix = _r425_t8[0];
                r425_Base = _r425_t8[1][0][0];
                _r425_t8[1][0];
                r425_Slabs = _r425_t8[1][1];
                _r425_t8[1];
                _r425_t12 = (function () {
                    return r313_xn$GlyphSaveSink$2Lrc4b.save("au/u." + r425_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r454_currentGlyph) {
                        var _r454_t0, _r454_t1;
                        r454_currentGlyph.setWidth(0);
                        r454_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                        r454_currentGlyph.include(r313_difference(r425_Base(r425_subDf, r313_XH, r425_df.mvs), r313_intersection(r313_MaskLeft(r425_subDf.middle), r313_MaskAbove(r313_XH - r425_subDf.smallArchDepthB))));
                        r454_currentGlyph.include(r425_Slabs(r425_subDf, r313_XH, r425_df.mvs));
                        r454_currentGlyph.include(r313_ApparentTranslate(r425_shift, 0));
                        r454_currentGlyph.ejectTagged("serifLT");
                        return void 0;
                    }));
                })();
                _r425_t11 = !(_r425_t7 = _r425_t6.next()).done;
            }
            return _r425_t12;
        })();
        (function () {
            var r462_suffix, r462_styTop, r462_styBot, _r462_t3, _r462_t5, _r462_t6, _r462_tag7;
            var _r462_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-C"].resolve();
            var r462_CLetterForm = _r462_t0.CLetterForm;
            var r462_CConfig = _r462_t0.CConfig;
            var r462_xn$FLATCONNECTION$5sIl = 3;
            var r462_OpenOShape = function (r464_df, r464_styTop, r464_styBot) {
                var _r464_t0, _r464_t1;
                return r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r467_currentGlyph) {
                    var _r467_t0, _r467_t1;
                    var r467_subDf = r464_df.slice(3, 2, r313_OX);
                    var r467_lf = r462_CLetterForm(r467_subDf, r464_styTop, r464_styBot, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("ada", r467_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r467_subDf.smallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r464_df.mvs));
                    r467_currentGlyph.include(r467_lf.revFull());
                    return void 0;
                }));
            };
            var r462_EsTeLeftShape = function (r472_subDf, r472_styBot) {
                var _r472_t0, _r472_t1;
                return r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r475_currentGlyph) {
                    var _r475_t0, _r475_t1;
                    var r475_lf = r462_CLetterForm(r472_subDf, r462_xn$FLATCONNECTION$5sIl, r472_styBot, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("ada", r472_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r472_subDf.smallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r472_subDf.mvs));
                    r475_currentGlyph.include(r475_lf.full());
                    return void 0;
                }));
            };
            var _r462_t1 = Object.entries(r462_CConfig)[Symbol.iterator]();
            var _r462_t2 = void 0;
            var _r462_t4 = !(_r462_t2 = _r462_t1.next()).done;
            while (_r462_t4) {
                _r462_t3 = _r462_t2.value;
                r462_suffix = _r462_t3[0];
                r462_styTop = _r462_t3[1][0];
                r462_styBot = _r462_t3[1][1];
                _r462_t3[1];
                _r462_t5 = (function () {
                    r313_xn$GlyphSaveSink$2Lrc4b.save("oeOpen/oOpen." + r462_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r485_currentGlyph) {
                        var _r485_t0, _r485_t1;
                        var r485_df = r485_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                        r485_currentGlyph.include(r485_df.markSet.e());
                        r485_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                        r485_currentGlyph.include(r462_OpenOShape(r485_df, r462_styTop, r462_styBot));
                        return void 0;
                    }));
                    return !r462_styTop ? (r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/este.upright/es." + r462_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r492_currentGlyph) {
                        var _r492_t0, _r492_t1;
                        var r492_df = r492_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3.5));
                        r492_currentGlyph.include(r492_df.markSet.e());
                        r492_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                        var r492_subDfLeft = r492_df.slice(3.25, 1.875);
                        r492_currentGlyph.include(r462_EsTeLeftShape(r492_subDfLeft, r462_styBot));
                        return void 0;
                    })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/este.italic/es." + r462_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r499_currentGlyph) {
                        var _r499_t0, _r499_t1;
                        var r499_df = r499_currentGlyph.include(r313_DivFrame(r1_mix(1, r313_para.advanceScaleMM, 2), 4.75));
                        r499_currentGlyph.include(r499_df.markSet.e());
                        r499_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                        var r499_subDfLeft = r499_df.slice(4.5, 2);
                        r499_currentGlyph.include(r462_EsTeLeftShape(r499_subDfLeft, r462_styBot));
                        return void 0;
                    }))) : void 0;
                })();
                _r462_t4 = !(_r462_t2 = _r462_t1.next()).done;
            }
            return _r462_t5;
        })();
        (function () {
            var r505_suffix, r505_adws, r505_doST, r505_doSB, _r505_t3, _r505_t5, _r505_t6, _r505_tag7;
            var _r505_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-T"].resolve();
            var r505_TConfig = _r505_t0.TConfig;
            var r505_EsTeRightShape = function (r507_subDf, r507_doTopSerifs, r507_doBottomSerifs) {
                var _r507_t0, _r507_t1;
                return r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r510_currentGlyph) {
                    var r510_swVJut, r510_midJutCenter, _r510_t0, _r510_t1;
                    r510_currentGlyph.include(r313_VBar.m(r507_subDf.middle, 0, r313_XH, r507_subDf.mvs));
                    r510_currentGlyph.include(r313_HBar.t(r507_subDf.leftSB, r507_subDf.rightSB, r313_XH, r507_subDf.mvs));
                    if (r507_doTopSerifs) {
                        r510_swVJut = Math.min(r507_subDf.mvs, r313_VSwToH(0.625 * (r507_subDf.rightSB - (r507_subDf.middle + r313_HSwToV(0.5 * r507_subDf.mvs)))));
                        r510_currentGlyph.include(r313_tagged("serifRT", r313_VSerif.dr(r507_subDf.rightSB, r313_XH, r313_VJut, r510_swVJut)));
                    }
                    if (r507_doBottomSerifs) {
                        r510_midJutCenter = r1_mix(r313_HSwToV(0.5 * r507_subDf.mvs), r313_MidJutCenter, r507_subDf.width / r313_Width);
                        r510_currentGlyph.include(r313_tagged("serifMB", r313_HSerif.mb(r507_subDf.middle, 0, r510_midJutCenter, r507_subDf.mvs)));
                    }
                    return void 0;
                }));
            };
            var _r505_t1 = Object.entries(r505_TConfig)[Symbol.iterator]();
            var _r505_t2 = void 0;
            var _r505_t4 = !(_r505_t2 = _r505_t1.next()).done;
            while (_r505_t4) {
                _r505_t3 = _r505_t2.value;
                r505_suffix = _r505_t3[0];
                r505_adws = _r505_t3[1][0];
                r505_doST = _r505_t3[1][1];
                r505_doSB = _r505_t3[1][2];
                _r505_t3[1];
                _r505_t5 = (function () {
                    return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/este.upright/te." + r505_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r520_currentGlyph) {
                        var _r520_t0, _r520_t1;
                        var r520_df = r313_DivFrame(r313_para.advanceScaleMM, 3.5);
                        r520_currentGlyph.setWidth(0);
                        r520_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                        var r520_subDfLeft = r520_df.slice(3.25, 1.875);
                        var r520_subDfRight = r520_df.restCompact(1, r520_subDfLeft, 2);
                        r520_currentGlyph.include(r505_EsTeRightShape(r520_subDfRight, r505_doST, r505_doSB));
                        r520_currentGlyph.include(r313_ApparentTranslate(r520_df.width - r520_subDfRight.width, 0));
                        return void 0;
                    }));
                })();
                _r505_t4 = !(_r505_t2 = _r505_t1.next()).done;
            }
            return _r505_t5;
        })();
        (function () {
            var r526_suffix, r526_Body, r526_earless, r526_shortLeg, r526_tailed, r526_Serifs, _r526_t3, _r526_t5, _r526_t6, _r526_tag7;
            var _r526_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-M"].resolve();
            var r526_mShapeBodyImpl = _r526_t0.mShapeBodyImpl;
            var r526_SmallMConfig = _r526_t0.SmallMConfig;
            var _r526_t1 = _r1_t2(r526_SmallMConfig)[Symbol.iterator]();
            var _r526_t2 = void 0;
            var _r526_t4 = !(_r526_t2 = _r526_t1.next()).done;
            while (_r526_t4) {
                _r526_t3 = _r526_t2.value;
                r526_suffix = _r526_t3[0];
                r526_Body = _r526_t3[1][0][0];
                r526_earless = _r526_t3[1][0][1];
                _r526_t3[1][0];
                r526_shortLeg = _r526_t3[1][1][0];
                _r526_t3[1][1];
                r526_tailed = _r526_t3[1][2][0];
                _r526_t3[1][2];
                r526_Serifs = _r526_t3[1][3][0];
                _r526_t3[1][3];
                _r526_t3[1];
                _r526_t5 = (function () {
                    return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/este.italic/te." + r526_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r535_currentGlyph) {
                        var _r535_t0, _r535_t1;
                        var r535_df = r313_DivFrame(r1_mix(1, r313_para.advanceScaleMM, 2), 4.75);
                        r535_currentGlyph.setWidth(0);
                        r535_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                        var r535_subDfLeft = r535_df.slice(4.5, 2);
                        var r535_subDfRight = r535_df.restCompact(0.5, r535_subDfLeft, 3);
                        r535_currentGlyph.include(r526_mShapeBodyImpl(r535_subDfRight, r313_XH, r526_Body, r526_earless, r526_shortLeg, r526_tailed, r526_Serifs));
                        r535_currentGlyph.include(r313_ApparentTranslate(r535_df.width - r535_subDfRight.width, 0));
                        return void 0;
                    }));
                })();
                _r526_t4 = !(_r526_t2 = _r526_t1.next()).done;
            }
            return _r526_t5;
        })();
        (function () {
            var r541_suffix, r541_legShape, r541_fGap, r541_slabs, r541_doLegSlab, r541_doTail, _r541_t4, _r541_t6, _r541_t7, _r541_tag8;
            var _r541_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-P"].resolve();
            var r541_PShape = _r541_t0.PShape;
            var r541_PBarPosY = _r541_t0.PBarPosY;
            var _r541_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-R"].resolve();
            var r541_RevRShape = _r541_t1.RevRShape;
            var r541_RevRConfig = _r541_t1.RevRConfig;
            var _r541_t2 = Object.entries(r541_RevRConfig)[Symbol.iterator]();
            var _r541_t3 = void 0;
            var _r541_t5 = !(_r541_t3 = _r541_t2.next()).done;
            while (_r541_t5) {
                _r541_t4 = _r541_t3.value;
                r541_suffix = _r541_t4[0];
                r541_legShape = _r541_t4[1][0];
                r541_fGap = _r541_t4[1][1];
                r541_slabs = _r541_t4[1][2][0];
                r541_doLegSlab = _r541_t4[1][2][1];
                r541_doTail = _r541_t4[1][2][2];
                _r541_t4[1][2];
                _r541_t4[1];
                _r541_t6 = (function () {
                    return !r541_slabs && !r541_doTail ? r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yaye/ya." + r541_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r549_currentGlyph) {
                        var _r549_t0, _r549_t1;
                        var r549_df = r549_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                        r549_currentGlyph.include(r549_df.markSet.e());
                        r549_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                        var r549_subDf = r549_df.slice(3, 2);
                        r549_currentGlyph.include(r541_RevRShape(r541_legShape, r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("df", r549_subDf), new r313_xn$NamedParameterPair$2Lrc9b("legSlab", r541_doLegSlab), new r313_xn$NamedParameterPair$2Lrc9b("open", r541_fGap), new r313_xn$NamedParameterPair$2Lrc9b("sw", r549_df.mvs)));
                        r549_currentGlyph.ejectTagged("strokeR");
                        r549_currentGlyph.ejectTagged("serifRB");
                        r549_currentGlyph.ejectTagged("serifRT");
                        r549_currentGlyph.include(r313_VBar.r(r549_subDf.rightSB, r541_PBarPosY(r313_XH, r549_df.mvs, r541_PShape.BarPos), r313_XH, r549_df.mvs));
                        return void 0;
                    })) : void 0;
                })();
                _r541_t5 = !(_r541_t3 = _r541_t2.next()).done;
            }
            return _r541_t6;
        })();
        (function () {
            var r563_suffix, r563_Body, r563_Serifs, r563_doTS, r563_doBS, _r563_t3, _r563_t5, _r563_t6, _r563_tag7;
            var _r563_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-P"].resolve();
            var r563_PConfig = _r563_t0.PConfig;
            var _r563_t1 = Object.entries(r563_PConfig)[Symbol.iterator]();
            var _r563_t2 = void 0;
            var _r563_t4 = !(_r563_t2 = _r563_t1.next()).done;
            while (_r563_t4) {
                _r563_t3 = _r563_t2.value;
                r563_suffix = _r563_t3[0];
                r563_Body = _r563_t3[1][0];
                r563_Serifs = _r563_t3[1][1][0];
                r563_doTS = _r563_t3[1][1][1];
                r563_doBS = _r563_t3[1][1][2];
                _r563_t3[1][1];
                _r563_t3[1];
                _r563_t5 = (function () {
                    return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/rha/er." + r563_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r570_currentGlyph) {
                        var _r570_t0, _r570_t1;
                        var r570_df = r570_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
                        r570_currentGlyph.include(r570_df.markSet.p());
                        r570_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                        var r570_subDf = r570_df.slice(3, 2);
                        r570_currentGlyph.include(r563_Body(new r313_xn$NamedParameterPair$2Lrc9b("left", r570_subDf.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r570_subDf.rightSB + r313_OX), new r313_xn$NamedParameterPair$2Lrc9b("sw", r570_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("ada", r570_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r570_subDf.smallArchDepthB)));
                        r570_currentGlyph.include(r563_Serifs(r570_subDf, r313_XH, r570_df.mvs));
                        r570_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r313_SB));
                        return void 0;
                    }));
                })();
                _r563_t4 = !(_r563_t2 = _r563_t1.next()).done;
            }
            return _r563_t5;
        })();
        (function () {
            var _r583_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
            var r583_LegShape = _r583_t0.LegShape;
            var r583_LhaLeftShape = function (r585_df, r585_top) {
                var _r585_t0, _r585_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r587_currentGlyph) {
                    var _r587_t1, _r587_t2;
                    var _r587_t0 = r313_SubDfAndShiftEx(6, 3, 0, r585_df);
                    var r587_subDf = _r587_t0[0];
                    var r587_xTopLeft = r1_mix(r587_subDf.leftSB, r587_subDf.rightSB - r313_HSwToV(0.5 * r585_df.mvs), 0.075);
                    var r587_xBotLeft = r1_mix(r313_SB, 0, r313_SLAB ? 1 : 0.75);
                    r587_currentGlyph.include(r313_HBar.t(r587_xTopLeft, r587_subDf.rightSB - r313_HSwToV(0.5 * r585_df.mvs), r585_top, r585_df.mvs));
                    r587_currentGlyph.include(r583_LegShape(new r313_xn$NamedParameterPair$2Lrc9b("ztop", r1_Point.fromXY(r1_Point.Type.Corner, r587_xTopLeft, r585_top)), new r313_xn$NamedParameterPair$2Lrc9b("zbot", r1_Point.fromXY(r1_Point.Type.Corner, r587_xBotLeft, 0)), new r313_xn$NamedParameterPair$2Lrc9b("xmid", r587_xTopLeft), new r313_xn$NamedParameterPair$2Lrc9b("sw", r585_df.mvs)));
                    if (r313_SLAB) r587_currentGlyph.include(r313_tagged("serifLT", r313_HSerif.lt(r587_xTopLeft, r585_top, r313_SideJut, r585_df.mvs)));
                    return void 0;
                });
            };
            r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Lha/El", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r597_currentGlyph) {
                var _r597_t0, _r597_t1;
                var r597_df = r597_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3.2));
                r597_currentGlyph.include(r597_df.markSet.capital());
                r597_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                r597_currentGlyph.include(r583_LhaLeftShape(r597_df, r313_CAP));
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/lha/el", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r604_currentGlyph) {
                var _r604_t0, _r604_t1;
                var r604_df = r604_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3.2));
                r604_currentGlyph.include(r604_df.markSet.e());
                r604_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                r604_currentGlyph.include(r583_LhaLeftShape(r604_df, r313_XH));
                return void 0;
            }));
        })();
        (function () {
            var r610_suffix, r610_stroke1, r610_stroke2, r610_desc, r610_serifShape, r610_fMaskBase, _r610_t4, _r610_t6, _r610_t7, _r610_tag8;
            var _r610_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
            var r610_SerifFrame = _r610_t0.SerifFrame;
            var r610_WithSerifOverflowMask = _r610_t0.WithSerifOverflowMask;
            var _r610_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-X"].resolve();
            var r610_XConfig = _r610_t1.XConfig;
            var r610_XLetterForm = _r610_t1.XLetterForm;
            var r610_XSerifs = _r610_t1.XSerifs;
            var _r610_t2 = Object.entries(r610_XConfig)[Symbol.iterator]();
            var _r610_t3 = void 0;
            var _r610_t5 = !(_r610_t3 = _r610_t2.next()).done;
            while (_r610_t5) {
                _r610_t4 = _r610_t3.value;
                r610_suffix = _r610_t4[0];
                r610_stroke1 = _r610_t4[1][0][0];
                r610_stroke2 = _r610_t4[1][0][1];
                _r610_t4[1][0];
                r610_desc = _r610_t4[1][1][0];
                _r610_t4[1][1];
                r610_serifShape = _r610_t4[1][2][0];
                r610_fMaskBase = _r610_t4[1][2][1];
                _r610_t4[1][2];
                _r610_t4[1];
                _r610_t6 = (function () {
                    var r615_RhaRightShape = function (r616_df, r616_top, r616_bot, r616_turn, r616_tension) {
                        var _r616_t0, _r616_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r618_currentGlyph) {
                            var r618_sf, r618___, _r618_t0, _r618_t1, _r618_t2;
                            var r618_lf = r610_XLetterForm(r616_df.bodyBox(r616_top, r616_bot), r610_stroke1, r610_stroke2, r616_turn, r616_tension, new r313_xn$NamedParameterPair$2Lrc9b("sw", r616_df.mvs));
                            r618_currentGlyph.include(r610_WithSerifOverflowMask(r610_fMaskBase, r616_df.bodyBox(r616_top, r616_bot), r618_lf.rightHalf(r610_fMaskBase)));
                            if (r610_serifShape) {
                                r618_sf = r610_SerifFrame.fromDf(r616_df, r616_top, r616_bot);
                                r618_currentGlyph.include((_r618_t0 = r610_serifShape, _r618_t0 === r610_XSerifs.Full ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r631_currentGlyph) {
                                    var _r631_t0, _r631_t1;
                                    r631_currentGlyph.include(r618_sf.rt.full, true, true);
                                    r631_currentGlyph.include(r618_sf.rb.full);
                                    return void 0;
                                }) : _r618_t0 === r610_XSerifs.SemiChancery ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r628_currentGlyph) {
                                    var _r628_t0, _r628_t1;
                                    r628_currentGlyph.include(r618_sf.rt.full, true, true);
                                    return void 0;
                                }) : _r618_t0 === r610_XSerifs.BilateralMotion ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r625_currentGlyph) {
                                    var _r625_t0, _r625_t1;
                                    r625_currentGlyph.include(r618_sf.rb.outer, true, true);
                                    return void 0;
                                }) : (r618___ = _r618_t0, new r313_xn$Capture$2Lrc8.GlyphProc(function (r623_currentGlyph) {
                                    var _r623_t0, _r623_t1;
                                    return void 0;
                                }))));
                            }
                            return void 0;
                        });
                    };
                    var r615_LhaRightShape = function (r634_df, r634_top, r634_bot, r634_turn, r634_tension) {
                        var _r634_t0, _r634_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r636_currentGlyph) {
                            var r636_sf, r636___, _r636_t0, _r636_t1, _r636_t2;
                            var r636_stroke1f = r610_stroke1 === 3 ? 4 : r610_stroke1;
                            var r636_lf = r610_XLetterForm(r634_df.bodyBox(r634_top, r634_bot), r636_stroke1f, r610_stroke2, r634_turn, r634_tension, new r313_xn$NamedParameterPair$2Lrc9b("sw", r634_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("sw", r634_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("swCursiveEnd", r634_df.adviceStroke(3)), new r313_xn$NamedParameterPair$2Lrc9b("swCursiveCoEnd", r634_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("swCursiveMid", r634_df.mvs));
                            r636_currentGlyph.include(r610_WithSerifOverflowMask(r610_fMaskBase, r634_df.bodyBox(r634_top, r634_bot), r636_lf.base(r610_fMaskBase)));
                            if (r610_serifShape) {
                                r636_sf = r610_SerifFrame.fromDf(r634_df, r634_top, r634_bot);
                                r636_currentGlyph.include((_r636_t0 = r610_serifShape, _r636_t0 === r610_XSerifs.Full ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r654_currentGlyph) {
                                    var _r654_t0, _r654_t1;
                                    r654_currentGlyph.include(r636_sf.rt.full, true, true);
                                    r654_currentGlyph.include(r636_sf.lb.full);
                                    r654_currentGlyph.include(r636_sf.rb.full);
                                    return void 0;
                                }) : _r636_t0 === r610_XSerifs.SemiChancery ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r650_currentGlyph) {
                                    var _r650_t0, _r650_t1;
                                    r650_currentGlyph.include(r636_sf.rt.full, true, true);
                                    r650_currentGlyph.include(r636_sf.lb.full);
                                    return void 0;
                                }) : _r636_t0 === r610_XSerifs.BilateralMotion ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r647_currentGlyph) {
                                    var _r647_t0, _r647_t1;
                                    r647_currentGlyph.include(r636_sf.rb.outer, true, true);
                                    return void 0;
                                }) : (r636___ = _r636_t0, new r313_xn$Capture$2Lrc8.GlyphProc(function (r645_currentGlyph) {
                                    var _r645_t0, _r645_t1;
                                    return void 0;
                                }))));
                            }
                            return void 0;
                        });
                    };
                    return !r610_desc ? (r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/rha/kha." + r610_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r660_currentGlyph) {
                        var _r660_t0, _r660_t1;
                        var r660_df = r313_DivFrame(r313_para.advanceScaleM, 3);
                        r660_currentGlyph.setWidth(0);
                        r660_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                        r660_currentGlyph.include(r615_RhaRightShape(r660_df, r313_XH, 0, 0.1, 0.2));
                        return void 0;
                    })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/lha/kha." + r610_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r666_currentGlyph) {
                        var _r666_t1, _r666_t2;
                        var r666_df = r313_DivFrame(r313_para.advanceScaleM, 3.2);
                        r666_currentGlyph.setWidth(0);
                        r666_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                        var _r666_t0 = r313_SubDfAndShiftEx(6, 4, 1, r666_df);
                        var r666_subDf = _r666_t0[0];
                        var r666_shift = _r666_t0[1];
                        r666_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(r666_shift, 0), r615_LhaRightShape(r666_subDf, r313_XH, 0, 0.1, 0.2)));
                        return void 0;
                    })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Lha/Kha." + r610_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r672_currentGlyph) {
                        var _r672_t1, _r672_t2;
                        var r672_df = r313_DivFrame(r313_para.advanceScaleM, 3.2);
                        r672_currentGlyph.setWidth(0);
                        r672_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                        var _r672_t0 = r313_SubDfAndShiftEx(6, 4, 1, r672_df);
                        var r672_subDf = _r672_t0[0];
                        var r672_shift = _r672_t0[1];
                        r672_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(r672_shift, 0), r615_LhaRightShape(r672_subDf, r313_CAP, 0, 0.1, 0.28)));
                        return void 0;
                    }))) : void 0;
                })();
                _r610_t5 = !(_r610_t3 = _r610_t2.next()).done;
            }
            return _r610_t6;
        })();
        (function () {
            r313_xn$GlyphSaveSink$2Lrc4b.save("turnoeSlash/oSlash/overlay", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r680_currentGlyph) {
                var _r680_t1, _r680_t2;
                var r680_df = r313_DivFrame(r313_para.advanceScaleMM, 3);
                var _r680_t0 = r313_SubDfAndShift(1, r680_df, r313_OX);
                var r680_subDf = _r680_t0[0];
                var r680_shift = _r680_t0[1];
                var r680_fine = 0.375 * r313_OverlayStroke;
                r680_currentGlyph.include(r313_dispiro(r313_widths.center(2 * r680_fine), r313_flat(r680_shift + r680_subDf.leftSB + r313_OX + r680_fine, r1_mix(r313_XH, 0, 1.05)), r313_curl(r680_shift + r680_subDf.rightSB - r313_OX - r680_fine, r1_mix(0, r313_XH, 1.05))));
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("turnoeBar/oBar/overlay", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r684_currentGlyph) {
                var _r684_t1, _r684_t2;
                var r684_df = r313_DivFrame(r313_para.advanceScaleMM, 3);
                var _r684_t0 = r313_SubDfAndShift(1, r684_df, r313_OX);
                var r684_subDf = _r684_t0[0];
                var r684_shift = _r684_t0[1];
                r684_currentGlyph.include(r313_HBar.m(r684_shift + r684_subDf.leftSB + r313_HSwToV(0.5 * r684_df.mvs), r684_shift + r684_subDf.rightSB - r313_HSwToV(0.5 * r684_df.mvs), r313_XH / 2, r684_df.mvs));
                return void 0;
            }));
        })();
        r313_xn$selectvariant$7Hrq("aa", 42803, new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/doubleStorey"));
        r313_xn$selectvariant$7Hrq("ae/a");
        r313_xn$selectvariant$7Hrq("ao/a", new r313_xn$NamedParameterPair$2Lrc9b("follow", "ae/a"));
        r313_xn$selectvariant$7Hrq("au/a", new r313_xn$NamedParameterPair$2Lrc9b("follow", "ae/a"));
        r313_xn$selectvariant$7Hrq("ae/e", new r313_xn$NamedParameterPair$2Lrc9b("follow", "e"));
        r313_xn$selectvariant$7Hrq("au/u");
        r313_xn$selectvariant$7Hrq("ue/u");
        r313_xn$selectvariant$7Hrq("uo/u", new r313_xn$NamedParameterPair$2Lrc9b("follow", "ue/u"));
        r313_xn$derivecomposites$7Hrq("ae", 230, "ae/a", "ae/e");
        r313_xn$derivecomposites$7Hrq("oe", 339, "oe/o", "ae/e");
        r313_xn$derivecomposites$7Hrq("ue", 7531, "ue/u", "ae/e");
        r313_xn$derivecomposites$7Hrq("ao", 42805, "ao/a", "ao/o");
        r313_xn$derivecomposites$7Hrq("au", 42807, "au/a", "au/u");
        r313_xn$derivecomposites$7Hrq("uo", 43875, "uo/u", "uo/o");
        r313_CreateTurnedLetter("turnae", 7426, "ae", r313_HalfAdvance, r313_XH / 2, r313_DivFrame(r313_para.advanceScaleMM, 3));
        r313_CreateTurnedLetter("turnoe", 7444, "oe", r313_HalfAdvance, r313_XH / 2, r313_DivFrame(r313_para.advanceScaleMM, 3));
        r313_xn$selectvariant$7Hrq("aInve/inve", new r313_xn$NamedParameterPair$2Lrc9b("follow", "e"));
        r313_xn$derivecomposites$7Hrq("aInve", 43825, "ae/a", "aInve/inve");
        r313_xn$derivecomposites$7Hrq("oInve", 43840, "oe/o", "aInve/inve");
        r313_xn$derivecomposites$7Hrq("turnoeSlash", 43841, "turnoe", "turnoeSlash/oSlash/overlay");
        r313_xn$derivecomposites$7Hrq("turnoeBar", 43842, "turnoe", "turnoeBar/oBar/overlay");
        r313_xn$selectvariant$7Hrq("oeOpen/oOpen", new r313_xn$NamedParameterPair$2Lrc9b("follow", "oOpen"));
        r313_xn$derivecomposites$7Hrq("oeOpen", 43874, "oeOpen/oOpen", "ae/e");
        r313_xn$selectvariant$7Hrq("cyrl/este.upright/es", new r313_xn$NamedParameterPair$2Lrc9b("follow", "c/bottomSerif"));
        r313_xn$selectvariant$7Hrq("cyrl/este.upright/te", new r313_xn$NamedParameterPair$2Lrc9b("follow", "T"));
        r313_xn$derivecomposites$7Hrq("cyrl/este.upright", null, "cyrl/este.upright/es", "cyrl/este.upright/te");
        r313_xn$selectvariant$7Hrq("cyrl/este.italic/es", new r313_xn$NamedParameterPair$2Lrc9b("follow", "c/bottomSerif"));
        r313_xn$selectvariant$7Hrq("cyrl/este.italic/te", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/este/te.italic"));
        r313_xn$derivecomposites$7Hrq("cyrl/este.italic", null, "cyrl/este.italic/es", "cyrl/este.italic/te");
        r313_xn$selectvariant$7Hrq("cyrl/aye/a", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "ae/a"));
        r313_xn$derivecomposites$7Hrq("cyrl/aye", 1237, "cyrl/aye/a", "ae/e");
        r313_xn$selectvariant$7Hrq("cyrl/yaye/ya");
        r313_xn$derivecomposites$7Hrq("cyrl/yaye", 1305, "cyrl/yaye/ya", "ae/e");
        r313_xn$selectvariant$7Hrq("cyrl/rha/er", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/er"));
        r313_xn$selectvariant$7Hrq("cyrl/rha/kha");
        r313_xn$selectvariant$7Hrq("cyrl/Lha/Kha", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Rha/Kha"));
        r313_xn$derivecomposites$7Hrq("cyrl/Lha", 1300, "cyrl/Lha/El", "cyrl/Lha/Kha");
        r313_xn$selectvariant$7Hrq("cyrl/lha/kha", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/rha/kha"));
        r313_xn$derivecomposites$7Hrq("cyrl/lha", 1301, "cyrl/lha/el", "cyrl/lha/kha");
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r702_t0, _r702_t1;
            return {
                "BuildRha": r313_BuildRha
            };
        });
        var r313_BuildRha = function (r703_srcs) {
            var _r703_t0, _r703_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r705_currentGlyph) {
                var _r705_t1, _r705_t2;
                var r705_df = r705_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
                r705_currentGlyph.include(r705_df.markSet.p());
                var _r705_t0 = r703_srcs;
                var r705_er = _r705_t0[0];
                var r705_kha = _r705_t0[1];
                r705_currentGlyph.include(r313_union(r313_xn$referglyph$1aao(r705_er), r313_difference(r313_xn$referglyph$1aao(r705_kha), r313_xn$withtransform$5sIl(r313_ApparentTranslate(-0.25 * r705_df.mvs, 0), r313_xn$referglyph$1aao(r705_er)), r313_xn$withtransform$5sIl(r313_ApparentTranslate(-0.5 * r705_df.mvs, 0), r313_xn$referglyph$1aao(r705_er)), r313_xn$withtransform$5sIl(r313_ApparentTranslate(-0.75 * r705_df.mvs, 0), r313_xn$referglyph$1aao(r705_er)), r313_xn$withtransform$5sIl(r313_ApparentTranslate(-1 * r705_df.mvs, 0), r313_xn$referglyph$1aao(r705_er)))));
                return void 0;
            });
        };
        return r313_xn$derivemultipartglyphs$7Hrq65("cyrl/rha", 1303, ["cyrl/rha/er", "cyrl/rha/kha"], r313_BuildRha);
    });
    return void 0;
});


