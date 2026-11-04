"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
import * as _s0_t2 from "@iosevka/glyph/relation";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
var _r1_t10 = _s0_t2;
var r1_MathSansSerif = _r1_t10.MathSansSerif;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r309_block, _r309_t4, _r309_t6;
    var _r309_t3 = this;
    var _r309_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r309_t1 = _r309_t0.length;
    var _r309_t2 = 0;
    var _r309_t5 = _r309_t2 < _r309_t1;
    while (_r309_t5) {
        _r309_t6 = (r309_block = _r309_t0[_r309_t2], r309_block(_r309_t3), _r309_t2 = _r309_t2 + 1);
        _r309_t5 = _r309_t2 < _r309_t1;
    }
    return _r309_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r313_xn$Capture_Ext$2Lrc2b) {
    var _r313_t0, _r313_t1;
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Letter-Latin-X", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var r314_suffix, r314_stroke1, r314_stroke2, r314_bottom, r314_mkCap, r314_mkXH, r314_serifShape, r314_fMaskBase, _r314_t12, _r314_t14, _r314_t15, _r314_t16, _r314_tag17, _r314_t18, _r314_tag19;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var r314_para = _r314_t0.para;
        var r314_MarkSet = _r314_t0.MarkSet;
        var r314_AS_BASE = _r314_t0.AS_BASE;
        var r314_ALSO_METRICS = _r314_t0.ALSO_METRICS;
        var r314_DivFrame = _r314_t0.DivFrame;
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_Width = _r314_t1.Width;
        var r314_SB = _r314_t1.SB;
        var r314_CAP = _r314_t1.CAP;
        var r314_XH = _r314_t1.XH;
        var r314_Descender = _r314_t1.Descender;
        var r314_TanSlope = _r314_t1.TanSlope;
        var r314_HSwToV = _r314_t1.HSwToV;
        var r314_Upward = _r314_t1.Upward;
        var r314_Downward = _r314_t1.Downward;
        var r314_Rightward = _r314_t1.Rightward;
        var r314_O = _r314_t1.O;
        var r314_OX = _r314_t1.OX;
        var r314_Hook = _r314_t1.Hook;
        var r314_ArchDepth = _r314_t1.ArchDepth;
        var r314_AdviceStroke = _r314_t1.AdviceStroke;
        var r314_AdviceStroke2 = _r314_t1.AdviceStroke2;
        var r314_Stroke = _r314_t1.Stroke;
        var r314_HalfStroke = _r314_t1.HalfStroke;
        var r314_RightSB = _r314_t1.RightSB;
        var r314_Middle = _r314_t1.Middle;
        var r314_SideJut = _r314_t1.SideJut;
        var r314_StrokeWidthBlend = _r314_t1.StrokeWidthBlend;
        var r314_ArchDepthAOf = _r314_t1.ArchDepthAOf;
        var r314_ArchDepthBOf = _r314_t1.ArchDepthBOf;
        var r314_TINY = _r314_t1.TINY;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_corner = _r314_t2.corner;
        var r314_flat = _r314_t2.flat;
        var r314_curl = _r314_t2.curl;
        var r314_straight = _r314_t2.straight;
        var r314_widths = _r314_t2.widths;
        var r314_heading = _r314_t2.heading;
        var r314_alsoThruThem = _r314_t2.alsoThruThem;
        var r314_quadControls = _r314_t2.quadControls;
        var r314_arcvh = _r314_t2.arcvh;
        var r314_dispiro = _r314_t2.dispiro;
        var r314_xn$spirooutline$1aao = _r314_t2["spiro-outline"];
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var r314_union = _r314_t4.union;
        var r314_intersection = _r314_t4.intersection;
        var r314_difference = _r314_t4.difference;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r314_Rect = _r314_t5.Rect;
        var r314_MaskBelow = _r314_t5.MaskBelow;
        var r314_MaskLeft = _r314_t5.MaskLeft;
        var r314_DiagCor = _r314_t5.DiagCor;
        var r314_DiagCorDs = _r314_t5.DiagCorDs;
        var r314_HBar = _r314_t5.HBar;
        var r314_HOverlayBar = _r314_t5.HOverlayBar;
        var r314_Arch = _r314_t5.Arch;
        var r314_FlipAround = _r314_t5.FlipAround;
        var r314_ExtLineCenter = _r314_t5.ExtLineCenter;
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r314_xn$referglyph$1aao = _r314_t6["refer-glyph"];
        var r314_xn$selectvariant$7Hrq = _r314_t6["select-variant"];
        var r314_xn$linkreducedvariant$5sIl8 = _r314_t6["link-reduced-variant"];
        var r314_xn$aliasreducedvariant$1aao8 = _r314_t6["alias-reduced-variant"];
        var r314_xn$deriveglyphs$7Hrq = _r314_t6["derive-glyphs"];
        var r314_xn$derivecomposites$7Hrq = _r314_t6["derive-composites"];
        var r314_alias = _r314_t6.alias;
        var _r314_t7 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r314_SerifFrame = _r314_t7.SerifFrame;
        var r314_WithSerifOverflowMask = _r314_t7.WithSerifOverflowMask;
        var _r314_t8 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r314_DiagTail = _r314_t8.DiagTail;
        var _r314_t9 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r314_CyrDescender = _r314_t9.CyrDescender;
        var r314_PalatalHook = _r314_t9.PalatalHook;
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "HalfXStrand": r314_HalfXStrand
            };
        });
        var r314_HalfXStrand = function (r322_stb, r322_fSlab, r322__xOuter, r322_yOuter, r322_xCenter, r322_yCenter, r322_turn, r322_pStraight, r322_tension, r322__sw, r322__pConn) {
            var _r322_t0, _r322_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var r324_hst, r324_hse, r324_xOuterAdjusted, r324_height, r324_slabClearance, r324_turnyOuter, r324_cyOuter, r324_straightXOuter, r324_straightYOuter, r324_xCenterAdj, r324_yCenterAdj, _r324_t0, _r324_t1;
                var r324_sw = r1_fallback(r322__sw, r314_Stroke);
                var r324_sbCor = r322_stb ? r314_StrokeWidthBlend(1, 6) * r314_OX * (Math.abs(r322_yOuter - r322_yCenter) / r314_CAP) : 0;
                var r324_xOuter = r322__xOuter + (r314_HSwToV(0.5 * r324_sw) + Math.max(-r314_SideJut, r324_sbCor)) * (r322_xCenter > r322__xOuter ? 1 : -1);
                if (r322_stb) {
                    r324_hst = 0.5 * r324_sw * r314_DiagCor(r322_yCenter - r322_yOuter, r322_xCenter - r324_xOuter, 0, 0);
                    r324_hse = 0.5 * r324_sw * Math.min(0.97, r314_AdviceStroke(3) / r314_Stroke);
                    r324_xOuterAdjusted = r322__xOuter + (r314_HSwToV(r324_hst) + Math.max(-r314_SideJut, r324_sbCor)) * (r322_xCenter > r322__xOuter ? 1 : -1);
                    r324_currentGlyph.include(r314_dispiro(r314_corner(r324_xOuterAdjusted, r322_yOuter, r314_widths.heading(r324_hst, r324_hst, r322_yOuter < r322_yCenter ? r314_Upward : r314_Downward)), r314_corner(r322_xCenter, r322_yCenter, r314_widths.center(2 * r324_hse))));
                } else {
                    r324_height = Math.abs(r322_yOuter - r322_yCenter);
                    r324_slabClearance = r322_fSlab ? r324_sw / r314_Stroke * r314_AdviceStroke2(2, 3, r324_height) : 0;
                    r324_turnyOuter = r1_mix(r322_yOuter, r322_yCenter, r322_fSlab ? Math.max(r322_turn, r324_slabClearance / r324_height) : r322_turn);
                    r324_cyOuter = r1_mix(r324_turnyOuter, r322_yCenter, r322_tension);
                    r324_straightXOuter = r1_mix(r324_xOuter, r322_xCenter, r322_pStraight);
                    r324_straightYOuter = r1_mix(r324_cyOuter, r322_yCenter, r322_pStraight);
                    r324_xCenterAdj = r1_mix(r322_xCenter, r324_xOuter, r1_fallback(r322__pConn, 0));
                    r324_yCenterAdj = r1_mix(r322_yCenter, r324_cyOuter, r1_fallback(r322__pConn, 0));
                    r324_currentGlyph.include(r314_dispiro(r314_widths.center(r324_sw), r314_flat(r324_xOuter, r322_yOuter, r314_heading(r322_yOuter < r322_yCenter ? r314_Upward : r314_Downward)), r314_curl(r324_xOuter, r324_turnyOuter, r314_heading(r322_yOuter < r322_yCenter ? r314_Upward : r314_Downward)), r314_quadControls(0, (r324_cyOuter - r324_turnyOuter) / (r324_straightYOuter - r324_turnyOuter), 24), r314_flat(r324_straightXOuter, r324_straightYOuter), r314_curl(r324_xCenterAdj, r324_yCenterAdj)));
                }
                return void 0;
            });
        };
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r328_t0, _r328_t1;
            return {
                "XStrand": r314_XStrand
            };
        });
        var r314_XStrand = function (r329_stb, r329_slab, r329_xLeft, r329_yLeft, r329_xRight, r329_yRight, r329_turn, r329_pStraight, r329_tension, r329__sw) {
            var _r329_t0, _r329_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                var _r331_t0, _r331_t1;
                var r331_xMid = r1_mix(r329_xLeft, r329_xRight, 0.5);
                var r331_yMid = r1_mix(r329_yLeft, r329_yRight, 0.5);
                r331_currentGlyph.include(r314_HalfXStrand(r329_stb, r329_slab, r329_xLeft, r329_yLeft, r331_xMid, r331_yMid, r329_turn, r329_pStraight, r329_tension, r329__sw, -0.001));
                r331_currentGlyph.include(r314_HalfXStrand(r329_stb, r329_slab, r329_xRight, r329_yRight, r331_xMid, r331_yMid, r329_turn, r329_pStraight, r329_tension, r329__sw, -0.001));
                return void 0;
            });
        };
        var r314_XChanceryStrand = function (r334_sign, r334_fSlab, r334_leftX, r334_leftY, r334_rightX, r334_rightY, r334_fHalf, r334__sw) {
            var _r334_t0, _r334_t1;
            var r334_sw = r1_fallback(r334__sw, r314_Stroke);
            var r334_blendK1X = r314_StrokeWidthBlend(0.58, 0.65);
            var r334_blendK1Y = 0.2;
            var r334_blendK2X = 0.78;
            var r334_blendK2Y = r314_StrokeWidthBlend(0.5, 0.4);
            var r334_pStraightX = r314_StrokeWidthBlend(0.3, 0.35);
            var r334_pStraightY = r314_StrokeWidthBlend(0.2, 0.25);
            var r334_fine = r314_AdviceStroke(3) * (r334_sw / r314_Stroke);
            return r314_dispiro(r334_fHalf ? r314_flat(r1_mix(r334_leftX, r334_rightX, 0.5), r1_mix(r334_leftY, r334_rightY, 0.5), r314_widths.center(r334_fine)) : [r314_flat(r334_leftX - (r334_fSlab ? r314_SideJut : 0), r334_leftY - r334_sign * r334_sw / 2, r314_widths.center.heading(r334_sw, r314_Rightward)), r314_curl(r334_leftX + r314_TINY, r334_leftY - r334_sign * r334_sw / 2, r314_widths.center.heading(r334_sw, r314_Rightward)), r314_alsoThruThem([[r334_blendK1X, r334_blendK1Y], [r334_blendK2X, r334_blendK2Y]]), r314_flat(r1_mix(r334_leftX, r334_rightX, r334_pStraightX), r1_mix(r334_leftY, r334_rightY, r334_pStraightY), r314_widths.center(r1_mix(r334_sw, r334_fine, 0.5))), r314_corner(r1_mix(r334_leftX, r334_rightX, 0.5), r1_mix(r334_leftY, r334_rightY, 0.5), r314_widths.center(r334_fine))], r314_curl(r1_mix(r334_leftX, r334_rightX, 1 - r334_pStraightX), r1_mix(r334_leftY, r334_rightY, 1 - r334_pStraightY), r314_widths.center(r1_mix(r334_sw, r334_fine, 0.5))), r314_alsoThruThem([[1 - r334_blendK2X, 1 - r334_blendK2Y], [1 - r334_blendK1X, 1 - r334_blendK1Y]]), r314_flat(r334_rightX - r314_TINY, r334_rightY + r334_sign * r334_sw / 2, r314_widths.center.heading(r334_sw, r314_Rightward)), r314_curl(r334_rightX + (r334_fSlab ? r314_SideJut : 0), r334_rightY + r334_sign * r334_sw / 2, r314_widths.center.heading(r334_sw, r314_Rightward)));
        };
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r336_t0, _r336_t1;
            return {
                "XCursiveHalfShape": r314_XCursiveHalfShape
            };
        });
        var r314_XCursiveHalfShape = function () {
            var _r338_t5;
            var _r338_t6 = arguments;
            var r338_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r338_t6, 0);
            var _r338_t0 = [];
            var _r338_t1 = 0;
            while (_r338_t1 < r338_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r338_xn$flexarguments$2Lrc7uIe5[_r338_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r338_t0.push(r338_xn$flexarguments$2Lrc7uIe5[_r338_t1]);
                _r338_t1 = _r338_t1 + 1;
            }
            var _r338_t2 = r338_xn$flexarguments$2Lrc7uIe5;
            var _r338_t3 = _r338_t2.length;
            var _r338_t4 = 0;
            while (_r338_t4 < _r338_t3) {
                _r338_t1 = _r338_t2[_r338_t4];
                if (_r338_t1 && _r338_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "top") r338_top = _r338_t1.right;
                if (_r338_t1 && _r338_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "bottom") r338_bottom = _r338_t1.right;
                if (_r338_t1 && _r338_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "left") r338_left = _r338_t1.right;
                if (_r338_t1 && _r338_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "right") r338_right = _r338_t1.right;
                if (_r338_t1 && _r338_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "swMid") r338_swMid = _r338_t1.right;
                if (_r338_t1 && _r338_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "swEnd") r338_swEnd = _r338_t1.right;
                if (_r338_t1 && _r338_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "swCoEnd") r338_swCoEnd = _r338_t1.right;
                if (_r338_t1 && _r338_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "setMark") r338_setMark = _r338_t1.right;
                if (_r338_t1 && _r338_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "flatTail") r338_flatTail = _r338_t1.right;
                _r338_t4 = _r338_t4 + 1;
            }
            var r338_top = r1_fallback(r338_top, _r338_t0[0]);
            var r338_bottom = r1_fallback(r338_bottom, _r338_t0[1]);
            var r338_left = r1_fallback(r338_left, _r338_t0[2]);
            var r338_right = r1_fallback(r338_right, _r338_t0[3]);
            var r338_swMid = r1_fallback(r338_swMid, _r338_t0[4], r314_AdviceStroke(2.75));
            var r338_swEnd = r1_fallback(r338_swEnd, _r338_t0[5], r314_AdviceStroke(3));
            var r338_swCoEnd = r1_fallback(r338_swCoEnd, _r338_t0[6], r314_AdviceStroke(2));
            var r338_setMark = r1_fallback(r338_setMark, _r338_t0[7], false);
            var r338_flatTail = r1_fallback(r338_flatTail, _r338_t0[8], false);
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                var r343_lowerHalfLastKnot, _r343_t0, _r343_t1;
                var r343_ada = r314_ArchDepthAOf(r314_ArchDepth * 0.8, r314_Width / 2);
                var r343_adb = r314_ArchDepthBOf(r314_ArchDepth * 0.8, r314_Width / 2);
                var r343_adws = (r338_right - r338_left) / (r314_RightSB - r314_Middle);
                var r343_divHook = Math.min(r343_adws, 1);
                var r343_fineMid = 0.55 * r338_swMid;
                var r343_xMidBarRightEdge = r338_left + r314_HSwToV(r338_swMid) / 2;
                var r343_xUpperTurn = r1_mix(r338_right - r314_HSwToV(r338_swEnd), r343_xMidBarRightEdge, 0.5);
                var r343_upperHookDepth = Math.max(r338_swEnd * 2, Math.sqrt(r343_divHook) * (r314_Hook + r338_swEnd * 0.125));
                var r343_upperHookStraightDepth = Math.min(r343_upperHookDepth - r338_swEnd * 1.125, Math.max(1, r343_upperHookDepth / 5 - r338_swEnd / 4));
                var r343_upperHalf = r343_currentGlyph.include(r314_dispiro(r314_flat(r343_xMidBarRightEdge - r314_HSwToV(r343_fineMid), r1_mix(r338_bottom, r338_top, 0.5) + r314_O, r314_widths.rhs.heading(r343_fineMid, r314_Upward)), r314_curl(r343_xMidBarRightEdge - r314_HSwToV(r343_fineMid), r338_top - r343_ada), r314_Arch.rhs(r338_top, new r314_xn$NamedParameterPair$2Lrc9b("sw", r338_swEnd), new r314_xn$NamedParameterPair$2Lrc9b("swBefore", r343_fineMid)), r314_flat(r338_right - r314_OX, r338_top - r343_upperHookDepth + r343_upperHookStraightDepth, r314_heading(r314_Downward)), r314_curl(r338_right - r314_OX, r338_top - r343_upperHookDepth, r314_heading(r314_Downward))));
                var r343_rIn = Math.max(0.4 * (r338_right - r338_left) - r314_HSwToV(0.5 * r338_swMid), r314_AdviceStroke(16));
                var r343_flatHookDepth = 1.3 * (r338_right - r338_left) - (0.5 - r314_TanSlope) * r338_swEnd - 1.5 * (r343_rIn + 0.5 * r338_swMid);
                var r343_lowerHalf = r343_currentGlyph.include(r338_flatTail ? r314_dispiro(r314_flat(r343_xMidBarRightEdge - r314_HSwToV(r343_fineMid), r1_mix(r338_bottom, r338_top, 0.5) - r314_O, r314_widths.lhs(r343_fineMid)), r314_curl(r343_xMidBarRightEdge - r314_HSwToV(r343_fineMid), r338_bottom + Math.min(r343_adb, r338_swMid + r343_rIn)), r314_arcvh(), r314_flat(r343_xMidBarRightEdge + r343_adws * (0.5 * r338_swMid + r343_rIn) + 0.25 * r314_TanSlope * (0.5 * r338_swMid + r343_rIn), r338_bottom, r314_widths.lhs.heading(r338_swCoEnd, r314_Rightward)), r314_curl(r338_right, r338_bottom)) : r314_dispiro(r314_flat(r343_xMidBarRightEdge - r314_HSwToV(0.5 * r343_fineMid), r1_mix(r338_bottom, r338_top, 0.5) - r314_O, r314_widths.center(r343_fineMid)), r314_curl(r343_xMidBarRightEdge, r338_bottom + Math.min(r343_adb, r338_swMid + r343_rIn), r314_widths.rhs(r343_fineMid)), r314_arcvh(16), r314_DiagTail.F(1, r343_xMidBarRightEdge + r314_TanSlope * r343_rIn, r338_bottom, r343_rIn, 50, r343_flatHookDepth, r338_swCoEnd)));
                if (r338_setMark) {
                    r343_lowerHalfLastKnot = r343_lowerHalf.rhsKnots[r343_lowerHalf.rhsKnots.length - 1];
                    r343_currentGlyph.setBaseAnchor("palatalHookAttach", r343_lowerHalfLastKnot.x, r343_lowerHalfLastKnot.y);
                }
                return void 0;
            });
        };
        var r314_xn$STROKESTRAIGHT$7Hrq = 0;
        var r314_xn$STROKECURLY$7Hrq = 1;
        var r314_xn$STROKECHANCERY$7Hrq = 2;
        var r314_xn$STROKECURSIVE$7Hrq = 3;
        var r314_xn$STROKECURSIVEFLAT$7Hrq8 = 4;
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r350_t0, _r350_t1;
            return {
                "XLetterForm": r314_XLetterForm
            };
        });
        var r314_XLetterForm = function () {
            var _r352_t5, _r352_t7, _r352_tag8;
            var _r352_t6 = arguments;
            var r352_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r352_t6, 0);
            var _r352_t0 = [];
            var _r352_t1 = 0;
            while (_r352_t1 < r352_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r352_xn$flexarguments$2Lrc7uIe5[_r352_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r352_t0.push(r352_xn$flexarguments$2Lrc7uIe5[_r352_t1]);
                _r352_t1 = _r352_t1 + 1;
            }
            var _r352_t2 = r352_xn$flexarguments$2Lrc7uIe5;
            var _r352_t3 = _r352_t2.length;
            var _r352_t4 = 0;
            while (_r352_t4 < _r352_t3) {
                _r352_t1 = _r352_t2[_r352_t4];
                if (_r352_t1 && _r352_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r352_t1.left === "box") r352_box = _r352_t1.right;
                if (_r352_t1 && _r352_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r352_t1.left === "stroke1") r352_stroke1 = _r352_t1.right;
                if (_r352_t1 && _r352_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r352_t1.left === "stroke2") r352_stroke2 = _r352_t1.right;
                if (_r352_t1 && _r352_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r352_t1.left === "turn") r352_turn = _r352_t1.right;
                if (_r352_t1 && _r352_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r352_t1.left === "tension") r352_tension = _r352_t1.right;
                if (_r352_t1 && _r352_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r352_t1.left === "sw") r352_sw = _r352_t1.right;
                if (_r352_t1 && _r352_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r352_t1.left === "swCursiveMid") r352_swCursiveMid = _r352_t1.right;
                if (_r352_t1 && _r352_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r352_t1.left === "swCursiveEnd") r352_swCursiveEnd = _r352_t1.right;
                if (_r352_t1 && _r352_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r352_t1.left === "swCursiveCoEnd") r352_swCursiveCoEnd = _r352_t1.right;
                _r352_t4 = _r352_t4 + 1;
            }
            var r352_box = r1_fallback(r352_box, _r352_t0[0]);
            var r352_stroke1 = r1_fallback(r352_stroke1, _r352_t0[1]);
            var r352_stroke2 = r1_fallback(r352_stroke2, _r352_t0[2]);
            var r352_turn = r1_fallback(r352_turn, _r352_t0[3]);
            var r352_tension = r1_fallback(r352_tension, _r352_t0[4]);
            var r352_sw = r1_fallback(r352_sw, _r352_t0[5], r314_Stroke);
            var r352_swCursiveMid = r1_fallback(r352_swCursiveMid, _r352_t0[6], r314_AdviceStroke(2.75) * (r352_sw / r314_Stroke));
            var r352_swCursiveEnd = r1_fallback(r352_swCursiveEnd, _r352_t0[7], r314_AdviceStroke(3) * (r352_sw / r314_Stroke));
            var r352_swCursiveCoEnd = r1_fallback(r352_swCursiveCoEnd, _r352_t0[8], r314_AdviceStroke(2) * (r352_sw / r314_Stroke));
            return (function () {
                var r358_base, r358_rightHalf;
                var r358_exports = {};
                r358_exports.base = r358_base = function (r366_fSlab) {
                    var _r366_t0, _r366_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                        var r368___, _r368_t0, _r368_t1, _r368_t2, _r368_t3;
                        r368_currentGlyph.include((_r368_t0 = r352_stroke1, _r368_t0 === r314_xn$STROKESTRAIGHT$7Hrq ? r314_XStrand(true, r366_fSlab, r352_box.l, r352_box.b, r352_box.r, r352_box.t, r352_turn, 0.4, r352_tension, r352_sw) : _r368_t0 === r314_xn$STROKECURLY$7Hrq ? r314_XStrand(false, r366_fSlab, r352_box.l, r352_box.b, r352_box.r, r352_box.t, r352_turn, 0.4, r352_tension, r352_sw) : _r368_t0 === r314_xn$STROKECHANCERY$7Hrq ? r314_XChanceryStrand(-1, r366_fSlab, r352_box.l, r352_box.b, r352_box.r, r352_box.t, false, r352_sw) : _r368_t0 === r314_xn$STROKECURSIVE$7Hrq || _r368_t0 === r314_xn$STROKECURSIVEFLAT$7Hrq8 ? new r314_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                            var _r373_t0, _r373_t1;
                            r373_currentGlyph.include(r314_XCursiveHalfShape(r352_box.t, r352_box.b, r352_box.xMid, r352_box.r, new r314_xn$NamedParameterPair$2Lrc9b("swCoEnd", r352_swCursiveCoEnd), new r314_xn$NamedParameterPair$2Lrc9b("swEnd", r352_swCursiveEnd), new r314_xn$NamedParameterPair$2Lrc9b("swMid", r352_swCursiveMid), new r314_xn$NamedParameterPair$2Lrc9b("flatTail", r352_stroke1 === r314_xn$STROKECURSIVEFLAT$7Hrq8)), true, true);
                            r373_currentGlyph.include(r314_FlipAround(r352_box.xMid, r1_mix(r352_box.b, r352_box.t, 0.5)));
                            return void 0;
                        }) : (r368___ = _r368_t0, new r314_xn$Capture$2Lrc8.GlyphProc(function (r371_currentGlyph) {
                            var _r371_t0, _r371_t1;
                            return void 0;
                        }))));
                        r368_currentGlyph.include((_r368_t1 = r352_stroke2, _r368_t1 === r314_xn$STROKESTRAIGHT$7Hrq ? r314_XStrand(true, r366_fSlab, r352_box.l, r352_box.t, r352_box.r, r352_box.b, r352_turn, 0.4, r352_tension, r352_sw) : _r368_t1 === r314_xn$STROKECURLY$7Hrq ? r314_XStrand(false, r366_fSlab, r352_box.l, r352_box.t, r352_box.r, r352_box.b, r352_turn, 0.4, r352_tension, r352_sw) : _r368_t1 === r314_xn$STROKECHANCERY$7Hrq ? r314_XChanceryStrand(+1, r366_fSlab, r352_box.l, r352_box.t, r352_box.r, r352_box.b, false, r352_sw) : _r368_t1 === r314_xn$STROKECURSIVE$7Hrq ? r314_XCursiveHalfShape(r352_box.t, r352_box.b, r352_box.xMid, r352_box.r, new r314_xn$NamedParameterPair$2Lrc9b("swCoEnd", r352_swCursiveCoEnd), new r314_xn$NamedParameterPair$2Lrc9b("swEnd", r352_swCursiveEnd), new r314_xn$NamedParameterPair$2Lrc9b("swMid", r352_swCursiveMid), new r314_xn$NamedParameterPair$2Lrc9b("setMark", true)) : (r368___ = _r368_t1, new r314_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                            var _r382_t0, _r382_t1;
                            return void 0;
                        }))));
                        return void 0;
                    });
                };
                r358_exports.rightHalf = r358_rightHalf = function (r388_fSlab) {
                    var _r388_t0, _r388_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                        var r390___, _r390_t0, _r390_t1, _r390_t2, _r390_t3;
                        var r390_midy = r1_mix(r352_box.t, r352_box.b, 0.5);
                        r390_currentGlyph.include((_r390_t0 = r352_stroke1, _r390_t0 === r314_xn$STROKESTRAIGHT$7Hrq ? r314_HalfXStrand(true, r388_fSlab, r352_box.r, r352_box.t, r352_box.xMid, r390_midy, r352_turn, 0.4, r352_tension, r352_sw) : _r390_t0 === r314_xn$STROKECURLY$7Hrq ? r314_HalfXStrand(false, r388_fSlab, r352_box.r, r352_box.t, r352_box.xMid, r390_midy, r352_turn, 0.4, r352_tension, r352_sw) : _r390_t0 === r314_xn$STROKECHANCERY$7Hrq ? r314_XChanceryStrand(-1, r388_fSlab, r352_box.l, r352_box.b, r352_box.r, r352_box.t, true, r352_sw) : (r390___ = _r390_t0, new r314_xn$Capture$2Lrc8.GlyphProc(function (r393_currentGlyph) {
                            var _r393_t0, _r393_t1;
                            return void 0;
                        }))));
                        r390_currentGlyph.include((_r390_t1 = r352_stroke2, _r390_t1 === r314_xn$STROKESTRAIGHT$7Hrq ? r314_HalfXStrand(true, r388_fSlab, r352_box.r, r352_box.b, r352_box.xMid, r390_midy, r352_turn, 0.4, r352_tension, r352_sw) : _r390_t1 === r314_xn$STROKECURLY$7Hrq ? r314_HalfXStrand(false, r388_fSlab, r352_box.r, r352_box.b, r352_box.xMid, r390_midy, r352_turn, 0.4, r352_tension, r352_sw) : _r390_t1 === r314_xn$STROKECHANCERY$7Hrq ? r314_XChanceryStrand(+1, r388_fSlab, r352_box.l, r352_box.t, r352_box.r, r352_box.b, true, r352_sw) : _r390_t1 === r314_xn$STROKECURSIVE$7Hrq ? r314_XCursiveHalfShape(r352_box.t, r352_box.b, r352_box.xMid, r352_box.r, new r314_xn$NamedParameterPair$2Lrc9b("swCoEnd", r352_swCursiveCoEnd), new r314_xn$NamedParameterPair$2Lrc9b("swEnd", r352_swCursiveEnd), new r314_xn$NamedParameterPair$2Lrc9b("swMid", r352_swCursiveMid), new r314_xn$NamedParameterPair$2Lrc9b("setMark", true)) : (r390___ = _r390_t1, new r314_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                            var _r396_t0, _r396_t1;
                            return void 0;
                        }))));
                        return void 0;
                    });
                };
                return r358_exports;
            })();
        };
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r402_t0, _r402_t1;
            return {
                "XSerifs": r314_XSerifs
            };
        });
        var r314_XSerifs = (function () {
            var r405_Full, r405_SemiChancery, r405_UnilateralMotion, r405_BilateralMotion, r405_GrekLowerChi;
            var r405_exports = {};
            r405_exports.Full = r405_Full = function (r413_sf) {
                var _r413_t0, _r413_t1;
                return new r314_xn$Capture$2Lrc8.GlyphProc(function (r415_currentGlyph) {
                    var _r415_t0, _r415_t1;
                    r415_currentGlyph.include(r413_sf.lt.full, true, true);
                    r415_currentGlyph.include(r413_sf.rt.full);
                    r415_currentGlyph.include(r413_sf.lb.full);
                    r415_currentGlyph.include(r413_sf.rb.full);
                    return void 0;
                });
            };
            r405_exports.SemiChancery = r405_SemiChancery = function (r421_sf) {
                var _r421_t0, _r421_t1;
                return new r314_xn$Capture$2Lrc8.GlyphProc(function (r423_currentGlyph) {
                    var _r423_t0, _r423_t1;
                    r423_currentGlyph.include(r421_sf.rt.full, true, true);
                    r423_currentGlyph.include(r421_sf.lb.full);
                    return void 0;
                });
            };
            r405_exports.UnilateralMotion = r405_UnilateralMotion = function (r427_sf) {
                var _r427_t0, _r427_t1;
                return new r314_xn$Capture$2Lrc8.GlyphProc(function (r429_currentGlyph) {
                    var _r429_t0, _r429_t1;
                    r429_currentGlyph.include(r427_sf.lt.outer, true, true);
                    return void 0;
                });
            };
            r405_exports.BilateralMotion = r405_BilateralMotion = function (r432_sf) {
                var _r432_t0, _r432_t1;
                return new r314_xn$Capture$2Lrc8.GlyphProc(function (r434_currentGlyph) {
                    var _r434_t0, _r434_t1;
                    r434_currentGlyph.include(r432_sf.lt.outer, true, true);
                    r434_currentGlyph.include(r432_sf.rb.outer);
                    return void 0;
                });
            };
            r405_exports.GrekLowerChi = r405_GrekLowerChi = function (r438_sf) {
                var _r438_t0, _r438_t1;
                return new r314_xn$Capture$2Lrc8.GlyphProc(function (r440_currentGlyph) {
                    var _r440_t0, _r440_t1;
                    r440_currentGlyph.include(r438_sf.lt.outer, true, true);
                    r440_currentGlyph.include(r438_sf.rt.full);
                    r440_currentGlyph.include(r438_sf.lb.full);
                    r440_currentGlyph.include(r438_sf.rb.outer);
                    return void 0;
                });
            };
            return r405_exports;
        })();
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r446_t0, _r446_t1;
            return {
                "XConfig": r314_XConfig
            };
        });
        var r314_XConfig = r1_SuffixCfg.combine(r1_SuffixCfg.weave({
            "straight": [r314_xn$STROKESTRAIGHT$7Hrq, r314_xn$STROKESTRAIGHT$7Hrq],
            "curly": [r314_xn$STROKECURLY$7Hrq, r314_xn$STROKECURLY$7Hrq]
        }, {
            "": [0, "capital", "e"],
            "descending": [r314_Descender, "capDesc", "p"]
        }, {
            "serifless": [null, false],
            "unilateralMotionSerifed": [r314_XSerifs.UnilateralMotion, false],
            "bilateralMotionSerifed": [r314_XSerifs.BilateralMotion, false],
            "serifed": [r314_XSerifs.Full, true],
            "grekLowerChiSerifed": [r314_XSerifs.GrekLowerChi, true]
        }), r1_SuffixCfg.weave({
            "semiChanceryStraight": [r314_xn$STROKESTRAIGHT$7Hrq, r314_xn$STROKECHANCERY$7Hrq],
            "semiChanceryCurly": [r314_xn$STROKECURLY$7Hrq, r314_xn$STROKECHANCERY$7Hrq]
        }, {
            "": [0, "capital", "e"],
            "descending": [r314_Descender, "capDesc", "p"]
        }, {
            "serifless": [null, false],
            "serifed": [r314_XSerifs.SemiChancery, true]
        }), {
            "chancery": [[r314_xn$STROKECHANCERY$7Hrq, r314_xn$STROKECHANCERY$7Hrq], [0, "capital", "e"], [null, false]],
            "chanceryDescending": [[r314_xn$STROKECHANCERY$7Hrq, r314_xn$STROKECHANCERY$7Hrq], [r314_Descender, "capDesc", "p"], [null, false]]
        }, {
            "cursive": [[r314_xn$STROKECURSIVE$7Hrq, r314_xn$STROKECURSIVE$7Hrq], [0, "capital", "e"], [null, false]],
            "cursiveDescending": [[r314_xn$STROKECURSIVE$7Hrq, r314_xn$STROKECURSIVE$7Hrq], [r314_Descender, "capDesc", "p"], [null, false]]
        });
        var _r314_t10 = Object.entries(r314_XConfig)[Symbol.iterator]();
        var _r314_t11 = void 0;
        while (!(_r314_t11 = _r314_t10.next()).done) {
            _r314_t12 = _r314_t11.value;
            r314_suffix = _r314_t12[0];
            r314_stroke1 = _r314_t12[1][0][0];
            r314_stroke2 = _r314_t12[1][0][1];
            _r314_t12[1][0];
            r314_bottom = _r314_t12[1][1][0];
            r314_mkCap = _r314_t12[1][1][1];
            r314_mkXH = _r314_t12[1][1][2];
            _r314_t12[1][1];
            r314_serifShape = _r314_t12[1][2][0];
            r314_fMaskBase = _r314_t12[1][2][1];
            _r314_t12[1][2];
            _r314_t12[1];
            (function () {
                var r449___, _r449_t0;
                var r449_letterShape = function (r450_df, r450_top, r450_bot, r450_turn, r450_tension, r450__sw) {
                    var _r450_t0, _r450_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r452_currentGlyph) {
                        var r452_sf, _r452_t0, _r452_t1;
                        var r452_lf = r314_XLetterForm(r450_df.bodyBox(r450_top, r450_bot), r314_stroke1, r314_stroke2, r450_turn, r450_tension, r450__sw);
                        r452_currentGlyph.include(r314_WithSerifOverflowMask(r314_fMaskBase, r450_df.bodyBox(r450_top, r450_bot), r452_lf.base(r314_fMaskBase)));
                        if (r314_serifShape) {
                            r452_sf = r314_SerifFrame.fromDf(r450_df, r450_top, r450_bot);
                            r452_currentGlyph.include(r314_serifShape(r452_sf));
                        }
                        return void 0;
                    });
                };
                r314_xn$GlyphSaveSink$2Lrc4b.save("X." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r457_currentGlyph) {
                    var _r457_t0, _r457_t1;
                    r457_currentGlyph.include(r314_MarkSet[r314_mkCap]());
                    r457_currentGlyph.include(r449_letterShape(r314_DivFrame(1, 2), r314_CAP, r314_bottom, 0.1, 0.28));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("x." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r462_currentGlyph) {
                    var _r462_t0, _r462_t1;
                    r462_currentGlyph.include(r314_MarkSet[r314_mkXH]());
                    r462_currentGlyph.include(r449_letterShape(r314_DivFrame(1, 2), r314_XH, r314_bottom, 0.1, 0.2));
                    return void 0;
                }));
                return r314_bottom ? r314_xn$GlyphSaveSink$2Lrc4b.save("latn/chiPalatalHook." + r314_suffix, null, (_r449_t0 = r314_stroke2, _r449_t0 === r314_xn$STROKECURSIVE$7Hrq ? new r314_xn$Capture$2Lrc8.GlyphProc(function (r477_currentGlyph) {
                    var _r477_t0, _r477_t1;
                    r477_currentGlyph.include(r314_xn$referglyph$1aao("x." + r314_suffix), r314_AS_BASE, r314_ALSO_METRICS);
                    var r477_attach = r477_currentGlyph.gizmo.unapply(r477_currentGlyph.baseAnchors.palatalHookAttach || r477_currentGlyph.baseAnchors.bottomRight);
                    r477_currentGlyph.include(r314_PalatalHook.r(r477_attach.x, r314_bottom, new r314_xn$NamedParameterPair$2Lrc9b("yAttach", r477_attach.y)));
                    return void 0;
                }) : (r449___ = _r449_t0, new r314_xn$Capture$2Lrc8.GlyphProc(function (r467_currentGlyph) {
                    var _r467_t0, _r467_t1;
                    var r467_df = r467_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleM, 1));
                    r467_currentGlyph.include(r467_df.markSet[r314_mkXH]());
                    var r467_subDf = r314_DivFrame(0.75 * r314_para.advanceScaleM, 2);
                    r467_currentGlyph.include(r449_letterShape(r467_subDf, r314_XH, r314_bottom, 0.1, 0.2, r467_subDf.mvs));
                    var r467_tinyGap = Math.max(r314_Width / 32, r314_AdviceStroke(24));
                    var r467_sideJut = r314_serifShape && r314_serifShape !== r314_XSerifs.UnilateralMotion ? r314_SideJut : r314_stroke2 === r314_xn$STROKESTRAIGHT$7Hrq ? -r314_OX * r314_StrokeWidthBlend(1, 2) : true ? 0 : void 0;
                    r467_currentGlyph.include(r314_PalatalHook.r(r467_df.rightSB + r467_sideJut + r467_tinyGap, 0, new r314_xn$NamedParameterPair$2Lrc9b("xLink", r467_subDf.middle), new r314_xn$NamedParameterPair$2Lrc9b("yAttach", r1_mix(r314_bottom, r314_XH, 0.5) - r467_subDf.mvs / 2), new r314_xn$NamedParameterPair$2Lrc9b("refSw", r467_subDf.mvs), new r314_xn$NamedParameterPair$2Lrc9b("maskOut", r314_intersection(r314_MaskBelow(r1_mix(r314_bottom, r314_XH, 0.5) - r467_subDf.mvs / 2), r314_MaskLeft(r467_subDf.rightSB + r467_sideJut + r467_tinyGap)))));
                    return void 0;
                })))) : void 0;
            })();
        }
        r314_xn$selectvariant$7Hrq("X", "X");
        r314_xn$linkreducedvariant$5sIl8("X/sansSerif", "X", r1_MathSansSerif);
        r314_xn$selectvariant$7Hrq("smcpX", new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "x"), new r314_xn$NamedParameterPair$2Lrc9b("follow", "X"));
        r314_xn$selectvariant$7Hrq("x", "x");
        r314_xn$linkreducedvariant$5sIl8("x/sansSerif", "x", r1_MathSansSerif);
        r314_alias("grek/Chi", 935, "X");
        r314_xn$aliasreducedvariant$1aao8("grek/Chi/sansSerif", "grek/Chi", "X/sansSerif", r1_MathSansSerif);
        r314_xn$selectvariant$7Hrq("latn/Chi", 42931, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "X"));
        r314_xn$selectvariant$7Hrq("grek/chi", 967, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "x"));
        r314_xn$linkreducedvariant$5sIl8("grek/chi/sansSerif", "grek/chi", r1_MathSansSerif, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "x"));
        r314_xn$selectvariant$7Hrq("latn/chi", 43859, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "x"));
        r314_xn$selectvariant$7Hrq("latn/chiPalatalHook", 122685, new r314_xn$NamedParameterPair$2Lrc9b("follow", "latn/chi"));
        r314_alias("cyrl/Kha", 1061, "X");
        r314_alias("cyrl/kha", 1093, "x");
        r314_xn$selectvariant$7Hrq("cyrl/Kha/descBase", new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "X"), new r314_xn$NamedParameterPair$2Lrc9b("follow", "X/descBase"));
        r314_xn$selectvariant$7Hrq("cyrl/kha/descBase", new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "x"), new r314_xn$NamedParameterPair$2Lrc9b("follow", "x/descBase"));
        var r314_AddDescender = function (r492_Ctor) {
            var _r492_t0, _r492_t1;
            return function (r493_src, r493_sel) {
                var _r493_t0, _r493_t1;
                return new r314_xn$Capture$2Lrc8.GlyphProc(function (r495_currentGlyph) {
                    var r495_attach, r495_sw, _r495_t0, _r495_t1;
                    r495_currentGlyph.include(r314_xn$referglyph$1aao(r493_src), r314_AS_BASE, r314_ALSO_METRICS);
                    var r495_attachAnchor = r495_currentGlyph.baseAnchors.palatalHookAttach;
                    if (r495_attachAnchor) {
                        r495_attach = r495_currentGlyph.gizmo.unapply(r495_attachAnchor);
                        r495_currentGlyph.include(r492_Ctor.r(r495_attach.x, 0, new r314_xn$NamedParameterPair$2Lrc9b("yAttach", r495_attach.y)));
                    } else {
                        r495_sw = r492_Ctor.Sw(r314_Stroke);
                        r495_currentGlyph.include(r492_Ctor.r(new r314_xn$NamedParameterPair$2Lrc9b("x", r314_RightSB + r314_SideJut + r495_sw * r314_TanSlope), new r314_xn$NamedParameterPair$2Lrc9b("y", 0), new r314_xn$NamedParameterPair$2Lrc9b("xLink", r314_RightSB - r314_HSwToV(r314_HalfStroke))));
                    }
                    return void 0;
                });
            };
        };
        r314_xn$deriveglyphs$7Hrq("cyrl/KhaDescender", 1202, "cyrl/Kha/descBase", r314_AddDescender(r314_CyrDescender));
        r314_xn$deriveglyphs$7Hrq("cyrl/khaDescender", 1203, "cyrl/kha/descBase", r314_AddDescender(r314_CyrDescender));
        r314_xn$deriveglyphs$7Hrq("cyrl/KhaHook", 1276, "cyrl/Kha/descBase", r314_AddDescender(r314_PalatalHook));
        r314_xn$deriveglyphs$7Hrq("cyrl/khaHook", 1277, "cyrl/kha/descBase", r314_AddDescender(r314_PalatalHook));
        r314_alias("xPalatalHook", 7565, "cyrl/khaHook");
        var r314_CyrlKhaBarShape = function (r503_top, r503_bot) {
            var _r503_t0, _r503_t1;
            return r314_HOverlayBar(r1_mix(r314_SB, r314_RightSB, 0.08), r1_mix(r314_SB, r314_RightSB, 0.92), r1_mix(r503_bot, r503_top, 0.5));
        };
        r314_xn$derivecomposites$7Hrq("cyrl/KhaBar", 1278, "cyrl/Kha", r314_CyrlKhaBarShape(r314_CAP, 0));
        r314_xn$derivecomposites$7Hrq("cyrl/khaBar", 1279, "cyrl/kha", r314_CyrlKhaBarShape(r314_XH, 0));
        r314_xn$derivecomposites$7Hrq("latn/chiBar", 122708, "latn/chi", r314_CyrlKhaBarShape(r314_XH, r314_Descender));
        var _r314_t13 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r314_BBS = _r314_t13.BBS;
        var r314_BBD = _r314_t13.BBD;
        var r314_BBXShape = function (r505_l, r505_r, r505_top) {
            var _r505_leti0, _r505_t1, _r505_t2, _r505_t4, _r505_tag5;
            var _r505_t3 = r314_DiagCorDs(r505_top, r505_r - r505_l, r314_BBD);
            return (function (_r505_leti0) {
                var r506_kDiag = _r505_leti0;
                return r314_union(r314_intersection(r314_Rect(r505_top, 0, r1_mix(r314_Width, 0, 2), r1_mix(0, r314_Width, 2)), r314_union(r314_ExtLineCenter(r505_l, r505_top, r505_r - r506_kDiag * r314_BBD, 0, r314_BBS, 1), r314_ExtLineCenter(r505_l + r506_kDiag * r314_BBD, r505_top, r505_r, 0, r314_BBS, 1))), r314_HBar.t(r505_l, r505_l + r506_kDiag * r314_BBD, r505_top, r314_BBS), r314_HBar.b(r505_r, r505_r - r506_kDiag * r314_BBD, 0, r314_BBS), r314_intersection(r314_Rect(r505_top, 0, r1_mix(r314_Width, 0, 2), r1_mix(0, r314_Width, 2)), r314_difference(r314_ExtLineCenter(r505_l, 0, r505_r, r505_top, r314_BBS, 1), r314_xn$spirooutline$1aao(r314_corner(r505_l, r505_top), r314_corner(r505_l + r506_kDiag * r314_BBD, r505_top), r314_corner(r505_r, 0), r314_corner(r505_r - r506_kDiag * r314_BBD, 0)))));
            })(_r505_t3);
        };
        r314_xn$GlyphSaveSink$2Lrc4b.save("mathbb/X", 120143, new r314_xn$Capture$2Lrc8.GlyphProc(function (r509_currentGlyph) {
            var _r509_t0, _r509_t1;
            r509_currentGlyph.include(r314_MarkSet.capital(), true, true);
            r509_currentGlyph.include(r314_BBXShape(r314_SB, r314_RightSB, r314_CAP));
            return void 0;
        }));
        return r314_xn$GlyphSaveSink$2Lrc4b.save("mathbb/x", 120169, new r314_xn$Capture$2Lrc8.GlyphProc(function (r514_currentGlyph) {
            var _r514_t0, _r514_t1;
            r514_currentGlyph.include(r314_MarkSet.e(), true, true);
            r514_currentGlyph.include(r314_BBXShape(r314_SB, r314_RightSB, r314_XH));
            return void 0;
        }));
    });
    return void 0;
});


