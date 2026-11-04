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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Dots-And-Colons", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_DrawAt, r312_kDotRadius, r312_overshoot, _r312_t9, _r312_t10, _r312_t11, _r312_t12, _r312_tag13, _r312_t14, _r312_tag15;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_XH = _r312_t1.XH;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_PeriodSize = _r312_t1.PeriodSize;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_Middle = _r312_t1.Middle;
        var r312_PeriodRadius = _r312_t1.PeriodRadius;
        var r312_OperatorStroke = _r312_t1.OperatorStroke;
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
                var _r317_t0, _r317_tag1;
                var r317_radius1 = r312_PeriodRadius * r312_kDotRadius * r312_OperatorStroke / r312_Stroke;
                var r317_radius = Math.min(r317_radius1, 0.5 * r312_AdviceStroke(3.5, r312_Width / r312_kDotRadius) * r312_PeriodSize * r312_kDotRadius / r312_Stroke);
                var r317_left = r1_mix(0, r312_Width, 1 / 4);
                var r317_right = r1_mix(0, r312_Width, 3 / 4);
                var r317_yUpperColon = r312_SymbolMid + r312_XH / 2 - r317_radius;
                var r317_yLowerColon = r312_SymbolMid - r312_XH / 2 + r317_radius;
                r312_xn$GlyphSaveSink$2Lrc4b.save("therefore." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                    var _r320_t0, _r320_t1;
                    r320_currentGlyph.include(r312_DrawAt(r312_Middle, r317_yUpperColon, r317_radius - r312_overshoot));
                    r320_currentGlyph.include(r312_DrawAt(r317_left, r317_yLowerColon, r317_radius - r312_overshoot));
                    r320_currentGlyph.include(r312_DrawAt(r317_right, r317_yLowerColon, r317_radius - r312_overshoot));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("because." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                    var _r326_t0, _r326_t1;
                    r326_currentGlyph.include(r312_DrawAt(r312_Middle, r317_yLowerColon, r317_radius - r312_overshoot));
                    r326_currentGlyph.include(r312_DrawAt(r317_left, r317_yUpperColon, r317_radius - r312_overshoot));
                    r326_currentGlyph.include(r312_DrawAt(r317_right, r317_yUpperColon, r317_radius - r312_overshoot));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("mathcolon." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                    var _r332_t0, _r332_t1;
                    r332_currentGlyph.include(r312_DrawAt(r312_Middle, r317_yLowerColon, r317_radius - r312_overshoot));
                    r332_currentGlyph.include(r312_DrawAt(r312_Middle, r317_yUpperColon, r317_radius - r312_overshoot));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("coloncolon." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                    var _r337_t0, _r337_t1;
                    r337_currentGlyph.include(r312_DrawAt(r317_left, r317_yUpperColon, r317_radius - r312_overshoot));
                    r337_currentGlyph.include(r312_DrawAt(r317_right, r317_yUpperColon, r317_radius - r312_overshoot));
                    r337_currentGlyph.include(r312_DrawAt(r317_left, r317_yLowerColon, r317_radius - r312_overshoot));
                    r337_currentGlyph.include(r312_DrawAt(r317_right, r317_yLowerColon, r317_radius - r312_overshoot));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("mathCDot." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                    var _r344_t0, _r344_t1;
                    r344_currentGlyph.include(r312_DrawAt(r312_Middle, r312_SymbolMid, r317_radius - r312_overshoot));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("mathCDotInner." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                    var _r348_t0, _r348_t1;
                    r348_currentGlyph.include(r312_DrawAt(r312_Middle, r312_SymbolMid, r317_radius * r312_OperatorStroke / r312_Stroke - r312_overshoot));
                    return void 0;
                }));
                return (function () {
                    var r352_FMosaicWide, r352_MosaicNameSuffix, r352_MosaicWidth, r352_MosaicWidthScalar, _r352_t3, _r352_t5, _r352_t6, _r352_tag7;
                    var r352_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
                    var _r352_t0 = r352_WidthKinds;
                    var _r352_t1 = _r352_t0.length;
                    var _r352_t2 = 0;
                    var _r352_t4 = _r352_t2 < _r352_t1;
                    while (_r352_t4) {
                        _r352_t3 = _r352_t0[_r352_t2];
                        r352_FMosaicWide = _r352_t3[0];
                        r352_MosaicNameSuffix = _r352_t3[1];
                        r352_MosaicWidth = _r352_t3[2];
                        r352_MosaicWidthScalar = _r352_t3[3];
                        (function () {
                            var r355_MosaicDesiredWidth = r312_WideWidth1;
                            var r355_MosaicMiddle = r352_MosaicWidth / 2;
                            var r355_MosaicUnitWidth = r352_MosaicWidth / r352_MosaicWidthScalar;
                            var r355_MangleUnicode = function (r356_unicode, r356__desiredOverride) {
                                var _r356_t0, _r356_t1;
                                return r352_MosaicWidth === (r356__desiredOverride || r355_MosaicDesiredWidth) ? r356_unicode : void 0;
                            };
                            var r355_MangleName = function (r357_name) {
                                var _r357_t0, _r357_t1;
                                return r357_name + r352_MosaicNameSuffix;
                            };
                            return r312_xn$GlyphSaveSink$2Lrc4b.save("" + r355_MangleName("mathCDotBig") + "." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
                                var _r360_t0, _r360_t1;
                                r360_currentGlyph.setWidth(r352_MosaicWidth);
                                r360_currentGlyph.include(r312_DrawAt(r355_MosaicMiddle, r312_SymbolMid, r317_radius1 - r312_overshoot));
                                return void 0;
                            }));
                        })();
                        _r352_t5 = _r352_t2 = _r352_t2 + 1;
                        _r352_t4 = _r352_t2 < _r352_t1;
                    }
                    return _r352_t5;
                })();
            })();
        }
        r312_xn$selectvariant$7Hrq("therefore", 8756, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r312_xn$selectvariant$7Hrq("because", 8757, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r312_xn$selectvariant$7Hrq("mathcolon", 8758, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r312_xn$selectvariant$7Hrq("coloncolon", 8759, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r312_xn$selectvariant$7Hrq("mathCDot", 8901, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r312_xn$selectvariant$7Hrq("mathCDotInner", new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        return (function () {
            var r371_FMosaicWide, r371_MosaicNameSuffix, r371_MosaicWidth, r371_MosaicWidthScalar, _r371_t3, _r371_t5, _r371_t6, _r371_tag7;
            var r371_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r371_t0 = r371_WidthKinds;
            var _r371_t1 = _r371_t0.length;
            var _r371_t2 = 0;
            var _r371_t4 = _r371_t2 < _r371_t1;
            while (_r371_t4) {
                _r371_t3 = _r371_t0[_r371_t2];
                r371_FMosaicWide = _r371_t3[0];
                r371_MosaicNameSuffix = _r371_t3[1];
                r371_MosaicWidth = _r371_t3[2];
                r371_MosaicWidthScalar = _r371_t3[3];
                (function () {
                    var r374_MosaicDesiredWidth = r312_WideWidth1;
                    var r374_MosaicMiddle = r371_MosaicWidth / 2;
                    var r374_MosaicUnitWidth = r371_MosaicWidth / r371_MosaicWidthScalar;
                    var r374_MangleUnicode = function (r375_unicode, r375__desiredOverride) {
                        var _r375_t0, _r375_t1;
                        return r371_MosaicWidth === (r375__desiredOverride || r374_MosaicDesiredWidth) ? r375_unicode : void 0;
                    };
                    var r374_MangleName = function (r376_name) {
                        var _r376_t0, _r376_t1;
                        return r376_name + r371_MosaicNameSuffix;
                    };
                    return r312_xn$selectvariant$7Hrq(r374_MangleName("mathCDotBig"), new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
                })();
                _r371_t5 = _r371_t2 = _r371_t2 + 1;
                _r371_t4 = _r371_t2 < _r371_t1;
            }
            return _r371_t5;
        })();
    });
    return void 0;
});


