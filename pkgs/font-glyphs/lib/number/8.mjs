"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Digits-Eight", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t10, _r313_t11, _r313_t12, _r313_tag13;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_MarkSet = _r313_t0.MarkSet;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_OperTop = _r313_t1.OperTop;
        var r313_OperBot = _r313_t1.OperBot;
        var r313_Italify = _r313_t1.Italify;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_ArchDepth = _r313_t1.ArchDepth;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_CThin = _r313_t1.CThin;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var r313_ArchDepthAOf = _r313_t1.ArchDepthAOf;
        var r313_ArchDepthBOf = _r313_t1.ArchDepthBOf;
        var r313_YSmoothMidR = _r313_t1.YSmoothMidR;
        var r313_YSmoothMidL = _r313_t1.YSmoothMidL;
        var r313_OperatorStroke = _r313_t1.OperatorStroke;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_corner = _r313_t2.corner;
        var r313_close = _r313_t2.close;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_alsoThru = _r313_t2.alsoThru;
        var r313_alsoThruThem = _r313_t2.alsoThruThem;
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
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_Arch = _r313_t5.Arch;
        var r313_ScaleAround = _r313_t5.ScaleAround;
        var r313_PointingTo = _r313_t5.PointingTo;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Digits-Shared"].resolve();
        var r313_CodeLnum = _r313_t7.CodeLnum;
        var r313_CodeOnum = _r313_t7.CodeOnum;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t8.BBS;
        var r313_BBD = _r313_t8.BBD;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-S"].resolve();
        var r313_AdviceSArchDepth = _r313_t9.AdviceSArchDepth;
        var r313_EightPr = r313_StrokeWidthBlend(0.85, 0.925);
        var r313_EightShape = function (r319_sw, r319_box, r319_p, r319_archDepthFactor, r319__gizmo) {
            var _r319_t0, _r319_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var _r321_t0, _r321_t1;
                var r321_archDepth = r319_box.height / r313_CAP * r313_ArchDepth * r313_EightPr * r319_archDepthFactor;
                var r321_archDepthRefWidth = r319_box.width + 2 * r313_OX + 2 * r313_SB;
                var r321_adaTop = r313_ArchDepthAOf(r321_archDepth * r319_p, r321_archDepthRefWidth);
                var r321_adbTop = r313_ArchDepthBOf(r321_archDepth * r319_p, r321_archDepthRefWidth);
                var r321_adaBot = r313_ArchDepthAOf(r321_archDepth, r321_archDepthRefWidth);
                var r321_adbBot = r313_ArchDepthBOf(r321_archDepth, r321_archDepthRefWidth);
                r321_currentGlyph.include(r313_dispiro(r313_Arch.rhs.centerAt.rtl.b(r319_box.xMid, r319_box.bot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r319_sw)), r313_archv(), r313_g4(r319_box.left, r319_box.bot + r321_adbBot, r313_widths.rhs(r319_sw)), r313_alsoThru.g2(0.5, 0.5, r313_widths.center(r319_sw)), r313_g4(r319_box.xp(r319_p), r319_box.top - r321_adbTop, r313_widths.lhs(r319_sw)), r313_arcvh(), r313_Arch.lhs.centerAt.rtl.t(r319_box.xMid, r319_box.top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r319_sw)), r313_archv(), r313_g4(r319_box.xp(1 - r319_p), r319_box.top - r321_adaTop, r313_widths.lhs(r319_sw)), r313_alsoThru.g2(0.5, 0.5, r313_widths.center(r319_sw)), r313_g4(r319_box.right, r319_box.bot + r321_adaBot, r313_widths.rhs(r319_sw)), r313_arcvh(), r313_close()));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("eight.lnum.crossing", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
            var _r327_t0, _r327_t1;
            r327_currentGlyph.include(r313_MarkSet.capital());
            var r327_box = new r1_Box(r313_CAP, 0, r313_SB + r313_OX, r313_RightSB - r313_OX);
            r327_currentGlyph.include(r313_EightShape(r313_AdviceStroke2(2, 3, r313_CAP), r327_box, 0.96, 1));
            return void 0;
        }));
        var r313_EightCirclesShape = function (r330_stroke, r330_top) {
            var _r330_t0, _r330_t1;
            var r330_pShrink = 1;
            var r330_pSizeDiffY = r313_StrokeWidthBlend(0.95, 0.94);
            var r330_pSizeDiffX = r313_StrokeWidthBlend(0.95, 0.96);
            var r330_yMid = r330_top / (1 + r330_pSizeDiffY);
            var r330_ada = r313_ArchDepthAOf(r313_ArchDepth * 0.9, r313_Width);
            var r330_adb = r313_ArchDepthBOf(r313_ArchDepth * 0.9, r313_Width);
            var r330_adaTop = r313_ArchDepthAOf(r313_ArchDepth * 0.9 * r330_pSizeDiffY, r313_Width);
            var r330_adbTop = r313_ArchDepthBOf(r313_ArchDepth * 0.9 * r330_pSizeDiffY, r313_Width);
            var r330_botLeft = r1_mix(r313_SB, r313_RightSB, 1 - r330_pShrink);
            var r330_botRight = r1_mix(r313_SB, r313_RightSB, r330_pShrink);
            var r330_topLeft = r1_mix(r313_SB, r313_RightSB, 1 - r330_pShrink * r330_pSizeDiffX);
            var r330_topRight = r1_mix(r313_SB, r313_RightSB, r330_pShrink * r330_pSizeDiffX);
            var r330_fine = r330_stroke * r313_CThin;
            var r330_coFine = r330_stroke / 2 - (r330_stroke - r330_fine);
            var r330_spT = r313_StrokeWidthBlend(2.08, 2.2);
            var r330_spB = r313_StrokeWidthBlend(2.18, 2.2);
            return r313_union(r313_dispiro(r313_widths.rhs(r330_stroke), r313_g4(r330_topRight - r313_OX, r313_YSmoothMidR(r330_top - r313_O, r330_yMid - r330_coFine, r330_adaTop, r330_adbTop)), r313_arcvh.superness(r330_spT), r313_Arch.rhs.centerAt.rtl.b(r313_Middle, r330_yMid - r330_coFine, new r313_xn$NamedParameterPair$2Lrc9b("sw", r330_fine), new r313_xn$NamedParameterPair$2Lrc9b("o", 0)), r313_archv.superness(r330_spT), r313_g4(r330_topLeft + r313_OX, r313_YSmoothMidL(r330_top - r313_O, r330_yMid - r330_coFine, r330_adaTop, r330_adbTop), r313_widths.rhs(r330_stroke)), r313_arcvh.superness(r330_spB), r313_Arch.rhs.centerAt.ltr.t(r313_Middle, r330_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r330_stroke)), r313_archv.superness(r330_spB), r313_close()), r313_dispiro(r313_widths.rhs(r330_stroke), r313_g4(r330_botLeft + r313_OX, r313_YSmoothMidL(r330_yMid + r330_coFine, r313_O, r330_ada, r330_adb)), r313_arcvh.superness(r330_spT), r313_Arch.rhs.centerAt.ltr.t(r313_Middle, r330_yMid + r330_coFine, new r313_xn$NamedParameterPair$2Lrc9b("sw", r330_fine), new r313_xn$NamedParameterPair$2Lrc9b("o", 0)), r313_archv.superness(r330_spT), r313_g4(r330_botRight - r313_OX, r313_YSmoothMidR(r330_yMid + r330_coFine, r313_O, r330_ada, r330_adb), r313_widths.rhs(r330_stroke)), r313_arcvh.superness(r330_spB), r313_Arch.rhs.centerAt.rtl.b(r313_Middle, 0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r330_stroke)), r313_archv.superness(r330_spB), r313_close()));
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("eight.lnum.twoCircles", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
            var _r339_t0, _r339_t1;
            r339_currentGlyph.include(r313_MarkSet.capital());
            r339_currentGlyph.include(r313_EightCirclesShape(r313_AdviceStroke2(2, 3, r313_CAP), r313_CAP));
            return void 0;
        }));
        var r313_EightCrossingAsymmetricShape = function (r342_top) {
            var _r342_t0, _r342_t1;
            var r342_stroke = r313_AdviceStroke2(2, 3, r313_CAP);
            var r342_fine = r313_AdviceStroke2(3, 4, r313_CAP);
            var r342_p = 0.96;
            var r342_l = r313_SB + r313_OX;
            var r342_r = r313_RightSB - r313_OX;
            var r342_ad = r313_ArchDepth * r1_mix(1, r313_EightPr, 0.5);
            var r342_gap = (r342_r - r342_l) * 0.25;
            var r342_Spine = function (r343_kty) {
                var _r343_t0, _r343_t1;
                return [r343_kty(r313_Arch["adjust-x"].top(r313_Middle), r342_top - r313_O, r313_widths.lhs(r342_stroke)), r313_archv(), r313_g4(r1_mix(r342_r, r342_l, r342_p), r342_top - r313_ArchDepthAOf(r342_ad * r342_p, r313_Width)), r313_alsoThruThem([[0.34, 0.45, 2 / 3], [0.66, 0.55, 1 / 3]], {
                    "blend": function (r344_rt) {
                        var _r344_t0, _r344_t1;
                        return r313_widths(r342_stroke * r344_rt, r342_stroke * (1 - r344_rt));
                    }
                }), r313_g4(r342_r, r313_ArchDepthAOf(r342_ad, r313_Width), r313_widths.rhs(r342_stroke)), r313_arcvh(), r343_kty(r313_Arch["adjust-x"].bot(r313_Middle), r313_O)];
            };
            var r342_CoSpineMask = function (r345_xFar) {
                var _r345_t0, _r345_t1;
                return r313_xn$spirooutline$1aao(r313_corner(r345_xFar, 2 * r313_CAP), r313_corner(r313_Arch["adjust-x"].top(r313_Middle), 2 * r313_CAP), r342_Spine(r313_corner), r313_corner(r313_Arch["adjust-x"].bot(r313_Middle), -r313_CAP), r313_corner(r345_xFar, -r313_CAP));
            };
            return r313_union(r313_difference(r313_dispiro(r313_g4.right.mid(r313_Arch["adjust-x"].top(r313_Middle), r342_top - r313_O, r313_widths.rhs(r342_stroke)), r313_g4.down.mid(r1_mix(r342_l, r342_r, r342_p), r342_top - r313_ArchDepthBOf(r342_ad * r342_p, r313_Width)), r313_straight.left.end(0, r342_top * 0.4 - r342_stroke * 0.5, r313_widths.rhs(r342_fine))), r342_CoSpineMask(-r313_Width * 4), r313_MaskBelow(r342_ad)), r313_difference(r313_dispiro(r313_straight.left.start(r313_Width, r342_top * 0.6 + r342_stroke * 0.5, r313_widths.lhs(r342_fine)), r313_g4.down.mid(r342_l, r313_ArchDepthBOf(r342_ad, r313_Width), r313_widths.lhs(r342_stroke)), r313_g4.right.mid(r313_Arch["adjust-x"].bot(r313_Middle), r313_O)), r342_CoSpineMask(r313_Width * 4), r313_MaskAbove(r342_top - r342_ad * r342_p)), r313_dispiro(r342_Spine(r313_g4.left.mid)));
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("eight.lnum.crossingAsymmetric", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
            var _r348_t0, _r348_t1;
            r348_currentGlyph.include(r313_MarkSet.capital());
            r348_currentGlyph.include(r313_EightCrossingAsymmetricShape(r313_CAP));
            return void 0;
        }));
        r313_xn$selectvariant$7Hrq("eight.lnum", r313_CodeLnum("8"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "eight"));
        r313_alias("eight.onum", r313_CodeOnum("8"), "eight.lnum");
        var r313_PropToShape = function (r352_sw, r352_box, r352_p, r352_archDepthFactor, r352__gizmo) {
            var _r352_t0, _r352_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                var _r354_t0, _r354_t1;
                var r354_py = 0.42;
                var r354_archDepth = r352_box.height / r313_CAP * r313_ArchDepth * r313_EightPr * r352_archDepthFactor;
                var r354_archDepthRefWidth = r352_box.width + 2 * r313_OX + 2 * r313_SB;
                var r354_adaTop = r313_ArchDepthAOf(r354_archDepth * r352_p, r354_archDepthRefWidth);
                var r354_adbTop = r313_ArchDepthBOf(r354_archDepth * r352_p, r354_archDepthRefWidth);
                r354_currentGlyph.include(r313_dispiro(r313_straight.up.start(r352_box.left, r352_box.bot, r313_widths.rhs.heading(r352_sw, r313_Upward)), r313_alsoThru.g2(0.5, 1 - r354_py, r313_widths.center(r352_sw)), r313_g4(r352_box.xp(r352_p), r352_box.top - r354_adbTop, r313_widths.lhs(r352_sw)), r313_arcvh(), r313_Arch.lhs.centerAt.rtl.t(r352_box.xMid, r352_box.top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r352_sw)), r313_archv(), r313_g4(r352_box.xp(1 - r352_p), r352_box.top - r354_adaTop, r313_widths.lhs(r352_sw)), r313_alsoThru.g2(0.5, r354_py, r313_widths.center(r352_sw)), r313_straight.down.end(r352_box.right, r352_box.bot, r313_widths.rhs.heading(r352_sw, r313_Downward))));
                return void 0;
            });
        };
        var r313_InvLazySShape = function (r357_sw, r357_box, r357_p, r357_archDepthFactor, r357__gizmo) {
            var _r357_t0, _r357_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                var _r359_t0, _r359_t1;
                var r359_archDepth = r313_AdviceSArchDepth(r357_box.height, +1, r357_sw);
                var r359_archDepthRefWidth = r357_box.width + 2 * r313_OX + 2 * r313_SB;
                var r359_adaTop = r313_ArchDepthAOf(r359_archDepth * r357_p, r359_archDepthRefWidth);
                var r359_adbTop = r313_ArchDepthBOf(r359_archDepth * r357_p, r359_archDepthRefWidth);
                var r359_adaBot = r313_ArchDepthAOf(r359_archDepth, r359_archDepthRefWidth);
                var r359_adbBot = r313_ArchDepthBOf(r359_archDepth, r359_archDepthRefWidth);
                r359_currentGlyph.include(r313_dispiro(r313_g4.down.start(r357_box.right, r357_box.bot + r359_adaBot, r313_widths.rhs.heading(r357_sw, r313_Downward)), r313_arcvh(), r313_Arch.rhs.centerAt.rtl.b(r357_box.xMid, r357_box.bot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r357_sw)), r313_archv(), r313_g4(r357_box.left, r357_box.bot + r359_adbBot, r313_widths.rhs(r357_sw)), r313_alsoThru.g2(0.5, 0.5, r313_widths.center(r357_sw)), r313_g4(r357_box.xp(r357_p), r357_box.top - r359_adbTop, r313_widths.lhs(r357_sw)), r313_arcvh(), r313_Arch.lhs.centerAt.rtl.t(r357_box.xMid, r357_box.top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r357_sw)), r313_archv(), r313_g4.down.end(r357_box.xp(1 - r357_p), r357_box.top - r359_adaTop, r313_widths.lhs.heading(r357_sw, r313_Downward))));
                return void 0;
            });
        };
        (function () {
            var r365_FMosaicWide, r365_MosaicNameSuffix, r365_MosaicWidth, r365_MosaicWidthScalar, _r365_t3, _r365_t5, _r365_t6, _r365_tag7;
            var r365_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r365_t0 = r365_WidthKinds;
            var _r365_t1 = _r365_t0.length;
            var _r365_t2 = 0;
            var _r365_t4 = _r365_t2 < _r365_t1;
            while (_r365_t4) {
                _r365_t3 = _r365_t0[_r365_t2];
                r365_FMosaicWide = _r365_t3[0];
                r365_MosaicNameSuffix = _r365_t3[1];
                r365_MosaicWidth = _r365_t3[2];
                r365_MosaicWidthScalar = _r365_t3[3];
                (function () {
                    var _r368_t0, _r368_tag1;
                    var r368_MosaicDesiredWidth = r313_WideWidth1;
                    var r368_MosaicMiddle = r365_MosaicWidth / 2;
                    var r368_MosaicUnitWidth = r365_MosaicWidth / r365_MosaicWidthScalar;
                    var r368_MangleUnicode = function (r369_unicode, r369__desiredOverride) {
                        var _r369_t0, _r369_t1;
                        return r365_MosaicWidth === (r369__desiredOverride || r368_MosaicDesiredWidth) ? r369_unicode : void 0;
                    };
                    var r368_MangleName = function (r370_name) {
                        var _r370_t0, _r370_t1;
                        return r370_name + r365_MosaicNameSuffix;
                    };
                    return (function () {
                        var r372_xSF = 1 / Math.pow(2 / r365_MosaicWidthScalar, 0.6);
                        var r372_xSS = 1 / Math.pow(2 / r365_MosaicWidthScalar, 0.3);
                        var r372_xl = r1_mix(r365_MosaicWidth / 2, r365_MosaicWidthScalar * r313_SB, 1 / r372_xSF);
                        var r372_xr = r1_mix(r365_MosaicWidth / 2, r365_MosaicWidth - r365_MosaicWidthScalar * r313_SB, 1 / r372_xSF);
                        var r372_yt = r1_mix(r313_SymbolMid, r313_OperTop, 0.75);
                        var r372_yb = r1_mix(r313_SymbolMid, r313_OperBot, 0.75);
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r368_MangleName("infty"), r368_MangleUnicode(8734), new r313_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                            var _r375_t0, _r375_t1;
                            r375_currentGlyph.setWidth(r365_MosaicWidth);
                            r375_currentGlyph.include(r313_PointingTo(r372_xr, r372_yt, r372_xr, r372_yb, function () {
                                var _r378_t0, _r378_t1;
                                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                                    var _r380_t0, _r380_t1;
                                    r380_currentGlyph.gizmo = r313_Italify(r313_para.slopeAngle);
                                    var r380_box = new r1_Box(r372_xr - r372_xl, 0, 0, r372_yt - r372_yb);
                                    r380_currentGlyph.include(r313_EightShape(r313_OperatorStroke / r372_xSS, r380_box, 1, 0.9));
                                    r380_currentGlyph.include(r313_Italify(-r313_para.slopeAngle));
                                    return void 0;
                                });
                            }));
                            r375_currentGlyph.include(r313_ScaleAround(r368_MosaicUnitWidth / 2, r313_SymbolMid, r372_xSF, r372_xSF));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r368_MangleName("propto"), r368_MangleUnicode(8733), new r313_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                            var _r386_t0, _r386_t1;
                            r386_currentGlyph.setWidth(r365_MosaicWidth);
                            r386_currentGlyph.include(r313_PointingTo(r372_xr, r372_yt, r372_xr, r372_yb, function () {
                                var _r389_t0, _r389_t1;
                                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
                                    var _r391_t0, _r391_t1;
                                    r391_currentGlyph.gizmo = r313_Italify(r313_para.slopeAngle);
                                    var r391_box = new r1_Box(r372_xr - r372_xl, 0, 0, r372_yt - r372_yb);
                                    r391_currentGlyph.include(r313_PropToShape(r313_OperatorStroke / r372_xSS, r391_box, 1, 0.9));
                                    r391_currentGlyph.include(r313_Italify(-r313_para.slopeAngle));
                                    return void 0;
                                });
                            }));
                            r386_currentGlyph.include(r313_ScaleAround(r368_MosaicUnitWidth / 2, r313_SymbolMid, r372_xSF, r372_xSF));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r368_MangleName("invLazyS"), r368_MangleUnicode(8766), new r313_xn$Capture$2Lrc8.GlyphProc(function (r397_currentGlyph) {
                            var _r397_t0, _r397_t1;
                            r397_currentGlyph.setWidth(r365_MosaicWidth);
                            r397_currentGlyph.include(r313_PointingTo(r372_xr, r372_yt, r372_xr, r372_yb, function () {
                                var _r400_t0, _r400_t1;
                                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r402_currentGlyph) {
                                    var _r402_t0, _r402_t1;
                                    r402_currentGlyph.gizmo = r313_Italify(r313_para.slopeAngle);
                                    var r402_box = new r1_Box(r372_xr - r372_xl, 0, 0, r372_yt - r372_yb);
                                    r402_currentGlyph.include(r313_InvLazySShape(r313_OperatorStroke / r372_xSS, r402_box, 1, 0.9));
                                    r402_currentGlyph.include(r313_Italify(-r313_para.slopeAngle));
                                    return void 0;
                                });
                            }));
                            r397_currentGlyph.include(r313_ScaleAround(r368_MosaicUnitWidth / 2, r313_SymbolMid, r372_xSF, r372_xSF));
                            return void 0;
                        }));
                    })();
                })();
                _r365_t5 = _r365_t2 = _r365_t2 + 1;
                _r365_t4 = _r365_t2 < _r365_t1;
            }
            return _r365_t5;
        })();
        var r313_BBEightSd = function () {
            var _r406_t5;
            var _r406_t6 = arguments;
            var r406_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r406_t6, 0);
            var _r406_t0 = [];
            var _r406_t1 = 0;
            while (_r406_t1 < r406_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r406_xn$flexarguments$2Lrc7uIe5[_r406_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r406_t0.push(r406_xn$flexarguments$2Lrc7uIe5[_r406_t1]);
                _r406_t1 = _r406_t1 + 1;
            }
            var _r406_t2 = r406_xn$flexarguments$2Lrc7uIe5;
            var _r406_t3 = _r406_t2.length;
            var _r406_t4 = 0;
            while (_r406_t4 < _r406_t3) {
                _r406_t1 = _r406_t2[_r406_t4];
                if (_r406_t1 && _r406_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r406_t1.left === "top") r406_top = _r406_t1.right;
                if (_r406_t1 && _r406_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r406_t1.left === "swStart") r406_swStart = _r406_t1.right;
                if (_r406_t1 && _r406_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r406_t1.left === "swEnd") r406_swEnd = _r406_t1.right;
                if (_r406_t1 && _r406_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r406_t1.left === "kTop") r406_kTop = _r406_t1.right;
                if (_r406_t1 && _r406_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r406_t1.left === "sign") r406_sign = _r406_t1.right;
                if (_r406_t1 && _r406_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r406_t1.left === "OffsetLT") r406_OffsetLT = _r406_t1.right;
                if (_r406_t1 && _r406_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r406_t1.left === "OffsetRB") r406_OffsetRB = _r406_t1.right;
                if (_r406_t1 && _r406_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r406_t1.left === "OffsetC") r406_OffsetC = _r406_t1.right;
                _r406_t4 = _r406_t4 + 1;
            }
            var r406_top = r1_fallback(r406_top, _r406_t0[0]);
            var r406_swStart = r1_fallback(r406_swStart, _r406_t0[1]);
            var r406_swEnd = r1_fallback(r406_swEnd, _r406_t0[2]);
            var r406_kTop = r1_fallback(r406_kTop, _r406_t0[3]);
            var r406_sign = r1_fallback(r406_sign, _r406_t0[4]);
            var r406_OffsetLT = r1_fallback(r406_OffsetLT, _r406_t0[5]);
            var r406_OffsetRB = r1_fallback(r406_OffsetRB, _r406_t0[6]);
            var r406_OffsetC = r1_fallback(r406_OffsetC, _r406_t0[7]);
            var r406_stroke = Math.max(r406_swStart, r406_swEnd);
            var r406_fine = Math.min(r406_swStart, r406_swEnd);
            var r406_soStart = r406_stroke - r406_swStart;
            var r406_soEnd = r406_stroke - r406_swEnd;
            var r406_bbOvershoot = r313_BBD / 8;
            var r406_xLeftTop = r1_mix(r313_SB, r313_RightSB, 1 - r406_kTop) - r406_bbOvershoot;
            var r406_xRightTop = r1_mix(r313_SB, r313_RightSB, r406_kTop);
            var r406_xLeftBot = r313_SB + r313_OX;
            var r406_xRightBot = r313_RightSB - r313_OX + r406_bbOvershoot;
            var r406_ada = r313_ArchDepthAOf(r313_ArchDepth * r313_EightPr, r313_Width);
            var r406_adb = r313_ArchDepthBOf(r313_ArchDepth * r313_EightPr, r313_Width);
            var r406_NcCenterX = r1_mix(r406_xLeftTop, r406_xRightBot, 0.5);
            var r406_NcCenterY = r1_mix(r406_top - r406_ada, r406_ada, 0.5);
            var r406_Center = function (r411_s) {
                var _r411_t0, _r411_t1;
                return {
                    "x": r1_mix(r406_xLeftTop + r406_OffsetLT(r411_s).x, r406_xRightBot - r406_OffsetRB(r411_s).x, 0.5),
                    "y": r1_mix(r406_top - r406_ada, r406_ada, 0.5)
                };
            };
            return r313_dispiro(r313_g2(r406_Center(1).x + r406_OffsetC(1).x, r406_Center(1).y + r406_OffsetC(1).y, r313_widths.center(r406_stroke)), r313_g4(r406_xRightTop - r313_HSwToV(r406_soStart), r406_top - r406_adb, r313_widths.lhs(r406_fine)), r313_Arch.lhs(r406_top - r406_soStart, new r313_xn$NamedParameterPair$2Lrc9b("sw", r406_stroke)), r313_g4(r406_xLeftTop + r406_OffsetLT(r406_sign).x, r406_top - r406_ada + r406_OffsetLT(r406_sign).y), r313_g2(r406_Center(r406_sign).x + r406_OffsetC(r406_sign).x, r406_Center(r406_sign).y + r406_OffsetC(r406_sign).y, r313_widths.center(r406_stroke)), r313_g4(r406_xRightBot - r406_OffsetRB(r406_sign).x, r406_ada + r406_OffsetRB(r406_sign).y, r313_widths.rhs(r406_fine)), r313_Arch.rhs(r406_soEnd, new r313_xn$NamedParameterPair$2Lrc9b("sw", r406_stroke)), r313_g4(r406_xLeftBot + r313_HSwToV(r406_soEnd), r406_adb, r313_widths.rhs(r406_fine)), r313_g2(r406_Center(-1).x + r406_OffsetC(-1).x, r406_Center(-1).y + r406_OffsetC(-1).y, r313_widths.center(r406_stroke)));
        };
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/eight", 120800, new r313_xn$Capture$2Lrc8.GlyphProc(function (r416_currentGlyph) {
            var r416_sign, _r416_t3, _r416_t4;
            r416_currentGlyph.include(r313_MarkSet.capital());
            var r416_theta = Math.PI / 4;
            var _r416_t0 = [1, -1];
            var _r416_t1 = _r416_t0.length;
            var _r416_t2 = 0;
            while (_r416_t2 < _r416_t1) {
                r416_sign = _r416_t0[_r416_t2];
                r416_currentGlyph.include(r313_BBEightSd(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_CAP), new r313_xn$NamedParameterPair$2Lrc9b("swStart", r313_BBS * (r416_sign > 0 ? r313_CThin : 1)), new r313_xn$NamedParameterPair$2Lrc9b("swEnd", r313_BBS * (r416_sign < 0 ? r313_CThin : 1)), new r313_xn$NamedParameterPair$2Lrc9b("kTop", 0.96), new r313_xn$NamedParameterPair$2Lrc9b("ess", r313_BBD), new r313_xn$NamedParameterPair$2Lrc9b("sign", r416_sign), new r313_xn$NamedParameterPair$2Lrc9b("OffsetC", function (r427_s) {
                    var _r427_t0, _r427_t1;
                    return {
                        "x": 0.5 * r427_s * r313_BBD * Math.sin(r416_theta),
                        "y": 0.5 * r427_s * r313_BBD * Math.cos(r416_theta)
                    };
                }), new r313_xn$NamedParameterPair$2Lrc9b("OffsetLT", function (r429_s) {
                    var _r429_t0, _r429_t1;
                    return {
                        "x": r429_s > 0 ? r313_BBD / 2 : 0,
                        "y": (r429_s > 0 ? 0.25 : 0.375) * r429_s * r313_BBD * Math.cos(r416_theta)
                    };
                }), new r313_xn$NamedParameterPair$2Lrc9b("OffsetRB", function (r431_s) {
                    var _r431_t0, _r431_t1;
                    return {
                        "x": r431_s < 0 ? r313_BBD / 2 : 0,
                        "y": (r431_s < 0 ? 0.25 : 0.375) * r431_s * r313_BBD * Math.cos(r416_theta)
                    };
                })));
                _r416_t2 = _r416_t2 + 1;
            }
            return void 0;
        }));
    });
    return void 0;
});


