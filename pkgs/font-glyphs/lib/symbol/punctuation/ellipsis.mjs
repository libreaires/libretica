"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t1 = r1_apply = function () {
    var r307_block, _r307_t4, _r307_t6;
    var _r307_t3 = this;
    var _r307_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r307_t1 = _r307_t0.length;
    var _r307_t2 = 0;
    var _r307_t5 = _r307_t2 < _r307_t1;
    while (_r307_t5) {
        _r307_t6 = (r307_block = _r307_t0[_r307_t2], r307_block(_r307_t3), _r307_t2 = _r307_t2 + 1);
        _r307_t5 = _r307_t2 < _r307_t1;
    }
    return _r307_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r311_xn$Capture_Ext$2Lrc2b) {
    var _r311_t0, _r311_t1;
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Ellipsis", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_DrawAt, r312_kDotRadius, r312_overshoot, _r312_t9, _r312_t10, _r312_t11, _r312_t12, _r312_tag13, _r312_t14, _r312_tag15;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_XH = _r312_t1.XH;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_ParenTop = _r312_t1.ParenTop;
        var r312_ParenBot = _r312_t1.ParenBot;
        var r312_OperTop = _r312_t1.OperTop;
        var r312_OperBot = _r312_t1.OperBot;
        var r312_PlusTop = _r312_t1.PlusTop;
        var r312_PlusBot = _r312_t1.PlusBot;
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_PeriodSize = _r312_t1.PeriodSize;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_DotVariants = _r312_t5.DotVariants;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_xn$selectmultidimensionalvariant$7Hrq62b = _r312_t6["select-multi-dimensional-variant"];
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r316_t0, _r316_t1;
            return {
                "EllipsisDotRadius": r312_EllipsisDotRadius
            };
        });
        var r312_EllipsisDotRadius = function (r317_nDots, r317_space) {
            var _r317_t0, _r317_t1;
            return 0.5 * r312_AdviceStroke(r317_nDots + 1.5, r317_space / r312_Width) * r312_PeriodSize / r312_Stroke;
        };
        var r312_VThreeDotsShape = function (r318_DrawAt, r318_radius, r318_overshoot, r318_l, r318_r, r318_p, r318_bottom, r318_top) {
            var _r318_t0, _r318_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                var _r320_t0, _r320_t1;
                var r320_xMid = r1_mix(r318_l, r318_r, 0.5);
                var r320_yMid = r1_mix(r318_bottom, r318_top, 0.5);
                r320_currentGlyph.include(r318_DrawAt(r1_mix(r320_xMid, r318_l, r318_p), r318_bottom + r318_radius, r318_radius - r318_overshoot));
                r320_currentGlyph.include(r318_DrawAt(r320_xMid, r320_yMid, r318_radius - r318_overshoot));
                r320_currentGlyph.include(r318_DrawAt(r1_mix(r320_xMid, r318_r, r318_p), r318_top - r318_radius, r318_radius - r318_overshoot));
                return void 0;
            });
        };
        var r312_VFourDotShape = function (r324_DrawAt, r324_radius, r324_overshoot, r324_xMid, r324_bottom, r324_top) {
            var _r324_t0, _r324_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                var _r326_t0, _r326_t1;
                var r326_yp = function (r327_p) {
                    var _r327_t0, _r327_t1;
                    return r1_mix(r324_bottom + r324_radius, r324_top - r324_radius, r327_p);
                };
                r326_currentGlyph.include(r324_DrawAt(r324_xMid, r326_yp(0), r324_radius - r324_overshoot));
                r326_currentGlyph.include(r324_DrawAt(r324_xMid, r326_yp(1 / 3), r324_radius - r324_overshoot));
                r326_currentGlyph.include(r324_DrawAt(r324_xMid, r326_yp(2 / 3), r324_radius - r324_overshoot));
                r326_currentGlyph.include(r324_DrawAt(r324_xMid, r326_yp(1), r324_radius - r324_overshoot));
                return void 0;
            });
        };
        var r312_VNDotShape = function (r332_nDots, r332_DrawAt, r332_radius, r332_overshoot, r332_xMid, r332_bottom, r332_top) {
            var _r332_t0, _r332_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                var _r334_t2, _r334_t3;
                var r334_yp = function (r335_p) {
                    var _r335_t0, _r335_t1;
                    return r1_mix(r332_bottom + r332_radius, r332_top - r332_radius, r335_p);
                };
                var _r334_t0 = 0;
                var _r334_t1 = r332_nDots;
                var r334_j = _r334_t0;
                while (r334_j < _r334_t1) {
                    r334_currentGlyph.include(r332_DrawAt(r332_xMid, r334_yp(r334_j / (r332_nDots - 1)), r332_radius - r332_overshoot));
                    r334_j = r334_j + 1;
                }
                return void 0;
            });
        };
        (function () {
            var r341_FMosaicWide, r341_MosaicNameSuffix, r341_MosaicWidth, r341_MosaicWidthScalar, _r341_t3, _r341_t5, _r341_t6, _r341_tag7;
            var r341_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r341_t0 = r341_WidthKinds;
            var _r341_t1 = _r341_t0.length;
            var _r341_t2 = 0;
            var _r341_t4 = _r341_t2 < _r341_t1;
            while (_r341_t4) {
                _r341_t3 = _r341_t0[_r341_t2];
                r341_FMosaicWide = _r341_t3[0];
                r341_MosaicNameSuffix = _r341_t3[1];
                r341_MosaicWidth = _r341_t3[2];
                r341_MosaicWidthScalar = _r341_t3[3];
                (function () {
                    var r344_suffix, r344_DrawAt, r344_kDotRadius, r344_overshoot, r344_dotSuffix, _r344_t2, _r344_t5, _r344_t6, _r344_tag7, _r344_t8, _r344_tag9;
                    var r344_MosaicDesiredWidth = r312_WideWidth1;
                    var r344_MosaicMiddle = r341_MosaicWidth / 2;
                    var r344_MosaicUnitWidth = r341_MosaicWidth / r341_MosaicWidthScalar;
                    var r344_MangleUnicode = function (r345_unicode, r345__desiredOverride) {
                        var _r345_t0, _r345_t1;
                        return r341_MosaicWidth === (r345__desiredOverride || r344_MosaicDesiredWidth) ? r345_unicode : void 0;
                    };
                    var r344_MangleName = function (r346_name) {
                        var _r346_t0, _r346_t1;
                        return r346_name + r341_MosaicNameSuffix;
                    };
                    var _r344_t0 = Object.entries(r312_DotVariants)[Symbol.iterator]();
                    var _r344_t1 = void 0;
                    while (!(_r344_t1 = _r344_t0.next()).done) {
                        _r344_t2 = _r344_t1.value;
                        r344_suffix = _r344_t2[0];
                        r344_DrawAt = _r344_t2[1][0];
                        r344_kDotRadius = _r344_t2[1][1];
                        r344_overshoot = _r344_t2[1][2];
                        _r344_t2[1];
                        (function () {
                            r312_xn$GlyphSaveSink$2Lrc4b.save("" + r344_MangleName("oneDotLeader") + "." + r344_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                                var _r352_t0, _r352_t1;
                                var r352_width = r341_MosaicWidth * r1_mix(r312_para.advanceScaleI, r312_para.advanceScaleII, r341_MosaicWidthScalar - 1);
                                r352_currentGlyph.setWidth(r352_width);
                                var r352_radius = r312_EllipsisDotRadius(2, r341_MosaicWidth) * r344_kDotRadius;
                                r352_currentGlyph.include(r344_DrawAt(r352_width / 2, r352_radius, r352_radius - r344_overshoot));
                                return void 0;
                            }));
                            return r312_xn$GlyphSaveSink$2Lrc4b.save("" + r344_MangleName("twoDotsLeader") + "." + r344_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                                var _r357_t0, _r357_t1;
                                var r357_width = r341_MosaicWidth * r1_mix(1, r312_para.advanceScaleI, r341_MosaicWidthScalar - 1);
                                r357_currentGlyph.setWidth(r357_width);
                                var r357_radius = r312_EllipsisDotRadius(2, r341_MosaicWidth) * r344_kDotRadius;
                                var r357_left = r1_mix(0, r357_width, 1 / 4);
                                var r357_right = r1_mix(0, r357_width, 3 / 4);
                                r357_currentGlyph.include(r344_DrawAt(r357_left, r357_radius, r357_radius - r344_overshoot));
                                r357_currentGlyph.include(r344_DrawAt(r357_right, r357_radius, r357_radius - r344_overshoot));
                                return void 0;
                            }));
                        })();
                    }
                    r312_xn$selectvariant$7Hrq(r344_MangleName("oneDotLeader"), r344_MangleUnicode(8228), new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
                    r312_xn$selectvariant$7Hrq(r344_MangleName("twoDotsLeader"), r344_MangleUnicode(8229), new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
                    var _r344_t3 = Object.entries(r312_DotVariants)[Symbol.iterator]();
                    var _r344_t4 = void 0;
                    while (!(_r344_t4 = _r344_t3.next()).done) {
                        _r344_t5 = _r344_t4.value;
                        r344_dotSuffix = _r344_t5[0];
                        r344_DrawAt = _r344_t5[1][0];
                        r344_kDotRadius = _r344_t5[1][1];
                        r344_overshoot = _r344_t5[1][2];
                        _r344_t5[1];
                        (function () {
                            r312_xn$GlyphSaveSink$2Lrc4b.save("" + r344_MangleName("ellipsis") + "." + r344_dotSuffix + ".normal", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                                var _r368_t0, _r368_t1;
                                r368_currentGlyph.setWidth(r341_MosaicWidth);
                                var r368_radius = r312_EllipsisDotRadius(3, r341_MosaicWidth) * r344_kDotRadius;
                                var r368_left = r1_mix(0, r341_MosaicWidth, 1 / 6);
                                var r368_right = r1_mix(0, r341_MosaicWidth, 5 / 6);
                                r368_currentGlyph.include(r312_VThreeDotsShape(r344_DrawAt, r368_radius, r344_overshoot, r368_left, r368_right, +1, 0, 2 * r368_radius));
                                r312_xn$GlyphSaveSink$2Lrc4b.save("" + r344_MangleName("mathCDots") + "." + r344_dotSuffix + ".normal", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r368_currentGlyph, r312_ApparentTranslate(0, r312_SymbolMid - r368_radius)));
                                return void 0;
                            }));
                            r312_xn$GlyphSaveSink$2Lrc4b.save("" + r344_MangleName("ellipsis") + "." + r344_dotSuffix + ".dense", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                                var _r375_t0, _r375_t1;
                                var r375_width = r341_MosaicWidth * r1_mix(1, r312_para.advanceScaleI, r341_MosaicWidthScalar - 1);
                                r375_currentGlyph.setWidth(r375_width);
                                var r375_radius = r312_EllipsisDotRadius(3, r375_width) * r344_kDotRadius;
                                var r375_left = r1_mix(0, r375_width, 3 / 16);
                                var r375_right = r1_mix(0, r375_width, 13 / 16);
                                r375_currentGlyph.include(r312_VThreeDotsShape(r344_DrawAt, r375_radius, r344_overshoot, r375_left, r375_right, +1, 0, 2 * r375_radius));
                                r312_xn$GlyphSaveSink$2Lrc4b.save("" + r344_MangleName("mathCDots") + "." + r344_dotSuffix + ".dense", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r375_currentGlyph, r312_ApparentTranslate(0, r312_SymbolMid - r375_radius)));
                                return void 0;
                            }));
                            r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                                var _r382_t0, _r382_t1;
                                r382_currentGlyph.setWidth(r341_MosaicWidth);
                                var r382_left = r1_mix(0, r341_MosaicWidth, 1 / 6);
                                var r382_right = r1_mix(0, r341_MosaicWidth, 5 / 6);
                                var r382_top = r312_SymbolMid + Math.max(r382_right - r1_mix(r382_left, r382_right, 0.5), r1_mix(r312_PlusTop, r312_OperTop, 0.5) - r312_SymbolMid);
                                var r382_bot = r312_SymbolMid - Math.max(r1_mix(r382_left, r382_right, 0.5) - r382_left, r312_SymbolMid - r1_mix(r312_PlusBot, r312_OperBot, 0.5));
                                var r382_radius = r312_EllipsisDotRadius(3, Math.min(r341_MosaicWidth, r382_top - r382_bot)) * r344_kDotRadius;
                                r312_xn$GlyphSaveSink$2Lrc4b.save("" + r344_MangleName("mathCVDots") + "." + r344_dotSuffix + ".normal", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r382_currentGlyph, r312_VThreeDotsShape(r344_DrawAt, r382_radius, r344_overshoot, r382_left, r382_right, 0, r382_bot - r382_radius, r382_top + r382_radius)));
                                r312_xn$GlyphSaveSink$2Lrc4b.save("" + r344_MangleName("mathCD1Dots") + "." + r344_dotSuffix + ".normal", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r382_currentGlyph, r312_VThreeDotsShape(r344_DrawAt, r382_radius, r344_overshoot, r382_left, r382_right, -1, r382_bot - r382_radius, r382_top + r382_radius)));
                                r312_xn$GlyphSaveSink$2Lrc4b.save("" + r344_MangleName("mathCD2Dots") + "." + r344_dotSuffix + ".normal", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r382_currentGlyph, r312_VThreeDotsShape(r344_DrawAt, r382_radius, r344_overshoot, r382_left, r382_right, +1, r382_bot - r382_radius, r382_top + r382_radius)));
                                return void 0;
                            }));
                            return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r392_currentGlyph) {
                                var _r392_t0, _r392_t1;
                                var r392_width = r341_MosaicWidth * r1_mix(1, r312_para.advanceScaleI, r341_MosaicWidthScalar - 1);
                                r392_currentGlyph.setWidth(r392_width);
                                var r392_left = r1_mix(0, r392_width, 3 / 16);
                                var r392_right = r1_mix(0, r392_width, 13 / 16);
                                var r392_top = r312_SymbolMid + Math.max(r392_right - r1_mix(r392_left, r392_right, 0.5), r1_mix(r312_PlusTop, r312_OperTop, 0.5) - r312_SymbolMid);
                                var r392_bot = r312_SymbolMid - Math.max(r1_mix(r392_left, r392_right, 0.5) - r392_left, r312_SymbolMid - r1_mix(r312_PlusBot, r312_OperBot, 0.5));
                                var r392_radius = r312_EllipsisDotRadius(3, Math.min(r392_width, r392_top - r392_bot)) * r344_kDotRadius;
                                r312_xn$GlyphSaveSink$2Lrc4b.save("" + r344_MangleName("mathCVDots") + "." + r344_dotSuffix + ".dense", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r392_currentGlyph, r312_VThreeDotsShape(r344_DrawAt, r392_radius, r344_overshoot, r392_left, r392_right, 0, r392_bot - r392_radius, r392_top + r392_radius)));
                                r312_xn$GlyphSaveSink$2Lrc4b.save("" + r344_MangleName("mathCD1Dots") + "." + r344_dotSuffix + ".dense", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r392_currentGlyph, r312_VThreeDotsShape(r344_DrawAt, r392_radius, r344_overshoot, r392_left, r392_right, -1, r392_bot - r392_radius, r392_top + r392_radius)));
                                r312_xn$GlyphSaveSink$2Lrc4b.save("" + r344_MangleName("mathCD2Dots") + "." + r344_dotSuffix + ".dense", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r392_currentGlyph, r312_VThreeDotsShape(r344_DrawAt, r392_radius, r344_overshoot, r392_left, r392_right, +1, r392_bot - r392_radius, r392_top + r392_radius)));
                                return void 0;
                            }));
                        })();
                    }
                    r312_xn$selectmultidimensionalvariant$7Hrq62b(r344_MangleName("ellipsis"), r344_MangleUnicode(8230), new r312_xn$NamedParameterPair$2Lrc9b("follows", ["punctuationDot", "ellipsisDensity"]));
                    r312_xn$selectmultidimensionalvariant$7Hrq62b(r344_MangleName("mathCDots"), r344_MangleUnicode(8943), new r312_xn$NamedParameterPair$2Lrc9b("follows", ["punctuationDot", "ellipsisDensity"]));
                    r312_xn$selectmultidimensionalvariant$7Hrq62b(r344_MangleName("mathCVDots"), r344_MangleUnicode(8942), new r312_xn$NamedParameterPair$2Lrc9b("follows", ["punctuationDot", "ellipsisDensity"]));
                    r312_xn$selectmultidimensionalvariant$7Hrq62b(r344_MangleName("mathCD1Dots"), r344_MangleUnicode(8945), new r312_xn$NamedParameterPair$2Lrc9b("follows", ["punctuationDot", "ellipsisDensity"]));
                    return r312_xn$selectmultidimensionalvariant$7Hrq62b(r344_MangleName("mathCD2Dots"), r344_MangleUnicode(8944), new r312_xn$NamedParameterPair$2Lrc9b("follows", ["punctuationDot", "ellipsisDensity"]));
                })();
                _r341_t5 = _r341_t2 = _r341_t2 + 1;
                _r341_t4 = _r341_t2 < _r341_t1;
            }
            return _r341_t5;
        })();
        var _r312_t7 = Object.entries(r312_DotVariants)[Symbol.iterator]();
        var _r312_t8 = void 0;
        while (!(_r312_t8 = _r312_t7.next()).done) {
            _r312_t9 = _r312_t8.value;
            r312_suffix = _r312_t9[0];
            r312_DrawAt = _r312_t9[1][0];
            r312_kDotRadius = _r312_t9[1][1];
            r312_overshoot = _r312_t9[1][2];
            _r312_t9[1];
            (function () {
                var r407_radius = r312_kDotRadius * r312_EllipsisDotRadius(3, r312_XH);
                r312_xn$GlyphSaveSink$2Lrc4b.save("triColon." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
                    var _r410_t0, _r410_t1;
                    var r410_df = r410_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleI));
                    r410_currentGlyph.include(r312_VThreeDotsShape(r312_DrawAt, r407_radius, r312_overshoot, 0, r410_df.width, 0, 0, r312_XH));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("mathTriColon." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r415_currentGlyph) {
                    var _r415_t0, _r415_t1;
                    var r415_df = r415_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleI));
                    r415_currentGlyph.include(r312_VThreeDotsShape(r312_DrawAt, r407_radius, r312_overshoot, 0, r415_df.width, 0, r312_SymbolMid - r312_XH / 2, r312_SymbolMid + r312_XH / 2));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("quadColon." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r420_currentGlyph) {
                    var _r420_t0, _r420_t1;
                    var r420_df = r420_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleI));
                    r420_currentGlyph.include(r312_VFourDotShape(r312_DrawAt, r407_radius, r312_overshoot, r420_df.middle, r1_mix(r312_XH, 0, 7 / 6), r1_mix(0, r312_XH, 7 / 6)));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("mathQuadColon." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r425_currentGlyph) {
                    var _r425_t0, _r425_t1;
                    var r425_df = r425_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleI));
                    r425_currentGlyph.include(r312_VFourDotShape(r312_DrawAt, r407_radius, r312_overshoot, r425_df.middle, r312_SymbolMid - r312_XH * 2 / 3, r312_SymbolMid + r312_XH * 2 / 3));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("vSixDots." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
                    var _r430_t0, _r430_t1;
                    var r430_df = r430_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleI));
                    var r430_radius = r312_kDotRadius * r312_EllipsisDotRadius(7, r312_ParenTop - r312_ParenBot);
                    r430_currentGlyph.include(r312_VNDotShape(6, r312_DrawAt, r430_radius, r312_overshoot, r430_df.middle, r312_ParenBot, r312_ParenTop));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("triColon", 8285, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r312_xn$selectvariant$7Hrq("quadColon", 8286, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r312_xn$selectvariant$7Hrq("mathTriColon", 10998, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r312_xn$selectvariant$7Hrq("mathQuadColon", 10649, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        return r312_xn$selectvariant$7Hrq("vSixDots", 11837, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
    });
    return void 0;
});


