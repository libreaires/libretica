"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-B", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_body, r313_mask, r313_bp, r313_fGap, r313_fAsymmetric, r313_ts, r313_bs, _r313_t12, _r313_t14, _r313_t15, _r313_t16, _r313_tag17;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_ArchDepth = _r313_t1.ArchDepth;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_MidJutSide = _r313_t1.MidJutSide;
        var r313_CThin = _r313_t1.CThin;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_ShoulderFine = _r313_t1.ShoulderFine;
        var r313_ArchDepthAOf = _r313_t1.ArchDepthAOf;
        var r313_ArchDepthBOf = _r313_t1.ArchDepthBOf;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_YSmoothMidR = _r313_t1.YSmoothMidR;
        var r313_YSmoothMidL = _r313_t1.YSmoothMidL;
        var r313_ArchDepthAClamped = _r313_t1.ArchDepthAClamped;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
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
        var r313_Rect = _r313_t5.Rect;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_NeedSlab = _r313_t5.NeedSlab;
        var r313_NeedNotItalic = _r313_t5.NeedNotItalic;
        var r313_VBar = _r313_t5.VBar;
        var r313_flatside = _r313_t5.flatside;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$aliasreducedvariant$1aao8 = _r313_t6["alias-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_BowlXDepth = _r313_t8.BowlXDepth;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LetterBarOverlay = _r313_t9.LetterBarOverlay;
        var r313_SerifFrame = _r313_t9.SerifFrame;
        var r313_LeftHook = _r313_t9.LeftHook;
        var r313_PalatalHook = _r313_t9.PalatalHook;
        var r313_BArcMix = 0.93;
        var r313_BBarPos = 0.52;
        var r313_TallCyrVeBarPos = 0.55;
        var r313_AsymmetricBBarPos = 0.6;
        var r313_AsymmetricBTopArcShift = -0.05 * (r313_RightSB - r313_SB);
        var r313_AsymmetricBTopArcInnerShift = -0.1 * (r313_RightSB - r313_SB);
        var r313_BShapeArcsT = function (r319_sink, r319_offset) {
            var _r319_t0, _r319_t1;
            return function () {
                var _r320_t5;
                var _r320_t6 = arguments;
                var r320_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r320_t6, 0);
                var _r320_t0 = [];
                var _r320_t1 = 0;
                while (_r320_t1 < r320_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r320_xn$flexarguments$2Lrc7uIe5[_r320_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r320_t0.push(r320_xn$flexarguments$2Lrc7uIe5[_r320_t1]);
                    _r320_t1 = _r320_t1 + 1;
                }
                var _r320_t2 = r320_xn$flexarguments$2Lrc7uIe5;
                var _r320_t3 = _r320_t2.length;
                var _r320_t4 = 0;
                while (_r320_t4 < _r320_t3) {
                    _r320_t1 = _r320_t2[_r320_t4];
                    if (_r320_t1 && _r320_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "top") r320_top = _r320_t1.right;
                    if (_r320_t1 && _r320_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "stroke") r320_stroke = _r320_t1.right;
                    if (_r320_t1 && _r320_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "barPos") r320_barPos = _r320_t1.right;
                    if (_r320_t1 && _r320_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "topArcShift") r320_topArcShift = _r320_t1.right;
                    if (_r320_t1 && _r320_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "topArcInnerShift") r320_topArcInnerShift = _r320_t1.right;
                    _r320_t4 = _r320_t4 + 1;
                }
                var r320_top = r1_fallback(r320_top, _r320_t0[0]);
                var r320_stroke = r1_fallback(r320_stroke, _r320_t0[1]);
                var r320_barPos = r1_fallback(r320_barPos, _r320_t0[2]);
                var r320_topArcShift = r1_fallback(r320_topArcShift, _r320_t0[3]);
                var r320_topArcInnerShift = r1_fallback(r320_topArcInnerShift, _r320_t0[4]);
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                    var _r326_t0, _r326_t1;
                    var r326_bowl = r1_mix(r320_stroke, r320_top, r320_barPos);
                    var r326_mockBowlDepth = r313_BowlXDepth(r320_top, r326_bowl - r320_stroke, r313_SB, r313_RightSB, r320_stroke);
                    var r326_curveLeftBot = r1_mix(r313_Width, r313_RightSB, 1.5) - r326_mockBowlDepth + r320_topArcInnerShift;
                    var r326_curveLeftTop = Math.min(r326_curveLeftBot, r1_mix(r313_Width, r313_RightSB, 1.5) - r313_OX - r320_stroke * 1.375 + r320_topArcInnerShift);
                    var r326_adaBot = r313_ArchDepthAOf(r313_ArchDepth * 0.9);
                    var r326_adbBot = r313_ArchDepthBOf(r313_ArchDepth * 0.9);
                    var r326_adaTop = r313_ArchDepthAOf(r313_ArchDepth * 0.9 - (r326_curveLeftBot - r326_curveLeftTop));
                    var r326_adbTop = r313_ArchDepthBOf(r313_ArchDepth * 0.9 - (r326_curveLeftBot - r326_curveLeftTop));
                    var r326_xTopArcRight = r1_mix(r313_SB, r313_RightSB, r313_BArcMix) - r313_OX * 2 + r320_topArcShift;
                    var r326_yTopArcRight = r313_YSmoothMidR(r320_top, r326_bowl - r320_stroke, r326_adaTop, r326_adbTop);
                    var r326_xBotArcRight = r313_RightSB - r313_OX * 2;
                    var r326_yBotArcRight = r313_YSmoothMidR(r326_bowl, 0, r326_adaBot, r326_adbBot);
                    var r326_fine = r320_stroke * r313_CThin;
                    r326_currentGlyph.include(r319_sink(r313_widths.rhs(r320_stroke), r313_flat(r313_SB - r313_O, r320_top - r319_offset, r313_heading(r313_Rightward)), r313_curl(r313_Arch["adjust-x"].top(r326_curveLeftTop, new r313_xn$NamedParameterPair$2Lrc9b("sw", r320_stroke)), r320_top - r319_offset), r313_archv(), r313_g4(r326_xTopArcRight - r319_offset, r326_yTopArcRight), r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r326_curveLeftTop, new r313_xn$NamedParameterPair$2Lrc9b("sw", r320_stroke)), r326_bowl - r326_fine + r319_offset, r313_widths.rhs(r326_fine)), r313_curl(r313_SB - r313_O, r326_bowl - r326_fine + r319_offset, r313_heading(r313_Leftward))));
                    r326_currentGlyph.include(r319_sink(r313_widths.rhs(r326_fine), r313_flat(r313_SB - r313_O, r326_bowl - r320_stroke + r326_fine - r319_offset, r313_heading(r313_Rightward)), r313_curl(r313_Arch["adjust-x"].top(r326_curveLeftBot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r320_stroke)), r326_bowl - r320_stroke + r326_fine - r319_offset), r313_archv(), r313_g4(r326_xBotArcRight - r319_offset, r326_yBotArcRight, r313_widths.rhs(r320_stroke)), r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r326_curveLeftBot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r320_stroke)), 0 + r319_offset), r313_curl(r313_SB - r313_O, 0 + r319_offset, r313_heading(r313_Leftward))));
                    return {
                        "bowl": r326_bowl
                    };
                });
            };
        };
        var r313_BShape = function () {
            var _r334_t5;
            var _r334_t6 = arguments;
            var r334_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r334_t6, 0);
            var _r334_t0 = [];
            var _r334_t1 = 0;
            while (_r334_t1 < r334_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r334_xn$flexarguments$2Lrc7uIe5[_r334_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r334_t0.push(r334_xn$flexarguments$2Lrc7uIe5[_r334_t1]);
                _r334_t1 = _r334_t1 + 1;
            }
            var _r334_t2 = r334_xn$flexarguments$2Lrc7uIe5;
            var _r334_t3 = _r334_t2.length;
            var _r334_t4 = 0;
            while (_r334_t4 < _r334_t3) {
                _r334_t1 = _r334_t2[_r334_t4];
                if (_r334_t1 && _r334_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r334_t1.left === "top") r334_top = _r334_t1.right;
                if (_r334_t1 && _r334_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r334_t1.left === "stroke") r334_stroke = _r334_t1.right;
                if (_r334_t1 && _r334_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r334_t1.left === "barPos") r334_barPos = _r334_t1.right;
                if (_r334_t1 && _r334_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r334_t1.left === "topArcShift") r334_topArcShift = _r334_t1.right;
                if (_r334_t1 && _r334_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r334_t1.left === "topArcInnerShift") r334_topArcInnerShift = _r334_t1.right;
                if (_r334_t1 && _r334_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r334_t1.left === "serifTop") r334_serifTop = _r334_t1.right;
                if (_r334_t1 && _r334_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r334_t1.left === "serifBot") r334_serifBot = _r334_t1.right;
                _r334_t4 = _r334_t4 + 1;
            }
            var r334_top = r1_fallback(r334_top, _r334_t0[0]);
            var r334_stroke = r1_fallback(r334_stroke, _r334_t0[1], r313_AdviceStroke2(2, 3, r334_top - 0));
            var r334_barPos = r1_fallback(r334_barPos, _r334_t0[2], r313_BBarPos);
            var r334_topArcShift = r1_fallback(r334_topArcShift, _r334_t0[3], 0);
            var r334_topArcInnerShift = r1_fallback(r334_topArcInnerShift, _r334_t0[4], 0);
            var r334_serifTop = r1_fallback(r334_serifTop, _r334_t0[5], false);
            var r334_serifBot = r1_fallback(r334_serifBot, _r334_t0[6], false);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                var _r339_t0, _r339_t1;
                r339_currentGlyph.include(r313_VBar.l(r313_SB, 0, r334_top, r334_stroke));
                var r339_dims = r339_currentGlyph.include(r313_BShapeArcsT(r313_dispiro, 0)(r334_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r334_stroke), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r334_barPos), new r313_xn$NamedParameterPair$2Lrc9b("topArcShift", r334_topArcShift), new r313_xn$NamedParameterPair$2Lrc9b("topArcInnerShift", r334_topArcInnerShift)));
                r339_currentGlyph.setBaseAnchor("strike", r313_Middle, r339_dims.bowl - 0.5 * r334_stroke);
                var r339_sf = r313_SerifFrame.fromDf(r313_DivFrame(1), r334_top, 0);
                if (r334_serifTop) r339_currentGlyph.include(r339_sf.lt.outer);
                if (r334_serifBot) r339_currentGlyph.include(r339_sf.lb.outer);
                return void 0;
            });
        };
        var r313_BShapeMask = function () {
            var _r350_t5;
            var _r350_t6 = arguments;
            var r350_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r350_t6, 0);
            var _r350_t0 = [];
            var _r350_t1 = 0;
            while (_r350_t1 < r350_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r350_xn$flexarguments$2Lrc7uIe5[_r350_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r350_t0.push(r350_xn$flexarguments$2Lrc7uIe5[_r350_t1]);
                _r350_t1 = _r350_t1 + 1;
            }
            var _r350_t2 = r350_xn$flexarguments$2Lrc7uIe5;
            var _r350_t3 = _r350_t2.length;
            var _r350_t4 = 0;
            while (_r350_t4 < _r350_t3) {
                _r350_t1 = _r350_t2[_r350_t4];
                if (_r350_t1 && _r350_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r350_t1.left === "top") r350_top = _r350_t1.right;
                if (_r350_t1 && _r350_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r350_t1.left === "stroke") r350_stroke = _r350_t1.right;
                if (_r350_t1 && _r350_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r350_t1.left === "barPos") r350_barPos = _r350_t1.right;
                if (_r350_t1 && _r350_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r350_t1.left === "topArcShift") r350_topArcShift = _r350_t1.right;
                if (_r350_t1 && _r350_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r350_t1.left === "topArcInnerShift") r350_topArcInnerShift = _r350_t1.right;
                _r350_t4 = _r350_t4 + 1;
            }
            var r350_top = r1_fallback(r350_top, _r350_t0[0]);
            var r350_stroke = r1_fallback(r350_stroke, _r350_t0[1], r313_AdviceStroke2(2, 3, r350_top - 0));
            var r350_barPos = r1_fallback(r350_barPos, _r350_t0[2], r313_BBarPos);
            var r350_topArcShift = r1_fallback(r350_topArcShift, _r350_t0[3], 0);
            var r350_topArcInnerShift = r1_fallback(r350_topArcInnerShift, _r350_t0[4], 0);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r355_currentGlyph) {
                var _r355_t0, _r355_t1;
                r355_currentGlyph.include(r313_BShapeArcsT(r313_xn$spirooutline$1aao, 1)(r350_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r350_stroke), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r350_barPos), new r313_xn$NamedParameterPair$2Lrc9b("topArcShift", r350_topArcShift), new r313_xn$NamedParameterPair$2Lrc9b("topArcInnerShift", r350_topArcInnerShift)));
                return void 0;
            });
        };
        var r313_InterruptShape = function (r361_bp) {
            var _r361_t0, _r361_t1;
            return function (r362_top, r362_sw, r362__st, r362__sb) {
                var _r362_t0, _r362_t1;
                var r362_bowl = r1_mix(r362_sw, r362_top, r361_bp);
                return r313_VBar.l(r313_SB + r313_HSwToV(r362_sw), r362_bowl - r362_sw - r313_TINY, r362_bowl + r313_TINY, r313_VSwToH(0.2 * (r313_RightSB - r313_SB)) * (r313_AdviceStroke(5) / r313_Stroke));
            };
        };
        var r313_StdShape = function (r363_top, r363_sw, r363_st, r363_sb) {
            var _r363_t0, _r363_t1;
            return r313_BShape(r363_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r363_sw), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r313_BBarPos), new r313_xn$NamedParameterPair$2Lrc9b("serifTop", r363_st), new r313_xn$NamedParameterPair$2Lrc9b("serifBot", r363_sb));
        };
        var r313_StdShapeInterrupted = function (r368_top, r368_sw, r368_st, r368_sb) {
            var _r368_t0, _r368_t1;
            return r313_difference(r313_StdShape(r368_top, r368_sw, r368_st, r368_sb), r313_InterruptShape(r313_BBarPos)(r368_top, r368_sw, r368_st, r368_sb));
        };
        var r313_StdMask = function (r369_top, r369_sw) {
            var _r369_t0, _r369_t1;
            return r313_BShapeMask(r369_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r369_sw), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r313_BBarPos));
        };
        var r313_AsymmetricShape = function (r372_top, r372_sw, r372_st, r372_sb) {
            var _r372_t0, _r372_t1;
            return r313_BShape(r372_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r1_fallback(r372_sw, r313_AdviceStroke2(2, 3, r372_top - 0))), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r313_AsymmetricBBarPos), new r313_xn$NamedParameterPair$2Lrc9b("topArcShift", r313_AsymmetricBTopArcShift), new r313_xn$NamedParameterPair$2Lrc9b("topArcInnerShift", r313_AsymmetricBTopArcInnerShift), new r313_xn$NamedParameterPair$2Lrc9b("serifTop", r372_st), new r313_xn$NamedParameterPair$2Lrc9b("serifBot", r372_sb));
        };
        var r313_AsymmetricShapeInterrupted = function (r379_top, r379_sw, r379_st, r379_sb) {
            var _r379_t0, _r379_t1;
            return r313_difference(r313_AsymmetricShape(r379_top, r379_sw, r379_st, r379_sb), r313_InterruptShape(r313_AsymmetricBBarPos)(r379_top, r379_sw, r379_st, r379_sb));
        };
        var r313_AsymmetricMask = function (r380_top, r380_sw) {
            var _r380_t0, _r380_t1;
            return r313_BShapeMask(r380_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r1_fallback(r380_sw, r313_AdviceStroke2(2, 3, r380_top - 0))), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r313_AsymmetricBBarPos), new r313_xn$NamedParameterPair$2Lrc9b("topArcShift", r313_AsymmetricBTopArcShift), new r313_xn$NamedParameterPair$2Lrc9b("topArcInnerShift", r313_AsymmetricBTopArcInnerShift));
        };
        var r313_RoundedTopCyrVeArcsT = function (r385_sink, r385_offset) {
            var _r385_t0, _r385_t1;
            return function () {
                var _r386_t5;
                var _r386_t6 = arguments;
                var r386_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r386_t6, 0);
                var _r386_t0 = [];
                var _r386_t1 = 0;
                while (_r386_t1 < r386_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r386_xn$flexarguments$2Lrc7uIe5[_r386_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r386_t0.push(r386_xn$flexarguments$2Lrc7uIe5[_r386_t1]);
                    _r386_t1 = _r386_t1 + 1;
                }
                var _r386_t2 = r386_xn$flexarguments$2Lrc7uIe5;
                var _r386_t3 = _r386_t2.length;
                var _r386_t4 = 0;
                while (_r386_t4 < _r386_t3) {
                    _r386_t1 = _r386_t2[_r386_t4];
                    if (_r386_t1 && _r386_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r386_t1.left === "top") r386_top = _r386_t1.right;
                    if (_r386_t1 && _r386_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r386_t1.left === "stroke") r386_stroke = _r386_t1.right;
                    if (_r386_t1 && _r386_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r386_t1.left === "barPos") r386_barPos = _r386_t1.right;
                    if (_r386_t1 && _r386_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r386_t1.left === "topArcShift") r386_topArcShift = _r386_t1.right;
                    if (_r386_t1 && _r386_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r386_t1.left === "topArcInnerShift") r386_topArcInnerShift = _r386_t1.right;
                    if (_r386_t1 && _r386_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r386_t1.left === "rise") r386_rise = _r386_t1.right;
                    _r386_t4 = _r386_t4 + 1;
                }
                var r386_top = r1_fallback(r386_top, _r386_t0[0]);
                var r386_stroke = r1_fallback(r386_stroke, _r386_t0[1]);
                var r386_barPos = r1_fallback(r386_barPos, _r386_t0[2]);
                var r386_topArcShift = r1_fallback(r386_topArcShift, _r386_t0[3]);
                var r386_topArcInnerShift = r1_fallback(r386_topArcInnerShift, _r386_t0[4]);
                var r386_rise = r1_fallback(r386_rise, _r386_t0[5]);
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r392_currentGlyph) {
                    var _r392_t0, _r392_t1;
                    var r392_bowl = r1_mix(r386_stroke, r386_top, r386_barPos);
                    var r392_mockBowlDepth = r313_BowlXDepth(r386_top, r392_bowl - r386_stroke, r313_SB, r313_RightSB, r386_stroke);
                    var r392_curveLeftBot = r1_mix(r313_Width, r313_RightSB, 1.5) - r392_mockBowlDepth + r386_topArcInnerShift;
                    var r392_curveLeftTop = Math.min(r392_curveLeftBot, r1_mix(r313_Width, r313_RightSB, 1.5) - r313_OX - r386_stroke * 1.375 + r386_topArcInnerShift);
                    var r392_adaBot = r313_ArchDepthAOf(r313_ArchDepth * 0.9);
                    var r392_adbBot = r313_ArchDepthBOf(r313_ArchDepth * 0.9);
                    var r392_adaTop = r313_ArchDepthAOf(r313_ArchDepth * 0.9 - (r392_curveLeftBot - r392_curveLeftTop));
                    var r392_adbTop = r313_ArchDepthBOf(r313_ArchDepth * 0.9 - (r392_curveLeftBot - r392_curveLeftTop));
                    var r392_xTopArcRight = r1_mix(r313_SB, r313_RightSB, r313_BArcMix) - r313_OX * 2 + r386_topArcShift;
                    var r392_yTopArcRight = r313_YSmoothMidR(r386_top, r392_bowl - r386_stroke, r392_adaTop, r392_adbTop);
                    var r392_xBotArcRight = r313_RightSB - r313_OX * 2;
                    var r392_yBotArcRight = r313_YSmoothMidR(r392_bowl, 0, r392_adaBot, r392_adbBot);
                    var r392_fine = r386_stroke * r313_CThin;
                    r392_currentGlyph.include(r385_sink(r313_widths.lhs(r392_fine), r313_flat(r313_SB + r385_offset - r313_O, r392_bowl - r392_fine + r385_offset, r313_heading(r313_Rightward)), r313_curl(r313_Arch["adjust-x"].bot(r392_curveLeftTop, new r313_xn$NamedParameterPair$2Lrc9b("sw", r386_stroke)), r392_bowl - r392_fine + r385_offset), r313_archv(), r313_g4(r392_xTopArcRight - r385_offset, r392_yTopArcRight, r313_widths.lhs(r386_stroke)), r313_Arch.lhs(r386_top - r385_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r386_stroke)), r313_flat(r313_SB + r385_offset, r386_top - r313_ArchDepthAClamped(r386_top, 0, r392_adaTop, r392_adbBot), r313_widths.lhs.heading(r386_stroke, r313_Downward)), r313_curl(r313_SB + r385_offset, 0 + r386_rise + r385_offset, r313_heading(r313_Downward))));
                    r392_currentGlyph.include(r385_sink(r313_widths.rhs(r392_fine), r313_flat(r313_SB + r385_offset - r313_O, r392_bowl - r386_stroke + r392_fine - r385_offset, r313_heading(r313_Rightward)), r313_curl(r313_Arch["adjust-x"].top(r392_curveLeftBot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r386_stroke)), r392_bowl - r386_stroke + r392_fine - r385_offset), r313_archv(), r313_g4(r392_xBotArcRight - r385_offset, r392_yBotArcRight, r313_widths.rhs(r386_stroke)), r386_rise ? [r313_Arch.rhs(0 + r385_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r386_stroke), new r313_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r313_g4(r313_SB + r385_offset, 0 + r386_rise + r385_offset, r313_widths.rhs(r386_stroke))] : [r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r392_curveLeftBot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r386_stroke)), 0 + r385_offset), r313_curl(r313_SB + r385_offset - r313_O, 0 + r385_offset, r313_heading(r313_Leftward))]));
                    return {
                        "bowl": r392_bowl
                    };
                });
            };
        };
        var r313_RoundedTopCyrVeShape = function () {
            var _r402_t5;
            var _r402_t6 = arguments;
            var r402_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r402_t6, 0);
            var _r402_t0 = [];
            var _r402_t1 = 0;
            while (_r402_t1 < r402_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r402_xn$flexarguments$2Lrc7uIe5[_r402_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r402_t0.push(r402_xn$flexarguments$2Lrc7uIe5[_r402_t1]);
                _r402_t1 = _r402_t1 + 1;
            }
            var _r402_t2 = r402_xn$flexarguments$2Lrc7uIe5;
            var _r402_t3 = _r402_t2.length;
            var _r402_t4 = 0;
            while (_r402_t4 < _r402_t3) {
                _r402_t1 = _r402_t2[_r402_t4];
                if (_r402_t1 && _r402_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r402_t1.left === "top") r402_top = _r402_t1.right;
                if (_r402_t1 && _r402_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r402_t1.left === "stroke") r402_stroke = _r402_t1.right;
                if (_r402_t1 && _r402_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r402_t1.left === "barPos") r402_barPos = _r402_t1.right;
                if (_r402_t1 && _r402_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r402_t1.left === "topArcShift") r402_topArcShift = _r402_t1.right;
                if (_r402_t1 && _r402_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r402_t1.left === "topArcInnerShift") r402_topArcInnerShift = _r402_t1.right;
                if (_r402_t1 && _r402_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r402_t1.left === "rise") r402_rise = _r402_t1.right;
                if (_r402_t1 && _r402_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r402_t1.left === "serifTop") r402_serifTop = _r402_t1.right;
                if (_r402_t1 && _r402_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r402_t1.left === "serifBot") r402_serifBot = _r402_t1.right;
                _r402_t4 = _r402_t4 + 1;
            }
            var r402_top = r1_fallback(r402_top, _r402_t0[0]);
            var r402_stroke = r1_fallback(r402_stroke, _r402_t0[1], r313_AdviceStroke2(2, 3, r402_top - 0));
            var r402_barPos = r1_fallback(r402_barPos, _r402_t0[2], r313_BBarPos);
            var r402_topArcShift = r1_fallback(r402_topArcShift, _r402_t0[3], 0);
            var r402_topArcInnerShift = r1_fallback(r402_topArcInnerShift, _r402_t0[4], 0);
            var r402_rise = r1_fallback(r402_rise, _r402_t0[5], 0);
            var r402_serifTop = r1_fallback(r402_serifTop, _r402_t0[6], false);
            var r402_serifBot = r1_fallback(r402_serifBot, _r402_t0[7], false);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r407_currentGlyph) {
                var _r407_t0, _r407_t1;
                var r407_dims = r407_currentGlyph.include(r313_RoundedTopCyrVeArcsT(r313_dispiro, 0)(r402_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r402_stroke), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r402_barPos), new r313_xn$NamedParameterPair$2Lrc9b("topArcShift", r402_topArcShift), new r313_xn$NamedParameterPair$2Lrc9b("topArcInnerShift", r402_topArcInnerShift), new r313_xn$NamedParameterPair$2Lrc9b("rise", r402_rise)));
                r407_currentGlyph.setBaseAnchor("strike", r313_Middle, r407_dims.bowl - 0.5 * r402_stroke);
                var r407_sf = r313_SerifFrame.fromDf(r313_DivFrame(1), r402_top, 0);
                if (r402_serifBot && !r402_rise) r407_currentGlyph.include(r407_sf.lb.outer);
                return void 0;
            });
        };
        var r313_RoundedTopCyrVeShapeMask = function () {
            var _r417_t5;
            var _r417_t6 = arguments;
            var r417_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r417_t6, 0);
            var _r417_t0 = [];
            var _r417_t1 = 0;
            while (_r417_t1 < r417_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r417_xn$flexarguments$2Lrc7uIe5[_r417_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r417_t0.push(r417_xn$flexarguments$2Lrc7uIe5[_r417_t1]);
                _r417_t1 = _r417_t1 + 1;
            }
            var _r417_t2 = r417_xn$flexarguments$2Lrc7uIe5;
            var _r417_t3 = _r417_t2.length;
            var _r417_t4 = 0;
            while (_r417_t4 < _r417_t3) {
                _r417_t1 = _r417_t2[_r417_t4];
                if (_r417_t1 && _r417_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r417_t1.left === "top") r417_top = _r417_t1.right;
                if (_r417_t1 && _r417_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r417_t1.left === "stroke") r417_stroke = _r417_t1.right;
                if (_r417_t1 && _r417_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r417_t1.left === "barPos") r417_barPos = _r417_t1.right;
                if (_r417_t1 && _r417_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r417_t1.left === "topArcShift") r417_topArcShift = _r417_t1.right;
                if (_r417_t1 && _r417_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r417_t1.left === "topArcInnerShift") r417_topArcInnerShift = _r417_t1.right;
                if (_r417_t1 && _r417_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r417_t1.left === "rise") r417_rise = _r417_t1.right;
                _r417_t4 = _r417_t4 + 1;
            }
            var r417_top = r1_fallback(r417_top, _r417_t0[0]);
            var r417_stroke = r1_fallback(r417_stroke, _r417_t0[1], r313_AdviceStroke2(2, 3, r417_top - 0));
            var r417_barPos = r1_fallback(r417_barPos, _r417_t0[2], r313_BBarPos);
            var r417_topArcShift = r1_fallback(r417_topArcShift, _r417_t0[3], 0);
            var r417_topArcInnerShift = r1_fallback(r417_topArcInnerShift, _r417_t0[4], 0);
            var r417_rise = r1_fallback(r417_rise, _r417_t0[5], 0);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r422_currentGlyph) {
                var _r422_t0, _r422_t1;
                r422_currentGlyph.include(r313_RoundedTopCyrVeArcsT(r313_xn$spirooutline$1aao, 1)(r417_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r417_stroke), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r417_barPos), new r313_xn$NamedParameterPair$2Lrc9b("topArcShift", r417_topArcShift), new r313_xn$NamedParameterPair$2Lrc9b("topArcInnerShift", r417_topArcInnerShift), new r313_xn$NamedParameterPair$2Lrc9b("rise", r417_rise)));
                return void 0;
            });
        };
        var r313_RoundedTopShape = function (r429_top, r429_sw, r429_st, r429_sb) {
            var _r429_t0, _r429_t1;
            return r313_RoundedTopCyrVeShape(r429_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r429_sw), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r429_top > r313_XH ? r313_TallCyrVeBarPos : r313_BBarPos), new r313_xn$NamedParameterPair$2Lrc9b("serifTop", r429_st), new r313_xn$NamedParameterPair$2Lrc9b("serifBot", r429_sb));
        };
        var r313_RoundedTopShapeInterrupted = function (r434_top, r434_sw, r434_st, r434_sb) {
            var _r434_t0, _r434_t1;
            return r313_difference(r313_RoundedTopShape(r434_top, r434_sw, r434_st, r434_sb), r313_InterruptShape(r434_top > r313_XH ? r313_TallCyrVeBarPos : r313_BBarPos)(r434_top, r434_sw, r434_st, r434_sb));
        };
        var r313_RoundedTopMask = function (r435_top, r435_sw) {
            var _r435_t0, _r435_t1;
            return r313_RoundedTopCyrVeShapeMask(r435_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r435_sw), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r435_top > r313_XH ? r313_TallCyrVeBarPos : r313_BBarPos));
        };
        var r313_RoundedTopShapeBGR = function (r438_top, r438_sw, r438_st, r438_sb) {
            var _r438_t0, _r438_t1;
            return r313_RoundedTopCyrVeShape(r438_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r438_sw), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r438_top > r313_XH ? r313_TallCyrVeBarPos : r313_BBarPos), new r313_xn$NamedParameterPair$2Lrc9b("rise", r313_DToothlessRise), new r313_xn$NamedParameterPair$2Lrc9b("serifTop", r438_st), new r313_xn$NamedParameterPair$2Lrc9b("serifBot", r438_sb));
        };
        var r313_RoundedTopShapeBGRInterrupted = function (r444_top, r444_sw, r444_st, r444_sb) {
            var _r444_t0, _r444_t1;
            return r313_difference(r313_RoundedTopShapeBGR(r444_top, r444_sw, r444_st, r444_sb), r313_InterruptShape(r444_top > r313_XH ? r313_TallCyrVeBarPos : r313_BBarPos)(r444_top, r444_sw, r444_st, r444_sb));
        };
        var r313_RoundedTopBGRMask = function (r445_top, r445_sw) {
            var _r445_t0, _r445_t1;
            return r313_RoundedTopCyrVeShapeMask(r445_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r445_sw), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r445_top > r313_XH ? r313_TallCyrVeBarPos : r313_BBarPos), new r313_xn$NamedParameterPair$2Lrc9b("rise", r313_DToothlessRise));
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r451_currentGlyph) {
            var _r451_t0, _r451_t1;
            r451_currentGlyph.include(r313_MarkSet.e());
            var r451_stroke = r313_AdviceStroke2(2, 3, r313_XH - 0);
            r313_xn$GlyphSaveSink$2Lrc4b.save("smcpB.roundedTopSerifless", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r451_currentGlyph, r313_RoundedTopShape(r313_XH, r451_stroke, false, false)));
            r313_xn$GlyphSaveSink$2Lrc4b.save("smcpB.roundedTopUnilateralBottomSerifed", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r451_currentGlyph, r313_RoundedTopShape(r313_XH, r451_stroke, false, true)));
            r313_xn$GlyphSaveSink$2Lrc4b.save("smcpB.roundedTopInterruptedSerifless", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r451_currentGlyph, r313_RoundedTopShapeInterrupted(r313_XH, r451_stroke, false, false)));
            r313_xn$GlyphSaveSink$2Lrc4b.save("smcpB.roundedTopInterruptedUnilateralBottomSerifed", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r451_currentGlyph, r313_RoundedTopShapeInterrupted(r313_XH, r451_stroke, false, true)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r463_currentGlyph) {
            var _r463_t0, _r463_t1;
            r463_currentGlyph.include(r313_MarkSet.b());
            var r463_stroke = r313_AdviceStroke2(2, 3, r313_Ascender - 0);
            r313_xn$GlyphSaveSink$2Lrc4b.save("smcpB.roundedTopTall", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r463_currentGlyph, r313_RoundedTopShapeBGR(r313_Ascender, r463_stroke, false, false)));
            r313_xn$GlyphSaveSink$2Lrc4b.save("smcpB.roundedTopInterruptedTall", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r463_currentGlyph, r313_RoundedTopShapeBGRInterrupted(r313_Ascender, r463_stroke, false, false)));
            return void 0;
        }));
        var r313_CursiveCyrVeArcsT = function (r469_sink, r469_offset) {
            var _r469_t0, _r469_t1;
            return function () {
                var _r470_t5;
                var _r470_t6 = arguments;
                var r470_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r470_t6, 0);
                var _r470_t0 = [];
                var _r470_t1 = 0;
                while (_r470_t1 < r470_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r470_xn$flexarguments$2Lrc7uIe5[_r470_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r470_t0.push(r470_xn$flexarguments$2Lrc7uIe5[_r470_t1]);
                    _r470_t1 = _r470_t1 + 1;
                }
                var _r470_t2 = r470_xn$flexarguments$2Lrc7uIe5;
                var _r470_t3 = _r470_t2.length;
                var _r470_t4 = 0;
                while (_r470_t4 < _r470_t3) {
                    _r470_t1 = _r470_t2[_r470_t4];
                    if (_r470_t1 && _r470_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r470_t1.left === "top") r470_top = _r470_t1.right;
                    if (_r470_t1 && _r470_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r470_t1.left === "stroke") r470_stroke = _r470_t1.right;
                    if (_r470_t1 && _r470_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r470_t1.left === "barPos") r470_barPos = _r470_t1.right;
                    if (_r470_t1 && _r470_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r470_t1.left === "topArcShift") r470_topArcShift = _r470_t1.right;
                    if (_r470_t1 && _r470_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r470_t1.left === "topArcInnerShift") r470_topArcInnerShift = _r470_t1.right;
                    _r470_t4 = _r470_t4 + 1;
                }
                var r470_top = r1_fallback(r470_top, _r470_t0[0]);
                var r470_stroke = r1_fallback(r470_stroke, _r470_t0[1]);
                var r470_barPos = r1_fallback(r470_barPos, _r470_t0[2]);
                var r470_topArcShift = r1_fallback(r470_topArcShift, _r470_t0[3]);
                var r470_topArcInnerShift = r1_fallback(r470_topArcInnerShift, _r470_t0[4]);
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r476_currentGlyph) {
                    var _r476_t0, _r476_t1;
                    var r476_bowl = r1_mix(r470_stroke, r470_top, r470_barPos);
                    var r476_mockBowlDepth = r313_BowlXDepth(r470_top, r476_bowl - r470_stroke, r313_SB, r313_RightSB, r470_stroke);
                    var r476_curveLeftBot = r1_mix(r313_Width, r313_RightSB, 1.5) - r476_mockBowlDepth + r470_topArcInnerShift;
                    var r476_curveLeftTop = Math.min(r476_curveLeftBot, r1_mix(r313_Width, r313_RightSB, 1.5) - r313_OX - r470_stroke * 1.375 + r470_topArcInnerShift);
                    var r476_adaBot = r313_ArchDepthAOf(r313_ArchDepth * 0.9);
                    var r476_adbBot = r313_ArchDepthBOf(r313_ArchDepth * 0.9);
                    var r476_adaTop = r313_ArchDepthAOf(r313_ArchDepth * 0.9 - (r476_curveLeftBot - r476_curveLeftTop));
                    var r476_adbTop = r313_ArchDepthBOf(r313_ArchDepth * 0.9 - (r476_curveLeftBot - r476_curveLeftTop));
                    var r476_xTopArcRight = r1_mix(r313_SB, r313_RightSB, r313_BArcMix) - r313_OX * 2 + r470_topArcShift;
                    var r476_yTopArcRight = r313_YSmoothMidR(r470_top, r476_bowl - r470_stroke, r476_adaTop, r476_adbTop);
                    var r476_xBotArcRight = r313_RightSB - r313_OX * 2;
                    var r476_yBotArcRight = r313_YSmoothMidR(r476_bowl, 0, r476_adaBot, r476_adbBot);
                    var r476_fine = r470_stroke * r313_CThin;
                    r476_currentGlyph.include(r469_sink(r313_widths.lhs(r476_fine), r313_flat(r313_SB + r469_offset - r313_O, r476_bowl - r476_fine + r469_offset, r313_heading(r313_Rightward)), r313_curl(r313_Arch["adjust-x"].bot(r476_curveLeftTop, new r313_xn$NamedParameterPair$2Lrc9b("sw", r470_stroke)), r476_bowl - r476_fine + r469_offset), r313_archv(), r313_g4(r476_xTopArcRight - r469_offset, r476_yTopArcRight, r313_widths.lhs(r470_stroke)), r313_Arch.lhs(r470_top - r469_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r470_stroke)), r313_flatside.ld(r313_SB + r469_offset, 0, r470_top, r476_adaTop, r476_adbBot, 0, r313_widths.lhs.heading(r470_stroke, r313_Downward)), r313_Arch.lhs(0 + r469_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r470_stroke)), r313_g4(r476_xBotArcRight - r469_offset, r476_yBotArcRight, r313_widths.lhs(r470_stroke)), r313_arcvh(), r313_flat(r313_Arch["adjust-x"].top(r476_curveLeftBot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r470_stroke)), r476_bowl - r470_stroke + r476_fine - r469_offset, r313_widths.lhs(r476_fine)), r313_curl(r313_SB + r469_offset - r313_O, r476_bowl - r470_stroke + r476_fine - r469_offset, r313_heading(r313_Leftward))));
                    return {
                        "bowl": r476_bowl
                    };
                });
            };
        };
        var r313_CursiveCyrVeShape = function () {
            var _r483_t5;
            var _r483_t6 = arguments;
            var r483_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r483_t6, 0);
            var _r483_t0 = [];
            var _r483_t1 = 0;
            while (_r483_t1 < r483_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r483_xn$flexarguments$2Lrc7uIe5[_r483_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r483_t0.push(r483_xn$flexarguments$2Lrc7uIe5[_r483_t1]);
                _r483_t1 = _r483_t1 + 1;
            }
            var _r483_t2 = r483_xn$flexarguments$2Lrc7uIe5;
            var _r483_t3 = _r483_t2.length;
            var _r483_t4 = 0;
            while (_r483_t4 < _r483_t3) {
                _r483_t1 = _r483_t2[_r483_t4];
                if (_r483_t1 && _r483_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r483_t1.left === "top") r483_top = _r483_t1.right;
                if (_r483_t1 && _r483_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r483_t1.left === "stroke") r483_stroke = _r483_t1.right;
                if (_r483_t1 && _r483_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r483_t1.left === "barPos") r483_barPos = _r483_t1.right;
                if (_r483_t1 && _r483_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r483_t1.left === "topArcShift") r483_topArcShift = _r483_t1.right;
                if (_r483_t1 && _r483_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r483_t1.left === "topArcInnerShift") r483_topArcInnerShift = _r483_t1.right;
                if (_r483_t1 && _r483_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r483_t1.left === "serifTop") r483_serifTop = _r483_t1.right;
                if (_r483_t1 && _r483_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r483_t1.left === "serifBot") r483_serifBot = _r483_t1.right;
                _r483_t4 = _r483_t4 + 1;
            }
            var r483_top = r1_fallback(r483_top, _r483_t0[0]);
            var r483_stroke = r1_fallback(r483_stroke, _r483_t0[1], r313_AdviceStroke2(2, 3, r483_top - 0));
            var r483_barPos = r1_fallback(r483_barPos, _r483_t0[2], r313_BBarPos);
            var r483_topArcShift = r1_fallback(r483_topArcShift, _r483_t0[3], 0);
            var r483_topArcInnerShift = r1_fallback(r483_topArcInnerShift, _r483_t0[4], 0);
            var r483_serifTop = r1_fallback(r483_serifTop, _r483_t0[5], false);
            var r483_serifBot = r1_fallback(r483_serifBot, _r483_t0[6], false);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r488_currentGlyph) {
                var _r488_t0, _r488_t1;
                var r488_dims = r488_currentGlyph.include(r313_CursiveCyrVeArcsT(r313_dispiro, 0)(r483_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r483_stroke), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r483_barPos), new r313_xn$NamedParameterPair$2Lrc9b("topArcShift", r483_topArcShift), new r313_xn$NamedParameterPair$2Lrc9b("topArcInnerShift", r483_topArcInnerShift)));
                r488_currentGlyph.setBaseAnchor("strike", r313_Middle, r488_dims.bowl - 0.5 * r483_stroke);
                return void 0;
            });
        };
        var r313_CursiveCyrVeShapeMask = function () {
            var _r496_t5;
            var _r496_t6 = arguments;
            var r496_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r496_t6, 0);
            var _r496_t0 = [];
            var _r496_t1 = 0;
            while (_r496_t1 < r496_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r496_xn$flexarguments$2Lrc7uIe5[_r496_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r496_t0.push(r496_xn$flexarguments$2Lrc7uIe5[_r496_t1]);
                _r496_t1 = _r496_t1 + 1;
            }
            var _r496_t2 = r496_xn$flexarguments$2Lrc7uIe5;
            var _r496_t3 = _r496_t2.length;
            var _r496_t4 = 0;
            while (_r496_t4 < _r496_t3) {
                _r496_t1 = _r496_t2[_r496_t4];
                if (_r496_t1 && _r496_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r496_t1.left === "top") r496_top = _r496_t1.right;
                if (_r496_t1 && _r496_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r496_t1.left === "stroke") r496_stroke = _r496_t1.right;
                if (_r496_t1 && _r496_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r496_t1.left === "barPos") r496_barPos = _r496_t1.right;
                if (_r496_t1 && _r496_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r496_t1.left === "topArcShift") r496_topArcShift = _r496_t1.right;
                if (_r496_t1 && _r496_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r496_t1.left === "topArcInnerShift") r496_topArcInnerShift = _r496_t1.right;
                _r496_t4 = _r496_t4 + 1;
            }
            var r496_top = r1_fallback(r496_top, _r496_t0[0]);
            var r496_stroke = r1_fallback(r496_stroke, _r496_t0[1], r313_AdviceStroke2(2, 3, r496_top - 0));
            var r496_barPos = r1_fallback(r496_barPos, _r496_t0[2], r313_BBarPos);
            var r496_topArcShift = r1_fallback(r496_topArcShift, _r496_t0[3], 0);
            var r496_topArcInnerShift = r1_fallback(r496_topArcInnerShift, _r496_t0[4], 0);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r501_currentGlyph) {
                var _r501_t0, _r501_t1;
                r501_currentGlyph.include(r313_CursiveCyrVeArcsT(r313_xn$spirooutline$1aao, 1)(r496_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r496_stroke), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r496_barPos), new r313_xn$NamedParameterPair$2Lrc9b("topArcShift", r496_topArcShift), new r313_xn$NamedParameterPair$2Lrc9b("topArcInnerShift", r496_topArcInnerShift)));
                return void 0;
            });
        };
        var r313_CursiveShape = function (r507_top, r507_sw, r507_st, r507_sb) {
            var _r507_t0, _r507_t1;
            return r313_CursiveCyrVeShape(r507_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r507_sw), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r507_top > r313_XH ? r313_TallCyrVeBarPos : r313_BBarPos), new r313_xn$NamedParameterPair$2Lrc9b("serifTop", r507_st), new r313_xn$NamedParameterPair$2Lrc9b("serifBot", r507_sb));
        };
        var r313_CursiveShapeInterrupted = function (r512_top, r512_sw, r512_st, r512_sb) {
            var _r512_t0, _r512_t1;
            return r313_difference(r313_CursiveShape(r512_top, r512_sw, r512_st, r512_sb), r313_InterruptShape(r512_top > r313_XH ? r313_TallCyrVeBarPos : r313_BBarPos)(r512_top, r512_sw, r512_st, r512_sb));
        };
        var r313_CursiveMask = function (r513_top, r513_sw) {
            var _r513_t0, _r513_t1;
            return r313_CursiveCyrVeShapeMask(r513_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r513_sw), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r513_top > r313_XH ? r313_TallCyrVeBarPos : r313_BBarPos));
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r518_currentGlyph) {
            var _r518_t0, _r518_t1;
            r518_currentGlyph.include(r313_MarkSet.e());
            var r518_stroke = r313_AdviceStroke2(2, 3, r313_XH - 0);
            r313_xn$GlyphSaveSink$2Lrc4b.save("smcpB.cursive", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r518_currentGlyph, r313_CursiveShape(r313_XH, r518_stroke, false, false)));
            r313_xn$GlyphSaveSink$2Lrc4b.save("smcpB.cursiveInterrupted", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r518_currentGlyph, r313_CursiveShapeInterrupted(r313_XH, r518_stroke, false, false)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r526_currentGlyph) {
            var _r526_t0, _r526_t1;
            r526_currentGlyph.include(r313_MarkSet.b());
            var r526_stroke = r313_AdviceStroke2(2, 3, r313_Ascender - 0);
            r313_xn$GlyphSaveSink$2Lrc4b.save("smcpB.cursiveTall", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r526_currentGlyph, r313_CursiveShape(r313_Ascender, r526_stroke, false, false)));
            r313_xn$GlyphSaveSink$2Lrc4b.save("smcpB.cursiveInterruptedTall", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r526_currentGlyph, r313_CursiveShapeInterrupted(r313_Ascender, r526_stroke, false, false)));
            return void 0;
        }));
        var r313_BOverlayBar = function (r532_top, r532_bp) {
            var _r532_t0, _r532_t1;
            var r532_stroke = r313_AdviceStroke2(2, 3, r532_top - 0);
            var r532_bowl = r1_mix(r532_stroke, r532_top, r532_bp);
            return r313_dispiro(r313_widths.rhs(r532_stroke), r313_flat(r1_mix(0, r313_SB, 0.3), r532_bowl), r313_curl(r1_mix(r313_Width, r313_RightSB, 0.3), r532_bowl));
        };
        var r313_BahtBar = function (r533_sw) {
            var _r533_t0, _r533_t1;
            var r533_asc = r313_CAP + (r1_mix(r313_XH, r313_Ascender, 0.5) - r313_XH);
            var r533_desc = r1_mix(0, r313_Descender, 0.5);
            var r533_xMid = r1_mix(r313_SB, r313_RightSB, 0.48);
            return r313_VBar.m(r533_xMid, r533_asc, r533_desc, r533_sw);
        };
        var r313_BitcoinBar = function (r534_sw) {
            var _r534_t0, _r534_t1;
            var r534_asc = r313_CAP + (r1_mix(r313_XH, r313_Ascender, 0.5) - r313_XH);
            var r534_desc = r1_mix(0, r313_Descender, 0.5);
            var r534_xMid = r1_mix(r313_SB, r313_RightSB, 0.48);
            var r534_gap = Math.max(r313_AdviceStroke(4), (r313_RightSB - r313_SB) / 6);
            return r313_union(r313_VBar.m(r534_xMid - r534_gap / 2 - r313_HSwToV(0.5 * r534_sw), r534_asc, r534_desc, r534_sw), r313_VBar.m(r534_xMid + r534_gap / 2 + r313_HSwToV(0.5 * r534_sw), r534_asc, r534_desc, r534_sw));
        };
        var r313_BConfig = r1_SuffixCfg.weave({
            "standard": [r313_StdShape, r313_StdMask, r313_BBarPos, false, false],
            "standardInterrupted": [r313_StdShapeInterrupted, r313_StdMask, r313_BBarPos, true, false],
            "moreAsymmetric": [r313_AsymmetricShape, r313_AsymmetricMask, r313_AsymmetricBBarPos, false, true],
            "moreAsymmetricInterrupted": [r313_AsymmetricShapeInterrupted, r313_AsymmetricMask, r313_AsymmetricBBarPos, true, true]
        }, {
            "serifless": [false, false],
            "unilateralSerifed": [true, false],
            "bilateralSerifed": [true, true]
        });
        var _r313_t10 = Object.entries(r313_BConfig)[Symbol.iterator]();
        var _r313_t11 = void 0;
        while (!(_r313_t11 = _r313_t10.next()).done) {
            _r313_t12 = _r313_t11.value;
            r313_suffix = _r313_t12[0];
            r313_body = _r313_t12[1][0][0];
            r313_mask = _r313_t12[1][0][1];
            r313_bp = _r313_t12[1][0][2];
            r313_fGap = _r313_t12[1][0][3];
            r313_fAsymmetric = _r313_t12[1][0][4];
            _r313_t12[1][0];
            r313_ts = _r313_t12[1][1][0];
            r313_bs = _r313_t12[1][1][1];
            _r313_t12[1][1];
            _r313_t12[1];
            (function () {
                var r537_fMotion = r313_ts && !r313_bs;
                var r537_swCap = r313_AdviceStroke2(2, 3, r313_CAP - 0);
                var r537_swXH = r313_AdviceStroke2(2, 3, r313_XH - 0);
                var r537_swCurrency = r313_AdviceStroke2(3.5, 3, r313_CAP - 0);
                r313_xn$GlyphSaveSink$2Lrc4b.save("B." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r540_currentGlyph) {
                    var _r540_t0, _r540_t1;
                    r540_currentGlyph.include(r313_MarkSet.capital());
                    r540_currentGlyph.include(r313_body(r313_CAP, r537_swCap, r313_ts, r313_bs));
                    return void 0;
                }));
                if (!r537_fMotion) r313_xn$GlyphSaveSink$2Lrc4b.save("BHookLeft." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r545_currentGlyph) {
                    var _r545_t0, _r545_t1;
                    r545_currentGlyph.include(r313_xn$referglyph$1aao("B." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r545_currentGlyph.ejectTagged("serifLT");
                    r545_currentGlyph.include(r313_LeftHook(r313_SB, r313_CAP));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("BStroke." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r551_currentGlyph) {
                    var _r551_t0, _r551_t1;
                    r551_currentGlyph.include(r313_xn$referglyph$1aao("B." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r551_currentGlyph.include(r313_LetterBarOverlay.l.in(r313_SB, r537_swCap, r1_mix(r537_swCap, r313_CAP, r313_bp) - r537_swCap, new r313_xn$NamedParameterPair$2Lrc9b("space", [0, r313_RightSB - r313_HSwToV(r537_swCap)])));
                    return void 0;
                }));
                if (!r313_fGap) r313_xn$GlyphSaveSink$2Lrc4b.save("BBar." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r557_currentGlyph) {
                    var _r557_t0, _r557_t1;
                    r557_currentGlyph.include(r313_xn$referglyph$1aao("B." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r557_currentGlyph.include(r313_BOverlayBar(r313_CAP, r313_bp));
                    return void 0;
                }));
                if (!r313_fAsymmetric) {
                    r313_xn$GlyphSaveSink$2Lrc4b.save("smcpB." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r562_currentGlyph) {
                        var _r562_t0, _r562_t1;
                        r562_currentGlyph.include(r313_MarkSet.e());
                        r562_currentGlyph.include(r313_body(r313_XH, r537_swXH, r313_ts, r313_bs));
                        return void 0;
                    }));
                    if (!r313_fGap) r313_xn$GlyphSaveSink$2Lrc4b.save("smcpBBar." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r567_currentGlyph) {
                        var _r567_t0, _r567_t1;
                        r567_currentGlyph.include(r313_xn$referglyph$1aao("smcpB." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                        r567_currentGlyph.include(r313_BOverlayBar(r313_XH, r313_bp));
                        return void 0;
                    }));
                }
                r313_xn$GlyphSaveSink$2Lrc4b.save("currency/baht." + r313_suffix, null, r313_union(r313_body(r313_CAP, r537_swCurrency, r313_ts, r313_bs), r313_intersection(r313_BahtBar(r313_AdviceStroke(5)), r313_mask(r313_CAP, r537_swCap)), r313_difference(r313_BahtBar(r313_AdviceStroke(2)), r313_mask(r313_CAP, r537_swCap))));
                r313_xn$GlyphSaveSink$2Lrc4b.save("currency/bitcoin." + r313_suffix, null, r313_union(r313_body(r313_CAP, r537_swCurrency, r313_ts, r313_bs), r313_difference(r313_BitcoinBar(r313_AdviceStroke(5)), r313_mask(r313_CAP, r537_swCap))));
                return !r313_bs ? r313_xn$GlyphSaveSink$2Lrc4b.save("latn/Beta." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r574_currentGlyph) {
                    var r574_sf, _r574_t0, _r574_t1;
                    r574_currentGlyph.include(r313_MarkSet.capDesc());
                    r574_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r313_SB));
                    r574_currentGlyph.include(r313_xn$referglyph$1aao("B." + r313_suffix));
                    r574_currentGlyph.ejectTagged("serifLB");
                    r574_currentGlyph.include(r313_VBar.l(r313_SB, r313_Descender, 0));
                    if (r313_SLAB) {
                        r574_sf = r313_SerifFrame.fromDf(r313_DivFrame(1), r313_CAP, r313_Descender);
                        r574_currentGlyph.include(r574_sf.lb.fullSide);
                    }
                    return void 0;
                })) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("B", "B");
        r313_xn$linkreducedvariant$5sIl8("B/sansSerif", "B", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("BHookLeft", 385);
        r313_xn$selectvariant$7Hrq("BStroke", 579, new r313_xn$NamedParameterPair$2Lrc9b("follow", "B"));
        r313_xn$selectvariant$7Hrq("BBar");
        r313_xn$selectvariant$7Hrq("smcpB", 665);
        r313_xn$selectvariant$7Hrq("smcpBBar", 7427);
        r313_xn$selectvariant$7Hrq("currency/baht", 3647, new r313_xn$NamedParameterPair$2Lrc9b("follow", "B"));
        r313_xn$selectvariant$7Hrq("currency/bitcoin", 8383, new r313_xn$NamedParameterPair$2Lrc9b("follow", "B"));
        r313_alias("grek/Beta", 914, "B");
        r313_xn$aliasreducedvariant$1aao8("grek/Beta/sansSerif", "grek/Beta", "B/sansSerif", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("latn/Beta", 42932);
        r313_alias("cyrl/Ve", 1042, "B");
        r313_xn$selectvariant$7Hrq("cyrl/ve", 1074, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpB"));
        r313_xn$selectvariant$7Hrq("cyrl/ve.BGR", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpB"));
        var _r313_t13 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t13.BBS;
        var r313_BBD = _r313_t13.BBD;
        r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/B", 120121, new r313_xn$Capture$2Lrc8.GlyphProc(function (r589_currentGlyph) {
            var _r589_t0, _r589_t1;
            r589_currentGlyph.include(r313_MarkSet.capital());
            r589_currentGlyph.include(r313_difference(r313_union(r313_BShape(r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_BBS)), r313_intersection(r313_BShapeMask(r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_BBS)), r313_union(r313_VBar.r(r313_RightSB - r313_OX * 2 - r313_BBD, 0, r1_mix(0, r313_CAP, r313_BBarPos), r313_BBS), r313_VBar.r(r1_mix(r313_SB, r313_RightSB, r313_BArcMix) - r313_OX * 2 - r313_BBD, r1_mix(0, r313_CAP, r313_BBarPos), r313_CAP, r313_BBS), r313_VBar.l(r313_SB + r313_BBD, 0, r313_CAP, r313_BBS)))), r313_Rect(r313_CAP - r313_BBS, 0 + r313_BBS, r313_SB + r313_HSwToV(r313_BBS), r313_SB + r313_BBD)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/beta.standard", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r596_currentGlyph) {
            var _r596_t0, _r596_t1;
            r596_currentGlyph.include(r313_MarkSet.bp());
            var r596_stroke = r313_AdviceStroke2(2, 3, r313_Ascender - 0);
            r596_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r313_SB, r596_stroke));
            var r596_bowl = r1_mix(r596_stroke, r313_Ascender, r313_TallCyrVeBarPos);
            var r596_mockBowlDepth = r313_BowlXDepth(r313_Ascender, r596_bowl - r596_stroke, r313_SB, r313_RightSB, r596_stroke);
            var r596_curveLeftBot = r1_mix(r313_Width, r313_RightSB, 1.5) - r596_mockBowlDepth;
            var r596_curveLeftTop = Math.min(r596_curveLeftBot, r1_mix(r313_Width, r313_RightSB, 1.5) - r313_OX - r596_stroke * 1.375);
            var r596_adaBot = r313_ArchDepthAOf(r313_ArchDepth * 0.9);
            var r596_adbBot = r313_ArchDepthBOf(r313_ArchDepth * 0.9);
            var r596_adaTop = r313_ArchDepthAOf(r313_ArchDepth * 0.9 - (r596_curveLeftBot - r596_curveLeftTop));
            var r596_adbTop = r313_ArchDepthBOf(r313_ArchDepth * 0.9 - (r596_curveLeftBot - r596_curveLeftTop));
            var r596_xTopArcRight = r1_mix(r313_SB, r313_RightSB, r313_BArcMix) - r313_OX * 2;
            var r596_yTopArcRight = r313_YSmoothMidR(r313_Ascender, r596_bowl - r596_stroke, r596_adaTop, r596_adbTop);
            var r596_xBotArcRight = r313_RightSB - r313_OX * 2;
            var r596_yBotArcRight = r313_YSmoothMidR(r596_bowl, 0, r596_adaBot, r596_adbBot);
            var r596_fine = r596_stroke * r313_CThin;
            var r596_shoulderFine = r313_ShoulderFine * (r596_stroke / r313_Stroke);
            r596_currentGlyph.include(r313_difference(r313_union(r313_dispiro(r313_widths.lhs(r596_fine), r313_flat(r313_SB - r313_O, r596_bowl - r596_fine, r313_heading(r313_Rightward)), r313_curl(r313_Arch["adjust-x"].bot(r596_curveLeftTop, new r313_xn$NamedParameterPair$2Lrc9b("sw", r596_stroke)), r596_bowl - r596_fine), r313_archv(), r313_g4(r596_xTopArcRight, r596_yTopArcRight, r313_widths.lhs(r596_stroke)), r313_Arch.lhs(r313_Ascender, new r313_xn$NamedParameterPair$2Lrc9b("sw", r596_stroke)), r313_flat(r313_SB, r313_Ascender - r596_adaTop, r313_widths.lhs.heading(r596_stroke, r313_Downward)), r313_curl(r313_SB, r313_Descender, r313_heading(r313_Downward))), r313_dispiro(r313_widths.lhs(r596_shoulderFine), r313_g4.down.start(r313_SB + r313_HSwToV(r596_stroke - r596_shoulderFine), r596_adbBot, r313_heading(r313_Downward)), r313_Arch.lhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r596_stroke), new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r596_shoulderFine)), r313_g4(r596_xBotArcRight, r596_yBotArcRight, r313_widths.lhs(r596_stroke)), r313_arcvh(), r313_flat(r313_Arch["adjust-x"].top(r596_curveLeftBot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r596_stroke)), r596_bowl - r596_stroke + r596_fine, r313_widths.lhs(r596_fine)), r313_curl(r313_SB - r313_O, r596_bowl - r596_stroke + r596_fine, r313_heading(r313_Leftward)))), r313_InterruptShape(r313_TallCyrVeBarPos)(r313_Ascender, r596_stroke)));
            r596_currentGlyph.setBaseAnchor("palatalHookAttach", r1_mix(r313_Arch["adjust-x"].bot(r1_mix(r313_SB + r313_HSwToV(r596_stroke - r596_shoulderFine), r596_xBotArcRight, 0.5), new r313_xn$NamedParameterPair$2Lrc9b("sw", r596_stroke)), r596_xBotArcRight, 0.75), r1_mix(r313_O, r596_yBotArcRight, r313_archv.yFromX(0.75)));
            return void 0;
        }));
        r313_alias("grek/beta.cursive", null, "smcpB.cursiveInterruptedTall");
        r313_alias("grek/betaSymbol", 976, "smcpB.cursiveInterruptedTall");
        r313_xn$selectvariant$7Hrq("grek/beta", 946);
        r313_xn$derivecomposites$7Hrq("latn/beta", 42933, "grek/beta.standard", r313_NeedSlab(r313_SLAB, r313_NeedNotItalic(r313_SerifFrame.fromDf(r313_DivFrame(1), r313_XH, r313_Descender).lb.fullSide)));
        r313_xn$deriveglyphs$7Hrq("latn/betaPalatalHook", 122683, "latn/beta", function (r607_src, r607_gr) {
            var _r607_t0, _r607_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r609_currentGlyph) {
                var _r609_t0, _r609_t1;
                r609_currentGlyph.include(r313_xn$referglyph$1aao(r607_src), r313_AS_BASE, r313_ALSO_METRICS);
                var r609_tinyGap = Math.max(r313_Width / 32, r313_AdviceStroke(24));
                var r609_xMask = Math.max(r313_SB + r313_HSwToV(r313_Stroke) + 2 * r609_tinyGap, r313_SB + r313_HSwToV(r313_HalfStroke) + r313_MidJutSide + r609_tinyGap);
                var r609_attach = r609_currentGlyph.gizmo.unapply(r609_currentGlyph.baseAnchors.palatalHookAttach || r609_currentGlyph.baseAnchors.bottomRight);
                r609_currentGlyph.include(r313_PalatalHook.r(r609_attach.x, 0, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r609_attach.y), new r313_xn$NamedParameterPair$2Lrc9b("maskOut", r313_intersection(r313_MaskBelow(0), r313_MaskLeft(r609_xMask)))));
                return void 0;
            });
        });
        return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/veRounded", 7296, new r313_xn$Capture$2Lrc8.GlyphProc(function (r616_currentGlyph) {
            var _r616_t0, _r616_t1;
            r616_currentGlyph.include(r313_MarkSet.e());
            var r616_fine = r313_AdviceStroke(4);
            var r616_r0 = 0.2 * (r313_RightSB - r313_SB);
            var r616_ry = r616_r0 + 0.25 * r616_fine;
            var r616_rx = r616_r0 + r313_HSwToV(0.25 * r616_fine);
            var r616_cx = r313_RightSB - r616_rx;
            var r616_cyt = r313_XH - 1.375 * r616_ry;
            var r616_cyb = r313_XH - r616_cyt;
            r616_currentGlyph.include(r313_dispiro(r313_g4(r616_cx + r616_rx - r313_OX, r313_YSmoothMidR.cr(r616_cyt, r616_ry), r313_widths.lhs(r616_fine)), r313_Arch.lhs(r616_cyt + r616_ry, new r313_xn$NamedParameterPair$2Lrc9b("sw", r616_fine)), r313_g4(r616_cx - r616_rx + r313_OX, r313_YSmoothMidL.cr(r616_cyt, r616_ry)), r313_Arch.lhs(r616_cyt - r616_ry, new r313_xn$NamedParameterPair$2Lrc9b("sw", r616_fine)), r313_g4(r616_cx + r616_rx - r313_OX, r313_YSmoothMidR.cr(r616_cyt, r616_ry)), r313_Arch.lhs(r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r616_fine)), r313_flatside.ld(r313_SB, 0, r313_XH, r313_SmallArchDepthA, r313_SmallArchDepthB, 0), r313_Arch.lhs(0, new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r616_fine)), r313_g4(r616_cx + r616_rx - r313_OX, r313_YSmoothMidR.cr(r616_cyb, r616_ry), r313_widths.lhs(r616_fine)), r313_Arch.lhs(r616_cyb + r616_ry, new r313_xn$NamedParameterPair$2Lrc9b("sw", r616_fine)), r313_g4(r616_cx - r616_rx + r313_OX, r313_YSmoothMidL.cr(r616_cyb, r616_ry)), r313_Arch.lhs(r616_cyb - r616_ry, new r313_xn$NamedParameterPair$2Lrc9b("sw", r616_fine)), r313_g4(r616_cx + r616_rx - r313_OX, r313_YSmoothMidR.cr(r616_cyb, r616_ry))));
            return void 0;
        }));
    });
    return void 0;
});


