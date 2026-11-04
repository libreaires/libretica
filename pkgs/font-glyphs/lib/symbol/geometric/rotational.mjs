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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Rotational", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var r313_UnicodeWeightGrade = _r313_t1.UnicodeWeightGrade;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_xn$disablecontrast$3qIs = _r313_t2["disable-contrast"];
        var r313_alsoThru = _r313_t2.alsoThru;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
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
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_RingAt = _r313_t5.RingAt;
        var r313_RingStrokeAt = _r313_t5.RingStrokeAt;
        var r313_PointingTo = _r313_t5.PointingTo;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
        var r313_GeometricDim = _r313_t7.GeometricDim;
        var r313_GeometricSizes = _r313_t7.GeometricSizes;
        var r313_OpenRadius = function (r317_sw, r317_sides) {
            var _r317_t0, _r317_t1;
            return r317_sw / 2 / Math.tan(Math.PI / r317_sides);
        };
        var r313_Line = function (r318_sw) {
            var _r318_t0, _r318_t1;
            return function (r319_r) {
                var _r319_t0, _r319_t1;
                return r313_dispiro(r313_widths.center(r318_sw), r313_corner(0, 0), r313_corner(r319_r, 0));
            };
        };
        var r313_TeardropImpl = function (r320_r, r320_sw, r320_sw2, r320_fPetal) {
            var _r320_t4, _r320_t5;
            var _r320_t0 = 0;
            var _r320_t1 = r313_TINY;
            var _r320_t3 = r1_clamp(0.5 * r320_r, 0.9 * r320_r, r320_r - r320_sw2 / 2);
            var _r320_t2 = r1_clamp(2 * r313_TINY, 0.4 * r320_r, r320_r - (r320_r - _r320_t3) * 3);
            return [r313_corner(_r320_t0, r320_sw / 2), r320_fPetal ? [] : [r313_flat(_r320_t1, r320_sw / 2), r313_curl(_r320_t2, r320_sw / 2)], r313_alsoThru.g2(0.5, 0.5), r313_g4(_r320_t3, r320_sw2 / 2), r313_archv(), r313_g4(r320_r, 0), r313_arcvh(), r313_g4(_r320_t3, -r320_sw2 / 2), r313_alsoThru.g2(0.5, 0.5), r320_fPetal ? [] : [r313_flat(_r320_t2, -r320_sw / 2), r313_curl(_r320_t1, -r320_sw / 2)], r313_corner(_r320_t0, -r320_sw / 2)];
        };
        var r313_Teardrop = function (r322_sw, r322_sw2) {
            var _r322_t0, _r322_t1;
            return function (r323_r) {
                var _r323_t0, _r323_t1;
                return r313_xn$spirooutline$1aao(r313_TeardropImpl(r323_r, r322_sw, r322_sw2, 0));
            };
        };
        var r313_PinwheelTeardrop = function (r324_sw, r324_sw2) {
            var _r324_t0, _r324_t1;
            return function (r325_r) {
                var _r325_t0, _r325_t1;
                return r313_union(r313_intersection(r313_MaskAbove(0), r313_dispiro(r313_widths.rhs(r324_sw / 2), r313_TeardropImpl(r325_r, r324_sw, r324_sw2, 0))), r313_intersection(r313_MaskBelow(0), r313_xn$spirooutline$1aao(r313_TeardropImpl(r325_r, r324_sw, r324_sw2, 0))));
            };
        };
        var r313_Petal = function (r326_sw, r326_sw2) {
            var _r326_t0, _r326_t1;
            return function (r327_r) {
                var _r327_t0, _r327_t1;
                return r313_xn$spirooutline$1aao(r313_TeardropImpl(r327_r, r326_sw, r326_sw2, 1));
            };
        };
        var r313_WhitePetal = function (r328_sw, r328_sw2) {
            var _r328_t0, _r328_t1;
            return function (r329_r) {
                var _r329_t0, _r329_t1;
                return r313_dispiro(r313_widths.rhs(r328_sw / 2), r313_TeardropImpl(r329_r, r328_sw, r328_sw2, 1));
            };
        };
        var r313_Balloon = function (r330_sw, r330_ballR) {
            var _r330_t0, _r330_t1;
            return function (r331_r) {
                var _r331_t0, _r331_t1;
                return r313_union(r313_dispiro(r313_widths.center(r330_sw), r313_corner(0, 0), r313_corner(r331_r - r330_ballR, 0)), r313_RingAt(r331_r - r330_ballR, 0, r330_ballR));
            };
        };
        var r313_Club = function (r332_sw, r332_refBallR) {
            var _r332_t0, _r332_t1;
            return function (r333_r) {
                var _r333_t0, _r333_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                    var _r335_t0, _r335_t1;
                    var r335_ballR = 9 / 19 * r332_refBallR;
                    var r335_clubCenter = r333_r - r332_refBallR;
                    var r335_clubRadius = r332_refBallR - r335_ballR;
                    var r335_cosAngle = 0.5;
                    var r335_sinAngle = Math.sqrt(3) / 2;
                    r335_currentGlyph.include(r313_union(r313_dispiro(r313_widths.center(r332_sw), r313_corner(0, 0), r313_corner(r335_clubCenter, 0)), r313_RingAt(r335_clubCenter + r335_clubRadius, 0, r335_ballR), r313_RingAt(r335_clubCenter - r335_cosAngle * r335_clubRadius, r335_sinAngle * r335_clubRadius, r335_ballR), r313_RingAt(r335_clubCenter - r335_cosAngle * r335_clubRadius, -r335_sinAngle * r335_clubRadius, r335_ballR), r313_xn$spirooutline$1aao(r313_corner(r335_clubCenter + r335_clubRadius, 0), r313_corner(r335_clubCenter - r335_cosAngle * r335_clubRadius, r335_sinAngle * r335_clubRadius), r313_corner(r335_clubCenter - r335_cosAngle * r335_clubRadius, -r335_sinAngle * r335_clubRadius))));
                    return void 0;
                });
            };
        };
        var r313_Snowflake = function (r337_sw, r337_sw2, r337_sides, r337_fTight) {
            var _r337_t0, _r337_t1;
            return function (r338_r) {
                var _r338_t0, _r338_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                    var r340_sinHalfAngle, r340_cosHalfAngle, _r340_t0, _r340_t1;
                    var r340_sinAngle = Math.sin(2 * Math.PI / r337_sides);
                    var r340_cosAngle = Math.cos(2 * Math.PI / r337_sides);
                    var r340_branchPos = (r337_fTight ? 0.4 : 0.55) * r338_r - r337_sw2 / 2;
                    var r340_branchLen = (r337_fTight ? 1 : 0.45) * r338_r;
                    var r340_shape = r313_union(r313_dispiro(r313_widths.center(r337_sw), r313_corner(0, 0), r313_corner(r338_r, 0)), r313_intersection(r313_MaskAbove(0), r313_dispiro(r313_xn$disablecontrast$3qIs(), r313_widths.rhs(r337_sw2), r313_corner(r340_branchPos, 0), r313_corner(r340_branchPos + r340_branchLen * r340_cosAngle, r340_branchLen * r340_sinAngle))), r313_intersection(r313_MaskBelow(0), r313_dispiro(r313_xn$disablecontrast$3qIs(), r313_widths.lhs(r337_sw2), r313_corner(r340_branchPos, 0), r313_corner(r340_branchPos + r340_branchLen * r340_cosAngle, -r340_branchLen * r340_sinAngle))));
                    if (r337_fTight) {
                        r340_sinHalfAngle = Math.sin(Math.PI / r337_sides);
                        r340_cosHalfAngle = Math.cos(Math.PI / r337_sides);
                        r340_currentGlyph.include(r313_intersection(r340_shape, r313_xn$spirooutline$1aao(r313_corner(0, 0), r313_corner(2 * r338_r * r340_cosHalfAngle, 2 * r338_r * r340_sinHalfAngle), r313_corner(2 * r338_r * r340_cosHalfAngle, -2 * r338_r * r340_sinHalfAngle))));
                    } else r340_currentGlyph.include(r340_shape);
                    return void 0;
                });
            };
        };
        return (function () {
            var r345_FMosaicWide, r345_MosaicNameSuffix, r345_MosaicWidth, r345_MosaicWidthScalar, _r345_t3, _r345_t5, _r345_t6, _r345_tag7;
            var r345_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r345_t0 = r345_WidthKinds;
            var _r345_t1 = _r345_t0.length;
            var _r345_t2 = 0;
            var _r345_t4 = _r345_t2 < _r345_t1;
            while (_r345_t4) {
                _r345_t3 = _r345_t0[_r345_t2];
                r345_FMosaicWide = _r345_t3[0];
                r345_MosaicNameSuffix = _r345_t3[1];
                r345_MosaicWidth = _r345_t3[2];
                r345_MosaicWidthScalar = _r345_t3[3];
                (function () {
                    var r348_MosaicDesiredWidth = r313_WideWidth1;
                    var r348_MosaicMiddle = r345_MosaicWidth / 2;
                    var r348_MosaicUnitWidth = r345_MosaicWidth / r345_MosaicWidthScalar;
                    var r348_MangleUnicode = function (r349_unicode, r349__desiredOverride) {
                        var _r349_t0, _r349_t1;
                        return r345_MosaicWidth === (r349__desiredOverride || r348_MosaicDesiredWidth) ? r349_unicode : void 0;
                    };
                    var r348_MangleName = function (r350_name) {
                        var _r350_t0, _r350_t1;
                        return r350_name + r345_MosaicNameSuffix;
                    };
                    var r348_Geom = r313_GeometricDim(r348_MosaicUnitWidth, r345_MosaicWidth);
                    var r348_lightSw = r313_UnicodeWeightGrade(300, r348_Geom.Scalar, r313_GeometryStroke);
                    var r348_normalSw = r313_UnicodeWeightGrade(400, r348_Geom.Scalar, r313_GeometryStroke);
                    var r348_semiBoldSw = r313_UnicodeWeightGrade(600, r348_Geom.Scalar, r313_GeometryStroke);
                    var r348_boldSw = r313_UnicodeWeightGrade(700, r348_Geom.Scalar, r313_GeometryStroke);
                    var r348_heavySw = r313_UnicodeWeightGrade(900, r348_Geom.Scalar, r313_GeometryStroke);
                    var r348_xn$forrotationalpointing$9Jrj1b = function (r351_sides, r351_phase, r351_mag, r351_gap, r351_fn) {
                        var r351_angle, _r351_t2, _r351_t3;
                        var r351_shapes = [];
                        var _r351_t0 = 0;
                        var _r351_t1 = r351_sides;
                        var r351_j = _r351_t0;
                        while (r351_j < _r351_t1) {
                            r351_angle = (r351_j + r351_phase) * 2 * Math.PI / r351_sides;
                            r351_shapes.push(r313_PointingTo(r348_Geom.MidX + Math.sin(r351_angle) * r351_mag, r348_Geom.MidY + Math.cos(r351_angle) * r351_mag, r348_Geom.MidX + Math.sin(r351_angle) * r351_gap, r348_Geom.MidY + Math.cos(r351_angle) * r351_gap, r351_fn));
                            r351_j = r351_j + 1;
                        }
                        return r351_shapes;
                    };
                    var r348_centerSw = r348_heavySw * 1.2;
                    var r348_ballRad = r348_Geom.Size * (1 / 7) + r348_normalSw / 2;
                    var r348_bigBallRad = r348_ballRad + r348_centerSw / 2;
                    var r348_bigBallRad2 = r348_ballRad + r348_centerSw / 4;
                    var r348_teardropSw = r348_Geom.Size * (2 / 7) + r348_normalSw / 2;
                    var r348_teardropHeavySw = r348_Geom.Size * (2 / 7) + r348_boldSw / 2;
                    var r348_BallCenter = function () {
                        var _r354_t0, _r354_t1;
                        return r313_RingAt(r348_Geom.MidX, r348_Geom.MidY, r348_centerSw / 2);
                    };
                    var r348_BallOpenCenter = function () {
                        var _r355_t0, _r355_t1;
                        return r313_RingStrokeAt(r348_Geom.MidX, r348_Geom.MidY, r348_centerSw / 2, r348_centerSw / 4);
                    };
                    var r348_BigBallCenter = function () {
                        var _r356_t0, _r356_t1;
                        return r313_RingAt(r348_Geom.MidX, r348_Geom.MidY, r348_ballRad);
                    };
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("openCenterCross"), r348_MangleUnicode(10011), new r313_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                        var _r359_t0, _r359_t1;
                        r359_currentGlyph.setWidth(r348_Geom.Width);
                        r359_currentGlyph.include(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(4, 0, r348_Geom.Size, r313_OpenRadius(r348_normalSw, 4), r313_Line(r348_normalSw))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("openCenterCrossHeavy"), r348_MangleUnicode(10012), new r313_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                        var _r364_t0, _r364_t1;
                        r364_currentGlyph.setWidth(r348_Geom.Width);
                        r364_currentGlyph.include(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(4, 0, r348_Geom.Size, r313_OpenRadius(r348_heavySw, 4), r313_Line(r348_heavySw))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("openCenterAsterisk6"), r348_MangleUnicode(10034), new r313_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                        var _r369_t0, _r369_t1;
                        r369_currentGlyph.setWidth(r348_Geom.Width);
                        r369_currentGlyph.include(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(6, 0, r348_Geom.Size, r313_OpenRadius(r348_normalSw, 6), r313_Line(r348_normalSw))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("teardropAsterisk4"), r348_MangleUnicode(10018), new r313_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
                        var _r374_t0, _r374_t1;
                        r374_currentGlyph.setWidth(r348_Geom.Width);
                        r374_currentGlyph.include(r313_union(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(4, 0, r348_Geom.Size, 0, r313_Teardrop(r348_normalSw, r348_teardropSw))), r348_BallCenter()));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("teardropAsterisk6"), r348_MangleUnicode(10043), new r313_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
                        var _r379_t0, _r379_t1;
                        r379_currentGlyph.setWidth(r348_Geom.Width);
                        r379_currentGlyph.include(r313_union(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(6, 0, r348_Geom.Size, 0, r313_Teardrop(r348_normalSw, r348_teardropSw))), r348_BallCenter()));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("teardropOpenAsterisk6"), r348_MangleUnicode(10044), new r313_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                        var _r384_t0, _r384_t1;
                        r384_currentGlyph.setWidth(r348_Geom.Width);
                        r384_currentGlyph.include(r313_union(r313_difference(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(6, 0, r348_Geom.Size, 0, r313_Teardrop(r348_normalSw, r348_teardropSw))), r348_BallCenter()), r348_BallOpenCenter()));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("teardropHeavyAsterisk6"), r348_MangleUnicode(10045), new r313_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
                        var _r389_t0, _r389_t1;
                        r389_currentGlyph.setWidth(r348_Geom.Width);
                        r389_currentGlyph.include(r313_union(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(6, 0, r348_Geom.Size, 0, r313_Teardrop(r348_normalSw, r348_teardropHeavySw))), r348_BallCenter()));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("teardropHeavyPinwheelAsterisk6"), r348_MangleUnicode(10051), new r313_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                        var _r394_t0, _r394_t1;
                        r394_currentGlyph.setWidth(r348_Geom.Width);
                        r394_currentGlyph.include(r313_union(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(6, 0, r348_Geom.Size, 0, r313_PinwheelTeardrop(r348_normalSw, r348_teardropHeavySw))), r348_BallCenter()));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("teardropAsterisk8"), r348_MangleUnicode(10058), new r313_xn$Capture$2Lrc8.GlyphProc(function (r399_currentGlyph) {
                        var _r399_t0, _r399_t1;
                        r399_currentGlyph.setWidth(r348_Geom.Width);
                        r399_currentGlyph.include(r313_union(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(8, 0, r348_Geom.Size, 0, r313_Teardrop(r348_normalSw, r348_teardropSw))), r348_BallCenter()));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("teardropHeavyAsterisk8"), r348_MangleUnicode(10059), new r313_xn$Capture$2Lrc8.GlyphProc(function (r404_currentGlyph) {
                        var _r404_t0, _r404_t1;
                        r404_currentGlyph.setWidth(r348_Geom.Width);
                        r404_currentGlyph.include(r313_union(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(8, 0, r348_Geom.Size, 0, r313_Teardrop(r348_normalSw, r348_teardropHeavySw))), r348_BallCenter()));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("blackAndWhiteFlorette6"), r348_MangleUnicode(10046), new r313_xn$Capture$2Lrc8.GlyphProc(function (r409_currentGlyph) {
                        var _r409_t0, _r409_t1;
                        r409_currentGlyph.setWidth(r348_Geom.Width);
                        r409_currentGlyph.include(r313_union(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(3, 0.5, r348_Geom.Size, 0, r313_Petal(r348_normalSw, r348_Geom.Size * 4.5 / 7))), r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(3, 0, r348_Geom.Size, 0, r313_WhitePetal(r348_normalSw, r348_Geom.Size * 4.5 / 7))), r348_BallCenter()));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("blackFlorette5"), r348_MangleUnicode(10047), new r313_xn$Capture$2Lrc8.GlyphProc(function (r414_currentGlyph) {
                        var _r414_t0, _r414_t1;
                        r414_currentGlyph.setWidth(r348_Geom.Width);
                        r414_currentGlyph.include(r313_difference(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(5, 0, r348_Geom.Size, 0, r313_Petal(r348_normalSw, r348_Geom.Size * 5 / 7))), r313_xn$referglyph$1aao(r348_MangleName("blackSlightlySmallCircle"))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("whiteFlorette5"), r348_MangleUnicode(10048), new r313_xn$Capture$2Lrc8.GlyphProc(function (r419_currentGlyph) {
                        var _r419_t0, _r419_t1;
                        r419_currentGlyph.setWidth(r348_Geom.Width);
                        r419_currentGlyph.include(r313_union(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(5, 0, r348_Geom.Size, 0, r313_WhitePetal(r348_normalSw, r348_Geom.Size * 5 / 7))), r313_xn$referglyph$1aao(r348_MangleName("blackSlightlySmallCircle"))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("outlinedFlorette8"), r348_MangleUnicode(10049), new r313_xn$Capture$2Lrc8.GlyphProc(function (r424_currentGlyph) {
                        var _r424_t0, _r424_t1;
                        r424_currentGlyph.setWidth(r348_Geom.Width);
                        var r424_innerSw = r1_clamp(r348_normalSw / 2, r348_normalSw, r348_Geom.Size * 4 / 7 - r348_normalSw * 2);
                        var r424_offset = (r348_Geom.Size * 4 / 7 - r424_innerSw) / 2;
                        r424_currentGlyph.include(r313_union(r313_difference(r313_union(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(8, 0, r348_Geom.Size, 0, r313_WhitePetal(r348_normalSw, r348_Geom.Size * 4 / 7))), r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(8, 0, r348_Geom.Size - r424_offset, 0, r313_Petal(r424_innerSw / 2, r424_innerSw)))), r313_xn$referglyph$1aao(r348_MangleName("blackSlightlySmallCircle"))), r313_xn$referglyph$1aao(r348_MangleName("whiteSlightlySmallCircle"))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("balloonAsterisk4"), r348_MangleUnicode(10019), new r313_xn$Capture$2Lrc8.GlyphProc(function (r429_currentGlyph) {
                        var _r429_t0, _r429_t1;
                        r429_currentGlyph.setWidth(r348_Geom.Width);
                        r429_currentGlyph.include(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(4, 0, r348_Geom.Size, 0, r313_Balloon(r348_normalSw, r348_ballRad))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("balloonHeavyAsterisk4"), r348_MangleUnicode(10020), new r313_xn$Capture$2Lrc8.GlyphProc(function (r434_currentGlyph) {
                        var _r434_t0, _r434_t1;
                        r434_currentGlyph.setWidth(r348_Geom.Width);
                        r434_currentGlyph.include(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(4, 0, r348_Geom.Size, 0, r313_Balloon(r348_heavySw, r348_ballRad * 1.35))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("balloonAsterisk6"), r348_MangleUnicode(10057), new r313_xn$Capture$2Lrc8.GlyphProc(function (r439_currentGlyph) {
                        var _r439_t0, _r439_t1;
                        r439_currentGlyph.setWidth(r348_Geom.Width);
                        r439_currentGlyph.include(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(6, 0, r348_Geom.Size, 0, r313_Balloon(r348_normalSw, r348_ballRad))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("clubAsterisk4"), r348_MangleUnicode(10021), new r313_xn$Capture$2Lrc8.GlyphProc(function (r444_currentGlyph) {
                        var _r444_t0, _r444_t1;
                        r444_currentGlyph.setWidth(r348_Geom.Width);
                        r444_currentGlyph.include(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(4, 0, r348_Geom.Size, 0, r313_Club(r348_normalSw, r348_ballRad * 1.35))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("snowflake"), r348_MangleUnicode(10052), new r313_xn$Capture$2Lrc8.GlyphProc(function (r449_currentGlyph) {
                        var _r449_t0, _r449_t1;
                        r449_currentGlyph.setWidth(r348_Geom.Width);
                        r449_currentGlyph.include(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(6, 0, r348_Geom.Size, 0, r313_Snowflake(r348_lightSw, r348_lightSw, 6, 0))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("snowflakeTight"), r348_MangleUnicode(10053), new r313_xn$Capture$2Lrc8.GlyphProc(function (r454_currentGlyph) {
                        var _r454_t0, _r454_t1;
                        r454_currentGlyph.setWidth(r348_Geom.Width);
                        r454_currentGlyph.include(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(6, 0, r348_Geom.Size, 0, r313_Snowflake(r348_lightSw, r348_lightSw, 6, 1))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("snowflakeHeavyChevron"), r348_MangleUnicode(10054), new r313_xn$Capture$2Lrc8.GlyphProc(function (r459_currentGlyph) {
                        var _r459_t0, _r459_t1;
                        r459_currentGlyph.setWidth(r348_Geom.Width);
                        r459_currentGlyph.include(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(6, 0, r348_Geom.Size, 0, r313_Snowflake(r348_lightSw, r348_semiBoldSw, 6, 0))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("sparkle"), r348_MangleUnicode(10055), new r313_xn$Capture$2Lrc8.GlyphProc(function (r464_currentGlyph) {
                        var _r464_t0, _r464_t1;
                        r464_currentGlyph.setWidth(r348_Geom.Width);
                        r464_currentGlyph.include(r313_union(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(4, 0, r348_Geom.Size, r348_bigBallRad2, r313_Teardrop(r348_normalSw, r348_teardropSw))), r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(4, 0.5, r348_Geom.Size, r348_bigBallRad, r313_Line(r348_normalSw))), r348_BigBallCenter()));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r348_MangleName("sparkleHeavy"), r348_MangleUnicode(10056), new r313_xn$Capture$2Lrc8.GlyphProc(function (r469_currentGlyph) {
                        var _r469_t0, _r469_t1;
                        r469_currentGlyph.setWidth(r348_Geom.Width);
                        r469_currentGlyph.include(r313_union(r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(4, 0, r348_Geom.Size, r348_bigBallRad2, r313_Teardrop(r348_normalSw, r348_teardropHeavySw))), r313_union.apply(null, r348_xn$forrotationalpointing$9Jrj1b(4, 0.5, r348_Geom.Size, r348_bigBallRad, r313_Line(r348_boldSw))), r348_BigBallCenter()));
                        return void 0;
                    }));
                })();
                _r345_t5 = _r345_t2 = _r345_t2 + 1;
                _r345_t4 = _r345_t2 < _r345_t1;
            }
            return _r345_t5;
        })();
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r474_xn$Capture_Ext$2Lrc2b) {
    var _r474_t0, _r474_t1;
    r474_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r474_xn$Capture_Ext$2Lrc2b, "Symbol-Other-Rotational", function (r475_xn$Capture$2Lrc8, r475_xn$ExportCapture$2Lrc4b) {
        var _r475_t7, _r475_t8;
        var _r475_t0 = r475_xn$Capture$2Lrc8;
        var r475_xn$GlyphSaveSink$2Lrc4b = _r475_t0["$GlyphSaveSink$"];
        var r475_xn$NamedParameterPair$2Lrc9b = _r475_t0["$NamedParameterPair$"];
        var r475_xn$Exec$2Lrc5 = _r475_t0["$Exec$"];
        var _r475_t1 = r475_xn$Capture$2Lrc8.Metrics;
        var r475_SymbolMid = _r475_t1.SymbolMid;
        var r475_AdviceStroke = _r475_t1.AdviceStroke;
        var r475_RightSB = _r475_t1.RightSB;
        var r475_Middle = _r475_t1.Middle;
        var _r475_t2 = r475_xn$Capture$2Lrc8.SpiroFns;
        var _r475_t3 = r475_xn$Capture$2Lrc8.SpiroFns;
        var r475_xn$decor$0cao = _r475_t3["decor@"];
        var r475_xn$decor$0cao1 = _r475_t3["decor@@"];
        var r475_xn$decor$0cao11 = _r475_t3["decor@@@"];
        var _r475_t4 = r475_xn$Capture$2Lrc8.BooleFns;
        var r475_difference = _r475_t4.difference;
        var _r475_t5 = r475_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r475_Circle = _r475_t5.Circle;
        var _r475_t6 = r475_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r475_EternitySymbol = function (r478_sign) {
            var _r478_t0, _r478_t1;
            return new r475_xn$Capture$2Lrc8.GlyphProc(function (r480_currentGlyph) {
                var _r480_t2, _r480_t3, _r480_t4, _r480_tag5;
                var r480_sw = r475_AdviceStroke(6.5);
                var r480_radius = (r475_RightSB - r475_Middle) / 2;
                var _r480_t0 = 0;
                var _r480_t1 = 8;
                var r480_j = _r480_t0;
                while (r480_j < _r480_t1) {
                    (function () {
                        var r484_angle = r478_sign * r480_j * Math.PI / 4;
                        var r484_angle2 = r478_sign * (r480_j + 1) * Math.PI / 4;
                        return r480_currentGlyph.include(r475_difference(r475_Circle.Outline.At(r475_Middle + r480_radius * Math.cos(r484_angle), r475_SymbolMid + r480_radius * Math.sin(r484_angle), r480_radius, r480_sw), r475_Circle.Outline.At(r475_Middle + r480_radius * Math.cos(r484_angle), r475_SymbolMid + r480_radius * Math.sin(r484_angle), r480_radius - r480_sw, r480_sw), r475_Circle.Outline.At(r475_Middle + r480_radius * Math.cos(r484_angle2), r475_SymbolMid + r480_radius * Math.sin(r484_angle2), r480_radius, r480_sw)));
                    })();
                    r480_j = r480_j + 1;
                }
                return void 0;
            });
        };
        r475_xn$GlyphSaveSink$2Lrc4b.save("armn/eternitySignLeft", 1422, r475_EternitySymbol(1));
        return r475_xn$GlyphSaveSink$2Lrc4b.save("armn/eternitySignRight", 1421, r475_EternitySymbol(-1));
    });
    return void 0;
});


