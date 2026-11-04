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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-P", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_fGap, r313_slabs, _r313_t13, _r313_t15, _r313_t16, _r313_t17, _r313_tag18;
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
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_ArchDepth = _r313_t1.ArchDepth;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HBarPos = _r313_t1.HBarPos;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_MidJutSide = _r313_t1.MidJutSide;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_ArchDepthAOf = _r313_t1.ArchDepthAOf;
        var r313_ArchDepthBOf = _r313_t1.ArchDepthBOf;
        var r313_YSmoothMidR = _r313_t1.YSmoothMidR;
        var r313_YSmoothMidL = _r313_t1.YSmoothMidL;
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
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_tagged = _r313_t5.tagged;
        var r313_Rect = _r313_t5.Rect;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_HOverlayBar = _r313_t5.HOverlayBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookStart = _r313_t5.HookStart;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_SetGrekUpperTonos = _r313_t8.SetGrekUpperTonos;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_BowlXDepth = _r313_t9.BowlXDepth;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LetterBarOverlay = _r313_t10.LetterBarOverlay;
        var r313_LeftHook = _r313_t10.LeftHook;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "PBarPosY": r313_PBarPosY
            };
        });
        var r313_PBarPosY = function (r322_top, r322_sw, r322_bp) {
            var _r322_t0, _r322_t1;
            return r1_mix(0, r322_top - r322_sw, r322_bp) - r322_sw * r313_PShape.SwBelowBar;
        };
        var r313_PRotundaOutlineKnots = function (r323_top, r323_df, r323_mul, r323_bp, r323_overshoot, r323_sw, r323_offset, r323_endX, r323_hook) {
            var _r323_t0, _r323_t1;
            var r323_bowlTop = r323_top - r323_offset;
            var r323_bowlBottom = r313_PBarPosY(r323_top, r323_sw, r323_bp) + r323_offset;
            var r323_turnRadius = r313_BowlXDepth(r323_bowlTop, r323_bowlBottom, r323_df.leftSB, r323_df.rightSB, r323_sw);
            var r323_ada = r313_ArchDepthAOf(r313_ArchDepth * 0.9, r323_df.width);
            var r323_adb = r313_ArchDepthBOf(r313_ArchDepth * 0.9, r323_df.width);
            var r323_left = r1_mix(0, r323_df.leftSB, r323_mul);
            var r323_right = r323_df.rightSB - r323_offset;
            var r323_turn = r313_YSmoothMidR(r323_bowlTop, r323_bowlBottom, r323_ada, r323_adb);
            return [r313_g4(r323_left - r313_O, r323_bowlTop - r323_hook), r313_HookStart(r323_bowlTop), r313_g4(r323_right - r323_overshoot, r323_turn), r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(Math.max(r323_endX + r313_TINY + Math.abs(0.5 * r323_sw * r313_TanSlope), r323_df.middle), new r313_xn$NamedParameterPair$2Lrc9b("sw", 0.5 * r323_sw)), r323_bowlBottom), r313_curl(r323_endX, r323_bowlBottom, r313_heading(r313_Leftward))];
        };
        var r313_PShapeOutlineKnots = function (r325_top, r325_df, r325_mul, r325_bp, r325_overshoot, r325_sw, r325_offset) {
            var _r325_t0, _r325_t1;
            var r325_bowlTop = r325_top - r325_offset;
            var r325_bowlBottom = r313_PBarPosY(r325_top, r325_sw, r325_bp) + r325_offset;
            var r325_turnRadius = r313_BowlXDepth(r325_bowlTop, r325_bowlBottom, r325_df.leftSB, r325_df.rightSB, r325_sw);
            var r325_ada = r313_ArchDepthAOf(r313_ArchDepth * 0.9, r325_df.width);
            var r325_adb = r313_ArchDepthBOf(r313_ArchDepth * 0.9, r325_df.width);
            var r325_left = r1_mix(0, r325_df.leftSB, r325_mul);
            var r325_right = r325_df.rightSB - r325_offset;
            var r325_turn = r313_YSmoothMidR(r325_bowlTop, r325_bowlBottom, r325_ada, r325_adb);
            return [r313_flat(r325_left - r313_O, r325_bowlTop, r313_heading(r313_Rightward)), r313_curl(r313_Arch["adjust-x"].top(r325_right - r325_turnRadius, new r313_xn$NamedParameterPair$2Lrc9b("sw", r325_sw)), r325_bowlTop), r313_archv(), r313_g4(r325_right - r325_overshoot, r325_turn), r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r325_right - r325_turnRadius, new r313_xn$NamedParameterPair$2Lrc9b("sw", r325_sw)), r325_bowlBottom), r313_curl(r325_left - r313_O, r325_bowlBottom, r313_heading(r313_Leftward))];
        };
        var r313_RevPshapeOutlineKnots = function (r328_top, r328_df, r328_mul, r328_bp, r328_overshoot, r328_sw, r328_offset) {
            var _r328_t0, _r328_t1;
            var r328_bowlTop = r328_top - r328_offset;
            var r328_bowlBottom = r313_PBarPosY(r328_top, r328_sw, r328_bp) + r328_offset;
            var r328_turnRadius = r313_BowlXDepth(r328_bowlTop, r328_bowlBottom, r328_df.leftSB, r328_df.rightSB, r328_sw);
            var r328_ada = r313_ArchDepthAOf(r313_ArchDepth * 0.9, r328_df.width);
            var r328_adb = r313_ArchDepthBOf(r313_ArchDepth * 0.9, r328_df.width);
            var r328_left = r328_df.leftSB + r328_offset;
            var r328_right = r1_mix(r328_df.width, r328_df.rightSB, r328_mul);
            var r328_turn = r313_YSmoothMidL(r328_bowlTop, r328_bowlBottom, r328_ada, r328_adb);
            return [r313_flat(r328_right + r313_O, r328_bowlTop, r313_heading(r313_Leftward)), r313_curl(r313_Arch["adjust-x"].top(r328_left + r328_turnRadius, new r313_xn$NamedParameterPair$2Lrc9b("sw", r328_sw)), r328_bowlTop), r313_archv(), r313_g4(r328_left + r328_overshoot, r328_turn), r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r328_left + r328_turnRadius, new r313_xn$NamedParameterPair$2Lrc9b("sw", r328_sw)), r328_bowlBottom), r313_curl(r328_right + r313_O, r328_bowlBottom, r313_heading(r313_Rightward))];
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r332_t0, _r332_t1;
            return {
                "PShapeOutline": r313_PShapeOutline
            };
        });
        var r313_PShapeOutline = function () {
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
                if (_r334_t1 && _r334_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r334_t1.left === "df") r334_df = _r334_t1.right;
                if (_r334_t1 && _r334_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r334_t1.left === "mul") r334_mul = _r334_t1.right;
                if (_r334_t1 && _r334_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r334_t1.left === "bp") r334_bp = _r334_t1.right;
                if (_r334_t1 && _r334_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r334_t1.left === "overshoot") r334_overshoot = _r334_t1.right;
                if (_r334_t1 && _r334_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r334_t1.left === "sw") r334_sw = _r334_t1.right;
                if (_r334_t1 && _r334_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r334_t1.left === "offset") r334_offset = _r334_t1.right;
                _r334_t4 = _r334_t4 + 1;
            }
            var r334_top = r1_fallback(r334_top, _r334_t0[0]);
            var r334_df = r1_fallback(r334_df, _r334_t0[1], r313_DivFrame(1));
            var r334_mul = r1_fallback(r334_mul, _r334_t0[2], r313_PShape.defaultMul);
            var r334_bp = r1_fallback(r334_bp, _r334_t0[3], r313_PShape.BarPos);
            var r334_overshoot = r1_fallback(r334_overshoot, _r334_t0[4], r313_PShape.defaultOvershoot);
            var r334_sw = r1_fallback(r334_sw, _r334_t0[5], r334_df.mvs);
            var r334_offset = r1_fallback(r334_offset, _r334_t0[6], 0);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                var _r339_t0, _r339_t1;
                r339_currentGlyph.include(r313_xn$spirooutline$1aao(r313_PShapeOutlineKnots(r334_top, r334_df, r334_mul, r334_bp, r334_overshoot, r334_sw, r334_offset)));
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r342_t0, _r342_t1;
            return {
                "PShape": r313_PShape
            };
        });
        var r313_PShape = function () {
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
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "top") r344_top = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "df") r344_df = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "mul") r344_mul = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "bp") r344_bp = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "overshoot") r344_overshoot = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "sw") r344_sw = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "slab") r344_slab = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "withBar") r344_withBar = _r344_t1.right;
                _r344_t4 = _r344_t4 + 1;
            }
            var r344_top = r1_fallback(r344_top, _r344_t0[0]);
            var r344_df = r1_fallback(r344_df, _r344_t0[1], r313_DivFrame(1));
            var r344_mul = r1_fallback(r344_mul, _r344_t0[2], r313_PShape.defaultMul);
            var r344_bp = r1_fallback(r344_bp, _r344_t0[3], r313_PShape.BarPos);
            var r344_overshoot = r1_fallback(r344_overshoot, _r344_t0[4], r313_PShape.defaultOvershoot);
            var r344_sw = r1_fallback(r344_sw, _r344_t0[5], r344_df.mvs);
            var r344_slab = r1_fallback(r344_slab, _r344_t0[6], null);
            var r344_withBar = r1_fallback(r344_withBar, _r344_t0[7], true);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                var _r349_t0, _r349_t1;
                r349_currentGlyph.include(r313_tagged("bowl", r313_dispiro(r313_widths.rhs(r344_sw), r313_PShapeOutlineKnots(r344_top, r344_df, r344_mul, r344_bp, r344_overshoot, r344_sw, 0))));
                if (r344_withBar) r349_currentGlyph.include(r313_tagged("strokeL", r313_VBar.l(r1_mix(0, r344_df.leftSB, r344_mul), 0, r344_top, r344_sw)));
                if (r344_slab) r349_currentGlyph.include(r344_slab(r344_top, r344_df, r344_sw, r344_mul));
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r354_t0, _r354_t1;
            return {
                "PRotundaShape": r313_PRotundaShape
            };
        });
        var r313_PRotundaShape = function () {
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
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "top") r356_top = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "df") r356_df = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "mul") r356_mul = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "bp") r356_bp = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "overshoot") r356_overshoot = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "sw") r356_sw = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "slab") r356_slab = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "endX") r356_endX = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "hook") r356_hook = _r356_t1.right;
                _r356_t4 = _r356_t4 + 1;
            }
            var r356_top = r1_fallback(r356_top, _r356_t0[0]);
            var r356_df = r1_fallback(r356_df, _r356_t0[1], r313_DivFrame(1));
            var r356_mul = r1_fallback(r356_mul, _r356_t0[2], r313_PShape.defaultMul);
            var r356_bp = r1_fallback(r356_bp, _r356_t0[3], r313_PShape.BarPos);
            var r356_overshoot = r1_fallback(r356_overshoot, _r356_t0[4], r313_PShape.defaultOvershoot);
            var r356_sw = r1_fallback(r356_sw, _r356_t0[5], r356_df.mvs);
            var r356_slab = r1_fallback(r356_slab, _r356_t0[6], null);
            var r356_endX = r1_fallback(r356_endX, _r356_t0[7], r313_SB);
            var r356_hook = r1_fallback(r356_hook, _r356_t0[8], r313_Hook);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                var _r361_t0, _r361_t1;
                r361_currentGlyph.include(r313_tagged("bowl", r313_dispiro(r313_widths.rhs(r356_sw), r313_PRotundaOutlineKnots(r356_top, r356_df, r356_mul, r356_bp, r356_overshoot, r356_sw, 0, r356_endX, r356_hook))));
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r364_t0, _r364_t1;
            return {
                "RevPShape": r313_RevPShape
            };
        });
        var r313_RevPShape = function () {
            var _r366_t5;
            var _r366_t6 = arguments;
            var r366_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r366_t6, 0);
            var _r366_t0 = [];
            var _r366_t1 = 0;
            while (_r366_t1 < r366_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r366_xn$flexarguments$2Lrc7uIe5[_r366_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r366_t0.push(r366_xn$flexarguments$2Lrc7uIe5[_r366_t1]);
                _r366_t1 = _r366_t1 + 1;
            }
            var _r366_t2 = r366_xn$flexarguments$2Lrc7uIe5;
            var _r366_t3 = _r366_t2.length;
            var _r366_t4 = 0;
            while (_r366_t4 < _r366_t3) {
                _r366_t1 = _r366_t2[_r366_t4];
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "top") r366_top = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "df") r366_df = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "mul") r366_mul = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "bp") r366_bp = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "overshoot") r366_overshoot = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "sw") r366_sw = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "slab") r366_slab = _r366_t1.right;
                _r366_t4 = _r366_t4 + 1;
            }
            var r366_top = r1_fallback(r366_top, _r366_t0[0]);
            var r366_df = r1_fallback(r366_df, _r366_t0[1], r313_DivFrame(1));
            var r366_mul = r1_fallback(r366_mul, _r366_t0[2], r313_PShape.defaultMul);
            var r366_bp = r1_fallback(r366_bp, _r366_t0[3], r313_PShape.BarPos);
            var r366_overshoot = r1_fallback(r366_overshoot, _r366_t0[4], r313_PShape.defaultOvershoot);
            var r366_sw = r1_fallback(r366_sw, _r366_t0[5], r366_df.mvs);
            var r366_slab = r1_fallback(r366_slab, _r366_t0[6], null);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r371_currentGlyph) {
                var _r371_t0, _r371_t1;
                r371_currentGlyph.include(r313_tagged("bowl", r313_dispiro(r313_widths.lhs(r366_sw), r313_RevPshapeOutlineKnots(r366_top, r366_df, r366_mul, r366_bp, r366_overshoot, r366_sw, 0))));
                r371_currentGlyph.include(r313_tagged("strokeR", r313_VBar.r(r1_mix(r366_df.width, r366_df.rightSB, r366_mul), 0, r366_top, r366_sw)));
                if (r366_slab) r371_currentGlyph.include(r366_slab(r366_top, r366_df, r366_sw, r366_mul));
                return void 0;
            });
        };
        r313_PShape.defaultMul = 1.25;
        r313_PShape.defaultOvershoot = r313_OX * 2;
        r313_PShape.BarPos = 1 - r313_HBarPos;
        r313_PShape.SwBelowBar = 0.25;
        r313_PShape.SlabMotion = function (r375_top, r375_df, r375_sw, r375_mul) {
            var _r375_t0, _r375_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                var _r377_t0, _r377_t1;
                r377_currentGlyph.include(r313_tagged("serifLT", r313_HSerif.lt(r1_mix(0, r375_df.leftSB, r375_mul), r375_top, r313_SideJut, r375_sw)));
                return void 0;
            });
        };
        r313_PShape.SlabSymmetric = function (r379_top, r379_df, r379_sw, r379_mul) {
            var _r379_t0, _r379_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                var _r381_t0, _r381_t1;
                r381_currentGlyph.include(r313_PShape.SlabMotion(r379_top, r379_df, r379_sw, r379_mul));
                r381_currentGlyph.include(r313_tagged("serifLB", r313_HSerif.mb(r1_mix(0, r379_df.leftSB, r379_mul) + r313_HSwToV(0.5 * r379_sw), 0, r313_Jut - r313_HSwToV(0.5 * (r313_Stroke - r379_sw)), r379_sw)));
                return void 0;
            });
        };
        r313_PShape.SlabFullSymmetric = function (r384_top, r384_df, r384_sw, r384_mul) {
            var _r384_t0, _r384_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                var _r386_t0, _r386_t1;
                r386_currentGlyph.include(r313_tagged("serifLT", r313_union(r313_HSerif.lt(r1_mix(0, r384_df.leftSB, r384_mul), r384_top, r313_SideJut, r384_sw), r313_HSerif.rt(r1_mix(0, r384_df.leftSB, r384_mul) + r313_HSwToV(0.5 * r384_sw), r384_top, r313_MidJutSide - r313_HSwToV(0.5 * (r313_Stroke - r384_sw)), r384_sw))));
                r386_currentGlyph.include(r313_tagged("serifLB", r313_HSerif.mb(r1_mix(0, r384_df.leftSB, r384_mul) + r313_HSwToV(0.5 * r384_sw), 0, r313_Jut - r313_HSwToV(0.5 * (r313_Stroke - r384_sw)), r384_sw)));
                return void 0;
            });
        };
        r313_PShape.SlabAsymmetric = function (r389_top, r389_df, r389_sw, r389_mul) {
            var _r389_t0, _r389_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
                var _r391_t0, _r391_t1;
                r391_currentGlyph.include(r313_PShape.SlabMotion(r389_top, r389_df, r389_sw, r389_mul));
                r391_currentGlyph.include(r313_tagged("serifLB", r313_union(r313_HSerif.lb(r1_mix(0, r389_df.leftSB, r389_mul), 0, r313_SideJut, r389_sw), r313_HSerif.rb(r1_mix(0, r389_df.leftSB, r389_mul) + r313_HSwToV(0.5 * r389_sw), 0, r313_MidJutSide - r313_HSwToV(0.5 * (r313_Stroke - r389_sw)), r389_sw))));
                return void 0;
            });
        };
        r313_RevPShape.SlabMotion = function (r394_top, r394_df, r394_sw, r394_mul) {
            var _r394_t0, _r394_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                var _r396_t0, _r396_t1;
                r396_currentGlyph.include(r313_tagged("serifRT", r313_HSerif.rt(r1_mix(r394_df.width, r394_df.rightSB, r394_mul), r394_top, r313_SideJut, r394_sw)));
                return void 0;
            });
        };
        r313_RevPShape.SlabMotionBottom = function (r398_top, r398_df, r398_sw, r398_mul) {
            var _r398_t0, _r398_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r400_currentGlyph) {
                var _r400_t0, _r400_t1;
                r400_currentGlyph.include(r313_tagged("serifRB", r313_HSerif.rb(r1_mix(r398_df.width, r398_df.rightSB, r398_mul), 0, r313_SideJut, r398_sw)));
                return void 0;
            });
        };
        r313_RevPShape.SlabSymmetric = function (r402_top, r402_df, r402_sw, r402_mul) {
            var _r402_t0, _r402_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r404_currentGlyph) {
                var _r404_t0, _r404_t1;
                r404_currentGlyph.include(r313_RevPShape.SlabMotion(r402_top, r402_df, r402_sw, r402_mul));
                r404_currentGlyph.include(r313_tagged("serifRB", r313_HSerif.mb(r1_mix(r402_df.width, r402_df.rightSB, r402_mul) - r313_HSwToV(0.5 * r402_sw), 0, r313_Jut - r313_HSwToV(0.5 * (r313_Stroke - r402_sw)), r402_sw)));
                return void 0;
            });
        };
        r313_RevPShape.SlabAsymmetric = function (r407_top, r407_df, r407_sw, r407_mul) {
            var _r407_t0, _r407_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r409_currentGlyph) {
                var _r409_t0, _r409_t1;
                r409_currentGlyph.include(r313_RevPShape.SlabMotion(r407_top, r407_df, r407_sw, r407_mul));
                r409_currentGlyph.include(r313_tagged("serifRB", r313_union(r313_HSerif.rb(r1_mix(r407_df.width, r407_df.rightSB, r407_mul), 0, r313_SideJut, r407_sw), r313_HSerif.lb(r1_mix(r407_df.width, r407_df.rightSB, r407_mul) - r313_HSwToV(0.5 * r407_sw), 0, r313_MidJutSide - r313_HSwToV(0.5 * (r313_Stroke - r407_sw)), r407_sw))));
                return void 0;
            });
        };
        r313_PShape.OpenGap = function () {
            var _r412_t5;
            var _r412_t6 = arguments;
            var r412_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r412_t6, 0);
            var _r412_t0 = [];
            var _r412_t1 = 0;
            while (_r412_t1 < r412_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r412_xn$flexarguments$2Lrc7uIe5[_r412_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r412_t0.push(r412_xn$flexarguments$2Lrc7uIe5[_r412_t1]);
                _r412_t1 = _r412_t1 + 1;
            }
            var _r412_t2 = r412_xn$flexarguments$2Lrc7uIe5;
            var _r412_t3 = _r412_t2.length;
            var _r412_t4 = 0;
            while (_r412_t4 < _r412_t3) {
                _r412_t1 = _r412_t2[_r412_t4];
                if (_r412_t1 && _r412_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r412_t1.left === "top") r412_top = _r412_t1.right;
                if (_r412_t1 && _r412_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r412_t1.left === "df") r412_df = _r412_t1.right;
                if (_r412_t1 && _r412_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r412_t1.left === "bot") r412_bot = _r412_t1.right;
                if (_r412_t1 && _r412_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r412_t1.left === "mul") r412_mul = _r412_t1.right;
                if (_r412_t1 && _r412_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r412_t1.left === "bp") r412_bp = _r412_t1.right;
                if (_r412_t1 && _r412_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r412_t1.left === "sw") r412_sw = _r412_t1.right;
                _r412_t4 = _r412_t4 + 1;
            }
            var r412_top = r1_fallback(r412_top, _r412_t0[0]);
            var r412_df = r1_fallback(r412_df, _r412_t0[1], r313_DivFrame(1));
            var r412_bot = r1_fallback(r412_bot, _r412_t0[2], 0);
            var r412_mul = r1_fallback(r412_mul, _r412_t0[3], r313_PShape.defaultMul);
            var r412_bp = r1_fallback(r412_bp, _r412_t0[4], r313_PShape.BarPos);
            var r412_sw = r1_fallback(r412_sw, _r412_t0[5], r412_df.mvs);
            return r313_VBar.l(r1_mix(0, r412_df.leftSB, r412_mul) + r313_HSwToV(r412_sw), Math.min(r313_PBarPosY(r412_top, r412_sw, r412_bp) - 0.5 * r412_sw - r313_TINY, r412_bot), Math.max(r313_PBarPosY(r412_top, r412_sw, r412_bp) + 0.5 * r412_sw + r313_TINY, r1_mix(r412_top, r313_PBarPosY(r412_top, r412_sw, r412_bp), 0.5)), r313_VSwToH(0.2 * (r412_df.rightSB - r412_df.leftSB)) * (r313_AdviceStroke(5) / r313_Stroke));
        };
        r313_RevPShape.OpenGap = function () {
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
                if (_r417_t1 && _r417_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r417_t1.left === "df") r417_df = _r417_t1.right;
                if (_r417_t1 && _r417_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r417_t1.left === "bot") r417_bot = _r417_t1.right;
                if (_r417_t1 && _r417_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r417_t1.left === "mul") r417_mul = _r417_t1.right;
                if (_r417_t1 && _r417_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r417_t1.left === "bp") r417_bp = _r417_t1.right;
                if (_r417_t1 && _r417_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r417_t1.left === "sw") r417_sw = _r417_t1.right;
                _r417_t4 = _r417_t4 + 1;
            }
            var r417_top = r1_fallback(r417_top, _r417_t0[0]);
            var r417_df = r1_fallback(r417_df, _r417_t0[1], r313_DivFrame(1));
            var r417_bot = r1_fallback(r417_bot, _r417_t0[2], 0);
            var r417_mul = r1_fallback(r417_mul, _r417_t0[3], r313_PShape.defaultMul);
            var r417_bp = r1_fallback(r417_bp, _r417_t0[4], r313_PShape.BarPos);
            var r417_sw = r1_fallback(r417_sw, _r417_t0[5], r417_df.mvs);
            return r313_VBar.r(r1_mix(r417_df.width, r417_df.rightSB, r417_mul) - r313_HSwToV(r417_sw), Math.min(r313_PBarPosY(r417_top, r417_sw, r417_bp) - 0.5 * r417_sw - r313_TINY, r417_bot), Math.max(r313_PBarPosY(r417_top, r417_sw, r417_bp) + 0.5 * r417_sw + r313_TINY, r1_mix(r417_top, r313_PBarPosY(r417_top, r417_sw, r417_bp), 0.5)), r313_VSwToH(0.2 * (r417_df.rightSB - r417_df.leftSB)) * (r313_AdviceStroke(5) / r313_Stroke));
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r423_t0, _r423_t1;
            return {
                "PConfig": r313_PConfig
            };
        });
        var r313_PConfig = r1_SuffixCfg.weave({
            "closed": false,
            "open": true
        }, {
            "serifless": null,
            "motionSerifed": r313_PShape.SlabMotion,
            "serifed": r313_PShape.SlabAsymmetric
        });
        var _r313_t11 = Object.entries(r313_PConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_fGap = _r313_t13[1][0];
            r313_slabs = _r313_t13[1][1];
            _r313_t13[1];
            (function () {
                var r426_fSlabBot = r313_slabs && r313_slabs !== r313_PShape.SlabMotion;
                var r426_swCap = r313_AdviceStroke2(2, 3, r313_CAP);
                var r426_swXH = r313_AdviceStroke2(2, 3, r313_XH);
                r313_xn$GlyphSaveSink$2Lrc4b.save("P." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r429_currentGlyph) {
                    var _r429_t0, _r429_t1;
                    r429_currentGlyph.include(r313_MarkSet.capital());
                    r429_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r1_mix(0, r313_SB, r313_PShape.defaultMul), r426_swCap));
                    r429_currentGlyph.include(r313_difference(r313_PShape(r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("sw", r426_swCap), new r313_xn$NamedParameterPair$2Lrc9b("slab", r313_slabs)), r313_fGap ? r313_PShape.OpenGap(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_CAP), new r313_xn$NamedParameterPair$2Lrc9b("bot", r426_fSlabBot ? r426_swCap : 0), new r313_xn$NamedParameterPair$2Lrc9b("sw", r426_swCap)) : r313_xn$noshape$3cah()));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("grek/Rho." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r440_currentGlyph) {
                    var _r440_t0, _r440_t1;
                    r440_currentGlyph.include(r313_xn$referglyph$1aao("P." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r440_currentGlyph.include(r313_SetGrekUpperTonos(r313_slabs ? -r313_SideJut : 0));
                    return void 0;
                }));
                if (r313_slabs !== r313_PShape.SlabMotion) r313_xn$GlyphSaveSink$2Lrc4b.save("PHookLeft." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r445_currentGlyph) {
                    var _r445_t0, _r445_t1;
                    r445_currentGlyph.include(r313_xn$referglyph$1aao("P." + r313_suffix), r313_AS_BASE);
                    r445_currentGlyph.ejectTagged("serifLT");
                    r445_currentGlyph.include(r313_LeftHook(r1_mix(0, r313_SB, r313_PShape.defaultMul), r313_CAP));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpP." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r451_currentGlyph) {
                    var _r451_t0, _r451_t1;
                    r451_currentGlyph.include(r313_MarkSet.e());
                    r451_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r1_mix(0, r313_SB, r313_PShape.defaultMul), r426_swXH));
                    r451_currentGlyph.include(r313_difference(r313_PShape(r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("sw", r426_swXH), new r313_xn$NamedParameterPair$2Lrc9b("slab", r313_slabs)), r313_fGap ? r313_PShape.OpenGap(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bot", r426_fSlabBot ? r426_swXH : 0), new r313_xn$NamedParameterPair$2Lrc9b("sw", r426_swXH)) : r313_xn$noshape$3cah()));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("PStrokeBottom." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r462_currentGlyph) {
                    var _r462_t0, _r462_t1;
                    r462_currentGlyph.include(r313_xn$referglyph$1aao("P." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r462_currentGlyph.include(r313_LetterBarOverlay.l.in(new r313_xn$NamedParameterPair$2Lrc9b("x", r1_mix(0, r313_SB, r313_PShape.defaultMul)), new r313_xn$NamedParameterPair$2Lrc9b("bot", r426_fSlabBot ? r426_swCap : 0), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_PBarPosY(r313_CAP, r426_swCap, r313_PShape.BarPos))));
                    return void 0;
                }));
                if (!r313_fGap) r313_xn$GlyphSaveSink$2Lrc4b.save("currency/rubleSign." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r470_currentGlyph) {
                    var _r470_t0, _r470_t1;
                    r470_currentGlyph.include(r313_xn$referglyph$1aao("P." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r470_xCrossBarLeft = r313_SB - r313_SideJut;
                    var r470_xPLeft = r1_mix(0, r313_SB, r313_PShape.defaultMul) + r313_HSwToV(0.5 * r426_swCap);
                    var r470_xCrossBarRight = r1_mix(r313_SB, r313_RightSB, 0.8);
                    var r470_yBase = r426_fSlabBot ? r426_swCap : 0;
                    var r470_yBarPos1 = r313_PBarPosY(r313_CAP, r426_swCap, r313_PShape.BarPos) + r426_swCap / 2;
                    var r470_yBarPos2 = Math.max(r1_mix(r470_yBase, r470_yBarPos1 - r426_swCap / 2, 1 / 2), r1_mix(r470_yBase, r470_yBarPos1 - r426_swCap / 2, 2 / 3) - r313_OverlayStroke / 2);
                    r470_currentGlyph.include(r313_HOverlayBar(r470_xCrossBarLeft, r470_xPLeft, r470_yBarPos1, r426_swCap));
                    r470_currentGlyph.include(r313_HOverlayBar(r470_xCrossBarLeft, r470_xCrossBarRight, r470_yBarPos2));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("currency/pesoSign." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r476_currentGlyph) {
                    var _r476_t0, _r476_t1;
                    r476_currentGlyph.include(r313_xn$referglyph$1aao("P." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r476_yBarPos1 = r313_PBarPosY(r313_CAP, r426_swCap, r313_PShape.BarPos);
                    var r476_sw = r313_AdviceStroke(7);
                    var r476_gap = r476_sw + Math.max(r476_sw, r313_CAP * 0.06);
                    r476_currentGlyph.include(r313_HOverlayBar(r1_mix(0, r313_SB, 0.5), r1_mix(r313_Width, r313_RightSB, 0.5) - r313_O, r1_mix(r476_yBarPos1, r313_CAP, 0.5) + 0.5 * r476_gap, r476_sw));
                    r476_currentGlyph.include(r313_HOverlayBar(r1_mix(0, r313_SB, 0.5), r1_mix(r313_Width, r313_RightSB, 0.5) - r313_O, r1_mix(r476_yBarPos1, r313_CAP, 0.5) - 0.5 * r476_gap, r476_sw));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("P", "P");
        r313_xn$linkreducedvariant$5sIl8("P/sansSerif", "P", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("grek/Rho", 929);
        r313_xn$linkreducedvariant$5sIl8("grek/Rho/sansSerif", "grek/Rho", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("smcpP", 7448, new r313_xn$NamedParameterPair$2Lrc9b("follow", "P"));
        r313_xn$selectvariant$7Hrq("grek/smcpRho", 7465, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpP"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "grek/Rho"));
        r313_xn$selectvariant$7Hrq("cyrl/Er", 1056, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "P"));
        r313_xn$selectvariant$7Hrq("PHookLeft", 420);
        r313_xn$selectvariant$7Hrq("currency/rubleSign", 8381);
        r313_xn$selectvariant$7Hrq("currency/pesoSign", 8369, new r313_xn$NamedParameterPair$2Lrc9b("follow", "P"));
        r313_xn$deriveglyphs$7Hrq("cyrl/ErTick", 1166, "cyrl/Er", function (r485_src, r485_gr) {
            var _r485_t0, _r485_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r487_currentGlyph) {
                var _r487_t0, _r487_t1;
                r487_currentGlyph.include(r313_xn$referglyph$1aao(r485_src), r313_AS_BASE, r313_ALSO_METRICS);
                var r487_swCap = r313_AdviceStroke2(2, 3, r313_CAP);
                var r487_yBowl = r313_PBarPosY(r313_CAP, r487_swCap, r313_PShape.BarPos) + 0.75 * r487_swCap;
                r487_currentGlyph.include(r313_dispiro(r313_widths.center(r313_AdviceStroke(4)), r313_flat(r1_mix(r313_SB, r313_RightSB, 0.5), r487_yBowl + r313_XH * 0.25), r313_curl(r1_mix(r313_SB, r313_RightSB, 0.875), r487_yBowl - r313_XH * 0.25)));
                return void 0;
            });
        });
        r313_xn$GlyphSaveSink$2Lrc4b.save("PStroke/overlay", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r492_currentGlyph) {
            var _r492_t0, _r492_t1;
            var r492_swCap = r313_AdviceStroke2(2, 3, r313_CAP);
            r492_currentGlyph.include(r313_LetterBarOverlay.l.in(new r313_xn$NamedParameterPair$2Lrc9b("x", r1_mix(0, r313_SB, r313_PShape.defaultMul)), new r313_xn$NamedParameterPair$2Lrc9b("bot", r313_PBarPosY(r313_CAP, r492_swCap, r313_PShape.BarPos) + r492_swCap), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_CAP - r492_swCap), new r313_xn$NamedParameterPair$2Lrc9b("space", [0, r313_RightSB - r313_HSwToV(r492_swCap)])));
            return void 0;
        }));
        r313_xn$derivecomposites$7Hrq("PStroke", 11363, "P", "PStroke/overlay");
        r313_xn$selectvariant$7Hrq("PStrokeBottom", 42832, new r313_xn$NamedParameterPair$2Lrc9b("follow", "P"));
        var _r313_t14 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t14.BBS;
        var r313_BBD = _r313_t14.BBD;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r501_t0, _r501_t1;
            return {
                "BBPShape": r313_BBPShape
            };
        });
        var r313_BBPShape = function () {
            var _r502_t5;
            var _r502_t6 = arguments;
            var r502_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r502_t6, 0);
            var _r502_t0 = [];
            var _r502_t1 = 0;
            while (_r502_t1 < r502_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r502_xn$flexarguments$2Lrc7uIe5[_r502_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r502_t0.push(r502_xn$flexarguments$2Lrc7uIe5[_r502_t1]);
                _r502_t1 = _r502_t1 + 1;
            }
            var _r502_t2 = r502_xn$flexarguments$2Lrc7uIe5;
            var _r502_t3 = _r502_t2.length;
            var _r502_t4 = 0;
            while (_r502_t4 < _r502_t3) {
                _r502_t1 = _r502_t2[_r502_t4];
                if (_r502_t1 && _r502_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r502_t1.left === "mul") r502_mul = _r502_t1.right;
                if (_r502_t1 && _r502_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r502_t1.left === "overshoot") r502_overshoot = _r502_t1.right;
                _r502_t4 = _r502_t4 + 1;
            }
            var r502_mul = r1_fallback(r502_mul, _r502_t0[0], r313_PShape.defaultMul);
            var r502_overshoot = r1_fallback(r502_overshoot, _r502_t0[1], r313_PShape.defaultOvershoot);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r508_currentGlyph) {
                var _r508_t0, _r508_t1;
                var r508_sb = r1_mix(0, r313_SB, r502_mul);
                r508_currentGlyph.include(r313_difference(r313_PShape(r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_BBS), new r313_xn$NamedParameterPair$2Lrc9b("mul", r502_mul), new r313_xn$NamedParameterPair$2Lrc9b("overshoot", r502_overshoot), new r313_xn$NamedParameterPair$2Lrc9b("slab", null)), r313_Rect(r313_CAP - r313_BBS, 0, r508_sb + r313_HSwToV(0.5 * r313_BBS), r508_sb + r313_BBD)));
                r508_currentGlyph.include(r313_VBar.l(r508_sb, 0, r313_CAP, r313_BBS));
                r508_currentGlyph.include(r313_VBar.l(r508_sb + r313_BBD, 0, r313_CAP, r313_BBS));
                r508_currentGlyph.include(r313_HBar.b(r508_sb, r508_sb + r313_BBD, 0, r313_BBS));
                r508_currentGlyph.include(r313_intersection(r313_PShapeOutline(r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_BBS), new r313_xn$NamedParameterPair$2Lrc9b("mul", r502_mul), new r313_xn$NamedParameterPair$2Lrc9b("overshoot", r502_overshoot), new r313_xn$NamedParameterPair$2Lrc9b("offset", 1)), r313_VBar.r(r313_RightSB - r502_overshoot - r313_BBD, 0, r313_CAP, r313_BBS)));
                return void 0;
            });
        };
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/P", 8473, new r313_xn$Capture$2Lrc8.GlyphProc(function (r524_currentGlyph) {
            var _r524_t0, _r524_t1;
            r524_currentGlyph.include(r313_MarkSet.capital(), true, true);
            r524_currentGlyph.include(r313_BBPShape());
            return void 0;
        }));
    });
    return void 0;
});


