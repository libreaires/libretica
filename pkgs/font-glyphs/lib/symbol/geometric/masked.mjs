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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Masked", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_XH = _r313_t1.XH;
        var r313_ParenTop = _r313_t1.ParenTop;
        var r313_ParenBot = _r313_t1.ParenBot;
        var r313_Translate = _r313_t1.Translate;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_AccentClearance = _r313_t1.AccentClearance;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_Middle = _r313_t1.Middle;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_OperatorStroke = _r313_t1.OperatorStroke;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var r313_UnicodeWeightGrade = _r313_t1.UnicodeWeightGrade;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_xn$disablecontrast$3qIs = _r313_t2["disable-contrast"];
        var r313_heading = _r313_t2.heading;
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
                    var _r319_t3, _r319_tag4, _r319_t5, _r319_tag6, _r319_t7, _r319_tag8, _r319_t9, _r319_tag10, _r319_t11, _r319_tag12, _r319_t13, _r319_tag14, _r319_t15, _r319_tag16, _r319_t17, _r319_tag18, _r319_t19, _r319_tag20, _r319_t21, _r319_tag22, _r319_t23, _r319_tag24, _r319_t25, _r319_tag26;
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
                    var r319_xn$noshape$3cah = _r319_t0["no-shape"];
                    var r319_Rect = _r319_t0.Rect;
                    var r319_MaskAbove = _r319_t0.MaskAbove;
                    var r319_MaskBelow = _r319_t0.MaskBelow;
                    var r319_MaskLeft = _r319_t0.MaskLeft;
                    var r319_MaskRight = _r319_t0.MaskRight;
                    var r319_MaskLeftLine = _r319_t0.MaskLeftLine;
                    var r319_HSerif = _r319_t0.HSerif;
                    var r319_HBar = _r319_t0.HBar;
                    var r319_VBar = _r319_t0.VBar;
                    var r319_Ungizmo = _r319_t0.Ungizmo;
                    var r319_Regizmo = _r319_t0.Regizmo;
                    var r319_FlipAround = _r319_t0.FlipAround;
                    var r319_ScaleAround = _r319_t0.ScaleAround;
                    var r319_xn$withtransform$5sIl = _r319_t0["with-transform"];
                    var r319_ExtLineLhs = _r319_t0.ExtLineLhs;
                    var r319_xn$sharpcorner$1aao = _r319_t0["sharp-corner"];
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r319_xn$referglyph$1aao = _r319_t1["refer-glyph"];
                    var r319_xn$derivemultipartglyphs$7Hrq65 = _r319_t1["derive-multi-part-glyphs"];
                    var r319_alias = _r319_t1.alias;
                    var r319_NameUni = _r319_t1.NameUni;
                    var _r319_t2 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r319_GeometricDim = _r319_t2.GeometricDim;
                    var r319_GeometricSizes = _r319_t2.GeometricSizes;
                    var r319_Geom = r319_GeometricDim(r319_MosaicUnitWidth, r316_MosaicWidth);
                    var r319_Size = r319_GeometricSizes(r319_Geom);
                    var r319_UpperHalfMask = function () {
                        var _r325_t0, _r325_t1;
                        return r319_Rect(r319_Geom.MidY + r319_Geom.Size * 2, r319_Geom.MidY, 0, r319_Geom.Width);
                    };
                    var r319_LowerHalfMask = function () {
                        var _r326_t0, _r326_t1;
                        return r319_Rect(r319_Geom.MidY, r319_Geom.MidY - r319_Geom.Size * 2, 0, r319_Geom.Width);
                    };
                    var r319_LeftHalfMask = function () {
                        var _r327_t0, _r327_t1;
                        return r319_Rect(r319_Geom.MidY + r319_Geom.Size * 2, r319_Geom.MidY - r319_Geom.Size * 2, 0, r319_Geom.MidX);
                    };
                    var r319_RightHalfMask = function () {
                        var _r328_t0, _r328_t1;
                        return r319_Rect(r319_Geom.MidY + r319_Geom.Size * 2, r319_Geom.MidY - r319_Geom.Size * 2, r319_Geom.MidX, r319_Geom.Width);
                    };
                    var r319_UpperLeftQuarterMark = function () {
                        var _r329_t0, _r329_t1;
                        return r313_intersection(r319_UpperHalfMask(), r319_LeftHalfMask());
                    };
                    var r319_UpperRightQuarterMark = function () {
                        var _r330_t0, _r330_t1;
                        return r313_intersection(r319_UpperHalfMask(), r319_RightHalfMask());
                    };
                    var r319_LowerLeftQuarterMark = function () {
                        var _r331_t0, _r331_t1;
                        return r313_intersection(r319_LowerHalfMask(), r319_LeftHalfMask());
                    };
                    var r319_LowerRightQuarterMark = function () {
                        var _r332_t0, _r332_t1;
                        return r313_intersection(r319_LowerHalfMask(), r319_RightHalfMask());
                    };
                    var r319_UpperLeftHalfMark = function () {
                        var _r333_t0, _r333_t1;
                        return r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX + r319_Geom.Size * 2, r319_Geom.MidY + r319_Geom.Size * 2), r313_corner(r319_Geom.MidX - r319_Geom.Size * 2, r319_Geom.MidY + r319_Geom.Size * 2), r313_corner(r319_Geom.MidX - r319_Geom.Size * 2, r319_Geom.MidY - r319_Geom.Size * 2));
                    };
                    var r319_LowerRightHalfMark = function () {
                        var _r334_t0, _r334_t1;
                        return r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX + r319_Geom.Size * 2, r319_Geom.MidY + r319_Geom.Size * 2), r313_corner(r319_Geom.MidX - r319_Geom.Size * 2, r319_Geom.MidY - r319_Geom.Size * 2), r313_corner(r319_Geom.MidX + r319_Geom.Size * 2, r319_Geom.MidY - r319_Geom.Size * 2));
                    };
                    var r319_UpperRightHalfMark = function () {
                        var _r335_t0, _r335_t1;
                        return r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX + r319_Geom.Size * 2, r319_Geom.MidY + r319_Geom.Size * 2), r313_corner(r319_Geom.MidX - r319_Geom.Size * 2, r319_Geom.MidY + r319_Geom.Size * 2), r313_corner(r319_Geom.MidX + r319_Geom.Size * 2, r319_Geom.MidY - r319_Geom.Size * 2));
                    };
                    var r319_LowerLeftHalfMark = function () {
                        var _r336_t0, _r336_t1;
                        return r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX - r319_Geom.Size * 2, r319_Geom.MidY - r319_Geom.Size * 2), r313_corner(r319_Geom.MidX - r319_Geom.Size * 2, r319_Geom.MidY + r319_Geom.Size * 2), r313_corner(r319_Geom.MidX + r319_Geom.Size * 2, r319_Geom.MidY - r319_Geom.Size * 2));
                    };
                    (function () {
                        var r338_u, r338_WC, r338_LT, r338_LB, r338_RT, r338_RB, r338_pAngleStart, r338_pAngleEnd, _r338_t3, _r338_t7, _r338_t11, _r338_t13;
                        var r338_partialCircleQuarters = [[9680, 1, 1, 1, 0, 0], [9681, 1, 0, 0, 1, 1], [9682, 1, 0, 1, 0, 1], [9683, 1, 1, 0, 1, 0], [9684, 1, 0, 0, 1, 0], [9685, 1, 0, 1, 1, 1], [11210, 0, 1, 0, 1, 0], [11211, 0, 0, 1, 0, 1], [9686, 0, 1, 1, 0, 0], [9687, 0, 0, 0, 1, 1]];
                        var _r338_t0 = r338_partialCircleQuarters;
                        var _r338_t1 = _r338_t0.length;
                        var _r338_t2 = 0;
                        while (_r338_t2 < _r338_t1) {
                            _r338_t3 = _r338_t0[_r338_t2];
                            r338_u = _r338_t3[0];
                            r338_WC = _r338_t3[1];
                            r338_LT = _r338_t3[2];
                            r338_LB = _r338_t3[3];
                            r338_RT = _r338_t3[4];
                            r338_RB = _r338_t3[5];
                            r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(r338_u)), r319_MangleUnicode(r338_u), new r313_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                                var _r343_t0, _r343_t1;
                                r343_currentGlyph.setWidth(r319_Geom.Width);
                                r343_currentGlyph.include(r313_union(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                                    var _r348_t0, _r348_t1;
                                    if (r338_WC) r348_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")));
                                    return void 0;
                                })), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackCircleO")), r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                                    var _r352_t0, _r352_t1;
                                    if (r338_LT) r352_currentGlyph.include(r319_UpperLeftQuarterMark());
                                    if (r338_LB) r352_currentGlyph.include(r319_LowerLeftQuarterMark());
                                    if (r338_RT) r352_currentGlyph.include(r319_UpperRightQuarterMark());
                                    if (r338_RB) r352_currentGlyph.include(r319_LowerRightQuarterMark());
                                    return void 0;
                                })))));
                                return void 0;
                            }));
                            _r338_t2 = _r338_t2 + 1;
                        }
                        var r338_arcQuarters = [[9692, 1, 0, 0, 0], [9693, 0, 0, 1, 0], [9694, 0, 0, 0, 1], [9695, 0, 1, 0, 0], [9696, 1, 0, 1, 0], [9697, 0, 1, 0, 1], [129287, 1, 1, 0, 0]];
                        var _r338_t4 = r338_arcQuarters;
                        var _r338_t5 = _r338_t4.length;
                        var _r338_t6 = 0;
                        while (_r338_t6 < _r338_t5) {
                            _r338_t7 = _r338_t4[_r338_t6];
                            r338_u = _r338_t7[0];
                            r338_LT = _r338_t7[1];
                            r338_LB = _r338_t7[2];
                            r338_RT = _r338_t7[3];
                            r338_RB = _r338_t7[4];
                            r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(r338_u)), r319_MangleUnicode(r338_u), new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                                var _r361_t0, _r361_t1;
                                r361_currentGlyph.setWidth(r319_Geom.Width);
                                r361_currentGlyph.include(r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")), r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                                    var _r366_t0, _r366_t1;
                                    if (r338_LT) r366_currentGlyph.include(r319_UpperLeftQuarterMark());
                                    if (r338_LB) r366_currentGlyph.include(r319_LowerLeftQuarterMark());
                                    if (r338_RT) r366_currentGlyph.include(r319_UpperRightQuarterMark());
                                    if (r338_RB) r366_currentGlyph.include(r319_LowerRightQuarterMark());
                                    return void 0;
                                }))));
                                return void 0;
                            }));
                            _r338_t6 = _r338_t6 + 1;
                        }
                        var r338_progressCircleMaskPoint = function (r371_pAngle) {
                            var _r371_t0, _r371_t1;
                            return r313_corner(r319_Geom.MidX + Math.cos((0.5 - r371_pAngle * 2) * Math.PI) * r319_Geom.Width * 4, r319_Geom.MidY + Math.sin((0.5 - r371_pAngle * 2) * Math.PI) * r319_Geom.Width * 4);
                        };
                        var r338_progressCircleSections = [[60934, -1 / 12, 1 / 12], [60935, 0, 1 / 3], [60936, 1 / 6, 1 / 2 + 1 / 24], [60937, 1 / 4, 3 / 4], [60938, 1 / 2 - 1 / 24, 5 / 6], [60939, 2 / 3, 1]];
                        var _r338_t8 = r338_progressCircleSections;
                        var _r338_t9 = _r338_t8.length;
                        var _r338_t10 = 0;
                        var _r338_t12 = _r338_t10 < _r338_t9;
                        while (_r338_t12) {
                            _r338_t13 = (_r338_t11 = _r338_t8[_r338_t10], r338_u = _r338_t11[0], r338_pAngleStart = _r338_t11[1], r338_pAngleEnd = _r338_t11[2], r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(r338_u)), r319_MangleUnicode(r338_u), new r313_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                                var _r376_t0, _r376_t1;
                                r376_currentGlyph.setWidth(r319_Geom.Width);
                                r376_currentGlyph.include(r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")), r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX, r319_Geom.MidY), r338_progressCircleMaskPoint(r1_mix(r338_pAngleStart, r338_pAngleEnd, 0 / 4)), r338_progressCircleMaskPoint(r1_mix(r338_pAngleStart, r338_pAngleEnd, 1 / 4)), r338_progressCircleMaskPoint(r1_mix(r338_pAngleStart, r338_pAngleEnd, 2 / 4)), r338_progressCircleMaskPoint(r1_mix(r338_pAngleStart, r338_pAngleEnd, 3 / 4)), r338_progressCircleMaskPoint(r1_mix(r338_pAngleStart, r338_pAngleEnd, 4 / 4)))));
                                return void 0;
                            })), _r338_t10 = _r338_t10 + 1);
                            _r338_t12 = _r338_t10 < _r338_t9;
                        }
                        return _r338_t13;
                    })();
                    (function () {
                        var r380_u, r380_LT, r380_LB, r380_RT, r380_RB, r380_LTh, r380_LBh, r380_RTh, r380_RBh, _r380_t3;
                        var r380_squareParts = [[9703, 1, 1, 0, 0, 0, 0, 0, 0], [9704, 0, 0, 1, 1, 0, 0, 0, 0], [9705, 0, 0, 0, 0, 1, 0, 0, 0], [11026, 1, 0, 1, 0, 0, 0, 0, 0], [11027, 0, 1, 0, 1, 0, 0, 0, 0], [11028, 0, 0, 0, 0, 0, 0, 1, 0], [11029, 0, 0, 0, 0, 0, 1, 0, 0], [9706, 0, 0, 0, 0, 0, 0, 0, 1]];
                        var _r380_t0 = r380_squareParts;
                        var _r380_t1 = _r380_t0.length;
                        var _r380_t2 = 0;
                        while (_r380_t2 < _r380_t1) {
                            _r380_t3 = _r380_t0[_r380_t2];
                            r380_u = _r380_t3[0];
                            r380_LT = _r380_t3[1];
                            r380_LB = _r380_t3[2];
                            r380_RT = _r380_t3[3];
                            r380_RB = _r380_t3[4];
                            r380_LTh = _r380_t3[5];
                            r380_LBh = _r380_t3[6];
                            r380_RTh = _r380_t3[7];
                            r380_RBh = _r380_t3[8];
                            r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(r380_u)), r319_MangleUnicode(r380_u), new r313_xn$Capture$2Lrc8.GlyphProc(function (r385_currentGlyph) {
                                var _r385_t0, _r385_t1;
                                r385_currentGlyph.setWidth(r319_Geom.Width);
                                r385_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName("whiteSquare")), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackSquare")), r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                                    var _r390_t0, _r390_t1;
                                    if (r380_LT) r390_currentGlyph.include(r319_UpperLeftQuarterMark());
                                    if (r380_LB) r390_currentGlyph.include(r319_LowerLeftQuarterMark());
                                    if (r380_RT) r390_currentGlyph.include(r319_UpperRightQuarterMark());
                                    if (r380_RB) r390_currentGlyph.include(r319_LowerRightQuarterMark());
                                    if (r380_LTh) r390_currentGlyph.include(r319_UpperLeftHalfMark());
                                    if (r380_LBh) r390_currentGlyph.include(r319_LowerLeftHalfMark());
                                    if (r380_RTh) r390_currentGlyph.include(r319_UpperRightHalfMark());
                                    if (r380_RBh) r390_currentGlyph.include(r319_LowerRightHalfMark());
                                    return void 0;
                                })))));
                                return void 0;
                            }));
                            _r380_t2 = _r380_t2 + 1;
                        }
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("heavyWhiteSquareUpperHalf"), r319_MangleUnicode(118275), new r313_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
                            var _r401_t0, _r401_t1;
                            r401_currentGlyph.setWidth(r319_Geom.Width);
                            r401_currentGlyph.include(r313_intersection(r319_UpperHalfMask(), r319_xn$referglyph$1aao(r319_MangleName("heavyWhiteSquare"))));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("heavyWhiteSquareLowerHalf"), r319_MangleUnicode(118276), new r313_xn$Capture$2Lrc8.GlyphProc(function (r406_currentGlyph) {
                            var _r406_t0, _r406_t1;
                            r406_currentGlyph.setWidth(r319_Geom.Width);
                            r406_currentGlyph.include(r313_intersection(r319_LowerHalfMask(), r319_xn$referglyph$1aao(r319_MangleName("heavyWhiteSquare"))));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r410_u, r410_LT, r410_LB, r410_RT, r410_RB, _r410_t3, _r410_t5;
                        var r410_diamondParts = [[11030, 1, 1, 0, 0], [11031, 0, 0, 1, 1], [11032, 1, 0, 1, 0], [11033, 0, 1, 0, 1]];
                        var _r410_t0 = r410_diamondParts;
                        var _r410_t1 = _r410_t0.length;
                        var _r410_t2 = 0;
                        var _r410_t4 = _r410_t2 < _r410_t1;
                        while (_r410_t4) {
                            _r410_t5 = (_r410_t3 = _r410_t0[_r410_t2], r410_u = _r410_t3[0], r410_LT = _r410_t3[1], r410_LB = _r410_t3[2], r410_RT = _r410_t3[3], r410_RB = _r410_t3[4], r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(r410_u)), r319_MangleUnicode(r410_u), new r313_xn$Capture$2Lrc8.GlyphProc(function (r415_currentGlyph) {
                                var _r415_t0, _r415_t1;
                                r415_currentGlyph.setWidth(r319_Geom.Width);
                                r415_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName("whiteDiamond")), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackDiamond")), r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r420_currentGlyph) {
                                    var _r420_t0, _r420_t1;
                                    if (r410_LT) r420_currentGlyph.include(r319_UpperLeftQuarterMark());
                                    if (r410_LB) r420_currentGlyph.include(r319_LowerLeftQuarterMark());
                                    if (r410_RT) r420_currentGlyph.include(r319_UpperRightQuarterMark());
                                    if (r410_RB) r420_currentGlyph.include(r319_LowerRightQuarterMark());
                                    return void 0;
                                })))));
                                return void 0;
                            })), _r410_t2 = _r410_t2 + 1);
                            _r410_t4 = _r410_t2 < _r410_t1;
                        }
                        return _r410_t5;
                    })();
                    (function () {
                        var r426_u, r426_UP, r426_DN, r426_LH, r426_RH, _r426_t3, _r426_t5;
                        var r426_triangleParts = [[9709, 1, 0, 1, 0], [9710, 1, 0, 0, 1], [10728, 0, 1, 1, 0], [10729, 0, 1, 0, 1]];
                        var _r426_t0 = r426_triangleParts;
                        var _r426_t1 = _r426_t0.length;
                        var _r426_t2 = 0;
                        var _r426_t4 = _r426_t2 < _r426_t1;
                        while (_r426_t4) {
                            _r426_t5 = (_r426_t3 = _r426_t0[_r426_t2], r426_u = _r426_t3[0], r426_UP = _r426_t3[1], r426_DN = _r426_t3[2], r426_LH = _r426_t3[3], r426_RH = _r426_t3[4], r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(r426_u)), r319_MangleUnicode(r426_u), new r313_xn$Capture$2Lrc8.GlyphProc(function (r431_currentGlyph) {
                                var _r431_t0, _r431_t1;
                                r431_currentGlyph.setWidth(r319_Geom.Width);
                                r431_currentGlyph.include(r313_union(new r313_xn$Capture$2Lrc8.GlyphProc(function (r435_currentGlyph) {
                                    var _r435_t0, _r435_t1;
                                    if (r426_UP) r435_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteTriangleUp")));
                                    if (r426_DN) r435_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteTriangleDown")));
                                    return void 0;
                                }), r313_intersection(new r313_xn$Capture$2Lrc8.GlyphProc(function (r439_currentGlyph) {
                                    var _r439_t0, _r439_t1;
                                    if (r426_UP) r439_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("blackTriangleUp")));
                                    if (r426_DN) r439_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("blackTriangleDown")));
                                    return void 0;
                                }), new r313_xn$Capture$2Lrc8.GlyphProc(function (r443_currentGlyph) {
                                    var _r443_t0, _r443_t1;
                                    if (r426_LH) r443_currentGlyph.include(r319_LeftHalfMask());
                                    if (r426_RH) r443_currentGlyph.include(r319_RightHalfMask());
                                    return void 0;
                                }))));
                                return void 0;
                            })), _r426_t2 = _r426_t2 + 1);
                            _r426_t4 = _r426_t2 < _r426_t1;
                        }
                        return _r426_t5;
                    })();
                    (function () {
                        var r447_u, r447_lh, r447_rh, r447_bord, _r447_t3, _r447_t5;
                        var r447_starParts = [[11240, 1, 0, 0], [11241, 0, 1, 0], [11242, 1, 0, 1], [11243, 0, 1, 1]];
                        var _r447_t0 = r447_starParts;
                        var _r447_t1 = _r447_t0.length;
                        var _r447_t2 = 0;
                        var _r447_t4 = _r447_t2 < _r447_t1;
                        while (_r447_t4) {
                            _r447_t5 = (_r447_t3 = _r447_t0[_r447_t2], r447_u = _r447_t3[0], r447_lh = _r447_t3[1], r447_rh = _r447_t3[2], r447_bord = _r447_t3[3], r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(r447_u)), r319_MangleUnicode(r447_u), new r313_xn$Capture$2Lrc8.GlyphProc(function (r451_currentGlyph) {
                                var _r451_t0, _r451_t1;
                                r451_currentGlyph.setWidth(r319_Geom.Width);
                                if (r447_bord) r451_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteStar")));
                                if (r447_lh) r451_currentGlyph.include(r313_intersection(r319_LeftHalfMask(), r319_xn$referglyph$1aao(r319_MangleName("blackStar"))));
                                if (r447_rh) r451_currentGlyph.include(r313_intersection(r319_RightHalfMask(), r319_xn$referglyph$1aao(r319_MangleName("blackStar"))));
                                return void 0;
                            })), _r447_t2 = _r447_t2 + 1);
                            _r447_t4 = _r447_t2 < _r447_t1;
                        }
                        return _r447_t5;
                    })();
                    (function () {
                        var r457_u, r457_frame, r457_T, r457_L, r457_B, r457_R, _r457_t3, _r457_t5;
                        var r457_quarterLineParts = [[9712, "whiteSquare", 1, 1, 0, 0], [9713, "whiteSquare", 0, 1, 1, 0], [9714, "whiteSquare", 0, 0, 1, 1], [9715, "whiteSquare", 1, 0, 0, 1], [9716, "whiteCircle", 1, 1, 0, 0], [9717, "whiteCircle", 0, 1, 1, 0], [9718, "whiteCircle", 0, 0, 1, 1], [9719, "whiteCircle", 1, 0, 0, 1], [127406, "whiteCircle", 0, 1, 1, 1], [129018, "whiteSquare", 0, 1, 1, 1], [129019, "whiteSquare", 1, 1, 0, 1], [129020, "whiteSquare", 1, 1, 1, 1]];
                        var _r457_t0 = r457_quarterLineParts;
                        var _r457_t1 = _r457_t0.length;
                        var _r457_t2 = 0;
                        var _r457_t4 = _r457_t2 < _r457_t1;
                        while (_r457_t4) {
                            _r457_t5 = (_r457_t3 = _r457_t0[_r457_t2], r457_u = _r457_t3[0], r457_frame = _r457_t3[1], r457_T = _r457_t3[2], r457_L = _r457_t3[3], r457_B = _r457_t3[4], r457_R = _r457_t3[5], r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(r457_u)), r319_MangleUnicode(r457_u), new r313_xn$Capture$2Lrc8.GlyphProc(function (r461_currentGlyph) {
                                var _r461_t0, _r461_t1;
                                var r461_hh = r313_HSwToV(0.5 * r313_GeometryStroke);
                                var r461_hv = r313_GeometryStroke / 2;
                                var r461_s = r313_GeometryStroke;
                                r461_currentGlyph.setWidth(r319_Geom.Width);
                                r461_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName(r457_frame)), r457_L ? r319_HBar.m(r319_Geom.MidX - r319_Geom.Size + r461_hh, r319_Geom.MidX + r461_hh, r319_Geom.MidY, r461_s) : r319_xn$noshape$3cah(), r457_R ? r319_HBar.m(r319_Geom.MidX + r319_Geom.Size - r461_hh, r319_Geom.MidX - r461_hh, r319_Geom.MidY, r461_s) : r319_xn$noshape$3cah(), r457_T ? r319_VBar.m(r319_Geom.MidX, r319_Geom.MidY + r319_Geom.Size - r461_hv, r319_Geom.MidY - r461_hv, r461_s) : r319_xn$noshape$3cah(), r457_B ? r319_VBar.m(r319_Geom.MidX, r319_Geom.MidY - r319_Geom.Size + r461_hv, r319_Geom.MidY + r461_hv, r461_s) : r319_xn$noshape$3cah()));
                                return void 0;
                            })), _r457_t2 = _r457_t2 + 1);
                            _r457_t4 = _r457_t2 < _r457_t1;
                        }
                        return _r457_t5;
                    })();
                    (function () {
                        var r465_u, r465_th, r465_bh, _r465_t3, _r465_t5;
                        var r465_arrowHeadParts = [[10146, 0, 1], [10147, 1, 0]];
                        var _r465_t0 = r465_arrowHeadParts;
                        var _r465_t1 = _r465_t0.length;
                        var _r465_t2 = 0;
                        var _r465_t4 = _r465_t2 < _r465_t1;
                        while (_r465_t4) {
                            _r465_t5 = (_r465_t3 = _r465_t0[_r465_t2], r465_u = _r465_t3[0], r465_th = _r465_t3[1], r465_bh = _r465_t3[2], r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(r465_u)), r319_MangleUnicode(r465_u), new r313_xn$Capture$2Lrc8.GlyphProc(function (r469_currentGlyph) {
                                var _r469_t0, _r469_t1;
                                r469_currentGlyph.setWidth(r319_Geom.Width);
                                r469_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteArrowHeadRight")));
                                if (r465_th) r469_currentGlyph.include(r313_intersection(r319_UpperHalfMask(), r319_xn$referglyph$1aao(r319_MangleName("blackArrowHeadRight"))));
                                if (r465_bh) r469_currentGlyph.include(r313_intersection(r319_LowerHalfMask(), r319_xn$referglyph$1aao(r319_MangleName("blackArrowHeadRight"))));
                                return void 0;
                            })), _r465_t2 = _r465_t2 + 1);
                            _r465_t4 = _r465_t2 < _r465_t1;
                        }
                        return _r465_t5;
                    })();
                    (function () {
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("blackDiamondMinusWhiteX"), r319_MangleUnicode(10070), new r313_xn$Capture$2Lrc8.GlyphProc(function (r478_currentGlyph) {
                            var _r478_t0, _r478_t1;
                            r478_currentGlyph.setWidth(r319_Geom.Width);
                            var r478_gap = Math.max(0.2 * r319_Geom.Size, r313_UnicodeWeightGrade(400, r319_Geom.Scalar, r313_GeometryStroke));
                            r478_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("blackDiamond")), r313_dispiro(r313_flat(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY - r319_Geom.Size, r313_widths.center(r478_gap)), r313_curl(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size)), r313_dispiro(r313_flat(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY - r319_Geom.Size, r313_widths.center(r478_gap)), r313_curl(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size))));
                            return void 0;
                        }));
                    })();
                    (function () {
                        r319_alias(r319_MangleName("newMoon"), r319_MangleUnicode(127761), r319_MangleName("blackCircle"));
                        r319_alias(r319_MangleName("firstQuarterMoon"), r319_MangleUnicode(127763), r319_MangleName(r319_NameUni(9680)));
                        r319_alias(r319_MangleName("fullMoon"), r319_MangleUnicode(127765), r319_MangleName("whiteCircle"));
                        r319_alias(r319_MangleName("lastQuarterMoon"), r319_MangleUnicode(127767), r319_MangleName(r319_NameUni(9681)));
                        var r482_WaxingMoonMask = function () {
                            var _r483_t0, _r483_t1;
                            return r313_union(r319_MaskLeft(r319_Geom.MidX), new r313_xn$Capture$2Lrc8.GlyphProc(function (r485_currentGlyph) {
                                var _r485_t0, _r485_t1;
                                r485_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("blackCircleO")), true, true);
                                r485_currentGlyph.include(r319_Ungizmo());
                                r485_currentGlyph.include(r319_ScaleAround(r319_Geom.MidX, r319_Geom.MidY, 0.625, 1 - 0.5 * r313_GeometryStroke / r319_Geom.Size));
                                r485_currentGlyph.include(r313_Translate(-r313_HSwToV(r313_GeometryStroke), 0));
                                r485_currentGlyph.include(r319_Regizmo());
                                return void 0;
                            }));
                        };
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("waxingCrescentMoon"), r319_MangleUnicode(127762), new r313_xn$Capture$2Lrc8.GlyphProc(function (r493_currentGlyph) {
                            var _r493_t0, _r493_t1;
                            r493_currentGlyph.setWidth(r319_Geom.Width);
                            r493_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")));
                            r493_currentGlyph.include(r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackCircleO")), r482_WaxingMoonMask()));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("waxingGibbousMoon"), r319_MangleUnicode(127764), new r313_xn$Capture$2Lrc8.GlyphProc(function (r499_currentGlyph) {
                            var _r499_t0, _r499_t1;
                            r499_currentGlyph.setWidth(r319_Geom.Width);
                            r499_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")));
                            r499_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("blackCircleO")), new r313_xn$Capture$2Lrc8.GlyphProc(function (r504_currentGlyph) {
                                var _r504_t0, _r504_t1;
                                r504_currentGlyph.include(r482_WaxingMoonMask(), true, true);
                                r504_currentGlyph.include(r319_FlipAround(r319_Geom.MidX, r319_Geom.MidY));
                                return void 0;
                            })));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("waningGibbousMoon"), r319_MangleUnicode(127766), new r313_xn$Capture$2Lrc8.GlyphProc(function (r509_currentGlyph) {
                            var _r509_t0, _r509_t1;
                            r509_currentGlyph.setWidth(r319_Geom.Width);
                            r509_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")));
                            r509_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("blackCircleO")), r482_WaxingMoonMask()));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("waningCrescentMoon"), r319_MangleUnicode(127768), new r313_xn$Capture$2Lrc8.GlyphProc(function (r515_currentGlyph) {
                            var _r515_t0, _r515_t1;
                            r515_currentGlyph.setWidth(r319_Geom.Width);
                            r515_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")));
                            r515_currentGlyph.include(r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackCircleO")), new r313_xn$Capture$2Lrc8.GlyphProc(function (r520_currentGlyph) {
                                var _r520_t0, _r520_t1;
                                r520_currentGlyph.include(r482_WaxingMoonMask(), true, true);
                                r520_currentGlyph.include(r319_FlipAround(r319_Geom.MidX, r319_Geom.MidY));
                                return void 0;
                            })));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r524_yOffset = r319_Geom.Size * -0.5;
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("arc"), r319_MangleUnicode(8978), new r313_xn$Capture$2Lrc8.GlyphProc(function (r527_currentGlyph) {
                            var _r527_t0, _r527_t1;
                            r527_currentGlyph.setWidth(r319_Geom.Width);
                            r527_currentGlyph.include(r319_xn$withtransform$5sIl(r313_ApparentTranslate(0, r524_yOffset), r313_intersection(r319_MaskAbove(r319_Geom.MidY), r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("segment"), r319_MangleUnicode(8979), new r313_xn$Capture$2Lrc8.GlyphProc(function (r532_currentGlyph) {
                            var _r532_t0, _r532_t1;
                            r532_currentGlyph.setWidth(r319_Geom.Width);
                            r532_currentGlyph.include(r319_xn$withtransform$5sIl(r313_ApparentTranslate(0, r524_yOffset), r313_intersection(r319_MaskAbove(r319_Geom.MidY), r313_union(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackCircle")), r319_HBar.b(r319_Geom.Left, r319_Geom.Right, r319_Geom.MidY, r313_GeometryStroke))))));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("sector"), r319_MangleUnicode(8980), new r313_xn$Capture$2Lrc8.GlyphProc(function (r537_currentGlyph) {
                            var _r537_t0, _r537_t1;
                            r537_currentGlyph.setWidth(r319_Geom.Width);
                            r537_currentGlyph.include(r319_xn$withtransform$5sIl(r313_ApparentTranslate(0, r524_yOffset), r313_intersection(r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX, r319_Geom.MidY), r313_corner(r319_Geom.Right, r319_Geom.Top), r313_corner(r319_Geom.Left, r319_Geom.Top)), r313_union(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackCircle")), r313_union(r313_dispiro(r313_widths.lhs(r313_GeometryStroke), r313_corner(r319_Geom.MidX, r319_Geom.MidY), r313_corner(r319_Geom.Right, r319_Geom.Top)), r313_dispiro(r313_widths.rhs(r313_GeometryStroke), r313_corner(r319_Geom.MidX, r319_Geom.MidY), r313_corner(r319_Geom.Left, r319_Geom.Top))))))));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var _r541_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
                        var r541_TrigArrowShape = _r541_t0.TrigArrowShape;
                        var r541_fineGeometryStroke = r313_AdviceStroke2(4, 4, r319_Geom.Size);
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("positionIndicator"), r319_MangleUnicode(8982), new r313_xn$Capture$2Lrc8.GlyphProc(function (r545_currentGlyph) {
                            var _r545_t0, _r545_t1;
                            r545_currentGlyph.setWidth(r319_Geom.Width);
                            r545_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteMediumCircle")));
                            r545_currentGlyph.include(r313_difference(r313_union(r319_HBar.m(r319_Geom.Left, r319_Geom.Right, r319_Geom.MidY, r313_GeometryStroke), r319_VBar.m(r319_Geom.MidX, r319_Geom.Bot, r319_Geom.Top, r313_GeometryStroke)), r319_xn$referglyph$1aao(r319_MangleName("blackMediumCircle"))));
                            r545_currentGlyph.include(r313_intersection(r313_union(r319_HBar.m(r319_Geom.Left, r319_Geom.Right, r319_Geom.MidY, r541_fineGeometryStroke), r319_VBar.m(r319_Geom.MidX, r319_Geom.Bot, r319_Geom.Top, r541_fineGeometryStroke)), r319_xn$referglyph$1aao(r319_MangleName("blackMediumCircle"))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("positionIndicatorSquare"), r319_MangleUnicode(11216), new r313_xn$Capture$2Lrc8.GlyphProc(function (r552_currentGlyph) {
                            var _r552_t0, _r552_t1;
                            r552_currentGlyph.setWidth(r319_Geom.Width);
                            r552_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteMediumSquare")));
                            r552_currentGlyph.include(r313_difference(r313_union(r319_HBar.m(r319_Geom.Left, r319_Geom.Right, r319_Geom.MidY, r313_GeometryStroke), r319_VBar.m(r319_Geom.MidX, r319_Geom.Bot, r319_Geom.Top, r313_GeometryStroke)), r319_xn$referglyph$1aao(r319_MangleName("blackMediumSquare"))));
                            r552_currentGlyph.include(r313_intersection(r313_union(r319_HBar.m(r319_Geom.Left, r319_Geom.Right, r319_Geom.MidY, r541_fineGeometryStroke), r319_VBar.m(r319_Geom.MidX, r319_Geom.Bot, r319_Geom.Top, r541_fineGeometryStroke)), r319_xn$referglyph$1aao(r319_MangleName("blackMediumSquare"))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("cylindricity"), r319_MangleUnicode(9005), new r313_xn$Capture$2Lrc8.GlyphProc(function (r559_currentGlyph) {
                            var _r559_t0, _r559_t1;
                            r559_currentGlyph.setWidth(r319_Geom.Width);
                            var r559_radius = r319_Geom.Size * r319_Size.Medium.size;
                            var r559_x1 = r319_Geom.Left;
                            var r559_y1 = r319_Geom.Bot + 0.15 * r313_GeometryStroke;
                            var r559_y2 = r319_Geom.Top;
                            var r559_dist = Math.hypot(r319_Geom.MidX - r559_x1, r319_Geom.MidY - r559_y1);
                            var r559_tan1 = r559_radius / Math.sqrt(Math.pow(r559_dist, 2) - Math.pow(r559_radius, 2));
                            var r559_tan2 = (r319_Geom.MidY - r559_y1) / (r319_Geom.MidX - r559_x1);
                            var r559_tan3 = (r559_tan1 + r559_tan2) / (1 - r559_tan1 * r559_tan2);
                            var r559_x2 = r559_x1 + (r559_y2 - r559_y1) / r559_tan3;
                            r559_currentGlyph.include(r313_difference(r313_union(r313_dispiro(r313_widths.rhs(r313_GeometryStroke), r313_flat(r559_x1, r559_y1), r313_curl(r559_x2, r559_y2)), r313_dispiro(r313_widths.rhs(r313_GeometryStroke), r313_flat(r1_mix(r559_x1, r319_Geom.MidX, 2), r1_mix(r559_y1, r319_Geom.MidY, 2)), r313_curl(r1_mix(r559_x2, r319_Geom.MidX, 2), r1_mix(r559_y2, r319_Geom.MidY, 2)))), r319_xn$referglyph$1aao(r319_MangleName("blackMediumCircle"))));
                            r559_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteMediumCircle")));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("allRoundProfile"), r319_MangleUnicode(9006), new r313_xn$Capture$2Lrc8.GlyphProc(function (r567_currentGlyph) {
                            var _r567_t0, _r567_t1;
                            r567_currentGlyph.setWidth(r319_Geom.Width);
                            r567_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteMediumCircle")));
                            var r567_mx = r319_Geom.MidX - r319_Geom.Size * 0.5;
                            var r567_my = r319_Geom.MidY - r319_Geom.Size * 0.5;
                            r567_currentGlyph.include(r313_dispiro(r313_xn$disablecontrast$3qIs(), r313_flat(r319_Geom.Right, r319_Geom.MidY, r313_widths.center.heading(r313_GeometryStroke, r313_Leftward)), r319_xn$sharpcorner$1aao(r319_Geom.MidX, r319_Geom.MidY, new r313_xn$NamedParameterPair$2Lrc9b("contrast", 1)), r313_curl(r567_mx, r567_my, r313_widths.center(r313_GeometryStroke))));
                            r567_currentGlyph.include(r541_TrigArrowShape(r567_mx, r567_my, r319_Geom.Left, r319_Geom.Bot, r319_Geom.Size * 0.375 / Math.SQRT1_2, r313_GeometryStroke / 2));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("dimensionOrigin"), r319_MangleUnicode(9009), new r313_xn$Capture$2Lrc8.GlyphProc(function (r575_currentGlyph) {
                            var _r575_t0, _r575_t1;
                            r575_currentGlyph.setWidth(r319_Geom.Width);
                            r575_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteMediumCircle")));
                            var r575_offset = r319_Geom.Size * (1 - r319_Size.Medium.size);
                            r575_currentGlyph.include(r313_difference(r313_union(r541_TrigArrowShape(r319_Geom.MidX, r319_Geom.MidY, r319_Geom.Right + r575_offset, r319_Geom.MidY, r319_Geom.Size * 0.375 / Math.SQRT1_2, r313_GeometryStroke / 2), r319_VBar.m(r319_Geom.MidX, r319_Geom.Bot, r319_Geom.Top, r313_GeometryStroke)), r319_xn$referglyph$1aao(r319_MangleName("blackMediumCircle"))));
                            r575_currentGlyph.include(r313_intersection(r313_union(r319_HBar.m(r319_Geom.MidX, r319_Geom.Right, r319_Geom.MidY, r541_fineGeometryStroke), r319_VBar.m(r319_Geom.MidX, r319_Geom.Bot, r319_Geom.Top, r541_fineGeometryStroke)), r319_xn$referglyph$1aao(r319_MangleName("blackMediumCircle"))));
                            r575_currentGlyph.include(r313_Translate(-r575_offset, 0));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("uni2389"), r319_MangleUnicode(9097), new r313_xn$Capture$2Lrc8.GlyphProc(function (r583_currentGlyph) {
                            var _r583_t0, _r583_t1;
                            var r583_shiftUp = r313_ApparentTranslate(0, Math.max(Math.SQRT1_2 * r319_Size.MediumSmall.sw, r319_Geom.Size * (1 - r319_Size.MediumSmall.size)));
                            r583_currentGlyph.setWidth(r319_Geom.Width);
                            r583_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")));
                            r583_currentGlyph.include(r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackCircleO")), r313_union(r313_difference(r319_HBar.m(0, r319_Geom.Width, r319_Geom.MidY, r313_GeometryStroke), r319_xn$withtransform$5sIl(r313_ApparentTranslate(0, 0.01), r319_xn$withtransform$5sIl(r583_shiftUp, r319_xn$referglyph$1aao(r319_MangleName("blackMediumEqualDiamond"))))), r313_intersection(r319_MaskBelow(r319_Geom.MidY + r313_GeometryStroke / 2), r319_xn$withtransform$5sIl(r583_shiftUp, r319_xn$referglyph$1aao(r319_MangleName("whiteMediumEqualDiamond")))))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("uni238A"), r319_MangleUnicode(9098), new r313_xn$Capture$2Lrc8.GlyphProc(function (r589_currentGlyph) {
                            var _r589_t0, _r589_t1;
                            r589_currentGlyph.setWidth(r319_Geom.Width);
                            r589_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")));
                            r589_currentGlyph.include(r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackCircleO")), r319_xn$referglyph$1aao(r319_MangleName("whiteEqualTriangleDown"))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("enterSymbol"), r319_MangleUnicode(9094), new r313_xn$Capture$2Lrc8.GlyphProc(function (r595_currentGlyph) {
                            var _r595_t0, _r595_t1;
                            r595_currentGlyph.setWidth(r319_Geom.Width);
                            r595_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("whiteDiamond")), r313_intersection(r319_MaskLeftLine(r319_Geom.MidX, r319_Geom.MidY - r319_Geom.Size / 3, r319_Geom.MidX, r319_Geom.MidY + r319_Geom.Size / 3))));
                            r595_currentGlyph.include(r319_HBar.m(r319_Geom.Left, r319_Geom.MidX, r319_Geom.MidY, r313_GeometryStroke));
                            var r595_size = r319_Geom.Size * 0.375 / Math.SQRT1_2;
                            r595_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX, r319_Geom.MidY + r595_size), r313_corner(r319_Geom.MidX + r595_size, r319_Geom.MidY), r313_corner(r319_Geom.MidX, r319_Geom.MidY - r595_size)));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("uni238B"), r319_MangleUnicode(9099), new r313_xn$Capture$2Lrc8.GlyphProc(function (r602_currentGlyph) {
                            var _r602_t0, _r602_t1;
                            r602_currentGlyph.setWidth(r319_Geom.Width);
                            r602_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")), r313_intersection(r319_MaskAbove(r319_Geom.MidY), r319_MaskLeft(r319_Geom.MidX))));
                            r602_currentGlyph.include(r313_intersection(r319_MaskBelow(r319_Geom.MidY + r319_Geom.Size), r319_MaskRight(r319_Geom.MidX - r319_Geom.Size), r313_dispiro(r313_flat(r319_Geom.MidX, r319_Geom.MidY, r313_widths.center(r313_GeometryStroke)), r313_curl(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size))));
                            r602_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size), r313_corner(r319_Geom.MidX - 0.375 * r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size), r313_corner(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY + 0.375 * r319_Geom.Size)));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("counterbore"), r319_MangleUnicode(9012), new r313_xn$Capture$2Lrc8.GlyphProc(function (r609_currentGlyph) {
                            var _r609_t0, _r609_t1;
                            r609_currentGlyph.setWidth(r319_Geom.Width);
                            r609_currentGlyph.include(r313_intersection(r319_LowerHalfMask(), r319_xn$referglyph$1aao(r319_MangleName("whiteSquare"))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("countersink"), r319_MangleUnicode(9013), new r313_xn$Capture$2Lrc8.GlyphProc(function (r614_currentGlyph) {
                            var _r614_t0, _r614_t1;
                            r614_currentGlyph.setWidth(r319_Geom.Width);
                            r614_currentGlyph.include(r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackDiamond")), r313_union(r319_ExtLineLhs(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY, r319_Geom.MidX, r319_Geom.MidY - r319_Geom.Size, r313_OperatorStroke, 4), r319_ExtLineLhs(r319_Geom.MidX, r319_Geom.MidY - r319_Geom.Size, r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY, r313_OperatorStroke, 4))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("eightPointedCircledOpenCenterStar"), r319_MangleUnicode(10050), new r313_xn$Capture$2Lrc8.GlyphProc(function (r619_currentGlyph) {
                            var _r619_t0, _r619_t1;
                            r619_currentGlyph.setWidth(r319_Geom.Width);
                            r619_currentGlyph.include(r313_union(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("blackCircle")), r319_xn$referglyph$1aao(r319_MangleName("eightPointedStarMask"))), r319_xn$referglyph$1aao(r319_MangleName("whiteSlightlySmallCircle"))));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("uni1F7DA"), r319_MangleUnicode(128986), new r313_xn$Capture$2Lrc8.GlyphProc(function (r624_currentGlyph) {
                            var _r624_t0, _r624_t1;
                            r624_currentGlyph.setWidth(r319_Geom.Width);
                            r624_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("blackCircle")), r313_difference(r319_VBar.m(r319_Geom.MidX, r319_Geom.MidY + r319_Geom.Size - r313_GeometryStroke / 2, r319_Geom.MidY - r319_Geom.Size + r313_GeometryStroke / 2, r313_GeometryStroke), r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")))));
                            return void 0;
                        }));
                    })();
                    return (function () {
                        var _r628_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Punctuation-Bar"].resolve();
                        var r628_BarShape = _r628_t0.BarShape;
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("compositionSymbol"), r319_MangleUnicode(9092), new r313_xn$Capture$2Lrc8.GlyphProc(function (r632_currentGlyph) {
                            var _r632_t0, _r632_t1;
                            r632_currentGlyph.setWidth(r319_Geom.Width);
                            var r632_offsetX = r319_Geom.Size * r319_Size.Medium.size / 2 - r313_GeometryStroke / 4;
                            r632_currentGlyph.include(r313_union(r319_xn$withtransform$5sIl(r313_Translate(r632_offsetX, 0), r319_xn$referglyph$1aao(r319_MangleName("whiteMediumCircle"))), r319_xn$withtransform$5sIl(r313_Translate(-r632_offsetX, 0), r319_xn$referglyph$1aao(r319_MangleName("whiteMediumSquare")))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("whiteSquareVertLine"), r319_MangleUnicode(9093), new r313_xn$Capture$2Lrc8.GlyphProc(function (r637_currentGlyph) {
                            var _r637_t0, _r637_t1;
                            r637_currentGlyph.setWidth(r319_Geom.Width);
                            r637_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteSquare")));
                            r637_currentGlyph.include(r628_BarShape(r319_Geom.MidX, r313_ParenTop, r313_ParenBot));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("whiteSquareContainingWhiteDiamond"), r319_MangleUnicode(9931), new r313_xn$Capture$2Lrc8.GlyphProc(function (r643_currentGlyph) {
                            var _r643_t0, _r643_t1;
                            r643_currentGlyph.setWidth(r319_Geom.Width);
                            r643_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName("whiteSquare")), r319_xn$referglyph$1aao(r319_MangleName("whiteDiamond"))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("squaredSaltire"), r319_MangleUnicode(9949), new r313_xn$Capture$2Lrc8.GlyphProc(function (r648_currentGlyph) {
                            var _r648_t0, _r648_t1;
                            r648_currentGlyph.setWidth(r319_Geom.Width);
                            r648_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName("whiteSquare")), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackSquare")), r313_union(r313_dispiro(r313_widths.center(r313_GeometryStroke), r313_flat(r319_Geom.Left, r319_Geom.Top), r313_curl(r319_Geom.Right, r319_Geom.Bot)), r313_dispiro(r313_widths.center(r313_GeometryStroke), r313_flat(r319_Geom.Left, r319_Geom.Bot), r313_curl(r319_Geom.Right, r319_Geom.Top))))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("uni26DE"), r319_MangleUnicode(9950), new r313_xn$Capture$2Lrc8.GlyphProc(function (r653_currentGlyph) {
                            var _r653_t0, _r653_t1;
                            r653_currentGlyph.setWidth(r319_Geom.Width);
                            r653_currentGlyph.include(r313_union(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("blackSquare")), r319_xn$referglyph$1aao(r319_MangleName("blackCircle"))), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackSquare")), r313_dispiro(r313_widths.center(r313_GeometryStroke), r313_flat(r319_Geom.Left, r319_Geom.Top), r313_curl(r319_Geom.Right, r319_Geom.Bot)))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("whiteLozengeBar"), r319_MangleUnicode(10208), new r313_xn$Capture$2Lrc8.GlyphProc(function (r658_currentGlyph) {
                            var _r658_t0, _r658_t1;
                            r658_currentGlyph.setWidth(r319_Geom.Width);
                            r658_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName("whiteLozenge")), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackLozenge")), r319_HBar.m(0, r316_MosaicWidth, r319_Geom.MidY, r313_GeometryStroke))));
                            return void 0;
                        }));
                        var r628_triangleSideRadius = r319_Geom.Size * 2.1 / Math.sqrt(3);
                        r319_xn$derivemultipartglyphs$7Hrq65(r319_MangleName("whiteTriangleUpDotAbove"), r319_MangleUnicode(10698), [r319_MangleName("whiteTriangleUp"), "dotAbove"], function (r661_srcs, r661_gr) {
                            var _r661_t0, _r661_t1;
                            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r663_currentGlyph) {
                                var _r663_t1, _r663_t2;
                                var _r663_t0 = r661_srcs;
                                var r663_base = _r663_t0[0];
                                var r663_mark = _r663_t0[1];
                                r663_currentGlyph.include(r319_xn$referglyph$1aao(r663_mark));
                                r663_currentGlyph.include(r313_Translate(r313_Middle + r319_Geom.MidX, r319_Geom.Top - r313_XH));
                                r663_currentGlyph.include(r319_xn$referglyph$1aao(r663_base), r313_AS_BASE, r313_ALSO_METRICS);
                                return void 0;
                            });
                        });
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("whiteTriangleUpBarBelow"), r319_MangleUnicode(10699), new r313_xn$Capture$2Lrc8.GlyphProc(function (r669_currentGlyph) {
                            var _r669_t0, _r669_t1;
                            r669_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteTriangleUp")), r313_AS_BASE, r313_ALSO_METRICS);
                            r669_currentGlyph.include(r319_HBar.t(r319_Geom.MidX - r628_triangleSideRadius, r319_Geom.MidX + r628_triangleSideRadius, r319_Geom.Bot - r313_AccentClearance, r313_GeometryStroke));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("whiteTriangleUpSerifBottom"), r319_MangleUnicode(10701), new r313_xn$Capture$2Lrc8.GlyphProc(function (r674_currentGlyph) {
                            var _r674_t0, _r674_t1;
                            var r674_jut = r1_clamp(0, r319_MosaicMiddle - r628_triangleSideRadius, r313_SideJut * r316_MosaicWidthScalar);
                            r674_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteTriangleUp")), r313_AS_BASE, r313_ALSO_METRICS);
                            r674_currentGlyph.include(r319_HSerif.lb(r319_Geom.MidX - r628_triangleSideRadius, r319_Geom.Bot, r674_jut, r313_GeometryStroke));
                            r674_currentGlyph.include(r319_HSerif.rb(r319_Geom.MidX + r628_triangleSideRadius, r319_Geom.Bot, r674_jut, r313_GeometryStroke));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("marriageSymbol"), r319_MangleUnicode(9901), new r313_xn$Capture$2Lrc8.GlyphProc(function (r680_currentGlyph) {
                            var _r680_t0, _r680_t1;
                            r680_currentGlyph.setWidth(r319_Geom.Width);
                            var r680_radius = r319_Geom.Size * r319_Size.SlightlySmall.size;
                            var r680_stroke = r319_Size.SlightlySmall.sw;
                            var r680_offsetX = r680_radius / 2 - r680_stroke / 4;
                            r680_currentGlyph.include(r313_union(r319_xn$withtransform$5sIl(r313_Translate(+r680_offsetX, 0), r319_xn$referglyph$1aao(r319_MangleName("whiteSlightlySmallCircle"))), r319_xn$withtransform$5sIl(r313_Translate(-r680_offsetX, 0), r319_xn$referglyph$1aao(r319_MangleName("whiteSlightlySmallCircle")))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("divorceSymbol"), r319_MangleUnicode(9902), new r313_xn$Capture$2Lrc8.GlyphProc(function (r685_currentGlyph) {
                            var _r685_t0, _r685_t1;
                            r685_currentGlyph.setWidth(r319_Geom.Width);
                            var r685_offsetX = r319_Geom.Size * r319_Size.SlightlySmall.size + r313_HSwToV(r319_Size.SlightlySmall.sw / 2);
                            var r685_offsetY = r319_Geom.Size * r319_Size.MediumSmall.size;
                            r685_currentGlyph.include(r313_union(r319_xn$withtransform$5sIl(r313_Translate(+r685_offsetX, 0), r319_xn$referglyph$1aao(r319_MangleName("whiteSlightlySmallCircle"))), r319_xn$withtransform$5sIl(r313_Translate(-r685_offsetX, 0), r319_xn$referglyph$1aao(r319_MangleName("whiteSlightlySmallCircle"))), r319_VBar.m(r319_Geom.MidX, r319_Geom.MidY - r685_offsetY, r319_Geom.MidY + r685_offsetY, r319_Size.SlightlySmall.sw)));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("unmarriedPartnershipSymbol"), r319_MangleUnicode(9903), new r313_xn$Capture$2Lrc8.GlyphProc(function (r690_currentGlyph) {
                            var _r690_t0, _r690_t1;
                            r690_currentGlyph.setWidth(r319_Geom.Width);
                            var r690_offsetX = r316_MosaicWidth / 4;
                            var r690_offsetBar = r690_offsetX - r319_Geom.Size * r319_Size.SlightlySmall.size + r313_HSwToV(r319_Size.SlightlySmall.sw / 2);
                            r690_currentGlyph.include(r313_union(r319_xn$withtransform$5sIl(r313_Translate(+r690_offsetX, 0), r319_xn$referglyph$1aao(r319_MangleName("whiteSlightlySmallCircle"))), r319_xn$withtransform$5sIl(r313_Translate(-r690_offsetX, 0), r319_xn$referglyph$1aao(r319_MangleName("whiteSlightlySmallCircle"))), r319_HBar.m(r319_Geom.MidX - r690_offsetBar, r319_Geom.MidX + r690_offsetBar, r319_Geom.MidY, r319_Size.SlightlySmall.sw)));
                            return void 0;
                        }));
                    })();
                })();
                _r316_t5 = _r316_t2 = _r316_t2 + 1;
                _r316_t4 = _r316_t2 < _r316_t1;
            }
            return _r316_t5;
        })();
    });
    return void 0;
});


