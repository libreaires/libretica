"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "../../meta/aesthetics.mjs";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Clock", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_PictTop = _r313_t1.PictTop;
        var r313_PictBot = _r313_t1.PictBot;
        var r313_Upward = _r313_t1.Upward;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var r313_UnicodeWeightGrade = _r313_t1.UnicodeWeightGrade;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_difference = _r313_t4.difference;
        return (function () {
            var r316_FMosaicWide, r316_MosaicNameSuffix, r316_MosaicWidth, r316_MosaicWidthScalar, _r316_t3, _r316_t5, _r316_t6, _r316_tag7;
            var r316_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r316_t0 = r316_WidthKinds;
            var _r316_t1 = _r316_t0.length;
            var _r316_t2 = 0;
            var _r316_t4 = _r316_t2 < _r316_t1;
            while (_r316_t4) {
                _r316_t3 = _r316_t0[_r316_t2];
                r316_FMosaicWide = _r316_t3[0];
                r316_MosaicNameSuffix = _r316_t3[1];
                r316_MosaicWidth = _r316_t3[2];
                r316_MosaicWidthScalar = _r316_t3[3];
                (function () {
                    var r319_MosaicDesiredWidth = r313_WideWidth1;
                    var r319_MosaicMiddle = r316_MosaicWidth / 2;
                    var r319_MosaicUnitWidth = r316_MosaicWidth / r316_MosaicWidthScalar;
                    var r319_MangleUnicode = function (r320_unicode, r320__desiredOverride) {
                        var _r320_t0, _r320_t1;
                        return r316_MosaicWidth === (r320__desiredOverride || r319_MosaicDesiredWidth) ? r320_unicode : void 0;
                    };
                    var r319_MangleName = function (r321_name) {
                        var _r321_t0, _r321_t1;
                        return r321_name + r316_MosaicNameSuffix;
                    };
                    var _r319_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
                    var r319_Rect = _r319_t0.Rect;
                    var r319_RingAt = _r319_t0.RingAt;
                    var r319_RingStrokeAt = _r319_t0.RingStrokeAt;
                    var r319_Circle = _r319_t0.Circle;
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var _r319_t2 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r319_GeometricDim = _r319_t2.GeometricDim;
                    var r319_GeometricSizes = _r319_t2.GeometricSizes;
                    var r319_Geom = r319_GeometricDim(r319_MosaicUnitWidth, r316_MosaicWidth);
                    var r319_pHour = 0.6;
                    var r319_pMin = 0.8;
                    var r319_pSec = 0.9;
                    var r319_extLightSw = r313_UnicodeWeightGrade(200, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_lightSw = r313_UnicodeWeightGrade(300, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_mediumSw = r313_UnicodeWeightGrade(500, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_dotSize = Math.max(0.6 * r319_mediumSw, 0.1 * r319_Geom.Size);
                    var r319_ClockRing = function () {
                        var _r325_t0, _r325_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                            var _r327_t0, _r327_t1;
                            r327_currentGlyph.include(r319_RingStrokeAt(r319_Geom.MidX, r319_Geom.MidY, r319_Geom.Size, r319_mediumSw));
                            r327_currentGlyph.include(r319_Circle.Outline.At(r319_Geom.MidX, r319_Geom.MidY, r319_dotSize));
                            return void 0;
                        });
                    };
                    var r319_ClockHand = function (r330_angle, r330_pLen, r330_sw, r330__swTip) {
                        var _r330_t0, _r330_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                            var _r332_t0, _r332_t1;
                            var r332_swTip = r1_fallback(r330__swTip, r330_sw);
                            r332_currentGlyph.include(r313_dispiro(r313_corner(r319_Geom.MidX, r319_Geom.MidY, r313_widths.center(r330_sw)), r313_corner(r319_Geom.MidX + (r319_Geom.Size - r319_mediumSw) * r330_pLen * Math.sin(r330_angle), r319_Geom.MidY + (r319_Geom.Size - r319_mediumSw) * r330_pLen * Math.cos(r330_angle), r313_widths.center(r332_swTip))));
                            return void 0;
                        });
                    };
                    var r319_ClockShape = function (r334_hr, r334_min) {
                        var _r334_t0, _r334_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                            var _r336_t0, _r336_t1;
                            var r336_minAngle = 2 * Math.PI * (r334_min / 60);
                            var r336_hrAngle = 2 * Math.PI * ((r334_min / 60 + r334_hr) / 12);
                            r336_currentGlyph.include(r319_ClockRing());
                            r336_currentGlyph.include(r319_ClockHand(r336_hrAngle, r319_pHour, r319_mediumSw));
                            r336_currentGlyph.include(r319_ClockHand(r336_minAngle, r319_pMin, r319_lightSw));
                            return void 0;
                        });
                    };
                    var r319_patterns = function (r340_min, r340_su) {
                        var r340_name, _r340_t2, _r340_t3, _r340_t5;
                        var _r340_t0 = 1;
                        var _r340_t1 = 12;
                        var r340_hr = _r340_t0;
                        var _r340_t4 = r340_hr <= _r340_t1;
                        while (_r340_t4) {
                            _r340_t5 = (r340_name = "clock" + r340_hr.toString(10).padStart(2, "0") + r340_min.toString(10).padStart(2, "0"), r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r340_name), r319_MangleUnicode(r340_su + r340_hr - 1), new r313_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                                var _r345_t0, _r345_t1;
                                r345_currentGlyph.setWidth(r316_MosaicWidth);
                                r345_currentGlyph.include(r319_ClockShape(r340_hr, r340_min));
                                return void 0;
                            })), r340_hr = r340_hr + 1);
                            _r340_t4 = r340_hr <= _r340_t1;
                        }
                        return _r340_t5;
                    };
                    r319_patterns(0, 128336);
                    r319_patterns(30, 128348);
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("watch"), r319_MangleUnicode(8986), new r313_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                        var _r350_t0, _r350_t1;
                        r350_currentGlyph.setWidth(r316_MosaicWidth);
                        r350_currentGlyph.include(r319_ClockShape(10, 10));
                        r350_currentGlyph.include(r313_difference(r319_Rect(r313_PictTop, r313_PictBot, r319_Geom.MidX - r319_Geom.Size / 2, r319_Geom.MidX + r319_Geom.Size / 2), r319_RingAt(r319_Geom.MidX, r319_Geom.MidY, r319_Geom.Size - 1)));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("alarm"), r319_MangleUnicode(9200), new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                        var _r356_t0, _r356_t1;
                        r356_currentGlyph.setWidth(r316_MosaicWidth);
                        r356_currentGlyph.include(r319_ClockShape(7, 0));
                        r356_currentGlyph.include(r313_difference(r313_union(r313_dispiro(r313_corner(r319_Geom.MidX - r319_Geom.Size * 0.6, r319_Geom.Bot, r313_widths.center.heading(r319_lightSw, r313_Upward)), r313_corner(r319_Geom.MidX - r319_Geom.Size * 0.3, r319_Geom.MidY)), r313_dispiro(r313_corner(r319_Geom.MidX + r319_Geom.Size * 0.6, r319_Geom.Bot, r313_widths.center.heading(r319_lightSw, r313_Upward)), r313_corner(r319_Geom.MidX + r319_Geom.Size * 0.3, r319_Geom.MidY)), r313_dispiro(r313_corner(r319_Geom.MidX, r319_Geom.MidY, r313_widths.center(r319_lightSw)), r313_corner(r319_Geom.MidX, r319_Geom.MidY + r319_Geom.Size * 1.15))), r319_RingAt(r319_Geom.MidX, r319_Geom.MidY, r319_Geom.Size - 1)));
                        r356_currentGlyph.include(r313_difference(r313_union(r313_dispiro(r313_corner(r319_Geom.MidX - r319_Geom.Size * 0.6, r319_Geom.MidY + r319_Geom.Size * 1.1, r313_widths.center(r319_Geom.Size / 3)), r313_corner(r319_Geom.MidX - r319_Geom.Size * 0.3, r319_Geom.MidY)), r313_dispiro(r313_corner(r319_Geom.MidX + r319_Geom.Size * 0.6, r319_Geom.MidY + r319_Geom.Size * 1.1, r313_widths.center(r319_Geom.Size / 3)), r313_corner(r319_Geom.MidX + r319_Geom.Size * 0.3, r319_Geom.MidY))), r319_RingAt(r319_Geom.MidX, r319_Geom.MidY, r319_Geom.Size + r319_extLightSw)));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("stopwatch"), r319_MangleUnicode(9201), new r313_xn$Capture$2Lrc8.GlyphProc(function (r363_currentGlyph) {
                        var _r363_t0, _r363_t1;
                        r363_currentGlyph.setWidth(r316_MosaicWidth);
                        r363_currentGlyph.include(r319_ClockRing());
                        r363_currentGlyph.include(r319_ClockHand(0, r319_pSec, r319_extLightSw));
                        r363_currentGlyph.include(r313_difference(r313_union(r313_dispiro(r313_corner(r319_Geom.MidX, r319_Geom.MidY, r313_widths.center(r319_Geom.Size / 3)), r313_corner(r319_Geom.MidX, r319_Geom.MidY + r319_Geom.Size * 1.25 + r319_extLightSw * 0.5)), r313_dispiro(r313_corner(r319_Geom.MidX, r319_Geom.MidY, r313_widths.center(r319_mediumSw)), r313_corner(r319_Geom.MidX + r319_Geom.Size * 0.95, r319_Geom.MidY + r319_Geom.Size * 0.95))), r319_RingAt(r319_Geom.MidX, r319_Geom.MidY, r319_Geom.Size + r319_extLightSw)));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("timer"), r319_MangleUnicode(9202), new r313_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
                        var _r370_t0, _r370_t1;
                        r370_currentGlyph.setWidth(r316_MosaicWidth);
                        r370_currentGlyph.include(r319_ClockRing());
                        r370_currentGlyph.include(r319_ClockHand(Math.PI * 5 / 3, r319_pMin, 2 * r319_dotSize, r319_lightSw));
                        return void 0;
                    }));
                })();
                _r316_t5 = _r316_t2 = _r316_t2 + 1;
                _r316_t4 = _r316_t2 < _r316_t1;
            }
            return _r316_t5;
        })();
    });
    return void 0;
});


