"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-E", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Body, r313_RevBody, _r313_t15, _r313_t17, _r313_t18, _r313_t19, _r313_tag20;
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
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_HalfUPM = _r313_t1.HalfUPM;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_Translate = _r313_t1.Translate;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HVContrast = _r313_t1.HVContrast;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_AHook = _r313_t1.AHook;
        var r313_ArchDepth = _r313_t1.ArchDepth;
        var r313_SmallArchDepth = _r313_t1.SmallArchDepth;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_LongVJut = _r313_t1.LongVJut;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_ArchDepthAOf = _r313_t1.ArchDepthAOf;
        var r313_ArchDepthBOf = _r313_t1.ArchDepthBOf;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_YSmoothMidR = _r313_t1.YSmoothMidR;
        var r313_YSmoothMidL = _r313_t1.YSmoothMidL;
        var r313_xn$VERYFAR$5sIl = _r313_t1["VERY-FAR"];
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_virt = _r313_t2.virt;
        var r313_end = _r313_t2.end;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_alsoThruThem = _r313_t2.alsoThruThem;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_OShapeOutline = _r313_t5.OShapeOutline;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookEnd = _r313_t5.HookEnd;
        var r313_flatside = _r313_t5.flatside;
        var r313_Arch = _r313_t5.Arch;
        var r313_FlipAround = _r313_t5.FlipAround;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_alias = _r313_t6.alias;
        var r313_turned = _r313_t6.turned;
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markExtend = _r313_t7.markExtend;
        var r313_markStroke = _r313_t7.markStroke;
        var r313_markStress = _r313_t7.markStress;
        var r313_markFine = _r313_t7.markFine;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_ExtendBelowBaseAnchors = _r313_t8.ExtendBelowBaseAnchors;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateSelectorVariants = _r313_t9.CreateSelectorVariants;
        var r313_DefineSelectorGlyph = _r313_t9.DefineSelectorGlyph;
        var r313_CreateTurnedLetter = _r313_t9.CreateTurnedLetter;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_FlatHookDepth = _r313_t10.FlatHookDepth;
        var r313_RetroflexHook = _r313_t10.RetroflexHook;
        var r313_RhoticHookShape = _r313_t10.RhoticHookShape;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifedArcEnd = _r313_t11.SerifedArcEnd;
        var r313_InwardSlabArcEnd = _r313_t11.InwardSlabArcEnd;
        var r313_ArcEndSerif = _r313_t11.ArcEndSerif;
        var _r313_t12 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-C"].resolve();
        var r313_CConfig = _r313_t12.CConfig;
        var r313_SmallEHook = function (r322_top, r322_stroke, r322_hook, r322_doSwash) {
            var _r322_t0, _r322_t1;
            return Math.min(r322_hook, r322_doSwash ? r313_xn$VERYFAR$5sIl : r1_mix(r322_stroke, r1_mix(0, r322_top, r313_DesignParameters.eBarPos) - r322_stroke / 2, 0.554));
        };
        var r313_xn$SLABNONE$5sIl = 0;
        var r313_xn$SLABCLASSICAL$5sIl = 1;
        var r313_xn$SLABINWARD$5sIl = 2;
        var r313_SmallESerifedTerminalShape = function (r323_df, r323_top, r323_stroke, r323_hook, r323_tailSlab, r323_isClockwise) {
            var r323___, _r323_t0, _r323_t1, _r323_t2;
            var r323_doSwash = !r323_isClockwise && r313_para.isItalic && r313_para.slopeAngle > 0;
            return (_r323_t0 = r323_tailSlab, _r323_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcEnd.LtrLhs(r323_df.rightSB, 0, r323_stroke, r323_hook) : _r323_t0 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcEnd.LtrLhs(r323_df.rightSB, 0, r323_stroke, r323_hook) : (r323___ = _r323_t0, [r313_HookEnd(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r323_stroke), new r313_xn$NamedParameterPair$2Lrc9b("suppressSwash", r323_isClockwise)), r313_g4(r323_df.rightSB - (r323_doSwash ? 0 : 0.5) * r313_OX, r313_SmallEHook(r323_top, r323_stroke, r323_hook, r323_doSwash))]));
        };
        var r313_SmallETerminalSerif = function (r326_df, r326_top, r326_stroke, r326_hook, r326_tailSlab, r326_isClockwise) {
            var r326___, _r326_t1, _r326_t2;
            var _r326_t0 = r326_tailSlab;
            return _r326_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcEndSerif.R(r326_df.rightSB, 0, r326_stroke, r326_hook) : _r326_t0 === r313_xn$SLABINWARD$5sIl ? r313_ArcEndSerif.InwardR(r326_df.rightSB, 0, r326_stroke, r326_hook) : (r326___ = _r326_t0, r313_xn$noshape$3cah());
        };
        var r313_RevSmallESerifedTerminalShape = function (r327_df, r327_top, r327_stroke, r327_hook, r327_tailSlab, r327_isCounterClockwise) {
            var r327___, _r327_t0, _r327_t1, _r327_t2;
            var r327_doSwash = !r327_isCounterClockwise && r313_para.isItalic && r313_para.slopeAngle < 0;
            return (_r327_t0 = r327_tailSlab, _r327_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcEnd.RtlRhs(r327_df.leftSB, 0, r327_stroke, r327_hook) : _r327_t0 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcEnd.RtlRhs(r327_df.leftSB, 0, r327_stroke, r327_hook) : (r327___ = _r327_t0, [r313_HookEnd(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r327_stroke), new r313_xn$NamedParameterPair$2Lrc9b("suppressSwash", r327_isCounterClockwise)), r313_g4(r327_df.leftSB + (r327_doSwash ? 0 : 0.5) * r313_OX, r313_SmallEHook(r327_top, r327_stroke, r327_hook, r327_doSwash))]));
        };
        var r313_RevSmallETerminalSerif = function (r330_df, r330_top, r330_stroke, r330_hook, r330_tailSlab, r330_isCounterClockwise) {
            var r330___, _r330_t1, _r330_t2;
            var _r330_t0 = r330_tailSlab;
            return _r330_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcEndSerif.L(r330_df.leftSB, 0, r330_stroke, r330_hook) : _r330_t0 === r313_xn$SLABINWARD$5sIl ? r313_ArcEndSerif.InwardL(r330_df.leftSB, 0, r330_stroke, r330_hook) : (r330___ = _r330_t0, r313_xn$noshape$3cah());
        };
        var r313_SmallEShape = function () {
            var _r332_t5;
            var _r332_t6 = arguments;
            var r332_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r332_t6, 0);
            var _r332_t0 = [];
            var _r332_t1 = 0;
            while (_r332_t1 < r332_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r332_xn$flexarguments$2Lrc7uIe5[_r332_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r332_t0.push(r332_xn$flexarguments$2Lrc7uIe5[_r332_t1]);
                _r332_t1 = _r332_t1 + 1;
            }
            var _r332_t2 = r332_xn$flexarguments$2Lrc7uIe5;
            var _r332_t3 = _r332_t2.length;
            var _r332_t4 = 0;
            while (_r332_t4 < _r332_t3) {
                _r332_t1 = _r332_t2[_r332_t4];
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "df") r332_df = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "top") r332_top = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "stroke") r332_stroke = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "hook") r332_hook = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "bbd") r332_bbd = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "ada") r332_ada = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "adb") r332_adb = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "curlyBar") r332_curlyBar = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "pyBarAdj") r332_pyBarAdj = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "turned") r332_turned = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "styTop") r332_styTop = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "styBot") r332_styBot = _r332_t1.right;
                _r332_t4 = _r332_t4 + 1;
            }
            var r332_df = r1_fallback(r332_df, _r332_t0[0]);
            var r332_top = r1_fallback(r332_top, _r332_t0[1]);
            var r332_stroke = r1_fallback(r332_stroke, _r332_t0[2], r313_AdviceStroke2(2, 3, r332_top));
            var r332_hook = r1_fallback(r332_hook, _r332_t0[3], r313_AHook);
            var r332_bbd = r1_fallback(r332_bbd, _r332_t0[4], 0);
            var r332_ada = r1_fallback(r332_ada, _r332_t0[5], r313_SmallArchDepthA);
            var r332_adb = r1_fallback(r332_adb, _r332_t0[6], r313_SmallArchDepthB);
            var r332_curlyBar = r1_fallback(r332_curlyBar, _r332_t0[7], false);
            var r332_pyBarAdj = r1_fallback(r332_pyBarAdj, _r332_t0[8], 0);
            var r332_turned = r1_fallback(r332_turned, _r332_t0[9], false);
            var r332_styTop = r1_fallback(r332_styTop, _r332_t0[10], void 0);
            var r332_styBot = r1_fallback(r332_styBot, _r332_t0[11], void 0);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                var _r337_t0, _r337_t1;
                var r337_tailSlab = r332_turned ? r332_styTop : r332_styBot;
                var r337_cw = r332_turned && r337_tailSlab !== void 0;
                var r337_yBarBottom = r1_mix(0, r332_top, r313_DesignParameters.eBarPos + r332_pyBarAdj) - r332_stroke / 2;
                r337_currentGlyph.include(r313_HBar.b(r332_df.leftSB + r313_OX + r332_stroke / 2 + r332_bbd, r332_df.rightSB - r313_OX - r332_stroke / 2, r337_yBarBottom, r332_stroke));
                var r337_path = r337_currentGlyph.include(r313_dispiro(r313_widths.lhs(r332_stroke), r313_flat(r332_df.rightSB - r313_OX, r337_yBarBottom, r313_heading(r313_Upward)), r313_curl(r332_df.rightSB - r313_OX, Math.max(r332_top - r332_adb, r337_yBarBottom + r313_TINY)), r313_Arch.lhs(r332_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r332_stroke)), r313_flatside.ld(r332_df.leftSB, 0, r332_top, r332_ada, r332_adb), r313_SmallESerifedTerminalShape(r332_df, r332_top, r332_stroke, r332_hook, r337_tailSlab, r337_cw)));
                r337_currentGlyph.include(r313_SmallETerminalSerif(r332_df, r332_top, r332_stroke, r332_hook, r337_tailSlab, r337_cw));
                if (r332_turned) r337_currentGlyph.include(r313_FlipAround(r332_df.middle, r332_top / 2));
                return r337_path.rhsKnots[r337_path.rhsKnots.length - 1];
            });
        };
        var r313_RevSmallEShape = function () {
            var _r344_t5;
            var _r344_t6 = arguments;
            var r344_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r344_t6, 0);
            var _r344_t0 = [];
            var _r344_t1 = 0;
            while (_r344_t1 < r344_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r344_xn$flexarguments$2Lrc7uIe5[_r344_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r344_t0.push(r344_xn$flexarguments$2Lrc7uIe5[_r344_t1]);
                _r344_t1 = _r344_t1 + 1;
            }
            var _r344_t2 = r344_xn$flexarguments$2Lrc7uIe5;
            var _r344_t3 = _r344_t2.length;
            var _r344_t4 = 0;
            while (_r344_t4 < _r344_t3) {
                _r344_t1 = _r344_t2[_r344_t4];
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "df") r344_df = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "top") r344_top = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "stroke") r344_stroke = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "hook") r344_hook = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "ada") r344_ada = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "adb") r344_adb = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "curlyBar") r344_curlyBar = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "pyBarAdj") r344_pyBarAdj = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "turned") r344_turned = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "styTop") r344_styTop = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "styBot") r344_styBot = _r344_t1.right;
                _r344_t4 = _r344_t4 + 1;
            }
            var r344_df = r1_fallback(r344_df, _r344_t0[0]);
            var r344_top = r1_fallback(r344_top, _r344_t0[1]);
            var r344_stroke = r1_fallback(r344_stroke, _r344_t0[2], r313_AdviceStroke2(2, 3, r344_top));
            var r344_hook = r1_fallback(r344_hook, _r344_t0[3], r313_AHook);
            var r344_ada = r1_fallback(r344_ada, _r344_t0[4], r313_SmallArchDepthA);
            var r344_adb = r1_fallback(r344_adb, _r344_t0[5], r313_SmallArchDepthB);
            var r344_curlyBar = r1_fallback(r344_curlyBar, _r344_t0[6], false);
            var r344_pyBarAdj = r1_fallback(r344_pyBarAdj, _r344_t0[7], 0);
            var r344_turned = r1_fallback(r344_turned, _r344_t0[8], false);
            var r344_styTop = r1_fallback(r344_styTop, _r344_t0[9], void 0);
            var r344_styBot = r1_fallback(r344_styBot, _r344_t0[10], void 0);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                var _r349_t0, _r349_t1;
                var r349_tailSlab = r344_turned ? r344_styTop : r344_styBot;
                var r349_ccw = r344_turned && r349_tailSlab !== void 0;
                var r349_yBarBottom = r1_mix(0, r344_top, r313_DesignParameters.eBarPos + r344_pyBarAdj) - r344_stroke / 2;
                r349_currentGlyph.include(r313_HBar.b(r344_df.leftSB + r313_OX + r344_stroke / 2, r344_df.rightSB - r313_OX - r344_stroke / 2, r349_yBarBottom, r344_stroke));
                r349_currentGlyph.include(r313_dispiro(r313_widths.rhs(r344_stroke), r313_flat(r344_df.leftSB + r313_OX, r349_yBarBottom, r313_heading(r313_Upward)), r313_curl(r344_df.leftSB + r313_OX, Math.max(r344_top - r344_ada, r349_yBarBottom + r313_TINY)), r313_Arch.rhs(r344_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r344_stroke)), r313_flatside.rd(r344_df.rightSB, 0, r344_top, r344_ada, r344_adb), r313_RevSmallESerifedTerminalShape(r344_df, r344_top, r344_stroke, r344_hook, r349_tailSlab, r349_ccw)));
                r349_currentGlyph.include(r313_RevSmallETerminalSerif(r344_df, r344_top, r344_stroke, r344_hook, r349_tailSlab, r349_ccw));
                if (r344_turned) r349_currentGlyph.include(r313_FlipAround(r344_df.middle, r344_top / 2));
                return void 0;
            });
        };
        var r313_SmallERoundedShape = function () {
            var _r356_t5;
            var _r356_t6 = arguments;
            var r356_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r356_t6, 0);
            var _r356_t0 = [];
            var _r356_t1 = 0;
            while (_r356_t1 < r356_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r356_xn$flexarguments$2Lrc7uIe5[_r356_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r356_t0.push(r356_xn$flexarguments$2Lrc7uIe5[_r356_t1]);
                _r356_t1 = _r356_t1 + 1;
            }
            var _r356_t2 = r356_xn$flexarguments$2Lrc7uIe5;
            var _r356_t3 = _r356_t2.length;
            var _r356_t4 = 0;
            while (_r356_t4 < _r356_t3) {
                _r356_t1 = _r356_t2[_r356_t4];
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "df") r356_df = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "top") r356_top = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "stroke") r356_stroke = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "hook") r356_hook = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "ada") r356_ada = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "adb") r356_adb = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "curlyBar") r356_curlyBar = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "pyBarAdj") r356_pyBarAdj = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "turned") r356_turned = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "styTop") r356_styTop = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "styBot") r356_styBot = _r356_t1.right;
                _r356_t4 = _r356_t4 + 1;
            }
            var r356_df = r1_fallback(r356_df, _r356_t0[0]);
            var r356_top = r1_fallback(r356_top, _r356_t0[1]);
            var r356_stroke = r1_fallback(r356_stroke, _r356_t0[2], r313_AdviceStroke2(2, 3, r356_top));
            var r356_hook = r1_fallback(r356_hook, _r356_t0[3], r313_AHook);
            var r356_ada = r1_fallback(r356_ada, _r356_t0[4], r313_SmallArchDepthA);
            var r356_adb = r1_fallback(r356_adb, _r356_t0[5], r313_SmallArchDepthB);
            var r356_curlyBar = r1_fallback(r356_curlyBar, _r356_t0[6], r313_para.isItalic);
            var r356_pyBarAdj = r1_fallback(r356_pyBarAdj, _r356_t0[7], r356_curlyBar ? 0 : -0.025);
            var r356_turned = r1_fallback(r356_turned, _r356_t0[8], false);
            var r356_styTop = r1_fallback(r356_styTop, _r356_t0[9], void 0);
            var r356_styBot = r1_fallback(r356_styBot, _r356_t0[10], void 0);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                var _r361_t0, _r361_t1;
                var r361_tailSlab = r356_turned ? r356_styTop : r356_styBot;
                var r361_cw = r356_turned && r361_tailSlab !== void 0;
                var r361_yBarBottom = r1_mix(0, r356_top, r313_DesignParameters.eBarPos + r356_pyBarAdj) - r356_stroke / 2;
                var r361_xStart = r356_df.leftSB + r313_HSwToV(0.125 * r356_stroke);
                var r361_extraCurliness = r356_curlyBar ? 0.1 * (r356_top - r361_yBarBottom) : 0;
                var r361_ada2 = r313_ArchDepthAOf((1 - r313_DesignParameters.eBarPos) * r313_SmallArchDepth);
                var r361_adb2 = r313_ArchDepthBOf((1 - r313_DesignParameters.eBarPos) * r313_SmallArchDepth);
                var r361_path = r361_currentGlyph.include(r313_dispiro(r313_widths.lhs(r356_stroke), (r356_curlyBar ? r313_g2 : r313_flat)(r361_xStart, r361_yBarBottom), (r356_curlyBar ? r313_virt : r313_curl)(r1_mix(r361_xStart, r356_df.rightSB, 0.475 + 0.1 * r313_TanSlope), r361_yBarBottom, r356_curlyBar ? void 0 : r313_heading(r313_Rightward)), r313_archv(), r313_g4(r356_df.rightSB - r313_OX - 0.5 * (r356_df.width / r313_HalfUPM) * r361_extraCurliness, r313_YSmoothMidR(r356_top, r361_yBarBottom, r361_ada2, r361_adb2)), r313_Arch.lhs(r356_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r356_stroke)), r313_flatside.ld(r356_df.leftSB, 0, r356_top, r356_ada, r356_adb), r313_SmallESerifedTerminalShape(r356_df, r356_top, r356_stroke, r356_hook, r361_tailSlab, r361_cw)));
                r361_currentGlyph.include(r313_SmallETerminalSerif(r356_df, r356_top, r356_stroke, r356_hook, r361_tailSlab, r361_cw));
                if (r356_turned) r361_currentGlyph.include(r313_FlipAround(r356_df.middle, r356_top / 2));
                return r361_path.rhsKnots[r361_path.rhsKnots.length - 1];
            });
        };
        var r313_RevSmallERoundedShape = function () {
            var _r367_t5;
            var _r367_t6 = arguments;
            var r367_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r367_t6, 0);
            var _r367_t0 = [];
            var _r367_t1 = 0;
            while (_r367_t1 < r367_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r367_xn$flexarguments$2Lrc7uIe5[_r367_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r367_t0.push(r367_xn$flexarguments$2Lrc7uIe5[_r367_t1]);
                _r367_t1 = _r367_t1 + 1;
            }
            var _r367_t2 = r367_xn$flexarguments$2Lrc7uIe5;
            var _r367_t3 = _r367_t2.length;
            var _r367_t4 = 0;
            while (_r367_t4 < _r367_t3) {
                _r367_t1 = _r367_t2[_r367_t4];
                if (_r367_t1 && _r367_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r367_t1.left === "df") r367_df = _r367_t1.right;
                if (_r367_t1 && _r367_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r367_t1.left === "top") r367_top = _r367_t1.right;
                if (_r367_t1 && _r367_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r367_t1.left === "stroke") r367_stroke = _r367_t1.right;
                if (_r367_t1 && _r367_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r367_t1.left === "hook") r367_hook = _r367_t1.right;
                if (_r367_t1 && _r367_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r367_t1.left === "ada") r367_ada = _r367_t1.right;
                if (_r367_t1 && _r367_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r367_t1.left === "adb") r367_adb = _r367_t1.right;
                if (_r367_t1 && _r367_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r367_t1.left === "curlyBar") r367_curlyBar = _r367_t1.right;
                if (_r367_t1 && _r367_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r367_t1.left === "pyBarAdj") r367_pyBarAdj = _r367_t1.right;
                if (_r367_t1 && _r367_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r367_t1.left === "turned") r367_turned = _r367_t1.right;
                if (_r367_t1 && _r367_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r367_t1.left === "styTop") r367_styTop = _r367_t1.right;
                if (_r367_t1 && _r367_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r367_t1.left === "styBot") r367_styBot = _r367_t1.right;
                _r367_t4 = _r367_t4 + 1;
            }
            var r367_df = r1_fallback(r367_df, _r367_t0[0]);
            var r367_top = r1_fallback(r367_top, _r367_t0[1]);
            var r367_stroke = r1_fallback(r367_stroke, _r367_t0[2], r313_AdviceStroke2(2, 3, r367_top));
            var r367_hook = r1_fallback(r367_hook, _r367_t0[3], r313_AHook);
            var r367_ada = r1_fallback(r367_ada, _r367_t0[4], r313_SmallArchDepthA);
            var r367_adb = r1_fallback(r367_adb, _r367_t0[5], r313_SmallArchDepthB);
            var r367_curlyBar = r1_fallback(r367_curlyBar, _r367_t0[6], r313_para.isItalic);
            var r367_pyBarAdj = r1_fallback(r367_pyBarAdj, _r367_t0[7], r367_curlyBar ? 0 : -0.025);
            var r367_turned = r1_fallback(r367_turned, _r367_t0[8], false);
            var r367_styTop = r1_fallback(r367_styTop, _r367_t0[9], void 0);
            var r367_styBot = r1_fallback(r367_styBot, _r367_t0[10], void 0);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                var _r372_t0, _r372_t1;
                var r372_tailSlab = r367_turned ? r367_styTop : r367_styBot;
                var r372_ccw = r367_turned && r372_tailSlab !== void 0;
                var r372_yBarBottom = r1_mix(0, r367_top, r313_DesignParameters.eBarPos + r367_pyBarAdj) - r367_stroke / 2;
                var r372_xStart = r367_df.rightSB - r313_HSwToV(0.125 * r367_stroke);
                var r372_extraCurliness = r367_curlyBar ? 0.1 * (r367_top - r372_yBarBottom) : 0;
                var r372_ada2 = r313_ArchDepthAOf((1 - r313_DesignParameters.eBarPos) * r313_SmallArchDepth);
                var r372_adb2 = r313_ArchDepthBOf((1 - r313_DesignParameters.eBarPos) * r313_SmallArchDepth);
                r372_currentGlyph.include(r313_dispiro(r313_widths.rhs(r367_stroke), (r367_curlyBar ? r313_g2 : r313_flat)(r372_xStart, r372_yBarBottom + 2 / 3 * r372_extraCurliness), (r367_curlyBar ? r313_g2.left.mid : r313_curl)(r1_mix(r372_xStart, r367_df.leftSB, 0.475 - 0.1 * r313_TanSlope), r372_yBarBottom - 1 / 3 * r372_extraCurliness, r313_heading(r313_Leftward)), r313_archv(), r313_g4(r367_df.leftSB + r313_OX, r313_YSmoothMidL(r367_top, r372_yBarBottom, r372_ada2, r372_adb2)), r313_Arch.rhs(r367_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r367_stroke)), r313_flatside.rd(r367_df.rightSB, 0, r367_top, r367_ada, r367_adb), r313_RevSmallESerifedTerminalShape(r367_df, r367_top, r367_stroke, r367_hook, r372_tailSlab, r372_ccw)));
                r372_currentGlyph.include(r313_RevSmallETerminalSerif(r367_df, r367_top, r367_stroke, r367_hook, r372_tailSlab, r372_ccw));
                if (r367_turned) r372_currentGlyph.include(r313_FlipAround(r367_df.middle, r367_top / 2));
                return void 0;
            });
        };
        var r313_AbkCheShape = function () {
            var _r378_t5;
            var _r378_t6 = arguments;
            var r378_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r378_t6, 0);
            var _r378_t0 = [];
            var _r378_t1 = 0;
            while (_r378_t1 < r378_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r378_xn$flexarguments$2Lrc7uIe5[_r378_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r378_t0.push(r378_xn$flexarguments$2Lrc7uIe5[_r378_t1]);
                _r378_t1 = _r378_t1 + 1;
            }
            var _r378_t2 = r378_xn$flexarguments$2Lrc7uIe5;
            var _r378_t3 = _r378_t2.length;
            var _r378_t4 = 0;
            while (_r378_t4 < _r378_t3) {
                _r378_t1 = _r378_t2[_r378_t4];
                if (_r378_t1 && _r378_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r378_t1.left === "fDesc") r378_fDesc = _r378_t1.right;
                if (_r378_t1 && _r378_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r378_t1.left === "Body") r378_Body = _r378_t1.right;
                if (_r378_t1 && _r378_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r378_t1.left === "df") r378_df = _r378_t1.right;
                if (_r378_t1 && _r378_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r378_t1.left === "top") r378_top = _r378_t1.right;
                if (_r378_t1 && _r378_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r378_t1.left === "stroke") r378_stroke = _r378_t1.right;
                if (_r378_t1 && _r378_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r378_t1.left === "hook") r378_hook = _r378_t1.right;
                if (_r378_t1 && _r378_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r378_t1.left === "ada") r378_ada = _r378_t1.right;
                if (_r378_t1 && _r378_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r378_t1.left === "adb") r378_adb = _r378_t1.right;
                if (_r378_t1 && _r378_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r378_t1.left === "styTop") r378_styTop = _r378_t1.right;
                if (_r378_t1 && _r378_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r378_t1.left === "styBot") r378_styBot = _r378_t1.right;
                _r378_t4 = _r378_t4 + 1;
            }
            var r378_fDesc = r1_fallback(r378_fDesc, _r378_t0[0]);
            var r378_Body = r1_fallback(r378_Body, _r378_t0[1]);
            var r378_df = r1_fallback(r378_df, _r378_t0[2]);
            var r378_top = r1_fallback(r378_top, _r378_t0[3]);
            var r378_stroke = r1_fallback(r378_stroke, _r378_t0[4], r378_df.adviceThinnerStroke2(2, 3, r378_top, 0.75));
            var r378_hook = r1_fallback(r378_hook, _r378_t0[5], r313_AHook);
            var r378_ada = r1_fallback(r378_ada, _r378_t0[6], r313_SmallArchDepthA);
            var r378_adb = r1_fallback(r378_adb, _r378_t0[7], r313_SmallArchDepthB);
            var r378_styTop = r1_fallback(r378_styTop, _r378_t0[8], void 0);
            var r378_styBot = r1_fallback(r378_styBot, _r378_t0[9], void 0);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r383_currentGlyph) {
                var r383_desc, _r383_t0, _r383_t1;
                var r383_gap = 0.375 * (r378_df.rightSB - r378_df.leftSB) - r313_HSwToV(0.25 * r378_stroke) + r378_stroke / 16;
                var r383_subDf = r313_DivFrame(Math.min((r378_df.width - r383_gap) / r313_Width, 0.75 * r378_df.adws), 2);
                r383_currentGlyph.include(r378_Body(r383_subDf, r378_top, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r378_stroke), new r313_xn$NamedParameterPair$2Lrc9b("hook", r378_hook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r378_ada * 0.75 * r378_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("adb", r378_adb * 0.75 * r378_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("curlyBar", false), new r313_xn$NamedParameterPair$2Lrc9b("pyBarAdj", 0), new r313_xn$NamedParameterPair$2Lrc9b("styTop", r378_styTop), new r313_xn$NamedParameterPair$2Lrc9b("styBot", r378_styBot)));
                if (r378_fDesc) {
                    r383_desc = -r313_LongVJut + r313_QuarterStroke;
                    r383_currentGlyph.include(r313_ExtendBelowBaseAnchors(r383_desc));
                    r383_currentGlyph.include(r313_difference(r313_VBar.m(r383_subDf.middle, r383_desc, r313_O + r378_stroke, r313_VJutStroke * (r383_subDf.mvs / r313_Stroke)), r313_OShapeOutline.NoOvershoot(r378_top, 0, r383_subDf.leftSB, r383_subDf.rightSB, r378_stroke)));
                }
                var r383_shift = r378_df.width - r383_subDf.width;
                r383_currentGlyph.include(r313_Translate(r383_shift, 0));
                var r383_hd = r313_FlatHookDepth(r378_df);
                var r383_yBarBottom = r1_mix(0, r378_top, r313_DesignParameters.eBarPos) - r378_stroke / 2;
                r383_currentGlyph.include(r313_intersection(r313_MaskLeft(r383_subDf.leftSB + r383_shift), r313_dispiro(r313_widths.lhs(r378_stroke), r313_flat(r378_df.leftSB - r313_HSwToV(0.25 * r378_stroke), r383_yBarBottom + r313_Hook, r313_heading(r313_Downward)), r313_curl(r378_df.leftSB - r313_HSwToV(0.25 * r378_stroke), r383_yBarBottom + Math.min(r313_Hook, r383_hd.y) - 0.25 * r378_stroke, r313_heading(r313_Downward)), r313_arcvh(), r313_flat(Math.min(r378_df.leftSB + r383_hd.x - r313_HSwToV(0.5 * r378_stroke), r383_subDf.leftSB + r383_shift), r383_yBarBottom), r313_curl(r383_subDf.middle + r383_shift, r383_yBarBottom))));
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r398_t0, _r398_t1;
            return {
                "SmallEConfig": r313_SmallEConfig
            };
        });
        var r313_SmallEConfig = {
            "flatCrossbar": [r313_SmallEShape, r313_RevSmallEShape],
            "rounded": [r313_SmallERoundedShape, r313_RevSmallERoundedShape]
        };
        var _r313_t13 = Object.entries(r313_SmallEConfig)[Symbol.iterator]();
        var _r313_t14 = void 0;
        while (!(_r313_t14 = _r313_t13.next()).done) {
            _r313_t15 = _r313_t14.value;
            r313_suffix = _r313_t15[0];
            r313_Body = _r313_t15[1][0];
            r313_RevBody = _r313_t15[1][1];
            _r313_t15[1];
            (function () {
                var r401_suffixSerif, r401_styTop, r401_styBot, _r401_t2, _r401_t3, _r401_tag4;
                r313_xn$GlyphSaveSink$2Lrc4b.save("e." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r404_currentGlyph) {
                    var _r404_t0, _r404_t1;
                    r404_currentGlyph.include(r313_MarkSet.e());
                    r404_currentGlyph.include(r313_Body(r313_DivFrame(1), r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("eOgonek." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r412_currentGlyph) {
                    var _r412_t0, _r412_t1;
                    r412_currentGlyph.include(r313_MarkSet.e());
                    var r412_lastKnot = r412_currentGlyph.include(r313_Body(r313_DivFrame(1), r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB)));
                    r412_currentGlyph.include(r313_xn$referglyph$1aao("ogonekTR/spacer"));
                    var r412_fine = r313_AdviceStroke(8);
                    var r412_depth = -r313_Descender - r313_markStroke;
                    var r412_extL = 7 / 16 * r412_depth + 0.25 * r313_markStress;
                    var r412_extR = Math.max(0.0625 * r313_markExtend, r313_TanSlope * (1.5 * r313_markStroke));
                    var r412_beginCoSlope = r313_para.isItalic ? 0.2 : 0;
                    r412_currentGlyph.setBaseAnchor("trailing", r313_RightSB + r412_extR, -r412_depth + 0.5 * r313_O - r313_markStroke);
                    r412_currentGlyph.setBaseAnchor("belowBraceL", r313_RightSB - r412_extL - r313_HSwToV(0.25 * r313_markStroke), -0.75 * r412_depth);
                    r412_currentGlyph.setBaseAnchor("belowBraceR", r313_RightSB - 0.75 * r412_extL, -0.75 * r412_depth);
                    var r412_turnSlope = 0.5 * ((r313_markStroke - r412_fine) / r313_markStroke - (r313_ArchDepthB - r313_ArchDepth) / r313_ArchDepth);
                    r412_currentGlyph.include(r313_intersection(r313_MaskBelow(r412_lastKnot.y), r313_dispiro(r313_g4(r412_lastKnot.x, r412_lastKnot.y, r313_widths.rhs(r412_fine)), r313_g4(r412_lastKnot.x - r412_beginCoSlope * r313_TINY, r412_lastKnot.y - r313_TINY), r313_alsoThruThem.computed([1 / 3, 2 / 3], {
                        "rx": function (r423_rt) {
                            var _r423_t0, _r423_t1;
                            return r423_rt;
                        },
                        "deltaX": function (r424_rt) {
                            var _r424_t0, _r424_t1;
                            return 0;
                        },
                        "ry": function (r425_rt) {
                            var _r425_t0, _r425_t1;
                            return 11 / 48 + 5 / 8 * r425_rt;
                        },
                        "deltaY": function (r426_rt) {
                            var _r426_t0, _r426_t1;
                            return -0.25 * r1_mix(r412_fine, r313_markStroke, r426_rt);
                        },
                        "modifier": function (r427_rt) {
                            var _r427_t0, _r427_t1;
                            return r313_widths.rhs(r1_mix(r412_fine, r313_markStroke, Math.pow(r427_rt, 2)));
                        }
                    }), r313_g4.down.mid(r313_RightSB - r412_extL, -0.75 * r412_depth, r313_widths.rhs.heading(r313_markStroke, {
                        "x": r313_HVContrast,
                        "y": r412_turnSlope
                    })), r313_arcvh(r313_widths.rhs(r313_markStroke)), r313_g4(r313_RightSB + r1_mix(-r412_extL, +r412_extR, 11 / 16), -r412_depth + r313_O, r313_heading(r313_Rightward)), r313_g4(r313_RightSB + r412_extR, -r412_depth + 0.5 * r313_O, r313_heading(r313_Rightward)))));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("eNotch." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r431_currentGlyph) {
                    var _r431_t0, _r431_t1;
                    r431_currentGlyph.include(r313_MarkSet.e());
                    var r431_lastKnot = r431_currentGlyph.include(r313_Body(r313_DivFrame(1), r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB)));
                    var r431_sw = r313_AdviceStroke(4);
                    var r431_ry = Math.min(r431_lastKnot.y - r431_sw, r1_mix(0, r313_XH, 0.08));
                    var r431_rx = Math.min(r431_ry);
                    r431_currentGlyph.include(r313_dispiro(r313_g4.down.start(r431_lastKnot.x, r431_lastKnot.y, r313_widths.rhs(r431_sw)), r313_arcvh(), r313_g4(r431_lastKnot.x + r431_rx, r431_lastKnot.y - r431_ry + r313_O), r313_archv(), r313_g4.up.end(r431_lastKnot.x + r431_rx * 2, r431_lastKnot.y)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("eRetroflexHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r440_currentGlyph) {
                    var _r440_t0, _r440_t1;
                    r440_currentGlyph.include(r313_MarkSet.e());
                    r440_currentGlyph.include(r313_Body(r313_DivFrame(1), r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("styBot", r313_xn$SLABCLASSICAL$5sIl)));
                    r440_currentGlyph.include(r313_RetroflexHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_RightSB), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r313_DToothlessRise)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("reve." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r453_currentGlyph) {
                    var _r453_t0, _r453_t1;
                    r453_currentGlyph.include(r313_MarkSet.e());
                    r453_currentGlyph.include(r313_RevBody(r313_DivFrame(1), r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("eBar." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r461_currentGlyph) {
                    var _r461_t0, _r461_t1;
                    r461_currentGlyph.include(r313_xn$referglyph$1aao("e." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r461_yBar = r1_mix(r313_Stroke, r1_mix(0, r313_XH, r313_DesignParameters.eBarPos) - r313_HalfStroke, 0.5);
                    r461_currentGlyph.include(r313_HBar.m(r1_mix(r313_SB, 0, 0.7), r1_mix(r313_RightSB, r313_Width, 0.7), r461_yBar, Math.min(r461_yBar - r313_Stroke, r313_AdviceStroke(5))));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("eFlourish." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r466_currentGlyph) {
                    var _r466_t0, _r466_t1;
                    var r466_df = r466_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
                    var r466_stroke = r466_df.adviceThinnerStroke2(2, 3, r313_XH, 0.75);
                    var r466_gap = 0.375 * (r466_df.rightSB - r466_df.leftSB) - r313_HSwToV(0.25 * r466_stroke) + r466_stroke / 16;
                    var r466_subDf = r313_DivFrame(Math.min((r466_df.width - r466_gap) / r313_Width, 0.75 * r466_df.adws), 2);
                    r466_currentGlyph.include(r313_Body(r466_subDf, r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r466_stroke), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r466_subDf.archDepthAOf(r313_SmallArchDepth, r466_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("adb", r466_subDf.archDepthBOf(r313_SmallArchDepth, r466_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("curlyBar", false), new r313_xn$NamedParameterPair$2Lrc9b("pyBarAdj", 0)));
                    var r466_shift = r466_df.width - r466_subDf.width;
                    r466_currentGlyph.include(r313_Translate(r466_shift, 0));
                    var r466_hd = r313_FlatHookDepth(r466_df);
                    var r466_yBarTop = r1_mix(0, r313_XH, r313_DesignParameters.eBarPos) + r466_stroke / 2;
                    r466_currentGlyph.include(r313_intersection(r313_MaskLeft(r466_subDf.leftSB + r466_shift), r313_dispiro(r313_widths.rhs(r466_stroke), r313_flat(r466_df.leftSB - r313_HSwToV(0.25 * r466_stroke), r466_yBarTop - r313_Hook, r313_heading(r313_Upward)), r313_curl(r466_df.leftSB - r313_HSwToV(0.25 * r466_stroke), r466_yBarTop - Math.max(r313_Hook, r466_hd.y) + 0.25 * r466_stroke, r313_heading(r313_Upward)), r313_arcvh(), r313_flat(Math.min(r466_df.leftSB + r466_hd.x - r313_HSwToV(0.5 * r466_stroke), r466_subDf.leftSB + r466_shift), r466_yBarTop), r313_curl(r466_subDf.middle + r466_shift, r466_yBarTop))));
                    return void 0;
                }));
                r313_DefineSelectorGlyph("Schwa", r313_suffix, r313_DivFrame(1), "capital");
                r313_DefineSelectorGlyph("schwa", r313_suffix, r313_DivFrame(1), "e");
                var r401_rhoticDf = r313_DivFrame(r313_para.advanceScaleM, 1);
                r313_DefineSelectorGlyph("schwaRhoticHook", r313_suffix, r401_rhoticDf, "e");
                r313_DefineSelectorGlyph("schwaRetroflexHook", r313_suffix, r401_rhoticDf, "p");
                var r401_abkCheDf = r313_DivFrame(r313_para.advanceScaleM, 3);
                r313_DefineSelectorGlyph("cyrl/abk/Che", r313_suffix, r401_abkCheDf, "capital");
                r313_DefineSelectorGlyph("cyrl/abk/che", r313_suffix, r401_abkCheDf, "e");
                r313_DefineSelectorGlyph("cyrl/abk/CheDescender", r313_suffix, r401_abkCheDf, "capDesc");
                r313_DefineSelectorGlyph("cyrl/abk/cheDescender", r313_suffix, r401_abkCheDf, "p");
                var _r401_t0 = Object.entries(r313_CConfig)[Symbol.iterator]();
                var _r401_t1 = void 0;
                while (!(_r401_t1 = _r401_t0.next()).done) {
                    _r401_t2 = _r401_t1.value;
                    r401_suffixSerif = _r401_t2[0];
                    r401_styTop = _r401_t2[1][0];
                    r401_styBot = _r401_t2[1][1];
                    _r401_t2[1];
                    (function () {
                        if (!r401_styBot) {
                            r313_xn$GlyphSaveSink$2Lrc4b.save("Schwa." + r313_suffix + "." + r401_suffixSerif, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r482_currentGlyph) {
                                var _r482_t0, _r482_t1;
                                r482_currentGlyph.setWidth(0);
                                r482_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                                r482_currentGlyph.include(r313_Body(r313_DivFrame(1), r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("turned", true), new r313_xn$NamedParameterPair$2Lrc9b("styTop", r401_styTop), new r313_xn$NamedParameterPair$2Lrc9b("styBot", r401_styBot)));
                                return void 0;
                            }));
                            r313_xn$GlyphSaveSink$2Lrc4b.save("schwa." + r313_suffix + "." + r401_suffixSerif, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r494_currentGlyph) {
                                var _r494_t0, _r494_t1;
                                r494_currentGlyph.setWidth(0);
                                r494_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                                r494_currentGlyph.include(r313_Body(r313_DivFrame(1), r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("turned", true), new r313_xn$NamedParameterPair$2Lrc9b("styTop", r401_styTop), new r313_xn$NamedParameterPair$2Lrc9b("styBot", r401_styBot)));
                                return void 0;
                            }));
                            r313_xn$GlyphSaveSink$2Lrc4b.save("schwaRhoticHook." + r313_suffix + "." + r401_suffixSerif, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r506_currentGlyph) {
                                var _r506_t0, _r506_t1;
                                r506_currentGlyph.setWidth(0);
                                r506_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                                var r506_subDf = r313_DivFrame(0.75 * r313_para.advanceScaleM, 2);
                                var r506_stroke = r506_subDf.adviceStroke2(2, 3, r313_XH);
                                r506_currentGlyph.include(r313_Body(r506_subDf, r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r506_stroke), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r506_subDf.archDepthAOf(r313_SmallArchDepth, r506_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("adb", r506_subDf.archDepthBOf(r313_SmallArchDepth, r506_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("turned", true), new r313_xn$NamedParameterPair$2Lrc9b("styTop", r401_styTop), new r313_xn$NamedParameterPair$2Lrc9b("styBot", r401_styBot)));
                                r506_currentGlyph.include(r313_RhoticHookShape(r506_subDf.rightSB - r313_HSwToV(1.25 * r313_markFine), r401_rhoticDf.width, r1_mix(r313_XH, 0, r313_DesignParameters.eBarPos), r1_mix(0, r313_XH, 0.2)));
                                return void 0;
                            }));
                            r313_xn$GlyphSaveSink$2Lrc4b.save("schwaRetroflexHook." + r313_suffix + "." + r401_suffixSerif, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r520_currentGlyph) {
                                var _r520_leti0, _r520_t1, _r520_t2, _r520_t6, _r520_tag7;
                                r520_currentGlyph.setWidth(0);
                                r520_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                                var r520_subDf = r313_DivFrame(0.75 * r313_para.advanceScaleM, 2);
                                var r520_stroke = r520_subDf.adviceStroke2(2, 3, r313_XH);
                                r520_currentGlyph.include(r313_Body(r520_subDf, r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r520_stroke), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r520_subDf.archDepthAOf(r313_SmallArchDepth, r520_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("adb", r520_subDf.archDepthBOf(r313_SmallArchDepth, r520_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("turned", true), new r313_xn$NamedParameterPair$2Lrc9b("styTop", r401_styTop), new r313_xn$NamedParameterPair$2Lrc9b("styBot", r401_styBot)));
                                var _r520_t3 = r520_currentGlyph;
                                var _r520_t4 = _r520_t3.include;
                                var _r520_t5 = Math.min(r520_stroke, r401_rhoticDf.adviceStroke(3));
                                var _r520_t8 = (function (_r520_leti0) {
                                    var r532_fine = _r520_leti0;
                                    return r313_RetroflexHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r1_mix(Math.max(r313_RightSB, r520_subDf.rightSB + r313_HSwToV(r313_RetroflexHook.Sw(r532_fine))), r401_rhoticDf.width, 0.5)), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r1_mix(r313_XH, 0, r313_DesignParameters.eBarPos) - r532_fine / 2), new r313_xn$NamedParameterPair$2Lrc9b("xLink", r520_subDf.rightSB - r313_HSwToV(0.5 * r520_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r532_fine));
                                })(_r520_t5);
                                _r520_t4.call(_r520_t3, _r520_t8);
                                return void 0;
                            }));
                        }
                        return !r401_styTop ? (r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/abk/Che." + r313_suffix + "." + r401_suffixSerif, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r540_currentGlyph) {
                            var _r540_t0, _r540_t1;
                            r540_currentGlyph.setWidth(0);
                            r540_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r540_currentGlyph.include(r313_AbkCheShape(false, r313_Body, r401_abkCheDf, r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("styTop", r401_styTop), new r313_xn$NamedParameterPair$2Lrc9b("styBot", r401_styBot)));
                            return void 0;
                        })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/abk/che." + r313_suffix + "." + r401_suffixSerif, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r551_currentGlyph) {
                            var _r551_t0, _r551_t1;
                            r551_currentGlyph.setWidth(0);
                            r551_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r551_currentGlyph.include(r313_AbkCheShape(false, r313_Body, r401_abkCheDf, r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("styTop", r401_styTop), new r313_xn$NamedParameterPair$2Lrc9b("styBot", r401_styBot)));
                            return void 0;
                        })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/abk/CheDescender." + r313_suffix + "." + r401_suffixSerif, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r562_currentGlyph) {
                            var _r562_t0, _r562_t1;
                            r562_currentGlyph.setWidth(0);
                            r562_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r562_currentGlyph.include(r313_AbkCheShape(true, r313_Body, r401_abkCheDf, r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("styTop", r401_styTop), new r313_xn$NamedParameterPair$2Lrc9b("styBot", r401_styBot)));
                            return void 0;
                        })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/abk/cheDescender." + r313_suffix + "." + r401_suffixSerif, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r573_currentGlyph) {
                            var _r573_t0, _r573_t1;
                            r573_currentGlyph.setWidth(0);
                            r573_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r573_currentGlyph.include(r313_AbkCheShape(true, r313_Body, r401_abkCheDf, r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("styTop", r401_styTop), new r313_xn$NamedParameterPair$2Lrc9b("styBot", r401_styBot)));
                            return void 0;
                        }))) : void 0;
                    })();
                }
                r313_xn$selectvariant$7Hrq("Schwa." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/E/topSerif"));
                r313_xn$selectvariant$7Hrq("schwa." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/e/topSerif"));
                r313_xn$selectvariant$7Hrq("schwaRhoticHook." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/e/topSerif"));
                r313_xn$selectvariant$7Hrq("schwaRetroflexHook." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/e/topSerif"));
                r313_xn$selectvariant$7Hrq("cyrl/abk/Che." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "C/bottomSerif"));
                r313_xn$selectvariant$7Hrq("cyrl/abk/che." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "c/bottomSerif"));
                r313_xn$selectvariant$7Hrq("cyrl/abk/CheDescender." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "C/bottomSerif"));
                return r313_xn$selectvariant$7Hrq("cyrl/abk/cheDescender." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "c/bottomSerif"));
            })();
        }
        r313_xn$selectvariant$7Hrq("e", "e");
        r313_xn$selectvariant$7Hrq("eOgonek", 281, new r313_xn$NamedParameterPair$2Lrc9b("follow", "e"));
        r313_xn$selectvariant$7Hrq("eRetroflexHook", 7570, new r313_xn$NamedParameterPair$2Lrc9b("follow", "e"));
        r313_xn$selectvariant$7Hrq("eNotch", 11384, new r313_xn$NamedParameterPair$2Lrc9b("follow", "e"));
        r313_xn$selectvariant$7Hrq("eBar", 43827, new r313_xn$NamedParameterPair$2Lrc9b("follow", "e"));
        r313_xn$selectvariant$7Hrq("eFlourish", 43828, new r313_xn$NamedParameterPair$2Lrc9b("follow", "e"));
        r313_xn$selectvariant$7Hrq("reve", 600, new r313_xn$NamedParameterPair$2Lrc9b("follow", "e"));
        r313_CreateTurnedLetter("turne", 477, "e", r313_HalfAdvance, r313_XH / 2);
        r313_CreateSelectorVariants("Schwa", 399, Object.keys(r313_SmallEConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "eCap"));
        r313_CreateSelectorVariants("schwa", 601, Object.keys(r313_SmallEConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "e"));
        r313_CreateSelectorVariants("schwaRhoticHook", 602, Object.keys(r313_SmallEConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "e"));
        r313_CreateSelectorVariants("schwaRetroflexHook", 7573, Object.keys(r313_SmallEConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "e"));
        r313_alias("cyrl/ye", 1077, "e");
        r313_alias("cyrl/Schwa", 1240, "Schwa");
        r313_alias("cyrl/schwa", 1241, "schwa");
        r313_CreateSelectorVariants("cyrl/abk/Che", 1212, Object.keys(r313_SmallEConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "eCap"));
        r313_CreateSelectorVariants("cyrl/abk/che", 1213, Object.keys(r313_SmallEConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "e"));
        r313_CreateSelectorVariants("cyrl/abk/CheDescender", 1214, Object.keys(r313_SmallEConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "eCap"));
        r313_CreateSelectorVariants("cyrl/abk/cheDescender", 1215, Object.keys(r313_SmallEConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "e"));
        var _r313_t16 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t16.BBS;
        var r313_BBD = _r313_t16.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/e", 120150, new r313_xn$Capture$2Lrc8.GlyphProc(function (r607_currentGlyph) {
            var _r607_t0, _r607_t1;
            r607_currentGlyph.include(r313_MarkSet.e());
            r607_currentGlyph.include(r313_SmallEShape(r313_DivFrame(1), r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_BBS), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook), new r313_xn$NamedParameterPair$2Lrc9b("bbd", r313_BBD), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB)));
            r607_currentGlyph.include(r313_intersection(r313_OShapeOutline.NoOvershoot(r313_XH, 0, r313_SB, r313_RightSB, r313_BBS), r313_union(r313_VBar.l(r313_SB + r313_OX + r313_BBD, 0, r313_XH, r313_BBS), r313_VBar.r(r313_RightSB - r313_OX - r313_BBD, r1_mix(0, r313_XH, r313_DesignParameters.eBarPos), r313_XH, r313_BBS))));
            return void 0;
        }));
    });
    return void 0;
});


