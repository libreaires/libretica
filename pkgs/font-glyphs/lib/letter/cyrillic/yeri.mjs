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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Yeri", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_Uc, r312_Lc, r312_BGRc, _r312_t11, _r312_t12, _r312_t13, _r312_t14, _r312_tag15, _r312_t16, _r312_tag17;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_TanSlope = _r312_t1.TanSlope;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_ArchDepth = _r312_t1.ArchDepth;
        var r312_AdviceStroke2 = _r312_t1.AdviceStroke2;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_Jut = _r312_t1.Jut;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_DToothlessRise = _r312_t1.DToothlessRise;
        var r312_ShoulderFine = _r312_t1.ShoulderFine;
        var r312_ArchDepthAOf = _r312_t1.ArchDepthAOf;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
        var r312_YSmoothMidR = _r312_t1.YSmoothMidR;
        var r312_YSmoothMidL = _r312_t1.YSmoothMidL;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_end = _r312_t2.end;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_xn$noshape$3cah = _r312_t5["no-shape"];
        var r312_tagged = _r312_t5.tagged;
        var r312_HSerif = _r312_t5.HSerif;
        var r312_VBar = _r312_t5.VBar;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r312_BowlXDepth = _r312_t7.BowlXDepth;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_LetterBarOverlay = _r312_t8.LetterBarOverlay;
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r318_t0, _r318_t1;
            return {
                "YeriBarPos": r312_YeriBarPos
            };
        });
        var r312_YeriBarPos = 0.55;
        var r312_YeriShapeGroup = function (r319_fCapital, r319_fBGR) {
            var _r319_t0, _r319_t1, _r319_t2, _r319_tag3;
            return (function () {
                var r322_Shape, r322_RoundShape, r322_CursiveShape;
                var r322_exports = {};
                var r322_useFullSerifs = r319_fCapital || !(r312_para.isItalic || r319_fBGR);
                r322_exports.Shape = r322_Shape = function () {
                    var _r331_t5;
                    var _r331_t6 = arguments;
                    var r331_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r331_t6, 0);
                    var _r331_t0 = [];
                    var _r331_t1 = 0;
                    while (_r331_t1 < r331_xn$flexarguments$2Lrc7uIe5.length) {
                        if (!(r331_xn$flexarguments$2Lrc7uIe5[_r331_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r331_t0.push(r331_xn$flexarguments$2Lrc7uIe5[_r331_t1]);
                        _r331_t1 = _r331_t1 + 1;
                    }
                    var _r331_t2 = r331_xn$flexarguments$2Lrc7uIe5;
                    var _r331_t3 = _r331_t2.length;
                    var _r331_t4 = 0;
                    while (_r331_t4 < _r331_t3) {
                        _r331_t1 = _r331_t2[_r331_t4];
                        if (_r331_t1 && _r331_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "top") r331_top = _r331_t1.right;
                        if (_r331_t1 && _r331_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "left") r331_left = _r331_t1.right;
                        if (_r331_t1 && _r331_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "right") r331_right = _r331_t1.right;
                        if (_r331_t1 && _r331_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "stroke") r331_stroke = _r331_t1.right;
                        if (_r331_t1 && _r331_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "fine") r331_fine = _r331_t1.right;
                        if (_r331_t1 && _r331_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "swVBar") r331_swVBar = _r331_t1.right;
                        if (_r331_t1 && _r331_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "jut") r331_jut = _r331_t1.right;
                        if (_r331_t1 && _r331_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "pBar") r331_pBar = _r331_t1.right;
                        if (_r331_t1 && _r331_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "yStart") r331_yStart = _r331_t1.right;
                        if (_r331_t1 && _r331_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "fSlab") r331_fSlab = _r331_t1.right;
                        _r331_t4 = _r331_t4 + 1;
                    }
                    var r331_top = r1_fallback(r331_top, _r331_t0[0]);
                    var r331_left = r1_fallback(r331_left, _r331_t0[1], r312_SB);
                    var r331_right = r1_fallback(r331_right, _r331_t0[2], r312_RightSB);
                    var r331_stroke = r1_fallback(r331_stroke, _r331_t0[3], r312_Stroke);
                    var r331_fine = r1_fallback(r331_fine, _r331_t0[4], r312_ShoulderFine * (r331_stroke / r312_Stroke));
                    var r331_swVBar = r1_fallback(r331_swVBar, _r331_t0[5], r331_stroke);
                    var r331_jut = r1_fallback(r331_jut, _r331_t0[6], r312_Jut - r312_HSwToV(0.5 * (r312_Stroke - r331_swVBar)));
                    var r331_pBar = r1_fallback(r331_pBar, _r331_t0[7], r312_YeriBarPos);
                    var r331_yStart = r1_fallback(r331_yStart, _r331_t0[8], r331_top);
                    var r331_fSlab = r1_fallback(r331_fSlab, _r331_t0[9], r312_SLAB);
                    return new r312_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                        var _r336_t0, _r336_t1;
                        var r336_bowlTop = r1_mix(0, r331_top, r331_pBar) + r331_stroke / 2;
                        var r336_mockLeft = r331_left - r312_HSwToV(r331_stroke - r331_swVBar);
                        var r336_turnRadius = r312_BowlXDepth(r336_bowlTop, 0, r336_mockLeft, r331_right, r331_stroke);
                        var r336_xTurnRightT = r1_clamp(Math.max(r331_left - r312_O + r312_TINY + Math.abs(r312_TanSlope * r331_stroke), r331_left + r312_HSwToV(r331_swVBar)), r331_right - r312_HSwToV(1.125 * r331_stroke), r312_Arch["adjust-x"].top(r331_right - r336_turnRadius, new r312_xn$NamedParameterPair$2Lrc9b("sw", r331_stroke)));
                        var r336_xTurnRightB = r1_clamp(Math.max(r331_left - r312_O + r312_TINY + Math.abs(r312_TanSlope * r331_stroke), r331_left + r312_HSwToV(r331_swVBar)), r331_right - r312_HSwToV(1.125 * r331_stroke), r312_Arch["adjust-x"].bot(r331_right - r336_turnRadius, new r312_xn$NamedParameterPair$2Lrc9b("sw", r331_stroke)));
                        var r336_mockWidth = r331_right - r336_mockLeft + r312_SB * 2;
                        var r336_archDepth = Math.max(r312_ArchDepth * (r336_mockWidth / r312_Width), r331_stroke * 1.125);
                        var r336_ada = r312_ArchDepthAOf(r336_archDepth, r336_mockWidth);
                        var r336_adb = r312_ArchDepthBOf(r336_archDepth, r336_mockWidth);
                        var r336_yTurnBottomL = r312_YSmoothMidL(r336_bowlTop, 0, r336_ada, r336_adb);
                        var r336_yTurnBottomR = r312_YSmoothMidR(r336_bowlTop, 0, r336_ada, r336_adb);
                        r336_currentGlyph.include(r312_union(r312_VBar.l(r331_left, 0 + (r319_fBGR ? r312_DToothlessRise : 0), r331_yStart, r331_swVBar), r312_dispiro(r312_widths.lhs(r331_stroke), r319_fBGR ? [r312_g4(r331_left, 0 + r312_DToothlessRise), r312_Arch.lhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r331_stroke), new r312_xn$NamedParameterPair$2Lrc9b("blendPre", []))] : [r312_flat(r331_left - r312_O, 0, r312_heading(r312_Rightward)), r312_curl(r336_xTurnRightB, 0, r336_xTurnRightB - Math.abs(r312_TanSlope * r331_stroke) <= r331_left + r312_HSwToV(r331_swVBar) ? r312_heading(r312_Rightward) : void 0), r312_archv(8)], r312_g4(r331_right - r312_OX, r336_yTurnBottomR), r312_arcvh(8), r312_flat(r336_xTurnRightT, r336_bowlTop, r336_xTurnRightT - Math.abs(r312_TanSlope * r331_stroke) <= r331_left + r312_HSwToV(r331_swVBar) ? r312_heading(r312_Leftward) : void 0), r312_curl(r331_left - r312_O, r336_bowlTop, r312_heading(r312_Leftward)))));
                        if (r331_fSlab) r336_currentGlyph.include(new r312_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                            var _r344_t0, _r344_t1;
                            r344_currentGlyph.include(r312_tagged("serifYeriLB", r322_useFullSerifs ? r312_HSerif.lb(r331_left, 0, r331_jut - r312_HSwToV(0.5 * r331_swVBar), r331_stroke, r331_swVBar) : r312_xn$noshape$3cah()), true, true);
                            r344_currentGlyph.include(r312_tagged("serifYeriLT", r322_useFullSerifs ? r312_HSerif.mt(r331_left + r312_HSwToV(0.5 * r331_swVBar), r331_top, r331_jut, r331_stroke) : r312_HSerif.lt(r331_left, r331_top, r331_jut - r312_HSwToV(0.5 * r331_swVBar), r331_stroke, r331_swVBar)));
                            return void 0;
                        }));
                        return void 0;
                    });
                };
                r322_Shape.useFullSerifs = r322_useFullSerifs;
                r322_exports.RoundShape = r322_RoundShape = function () {
                    var _r349_t5;
                    var _r349_t6 = arguments;
                    var r349_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r349_t6, 0);
                    var _r349_t0 = [];
                    var _r349_t1 = 0;
                    while (_r349_t1 < r349_xn$flexarguments$2Lrc7uIe5.length) {
                        if (!(r349_xn$flexarguments$2Lrc7uIe5[_r349_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r349_t0.push(r349_xn$flexarguments$2Lrc7uIe5[_r349_t1]);
                        _r349_t1 = _r349_t1 + 1;
                    }
                    var _r349_t2 = r349_xn$flexarguments$2Lrc7uIe5;
                    var _r349_t3 = _r349_t2.length;
                    var _r349_t4 = 0;
                    while (_r349_t4 < _r349_t3) {
                        _r349_t1 = _r349_t2[_r349_t4];
                        if (_r349_t1 && _r349_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r349_t1.left === "top") r349_top = _r349_t1.right;
                        if (_r349_t1 && _r349_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r349_t1.left === "left") r349_left = _r349_t1.right;
                        if (_r349_t1 && _r349_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r349_t1.left === "right") r349_right = _r349_t1.right;
                        if (_r349_t1 && _r349_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r349_t1.left === "stroke") r349_stroke = _r349_t1.right;
                        if (_r349_t1 && _r349_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r349_t1.left === "fine") r349_fine = _r349_t1.right;
                        if (_r349_t1 && _r349_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r349_t1.left === "swVBar") r349_swVBar = _r349_t1.right;
                        if (_r349_t1 && _r349_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r349_t1.left === "jut") r349_jut = _r349_t1.right;
                        if (_r349_t1 && _r349_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r349_t1.left === "pBar") r349_pBar = _r349_t1.right;
                        if (_r349_t1 && _r349_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r349_t1.left === "yStart") r349_yStart = _r349_t1.right;
                        if (_r349_t1 && _r349_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r349_t1.left === "fSlab") r349_fSlab = _r349_t1.right;
                        _r349_t4 = _r349_t4 + 1;
                    }
                    var r349_top = r1_fallback(r349_top, _r349_t0[0]);
                    var r349_left = r1_fallback(r349_left, _r349_t0[1], r312_SB);
                    var r349_right = r1_fallback(r349_right, _r349_t0[2], r312_RightSB);
                    var r349_stroke = r1_fallback(r349_stroke, _r349_t0[3], r312_Stroke);
                    var r349_fine = r1_fallback(r349_fine, _r349_t0[4], r312_ShoulderFine * (r349_stroke / r312_Stroke));
                    var r349_swVBar = r1_fallback(r349_swVBar, _r349_t0[5], r349_stroke);
                    var r349_jut = r1_fallback(r349_jut, _r349_t0[6], r312_Jut - r312_HSwToV(0.5 * (r312_Stroke - r349_swVBar)));
                    var r349_pBar = r1_fallback(r349_pBar, _r349_t0[7], r312_YeriBarPos);
                    var r349_yStart = r1_fallback(r349_yStart, _r349_t0[8], r349_top);
                    var r349_fSlab = r1_fallback(r349_fSlab, _r349_t0[9], r312_SLAB);
                    return new r312_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                        var _r354_t0, _r354_t1;
                        var r354_bowlTop = r1_mix(0, r349_top, r349_pBar) + r349_stroke / 2;
                        var r354_mockLeft = r349_left - r312_HSwToV(r349_stroke - r349_swVBar);
                        var r354_turnRadius = r312_BowlXDepth(r354_bowlTop, 0, r354_mockLeft, r349_right, r349_stroke);
                        var r354_xTurnRightT = r1_clamp(Math.max(r349_left - r312_O + r312_TINY + Math.abs(r312_TanSlope * r349_stroke), r349_left + r312_HSwToV(r349_swVBar)), r349_right - r312_HSwToV(1.125 * r349_stroke), r312_Arch["adjust-x"].top(r349_right - r354_turnRadius, new r312_xn$NamedParameterPair$2Lrc9b("sw", r349_stroke)));
                        var r354_xTurnRightB = r1_clamp(Math.max(r349_left - r312_O + r312_TINY + Math.abs(r312_TanSlope * r349_stroke), r349_left + r312_HSwToV(r349_swVBar)), r349_right - r312_HSwToV(1.125 * r349_stroke), r312_Arch["adjust-x"].bot(r349_right - r354_turnRadius, new r312_xn$NamedParameterPair$2Lrc9b("sw", r349_stroke)));
                        var r354_mockWidth = r349_right - r354_mockLeft + r312_SB * 2;
                        var r354_archDepth = Math.max(r312_ArchDepth * (r354_mockWidth / r312_Width), r349_stroke * 1.125);
                        var r354_ada = r312_ArchDepthAOf(r354_archDepth, r354_mockWidth);
                        var r354_adb = r312_ArchDepthBOf(r354_archDepth, r354_mockWidth);
                        var r354_yTurnBottomL = r312_YSmoothMidL(r354_bowlTop, 0, r354_ada, r354_adb);
                        var r354_yTurnBottomR = r312_YSmoothMidR(r354_bowlTop, 0, r354_ada, r354_adb);
                        r354_currentGlyph.include(r312_dispiro(r312_widths.lhs(r349_swVBar), r312_flat(r349_left, r349_yStart, r312_heading(r312_Downward)), r312_curl(r349_left, Math.min(r349_yStart - r312_TINY - r312_HSwToV(Math.abs(r312_TanSlope * r349_swVBar)), 0 + r354_adb, r354_yTurnBottomL)), r312_Arch.lhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r349_stroke), new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r349_swVBar)), r312_g4(r349_right - r312_OX, r354_yTurnBottomR), r312_arcvh(8), r312_flat(r354_xTurnRightT, r354_bowlTop, r354_xTurnRightT - Math.abs(r312_TanSlope * r349_stroke) <= r349_left + r312_HSwToV(r349_swVBar) ? r312_heading(r312_Leftward) : void 0), r312_curl(r349_left - r312_O, r354_bowlTop, r312_heading(r312_Leftward))));
                        if (r349_fSlab) r354_currentGlyph.include(r312_tagged("serifYeriLT", r322_useFullSerifs ? r312_HSerif.mt(r349_left + r312_HSwToV(0.5 * r349_swVBar), r349_top, r349_jut, r349_stroke) : r312_HSerif.lt(r349_left, r349_top, r349_jut - r312_HSwToV(0.5 * r349_swVBar), r349_stroke, r349_swVBar)));
                        return void 0;
                    });
                };
                r322_RoundShape.useFullSerifs = r322_useFullSerifs;
                r322_exports.CursiveShape = r322_CursiveShape = function () {
                    var _r363_t5;
                    var _r363_t6 = arguments;
                    var r363_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r363_t6, 0);
                    var _r363_t0 = [];
                    var _r363_t1 = 0;
                    while (_r363_t1 < r363_xn$flexarguments$2Lrc7uIe5.length) {
                        if (!(r363_xn$flexarguments$2Lrc7uIe5[_r363_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r363_t0.push(r363_xn$flexarguments$2Lrc7uIe5[_r363_t1]);
                        _r363_t1 = _r363_t1 + 1;
                    }
                    var _r363_t2 = r363_xn$flexarguments$2Lrc7uIe5;
                    var _r363_t3 = _r363_t2.length;
                    var _r363_t4 = 0;
                    while (_r363_t4 < _r363_t3) {
                        _r363_t1 = _r363_t2[_r363_t4];
                        if (_r363_t1 && _r363_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r363_t1.left === "top") r363_top = _r363_t1.right;
                        if (_r363_t1 && _r363_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r363_t1.left === "left") r363_left = _r363_t1.right;
                        if (_r363_t1 && _r363_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r363_t1.left === "right") r363_right = _r363_t1.right;
                        if (_r363_t1 && _r363_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r363_t1.left === "stroke") r363_stroke = _r363_t1.right;
                        if (_r363_t1 && _r363_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r363_t1.left === "fine") r363_fine = _r363_t1.right;
                        if (_r363_t1 && _r363_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r363_t1.left === "swVBar") r363_swVBar = _r363_t1.right;
                        if (_r363_t1 && _r363_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r363_t1.left === "jut") r363_jut = _r363_t1.right;
                        if (_r363_t1 && _r363_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r363_t1.left === "pBar") r363_pBar = _r363_t1.right;
                        if (_r363_t1 && _r363_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r363_t1.left === "yStart") r363_yStart = _r363_t1.right;
                        if (_r363_t1 && _r363_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r363_t1.left === "fSlab") r363_fSlab = _r363_t1.right;
                        _r363_t4 = _r363_t4 + 1;
                    }
                    var r363_top = r1_fallback(r363_top, _r363_t0[0]);
                    var r363_left = r1_fallback(r363_left, _r363_t0[1], r312_SB);
                    var r363_right = r1_fallback(r363_right, _r363_t0[2], r312_RightSB);
                    var r363_stroke = r1_fallback(r363_stroke, _r363_t0[3], r312_Stroke);
                    var r363_fine = r1_fallback(r363_fine, _r363_t0[4], r312_ShoulderFine * (r363_stroke / r312_Stroke));
                    var r363_swVBar = r1_fallback(r363_swVBar, _r363_t0[5], r363_stroke);
                    var r363_jut = r1_fallback(r363_jut, _r363_t0[6], r312_Jut - r312_HSwToV(0.5 * (r312_Stroke - r363_swVBar)));
                    var r363_pBar = r1_fallback(r363_pBar, _r363_t0[7], r312_YeriBarPos);
                    var r363_yStart = r1_fallback(r363_yStart, _r363_t0[8], r363_top);
                    var r363_fSlab = r1_fallback(r363_fSlab, _r363_t0[9], r312_SLAB);
                    return new r312_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                        var _r368_t0, _r368_t1;
                        var r368_bowlTop = r1_mix(0, r363_top, r363_pBar) + r363_stroke / 2;
                        var r368_mockLeft = r363_left - r312_HSwToV(r363_stroke - r363_swVBar);
                        var r368_turnRadius = r312_BowlXDepth(r368_bowlTop, 0, r368_mockLeft, r363_right, r363_stroke);
                        var r368_xTurnRightT = r1_clamp(Math.max(r363_left - r312_O + r312_TINY + Math.abs(r312_TanSlope * r363_stroke), r363_left + r312_HSwToV(r363_swVBar)), r363_right - r312_HSwToV(1.125 * r363_stroke), r312_Arch["adjust-x"].top(r363_right - r368_turnRadius, new r312_xn$NamedParameterPair$2Lrc9b("sw", r363_stroke)));
                        var r368_xTurnRightB = r1_clamp(Math.max(r363_left - r312_O + r312_TINY + Math.abs(r312_TanSlope * r363_stroke), r363_left + r312_HSwToV(r363_swVBar)), r363_right - r312_HSwToV(1.125 * r363_stroke), r312_Arch["adjust-x"].bot(r363_right - r368_turnRadius, new r312_xn$NamedParameterPair$2Lrc9b("sw", r363_stroke)));
                        var r368_mockWidth = r363_right - r368_mockLeft + r312_SB * 2;
                        var r368_archDepth = Math.max(r312_ArchDepth * (r368_mockWidth / r312_Width), r363_stroke * 1.125);
                        var r368_ada = r312_ArchDepthAOf(r368_archDepth, r368_mockWidth);
                        var r368_adb = r312_ArchDepthBOf(r368_archDepth, r368_mockWidth);
                        var r368_yTurnBottomL = r312_YSmoothMidL(r368_bowlTop, 0, r368_ada, r368_adb);
                        var r368_yTurnBottomR = r312_YSmoothMidR(r368_bowlTop, 0, r368_ada, r368_adb);
                        r368_currentGlyph.include(r312_dispiro(r312_widths.lhs(r363_swVBar), r312_flat(r363_left, r363_yStart, r312_heading(r312_Downward)), r312_curl(r363_left, Math.min(r363_yStart - r312_TINY - r312_HSwToV(Math.abs(r312_TanSlope * r363_swVBar)), 0 + r368_adb, r368_yTurnBottomL)), r312_Arch.lhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r363_stroke), new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r363_swVBar)), r312_g4(r363_right - r312_OX, r368_yTurnBottomR), r312_Arch.lhs(r368_bowlTop, new r312_xn$NamedParameterPair$2Lrc9b("sw", r363_stroke), new r312_xn$NamedParameterPair$2Lrc9b("swAfter", r363_fine)), r312_g4.down.end(r363_left + r312_HSwToV(r363_swVBar - r363_fine), Math.max(r368_bowlTop - r368_ada, r368_yTurnBottomL), r312_widths.lhs.heading(r363_fine, r312_Downward))));
                        if (r363_fSlab) r368_currentGlyph.include(r312_tagged("serifYeriLT", r322_useFullSerifs ? r312_HSerif.mt(r363_left + r312_HSwToV(0.5 * r363_swVBar), r363_top, r363_jut, r363_stroke) : r312_HSerif.lt(r363_left, r363_top, r363_jut - r312_HSwToV(0.5 * r363_swVBar), r363_stroke, r363_swVBar)));
                        return void 0;
                    });
                };
                r322_CursiveShape.useFullSerifs = r322_useFullSerifs;
                return r322_exports;
            })();
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r378_t0, _r378_t1;
            return {
                "YeriUpper": r312_YeriUpper,
                "YeriLower": r312_YeriLower
            };
        });
        var r312_YeriUpper = r312_YeriShapeGroup(true, false);
        var r312_YeriLower = r312_YeriShapeGroup(false, false);
        var r312_YeriLowerBGR = r312_YeriShapeGroup(false, true);
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r380_t0, _r380_t1;
            return {
                "RevYeriUpper": r312_RevYeriUpper
            };
        });
        var r312_RevYeriUpper = (function () {
            var r383_Shape, r383_RoundShape;
            var r383_exports = {};
            r383_exports.Shape = r383_Shape = function () {
                var _r392_t5;
                var _r392_t6 = arguments;
                var r392_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r392_t6, 0);
                var _r392_t0 = [];
                var _r392_t1 = 0;
                while (_r392_t1 < r392_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r392_xn$flexarguments$2Lrc7uIe5[_r392_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r392_t0.push(r392_xn$flexarguments$2Lrc7uIe5[_r392_t1]);
                    _r392_t1 = _r392_t1 + 1;
                }
                var _r392_t2 = r392_xn$flexarguments$2Lrc7uIe5;
                var _r392_t3 = _r392_t2.length;
                var _r392_t4 = 0;
                while (_r392_t4 < _r392_t3) {
                    _r392_t1 = _r392_t2[_r392_t4];
                    if (_r392_t1 && _r392_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r392_t1.left === "top") r392_top = _r392_t1.right;
                    if (_r392_t1 && _r392_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r392_t1.left === "left") r392_left = _r392_t1.right;
                    if (_r392_t1 && _r392_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r392_t1.left === "right") r392_right = _r392_t1.right;
                    if (_r392_t1 && _r392_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r392_t1.left === "stroke") r392_stroke = _r392_t1.right;
                    if (_r392_t1 && _r392_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r392_t1.left === "fine") r392_fine = _r392_t1.right;
                    if (_r392_t1 && _r392_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r392_t1.left === "swVBar") r392_swVBar = _r392_t1.right;
                    if (_r392_t1 && _r392_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r392_t1.left === "jut") r392_jut = _r392_t1.right;
                    if (_r392_t1 && _r392_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r392_t1.left === "pBar") r392_pBar = _r392_t1.right;
                    if (_r392_t1 && _r392_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r392_t1.left === "yStart") r392_yStart = _r392_t1.right;
                    if (_r392_t1 && _r392_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r392_t1.left === "fSlab") r392_fSlab = _r392_t1.right;
                    _r392_t4 = _r392_t4 + 1;
                }
                var r392_top = r1_fallback(r392_top, _r392_t0[0]);
                var r392_left = r1_fallback(r392_left, _r392_t0[1], r312_SB);
                var r392_right = r1_fallback(r392_right, _r392_t0[2], r312_RightSB);
                var r392_stroke = r1_fallback(r392_stroke, _r392_t0[3], r312_Stroke);
                var r392_fine = r1_fallback(r392_fine, _r392_t0[4], r312_ShoulderFine * (r392_stroke / r312_Stroke));
                var r392_swVBar = r1_fallback(r392_swVBar, _r392_t0[5], r392_stroke);
                var r392_jut = r1_fallback(r392_jut, _r392_t0[6], r312_Jut - r312_HSwToV(0.5 * (r312_Stroke - r392_swVBar)));
                var r392_pBar = r1_fallback(r392_pBar, _r392_t0[7], r312_YeriBarPos);
                var r392_yStart = r1_fallback(r392_yStart, _r392_t0[8], r392_top);
                var r392_fSlab = r1_fallback(r392_fSlab, _r392_t0[9], r312_SLAB);
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r397_currentGlyph) {
                    var _r397_t0, _r397_t1;
                    var r397_bowlTop = r1_mix(0, r392_top, r392_pBar) + r392_stroke / 2;
                    var r397_mockRight = r392_right + r312_HSwToV(r392_stroke - r392_swVBar);
                    var r397_turnRadius = r312_BowlXDepth(r397_bowlTop, 0, r392_left, r397_mockRight, r392_stroke);
                    var r397_xTurnLeftT = r1_clamp(r392_left + r312_HSwToV(1.125 * r392_stroke), Math.min(r392_right + r312_O - r312_TINY - Math.abs(r312_TanSlope * r392_stroke), r392_right - r312_HSwToV(r392_swVBar)), r312_Arch["adjust-x"].top(r392_left + r397_turnRadius, new r312_xn$NamedParameterPair$2Lrc9b("sw", r392_stroke)));
                    var r397_xTurnLeftB = r1_clamp(r392_left + r312_HSwToV(1.125 * r392_stroke), Math.min(r392_right + r312_O - r312_TINY - Math.abs(r312_TanSlope * r392_stroke), r392_right - r312_HSwToV(r392_swVBar)), r312_Arch["adjust-x"].bot(r392_left + r397_turnRadius, new r312_xn$NamedParameterPair$2Lrc9b("sw", r392_stroke)));
                    var r397_mockWidth = r397_mockRight - r392_left + r312_SB * 2;
                    var r397_archDepth = Math.max(r312_ArchDepth * (r397_mockWidth / r312_Width), r392_stroke * 1.125);
                    var r397_ada = r312_ArchDepthAOf(r397_archDepth, r397_mockWidth);
                    var r397_adb = r312_ArchDepthBOf(r397_archDepth, r397_mockWidth);
                    var r397_yTurnBottomL = r312_YSmoothMidL(r397_bowlTop, 0, r397_ada, r397_adb);
                    var r397_yTurnBottomR = r312_YSmoothMidR(r397_bowlTop, 0, r397_ada, r397_adb);
                    r397_currentGlyph.include(r312_union(r312_VBar.r(r392_right, 0, r392_yStart, r392_swVBar), r312_dispiro(r312_widths.rhs(r392_stroke), r312_flat(r392_right + r312_O, 0, r312_heading(r312_Leftward)), r312_curl(r397_xTurnLeftB, 0, r397_xTurnLeftB + Math.abs(r312_TanSlope * r392_stroke) >= r392_right - r312_HSwToV(r392_swVBar) ? r312_heading(r312_Leftward) : void 0), r312_archv(8), r312_g4(r392_left + r312_OX, r397_yTurnBottomL), r312_arcvh(8), r312_flat(r397_xTurnLeftT, r397_bowlTop, r397_xTurnLeftT + Math.abs(r312_TanSlope * r392_stroke) >= r392_right - r312_HSwToV(r392_swVBar) ? r312_heading(r312_Rightward) : void 0), r312_curl(r392_right + r312_O, r397_bowlTop, r312_heading(r312_Rightward)))));
                    if (r392_fSlab) r397_currentGlyph.include(new r312_xn$Capture$2Lrc8.GlyphProc(function (r403_currentGlyph) {
                        var _r403_t0, _r403_t1;
                        r403_currentGlyph.include(r312_tagged("serifYeriRB", r312_HSerif.rb(r392_right, 0, r392_jut - r312_HSwToV(0.5 * r392_swVBar), r392_stroke, r392_swVBar)), true, true);
                        r403_currentGlyph.include(r312_tagged("serifYeriRT", r312_HSerif.mt(r392_right - r312_HSwToV(0.5 * r392_swVBar), r392_top, r392_jut, r392_stroke)));
                        return void 0;
                    }));
                    return void 0;
                });
            };
            r383_exports.RoundShape = r383_RoundShape = function () {
                var _r408_t5;
                var _r408_t6 = arguments;
                var r408_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r408_t6, 0);
                var _r408_t0 = [];
                var _r408_t1 = 0;
                while (_r408_t1 < r408_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r408_xn$flexarguments$2Lrc7uIe5[_r408_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r408_t0.push(r408_xn$flexarguments$2Lrc7uIe5[_r408_t1]);
                    _r408_t1 = _r408_t1 + 1;
                }
                var _r408_t2 = r408_xn$flexarguments$2Lrc7uIe5;
                var _r408_t3 = _r408_t2.length;
                var _r408_t4 = 0;
                while (_r408_t4 < _r408_t3) {
                    _r408_t1 = _r408_t2[_r408_t4];
                    if (_r408_t1 && _r408_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r408_t1.left === "top") r408_top = _r408_t1.right;
                    if (_r408_t1 && _r408_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r408_t1.left === "left") r408_left = _r408_t1.right;
                    if (_r408_t1 && _r408_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r408_t1.left === "right") r408_right = _r408_t1.right;
                    if (_r408_t1 && _r408_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r408_t1.left === "stroke") r408_stroke = _r408_t1.right;
                    if (_r408_t1 && _r408_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r408_t1.left === "fine") r408_fine = _r408_t1.right;
                    if (_r408_t1 && _r408_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r408_t1.left === "swVBar") r408_swVBar = _r408_t1.right;
                    if (_r408_t1 && _r408_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r408_t1.left === "jut") r408_jut = _r408_t1.right;
                    if (_r408_t1 && _r408_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r408_t1.left === "pBar") r408_pBar = _r408_t1.right;
                    if (_r408_t1 && _r408_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r408_t1.left === "yStart") r408_yStart = _r408_t1.right;
                    if (_r408_t1 && _r408_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r408_t1.left === "fSlab") r408_fSlab = _r408_t1.right;
                    _r408_t4 = _r408_t4 + 1;
                }
                var r408_top = r1_fallback(r408_top, _r408_t0[0]);
                var r408_left = r1_fallback(r408_left, _r408_t0[1], r312_SB);
                var r408_right = r1_fallback(r408_right, _r408_t0[2], r312_RightSB);
                var r408_stroke = r1_fallback(r408_stroke, _r408_t0[3], r312_Stroke);
                var r408_fine = r1_fallback(r408_fine, _r408_t0[4], r312_ShoulderFine * (r408_stroke / r312_Stroke));
                var r408_swVBar = r1_fallback(r408_swVBar, _r408_t0[5], r408_stroke);
                var r408_jut = r1_fallback(r408_jut, _r408_t0[6], r312_Jut - r312_HSwToV(0.5 * (r312_Stroke - r408_swVBar)));
                var r408_pBar = r1_fallback(r408_pBar, _r408_t0[7], r312_YeriBarPos);
                var r408_yStart = r1_fallback(r408_yStart, _r408_t0[8], r408_top);
                var r408_fSlab = r1_fallback(r408_fSlab, _r408_t0[9], r312_SLAB);
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r413_currentGlyph) {
                    var _r413_t0, _r413_t1;
                    var r413_bowlTop = r1_mix(0, r408_top, r408_pBar) + r408_stroke / 2;
                    var r413_mockRight = r408_right + r312_HSwToV(r408_stroke - r408_swVBar);
                    var r413_turnRadius = r312_BowlXDepth(r413_bowlTop, 0, r408_left, r413_mockRight, r408_stroke);
                    var r413_xTurnLeftT = r1_clamp(r408_left + r312_HSwToV(1.125 * r408_stroke), Math.min(r408_right + r312_O - r312_TINY - Math.abs(r312_TanSlope * r408_stroke), r408_right - r312_HSwToV(r408_swVBar)), r312_Arch["adjust-x"].top(r408_left + r413_turnRadius, new r312_xn$NamedParameterPair$2Lrc9b("sw", r408_stroke)));
                    var r413_xTurnLeftB = r1_clamp(r408_left + r312_HSwToV(1.125 * r408_stroke), Math.min(r408_right + r312_O - r312_TINY - Math.abs(r312_TanSlope * r408_stroke), r408_right - r312_HSwToV(r408_swVBar)), r312_Arch["adjust-x"].bot(r408_left + r413_turnRadius, new r312_xn$NamedParameterPair$2Lrc9b("sw", r408_stroke)));
                    var r413_mockWidth = r413_mockRight - r408_left + r312_SB * 2;
                    var r413_archDepth = Math.max(r312_ArchDepth * (r413_mockWidth / r312_Width), r408_stroke * 1.125);
                    var r413_ada = r312_ArchDepthAOf(r413_archDepth, r413_mockWidth);
                    var r413_adb = r312_ArchDepthBOf(r413_archDepth, r413_mockWidth);
                    var r413_yTurnBottomL = r312_YSmoothMidL(r413_bowlTop, 0, r413_ada, r413_adb);
                    var r413_yTurnBottomR = r312_YSmoothMidR(r413_bowlTop, 0, r413_ada, r413_adb);
                    r413_currentGlyph.include(r312_dispiro(r312_widths.rhs(r408_swVBar), r312_flat(r408_right, r408_yStart, r312_heading(r312_Downward)), r312_curl(r408_right, Math.min(r408_yStart - r312_TINY - r312_HSwToV(Math.abs(r312_TanSlope * r408_swVBar)), 0 + r413_ada, r413_yTurnBottomR)), r312_Arch.rhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r408_stroke), new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r408_swVBar)), r312_g4(r408_left + r312_OX, r413_yTurnBottomL), r312_arcvh(8), r312_flat(r413_xTurnLeftT, r413_bowlTop, r413_xTurnLeftT + Math.abs(r312_TanSlope * r408_stroke) >= r408_right - r312_HSwToV(r408_swVBar) ? r312_heading(r312_Rightward) : void 0), r312_curl(r408_right + r312_O, r413_bowlTop, r312_heading(r312_Rightward))));
                    if (r408_fSlab) r413_currentGlyph.include(r312_tagged("serifYeriRT", r312_HSerif.mt(r408_right - r312_HSwToV(0.5 * r408_swVBar), r408_top, r408_jut, r408_stroke)));
                    return void 0;
                });
            };
            return r383_exports;
        })();
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r421_t0, _r421_t1;
            return {
                "YeriConfig": r312_YeriConfig
            };
        });
        var r312_YeriConfig = {
            "corner": [r312_YeriUpper.Shape, r312_YeriLower.Shape, r312_YeriLowerBGR.Shape],
            "round": [r312_YeriUpper.RoundShape, r312_YeriLower.RoundShape, r312_YeriLowerBGR.RoundShape],
            "cursive": [r312_YeriUpper.CursiveShape, r312_YeriLower.CursiveShape, r312_YeriLowerBGR.CursiveShape]
        };
        var _r312_t9 = Object.entries(r312_YeriConfig)[Symbol.iterator]();
        var _r312_t10 = void 0;
        while (!(_r312_t10 = _r312_t9.next()).done) {
            _r312_t11 = _r312_t10.value;
            r312_suffix = _r312_t11[0];
            r312_Uc = _r312_t11[1][0];
            r312_Lc = _r312_t11[1][1];
            r312_BGRc = _r312_t11[1][2];
            _r312_t11[1];
            (function () {
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Yeri." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r427_currentGlyph) {
                    var _r427_t0, _r427_t1;
                    r427_currentGlyph.include(r312_MarkSet.capital());
                    var r427_stroke = r312_AdviceStroke2(2, 3, r312_CAP);
                    r427_currentGlyph.include(r312_Uc(r312_CAP, r312_SB, r312_RightSB, r427_stroke));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YeriBar." + r312_suffix, null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r427_currentGlyph, r312_LetterBarOverlay.l.in(new r312_xn$NamedParameterPair$2Lrc9b("x", r312_SB), new r312_xn$NamedParameterPair$2Lrc9b("bot", r1_mix(0, r312_CAP, r312_YeriBarPos) + r427_stroke / 2), new r312_xn$NamedParameterPair$2Lrc9b("top", r312_CAP - (r312_SLAB ? r427_stroke : 0)))));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yeri." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r437_currentGlyph) {
                    var _r437_t0, _r437_t1;
                    r437_currentGlyph.include(r312_MarkSet.e());
                    var r437_stroke = r312_AdviceStroke2(2, 3, r312_XH);
                    r437_currentGlyph.include(r312_Lc(r312_XH, r312_SB, r312_RightSB, r437_stroke));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yeriBar." + r312_suffix, null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r437_currentGlyph, r312_LetterBarOverlay.l.in(new r312_xn$NamedParameterPair$2Lrc9b("x", r312_SB), new r312_xn$NamedParameterPair$2Lrc9b("bot", r1_mix(0, r312_XH, r312_YeriBarPos) + r437_stroke / 2), new r312_xn$NamedParameterPair$2Lrc9b("top", r312_XH - (r312_SLAB ? r437_stroke : 0)))));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yeri.BGR." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r447_currentGlyph) {
                    var _r447_t0, _r447_t1;
                    r447_currentGlyph.include(r312_MarkSet.e());
                    var r447_stroke = r312_AdviceStroke2(2, 3, r312_XH);
                    r447_currentGlyph.include(r312_BGRc(r312_XH, r312_SB, r312_RightSB, r447_stroke));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("cyrl/Yeri", 1068);
        r312_xn$selectvariant$7Hrq("cyrl/yeri", 1100);
        r312_xn$selectvariant$7Hrq("cyrl/yeri.BGR", new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/yeri"));
        r312_xn$selectvariant$7Hrq("cyrl/YeriBar", 1164, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Yeri"));
        return r312_xn$selectvariant$7Hrq("cyrl/yeriBar", 1165, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/yeri"));
    });
    return void 0;
});


