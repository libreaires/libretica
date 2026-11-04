"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var r1_isFinite = isFinite;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t1 = r1_apply = function () {
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Ze", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_bottom, r313_mkCap, r313_mkXH, r313_slabTop, r313_slabBot, _r313_t18, _r313_t19, _r313_t20, _r313_t21, _r313_tag22, _r313_t23, _r313_tag24, _r313_t25, _r313_tag26, _r313_t27, _r313_tag28, _r313_t29, _r313_tag30;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
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
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_SHook = _r313_t1.SHook;
        var r313_SmallArchDepth = _r313_t1.SmallArchDepth;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_OverlayPos = _r313_t1.OverlayPos;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_LongVJut = _r313_t1.LongVJut;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_AccentClearance = _r313_t1.AccentClearance;
        var r313_AccentHeight = _r313_t1.AccentHeight;
        var r313_CThin = _r313_t1.CThin;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_EssRatioUpper = _r313_t1.EssRatioUpper;
        var r313_EssRatioLower = _r313_t1.EssRatioLower;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_ShoulderFine = _r313_t1.ShoulderFine;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_YSmoothMidR = _r313_t1.YSmoothMidR;
        var r313_YSmoothMidL = _r313_t1.YSmoothMidL;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
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
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_Rect = _r313_t5.Rect;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookStart = _r313_t5.HookStart;
        var r313_HookEnd = _r313_t5.HookEnd;
        var r313_Arch = _r313_t5.Arch;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$queryglyph$1aao = _r313_t6["query-glyph"];
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$derivemultipartglyphs$7Hrq65 = _r313_t6["derive-multi-part-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var r313_xn$orthographicitalic$3DrD = _r313_t6["orthographic-italic"];
        var r313_xn$orthographicslab$3DrD = _r313_t6["orthographic-slab"];
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markFine = _r313_t7.markFine;
        var r313_markMiddle = _r313_t7.markMiddle;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_ExtendBelowBaseAnchors = _r313_t8.ExtendBelowBaseAnchors;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateTurnedLetter = _r313_t9.CreateTurnedLetter;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifedArcStart = _r313_t10.SerifedArcStart;
        var r313_SerifedArcEnd = _r313_t10.SerifedArcEnd;
        var r313_SerifFrame = _r313_t10.SerifFrame;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_InwardSlabArcStart = _r313_t11.InwardSlabArcStart;
        var r313_InwardSlabArcEnd = _r313_t11.InwardSlabArcEnd;
        var _r313_t12 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_ArcStartSerif = _r313_t12.ArcStartSerif;
        var r313_ArcEndSerif = _r313_t12.ArcEndSerif;
        var _r313_t13 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_RetroflexHook = _r313_t13.RetroflexHook;
        var r313_CyrDescender = _r313_t13.CyrDescender;
        var _r313_t14 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_UpwardHookShape = _r313_t14.UpwardHookShape;
        var r313_RhoticHookShape = _r313_t14.RhoticHookShape;
        var _r313_t15 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-S"].resolve();
        var r313_AdviceSArchDepth = _r313_t15.AdviceSArchDepth;
        var r313_SNeck = _r313_t15.SNeck;
        var r313_xn$SLABNONE$5sIl = 0;
        var r313_xn$SLABCLASSICAL$5sIl = 1;
        var r313_xn$SLABINWARD$5sIl = 2;
        var r313_xn$FLATCONNECTION$5sIl = 3;
        var r313_xn$OPENHALF$5sIl = 4;
        var r313_xn$OPENVERTICAL$5sIl = 5;
        var r313_xn$CLOSEDCIRCLE$7Hrq = 6;
        var r313_xn$CLOSEDROUND$7Hrq = 7;
        var r313_xn$CLOSEDSTEM$7Hrq = 8;
        var r313_StdBlend = 0.65;
        var r313_VolBlend = 0.56;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r326_t0, _r326_t1;
            return {
                "CyrZe": r313_CyrZe
            };
        });
        var r313_CyrZe = function () {
            var _r328_t5, _r328_t7, _r328_tag8;
            var _r328_t6 = arguments;
            var r328_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r328_t6, 0);
            var _r328_t0 = [];
            var _r328_t1 = 0;
            while (_r328_t1 < r328_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r328_xn$flexarguments$2Lrc7uIe5[_r328_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r328_t0.push(r328_xn$flexarguments$2Lrc7uIe5[_r328_t1]);
                _r328_t1 = _r328_t1 + 1;
            }
            var _r328_t2 = r328_xn$flexarguments$2Lrc7uIe5;
            var _r328_t3 = _r328_t2.length;
            var _r328_t4 = 0;
            while (_r328_t4 < _r328_t3) {
                _r328_t1 = _r328_t2[_r328_t4];
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "slabTop") r328_slabTop = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "slabBot") r328_slabBot = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "top") r328_top = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "bot") r328_bot = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "left") r328_left = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "right") r328_right = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "blend") r328_blend = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "hook") r328_hook = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "hookBot") r328_hookBot = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "stroke") r328_stroke = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "xOverflow") r328_xOverflow = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "xo") r328_xo = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "yo") r328_yo = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "barPos") r328_barPos = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "ada") r328_ada = _r328_t1.right;
                if (_r328_t1 && _r328_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r328_t1.left === "adb") r328_adb = _r328_t1.right;
                _r328_t4 = _r328_t4 + 1;
            }
            var r328_slabTop = r1_fallback(r328_slabTop, _r328_t0[0]);
            var r328_slabBot = r1_fallback(r328_slabBot, _r328_t0[1]);
            var r328_top = r1_fallback(r328_top, _r328_t0[2]);
            var r328_bot = r1_fallback(r328_bot, _r328_t0[3]);
            var r328_left = r1_fallback(r328_left, _r328_t0[4], r313_SB);
            var r328_right = r1_fallback(r328_right, _r328_t0[5], r313_RightSB);
            var r328_blend = r1_fallback(r328_blend, _r328_t0[6], r313_StdBlend);
            var r328_hook = r1_fallback(r328_hook, _r328_t0[7], r313_Hook);
            var r328_hookBot = r1_fallback(r328_hookBot, _r328_t0[8], r328_hook);
            var r328_stroke = r1_fallback(r328_stroke, _r328_t0[9], r313_AdviceStroke2(2, 3, r328_top - r328_bot));
            var r328_xOverflow = r1_fallback(r328_xOverflow, _r328_t0[10], r313_HSwToV(r328_stroke));
            var r328_xo = r1_fallback(r328_xo, _r328_t0[11], r313_OX);
            var r328_yo = r1_fallback(r328_yo, _r328_t0[12], r313_O);
            var r328_barPos = r1_fallback(r328_barPos, _r328_t0[13], r313_OverlayPos);
            var r328_ada = r1_fallback(r328_ada, _r328_t0[14], r313_SmallArchDepthA);
            var r328_adb = r1_fallback(r328_adb, _r328_t0[15], r313_SmallArchDepthB);
            return (function () {
                var r334_Dim, r334_UpperShape, r334_LowerShape, r334_Shape, r334_ShapeMask, r334_CapitalKsiBaseShape, r334_SmallKsiBaseShape, r334_AutoStartSerifL, r334_AutoEndSerifL;
                var r334_exports = {};
                r334_exports.Dim = r334_Dim = function () {
                    var _r342_t0, _r342_t1;
                    var r342_midx = r1_mix(r328_right - (r313_HSwToV(r328_stroke) - r328_xOverflow), r328_left + (r313_HSwToV(r328_stroke) - r328_xOverflow), r328_blend);
                    var r342_midy = r1_mix(r328_bot, r328_top, r328_barPos);
                    var r342_fine = r328_stroke * r313_CThin;
                    var r342_shoulderFine = r313_ShoulderFine * (r328_stroke / r313_Stroke);
                    return {
                        "stroke": r328_stroke,
                        "midx": r342_midx,
                        "midy": r342_midy,
                        "fine": r342_fine,
                        "shoulderFine": r342_shoulderFine
                    };
                };
                var r334_UpperShapeT = function (r343_sink) {
                    var r343___, _r343_t1, _r343_t2, _r343_t3;
                    var _r343_t0 = r334_Dim();
                    var r343_stroke = _r343_t0.stroke;
                    var r343_midx = _r343_t0.midx;
                    var r343_midy = _r343_t0.midy;
                    var r343_fine = _r343_t0.fine;
                    var r343_shoulderFine = _r343_t0.shoulderFine;
                    var r343_middle = r1_mix(r328_left, r328_right, 0.5);
                    return r343_sink((_r343_t1 = r328_slabTop, _r343_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcStart.LtrRhs(r328_left, r328_top, r343_stroke, r328_hook, new r313_xn$NamedParameterPair$2Lrc9b("o", r328_yo)) : _r343_t1 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcStart.LtrRhs(r328_left, r328_top, r343_stroke, r328_hook, new r313_xn$NamedParameterPair$2Lrc9b("o", r328_yo)) : _r343_t1 === r313_xn$FLATCONNECTION$5sIl ? [r313_flat(r328_left + r313_TINY, r328_top, r313_widths.rhs.heading(r343_stroke, r313_Rightward)), r313_curl(r313_Arch["adjust-x"].top(r343_middle, r343_stroke), r328_top, r313_heading(r313_Rightward)), r313_archv()] : _r343_t1 === r313_xn$OPENVERTICAL$5sIl ? r313_flat(r328_right, r328_top, r313_widths.rhs.heading(r343_stroke, r313_Downward)) : _r343_t1 === r313_xn$CLOSEDCIRCLE$7Hrq || _r343_t1 === r313_xn$CLOSEDROUND$7Hrq ? [r313_flat(r328_left + (r328_slabTop === r313_xn$CLOSEDCIRCLE$7Hrq ? r328_xo : 0), r343_midy, r313_widths.rhs(r343_stroke)), r313_curl(r328_left + (r328_slabTop === r313_xn$CLOSEDCIRCLE$7Hrq ? r328_xo : 0), Math.max(r328_top - r328_ada, r343_midy + r313_TINY)), r313_Arch.rhs(r328_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r343_stroke), new r313_xn$NamedParameterPair$2Lrc9b("o", r328_yo))] : _r343_t1 === r313_xn$CLOSEDSTEM$7Hrq ? [r313_flat(r328_left + r313_HSwToV(r343_stroke - r343_shoulderFine), r343_midy, r313_widths.rhs(r343_shoulderFine)), r313_curl(r328_left + r313_HSwToV(r343_stroke - r343_shoulderFine), Math.max(r328_top - r328_ada, r343_midy + r313_TINY)), r313_Arch.rhs(r328_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r343_stroke), new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r343_shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("o", r328_yo))] : (r343___ = _r343_t1, [r313_g4(r328_left - r328_xo, r328_top - r328_hook, r313_widths.rhs(r343_stroke)), r313_HookStart(r328_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r343_stroke), new r313_xn$NamedParameterPair$2Lrc9b("o", r328_yo))])), (r328_slabTop === r313_xn$OPENVERTICAL$5sIl ? r313_curl : r313_g4)(r328_right, r313_YSmoothMidR(r328_top, r343_midy - r343_stroke / 2, r328_ada, r328_adb)), r313_arcvh(), r313_flat(r343_middle, r343_midy + (r343_stroke / 2 - r343_fine), r313_widths.heading(0, r343_fine, r313_Leftward)), r313_curl(r343_midx, r343_midy + (r343_stroke / 2 - r343_fine), r313_heading(r313_Leftward)));
                };
                var r334_LowerShapeT = function (r353_sink) {
                    var r353___, _r353_t1, _r353_t2, _r353_t3;
                    var _r353_t0 = r334_Dim();
                    var r353_stroke = _r353_t0.stroke;
                    var r353_midx = _r353_t0.midx;
                    var r353_midy = _r353_t0.midy;
                    var r353_fine = _r353_t0.fine;
                    var r353_shoulderFine = _r353_t0.shoulderFine;
                    var r353_middle = r1_mix(r328_left, r328_right, 0.5);
                    return r353_sink(r313_flat(r353_midx, r353_midy - (r353_stroke / 2 - r353_fine), r313_widths.heading(0, r353_fine, r313_Rightward)), r313_curl(r353_middle, r353_midy - (r353_stroke / 2 - r353_fine), r313_heading(r313_Rightward)), r313_archv(), r328_slabBot === r313_xn$OPENHALF$5sIl ? r313_g4.down.end(r328_right - r328_xo * 2, r313_YSmoothMidR(r353_midy + r353_stroke / 2, r328_bot, r328_ada, r328_adb), r313_widths.rhs.heading(r353_stroke, r313_Downward)) : (r328_slabBot === r313_xn$OPENVERTICAL$5sIl ? r313_flat : r313_g4)(r328_right - r328_xo * 2, r313_YSmoothMidR(r353_midy + r353_stroke / 2, r328_bot, r328_ada, r328_adb), r313_widths.rhs(r353_stroke)), (_r353_t1 = r328_slabBot, _r353_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcEnd.RtlRhs(r328_left, r328_bot, r353_stroke, r328_hookBot, new r313_xn$NamedParameterPair$2Lrc9b("o", r328_yo)) : _r353_t1 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcEnd.RtlRhs(r328_left, r328_bot, r353_stroke, r328_hookBot, new r313_xn$NamedParameterPair$2Lrc9b("o", r328_yo)) : _r353_t1 === r313_xn$FLATCONNECTION$5sIl ? [r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r353_middle, r353_stroke), r328_bot, r313_heading(r313_Leftward)), r313_curl(r328_left + r313_TINY, r328_bot, r313_heading(r313_Leftward))] : _r353_t1 === r313_xn$OPENHALF$5sIl ? [] : _r353_t1 === r313_xn$OPENVERTICAL$5sIl ? r313_curl(r328_right - r328_xo * 2, r328_bot, r313_heading(r313_Downward)) : _r353_t1 === r313_xn$CLOSEDCIRCLE$7Hrq || _r353_t1 === r313_xn$CLOSEDROUND$7Hrq ? [r313_Arch.rhs(r328_bot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r353_stroke), new r313_xn$NamedParameterPair$2Lrc9b("o", r328_yo)), r313_flat(r328_left + (r328_slabBot === r313_xn$CLOSEDCIRCLE$7Hrq ? r328_xo : 0), Math.min(r328_bot + r328_adb, r353_midy - r313_TINY)), r313_curl(r328_left + (r328_slabBot === r313_xn$CLOSEDCIRCLE$7Hrq ? r328_xo : 0), r353_midy)] : _r353_t1 === r313_xn$CLOSEDSTEM$7Hrq ? [r313_Arch.rhs(r328_bot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r353_stroke), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r353_shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("o", r328_yo)), r313_flat(r328_left + r313_HSwToV(r353_stroke - r353_shoulderFine), Math.min(r328_bot + r328_adb, r353_midy - r313_TINY), r313_widths.rhs(r353_shoulderFine)), r313_curl(r328_left + r313_HSwToV(r353_stroke - r353_shoulderFine), r353_midy)] : (r353___ = _r353_t1, [r313_HookEnd(r328_bot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r353_stroke), new r313_xn$NamedParameterPair$2Lrc9b("o", r328_yo)), r313_g4(r328_left + r328_xo, r328_bot + r328_hookBot)])));
                };
                r334_exports.UpperShape = r334_UpperShape = function () {
                    var _r364_t0, _r364_t1;
                    return r334_UpperShapeT(r313_dispiro);
                };
                r334_exports.LowerShape = r334_LowerShape = function () {
                    var _r366_t0, _r366_t1;
                    return r334_LowerShapeT(r313_dispiro);
                };
                var r334_LowerShapeTailed = function (r367_ess) {
                    var _r367_t1, _r367_t2;
                    var _r367_t0 = r334_Dim();
                    var r367_stroke = _r367_t0.stroke;
                    var r367_midx = _r367_t0.midx;
                    var r367_midy = _r367_t0.midy;
                    var r367_fine = _r367_t0.fine;
                    var r367_middle = r1_mix(r328_left, r328_right, 0.5);
                    var r367_mockWidth = r328_right - r328_left + 2 * r313_SB;
                    var r367_mockHeight = r367_midy + r367_stroke / 2 - (r328_bot + r313_Descender);
                    var r367_adb2 = r313_AdviceSArchDepth(r367_mockHeight, +1, r367_stroke);
                    return r313_dispiro(r313_flat(r367_midx, r367_midy - (r367_stroke / 2 - r367_fine), r313_widths.heading(0, r367_fine, r313_Rightward)), r313_curl(r367_middle, r367_midy - (r367_stroke / 2 - r367_fine), r313_heading(r313_Rightward)), r313_archv(), r313_g4(r328_right - r328_xo * 2, r367_midy + r367_stroke / 2 - r367_adb2, r313_widths.rhs(r367_stroke)), r313_xn$decor$0cao(r313_SNeck(r313_DivFrame(r367_mockWidth / r313_Width, 2), r367_mockHeight, r367_stroke, r367_ess)), r313_g4(r328_left + r328_xo, r328_bot + r313_Descender + r367_adb2, r313_widths.lhs(r367_stroke)), r313_HookEnd(r328_bot + r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("sw", r367_stroke), new r313_xn$NamedParameterPair$2Lrc9b("o", r328_yo)), r313_g4(r328_right - r328_xo, r328_bot + r313_Descender + r328_hookBot));
                };
                r334_exports.Shape = r334_Shape = function () {
                    var _r372_t0, _r372_t1;
                    return r313_union(r334_UpperShapeT(r313_dispiro), r334_LowerShapeT(r313_dispiro));
                };
                r334_exports.ShapeMask = r334_ShapeMask = function () {
                    var _r374_t0, _r374_t1;
                    return r313_union(r334_UpperShapeT(r313_xn$spirooutline$1aao), r334_LowerShapeT(r313_xn$spirooutline$1aao));
                };
                r334_exports.CapitalKsiBaseShape = r334_CapitalKsiBaseShape = function () {
                    var _r376_t0, _r376_t1;
                    return r313_union(r334_UpperShapeT(r313_dispiro), r334_LowerShapeTailed(r328_stroke * r313_EssRatioUpper));
                };
                r334_exports.SmallKsiBaseShape = r334_SmallKsiBaseShape = function () {
                    var _r378_t0, _r378_t1;
                    return r313_union(r334_UpperShapeT(r313_dispiro), r334_LowerShapeTailed(r328_stroke * r313_EssRatioLower));
                };
                r334_exports.AutoStartSerifL = r334_AutoStartSerifL = function () {
                    var r380___, _r380_t1, _r380_t2, _r380_t3;
                    var _r380_t0 = r334_Dim();
                    var r380_stroke = _r380_t0.stroke;
                    return (_r380_t1 = r328_slabTop, _r380_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcStartSerif.L(r328_left, r328_top, r380_stroke, r328_hook) : _r380_t1 === r313_xn$SLABINWARD$5sIl ? r313_ArcStartSerif.InwardL(r328_left, r328_top, r380_stroke, r328_hook) : (r380___ = _r380_t1, new r313_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                        var _r382_t0, _r382_t1;
                        return void 0;
                    })));
                };
                r334_exports.AutoEndSerifL = r334_AutoEndSerifL = function () {
                    var r384___, _r384_t1, _r384_t2, _r384_t3;
                    var _r384_t0 = r334_Dim();
                    var r384_stroke = _r384_t0.stroke;
                    return (_r384_t1 = r328_slabBot, _r384_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcEndSerif.L(r328_left, r328_bot, r384_stroke, r328_hookBot) : _r384_t1 === r313_xn$SLABINWARD$5sIl ? r313_ArcEndSerif.InwardL(r328_left, r328_bot, r384_stroke, r328_hookBot) : (r384___ = _r384_t1, new r313_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                        var _r386_t0, _r386_t1;
                        return void 0;
                    })));
                };
                return r334_exports;
            })();
        };
        var r313_CyrRevZe = function () {
            var _r388_t5, _r388_t7, _r388_tag8;
            var _r388_t6 = arguments;
            var r388_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r388_t6, 0);
            var _r388_t0 = [];
            var _r388_t1 = 0;
            while (_r388_t1 < r388_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r388_xn$flexarguments$2Lrc7uIe5[_r388_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r388_t0.push(r388_xn$flexarguments$2Lrc7uIe5[_r388_t1]);
                _r388_t1 = _r388_t1 + 1;
            }
            var _r388_t2 = r388_xn$flexarguments$2Lrc7uIe5;
            var _r388_t3 = _r388_t2.length;
            var _r388_t4 = 0;
            while (_r388_t4 < _r388_t3) {
                _r388_t1 = _r388_t2[_r388_t4];
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "slabTop") r388_slabTop = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "slabBot") r388_slabBot = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "top") r388_top = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "bot") r388_bot = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "left") r388_left = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "right") r388_right = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "blend") r388_blend = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "hook") r388_hook = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "hookBot") r388_hookBot = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "stroke") r388_stroke = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "xOverflow") r388_xOverflow = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "xo") r388_xo = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "yo") r388_yo = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "barPos") r388_barPos = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "ada") r388_ada = _r388_t1.right;
                if (_r388_t1 && _r388_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r388_t1.left === "adb") r388_adb = _r388_t1.right;
                _r388_t4 = _r388_t4 + 1;
            }
            var r388_slabTop = r1_fallback(r388_slabTop, _r388_t0[0]);
            var r388_slabBot = r1_fallback(r388_slabBot, _r388_t0[1]);
            var r388_top = r1_fallback(r388_top, _r388_t0[2]);
            var r388_bot = r1_fallback(r388_bot, _r388_t0[3]);
            var r388_left = r1_fallback(r388_left, _r388_t0[4], r313_SB);
            var r388_right = r1_fallback(r388_right, _r388_t0[5], r313_RightSB);
            var r388_blend = r1_fallback(r388_blend, _r388_t0[6], r313_StdBlend);
            var r388_hook = r1_fallback(r388_hook, _r388_t0[7], r313_Hook);
            var r388_hookBot = r1_fallback(r388_hookBot, _r388_t0[8], r388_hook);
            var r388_stroke = r1_fallback(r388_stroke, _r388_t0[9], r313_AdviceStroke2(2, 3, r388_top - r388_bot));
            var r388_xOverflow = r1_fallback(r388_xOverflow, _r388_t0[10], r313_HSwToV(r388_stroke));
            var r388_xo = r1_fallback(r388_xo, _r388_t0[11], r313_OX);
            var r388_yo = r1_fallback(r388_yo, _r388_t0[12], r313_O);
            var r388_barPos = r1_fallback(r388_barPos, _r388_t0[13], r313_OverlayPos);
            var r388_ada = r1_fallback(r388_ada, _r388_t0[14], r313_SmallArchDepthA);
            var r388_adb = r1_fallback(r388_adb, _r388_t0[15], r313_SmallArchDepthB);
            return (function () {
                var r394_Dim, r394_UpperShape, r394_LowerShape, r394_Shape, r394_AutoStartSerifR, r394_AutoEndSerifR;
                var r394_exports = {};
                r394_exports.Dim = r394_Dim = function () {
                    var _r402_t0, _r402_t1;
                    var r402_midx = r1_mix(r388_left + (r313_HSwToV(r388_stroke) - r388_xOverflow), r388_right - (r313_HSwToV(r388_stroke) - r388_xOverflow), r388_blend);
                    var r402_midy = r1_mix(r388_bot, r388_top, r388_barPos);
                    var r402_fine = r388_stroke * r313_CThin;
                    var r402_shoulderFine = r313_ShoulderFine * (r388_stroke / r313_Stroke);
                    return {
                        "stroke": r388_stroke,
                        "midx": r402_midx,
                        "midy": r402_midy,
                        "fine": r402_fine,
                        "shoulderFine": r402_shoulderFine
                    };
                };
                r394_exports.UpperShape = r394_UpperShape = function () {
                    var r404___, _r404_t1, _r404_t2, _r404_t3;
                    var _r404_t0 = r394_Dim();
                    var r404_stroke = _r404_t0.stroke;
                    var r404_midx = _r404_t0.midx;
                    var r404_midy = _r404_t0.midy;
                    var r404_fine = _r404_t0.fine;
                    var r404_shoulderFine = _r404_t0.shoulderFine;
                    var r404_middle = r1_mix(r388_left, r388_right, 0.5);
                    return r313_dispiro((_r404_t1 = r388_slabTop, _r404_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcStart.RtlLhs(r388_right, r388_top, r404_stroke, r388_hook, new r313_xn$NamedParameterPair$2Lrc9b("o", r388_yo)) : _r404_t1 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcStart.RtlLhs(r388_right, r388_top, r404_stroke, r388_hook, new r313_xn$NamedParameterPair$2Lrc9b("o", r388_yo)) : _r404_t1 === r313_xn$FLATCONNECTION$5sIl ? [r313_flat(r388_right - r313_TINY, r388_top, r313_widths.lhs.heading(r404_stroke, r313_Leftward)), r313_curl(r313_Arch["adjust-x"].top(r404_middle, r404_stroke), r388_top, r313_heading(r313_Leftward)), r313_archv()] : _r404_t1 === r313_xn$OPENVERTICAL$5sIl ? r313_flat(r388_left, r388_top, r313_widths.lhs.heading(r404_stroke, r313_Downward)) : _r404_t1 === r313_xn$CLOSEDCIRCLE$7Hrq || _r404_t1 === r313_xn$CLOSEDROUND$7Hrq ? [r313_flat(r388_right - (r388_slabTop === r313_xn$CLOSEDCIRCLE$7Hrq ? r388_xo : 0), r404_midy, r313_widths.lhs(r404_stroke)), r313_curl(r388_right - (r388_slabTop === r313_xn$CLOSEDCIRCLE$7Hrq ? r388_xo : 0), Math.max(r388_top - r388_adb, r404_midy + r313_TINY)), r313_Arch.lhs(r388_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r404_stroke), new r313_xn$NamedParameterPair$2Lrc9b("o", r388_yo))] : _r404_t1 === r313_xn$CLOSEDSTEM$7Hrq ? [r313_flat(r388_right - r313_HSwToV(r404_stroke - r404_shoulderFine), r404_midy, r313_widths.lhs(r404_shoulderFine)), r313_curl(r388_right - r313_HSwToV(r404_stroke - r404_shoulderFine), Math.max(r388_top - r388_adb, r404_midy + r313_TINY)), r313_Arch.lhs(r388_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r404_stroke), new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r404_shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("o", r388_yo))] : (r404___ = _r404_t1, [r313_g4(r388_right + r388_xo, r388_top - r388_hook, r313_widths.lhs()), r313_HookStart(r388_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r404_stroke), new r313_xn$NamedParameterPair$2Lrc9b("o", r388_yo))])), (r388_slabTop === r313_xn$OPENVERTICAL$5sIl ? r313_curl : r313_g4)(r388_left, r313_YSmoothMidL(r388_top, r404_midy - r404_stroke / 2, r388_ada, r388_adb)), r313_arcvh(), r313_flat(r313_Middle, r404_midy + (r404_stroke / 2 - r404_fine), r313_widths.heading(r404_fine, 0, r313_Rightward)), r313_curl(r404_midx, r404_midy + (r404_stroke / 2 - r404_fine), r313_heading(r313_Rightward)));
                };
                r394_exports.LowerShape = r394_LowerShape = function () {
                    var r415___, _r415_t1, _r415_t2, _r415_t3;
                    var _r415_t0 = r394_Dim();
                    var r415_stroke = _r415_t0.stroke;
                    var r415_midx = _r415_t0.midx;
                    var r415_midy = _r415_t0.midy;
                    var r415_fine = _r415_t0.fine;
                    var r415_shoulderFine = _r415_t0.shoulderFine;
                    var r415_middle = r1_mix(r388_left, r388_right, 0.5);
                    return r313_dispiro(r313_flat(r415_midx, r415_midy - (r415_stroke / 2 - r415_fine), r313_widths.heading(r415_fine, 0, r313_Leftward)), r313_curl(r313_Middle, r415_midy - (r415_stroke / 2 - r415_fine), r313_heading(r313_Leftward)), r313_archv(), (r388_slabBot === r313_xn$OPENVERTICAL$5sIl ? r313_flat : r313_g4)(r388_left + r388_xo * 2, r313_YSmoothMidL(r415_midy + r415_stroke / 2, r388_bot, r388_ada, r388_adb), r313_widths.lhs(r415_stroke)), (_r415_t1 = r388_slabBot, _r415_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcEnd.LtrLhs(r388_right, r388_bot, r415_stroke, r388_hookBot, new r313_xn$NamedParameterPair$2Lrc9b("o", r388_yo)) : _r415_t1 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcEnd.LtrLhs(r388_right, r388_bot, r415_stroke, r388_hookBot, new r313_xn$NamedParameterPair$2Lrc9b("o", r388_yo)) : _r415_t1 === r313_xn$FLATCONNECTION$5sIl ? [r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r415_middle, r415_stroke), r388_bot, r313_heading(r313_Rightward)), r313_curl(r388_right - r313_TINY, r388_bot, r313_heading(r313_Rightward))] : _r415_t1 === r313_xn$OPENVERTICAL$5sIl ? r313_curl(r388_left + r388_xo * 2, r388_bot, r313_heading(r313_Downward)) : _r415_t1 === r313_xn$CLOSEDCIRCLE$7Hrq || _r415_t1 === r313_xn$CLOSEDROUND$7Hrq ? [r313_Arch.lhs(r388_bot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r415_stroke), new r313_xn$NamedParameterPair$2Lrc9b("o", r388_yo)), r313_flat(r388_right - (r388_slabBot === r313_xn$CLOSEDCIRCLE$7Hrq ? r388_xo : 0), Math.min(r388_bot + r388_ada, r415_midy - r313_TINY)), r313_curl(r388_right - (r388_slabBot === r313_xn$CLOSEDCIRCLE$7Hrq ? r388_xo : 0), r415_midy)] : _r415_t1 === r313_xn$CLOSEDSTEM$7Hrq ? [r313_Arch.lhs(r388_bot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r415_stroke), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r415_shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("o", r388_yo)), r313_flat(r388_right - r313_HSwToV(r415_stroke - r415_shoulderFine), Math.min(r388_bot + r388_ada, r415_midy - r313_TINY), r313_widths.lhs(r415_shoulderFine)), r313_curl(r388_right - r313_HSwToV(r415_stroke - r415_shoulderFine), r415_midy)] : (r415___ = _r415_t1, [r313_HookEnd(r388_bot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r415_stroke), new r313_xn$NamedParameterPair$2Lrc9b("o", r388_yo)), r313_g4(r388_right - r388_xo, r388_bot + r388_hookBot)])));
                };
                r394_exports.Shape = r394_Shape = function () {
                    var _r426_t0, _r426_t1;
                    return r313_union(r394_UpperShape(), r394_LowerShape());
                };
                r394_exports.AutoStartSerifR = r394_AutoStartSerifR = function () {
                    var r428___, _r428_t1, _r428_t2, _r428_t3;
                    var _r428_t0 = r394_Dim();
                    var r428_stroke = _r428_t0.stroke;
                    return (_r428_t1 = r388_slabTop, _r428_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcStartSerif.R(r388_right, r388_top, r428_stroke, r388_hook) : _r428_t1 === r313_xn$SLABINWARD$5sIl ? r313_ArcStartSerif.InwardR(r388_right, r388_top, r428_stroke, r388_hook) : (r428___ = _r428_t1, new r313_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
                        var _r430_t0, _r430_t1;
                        return void 0;
                    })));
                };
                r394_exports.AutoEndSerifR = r394_AutoEndSerifR = function () {
                    var r432___, _r432_t1, _r432_t2, _r432_t3;
                    var _r432_t0 = r394_Dim();
                    var r432_stroke = _r432_t0.stroke;
                    return (_r432_t1 = r388_slabBot, _r432_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcEndSerif.R(r388_right, r388_bot, r432_stroke, r388_hookBot) : _r432_t1 === r313_xn$SLABINWARD$5sIl ? r313_ArcEndSerif.InwardR(r388_right, r388_bot, r432_stroke, r388_hookBot) : (r432___ = _r432_t1, new r313_xn$Capture$2Lrc8.GlyphProc(function (r434_currentGlyph) {
                        var _r434_t0, _r434_t1;
                        return void 0;
                    })));
                };
                return r394_exports;
            })();
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r436_t0, _r436_t1;
            return {
                "ZeConfig": r313_ZeConfig
            };
        });
        var r313_ZeConfig = r1_SuffixCfg.weave({
            "": [0, "capital", "e"],
            "tall": [r313_Descender, "capDesc", "p"]
        }, {
            "serifless": [r313_xn$SLABNONE$5sIl, r313_xn$SLABNONE$5sIl],
            "bottomSerifed": [r313_xn$SLABNONE$5sIl, r313_xn$SLABCLASSICAL$5sIl],
            "bottomInwardSerifed": [r313_xn$SLABNONE$5sIl, r313_xn$SLABINWARD$5sIl],
            "unilateralSerifed": [r313_xn$SLABCLASSICAL$5sIl, r313_xn$SLABNONE$5sIl],
            "bilateralSerifed": [r313_xn$SLABCLASSICAL$5sIl, r313_xn$SLABCLASSICAL$5sIl],
            "unilateralInwardSerifed": [r313_xn$SLABINWARD$5sIl, r313_xn$SLABNONE$5sIl],
            "bilateralInwardSerifed": [r313_xn$SLABINWARD$5sIl, r313_xn$SLABINWARD$5sIl],
            "hybridSerifed1": [r313_xn$SLABINWARD$5sIl, r313_xn$SLABCLASSICAL$5sIl]
        });
        var _r313_t16 = Object.entries(r313_ZeConfig)[Symbol.iterator]();
        var _r313_t17 = void 0;
        while (!(_r313_t17 = _r313_t16.next()).done) {
            _r313_t18 = _r313_t17.value;
            r313_suffix = _r313_t18[0];
            r313_bottom = _r313_t18[1][0][0];
            r313_mkCap = _r313_t18[1][0][1];
            r313_mkXH = _r313_t18[1][0][2];
            _r313_t18[1][0];
            r313_slabTop = _r313_t18[1][1][0];
            r313_slabBot = _r313_t18[1][1][1];
            _r313_t18[1][1];
            _r313_t18[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Ze." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r442_currentGlyph) {
                    var _r442_t1, _r442_t2;
                    r442_currentGlyph.include(r313_MarkSet[r313_mkCap]());
                    var r442_ze = r313_CyrZe(r313_slabTop, r313_slabBot, r313_CAP, r313_bottom, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r313_bottom ? 0.55 : 0.52), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
                    var _r442_t0 = r442_ze.Dim();
                    var r442_midy = _r442_t0.midy;
                    r442_currentGlyph.setBaseAnchor("overlay", r313_Middle, r442_midy);
                    r442_currentGlyph.setBaseAnchor("strike", r313_Middle, r442_midy);
                    r442_currentGlyph.include(r313_union(r442_ze.Shape(), r442_ze.AutoStartSerifL(), r442_ze.AutoEndSerifL()));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ze." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r453_currentGlyph) {
                    var _r453_t1, _r453_t2;
                    r453_currentGlyph.include(r313_MarkSet[r313_mkXH]());
                    var r453_ze = r313_CyrZe(r313_slabTop, r313_slabBot, r313_XH, r313_bottom, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r313_bottom ? 0.55 : 0.52), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    var _r453_t0 = r453_ze.Dim();
                    var r453_midy = _r453_t0.midy;
                    r453_currentGlyph.setBaseAnchor("overlay", r313_Middle, r453_midy);
                    r453_currentGlyph.setBaseAnchor("strike", r313_Middle, r453_midy);
                    r453_currentGlyph.include(r313_union(r453_ze.Shape(), r453_ze.AutoStartSerifL(), r453_ze.AutoEndSerifL()));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Dhe." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r464_currentGlyph) {
                    var _r464_t0, _r464_t1;
                    r464_currentGlyph.include(r313_xn$referglyph$1aao("cyrl/Ze." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r464_desc = r313_bottom - r313_LongVJut + r313_QuarterStroke;
                    r464_currentGlyph.include(r313_ExtendBelowBaseAnchors(r464_desc));
                    var r464_zeNoO = r313_CyrZe(r313_slabTop, r313_slabBot, r313_CAP, r313_bottom, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("xo", 0), new r313_xn$NamedParameterPair$2Lrc9b("yo", 0), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r313_bottom ? 0.55 : 0.52), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
                    r464_currentGlyph.include(r313_difference(r313_VBar.m(r313_Arch["adjust-x"].bot(r313_Middle), r464_desc, r313_bottom + r313_O + r313_Stroke, r313_VJutStroke), r464_zeNoO.ShapeMask()));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/dhe." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r476_currentGlyph) {
                    var _r476_t0, _r476_t1;
                    r476_currentGlyph.include(r313_xn$referglyph$1aao("cyrl/ze." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r476_desc = r313_bottom - r313_LongVJut + r313_QuarterStroke;
                    r476_currentGlyph.include(r313_ExtendBelowBaseAnchors(r476_desc));
                    var r476_zeNoO = r313_CyrZe(r313_slabTop, r313_slabBot, r313_XH, r313_bottom, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("xo", 0), new r313_xn$NamedParameterPair$2Lrc9b("yo", 0), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r313_bottom ? 0.55 : 0.52), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    r476_currentGlyph.include(r313_difference(r313_VBar.m(r313_Arch["adjust-x"].bot(r313_Middle), r476_desc, r313_bottom + r313_O + r313_Stroke, r313_VJutStroke), r476_zeNoO.ShapeMask()));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/zeRhoticHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r488_currentGlyph) {
                    var _r488_t1, _r488_t2;
                    var r488_df = r488_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 1));
                    r488_currentGlyph.include(r488_df.markSet[r313_mkXH]());
                    var r488_subDf = r313_DivFrame(0.75 * r313_para.advanceScaleM, 2);
                    var r488_stroke = r488_subDf.adviceStroke2(2, 3, r313_XH - r313_bottom);
                    var r488_ze = r313_CyrZe(r313_slabTop, r313_slabBot, r313_XH, r313_bottom, new r313_xn$NamedParameterPair$2Lrc9b("left", r488_subDf.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r488_subDf.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r488_stroke), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r313_bottom ? 0.55 : 0.52), new r313_xn$NamedParameterPair$2Lrc9b("ada", r488_subDf.archDepthAOf(r313_SmallArchDepth, r488_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("adb", r488_subDf.archDepthBOf(r313_SmallArchDepth, r488_stroke)));
                    var _r488_t0 = r488_ze.Dim();
                    var r488_midy = _r488_t0.midy;
                    r488_currentGlyph.setBaseAnchor("overlay", r488_subDf.middle, r488_midy);
                    r488_currentGlyph.setBaseAnchor("strike", r488_subDf.middle, r488_midy);
                    r488_currentGlyph.include(r313_union(r488_ze.Shape(), r488_ze.AutoStartSerifL(), r488_ze.AutoEndSerifL()));
                    r488_currentGlyph.include(r313_RhoticHookShape(r488_subDf.rightSB - r313_HSwToV(1.25 * r313_markFine), r488_df.width, r1_mix(r313_bottom, r313_XH, 0.825), r1_mix(r313_bottom, r313_XH, 0.2)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/revZe." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r504_currentGlyph) {
                    var _r504_t1, _r504_t2;
                    r504_currentGlyph.include(r313_MarkSet[r313_mkCap]());
                    var r504_revZe = r313_CyrRevZe(r313_slabTop, r313_slabBot, r313_CAP, r313_bottom, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r313_bottom ? 0.55 : 0.52), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
                    var _r504_t0 = r504_revZe.Dim();
                    var r504_midy = _r504_t0.midy;
                    r504_currentGlyph.setBaseAnchor("overlay", r313_Middle, r504_midy);
                    r504_currentGlyph.setBaseAnchor("strike", r313_Middle, r504_midy);
                    r504_currentGlyph.include(r313_union(r504_revZe.Shape(), r504_revZe.AutoStartSerifR(), r504_revZe.AutoEndSerifR()));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/revze." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r515_currentGlyph) {
                    var _r515_t1, _r515_t2;
                    r515_currentGlyph.include(r313_MarkSet[r313_mkXH]());
                    var r515_revZe = r313_CyrRevZe(r313_slabTop, r313_slabBot, r313_XH, r313_bottom, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r313_bottom ? 0.55 : 0.52), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    var _r515_t0 = r515_revZe.Dim();
                    var r515_midy = _r515_t0.midy;
                    r515_currentGlyph.setBaseAnchor("overlay", r313_Middle, r515_midy);
                    r515_currentGlyph.setBaseAnchor("strike", r313_Middle, r515_midy);
                    r515_currentGlyph.include(r313_union(r515_revZe.Shape(), r515_revZe.AutoStartSerifR(), r515_revZe.AutoEndSerifR()));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/revzeBar." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r526_currentGlyph) {
                    var _r526_t1, _r526_t2;
                    r526_currentGlyph.include(r313_MarkSet[r313_mkXH]());
                    var r526_revZe = r313_CyrRevZe(r313_slabTop, r313_slabBot, r313_XH, r313_bottom, new r313_xn$NamedParameterPair$2Lrc9b("blend", 1 + 0.7 * (r313_SB - 0) / (r313_RightSB - r313_SB)), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r313_bottom ? 0.55 : 0.52), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    var _r526_t0 = r526_revZe.Dim();
                    var r526_midy = _r526_t0.midy;
                    r526_currentGlyph.setBaseAnchor("overlay", r313_Middle, r526_midy);
                    r526_currentGlyph.setBaseAnchor("strike", r313_Middle, r526_midy);
                    r526_currentGlyph.include(r313_union(r526_revZe.Shape(), r526_revZe.AutoStartSerifR(), r526_revZe.AutoEndSerifR(), r313_dispiro(r313_widths.center(r313_OverlayStroke), r313_flat(r1_mix(0, r313_SB, 0.3), r526_midy), r313_curl(r313_Middle, r526_midy, r313_heading(r313_Rightward)))));
                    return void 0;
                }));
                return !r313_bottom ? (r313_xn$GlyphSaveSink$2Lrc4b.save("tresillo." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r538_currentGlyph) {
                    var _r538_t1, _r538_t2;
                    r538_currentGlyph.include(r313_MarkSet.b());
                    var r538_revZe = r313_CyrRevZe(r313_slabTop, r313_slabBot, r313_Ascender, 0, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("barPos", 0.55), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    var _r538_t0 = r538_revZe.Dim();
                    var r538_midy = _r538_t0.midy;
                    r538_currentGlyph.setBaseAnchor("overlay", r313_Middle, r538_midy);
                    r538_currentGlyph.setBaseAnchor("strike", r313_Middle, r538_midy);
                    r538_currentGlyph.include(r313_union(r538_revZe.Shape(), r538_revZe.AutoStartSerifR(), r538_revZe.AutoEndSerifR()));
                    return void 0;
                })), !r313_slabBot ? (r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/DzjeKomi." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r549_currentGlyph) {
                    var _r549_t1, _r549_t2;
                    r549_currentGlyph.include(r313_MarkSet.capital());
                    var r549_ze = r313_CyrZe(r313_slabTop, r313_xn$OPENVERTICAL$5sIl, r313_CAP, 0, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
                    var _r549_t0 = r549_ze.Dim();
                    var r549_midy = _r549_t0.midy;
                    r549_currentGlyph.setBaseAnchor("overlay", r313_Middle, r549_midy);
                    r549_currentGlyph.setBaseAnchor("strike", r313_Middle, r549_midy);
                    r549_currentGlyph.include(r313_union(r549_ze.Shape(), r549_ze.AutoStartSerifL()));
                    r549_currentGlyph.include(r313_CyrDescender.rSideJut(r313_RightSB - r313_OX * 2, 0));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/dzjeKomi." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r560_currentGlyph) {
                    var _r560_t1, _r560_t2;
                    r560_currentGlyph.include(r313_MarkSet.e());
                    var r560_ze = r313_CyrZe(r313_slabTop, r313_xn$OPENVERTICAL$5sIl, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    var _r560_t0 = r560_ze.Dim();
                    var r560_midy = _r560_t0.midy;
                    r560_currentGlyph.setBaseAnchor("overlay", r313_Middle, r560_midy);
                    r560_currentGlyph.setBaseAnchor("strike", r313_Middle, r560_midy);
                    r560_currentGlyph.include(r313_union(r560_ze.Shape(), r560_ze.AutoStartSerifL()));
                    r560_currentGlyph.include(r313_CyrDescender.rSideJut(r313_RightSB - r313_OX * 2, 0));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ZjeKomi." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r571_currentGlyph) {
                    var r571_sf2, _r571_t1, _r571_t2;
                    var r571_df = r571_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r571_currentGlyph.include(r571_df.markSet.capital());
                    var r571_xm = r571_df.middle + r313_HSwToV(0.5 * r571_df.mvs);
                    var r571_ze = r313_CyrZe(r313_slabTop, r313_xn$OPENHALF$5sIl, r313_CAP, 0, new r313_xn$NamedParameterPair$2Lrc9b("left", r571_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r571_xm), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r571_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
                    var _r571_t0 = r571_ze.Dim();
                    var r571_stroke = _r571_t0.stroke;
                    var r571_midy = _r571_t0.midy;
                    r571_currentGlyph.setBaseAnchor("overlay", r1_mix(r571_df.leftSB, r571_xm, 0.5), r571_midy);
                    r571_currentGlyph.setBaseAnchor("strike", r1_mix(r571_df.leftSB, r571_xm, 0.5), r571_midy);
                    r571_currentGlyph.include(r313_union(r571_ze.Shape(), r571_ze.AutoStartSerifL()));
                    r571_currentGlyph.include(r313_UpwardHookShape(new r313_xn$NamedParameterPair$2Lrc9b("left", r571_xm - r313_OX * 2 - r313_HSwToV(r571_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("right", r571_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("ybegin", r313_YSmoothMidR(r571_midy + r571_stroke / 2, 0, r313_ArchDepthA, r313_ArchDepthB)), new r313_xn$NamedParameterPair$2Lrc9b("yend", r313_CAP / 2 + r313_HalfStroke), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA * (2 / r571_df.hPack) * r571_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB * (2 / r571_df.hPack) * r571_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("sw", r571_stroke)));
                    if (r313_SLAB) {
                        r571_sf2 = r313_SerifFrame.fromDf(r571_df, r313_CAP / 2 + r313_HalfStroke, 0).slice(1, 2);
                        r571_currentGlyph.include(r571_sf2.rt.full);
                    }
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/zjeKomi." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r594_currentGlyph) {
                    var r594_sf2, _r594_t1, _r594_t2;
                    var r594_df = r594_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r594_currentGlyph.include(r594_df.markSet.e());
                    var r594_xm = r594_df.middle + r313_HSwToV(0.5 * r594_df.mvs);
                    var r594_ze = r313_CyrZe(r313_slabTop, r313_xn$OPENHALF$5sIl, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("left", r594_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r594_xm), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r594_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    var _r594_t0 = r594_ze.Dim();
                    var r594_stroke = _r594_t0.stroke;
                    var r594_midy = _r594_t0.midy;
                    r594_currentGlyph.setBaseAnchor("overlay", r1_mix(r594_df.leftSB, r594_xm, 0.5), r594_midy);
                    r594_currentGlyph.setBaseAnchor("strike", r1_mix(r594_df.leftSB, r594_xm, 0.5), r594_midy);
                    r594_currentGlyph.include(r313_union(r594_ze.Shape(), r594_ze.AutoStartSerifL()));
                    r594_currentGlyph.include(r313_UpwardHookShape(new r313_xn$NamedParameterPair$2Lrc9b("left", r594_xm - r313_OX * 2 - r313_HSwToV(r594_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("right", r594_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("ybegin", r313_YSmoothMidR(r594_midy + r594_stroke / 2, 0, r313_SmallArchDepthA, r313_SmallArchDepthB)), new r313_xn$NamedParameterPair$2Lrc9b("yend", r313_XH / 2 + r313_HalfStroke), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA * (2 / r594_df.hPack) * r594_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB * (2 / r594_df.hPack) * r594_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("sw", r594_stroke)));
                    if (r313_SLAB) {
                        r594_sf2 = r313_SerifFrame.fromDf(r594_df, r313_XH / 2 + r313_HalfStroke, 0).slice(1, 2);
                        r594_currentGlyph.include(r594_sf2.rt.full);
                    }
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Ksi/base." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r617_currentGlyph) {
                    var _r617_t1, _r617_t2;
                    r617_currentGlyph.include(r313_MarkSet.capDesc());
                    var r617_ze = r313_CyrZe(r313_slabTop, r313_xn$SLABNONE$5sIl, r313_CAP, 0, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
                    var _r617_t0 = r617_ze.Dim();
                    var r617_midy = _r617_t0.midy;
                    r617_currentGlyph.setBaseAnchor("overlay", r313_Middle, r617_midy);
                    r617_currentGlyph.setBaseAnchor("strike", r313_Middle, r617_midy);
                    r617_currentGlyph.include(r313_union(r617_ze.CapitalKsiBaseShape(), r617_ze.AutoStartSerifL()));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ksi/base." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r627_currentGlyph) {
                    var _r627_t1, _r627_t2;
                    r627_currentGlyph.include(r313_MarkSet.p());
                    var r627_ze = r313_CyrZe(r313_slabTop, r313_xn$SLABNONE$5sIl, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    var _r627_t0 = r627_ze.Dim();
                    var r627_midy = _r627_t0.midy;
                    r627_currentGlyph.setBaseAnchor("overlay", r313_Middle, r627_midy);
                    r627_currentGlyph.setBaseAnchor("strike", r313_Middle, r627_midy);
                    r627_currentGlyph.include(r313_union(r627_ze.SmallKsiBaseShape(), r627_ze.AutoStartSerifL()));
                    return void 0;
                }))) : void 0) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("cyrl/Ze", 1047);
        r313_xn$selectvariant$7Hrq("cyrl/ze", 1079);
        r313_xn$selectvariant$7Hrq("cyrl/ze.BGR", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/ze"));
        r313_xn$selectvariant$7Hrq("cyrl/Dhe", 1176, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Ze"));
        r313_xn$selectvariant$7Hrq("cyrl/dhe", 1177, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/ze"));
        r313_xn$selectvariant$7Hrq("cyrl/revZe", 1296);
        r313_xn$selectvariant$7Hrq("cyrl/revze", 1297);
        r313_xn$selectvariant$7Hrq("latn/Epsilon", 400, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/revZe"));
        r313_xn$selectvariant$7Hrq("latn/epsilon", 603, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/revze"));
        r313_alias("grek/epsilon", 949, "cyrl/revze.serifless");
        r313_xn$selectvariant$7Hrq("latn/epsilonBar", 122692, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/revzeBar"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "latn/epsilon"));
        r313_CreateTurnedLetter("latn/turnepsilon", 7432, "latn/epsilon", r313_HalfAdvance, r313_XH / 2);
        r313_xn$selectvariant$7Hrq("latn/revEpsilon", 42923, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/Ze"));
        r313_xn$selectvariant$7Hrq("latn/revepsilon", 604, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/ze"));
        r313_xn$selectvariant$7Hrq("latn/revepsilonRhoticHook", 605, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/zeRhoticHook"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "latn/revepsilon"));
        r313_xn$selectvariant$7Hrq("cyrl/ZjeKomi", 1284, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Ze/topSerif"));
        r313_xn$selectvariant$7Hrq("cyrl/zjeKomi", 1285, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/ze/topSerif"));
        r313_xn$selectvariant$7Hrq("cyrl/DzjeKomi", 1286, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Ze/topSerif"));
        r313_xn$selectvariant$7Hrq("cyrl/dzjeKomi", 1287, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/ze/topSerif"));
        r313_xn$selectvariant$7Hrq("cyrl/Ksi/base", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Ze/topSerif"));
        r313_xn$selectvariant$7Hrq("cyrl/ksi/base", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/ze/topSerif"));
        r313_xn$selectvariant$7Hrq("Tresillo", 42794, new r313_xn$NamedParameterPair$2Lrc9b("follow", "C"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/revZe"));
        r313_xn$selectvariant$7Hrq("tresillo", 42795, new r313_xn$NamedParameterPair$2Lrc9b("follow", "c"));
        r313_xn$derivemultipartglyphs$7Hrq65("cyrl/Dhe.BSH", null, ["cyrl/Ze", "invCommaBelow"], function (r655_srcs, r655_gr) {
            var _r655_t0, _r655_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r657_currentGlyph) {
                var _r657_t1, _r657_t2;
                var _r657_t0 = r655_srcs;
                var r657_base = _r657_t0[0];
                var r657_mark = _r657_t0[1];
                var r657_baseGlyph = r313_xn$queryglyph$1aao(r657_base);
                r657_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(r313_Arch["adjust-x"].bot(r313_Middle) - r313_markMiddle, r657_baseGlyph.baseAnchors.below.y + r313_AccentClearance), r313_xn$referglyph$1aao(r657_mark)));
                r657_currentGlyph.include(r313_xn$referglyph$1aao(r657_base), r313_AS_BASE, r313_ALSO_METRICS);
                r657_currentGlyph.include(r313_ExtendBelowBaseAnchors(r657_baseGlyph.baseAnchors.below.y - r313_AccentHeight));
                return void 0;
            });
        });
        r313_xn$derivemultipartglyphs$7Hrq65("cyrl/dhe.BSH", null, ["cyrl/ze", "invCommaBelow"], function (r661_srcs, r661_gr) {
            var _r661_t0, _r661_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r663_currentGlyph) {
                var _r663_t1, _r663_t2;
                var _r663_t0 = r661_srcs;
                var r663_base = _r663_t0[0];
                var r663_mark = _r663_t0[1];
                var r663_baseGlyph = r313_xn$queryglyph$1aao(r663_base);
                r663_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(r313_Arch["adjust-x"].bot(r313_Middle) - r313_markMiddle, r663_baseGlyph.baseAnchors.below.y + r313_AccentClearance), r313_xn$referglyph$1aao(r663_mark)));
                r663_currentGlyph.include(r313_xn$referglyph$1aao(r663_base), r313_AS_BASE, r313_ALSO_METRICS);
                r663_currentGlyph.include(r313_ExtendBelowBaseAnchors(r663_baseGlyph.baseAnchors.below.y - r313_AccentHeight));
                return void 0;
            });
        });
        r313_xn$selectvariant$7Hrq("latn/epsilon/descBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/revze"));
        r313_xn$derivecomposites$7Hrq("latn/epsilonRetroflexHook", 7571, "latn/epsilon/descBase", r313_RetroflexHook.r(r313_RightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("refSw", r313_AdviceStroke2(2, 3, r313_XH))));
        r313_xn$selectvariant$7Hrq("latn/revepsilon/descBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/ze"));
        r313_xn$derivecomposites$7Hrq("latn/revepsilonRetroflexHook", 7572, "latn/revepsilon/descBase", r313_RetroflexHook.l(r313_SB, 0, new r313_xn$NamedParameterPair$2Lrc9b("refSw", r313_AdviceStroke2(2, 3, r313_XH))));
        r313_xn$GlyphSaveSink$2Lrc4b.save("voicedLaryngealSpirant", 7460, new r313_xn$Capture$2Lrc8.GlyphProc(function (r673_currentGlyph) {
            var _r673_t0, _r673_t1;
            r673_currentGlyph.include(r313_MarkSet.b());
            var r673_blend = 0.505;
            var r673_midGap = Math.max(r1_mix(0, r313_Ascender, 0) + r313_AdviceStroke2(3, 12, r313_Ascender - 0), r1_mix(0, r313_Ascender, 0.125) - r313_AdviceStroke2(3, 6, r313_XH - 0));
            var r673_strokeV = r313_AdviceStroke(4);
            var r673_ze = r313_CyrZe(r313_xn$SLABNONE$5sIl, r313_xn$SLABNONE$5sIl, r313_Ascender, r673_midGap, new r313_xn$NamedParameterPair$2Lrc9b("blend", r673_blend), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
            var r673_dimUpper = r673_ze.Dim();
            var r673_revZe = r313_CyrRevZe(r313_xn$SLABNONE$5sIl, r313_xn$SLABNONE$5sIl, r313_Ascender - r673_midGap, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", r673_blend), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
            var r673_dimLower = r673_revZe.Dim();
            r673_currentGlyph.include(r313_union(r673_revZe.LowerShape(), r673_ze.UpperShape(), r313_Rect(r673_dimUpper.midy + r673_dimUpper.stroke / 2, r673_dimLower.midy - r673_dimLower.stroke / 2, r313_Middle - r313_HSwToV(0.5 * r673_strokeV), r313_Middle + r313_HSwToV(0.5 * r673_strokeV))));
            return void 0;
        }));
        (function () {
            r313_xn$GlyphSaveSink$2Lrc4b.save("latn/epsilonClosed", 666, new r313_xn$Capture$2Lrc8.GlyphProc(function (r688_currentGlyph) {
                var _r688_t0, _r688_t1;
                r688_currentGlyph.include(r313_MarkSet.e());
                var r688_revZe = r313_CyrRevZe(r313_xn$CLOSEDCIRCLE$7Hrq, r313_xn$CLOSEDCIRCLE$7Hrq, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", 0.7), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                r688_currentGlyph.include(r688_revZe.Shape());
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("latn/revepsilonClosed", 606, new r313_xn$Capture$2Lrc8.GlyphProc(function (r698_currentGlyph) {
                var _r698_t0, _r698_t1;
                r698_currentGlyph.include(r313_MarkSet.e());
                var r698_ze = r313_CyrZe(r313_xn$CLOSEDCIRCLE$7Hrq, r313_xn$CLOSEDCIRCLE$7Hrq, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", 0.7), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                r698_currentGlyph.include(r698_ze.Shape());
                return void 0;
            }));
        })();
        (function () {
            r313_xn$GlyphSaveSink$2Lrc4b.save("OeVolapuk", 42908, new r313_xn$Capture$2Lrc8.GlyphProc(function (r710_currentGlyph) {
                var _r710_t0, _r710_t1;
                r710_currentGlyph.include(r313_MarkSet.capital());
                var r710_revZe = r313_CyrRevZe(r313_xn$CLOSEDCIRCLE$7Hrq, r313_xn$CLOSEDCIRCLE$7Hrq, r313_CAP, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", r313_VolBlend), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
                r710_currentGlyph.include(r710_revZe.Shape());
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("oeVolapuk", 42909, new r313_xn$Capture$2Lrc8.GlyphProc(function (r720_currentGlyph) {
                var _r720_t0, _r720_t1;
                r720_currentGlyph.include(r313_MarkSet.e());
                var r720_revZe = r313_CyrRevZe(r313_xn$CLOSEDCIRCLE$7Hrq, r313_xn$CLOSEDCIRCLE$7Hrq, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", r313_VolBlend), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                r720_currentGlyph.include(r720_revZe.Shape());
                return void 0;
            }));
        })();
        (function () {
            var r729_suffix, r729_body, r729_bar, _r729_t3, _r729_t4, _r729_tag5;
            var _r729_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-A"].resolve();
            var r729_SingleStorey = _r729_t0.SingleStorey;
            var r729_FullBarBody = function (r731_df, r731_top, r731_bar, r731_hook, r731_ada, r731_adb) {
                var _r731_t0, _r731_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r733_currentGlyph) {
                    var _r733_t1, _r733_t2;
                    var r733_revZe = r313_CyrRevZe(r313_xn$CLOSEDSTEM$7Hrq, r313_xn$CLOSEDSTEM$7Hrq, r731_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", r313_VolBlend), new r313_xn$NamedParameterPair$2Lrc9b("hook", r731_hook), new r313_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r313_xn$NamedParameterPair$2Lrc9b("ada", r731_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r731_adb));
                    var _r733_t0 = r733_revZe.Dim();
                    var r733_stroke = _r733_t0.stroke;
                    r733_currentGlyph.include(r733_revZe.Shape());
                    r733_currentGlyph.include(r731_bar(r731_df, r731_top, r733_stroke));
                    return void 0;
                });
            };
            var r729_TopCutBody = function (r741_df, r741_top, r741_bar, r741_hook, r741_ada, r741_adb) {
                var _r741_t0, _r741_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r743_currentGlyph) {
                    var _r743_t1, _r743_t2;
                    var r743_revZe = r313_CyrRevZe(r313_xn$CLOSEDSTEM$7Hrq, r313_xn$CLOSEDSTEM$7Hrq, r741_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", r313_VolBlend), new r313_xn$NamedParameterPair$2Lrc9b("hook", r741_hook), new r313_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r313_xn$NamedParameterPair$2Lrc9b("ada", r741_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r741_adb));
                    var _r743_t0 = r743_revZe.Dim();
                    var r743_stroke = _r743_t0.stroke;
                    r743_currentGlyph.include(r743_revZe.Shape());
                    r743_currentGlyph.include(r741_bar(r741_df, r741_top - r313_HalfStroke, r743_stroke));
                    r743_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r741_df.rightSB, r741_top), r313_corner(r741_df.rightSB, r741_top - r313_HalfStroke), r313_corner(r741_df.rightSB - r313_HSwToV(r743_stroke), r741_top - r313_HalfStroke)));
                    return void 0;
                });
            };
            var r729_FlatTopBody = function (r752_df, r752_top, r752_bar, r752_hook, r752_ada, r752_adb) {
                var _r752_t0, _r752_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r754_currentGlyph) {
                    var _r754_t1, _r754_t2;
                    var r754_revZe = r313_CyrRevZe(r313_xn$FLATCONNECTION$5sIl, r313_xn$CLOSEDSTEM$7Hrq, r752_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", r313_VolBlend), new r313_xn$NamedParameterPair$2Lrc9b("hook", r752_hook), new r313_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r313_xn$NamedParameterPair$2Lrc9b("ada", r752_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r752_adb));
                    var _r754_t0 = r754_revZe.Dim();
                    var r754_stroke = _r754_t0.stroke;
                    r754_currentGlyph.include(r754_revZe.Shape());
                    r754_currentGlyph.include(r752_bar(r752_df, r752_top, r754_stroke));
                    return void 0;
                });
            };
            var r729_EarlessCornerBody = function (r762_df, r762_top, r762_bar, r762_hook, r762_ada, r762_adb) {
                var _r762_t0, _r762_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r764_currentGlyph) {
                    var _r764_t1, _r764_t2;
                    var r764_revZe = r313_CyrRevZe(r313_xn$SLABINWARD$5sIl, r313_xn$CLOSEDSTEM$7Hrq, r762_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", r313_VolBlend), new r313_xn$NamedParameterPair$2Lrc9b("hook", r762_hook), new r313_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r313_xn$NamedParameterPair$2Lrc9b("ada", r762_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r762_adb));
                    var _r764_t0 = r764_revZe.Dim();
                    var r764_stroke = _r764_t0.stroke;
                    r764_currentGlyph.include(r764_revZe.Shape());
                    r764_currentGlyph.include(r762_bar(r762_df, r762_top - r313_DToothlessRise, r764_stroke));
                    return void 0;
                });
            };
            var r729_EarlessRoundedBody = function (r772_df, r772_top, r772_bar, r772_hook, r772_ada, r772_adb) {
                var _r772_t0, _r772_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r774_currentGlyph) {
                    var _r774_t1, _r774_t2;
                    var r774_revZe = r313_CyrRevZe(r313_xn$CLOSEDROUND$7Hrq, r313_xn$CLOSEDSTEM$7Hrq, r772_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", r313_VolBlend), new r313_xn$NamedParameterPair$2Lrc9b("hook", r772_hook), new r313_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r313_xn$NamedParameterPair$2Lrc9b("ada", r772_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r772_adb));
                    var _r774_t0 = r774_revZe.Dim();
                    var r774_stroke = _r774_t0.stroke;
                    r774_currentGlyph.include(r774_revZe.Shape());
                    r774_currentGlyph.include(r772_bar(r772_df, r772_top - r772_adb, r774_stroke));
                    return void 0;
                });
            };
            var r729_SingleStoreyConfig = {
                "singleStoreySerifless": [r729_FullBarBody, r729_SingleStorey.SeriflessBar],
                "singleStoreyTopCutSerifless": [r729_TopCutBody, r729_SingleStorey.SeriflessBar],
                "singleStoreyFlatTopSerifless": [r729_FlatTopBody, r729_SingleStorey.SeriflessBar],
                "singleStoreyEarlessCornerSerifless": [r729_EarlessCornerBody, r729_SingleStorey.SeriflessBar],
                "singleStoreyEarlessRoundedSerifless": [r729_EarlessRoundedBody, r729_SingleStorey.SeriflessBar],
                "singleStoreySerifed": [r729_FullBarBody, r729_SingleStorey.BottomSerifedBar],
                "singleStoreyTopCutSerifed": [r729_TopCutBody, r729_SingleStorey.BottomSerifedBar],
                "singleStoreyFlatTopSerifed": [r729_FlatTopBody, r729_SingleStorey.BottomSerifedBar],
                "singleStoreyEarlessCornerSerifed": [r729_EarlessCornerBody, r729_SingleStorey.BottomSerifedBar],
                "singleStoreyEarlessRoundedSerifed": [r729_EarlessRoundedBody, r729_SingleStorey.BottomSerifedBar],
                "singleStoreyDoubleSerifed": [r729_FullBarBody, r729_SingleStorey.DoubleSerifedBar],
                "singleStoreyFlatTopDoubleSerifed": [r729_FlatTopBody, r729_SingleStorey.DoubleSerifedBar],
                "singleStoreyTailed": [r729_FullBarBody, r729_SingleStorey.TailedBar],
                "singleStoreyTopCutTailed": [r729_TopCutBody, r729_SingleStorey.TailedBar],
                "singleStoreyFlatTopTailed": [r729_FlatTopBody, r729_SingleStorey.TailedBar],
                "singleStoreyEarlessCornerTailed": [r729_EarlessCornerBody, r729_SingleStorey.TailedBar],
                "singleStoreyEarlessRoundedTailed": [r729_EarlessRoundedBody, r729_SingleStorey.TailedBar],
                "singleStoreyTailedSerifed": [r729_FullBarBody, r729_SingleStorey.TailedSerifedBar],
                "singleStoreyFlatTopTailedSerifed": [r729_FlatTopBody, r729_SingleStorey.TailedSerifedBar]
            };
            var _r729_t1 = Object.entries(r729_SingleStoreyConfig)[Symbol.iterator]();
            var _r729_t2 = void 0;
            while (!(_r729_t2 = _r729_t1.next()).done) {
                _r729_t3 = _r729_t2.value;
                r729_suffix = _r729_t3[0];
                r729_body = _r729_t3[1][0];
                r729_bar = _r729_t3[1][1];
                _r729_t3[1];
                (function () {
                    r313_xn$GlyphSaveSink$2Lrc4b.save("AeVolapuk/base." + r729_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r787_currentGlyph) {
                        var _r787_t0, _r787_t1;
                        var r787_df = r787_currentGlyph.include(r313_DivFrame(1));
                        r787_currentGlyph.include(r787_df.markSet.capital());
                        r787_currentGlyph.include(r729_body(r787_df, r313_CAP, r729_bar, r313_Hook, r313_ArchDepthA, r313_ArchDepthB));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save("aeVolapuk/base." + r729_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r793_currentGlyph) {
                        var _r793_t0, _r793_t1;
                        var r793_df = r793_currentGlyph.include(r313_DivFrame(1));
                        r793_currentGlyph.include(r793_df.markSet.e());
                        r793_currentGlyph.include(r729_body(r793_df, r313_XH, r729_bar, r313_SHook, r313_SmallArchDepthA, r313_SmallArchDepthB));
                        return void 0;
                    }));
                })();
            }
            r313_xn$selectvariant$7Hrq("AeVolapuk.slab.upright", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "AeVolapuk/base"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.slab.upright"));
            r313_xn$selectvariant$7Hrq("AeVolapuk.slab.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "AeVolapuk/base"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.slab.italic"));
            r313_xn$orthographicitalic$3DrD("AeVolapuk.slab", null);
            r313_xn$selectvariant$7Hrq("AeVolapuk.sans", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "AeVolapuk/base"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.sans"));
            r313_xn$orthographicslab$3DrD(r313_SLAB, "AeVolapuk", 42906);
            r313_xn$selectvariant$7Hrq("aeVolapuk.slab.upright", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "aeVolapuk/base"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.slab.upright"));
            r313_xn$selectvariant$7Hrq("aeVolapuk.slab.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "aeVolapuk/base"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.slab.italic"));
            r313_xn$orthographicitalic$3DrD("aeVolapuk.slab", null);
            r313_xn$selectvariant$7Hrq("aeVolapuk.sans", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "aeVolapuk/base"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.sans"));
            r313_xn$orthographicslab$3DrD(r313_SLAB, "aeVolapuk", 42907);
            return r313_alias("aRoundTop.italic", null, r313_SLAB ? "aeVolapuk.slab.italic" : "aeVolapuk.sans");
        })();
        return (function () {
            var r810_suffix, r810_Base, r810_USlabs, r810_LSlabs, _r810_t4, _r810_t5, _r810_tag6;
            var _r810_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-U"].resolve();
            var r810_USerifs = _r810_t0.USerifs;
            var _r810_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
            var r810_RightwardTailedBar = _r810_t1.RightwardTailedBar;
            var r810_UToothed = function (r813_df, r813_top, r813_slab, r813_hook, r813_ada, r813_adb) {
                var _r813_t0, _r813_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r815_currentGlyph) {
                    var _r815_t1, _r815_t2;
                    r815_currentGlyph.setBaseAnchor("trailing", r813_df.rightSB, 0);
                    var r815_revZe = r313_CyrRevZe(r313_xn$OPENVERTICAL$5sIl, r313_xn$CLOSEDSTEM$7Hrq, r813_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", r313_VolBlend), new r313_xn$NamedParameterPair$2Lrc9b("hook", r813_hook), new r313_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r313_xn$NamedParameterPair$2Lrc9b("ada", r813_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r813_adb));
                    var _r815_t0 = r815_revZe.Dim();
                    var r815_stroke = _r815_t0.stroke;
                    r815_currentGlyph.include(r815_revZe.Shape());
                    r815_currentGlyph.include(r313_VBar.r(r813_df.rightSB, 0, r813_top, r815_stroke));
                    r815_currentGlyph.include(r813_slab(r813_df, r813_top, r815_stroke));
                    return void 0;
                });
            };
            var r810_UTailed = function (r825_df, r825_top, r825_slab, r825_hook, r825_ada, r825_adb) {
                var _r825_t0, _r825_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r827_currentGlyph) {
                    var _r827_t1, _r827_t2;
                    r827_currentGlyph.setBaseAnchor("trailing", r825_df.rightSB + r313_SideJut, 0);
                    var r827_revZe = r313_CyrRevZe(r313_xn$OPENVERTICAL$5sIl, r313_xn$CLOSEDSTEM$7Hrq, r825_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", r313_VolBlend), new r313_xn$NamedParameterPair$2Lrc9b("hook", r825_hook), new r313_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r313_xn$NamedParameterPair$2Lrc9b("ada", r825_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r825_adb));
                    var _r827_t0 = r827_revZe.Dim();
                    var r827_stroke = _r827_t0.stroke;
                    r827_currentGlyph.include(r827_revZe.Shape());
                    r827_currentGlyph.include(r810_RightwardTailedBar(r825_df.rightSB, 0, r825_top, r827_stroke));
                    r827_currentGlyph.include(r825_slab(r825_df, r825_top, r827_stroke));
                    return void 0;
                });
            };
            var r810_UFlatBottom = function (r837_df, r837_top, r837_slab, r837_hook, r837_ada, r837_adb) {
                var _r837_t0, _r837_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r839_currentGlyph) {
                    var _r839_t1, _r839_t2;
                    var r839_revZe = r313_CyrRevZe(r313_xn$OPENVERTICAL$5sIl, r313_xn$FLATCONNECTION$5sIl, r837_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", r313_VolBlend), new r313_xn$NamedParameterPair$2Lrc9b("hook", r837_hook), new r313_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r313_xn$NamedParameterPair$2Lrc9b("ada", r837_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r837_adb));
                    var _r839_t0 = r839_revZe.Dim();
                    var r839_stroke = _r839_t0.stroke;
                    r839_currentGlyph.include(r839_revZe.Shape());
                    r839_currentGlyph.include(r313_VBar.r(r837_df.rightSB, 0, r837_top, r839_stroke));
                    r839_currentGlyph.include(r837_slab(r837_df, r837_top, r839_stroke));
                    return void 0;
                });
            };
            var r810_UToothlessCorner = function (r848_df, r848_top, r848_slab, r848_hook, r848_ada, r848_adb) {
                var _r848_t0, _r848_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r850_currentGlyph) {
                    var _r850_t1, _r850_t2;
                    var r850_revZe = r313_CyrRevZe(r313_xn$OPENVERTICAL$5sIl, r313_xn$SLABINWARD$5sIl, r848_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", r313_VolBlend), new r313_xn$NamedParameterPair$2Lrc9b("hook", r848_hook), new r313_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r313_xn$NamedParameterPair$2Lrc9b("ada", r848_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r848_adb));
                    var _r850_t0 = r850_revZe.Dim();
                    var r850_stroke = _r850_t0.stroke;
                    r850_currentGlyph.include(r850_revZe.Shape());
                    r850_currentGlyph.include(r313_VBar.r(r848_df.rightSB, r313_DToothlessRise, r848_top, r850_stroke));
                    r850_currentGlyph.include(r848_slab(r848_df, r848_top, r850_stroke));
                    return void 0;
                });
            };
            var r810_UToothlessRounded = function (r859_df, r859_top, r859_slab, r859_hook, r859_ada, r859_adb) {
                var _r859_t0, _r859_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r861_currentGlyph) {
                    var _r861_t1, _r861_t2;
                    var r861_revZe = r313_CyrRevZe(r313_xn$OPENVERTICAL$5sIl, r313_xn$CLOSEDROUND$7Hrq, r859_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("blend", r313_VolBlend), new r313_xn$NamedParameterPair$2Lrc9b("hook", r859_hook), new r313_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r313_xn$NamedParameterPair$2Lrc9b("ada", r859_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r859_adb));
                    var _r861_t0 = r861_revZe.Dim();
                    var r861_stroke = _r861_t0.stroke;
                    r861_currentGlyph.include(r861_revZe.Shape());
                    r861_currentGlyph.include(r313_VBar.r(r859_df.rightSB, r859_ada, r859_top, r861_stroke));
                    r861_currentGlyph.include(r859_slab(r859_df, r859_top, r861_stroke));
                    return void 0;
                });
            };
            var r810_SmallUConfig = r1_SuffixCfg.weave({
                "toothed": r810_UToothed,
                "tailed": r810_UTailed,
                "flatBottom": r810_UFlatBottom,
                "toothlessCorner": r810_UToothlessCorner,
                "toothlessRounded": r810_UToothlessRounded
            }, function (r870_body) {
                var r870___, _r870_t0, _r870_t1, _r870_t2, _r870_t3;
                return {
                    "serifless": [r313_xn$noshape$3cah, r313_xn$noshape$3cah],
                    "bottomRightSerifed": [r810_USerifs.BottomRight, r810_USerifs.BottomRight],
                    "motionSerifed": (_r870_t0 = r870_body, _r870_t0 === "toothed" || _r870_t0 === "flatBottom" ? [r810_USerifs.MotionToothed, r810_USerifs.MotionToothed] : (r870___ = _r870_t0, [r810_USerifs.MotionToothless, r810_USerifs.MotionToothless])),
                    "serifed": (_r870_t1 = r870_body, _r870_t1 === "toothed" || _r870_t1 === "flatBottom" ? [r810_USerifs.Toothed, r810_USerifs.SmallToothed] : (r870___ = _r870_t1, [r810_USerifs.Toothless, r810_USerifs.SmallToothless]))
                };
            });
            var _r810_t2 = Object.entries(r810_SmallUConfig)[Symbol.iterator]();
            var _r810_t3 = void 0;
            while (!(_r810_t3 = _r810_t2.next()).done) {
                _r810_t4 = _r810_t3.value;
                r810_suffix = _r810_t4[0];
                r810_Base = _r810_t4[1][0];
                r810_USlabs = _r810_t4[1][1][0];
                r810_LSlabs = _r810_t4[1][1][1];
                _r810_t4[1][1];
                _r810_t4[1];
                (function () {
                    r313_xn$GlyphSaveSink$2Lrc4b.save("UeVolapuk." + r810_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r876_currentGlyph) {
                        var _r876_t0, _r876_t1;
                        var r876_df = r876_currentGlyph.include(r313_DivFrame(1));
                        r876_currentGlyph.include(r876_df.markSet.capital());
                        r876_currentGlyph.include(r810_Base(r876_df, r313_CAP, r810_USlabs, r313_Hook, r313_ArchDepthA, r313_ArchDepthB));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save("ueVolapuk." + r810_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r882_currentGlyph) {
                        var _r882_t0, _r882_t1;
                        var r882_df = r882_currentGlyph.include(r313_DivFrame(1));
                        r882_currentGlyph.include(r882_df.markSet.e());
                        r882_currentGlyph.include(r810_Base(r882_df, r313_XH, r810_LSlabs, r313_SHook, r313_SmallArchDepthA, r313_SmallArchDepthB));
                        return void 0;
                    }));
                })();
            }
            r313_xn$selectvariant$7Hrq("UeVolapuk", 42910, new r313_xn$NamedParameterPair$2Lrc9b("follow", "u"));
            return r313_xn$selectvariant$7Hrq("ueVolapuk", 42911, new r313_xn$NamedParameterPair$2Lrc9b("follow", "u"));
        })();
    });
    return void 0;
});


