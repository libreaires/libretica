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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Dice", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_DotRadius = _r313_t1.DotRadius;
        var r313_PeriodRadius = _r313_t1.PeriodRadius;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
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
                    var r319_u, r319_frame, r319_fnCombine, r319_dotSizeFactor, r319_dots, _r319_t6;
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
                    var r319_DotAt = _r319_t0.DotAt;
                    var r319_Circle = _r319_t0.Circle;
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r319_xn$referglyph$1aao = _r319_t1["refer-glyph"];
                    var r319_NameUni = _r319_t1.NameUni;
                    var _r319_t2 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r319_GeometricDim = _r319_t2.GeometricDim;
                    var r319_GeometricSizes = _r319_t2.GeometricSizes;
                    var r319_Geom = r319_GeometricDim(r319_MosaicUnitWidth, r316_MosaicWidth);
                    var r319_diceCombinations = [[9856, "whiteSquare", r313_union, 7, [[1, 1]]], [9857, "whiteSquare", r313_union, 7, [[0, 0], [2, 2]]], [9858, "whiteSquare", r313_union, 7, [[0, 0], [1, 1], [2, 2]]], [9859, "whiteSquare", r313_union, 7, [[0, 0], [2, 0], [0, 2], [2, 2]]], [9860, "whiteSquare", r313_union, 7, [[0, 0], [2, 0], [1, 1], [0, 2], [2, 2]]], [9861, "whiteSquare", r313_union, 7, [[0, 0], [0, 1], [0, 2], [2, 0], [2, 1], [2, 2]]], [9737, "whiteCircle", r313_union, 4.5, [[1, 1]]], [9862, "whiteCircle", r313_union, 4.5, [[5 / 3, 1]]], [9863, "whiteCircle", r313_union, 4.5, [[1 / 3, 1], [5 / 3, 1]]], [9864, "blackCircle", r313_difference, 4.5, [[5 / 3, 1]]], [9865, "blackCircle", r313_difference, 4.5, [[1 / 3, 1], [5 / 3, 1]]]];
                    var _r319_t3 = r319_diceCombinations;
                    var _r319_t4 = _r319_t3.length;
                    var _r319_t5 = 0;
                    while (_r319_t5 < _r319_t4) {
                        _r319_t6 = _r319_t3[_r319_t5];
                        r319_u = _r319_t6[0];
                        r319_frame = _r319_t6[1];
                        r319_fnCombine = _r319_t6[2];
                        r319_dotSizeFactor = _r319_t6[3];
                        r319_dots = _r319_t6[4];
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(r319_u)), r319_MangleUnicode(r319_u), new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                            var _r328_t0, _r328_t1;
                            r328_currentGlyph.setWidth(r319_Geom.Width);
                            var r328_dr = r313_DotRadius / r313_Stroke * Math.min(r313_AdviceStroke(r319_dotSizeFactor, r319_Geom.Scalar), r313_AdviceStroke(7, 2));
                            var r328_xLeftEx = r319_Geom.MidX - r319_Geom.Size + r313_GeometryStroke;
                            var r328_xRightEx = r319_Geom.MidX + r319_Geom.Size - r313_GeometryStroke;
                            var r328_yBottomEx = r319_Geom.MidY + r319_Geom.Size - r313_GeometryStroke;
                            var r328_yTopEx = r319_Geom.MidY - r319_Geom.Size + r313_GeometryStroke;
                            var r328_xLeft = r1_mix(r328_xLeftEx, r328_xRightEx, 1 / 5);
                            var r328_xRight = r1_mix(r328_xLeftEx, r328_xRightEx, 4 / 5);
                            var r328_yBottom = r1_mix(r328_yBottomEx, r328_yTopEx, 1 / 5);
                            var r328_yTop = r1_mix(r328_yBottomEx, r328_yTopEx, 4 / 5);
                            r328_currentGlyph.include(r319_fnCombine(r319_xn$referglyph$1aao(r319_MangleName(r319_frame)), r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                                var r333_px, r333_py, _r333_t3, _r333_t4, _r333_t5;
                                var _r333_t0 = r319_dots;
                                var _r333_t1 = _r333_t0.length;
                                var _r333_t2 = 0;
                                while (_r333_t2 < _r333_t1) {
                                    _r333_t3 = _r333_t0[_r333_t2];
                                    r333_px = _r333_t3[0];
                                    r333_py = _r333_t3[1];
                                    r333_currentGlyph.include(r319_Circle.Outline.DotAt(r1_mix(r328_xLeft, r328_xRight, r333_px / 2), r1_mix(r328_yBottom, r328_yTop, r333_py / 2), r328_dr));
                                    _r333_t2 = _r333_t2 + 1;
                                }
                                return void 0;
                            }))));
                            return void 0;
                        }));
                        _r319_t5 = _r319_t5 + 1;
                    }
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("dottedWhiteTriangle"), r319_MangleUnicode(9708), new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                        var _r338_t0, _r338_t1;
                        r338_currentGlyph.setWidth(r319_Geom.Width);
                        r338_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteTriangleUp")));
                        r338_currentGlyph.include(r319_Circle.Outline.DotAt(r319_Geom.MidX, r319_Geom.MidY - r319_Geom.Size / 3, Math.min(r319_Geom.Width / 8, r313_PeriodRadius)));
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
r1_xn$GlyphBlocks$2Lrc2b.push(function (r344_xn$Capture_Ext$2Lrc2b) {
    var _r344_t0, _r344_t1;
    r344_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r344_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Dotted", function (r345_xn$Capture$2Lrc8, r345_xn$ExportCapture$2Lrc4b) {
        var _r345_t5, _r345_t6, _r345_t7, _r345_tag8;
        var _r345_t0 = r345_xn$Capture$2Lrc8;
        var r345_xn$GlyphSaveSink$2Lrc4b = _r345_t0["$GlyphSaveSink$"];
        var r345_xn$NamedParameterPair$2Lrc9b = _r345_t0["$NamedParameterPair$"];
        var r345_xn$Exec$2Lrc5 = _r345_t0["$Exec$"];
        var r345_DivFrame = _r345_t0.DivFrame;
        var _r345_t1 = r345_xn$Capture$2Lrc8.Metrics;
        var r345_Width = _r345_t1.Width;
        var r345_AdviceStroke = _r345_t1.AdviceStroke;
        var r345_WideWidth4 = _r345_t1.WideWidth4;
        var _r345_t2 = r345_xn$Capture$2Lrc8.SpiroFns;
        var _r345_t3 = r345_xn$Capture$2Lrc8.SpiroFns;
        var r345_xn$decor$0cao = _r345_t3["decor@"];
        var r345_xn$decor$0cao1 = _r345_t3["decor@@"];
        var r345_xn$decor$0cao11 = _r345_t3["decor@@@"];
        var _r345_t4 = r345_xn$Capture$2Lrc8.BooleFns;
        return (function () {
            var r348_FMosaicWide, r348_MosaicNameSuffix, r348_MosaicWidth, r348_MosaicWidthScalar, _r348_t3, _r348_t5, _r348_t6, _r348_tag7;
            var r348_WidthKinds = [[0, ".NWID", r345_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r345_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r348_t0 = r348_WidthKinds;
            var _r348_t1 = _r348_t0.length;
            var _r348_t2 = 0;
            var _r348_t4 = _r348_t2 < _r348_t1;
            while (_r348_t4) {
                _r348_t3 = _r348_t0[_r348_t2];
                r348_FMosaicWide = _r348_t3[0];
                r348_MosaicNameSuffix = _r348_t3[1];
                r348_MosaicWidth = _r348_t3[2];
                r348_MosaicWidthScalar = _r348_t3[3];
                (function () {
                    var r351_MosaicDesiredWidth = r345_WideWidth4;
                    var r351_MosaicMiddle = r348_MosaicWidth / 2;
                    var r351_MosaicUnitWidth = r348_MosaicWidth / r348_MosaicWidthScalar;
                    var r351_MangleUnicode = function (r352_unicode, r352__desiredOverride) {
                        var _r352_t0, _r352_t1;
                        return r348_MosaicWidth === (r352__desiredOverride || r351_MosaicDesiredWidth) ? r352_unicode : void 0;
                    };
                    var r351_MangleName = function (r353_name) {
                        var _r353_t0, _r353_t1;
                        return r353_name + r348_MosaicNameSuffix;
                    };
                    var _r351_t0 = r345_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
                    var r351_Circle = _r351_t0.Circle;
                    var _r351_t1 = r345_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var _r351_t2 = r345_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r351_GeometricDim = _r351_t2.GeometricDim;
                    var r351_GeometricSizes = _r351_t2.GeometricSizes;
                    var r351_Geom = r351_GeometricDim(r351_MosaicUnitWidth, r348_MosaicWidth);
                    var r351_Size = r351_GeometricSizes(r351_Geom);
                    r345_xn$GlyphSaveSink$2Lrc4b.save(r351_MangleName("dottedCircle"), r351_MangleUnicode(9676), new r345_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                        var r359_angle, r359_cx, r359_cy, _r359_t2, _r359_t3;
                        r359_currentGlyph.setWidth(r351_Geom.Width);
                        r359_currentGlyph.include(r345_DivFrame(r351_Geom.Scalar).markSet.plus());
                        var r359_n = 12 * Math.ceil(r351_Geom.Scalar);
                        var r359_fine = r345_AdviceStroke(10);
                        var _r359_t0 = 0;
                        var _r359_t1 = r359_n;
                        var r359_j = _r359_t0;
                        while (r359_j < _r359_t1) {
                            r359_angle = Math.PI * 2 * r359_j / r359_n;
                            r359_cx = r351_Geom.MidX + (r351_Geom.Right - r351_Geom.MidX) * Math.cos(r359_angle);
                            r359_cy = r351_Geom.MidY + (r351_Geom.Right - r351_Geom.MidX) * Math.sin(r359_angle);
                            r359_currentGlyph.include(r351_Circle.Outline.At(r359_cx, r359_cy, r359_fine));
                            r359_j = r359_j + 1;
                        }
                        return void 0;
                    }));
                    return r345_xn$GlyphSaveSink$2Lrc4b.save(r351_MangleName("dottedSquare"), r351_MangleUnicode(11034), new r345_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                        var r366_t, _r366_t2, _r366_t3;
                        r366_currentGlyph.setWidth(r351_Geom.Width);
                        r366_currentGlyph.include(r345_DivFrame(r351_Geom.Scalar).markSet.plus());
                        var r366_n = 4 * Math.ceil(r351_Geom.Scalar);
                        var r366_fine = r345_AdviceStroke(10);
                        var r366_box = {
                            "Left": r351_Geom.Left + r366_fine,
                            "Right": r351_Geom.Right - r366_fine,
                            "Top": r351_Geom.Top - r366_fine,
                            "Bot": r351_Geom.Bot + r366_fine
                        };
                        var _r366_t0 = 0;
                        var _r366_t1 = r366_n;
                        var r366_j = _r366_t0;
                        while (r366_j < _r366_t1) {
                            r366_t = r366_j / r366_n;
                            r366_currentGlyph.include(r351_Circle.Outline.At(r366_box.Left, r1_mix(r366_box.Bot, r366_box.Top, r366_t), r366_fine));
                            r366_currentGlyph.include(r351_Circle.Outline.At(r1_mix(r366_box.Left, r366_box.Right, r366_t), r366_box.Top, r366_fine));
                            r366_currentGlyph.include(r351_Circle.Outline.At(r366_box.Right, r1_mix(r366_box.Top, r366_box.Bot, r366_t), r366_fine));
                            r366_currentGlyph.include(r351_Circle.Outline.At(r1_mix(r366_box.Right, r366_box.Left, r366_t), r366_box.Bot, r366_fine));
                            r366_j = r366_j + 1;
                        }
                        return void 0;
                    }));
                })();
                _r348_t5 = _r348_t2 = _r348_t2 + 1;
                _r348_t4 = _r348_t2 < _r348_t1;
            }
            return _r348_t5;
        })();
    });
    return void 0;
});


