"use strict";
import * as _s0_t0 from "typo-geom";
import * as _s0_t1 from "@iosevka/geometry/curve-util";
import * as _s0_t2 from "@iosevka/util";
import * as _s0_t3 from "../meta/aesthetics.mjs";
import * as _s0_t4 from "@iosevka/glyph/relation";
import * as _s0_t5 from "@iosevka/geometry/box";
import * as _s0_t6 from "@iosevka/geometry/point";
var _s0_t7;
export {_s0_t7 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Arcs = _r1_t8.Arcs;
var r1_ShapeConv = _r1_t8.ShapeConv;
var _r1_t9 = _s0_t1;
var r1_OffsetCurve = _r1_t9.OffsetCurve;
var r1_TaperedOffsetCurve = _r1_t9.TaperedOffsetCurve;
var r1_BezToContoursSink = _r1_t9.BezToContoursSink;
var r1_GEOMETRY_PRECISION = _r1_t9.GEOMETRY_PRECISION;
var _r1_t10 = _s0_t2;
var r1_mix = _r1_t10.mix;
var r1_linreg = _r1_t10.linreg;
var r1_clamp = _r1_t10.clamp;
var r1_fallback = _r1_t10.fallback;
var _r1_t11 = _s0_t3;
var r1_DesignParameters = _r1_t11.DesignParameters;
var _r1_t12 = _s0_t4;
var r1_ScheduleLeaningMark = _r1_t12.ScheduleLeaningMark;
var _r1_t13 = _s0_t5;
var r1_Box = _r1_t13.Box;
var _r1_t14 = _s0_t6;
var r1_Point = _r1_t14.Point;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t7 = r1_apply = function () {
    var r313_block, _r313_t4, _r313_t6;
    var _r313_t3 = this;
    var _r313_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r313_t1 = _r313_t0.length;
    var _r313_t2 = 0;
    var _r313_t5 = _r313_t2 < _r313_t1;
    while (_r313_t5) {
        _r313_t6 = (r313_block = _r313_t0[_r313_t2], r313_block(_r313_t3), _r313_t2 = _r313_t2 + 1);
        _r313_t5 = _r313_t2 < _r313_t1;
    }
    return _r313_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r317_xn$Capture_Ext$2Lrc2b) {
    var _r317_t0, _r317_t1;
    r317_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r317_xn$Capture_Ext$2Lrc2b, "Mark-Above", function (r318_xn$Capture$2Lrc8, r318_xn$ExportCapture$2Lrc4b) {
        var r318_suffix, r318_DrawAt, r318_kdr, _r318_t13, _r318_t16, _r318_t19, _r318_t22, _r318_t25, _r318_t26, _r318_t27, _r318_t28, _r318_tag29, _r318_t30, _r318_tag31, _r318_t32, _r318_tag33, _r318_t34, _r318_tag35, _r318_t36, _r318_tag37, _r318_t38, _r318_tag39, _r318_t40, _r318_tag41, _r318_t42, _r318_tag43;
        var _r318_t0 = r318_xn$Capture$2Lrc8;
        var r318_xn$GlyphSaveSink$2Lrc4b = _r318_t0["$GlyphSaveSink$"];
        var r318_xn$NamedParameterPair$2Lrc9b = _r318_t0["$NamedParameterPair$"];
        var r318_xn$Exec$2Lrc5 = _r318_t0["$Exec$"];
        var r318_para = _r318_t0.para;
        var r318_DivFrame = _r318_t0.DivFrame;
        var _r318_t1 = r318_xn$Capture$2Lrc8.Metrics;
        var r318_UPM = _r318_t1.UPM;
        var r318_Width = _r318_t1.Width;
        var r318_SB = _r318_t1.SB;
        var r318_CAP = _r318_t1.CAP;
        var r318_XH = _r318_t1.XH;
        var r318_Descender = _r318_t1.Descender;
        var r318_SymbolMid = _r318_t1.SymbolMid;
        var r318_Translate = _r318_t1.Translate;
        var r318_ApparentTranslate = _r318_t1.ApparentTranslate;
        var r318_TanSlope = _r318_t1.TanSlope;
        var r318_HVContrast = _r318_t1.HVContrast;
        var r318_HSwToV = _r318_t1.HSwToV;
        var r318_VSwToH = _r318_t1.VSwToH;
        var r318_Upward = _r318_t1.Upward;
        var r318_Downward = _r318_t1.Downward;
        var r318_Rightward = _r318_t1.Rightward;
        var r318_Leftward = _r318_t1.Leftward;
        var r318_O = _r318_t1.O;
        var r318_OX = _r318_t1.OX;
        var r318_ArchDepth = _r318_t1.ArchDepth;
        var r318_AdviceStroke = _r318_t1.AdviceStroke;
        var r318_AdviceStroke2 = _r318_t1.AdviceStroke2;
        var r318_Stroke = _r318_t1.Stroke;
        var r318_HalfStroke = _r318_t1.HalfStroke;
        var r318_QuarterStroke = _r318_t1.QuarterStroke;
        var r318_SquareDotScalar = _r318_t1.SquareDotScalar;
        var r318_AccentStackOffset = _r318_t1.AccentStackOffset;
        var r318_AccentClearance = _r318_t1.AccentClearance;
        var r318_AccentHeight = _r318_t1.AccentHeight;
        var r318_CThin = _r318_t1.CThin;
        var r318_WideWidth1 = _r318_t1.WideWidth1;
        var r318_RightSB = _r318_t1.RightSB;
        var r318_Middle = _r318_t1.Middle;
        var r318_DotRadius = _r318_t1.DotRadius;
        var r318_StrokeWidthBlend = _r318_t1.StrokeWidthBlend;
        var r318_ArchDepthA = _r318_t1.ArchDepthA;
        var r318_ArchDepthB = _r318_t1.ArchDepthB;
        var r318_OperatorStroke = _r318_t1.OperatorStroke;
        var r318_TINY = _r318_t1.TINY;
        var _r318_t2 = r318_xn$Capture$2Lrc8.SpiroFns;
        var r318_g4 = _r318_t2.g4;
        var r318_g2 = _r318_t2.g2;
        var r318_corner = _r318_t2.corner;
        var r318_flat = _r318_t2.flat;
        var r318_curl = _r318_t2.curl;
        var r318_close = _r318_t2.close;
        var r318_end = _r318_t2.end;
        var r318_straight = _r318_t2.straight;
        var r318_widths = _r318_t2.widths;
        var r318_heading = _r318_t2.heading;
        var r318_alsoThru = _r318_t2.alsoThru;
        var r318_alsoThruThem = _r318_t2.alsoThruThem;
        var r318_quadControls = _r318_t2.quadControls;
        var r318_archv = _r318_t2.archv;
        var r318_arcvh = _r318_t2.arcvh;
        var r318_dispiro = _r318_t2.dispiro;
        var r318_xn$spirooutline$1aao = _r318_t2["spiro-outline"];
        var _r318_t3 = r318_xn$Capture$2Lrc8.SpiroFns;
        var r318_xn$decor$0cao = _r318_t3["decor@"];
        var r318_xn$decor$0cao1 = _r318_t3["decor@@"];
        var r318_xn$decor$0cao11 = _r318_t3["decor@@@"];
        var _r318_t4 = r318_xn$Capture$2Lrc8.BooleFns;
        var r318_union = _r318_t4.union;
        var r318_intersection = _r318_t4.intersection;
        var r318_difference = _r318_t4.difference;
        var _r318_t5 = r318_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r318_Rect = _r318_t5.Rect;
        var r318_MaskAbove = _r318_t5.MaskAbove;
        var r318_MaskBelow = _r318_t5.MaskBelow;
        var r318_MaskLeft = _r318_t5.MaskLeft;
        var r318_MaskRight = _r318_t5.MaskRight;
        var r318_Ring = _r318_t5.Ring;
        var r318_DotAt = _r318_t5.DotAt;
        var r318_HBar = _r318_t5.HBar;
        var r318_VBar = _r318_t5.VBar;
        var r318_Arch = _r318_t5.Arch;
        var r318_FlipAround = _r318_t5.FlipAround;
        var r318_ScaleAround = _r318_t5.ScaleAround;
        var r318_ForceUpright = _r318_t5.ForceUpright;
        var r318_xn$withtransform$5sIl = _r318_t5["with-transform"];
        var r318_ExtLineLhs = _r318_t5.ExtLineLhs;
        var r318_DotVariants = _r318_t5.DotVariants;
        var _r318_t6 = r318_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r318_xn$referglyph$1aao = _r318_t6["refer-glyph"];
        var r318_xn$selectvariant$7Hrq = _r318_t6["select-variant"];
        var r318_xn$deriveglyphs$7Hrq = _r318_t6["derive-glyphs"];
        var r318_xn$derivecomposites$7Hrq = _r318_t6["derive-composites"];
        var r318_alias = _r318_t6.alias;
        var r318_turned = _r318_t6.turned;
        var _r318_t7 = r318_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
        var r318_ArrowDims = _r318_t7.ArrowDims;
        var r318_ArrowT = _r318_t7.ArrowT;
        var _r318_t8 = r318_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r318_markExtend = _r318_t8.markExtend;
        var r318_markStroke = _r318_t8.markStroke;
        var r318_markHalfStroke = _r318_t8.markHalfStroke;
        var r318_markStress = _r318_t8.markStress;
        var r318_markFine = _r318_t8.markFine;
        var _r318_t9 = r318_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r318_asciiMarkZoomX = _r318_t9.asciiMarkZoomX;
        var r318_asciiMarkZoomY = _r318_t9.asciiMarkZoomY;
        var _r318_t10 = r318_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r318_markMiddle = _r318_t10.markMiddle;
        var r318_markDotsRadius = _r318_t10.markDotsRadius;
        var r318_dialytikaRadius = _r318_t10.dialytikaRadius;
        r318_xn$ExportCapture$2Lrc4b(function () {
            var _r326_t0, _r326_t1;
            return {
                "aboveMarkTop": r318_aboveMarkTop,
                "aboveMarkBot": r318_aboveMarkBot,
                "aboveMarkMid": r318_aboveMarkMid,
                "aboveMarkStack": r318_aboveMarkStack
            };
        });
        var r318_aboveMarkTop = r318_XH + r318_AccentClearance + r318_AccentHeight;
        var r318_aboveMarkBot = r318_XH + r318_AccentClearance;
        var r318_aboveMarkMid = r1_mix(r318_aboveMarkBot, r318_aboveMarkTop, 0.5);
        var r318_aboveMarkStack = r318_XH + r318_AccentStackOffset;
        var r318_toneAboveBaseline = r318_aboveMarkBot;
        r318_xn$ExportCapture$2Lrc4b(function () {
            var _r328_t0, _r328_t1;
            return {
                "MeasureGlyphBounds": r318_MeasureGlyphBounds,
                "CenterMarkHorizontally": r318_CenterMarkHorizontally,
                "AlignToneMarkAbove": r318_AlignToneMarkAbove
            };
        });
        var r318_MeasureGlyphBounds = function () {
            var _r329_t0, _r329_t1;
            return new r318_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                var r331_contour, r331_arc, r331_i, r331_z, r331_p, _r331_t3, _r331_t4, _r331_t5, _r331_t6, _r331_t7, _r331_t8, _r331_t9;
                var r331_xMin = 2147483647;
                var r331_xMax = 0 - 2147483647;
                var r331_yMin = 2147483647;
                var r331_yMax = 0 - 2147483647;
                var r331_xSum = 0;
                var r331_ySum = 0;
                var r331_n = 0;
                var _r331_t0 = r331_currentGlyph.geometry.toBezArcs();
                var _r331_t1 = _r331_t0.length;
                var _r331_t2 = 0;
                while (_r331_t2 < _r331_t1) {
                    r331_contour = _r331_t0[_r331_t2];
                    _r331_t3 = r331_contour;
                    _r331_t4 = _r331_t3.length;
                    _r331_t5 = 0;
                    while (_r331_t5 < _r331_t4) {
                        r331_arc = _r331_t3[_r331_t5];
                        _r331_t6 = 0;
                        _r331_t7 = 25;
                        r331_i = _r331_t6;
                        while (r331_i < _r331_t7) {
                            r331_z = r331_arc.eval(r331_i / 24);
                            r331_p = r331_currentGlyph.gizmo.unapply(r331_z);
                            if (r331_p.x < r331_xMin) r331_xMin = r331_p.x;
                            if (r331_p.x > r331_xMax) r331_xMax = r331_p.x;
                            if (r331_p.y < r331_yMin) r331_yMin = r331_p.y;
                            if (r331_p.y > r331_yMax) r331_yMax = r331_p.y;
                            r331_xSum = r331_xSum + r331_p.x;
                            r331_ySum = r331_ySum + r331_p.y;
                            r331_n = r331_n + 1;
                            r331_i = r331_i + 1;
                        }
                        _r331_t5 = _r331_t5 + 1;
                    }
                    _r331_t2 = _r331_t2 + 1;
                }
                if (r331_n <= 0) return void 0;
                return {
                    "xMin": 0 + r331_xMin,
                    "xMax": 0 + r331_xMax,
                    "yMin": 0 + r331_yMin,
                    "yMax": 0 + r331_yMax,
                    "xAvg": r331_xSum / r331_n,
                    "yAvg": r331_ySum / r331_n
                };
            });
        };
        var r318_CenterMarkHorizontally = function () {
            var _r335_t0, _r335_t1;
            return new r318_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                var _r337_t0, _r337_t1;
                var r337_b = r337_currentGlyph.include(r318_MeasureGlyphBounds());
                if (!r337_b) return void 0;
                var r337_xShift = r318_markMiddle - r337_b.xAvg;
                if (Math.abs(r337_xShift) > 0.000001) r337_currentGlyph.applyTransform(r318_ApparentTranslate(r337_xShift, 0));
                return void 0;
            });
        };
        var r318_AlignToneMarkAbove = function () {
            var _r339_t0, _r339_t1;
            return new r318_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
                var _r341_t0, _r341_t1;
                r341_currentGlyph.include(r318_CenterMarkHorizontally());
                var r341_b = r341_currentGlyph.include(r318_MeasureGlyphBounds());
                if (!r341_b) return void 0;
                var r341_yShift = r318_toneAboveBaseline - r341_b.yMin;
                if (Math.abs(r341_yShift) > 0.000001) r341_currentGlyph.applyTransform(r318_ApparentTranslate(0, r341_yShift));
                return void 0;
            });
        };
        r318_xn$ExportCapture$2Lrc4b(function () {
            var _r345_t0, _r345_t1;
            return {
                "commaOvershoot": r318_commaOvershoot,
                "commaOvershoot2": r318_commaOvershoot2,
                "commaAboveRadius": r318_commaAboveRadius
            };
        });
        var r318_commaOvershoot = r318_O * r1_linreg(16, 0, 90, -1, r318_markStroke);
        var r318_commaOvershoot2 = r318_O * r1_linreg(16, 1, 90, -1, r318_markStroke);
        var r318_commaAboveRadius = 0.85 * r318_DotRadius * r318_markHalfStroke / r318_HalfStroke;
        r318_xn$ExportCapture$2Lrc4b(function () {
            var _r347_t0, _r347_t1;
            return {
                "StdAnchors": r318_StdAnchors
            };
        });
        var r318_StdAnchors = (function () {
            var r350_impl, r350_narrow, r350_mediumNarrow, r350_medium, r350_mediumWide, r350_wide, r350_extraWide;
            var r350_exports = {};
            r350_exports.impl = r350_impl = function (r358_mk, r358_padding, r358_k, r358_fLeaning) {
                var _r358_t0, _r358_t1;
                return new r318_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
                    var _r360_t0, _r360_t1;
                    if (r358_mk === "above") r360_currentGlyph.setMarkAnchor(r358_mk, r318_markMiddle, r318_XH - r358_padding * r318_AccentHeight, r318_markMiddle, r318_aboveMarkStack + r358_padding * r318_AccentHeight); else r360_currentGlyph.setMarkAnchor(r358_mk, r318_markMiddle, r318_XH - r358_padding * r318_AccentHeight);
                    r360_currentGlyph.setBaseAnchor("aboveBraceL", r318_markMiddle - r358_k * r318_markExtend, r318_aboveMarkMid);
                    r360_currentGlyph.setBaseAnchor("aboveBraceR", r318_markMiddle + r358_k * r318_markExtend, r318_aboveMarkMid);
                    if (r358_fLeaning) r1_ScheduleLeaningMark.set(r360_currentGlyph);
                    return void 0;
                });
            };
            r350_exports.narrow = r350_narrow = function () {
                var _r366_t0, _r366_t1;
                return r350_impl("above", 0, 0, true);
            };
            r350_exports.mediumNarrow = r350_mediumNarrow = function () {
                var _r368_t0, _r368_t1;
                return r350_impl("above", 0, 0.25, true);
            };
            r350_exports.medium = r350_medium = function () {
                var _r370_t0, _r370_t1;
                return r350_impl("above", 0, 0.5, true);
            };
            r350_exports.mediumWide = r350_mediumWide = function () {
                var _r372_t0, _r372_t1;
                return r350_impl("above", 0, 0.75);
            };
            r350_exports.wide = r350_wide = function () {
                var _r374_t0, _r374_t1;
                return r350_impl("above", 0, 1);
            };
            r350_exports.extraWide = r350_extraWide = function () {
                var _r376_t0, _r376_t1;
                return r350_impl("above", 0, 1.5);
            };
            return r350_exports;
        })();
        var _r318_t11 = Object.entries(r318_DotVariants)[Symbol.iterator]();
        var _r318_t12 = void 0;
        while (!(_r318_t12 = _r318_t11.next()).done) {
            _r318_t13 = _r318_t12.value;
            r318_suffix = _r318_t13[0];
            r318_DrawAt = _r318_t13[1][0];
            r318_kdr = _r318_t13[1][1];
            _r318_t13[1];
            (function () {
                r318_xn$GlyphSaveSink$2Lrc4b.save("dotAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                    var _r382_t0, _r382_t1;
                    r382_currentGlyph.setWidth(0);
                    r382_currentGlyph.include(r318_StdAnchors.narrow());
                    r382_currentGlyph.include(r318_DrawAt(r318_markMiddle, r318_aboveMarkMid, r318_DotRadius * r318_kdr));
                    r1_ScheduleLeaningMark.set(r382_currentGlyph);
                    return void 0;
                }));
                r318_xn$GlyphSaveSink$2Lrc4b.save("dieresisAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
                    var _r388_t0, _r388_t1;
                    r388_currentGlyph.setWidth(0);
                    r388_currentGlyph.include(r318_StdAnchors.wide());
                    r388_currentGlyph.include(r318_DrawAt(r318_markMiddle - r318_markExtend, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    r388_currentGlyph.include(r318_DrawAt(r318_markMiddle + r318_markExtend, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    return void 0;
                }));
                r318_xn$GlyphSaveSink$2Lrc4b.save("dieresisAbove/alwaysUpright." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r395_currentGlyph) {
                    var _r395_t0, _r395_t1;
                    r395_currentGlyph.setWidth(0);
                    r395_currentGlyph.include(r318_StdAnchors.wide());
                    r395_currentGlyph.include(r318_ForceUpright());
                    r395_currentGlyph.include(r318_DrawAt(r318_markMiddle - r318_markExtend, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    r395_currentGlyph.include(r318_DrawAt(r318_markMiddle + r318_markExtend, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    return void 0;
                }));
                r318_xn$GlyphSaveSink$2Lrc4b.save("dialytikaAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r403_currentGlyph) {
                    var _r403_t0, _r403_t1;
                    r403_currentGlyph.setWidth(0);
                    r403_currentGlyph.include(r318_DrawAt(r318_markMiddle - r318_markExtend * 1.25, r318_aboveMarkMid, r318_dialytikaRadius * r318_kdr));
                    r403_currentGlyph.include(r318_DrawAt(r318_markMiddle + r318_markExtend * 1.25, r318_aboveMarkMid, r318_dialytikaRadius * r318_kdr));
                    return void 0;
                }));
                r318_xn$GlyphSaveSink$2Lrc4b.save("tripleDotAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r409_currentGlyph) {
                    var _r409_t0, _r409_t1;
                    r409_currentGlyph.setWidth(0);
                    var r409_height = 2 * r318_markExtend * Math.sqrt(0.75);
                    r409_currentGlyph.setMarkAnchor("above", r318_markMiddle, r318_XH, r318_markMiddle, r318_aboveMarkStack + r409_height);
                    r409_currentGlyph.setBaseAnchor("aboveBraceL", r318_markMiddle - r318_markExtend, r318_aboveMarkMid + r409_height / 2);
                    r409_currentGlyph.setBaseAnchor("aboveBraceR", r318_markMiddle + r318_markExtend, r318_aboveMarkMid + r409_height / 2);
                    r409_currentGlyph.include(r318_DrawAt(r318_markMiddle - r318_markExtend, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    r409_currentGlyph.include(r318_DrawAt(r318_markMiddle + r318_markExtend, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    r409_currentGlyph.include(r318_DrawAt(r318_markMiddle, r318_aboveMarkMid + r409_height, r318_markDotsRadius * r318_kdr));
                    return void 0;
                }));
                r318_xn$GlyphSaveSink$2Lrc4b.save("fallingDotsAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r419_currentGlyph) {
                    var _r419_t0, _r419_t1;
                    r419_currentGlyph.setWidth(0);
                    var r419_leftEnd = r318_markMiddle - r318_markExtend * Math.SQRT1_2;
                    var r419_rightEnd = r318_markMiddle + r318_markExtend * Math.SQRT1_2;
                    r419_currentGlyph.setMarkAnchor("above", r318_markMiddle, r318_XH, r318_markMiddle, r318_aboveMarkStack + (r419_rightEnd - r419_leftEnd));
                    r419_currentGlyph.setBaseAnchor("aboveBraceL", r419_leftEnd, r318_aboveMarkMid + (r419_rightEnd - r419_leftEnd) / 2);
                    r419_currentGlyph.setBaseAnchor("aboveBraceR", r419_rightEnd, r318_aboveMarkMid + (r419_rightEnd - r419_leftEnd) / 2);
                    r419_currentGlyph.include(r318_DrawAt(r419_leftEnd, r318_aboveMarkMid + (r419_rightEnd - r419_leftEnd), r318_markDotsRadius * r318_kdr));
                    r419_currentGlyph.include(r318_DrawAt(r419_rightEnd, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    return void 0;
                }));
                r318_xn$GlyphSaveSink$2Lrc4b.save("ellipsisAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r428_currentGlyph) {
                    var _r428_t0, _r428_t1;
                    r428_currentGlyph.setWidth(0);
                    r428_currentGlyph.include(r318_StdAnchors.impl("above", 0, 2));
                    r428_currentGlyph.include(r318_DrawAt(r318_markMiddle - r318_markExtend * 2, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    r428_currentGlyph.include(r318_DrawAt(r318_markMiddle, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    r428_currentGlyph.include(r318_DrawAt(r318_markMiddle + r318_markExtend * 2, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    return void 0;
                }));
                return r318_xn$GlyphSaveSink$2Lrc4b.save("fourDotsAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r436_currentGlyph) {
                    var _r436_t0, _r436_t1;
                    r436_currentGlyph.setWidth(0);
                    r436_currentGlyph.include(r318_StdAnchors.impl("above", 0, 3));
                    r436_currentGlyph.include(r318_DrawAt(r318_markMiddle - r318_markExtend * 3, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    r436_currentGlyph.include(r318_DrawAt(r318_markMiddle - r318_markExtend * 1, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    r436_currentGlyph.include(r318_DrawAt(r318_markMiddle + r318_markExtend * 1, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    r436_currentGlyph.include(r318_DrawAt(r318_markMiddle + r318_markExtend * 3, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    return void 0;
                }));
            })();
        }
        r318_xn$selectvariant$7Hrq("dotAbove", 775, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("dieresisAbove", 776, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("dieresisAbove/alwaysUpright", new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("dialytikaAbove", new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("tripleDotAbove", 6836, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("fallingDotsAbove", 6876, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("ellipsisAbove", 8411, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("fourDotsAbove", 8412, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("tittleAbove", new r318_xn$NamedParameterPair$2Lrc9b("shapeFrom", "dotAbove"), new r318_xn$NamedParameterPair$2Lrc9b("follow", "tittle"));
        r318_xn$selectvariant$7Hrq("i.TRK/tittleAbove", new r318_xn$NamedParameterPair$2Lrc9b("shapeFrom", "dotAbove"), new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("kropkaAbove", new r318_xn$NamedParameterPair$2Lrc9b("shapeFrom", "dotAbove"), new r318_xn$NamedParameterPair$2Lrc9b("follow", "tittle"));
        r318_xn$ExportCapture$2Lrc4b(function () {
            var _r458_t0, _r458_t1;
            return {
                "RingDims": r318_RingDims,
                "RingShape": r318_RingShape
            };
        });
        var r318_RingDims = function (r459__radiusOut) {
            var _r459_t0, _r459_t1;
            var r459_radiusOut = r1_fallback(r459__radiusOut, r318_AccentHeight * r1_linreg(16, 0.5, 90, 0.75, r318_markStroke));
            var r459_radiusIn = r459_radiusOut - r318_markFine * r1_linreg(16, 2, 90, 1.75, r318_markStroke);
            return {
                "radiusIn": r459_radiusIn,
                "radiusOut": r459_radiusOut
            };
        };
        var r318_RingShape = function (r460_cx, r460_cy, r460__radiusOut) {
            var _r460_t0, _r460_t1;
            return new r318_xn$Capture$2Lrc8.GlyphProc(function (r462_currentGlyph) {
                var _r462_t1, _r462_t2;
                var _r462_t0 = r318_RingDims(r460__radiusOut);
                var r462_radiusIn = _r462_t0.radiusIn;
                var r462_radiusOut = _r462_t0.radiusOut;
                r462_currentGlyph.include(r318_difference(r318_DotAt(r460_cx, r460_cy, r462_radiusOut), r318_DotAt(r460_cx, r460_cy, r462_radiusIn)));
                return void 0;
            });
        };
        r318_xn$GlyphSaveSink$2Lrc4b.save("ringAbove", 778, new r318_xn$Capture$2Lrc8.GlyphProc(function (r466_currentGlyph) {
            var _r466_t0, _r466_t1;
            r466_currentGlyph.setWidth(0);
            r466_currentGlyph.include(r318_StdAnchors.medium());
            r466_currentGlyph.include(r318_RingShape(r318_markMiddle, r318_aboveMarkMid));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("dblRingAbove", 6834, new r318_xn$Capture$2Lrc8.GlyphProc(function (r472_currentGlyph) {
            var _r472_t1, _r472_t2;
            r472_currentGlyph.setWidth(0);
            var _r472_t0 = r318_RingDims();
            var r472_radiusIn = _r472_t0.radiusIn;
            var r472_radiusOut = _r472_t0.radiusOut;
            var r472_shift = r1_mix(r472_radiusOut, r472_radiusIn, 0.25);
            r472_currentGlyph.include(r318_xn$withtransform$5sIl(r318_Translate(+r472_shift, 0), r318_xn$referglyph$1aao("ringAbove")));
            r472_currentGlyph.include(r318_xn$withtransform$5sIl(r318_Translate(-r472_shift, 0), r318_xn$referglyph$1aao("ringAbove")));
            r472_currentGlyph.include(r318_StdAnchors.wide());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("leftHalfRingAbove", 849, new r318_xn$Capture$2Lrc8.GlyphProc(function (r479_currentGlyph) {
            var _r479_t1, _r479_t2;
            r479_currentGlyph.setWidth(0);
            r479_currentGlyph.include(r318_StdAnchors.narrow());
            var _r479_t0 = r318_RingDims();
            var r479_radiusIn = _r479_t0.radiusIn;
            var r479_radiusOut = _r479_t0.radiusOut;
            r479_currentGlyph.include(r318_xn$withtransform$5sIl(r318_Translate(+0.5 * r479_radiusOut, 0), r318_dispiro(r318_widths.lhs(r479_radiusOut - r479_radiusIn), r318_g4.left.start(r318_markMiddle, r318_aboveMarkMid + r479_radiusOut, r318_heading(r318_Leftward)), r318_archv(), r318_g4.down.mid(r318_markMiddle - r479_radiusOut, r318_aboveMarkMid, r318_heading(r318_Downward)), r318_arcvh(), r318_g4.right.end(r318_markMiddle, r318_aboveMarkMid - r479_radiusOut, r318_heading(r318_Rightward)))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("rightHalfRingAbove", 855, new r318_xn$Capture$2Lrc8.GlyphProc(function (r485_currentGlyph) {
            var _r485_t1, _r485_t2;
            r485_currentGlyph.setWidth(0);
            r485_currentGlyph.include(r318_StdAnchors.narrow());
            var _r485_t0 = r318_RingDims();
            var r485_radiusIn = _r485_t0.radiusIn;
            var r485_radiusOut = _r485_t0.radiusOut;
            r485_currentGlyph.include(r318_xn$withtransform$5sIl(r318_Translate(-0.5 * r485_radiusOut, 0), r318_dispiro(r318_widths.rhs(r485_radiusOut - r485_radiusIn), r318_g4.right.start(r318_markMiddle, r318_aboveMarkMid + r485_radiusOut, r318_heading(r318_Rightward)), r318_archv(), r318_g4.down.mid(r318_markMiddle + r485_radiusOut, r318_aboveMarkMid, r318_heading(r318_Downward)), r318_arcvh(), r318_g4.left.end(r318_markMiddle, r318_aboveMarkMid - r485_radiusOut, r318_heading(r318_Leftward)))));
            return void 0;
        }));
        var _r318_t14 = Object.entries(r318_DotVariants)[Symbol.iterator]();
        var _r318_t15 = void 0;
        while (!(_r318_t15 = _r318_t14.next()).done) {
            _r318_t16 = _r318_t15.value;
            r318_suffix = _r318_t16[0];
            r318_DrawAt = _r318_t16[1][0];
            r318_kdr = _r318_t16[1][1];
            _r318_t16[1];
            (function () {
                r318_xn$GlyphSaveSink$2Lrc4b.save("dieresisRingAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r494_currentGlyph) {
                    var _r494_t0, _r494_t1;
                    r494_currentGlyph.setWidth(0);
                    r494_currentGlyph.include(r318_StdAnchors.extraWide());
                    r494_currentGlyph.include(r318_RingShape(r318_markMiddle, r318_aboveMarkMid));
                    r494_currentGlyph.include(r318_DrawAt(r318_markMiddle + r318_markExtend * 1.7, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    r494_currentGlyph.include(r318_DrawAt(r318_markMiddle - r318_markExtend * 1.7, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    return void 0;
                }));
                return r318_xn$GlyphSaveSink$2Lrc4b.save("ringDotAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r502_currentGlyph) {
                    var _r502_t0, _r502_t1;
                    r502_currentGlyph.setWidth(0);
                    r502_currentGlyph.include(r318_StdAnchors.wide());
                    r502_currentGlyph.include(r318_RingShape(r318_markMiddle - r318_markExtend, r318_aboveMarkMid));
                    r502_currentGlyph.include(r318_DrawAt(r318_markMiddle + r318_markExtend, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    return void 0;
                }));
            })();
        }
        r318_xn$selectvariant$7Hrq("dieresisRingAbove", 6833, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("ringDotAbove", new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$GlyphSaveSink$2Lrc4b.save("graveAbove", 768, new r318_xn$Capture$2Lrc8.GlyphProc(function (r511_currentGlyph) {
            var _r511_t0, _r511_t1;
            r511_currentGlyph.setWidth(0);
            r511_currentGlyph.include(r318_StdAnchors.medium());
            r511_currentGlyph.include(r318_dispiro(r318_flat(r318_markMiddle + 1 * r318_markStress, r318_aboveMarkBot, r318_widths.center(2 * r318_markFine)), r318_curl(r318_markMiddle - 0.875 * r318_markExtend, r318_aboveMarkTop, r318_widths.center(2 * r318_markStress))));
            return void 0;
        }));
        r318_alias("graveToneAbove", 832, "graveAbove");
        r318_xn$GlyphSaveSink$2Lrc4b.save("asciiGrave/body/straight", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r517_currentGlyph) {
            var _r517_t0, _r517_t1;
            var r517_df = r517_currentGlyph.include(r318_DivFrame(r318_para.advanceScaleSp));
            r517_currentGlyph.include(r318_dispiro(r318_flat(r517_df.middle + r318_HalfStroke * 1.1 * r318_asciiMarkZoomX * Math.sqrt(r517_df.adws), r1_mix(r318_aboveMarkMid, r318_aboveMarkBot, r318_asciiMarkZoomY), r318_widths.center(r318_Stroke * 0.9)), r318_curl(r517_df.middle - r318_markExtend * 1 * r318_asciiMarkZoomX * Math.sqrt(r517_df.adws), r1_mix(r318_aboveMarkMid, r318_aboveMarkTop, r318_asciiMarkZoomY), r318_widths.center(r318_Stroke * 1.1))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("doubleGraveAbove", 783, new r318_xn$Capture$2Lrc8.GlyphProc(function (r522_currentGlyph) {
            var _r522_t0, _r522_t1;
            r522_currentGlyph.setWidth(0);
            r522_currentGlyph.include(r318_StdAnchors.wide());
            var r522_m1 = r318_markMiddle - r318_markExtend * 0.85;
            var r522_m2 = r318_markMiddle + r318_markExtend * 0.85;
            r522_currentGlyph.include(r318_dispiro(r318_flat(r522_m1 + r318_markStress, r318_aboveMarkBot, r318_widths.center(2 * r318_markFine)), r318_curl(r522_m1 - r318_markExtend, r318_aboveMarkTop, r318_widths.center(2 * r318_markStress))));
            r522_currentGlyph.include(r318_dispiro(r318_flat(r522_m2 + r318_markStress, r318_aboveMarkBot, r318_widths.center(2 * r318_markFine)), r318_curl(r522_m2 - r318_markExtend, r318_aboveMarkTop, r318_widths.center(2 * r318_markStress))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("acuteAbove", 769, new r318_xn$Capture$2Lrc8.GlyphProc(function (r529_currentGlyph) {
            var _r529_t0, _r529_t1;
            r529_currentGlyph.setWidth(0);
            r529_currentGlyph.include(r318_StdAnchors.medium());
            r529_currentGlyph.include(r318_dispiro(r318_flat(r318_markMiddle - 1 * r318_markStress, r318_aboveMarkBot, r318_widths.center(2 * r318_markFine)), r318_curl(r318_markMiddle + 0.875 * r318_markExtend, r318_aboveMarkTop, r318_widths.center(2 * r318_markStress))));
            return void 0;
        }));
        r318_alias("acuteToneAbove", 833, "acuteAbove");
        r318_xn$GlyphSaveSink$2Lrc4b.save("latin1acute", 180, new r318_xn$Capture$2Lrc8.GlyphProc(function (r535_currentGlyph) {
            var _r535_t0, _r535_t1;
            var r535_df = r535_currentGlyph.include(r318_DivFrame(r318_para.advanceScaleSp));
            r535_currentGlyph.include(r318_dispiro(r318_flat(r535_df.middle - r318_HalfStroke * 1.1 * r318_asciiMarkZoomX * Math.sqrt(r535_df.adws), r1_mix(r318_aboveMarkMid, r318_aboveMarkBot, r318_asciiMarkZoomY), r318_widths.center(r318_Stroke * 0.9)), r318_curl(r535_df.middle + r318_markExtend * 1 * r318_asciiMarkZoomX * Math.sqrt(r535_df.adws), r1_mix(r318_aboveMarkMid, r318_aboveMarkTop, r318_asciiMarkZoomY), r318_widths.center(r318_Stroke * 1.1))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("doubleAcuteAbove", 779, new r318_xn$Capture$2Lrc8.GlyphProc(function (r540_currentGlyph) {
            var _r540_t0, _r540_t1;
            r540_currentGlyph.setWidth(0);
            r540_currentGlyph.include(r318_StdAnchors.wide());
            var r540_m1 = r318_markMiddle - r318_markExtend * 0.85;
            var r540_m2 = r318_markMiddle + r318_markExtend * 0.85;
            r540_currentGlyph.include(r318_dispiro(r318_flat(r540_m1 - r318_markStress, r318_aboveMarkBot, r318_widths.center(2 * r318_markFine)), r318_curl(r540_m1 + r318_markExtend, r318_aboveMarkTop, r318_widths.center(2 * r318_markStress))));
            r540_currentGlyph.include(r318_dispiro(r318_flat(r540_m2 - r318_markStress, r318_aboveMarkBot, r318_widths.center(2 * r318_markFine)), r318_curl(r540_m2 + r318_markExtend, r318_aboveMarkTop, r318_widths.center(2 * r318_markStress))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("tripleAcuteAbove", 6859, new r318_xn$Capture$2Lrc8.GlyphProc(function (r547_currentGlyph) {
            var _r547_t0, _r547_t1;
            r547_currentGlyph.setWidth(0);
            r547_currentGlyph.include(r318_StdAnchors.extraWide());
            var r547_fine = 0.5 * r318_AdviceStroke(6);
            var r547_stress = 1.2 * r547_fine;
            var r547_m1 = r318_markMiddle - r318_markExtend * 1.275;
            var r547_m2 = r318_markMiddle;
            var r547_m3 = r318_markMiddle + r318_markExtend * 1.275;
            r547_currentGlyph.include(r318_dispiro(r318_flat(r547_m1 - r318_markStress, r318_aboveMarkBot, r318_widths.center(2 * r547_fine)), r318_curl(r547_m1 + r318_markExtend, r318_aboveMarkTop, r318_widths.center(2 * r547_stress))));
            r547_currentGlyph.include(r318_dispiro(r318_flat(r547_m2 - r318_markStress, r318_aboveMarkBot, r318_widths.center(2 * r547_fine)), r318_curl(r547_m2 + r318_markExtend, r318_aboveMarkTop, r318_widths.center(2 * r547_stress))));
            r547_currentGlyph.include(r318_dispiro(r318_flat(r547_m3 - r318_markStress, r318_aboveMarkBot, r318_widths.center(2 * r547_fine)), r318_curl(r547_m3 + r318_markExtend, r318_aboveMarkTop, r318_widths.center(2 * r547_stress))));
            return void 0;
        }));
        var _r318_t17 = Object.entries(r318_DotVariants)[Symbol.iterator]();
        var _r318_t18 = void 0;
        while (!(_r318_t18 = _r318_t17.next()).done) {
            _r318_t19 = _r318_t18.value;
            r318_suffix = _r318_t19[0];
            r318_DrawAt = _r318_t19[1][0];
            r318_kdr = _r318_t19[1][1];
            _r318_t19[1];
            (function () {
                r318_xn$GlyphSaveSink$2Lrc4b.save("graveDotAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r558_currentGlyph) {
                    var _r558_t0, _r558_t1;
                    r558_currentGlyph.setWidth(0);
                    r558_currentGlyph.include(r318_StdAnchors.wide());
                    var r558_dotDx = r318_markExtend + r318_markDotsRadius * r318_kdr;
                    r558_currentGlyph.include(r318_dispiro(r318_flat(r318_markMiddle + 1 * r318_markStress, r318_aboveMarkBot, r318_widths.center(2 * r318_markFine)), r318_curl(r318_markMiddle - 0.875 * r318_markExtend, r318_aboveMarkTop, r318_widths.center(2 * r318_markStress))));
                    r558_currentGlyph.include(r318_DrawAt(r318_markMiddle + r558_dotDx, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    r558_currentGlyph.include(r318_AlignToneMarkAbove());
                    return void 0;
                }));
                r318_xn$GlyphSaveSink$2Lrc4b.save("dotAcuteAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r566_currentGlyph) {
                    var _r566_t0, _r566_t1;
                    r566_currentGlyph.setWidth(0);
                    r566_currentGlyph.include(r318_StdAnchors.wide());
                    var r566_dotDx = r318_markExtend + r318_markDotsRadius * r318_kdr;
                    r566_currentGlyph.include(r318_dispiro(r318_flat(r318_markMiddle - 1 * r318_markStress, r318_aboveMarkBot, r318_widths.center(2 * r318_markFine)), r318_curl(r318_markMiddle + 0.875 * r318_markExtend, r318_aboveMarkTop, r318_widths.center(2 * r318_markStress))));
                    r566_currentGlyph.include(r318_DrawAt(r318_markMiddle - r566_dotDx, r318_aboveMarkMid, r318_markDotsRadius * r318_kdr));
                    r566_currentGlyph.include(r318_AlignToneMarkAbove());
                    return void 0;
                }));
                r318_xn$GlyphSaveSink$2Lrc4b.save("dottedGraveAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r574_currentGlyph) {
                    var _r574_t0, _r574_t1;
                    r574_currentGlyph.setWidth(0);
                    r574_currentGlyph.include(r318_StdAnchors.wide());
                    var r574_lowerDotDx = r318_markExtend + r318_markDotsRadius * r318_kdr;
                    r574_currentGlyph.include(r318_dispiro(r318_flat(r318_markMiddle + 1 * r318_markStress, r318_aboveMarkBot, r318_widths.center(2 * r318_markFine)), r318_curl(r318_markMiddle - 0.875 * r318_markExtend, r318_aboveMarkTop, r318_widths.center(2 * r318_markStress))));
                    r574_currentGlyph.include(r318_DrawAt(r318_markMiddle + r318_markExtend, r1_mix(r318_aboveMarkMid, r318_aboveMarkTop, 0.7), r318_markDotsRadius * r318_kdr));
                    r574_currentGlyph.include(r318_DrawAt(r318_markMiddle - r574_lowerDotDx, r1_mix(r318_aboveMarkMid, r318_aboveMarkBot, 0.7), r318_markDotsRadius * r318_kdr));
                    r574_currentGlyph.include(r318_AlignToneMarkAbove());
                    return void 0;
                }));
                return r318_xn$GlyphSaveSink$2Lrc4b.save("dottedAcuteAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r583_currentGlyph) {
                    var _r583_t0, _r583_t1;
                    r583_currentGlyph.setWidth(0);
                    r583_currentGlyph.include(r318_StdAnchors.wide());
                    var r583_lowerDotDx = r318_markExtend + r318_markDotsRadius * r318_kdr;
                    r583_currentGlyph.include(r318_dispiro(r318_flat(r318_markMiddle - 1 * r318_markStress, r318_aboveMarkBot, r318_widths.center(2 * r318_markFine)), r318_curl(r318_markMiddle + 0.875 * r318_markExtend, r318_aboveMarkTop, r318_widths.center(2 * r318_markStress))));
                    r583_currentGlyph.include(r318_DrawAt(r318_markMiddle - r318_markExtend, r1_mix(r318_aboveMarkMid, r318_aboveMarkTop, 0.7), r318_markDotsRadius * r318_kdr));
                    r583_currentGlyph.include(r318_DrawAt(r318_markMiddle + r583_lowerDotDx, r1_mix(r318_aboveMarkMid, r318_aboveMarkBot, 0.7), r318_markDotsRadius * r318_kdr));
                    r583_currentGlyph.include(r318_AlignToneMarkAbove());
                    return void 0;
                }));
            })();
        }
        r318_xn$selectvariant$7Hrq("graveDotAbove", 6878, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("dotAcuteAbove", 6879, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("dottedGraveAbove", 7616, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("dottedAcuteAbove", 7617, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$ExportCapture$2Lrc4b(function () {
            var _r595_t0, _r595_t1;
            return {
                "CaretCaronWidth": r318_CaretCaronWidth,
                "CaretCaronMidSw": r318_CaretCaronMidSw,
                "CaretCaronTerminalSw": r318_CaretCaronTerminalSw
            };
        });
        var r318_CaretCaronWidth = 2 * r318_markExtend + r318_markStress;
        var r318_CaretCaronMidSw = r318_StrokeWidthBlend(1.375, 1.25) * r318_markStroke;
        var r318_CaretCaronTerminalSw = r318_AdviceStroke(5);
        r318_xn$ExportCapture$2Lrc4b(function () {
            var _r597_t0, _r597_t1;
            return {
                "CaretShape": r318_CaretShape
            };
        });
        var r318_CaretLeftShape = function () {
            var _r598_t5;
            var _r598_t6 = arguments;
            var r598_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r598_t6, 0);
            var _r598_t0 = [];
            var _r598_t1 = 0;
            while (_r598_t1 < r598_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r598_xn$flexarguments$2Lrc7uIe5[_r598_t1] instanceof r318_xn$NamedParameterPair$2Lrc9b)) _r598_t0.push(r598_xn$flexarguments$2Lrc7uIe5[_r598_t1]);
                _r598_t1 = _r598_t1 + 1;
            }
            var _r598_t2 = r598_xn$flexarguments$2Lrc7uIe5;
            var _r598_t3 = _r598_t2.length;
            var _r598_t4 = 0;
            while (_r598_t4 < _r598_t3) {
                _r598_t1 = _r598_t2[_r598_t4];
                if (_r598_t1 && _r598_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r598_t1.left === "top") r598_top = _r598_t1.right;
                if (_r598_t1 && _r598_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r598_t1.left === "bottom") r598_bottom = _r598_t1.right;
                if (_r598_t1 && _r598_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r598_t1.left === "xMiddle") r598_xMiddle = _r598_t1.right;
                if (_r598_t1 && _r598_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r598_t1.left === "width") r598_width = _r598_t1.right;
                if (_r598_t1 && _r598_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r598_t1.left === "swEnd") r598_swEnd = _r598_t1.right;
                if (_r598_t1 && _r598_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r598_t1.left === "swMid") r598_swMid = _r598_t1.right;
                _r598_t4 = _r598_t4 + 1;
            }
            var r598_top = r1_fallback(r598_top, _r598_t0[0]);
            var r598_bottom = r1_fallback(r598_bottom, _r598_t0[1]);
            var r598_xMiddle = r1_fallback(r598_xMiddle, _r598_t0[2]);
            var r598_width = r1_fallback(r598_width, _r598_t0[3]);
            var r598_swEnd = r1_fallback(r598_swEnd, _r598_t0[4]);
            var r598_swMid = r1_fallback(r598_swMid, _r598_t0[5]);
            return r318_dispiro(r318_flat(r598_xMiddle - r598_width / 2, r598_bottom, r318_widths.center(r598_swEnd)), r318_curl(r598_xMiddle, r598_top, r318_widths.center.heading(r598_swMid, r318_Upward)));
        };
        var r318_CaretRightShape = function () {
            var _r603_t5;
            var _r603_t6 = arguments;
            var r603_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r603_t6, 0);
            var _r603_t0 = [];
            var _r603_t1 = 0;
            while (_r603_t1 < r603_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r603_xn$flexarguments$2Lrc7uIe5[_r603_t1] instanceof r318_xn$NamedParameterPair$2Lrc9b)) _r603_t0.push(r603_xn$flexarguments$2Lrc7uIe5[_r603_t1]);
                _r603_t1 = _r603_t1 + 1;
            }
            var _r603_t2 = r603_xn$flexarguments$2Lrc7uIe5;
            var _r603_t3 = _r603_t2.length;
            var _r603_t4 = 0;
            while (_r603_t4 < _r603_t3) {
                _r603_t1 = _r603_t2[_r603_t4];
                if (_r603_t1 && _r603_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r603_t1.left === "top") r603_top = _r603_t1.right;
                if (_r603_t1 && _r603_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r603_t1.left === "bottom") r603_bottom = _r603_t1.right;
                if (_r603_t1 && _r603_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r603_t1.left === "xMiddle") r603_xMiddle = _r603_t1.right;
                if (_r603_t1 && _r603_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r603_t1.left === "width") r603_width = _r603_t1.right;
                if (_r603_t1 && _r603_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r603_t1.left === "swEnd") r603_swEnd = _r603_t1.right;
                if (_r603_t1 && _r603_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r603_t1.left === "swMid") r603_swMid = _r603_t1.right;
                _r603_t4 = _r603_t4 + 1;
            }
            var r603_top = r1_fallback(r603_top, _r603_t0[0]);
            var r603_bottom = r1_fallback(r603_bottom, _r603_t0[1]);
            var r603_xMiddle = r1_fallback(r603_xMiddle, _r603_t0[2]);
            var r603_width = r1_fallback(r603_width, _r603_t0[3]);
            var r603_swEnd = r1_fallback(r603_swEnd, _r603_t0[4]);
            var r603_swMid = r1_fallback(r603_swMid, _r603_t0[5]);
            return r318_dispiro(r318_flat(r603_xMiddle + r603_width / 2, r603_bottom, r318_widths.center(r603_swEnd)), r318_curl(r603_xMiddle, r603_top, r318_widths.center.heading(r603_swMid, r318_Upward)));
        };
        var r318_CaretTopBarShape = function () {
            var _r608_t5;
            var _r608_t6 = arguments;
            var r608_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r608_t6, 0);
            var _r608_t0 = [];
            var _r608_t1 = 0;
            while (_r608_t1 < r608_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r608_xn$flexarguments$2Lrc7uIe5[_r608_t1] instanceof r318_xn$NamedParameterPair$2Lrc9b)) _r608_t0.push(r608_xn$flexarguments$2Lrc7uIe5[_r608_t1]);
                _r608_t1 = _r608_t1 + 1;
            }
            var _r608_t2 = r608_xn$flexarguments$2Lrc7uIe5;
            var _r608_t3 = _r608_t2.length;
            var _r608_t4 = 0;
            while (_r608_t4 < _r608_t3) {
                _r608_t1 = _r608_t2[_r608_t4];
                if (_r608_t1 && _r608_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r608_t1.left === "top") r608_top = _r608_t1.right;
                if (_r608_t1 && _r608_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r608_t1.left === "xMiddle") r608_xMiddle = _r608_t1.right;
                if (_r608_t1 && _r608_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r608_t1.left === "width") r608_width = _r608_t1.right;
                if (_r608_t1 && _r608_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r608_t1.left === "pL") r608_pL = _r608_t1.right;
                if (_r608_t1 && _r608_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r608_t1.left === "pR") r608_pR = _r608_t1.right;
                if (_r608_t1 && _r608_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r608_t1.left === "swMid") r608_swMid = _r608_t1.right;
                if (_r608_t1 && _r608_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r608_t1.left === "swBar") r608_swBar = _r608_t1.right;
                _r608_t4 = _r608_t4 + 1;
            }
            var r608_top = r1_fallback(r608_top, _r608_t0[0]);
            var r608_xMiddle = r1_fallback(r608_xMiddle, _r608_t0[1]);
            var r608_width = r1_fallback(r608_width, _r608_t0[2]);
            var r608_pL = r1_fallback(r608_pL, _r608_t0[3]);
            var r608_pR = r1_fallback(r608_pR, _r608_t0[4]);
            var r608_swMid = r1_fallback(r608_swMid, _r608_t0[5]);
            var r608_swBar = r1_fallback(r608_swBar, _r608_t0[6]);
            return r318_dispiro(r318_widths.rhs(r608_swBar), r318_flat(Math.min(r608_xMiddle + r608_width / 2 * r608_pL, r608_xMiddle - r318_HSwToV(0.5 * r608_swMid)), r608_top), r318_curl(Math.max(r608_xMiddle + r608_width / 2 * r608_pR, r608_xMiddle + r318_HSwToV(0.5 * r608_swMid)), r608_top));
        };
        var r318_CaretShape = function () {
            var _r613_t5;
            var _r613_t6 = arguments;
            var r613_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r613_t6, 0);
            var _r613_t0 = [];
            var _r613_t1 = 0;
            while (_r613_t1 < r613_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r613_xn$flexarguments$2Lrc7uIe5[_r613_t1] instanceof r318_xn$NamedParameterPair$2Lrc9b)) _r613_t0.push(r613_xn$flexarguments$2Lrc7uIe5[_r613_t1]);
                _r613_t1 = _r613_t1 + 1;
            }
            var _r613_t2 = r613_xn$flexarguments$2Lrc7uIe5;
            var _r613_t3 = _r613_t2.length;
            var _r613_t4 = 0;
            while (_r613_t4 < _r613_t3) {
                _r613_t1 = _r613_t2[_r613_t4];
                if (_r613_t1 && _r613_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r613_t1.left === "top") r613_top = _r613_t1.right;
                if (_r613_t1 && _r613_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r613_t1.left === "bottom") r613_bottom = _r613_t1.right;
                if (_r613_t1 && _r613_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r613_t1.left === "xMiddle") r613_xMiddle = _r613_t1.right;
                if (_r613_t1 && _r613_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r613_t1.left === "width") r613_width = _r613_t1.right;
                if (_r613_t1 && _r613_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r613_t1.left === "swEnd") r613_swEnd = _r613_t1.right;
                if (_r613_t1 && _r613_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r613_t1.left === "swMid") r613_swMid = _r613_t1.right;
                _r613_t4 = _r613_t4 + 1;
            }
            var r613_top = r1_fallback(r613_top, _r613_t0[0]);
            var r613_bottom = r1_fallback(r613_bottom, _r613_t0[1]);
            var r613_xMiddle = r1_fallback(r613_xMiddle, _r613_t0[2]);
            var r613_width = r1_fallback(r613_width, _r613_t0[3]);
            var r613_swEnd = r1_fallback(r613_swEnd, _r613_t0[4]);
            var r613_swMid = r1_fallback(r613_swMid, _r613_t0[5]);
            return r318_union(r318_CaretLeftShape(r613_top, r613_bottom, r613_xMiddle, r613_width, r613_swEnd, r613_swMid), r318_CaretRightShape(r613_top, r613_bottom, r613_xMiddle, r613_width, r613_swEnd, r613_swMid));
        };
        r318_xn$GlyphSaveSink$2Lrc4b.save("asciiCaret.high", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r620_currentGlyph) {
            var _r620_t0, _r620_t1;
            r620_currentGlyph.include(r318_CaretShape(new r318_xn$NamedParameterPair$2Lrc9b("xMiddle", r318_Middle), new r318_xn$NamedParameterPair$2Lrc9b("width", 2 * (r318_markExtend * 1.5) * r318_asciiMarkZoomX - r318_QuarterStroke), new r318_xn$NamedParameterPair$2Lrc9b("top", r1_mix(r318_aboveMarkMid, r318_aboveMarkTop, r318_asciiMarkZoomY) + r318_HalfStroke), new r318_xn$NamedParameterPair$2Lrc9b("bottom", r1_mix(r318_aboveMarkMid, r318_aboveMarkBot, r318_asciiMarkZoomY)), new r318_xn$NamedParameterPair$2Lrc9b("swEnd", r318_Stroke * 1.05), new r318_xn$NamedParameterPair$2Lrc9b("swMid", r318_StrokeWidthBlend(1.25, 1) * r318_Stroke)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("circumflexAbove", 770, new r318_xn$Capture$2Lrc8.GlyphProc(function (r630_currentGlyph) {
            var _r630_t0, _r630_t1;
            r630_currentGlyph.setWidth(0);
            r630_currentGlyph.include(r318_StdAnchors.medium());
            r630_currentGlyph.include(r318_CaretShape(new r318_xn$NamedParameterPair$2Lrc9b("xMiddle", r318_markMiddle), new r318_xn$NamedParameterPair$2Lrc9b("width", r318_CaretCaronWidth), new r318_xn$NamedParameterPair$2Lrc9b("top", r318_aboveMarkTop + r318_markFine * 0.7), new r318_xn$NamedParameterPair$2Lrc9b("bottom", r318_aboveMarkBot + r318_markStress - r318_markFine), new r318_xn$NamedParameterPair$2Lrc9b("swEnd", r318_CaretCaronTerminalSw), new r318_xn$NamedParameterPair$2Lrc9b("swMid", r318_CaretCaronMidSw)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("bardownAbove", 7622, new r318_xn$Capture$2Lrc8.GlyphProc(function (r642_currentGlyph) {
            var _r642_t0, _r642_t1;
            r642_currentGlyph.setWidth(0);
            r642_currentGlyph.include(r318_StdAnchors.medium());
            r642_currentGlyph.include(r318_CaretRightShape(new r318_xn$NamedParameterPair$2Lrc9b("xMiddle", r318_markMiddle), new r318_xn$NamedParameterPair$2Lrc9b("width", r318_CaretCaronWidth), new r318_xn$NamedParameterPair$2Lrc9b("top", r318_aboveMarkTop + r318_markFine * 0.7), new r318_xn$NamedParameterPair$2Lrc9b("bottom", r318_aboveMarkBot + r318_markStress - r318_markFine), new r318_xn$NamedParameterPair$2Lrc9b("swEnd", r318_CaretCaronTerminalSw), new r318_xn$NamedParameterPair$2Lrc9b("swMid", r318_CaretCaronMidSw)));
            r642_currentGlyph.include(r318_CaretTopBarShape(new r318_xn$NamedParameterPair$2Lrc9b("xMiddle", r318_markMiddle), new r318_xn$NamedParameterPair$2Lrc9b("width", r318_CaretCaronWidth), new r318_xn$NamedParameterPair$2Lrc9b("top", r318_aboveMarkTop + r318_markFine * 0.7), new r318_xn$NamedParameterPair$2Lrc9b("pL", -1), new r318_xn$NamedParameterPair$2Lrc9b("pR", 0), new r318_xn$NamedParameterPair$2Lrc9b("swMid", r318_CaretCaronMidSw), new r318_xn$NamedParameterPair$2Lrc9b("swBar", 2 * r318_markFine)));
            r642_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("upbarAbove", 7623, new r318_xn$Capture$2Lrc8.GlyphProc(function (r663_currentGlyph) {
            var _r663_t0, _r663_t1;
            r663_currentGlyph.setWidth(0);
            r663_currentGlyph.include(r318_StdAnchors.medium());
            r663_currentGlyph.include(r318_CaretLeftShape(new r318_xn$NamedParameterPair$2Lrc9b("xMiddle", r318_markMiddle), new r318_xn$NamedParameterPair$2Lrc9b("width", r318_CaretCaronWidth), new r318_xn$NamedParameterPair$2Lrc9b("top", r318_aboveMarkTop + r318_markFine * 0.7), new r318_xn$NamedParameterPair$2Lrc9b("bottom", r318_aboveMarkBot + r318_markStress - r318_markFine), new r318_xn$NamedParameterPair$2Lrc9b("swEnd", r318_CaretCaronTerminalSw), new r318_xn$NamedParameterPair$2Lrc9b("swMid", r318_CaretCaronMidSw)));
            r663_currentGlyph.include(r318_CaretTopBarShape(new r318_xn$NamedParameterPair$2Lrc9b("xMiddle", r318_markMiddle), new r318_xn$NamedParameterPair$2Lrc9b("width", r318_CaretCaronWidth), new r318_xn$NamedParameterPair$2Lrc9b("top", r318_aboveMarkTop + r318_markFine * 0.7), new r318_xn$NamedParameterPair$2Lrc9b("pL", 0), new r318_xn$NamedParameterPair$2Lrc9b("pR", +1), new r318_xn$NamedParameterPair$2Lrc9b("swMid", r318_CaretCaronMidSw), new r318_xn$NamedParameterPair$2Lrc9b("swBar", 2 * r318_markFine)));
            r663_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        var r318_CaronLeftShape = function () {
            var _r682_t5;
            var _r682_t6 = arguments;
            var r682_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r682_t6, 0);
            var _r682_t0 = [];
            var _r682_t1 = 0;
            while (_r682_t1 < r682_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r682_xn$flexarguments$2Lrc7uIe5[_r682_t1] instanceof r318_xn$NamedParameterPair$2Lrc9b)) _r682_t0.push(r682_xn$flexarguments$2Lrc7uIe5[_r682_t1]);
                _r682_t1 = _r682_t1 + 1;
            }
            var _r682_t2 = r682_xn$flexarguments$2Lrc7uIe5;
            var _r682_t3 = _r682_t2.length;
            var _r682_t4 = 0;
            while (_r682_t4 < _r682_t3) {
                _r682_t1 = _r682_t2[_r682_t4];
                if (_r682_t1 && _r682_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r682_t1.left === "top") r682_top = _r682_t1.right;
                if (_r682_t1 && _r682_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r682_t1.left === "bottom") r682_bottom = _r682_t1.right;
                if (_r682_t1 && _r682_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r682_t1.left === "xMiddle") r682_xMiddle = _r682_t1.right;
                if (_r682_t1 && _r682_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r682_t1.left === "width") r682_width = _r682_t1.right;
                if (_r682_t1 && _r682_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r682_t1.left === "swEnd") r682_swEnd = _r682_t1.right;
                if (_r682_t1 && _r682_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r682_t1.left === "swMid") r682_swMid = _r682_t1.right;
                _r682_t4 = _r682_t4 + 1;
            }
            var r682_top = r1_fallback(r682_top, _r682_t0[0]);
            var r682_bottom = r1_fallback(r682_bottom, _r682_t0[1]);
            var r682_xMiddle = r1_fallback(r682_xMiddle, _r682_t0[2]);
            var r682_width = r1_fallback(r682_width, _r682_t0[3]);
            var r682_swEnd = r1_fallback(r682_swEnd, _r682_t0[4]);
            var r682_swMid = r1_fallback(r682_swMid, _r682_t0[5]);
            return r318_dispiro(r318_flat(r682_xMiddle - r682_width / 2, r682_top, r318_widths.center(r682_swEnd)), r318_curl(r682_xMiddle, r682_bottom, r318_widths.center.heading(r682_swMid, r318_Downward)));
        };
        var r318_CaronRightShape = function () {
            var _r687_t5;
            var _r687_t6 = arguments;
            var r687_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r687_t6, 0);
            var _r687_t0 = [];
            var _r687_t1 = 0;
            while (_r687_t1 < r687_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r687_xn$flexarguments$2Lrc7uIe5[_r687_t1] instanceof r318_xn$NamedParameterPair$2Lrc9b)) _r687_t0.push(r687_xn$flexarguments$2Lrc7uIe5[_r687_t1]);
                _r687_t1 = _r687_t1 + 1;
            }
            var _r687_t2 = r687_xn$flexarguments$2Lrc7uIe5;
            var _r687_t3 = _r687_t2.length;
            var _r687_t4 = 0;
            while (_r687_t4 < _r687_t3) {
                _r687_t1 = _r687_t2[_r687_t4];
                if (_r687_t1 && _r687_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r687_t1.left === "top") r687_top = _r687_t1.right;
                if (_r687_t1 && _r687_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r687_t1.left === "bottom") r687_bottom = _r687_t1.right;
                if (_r687_t1 && _r687_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r687_t1.left === "xMiddle") r687_xMiddle = _r687_t1.right;
                if (_r687_t1 && _r687_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r687_t1.left === "width") r687_width = _r687_t1.right;
                if (_r687_t1 && _r687_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r687_t1.left === "swEnd") r687_swEnd = _r687_t1.right;
                if (_r687_t1 && _r687_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r687_t1.left === "swMid") r687_swMid = _r687_t1.right;
                _r687_t4 = _r687_t4 + 1;
            }
            var r687_top = r1_fallback(r687_top, _r687_t0[0]);
            var r687_bottom = r1_fallback(r687_bottom, _r687_t0[1]);
            var r687_xMiddle = r1_fallback(r687_xMiddle, _r687_t0[2]);
            var r687_width = r1_fallback(r687_width, _r687_t0[3]);
            var r687_swEnd = r1_fallback(r687_swEnd, _r687_t0[4]);
            var r687_swMid = r1_fallback(r687_swMid, _r687_t0[5]);
            return r318_dispiro(r318_flat(r687_xMiddle + r687_width / 2, r687_top, r318_widths.center(r687_swEnd)), r318_curl(r687_xMiddle, r687_bottom, r318_widths.center.heading(r687_swMid, r318_Downward)));
        };
        var r318_CaronBottomBarShape = function () {
            var _r692_t5;
            var _r692_t6 = arguments;
            var r692_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r692_t6, 0);
            var _r692_t0 = [];
            var _r692_t1 = 0;
            while (_r692_t1 < r692_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r692_xn$flexarguments$2Lrc7uIe5[_r692_t1] instanceof r318_xn$NamedParameterPair$2Lrc9b)) _r692_t0.push(r692_xn$flexarguments$2Lrc7uIe5[_r692_t1]);
                _r692_t1 = _r692_t1 + 1;
            }
            var _r692_t2 = r692_xn$flexarguments$2Lrc7uIe5;
            var _r692_t3 = _r692_t2.length;
            var _r692_t4 = 0;
            while (_r692_t4 < _r692_t3) {
                _r692_t1 = _r692_t2[_r692_t4];
                if (_r692_t1 && _r692_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r692_t1.left === "bottom") r692_bottom = _r692_t1.right;
                if (_r692_t1 && _r692_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r692_t1.left === "xMiddle") r692_xMiddle = _r692_t1.right;
                if (_r692_t1 && _r692_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r692_t1.left === "width") r692_width = _r692_t1.right;
                if (_r692_t1 && _r692_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r692_t1.left === "pL") r692_pL = _r692_t1.right;
                if (_r692_t1 && _r692_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r692_t1.left === "pR") r692_pR = _r692_t1.right;
                if (_r692_t1 && _r692_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r692_t1.left === "swMid") r692_swMid = _r692_t1.right;
                if (_r692_t1 && _r692_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r692_t1.left === "swBar") r692_swBar = _r692_t1.right;
                _r692_t4 = _r692_t4 + 1;
            }
            var r692_bottom = r1_fallback(r692_bottom, _r692_t0[0]);
            var r692_xMiddle = r1_fallback(r692_xMiddle, _r692_t0[1]);
            var r692_width = r1_fallback(r692_width, _r692_t0[2]);
            var r692_pL = r1_fallback(r692_pL, _r692_t0[3]);
            var r692_pR = r1_fallback(r692_pR, _r692_t0[4]);
            var r692_swMid = r1_fallback(r692_swMid, _r692_t0[5]);
            var r692_swBar = r1_fallback(r692_swBar, _r692_t0[6]);
            return r318_dispiro(r318_widths.lhs(r692_swBar), r318_flat(Math.min(r692_xMiddle + r692_width / 2 * r692_pL, r692_xMiddle - r318_HSwToV(0.5 * r692_swMid)), r692_bottom), r318_curl(Math.max(r692_xMiddle + r692_width / 2 * r692_pR, r692_xMiddle + r318_HSwToV(0.5 * r692_swMid)), r692_bottom));
        };
        var r318_CaronShape = function () {
            var _r697_t5;
            var _r697_t6 = arguments;
            var r697_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r697_t6, 0);
            var _r697_t0 = [];
            var _r697_t1 = 0;
            while (_r697_t1 < r697_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r697_xn$flexarguments$2Lrc7uIe5[_r697_t1] instanceof r318_xn$NamedParameterPair$2Lrc9b)) _r697_t0.push(r697_xn$flexarguments$2Lrc7uIe5[_r697_t1]);
                _r697_t1 = _r697_t1 + 1;
            }
            var _r697_t2 = r697_xn$flexarguments$2Lrc7uIe5;
            var _r697_t3 = _r697_t2.length;
            var _r697_t4 = 0;
            while (_r697_t4 < _r697_t3) {
                _r697_t1 = _r697_t2[_r697_t4];
                if (_r697_t1 && _r697_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r697_t1.left === "top") r697_top = _r697_t1.right;
                if (_r697_t1 && _r697_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r697_t1.left === "bottom") r697_bottom = _r697_t1.right;
                if (_r697_t1 && _r697_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r697_t1.left === "xMiddle") r697_xMiddle = _r697_t1.right;
                if (_r697_t1 && _r697_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r697_t1.left === "width") r697_width = _r697_t1.right;
                if (_r697_t1 && _r697_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r697_t1.left === "swEnd") r697_swEnd = _r697_t1.right;
                if (_r697_t1 && _r697_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r697_t1.left === "swMid") r697_swMid = _r697_t1.right;
                _r697_t4 = _r697_t4 + 1;
            }
            var r697_top = r1_fallback(r697_top, _r697_t0[0]);
            var r697_bottom = r1_fallback(r697_bottom, _r697_t0[1]);
            var r697_xMiddle = r1_fallback(r697_xMiddle, _r697_t0[2]);
            var r697_width = r1_fallback(r697_width, _r697_t0[3]);
            var r697_swEnd = r1_fallback(r697_swEnd, _r697_t0[4]);
            var r697_swMid = r1_fallback(r697_swMid, _r697_t0[5]);
            return r318_union(r318_CaronLeftShape(r697_top, r697_bottom, r697_xMiddle, r697_width, r697_swEnd, r697_swMid), r318_CaronRightShape(r697_top, r697_bottom, r697_xMiddle, r697_width, r697_swEnd, r697_swMid));
        };
        r318_xn$GlyphSaveSink$2Lrc4b.save("caronAbove", 780, new r318_xn$Capture$2Lrc8.GlyphProc(function (r704_currentGlyph) {
            var _r704_t0, _r704_t1;
            r704_currentGlyph.setWidth(0);
            r704_currentGlyph.include(r318_StdAnchors.medium());
            r704_currentGlyph.include(r318_CaronShape(new r318_xn$NamedParameterPair$2Lrc9b("xMiddle", r318_markMiddle), new r318_xn$NamedParameterPair$2Lrc9b("width", r318_CaretCaronWidth), new r318_xn$NamedParameterPair$2Lrc9b("top", r318_aboveMarkTop - r318_markStress + 1.7 * r318_markFine), new r318_xn$NamedParameterPair$2Lrc9b("bottom", r318_aboveMarkBot), new r318_xn$NamedParameterPair$2Lrc9b("swEnd", r318_CaretCaronTerminalSw), new r318_xn$NamedParameterPair$2Lrc9b("swMid", r318_CaretCaronMidSw)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("barupAbove", 7620, new r318_xn$Capture$2Lrc8.GlyphProc(function (r716_currentGlyph) {
            var _r716_t0, _r716_t1;
            r716_currentGlyph.setWidth(0);
            r716_currentGlyph.include(r318_StdAnchors.medium());
            r716_currentGlyph.include(r318_CaronRightShape(new r318_xn$NamedParameterPair$2Lrc9b("xMiddle", r318_markMiddle), new r318_xn$NamedParameterPair$2Lrc9b("width", r318_CaretCaronWidth), new r318_xn$NamedParameterPair$2Lrc9b("top", r318_aboveMarkTop - r318_markStress + 1.7 * r318_markFine), new r318_xn$NamedParameterPair$2Lrc9b("bottom", r318_aboveMarkBot), new r318_xn$NamedParameterPair$2Lrc9b("swEnd", r318_CaretCaronTerminalSw), new r318_xn$NamedParameterPair$2Lrc9b("swMid", r318_CaretCaronMidSw)));
            r716_currentGlyph.include(r318_CaronBottomBarShape(new r318_xn$NamedParameterPair$2Lrc9b("xMiddle", r318_markMiddle), new r318_xn$NamedParameterPair$2Lrc9b("width", r318_CaretCaronWidth), new r318_xn$NamedParameterPair$2Lrc9b("bottom", r318_aboveMarkBot), new r318_xn$NamedParameterPair$2Lrc9b("pL", -1), new r318_xn$NamedParameterPair$2Lrc9b("pR", 0), new r318_xn$NamedParameterPair$2Lrc9b("swMid", r318_CaretCaronMidSw), new r318_xn$NamedParameterPair$2Lrc9b("swBar", 2 * r318_markFine)));
            r716_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("downbarAbove", 7621, new r318_xn$Capture$2Lrc8.GlyphProc(function (r737_currentGlyph) {
            var _r737_t0, _r737_t1;
            r737_currentGlyph.setWidth(0);
            r737_currentGlyph.include(r318_StdAnchors.medium());
            r737_currentGlyph.include(r318_CaronLeftShape(new r318_xn$NamedParameterPair$2Lrc9b("xMiddle", r318_markMiddle), new r318_xn$NamedParameterPair$2Lrc9b("width", r318_CaretCaronWidth), new r318_xn$NamedParameterPair$2Lrc9b("top", r318_aboveMarkTop - r318_markStress + 1.7 * r318_markFine), new r318_xn$NamedParameterPair$2Lrc9b("bottom", r318_aboveMarkBot), new r318_xn$NamedParameterPair$2Lrc9b("swEnd", r318_CaretCaronTerminalSw), new r318_xn$NamedParameterPair$2Lrc9b("swMid", r318_CaretCaronMidSw)));
            r737_currentGlyph.include(r318_CaronBottomBarShape(new r318_xn$NamedParameterPair$2Lrc9b("xMiddle", r318_markMiddle), new r318_xn$NamedParameterPair$2Lrc9b("width", r318_CaretCaronWidth), new r318_xn$NamedParameterPair$2Lrc9b("bottom", r318_aboveMarkBot), new r318_xn$NamedParameterPair$2Lrc9b("pL", 0), new r318_xn$NamedParameterPair$2Lrc9b("pR", +1), new r318_xn$NamedParameterPair$2Lrc9b("swMid", r318_CaretCaronMidSw), new r318_xn$NamedParameterPair$2Lrc9b("swBar", 2 * r318_markFine)));
            r737_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        var r318_caretTop = r318_aboveMarkTop + r318_markFine * 0.7;
        var r318_caretBot = r318_aboveMarkBot + r318_markStress - r318_markFine;
        var r318_caronTop = r318_aboveMarkTop - r318_markStress + 1.7 * r318_markFine;
        var r318_caronBot = r318_aboveMarkBot;
        var r318_toneStep = r318_CaretCaronWidth / 2;
        var r318_ToneBarToPeak = function (r756_x, r756_top, r756_bot) {
            var _r756_t0, _r756_t1;
            return r318_dispiro(r318_flat(r756_x, r756_bot, r318_widths.center(r318_CaretCaronTerminalSw)), r318_curl(r756_x, r756_top, r318_widths.center.heading(r318_CaretCaronMidSw, r318_Upward)));
        };
        var r318_topBarXMin = function (r757_xMiddle, r757_width, r757_pL, r757_swMid) {
            var _r757_t0, _r757_t1;
            return Math.min(r757_xMiddle + r757_width / 2 * r757_pL, r757_xMiddle - r318_HSwToV(0.5 * r757_swMid));
        };
        var r318_topBarXMax = function (r758_xMiddle, r758_width, r758_pR, r758_swMid) {
            var _r758_t0, _r758_t1;
            return Math.max(r758_xMiddle + r758_width / 2 * r758_pR, r758_xMiddle + r318_HSwToV(0.5 * r758_swMid));
        };
        var r318_ToneBarToValley = function (r759_x, r759_top, r759_bot) {
            var _r759_t0, _r759_t1;
            return r318_dispiro(r318_flat(r759_x, r759_top, r318_widths.center(r318_CaretCaronTerminalSw)), r318_curl(r759_x, r759_bot, r318_widths.center.heading(r318_CaretCaronMidSw, r318_Downward)));
        };
        r318_xn$GlyphSaveSink$2Lrc4b.save("graveAcuteGraveAbove", 7624, new r318_xn$Capture$2Lrc8.GlyphProc(function (r762_currentGlyph) {
            var _r762_t0, _r762_t1;
            r762_currentGlyph.setWidth(0);
            r762_currentGlyph.include(r318_StdAnchors.extraWide());
            var r762_xV = r318_markMiddle - r318_toneStep / 2;
            var r762_xP = r318_markMiddle + r318_toneStep / 2;
            r762_currentGlyph.include(r318_union(r318_CaronLeftShape(r318_caretTop, r318_caretBot, r762_xV, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw), r318_intersection(r318_MaskBelow(r318_caretTop), r318_CaronRightShape(r318_caretTop, r318_caretBot, r762_xV, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)), r318_intersection(r318_MaskAbove(r318_caretBot), r318_CaretLeftShape(r318_caretTop, r318_caretBot, r762_xP, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)), r318_CaretRightShape(r318_caretTop, r318_caretBot, r762_xP, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)));
            r762_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("acuteGraveAcuteAbove", 7625, new r318_xn$Capture$2Lrc8.GlyphProc(function (r769_currentGlyph) {
            var _r769_t0, _r769_t1;
            r769_currentGlyph.setWidth(0);
            r769_currentGlyph.include(r318_StdAnchors.extraWide());
            var r769_xP = r318_markMiddle - r318_toneStep / 2;
            var r769_xV = r318_markMiddle + r318_toneStep / 2;
            r769_currentGlyph.include(r318_union(r318_CaretLeftShape(r318_caretTop, r318_caretBot, r769_xP, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw), r318_intersection(r318_MaskAbove(r318_caretBot), r318_CaretRightShape(r318_caretTop, r318_caretBot, r769_xP, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)), r318_intersection(r318_MaskBelow(r318_caretTop), r318_CaronLeftShape(r318_caretTop, r318_caretBot, r769_xV, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)), r318_CaronRightShape(r318_caretTop, r318_caretBot, r769_xV, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)));
            r769_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("dblCircumflexAbove", 6832, new r318_xn$Capture$2Lrc8.GlyphProc(function (r776_currentGlyph) {
            var _r776_t0, _r776_t1;
            r776_currentGlyph.setWidth(0);
            r776_currentGlyph.include(r318_intersection(r318_MaskRight(r318_markMiddle), r318_xn$withtransform$5sIl(r318_Translate(+r318_markExtend, 0), r318_xn$referglyph$1aao("circumflexAbove"))));
            r776_currentGlyph.include(r318_intersection(r318_MaskLeft(r318_markMiddle), r318_xn$withtransform$5sIl(r318_Translate(-r318_markExtend, 0), r318_xn$referglyph$1aao("circumflexAbove"))));
            r776_currentGlyph.include(r318_StdAnchors.extraWide());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("dblCaronAbove", 6863, new r318_xn$Capture$2Lrc8.GlyphProc(function (r783_currentGlyph) {
            var _r783_t0, _r783_t1;
            r783_currentGlyph.setWidth(0);
            r783_currentGlyph.include(r318_intersection(r318_MaskRight(r318_markMiddle), r318_xn$withtransform$5sIl(r318_Translate(+r318_markExtend, 0), r318_xn$referglyph$1aao("caronAbove"))));
            r783_currentGlyph.include(r318_intersection(r318_MaskLeft(r318_markMiddle), r318_xn$withtransform$5sIl(r318_Translate(-r318_markExtend, 0), r318_xn$referglyph$1aao("caronAbove"))));
            r783_currentGlyph.include(r318_StdAnchors.extraWide());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("barAcuteAbove", 6864, new r318_xn$Capture$2Lrc8.GlyphProc(function (r790_currentGlyph) {
            var _r790_t0, _r790_t1;
            r790_currentGlyph.setWidth(0);
            r790_currentGlyph.include(r318_StdAnchors.medium());
            var r790_midHalf = r318_HSwToV(0.5 * r318_CaretCaronMidSw);
            var r790_termHalf = r318_HSwToV(0.5 * r318_CaretCaronTerminalSw);
            var r790_barClear = r790_midHalf;
            var r790_xJoin = r318_markMiddle - r318_toneStep / 2 + 0.5 * (r790_barClear + r790_midHalf - r790_termHalf);
            var r790_xBar = r790_xJoin - r790_barClear;
            r790_currentGlyph.include(r318_union(r318_ToneBarToValley(r790_xBar, r318_caronTop, r318_caronBot), r318_CaronBottomBarShape(r318_caronBot, r790_xJoin, 2 * r790_barClear, -1, 0, r318_CaretCaronMidSw, 2 * r318_markFine), r318_CaronRightShape(r318_caronTop, r318_caronBot, r790_xJoin, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)));
            r790_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("graveBarAbove", 6865, new r318_xn$Capture$2Lrc8.GlyphProc(function (r797_currentGlyph) {
            var _r797_t0, _r797_t1;
            r797_currentGlyph.setWidth(0);
            r797_currentGlyph.include(r318_StdAnchors.medium());
            var r797_midHalf = r318_HSwToV(0.5 * r318_CaretCaronMidSw);
            var r797_termHalf = r318_HSwToV(0.5 * r318_CaretCaronTerminalSw);
            var r797_barClear = r797_midHalf;
            var r797_xJoin = r318_markMiddle + r318_toneStep / 2 - 0.5 * (r797_barClear + r797_midHalf - r797_termHalf);
            var r797_xBar = r797_xJoin + r797_barClear;
            r797_currentGlyph.include(r318_union(r318_CaronLeftShape(r318_caronTop, r318_caronBot, r797_xJoin, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw), r318_CaronBottomBarShape(r318_caronBot, r797_xJoin, 2 * r797_barClear, 0, +1, r318_CaretCaronMidSw, 2 * r318_markFine), r318_ToneBarToValley(r797_xBar, r318_caronTop, r318_caronBot)));
            r797_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("barGraveAbove", 6866, new r318_xn$Capture$2Lrc8.GlyphProc(function (r804_currentGlyph) {
            var _r804_t0, _r804_t1;
            r804_currentGlyph.setWidth(0);
            r804_currentGlyph.include(r318_StdAnchors.medium());
            var r804_midHalf = r318_HSwToV(0.5 * r318_CaretCaronMidSw);
            var r804_termHalf = r318_HSwToV(0.5 * r318_CaretCaronTerminalSw);
            var r804_barClear = r804_midHalf;
            var r804_xJoin = r318_markMiddle - r318_toneStep / 2 + 0.5 * (r804_barClear + r804_midHalf - r804_termHalf);
            var r804_xBar = r804_xJoin - r804_barClear;
            r804_currentGlyph.include(r318_union(r318_ToneBarToPeak(r804_xBar, r318_caretTop, r318_caretBot), r318_CaretTopBarShape(r318_caretTop, r804_xJoin, 2 * r804_barClear, -1, 0, r318_CaretCaronMidSw, 2 * r318_markFine), r318_CaretRightShape(r318_caretTop, r318_caretBot, r804_xJoin, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)));
            r804_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("acuteBarAbove", 6867, new r318_xn$Capture$2Lrc8.GlyphProc(function (r811_currentGlyph) {
            var _r811_t0, _r811_t1;
            r811_currentGlyph.setWidth(0);
            r811_currentGlyph.include(r318_StdAnchors.medium());
            var r811_midHalf = r318_HSwToV(0.5 * r318_CaretCaronMidSw);
            var r811_termHalf = r318_HSwToV(0.5 * r318_CaretCaronTerminalSw);
            var r811_barClear = r811_midHalf;
            var r811_xJoin = r318_markMiddle + r318_toneStep / 2 - 0.5 * (r811_barClear + r811_midHalf - r811_termHalf);
            var r811_xBar = r811_xJoin + r811_barClear;
            r811_currentGlyph.include(r318_union(r318_CaretLeftShape(r318_caretTop, r318_caretBot, r811_xJoin, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw), r318_CaretTopBarShape(r318_caretTop, r811_xJoin, 2 * r811_barClear, 0, +1, r318_CaretCaronMidSw, 2 * r318_markFine), r318_ToneBarToPeak(r811_xBar, r318_caretTop, r318_caretBot)));
            r811_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("barMacronAbove", 6868, new r318_xn$Capture$2Lrc8.GlyphProc(function (r818_currentGlyph) {
            var _r818_t0, _r818_t1;
            r818_currentGlyph.setWidth(0);
            r818_currentGlyph.include(r318_StdAnchors.mediumWide());
            var r818_midHalf = r318_HSwToV(0.5 * r318_CaretCaronMidSw);
            var r818_termHalf = r318_HSwToV(0.5 * r318_CaretCaronTerminalSw);
            var r818_barClear = r818_midHalf;
            var r818_xJoin = r318_markMiddle - r318_markExtend + 0.5 * (r818_barClear + r818_midHalf - r818_termHalf);
            var r818_xBar = r818_xJoin - r818_barClear;
            var r818_macW = 2 * (r318_markMiddle + r318_markExtend - r818_xJoin);
            var r818_xBarL = r818_xBar - r818_termHalf;
            var r818_xBarR = r818_xBar + r818_termHalf;
            var r818_joinBarL = r318_topBarXMin(r818_xJoin, 2 * r818_barClear, -1, r318_CaretCaronMidSw);
            var r818_joinBarR = r318_topBarXMin(r818_xJoin, r818_macW, 0, r318_CaretCaronMidSw);
            var r818_joinBarL2 = r318_topBarXMax(r818_xJoin, 2 * r818_barClear, 0, r318_CaretCaronMidSw);
            var r818_joinBarR2 = r318_topBarXMax(r818_xJoin, r818_macW, +1, r318_CaretCaronMidSw);
            var r818_xMin = Math.min(r818_xBarL, r818_joinBarL, r818_joinBarR);
            var r818_xMax = Math.max(r818_xBarR, r818_joinBarL2, r818_joinBarR2);
            var r818_xShift = r318_markMiddle - r1_mix(r818_xMin, r818_xMax, 0.5);
            r818_currentGlyph.include(r318_xn$withtransform$5sIl(r318_ApparentTranslate(r818_xShift, 0), r318_union(r318_ToneBarToPeak(r818_xBar, r318_caretTop, r318_caretBot), r318_CaretTopBarShape(r318_caretTop, r818_xJoin, 2 * r818_barClear, -1, 0, r318_CaretCaronMidSw, 2 * r318_markFine), r318_CaretTopBarShape(r318_caretTop, r818_xJoin, r818_macW, 0, +1, r318_CaretCaronMidSw, 2 * r318_markFine))));
            r818_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("macronBarAbove", 6869, new r318_xn$Capture$2Lrc8.GlyphProc(function (r825_currentGlyph) {
            var _r825_t0, _r825_t1;
            r825_currentGlyph.setWidth(0);
            r825_currentGlyph.include(r318_StdAnchors.mediumWide());
            var r825_midHalf = r318_HSwToV(0.5 * r318_CaretCaronMidSw);
            var r825_termHalf = r318_HSwToV(0.5 * r318_CaretCaronTerminalSw);
            var r825_barClear = r825_midHalf;
            var r825_xJoin = r318_markMiddle + r318_markExtend - 0.5 * (r825_barClear + r825_midHalf - r825_termHalf);
            var r825_xBar = r825_xJoin + r825_barClear;
            var r825_macW = 2 * (r825_xJoin - (r318_markMiddle - r318_markExtend));
            var r825_xBarL = r825_xBar - r825_termHalf;
            var r825_xBarR = r825_xBar + r825_termHalf;
            var r825_joinMacL = r318_topBarXMin(r825_xJoin, r825_macW, -1, r318_CaretCaronMidSw);
            var r825_joinBarL = r318_topBarXMin(r825_xJoin, 2 * r825_barClear, 0, r318_CaretCaronMidSw);
            var r825_joinMacR = r318_topBarXMax(r825_xJoin, r825_macW, 0, r318_CaretCaronMidSw);
            var r825_joinBarR = r318_topBarXMax(r825_xJoin, 2 * r825_barClear, +1, r318_CaretCaronMidSw);
            var r825_xMin = Math.min(r825_xBarL, r825_joinMacL, r825_joinBarL);
            var r825_xMax = Math.max(r825_xBarR, r825_joinMacR, r825_joinBarR);
            var r825_xShift = r318_markMiddle - r1_mix(r825_xMin, r825_xMax, 0.5);
            r825_currentGlyph.include(r318_xn$withtransform$5sIl(r318_ApparentTranslate(r825_xShift, 0), r318_union(r318_CaretTopBarShape(r318_caretTop, r825_xJoin, r825_macW, -1, 0, r318_CaretCaronMidSw, 2 * r318_markFine), r318_CaretTopBarShape(r318_caretTop, r825_xJoin, 2 * r825_barClear, 0, +1, r318_CaretCaronMidSw, 2 * r318_markFine), r318_ToneBarToPeak(r825_xBar, r318_caretTop, r318_caretBot))));
            r825_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("barAcuteGraveAbove", 6870, new r318_xn$Capture$2Lrc8.GlyphProc(function (r832_currentGlyph) {
            var _r832_t0, _r832_t1;
            r832_currentGlyph.setWidth(0);
            r832_currentGlyph.include(r318_StdAnchors.extraWide());
            var r832_midHalf = r318_HSwToV(0.5 * r318_CaretCaronMidSw);
            var r832_termHalf = r318_HSwToV(0.5 * r318_CaretCaronTerminalSw);
            var r832_barClear = r832_midHalf;
            var r832_xC = r318_markMiddle + 0.5 * (r832_barClear + r832_midHalf - r832_termHalf);
            var r832_xJoin = r832_xC - r318_toneStep;
            var r832_xBar = r832_xJoin - r832_barClear;
            r832_currentGlyph.include(r318_union(r318_ToneBarToValley(r832_xBar, r318_caretTop, r318_caretBot), r318_CaronBottomBarShape(r318_caretBot, r832_xJoin, 2 * r832_barClear, -1, 0, r318_CaretCaronMidSw, 2 * r318_markFine), r318_intersection(r318_MaskBelow(r318_caretTop), r318_CaronRightShape(r318_caretTop, r318_caretBot, r832_xJoin, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)), r318_intersection(r318_MaskAbove(r318_caretBot), r318_CaretLeftShape(r318_caretTop, r318_caretBot, r832_xC, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)), r318_CaretRightShape(r318_caretTop, r318_caretBot, r832_xC, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)));
            r832_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("barGraveAcuteAbove", 6871, new r318_xn$Capture$2Lrc8.GlyphProc(function (r839_currentGlyph) {
            var _r839_t0, _r839_t1;
            r839_currentGlyph.setWidth(0);
            r839_currentGlyph.include(r318_StdAnchors.extraWide());
            var r839_midHalf = r318_HSwToV(0.5 * r318_CaretCaronMidSw);
            var r839_termHalf = r318_HSwToV(0.5 * r318_CaretCaronTerminalSw);
            var r839_barClear = r839_midHalf;
            var r839_xC = r318_markMiddle + 0.5 * (r839_barClear + r839_midHalf - r839_termHalf);
            var r839_xJoin = r839_xC - r318_toneStep;
            var r839_xBar = r839_xJoin - r839_barClear;
            r839_currentGlyph.include(r318_union(r318_ToneBarToPeak(r839_xBar, r318_caronTop, r318_caronBot), r318_CaretTopBarShape(r318_caronTop, r839_xJoin, 2 * r839_barClear, -1, 0, r318_CaretCaronMidSw, 2 * r318_markFine), r318_intersection(r318_MaskAbove(r318_caronBot), r318_CaretRightShape(r318_caronTop, r318_caronBot, r839_xJoin, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)), r318_intersection(r318_MaskBelow(r318_caronTop), r318_CaronLeftShape(r318_caronTop, r318_caronBot, r839_xC, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)), r318_CaronRightShape(r318_caronTop, r318_caronBot, r839_xC, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)));
            r839_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("macronAcuteGraveAbove", 6872, new r318_xn$Capture$2Lrc8.GlyphProc(function (r846_currentGlyph) {
            var _r846_t0, _r846_t1;
            r846_currentGlyph.setWidth(0);
            r846_currentGlyph.include(r318_StdAnchors.extraWide());
            var r846_termHalf = r318_HSwToV(0.5 * r318_CaretCaronTerminalSw);
            var r846_xC = r318_markMiddle + 0.5 * r318_toneStep - 0.5 * r846_termHalf;
            var r846_xL = r846_xC - r318_toneStep;
            r846_currentGlyph.include(r318_union(r318_CaronBottomBarShape(r318_caretBot, r846_xL, r318_CaretCaronWidth, -1, 0, r318_CaretCaronMidSw, 2 * r318_markFine), r318_intersection(r318_MaskBelow(r318_caretTop), r318_CaronRightShape(r318_caretTop, r318_caretBot, r846_xL, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)), r318_intersection(r318_MaskAbove(r318_caretBot), r318_CaretLeftShape(r318_caretTop, r318_caretBot, r846_xC, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)), r318_CaretRightShape(r318_caretTop, r318_caretBot, r846_xC, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)));
            r846_currentGlyph.include(r318_AlignToneMarkAbove());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("caronAcuteAbove", 6892, new r318_xn$Capture$2Lrc8.GlyphProc(function (r853_currentGlyph) {
            var _r853_t0, _r853_t1;
            r853_currentGlyph.setWidth(0);
            var r853_acuteShift = r318_markExtend + r318_StrokeWidthBlend(0, 0.45) * r318_markStroke;
            r853_currentGlyph.include(r318_xn$withtransform$5sIl(r318_Translate(-r318_markExtend, 0), r318_xn$referglyph$1aao("caronAbove")));
            r853_currentGlyph.include(r318_xn$withtransform$5sIl(r318_Translate(r853_acuteShift, 0), r318_xn$referglyph$1aao("acuteAbove")));
            r853_currentGlyph.include(r318_AlignToneMarkAbove());
            r853_currentGlyph.include(r318_StdAnchors.extraWide());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("barDoubleAcuteAbove", 6893, new r318_xn$Capture$2Lrc8.GlyphProc(function (r861_currentGlyph) {
            var _r861_t0, _r861_t1;
            r861_currentGlyph.setWidth(0);
            var r861_midHalf = r318_HSwToV(0.5 * r318_CaretCaronMidSw);
            var r861_barClear = r861_midHalf;
            var r861_xJoin = r318_markMiddle - r318_markExtend + 0.5 * r861_barClear;
            var r861_xBar = r861_xJoin - r861_barClear;
            var r861_acuteShift = r318_markExtend * 0.85 + 0.5 * r861_barClear + r318_StrokeWidthBlend(0, 0.45) * r318_markStroke;
            r861_currentGlyph.include(r318_union(r318_ToneBarToValley(r861_xBar, r318_caronTop, r318_caronBot), r318_CaronBottomBarShape(r318_caronBot, r861_xJoin, 2 * r861_barClear, -1, 0, r318_CaretCaronMidSw, 2 * r318_markFine), r318_CaronRightShape(r318_caronTop, r318_caronBot, r861_xJoin, r318_CaretCaronWidth, r318_CaretCaronTerminalSw, r318_CaretCaronMidSw)));
            r861_currentGlyph.include(r318_xn$withtransform$5sIl(r318_Translate(r861_acuteShift, 0), r318_xn$referglyph$1aao("acuteAbove")));
            r861_currentGlyph.include(r318_AlignToneMarkAbove());
            r861_currentGlyph.include(r318_StdAnchors.extraWide());
            return void 0;
        }));
        var r318_TildeKnots = function () {
            var _r867_t5;
            var _r867_t6 = arguments;
            var r867_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r867_t6, 0);
            var _r867_t0 = [];
            var _r867_t1 = 0;
            while (_r867_t1 < r867_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r867_xn$flexarguments$2Lrc7uIe5[_r867_t1] instanceof r318_xn$NamedParameterPair$2Lrc9b)) _r867_t0.push(r867_xn$flexarguments$2Lrc7uIe5[_r867_t1]);
                _r867_t1 = _r867_t1 + 1;
            }
            var _r867_t2 = r867_xn$flexarguments$2Lrc7uIe5;
            var _r867_t3 = _r867_t2.length;
            var _r867_t4 = 0;
            while (_r867_t4 < _r867_t3) {
                _r867_t1 = _r867_t2[_r867_t4];
                if (_r867_t1 && _r867_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r867_t1.left === "ttop") r867_ttop = _r867_t1.right;
                if (_r867_t1 && _r867_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r867_t1.left === "tbot") r867_tbot = _r867_t1.right;
                if (_r867_t1 && _r867_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r867_t1.left === "leftEnd") r867_leftEnd = _r867_t1.right;
                if (_r867_t1 && _r867_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r867_t1.left === "rightEnd") r867_rightEnd = _r867_t1.right;
                if (_r867_t1 && _r867_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r867_t1.left === "hs") r867_hs = _r867_t1.right;
                _r867_t4 = _r867_t4 + 1;
            }
            var r867_ttop = r1_fallback(r867_ttop, _r867_t0[0]);
            var r867_tbot = r1_fallback(r867_tbot, _r867_t0[1]);
            var r867_leftEnd = r1_fallback(r867_leftEnd, _r867_t0[2]);
            var r867_rightEnd = r1_fallback(r867_rightEnd, _r867_t0[3]);
            var r867_hs = r1_fallback(r867_hs, _r867_t0[4]);
            return new r318_xn$Capture$2Lrc8.GlyphProc(function (r873_currentGlyph) {
                var _r873_t0, _r873_t1;
                var r873_height = Math.abs(r867_ttop - r867_tbot);
                var r873_hsvh = 2 * r867_hs / r873_height;
                var r873_hvc = (r867_rightEnd - r867_leftEnd) / r873_height;
                var r873_defaultHvc = 2 * (r318_markExtend * 1.5) / (r318_aboveMarkTop - r318_aboveMarkBot - r318_markFine / 2);
                var r873_hsvhThin = 0.116;
                var r873_hsvhHeav = 0.732;
                var r873_tildeWaveY = r1_linreg(r873_hsvhThin, 2.925, r873_hsvhHeav, 2.375, r873_hsvh) * r1_linreg(r873_defaultHvc, 1, 4.35, 1.1, r873_hvc);
                var r873_tildeWaveX = 0.51;
                var r873_z1 = r873_currentGlyph.gizmo.apply({
                    "x": r1_mix(r867_leftEnd, r867_rightEnd, 0),
                    "y": r1_mix(r867_tbot, r867_ttop, 0)
                });
                var r873_z2 = r873_currentGlyph.gizmo.apply({
                    "x": r1_mix(r867_leftEnd, r867_rightEnd, 0 + r873_tildeWaveX),
                    "y": r1_mix(r867_tbot, r867_ttop, 0 + r873_tildeWaveY)
                });
                var r873_z3 = r873_currentGlyph.gizmo.apply({
                    "x": r1_mix(r867_leftEnd, r867_rightEnd, 1 - r873_tildeWaveX),
                    "y": r1_mix(r867_tbot, r867_ttop, 1 - r873_tildeWaveY)
                });
                var r873_z4 = r873_currentGlyph.gizmo.apply({
                    "x": r1_mix(r867_leftEnd, r867_rightEnd, 1),
                    "y": r1_mix(r867_tbot, r867_ttop, 1)
                });
                return [r873_z1, r873_z2, r873_z3, r873_z4];
            });
        };
        r318_xn$ExportCapture$2Lrc4b(function () {
            var _r875_t0, _r875_t1;
            return {
                "TildeShape": r318_TildeShape
            };
        });
        var r318_TildeShape = function () {
            var _r876_t5;
            var _r876_t6 = arguments;
            var r876_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r876_t6, 0);
            var _r876_t0 = [];
            var _r876_t1 = 0;
            while (_r876_t1 < r876_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r876_xn$flexarguments$2Lrc7uIe5[_r876_t1] instanceof r318_xn$NamedParameterPair$2Lrc9b)) _r876_t0.push(r876_xn$flexarguments$2Lrc7uIe5[_r876_t1]);
                _r876_t1 = _r876_t1 + 1;
            }
            var _r876_t2 = r876_xn$flexarguments$2Lrc7uIe5;
            var _r876_t3 = _r876_t2.length;
            var _r876_t4 = 0;
            while (_r876_t4 < _r876_t3) {
                _r876_t1 = _r876_t2[_r876_t4];
                if (_r876_t1 && _r876_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r876_t1.left === "ttop") r876_ttop = _r876_t1.right;
                if (_r876_t1 && _r876_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r876_t1.left === "tbot") r876_tbot = _r876_t1.right;
                if (_r876_t1 && _r876_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r876_t1.left === "leftEnd") r876_leftEnd = _r876_t1.right;
                if (_r876_t1 && _r876_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r876_t1.left === "rightEnd") r876_rightEnd = _r876_t1.right;
                if (_r876_t1 && _r876_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r876_t1.left === "hs") r876_hs = _r876_t1.right;
                _r876_t4 = _r876_t4 + 1;
            }
            var r876_ttop = r1_fallback(r876_ttop, _r876_t0[0]);
            var r876_tbot = r1_fallback(r876_tbot, _r876_t0[1]);
            var r876_leftEnd = r1_fallback(r876_leftEnd, _r876_t0[2]);
            var r876_rightEnd = r1_fallback(r876_rightEnd, _r876_t0[3]);
            var r876_hs = r1_fallback(r876_hs, _r876_t0[4]);
            return new r318_xn$Capture$2Lrc8.GlyphProc(function (r882_currentGlyph) {
                var _r882_t1, _r882_t2;
                var _r882_t0 = r882_currentGlyph.include(r318_TildeKnots(r876_ttop, r876_tbot, r876_leftEnd, r876_rightEnd, r876_hs));
                var r882_z1 = _r882_t0[0];
                var r882_z2 = _r882_t0[1];
                var r882_z3 = _r882_t0[2];
                var r882_z4 = _r882_t0[3];
                var r882_bone = new r1_Arcs.Bez3(r882_z1, r882_z2, r882_z3, r882_z4);
                var r882_inner = new r1_OffsetCurve(r882_bone, +r876_hs, r318_HVContrast);
                var r882_outer = new r1_Arcs.Reverted(new r1_OffsetCurve(r882_bone, -r876_hs, r318_HVContrast));
                var r882_cs = new r1_BezToContoursSink();
                r1_ShapeConv.transferGenericShapeAsBezier([[r882_inner, r882_outer]], r882_cs, r1_GEOMETRY_PRECISION);
                r882_currentGlyph.includeContours(r882_cs.contours);
                return void 0;
            });
        };
        var r318_mixZ = function (r884_a, r884_b, r884_k) {
            var _r884_t0, _r884_t1;
            return {
                "x": r1_mix(r884_a.x, r884_b.x, r884_k),
                "y": r1_mix(r884_a.y, r884_b.y, r884_k)
            };
        };
        var r318_flipZX = function (r885_z, r885_cx) {
            var _r885_t0, _r885_t1;
            return {
                "x": 2 * r885_cx - r885_z.x,
                "y": 0 + r885_z.y
            };
        };
        var r318_shiftZX = function (r886_z, r886_dx) {
            var _r886_t0, _r886_t1;
            return {
                "x": r886_z.x + r886_dx,
                "y": 0 + r886_z.y
            };
        };
        var r318_splitBez = function (r887_p0, r887_p1, r887_p2, r887_p3, r887_t) {
            var _r887_t0, _r887_t1;
            var r887_ab = r318_mixZ(r887_p0, r887_p1, r887_t);
            var r887_bc = r318_mixZ(r887_p1, r887_p2, r887_t);
            var r887_cd = r318_mixZ(r887_p2, r887_p3, r887_t);
            var r887_abc = r318_mixZ(r887_ab, r887_bc, r887_t);
            var r887_bcd = r318_mixZ(r887_bc, r887_cd, r887_t);
            var r887_j = r318_mixZ(r887_abc, r887_bcd, r887_t);
            return [r887_p0, r887_ab, r887_abc, r887_j, r887_bcd, r887_cd, r887_p3];
        };
        r318_xn$ExportCapture$2Lrc4b(function () {
            var _r889_t0, _r889_t1;
            return {
                "WigglyLineShape": r318_WigglyLineShape
            };
        });
        var r318_WigglyLineShape = function () {
            var _r890_t5;
            var _r890_t6 = arguments;
            var r890_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r890_t6, 0);
            var _r890_t0 = [];
            var _r890_t1 = 0;
            while (_r890_t1 < r890_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r890_xn$flexarguments$2Lrc7uIe5[_r890_t1] instanceof r318_xn$NamedParameterPair$2Lrc9b)) _r890_t0.push(r890_xn$flexarguments$2Lrc7uIe5[_r890_t1]);
                _r890_t1 = _r890_t1 + 1;
            }
            var _r890_t2 = r890_xn$flexarguments$2Lrc7uIe5;
            var _r890_t3 = _r890_t2.length;
            var _r890_t4 = 0;
            while (_r890_t4 < _r890_t3) {
                _r890_t1 = _r890_t2[_r890_t4];
                if (_r890_t1 && _r890_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r890_t1.left === "ttop") r890_ttop = _r890_t1.right;
                if (_r890_t1 && _r890_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r890_t1.left === "tbot") r890_tbot = _r890_t1.right;
                if (_r890_t1 && _r890_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r890_t1.left === "width") r890_width = _r890_t1.right;
                if (_r890_t1 && _r890_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r890_t1.left === "hs") r890_hs = _r890_t1.right;
                _r890_t4 = _r890_t4 + 1;
            }
            var r890_ttop = r1_fallback(r890_ttop, _r890_t0[0]);
            var r890_tbot = r1_fallback(r890_tbot, _r890_t0[1]);
            var r890_width = r1_fallback(r890_width, _r890_t0[2]);
            var r890_hs = r1_fallback(r890_hs, _r890_t0[3]);
            return new r318_xn$Capture$2Lrc8.GlyphProc(function (r896_currentGlyph) {
                var r896_disc, r896_rt, r896_tPlus, r896_tMinus, _r896_t3, _r896_t4;
                var r896_designPt = function (r897_z) {
                    var _r897_t0, _r897_t1;
                    return r896_currentGlyph.gizmo.unapply(r897_z);
                };
                var r896_framePt = function (r898_z) {
                    var _r898_t0, _r898_t1;
                    return r896_currentGlyph.gizmo.apply(r898_z);
                };
                var _r896_t0 = r896_currentGlyph.include(r318_TildeKnots(new r318_xn$NamedParameterPair$2Lrc9b("ttop", r890_ttop), new r318_xn$NamedParameterPair$2Lrc9b("tbot", r890_tbot), new r318_xn$NamedParameterPair$2Lrc9b("leftEnd", r318_markMiddle - 0.75 * r890_width), new r318_xn$NamedParameterPair$2Lrc9b("rightEnd", r318_markMiddle + 0.25 * r890_width), new r318_xn$NamedParameterPair$2Lrc9b("hs", r890_hs)));
                var r896__z1 = _r896_t0[0];
                var r896__z2 = _r896_t0[1];
                var r896__z3 = _r896_t0[2];
                var r896__z4 = _r896_t0[3];
                var r896_z1 = r896_designPt(r896__z1);
                var r896_z2 = r896_designPt(r896__z2);
                var r896_z3 = r896_designPt(r896__z3);
                var r896_z4 = r896_designPt(r896__z4);
                var r896_a = r896_z2.y - r896_z1.y;
                var r896_b = r896_z3.y - r896_z2.y;
                var r896_c = r896_z4.y - r896_z3.y;
                var r896_qa = r896_a - 2 * r896_b + r896_c;
                var r896_qb = 2 * r896_b - 2 * r896_a;
                var r896_qc = r896_a;
                var r896_tPeak = 0.25;
                var r896_tTrough = 0.75;
                if (Math.abs(r896_qa) > 1e-8) {
                    r896_disc = Math.max(0, r896_qb * r896_qb - 4 * r896_qa * r896_qc);
                    r896_rt = Math.sqrt(r896_disc);
                    r896_tPlus = (0 - r896_qb + r896_rt) / (2 * r896_qa);
                    r896_tMinus = (0 - r896_qb - r896_rt) / (2 * r896_qa);
                    if (r896_tPlus > 0 && r896_tPlus < 0.5) r896_tPeak = r896_tPlus;
                    if (r896_tMinus > 0 && r896_tMinus < 0.5) r896_tPeak = r896_tMinus;
                    if (r896_tPlus > 0.5 && r896_tPlus < 1) r896_tTrough = r896_tPlus;
                    if (r896_tMinus > 0.5 && r896_tMinus < 1) r896_tTrough = r896_tMinus;
                }
                var _r896_t1 = r318_splitBez(r896_z1, r896_z2, r896_z3, r896_z4, r896_tTrough);
                var r896_l0 = _r896_t1[0];
                var r896_l1 = _r896_t1[1];
                var r896_l2 = _r896_t1[2];
                var r896_j = _r896_t1[3];
                var r896__r1 = _r896_t1[4];
                var r896__r2 = _r896_t1[5];
                var r896__r3 = _r896_t1[6];
                var r896_tDown = r896_tPeak / r896_tTrough;
                var _r896_t2 = r318_splitBez(r896_l0, r896_l1, r896_l2, r896_j, r896_tDown);
                var r896__u0 = _r896_t2[0];
                var r896__u1 = _r896_t2[1];
                var r896__u2 = _r896_t2[2];
                var r896_peak = _r896_t2[3];
                var r896_d1 = _r896_t2[4];
                var r896_d2 = _r896_t2[5];
                var r896_d3 = _r896_t2[6];
                var r896_pPrime = r318_flipZX(r896_peak, r896_j.x);
                var r896_dxDown = r896_pPrime.x - r896_peak.x;
                var r896_jPrime = r318_shiftZX(r896_j, r896_dxDown);
                var r896_md1 = r318_shiftZX(r896_d1, r896_dxDown);
                var r896_md2 = r318_shiftZX(r896_d2, r896_dxDown);
                var r896_mu1 = r318_flipZX(r896_d2, r896_j.x);
                var r896_mu2 = r318_flipZX(r896_d1, r896_j.x);
                var r896_cx = r1_mix(r896_j.x, r896_jPrime.x, 0.5);
                var r896_dx = r318_markMiddle - r896_cx;
                var r896_at = function (r905_z) {
                    var _r905_t0, _r905_t1;
                    return r318_shiftZX(r905_z, r896_dx);
                };
                var r896_fL0 = r896_framePt(r896_at(r896_l0));
                var r896_fL1 = r896_framePt(r896_at(r896_l1));
                var r896_fL2 = r896_framePt(r896_at(r896_l2));
                var r896_fJ = r896_framePt(r896_at(r896_j));
                var r896_fMu1 = r896_framePt(r896_at(r896_mu1));
                var r896_fMu2 = r896_framePt(r896_at(r896_mu2));
                var r896_fP = r896_framePt(r896_at(r896_pPrime));
                var r896_fMd1 = r896_framePt(r896_at(r896_md1));
                var r896_fMd2 = r896_framePt(r896_at(r896_md2));
                var r896_fJp = r896_framePt(r896_at(r896_jPrime));
                var r896_jpAt = r896_at(r896_jPrime);
                var r896_r1 = r318_shiftZX(r318_flipZX(r896_l2, r896_j.x), r896_jPrime.x - r896_j.x);
                var r896_r2 = r318_shiftZX(r318_flipZX(r896_l1, r896_j.x), r896_jPrime.x - r896_j.x);
                var r896_r3 = r318_shiftZX(r318_flipZX(r896_l0, r896_j.x), r896_jPrime.x - r896_j.x);
                var r896_boneL = new r1_Arcs.Bez3(r896_fL0, r896_fL1, r896_fL2, r896_fJ);
                var r896_boneM1 = new r1_Arcs.Bez3(r896_fJ, r896_fMu1, r896_fMu2, r896_fP);
                var r896_boneM2 = new r1_Arcs.Bez3(r896_fP, r896_fMd1, r896_fMd2, r896_fJp);
                var r896_boneR = new r1_Arcs.Bez3(r896_fJp, r896_framePt(r896_at(r896_r1)), r896_framePt(r896_at(r896_r2)), r896_framePt(r896_at(r896_r3)));
                var r896_innerL = new r1_OffsetCurve(r896_boneL, +r890_hs, r318_HVContrast);
                var r896_innerM1 = new r1_OffsetCurve(r896_boneM1, +r890_hs, r318_HVContrast);
                var r896_innerM2 = new r1_OffsetCurve(r896_boneM2, +r890_hs, r318_HVContrast);
                var r896_innerR = new r1_OffsetCurve(r896_boneR, +r890_hs, r318_HVContrast);
                var r896_outerL = new r1_OffsetCurve(r896_boneL, -r890_hs, r318_HVContrast);
                var r896_outerM1 = new r1_OffsetCurve(r896_boneM1, -r890_hs, r318_HVContrast);
                var r896_outerM2 = new r1_OffsetCurve(r896_boneM2, -r890_hs, r318_HVContrast);
                var r896_outerR = new r1_OffsetCurve(r896_boneR, -r890_hs, r318_HVContrast);
                var r896_cs = new r1_BezToContoursSink();
                r1_ShapeConv.transferGenericShapeAsBezier([[r896_innerL, r896_innerM1, r896_innerM2, r896_innerR, new r1_Arcs.Reverted(r896_outerR), new r1_Arcs.Reverted(r896_outerM2), new r1_Arcs.Reverted(r896_outerM1), new r1_Arcs.Reverted(r896_outerL)]], r896_cs, r1_GEOMETRY_PRECISION);
                r896_currentGlyph.includeContours(r896_cs.contours);
                return void 0;
            });
        };
        r318_xn$ExportCapture$2Lrc4b(function () {
            var _r907_t0, _r907_t1;
            return {
                "SnakeBelowShape": r318_SnakeBelowShape
            };
        });
        var r318_SnakeBelowShape = function () {
            var _r908_t5;
            var _r908_t6 = arguments;
            var r908_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r908_t6, 0);
            var _r908_t0 = [];
            var _r908_t1 = 0;
            while (_r908_t1 < r908_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r908_xn$flexarguments$2Lrc7uIe5[_r908_t1] instanceof r318_xn$NamedParameterPair$2Lrc9b)) _r908_t0.push(r908_xn$flexarguments$2Lrc7uIe5[_r908_t1]);
                _r908_t1 = _r908_t1 + 1;
            }
            var _r908_t2 = r908_xn$flexarguments$2Lrc7uIe5;
            var _r908_t3 = _r908_t2.length;
            var _r908_t4 = 0;
            while (_r908_t4 < _r908_t3) {
                _r908_t1 = _r908_t2[_r908_t4];
                if (_r908_t1 && _r908_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r908_t1.left === "ttop") r908_ttop = _r908_t1.right;
                if (_r908_t1 && _r908_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r908_t1.left === "tbot") r908_tbot = _r908_t1.right;
                if (_r908_t1 && _r908_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r908_t1.left === "topAmp") r908_topAmp = _r908_t1.right;
                if (_r908_t1 && _r908_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r908_t1.left === "botAmp") r908_botAmp = _r908_t1.right;
                if (_r908_t1 && _r908_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r908_t1.left === "hsTop") r908_hsTop = _r908_t1.right;
                if (_r908_t1 && _r908_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r908_t1.left === "hsBot") r908_hsBot = _r908_t1.right;
                _r908_t4 = _r908_t4 + 1;
            }
            var r908_ttop = r1_fallback(r908_ttop, _r908_t0[0]);
            var r908_tbot = r1_fallback(r908_tbot, _r908_t0[1]);
            var r908_topAmp = r1_fallback(r908_topAmp, _r908_t0[2]);
            var r908_botAmp = r1_fallback(r908_botAmp, _r908_t0[3]);
            var r908_hsTop = r1_fallback(r908_hsTop, _r908_t0[4]);
            var r908_hsBot = r1_fallback(r908_hsBot, _r908_t0[5]);
            return new r318_xn$Capture$2Lrc8.GlyphProc(function (r914_currentGlyph) {
                var _r914_t0, _r914_t1;
                var r914_framePt = function (r915_z) {
                    var _r915_t0, _r915_t1;
                    return r914_currentGlyph.gizmo.apply(r915_z);
                };
                var r914_midY = r1_mix(r908_ttop, r908_tbot, 0.45);
                var r914_pt = function (r916_x, r916_y) {
                    var _r916_t0, _r916_t1;
                    return r914_framePt({
                        "x": 0 + r916_x,
                        "y": 0 + r916_y
                    });
                };
                var r914_xT0 = r318_markMiddle + 0.12 * r908_topAmp;
                var r914_xT1 = r318_markMiddle - r908_topAmp;
                var r914_yT1 = r1_mix(r908_ttop, r914_midY, 0.3);
                var r914_yT2 = r1_mix(r908_ttop, r914_midY, 0.7);
                var r914_pT0 = r914_pt(r914_xT0, r908_ttop);
                var r914_pT1 = r914_pt(r914_xT1, r914_yT1);
                var r914_pT2 = r914_pt(r914_xT1, r914_yT2);
                var r914_pT3 = r914_pt(r318_markMiddle, r914_midY);
                var r914_xB1 = r318_markMiddle - r908_botAmp;
                var r914_yB1 = r1_mix(r914_midY, r908_tbot, 0.3);
                var r914_yB2 = r1_mix(r914_midY, r908_tbot, 0.7);
                var r914_xB3 = r318_markMiddle + 0.1 * r908_botAmp;
                var r914_pB1 = r914_pt(r914_xB1, r914_yB1);
                var r914_pB2 = r914_pt(r914_xB1, r914_yB2);
                var r914_pB3 = r914_pt(r914_xB3, r908_tbot);
                var r914_boneT = new r1_Arcs.Bez3(r914_pT0, r914_pT1, r914_pT2, r914_pT3);
                var r914_boneB = new r1_Arcs.Bez3(r914_pT3, r914_pB1, r914_pB2, r914_pB3);
                var r914_innerT = new r1_OffsetCurve(r914_boneT, r908_hsTop, r318_HVContrast);
                var r914_innerB = new r1_TaperedOffsetCurve(r914_boneB, r908_hsTop, r908_hsBot, r318_HVContrast);
                var r914_outerT = new r1_OffsetCurve(r914_boneT, 0 - r908_hsTop, r318_HVContrast);
                var r914_outerB = new r1_TaperedOffsetCurve(r914_boneB, 0 - r908_hsTop, 0 - r908_hsBot, r318_HVContrast);
                var r914_cs = new r1_BezToContoursSink();
                r1_ShapeConv.transferGenericShapeAsBezier([[r914_innerT, r914_innerB, new r1_Arcs.Reverted(r914_outerB), new r1_Arcs.Reverted(r914_outerT)]], r914_cs, r1_GEOMETRY_PRECISION);
                r914_currentGlyph.includeContours(r914_cs.contours);
                return void 0;
            });
        };
        r318_xn$GlyphSaveSink$2Lrc4b.save("tildeAbove", 771, new r318_xn$Capture$2Lrc8.GlyphProc(function (r919_currentGlyph) {
            var _r919_t0, _r919_t1;
            r919_currentGlyph.setWidth(0);
            r919_currentGlyph.include(r318_StdAnchors.wide());
            r919_currentGlyph.include(r318_TildeShape(new r318_xn$NamedParameterPair$2Lrc9b("ttop", r318_aboveMarkTop), new r318_xn$NamedParameterPair$2Lrc9b("tbot", r318_aboveMarkBot + r318_markFine / 2), new r318_xn$NamedParameterPair$2Lrc9b("leftEnd", r318_markMiddle - r318_markExtend * 1.5), new r318_xn$NamedParameterPair$2Lrc9b("rightEnd", r318_markMiddle + r318_markExtend * 1.5), new r318_xn$NamedParameterPair$2Lrc9b("hs", r318_markHalfStroke)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("asciiTilde.high", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r930_currentGlyph) {
            var _r930_t0, _r930_t1;
            r930_currentGlyph.include(r318_TildeShape(new r318_xn$NamedParameterPair$2Lrc9b("ttop", r1_mix(r318_aboveMarkMid, r318_aboveMarkTop, r318_asciiMarkZoomY)), new r318_xn$NamedParameterPair$2Lrc9b("tbot", r1_mix(r318_aboveMarkMid, r318_aboveMarkBot + r318_markFine / 2, r318_asciiMarkZoomY)), new r318_xn$NamedParameterPair$2Lrc9b("leftEnd", r318_SB), new r318_xn$NamedParameterPair$2Lrc9b("rightEnd", r318_RightSB), new r318_xn$NamedParameterPair$2Lrc9b("hs", r318_OperatorStroke / 2)));
            return void 0;
        }));
        (function () {
            var r939_FMosaicWide, r939_MosaicNameSuffix, r939_MosaicWidth, r939_MosaicWidthScalar, _r939_t3, _r939_t5, _r939_t6, _r939_tag7;
            var r939_WidthKinds = [[0, ".NWID", r318_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r318_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r939_t0 = r939_WidthKinds;
            var _r939_t1 = _r939_t0.length;
            var _r939_t2 = 0;
            var _r939_t4 = _r939_t2 < _r939_t1;
            while (_r939_t4) {
                _r939_t3 = _r939_t0[_r939_t2];
                r939_FMosaicWide = _r939_t3[0];
                r939_MosaicNameSuffix = _r939_t3[1];
                r939_MosaicWidth = _r939_t3[2];
                r939_MosaicWidthScalar = _r939_t3[3];
                (function () {
                    var r942_MosaicDesiredWidth = r318_WideWidth1;
                    var r942_MosaicMiddle = r939_MosaicWidth / 2;
                    var r942_MosaicUnitWidth = r939_MosaicWidth / r939_MosaicWidthScalar;
                    var r942_MangleUnicode = function (r943_unicode, r943__desiredOverride) {
                        var _r943_t0, _r943_t1;
                        return r939_MosaicWidth === (r943__desiredOverride || r942_MosaicDesiredWidth) ? r943_unicode : void 0;
                    };
                    var r942_MangleName = function (r944_name) {
                        var _r944_t0, _r944_t1;
                        return r944_name + r939_MosaicNameSuffix;
                    };
                    var r942_emDashWidth = r318_para.isQuasiProportional && r939_MosaicWidthScalar > 1 ? r318_UPM : r939_MosaicWidth;
                    return r318_xn$GlyphSaveSink$2Lrc4b.save(r942_MangleName("swungDash.high"), null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r947_currentGlyph) {
                        var _r947_t0, _r947_t1;
                        r947_currentGlyph.setWidth(r942_emDashWidth);
                        r947_currentGlyph.include(r318_TildeShape(new r318_xn$NamedParameterPair$2Lrc9b("ttop", r1_mix(r318_aboveMarkMid, r318_aboveMarkTop, r318_asciiMarkZoomY)), new r318_xn$NamedParameterPair$2Lrc9b("tbot", r1_mix(r318_aboveMarkMid, r318_aboveMarkBot + r318_markFine / 2, r318_asciiMarkZoomY)), new r318_xn$NamedParameterPair$2Lrc9b("leftEnd", r318_SB), new r318_xn$NamedParameterPair$2Lrc9b("rightEnd", r942_emDashWidth - r318_SB), new r318_xn$NamedParameterPair$2Lrc9b("hs", r318_OperatorStroke / 2)));
                        return void 0;
                    }));
                })();
                _r939_t5 = _r939_t2 = _r939_t2 + 1;
                _r939_t4 = _r939_t2 < _r939_t1;
            }
            return _r939_t5;
        })();
        var r318_OverlayTildeT = function (r955_sink, r955_kSB, r955_sw) {
            var _r955_t0, _r955_t1;
            var r955_t = r1_mix(r318_aboveMarkMid, r318_aboveMarkTop, r318_asciiMarkZoomY);
            var r955_b = r1_mix(r318_aboveMarkMid, r318_aboveMarkBot + r318_markFine / 2, r318_asciiMarkZoomY);
            var r955_offset = r318_SymbolMid - r1_mix(r955_t, r955_b, 0.5);
            return r955_sink(new r318_xn$NamedParameterPair$2Lrc9b("ttop", r955_t + r955_offset), new r318_xn$NamedParameterPair$2Lrc9b("tbot", r955_b + r955_offset), new r318_xn$NamedParameterPair$2Lrc9b("leftEnd", r1_mix(0, r318_SB, r955_kSB)), new r318_xn$NamedParameterPair$2Lrc9b("rightEnd", r1_mix(r318_Width, r318_RightSB, r955_kSB)), new r318_xn$NamedParameterPair$2Lrc9b("hs", r955_sw / 2));
        };
        r318_xn$GlyphSaveSink$2Lrc4b.save("asciiTilde/sMid", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r963_currentGlyph) {
            var _r963_t0, _r963_t1;
            r963_currentGlyph.include(r318_OverlayTildeT(r318_TildeShape, 1, r318_OperatorStroke));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("overlayTildeOperator", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r967_currentGlyph) {
            var _r967_t0, _r967_t1;
            r967_currentGlyph.include(r318_OverlayTildeT(r318_TildeShape, 1 / 3, r318_AdviceStroke(4)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("overlayTildeOperatorAboveMask", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r971_currentGlyph) {
            var _r971_t1, _r971_t2;
            var r971_FarRight = r1_mix(0, r318_Width, 4);
            var r971_FarLeft = r1_mix(r318_Width, 0, 4);
            var r971_FarAbove = r1_mix(0, r318_CAP, 4);
            var _r971_t0 = r971_currentGlyph.include(r318_OverlayTildeT(r318_TildeKnots, 1 / 3, r318_AdviceStroke(4)));
            var r971_z1 = _r971_t0[0];
            var r971_z2 = _r971_t0[1];
            var r971_z3 = _r971_t0[2];
            var r971_z4 = _r971_t0[3];
            var r971_arcs = [[new r1_Arcs.Bez3(r971_z1, r971_z2, r971_z3, r971_z4), new r1_Arcs.StraightSegment(r971_z4, r1_Point.withX(r971_z4, r971_FarRight)), new r1_Arcs.StraightSegment(r1_Point.withX(r971_z4, r971_FarRight), r1_Point.corner(r971_FarRight, r971_FarAbove)), new r1_Arcs.StraightSegment(r1_Point.corner(r971_FarRight, r971_FarAbove), r1_Point.corner(r971_FarLeft, r971_FarAbove)), new r1_Arcs.StraightSegment(r1_Point.corner(r971_FarLeft, r971_FarAbove), r1_Point.withX(r971_z1, r971_FarLeft)), new r1_Arcs.StraightSegment(r1_Point.withX(r971_z1, r971_FarLeft), r971_z1)]];
            var r971_cs = new r1_BezToContoursSink();
            r1_ShapeConv.transferGenericShapeAsBezier(r971_arcs, r971_cs, r1_GEOMETRY_PRECISION);
            r971_currentGlyph.includeContours(r971_cs.contours);
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r975_currentGlyph) {
            var r975_suffix, r975_DrawAt, r975_kdr, _r975_t2, _r975_t3, _r975_t4, _r975_t5, _r975_tag6;
            r975_currentGlyph.setWidth(0);
            r975_currentGlyph.include(r318_StdAnchors.wide());
            var r975_m = r1_mix(r318_aboveMarkBot, r318_aboveMarkTop, 0.4);
            var r975_ttop = r1_mix(r975_m, r318_aboveMarkTop, 0.7);
            var r975_tbot = r1_mix(r975_m, r318_aboveMarkBot + r318_markFine / 2, 0.7);
            var r975_fine = r318_AdviceStroke(4.5) / 2;
            r975_currentGlyph.include(r318_TildeShape(new r318_xn$NamedParameterPair$2Lrc9b("ttop", r975_ttop), new r318_xn$NamedParameterPair$2Lrc9b("tbot", r975_tbot), new r318_xn$NamedParameterPair$2Lrc9b("leftEnd", r318_markMiddle - r318_markExtend * 1.5), new r318_xn$NamedParameterPair$2Lrc9b("rightEnd", r318_markMiddle + r318_markExtend * 1.5), new r318_xn$NamedParameterPair$2Lrc9b("hs", r975_fine)));
            r318_xn$GlyphSaveSink$2Lrc4b.save("tildeSlashAbove", 842, new r318_xn$Capture$2Lrc8.ForkGlyphProc(r975_currentGlyph, new r318_xn$Capture$2Lrc8.GlyphProc(function (r986_currentGlyph) {
                var _r986_t0, _r986_t1;
                r986_currentGlyph.include(r318_dispiro(r318_widths.center(r975_fine * 2), r318_flat(r318_markMiddle + r318_markExtend * 0.2, r1_mix(r975_tbot, r975_ttop, 1.5)), r318_curl(r318_markMiddle - r318_markExtend * 0.2, r1_mix(r975_ttop, r975_tbot, 1.5))));
                return void 0;
            })));
            var _r975_t0 = Object.entries(r318_DotVariants)[Symbol.iterator]();
            var _r975_t1 = void 0;
            while (!(_r975_t1 = _r975_t0.next()).done) {
                _r975_t2 = _r975_t1.value;
                r975_suffix = _r975_t2[0];
                r975_DrawAt = _r975_t2[1][0];
                r975_kdr = _r975_t2[1][1];
                _r975_t2[1];
                (function () {
                    return r318_xn$GlyphSaveSink$2Lrc4b.save("tildedotdotAbove." + r975_suffix, null, new r318_xn$Capture$2Lrc8.ForkGlyphProc(r975_currentGlyph, new r318_xn$Capture$2Lrc8.GlyphProc(function (r994_currentGlyph) {
                        var _r994_t0, _r994_t1;
                        r994_currentGlyph.include(r318_StdAnchors.impl("above", 0.25, 1));
                        var r994_r = 0.75 * r318_DotRadius * (r975_fine / r318_HalfStroke);
                        r994_currentGlyph.include(r975_DrawAt(r318_markMiddle, r1_mix(r975_tbot, r975_ttop, 1.5), r994_r * r975_kdr));
                        r994_currentGlyph.include(r975_DrawAt(r318_markMiddle, r1_mix(r975_ttop, r975_tbot, 1.5), r994_r * r975_kdr));
                        return void 0;
                    })));
                })();
            }
            return void 0;
        }));
        r318_xn$selectvariant$7Hrq("tildedotdotAbove", 843, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$GlyphSaveSink$2Lrc4b.save("dblTildeAbove", 844, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1001_currentGlyph) {
            var _r1001_t0, _r1001_t1;
            r1001_currentGlyph.setWidth(0);
            r1001_currentGlyph.include(r318_StdAnchors.impl("above", 0.25, 1));
            var r1001_m = r318_aboveMarkBot;
            var r1001_ttop = r1_mix(r1001_m, r318_aboveMarkTop, 0.7);
            var r1001_tbot = r1_mix(r1001_m, r318_aboveMarkBot + r318_markFine / 2, 0.7);
            var r1001_addTilde = function () {
                var _r1004_t0, _r1004_t1;
                return r318_TildeShape(new r318_xn$NamedParameterPair$2Lrc9b("ttop", r1001_ttop), new r318_xn$NamedParameterPair$2Lrc9b("tbot", r1001_tbot), new r318_xn$NamedParameterPair$2Lrc9b("leftEnd", r318_markMiddle - r318_markExtend * 1.5), new r318_xn$NamedParameterPair$2Lrc9b("rightEnd", r318_markMiddle + r318_markExtend * 1.5), new r318_xn$NamedParameterPair$2Lrc9b("hs", r318_AdviceStroke(4.5) / 2));
            };
            var r1001_shift = (r1001_ttop - r1001_tbot) * 1.2;
            r1001_currentGlyph.include(r1001_addTilde());
            r1001_currentGlyph.include(r318_ApparentTranslate(0, +1 * r1001_shift));
            r1001_currentGlyph.include(r1001_addTilde());
            r1001_currentGlyph.include(r318_ApparentTranslate(0, -0.5 * r1001_shift));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("yerikAbove", 830, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1016_currentGlyph) {
            var _r1016_t0, _r1016_t1;
            r1016_currentGlyph.setWidth(0);
            r1016_currentGlyph.include(r318_StdAnchors.narrow());
            r1016_currentGlyph.include(r318_dispiro(r318_widths.center(r318_markFine * 2), r318_g2(r318_markMiddle - r318_markFine * 0.5, r318_aboveMarkBot, r318_heading(r318_Upward)), r318_alsoThruThem([[0.9, 0.36], [0.1, 0.64]], r318_heading(r318_Upward)), r318_g2(r318_markMiddle + r318_markFine * 0.5, r318_aboveMarkTop, r318_heading(r318_Upward))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("macronAbove", 772, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1022_currentGlyph) {
            var _r1022_t0, _r1022_t1;
            r1022_currentGlyph.setWidth(0);
            r1022_currentGlyph.include(r318_StdAnchors.wide());
            r1022_currentGlyph.include(r318_dispiro(r318_widths.center(r318_markStroke), r318_flat(r318_markMiddle - r318_markExtend * 1.5, r318_aboveMarkMid), r318_curl(r318_markMiddle + r318_markExtend * 1.5, r318_aboveMarkMid)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("overlineAbove", 773, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1028_currentGlyph) {
            var _r1028_t0, _r1028_t1;
            r1028_currentGlyph.setWidth(0);
            r1028_currentGlyph.include(r318_StdAnchors.impl("above", 0, 2));
            r1028_currentGlyph.include(r318_dispiro(r318_widths.center(r318_markStroke), r318_flat(0 - r318_Width, r318_aboveMarkMid), r318_curl(0, r318_aboveMarkMid)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("dblOverlineAbove", 831, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1034_currentGlyph) {
            var _r1034_t0, _r1034_t1;
            r1034_currentGlyph.setWidth(0);
            r1034_currentGlyph.include(r318_StdAnchors.impl("above", 0, 2));
            var r1034_eqsw = Math.min(r318_markFine * 2, (r318_aboveMarkTop - r318_aboveMarkBot) / 3);
            r1034_currentGlyph.include(r318_dispiro(r318_widths.lhs(r1034_eqsw), r318_flat(0 - r318_Width, r318_aboveMarkBot), r318_curl(0, r318_aboveMarkBot)));
            r1034_currentGlyph.include(r318_dispiro(r318_widths.rhs(r1034_eqsw), r318_flat(0 - r318_Width, r318_aboveMarkTop), r318_curl(0, r318_aboveMarkTop)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("sbRsbOverlineAbove", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1041_currentGlyph) {
            var _r1041_t0, _r1041_t1;
            r1041_currentGlyph.setWidth(0);
            r1041_currentGlyph.include(r318_StdAnchors.impl("above", 0, 1.5));
            r1041_currentGlyph.include(r318_dispiro(r318_widths.center(r318_markStroke), r318_flat(r318_SB - r318_Width, r318_aboveMarkMid), r318_curl(r318_RightSB - r318_Width, r318_aboveMarkMid)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("dblSbRsbOverlineAbove", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1047_currentGlyph) {
            var _r1047_t0, _r1047_t1;
            r1047_currentGlyph.setWidth(0);
            r1047_currentGlyph.include(r318_StdAnchors.impl("above", 0, 1.5));
            var r1047_eqsw = Math.min(r318_markFine * 2, (r318_aboveMarkTop - r318_aboveMarkBot) / 3);
            r1047_currentGlyph.include(r318_dispiro(r318_widths.lhs(r1047_eqsw), r318_flat(r318_SB - r318_Width, r318_aboveMarkBot), r318_curl(r318_RightSB - r318_Width, r318_aboveMarkBot)));
            r1047_currentGlyph.include(r318_dispiro(r318_widths.rhs(r1047_eqsw), r318_flat(r318_SB - r318_Width, r318_aboveMarkTop), r318_curl(r318_RightSB - r318_Width, r318_aboveMarkTop)));
            return void 0;
        }));
        (function () {
            var r1053_CyrSRBOverlineProc = function (r1054_df) {
                var _r1054_t0, _r1054_t1;
                return new r318_xn$Capture$2Lrc8.GlyphProc(function (r1056_currentGlyph) {
                    var _r1056_t0, _r1056_t1;
                    r1056_currentGlyph.setWidth(0);
                    r1056_currentGlyph.setMarkAnchor("above", r1054_df.middle, r318_XH, r1054_df.middle, r318_aboveMarkStack);
                    r1056_currentGlyph.setBaseAnchor("aboveBraceL", r1054_df.leftSB, r318_aboveMarkMid);
                    r1056_currentGlyph.setBaseAnchor("aboveBraceR", r1054_df.rightSB, r318_aboveMarkMid);
                    r1056_currentGlyph.include(r318_xn$spirooutline$1aao(r318_corner(r1054_df.leftSB, r318_aboveMarkMid + r318_markHalfStroke), r318_corner(r1054_df.rightSB, r318_aboveMarkMid + r318_markHalfStroke), r318_corner(r1054_df.rightSB, r318_aboveMarkMid - r318_markHalfStroke), r318_corner(r1054_df.leftSB, r318_aboveMarkMid - r318_markHalfStroke), r318_close()));
                    return void 0;
                });
            };
            r318_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ghe.SRB/overlineAbove", null, r1053_CyrSRBOverlineProc(r318_DivFrame(r318_para.advanceScaleI)));
            r318_xn$GlyphSaveSink$2Lrc4b.save("cyrl/pe.SRB/overlineAbove", null, r1053_CyrSRBOverlineProc(r318_DivFrame(1)));
            return r318_xn$GlyphSaveSink$2Lrc4b.save("cyrl/te.SRB/overlineAbove", null, r1053_CyrSRBOverlineProc(r318_DivFrame(r318_para.advanceScaleMM, 3)));
        })();
        r318_xn$GlyphSaveSink$2Lrc4b.save("breveAbove", 774, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1067_currentGlyph) {
            var _r1067_t0, _r1067_t1;
            r1067_currentGlyph.setWidth(0);
            r1067_currentGlyph.include(r318_StdAnchors.medium());
            var r1067_top = r318_aboveMarkTop;
            var r1067_bottom = r318_aboveMarkBot;
            var r1067_leftEnd = r318_markMiddle - r318_markExtend - r318_HSwToV(r318_markFine);
            var r1067_rightEnd = r318_markMiddle + r318_markExtend + r318_HSwToV(r318_markFine);
            var r1067_swEnd = Math.min(r318_markFine * 2, r318_VSwToH(0.375 * (r1067_rightEnd - r1067_leftEnd)));
            var r1067_swMid = Math.min(r318_markStress * 2, 0.375 * (2 * (r1067_top - r1067_bottom)));
            var r1067_xMiddle = r1_clamp(r1067_leftEnd + r318_HSwToV(1.125 * r1067_swEnd) + r318_TINY + Math.abs(r318_TanSlope * r1067_swMid), r1067_rightEnd - r318_HSwToV(1.125 * r1067_swEnd) - r318_TINY - Math.abs(r318_TanSlope * r1067_swMid), r318_Arch["adjust-x"].bot(r318_markMiddle, new r318_xn$NamedParameterPair$2Lrc9b("sw", r1_mix(r1067_swEnd, r1067_swMid, 0.5))));
            r1067_currentGlyph.include(r318_dispiro(r318_g4.down.start(r1067_leftEnd, r1067_top, r318_widths.lhs.heading(r1067_swEnd, r318_Downward)), r318_arcvh(), r318_g4.right.mid(r1067_xMiddle, r1067_bottom, r318_widths.lhs(r1067_swMid)), r318_archv(), r318_g4.up.end(r1067_rightEnd, r1067_top, r318_widths.lhs.heading(r1067_swEnd, r318_Upward))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("invBreveAbove", 785, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1074_currentGlyph) {
            var _r1074_t0, _r1074_t1;
            r1074_currentGlyph.setWidth(0);
            r1074_currentGlyph.include(r318_StdAnchors.medium());
            var r1074_top = r318_aboveMarkTop;
            var r1074_bottom = r318_aboveMarkBot;
            var r1074_leftEnd = r318_markMiddle - r318_markExtend - r318_HSwToV(r318_markFine);
            var r1074_rightEnd = r318_markMiddle + r318_markExtend + r318_HSwToV(r318_markFine);
            var r1074_swEnd = Math.min(r318_markFine * 2, r318_VSwToH(0.375 * (r1074_rightEnd - r1074_leftEnd)));
            var r1074_swMid = Math.min(r318_markStress * 2, 0.375 * (2 * (r1074_top - r1074_bottom)));
            var r1074_xMiddle = r1_clamp(r1074_leftEnd + r318_HSwToV(1.125 * r1074_swEnd) + r318_TINY + Math.abs(r318_TanSlope * r1074_swMid), r1074_rightEnd - r318_HSwToV(1.125 * r1074_swEnd) - r318_TINY - Math.abs(r318_TanSlope * r1074_swMid), r318_Arch["adjust-x"].top(r318_markMiddle, new r318_xn$NamedParameterPair$2Lrc9b("sw", r1_mix(r1074_swEnd, r1074_swMid, 0.5))));
            r1074_currentGlyph.include(r318_dispiro(r318_g4.up.start(r1074_leftEnd, r1074_bottom, r318_widths.rhs.heading(r1074_swEnd, r318_Upward)), r318_arcvh(), r318_g4.right.mid(r1074_xMiddle, r1074_top, r318_widths.rhs(r1074_swMid)), r318_archv(), r318_g4.down.end(r1074_rightEnd, r1074_bottom, r318_widths.rhs.heading(r1074_swEnd, r318_Downward))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("breveMacronAbove", 7627, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1081_currentGlyph) {
            var _r1081_t0, _r1081_t1;
            r1081_currentGlyph.setWidth(0);
            r1081_currentGlyph.include(r318_StdAnchors.wide());
            var r1081_fine = Math.min(r318_markFine, 0.5 * (r318_AdviceStroke(3.5) * (r318_markStroke / r318_Stroke)));
            var r1081_leftEnd = r318_markMiddle - (r318_aboveMarkTop - r318_aboveMarkBot - r1081_fine) * 1.25 - r318_HSwToV(r1081_fine);
            var r1081_rightEnd = r318_markMiddle + (r318_aboveMarkTop - r318_aboveMarkBot - r1081_fine) * 1.25 + r318_HSwToV(r1081_fine);
            r1081_currentGlyph.include(r318_dispiro(r318_widths.lhs(r1081_fine * 2), r318_g4.down.start(r1081_leftEnd, r318_aboveMarkTop, r318_heading(r318_Downward)), r318_arcvh(), r318_g4.right.mid(r1_mix(r1081_leftEnd, r318_markMiddle + r318_HSwToV(r1081_fine), 0.5), r318_aboveMarkBot, r318_heading(r318_Rightward)), r318_archv(), r318_g4.up.end(r318_markMiddle + r318_HSwToV(r1081_fine), r318_aboveMarkTop, r318_heading(r318_Upward))));
            r1081_currentGlyph.include(r318_dispiro(r318_widths.rhs(r1081_fine * 2), r318_flat(r318_markMiddle, r318_aboveMarkTop, r318_heading(r318_Rightward)), r318_curl(r1081_rightEnd, r318_aboveMarkTop)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("macronBreveAbove", 7628, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1088_currentGlyph) {
            var _r1088_t0, _r1088_t1;
            r1088_currentGlyph.setWidth(0);
            r1088_currentGlyph.include(r318_StdAnchors.wide());
            var r1088_fine = Math.min(r318_markFine, 0.5 * (r318_AdviceStroke(3.5) * (r318_markStroke / r318_Stroke)));
            var r1088_leftEnd = r318_markMiddle - (r318_aboveMarkTop - r318_aboveMarkBot - r1088_fine) * 1.25 - r318_HSwToV(r1088_fine);
            var r1088_rightEnd = r318_markMiddle + (r318_aboveMarkTop - r318_aboveMarkBot - r1088_fine) * 1.25 + r318_HSwToV(r1088_fine);
            r1088_currentGlyph.include(r318_dispiro(r318_widths.rhs(r1088_fine * 2), r318_flat(r1088_leftEnd, r318_aboveMarkTop), r318_curl(r318_markMiddle, r318_aboveMarkTop, r318_heading(r318_Rightward))));
            r1088_currentGlyph.include(r318_dispiro(r318_widths.lhs(r1088_fine * 2), r318_g4.down.start(r318_markMiddle - r318_HSwToV(r1088_fine), r318_aboveMarkTop, r318_heading(r318_Downward)), r318_arcvh(), r318_g4.right.mid(r1_mix(r318_markMiddle - r318_HSwToV(r1088_fine), r1088_rightEnd, 0.5), r318_aboveMarkBot, r318_heading(r318_Rightward)), r318_archv(), r318_g4.up.end(r1088_rightEnd, r318_aboveMarkTop, r318_heading(r318_Upward))));
            return void 0;
        }));
        var _r318_t20 = Object.entries(r318_DotVariants)[Symbol.iterator]();
        var _r318_t21 = void 0;
        while (!(_r318_t21 = _r318_t20.next()).done) {
            _r318_t22 = _r318_t21.value;
            r318_suffix = _r318_t22[0];
            r318_DrawAt = _r318_t22[1][0];
            r318_kdr = _r318_t22[1][1];
            _r318_t22[1];
            (function () {
                r318_xn$GlyphSaveSink$2Lrc4b.save("candrabinduAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1098_currentGlyph) {
                    var _r1098_t0, _r1098_t1;
                    r1098_currentGlyph.setWidth(0);
                    var r1098_fine = r318_AdviceStroke(6.5);
                    var r1098_arcSw = Math.min(r318_markStroke, r1098_fine * 1.25);
                    var r1098_radius = Math.max(r318_markExtend - r318_DotRadius, r1098_fine * 1.35);
                    var r1098_yDot = r1_mix(r318_aboveMarkBot, r318_aboveMarkTop, 0.625);
                    r1098_currentGlyph.include(r318_dispiro(r318_widths.rhs(r1098_arcSw), r318_g4.down.start(r318_markMiddle - r1098_radius, r1098_yDot, r318_heading(r318_Downward)), r318_arcvh(), r318_g4.right.mid(r318_markMiddle, r1098_yDot - r1098_radius), r318_archv(), r318_g4.up.end(r318_markMiddle + r1098_radius, r1098_yDot, r318_heading(r318_Upward))));
                    r1098_currentGlyph.include(r318_DrawAt(r318_markMiddle, r1098_yDot, r1098_fine * r318_kdr));
                    r1098_currentGlyph.include(r318_ApparentTranslate(0, r1098_fine * +0.5));
                    r1098_currentGlyph.include(r318_StdAnchors.mediumWide());
                    return void 0;
                }));
                r318_xn$GlyphSaveSink$2Lrc4b.save("largeFermataAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1106_currentGlyph) {
                    var _r1106_t0, _r1106_t1;
                    r1106_currentGlyph.setWidth(0);
                    var r1106_fine = r318_AdviceStroke(6.5, r318_asciiMarkZoomX);
                    var r1106_arcSw = Math.min(r318_markStroke, r1106_fine * 1.25);
                    var r1106_radius = Math.max(r318_asciiMarkZoomX * r318_markExtend - r318_DotRadius, r1106_fine * 1.35);
                    var r1106_yDot = r1_mix(r1_mix(r318_aboveMarkMid, r318_aboveMarkBot, r318_asciiMarkZoomY), r1_mix(r318_aboveMarkMid, r318_aboveMarkTop, r318_asciiMarkZoomY), 0.375);
                    r1106_currentGlyph.include(r318_dispiro(r318_widths.lhs(r1106_arcSw), r318_g4.up.start(r318_markMiddle - r1106_radius, r1106_yDot, r318_heading(r318_Upward)), r318_arcvh(), r318_g4.right.mid(r318_markMiddle, r1106_yDot + r1106_radius), r318_archv(), r318_g4.down.end(r318_markMiddle + r1106_radius, r1106_yDot, r318_heading(r318_Downward))));
                    r1106_currentGlyph.include(r318_DrawAt(r318_markMiddle, r1106_yDot, r1106_fine * r318_kdr));
                    r1106_currentGlyph.include(r318_ApparentTranslate(0, r1106_fine * -0.5));
                    r1106_currentGlyph.include(r318_StdAnchors.extraWide());
                    return void 0;
                }));
                return r318_xn$GlyphSaveSink$2Lrc4b.save("cyrl/kavykaWithDotAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1114_currentGlyph) {
                    var _r1114_t0, _r1114_t1;
                    r1114_currentGlyph.setWidth(0);
                    var r1114_radius = r318_markExtend * 1.5;
                    var r1114_arcHs = Math.min(r318_markHalfStroke, r1114_radius * 0.4);
                    var r1114_yDot = r1_mix(r318_aboveMarkBot, r318_aboveMarkTop, 0.625);
                    var r1114_bottom = r1114_yDot - r1114_radius;
                    var r1114_top = r1114_bottom + r318_AccentHeight;
                    r1114_currentGlyph.include(r318_dispiro(r318_widths.center(r1114_arcHs * 2), r318_g4.down.start(r318_markMiddle - r1114_radius, r1114_top - r1114_arcHs, r318_heading(r318_Downward)), r318_arcvh(), r318_g4.right.mid(r318_markMiddle, r1114_bottom), r318_archv(), r318_g4.up.end(r318_markMiddle + r1114_radius, r1114_top - r1114_arcHs, r318_heading(r318_Upward))));
                    r1114_currentGlyph.include(r318_DrawAt(r318_markMiddle, r1114_yDot, Math.min(r318_markDotsRadius * r318_kdr, r1114_radius * 0.4)));
                    r1114_currentGlyph.include(r318_ApparentTranslate(0, Math.max(0, r318_aboveMarkBot - r1114_yDot + r1114_radius) + r1114_arcHs));
                    r1114_currentGlyph.include(r318_StdAnchors.extraWide());
                    return void 0;
                }));
            })();
        }
        r318_xn$selectvariant$7Hrq("candrabinduAbove", 784, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_turned("fermataAbove", 850, "candrabinduAbove", r318_markMiddle, r318_aboveMarkMid);
        r318_xn$selectvariant$7Hrq("largeFermataAbove", new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("cyrl/kavykaWithDotAbove", new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$GlyphSaveSink$2Lrc4b.save("hookAbove", 777, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1125_currentGlyph) {
            var _r1125_t0, _r1125_t1;
            r1125_currentGlyph.setWidth(0);
            r1125_currentGlyph.include(r318_StdAnchors.medium());
            var r1125_fine = Math.min(r318_markFine, (r318_aboveMarkTop - r318_aboveMarkBot) * 0.2);
            var r1125_hookBot = r318_aboveMarkBot - r1125_fine / 2;
            var r1125_hookTop = r1_mix(r318_aboveMarkBot, r318_aboveMarkTop, 0.9) + r1125_fine / 2;
            r1125_currentGlyph.include(r318_dispiro(r318_widths.lhs(r1125_fine * 2), r318_flat(r318_markMiddle - r318_HSwToV(r1125_fine), r1125_hookBot, r318_heading(r318_Rightward)), r318_curl(r318_markMiddle + r1125_fine * 0.4, r1125_hookBot, r318_heading(r318_Rightward)), r318_archv(), r318_g4.up.mid(r318_markMiddle + r318_markExtend - r318_O, r1_mix(r1125_hookBot, r1125_hookTop, r318_ArchDepthB / (r318_ArchDepthB + r318_ArchDepthA)), r318_heading(r318_Upward)), r318_arcvh(), r318_flat(r318_markMiddle + r1125_fine * 0.4, r1125_hookTop, r318_heading(r318_Leftward)), r318_curl(r318_markMiddle - (r318_markExtend - r1125_fine), r1125_hookTop, r318_heading(r318_Leftward))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("commaAbove.round", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1131_currentGlyph) {
            var _r1131_t0, _r1131_t1;
            r1131_currentGlyph.setWidth(0);
            r1131_currentGlyph.include(r318_StdAnchors.narrow());
            var r1131_radius = r318_commaAboveRadius;
            r1131_currentGlyph.include(r318_Ring(r318_aboveMarkTop + r318_commaOvershoot, r318_aboveMarkTop - r1131_radius * 2 + r318_commaOvershoot, r318_markMiddle - r1131_radius, r318_markMiddle + r1131_radius));
            r1131_currentGlyph.include(r318_dispiro(r318_widths.rhs(Math.min(r1131_radius, r318_markFine * r1_linreg(16, 2, 90, 1.75, r318_markStroke))), r318_straight.down.start(r318_markMiddle + r1131_radius, r318_aboveMarkTop - r1131_radius + r318_commaOvershoot), r318_quadControls(0, 0.6), r318_g4(r1_mix(r318_markMiddle, r318_markMiddle - r1131_radius, 0.2), r318_aboveMarkBot - r1131_radius - r318_commaOvershoot2)));
            r1131_currentGlyph.include(r318_ApparentTranslate(0, r318_DotRadius * 0.3));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("commaAbove.square", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1139_currentGlyph) {
            var _r1139_t0, _r1139_t1;
            r1139_currentGlyph.setWidth(0);
            r1139_currentGlyph.include(r318_StdAnchors.narrow());
            var r1139_radius = r318_commaAboveRadius * r318_SquareDotScalar;
            r1139_currentGlyph.include(r318_Rect(r318_aboveMarkTop, r318_aboveMarkTop - r1139_radius * 2, r318_markMiddle - r1139_radius, r318_markMiddle + r1139_radius));
            r1139_currentGlyph.include(r318_dispiro(r318_widths.rhs(Math.min(r1139_radius, r318_markFine * r1_linreg(16, 2, 90, 1.75, r318_markStroke))), r318_flat(r318_markMiddle + r1139_radius, r318_aboveMarkTop, r318_heading(r318_Downward)), r318_curl(r318_markMiddle + r1139_radius, r318_aboveMarkTop - 2 * r1139_radius, r318_heading(r318_Downward)), r318_quadControls(0, 0.6), r318_g4(r1_mix(r318_markMiddle, r318_markMiddle - r1139_radius, 0.2), r318_aboveMarkBot - r1139_radius - r318_commaOvershoot2)));
            r1139_currentGlyph.include(r318_ApparentTranslate(0, r318_DotRadius * 0.3));
            return void 0;
        }));
        r318_xn$selectvariant$7Hrq("commaAbove", 787, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("commaAbove/asPunctuation", new r318_xn$NamedParameterPair$2Lrc9b("shapeFrom", "commaAbove"), new r318_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r318_xn$derivecomposites$7Hrq("commaAboveZero.round", null, "commaAbove.round", r318_ApparentTranslate(-r318_markMiddle, -r318_aboveMarkTop + r318_commaAboveRadius));
        r318_xn$derivecomposites$7Hrq("commaAboveZero.square", null, "commaAbove.square", r318_ApparentTranslate(-r318_markMiddle, -r318_aboveMarkTop + r318_commaAboveRadius * r318_SquareDotScalar));
        r318_xn$selectvariant$7Hrq("commaAboveZero", new r318_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r318_xn$deriveglyphs$7Hrq("commaGrekUpperTonos", null, "commaAbove", function (r1149_src, r1149_gr) {
            var _r1149_t0, _r1149_t1;
            return new r318_xn$Capture$2Lrc8.GlyphProc(function (r1151_currentGlyph) {
                var _r1151_t0, _r1151_t1;
                r1151_currentGlyph.setWidth(0);
                r1151_currentGlyph.include(r318_xn$referglyph$1aao(r1149_src));
                r1151_currentGlyph.include(r318_StdAnchors.impl("grekUpperTonos", 0, 0));
                return void 0;
            });
        });
        r318_xn$deriveglyphs$7Hrq("dblCommaAbove", 6896, "commaAbove", function (r1155_src, r1155_gr) {
            var _r1155_t0, _r1155_t1;
            return new r318_xn$Capture$2Lrc8.GlyphProc(function (r1157_currentGlyph) {
                var _r1157_t0, _r1157_t1;
                r1157_currentGlyph.setWidth(0);
                r1157_currentGlyph.include(r318_xn$withtransform$5sIl(r318_Translate(+r318_markExtend, 0), r318_xn$referglyph$1aao(r1155_src)));
                r1157_currentGlyph.include(r318_xn$withtransform$5sIl(r318_Translate(-r318_markExtend, 0), r318_xn$referglyph$1aao(r1155_src)));
                r1157_currentGlyph.include(r318_StdAnchors.wide());
                return void 0;
            });
        });
        r318_xn$deriveglyphs$7Hrq("turnCommaAbove", 786, "commaAbove", function (r1162_src, r1162_gr) {
            var _r1162_t0, _r1162_t1;
            return new r318_xn$Capture$2Lrc8.GlyphProc(function (r1164_currentGlyph) {
                var _r1164_t0, _r1164_t1;
                r1164_currentGlyph.setWidth(0);
                r1164_currentGlyph.include(r318_xn$referglyph$1aao(r1162_src));
                r1164_currentGlyph.include(r318_FlipAround(r318_markMiddle, r1_mix(r318_aboveMarkTop, r318_aboveMarkBot - r318_commaAboveRadius, 0.5) + r318_DotRadius * 0.3 + r318_commaOvershoot / 2));
                r1164_currentGlyph.include(r318_StdAnchors.narrow());
                return void 0;
            });
        });
        r318_xn$GlyphSaveSink$2Lrc4b.save("revCommaAbove.round", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1171_currentGlyph) {
            var _r1171_t0, _r1171_t1;
            r1171_currentGlyph.setWidth(0);
            r1171_currentGlyph.include(r318_StdAnchors.narrow());
            var r1171_radius = r318_commaAboveRadius;
            r1171_currentGlyph.include(r318_Ring(r318_aboveMarkTop + r318_commaOvershoot, r318_aboveMarkTop - r1171_radius * 2 + r318_commaOvershoot, r318_markMiddle - r1171_radius, r318_markMiddle + r1171_radius));
            r1171_currentGlyph.include(r318_dispiro(r318_widths.lhs(Math.min(r1171_radius, r318_markFine * r1_linreg(16, 2, 90, 1.75, r318_markStroke))), r318_straight.down.start(r318_markMiddle - r1171_radius, r318_aboveMarkTop - r1171_radius + r318_commaOvershoot), r318_quadControls(0, 0.6), r318_g4(r1_mix(r318_markMiddle, r318_markMiddle + r1171_radius, 0.2), r318_aboveMarkBot - r1171_radius - r318_commaOvershoot2)));
            r1171_currentGlyph.include(r318_ApparentTranslate(0, r318_DotRadius * 0.3));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("revCommaAbove.square", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1179_currentGlyph) {
            var _r1179_t0, _r1179_t1;
            r1179_currentGlyph.setWidth(0);
            r1179_currentGlyph.include(r318_StdAnchors.narrow());
            var r1179_radius = r318_commaAboveRadius * r318_SquareDotScalar;
            r1179_currentGlyph.include(r318_Rect(r318_aboveMarkTop + r318_commaOvershoot, r318_aboveMarkTop - r1179_radius * 2 + r318_commaOvershoot, r318_markMiddle - r1179_radius, r318_markMiddle + r1179_radius));
            r1179_currentGlyph.include(r318_dispiro(r318_widths.lhs(Math.min(r1179_radius, r318_markFine * r1_linreg(16, 2, 90, 1.75, r318_markStroke))), r318_flat(r318_markMiddle - r1179_radius, r318_aboveMarkTop, r318_heading(r318_Downward)), r318_curl(r318_markMiddle - r1179_radius, r318_aboveMarkTop - 2 * r1179_radius, r318_heading(r318_Downward)), r318_quadControls(0, 0.6), r318_g4(r1_mix(r318_markMiddle, r318_markMiddle + r1179_radius, 0.2), r318_aboveMarkBot - r1179_radius - r318_commaOvershoot2)));
            r1179_currentGlyph.include(r318_ApparentTranslate(0, r318_DotRadius * 0.3));
            return void 0;
        }));
        r318_xn$selectvariant$7Hrq("revCommaAbove", 788, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$deriveglyphs$7Hrq("revCommaGrekUpperTonos", null, "revCommaAbove", function (r1186_src, r1186_gr) {
            var _r1186_t0, _r1186_t1;
            return new r318_xn$Capture$2Lrc8.GlyphProc(function (r1188_currentGlyph) {
                var _r1188_t0, _r1188_t1;
                r1188_currentGlyph.setWidth(0);
                r1188_currentGlyph.include(r318_xn$referglyph$1aao(r1186_src));
                r1188_currentGlyph.include(r318_StdAnchors.impl("grekUpperTonos", 0, 0));
                return void 0;
            });
        });
        r318_xn$GlyphSaveSink$2Lrc4b.save("tonosAbove", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1194_currentGlyph) {
            var _r1194_t0, _r1194_t1;
            r1194_currentGlyph.setWidth(0);
            r1194_currentGlyph.include(r318_StdAnchors.narrow());
            var r1194_shift = 0.05 * r318_markExtend + r318_HSwToV(r318_markStress - r318_markFine);
            r1194_currentGlyph.include(r318_dispiro(r318_flat(r318_markMiddle - r1194_shift * 0.5, r318_aboveMarkBot - r318_markFine * 0, r318_widths.center.heading(2 * r318_markFine, r318_Upward)), r318_curl(r318_markMiddle + r1194_shift * 1, r318_aboveMarkTop + r318_markStress * 0.4, r318_widths.center.heading(2 * r318_markStress, r318_Upward))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("tonosGrekUpperTonos", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1200_currentGlyph) {
            var _r1200_t0, _r1200_t1;
            r1200_currentGlyph.setWidth(0);
            r1200_currentGlyph.include(r318_xn$referglyph$1aao("tonosAbove"));
            r1200_currentGlyph.include(r318_StdAnchors.impl("grekUpperTonos", 0, 0));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("variaAbove", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1206_currentGlyph) {
            var _r1206_t0, _r1206_t1;
            r1206_currentGlyph.setWidth(0);
            r1206_currentGlyph.include(r318_StdAnchors.medium());
            r1206_currentGlyph.include(r318_dispiro(r318_flat(r318_markMiddle + r318_markStress * 1, r318_aboveMarkBot - r318_markFine * 0.5, r318_widths.center(2 * r318_markFine)), r318_curl(r318_markMiddle - r318_markExtend * 0.5, r318_aboveMarkTop + r318_markStress * 0.25, r318_widths.center(2 * r318_markStress))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("variaGrekUpperTonos", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1212_currentGlyph) {
            var _r1212_t0, _r1212_t1;
            r1212_currentGlyph.setWidth(0);
            r1212_currentGlyph.include(r318_xn$referglyph$1aao("variaAbove"));
            r1212_currentGlyph.include(r318_StdAnchors.impl("grekUpperTonos", 0, 0));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("oxiaAbove", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1218_currentGlyph) {
            var _r1218_t0, _r1218_t1;
            r1218_currentGlyph.setWidth(0);
            r1218_currentGlyph.include(r318_StdAnchors.medium());
            r1218_currentGlyph.include(r318_dispiro(r318_flat(r318_markMiddle - r318_markStress * 1, r318_aboveMarkBot - r318_markFine * 0.5, r318_widths.center(2 * r318_markFine)), r318_curl(r318_markMiddle + r318_markExtend * 0.5, r318_aboveMarkTop + r318_markStress * 0.25, r318_widths.center(2 * r318_markStress))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("oxiaGrekUpperTonos", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1224_currentGlyph) {
            var _r1224_t0, _r1224_t1;
            r1224_currentGlyph.setWidth(0);
            r1224_currentGlyph.include(r318_xn$referglyph$1aao("oxiaAbove"));
            r1224_currentGlyph.include(r318_StdAnchors.impl("grekUpperTonos", 0, 0));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("perispomeniAbove", 834, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1230_currentGlyph) {
            var _r1230_t0, _r1230_t1;
            r1230_currentGlyph.setWidth(0);
            r1230_currentGlyph.include(r318_xn$referglyph$1aao("invBreveAbove"));
            r1230_currentGlyph.include(r318_StdAnchors.medium());
            return void 0;
        }));
        r318_alias("koronisAbove", 835, "commaAbove");
        var _r318_t23 = Object.entries(r318_DotVariants)[Symbol.iterator]();
        var _r318_t24 = void 0;
        while (!(_r318_t24 = _r318_t23.next()).done) {
            _r318_t25 = _r318_t24.value;
            r318_suffix = _r318_t25[0];
            r318_DrawAt = _r318_t25[1][0];
            r318_kdr = _r318_t25[1][1];
            _r318_t25[1];
            (function () {
                r318_xn$GlyphSaveSink$2Lrc4b.save("dialytikaTonosAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1239_currentGlyph) {
                    var _r1239_t0, _r1239_t1;
                    r1239_currentGlyph.setWidth(0);
                    r1239_currentGlyph.include(r318_xn$withtransform$5sIl(r318_ApparentTranslate(0, -0.125 * (r318_aboveMarkTop - r318_aboveMarkBot)), r318_xn$referglyph$1aao("dialytikaAbove." + r318_suffix)));
                    r1239_currentGlyph.include(r318_xn$withtransform$5sIl(r318_ApparentTranslate(0, 0), r318_xn$referglyph$1aao("tonosAbove")));
                    r1239_currentGlyph.include(r318_StdAnchors.wide());
                    return void 0;
                }));
                r318_xn$GlyphSaveSink$2Lrc4b.save("dialytikaVariaAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1246_currentGlyph) {
                    var _r1246_t0, _r1246_t1;
                    r1246_currentGlyph.setWidth(0);
                    var r1246_shift = +0.125 * (r318_markExtend * 0.875 - r318_markStress);
                    r1246_currentGlyph.include(r318_xn$withtransform$5sIl(r318_ApparentTranslate(0, -0.125 * (r318_aboveMarkTop - r318_aboveMarkBot)), r318_xn$referglyph$1aao("dialytikaAbove." + r318_suffix)));
                    r1246_currentGlyph.include(r318_xn$withtransform$5sIl(r318_ApparentTranslate(r1246_shift, 0), r318_xn$referglyph$1aao("variaAbove")));
                    r1246_currentGlyph.include(r318_StdAnchors.wide());
                    return void 0;
                }));
                return r318_xn$GlyphSaveSink$2Lrc4b.save("dialytikaOxiaAbove." + r318_suffix, null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1253_currentGlyph) {
                    var _r1253_t0, _r1253_t1;
                    r1253_currentGlyph.setWidth(0);
                    var r1253_shift = -0.125 * (r318_markExtend * 0.875 - r318_markStress);
                    r1253_currentGlyph.include(r318_xn$withtransform$5sIl(r318_ApparentTranslate(0, -0.125 * (r318_aboveMarkTop - r318_aboveMarkBot)), r318_xn$referglyph$1aao("dialytikaAbove." + r318_suffix)));
                    r1253_currentGlyph.include(r318_xn$withtransform$5sIl(r318_ApparentTranslate(r1253_shift, 0), r318_xn$referglyph$1aao("oxiaAbove")));
                    r1253_currentGlyph.include(r318_StdAnchors.wide());
                    return void 0;
                }));
            })();
        }
        r318_xn$selectvariant$7Hrq("dialytikaTonosAbove", 836, new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("dialytikaVariaAbove", new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$selectvariant$7Hrq("dialytikaOxiaAbove", new r318_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r318_xn$GlyphSaveSink$2Lrc4b.save("barAbove", 781, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1263_currentGlyph) {
            var _r1263_t0, _r1263_t1;
            r1263_currentGlyph.setWidth(0);
            r1263_currentGlyph.include(r318_StdAnchors.narrow());
            r1263_currentGlyph.include(r318_VBar.m(r318_markMiddle, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("dblBarAbove", 782, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1269_currentGlyph) {
            var _r1269_t0, _r1269_t1;
            r1269_currentGlyph.setWidth(0);
            r1269_currentGlyph.include(r318_StdAnchors.mediumWide());
            r1269_currentGlyph.include(r318_VBar.m(r318_markMiddle - r318_markExtend * 0.75, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            r1269_currentGlyph.include(r318_VBar.m(r318_markMiddle + r318_markExtend * 0.75, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("leftAngleAbove", 6889, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1276_currentGlyph) {
            var _r1276_t0, _r1276_t1;
            r1276_currentGlyph.setWidth(0);
            r1276_currentGlyph.include(r318_StdAnchors.mediumWide());
            r1276_currentGlyph.include(r318_VBar.r(r318_markMiddle + r318_markExtend, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            r1276_currentGlyph.include(r318_HBar.t(r318_markMiddle - r318_markExtend, r318_markMiddle + r318_markExtend, r318_aboveMarkTop, r318_markFine * 2));
            r318_xn$GlyphSaveSink$2Lrc4b.save("turnLeftAngleAbove", null, new r318_xn$Capture$2Lrc8.ForkGlyphProc(r1276_currentGlyph, r318_FlipAround(r318_markMiddle, r318_aboveMarkMid)));
            return void 0;
        }));
        var r318_BoxDims = function (r1283_hPack, r1283_vPack, r1283_k, r1283__swRef) {
            var _r1283_t0, _r1283_t1;
            var r1283_swRef = r1_fallback(r1283__swRef, r318_markStroke);
            var r1283_leftEnd = r318_markMiddle - (r318_markExtend * r1283_k + r318_HSwToV(0.5 * r1283_swRef));
            var r1283_rightEnd = r318_markMiddle + (r318_markExtend * r1283_k + r318_HSwToV(0.5 * r1283_swRef));
            var r1283_boxhs = Math.min(r1283_swRef, (r318_aboveMarkTop - r318_aboveMarkBot) / (2 * r1283_vPack - 1));
            var r1283_boxvs = Math.min(r1283_swRef, r318_VSwToH((r1283_rightEnd - r1283_leftEnd) / (2 * r1283_hPack - 1)));
            return {
                "boxvs": r1283_boxvs,
                "boxhs": r1283_boxhs,
                "leftEnd": r1283_leftEnd,
                "rightEnd": r1283_rightEnd
            };
        };
        r318_xn$GlyphSaveSink$2Lrc4b.save("bridgeAbove", 838, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1286_currentGlyph) {
            var _r1286_t1, _r1286_t2;
            r1286_currentGlyph.setWidth(0);
            r1286_currentGlyph.include(r318_StdAnchors.wide());
            var _r1286_t0 = r318_BoxDims(2, 1, 1, r318_markFine * 2);
            var r1286_boxvs = _r1286_t0.boxvs;
            var r1286_boxhs = _r1286_t0.boxhs;
            var r1286_leftEnd = _r1286_t0.leftEnd;
            var r1286_rightEnd = _r1286_t0.rightEnd;
            r1286_currentGlyph.include(r318_VBar.l(r1286_leftEnd, r318_aboveMarkBot, r318_aboveMarkTop, r1286_boxvs));
            r1286_currentGlyph.include(r318_VBar.r(r1286_rightEnd, r318_aboveMarkBot, r318_aboveMarkTop, r1286_boxvs));
            r1286_currentGlyph.include(r318_HBar.t(r1286_leftEnd, r1286_rightEnd, r318_aboveMarkTop, r1286_boxhs));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("invBridgeAbove", 6883, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1294_currentGlyph) {
            var _r1294_t1, _r1294_t2;
            r1294_currentGlyph.setWidth(0);
            r1294_currentGlyph.include(r318_StdAnchors.wide());
            var _r1294_t0 = r318_BoxDims(2, 1, 1, r318_markFine * 2);
            var r1294_boxvs = _r1294_t0.boxvs;
            var r1294_boxhs = _r1294_t0.boxhs;
            var r1294_leftEnd = _r1294_t0.leftEnd;
            var r1294_rightEnd = _r1294_t0.rightEnd;
            r1294_currentGlyph.include(r318_VBar.l(r1294_leftEnd, r318_aboveMarkBot, r318_aboveMarkTop, r1294_boxvs));
            r1294_currentGlyph.include(r318_VBar.r(r1294_rightEnd, r318_aboveMarkBot, r318_aboveMarkTop, r1294_boxvs));
            r1294_currentGlyph.include(r318_HBar.b(r1294_leftEnd, r1294_rightEnd, r318_aboveMarkBot, r1294_boxhs));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("boxAbove", 6884, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1302_currentGlyph) {
            var _r1302_t1, _r1302_t2;
            r1302_currentGlyph.setWidth(0);
            r1302_currentGlyph.include(r318_StdAnchors.wide());
            var _r1302_t0 = r318_BoxDims(2, 2, 1, r318_markFine * 2);
            var r1302_boxvs = _r1302_t0.boxvs;
            var r1302_boxhs = _r1302_t0.boxhs;
            var r1302_leftEnd = _r1302_t0.leftEnd;
            var r1302_rightEnd = _r1302_t0.rightEnd;
            r1302_currentGlyph.include(r318_VBar.l(r1302_leftEnd, r318_aboveMarkBot, r318_aboveMarkTop, r1302_boxvs));
            r1302_currentGlyph.include(r318_VBar.r(r1302_rightEnd, r318_aboveMarkBot, r318_aboveMarkTop, r1302_boxvs));
            r1302_currentGlyph.include(r318_HBar.b(r1302_leftEnd, r1302_rightEnd, r318_aboveMarkBot, r1302_boxhs));
            r1302_currentGlyph.include(r318_HBar.t(r1302_leftEnd, r1302_rightEnd, r318_aboveMarkTop, r1302_boxhs));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("wideBridgeAbove", 8425, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1311_currentGlyph) {
            var _r1311_t0, _r1311_t1;
            r1311_currentGlyph.setWidth(0);
            r1311_currentGlyph.include(r318_StdAnchors.impl("above", 0, 2));
            r1311_currentGlyph.include(r318_VBar.l(0 - r318_Width, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            r1311_currentGlyph.include(r318_VBar.r(0, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            r1311_currentGlyph.include(r318_HBar.t(0 - r318_Width, 0, r318_aboveMarkTop, r318_markFine * 2));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("seagullAbove", 6885, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1319_currentGlyph) {
            var _r1319_t0, _r1319_t1;
            r1319_currentGlyph.setWidth(0);
            r1319_currentGlyph.include(r318_StdAnchors.wide());
            var r1319_fine = Math.min(r318_markFine, 0.5 * (r318_AdviceStroke(3.5) * (r318_markStroke / r318_Stroke)));
            var r1319_coFine = r1319_fine * (2 * r318_CThin - 1);
            var r1319_leftEnd = r318_markMiddle - (r318_aboveMarkTop - r318_aboveMarkBot - r1319_fine) * 1.25;
            var r1319_rightEnd = r318_markMiddle + (r318_aboveMarkTop - r318_aboveMarkBot - r1319_fine) * 1.25;
            r1319_currentGlyph.include(r318_union(r318_dispiro(r318_widths.center(r1319_fine * 2), r318_g4(r1319_leftEnd, r318_aboveMarkMid), r318_g4.right.mid(r1_mix(r1319_leftEnd, r318_markMiddle, 0.5), r318_aboveMarkTop - r1319_fine, r318_heading(r318_Rightward)), r318_archv(), r318_g4.down.end(r318_markMiddle, r318_aboveMarkBot, r318_widths.heading(r1319_coFine, r1319_fine, r318_Downward))), r318_dispiro(r318_widths.center(r1319_fine * 2), r318_g4(r1319_rightEnd, r318_aboveMarkMid), r318_g4.left.mid(r1_mix(r1319_rightEnd, r318_markMiddle, 0.5), r318_aboveMarkTop - r1319_fine, r318_heading(r318_Leftward)), r318_archv(), r318_g4.down.end(r318_markMiddle, r318_aboveMarkBot, r318_widths.heading(r1319_fine, r1319_coFine, r318_Downward)))));
            r318_xn$GlyphSaveSink$2Lrc4b.save("turnSeagullAbove", null, new r318_xn$Capture$2Lrc8.ForkGlyphProc(r1319_currentGlyph, r318_FlipAround(r318_markMiddle, r318_aboveMarkMid)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("plusAbove", 6856, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1327_currentGlyph) {
            var _r1327_t0, _r1327_t1;
            r1327_currentGlyph.setWidth(0);
            r1327_currentGlyph.include(r318_StdAnchors.mediumWide());
            r1327_currentGlyph.include(r318_VBar.m(r318_markMiddle, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            r1327_currentGlyph.include(r318_HBar.m(r318_markMiddle - r318_markExtend, r318_markMiddle + r318_markExtend, r318_aboveMarkMid, r318_markFine * 2));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("dblPlusAbove", 6857, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1334_currentGlyph) {
            var _r1334_t0, _r1334_t1;
            r1334_currentGlyph.setWidth(0);
            r1334_currentGlyph.include(r318_xn$withtransform$5sIl(r318_Translate(+r318_markExtend, 0), r318_xn$referglyph$1aao("plusAbove")));
            r1334_currentGlyph.include(r318_xn$withtransform$5sIl(r318_Translate(-r318_markExtend, 0), r318_xn$referglyph$1aao("plusAbove")));
            r1334_currentGlyph.include(r318_StdAnchors.extraWide());
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("upTackAbove", 7669, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1341_currentGlyph) {
            var _r1341_t0, _r1341_t1;
            r1341_currentGlyph.setWidth(0);
            r1341_currentGlyph.include(r318_StdAnchors.mediumWide());
            r1341_currentGlyph.include(r318_VBar.m(r318_markMiddle, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            r1341_currentGlyph.include(r318_HBar.b(r318_markMiddle - r318_markExtend, r318_markMiddle + r318_markExtend, r318_aboveMarkBot, r318_markFine * 2));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("downTackAbove", 6875, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1348_currentGlyph) {
            var _r1348_t0, _r1348_t1;
            r1348_currentGlyph.setWidth(0);
            r1348_currentGlyph.include(r318_StdAnchors.mediumWide());
            r1348_currentGlyph.include(r318_VBar.m(r318_markMiddle, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            r1348_currentGlyph.include(r318_HBar.t(r318_markMiddle - r318_markExtend, r318_markMiddle + r318_markExtend, r318_aboveMarkTop, r318_markFine * 2));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("leftTackAbove", 6880, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1355_currentGlyph) {
            var _r1355_t0, _r1355_t1;
            r1355_currentGlyph.setWidth(0);
            r1355_currentGlyph.include(r318_StdAnchors.mediumWide());
            r1355_currentGlyph.include(r318_VBar.r(r318_markMiddle + r318_markExtend, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            r1355_currentGlyph.include(r318_HBar.m(r318_markMiddle - r318_markExtend, r318_markMiddle + r318_markExtend, r318_aboveMarkMid, r318_markFine * 2));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("rightTackAbove", 6881, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1362_currentGlyph) {
            var _r1362_t0, _r1362_t1;
            r1362_currentGlyph.setWidth(0);
            r1362_currentGlyph.include(r318_StdAnchors.mediumWide());
            r1362_currentGlyph.include(r318_VBar.l(r318_markMiddle - r318_markExtend, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            r1362_currentGlyph.include(r318_HBar.m(r318_markMiddle - r318_markExtend, r318_markMiddle + r318_markExtend, r318_aboveMarkMid, r318_markFine * 2));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("minusAbove", 6882, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1369_currentGlyph) {
            var _r1369_t0, _r1369_t1;
            r1369_currentGlyph.setWidth(0);
            r1369_currentGlyph.include(r318_StdAnchors.mediumWide());
            r1369_currentGlyph.include(r318_HBar.m(r318_markMiddle - r318_markExtend, r318_markMiddle + r318_markExtend, r318_aboveMarkMid, r318_markFine * 2));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("equalAbove", 6888, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1375_currentGlyph) {
            var _r1375_t0, _r1375_t1;
            r1375_currentGlyph.setWidth(0);
            r1375_currentGlyph.include(r318_StdAnchors.mediumWide());
            var r1375_eqsw = Math.min(r318_markFine * 2, (r318_aboveMarkTop - r318_aboveMarkBot) / 3);
            r1375_currentGlyph.include(r318_HBar.b(r318_markMiddle - r318_markExtend, r318_markMiddle + r318_markExtend, r318_aboveMarkBot, r1375_eqsw));
            r1375_currentGlyph.include(r318_HBar.t(r318_markMiddle - r318_markExtend, r318_markMiddle + r318_markExtend, r318_aboveMarkTop, r1375_eqsw));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("crossAbove", 829, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1382_currentGlyph) {
            var _r1382_t0, _r1382_t1;
            r1382_currentGlyph.setWidth(0);
            r1382_currentGlyph.include(r318_StdAnchors.mediumWide());
            r1382_currentGlyph.include(r318_dispiro(r318_widths.center(r318_markFine * 2), r318_flat(r318_markMiddle - r318_markExtend, r318_aboveMarkTop), r318_curl(r318_markMiddle + r318_markExtend, r318_aboveMarkBot)));
            r1382_currentGlyph.include(r318_dispiro(r318_widths.center(r318_markFine * 2), r318_flat(r318_markMiddle - r318_markExtend, r318_aboveMarkBot), r318_curl(r318_markMiddle + r318_markExtend, r318_aboveMarkTop)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("zigzagAbove", 859, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1389_currentGlyph) {
            var _r1389_t0, _r1389_t1;
            r1389_currentGlyph.setWidth(0);
            r1389_currentGlyph.include(r318_StdAnchors.mediumWide());
            var r1389_ext = 0.625 * r318_markExtend + r318_markFine;
            var r1389_coSlope = 0.2;
            var r1389_fr = new r1_Box(r318_aboveMarkTop, r318_aboveMarkBot, r318_markMiddle - r1389_ext, r318_markMiddle + r1389_ext);
            r1389_currentGlyph.include(r318_HBar.m(r1389_fr.left, r1389_fr.right, r1389_fr.yMid, r318_markFine * 2));
            r1389_currentGlyph.include(r318_intersection(r318_MaskBelow(r1389_fr.top), r318_MaskAbove(r1389_fr.yMid - r318_markFine), r318_ExtLineLhs(r1389_fr.left + r1389_coSlope * (r1389_fr.top - r1389_fr.yMid - r318_markFine), r1389_fr.top, r1389_fr.left - 2 * r318_markFine * r1389_coSlope, r1389_fr.yMid - r318_markFine, r318_markFine * 2, 4)));
            r1389_currentGlyph.include(r318_intersection(r318_MaskAbove(r1389_fr.bot), r318_MaskBelow(r1389_fr.yMid + r318_markFine), r318_ExtLineLhs(r1389_fr.right - r1389_coSlope * (r1389_fr.yMid - r1389_fr.bot - r318_markFine), r1389_fr.bot, r1389_fr.right + 2 * r318_markFine * r1389_coSlope, r1389_fr.yMid + r318_markFine, r318_markFine * 2, 4)));
            return void 0;
        }));
        var r318_arrowSw = r318_AdviceStroke2(6, 2.75, r318_aboveMarkTop - r318_aboveMarkBot, 1);
        var r318_arrowFine = r318_AdviceStroke2(6, 3, r318_aboveMarkTop - r318_aboveMarkBot, 1);
        var r318_arrowTerm = r318_AdviceStroke2(8, 3.75, r318_aboveMarkTop - r318_aboveMarkBot, 1);
        var r318_MarkArrowDims = r318_ArrowDims(new r318_xn$NamedParameterPair$2Lrc9b("arrowWidth", 2 * (r318_markExtend * 1.5)), new r318_xn$NamedParameterPair$2Lrc9b("arrowHeight", r318_aboveMarkTop - r318_aboveMarkBot + Math.SQRT1_2 * r318_arrowTerm), new r318_xn$NamedParameterPair$2Lrc9b("arrowSw", r318_arrowSw), new r318_xn$NamedParameterPair$2Lrc9b("fine", r318_arrowFine), new r318_xn$NamedParameterPair$2Lrc9b("terminal", r318_arrowTerm), new r318_xn$NamedParameterPair$2Lrc9b("arrowMidX", r318_markMiddle), new r318_xn$NamedParameterPair$2Lrc9b("arrowMidY", r318_aboveMarkMid));
        var r318_MarkArrow = r318_ArrowT(r318_MarkArrowDims);
        var r318_VArrowHeadSize = r318_markExtend * 0.75 + Math.SQRT1_2 * r318_arrowTerm / 2;
        var r318_HArrowHeadSize = r318_MarkArrowDims.arrowHeight / 2;
        r318_xn$GlyphSaveSink$2Lrc4b.save("leftArrowHeadAbove", 7678, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1404_currentGlyph) {
            var _r1404_t0, _r1404_t1;
            r1404_currentGlyph.setWidth(0);
            r1404_currentGlyph.include(r318_StdAnchors.mediumWide());
            var r1404_top = r318_aboveMarkTop;
            var r1404_bot = r318_aboveMarkBot;
            var r1404_exp = Math.hypot(1, (r1404_top - r1404_bot) / r318_markExtend);
            r1404_currentGlyph.include(r318_dispiro(r318_widths.center(r318_markFine * 2), r318_flat(r318_markMiddle + r318_markExtend, r1404_top), r318_curl(r318_markMiddle - r318_markExtend, r1_mix(r1404_top, r1404_bot, 0.5), r318_widths.center.heading(r318_markFine * r1404_exp, r318_Leftward))));
            r1404_currentGlyph.include(r318_dispiro(r318_widths.center(r318_markFine * 2), r318_flat(r318_markMiddle + r318_markExtend, r1404_bot), r318_curl(r318_markMiddle - r318_markExtend, r1_mix(r1404_top, r1404_bot, 0.5), r318_widths.center.heading(r318_markFine * r1404_exp, r318_Leftward))));
            return void 0;
        }));
        r318_turned("rightArrowHeadAbove", 848, "leftArrowHeadAbove", r318_markMiddle, r318_aboveMarkMid);
        r318_xn$GlyphSaveSink$2Lrc4b.save("upArrowHeadAbove", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1411_currentGlyph) {
            var _r1411_t0, _r1411_t1;
            r1411_currentGlyph.setWidth(0);
            r1411_currentGlyph.include(r318_StdAnchors.medium());
            var r1411_top = r318_aboveMarkTop;
            var r1411_bot = r318_aboveMarkBot;
            var r1411_exp = Math.hypot(1, 2 * (r318_markExtend * 1.5) / (r1411_top - r1411_bot));
            r1411_currentGlyph.include(r318_dispiro(r318_widths.center(r318_markFine * 2), r318_flat(r318_markMiddle - r318_markExtend, r1411_bot), r318_curl(r318_markMiddle, r1411_top, r318_widths.center.heading(r318_markFine * r1411_exp, r318_Upward))));
            r1411_currentGlyph.include(r318_dispiro(r318_widths.center(r318_markFine * 2), r318_flat(r318_markMiddle + r318_markExtend, r1411_bot), r318_curl(r318_markMiddle, r1411_top, r318_widths.center.heading(r318_markFine * r1411_exp, r318_Upward))));
            return void 0;
        }));
        r318_turned("downArrowHeadAbove", null, "upArrowHeadAbove", r318_markMiddle, r318_aboveMarkMid);
        r318_xn$GlyphSaveSink$2Lrc4b.save("upArrowAbove", 6890, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1418_currentGlyph) {
            var _r1418_t0, _r1418_t1;
            r1418_currentGlyph.setWidth(0);
            r1418_currentGlyph.include(r318_StdAnchors.medium());
            r1418_currentGlyph.include(r318_MarkArrow.shape(r318_markMiddle, r318_MarkArrowDims.arrowBot, r318_markMiddle, r318_MarkArrowDims.arrowTop, r318_VArrowHeadSize));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("downArrowAbove", 6835, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1424_currentGlyph) {
            var _r1424_t0, _r1424_t1;
            r1424_currentGlyph.setWidth(0);
            r1424_currentGlyph.include(r318_StdAnchors.medium());
            r1424_currentGlyph.include(r318_MarkArrow.shape(r318_markMiddle, r318_MarkArrowDims.arrowTop, r318_markMiddle, r318_MarkArrowDims.arrowBot, r318_VArrowHeadSize));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("leftArrowAbove", 8406, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1430_currentGlyph) {
            var _r1430_t0, _r1430_t1;
            r1430_currentGlyph.setWidth(0);
            r1430_currentGlyph.include(r318_StdAnchors.wide());
            r1430_currentGlyph.include(r318_MarkArrow.shape(r318_MarkArrowDims.arrowRSB, r318_aboveMarkMid, r318_MarkArrowDims.arrowSB, r318_aboveMarkMid, r318_HArrowHeadSize));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("rightArrowAbove", 8407, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1436_currentGlyph) {
            var _r1436_t0, _r1436_t1;
            r1436_currentGlyph.setWidth(0);
            r1436_currentGlyph.include(r318_StdAnchors.wide());
            r1436_currentGlyph.include(r318_MarkArrow.shape(r318_MarkArrowDims.arrowSB, r318_aboveMarkMid, r318_MarkArrowDims.arrowRSB, r318_aboveMarkMid, r318_HArrowHeadSize));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("lrArrowAbove", 8417, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1442_currentGlyph) {
            var _r1442_t0, _r1442_t1;
            r1442_currentGlyph.setWidth(0);
            r1442_currentGlyph.include(r318_StdAnchors.wide());
            r1442_currentGlyph.include(r318_MarkArrow.shape(r318_markMiddle, r318_aboveMarkMid, r318_MarkArrowDims.arrowRSB, r318_aboveMarkMid, r318_HArrowHeadSize));
            r1442_currentGlyph.include(r318_MarkArrow.shape(r318_markMiddle, r318_aboveMarkMid, r318_MarkArrowDims.arrowSB, r318_aboveMarkMid, r318_HArrowHeadSize));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("leftHRArrowAbove", 8400, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1449_currentGlyph) {
            var _r1449_t0, _r1449_t1;
            r1449_currentGlyph.setWidth(0);
            r1449_currentGlyph.include(r318_StdAnchors.wide());
            r1449_currentGlyph.include(r318_MarkArrow.rhsShape(r318_MarkArrowDims.arrowRSB, r318_aboveMarkMid, r318_MarkArrowDims.arrowSB, r318_aboveMarkMid, r318_HArrowHeadSize));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("rightHLArrowAbove", 8401, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1455_currentGlyph) {
            var _r1455_t0, _r1455_t1;
            r1455_currentGlyph.setWidth(0);
            r1455_currentGlyph.include(r318_StdAnchors.wide());
            r1455_currentGlyph.include(r318_MarkArrow.lhsShape(r318_MarkArrowDims.arrowSB, r318_aboveMarkMid, r318_MarkArrowDims.arrowRSB, r318_aboveMarkMid, r318_HArrowHeadSize));
            return void 0;
        }));
        r318_alias("cyrl/dasiaAbove", 1157, "revCommaAbove");
        r318_alias("cyrl/psiliAbove", 1158, "commaAbove");
        r318_xn$GlyphSaveSink$2Lrc4b.save("cyrl/palatilizationAbove", 1156, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1461_currentGlyph) {
            var _r1461_t0, _r1461_t1;
            r1461_currentGlyph.setWidth(0);
            r1461_currentGlyph.include(r318_StdAnchors.wide());
            var r1461_leftEnd = r318_markMiddle - r318_markExtend * 2;
            var r1461_rightEnd = r318_markMiddle + r318_markExtend * 1.2;
            r1461_currentGlyph.include(r318_dispiro(r318_widths.center(r318_markStroke), r318_g4.up.start(r1461_rightEnd, r318_aboveMarkBot, r318_heading(r318_Upward)), r318_arcvh(), r318_g2.left.mid(r318_markMiddle, r318_aboveMarkTop - r318_markHalfStroke, r318_heading(r318_Leftward)), r318_alsoThru.g2(0.5, 0.5), r318_g2.left.end(r1461_leftEnd, r318_aboveMarkMid - r318_markHalfStroke, r318_heading(r318_Leftward))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("cyrl/pokrytieAbove", 1159, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1467_currentGlyph) {
            var _r1467_t0, _r1467_t1;
            r1467_currentGlyph.setWidth(0);
            r1467_currentGlyph.include(r318_StdAnchors.wide());
            var r1467_leftEnd = r318_markMiddle - r318_markExtend * 1.2;
            var r1467_rightEnd = r318_markMiddle + r318_markExtend * 2;
            r1467_currentGlyph.include(r318_dispiro(r318_widths.center(r318_markStroke), r318_g4.up.start(r1467_leftEnd, r318_aboveMarkBot, r318_heading(r318_Upward)), r318_arcvh(), r318_g2.right.mid(r318_markMiddle, r318_aboveMarkTop - r318_markHalfStroke, r318_heading(r318_Rightward)), r318_alsoThru.g2(0.5, 0.5), r318_g2.right.end(r1467_rightEnd, r318_aboveMarkMid - r318_markHalfStroke, r318_heading(r318_Rightward))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("cyrl/titloAbove", 1155, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1473_currentGlyph) {
            var _r1473_t0, _r1473_t1;
            r1473_currentGlyph.setWidth(0);
            r1473_currentGlyph.include(r318_StdAnchors.wide());
            r1473_currentGlyph.include(r318_VBar.m(r318_markMiddle - r318_markExtend, r318_aboveMarkBot, r318_aboveMarkMid + r318_markFine, r318_markFine * 2));
            r1473_currentGlyph.include(r318_VBar.m(r318_markMiddle + r318_markExtend, r318_aboveMarkMid - r318_markFine, r318_aboveMarkTop, r318_markFine * 2));
            r1473_currentGlyph.include(r318_HBar.m(r318_markMiddle - r318_markExtend, r318_markMiddle + r318_markExtend, r318_aboveMarkMid, r318_markFine * 2));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("cyrl/vzmetAbove", 42607, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1481_currentGlyph) {
            var _r1481_t0, _r1481_t1;
            r1481_currentGlyph.setWidth(0);
            r1481_currentGlyph.include(r318_StdAnchors.wide());
            r1481_currentGlyph.include(r318_VBar.m(r318_markMiddle - r318_markExtend, r318_aboveMarkBot, r318_aboveMarkMid + r318_markFine, r318_markFine * 2));
            r1481_currentGlyph.include(r318_VBar.m(r318_markMiddle + r318_markExtend, r318_aboveMarkBot, r318_aboveMarkMid + r318_markFine, r318_markFine * 2));
            r1481_currentGlyph.include(r318_HBar.m(r318_markMiddle - r318_markExtend, r318_markMiddle + r318_markExtend, r318_aboveMarkMid, r318_markFine * 2));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("cyrl/teAbove", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1489_currentGlyph) {
            var _r1489_t0, _r1489_t1;
            r1489_currentGlyph.setWidth(0);
            r1489_currentGlyph.include(r318_StdAnchors.wide());
            var r1489_ext = r318_markExtend * 1.5;
            r1489_currentGlyph.include(r318_VBar.m(r318_markMiddle - r1489_ext, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            r1489_currentGlyph.include(r318_VBar.m(r318_markMiddle, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            r1489_currentGlyph.include(r318_VBar.m(r318_markMiddle + r1489_ext, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            r1489_currentGlyph.include(r318_HBar.t(r318_markMiddle - r1489_ext, r318_markMiddle + r1489_ext, r318_aboveMarkTop, r318_markFine * 2));
            return void 0;
        }));
        r318_xn$ExportCapture$2Lrc4b(function () {
            var _r1497_t0, _r1497_t1;
            return {
                "CyrKavykaShape": r318_CyrKavykaShape
            };
        });
        var r318_CyrKavykaShape = function () {
            var _r1498_t5;
            var _r1498_t6 = arguments;
            var r1498_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1498_t6, 0);
            var _r1498_t0 = [];
            var _r1498_t1 = 0;
            while (_r1498_t1 < r1498_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r1498_xn$flexarguments$2Lrc7uIe5[_r1498_t1] instanceof r318_xn$NamedParameterPair$2Lrc9b)) _r1498_t0.push(r1498_xn$flexarguments$2Lrc7uIe5[_r1498_t1]);
                _r1498_t1 = _r1498_t1 + 1;
            }
            var _r1498_t2 = r1498_xn$flexarguments$2Lrc7uIe5;
            var _r1498_t3 = _r1498_t2.length;
            var _r1498_t4 = 0;
            while (_r1498_t4 < _r1498_t3) {
                _r1498_t1 = _r1498_t2[_r1498_t4];
                if (_r1498_t1 && _r1498_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r1498_t1.left === "top") r1498_top = _r1498_t1.right;
                if (_r1498_t1 && _r1498_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r1498_t1.left === "bottom") r1498_bottom = _r1498_t1.right;
                if (_r1498_t1 && _r1498_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r1498_t1.left === "xMiddle") r1498_xMiddle = _r1498_t1.right;
                if (_r1498_t1 && _r1498_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r1498_t1.left === "width") r1498_width = _r1498_t1.right;
                if (_r1498_t1 && _r1498_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r1498_t1.left === "hs") r1498_hs = _r1498_t1.right;
                _r1498_t4 = _r1498_t4 + 1;
            }
            var r1498_top = r1_fallback(r1498_top, _r1498_t0[0]);
            var r1498_bottom = r1_fallback(r1498_bottom, _r1498_t0[1]);
            var r1498_xMiddle = r1_fallback(r1498_xMiddle, _r1498_t0[2]);
            var r1498_width = r1_fallback(r1498_width, _r1498_t0[3]);
            var r1498_hs = r1_fallback(r1498_hs, _r1498_t0[4]);
            var r1498_leftEnd = r1498_xMiddle - r1498_width / 2;
            var r1498_rightEnd = r1498_xMiddle + r1498_width / 2;
            return r318_dispiro(r318_widths.center(r1498_hs * 2), r318_g4.down.start(r1498_leftEnd, r1498_top, r318_heading(r318_Downward)), r318_arcvh(), r318_g4.right.mid(r1498_xMiddle, r1498_bottom + r1498_hs, r318_heading(r318_Rightward)), r318_archv(), r318_g4.up.end(r1498_rightEnd, r1498_top, r318_heading(r318_Upward)));
        };
        r318_xn$ExportCapture$2Lrc4b(function () {
            var _r1504_t0, _r1504_t1;
            return {
                "CyrInvKavykaShape": r318_CyrInvKavykaShape
            };
        });
        var r318_CyrInvKavykaShape = function () {
            var _r1505_t5;
            var _r1505_t6 = arguments;
            var r1505_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r1505_t6, 0);
            var _r1505_t0 = [];
            var _r1505_t1 = 0;
            while (_r1505_t1 < r1505_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r1505_xn$flexarguments$2Lrc7uIe5[_r1505_t1] instanceof r318_xn$NamedParameterPair$2Lrc9b)) _r1505_t0.push(r1505_xn$flexarguments$2Lrc7uIe5[_r1505_t1]);
                _r1505_t1 = _r1505_t1 + 1;
            }
            var _r1505_t2 = r1505_xn$flexarguments$2Lrc7uIe5;
            var _r1505_t3 = _r1505_t2.length;
            var _r1505_t4 = 0;
            while (_r1505_t4 < _r1505_t3) {
                _r1505_t1 = _r1505_t2[_r1505_t4];
                if (_r1505_t1 && _r1505_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r1505_t1.left === "top") r1505_top = _r1505_t1.right;
                if (_r1505_t1 && _r1505_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r1505_t1.left === "bottom") r1505_bottom = _r1505_t1.right;
                if (_r1505_t1 && _r1505_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r1505_t1.left === "xMiddle") r1505_xMiddle = _r1505_t1.right;
                if (_r1505_t1 && _r1505_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r1505_t1.left === "width") r1505_width = _r1505_t1.right;
                if (_r1505_t1 && _r1505_t1 instanceof r318_xn$NamedParameterPair$2Lrc9b && _r1505_t1.left === "hs") r1505_hs = _r1505_t1.right;
                _r1505_t4 = _r1505_t4 + 1;
            }
            var r1505_top = r1_fallback(r1505_top, _r1505_t0[0]);
            var r1505_bottom = r1_fallback(r1505_bottom, _r1505_t0[1]);
            var r1505_xMiddle = r1_fallback(r1505_xMiddle, _r1505_t0[2]);
            var r1505_width = r1_fallback(r1505_width, _r1505_t0[3]);
            var r1505_hs = r1_fallback(r1505_hs, _r1505_t0[4]);
            var r1505_leftEnd = r1505_xMiddle - r1505_width / 2;
            var r1505_rightEnd = r1505_xMiddle + r1505_width / 2;
            return r318_dispiro(r318_widths.center(r1505_hs * 2), r318_g4.up.start(r1505_leftEnd, r1505_bottom, r318_heading(r318_Upward)), r318_arcvh(), r318_g4.right.mid(r1505_xMiddle, r1505_top - r1505_hs, r318_heading(r318_Rightward)), r318_archv(), r318_g4.down.end(r1505_rightEnd, r1505_bottom, r318_heading(r318_Downward)));
        };
        r318_xn$GlyphSaveSink$2Lrc4b.save("cyrl/kavykaAbove", 42620, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1512_currentGlyph) {
            var _r1512_t0, _r1512_t1;
            r1512_currentGlyph.setWidth(0);
            r1512_currentGlyph.include(r318_StdAnchors.extraWide());
            r1512_currentGlyph.include(r318_CyrKavykaShape(new r318_xn$NamedParameterPair$2Lrc9b("xMiddle", r318_markMiddle), new r318_xn$NamedParameterPair$2Lrc9b("width", 2 * (r318_markExtend * 1.5)), new r318_xn$NamedParameterPair$2Lrc9b("top", r318_aboveMarkTop), new r318_xn$NamedParameterPair$2Lrc9b("bottom", r318_aboveMarkBot), new r318_xn$NamedParameterPair$2Lrc9b("hs", r318_markHalfStroke)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("cyrl/invKavykaAbove", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1523_currentGlyph) {
            var _r1523_t0, _r1523_t1;
            r1523_currentGlyph.setWidth(0);
            r1523_currentGlyph.include(r318_StdAnchors.extraWide());
            r1523_currentGlyph.include(r318_CyrInvKavykaShape(new r318_xn$NamedParameterPair$2Lrc9b("xMiddle", r318_markMiddle), new r318_xn$NamedParameterPair$2Lrc9b("width", 2 * (r318_markExtend * 1.5)), new r318_xn$NamedParameterPair$2Lrc9b("top", r318_aboveMarkTop), new r318_xn$NamedParameterPair$2Lrc9b("bottom", r318_aboveMarkBot), new r318_xn$NamedParameterPair$2Lrc9b("hs", r318_markHalfStroke)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("cyrl/payerokAbove", 42621, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1534_currentGlyph) {
            var _r1534_t0, _r1534_t1;
            r1534_currentGlyph.setWidth(0);
            r1534_currentGlyph.include(r318_StdAnchors.mediumWide());
            var r1534_ext = 0.625 * r318_markExtend + r318_markFine;
            var r1534_coSlope = 0.2;
            var r1534_fr = new r1_Box(r318_aboveMarkTop, r318_aboveMarkBot, r318_markMiddle - r1534_ext, r318_markMiddle + r1534_ext);
            r1534_currentGlyph.include(r318_HBar.m(r1534_fr.left, r1534_fr.right - r1534_coSlope * (r1534_fr.top - r1534_fr.yMid), r1534_fr.yMid, r318_markFine * 2));
            r1534_currentGlyph.include(r318_intersection(r318_MaskBelow(r1534_fr.top), r318_MaskAbove(r1534_fr.yMid - r318_markFine), r318_ExtLineLhs(r1534_fr.left + r1534_coSlope * (r1534_fr.top - r1534_fr.yMid - r318_markFine), r1534_fr.top, r1534_fr.left - 2 * r318_markFine * r1534_coSlope, r1534_fr.yMid - r318_markFine, r318_markFine * 2, 4)));
            r1534_currentGlyph.include(r318_intersection(r318_MaskAbove(r1534_fr.bot), r318_MaskBelow(r1534_fr.top), r318_ExtLineLhs(r1534_fr.right - r1534_coSlope * (r1534_fr.top - r1534_fr.bot - 2 * r318_markFine), r1534_fr.bot, r1534_fr.right + 2 * r318_markFine * r1534_coSlope, r1534_fr.top, r318_markFine * 2, 4)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("suspensionMarkAbove", 7619, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1542_currentGlyph) {
            var _r1542_t0, _r1542_t1;
            r1542_currentGlyph.setWidth(0);
            r1542_currentGlyph.include(r318_StdAnchors.wide());
            var r1542_leftEnd = r318_markMiddle - r318_markExtend * 1.2;
            var r1542_rightEnd = r318_markMiddle + r318_markExtend * 2;
            r1542_currentGlyph.include(r318_dispiro(r318_widths.center(r318_markStroke), r318_g4.down.start(r1542_leftEnd, r318_aboveMarkTop, r318_heading(r318_Downward)), r318_arcvh(), r318_g2.right.mid(r318_markMiddle, r318_aboveMarkBot + r318_markHalfStroke, r318_heading(r318_Rightward)), r318_alsoThru.g2(0.5, 0.5), r318_g2.right.end(r1542_rightEnd, r318_aboveMarkTop - r318_markHalfStroke, r318_heading(r318_Rightward))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("ogonekAbove", 7630, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1548_currentGlyph) {
            var _r1548_t0, _r1548_t1;
            r1548_currentGlyph.setWidth(0);
            r1548_currentGlyph.setMarkAnchor("above", r318_markMiddle, r318_XH, r318_markMiddle, r318_aboveMarkStack);
            r1548_currentGlyph.setBaseAnchor("aboveBraceL", r318_markMiddle - 0.25 * r318_markExtend, r318_aboveMarkMid);
            r1548_currentGlyph.setBaseAnchor("aboveBraceR", r318_markMiddle + 0.25 * r318_markExtend + r318_HSwToV(0.25 * r318_markStroke), r318_aboveMarkMid);
            var r1548_fine = r318_AdviceStroke(8);
            var r1548_depth = 0 - r318_Descender - r318_markStroke;
            var r1548_fullExt = 7 / 16 * r1548_depth + 0.125 * r318_markStress;
            var r1548_extR = 0.25 * r1548_fullExt;
            var r1548_extL = 0.5 * r1548_fullExt + 0.375 * r318_markStroke + Math.max(0.125 * r318_markExtend, r318_TanSlope * 1.5 * r318_markStroke);
            var r1548_turnSlope = 0.5 * ((r318_markStroke - r1548_fine) / r318_markStroke - (r318_ArchDepthB - r318_ArchDepth) / r318_ArchDepth);
            r1548_currentGlyph.include(r318_intersection(r318_MaskAbove(r318_XH + r318_O), r318_dispiro(r318_g4(r318_markMiddle + r1_mix(+r1548_extR, -r1548_extL, 0.75), r318_XH, r318_widths.rhs.heading(r1548_fine, r318_Rightward)), r318_alsoThru(0.5, 0.375 - 0.2 * r318_markStroke / r1548_depth, r318_widths.rhs(r1_mix(r1548_fine, r318_markStroke, 0.25))), r318_g4.up.mid(r318_markMiddle + r1548_extR, r318_XH + 0.75 * r1548_depth, r318_widths.rhs.heading(r318_markStroke, {
                "x": -r318_HVContrast,
                "y": -r1548_turnSlope
            })), r318_arcvh(r318_widths.rhs(r318_markStroke)), r318_g4(r318_markMiddle + r1_mix(+r1548_extR, -r1548_extL, 0.625), r318_XH + r1548_depth - r318_O, r318_heading(r318_Leftward)), r318_g4(r318_markMiddle - r1548_extL, r318_XH + r1548_depth - 0.5 * r318_O, r318_heading(r318_Leftward)))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("deletionMarkAbove", 7675, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1556_currentGlyph) {
            var _r1556_t0, _r1556_t1;
            r1556_currentGlyph.setWidth(0);
            r1556_currentGlyph.include(r318_StdAnchors.medium());
            var r1556_wide = r318_markExtend * 0.3;
            var r1556_d = r318_markExtend * 0.7;
            var r1556_fine = Math.min(r318_markExtend / 6, 0.5 * (r318_AdviceStroke(3.5) * (r318_markStroke / r318_Stroke)));
            var r1556_stress = 1.2 * r1556_fine;
            r1556_currentGlyph.include(r318_dispiro(r318_flat(r318_markMiddle - r1556_d + r1556_wide, r318_aboveMarkTop, r318_widths.center.heading(2 * r1556_stress, r318_Downward)), r318_curl(r318_markMiddle - r1556_d - r1556_wide, r318_aboveMarkBot, r318_widths.center.heading(2 * r1556_fine, r318_Downward))));
            r1556_currentGlyph.include(r318_dispiro(r318_flat(r318_markMiddle + r1556_wide, r318_aboveMarkTop, r318_widths.center.heading(2 * r1556_stress, r318_Downward)), r318_curl(r318_markMiddle - r1556_wide, r318_aboveMarkBot, r318_widths.center.heading(2 * r1556_fine, r318_Downward))));
            r1556_currentGlyph.include(r318_dispiro(r318_flat(r318_markMiddle + r1556_d + r1556_wide, r318_aboveMarkTop, r318_widths.center.heading(2 * r1556_stress, r318_Downward)), r318_curl(r318_markMiddle + r1556_d - r1556_wide, r318_aboveMarkBot, r318_widths.center.heading(2 * r1556_fine, r318_Downward))));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("kreskaAbove", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1564_currentGlyph) {
            var _r1564_t0, _r1564_t1;
            r1564_currentGlyph.setWidth(0);
            r1564_currentGlyph.include(r318_xn$referglyph$1aao("tonosAbove"));
            r1564_currentGlyph.include(r318_StdAnchors.narrow());
            return void 0;
        }));
        var r318_VNSecondaryMark = function (r1568_s, r1568_kx, r1568_ky, r1568_d) {
            var _r1568_t0, _r1568_t1;
            return new r318_xn$Capture$2Lrc8.GlyphProc(function (r1570_currentGlyph) {
                var _r1570_t0, _r1570_t1;
                r1570_currentGlyph.include(r318_ScaleAround(r318_markMiddle, r318_aboveMarkMid, r1568_s, r1568_s));
                r1570_currentGlyph.include(r318_ApparentTranslate(1.5 * r1568_kx * r318_markExtend, 0));
                var r1570_my = r318_aboveMarkStack - 0.5 * r1568_ky * r318_AccentHeight;
                r1570_currentGlyph.setMarkAnchor("above", r318_markMiddle, r1570_my, r318_markMiddle, r1570_my + r1568_d * r318_AccentHeight);
                return void 0;
            });
        };
        r318_xn$derivecomposites$7Hrq("acuteAbove/viSide", null, "acuteAbove", r318_VNSecondaryMark(0.75, +1, +1, 0));
        r318_xn$derivecomposites$7Hrq("graveAbove/viSide", null, "graveAbove", r318_VNSecondaryMark(0.75, -1, +1, 0));
        r318_xn$derivecomposites$7Hrq("hookAbove/viSide", null, "hookAbove", r318_VNSecondaryMark(0.75, +1, +1, 0));
        r318_xn$derivecomposites$7Hrq("acuteAbove/viCenter", null, "acuteAbove", r318_VNSecondaryMark(0.75, 0, 1.75, 0.5));
        r318_xn$derivecomposites$7Hrq("graveAbove/viCenter", null, "graveAbove", r318_VNSecondaryMark(0.75, 0, 1.75, 0.5));
        r318_xn$derivecomposites$7Hrq("hookAbove/viCenter", null, "hookAbove", r318_VNSecondaryMark(0.75, 0, 1.75, 0.5));
        r318_xn$GlyphSaveSink$2Lrc4b.save("leftParenAbove", 6849, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1576_currentGlyph) {
            var _r1576_t0, _r1576_t1;
            r1576_currentGlyph.setWidth(0);
            r1576_currentGlyph.setMarkAnchor("aboveBraceL", r318_markMiddle, r318_aboveMarkMid, r318_markMiddle - r318_markExtend, r318_aboveMarkMid);
            var r1576_braceDepth = r318_markExtend * 0.25;
            var r1576_left = r318_markMiddle - 1.5 * r318_markExtend;
            r1576_currentGlyph.include(r318_dispiro(r318_widths.lhs(r318_markFine), r318_g4(r1576_left + r1576_braceDepth, r318_aboveMarkTop + r318_markFine), r318_g4(r1576_left + r318_OX, r318_aboveMarkMid), r318_g4(r1576_left + r1576_braceDepth, r318_aboveMarkBot - r318_markFine)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("rightParenAbove", 6850, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1582_currentGlyph) {
            var _r1582_t0, _r1582_t1;
            r1582_currentGlyph.setWidth(0);
            r1582_currentGlyph.setMarkAnchor("aboveBraceR", r318_markMiddle, r318_aboveMarkMid, r318_markMiddle + r318_markExtend, r318_aboveMarkMid);
            var r1582_braceDepth = r318_markExtend * 0.25;
            var r1582_right = r318_markMiddle + 1.5 * r318_markExtend;
            r1582_currentGlyph.include(r318_dispiro(r318_widths.rhs(r318_markFine), r318_g4(r1582_right - r1582_braceDepth, r318_aboveMarkTop + r318_markFine), r318_g4(r1582_right - r318_OX, r318_aboveMarkMid), r318_g4(r1582_right - r1582_braceDepth, r318_aboveMarkBot - r318_markFine)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("parenAbove", 6843, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1588_currentGlyph) {
            var _r1588_t0, _r1588_t1;
            r1588_currentGlyph.setWidth(0);
            r1588_currentGlyph.include(r318_xn$referglyph$1aao("leftParenAbove"));
            r1588_currentGlyph.include(r318_xn$referglyph$1aao("rightParenAbove"));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("leftDoubleParenAbove", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1594_currentGlyph) {
            var _r1594_t0, _r1594_t1;
            r1594_currentGlyph.setWidth(0);
            r1594_currentGlyph.setMarkAnchor("aboveBraceL", r318_markMiddle, r318_aboveMarkMid, r318_markMiddle - 1.5 * r318_markExtend, r318_aboveMarkMid);
            var r1594_braceDepth = r318_markExtend * 0.25;
            var r1594_left = r318_markMiddle - 1.5 * r318_markExtend;
            var r1594_gap = r318_HSwToV(r318_markFine) + Math.max(r318_markFine, r318_markExtend * 0.5);
            r1594_currentGlyph.include(r318_dispiro(r318_widths.lhs(r318_markFine), r318_g4(r1594_left + r1594_braceDepth, r318_aboveMarkTop + r318_markFine), r318_g4(r1594_left + r318_OX, r318_aboveMarkMid), r318_g4(r1594_left + r1594_braceDepth, r318_aboveMarkBot - r318_markFine)));
            r1594_currentGlyph.include(r318_dispiro(r318_widths.lhs(r318_markFine), r318_g4(r1594_left - r1594_gap + r1594_braceDepth, r318_aboveMarkTop + r318_markFine), r318_g4(r1594_left - r1594_gap + r318_OX, r318_aboveMarkMid), r318_g4(r1594_left - r1594_gap + r1594_braceDepth, r318_aboveMarkBot - r318_markFine)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("rightDoubleParenAbove", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1601_currentGlyph) {
            var _r1601_t0, _r1601_t1;
            r1601_currentGlyph.setWidth(0);
            r1601_currentGlyph.setMarkAnchor("aboveBraceR", r318_markMiddle, r318_aboveMarkMid, r318_markMiddle + 1.5 * r318_markExtend, r318_aboveMarkMid);
            var r1601_braceDepth = r318_markExtend * 0.25;
            var r1601_right = r318_markMiddle + 1.5 * r318_markExtend;
            var r1601_gap = r318_HSwToV(r318_markFine) + Math.max(r318_markFine, r318_markExtend * 0.5);
            r1601_currentGlyph.include(r318_dispiro(r318_widths.rhs(r318_markFine), r318_g4(r1601_right - r1601_braceDepth, r318_aboveMarkTop + r318_markFine), r318_g4(r1601_right - r318_OX, r318_aboveMarkMid), r318_g4(r1601_right - r1601_braceDepth, r318_aboveMarkBot - r318_markFine)));
            r1601_currentGlyph.include(r318_dispiro(r318_widths.rhs(r318_markFine), r318_g4(r1601_right + r1601_gap - r1601_braceDepth, r318_aboveMarkTop + r318_markFine), r318_g4(r1601_right + r1601_gap - r318_OX, r318_aboveMarkMid), r318_g4(r1601_right + r1601_gap - r1601_braceDepth, r318_aboveMarkBot - r318_markFine)));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("doubleParenAbove", 6844, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1608_currentGlyph) {
            var _r1608_t0, _r1608_t1;
            r1608_currentGlyph.setWidth(0);
            r1608_currentGlyph.include(r318_xn$referglyph$1aao("leftDoubleParenAbove"));
            r1608_currentGlyph.include(r318_xn$referglyph$1aao("rightDoubleParenAbove"));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("leftBrackAbove", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1614_currentGlyph) {
            var _r1614_t0, _r1614_t1;
            r1614_currentGlyph.setWidth(0);
            r1614_currentGlyph.setMarkAnchor("aboveBraceL", r318_markMiddle, r318_aboveMarkMid, r318_markMiddle - r318_markExtend, r318_aboveMarkMid);
            var r1614_braceDepth = r318_markExtend * 0.75;
            var r1614_left = r318_markMiddle - 1.75 * r318_markExtend;
            r1614_currentGlyph.include(r318_VBar.l(r1614_left, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine));
            r1614_currentGlyph.include(r318_HBar.t(r1614_left, r1614_left + r1614_braceDepth, r318_aboveMarkTop, r318_markFine));
            r1614_currentGlyph.include(r318_HBar.b(r1614_left, r1614_left + r1614_braceDepth, r318_aboveMarkBot, r318_markFine));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("rightBrackAbove", null, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1622_currentGlyph) {
            var _r1622_t0, _r1622_t1;
            r1622_currentGlyph.setWidth(0);
            r1622_currentGlyph.setMarkAnchor("aboveBraceR", r318_markMiddle, r318_aboveMarkMid, r318_markMiddle + r318_markExtend, r318_aboveMarkMid);
            var r1622_braceDepth = r318_markExtend * 0.75;
            var r1622_right = r318_markMiddle + 1.75 * r318_markExtend;
            r1622_currentGlyph.include(r318_VBar.r(r1622_right, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine));
            r1622_currentGlyph.include(r318_HBar.t(r1622_right - r1622_braceDepth, r1622_right, r318_aboveMarkTop, r318_markFine));
            r1622_currentGlyph.include(r318_HBar.b(r1622_right - r1622_braceDepth, r1622_right, r318_aboveMarkBot, r318_markFine));
            return void 0;
        }));
        r318_xn$GlyphSaveSink$2Lrc4b.save("brackAbove", 6853, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1630_currentGlyph) {
            var _r1630_t0, _r1630_t1;
            r1630_currentGlyph.setWidth(0);
            r1630_currentGlyph.include(r318_xn$referglyph$1aao("leftBrackAbove"));
            r1630_currentGlyph.include(r318_xn$referglyph$1aao("rightBrackAbove"));
            return void 0;
        }));
        return r318_xn$GlyphSaveSink$2Lrc4b.save("armn/abbreviationMark", 1375, new r318_xn$Capture$2Lrc8.GlyphProc(function (r1636_currentGlyph) {
            var _r1636_t0, _r1636_t1;
            r1636_currentGlyph.setWidth(0);
            r1636_currentGlyph.include(r318_StdAnchors.wide());
            var r1636_leftEnd = r318_markMiddle - r318_markExtend * 1.5;
            var r1636_rightEnd = r318_markMiddle + r318_markExtend * 1.5;
            r1636_currentGlyph.include(r318_VBar.l(r1636_leftEnd, r318_aboveMarkBot, r318_aboveMarkTop, r318_markFine * 2));
            r1636_currentGlyph.include(r318_HBar.b(r1636_leftEnd, r1636_rightEnd, r318_aboveMarkBot, r318_markFine * 2));
            return void 0;
        }));
    });
    return void 0;
});


