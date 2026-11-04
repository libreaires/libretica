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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-Q", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_body, r312_swTailInner, r312_tailShape, r312_mkCapital, r312_mkSmcp, _r312_t10, _r312_t11, _r312_t12, _r312_t13, _r312_tag14;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Descender = _r312_t1.Descender;
        var r312_Translate = _r312_t1.Translate;
        var r312_TanSlope = _r312_t1.TanSlope;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_VSwToH = _r312_t1.VSwToH;
        var r312_Upward = _r312_t1.Upward;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_Hook = _r312_t1.Hook;
        var r312_HookX = _r312_t1.HookX;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_VJutStroke = _r312_t1.VJutStroke;
        var r312_CThin = _r312_t1.CThin;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_ShoulderFine = _r312_t1.ShoulderFine;
        var r312_StrokeWidthBlend = _r312_t1.StrokeWidthBlend;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_alsoThru = _r312_t2.alsoThru;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_xn$noshape$3cah = _r312_t5["no-shape"];
        var r312_MaskLeft = _r312_t5.MaskLeft;
        var r312_MaskBelowLine = _r312_t5.MaskBelowLine;
        var r312_MaskRightLine = _r312_t5.MaskRightLine;
        var r312_OShape = _r312_t5.OShape;
        var r312_OShapeOutline = _r312_t5.OShapeOutline;
        var r312_DiagCor = _r312_t5.DiagCor;
        var r312_VBar = _r312_t5.VBar;
        var r312_flatside = _r312_t5.flatside;
        var r312_Arch = _r312_t5.Arch;
        var r312_PointingTo = _r312_t5.PointingTo;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_alias = _r312_t6.alias;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r312_BBS = _r312_t7.BBS;
        var r312_BBD = _r312_t7.BBD;
        r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-O"].resolve();
        var r312_TailDepth = 0 - r312_Hook;
        var r312_QStdBody = function (r317_df, r317_top, r317_sw) {
            var _r317_t0, _r317_t1;
            return r312_OShape(r317_top, 0, r317_df.leftSB, r317_df.rightSB, r317_sw, r312_ArchDepthA, r312_ArchDepthB);
        };
        var r312_QHorizontalTailedBody = function (r318_df, r318_top, r318_sw) {
            var _r318_t0, _r318_t1;
            var r318_fine = r1_mix(r312_ShoulderFine, r318_sw, 0.125);
            var r318_tailRB = r1_mix(r318_df.rightSB, r318_df.width, 0.7);
            return r312_dispiro(r312_g4.right.mid(r312_Arch["adjust-x"].bot(r318_df.middle, r318_fine), r318_sw - r318_fine, r312_widths.lhs(r318_fine)), r312_archv(), r312_flatside.ru(r318_df.rightSB, 0, r318_top, r312_ArchDepthA, r312_ArchDepthB, void 0, r312_widths.lhs(r318_sw)), r312_Arch.lhs(r318_top), r312_flatside.ld(r318_df.leftSB, 0, r318_top, r312_ArchDepthA, r312_ArchDepthB), r312_arcvh(), r312_flat(r312_Arch["adjust-x"].bot(r318_df.middle), 0), r312_curl(r318_tailRB, 0));
        };
        var r312_QOpenSwashyBody = function (r319_df, r319_top) {
            var _r319_t0, _r319_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var _r321_t0, _r321_t1;
                var r321_fine = r312_AdviceStroke(3.5);
                var r321_xLB0 = r1_mix(r319_df.leftSB, r319_df.rightSB, 1 / 16);
                var r321_xLB = r321_xLB0 + r312_HSwToV(0.6 * r321_fine);
                var r321_yLB = r1_mix(0, r312_Descender, 31 / 32) + r312_O;
                var r321_xMBArc = r1_mix(r319_df.rightSB, r321_xLB, 0.5);
                var r321_yMBArc = r1_mix(r312_ArchDepthA, r321_yLB, 0.625) + r312_Stroke * (1 / 16);
                var r321_xRB0 = r1_mix(r319_df.rightSB, r319_df.width, 0.7);
                var r321_xRB = r321_xRB0 - r312_HSwToV(0.75 * r312_Stroke);
                var r321_yRingStart = r312_XH / 12;
                var r321_notchOffset = -r312_Descender * 0.625 + r312_Stroke * 0.625 + r321_yRingStart / 2;
                var r321_tailSlope = 0.2 + 0.5 * (1 - r321_fine / r312_Stroke);
                r321_currentGlyph.include(r312_difference(r312_dispiro(r312_flat(r319_df.width, r321_yRingStart + r312_O, r312_widths.rhs.heading(r321_fine, r312_Leftward)), r312_curl(r312_Arch["adjust-x"].bot(r319_df.middle), r321_yRingStart + r312_O), r312_archv(), r312_flatside.lu(r319_df.leftSB, r321_yRingStart, r319_top, r312_ArchDepthA, r312_ArchDepthB, void 0, r312_widths.rhs(r312_Stroke)), r312_Arch.rhs(r319_top), r312_flatside.rd(r319_df.rightSB, 0, r319_top, r312_ArchDepthA, r312_ArchDepthB)), r312_MaskBelowLine(r1_mix(r321_xMBArc, r321_xLB0, 4), r1_mix(r321_yMBArc, r321_yLB, 4) + r321_notchOffset, r1_mix(r321_xLB0, r321_xMBArc, 4), r1_mix(r321_yLB, r321_yMBArc, 4) + r321_notchOffset), r312_MaskRightLine(r319_df.middle, 0, r319_df.middle, r319_top, 2)));
                r321_currentGlyph.include(r312_dispiro(r312_flat(r319_df.leftSB + r312_OX, r1_mix(r321_yRingStart, r319_top, 0.5), r312_widths.rhs.heading(r312_Stroke, r312_Upward)), r312_curl(r319_df.leftSB + r312_OX, r319_top - r312_ArchDepthA), r312_Arch.rhs(r319_top), r312_flat(r319_df.rightSB - r312_OX, r319_top - r312_ArchDepthB), r312_curl(r319_df.rightSB - r312_OX, r312_ArchDepthA), r312_alsoThru.g2(0.5, 0.8, r312_widths.rhs(0.9 * r1_mix(r312_Stroke, r321_fine, 0.25))), r312_g2(r321_xMBArc, r321_yMBArc, r312_widths.rhs(0.8 * r1_mix(r312_Stroke, r321_fine, 0.5))), r312_alsoThru.g2(0.55, 0.35, r312_widths.rhs(0.9 * r1_mix(r312_Stroke, r321_fine, 0.75))), r312_g2(r321_xLB, r321_yLB, r312_widths.rhs(r321_fine))));
                r321_currentGlyph.include(r312_difference(r312_dispiro(r312_g2(r321_xLB, r321_yLB, r312_widths.lhs(r321_fine * r312_CThin)), r312_g2.right.mid(r1_mix(r321_xLB, r321_xRB, 1 / 4), r321_yLB - r312_Descender / 4 - r312_Stroke * (1 / 16), r312_widths.lhs.heading(r321_fine * r312_CThin, {
                    "x": r312_TanSlope + r321_tailSlope,
                    "y": 1
                })), r312_alsoThru.g2(0.5, 0.5), r312_g2.right.mid(r1_mix(r321_xLB, r321_xRB, 3 / 4) + r312_Stroke * r321_tailSlope, r312_Descender + r312_O, r312_widths.lhs.heading(r312_Stroke, {
                    "x": r312_TanSlope - r321_tailSlope,
                    "y": 1
                })), r312_archv(), r312_g2(r321_xRB0, r1_mix(r312_Descender, r321_xLB, 0.5), r312_widths.lhs.heading(r321_fine, r312_Upward))), r312_MaskLeft(r321_xLB)));
                return void 0;
            });
        };
        var r312_QStraightTail = function (r325_df) {
            var _r325_t0, _r325_t1;
            var r325_shift = r312_StrokeWidthBlend(0, 0.25);
            return r312_dispiro(r312_widths.rhs(), r312_flat(r325_df.middle - r312_HSwToV(r312_Stroke) * r325_shift - r312_TailDepth * 0.25, r312_TailDepth, r312_heading(r312_Upward)), r312_curl(r325_df.middle - r312_HSwToV(r312_Stroke) * r325_shift, 0));
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r327_t0, _r327_t1;
            return {
                "QCurlyTail": r312_QCurlyTail
            };
        });
        var r312_QCurlyTail = function (r328_df) {
            var _r328_t0, _r328_t1;
            var r328_shift = r312_StrokeWidthBlend(0.5, 0.6);
            var r328_startx = r328_df.middle + r312_HSwToV(r312_Stroke * r328_shift);
            return r312_dispiro(r312_widths.rhs(), r312_flat(r328_startx, r312_HalfStroke, r312_heading(r312_Downward)), r312_curl(r328_startx, 0, r312_heading(r312_Downward)), r312_arcvh(), r312_flat(Math.min(r328_df.middle + r312_HookX - 1, r328_startx - r312_TailDepth - r312_HSwToV(r312_Stroke)), r312_Stroke + r312_TailDepth), r312_curl(r328_df.middle + r312_HookX, r312_Stroke + r312_TailDepth));
        };
        var r312_QCrossingCurlyTail = function (r329_df, r329_top, r329_sw) {
            var _r329_t0, _r329_t1;
            return r312_union(r312_VBar.m(r329_df.middle, r312_HalfStroke, r1_mix(r312_Descender, r312_HalfStroke, 1.75), r329_sw), r312_dispiro(r312_widths.rhs(), r312_flat(r329_df.middle + r312_HSwToV(r312_HalfStroke), r312_HalfStroke, r312_heading(r312_Downward)), r312_curl(r329_df.middle + r312_HSwToV(r312_HalfStroke), 0, r312_heading(r312_Downward)), r312_arcvh(), r312_flat(Math.min(r329_df.middle + r312_HookX - 1, r329_df.middle - r312_HSwToV(r312_HalfStroke) - r312_TailDepth), r312_Stroke + r312_TailDepth), r312_curl(r329_df.middle + r312_HookX, r312_Stroke + r312_TailDepth)));
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r331_t0, _r331_t1;
            return {
                "QCrossing": r312_QCrossing
            };
        });
        var r312_QCrossing = function (r332_df, r332_top, r332_sw) {
            var _r332_t0, _r332_t1;
            var r332_k = 1.5;
            var r332_cor = r312_DiagCor(r332_k * (r332_df.rightSB - r332_df.middle), r332_df.rightSB - r332_df.middle - r312_OX);
            var r332_shift = r312_XH * -0.1;
            return r312_dispiro(r312_widths.center(r332_cor * r332_sw), r312_flat(r332_df.rightSB, r332_shift, r312_heading(r312_Upward)), r312_curl(r332_df.middle + r312_OX, r332_k * (r332_df.rightSB - r332_df.middle) + r332_shift, r312_heading(r312_Upward)));
        };
        var r312_QCrossingBaseline = function (r333_df, r333_top, r333_sw) {
            var _r333_t0, _r333_t1;
            var r333_cor = r312_DiagCor(0.5 * (r333_top - r312_Stroke), r333_df.rightSB - r333_df.middle - r312_OX);
            return r312_dispiro(r312_widths.center(r333_cor * r333_sw), r312_flat(r333_df.rightSB, 0, r312_heading(r312_Upward)), r312_curl(r333_df.middle + r312_OX, 0.5 * (r333_top - r312_Stroke), r312_heading(r312_Upward)));
        };
        var r312_QVerticalCrossing = function (r334_df, r334_top, r334_sw) {
            var _r334_t0, _r334_t1;
            return r312_union(r312_VBar.m(r334_df.middle, r1_mix(r312_Descender, r312_HalfStroke, 1.75), 0, r334_sw), r312_VBar.m(r334_df.middle, 0, r312_TailDepth));
        };
        var r312_detachedTailGap = Math.max(-0.25 * r312_Descender, r312_AdviceStroke(12));
        var r312_yObliqueTailStart = 0 - r312_detachedTailGap - r312_Stroke * 0.875;
        var r312_yObliqueTailEnd = r1_mix(0, r312_Descender, 0.75) - r312_HalfStroke;
        var r312_xDetachedTailEnd = function (r335_df) {
            var _r335_t0, _r335_t1;
            return r1_mix(r335_df.rightSB, r335_df.width, 0.75);
        };
        var r312_kBendStartPartLeftLength = 0.5;
        var r312_xBendTailStart = function (r336_df) {
            var _r336_t0, _r336_t1;
            return r1_mix(r336_df.middle, r336_df.leftSB, r312_kBendStartPartLeftLength);
        };
        var r312_yBendTailStart = r1_mix(r312_yObliqueTailStart, r312_yObliqueTailEnd, r312_kBendStartPartLeftLength);
        var r312_QDetachedTail = function (r337_df) {
            var _r337_t0, _r337_t1;
            return r312_dispiro(r312_widths.lhs(r312_Stroke), r312_corner(r337_df.middle, r312_yObliqueTailStart, r312_heading(r312_Rightward)), r312_corner(r312_xDetachedTailEnd(r337_df), r312_yObliqueTailEnd, r312_heading(r312_Rightward)));
        };
        var r312_QDetachedBendTail = function (r338_df) {
            var _r338_t0, _r338_t1;
            return r312_union(r312_QDetachedTail(r338_df), r312_dispiro(r312_widths.lhs(r312_Stroke), r312_corner(r312_xBendTailStart(r338_df), r312_yBendTailStart, r312_heading(r312_Rightward)), r312_corner(r338_df.middle, r312_yObliqueTailStart, r312_heading(r312_Rightward))));
        };
        var r312_QSwashyTail = function (r339_df, r339_top, r339_sw) {
            var _r339_t0, _r339_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
                var _r341_t0, _r341_t1;
                var r341_fine = r339_df.adviceStroke(3.5);
                var r341_xLB0 = r1_mix(r339_df.leftSB, r339_df.rightSB, 1 / 16);
                var r341_xLB = r341_xLB0 + r312_HSwToV(0.6 * r341_fine);
                var r341_yLB = r1_mix(0, r312_Descender, 31 / 32) + r312_O;
                var r341_xRB0 = r1_mix(r339_df.rightSB, r339_df.width, 0.7);
                var r341_xRB = r341_xRB0 - r312_HSwToV(0.75 * r312_Stroke);
                var r341_tailSlope = 0.2 + 0.5 * (1 - r341_fine / r312_Stroke);
                r341_currentGlyph.include(r312_difference(r312_dispiro(r312_flat(r339_df.middle + r312_HSwToV(0.5 * r312_Stroke), r1_mix(0, r339_top, 0.1), r312_widths.rhs(r312_Stroke)), r312_curl(r341_xLB, r341_yLB, r312_widths.rhs(r341_fine))), r312_OShapeOutline(r339_top, 0, r339_df.leftSB, r339_df.rightSB, r312_Stroke, r312_ArchDepthA, r312_ArchDepthB)));
                r341_currentGlyph.include(r312_difference(r312_dispiro(r312_g2(r341_xLB, r341_yLB, r312_widths.lhs(r341_fine * r312_CThin)), r312_g2.right.mid(r1_mix(r341_xLB, r341_xRB, 1 / 4), r341_yLB - r312_Descender / 4 - r312_Stroke * (1 / 16), r312_widths.lhs.heading(r341_fine * r312_CThin, {
                    "x": r312_TanSlope + r341_tailSlope,
                    "y": 1
                })), r312_alsoThru.g2(0.5, 0.5), r312_g2.right.mid(r1_mix(r341_xLB, r341_xRB, 3 / 4) + r312_Stroke * r341_tailSlope, r312_Descender + r312_O, r312_widths.lhs.heading(r312_Stroke, {
                    "x": r312_TanSlope - r341_tailSlope,
                    "y": 1
                })), r312_archv(), r312_g2(r341_xRB0, r1_mix(r312_Descender, r341_xLB, 0.5), r312_widths.lhs.heading(r341_fine, r312_Upward))), r312_MaskLeft(r341_xLB)));
                return void 0;
            });
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r345_t0, _r345_t1;
            return {
                "QInnerDiagSw": r312_QInnerDiagSw
            };
        });
        var r312_QInnerDiagSw = r312_AdviceStroke(4);
        var r312_QInnerVertSw = Math.min(r312_VJutStroke, r312_VSwToH(0.5 * (r312_RightSB - r312_SB - r312_HSwToV(2 * r312_Stroke))));
        var r312_QConfig = {
            "straight": [r312_QStdBody, r312_Stroke, r312_QStraightTail, "capDesc", "p"],
            "curlyTailed": [r312_QStdBody, r312_Stroke, r312_QCurlyTail, "capDesc", "p"],
            "crossingCurlyTailed": [r312_QStdBody, r312_QInnerVertSw, r312_QCrossingCurlyTail, "capDesc", "p"],
            "crossing": [r312_QStdBody, r312_QInnerDiagSw, r312_QCrossing, "capital", "e"],
            "crossingBaseline": [r312_QStdBody, r312_QInnerDiagSw, r312_QCrossingBaseline, "capital", "e"],
            "verticalCrossing": [r312_QStdBody, r312_QInnerVertSw, r312_QVerticalCrossing, "capDesc", "p"],
            "horizontalTailed": [r312_QHorizontalTailedBody, r312_AdviceStroke(3), r312_xn$noshape$3cah, "capital", "e"],
            "detachedTailed": [r312_QStdBody, r312_Stroke, r312_QDetachedTail, "capDesc", "p"],
            "detachedBendTailed": [r312_QStdBody, r312_Stroke, r312_QDetachedBendTail, "capDesc", "p"],
            "openSwash": [r312_QOpenSwashyBody, r312_Stroke, r312_xn$noshape$3cah, "capDesc", "p"],
            "closedSwash": [r312_QStdBody, r312_Stroke, r312_QSwashyTail, "capDesc", "p"]
        };
        var _r312_t8 = Object.entries(r312_QConfig)[Symbol.iterator]();
        var _r312_t9 = void 0;
        while (!(_r312_t9 = _r312_t8.next()).done) {
            _r312_t10 = _r312_t9.value;
            r312_suffix = _r312_t10[0];
            r312_body = _r312_t10[1][0];
            r312_swTailInner = _r312_t10[1][1];
            r312_tailShape = _r312_t10[1][2];
            r312_mkCapital = _r312_t10[1][3];
            r312_mkSmcp = _r312_t10[1][4];
            _r312_t10[1];
            (function () {
                r312_xn$GlyphSaveSink$2Lrc4b.save("Q." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                    var _r351_t0, _r351_t1;
                    var r351_df = r351_currentGlyph.include(r312_DivFrame(1));
                    r351_currentGlyph.include(r351_df.markSet[r312_mkCapital]());
                    r351_currentGlyph.include(r312_body(r351_df, r312_CAP, r312_Stroke));
                    r351_currentGlyph.include(r312_tailShape(r351_df, r312_CAP, r312_swTailInner));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("smcpQ." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                    var _r358_t0, _r358_t1;
                    var r358_df = r358_currentGlyph.include(r312_DivFrame(1));
                    r358_currentGlyph.include(r358_df.markSet[r312_mkSmcp]());
                    r358_currentGlyph.include(r312_body(r358_df, r312_XH, r312_Stroke));
                    r358_currentGlyph.include(r312_tailShape(r358_df, r312_XH, r312_swTailInner));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("QSideways." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                    var _r365_t0, _r365_t1;
                    var r365_df = r312_DivFrame(r312_XH / r312_Width, 2, r312_XH * 0.1 / r312_SB);
                    r365_currentGlyph.include(r312_PointingTo(r312_Width, r312_XH, r312_Width, 0, function () {
                        var _r367_t0, _r367_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                            var _r369_t0, _r369_t1;
                            r369_currentGlyph.include(r312_body(r365_df, r312_RightSB, r312_Stroke));
                            r369_currentGlyph.include(r312_tailShape(r365_df, r312_RightSB, r312_swTailInner));
                            r369_currentGlyph.include(r312_Translate(0, r312_SB / 2));
                            return void 0;
                        });
                    }));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("Q", "Q");
        r312_alias("cyrl/Qa", 1306, "Q");
        r312_xn$selectvariant$7Hrq("smcpQ", 42927, new r312_xn$NamedParameterPair$2Lrc9b("follow", "Q"));
        r312_xn$selectvariant$7Hrq("QSideways", 8506, new r312_xn$NamedParameterPair$2Lrc9b("follow", "Q"));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("mathbb/Q", 8474, new r312_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
            var _r377_t0, _r377_t1;
            var r377_QInner = function () {
                var _r378_t0, _r378_t1;
                return r312_OShapeOutline.NoOvershoot(r312_CAP, 0, r312_SB, r312_RightSB, r312_BBS, r312_ArchDepthA, r312_ArchDepthB);
            };
            r377_currentGlyph.include(r312_MarkSet.capDesc());
            r377_currentGlyph.include(r312_OShape(r312_CAP, 0, r312_SB, r312_RightSB, r312_BBS, r312_ArchDepthA, r312_ArchDepthB));
            r377_currentGlyph.include(r312_intersection(r377_QInner(), r312_union(r312_VBar.l(r312_SB + r312_BBD, 0, r312_CAP, r312_BBS), r312_VBar.r(r312_RightSB - r312_BBD, 0, r312_CAP, r312_BBS))));
            var r377_terminalX = r312_Middle + r312_HookX;
            var r377_tailDeltaX = r312_BBD / 2;
            var r377_qTerminalY = r312_BBS - r312_Hook - r312_BBD / 4;
            var r377_QTail = function (r382_x) {
                var _r382_t0, _r382_t1;
                return r312_dispiro(r312_widths.center(r312_BBS), r312_flat(r382_x, r312_CAP / 2), r312_curl(r382_x, 0), r312_arcvh(), r312_flat(Math.min(r377_terminalX - 1, r382_x - r377_qTerminalY), r377_qTerminalY), r312_curl(r377_terminalX, r377_qTerminalY));
            };
            r377_currentGlyph.include(r312_difference(r312_union(r377_QTail(r312_Middle - r377_tailDeltaX), r377_QTail(r312_Middle + r377_tailDeltaX)), r377_QInner()));
            return void 0;
        }));
    });
    return void 0;
});


