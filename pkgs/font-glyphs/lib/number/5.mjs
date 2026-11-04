"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
import * as _s0_t2 from "@iosevka/geometry/box";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t11;
var _r1_t2 = function _r1_t11(r352_t) {
    var r352_n, r352_i, r352_a, _r352_t3, _r352_t4, _r352_t5, _r352_t6, _r352_t7, _r352_t8, _r352_t9, _r352_t10, _r352_t11, _r352_t12, _r352_t13, _r352_t14, _r352_t15, _r352_t16, _r352_t17, _r352_t18, _r352_t19, _r352_t20, _r352_t21, _r352_t22, _r352_t23, _r352_t24, _r352_t25, _r352_t26;
    var _r352_t0 = function () {
        _r352_t7 = function (_r352_t8) {
            _r352_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r352_t8
            };
        };
        _r352_t9 = r352_t instanceof Array;
        if (_r352_t9) {
            _r352_t10 = r352_n = r352_t.length;
            _r352_t11 = r352_i = 0;
            _r352_t12 = function (_r352_t14) {
                return _r352_t7(_r352_t14);
            };
            _r352_t13 = function (_r352_t15) {
                _r352_t16 = r352_i < r352_n;
                if (_r352_t16) {
                    _r352_t0 = function (_r352_t17) {
                        return _r352_t13(r352_i = r352_i + 1);
                    };
                    return {
                        "value": [r352_i, r352_t[r352_i]],
                        "done": false
                    };
                } else return _r352_t12(_r352_t15);
            };
            return _r352_t13();
        } else {
            _r352_t18 = r352_a = Object.keys(r352_t);
            _r352_t19 = r352_n = r352_a.length;
            _r352_t20 = r352_i = 0;
            _r352_t21 = function (_r352_t23) {
                return _r352_t7(_r352_t23);
            };
            _r352_t22 = function (_r352_t24) {
                _r352_t25 = r352_i < r352_n;
                if (_r352_t25) {
                    _r352_t0 = function (_r352_t26) {
                        return _r352_t22(r352_i = r352_i + 1);
                    };
                    return {
                        "value": [r352_a[r352_i], r352_t[r352_a[r352_i]]],
                        "done": false
                    };
                } else return _r352_t21(_r352_t24);
            };
            return _r352_t22();
        }
    };
    var _r352_t1 = function (x) {
        try {
            return _r352_t0(x);
        } catch (ex) {
            return _r352_t2(ex);
        }
    };
    var _r352_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t11) _r352_t3 = this; else {
        _r352_t4 = function () {
            void 0;
        };
        _r352_t4.prototype = _r1_t11.prototype;
        _r352_t3 = new _r352_t4();
    }
    _r352_t3[Symbol.iterator] = function () {
        return _r352_t3;
    };
    _r352_t3.next = _r352_t1;
    _r352_t3.throw = function (x) {
        return _r352_t2(x);
    };
    return _r352_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Digits-Five", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var r314_suffix, r314_obl, r314_bowlTopArcC, r314_bowlBotArcC, r314_pBarPos, r314_pBarPosSwAdj, r314_pXLeft, r314_slab, _r314_t11, _r314_t13, _r314_t14, _r314_t15, _r314_tag16;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var r314_MarkSet = _r314_t0.MarkSet;
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_DesignParameters = _r314_t1.DesignParameters;
        var r314_Width = _r314_t1.Width;
        var r314_SB = _r314_t1.SB;
        var r314_CAP = _r314_t1.CAP;
        var r314_XH = _r314_t1.XH;
        var r314_HSwToV = _r314_t1.HSwToV;
        var r314_Upward = _r314_t1.Upward;
        var r314_O = _r314_t1.O;
        var r314_OX = _r314_t1.OX;
        var r314_Hook = _r314_t1.Hook;
        var r314_AHook = _r314_t1.AHook;
        var r314_Stroke = _r314_t1.Stroke;
        var r314_VJut = _r314_t1.VJut;
        var r314_SLAB = _r314_t1.SLAB;
        var r314_RightSB = _r314_t1.RightSB;
        var r314_Middle = _r314_t1.Middle;
        var r314_ArchDepthA = _r314_t1.ArchDepthA;
        var r314_ArchDepthB = _r314_t1.ArchDepthB;
        var r314_YSmoothMidR = _r314_t1.YSmoothMidR;
        var r314_TINY = _r314_t1.TINY;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_g4 = _r314_t2.g4;
        var r314_flat = _r314_t2.flat;
        var r314_widths = _r314_t2.widths;
        var r314_heading = _r314_t2.heading;
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
        var r314_VSerif = _r314_t5.VSerif;
        var r314_HBar = _r314_t5.HBar;
        var r314_VBar = _r314_t5.VBar;
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r314_xn$selectvariant$7Hrq = _r314_t6["select-variant"];
        var r314_xn$linkreducedvariant$5sIl8 = _r314_t6["link-reduced-variant"];
        var _r314_t7 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Digits-Shared"].resolve();
        var r314_OnumMarks = _r314_t7.OnumMarks;
        var r314_ShiftDown = _r314_t7.ShiftDown;
        var r314_CodeLnum = _r314_t7.CodeLnum;
        var r314_CodeOnum = _r314_t7.CodeOnum;
        var _r314_t8 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Arc-Hook"].resolve();
        var r314_Toothed = _r314_t8.Toothed;
        var r314_Toothless = _r314_t8.Toothless;
        var r314_Rounded = _r314_t8.Rounded;
        var r314_Flat = _r314_t8.Flat;
        var r314_FiveShape = function () {
            var _r320_t5;
            var _r320_t6 = arguments;
            var r320_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r320_t6, 0);
            var _r320_t0 = [];
            var _r320_t1 = 0;
            while (_r320_t1 < r320_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r320_xn$flexarguments$2Lrc7uIe5[_r320_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r320_t0.push(r320_xn$flexarguments$2Lrc7uIe5[_r320_t1]);
                _r320_t1 = _r320_t1 + 1;
            }
            var _r320_t2 = r320_xn$flexarguments$2Lrc7uIe5;
            var _r320_t3 = _r320_t2.length;
            var _r320_t4 = 0;
            while (_r320_t4 < _r320_t3) {
                _r320_t1 = _r320_t2[_r320_t4];
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "top") r320_top = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "bp") r320_bp = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "pBarPosSwAdj") r320_pBarPosSwAdj = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "sw") r320_sw = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "bbd") r320_bbd = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "obl") r320_obl = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "zt") r320_zt = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "bowlTopArcC") r320_bowlTopArcC = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "bowlBotArcC") r320_bowlBotArcC = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "pXLeft") r320_pXLeft = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "slab") r320_slab = _r320_t1.right;
                _r320_t4 = _r320_t4 + 1;
            }
            var r320_top = r1_fallback(r320_top, _r320_t0[0]);
            var r320_bp = r1_fallback(r320_bp, _r320_t0[1]);
            var r320_pBarPosSwAdj = r1_fallback(r320_pBarPosSwAdj, _r320_t0[2]);
            var r320_sw = r1_fallback(r320_sw, _r320_t0[3], r314_Stroke);
            var r320_bbd = r1_fallback(r320_bbd, _r320_t0[4], 0);
            var r320_obl = r1_fallback(r320_obl, _r320_t0[5], 0);
            var r320_zt = r1_fallback(r320_zt, _r320_t0[6], 0);
            var r320_bowlTopArcC = r1_fallback(r320_bowlTopArcC, _r320_t0[7], r314_Rounded);
            var r320_bowlBotArcC = r1_fallback(r320_bowlBotArcC, _r320_t0[8], r314_Rounded);
            var r320_pXLeft = r1_fallback(r320_pXLeft, _r320_t0[9], 0.025);
            var r320_slab = r1_fallback(r320_slab, _r320_t0[10], r314_SLAB);
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                var _r325_t0, _r325_t1;
                var r325_t1 = r1_mix(0, r1_mix(0, r320_top, r320_bp) + r320_sw * r320_pBarPosSwAdj, 0.8);
                var r325_t2 = r1_mix(0, r1_mix(0, r320_top, r320_bp) + r320_sw * r320_pBarPosSwAdj, 1);
                var r325_xLeft = r1_mix(r314_SB, r314_RightSB, r320_pXLeft) + r320_zt;
                var r325_xRight = r1_mix(r314_RightSB, r314_SB, 0.05) - (r314_OX - r314_O);
                var r325_kGap = 0.144 - 0.1 * r320_sw / r325_t2;
                var r325_boxTop = new r1_Box(r325_t2, 0, r325_xLeft, r314_RightSB);
                var r325_boxBot = new r1_Box(r325_t2, 0, r314_SB, r314_RightSB);
                var r325_ArcTop = r320_bowlTopArcC(r325_boxTop, new r314_xn$NamedParameterPair$2Lrc9b("sw", r320_sw), new r314_xn$NamedParameterPair$2Lrc9b("barSw", r320_sw), new r314_xn$NamedParameterPair$2Lrc9b("hook", r314_AHook * (r320_top / r314_CAP)), new r314_xn$NamedParameterPair$2Lrc9b("xShrink", r314_HSwToV(0.5 * r320_sw)));
                var r325_ArcBot = r320_bowlBotArcC(r325_boxBot, new r314_xn$NamedParameterPair$2Lrc9b("sw", r320_sw), new r314_xn$NamedParameterPair$2Lrc9b("barSw", r320_sw), new r314_xn$NamedParameterPair$2Lrc9b("hook", r314_Hook * (r320_top / r314_CAP)));
                r325_currentGlyph.include(r314_difference(r314_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                    var r336_boxTop2, r336_boxBot2, r336_ArcTop2, r336_ArcBot2, r336_mask, _r336_t0, _r336_t1;
                    var r336_fiveStroke = r336_currentGlyph.include(r314_dispiro(r325_ArcTop.hookStartL(), r314_g4(r314_RightSB - r314_OX, r314_YSmoothMidR(r325_t2, 0, r314_ArchDepthA, r314_ArchDepthB)), r325_ArcBot.hookEndL()));
                    var r336_firstKnot = r336_fiveStroke.rhsKnots[0];
                    var r336_oblCor = Math.hypot(1, r320_obl);
                    var r336_xVBar = r336_firstKnot.x - r336_oblCor * r314_HSwToV(r320_sw) + (r320_bowlTopArcC === r314_Flat ? r314_HSwToV(0.5 * r320_sw) : 0);
                    var r336_xVBarOffset = (r320_top - r336_firstKnot.y) * r320_obl;
                    r336_currentGlyph.include(r314_HBar.t(r320_zt ? r314_SB : r336_xVBar + r336_xVBarOffset, r325_xRight, r320_top, r320_sw));
                    r336_currentGlyph.include(r314_union(r314_intersection(r314_Rect(r336_firstKnot.y + r320_sw, r336_firstKnot.y, 0, r314_Width), r314_dispiro(r314_widths.rhs(r320_sw), r314_flat(r336_xVBar, r336_firstKnot.y, r314_heading(r314_Upward)), r314_flat(r336_xVBar + r336_xVBarOffset, r320_top, r314_heading(r314_Upward)))), r314_intersection(r314_Rect(r320_top, r336_firstKnot.y + r320_sw, 0, r314_Width), r314_dispiro(r314_widths.rhs(r336_oblCor * r320_sw), r314_flat(r336_xVBar, r336_firstKnot.y, r314_heading(r314_Upward)), r314_flat(r336_xVBar + r336_xVBarOffset, r320_top, r314_heading(r314_Upward))))));
                    if (r320_bbd) {
                        r336_boxTop2 = r325_boxTop.pad(r314_TINY);
                        r336_boxBot2 = r325_boxBot.pad(r314_TINY);
                        r336_ArcTop2 = r320_bowlTopArcC(r336_boxTop2, new r314_xn$NamedParameterPair$2Lrc9b("sw", r320_sw), new r314_xn$NamedParameterPair$2Lrc9b("barSw", r320_sw), new r314_xn$NamedParameterPair$2Lrc9b("hook", r314_AHook * (r320_top / r314_CAP)), new r314_xn$NamedParameterPair$2Lrc9b("xShrink", r314_HSwToV(0.5 * r320_sw)));
                        r336_ArcBot2 = r320_bowlBotArcC(r336_boxBot2, new r314_xn$NamedParameterPair$2Lrc9b("sw", r320_sw), new r314_xn$NamedParameterPair$2Lrc9b("barSw", r320_sw), new r314_xn$NamedParameterPair$2Lrc9b("hook", r314_Hook * (r320_top / r314_CAP)));
                        r336_mask = function () {
                            var _r347_t0, _r347_t1;
                            return r314_xn$spirooutline$1aao(r336_ArcTop2.hookStartL(), r314_g4(r336_boxTop2.r - r314_OX, r314_YSmoothMidR(r325_t2, 0, r314_ArchDepthA, r314_ArchDepthB)), r336_ArcBot2.hookEndL());
                        };
                        r336_currentGlyph.include(r314_intersection(r336_mask(), r314_VBar.r(r314_RightSB - r314_OX - r320_bbd, 0, r314_CAP, r320_sw)));
                        r336_currentGlyph.include(r314_difference(r314_VBar.r(r336_firstKnot.x + r320_bbd, 0, r314_CAP, r320_sw), r336_mask(), r314_Rect(r325_t2 / 2, 0, 0, r314_Width)));
                    }
                    return void 0;
                })), r314_Rect(r325_t2 / 2 + r325_t2 * r325_kGap, r325_t2 / 2 - r325_t2 * r325_kGap, 0, r314_Middle)));
                if (!r320_bbd && r320_slab) r325_currentGlyph.include(r314_VSerif.dr(r325_xRight, r320_top, Math.min(r314_VJut, (r320_top - r325_t2) * 0.8)));
                return void 0;
            });
        };
        var r314_FiveConfig = r1_SuffixCfg.weave({
            "upright": 0,
            "oblique": 1 / 12
        }, {
            "arched": [r314_Rounded, r314_Rounded, 1 * r314_DesignParameters.fiveBarPos, 0, 0.025],
            "flat": [r314_Flat, r314_Rounded, 0.875 * r314_DesignParameters.fiveBarPos, 1 / 3, 0.05],
            "flatHook": [r314_Flat, r314_Flat, 0.875 * r314_DesignParameters.fiveBarPos, 1 / 3, 0.05]
        }, {
            "serifless": false,
            "serifed": true
        });
        var _r314_t9 = _r1_t2(r314_FiveConfig)[Symbol.iterator]();
        var _r314_t10 = void 0;
        while (!(_r314_t10 = _r314_t9.next()).done) {
            _r314_t11 = _r314_t10.value;
            r314_suffix = _r314_t11[0];
            r314_obl = _r314_t11[1][0];
            r314_bowlTopArcC = _r314_t11[1][1][0];
            r314_bowlBotArcC = _r314_t11[1][1][1];
            r314_pBarPos = _r314_t11[1][1][2];
            r314_pBarPosSwAdj = _r314_t11[1][1][3];
            r314_pXLeft = _r314_t11[1][1][4];
            _r314_t11[1][1];
            r314_slab = _r314_t11[1][2];
            _r314_t11[1];
            (function () {
                r314_xn$GlyphSaveSink$2Lrc4b.save("five.lnum." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                    var _r358_t0, _r358_t1;
                    r358_currentGlyph.include(r314_MarkSet.capital());
                    r358_currentGlyph.include(r314_FiveShape(r314_CAP, r314_pBarPos, r314_pBarPosSwAdj, new r314_xn$NamedParameterPair$2Lrc9b("bowlTopArcC", r314_bowlTopArcC), new r314_xn$NamedParameterPair$2Lrc9b("bowlBotArcC", r314_bowlBotArcC), new r314_xn$NamedParameterPair$2Lrc9b("obl", r314_obl), new r314_xn$NamedParameterPair$2Lrc9b("pXLeft", r314_pXLeft), new r314_xn$NamedParameterPair$2Lrc9b("slab", r314_slab)));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("five.onum." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                    var _r368_t0, _r368_t1;
                    r368_currentGlyph.include(r314_OnumMarks.p());
                    r368_currentGlyph.include(r314_FiveShape(r314_CAP, r314_pBarPos, r314_pBarPosSwAdj, new r314_xn$NamedParameterPair$2Lrc9b("bowlTopArcC", r314_bowlTopArcC), new r314_xn$NamedParameterPair$2Lrc9b("bowlBotArcC", r314_bowlBotArcC), new r314_xn$NamedParameterPair$2Lrc9b("obl", r314_obl), new r314_xn$NamedParameterPair$2Lrc9b("pXLeft", r314_pXLeft), new r314_xn$NamedParameterPair$2Lrc9b("slab", r314_slab)));
                    r368_currentGlyph.include(r314_ShiftDown());
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("zhuangToneFive." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
                    var _r379_t0, _r379_t1;
                    r379_currentGlyph.include(r314_MarkSet.capital());
                    r379_currentGlyph.include(r314_FiveShape(r314_CAP, r314_pBarPos, r314_pBarPosSwAdj, new r314_xn$NamedParameterPair$2Lrc9b("bowlTopArcC", r314_bowlTopArcC), new r314_xn$NamedParameterPair$2Lrc9b("bowlBotArcC", r314_bowlBotArcC), new r314_xn$NamedParameterPair$2Lrc9b("zt", (r314_RightSB - r314_SB) * 0.05), new r314_xn$NamedParameterPair$2Lrc9b("pXLeft", r314_pXLeft), new r314_xn$NamedParameterPair$2Lrc9b("slab", r314_slab)));
                    return void 0;
                }));
                return r314_xn$GlyphSaveSink$2Lrc4b.save("zhuangtonefive." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
                    var _r389_t0, _r389_t1;
                    r389_currentGlyph.include(r314_MarkSet.e());
                    r389_currentGlyph.include(r314_FiveShape(r314_XH, r314_pBarPos, r314_pBarPosSwAdj, new r314_xn$NamedParameterPair$2Lrc9b("bowlTopArcC", r314_bowlTopArcC), new r314_xn$NamedParameterPair$2Lrc9b("bowlBotArcC", r314_bowlBotArcC), new r314_xn$NamedParameterPair$2Lrc9b("zt", (r314_RightSB - r314_SB) * 0.05), new r314_xn$NamedParameterPair$2Lrc9b("pXLeft", r314_pXLeft), new r314_xn$NamedParameterPair$2Lrc9b("slab", r314_slab)));
                    return void 0;
                }));
            })();
        }
        r314_xn$selectvariant$7Hrq("five.lnum", r314_CodeLnum("5"), new r314_xn$NamedParameterPair$2Lrc9b("follow", "five"));
        r314_xn$selectvariant$7Hrq("five.onum", r314_CodeOnum("5"), new r314_xn$NamedParameterPair$2Lrc9b("follow", "five"));
        r314_xn$linkreducedvariant$5sIl8("five/sansSerif.lnum", "five.lnum", r1_MathSansSerif, new r314_xn$NamedParameterPair$2Lrc9b("follow", "five/sansSerif"));
        r314_xn$linkreducedvariant$5sIl8("five/sansSerif.onum", "five.onum", r1_MathSansSerif, new r314_xn$NamedParameterPair$2Lrc9b("follow", "five/sansSerif"));
        r314_xn$selectvariant$7Hrq("zhuangToneFive", 444);
        r314_xn$selectvariant$7Hrq("zhuangtonefive", 445, new r314_xn$NamedParameterPair$2Lrc9b("follow", "zhuangToneFive"));
        var _r314_t12 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r314_BBS = _r314_t12.BBS;
        var r314_BBD = _r314_t12.BBD;
        return r314_xn$GlyphSaveSink$2Lrc4b.save("mathbb/five", 120797, new r314_xn$Capture$2Lrc8.GlyphProc(function (r405_currentGlyph) {
            var _r405_t0, _r405_t1;
            r405_currentGlyph.include(r314_MarkSet.capital());
            r405_currentGlyph.include(r314_FiveShape(r314_CAP, r314_DesignParameters.fiveBarPos, 0, new r314_xn$NamedParameterPair$2Lrc9b("sw", r314_BBS), new r314_xn$NamedParameterPair$2Lrc9b("bbd", r314_BBD)));
            return void 0;
        }));
    });
    return void 0;
});


