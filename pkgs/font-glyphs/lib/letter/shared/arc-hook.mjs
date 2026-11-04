"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
import * as _s0_t2 from "@iosevka/geometry/box";
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
var r1_DependentSelector = _r1_t9.DependentSelector;
var _r1_t10 = _s0_t2;
var r1_Box = _r1_t10.Box;
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
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Letter-Arc-Hook", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var r314_Flat, _r314_t8, _r314_t9;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_DesignParameters = _r314_t1.DesignParameters;
        var r314_TanSlope = _r314_t1.TanSlope;
        var r314_HSwToV = _r314_t1.HSwToV;
        var r314_Upward = _r314_t1.Upward;
        var r314_Rightward = _r314_t1.Rightward;
        var r314_Leftward = _r314_t1.Leftward;
        var r314_Hook = _r314_t1.Hook;
        var r314_Stroke = _r314_t1.Stroke;
        var r314_VJutStroke = _r314_t1.VJutStroke;
        var r314_DToothlessRise = _r314_t1.DToothlessRise;
        var r314_ShoulderFine = _r314_t1.ShoulderFine;
        var r314_SmallArchDepthA = _r314_t1.SmallArchDepthA;
        var r314_SmallArchDepthB = _r314_t1.SmallArchDepthB;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_g4 = _r314_t2.g4;
        var r314_g2 = _r314_t2.g2;
        var r314_corner = _r314_t2.corner;
        var r314_flat = _r314_t2.flat;
        var r314_curl = _r314_t2.curl;
        var r314_end = _r314_t2.end;
        var r314_widths = _r314_t2.widths;
        var r314_heading = _r314_t2.heading;
        var r314_archv = _r314_t2.archv;
        var r314_arcvh = _r314_t2.arcvh;
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r314_tagged = _r314_t5.tagged;
        var r314_VBar = _r314_t5.VBar;
        var r314_HookStart = _r314_t5.HookStart;
        var r314_HookEnd = _r314_t5.HookEnd;
        var r314_Arch = _r314_t5.Arch;
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r314_t7 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r314_FlatHookDepth = _r314_t7.FlatHookDepth;
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r319_t0, _r319_t1;
            return {
                "Toothed": r314_Toothed,
                "Toothless": r314_Toothless,
                "Rounded": r314_Rounded,
                "Flat": r314_Flat
            };
        });
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "ArcStartSerifWidth": r314_ArcStartSerifWidth
            };
        });
        var r314_ArcStartSerifWidth = function (r322_sw) {
            var _r322_t0, _r322_t1;
            return r1_clamp(r322_sw * 0.875, r322_sw, r314_VJutStroke);
        };
        var r314_ArcStartInwardSerifDepth = function (r323_hook, r323_sw) {
            var _r323_t0, _r323_t1;
            return Math.max(r323_hook, r314_DToothlessRise + r323_sw);
        };
        var r314_Toothed = function () {
            var _r325_t5, _r325_t7, _r325_tag8;
            var _r325_t6 = arguments;
            var r325_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r325_t6, 0);
            var _r325_t0 = [];
            var _r325_t1 = 0;
            while (_r325_t1 < r325_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r325_xn$flexarguments$2Lrc7uIe5[_r325_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r325_t0.push(r325_xn$flexarguments$2Lrc7uIe5[_r325_t1]);
                _r325_t1 = _r325_t1 + 1;
            }
            var _r325_t2 = r325_xn$flexarguments$2Lrc7uIe5;
            var _r325_t3 = _r325_t2.length;
            var _r325_t4 = 0;
            while (_r325_t4 < _r325_t3) {
                _r325_t1 = _r325_t2[_r325_t4];
                if (_r325_t1 && _r325_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r325_t1.left === "box") r325_box = _r325_t1.right;
                if (_r325_t1 && _r325_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r325_t1.left === "ada") r325_ada = _r325_t1.right;
                if (_r325_t1 && _r325_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r325_t1.left === "adb") r325_adb = _r325_t1.right;
                if (_r325_t1 && _r325_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r325_t1.left === "sw") r325_sw = _r325_t1.right;
                if (_r325_t1 && _r325_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r325_t1.left === "fine") r325_fine = _r325_t1.right;
                if (_r325_t1 && _r325_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r325_t1.left === "barSw") r325_barSw = _r325_t1.right;
                if (_r325_t1 && _r325_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r325_t1.left === "hook") r325_hook = _r325_t1.right;
                _r325_t4 = _r325_t4 + 1;
            }
            var r325_box = r1_fallback(r325_box, _r325_t0[0]);
            var r325_ada = r1_fallback(r325_ada, _r325_t0[1], r314_SmallArchDepthA);
            var r325_adb = r1_fallback(r325_adb, _r325_t0[2], r314_SmallArchDepthB);
            var r325_sw = r1_fallback(r325_sw, _r325_t0[3], r314_Stroke);
            var r325_fine = r1_fallback(r325_fine, _r325_t0[4], r314_ShoulderFine);
            var r325_barSw = r1_fallback(r325_barSw, _r325_t0[5], r314_ArcStartSerifWidth(r325_sw));
            var r325_hook = r1_fallback(r325_hook, _r325_t0[6], r314_Hook);
            return (function () {
                var r331_yLT, r331_yRT, r331_yLB, r331_yRB, r331_xLArc, r331_xRArc, r331_xLHook, r331_xRHook, r331_arcStartL, r331_arcStartR, r331_arcEndL, r331_arcEndR, r331_hookStartL, r331_hookStartR, r331_hookEndL, r331_hookEndR, r331_serifStartL, r331_serifStartR, r331_serifEndL, r331_serifEndR;
                var r331_exports = {};
                r331_exports.yLT = r331_yLT = r325_box.t;
                r331_exports.yRT = r331_yRT = r325_box.t;
                r331_exports.yLB = r331_yLB = r325_box.b;
                r331_exports.yRB = r331_yRB = r325_box.b;
                r331_exports.xLArc = r331_xLArc = r325_box.l + r314_HSwToV(r325_sw - r325_fine);
                r331_exports.xRArc = r331_xRArc = r325_box.r - r314_HSwToV(r325_sw - r325_fine);
                r331_exports.xLHook = r331_xLHook = r325_box.l + r314_HSwToV(r325_barSw - r325_fine);
                r331_exports.xRHook = r331_xRHook = r325_box.r - r314_HSwToV(r325_barSw - r325_fine);
                r331_exports.arcStartL = r331_arcStartL = function () {
                    var _r347_t0, _r347_t1;
                    return [r314_g4.up.start(r331_xLArc, r325_box.t - r325_ada, r314_widths.rhs.heading(r325_fine, r314_Upward)), r314_Arch.rhs(r325_box.t, new r314_xn$NamedParameterPair$2Lrc9b("sw", r325_sw), new r314_xn$NamedParameterPair$2Lrc9b("swBefore", r325_fine))];
                };
                r331_exports.arcStartR = r331_arcStartR = function () {
                    var _r351_t0, _r351_t1;
                    return [r314_g4.up.start(r331_xRArc, r325_box.t - r325_adb, r314_widths.lhs.heading(r325_fine, r314_Upward)), r314_Arch.lhs(r325_box.t, new r314_xn$NamedParameterPair$2Lrc9b("sw", r325_sw), new r314_xn$NamedParameterPair$2Lrc9b("swBefore", r325_fine))];
                };
                r331_exports.arcEndL = r331_arcEndL = function () {
                    var _r355_t0, _r355_t1;
                    return [r314_Arch.rhs(r325_box.b, new r314_xn$NamedParameterPair$2Lrc9b("sw", r325_sw), new r314_xn$NamedParameterPair$2Lrc9b("swAfter", r325_fine)), r314_g4.up.end(r331_xLArc, r325_box.b + r325_adb, r314_widths.rhs.heading(r325_fine, r314_Upward))];
                };
                r331_exports.arcEndR = r331_arcEndR = function () {
                    var _r359_t0, _r359_t1;
                    return [r314_Arch.lhs(r325_box.b, new r314_xn$NamedParameterPair$2Lrc9b("sw", r325_sw), new r314_xn$NamedParameterPair$2Lrc9b("swAfter", r325_fine)), r314_g4.up.end(r331_xRArc, r325_box.b + r325_ada, r314_widths.lhs.heading(r325_fine, r314_Upward))];
                };
                r331_exports.hookStartL = r331_hookStartL = function () {
                    var _r363_t0, _r363_t1;
                    return [r314_g4.up.start(r331_xLHook, r325_box.t - r325_hook, r314_widths.rhs.heading(r325_fine, r314_Upward)), r314_Arch.rhs(r325_box.t, new r314_xn$NamedParameterPair$2Lrc9b("sw", r325_sw), new r314_xn$NamedParameterPair$2Lrc9b("swBefore", r325_fine))];
                };
                r331_exports.hookStartR = r331_hookStartR = function () {
                    var _r367_t0, _r367_t1;
                    return [r314_g4.up.start(r331_xRHook, r325_box.t - r325_hook, r314_widths.lhs.heading(r325_fine, r314_Upward)), r314_Arch.lhs(r325_box.t, new r314_xn$NamedParameterPair$2Lrc9b("sw", r325_sw), new r314_xn$NamedParameterPair$2Lrc9b("swBefore", r325_fine))];
                };
                r331_exports.hookEndL = r331_hookEndL = function () {
                    var _r371_t0, _r371_t1;
                    return [r314_Arch.rhs(r325_box.b, new r314_xn$NamedParameterPair$2Lrc9b("sw", r325_sw), new r314_xn$NamedParameterPair$2Lrc9b("swAfter", r325_fine)), r314_g4.up.end(r331_xLHook, r325_box.b + r325_hook, r314_widths.rhs.heading(r325_fine, r314_Upward))];
                };
                r331_exports.hookEndR = r331_hookEndR = function () {
                    var _r375_t0, _r375_t1;
                    return [r314_Arch.lhs(r325_box.b, new r314_xn$NamedParameterPair$2Lrc9b("sw", r325_sw), new r314_xn$NamedParameterPair$2Lrc9b("swAfter", r325_fine)), r314_g4.up.end(r331_xRHook, r325_box.b + r325_hook, r314_widths.lhs.heading(r325_fine, r314_Upward))];
                };
                r331_exports.serifStartL = r331_serifStartL = function () {
                    var _r379_t0, _r379_t1;
                    return r314_tagged("arcStartSerifL", r314_VBar.l(r325_box.l, r325_box.t - r325_hook, r325_box.t, r325_barSw));
                };
                r331_exports.serifStartR = r331_serifStartR = function () {
                    var _r381_t0, _r381_t1;
                    return r314_tagged("arcStartSerifR", r314_VBar.r(r325_box.r, r325_box.t - r325_hook, r325_box.t, r325_barSw));
                };
                r331_exports.serifEndL = r331_serifEndL = function () {
                    var _r383_t0, _r383_t1;
                    return r314_tagged("arcEndSerifL", r314_VBar.l(r325_box.l, r325_box.b + r325_hook, r325_box.b, r325_barSw));
                };
                r331_exports.serifEndR = r331_serifEndR = function () {
                    var _r385_t0, _r385_t1;
                    return r314_tagged("arcEndSerifR", r314_VBar.r(r325_box.r, r325_box.b + r325_hook, r325_box.b, r325_barSw));
                };
                return r331_exports;
            })();
        };
        var r314_Toothless = function () {
            var _r387_t5, _r387_t7, _r387_tag8;
            var _r387_t6 = arguments;
            var r387_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r387_t6, 0);
            var _r387_t0 = [];
            var _r387_t1 = 0;
            while (_r387_t1 < r387_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r387_xn$flexarguments$2Lrc7uIe5[_r387_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r387_t0.push(r387_xn$flexarguments$2Lrc7uIe5[_r387_t1]);
                _r387_t1 = _r387_t1 + 1;
            }
            var _r387_t2 = r387_xn$flexarguments$2Lrc7uIe5;
            var _r387_t3 = _r387_t2.length;
            var _r387_t4 = 0;
            while (_r387_t4 < _r387_t3) {
                _r387_t1 = _r387_t2[_r387_t4];
                if (_r387_t1 && _r387_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r387_t1.left === "box") r387_box = _r387_t1.right;
                if (_r387_t1 && _r387_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r387_t1.left === "ada") r387_ada = _r387_t1.right;
                if (_r387_t1 && _r387_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r387_t1.left === "adb") r387_adb = _r387_t1.right;
                if (_r387_t1 && _r387_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r387_t1.left === "sw") r387_sw = _r387_t1.right;
                if (_r387_t1 && _r387_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r387_t1.left === "rise") r387_rise = _r387_t1.right;
                if (_r387_t1 && _r387_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r387_t1.left === "barSw") r387_barSw = _r387_t1.right;
                if (_r387_t1 && _r387_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r387_t1.left === "hook") r387_hook = _r387_t1.right;
                _r387_t4 = _r387_t4 + 1;
            }
            var r387_box = r1_fallback(r387_box, _r387_t0[0]);
            var r387_ada = r1_fallback(r387_ada, _r387_t0[1], r314_SmallArchDepthA);
            var r387_adb = r1_fallback(r387_adb, _r387_t0[2], r314_SmallArchDepthB);
            var r387_sw = r1_fallback(r387_sw, _r387_t0[3], r314_Stroke);
            var r387_rise = r1_fallback(r387_rise, _r387_t0[4], r314_DToothlessRise);
            var r387_barSw = r1_fallback(r387_barSw, _r387_t0[5], r314_ArcStartSerifWidth(r387_sw));
            var r387_hook = r1_fallback(r387_hook, _r387_t0[6], r314_Hook);
            return (function () {
                var r393_yLT, r393_yRT, r393_yLB, r393_yRB, r393_xLArc, r393_xRArc, r393_xLHook, r393_xRHook, r393_arcStartL, r393_arcStartR, r393_arcEndL, r393_arcEndR, r393_hookStartL, r393_hookStartR, r393_hookEndL, r393_hookEndR, r393_serifStartL, r393_serifStartR, r393_serifEndL, r393_serifEndR;
                var r393_exports = {};
                var r393_serifDepth = Math.max(r387_hook, r387_rise + r387_sw);
                r393_exports.yLT = r393_yLT = r387_box.t - r387_rise;
                r393_exports.yRT = r393_yRT = r387_box.t - r387_rise;
                r393_exports.yLB = r393_yLB = r387_box.b + r387_rise;
                r393_exports.yRB = r393_yRB = r387_box.b + r387_rise;
                r393_exports.xLArc = r393_xLArc = r387_box.l;
                r393_exports.xRArc = r393_xRArc = r387_box.r;
                r393_exports.xLHook = r393_xLHook = r387_box.l;
                r393_exports.xRHook = r393_xRHook = r387_box.r;
                r393_exports.arcStartL = r393_arcStartL = function () {
                    var _r409_t0, _r409_t1;
                    return [r314_g4(r393_xLArc, r387_box.t - r387_rise, r314_widths.rhs(r387_sw)), r314_Arch.rhs(r387_box.t, new r314_xn$NamedParameterPair$2Lrc9b("sw", r387_sw), new r314_xn$NamedParameterPair$2Lrc9b("blendPre", []))];
                };
                r393_exports.arcStartR = r393_arcStartR = function () {
                    var _r413_t0, _r413_t1;
                    return [r314_g4(r393_xRArc, r387_box.t - r387_rise, r314_widths.lhs(r387_sw)), r314_Arch.lhs(r387_box.t, new r314_xn$NamedParameterPair$2Lrc9b("sw", r387_sw), new r314_xn$NamedParameterPair$2Lrc9b("blendPre", []))];
                };
                r393_exports.arcEndL = r393_arcEndL = function () {
                    var _r417_t0, _r417_t1;
                    return [r314_Arch.rhs(r387_box.b, new r314_xn$NamedParameterPair$2Lrc9b("sw", r387_sw), new r314_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r314_g4(r393_xLArc, r387_box.b + r387_rise)];
                };
                r393_exports.arcEndR = r393_arcEndR = function () {
                    var _r421_t0, _r421_t1;
                    return [r314_Arch.lhs(r387_box.b, new r314_xn$NamedParameterPair$2Lrc9b("sw", r387_sw), new r314_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r314_g4(r393_xRArc, r387_box.b + r387_rise)];
                };
                r393_exports.hookStartL = r393_hookStartL = function () {
                    var _r425_t0, _r425_t1;
                    return [r314_g2(r393_xLHook, r387_box.t - r387_rise, r314_widths.rhs(r387_sw)), r314_Arch.rhs(r387_box.t, new r314_xn$NamedParameterPair$2Lrc9b("sw", r387_sw), new r314_xn$NamedParameterPair$2Lrc9b("blendPre", []))];
                };
                r393_exports.hookStartR = r393_hookStartR = function () {
                    var _r429_t0, _r429_t1;
                    return [r314_g2(r393_xRHook, r387_box.t - r387_rise, r314_widths.lhs(r387_sw)), r314_Arch.lhs(r387_box.t, new r314_xn$NamedParameterPair$2Lrc9b("sw", r387_sw), new r314_xn$NamedParameterPair$2Lrc9b("blendPre", []))];
                };
                r393_exports.hookEndL = r393_hookEndL = function () {
                    var _r433_t0, _r433_t1;
                    return [r314_Arch.rhs(r387_box.b, new r314_xn$NamedParameterPair$2Lrc9b("sw", r387_sw), new r314_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r314_g4(r393_xLHook, r387_box.b + r387_rise)];
                };
                r393_exports.hookEndR = r393_hookEndR = function () {
                    var _r437_t0, _r437_t1;
                    return [r314_Arch.lhs(r387_box.b, new r314_xn$NamedParameterPair$2Lrc9b("sw", r387_sw), new r314_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r314_g4(r393_xRHook, r387_box.b + r387_rise)];
                };
                r393_exports.serifStartL = r393_serifStartL = function () {
                    var _r441_t0, _r441_t1;
                    return r314_tagged("arcStartSerifL", r314_VBar.l(r387_box.l, r387_box.t - r393_serifDepth, r387_box.t - r387_rise, r387_barSw));
                };
                r393_exports.serifStartR = r393_serifStartR = function () {
                    var _r443_t0, _r443_t1;
                    return r314_tagged("arcStartSerifR", r314_VBar.r(r387_box.r, r387_box.t - r393_serifDepth, r387_box.t - r387_rise, r387_barSw));
                };
                r393_exports.serifEndL = r393_serifEndL = function () {
                    var _r445_t0, _r445_t1;
                    return r314_tagged("arcEndSerifL", r314_VBar.l(r387_box.l, r387_box.b + r393_serifDepth, r387_box.b + r387_rise, r387_barSw));
                };
                r393_exports.serifEndR = r393_serifEndR = function () {
                    var _r447_t0, _r447_t1;
                    return r314_tagged("arcEndSerifR", r314_VBar.r(r387_box.r, r387_box.b + r393_serifDepth, r387_box.b + r387_rise, r387_barSw));
                };
                return r393_exports;
            })();
        };
        var r314_Rounded = function () {
            var _r449_t5, _r449_t7, _r449_tag8;
            var _r449_t6 = arguments;
            var r449_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r449_t6, 0);
            var _r449_t0 = [];
            var _r449_t1 = 0;
            while (_r449_t1 < r449_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r449_xn$flexarguments$2Lrc7uIe5[_r449_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r449_t0.push(r449_xn$flexarguments$2Lrc7uIe5[_r449_t1]);
                _r449_t1 = _r449_t1 + 1;
            }
            var _r449_t2 = r449_xn$flexarguments$2Lrc7uIe5;
            var _r449_t3 = _r449_t2.length;
            var _r449_t4 = 0;
            while (_r449_t4 < _r449_t3) {
                _r449_t1 = _r449_t2[_r449_t4];
                if (_r449_t1 && _r449_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r449_t1.left === "box") r449_box = _r449_t1.right;
                if (_r449_t1 && _r449_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r449_t1.left === "ada") r449_ada = _r449_t1.right;
                if (_r449_t1 && _r449_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r449_t1.left === "adb") r449_adb = _r449_t1.right;
                if (_r449_t1 && _r449_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r449_t1.left === "sw") r449_sw = _r449_t1.right;
                if (_r449_t1 && _r449_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r449_t1.left === "barSw") r449_barSw = _r449_t1.right;
                if (_r449_t1 && _r449_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r449_t1.left === "hook") r449_hook = _r449_t1.right;
                _r449_t4 = _r449_t4 + 1;
            }
            var r449_box = r1_fallback(r449_box, _r449_t0[0]);
            var r449_ada = r1_fallback(r449_ada, _r449_t0[1], r314_SmallArchDepthA);
            var r449_adb = r1_fallback(r449_adb, _r449_t0[2], r314_SmallArchDepthB);
            var r449_sw = r1_fallback(r449_sw, _r449_t0[3], r314_Stroke);
            var r449_barSw = r1_fallback(r449_barSw, _r449_t0[4], r314_ArcStartSerifWidth(r449_sw));
            var r449_hook = r1_fallback(r449_hook, _r449_t0[5], r314_Hook);
            return (function () {
                var r455_yLT, r455_yRT, r455_yLB, r455_yRB, r455_xLArc, r455_xRArc, r455_xLHook, r455_xRHook, r455_arcStartL, r455_arcStartR, r455_arcEndL, r455_arcEndR, r455_hookStartL, r455_hookStartR, r455_hookEndL, r455_hookEndR, r455_serifStartL, r455_serifStartR, r455_serifEndL, r455_serifEndR;
                var r455_exports = {};
                r455_exports.yLT = r455_yLT = r449_box.t - r449_ada;
                r455_exports.yRT = r455_yRT = r449_box.t - r449_adb;
                r455_exports.yLB = r455_yLB = r449_box.b + r449_adb;
                r455_exports.yRB = r455_yRB = r449_box.b + r449_ada;
                r455_exports.xLArc = r455_xLArc = r449_box.l;
                r455_exports.xRArc = r455_xRArc = r449_box.r;
                r455_exports.xLHook = r455_xLHook = r449_box.l;
                r455_exports.xRHook = r455_xRHook = r449_box.r;
                r455_exports.arcStartL = r455_arcStartL = function () {
                    var _r471_t0, _r471_t1;
                    return [r314_g4.up.start(r449_box.l, r449_box.t - r449_ada, r314_widths.rhs.heading(r449_sw, r314_Upward)), r314_Arch.rhs(r449_box.t, new r314_xn$NamedParameterPair$2Lrc9b("sw", r449_sw))];
                };
                r455_exports.arcStartR = r455_arcStartR = function () {
                    var _r474_t0, _r474_t1;
                    return [r314_g4.up.start(r449_box.r, r449_box.t - r449_adb, r314_widths.lhs.heading(r449_sw, r314_Upward)), r314_Arch.lhs(r449_box.t, new r314_xn$NamedParameterPair$2Lrc9b("sw", r449_sw))];
                };
                r455_exports.arcEndL = r455_arcEndL = function () {
                    var _r477_t0, _r477_t1;
                    return [r314_Arch.rhs(r449_box.b, new r314_xn$NamedParameterPair$2Lrc9b("sw", r449_sw)), r314_g4.up.end(r449_box.l, r449_box.b + r449_adb, r314_heading(r314_Upward))];
                };
                r455_exports.arcEndR = r455_arcEndR = function () {
                    var _r480_t0, _r480_t1;
                    return [r314_Arch.lhs(r449_box.b, new r314_xn$NamedParameterPair$2Lrc9b("sw", r449_sw), new r314_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r314_g4.up.end(r449_box.r, r449_box.b + r449_ada, r314_heading(r314_Upward))];
                };
                r455_exports.hookStartL = r455_hookStartL = function () {
                    var _r484_t0, _r484_t1;
                    return [r314_g4(r449_box.l, r449_box.t - r449_hook, r314_widths.rhs.heading(r449_sw, r314_Upward)), r314_HookStart(r449_box.t, new r314_xn$NamedParameterPair$2Lrc9b("sw", r449_sw))];
                };
                r455_exports.hookStartR = r455_hookStartR = function () {
                    var _r487_t0, _r487_t1;
                    return [r314_g4(r449_box.r, r449_box.t - r449_hook, r314_widths.lhs.heading(r449_sw, r314_Upward)), r314_HookStart(r449_box.t, new r314_xn$NamedParameterPair$2Lrc9b("sw", r449_sw))];
                };
                r455_exports.hookEndL = r455_hookEndL = function () {
                    var _r490_t0, _r490_t1;
                    return [r314_HookEnd(r449_box.b, new r314_xn$NamedParameterPair$2Lrc9b("sw", r449_sw)), r314_g4(r449_box.l, r449_box.b + r449_hook, r314_heading(r314_Upward))];
                };
                r455_exports.hookEndR = r455_hookEndR = function () {
                    var _r493_t0, _r493_t1;
                    return [r314_HookEnd(r449_box.b, new r314_xn$NamedParameterPair$2Lrc9b("sw", r449_sw)), r314_g4(r449_box.r, r449_box.b + r449_hook)];
                };
                r455_exports.serifStartL = r455_serifStartL = function () {
                    var _r496_t0, _r496_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r498_currentGlyph) {
                        var _r498_t0, _r498_t1;
                        return void 0;
                    });
                };
                r455_exports.serifStartR = r455_serifStartR = function () {
                    var _r500_t0, _r500_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r502_currentGlyph) {
                        var _r502_t0, _r502_t1;
                        return void 0;
                    });
                };
                r455_exports.serifEndL = r455_serifEndL = function () {
                    var _r504_t0, _r504_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r506_currentGlyph) {
                        var _r506_t0, _r506_t1;
                        return void 0;
                    });
                };
                r455_exports.serifEndR = r455_serifEndR = function () {
                    var _r508_t0, _r508_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r510_currentGlyph) {
                        var _r510_t0, _r510_t1;
                        return void 0;
                    });
                };
                return r455_exports;
            })();
        };
        return r314_Flat = function () {
            var _r512_t5, _r512_t7, _r512_tag8;
            var _r512_t6 = arguments;
            var r512_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r512_t6, 0);
            var _r512_t0 = [];
            var _r512_t1 = 0;
            while (_r512_t1 < r512_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r512_xn$flexarguments$2Lrc7uIe5[_r512_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r512_t0.push(r512_xn$flexarguments$2Lrc7uIe5[_r512_t1]);
                _r512_t1 = _r512_t1 + 1;
            }
            var _r512_t2 = r512_xn$flexarguments$2Lrc7uIe5;
            var _r512_t3 = _r512_t2.length;
            var _r512_t4 = 0;
            while (_r512_t4 < _r512_t3) {
                _r512_t1 = _r512_t2[_r512_t4];
                if (_r512_t1 && _r512_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r512_t1.left === "box") r512_box = _r512_t1.right;
                if (_r512_t1 && _r512_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r512_t1.left === "ada") r512_ada = _r512_t1.right;
                if (_r512_t1 && _r512_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r512_t1.left === "adb") r512_adb = _r512_t1.right;
                if (_r512_t1 && _r512_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r512_t1.left === "sw") r512_sw = _r512_t1.right;
                if (_r512_t1 && _r512_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r512_t1.left === "slab") r512_slab = _r512_t1.right;
                if (_r512_t1 && _r512_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r512_t1.left === "barSw") r512_barSw = _r512_t1.right;
                if (_r512_t1 && _r512_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r512_t1.left === "hook") r512_hook = _r512_t1.right;
                if (_r512_t1 && _r512_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r512_t1.left === "midShift") r512_midShift = _r512_t1.right;
                if (_r512_t1 && _r512_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r512_t1.left === "xShrink") r512_xShrink = _r512_t1.right;
                _r512_t4 = _r512_t4 + 1;
            }
            var r512_box = r1_fallback(r512_box, _r512_t0[0]);
            var r512_ada = r1_fallback(r512_ada, _r512_t0[1], r314_SmallArchDepthA);
            var r512_adb = r1_fallback(r512_adb, _r512_t0[2], r314_SmallArchDepthB);
            var r512_sw = r1_fallback(r512_sw, _r512_t0[3], r314_Stroke);
            var r512_slab = r1_fallback(r512_slab, _r512_t0[4], 0);
            var r512_barSw = r1_fallback(r512_barSw, _r512_t0[5], r314_ArcStartSerifWidth(r512_sw));
            var r512_hook = r1_fallback(r512_hook, _r512_t0[6], r314_Hook);
            var r512_midShift = r1_fallback(r512_midShift, _r512_t0[7], (r512_box.r - r512_box.l) * -0.05);
            var r512_xShrink = r1_fallback(r512_xShrink, _r512_t0[8], r314_HSwToV(0.25 * r512_barSw));
            return (function () {
                var r518_yLT, r518_yRT, r518_yLB, r518_yRB, r518_xLArc, r518_xRArc, r518_xLHook, r518_xRHook, r518_arcStartL, r518_arcStartR, r518_arcEndL, r518_arcEndR, r518_hookStartL, r518_hookStartR, r518_hookEndL, r518_hookEndR, r518_serifStartL, r518_serifStartR, r518_serifEndL, r518_serifEndR;
                var r518_exports = {};
                var r518_serifShrink = Math.max(0, r512_xShrink - r314_HSwToV(0.5 * r512_barSw));
                var r518_midX = r1_mix(r512_box.l, r512_box.r, 0.5);
                r518_exports.yLT = r518_yLT = r512_box.t;
                r518_exports.yRT = r518_yRT = r512_box.t;
                r518_exports.yLB = r518_yLB = r512_box.b;
                r518_exports.yRB = r518_yRB = r512_box.b;
                r518_exports.xLArc = r518_xLArc = r512_box.l;
                r518_exports.xRArc = r518_xRArc = r512_box.r;
                r518_exports.xLHook = r518_xLHook = r512_box.l + r512_xShrink;
                r518_exports.xRHook = r518_xRHook = r512_box.r - r512_xShrink;
                r518_exports.arcStartL = r518_arcStartL = function () {
                    var _r534_t0, _r534_t1;
                    return [r314_corner(r518_xLArc, r512_box.t, r314_widths.rhs.heading(r512_sw, r314_Rightward)), r314_curl(Math.max(r518_xLArc + r314_TanSlope * r512_sw, r314_Arch["adjust-x"].top(r518_midX + r512_midShift, r512_sw)), r512_box.t, r314_heading(r314_Rightward)), r314_archv()];
                };
                r518_exports.arcStartR = r518_arcStartR = function () {
                    var _r536_t0, _r536_t1;
                    return [r314_corner(r518_xRArc, r512_box.t, r314_widths.lhs.heading(r512_sw, r314_Leftward)), r314_curl(Math.min(r518_xRArc - r314_TanSlope * r512_sw, r314_Arch["adjust-x"].top(r518_midX - r512_midShift, r512_sw)), r512_box.t, r314_heading(r314_Leftward)), r314_archv()];
                };
                r518_exports.arcEndL = r518_arcEndL = function () {
                    var _r538_t0, _r538_t1;
                    return [r314_arcvh(), r314_flat(Math.max(r518_xLArc + r314_TanSlope * r512_sw, r314_Arch["adjust-x"].bot(r518_midX + r512_midShift, r512_sw)), r512_box.b, r314_widths.rhs.heading(r512_sw, r314_Leftward)), r314_corner(r518_xLArc, r512_box.b, r314_heading(r314_Leftward))];
                };
                r518_exports.arcEndR = r518_arcEndR = function () {
                    var _r540_t0, _r540_t1;
                    return [r314_arcvh(), r314_flat(Math.min(r518_xRArc - r314_TanSlope * r512_sw, r314_Arch["adjust-x"].bot(r518_midX - r512_midShift, r512_sw)), r512_box.b, r314_widths.lhs.heading(r512_sw, r314_Rightward)), r314_corner(r518_xRArc, r512_box.b, r314_heading(r314_Rightward))];
                };
                r518_exports.hookStartL = r518_hookStartL = function () {
                    var _r542_t0, _r542_t1;
                    return [r314_corner(r518_xLHook, r512_box.t, r314_widths.rhs(r512_sw)), r314_curl(Math.max(r518_xLHook + r314_TanSlope * r512_sw, r314_Arch["adjust-x"].top(r518_midX + r512_midShift, r512_sw)), r512_box.t, r314_heading(r314_Rightward)), r314_archv.superness(r314_DesignParameters.tightHookSuperness)];
                };
                r518_exports.hookStartR = r518_hookStartR = function () {
                    var _r544_t0, _r544_t1;
                    return [r314_corner(r518_xRHook, r512_box.t, r314_widths.lhs(r512_sw)), r314_curl(Math.min(r518_xRHook - r314_TanSlope * r512_sw, r314_Arch["adjust-x"].top(r518_midX - r512_midShift, r512_sw)), r512_box.t, r314_heading(r314_Leftward)), r314_archv.superness(r314_DesignParameters.tightHookSuperness)];
                };
                r518_exports.hookEndL = r518_hookEndL = function () {
                    var _r546_t0, _r546_t1;
                    return [r314_arcvh.superness(r314_DesignParameters.tightHookSuperness), r314_flat(Math.max(r518_xLHook + r314_TanSlope * r512_sw, r314_Arch["adjust-x"].bot(r518_midX + r512_midShift, r512_sw)), r512_box.b, r314_widths.rhs.heading(r512_sw, r314_Leftward)), r314_corner(r518_xLHook, r512_box.b)];
                };
                r518_exports.hookEndR = r518_hookEndR = function () {
                    var _r548_t0, _r548_t1;
                    return [r314_arcvh.superness(r314_DesignParameters.tightHookSuperness), r314_flat(Math.min(r518_xRHook - r314_TanSlope * r512_sw, r314_Arch["adjust-x"].bot(r518_midX - r512_midShift, r512_sw)), r512_box.b, r314_widths.lhs.heading(r512_sw, r314_Rightward)), r314_corner(r518_xRHook, r512_box.b)];
                };
                r518_exports.serifStartL = r518_serifStartL = function () {
                    var _r550_t0, _r550_t1;
                    return r512_slab ? r314_tagged("arcStartSerifL", r314_VBar.l(r512_box.l + r518_serifShrink, r512_box.t - r512_hook, r512_box.t, r512_barSw)) : new r314_xn$Capture$2Lrc8.GlyphProc(function (r552_currentGlyph) {
                        var _r552_t0, _r552_t1;
                        return void 0;
                    });
                };
                r518_exports.serifStartR = r518_serifStartR = function () {
                    var _r554_t0, _r554_t1;
                    return r512_slab ? r314_tagged("arcStartSerifR", r314_VBar.r(r512_box.r - r518_serifShrink, r512_box.t - r512_hook, r512_box.t, r512_barSw)) : new r314_xn$Capture$2Lrc8.GlyphProc(function (r556_currentGlyph) {
                        var _r556_t0, _r556_t1;
                        return void 0;
                    });
                };
                r518_exports.serifEndL = r518_serifEndL = function () {
                    var _r558_t0, _r558_t1;
                    return r512_slab ? r314_tagged("arcEndSerifL", r314_VBar.l(r512_box.l + r518_serifShrink, r512_box.b + r512_hook, r512_box.b, r512_barSw)) : new r314_xn$Capture$2Lrc8.GlyphProc(function (r560_currentGlyph) {
                        var _r560_t0, _r560_t1;
                        return void 0;
                    });
                };
                r518_exports.serifEndR = r518_serifEndR = function () {
                    var _r562_t0, _r562_t1;
                    return r512_slab ? r314_tagged("arcEndSerifR", r314_VBar.r(r512_box.r - r518_serifShrink, r512_box.b + r512_hook, r512_box.b, r512_barSw)) : new r314_xn$Capture$2Lrc8.GlyphProc(function (r564_currentGlyph) {
                        var _r564_t0, _r564_t1;
                        return void 0;
                    });
                };
                return r518_exports;
            })();
        };
    });
    return void 0;
});


