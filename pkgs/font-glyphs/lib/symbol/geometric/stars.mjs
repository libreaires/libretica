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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Stars", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_O = _r313_t1.O;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var r313_UnicodeWeightGrade = _r313_t1.UnicodeWeightGrade;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_widths = _r313_t2.widths;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
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
                    var r319_sides, r319_skip, r319_name, r319_unicode, r319_pMag, r319_phase, r319_pShrink, r319_sw, r319_cThin, _r319_t6, _r319_t10, _r319_t11, _r319_tag12, _r319_t13, _r319_tag14;
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
                    var r319_xn$withtransform$5sIl = _r319_t0["with-transform"];
                    var r319_ExtLineLhs = _r319_t0.ExtLineLhs;
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var _r319_t2 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r319_GeometricDim = _r319_t2.GeometricDim;
                    var r319_GeometricSizes = _r319_t2.GeometricSizes;
                    var r319_Geom = r319_GeometricDim(r319_MosaicUnitWidth, r316_MosaicWidth);
                    var r319_StarCfg = [{
                        "name": "sixPointedBlackStar",
                        "unicode": 10038,
                        "sides": 6,
                        "skip": 1,
                        "pMag": 1.05,
                        "phase": 0,
                        "pShrink": 0.4
                    }, {
                        "name": "eightPointedBlackStar",
                        "unicode": 10036,
                        "sides": 8,
                        "skip": 1,
                        "pMag": 1.15,
                        "phase": 0,
                        "pShrink": 0.25
                    }, {
                        "name": "eightPointedRectilinearBlackStar",
                        "unicode": 10039,
                        "sides": 8,
                        "skip": 1,
                        "pMag": 1.05,
                        "phase": 1 / 8,
                        "pShrink": 0.4
                    }, {
                        "name": "eightPointedStarMask",
                        "sides": 8,
                        "skip": 1,
                        "pMag": 1,
                        "phase": 0,
                        "pShrink": r319_GeometricSizes(r319_Geom).SlightlySmall.size
                    }, {
                        "name": "heavyEightPointedRectilinearBlackStar",
                        "unicode": 10040,
                        "sides": 8,
                        "skip": 1,
                        "pMag": 1.05,
                        "phase": 1 / 8,
                        "pShrink": 0.5
                    }, {
                        "name": "twelvePointedBlackStar",
                        "unicode": 10041,
                        "sides": 12,
                        "skip": 1,
                        "pMag": 1.05,
                        "phase": 0,
                        "pShrink": 0.5
                    }];
                    var _r319_t3 = r319_StarCfg;
                    var _r319_t4 = _r319_t3.length;
                    var _r319_t5 = 0;
                    while (_r319_t5 < _r319_t4) {
                        _r319_t6 = _r319_t3[_r319_t5];
                        r319_sides = _r319_t6.sides;
                        r319_skip = _r319_t6.skip;
                        r319_name = _r319_t6.name;
                        r319_unicode = _r319_t6.unicode;
                        r319_pMag = _r319_t6.pMag;
                        r319_phase = _r319_t6.phase;
                        r319_pShrink = _r319_t6.pShrink;
                        (function () {
                            return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_name), r319_MangleUnicode(r319_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                                var r331_angle, r331_mag, _r331_t2, _r331_t3;
                                r331_currentGlyph.setWidth(r319_Geom.Width);
                                var r331_corners = [];
                                var _r331_t0 = 0;
                                var _r331_t1 = 2 * r319_sides;
                                var r331_j = _r331_t0;
                                while (r331_j < _r331_t1) {
                                    r331_angle = Math.PI * (r331_j * r319_skip / r319_sides + r319_phase);
                                    r331_mag = (r331_j % 2 ? r319_pShrink : 1) * r319_pMag;
                                    r331_corners.push(r313_corner(r319_Geom.MidX + r319_Geom.Size * r331_mag * Math.sin(r331_angle), r319_Geom.MidY + r319_Geom.Size * r331_mag * Math.cos(r331_angle)));
                                    r331_j = r331_j + 1;
                                }
                                r331_currentGlyph.include(r313_xn$spirooutline$1aao(r331_corners));
                                return void 0;
                            }));
                        })();
                        _r319_t5 = _r319_t5 + 1;
                    }
                    var r319_extThinSw = r313_UnicodeWeightGrade(100, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_extLightSw = r313_UnicodeWeightGrade(200, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_lightSw = r313_UnicodeWeightGrade(300, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_semiLightSw = r313_UnicodeWeightGrade(350, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_normalSw = r313_UnicodeWeightGrade(400, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_mediumSw = r313_UnicodeWeightGrade(500, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_semiBoldSw = r313_UnicodeWeightGrade(600, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_boldSw = r313_UnicodeWeightGrade(700, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_exBoldSw = r313_UnicodeWeightGrade(800, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_heavySw = r313_UnicodeWeightGrade(900, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_veryHeavySw = r313_UnicodeWeightGrade(1000, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_exHeavySw = r313_UnicodeWeightGrade(1100, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_AsteriskCfg = [{
                        "name": "saltire",
                        "unicode": 9747,
                        "sides": 4,
                        "phase": 1 / 8,
                        "sw": r319_normalSw
                    }, {
                        "name": "heavyGreekCross",
                        "unicode": 10010,
                        "sides": 4,
                        "phase": 0,
                        "sw": r319_heavySw
                    }, {
                        "name": "heavyAsterisk",
                        "unicode": 10033,
                        "sides": 6,
                        "phase": 0,
                        "sw": r319_heavySw,
                        "cThin": 0.9
                    }, {
                        "name": "eightSpokedAsterisk",
                        "unicode": 10035,
                        "sides": 8,
                        "phase": 0,
                        "sw": r319_normalSw,
                        "cThin": 0.75
                    }, {
                        "name": "sixteenSpokedAsterisk",
                        "unicode": 10042,
                        "sides": 16,
                        "phase": 0,
                        "sw": r319_semiLightSw,
                        "cThin": 0.75
                    }, {
                        "name": "crossMark",
                        "unicode": 10060,
                        "sides": 4,
                        "phase": 1 / 8,
                        "sw": r319_heavySw,
                        "pMag": r319_GeometricSizes(r319_Geom).Large.size
                    }, {
                        "name": "lightVertBar",
                        "unicode": 10072,
                        "sides": 2,
                        "phase": 0,
                        "sw": r319_lightSw
                    }, {
                        "name": "mediumVertBar",
                        "unicode": 10073,
                        "sides": 2,
                        "phase": 0,
                        "sw": r319_mediumSw
                    }, {
                        "name": "heavyVertBar ",
                        "unicode": 10074,
                        "sides": 2,
                        "phase": 0,
                        "sw": r319_heavySw
                    }, {
                        "name": "thinGreekCross",
                        "unicode": 128929,
                        "sides": 4,
                        "phase": 0,
                        "sw": r319_extLightSw
                    }, {
                        "name": "lightGreekCross",
                        "unicode": 128930,
                        "sides": 4,
                        "phase": 0,
                        "sw": r319_lightSw
                    }, {
                        "name": "mediumGreekCross",
                        "unicode": 128931,
                        "sides": 4,
                        "phase": 0,
                        "sw": r319_mediumSw
                    }, {
                        "name": "boldGreekCross",
                        "unicode": 128932,
                        "sides": 4,
                        "phase": 0,
                        "sw": r319_boldSw
                    }, {
                        "name": "exBoldGreekCross",
                        "unicode": 128933,
                        "sides": 4,
                        "phase": 0,
                        "sw": r319_exBoldSw
                    }, {
                        "name": "veryHeavyGreekCross",
                        "unicode": 128934,
                        "sides": 4,
                        "phase": 0,
                        "sw": r319_veryHeavySw
                    }, {
                        "name": "exHeavyGreekCross",
                        "unicode": 128935,
                        "sides": 4,
                        "phase": 0,
                        "sw": r319_exHeavySw
                    }, {
                        "name": "thinSaltire",
                        "unicode": 128936,
                        "sides": 4,
                        "phase": 1 / 8,
                        "sw": r319_extLightSw
                    }, {
                        "name": "lightSaltire",
                        "unicode": 128937,
                        "sides": 4,
                        "phase": 1 / 8,
                        "sw": r319_lightSw
                    }, {
                        "name": "mediumSaltire",
                        "unicode": 128938,
                        "sides": 4,
                        "phase": 1 / 8,
                        "sw": r319_mediumSw
                    }, {
                        "name": "boldSaltire",
                        "unicode": 128939,
                        "sides": 4,
                        "phase": 1 / 8,
                        "sw": r319_boldSw
                    }, {
                        "name": "heavySaltire",
                        "unicode": 128940,
                        "sides": 4,
                        "phase": 1 / 8,
                        "sw": r319_heavySw
                    }, {
                        "name": "veryHeavySaltire",
                        "unicode": 128941,
                        "sides": 4,
                        "phase": 1 / 8,
                        "sw": r319_veryHeavySw
                    }, {
                        "name": "exHeavySaltire",
                        "unicode": 128942,
                        "sides": 4,
                        "phase": 1 / 8,
                        "sw": r319_exHeavySw
                    }, {
                        "name": "lightAsterisk5",
                        "unicode": 128943,
                        "sides": 5,
                        "phase": 0,
                        "sw": r319_lightSw
                    }, {
                        "name": "mediumAsterisk5",
                        "unicode": 128944,
                        "sides": 5,
                        "phase": 0,
                        "sw": r319_mediumSw
                    }, {
                        "name": "boldAsterisk5",
                        "unicode": 128945,
                        "sides": 5,
                        "phase": 0,
                        "sw": r319_boldSw
                    }, {
                        "name": "heavyAsterisk5",
                        "unicode": 128946,
                        "sides": 5,
                        "phase": 0,
                        "sw": r319_heavySw
                    }, {
                        "name": "veryHeavyAsterisk5",
                        "unicode": 128947,
                        "sides": 5,
                        "phase": 0,
                        "sw": r319_veryHeavySw
                    }, {
                        "name": "exHeavyAsterisk5",
                        "unicode": 128948,
                        "sides": 5,
                        "phase": 0,
                        "sw": r319_exHeavySw
                    }, {
                        "name": "lightAsterisk6",
                        "unicode": 128949,
                        "sides": 6,
                        "phase": 0,
                        "sw": r319_lightSw,
                        "cThin": 0.9
                    }, {
                        "name": "mediumAsterisk6",
                        "unicode": 128950,
                        "sides": 6,
                        "phase": 0,
                        "sw": r319_mediumSw,
                        "cThin": 0.9
                    }, {
                        "name": "boldAsterisk6",
                        "unicode": 128951,
                        "sides": 6,
                        "phase": 0,
                        "sw": r319_boldSw,
                        "cThin": 0.9
                    }, {
                        "name": "heavyAsterisk6",
                        "unicode": 128952,
                        "sides": 6,
                        "phase": 0,
                        "sw": r319_heavySw,
                        "cThin": 0.9
                    }, {
                        "name": "veryHeavyAsterisk6",
                        "unicode": 128953,
                        "sides": 6,
                        "phase": 0,
                        "sw": r319_veryHeavySw,
                        "cThin": 0.9
                    }, {
                        "name": "exHeavyAsterisk6",
                        "unicode": 128954,
                        "sides": 6,
                        "phase": 0,
                        "sw": r319_exHeavySw,
                        "cThin": 0.9
                    }, {
                        "name": "lightAsterisk8",
                        "unicode": 128955,
                        "sides": 8,
                        "phase": 0,
                        "sw": r319_lightSw,
                        "cThin": 0.75
                    }, {
                        "name": "mediumAsterisk8",
                        "unicode": 128956,
                        "sides": 8,
                        "phase": 0,
                        "sw": r319_mediumSw,
                        "cThin": 0.75
                    }, {
                        "name": "boldAsterisk8",
                        "unicode": 128957,
                        "sides": 8,
                        "phase": 0,
                        "sw": r319_boldSw,
                        "cThin": 0.75
                    }, {
                        "name": "heavyAsterisk8",
                        "unicode": 128958,
                        "sides": 8,
                        "phase": 0,
                        "sw": r319_exBoldSw,
                        "cThin": 0.75
                    }, {
                        "name": "veryHeavyAsterisk8",
                        "unicode": 128959,
                        "sides": 8,
                        "phase": 0,
                        "sw": r319_heavySw,
                        "cThin": 0.75
                    }];
                    var _r319_t7 = r319_AsteriskCfg;
                    var _r319_t8 = _r319_t7.length;
                    var _r319_t9 = 0;
                    while (_r319_t9 < _r319_t8) {
                        _r319_t10 = _r319_t7[_r319_t9];
                        r319_sides = _r319_t10.sides;
                        r319_name = _r319_t10.name;
                        r319_unicode = _r319_t10.unicode;
                        r319_phase = _r319_t10.phase;
                        r319_sw = _r319_t10.sw;
                        r319_cThin = _r319_t10.cThin;
                        r319_pMag = _r319_t10.pMag;
                        (function () {
                            return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_name), r319_MangleUnicode(r319_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                                var r342_angle, r342_mag, _r342_t2, _r342_t3;
                                r342_currentGlyph.setWidth(r319_Geom.Width);
                                var _r342_t0 = 0;
                                var _r342_t1 = r319_sides;
                                var r342_j = _r342_t0;
                                while (r342_j < _r342_t1) {
                                    r342_angle = 2 * Math.PI * (r342_j / r319_sides + r319_phase);
                                    r342_mag = r1_fallback(r319_pMag, 1);
                                    r342_currentGlyph.include(r313_dispiro(r313_corner(r319_Geom.MidX, r319_Geom.MidY, r313_widths.center(r319_sw * r1_fallback(r319_cThin, 1))), r313_corner(r319_Geom.MidX + r319_Geom.Size * r342_mag * Math.sin(-r342_angle), r319_Geom.MidY + r319_Geom.Size * r342_mag * Math.cos(-r342_angle), r313_widths.center(r319_sw))));
                                    r342_j = r342_j + 1;
                                }
                                return void 0;
                            }));
                        })();
                        _r319_t9 = _r319_t9 + 1;
                    }
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("crystalFlower"), r319_MangleUnicode(63617), new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                        var _r349_t0, _r349_t1;
                        r349_currentGlyph.setWidth(r319_Geom.Width);
                        var r349_createPetals = function () {
                            var _r351_t5;
                            var _r351_t6 = arguments;
                            var r351_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r351_t6, 0);
                            var _r351_t0 = [];
                            var _r351_t1 = 0;
                            while (_r351_t1 < r351_xn$flexarguments$2Lrc7uIe5.length) {
                                if (!(r351_xn$flexarguments$2Lrc7uIe5[_r351_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r351_t0.push(r351_xn$flexarguments$2Lrc7uIe5[_r351_t1]);
                                _r351_t1 = _r351_t1 + 1;
                            }
                            var _r351_t2 = r351_xn$flexarguments$2Lrc7uIe5;
                            var _r351_t3 = _r351_t2.length;
                            var _r351_t4 = 0;
                            while (_r351_t4 < _r351_t3) {
                                _r351_t1 = _r351_t2[_r351_t4];
                                if (_r351_t1 && _r351_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r351_t1.left === "fnSelect") r351_fnSelect = _r351_t1.right;
                                if (_r351_t1 && _r351_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r351_t1.left === "fill") r351_fill = _r351_t1.right;
                                if (_r351_t1 && _r351_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r351_t1.left === "kSw") r351_kSw = _r351_t1.right;
                                if (_r351_t1 && _r351_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r351_t1.left === "rotate") r351_rotate = _r351_t1.right;
                                if (_r351_t1 && _r351_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r351_t1.left === "expansion") r351_expansion = _r351_t1.right;
                                if (_r351_t1 && _r351_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r351_t1.left === "sw") r351_sw = _r351_t1.right;
                                if (_r351_t1 && _r351_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r351_t1.left === "size") r351_size = _r351_t1.right;
                                _r351_t4 = _r351_t4 + 1;
                            }
                            var r351_fnSelect = r1_fallback(r351_fnSelect, _r351_t0[0]);
                            var r351_fill = r1_fallback(r351_fill, _r351_t0[1]);
                            var r351_kSw = r1_fallback(r351_kSw, _r351_t0[2]);
                            var r351_rotate = r1_fallback(r351_rotate, _r351_t0[3]);
                            var r351_expansion = r1_fallback(r351_expansion, _r351_t0[4]);
                            var r351_sw = r1_fallback(r351_sw, _r351_t0[5]);
                            var r351_size = r1_fallback(r351_size, _r351_t0[6]);
                            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                                var r357_anglePre, r357_angle, r357_anglePost, r357_z1x, r357_z1y, r357_z2x, r357_z2y, r357_z3x, r357_z3y, r357_outline, _r357_t2, _r357_t3;
                                var r357_sizeIn = r351_size * 0.45;
                                var r357_sizeExt = r351_size * 1 - r313_O;
                                var _r357_t0 = 0;
                                var _r357_t1 = 6;
                                var r357_j = _r357_t0;
                                while (r357_j < _r357_t1) {
                                    if (r351_fnSelect(r357_j)) {
                                        r357_anglePre = 2 * Math.PI * ((r357_j - r351_expansion + r351_rotate) / 6);
                                        r357_angle = 2 * Math.PI * ((r357_j + r351_rotate) / 6);
                                        r357_anglePost = 2 * Math.PI * ((r357_j + r351_expansion + r351_rotate) / 6);
                                        r357_z1x = r357_sizeIn * Math.cos(r357_anglePre);
                                        r357_z1y = r357_sizeIn * Math.sin(r357_anglePre);
                                        r357_z2x = r357_sizeExt * Math.cos(r357_angle);
                                        r357_z2y = r357_sizeExt * Math.sin(r357_angle);
                                        r357_z3x = r357_sizeIn * Math.cos(r357_anglePost);
                                        r357_z3y = r357_sizeIn * Math.sin(r357_anglePost);
                                        r357_outline = r313_xn$spirooutline$1aao(r313_corner(0, 0), r313_corner(r357_z3x, r357_z3y), r313_corner(r357_z2x, r357_z2y), r313_corner(r357_z1x, r357_z1y));
                                        if (r351_fill) r357_currentGlyph.include(r357_outline); else r357_currentGlyph.include(r313_intersection(r357_outline, r313_union(r319_ExtLineLhs(0, 0, r357_z1x, r357_z1y, r351_sw * r351_kSw, 1), r319_ExtLineLhs(r357_z1x, r357_z1y, r357_z2x, r357_z2y, r351_sw, 1), r319_ExtLineLhs(r357_z2x, r357_z2y, r357_z3x, r357_z3y, r351_sw, 1), r319_ExtLineLhs(r357_z3x, r357_z3y, 0, 0, r351_sw * r351_kSw, 1))));
                                    }
                                    r357_j = r357_j + 1;
                                }
                                return void 0;
                            });
                        };
                        var r349_makeOverlay = function (r362_gap, r362_shape) {
                            var _r362_t0, _r362_t1;
                            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                                var r364_angle, r364_tx, r364_ty, _r364_t2, _r364_t3;
                                var _r364_t0 = 0;
                                var _r364_t1 = 6;
                                var r364_j = _r364_t0;
                                while (r364_j < _r364_t1) {
                                    r364_angle = 2 * Math.PI * (r364_j / 6);
                                    r364_tx = r362_gap * Math.cos(r364_angle);
                                    r364_ty = r362_gap * Math.sin(r364_angle);
                                    r364_currentGlyph.include(r319_xn$withtransform$5sIl(r313_ApparentTranslate(r364_tx, r364_ty), r362_shape));
                                    r364_j = r364_j + 1;
                                }
                                return void 0;
                            });
                        };
                        var r349_swOuter = r313_AdviceStroke(10, Math.sqrt(r319_Geom.Scalar));
                        var r349_swInner = r313_AdviceStroke(16, Math.sqrt(r319_Geom.Scalar));
                        var r349_gap = Math.min(r313_AdviceStroke(12), r319_Geom.Size / 12);
                        r349_currentGlyph.include(r313_union(r349_createPetals(new r313_xn$NamedParameterPair$2Lrc9b("fnSelect", function (r370_x) {
                            var _r370_t0, _r370_t1;
                            return r370_x % 2 === 0;
                        }), new r313_xn$NamedParameterPair$2Lrc9b("rotate", -0.5), new r313_xn$NamedParameterPair$2Lrc9b("expansion", 0.6), new r313_xn$NamedParameterPair$2Lrc9b("fill", false), new r313_xn$NamedParameterPair$2Lrc9b("kSw", 1), new r313_xn$NamedParameterPair$2Lrc9b("sw", r349_swInner), new r313_xn$NamedParameterPair$2Lrc9b("size", 0.625 * r319_Geom.Size + r349_swInner)), r313_difference(r349_createPetals(new r313_xn$NamedParameterPair$2Lrc9b("fnSelect", function (r378_x) {
                            var _r378_t0, _r378_t1;
                            return true;
                        }), new r313_xn$NamedParameterPair$2Lrc9b("rotate", 0), new r313_xn$NamedParameterPair$2Lrc9b("expansion", 0.5), new r313_xn$NamedParameterPair$2Lrc9b("fill", false), new r313_xn$NamedParameterPair$2Lrc9b("kSw", 0.5), new r313_xn$NamedParameterPair$2Lrc9b("sw", r349_swOuter), new r313_xn$NamedParameterPair$2Lrc9b("size", r319_Geom.Size)), r349_makeOverlay(r349_gap, r349_createPetals(new r313_xn$NamedParameterPair$2Lrc9b("fnSelect", function (r386_x) {
                            var _r386_t0, _r386_t1;
                            return r386_x % 2 === 0;
                        }), new r313_xn$NamedParameterPair$2Lrc9b("rotate", -0.5), new r313_xn$NamedParameterPair$2Lrc9b("expansion", 0.6), new r313_xn$NamedParameterPair$2Lrc9b("fill", true), new r313_xn$NamedParameterPair$2Lrc9b("kSw", 1), new r313_xn$NamedParameterPair$2Lrc9b("sw", r349_swInner + r349_gap), new r313_xn$NamedParameterPair$2Lrc9b("size", 0.625 * r319_Geom.Size + r349_swInner))))));
                        r349_currentGlyph.include(r313_ApparentTranslate(r319_Geom.MidX, r319_Geom.MidY));
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


