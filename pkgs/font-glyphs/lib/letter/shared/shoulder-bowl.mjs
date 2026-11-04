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
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Letter-Shoulder-Bowl", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var r314_ShoulderT, _r314_t8, _r314_t9;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_Downward = _r314_t1.Downward;
        var r314_OX = _r314_t1.OX;
        var r314_Hook = _r314_t1.Hook;
        var r314_Stroke = _r314_t1.Stroke;
        var r314_SmallArchDepthA = _r314_t1.SmallArchDepthA;
        var r314_SmallArchDepthB = _r314_t1.SmallArchDepthB;
        var r314_ArchDepthAClamped = _r314_t1.ArchDepthAClamped;
        var r314_ArchDepthBClamped = _r314_t1.ArchDepthBClamped;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_corner = _r314_t2.corner;
        var r314_flat = _r314_t2.flat;
        var r314_curl = _r314_t2.curl;
        var r314_widths = _r314_t2.widths;
        var r314_heading = _r314_t2.heading;
        var r314_dispiro = _r314_t2.dispiro;
        var r314_xn$spirooutline$1aao = _r314_t2["spiro-outline"];
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r314_flatside = _r314_t5.flatside;
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r314_t7 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Arc-Hook"].resolve();
        var r314_ArcStartSerifWidth = _r314_t7.ArcStartSerifWidth;
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r319_t0, _r319_t1;
            return {
                "BowlT": r314_BowlT,
                "ShoulderT": r314_ShoulderT
            };
        });
        var r314_BowlT = function () {
            var _r321_t5, _r321_t7, _r321_tag8;
            var _r321_t6 = arguments;
            var r321_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r321_t6, 0);
            var _r321_t0 = [];
            var _r321_t1 = 0;
            while (_r321_t1 < r321_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r321_xn$flexarguments$2Lrc7uIe5[_r321_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r321_t0.push(r321_xn$flexarguments$2Lrc7uIe5[_r321_t1]);
                _r321_t1 = _r321_t1 + 1;
            }
            var _r321_t2 = r321_xn$flexarguments$2Lrc7uIe5;
            var _r321_t3 = _r321_t2.length;
            var _r321_t4 = 0;
            while (_r321_t4 < _r321_t3) {
                _r321_t1 = _r321_t2[_r321_t4];
                if (_r321_t1 && _r321_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r321_t1.left === "arcCStart") r321_arcCStart = _r321_t1.right;
                if (_r321_t1 && _r321_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r321_t1.left === "arcCEnd") r321_arcCEnd = _r321_t1.right;
                if (_r321_t1 && _r321_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r321_t1.left === "box") r321_box = _r321_t1.right;
                if (_r321_t1 && _r321_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r321_t1.left === "ada") r321_ada = _r321_t1.right;
                if (_r321_t1 && _r321_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r321_t1.left === "adb") r321_adb = _r321_t1.right;
                if (_r321_t1 && _r321_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r321_t1.left === "sw") r321_sw = _r321_t1.right;
                if (_r321_t1 && _r321_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r321_t1.left === "barSw") r321_barSw = _r321_t1.right;
                if (_r321_t1 && _r321_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r321_t1.left === "hook") r321_hook = _r321_t1.right;
                if (_r321_t1 && _r321_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r321_t1.left === "ox") r321_ox = _r321_t1.right;
                _r321_t4 = _r321_t4 + 1;
            }
            var r321_arcCStart = r1_fallback(r321_arcCStart, _r321_t0[0]);
            var r321_arcCEnd = r1_fallback(r321_arcCEnd, _r321_t0[1]);
            var r321_box = r1_fallback(r321_box, _r321_t0[2]);
            var r321_ada = r1_fallback(r321_ada, _r321_t0[3], r314_SmallArchDepthA);
            var r321_adb = r1_fallback(r321_adb, _r321_t0[4], r314_SmallArchDepthB);
            var r321_sw = r1_fallback(r321_sw, _r321_t0[5], r314_Stroke);
            var r321_barSw = r1_fallback(r321_barSw, _r321_t0[6], r314_ArcStartSerifWidth(r321_sw));
            var r321_hook = r1_fallback(r321_hook, _r321_t0[7], r314_Hook);
            var r321_ox = r1_fallback(r321_ox, _r321_t0[8], r314_OX);
            return (function () {
                var r327_ArcStart, r327_ArcEnd, r327_shape, r327_mask, _r327_t2, _r327_tag3, _r327_t6, _r327_tag7;
                var r327_exports = {};
                var r327_realAda = r314_ArchDepthAClamped(r321_box.t, r321_box.b, r321_ada, r321_adb);
                var r327_realAdb = r314_ArchDepthBClamped(r321_box.t, r321_box.b, r321_ada, r321_adb);
                r327_exports.ArcStart = r327_ArcStart = r321_arcCStart(r321_box, new r314_xn$NamedParameterPair$2Lrc9b("ada", r327_realAda), new r314_xn$NamedParameterPair$2Lrc9b("adb", r327_realAdb), new r314_xn$NamedParameterPair$2Lrc9b("sw", r321_sw), new r314_xn$NamedParameterPair$2Lrc9b("barSw", r321_barSw), new r314_xn$NamedParameterPair$2Lrc9b("hook", r321_hook));
                r327_exports.ArcEnd = r327_ArcEnd = r321_arcCEnd(r321_box, new r314_xn$NamedParameterPair$2Lrc9b("ada", r327_realAda), new r314_xn$NamedParameterPair$2Lrc9b("adb", r327_realAdb), new r314_xn$NamedParameterPair$2Lrc9b("sw", r321_sw), new r314_xn$NamedParameterPair$2Lrc9b("barSw", r321_barSw), new r314_xn$NamedParameterPair$2Lrc9b("hook", r321_hook));
                var _r327_t0 = r327_exports;
                var _r327_t1 = "shape";
                _r327_t0[_r327_t1] = r327_shape = (function () {
                    var r349_arcL, r349_arcR, r349_hookL, r349_hookR;
                    var r349_exports = {};
                    r349_exports.arcL = r349_arcL = function () {
                        var _r357_t0, _r357_t1;
                        return r314_dispiro(r327_ArcStart.arcStartR(), r314_flatside.ld(r321_box.l, r321_box.b, r321_box.t, r321_ada, r321_adb, r321_ox), r327_ArcEnd.arcEndR());
                    };
                    r349_exports.arcR = r349_arcR = function () {
                        var _r359_t0, _r359_t1;
                        return r314_dispiro(r327_ArcStart.arcStartL(), r314_flatside.rd(r321_box.r, r321_box.b, r321_box.t, r321_ada, r321_adb, r321_ox), r327_ArcEnd.arcEndL());
                    };
                    r349_exports.hookL = r349_hookL = function () {
                        var _r361_t0, _r361_t1;
                        return r314_dispiro(r327_ArcStart.hookStartR(), r314_flatside.ld(r321_box.l, r321_box.b, r321_box.t, r321_ada, r321_adb, r321_ox), r327_ArcEnd.hookEndR());
                    };
                    r349_exports.hookR = r349_hookR = function () {
                        var _r363_t0, _r363_t1;
                        return r314_dispiro(r327_ArcStart.hookStartL(), r314_flatside.rd(r321_box.r, r321_box.b, r321_box.t, r321_ada, r321_adb, r321_ox), r327_ArcEnd.hookEndL());
                    };
                    return r349_exports;
                })();
                var _r327_t4 = r327_exports;
                var _r327_t5 = "mask";
                _r327_t4[_r327_t5] = r327_mask = (function () {
                    var r367_arcL, r367_arcR, r367_hookL, r367_hookR;
                    var r367_exports = {};
                    r367_exports.arcL = r367_arcL = function () {
                        var _r375_t0, _r375_t1;
                        return r314_xn$spirooutline$1aao(r327_ArcStart.arcStartR(), r314_flatside.ld(r321_box.l, r321_box.b, r321_box.t, r321_ada, r321_adb, r321_ox), r327_ArcEnd.arcEndR());
                    };
                    r367_exports.arcR = r367_arcR = function () {
                        var _r377_t0, _r377_t1;
                        return r314_xn$spirooutline$1aao(r327_ArcStart.arcStartL(), r314_flatside.rd(r321_box.r, r321_box.b, r321_box.t, r321_ada, r321_adb, r321_ox), r327_ArcEnd.arcEndL());
                    };
                    r367_exports.hookL = r367_hookL = function () {
                        var _r379_t0, _r379_t1;
                        return r314_xn$spirooutline$1aao(r327_ArcStart.hookStartR(), r314_flatside.ld(r321_box.l, r321_box.b, r321_box.t, r321_ada, r321_adb, r321_ox), r327_ArcEnd.hookEndR());
                    };
                    r367_exports.hookR = r367_hookR = function () {
                        var _r381_t0, _r381_t1;
                        return r314_xn$spirooutline$1aao(r327_ArcStart.hookStartL(), r314_flatside.rd(r321_box.r, r321_box.b, r321_box.t, r321_ada, r321_adb, r321_ox), r327_ArcEnd.hookEndL());
                    };
                    return r367_exports;
                })();
                return r327_exports;
            })();
        };
        return r314_ShoulderT = function () {
            var _r383_t5, _r383_t7, _r383_tag8;
            var _r383_t6 = arguments;
            var r383_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r383_t6, 0);
            var _r383_t0 = [];
            var _r383_t1 = 0;
            while (_r383_t1 < r383_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r383_xn$flexarguments$2Lrc7uIe5[_r383_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r383_t0.push(r383_xn$flexarguments$2Lrc7uIe5[_r383_t1]);
                _r383_t1 = _r383_t1 + 1;
            }
            var _r383_t2 = r383_xn$flexarguments$2Lrc7uIe5;
            var _r383_t3 = _r383_t2.length;
            var _r383_t4 = 0;
            while (_r383_t4 < _r383_t3) {
                _r383_t1 = _r383_t2[_r383_t4];
                if (_r383_t1 && _r383_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r383_t1.left === "arcC") r383_arcC = _r383_t1.right;
                if (_r383_t1 && _r383_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r383_t1.left === "box") r383_box = _r383_t1.right;
                if (_r383_t1 && _r383_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r383_t1.left === "ada") r383_ada = _r383_t1.right;
                if (_r383_t1 && _r383_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r383_t1.left === "adb") r383_adb = _r383_t1.right;
                if (_r383_t1 && _r383_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r383_t1.left === "sw") r383_sw = _r383_t1.right;
                if (_r383_t1 && _r383_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r383_t1.left === "barSw") r383_barSw = _r383_t1.right;
                if (_r383_t1 && _r383_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r383_t1.left === "hook") r383_hook = _r383_t1.right;
                _r383_t4 = _r383_t4 + 1;
            }
            var r383_arcC = r1_fallback(r383_arcC, _r383_t0[0]);
            var r383_box = r1_fallback(r383_box, _r383_t0[1]);
            var r383_ada = r1_fallback(r383_ada, _r383_t0[2], r314_SmallArchDepthA);
            var r383_adb = r1_fallback(r383_adb, _r383_t0[3], r314_SmallArchDepthB);
            var r383_sw = r1_fallback(r383_sw, _r383_t0[4], r314_Stroke);
            var r383_barSw = r1_fallback(r383_barSw, _r383_t0[5], r314_ArcStartSerifWidth(r383_sw));
            var r383_hook = r1_fallback(r383_hook, _r383_t0[6], r314_Hook);
            return (function () {
                var r389_Arc, r389_shape, r389_mask, _r389_t2, _r389_tag3, _r389_t6, _r389_tag7;
                var r389_exports = {};
                r389_exports.Arc = r389_Arc = r383_arcC(r383_box, new r314_xn$NamedParameterPair$2Lrc9b("ada", r383_ada), new r314_xn$NamedParameterPair$2Lrc9b("adb", r383_adb), new r314_xn$NamedParameterPair$2Lrc9b("sw", r383_sw), new r314_xn$NamedParameterPair$2Lrc9b("barSw", r383_barSw), new r314_xn$NamedParameterPair$2Lrc9b("hook", r383_hook));
                var _r389_t0 = r389_exports;
                var _r389_t1 = "shape";
                _r389_t0[_r389_t1] = r389_shape = (function () {
                    var r405_arcLT, r405_arcRB, r405_hookLT, r405_hookRB;
                    var r405_exports = {};
                    r405_exports.arcLT = r405_arcLT = function () {
                        var _r413_t0, _r413_t1;
                        return r314_dispiro(r389_Arc.arcStartL(), r314_flat(r383_box.r, r383_box.t - r383_adb), r314_curl(r383_box.r, r383_box.b, r314_widths.rhs.heading(r383_sw, r314_Downward)));
                    };
                    r405_exports.arcRB = r405_arcRB = function () {
                        var _r415_t0, _r415_t1;
                        return r314_dispiro(r314_flat(r383_box.l, r383_box.t, r314_widths.lhs.heading(r383_sw, r314_Downward)), r314_curl(r383_box.l, r383_box.b + r383_adb), r389_Arc.arcEndR());
                    };
                    r405_exports.hookLT = r405_hookLT = function () {
                        var _r417_t0, _r417_t1;
                        return r314_dispiro(r389_Arc.hookStartL(), r314_flat(r383_box.r, r383_box.t - r383_adb), r314_curl(r383_box.r, r383_box.b, r314_widths.rhs.heading(r383_sw, r314_Downward)));
                    };
                    r405_exports.hookRB = r405_hookRB = function () {
                        var _r419_t0, _r419_t1;
                        return r314_dispiro(r314_flat(r383_box.l, r383_box.t, r314_widths.lhs.heading(r383_sw, r314_Downward)), r314_curl(r383_box.l, r383_box.b + r383_adb), r389_Arc.hookEndR());
                    };
                    return r405_exports;
                })();
                var _r389_t4 = r389_exports;
                var _r389_t5 = "mask";
                _r389_t4[_r389_t5] = r389_mask = (function () {
                    var r423_arcLT, r423_arcRB, r423_hookLT, r423_hookRB;
                    var r423_exports = {};
                    r423_exports.arcLT = r423_arcLT = function () {
                        var _r431_t0, _r431_t1;
                        return r314_xn$spirooutline$1aao(r389_Arc.arcStartL(), r314_flat(r383_box.r, r383_box.t - r383_adb), r314_corner(r383_box.r, r383_box.b), r314_corner(r389_Arc.xLArc, r383_box.b));
                    };
                    r423_exports.arcRB = r423_arcRB = function () {
                        var _r433_t0, _r433_t1;
                        return r314_xn$spirooutline$1aao(r314_corner(r389_Arc.xRArc, r383_box.t), r314_corner(r383_box.l, r383_box.t), r314_curl(r383_box.l, r383_box.b + r383_adb), r389_Arc.arcEndR());
                    };
                    r423_exports.hookLT = r423_hookLT = function () {
                        var _r435_t0, _r435_t1;
                        return r314_xn$spirooutline$1aao(r389_Arc.hookStartL(), r314_flat(r383_box.r, r383_box.t - r383_adb), r314_corner(r383_box.r, r383_box.b), r314_corner(r389_Arc.xLHook, r383_box.b));
                    };
                    r423_exports.hookRB = r423_hookRB = function () {
                        var _r437_t0, _r437_t1;
                        return r314_xn$spirooutline$1aao(r314_corner(r389_Arc.xRHook, r383_box.t), r314_corner(r383_box.l, r383_box.t), r314_curl(r383_box.l, r383_box.b + r383_adb), r389_Arc.hookEndR());
                    };
                    return r423_exports;
                })();
                return r389_exports;
            })();
        };
    });
    return void 0;
});


