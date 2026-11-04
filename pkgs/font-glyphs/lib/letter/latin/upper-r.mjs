"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-R", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_legShape, r313_fGap, r313_slabs, r313_doLegSlab, r313_doTail, _r313_t14, _r313_t17, _r313_t19, _r313_t20, _r313_t21, _r313_tag22, _r313_t23, _r313_tag24, _r313_t25, _r313_tag26, _r313_t27, _r313_tag28;
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
        var r313_Descender = _r313_t1.Descender;
        var r313_Translate = _r313_t1.Translate;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
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
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HBarPos = _r313_t1.HBarPos;
        var r313_Jut = _r313_t1.Jut;
        var r313_CThinB = _r313_t1.CThinB;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_ArchDepthAOf = _r313_t1.ArchDepthAOf;
        var r313_ArchDepthBOf = _r313_t1.ArchDepthBOf;
        var r313_YSmoothMidR = _r313_t1.YSmoothMidR;
        var r313_xn$VERYFAR$5sIl = _r313_t1["VERY-FAR"];
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_quadControls = _r313_t2.quadControls;
        var r313_archv = _r313_t2.archv;
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
        var r313_tagged = _r313_t5.tagged;
        var r313_Rect = _r313_t5.Rect;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_DiagCor = _r313_t5.DiagCor;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_Arch = _r313_t5.Arch;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var r313_ExtLineLhsToRhs = _r313_t5.ExtLineLhsToRhs;
        var r313_ExtLineRhsToLhs = _r313_t5.ExtLineRhsToLhs;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateTurnedLetter = _r313_t8.CreateTurnedLetter;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_BowlXDepth = _r313_t9.BowlXDepth;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_RightwardTailedBar = _r313_t10.RightwardTailedBar;
        var r313_RetroflexHook = _r313_t10.RetroflexHook;
        var r313_PalatalHook = _r313_t10.PalatalHook;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-P"].resolve();
        var r313_PShape = _r313_t11.PShape;
        var r313_RevPShape = _r313_t11.RevPShape;
        var r313_PBarPosY = _r313_t11.PBarPosY;
        var r313_PRotundaShape = _r313_t11.PRotundaShape;
        var r313_BBPShape = _r313_t11.BBPShape;
        var r313_PShapeOutline = _r313_t11.PShapeOutline;
        var r313_RLegTerminalX = function (r321_fStraightLeg, r321_right, r321_sw) {
            var _r321_t0, _r321_t1;
            return r321_right - (r321_fStraightLeg ? 2 : 0) * r313_OX;
        };
        var r313_RevRLegTerminalX = function (r322_fStraightLeg, r322_left, r322_sw) {
            var _r322_t0, _r322_t1;
            return r322_left + (r322_fStraightLeg ? 2 : 0) * r313_OX;
        };
        var r313_RSlabExtraShift = function (r323_slab, r323_sw) {
            var _r323_t0, _r323_t1;
            return r323_slab ? r313_HSwToV(0.5 * r323_sw) - r313_Jut / 2 : 0;
        };
        var r313_RLegTop = function (r324_charTop, r324_sw, r324_bp) {
            var _r324_t0, _r324_t1;
            return r313_PBarPosY(r324_charTop, r324_sw, r324_bp) + r324_sw / 2;
        };
        var r313_RStandingLegBend = function (r325_left, r325_right, r325_sw) {
            var _r325_t0, _r325_t1;
            return r1_clamp((r325_right - r325_left) * 0.875, (r325_right - r325_left) * 0.99, r325_sw * 1.5);
        };
        var r313_RStandingBottomOverflow = function (r326_slab) {
            var _r326_t0, _r326_t1;
            return (r326_slab ? 0 : 2) * r313_OX;
        };
        var r313_RLegShape = (function () {
            var r329_Straight, r329_Curly, r329_Standing;
            var r329_exports = {};
            r329_exports.Straight = r329_Straight = function (r337_top, r337_bottom, r337_left, r337_right, r337_charTop, r337_charLeft, r337_slab, r337_sw) {
                var _r337_t0, _r337_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                    var _r339_t0, _r339_t1;
                    var r339_shift = r313_RSlabExtraShift(r337_slab, r337_sw);
                    var r339_xLeftTop = Math.max(r337_charLeft + r313_HSwToV(r337_sw), r337_left - r313_HSwToV(0.5 * r337_sw) + r339_shift);
                    var r339_xRightBottom = r313_RLegTerminalX(true, r337_right, r337_sw) + r339_shift;
                    var r339_xRightBottomSerifStart = r339_xRightBottom - r313_HSwToV(0.25 * r337_sw);
                    r339_currentGlyph.include(r313_intersection(r313_Rect(r337_top, r337_bottom, -r313_xn$VERYFAR$5sIl, r337_slab ? r339_xRightBottomSerifStart : +r313_xn$VERYFAR$5sIl), r313_ExtLineLhsToRhs(r339_xLeftTop, r337_top, r339_xRightBottom, r337_bottom, r337_sw)));
                    if (r337_slab) r339_currentGlyph.include(r313_tagged("serifRB", r313_HSerif.rb(r339_xRightBottomSerifStart, r337_bottom, r313_SideJut + r313_Jut / 8, r337_sw)));
                    return void 0;
                });
            };
            r329_exports.Curly = r329_Curly = function (r343_top, r343_bottom, r343_left, r343_right, r343_charTop, r343_charLeft, r343_slab, r343_sw) {
                var _r343_t0, _r343_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                    var _r345_t0, _r345_t1;
                    var r345_xRightBottom = r313_RLegTerminalX(false, r343_right, r343_sw);
                    r345_currentGlyph.include(r313_intersection(r313_Rect(r343_top, r343_bottom, -r313_xn$VERYFAR$5sIl, +r313_xn$VERYFAR$5sIl), r313_dispiro(r313_widths.center(r343_sw), r313_g4.up.start(r345_xRightBottom - r313_HSwToV(0.5 * r343_sw), r343_bottom, r313_heading(r313_Upward)), r313_quadControls(0, 0.4, 8), r313_g4(r343_left, r343_top))));
                    if (r343_slab) r345_currentGlyph.include(r313_tagged("serifRB", r313_HSerif.rb(r343_right, r343_bottom, r313_SideJut + r313_Jut / 8, r343_sw)));
                    return void 0;
                });
            };
            r329_exports.Standing = r329_Standing = function (r349_top, r349_bottom, r349_left, r349_right, r349_charTop, r349_charLeft, r349_slab, r349_sw) {
                var _r349_t0, _r349_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                    var _r351_t0, _r351_t1;
                    var r351_fine = r349_sw * r313_CThinB;
                    var r351_bend = r313_RStandingLegBend(r349_left, r349_right, r349_sw);
                    var r351_yOffset = r1_mix(r349_bottom, r349_top, 0.2);
                    var r351_xOverflow = r313_RStandingBottomOverflow(r349_slab);
                    r351_currentGlyph.include(r313_dispiro(r313_widths.rhs(r351_fine), r313_flat(r349_left, r349_top - (r349_sw / 2 - r351_fine), r313_heading(r313_Rightward)), r313_curl(r349_right - r351_bend, r349_top - (r349_sw / 2 - r351_fine), r313_heading(r313_Rightward)), r313_archv(), r313_flat(r349_right + r313_O, Math.max(r351_yOffset + 1, r349_top - r351_bend * r349_charTop / r313_CAP), r313_widths.rhs.heading(r349_sw, r313_Downward)), r313_curl(r349_right + r313_O, r351_yOffset, r313_heading(r313_Downward)), r313_curl(r349_right + r313_O - r351_xOverflow, r349_bottom, r313_heading(r313_Downward))));
                    if (r349_slab) r351_currentGlyph.include(r313_tagged("serifRB", r313_HSerif.rb(r349_right, r349_bottom, r313_SideJut, r349_sw)));
                    return void 0;
                });
            };
            return r329_exports;
        })();
        var r313_RevRLegShape = (function () {
            var r356_Straight, r356_Curly, r356_Standing;
            var r356_exports = {};
            r356_exports.Straight = r356_Straight = function (r364_top, r364_bottom, r364_left, r364_right, r364_charTop, r364_charRight, r364_slab, r364_sw) {
                var _r364_t0, _r364_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                    var _r366_t0, _r366_t1;
                    var r366_shift = r313_RSlabExtraShift(r364_slab, r364_sw);
                    var r366_xLeftBottom = r313_RevRLegTerminalX(true, r364_left, r364_sw) - r366_shift;
                    var r366_xLeftBottomSerifStart = r366_xLeftBottom + r313_HSwToV(0.25 * r364_sw);
                    var r366_xRightTop = Math.min(r364_charRight - r313_HSwToV(r364_sw), r364_right + r313_HSwToV(0.5 * r364_sw) - r366_shift);
                    r366_currentGlyph.include(r313_intersection(r313_Rect(r364_top, r364_bottom, r364_slab ? r366_xLeftBottomSerifStart : -r313_xn$VERYFAR$5sIl, +r313_xn$VERYFAR$5sIl), r313_ExtLineRhsToLhs(r366_xRightTop, r364_top, r366_xLeftBottom, r364_bottom, r364_sw)));
                    if (r364_slab) r366_currentGlyph.include(r313_tagged("serifLB", r313_HSerif.lb(r366_xLeftBottomSerifStart, r364_bottom, r313_SideJut + r313_Jut / 8, r364_sw)));
                    return void 0;
                });
            };
            r356_exports.Curly = r356_Curly = function (r370_top, r370_bottom, r370_left, r370_right, r370_charTop, r370_charRight, r370_slab, r370_sw) {
                var _r370_t0, _r370_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                    var _r372_t0, _r372_t1;
                    var r372_xLeftBottom = r313_RevRLegTerminalX(false, r370_left, r370_sw);
                    r372_currentGlyph.include(r313_intersection(r313_Rect(r370_top, 0, -r313_xn$VERYFAR$5sIl, +r313_xn$VERYFAR$5sIl), r313_dispiro(r313_widths.center(r370_sw), r313_g4.up.start(r372_xLeftBottom + r313_HSwToV(0.5 * r370_sw), r370_bottom, r313_heading(r313_Upward)), r313_quadControls(0, 0.4, 8), r313_g4(r370_right, r370_top))));
                    if (r370_slab) r372_currentGlyph.include(r313_tagged("serifLB", r313_HSerif.lb(r370_left, r370_bottom, r313_SideJut + r313_Jut / 8, r370_sw)));
                    return void 0;
                });
            };
            r356_exports.Standing = r356_Standing = function (r376_top, r376_bottom, r376_left, r376_right, r376_charTop, r376_charRight, r376_slab, r376_sw) {
                var _r376_t0, _r376_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r378_currentGlyph) {
                    var _r378_t0, _r378_t1;
                    var r378_fine = r376_sw * r313_CThinB;
                    var r378_bend = r313_RStandingLegBend(r376_left, r376_right, r376_sw);
                    var r378_yOffset = r1_mix(r376_bottom, r376_top, 0.2);
                    var r378_xOverflow = r313_RStandingBottomOverflow(r376_slab);
                    r378_currentGlyph.include(r313_dispiro(r313_widths.lhs(r378_fine), r313_flat(r376_right, r376_top - (r376_sw / 2 - r378_fine), r313_heading(r313_Leftward)), r313_curl(r376_left + r378_bend, r376_top - (r376_sw / 2 - r378_fine), r313_heading(r313_Leftward)), r313_archv(), r313_flat(r376_left - r313_O, Math.max(r378_yOffset + 1, r376_top - r378_bend * r376_charTop / r313_CAP), r313_widths.lhs.heading(r376_sw, r313_Downward)), r313_curl(r376_left - r313_O, r378_yOffset, r313_heading(r313_Downward)), r313_curl(r376_left - r313_O + r378_xOverflow, r376_bottom, r313_heading(r313_Downward))));
                    if (r376_slab) r378_currentGlyph.include(r313_tagged("serifLB", r313_HSerif.lb(r376_left, r376_bottom, r313_SideJut, r376_sw)));
                    return void 0;
                });
            };
            return r356_exports;
        })();
        var r313_RShape = function () {
            var _r382_t5;
            var _r382_t6 = arguments;
            var r382_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r382_t6, 0);
            var _r382_t0 = [];
            var _r382_t1 = 0;
            while (_r382_t1 < r382_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r382_xn$flexarguments$2Lrc7uIe5[_r382_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r382_t0.push(r382_xn$flexarguments$2Lrc7uIe5[_r382_t1]);
                _r382_t1 = _r382_t1 + 1;
            }
            var _r382_t2 = r382_xn$flexarguments$2Lrc7uIe5;
            var _r382_t3 = _r382_t2.length;
            var _r382_t4 = 0;
            while (_r382_t4 < _r382_t3) {
                _r382_t1 = _r382_t2[_r382_t4];
                if (_r382_t1 && _r382_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r382_t1.left === "legShape") r382_legShape = _r382_t1.right;
                if (_r382_t1 && _r382_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r382_t1.left === "top") r382_top = _r382_t1.right;
                if (_r382_t1 && _r382_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r382_t1.left === "bp") r382_bp = _r382_t1.right;
                if (_r382_t1 && _r382_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r382_t1.left === "df") r382_df = _r382_t1.right;
                if (_r382_t1 && _r382_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r382_t1.left === "mul") r382_mul = _r382_t1.right;
                if (_r382_t1 && _r382_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r382_t1.left === "slab") r382_slab = _r382_t1.right;
                if (_r382_t1 && _r382_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r382_t1.left === "legSlab") r382_legSlab = _r382_t1.right;
                if (_r382_t1 && _r382_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r382_t1.left === "open") r382_open = _r382_t1.right;
                if (_r382_t1 && _r382_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r382_t1.left === "sw") r382_sw = _r382_t1.right;
                if (_r382_t1 && _r382_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r382_t1.left === "legBottom") r382_legBottom = _r382_t1.right;
                _r382_t4 = _r382_t4 + 1;
            }
            var r382_legShape = r1_fallback(r382_legShape, _r382_t0[0]);
            var r382_top = r1_fallback(r382_top, _r382_t0[1]);
            var r382_bp = r1_fallback(r382_bp, _r382_t0[2], r313_PShape.BarPos);
            var r382_df = r1_fallback(r382_df, _r382_t0[3], r313_DivFrame(1));
            var r382_mul = r1_fallback(r382_mul, _r382_t0[4], 1);
            var r382_slab = r1_fallback(r382_slab, _r382_t0[5], null);
            var r382_legSlab = r1_fallback(r382_legSlab, _r382_t0[6], false);
            var r382_open = r1_fallback(r382_open, _r382_t0[7], false);
            var r382_sw = r1_fallback(r382_sw, _r382_t0[8], r313_Stroke);
            var r382_legBottom = r1_fallback(r382_legBottom, _r382_t0[9], 0);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r387_currentGlyph) {
                var _r387_t0, _r387_t1;
                var r387_fSlabBot = r382_slab && r382_slab !== r313_PShape.SlabMotion;
                var r387_right = r382_df.rightSB - r313_O - (r382_slab ? 0.125 : 0) * r313_Jut;
                r387_currentGlyph.include(r313_difference(r313_PShape(r382_top, new r313_xn$NamedParameterPair$2Lrc9b("df", r382_df), new r313_xn$NamedParameterPair$2Lrc9b("mul", r382_mul), new r313_xn$NamedParameterPair$2Lrc9b("overshoot", r313_O), new r313_xn$NamedParameterPair$2Lrc9b("slab", r382_slab), new r313_xn$NamedParameterPair$2Lrc9b("bp", r382_bp), new r313_xn$NamedParameterPair$2Lrc9b("sw", r382_sw)), r382_open ? r313_PShape.OpenGap(new r313_xn$NamedParameterPair$2Lrc9b("df", r382_df), new r313_xn$NamedParameterPair$2Lrc9b("mul", r382_mul), new r313_xn$NamedParameterPair$2Lrc9b("bp", r382_bp), new r313_xn$NamedParameterPair$2Lrc9b("top", r382_top), new r313_xn$NamedParameterPair$2Lrc9b("bot", r387_fSlabBot ? r382_sw : 0), new r313_xn$NamedParameterPair$2Lrc9b("sw", r382_sw)) : r313_xn$noshape$3cah()));
                r387_currentGlyph.include(r313_difference(r382_legShape(r313_RLegTop(r382_top, r382_sw, r382_bp), r382_legBottom, r382_df.middle, r387_right, r382_top, r1_mix(0, r382_df.leftSB, r382_mul), r382_legSlab, r382_sw), r382_open ? r313_PShape.OpenGap(new r313_xn$NamedParameterPair$2Lrc9b("df", r382_df), new r313_xn$NamedParameterPair$2Lrc9b("mul", r382_mul), new r313_xn$NamedParameterPair$2Lrc9b("bp", r382_bp), new r313_xn$NamedParameterPair$2Lrc9b("top", r382_top), new r313_xn$NamedParameterPair$2Lrc9b("bot", 0), new r313_xn$NamedParameterPair$2Lrc9b("sw", r382_sw)) : r313_xn$noshape$3cah()));
                return void 0;
            });
        };
        var r313_RRotundaShape = function () {
            var _r409_t5;
            var _r409_t6 = arguments;
            var r409_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r409_t6, 0);
            var _r409_t0 = [];
            var _r409_t1 = 0;
            while (_r409_t1 < r409_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r409_xn$flexarguments$2Lrc7uIe5[_r409_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r409_t0.push(r409_xn$flexarguments$2Lrc7uIe5[_r409_t1]);
                _r409_t1 = _r409_t1 + 1;
            }
            var _r409_t2 = r409_xn$flexarguments$2Lrc7uIe5;
            var _r409_t3 = _r409_t2.length;
            var _r409_t4 = 0;
            while (_r409_t4 < _r409_t3) {
                _r409_t1 = _r409_t2[_r409_t4];
                if (_r409_t1 && _r409_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r409_t1.left === "legShape") r409_legShape = _r409_t1.right;
                if (_r409_t1 && _r409_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r409_t1.left === "top") r409_top = _r409_t1.right;
                if (_r409_t1 && _r409_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r409_t1.left === "bp") r409_bp = _r409_t1.right;
                if (_r409_t1 && _r409_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r409_t1.left === "df") r409_df = _r409_t1.right;
                if (_r409_t1 && _r409_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r409_t1.left === "mul") r409_mul = _r409_t1.right;
                if (_r409_t1 && _r409_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r409_t1.left === "slab") r409_slab = _r409_t1.right;
                if (_r409_t1 && _r409_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r409_t1.left === "legSlab") r409_legSlab = _r409_t1.right;
                if (_r409_t1 && _r409_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r409_t1.left === "open") r409_open = _r409_t1.right;
                if (_r409_t1 && _r409_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r409_t1.left === "sw") r409_sw = _r409_t1.right;
                if (_r409_t1 && _r409_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r409_t1.left === "hook") r409_hook = _r409_t1.right;
                _r409_t4 = _r409_t4 + 1;
            }
            var r409_legShape = r1_fallback(r409_legShape, _r409_t0[0]);
            var r409_top = r1_fallback(r409_top, _r409_t0[1]);
            var r409_bp = r1_fallback(r409_bp, _r409_t0[2], r313_PShape.BarPos);
            var r409_df = r1_fallback(r409_df, _r409_t0[3], r313_DivFrame(1));
            var r409_mul = r1_fallback(r409_mul, _r409_t0[4], 1);
            var r409_slab = r1_fallback(r409_slab, _r409_t0[5], null);
            var r409_legSlab = r1_fallback(r409_legSlab, _r409_t0[6], false);
            var r409_open = r1_fallback(r409_open, _r409_t0[7], false);
            var r409_sw = r1_fallback(r409_sw, _r409_t0[8], r313_Stroke);
            var r409_hook = r1_fallback(r409_hook, _r409_t0[9], r313_Hook);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r414_currentGlyph) {
                var _r414_t0, _r414_t1;
                var r414_fStraightLeg = r409_legShape !== r313_RLegShape.Curly;
                var r414_legTop = r313_RLegTop(r409_top, r409_sw, r409_bp);
                var r414_right = r409_df.rightSB - r313_O - (r409_slab ? 0.125 : 0) * r313_Jut;
                var r414_cor = r313_DiagCor(r414_legTop, r414_right - r409_df.middle, 0, r409_sw);
                var r414_endX = r409_df.middle - (r414_fStraightLeg ? r313_HSwToV(0.5 * r409_sw) * r414_cor : r409_sw / 2) + (r414_fStraightLeg ? r313_RSlabExtraShift(r313_SLAB, r409_sw) : 0);
                r414_currentGlyph.include(r313_PRotundaShape(r409_top, new r313_xn$NamedParameterPair$2Lrc9b("df", r409_df), new r313_xn$NamedParameterPair$2Lrc9b("mul", r409_mul), new r313_xn$NamedParameterPair$2Lrc9b("bp", r409_bp), new r313_xn$NamedParameterPair$2Lrc9b("overshoot", r313_O), new r313_xn$NamedParameterPair$2Lrc9b("endX", r414_endX), new r313_xn$NamedParameterPair$2Lrc9b("hook", r409_hook), new r313_xn$NamedParameterPair$2Lrc9b("sw", r409_sw)));
                r414_currentGlyph.include(r313_difference(r409_legShape(r414_legTop, 0, r409_df.middle, r414_right, r409_top, r1_mix(0, r409_df.leftSB, r409_mul), r409_legSlab, r409_sw), r313_MaskLeft(r414_endX)));
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r425_t0, _r425_t1;
            return {
                "RevRShape": r313_RevRShape
            };
        });
        var r313_RevRShape = function () {
            var _r427_t5;
            var _r427_t6 = arguments;
            var r427_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r427_t6, 0);
            var _r427_t0 = [];
            var _r427_t1 = 0;
            while (_r427_t1 < r427_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r427_xn$flexarguments$2Lrc7uIe5[_r427_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r427_t0.push(r427_xn$flexarguments$2Lrc7uIe5[_r427_t1]);
                _r427_t1 = _r427_t1 + 1;
            }
            var _r427_t2 = r427_xn$flexarguments$2Lrc7uIe5;
            var _r427_t3 = _r427_t2.length;
            var _r427_t4 = 0;
            while (_r427_t4 < _r427_t3) {
                _r427_t1 = _r427_t2[_r427_t4];
                if (_r427_t1 && _r427_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r427_t1.left === "legShape") r427_legShape = _r427_t1.right;
                if (_r427_t1 && _r427_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r427_t1.left === "top") r427_top = _r427_t1.right;
                if (_r427_t1 && _r427_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r427_t1.left === "bp") r427_bp = _r427_t1.right;
                if (_r427_t1 && _r427_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r427_t1.left === "df") r427_df = _r427_t1.right;
                if (_r427_t1 && _r427_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r427_t1.left === "mul") r427_mul = _r427_t1.right;
                if (_r427_t1 && _r427_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r427_t1.left === "slab") r427_slab = _r427_t1.right;
                if (_r427_t1 && _r427_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r427_t1.left === "legSlab") r427_legSlab = _r427_t1.right;
                if (_r427_t1 && _r427_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r427_t1.left === "open") r427_open = _r427_t1.right;
                if (_r427_t1 && _r427_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r427_t1.left === "sw") r427_sw = _r427_t1.right;
                if (_r427_t1 && _r427_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r427_t1.left === "tailed") r427_tailed = _r427_t1.right;
                _r427_t4 = _r427_t4 + 1;
            }
            var r427_legShape = r1_fallback(r427_legShape, _r427_t0[0]);
            var r427_top = r1_fallback(r427_top, _r427_t0[1]);
            var r427_bp = r1_fallback(r427_bp, _r427_t0[2], r313_PShape.BarPos);
            var r427_df = r1_fallback(r427_df, _r427_t0[3], r313_DivFrame(1));
            var r427_mul = r1_fallback(r427_mul, _r427_t0[4], 1);
            var r427_slab = r1_fallback(r427_slab, _r427_t0[5], null);
            var r427_legSlab = r1_fallback(r427_legSlab, _r427_t0[6], false);
            var r427_open = r1_fallback(r427_open, _r427_t0[7], false);
            var r427_sw = r1_fallback(r427_sw, _r427_t0[8], r313_Stroke);
            var r427_tailed = r1_fallback(r427_tailed, _r427_t0[9], false);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r432_currentGlyph) {
                var _r432_t0, _r432_t1;
                var r432_fSlabBot = r427_slab && r427_slab !== r313_RevPShape.SlabMotion;
                var r432_left = r427_df.leftSB + r313_O + (r427_slab ? 0.125 : 0) * r313_Jut;
                r432_currentGlyph.include(r313_difference(r313_RevPShape(r427_top, new r313_xn$NamedParameterPair$2Lrc9b("df", r427_df), new r313_xn$NamedParameterPair$2Lrc9b("mul", r427_mul), new r313_xn$NamedParameterPair$2Lrc9b("overshoot", r313_O), new r313_xn$NamedParameterPair$2Lrc9b("slab", r427_slab), new r313_xn$NamedParameterPair$2Lrc9b("bp", r427_bp), new r313_xn$NamedParameterPair$2Lrc9b("sw", r427_sw)), r427_open ? r313_RevPShape.OpenGap(new r313_xn$NamedParameterPair$2Lrc9b("df", r427_df), new r313_xn$NamedParameterPair$2Lrc9b("mul", r427_mul), new r313_xn$NamedParameterPair$2Lrc9b("bp", r427_bp), new r313_xn$NamedParameterPair$2Lrc9b("top", r427_top), new r313_xn$NamedParameterPair$2Lrc9b("bot", r432_fSlabBot ? r427_sw : 0), new r313_xn$NamedParameterPair$2Lrc9b("sw", r427_sw)) : r313_xn$noshape$3cah()));
                r432_currentGlyph.include(r313_difference(r427_legShape(r313_RLegTop(r427_top, r427_sw, r427_bp), 0, r432_left, r427_df.middle, r427_top, r1_mix(r427_df.width, r427_df.rightSB, r427_mul), r427_legSlab, r427_sw), r427_open ? r313_RevPShape.OpenGap(new r313_xn$NamedParameterPair$2Lrc9b("df", r427_df), new r313_xn$NamedParameterPair$2Lrc9b("mul", r427_mul), new r313_xn$NamedParameterPair$2Lrc9b("bp", r427_bp), new r313_xn$NamedParameterPair$2Lrc9b("top", r427_top), new r313_xn$NamedParameterPair$2Lrc9b("bot", 0), new r313_xn$NamedParameterPair$2Lrc9b("sw", r427_sw)) : r313_xn$noshape$3cah()));
                if (r427_tailed) {
                    r432_currentGlyph.ejectTagged("strokeR");
                    r432_currentGlyph.ejectTagged("serifRB");
                    r432_currentGlyph.include(r313_tagged("strokeR", r313_RightwardTailedBar(r1_mix(r427_df.width, r427_df.rightSB, r427_mul), 0, r427_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r427_sw))));
                }
                return void 0;
            });
        };
        var r313_StrikeAnchor = function () {
            var _r457_t5;
            var _r457_t6 = arguments;
            var r457_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r457_t6, 0);
            var _r457_t0 = [];
            var _r457_t1 = 0;
            while (_r457_t1 < r457_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r457_xn$flexarguments$2Lrc7uIe5[_r457_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r457_t0.push(r457_xn$flexarguments$2Lrc7uIe5[_r457_t1]);
                _r457_t1 = _r457_t1 + 1;
            }
            var _r457_t2 = r457_xn$flexarguments$2Lrc7uIe5;
            var _r457_t3 = _r457_t2.length;
            var _r457_t4 = 0;
            while (_r457_t4 < _r457_t3) {
                _r457_t1 = _r457_t2[_r457_t4];
                if (_r457_t1 && _r457_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r457_t1.left === "charTop") r457_charTop = _r457_t1.right;
                if (_r457_t1 && _r457_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r457_t1.left === "sw") r457_sw = _r457_t1.right;
                if (_r457_t1 && _r457_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r457_t1.left === "bp") r457_bp = _r457_t1.right;
                _r457_t4 = _r457_t4 + 1;
            }
            var r457_charTop = r1_fallback(r457_charTop, _r457_t0[0]);
            var r457_sw = r1_fallback(r457_sw, _r457_t0[1]);
            var r457_bp = r1_fallback(r457_bp, _r457_t0[2], r313_PShape.BarPos);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r463_currentGlyph) {
                var _r463_t0, _r463_t1;
                r463_currentGlyph.setBaseAnchor("strike", r313_Middle, r1_mix(r313_PBarPosY(r457_charTop, r457_sw, r457_bp), r457_charTop, 0.5));
                return void 0;
            });
        };
        var r313_RConfig = r1_SuffixCfg.weave({
            "straight": r313_RLegShape.Straight,
            "curly": r313_RLegShape.Curly,
            "standing": r313_RLegShape.Standing
        }, {
            "": false,
            "open": true
        }, {
            "serifless": [null, false],
            "topLeftSerifed": [r313_PShape.SlabMotion, false],
            "bottomRightSerifed": [null, true],
            "topLeftAndBottomRightSerifed": [r313_PShape.SlabMotion, true],
            "serifed": [r313_PShape.SlabSymmetric, true]
        });
        var _r313_t12 = Object.entries(r313_RConfig)[Symbol.iterator]();
        var _r313_t13 = void 0;
        while (!(_r313_t13 = _r313_t12.next()).done) {
            _r313_t14 = _r313_t13.value;
            r313_suffix = _r313_t14[0];
            r313_legShape = _r313_t14[1][0];
            r313_fGap = _r313_t14[1][1];
            r313_slabs = _r313_t14[1][2][0];
            r313_doLegSlab = _r313_t14[1][2][1];
            _r313_t14[1][2];
            _r313_t14[1];
            (function () {
                var r467_fStraightLeg = r313_legShape === r313_RLegShape.Straight;
                var r467_fSlabBot = r313_slabs && r313_slabs !== r313_PShape.SlabMotion;
                var r467_swCap = r313_AdviceStroke2(2, 3, r313_CAP);
                var r467_swXH = r313_AdviceStroke2(2, 3, r313_XH);
                r313_xn$GlyphSaveSink$2Lrc4b.save("R." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r470_currentGlyph) {
                    var _r470_t0, _r470_t1;
                    r470_currentGlyph.include(r313_MarkSet.capital());
                    r470_currentGlyph.include(r313_StrikeAnchor(r313_CAP, r467_swCap));
                    r470_currentGlyph.include(r313_RShape(r313_legShape, r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("sw", r467_swCap), new r313_xn$NamedParameterPair$2Lrc9b("slab", r313_slabs), new r313_xn$NamedParameterPair$2Lrc9b("legSlab", r313_doLegSlab), new r313_xn$NamedParameterPair$2Lrc9b("open", r313_fGap)));
                    return void 0;
                }));
                if (!r313_fGap) r313_xn$GlyphSaveSink$2Lrc4b.save("RBar." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r480_currentGlyph) {
                    var _r480_t0, _r480_t1;
                    r480_currentGlyph.include(r313_xn$referglyph$1aao("R." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r480_y = r313_PBarPosY(r313_CAP, r467_swCap, r313_PShape.BarPos);
                    r480_currentGlyph.include(r313_dispiro(r313_widths.lhs(r467_swCap), r313_flat(r1_mix(0, r313_SB, 0.3), r480_y), r313_curl(r313_SB - r313_O, r480_y, r313_heading(r313_Rightward))));
                    return void 0;
                }));
                if (!r467_fSlabBot) r313_xn$GlyphSaveSink$2Lrc4b.save("RRTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r485_currentGlyph) {
                    var _r485_t0, _r485_t1;
                    r485_currentGlyph.include(r313_xn$referglyph$1aao("R." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r485_currentGlyph.ejectTagged("serifLB");
                    r485_currentGlyph.include(r313_RetroflexHook.lExt(r313_SB, 0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r467_swCap)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpR." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r492_currentGlyph) {
                    var _r492_t0, _r492_t1;
                    r492_currentGlyph.include(r313_MarkSet.e());
                    r492_currentGlyph.include(r313_StrikeAnchor(r313_XH, r467_swXH));
                    r492_currentGlyph.include(r313_RShape(r313_legShape, r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("sw", r467_swXH), new r313_xn$NamedParameterPair$2Lrc9b("slab", r313_slabs), new r313_xn$NamedParameterPair$2Lrc9b("legSlab", r313_doLegSlab), new r313_xn$NamedParameterPair$2Lrc9b("open", r313_fGap)));
                    return void 0;
                }));
                if (!r313_doLegSlab || r467_fSlabBot) r313_xn$GlyphSaveSink$2Lrc4b.save("smcpRPalatalHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r502_currentGlyph) {
                    var _r502_t0, _r502_t1;
                    r502_currentGlyph.include(r313_MarkSet.e());
                    r502_currentGlyph.include(r313_StrikeAnchor(r313_XH, r467_swXH));
                    r502_currentGlyph.include(r313_RShape(r313_legShape, r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("sw", r467_swXH), new r313_xn$NamedParameterPair$2Lrc9b("slab", r313_slabs), new r313_xn$NamedParameterPair$2Lrc9b("legSlab", true), new r313_xn$NamedParameterPair$2Lrc9b("open", r313_fGap)));
                    var r502_right = r313_RightSB - r313_O - (r313_slabs ? 0.125 : 0) * r313_Jut;
                    var r502_shift = r467_fStraightLeg ? r313_RSlabExtraShift(true, r467_swXH) : 0;
                    var r502_xRightBottom = r313_RLegTerminalX(r467_fStraightLeg, r502_right, r467_swXH) + r502_shift;
                    var r502_xRightBottomSerifStart = r467_fStraightLeg ? r502_xRightBottom - r313_HSwToV(0.25 * r467_swXH) : r502_right;
                    r502_currentGlyph.include(r313_PalatalHook.rSideJut(new r313_xn$NamedParameterPair$2Lrc9b("x", r502_xRightBottomSerifStart), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r467_swXH), new r313_xn$NamedParameterPair$2Lrc9b("jut", r313_HSwToV(0.5 * r467_swXH) + r313_SideJut + (r313_legShape !== r313_RLegShape.Standing ? 0.125 : 0) * r313_Jut)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("Yr." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r517_currentGlyph) {
                    var r517___, _r517_t0, _r517_t1, _r517_t2;
                    r517_currentGlyph.include(r313_MarkSet.capDesc());
                    var r517_top = r1_mix(0, r313_CAP, 0.825) + (r467_fSlabBot ? -0.2125 : +0.25) * r313_Stroke;
                    var r517_bp = (r1_mix(0, r313_CAP, 0.25) + (r467_fSlabBot ? +0.8375 : +0.7125) * r313_Stroke) / r517_top;
                    var r517_sw = r313_AdviceStroke2(2, 3, r517_top);
                    r517_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r313_SB, r517_sw));
                    r517_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r313_RightSB, r517_sw));
                    r517_currentGlyph.include(r313_StrikeAnchor(r517_top, r517_sw, r517_bp));
                    r517_currentGlyph.include(r313_VBar.l(r313_SB, r517_top - 1, r313_CAP, r517_sw));
                    r517_currentGlyph.include(r313_RShape(r313_legShape, r517_top, r517_bp, new r313_xn$NamedParameterPair$2Lrc9b("sw", r517_sw), new r313_xn$NamedParameterPair$2Lrc9b("legSlab", r313_doLegSlab), new r313_xn$NamedParameterPair$2Lrc9b("open", r313_fGap), new r313_xn$NamedParameterPair$2Lrc9b("legBottom", r313_Descender)));
                    r517_currentGlyph.include((_r517_t0 = r313_slabs, _r517_t0 === r313_PShape.SlabSymmetric ? r313_PShape.SlabFullSymmetric(r313_CAP, r313_DivFrame(1), r517_sw, 1) : _r517_t0 === r313_PShape.SlabMotion ? r313_PShape.SlabMotion(r313_CAP, r313_DivFrame(1), r517_sw, 1) : (r517___ = _r517_t0, new r313_xn$Capture$2Lrc8.GlyphProc(function (r530_currentGlyph) {
                        var _r530_t0, _r530_t1;
                        return void 0;
                    }))));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpRLongLeg." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r533_currentGlyph) {
                    var _r533_t0, _r533_t1;
                    r533_currentGlyph.include(r313_MarkSet.p());
                    r533_currentGlyph.include(r313_StrikeAnchor(r313_XH, r467_swXH));
                    r533_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r313_RightSB, r467_swXH));
                    r533_currentGlyph.include(r313_RShape(r313_legShape, r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("sw", r467_swXH), new r313_xn$NamedParameterPair$2Lrc9b("slab", r313_slabs), new r313_xn$NamedParameterPair$2Lrc9b("legSlab", r313_doLegSlab), new r313_xn$NamedParameterPair$2Lrc9b("open", r313_fGap), new r313_xn$NamedParameterPair$2Lrc9b("legBottom", r313_Descender)));
                    return void 0;
                }));
                return !r313_slabs && !r313_fGap ? (r313_xn$GlyphSaveSink$2Lrc4b.save("RRotunda." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r545_currentGlyph) {
                    var _r545_t0, _r545_t1;
                    r545_currentGlyph.include(r313_MarkSet.capital());
                    var r545_bp = 0.9 * r313_PShape.BarPos;
                    r545_currentGlyph.include(r313_StrikeAnchor(r313_CAP, r467_swCap, r545_bp));
                    r545_currentGlyph.include(r313_RRotundaShape(r313_legShape, r313_CAP, r545_bp, new r313_xn$NamedParameterPair$2Lrc9b("sw", r467_swCap), new r313_xn$NamedParameterPair$2Lrc9b("legSlab", r313_doLegSlab), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook)));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("rRotunda." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r554_currentGlyph) {
                    var _r554_t0, _r554_t1;
                    r554_currentGlyph.include(r313_MarkSet.e());
                    var r554_bp = 0.9 * r313_PShape.BarPos;
                    r554_currentGlyph.include(r313_StrikeAnchor(r313_XH, r467_swXH, r554_bp));
                    r554_currentGlyph.include(r313_RRotundaShape(r313_legShape, r313_XH, r554_bp, new r313_xn$NamedParameterPair$2Lrc9b("sw", r467_swXH), new r313_xn$NamedParameterPair$2Lrc9b("legSlab", r313_doLegSlab), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_AHook)));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("currency/indianRupeeSign." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r563_currentGlyph) {
                    var _r563_t0, _r563_t1;
                    var r563_shift = -0.125 * (r313_Width - 0);
                    r563_currentGlyph.include(r313_intersection(r313_Rect(r313_CAP, 0, r313_SB, r313_Width), r313_xn$withtransform$5sIl(r313_Translate(r563_shift, 0), r313_PShape(r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("mul", 1), new r313_xn$NamedParameterPair$2Lrc9b("sw", r467_swCap), new r313_xn$NamedParameterPair$2Lrc9b("withBar", false)))));
                    var r563_right = r313_RightSB - r313_O - (r313_legShape !== r313_RLegShape.Curly ? 0 : 0.0625) * (r313_Width - 0);
                    r563_currentGlyph.include(r313_legShape(r313_RLegTop(r313_CAP, r467_swCap, r313_PShape.BarPos), 0, r313_Middle + r563_shift, r563_right, r313_CAP, r313_SB + r563_shift, r313_doLegSlab, r467_swCap));
                    var r563_sw = r313_AdviceStroke2(2, 4, r313_CAP);
                    r563_currentGlyph.include(r313_HBar.t(r313_SB, r313_RightSB, r313_CAP, r563_sw));
                    r563_currentGlyph.include(r313_HBar.m(r313_SB, r313_RightSB, r1_mix(r313_CAP, r313_PBarPosY(r313_CAP, r467_swCap, r313_PShape.BarPos), 0.5), r563_sw));
                    return void 0;
                }))) : void 0;
            })();
        }
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r572_t0, _r572_t1;
            return {
                "RevRConfig": r313_RevRConfig
            };
        });
        var r313_RevRConfig = r1_SuffixCfg.weave({
            "straight": r313_RevRLegShape.Straight,
            "curly": r313_RevRLegShape.Curly,
            "standing": r313_RevRLegShape.Standing
        }, {
            "": false,
            "open": true
        }, {
            "serifless": [null, false, false],
            "topRightSerifed": [r313_RevPShape.SlabMotion, false, false],
            "bottomLeftSerifed": [null, true, false],
            "topRightAndBottomLeftSerifed": [r313_RevPShape.SlabMotion, true, false],
            "bottomLeftAndBottomRightSerifed": [r313_RevPShape.SlabMotionBottom, true, false],
            "serifed": [r313_RevPShape.SlabSymmetric, true, false],
            "tailedSerifless": [null, false, true],
            "tailedBottomLeftSerifed": [null, true, true],
            "tailedSerifed": [r313_RevPShape.SlabMotion, true, true]
        });
        var _r313_t15 = Object.entries(r313_RevRConfig)[Symbol.iterator]();
        var _r313_t16 = void 0;
        while (!(_r313_t16 = _r313_t15.next()).done) {
            _r313_t17 = _r313_t16.value;
            r313_suffix = _r313_t17[0];
            r313_legShape = _r313_t17[1][0];
            r313_fGap = _r313_t17[1][1];
            r313_slabs = _r313_t17[1][2][0];
            r313_doLegSlab = _r313_t17[1][2][1];
            r313_doTail = _r313_t17[1][2][2];
            _r313_t17[1][2];
            _r313_t17[1];
            (function () {
                var r575_swCap = r313_AdviceStroke2(2, 3, r313_CAP);
                var r575_swXH = r313_AdviceStroke2(2, 3, r313_XH);
                if (!r313_doTail) r313_xn$GlyphSaveSink$2Lrc4b.save("revR." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r578_currentGlyph) {
                    var _r578_t0, _r578_t1;
                    r578_currentGlyph.include(r313_MarkSet.capital());
                    r578_currentGlyph.include(r313_StrikeAnchor(r313_CAP, r575_swCap));
                    r578_currentGlyph.include(r313_RevRShape(r313_legShape, r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("sw", r575_swCap), new r313_xn$NamedParameterPair$2Lrc9b("slab", r313_slabs), new r313_xn$NamedParameterPair$2Lrc9b("legSlab", r313_doLegSlab), new r313_xn$NamedParameterPair$2Lrc9b("open", r313_fGap)));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("smcpRevR." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r588_currentGlyph) {
                    var _r588_t0, _r588_t1;
                    r588_currentGlyph.include(r313_MarkSet.e());
                    r588_currentGlyph.include(r313_StrikeAnchor(r313_XH, r575_swXH));
                    r588_currentGlyph.include(r313_RevRShape(r313_legShape, r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("sw", r575_swXH), new r313_xn$NamedParameterPair$2Lrc9b("slab", r313_slabs), new r313_xn$NamedParameterPair$2Lrc9b("legSlab", r313_doLegSlab), new r313_xn$NamedParameterPair$2Lrc9b("open", r313_fGap), new r313_xn$NamedParameterPair$2Lrc9b("tailed", r313_doTail)));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("R", "R");
        r313_xn$linkreducedvariant$5sIl8("R/sansSerif", "R", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("smcpR", 640, new r313_xn$NamedParameterPair$2Lrc9b("follow", "R"));
        r313_xn$selectvariant$7Hrq("smcpRevR", 7449, new r313_xn$NamedParameterPair$2Lrc9b("follow", "revR"));
        r313_xn$selectvariant$7Hrq("RBar", 588);
        r313_xn$selectvariant$7Hrq("RRTail", 11364);
        r313_xn$selectvariant$7Hrq("Yr", 422, new r313_xn$NamedParameterPair$2Lrc9b("follow", "R"));
        r313_xn$selectvariant$7Hrq("smcpRLongLeg", 43846, new r313_xn$NamedParameterPair$2Lrc9b("follow", "R"));
        r313_xn$selectvariant$7Hrq("RRotunda", 42842);
        r313_xn$selectvariant$7Hrq("rRotunda", 42843, new r313_xn$NamedParameterPair$2Lrc9b("follow", "RRotunda"));
        r313_xn$selectvariant$7Hrq("currency/indianRupeeSign", 8377, new r313_xn$NamedParameterPair$2Lrc9b("follow", "RRotunda"));
        r313_CreateTurnedLetter("smcpTurnR", 7450, "smcpR", r313_HalfAdvance, r313_XH / 2);
        r313_CreateTurnedLetter("smcpInvR", 641, "smcpRevR", r313_HalfAdvance, r313_XH / 2);
        r313_xn$selectvariant$7Hrq("smcpRPalatalHook", 122677, new r313_xn$NamedParameterPair$2Lrc9b("follow", "R/descBase"));
        r313_xn$deriveglyphs$7Hrq("smcpInvRPalatalHook", 122678, "smcpInvR", function (r604_src, r604_gr) {
            var _r604_t0, _r604_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r606_currentGlyph) {
                var _r606_t0, _r606_t1;
                r606_currentGlyph.include(r313_xn$referglyph$1aao(r604_src), r313_AS_BASE, r313_ALSO_METRICS);
                var r606_sw = r313_AdviceStroke2(2, 3, r313_XH);
                var r606_bp = r313_XH - r313_PBarPosY(r313_XH, r606_sw, r313_PShape.BarPos);
                var r606_adb = r313_YSmoothMidR(r606_bp, 0, r313_ArchDepthAOf(r313_ArchDepth * 0.9), r313_ArchDepthBOf(r313_ArchDepth * 0.9));
                var r606_xTurn = r313_Arch["adjust-x"].bot(r313_RightSB - r313_BowlXDepth(r606_bp, 0, r313_SB, r313_RightSB, r606_sw), new r313_xn$NamedParameterPair$2Lrc9b("sw", r606_sw));
                r606_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r1_mix(r606_xTurn, r313_RightSB, 0.75)), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r1_mix(0, r606_adb, r313_archv.yFromX(0.75)))));
                return void 0;
            });
        });
        r313_xn$selectvariant$7Hrq("cyrl/Ya", 1071, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "revR"));
        r313_xn$selectvariant$7Hrq("cyrl/ya", 1103, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpRevR"));
        var _r313_t18 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t18.BBS;
        var r313_BBD = _r313_t18.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/R", 8477, new r313_xn$Capture$2Lrc8.GlyphProc(function (r618_currentGlyph) {
            var _r618_t0, _r618_t1;
            r618_currentGlyph.include(r313_MarkSet.capital());
            var r618_SingleLeg = function () {
                var _r620_t0, _r620_t1;
                return r313_RLegShape.Straight(r1_mix(0, r313_CAP - r313_BBS, r313_HBarPos), 0, r313_Middle, r313_RightSB - r313_O, r313_CAP, r313_SB, false, r313_BBS);
            };
            var r618_terminalX = r313_RLegTerminalX(true, r313_RightSB - r313_O, r313_BBS);
            r618_currentGlyph.include(r313_BBPShape(new r313_xn$NamedParameterPair$2Lrc9b("mul", 1), new r313_xn$NamedParameterPair$2Lrc9b("overshoot", r313_O)));
            r618_currentGlyph.include(r313_difference(r313_union(r618_SingleLeg(), r313_xn$withtransform$5sIl(r313_ApparentTranslate(-r313_BBD, 0), r618_SingleLeg()), r313_HBar.b(r618_terminalX - r313_BBD - r313_HSwToV(r313_BBS), r618_terminalX - r313_HSwToV(r313_BBS), 0, r313_BBS)), r313_PShapeOutline(r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_BBS), new r313_xn$NamedParameterPair$2Lrc9b("mul", 1), new r313_xn$NamedParameterPair$2Lrc9b("overshoot", r313_O), new r313_xn$NamedParameterPair$2Lrc9b("offset", 1)), r313_MaskLeft(r313_SB + r313_BBD)));
            return void 0;
        }));
    });
    return void 0;
});


