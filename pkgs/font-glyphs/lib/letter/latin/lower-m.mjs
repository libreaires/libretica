"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r480_t) {
    var r480_n, r480_i, r480_a, _r480_t3, _r480_t4, _r480_t5, _r480_t6, _r480_t7, _r480_t8, _r480_t9, _r480_t10, _r480_t11, _r480_t12, _r480_t13, _r480_t14, _r480_t15, _r480_t16, _r480_t17, _r480_t18, _r480_t19, _r480_t20, _r480_t21, _r480_t22, _r480_t23, _r480_t24, _r480_t25, _r480_t26;
    var _r480_t0 = function () {
        _r480_t7 = function (_r480_t8) {
            _r480_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r480_t8
            };
        };
        _r480_t9 = r480_t instanceof Array;
        if (_r480_t9) {
            _r480_t10 = r480_n = r480_t.length;
            _r480_t11 = r480_i = 0;
            _r480_t12 = function (_r480_t14) {
                return _r480_t7(_r480_t14);
            };
            _r480_t13 = function (_r480_t15) {
                _r480_t16 = r480_i < r480_n;
                if (_r480_t16) {
                    _r480_t0 = function (_r480_t17) {
                        return _r480_t13(r480_i = r480_i + 1);
                    };
                    return {
                        "value": [r480_i, r480_t[r480_i]],
                        "done": false
                    };
                } else return _r480_t12(_r480_t15);
            };
            return _r480_t13();
        } else {
            _r480_t18 = r480_a = Object.keys(r480_t);
            _r480_t19 = r480_n = r480_a.length;
            _r480_t20 = r480_i = 0;
            _r480_t21 = function (_r480_t23) {
                return _r480_t7(_r480_t23);
            };
            _r480_t22 = function (_r480_t24) {
                _r480_t25 = r480_i < r480_n;
                if (_r480_t25) {
                    _r480_t0 = function (_r480_t26) {
                        return _r480_t22(r480_i = r480_i + 1);
                    };
                    return {
                        "value": [r480_a[r480_i], r480_t[r480_a[r480_i]]],
                        "done": false
                    };
                } else return _r480_t21(_r480_t24);
            };
            return _r480_t22();
        }
    };
    var _r480_t1 = function (x) {
        try {
            return _r480_t0(x);
        } catch (ex) {
            return _r480_t2(ex);
        }
    };
    var _r480_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r480_t3 = this; else {
        _r480_t4 = function () {
            void 0;
        };
        _r480_t4.prototype = _r1_t10.prototype;
        _r480_t3 = new _r480_t4();
    }
    _r480_t3[Symbol.iterator] = function () {
        return _r480_t3;
    };
    _r480_t3.next = _r480_t1;
    _r480_t3.throw = function (x) {
        return _r480_t2(x);
    };
    return _r480_t3;
};
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-M", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Body, r313_earless, r313_shortLeg, r313_tailed, r313_Serifs, r313_toothless, r313_USerifs, r313_LSerifs, _r313_t13, _r313_t16, _r313_t18, _r313_t19, _r313_t20, _r313_tag21, _r313_t22, _r313_tag23;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
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
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_O = _r313_t1.O;
        var r313_ArchDepth = _r313_t1.ArchDepth;
        var r313_SmallArchDepth = _r313_t1.SmallArchDepth;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_CThin = _r313_t1.CThin;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_ShoulderFine = _r313_t1.ShoulderFine;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_close = _r313_t2.close;
        var r313_straight = _r313_t2.straight;
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
        var r313_NeedSlab = _r313_t5.NeedSlab;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_Arch = _r313_t5.Arch;
        var r313_FlipAround = _r313_t5.FlipAround;
        var r313_PointingTo = _r313_t5.PointingTo;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$conditionalfollow$7VZA = _r313_t6["conditional-follow"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CurlyTail = _r313_t8.CurlyTail;
        var r313_nShoulder = _r313_t8.nShoulder;
        var r313_RightwardTailedBar = _r313_t8.RightwardTailedBar;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_MidHook = _r313_t9.MidHook;
        var r313_CyrDescender = _r313_t9.CyrDescender;
        var r313_CyrCurlDescender = _r313_t9.CyrCurlDescender;
        var r313_PalatalHook = _r313_t9.PalatalHook;
        var r313_EngHook = _r313_t9.EngHook;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_UpwardHookShape = _r313_t10.UpwardHookShape;
        var r313_SerifFrame = _r313_t10.SerifFrame;
        var r313_dfM = r313_DivFrame(r313_para.advanceScaleMM, 3);
        var r313_SmallMSmoothA = function (r320_df, r320__ad, r320__sw) {
            var _r320_t0, _r320_t1;
            return r320_df.slice(3, 2).archDepthAOf(r1_fallback(r320__ad, r313_SmallArchDepth), r1_fallback(r320__sw, r320_df.mvs));
        };
        var r313_SmallMSmoothB = function (r321_df, r321__ad, r321__sw) {
            var _r321_t0, _r321_t1;
            return r321_df.slice(3, 2).archDepthBOf(r1_fallback(r321__ad, r313_SmallArchDepth), r1_fallback(r321__sw, r321_df.mvs));
        };
        var r313_SmallMShoulderSpiro = function () {
            var _r322_t5;
            var _r322_t6 = arguments;
            var r322_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r322_t6, 0);
            var _r322_t0 = [];
            var _r322_t1 = 0;
            while (_r322_t1 < r322_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r322_xn$flexarguments$2Lrc7uIe5[_r322_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r322_t0.push(r322_xn$flexarguments$2Lrc7uIe5[_r322_t1]);
                _r322_t1 = _r322_t1 + 1;
            }
            var _r322_t2 = r322_xn$flexarguments$2Lrc7uIe5;
            var _r322_t3 = _r322_t2.length;
            var _r322_t4 = 0;
            while (_r322_t4 < _r322_t3) {
                _r322_t1 = _r322_t2[_r322_t4];
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "left") r322_left = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "right") r322_right = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "fine") r322_fine = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "top") r322_top = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "bottom") r322_bottom = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "ada") r322_ada = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "adb") r322_adb = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "stroke") r322_stroke = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "leftY0") r322_leftY0 = _r322_t1.right;
                _r322_t4 = _r322_t4 + 1;
            }
            var r322_left = r1_fallback(r322_left, _r322_t0[0]);
            var r322_right = r1_fallback(r322_right, _r322_t0[1]);
            var r322_fine = r1_fallback(r322_fine, _r322_t0[2]);
            var r322_top = r1_fallback(r322_top, _r322_t0[3]);
            var r322_bottom = r1_fallback(r322_bottom, _r322_t0[4]);
            var r322_ada = r1_fallback(r322_ada, _r322_t0[5]);
            var r322_adb = r1_fallback(r322_adb, _r322_t0[6]);
            var r322_stroke = r1_fallback(r322_stroke, _r322_t0[7]);
            var r322_leftY0 = r1_fallback(r322_leftY0, _r322_t0[8]);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                var _r328_t0, _r328_t1;
                var r328_fix = r313_HSwToV(r313_TanSlope * r322_stroke);
                r328_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r322_right - r313_HSwToV(r322_stroke), r322_bottom), r313_curl(r322_right - r313_HSwToV(r322_stroke), Math.max(r322_top - r322_adb + r328_fix, r322_bottom + r313_TINY)), r313_arcvh(8), r313_g2(r1_mix(r322_right - r313_HSwToV(r322_stroke), r322_left + r313_HSwToV(r322_fine), 0.5), r322_top - r313_O - r322_stroke), r313_archv(8), r313_flat(r322_left + r313_HSwToV(r322_fine), Math.max(r1_fallback(r322_leftY0, r322_bottom) + r313_TINY, r322_top - r322_ada - r328_fix)), r313_corner(r322_left + r313_HSwToV(r322_fine), r1_fallback(r322_leftY0, Math.max(r322_bottom, r322_top - r322_ada - r328_fix - r313_TINY))), r313_corner(r322_left, r1_fallback(r322_leftY0, Math.max(r322_bottom, r322_top - r322_ada - r313_TINY))), r313_curl(r322_left, Math.max(r1_fallback(r322_leftY0, r322_bottom) + r313_TINY, r322_top - r322_ada)), r313_arcvh(8), r313_g2(r1_mix(r322_left, r322_right, 0.5), r322_top - r313_O), r313_archv(8), r313_flat(r322_right, Math.max(r322_top - r322_adb, r322_bottom + r313_TINY)), r313_corner(r322_right, r322_bottom), r313_close()));
                return void 0;
            });
        };
        var r313_RevSmallMShoulderSpiro = function () {
            var _r330_t5;
            var _r330_t6 = arguments;
            var r330_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r330_t6, 0);
            var _r330_t0 = [];
            var _r330_t1 = 0;
            while (_r330_t1 < r330_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r330_xn$flexarguments$2Lrc7uIe5[_r330_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r330_t0.push(r330_xn$flexarguments$2Lrc7uIe5[_r330_t1]);
                _r330_t1 = _r330_t1 + 1;
            }
            var _r330_t2 = r330_xn$flexarguments$2Lrc7uIe5;
            var _r330_t3 = _r330_t2.length;
            var _r330_t4 = 0;
            while (_r330_t4 < _r330_t3) {
                _r330_t1 = _r330_t2[_r330_t4];
                if (_r330_t1 && _r330_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "left") r330_left = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "right") r330_right = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "fine") r330_fine = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "top") r330_top = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "bottom") r330_bottom = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "ada") r330_ada = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "adb") r330_adb = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "stroke") r330_stroke = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "rightY0") r330_rightY0 = _r330_t1.right;
                _r330_t4 = _r330_t4 + 1;
            }
            var r330_left = r1_fallback(r330_left, _r330_t0[0]);
            var r330_right = r1_fallback(r330_right, _r330_t0[1]);
            var r330_fine = r1_fallback(r330_fine, _r330_t0[2]);
            var r330_top = r1_fallback(r330_top, _r330_t0[3]);
            var r330_bottom = r1_fallback(r330_bottom, _r330_t0[4]);
            var r330_ada = r1_fallback(r330_ada, _r330_t0[5]);
            var r330_adb = r1_fallback(r330_adb, _r330_t0[6]);
            var r330_stroke = r1_fallback(r330_stroke, _r330_t0[7]);
            var r330_rightY0 = r1_fallback(r330_rightY0, _r330_t0[8]);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                var _r336_t0, _r336_t1;
                var r336_fix = r313_HSwToV(r313_TanSlope * r330_stroke);
                r336_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r330_left + r313_HSwToV(r330_stroke), r330_bottom), r313_curl(r330_left + r313_HSwToV(r330_stroke), Math.max(r330_top - r330_ada - r336_fix, r330_bottom + r313_TINY)), r313_arcvh(8), r313_g2(r1_mix(r330_left + r313_HSwToV(r330_stroke), r330_right - r313_HSwToV(r330_fine), 0.5), r330_top - r313_O - r330_stroke), r313_archv(8), r313_flat(r330_right - r313_HSwToV(r330_fine), Math.max(r1_fallback(r330_rightY0, r330_bottom) + r313_TINY, r330_top - r330_adb + r336_fix)), r313_corner(r330_right - r313_HSwToV(r330_fine), r1_fallback(r330_rightY0, Math.max(r330_bottom, r330_top - r330_adb + r336_fix - r313_TINY))), r313_corner(r330_right, r1_fallback(r330_rightY0, Math.max(r330_bottom, r330_top - r330_adb - r313_TINY))), r313_curl(r330_right, Math.max(r1_fallback(r330_rightY0, r330_bottom) + r313_TINY, r330_top - r330_adb)), r313_arcvh(8), r313_g2(r1_mix(r330_right, r330_left, 0.5), r330_top - r313_O), r313_archv(8), r313_flat(r330_left, Math.max(r330_top - r330_ada, r330_bottom + r313_TINY)), r313_corner(r330_left, r330_bottom), r313_close()));
                return void 0;
            });
        };
        var r313_SmallMTopLeftSerif = function (r338_df, r338_top, r338_lbot, r338_fFull, r338__sw) {
            var _r338_t0, _r338_t1;
            var r338_sf = r313_SerifFrame.fromDf(r338_df, r338_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r338__sw));
            return r338_sf.lt.outer;
        };
        var r313_SmallMBottomLeftSerif = function (r340_df, r340_top, r340_lbot, r340_fFull, r340__sw) {
            var _r340_t0, _r340_t1;
            var r340_sf = r313_SerifFrame.fromDf(r340_df, r340_top, r340_lbot, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r340__sw));
            return r340_fFull ? r340_sf.lb.full : r340_sf.lb.outer;
        };
        var r313_SmallMBottomMotionLeftSerif = function (r342_df, r342_top, r342_lbot, r342_fFull, r342__sw) {
            var _r342_t0, _r342_t1;
            var r342_sf = r313_SerifFrame.fromDf(r342_df, r342_top, r342_lbot, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r342__sw));
            return r342_fFull ? r342_sf.lb.inner : r313_xn$noshape$3cah();
        };
        var r313_SmallMBottomMiddleSerif = function (r344_df, r344_top, r344_mbot, r344_fFull, r344__sw) {
            var _r344_t0, _r344_t1;
            var r344_sf = r313_SerifFrame.fromDf(r344_df, r344_top, r344_mbot, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r344__sw));
            return r344_fFull ? r344_sf.mb.full : r313_xn$noshape$3cah();
        };
        var r313_SmallMBottomMotionMiddleSerif = function (r346_df, r346_top, r346_mbot, r346_fFull, r346__sw) {
            var _r346_t0, _r346_t1;
            var r346_sf = r313_SerifFrame.fromDf(r346_df, r346_top, r346_mbot, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r346__sw));
            return r346_fFull ? r346_sf.mb.right : r313_xn$noshape$3cah();
        };
        var r313_SmallMBottomRightSerif = function (r348_df, r348_top, r348_rbot, r348_fFull, r348__sw) {
            var _r348_t0, _r348_t1;
            var r348_sf = r313_SerifFrame.fromDf(r348_df, r348_top, r348_rbot, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r348__sw));
            return r348_fFull ? r348_sf.rb.full : r348_sf.rb.outer;
        };
        var r313_SmallMBottomMotionRightSerif = function (r350_df, r350_top, r350_rbot, r350_fFull, r350__sw) {
            var _r350_t0, _r350_t1;
            var r350_sf = r313_SerifFrame.fromDf(r350_df, r350_top, r350_rbot, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r350__sw));
            return r350_sf.rb.outer;
        };
        var r313_MEnoughSpaceForFullSerifs = function (r352_df, r352__sw) {
            var _r352_t0, _r352_t1;
            var r352_ink = r313_HSwToV(r1_fallback(r352__sw, r352_df.mvs));
            var r352_gap = (r352_df.rightSB - r352_df.leftSB) / 2 - 1.5 * r352_ink;
            return 0.5 * r352_ink + 0.375 * r352_gap > r313_para.refJut;
        };
        var r313_FullSerifs = function (r353_df, r353_top, r353_lbot, r353_mbot, r353_rbot, r353_earless, r353_shortLeg, r353_tailed, r353__sw) {
            var _r353_t0, _r353_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r355_currentGlyph) {
                var _r355_t0, _r355_t1;
                var r355_fFull = r313_MEnoughSpaceForFullSerifs(r353_df, r353__sw);
                if (!r353_earless) r355_currentGlyph.include(r313_SmallMTopLeftSerif(r353_df, r353_top, r353_lbot, r355_fFull, r353__sw));
                r355_currentGlyph.include(r313_SmallMBottomLeftSerif(r353_df, r353_top, r353_lbot, r355_fFull || r353_shortLeg, r353__sw));
                r355_currentGlyph.include(r313_SmallMBottomMiddleSerif(r353_df, r353_top, r353_mbot, r355_fFull, r353__sw));
                if (!r353_tailed) r355_currentGlyph.include(r313_SmallMBottomRightSerif(r353_df, r353_top, r353_rbot, r355_fFull || r353_shortLeg, r353__sw));
                return void 0;
            });
        };
        var r313_SmallTurnedMSerifs = function (r360_df, r360_top, r360_lbot, r360_mbot, r360_rbot, r360_earless, r360_shortLeg, r360_tailed, r360__sw) {
            var _r360_t0, _r360_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r362_currentGlyph) {
                var _r362_t0, _r362_t1;
                if (!r360_earless) r362_currentGlyph.include(r313_SmallMTopLeftSerif(r360_df, r360_top, r360_lbot, true, r360__sw));
                r362_currentGlyph.include(r313_SmallMBottomMotionLeftSerif(r360_df, r360_top, r360_lbot, true, r360__sw));
                r362_currentGlyph.include(r313_SmallMBottomMotionMiddleSerif(r360_df, r360_top, r360_mbot, true, r360__sw));
                if (!r360_tailed) r362_currentGlyph.include(r313_SmallMBottomMotionRightSerif(r360_df, r360_top, r360_rbot, true, r360__sw));
                return void 0;
            });
        };
        var r313_CapitalTurnedMBilateralMotionSerifs = function (r367_df, r367_top, r367_lbot, r367_mbot, r367_rbot, r367_earless, r367_shortLeg, r367_tailed, r367__sw) {
            var _r367_t0, _r367_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                var _r369_t0, _r369_t1;
                r369_currentGlyph.include(r313_SmallMBottomLeftSerif(r367_df, r367_top, r367_lbot, false, r367__sw));
                if (!r367_tailed) r369_currentGlyph.include(r313_SmallMBottomRightSerif(r367_df, r367_top, r367_rbot, false, r367__sw));
                return void 0;
            });
        };
        var r313_AutoSerifs = function (r372_df, r372_top, r372_lbot, r372_mbot, r372_rbot, r372_earless, r372_shortLeg, r372_tailed, r372__sw) {
            var _r372_t0, _r372_t1;
            return r313_NeedSlab(r313_SLAB, r313_FullSerifs(r372_df, r372_top, r372_lbot, r372_mbot, r372_rbot, r372_earless, r372_shortLeg, r372_tailed, r372__sw));
        };
        var r313_LtSerifs = function (r373_df, r373_top, r373_lbot, r373_mbot, r373_rbot, r373_earless, r373_shortLeg, r373_tailed, r373__sw) {
            var _r373_t0, _r373_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                var _r375_t0, _r375_t1;
                var r375_fFull = r313_MEnoughSpaceForFullSerifs(r373_df, r373__sw);
                r375_currentGlyph.include(r313_SmallMTopLeftSerif(r373_df, r373_top, r373_lbot, r375_fFull, r373__sw));
                return void 0;
            });
        };
        var r313_LtRbSerifs = function (r377_df, r377_top, r377_lbot, r377_mbot, r377_rbot, r377_earless, r377_shortLeg, r377_tailed, r377__sw) {
            var _r377_t0, _r377_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
                var _r379_t0, _r379_t1;
                var r379_fFull = r313_MEnoughSpaceForFullSerifs(r377_df, r377__sw);
                r379_currentGlyph.include(r313_SmallMTopLeftSerif(r377_df, r377_top, r377_lbot, r379_fFull, r377__sw));
                r379_currentGlyph.include(r313_SmallMBottomMotionRightSerif(r377_df, r377_top, r377_rbot, r379_fFull, r377__sw));
                return void 0;
            });
        };
        var r313_RbSerifs = function (r382_df, r382_top, r382_lbot, r382_mbot, r382_rbot, r382_earless, r382_shortLeg, r382_tailed, r382__sw) {
            var _r382_t0, _r382_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                var _r384_t0, _r384_t1;
                var r384_fFull = r313_MEnoughSpaceForFullSerifs(r382_df, r382__sw);
                r384_currentGlyph.include(r313_SmallMBottomMotionRightSerif(r382_df, r382_top, r382_rbot, r384_fFull, r382__sw));
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r387_t0, _r387_t1;
            return {
                "SmallMArches": r313_SmallMArches
            };
        });
        var r313_SmallMArches = function (r388_df, r388_top, r388_lbot, r388_mbot, r388_rbot, r388__sw, r388__ada, r388__adb) {
            var _r388_t0, _r388_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                var _r390_t0, _r390_t1;
                var r390_sw = r1_fallback(r388__sw, r388_df.mvs);
                var r390_fine = r390_sw * (r313_ShoulderFine / r313_Stroke);
                var r390_ada = r1_fallback(r388__ada, r313_SmallMSmoothA(r388_df, void 0, r390_sw));
                var r390_adb = r1_fallback(r388__adb, r313_SmallMSmoothB(r388_df, void 0, r390_sw));
                r390_currentGlyph.include(r313_tagged("barL", r313_VBar.l(r388_df.leftSB, r388_lbot, r388_top, r390_sw)));
                r390_currentGlyph.include(r313_SmallMShoulderSpiro(new r313_xn$NamedParameterPair$2Lrc9b("left", r388_df.leftSB + r313_HSwToV(r390_sw - r390_fine)), new r313_xn$NamedParameterPair$2Lrc9b("right", r388_df.middle + r313_HSwToV(0.5 * r390_sw)), new r313_xn$NamedParameterPair$2Lrc9b("fine", r390_fine), new r313_xn$NamedParameterPair$2Lrc9b("top", r388_top), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r388_mbot), new r313_xn$NamedParameterPair$2Lrc9b("ada", r390_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r390_adb), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r390_sw)));
                r390_currentGlyph.include(r313_SmallMShoulderSpiro(new r313_xn$NamedParameterPair$2Lrc9b("left", r388_df.middle + r313_HSwToV(0.5 * r390_sw - r390_fine)), new r313_xn$NamedParameterPair$2Lrc9b("right", r388_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("fine", r390_fine), new r313_xn$NamedParameterPair$2Lrc9b("top", r388_top), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r388_rbot), new r313_xn$NamedParameterPair$2Lrc9b("ada", r390_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r390_adb), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r390_sw), new r313_xn$NamedParameterPair$2Lrc9b("leftY0", r388_mbot)));
                return void 0;
            });
        };
        var r313_FlatTopSmallMShape = function (r411_df, r411_top, r411_lbot, r411_mbot, r411_rbot, r411__sw, r411__ada, r411__adb) {
            var _r411_t0, _r411_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r413_currentGlyph) {
                var _r413_t0, _r413_t1;
                var r413_sw = r1_fallback(r411__sw, r411_df.mvs);
                var r413_ada = r1_fallback(r411__ada, r313_SmallMSmoothA(r411_df, void 0, r413_sw));
                var r413_adb = r1_fallback(r411__adb, r313_SmallMSmoothB(r411_df, void 0, r413_sw));
                r413_currentGlyph.include(r313_tagged("barL", r313_VBar.l(r411_df.leftSB, r411_lbot, r411_top, r413_sw)));
                r413_currentGlyph.include(r313_tagged("barM", r313_VBar.m(r411_df.middle, r411_mbot, r411_top - 0.25 * r413_sw, r413_sw)));
                r413_currentGlyph.include(r313_dispiro(r313_widths.rhs(r413_sw), r313_flat(r411_df.leftSB + r313_TINY, r411_top, r313_heading(r313_Rightward)), r313_curl(r313_Arch["adjust-x"].top(r1_mix(r411_df.middle - r313_HSwToV(0.5 * r413_sw), r411_df.rightSB, 0.5), new r313_xn$NamedParameterPair$2Lrc9b("sw", r413_sw)), r411_top), r313_archv(), r313_flat(r411_df.rightSB, Math.max(r411_top - r413_adb, r411_rbot + r313_TINY)), r313_curl(r411_df.rightSB, r411_rbot, r313_heading(r313_Downward))));
                return void 0;
            });
        };
        var r313_EarlessSingleArchSmallMShape = function (r418_df, r418_top, r418_lbot, r418_mbot, r418_rbot, r418__sw, r418__ada, r418__adb) {
            var _r418_t0, _r418_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r420_currentGlyph) {
                var _r420_t0, _r420_t1;
                var r420_sw = r1_fallback(r418__sw, r418_df.mvs);
                var r420_ada = r1_fallback(r418__ada, r313_SmallMSmoothA(r418_df, void 0, r420_sw));
                var r420_adb = r1_fallback(r418__adb, r313_SmallMSmoothB(r418_df, void 0, r420_sw));
                r420_currentGlyph.include(r313_tagged("barL", r313_VBar.l(r418_df.leftSB, r418_lbot, r418_top - r313_DToothlessRise, r420_sw)));
                r420_currentGlyph.include(r313_tagged("barM", r313_VBar.m(r418_df.middle, r418_mbot, r418_top - 0.25 * r420_sw, r420_sw)));
                r420_currentGlyph.include(r313_dispiro(r313_widths.rhs(r420_sw), r313_g4(r418_df.leftSB, r418_top - r313_DToothlessRise), r313_Arch.rhs(r418_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r420_sw), new r313_xn$NamedParameterPair$2Lrc9b("blendPre", [])), r313_flat(r418_df.rightSB, Math.max(r418_top - r420_adb, r418_rbot + r313_TINY)), r313_curl(r418_df.rightSB, r418_rbot, r313_heading(r313_Downward))));
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r427_t0, _r427_t1;
            return {
                "EarlessCornerDoubleArchSmallMShape": r313_EarlessCornerDoubleArchSmallMShape
            };
        });
        var r313_EarlessCornerDoubleArchSmallMShape = function (r428_df, r428_top, r428_lbot, r428_mbot, r428_rbot, r428__sw, r428__ada, r428__adb) {
            var _r428_t0, _r428_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
                var _r430_t0, _r430_t1;
                var r430_sw = r1_fallback(r428__sw, r428_df.mvs);
                var r430_ada = r1_fallback(r428__ada, r313_SmallMSmoothA(r428_df, void 0, r430_sw));
                var r430_adb = r1_fallback(r428__adb, r313_SmallMSmoothB(r428_df, void 0, r430_sw));
                var r430_leftKnots = function (r431_sink, r431_offset) {
                    var _r431_t0, _r431_t1;
                    var r431_xMidBarRightSide = r428_df.middle + r313_HSwToV(0.5 * r430_sw);
                    return r431_sink(r313_widths.rhs(r430_sw), (r431_sink === r313_dispiro ? r313_g2 : r313_corner)(r428_df.leftSB - r431_offset, r428_top - r313_DToothlessRise), r313_Arch.rhs(r428_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r430_sw), new r313_xn$NamedParameterPair$2Lrc9b("blendPre", [])), r313_flat(r431_xMidBarRightSide - r431_offset, Math.max(r428_top - r430_adb, r428_mbot + r313_TINY), r313_heading(r313_Downward)), (r431_sink === r313_dispiro ? r313_curl : r313_corner)(r431_xMidBarRightSide - r431_offset, r428_mbot, r313_heading(r313_Downward)), r431_sink === r313_xn$spirooutline$1aao ? [r313_corner(r428_df.leftSB - r431_offset, 0)] : []);
                };
                var r430_rightKnots = function (r434_sink) {
                    var _r434_t0, _r434_t1;
                    var r434_xMidBarLeftSide = r428_df.middle - r313_HSwToV(0.5 * r430_sw);
                    return r434_sink(r313_widths.rhs(r430_sw), r313_g2(r1_mix(r428_df.rightSB, r434_xMidBarLeftSide, 1.5), r428_top - 2 * r313_DToothlessRise), r313_g2(r434_xMidBarLeftSide, r428_top - r313_DToothlessRise), r313_Arch.rhs(r428_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r430_sw), new r313_xn$NamedParameterPair$2Lrc9b("blendPre", [])), r313_flat(r428_df.rightSB, Math.max(r428_top - r430_adb, r428_rbot + r313_TINY), r313_heading(r313_Downward)), r313_curl(r428_df.rightSB, r428_rbot, r313_heading(r313_Downward)));
                };
                r430_currentGlyph.include(r313_tagged("barL", r313_VBar.l(r428_df.leftSB, r428_lbot, r428_top - r313_DToothlessRise, r430_sw)));
                r430_currentGlyph.include(r430_leftKnots(r313_dispiro, 0));
                r430_currentGlyph.include(r313_difference(r430_rightKnots(r313_dispiro), r430_leftKnots(r313_xn$spirooutline$1aao, 0.1)));
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r441_t0, _r441_t1;
            return {
                "EarlessRoundedDoubleArchSmallMShape": r313_EarlessRoundedDoubleArchSmallMShape
            };
        });
        var r313_EarlessRoundedDoubleArchSmallMShape = function (r442_df, r442_top, r442_lbot, r442_mbot, r442_rbot, r442__sw, r442__ada, r442__adb) {
            var _r442_t0, _r442_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r444_currentGlyph) {
                var _r444_t0, _r444_t1;
                var r444_sw = r1_fallback(r442__sw, r442_df.mvs);
                var r444_fine = r444_sw * r313_CThin;
                var r444_ada = r1_fallback(r442__ada, r313_SmallMSmoothA(r442_df, void 0, r444_sw));
                var r444_adb = r1_fallback(r442__adb, r313_SmallMSmoothB(r442_df, void 0, r444_sw));
                r444_currentGlyph.include(r313_union(r313_RevSmallMShoulderSpiro(new r313_xn$NamedParameterPair$2Lrc9b("left", r442_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r442_df.middle - r313_HSwToV(0.5 * r444_sw - r444_fine)), new r313_xn$NamedParameterPair$2Lrc9b("fine", r444_fine), new r313_xn$NamedParameterPair$2Lrc9b("top", r442_top), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r442_lbot), new r313_xn$NamedParameterPair$2Lrc9b("ada", r444_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r444_adb), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r444_sw), new r313_xn$NamedParameterPair$2Lrc9b("rightY0", r442_mbot)), r313_SmallMShoulderSpiro(new r313_xn$NamedParameterPair$2Lrc9b("left", r442_df.middle + r313_HSwToV(0.5 * r444_sw - r444_fine)), new r313_xn$NamedParameterPair$2Lrc9b("right", r442_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("fine", r444_fine), new r313_xn$NamedParameterPair$2Lrc9b("top", r442_top), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r442_rbot), new r313_xn$NamedParameterPair$2Lrc9b("ada", r444_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r444_adb), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r444_sw), new r313_xn$NamedParameterPair$2Lrc9b("leftY0", r442_mbot))));
                return void 0;
            });
        };
        var r313_SmallMShortLegHeight = function (r464_df, r464_top, r464__sw, r464__ada, r464__adb) {
            var _r464_t0, _r464_t1;
            var r464_sw = r1_fallback(r464__sw, r464_df.mvs);
            return r1_mix(0, r464_top - r464_sw, 0.45);
        };
        var r313_SmallMSmoothHeight = function (r465_df, r465_top, r465__sw, r465__ada, r465__adb) {
            var _r465_t0, _r465_t1;
            var r465_sw = r1_fallback(r465__sw, r465_df.mvs);
            return r465_top - r1_fallback(r465__adb, r313_SmallMSmoothB(r465_df, void 0, r465_sw)) - r313_TINY - r313_HSwToV(Math.abs(r313_TanSlope * r465_sw));
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r467_t0, _r467_t1;
            return {
                "mShapeBodyImpl": r313_mShapeBodyImpl
            };
        });
        var r313_mShapeBodyImpl = function (r468_df, r468_top, r468_body, r468_earless, r468_shortLeg, r468_tailed, r468_serifs, r468__sw, r468__ada, r468__adb) {
            var _r468_t0, _r468_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r470_currentGlyph) {
                var _r470_t0, _r470_t1;
                var r470_sw = r1_fallback(r468__sw, r468_df.mvs);
                r470_currentGlyph.include(r468_body(r468_df, r468_top, 0, r468_shortLeg ? r313_SmallMShortLegHeight(r468_df, r468_top, r470_sw, r468__ada, r468__adb) : 0, r468_tailed ? r313_SmallMSmoothHeight(r468_df, r468_top, r470_sw, r468__ada, r468__adb) + r313_O : 0, r470_sw, r468__ada, r468__adb));
                if (r468_tailed) r470_currentGlyph.include(r313_RightwardTailedBar(r468_df.rightSB, 0, r313_SmallMSmoothHeight(r468_df, r468_top, r470_sw, r468__ada, r468__adb), new r313_xn$NamedParameterPair$2Lrc9b("sw", r470_sw)));
                r470_currentGlyph.include(r468_serifs(r468_df, r468_top, 0, r468_shortLeg ? r313_SmallMShortLegHeight(r468_df, r468_top, r470_sw, r468__ada, r468__adb) : 0, 0, r468_earless, r468_shortLeg, r468_tailed));
                r470_currentGlyph.setBaseAnchor("overlay", r468_df.middle, r468_top / 2);
                r470_currentGlyph.setBaseAnchor("strike", r468_df.middle, r468_top / 2);
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r478_t0, _r478_t1;
            return {
                "SmallMConfig": r313_SmallMConfig
            };
        });
        var r313_SmallMConfig = r1_SuffixCfg.weave({
            "": [r313_SmallMArches, 0],
            "flatTop": [r313_FlatTopSmallMShape, 0],
            "earlessSingleArch": [r313_EarlessSingleArchSmallMShape, 1],
            "earlessCornerDoubleArch": [r313_EarlessCornerDoubleArchSmallMShape, 1],
            "earlessRoundedDoubleArch": [r313_EarlessRoundedDoubleArchSmallMShape, 1]
        }, {
            "": [0],
            "shortLeg": [1]
        }, {
            "": [0],
            "tailed": [1]
        }, {
            "serifless": [r313_xn$noshape$3cah],
            "serifed": [r313_FullSerifs],
            "topLeftSerifed": [r313_LtSerifs],
            "bottomRightSerifed": [r313_RbSerifs],
            "topLeftAndBottomRightSerifed": [r313_LtRbSerifs]
        });
        var _r313_t11 = _r1_t2(r313_SmallMConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_Body = _r313_t13[1][0][0];
            r313_earless = _r313_t13[1][0][1];
            _r313_t13[1][0];
            r313_shortLeg = _r313_t13[1][1][0];
            _r313_t13[1][1];
            r313_tailed = _r313_t13[1][2][0];
            _r313_t13[1][2];
            r313_Serifs = _r313_t13[1][3][0];
            _r313_t13[1][3];
            _r313_t13[1];
            (function () {
                var r483_mShapeBody = function (r484_df, r484_top, r484__sw, r484__ada, r484__adb) {
                    var _r484_t0, _r484_t1;
                    return r313_mShapeBodyImpl(r484_df, r484_top, r313_Body, r313_earless, r313_shortLeg, r313_tailed, r313_Serifs, r484__sw, r484__ada, r484__adb);
                };
                r313_xn$GlyphSaveSink$2Lrc4b.save("m." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r487_currentGlyph) {
                    var _r487_t0, _r487_t1;
                    var r487_df = r487_currentGlyph.include(r313_dfM);
                    r487_currentGlyph.include(r487_df.markSet.e());
                    r487_currentGlyph.include(r483_mShapeBody(r487_df, r313_XH));
                    return void 0;
                }));
                if (!r313_tailed) {
                    r313_xn$GlyphSaveSink$2Lrc4b.save("meng." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r493_currentGlyph) {
                        var _r493_t0, _r493_t1;
                        var r493_df = r493_currentGlyph.include(r313_dfM);
                        r493_currentGlyph.include(r493_df.markSet.p());
                        r493_currentGlyph.include(r483_mShapeBody(r493_df, r313_XH));
                        r493_currentGlyph.ejectTagged("serifRB");
                        r493_currentGlyph.include(r313_EngHook(r493_df.rightSB, 0, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("sw", r493_df.mvs)));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("mCrossedTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r502_currentGlyph) {
                        var _r502_t0, _r502_t1;
                        var r502_df = r502_currentGlyph.include(r313_dfM);
                        r502_currentGlyph.include(r502_df.markSet.e());
                        var r502_fine = r313_AdviceStroke(4) * (r502_df.mvs / r313_Stroke);
                        var r502_rinner = r313_XH * 0.15 - r502_fine * 0.75;
                        var r502_sw = r313_AdviceStroke(3) * (r502_df.mvs / r313_Stroke);
                        var r502_m2 = Math.max(r1_mix(r502_df.leftSB, r502_df.rightSB - r313_HSwToV(r502_fine), 2 / 3) - r313_HSwToV(0.25 * r502_fine), r502_df.rightSB - (r313_RightSB - r313_SB) / 2 - r313_HSwToV(0.5 * r502_fine));
                        var r502_x2 = r502_df.rightSB + r313_SideJut;
                        var r502_y2 = r502_rinner * 2 + r502_fine - r313_O;
                        r502_currentGlyph.include(r313_Body(r502_df, r313_XH, 0, r313_shortLeg ? r313_SmallMShortLegHeight(r502_df, r313_XH) : 0, r502_y2 + r313_O, r502_sw));
                        r502_currentGlyph.include(r313_dispiro(r313_straight.down.start(r502_df.rightSB, r502_y2, r313_widths.rhs.heading(r502_sw, r313_Downward)), r313_CurlyTail.f(r502_fine, 0, r502_m2, r502_x2, new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r502_sw))));
                        r502_currentGlyph.include(r313_Serifs(r502_df, r313_XH, 0, r313_shortLeg ? r313_SmallMShortLegHeight(r502_df, r313_XH) : 0, 0, r313_earless, r313_shortLeg, true, r502_sw));
                        return void 0;
                    }));
                }
                return r313_Body === r313_SmallMArches && !r313_shortLeg ? (r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/teMidHook.italic." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r511_currentGlyph) {
                    var _r511_t0, _r511_t1;
                    var r511_df = r511_currentGlyph.include(r313_DivFrame(r1_mix(1, r313_para.advanceScaleMM, 2), 4));
                    r511_currentGlyph.include(r511_df.markSet.e());
                    var r511_subDf = r511_df.slice(4, 3, 0);
                    r511_currentGlyph.include(r483_mShapeBody(r511_subDf, r313_XH));
                    r511_currentGlyph.include(r313_MidHook.general(new r313_xn$NamedParameterPair$2Lrc9b("left", r511_subDf.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r511_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH * 0.625 + r511_df.mvs / 4), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r511_subDf.mvs)));
                    return void 0;
                })), !r313_tailed ? (r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tjeKomi.italic." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r524_currentGlyph) {
                    var r524_sf2, _r524_t0, _r524_t1;
                    var r524_df = r524_currentGlyph.include(r313_DivFrame(r1_mix(1, r313_para.advanceScaleMM, 2), 4));
                    r524_currentGlyph.include(r524_df.markSet.e());
                    var r524_subDf = r524_df.slice(4, 3, 0);
                    r524_currentGlyph.include(r313_Body(r524_subDf, r313_XH, 0, 0, r313_XH / 2));
                    r524_currentGlyph.include(r313_UpwardHookShape(new r313_xn$NamedParameterPair$2Lrc9b("left", r524_subDf.rightSB - r313_HSwToV(r524_subDf.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r524_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("ybegin", r313_XH / 2), new r313_xn$NamedParameterPair$2Lrc9b("yend", r313_XH / 2 + r313_HalfStroke), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA * (2 / r524_df.hPack) * r524_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB * (2 / r524_df.hPack) * r524_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("sw", r524_subDf.mvs)));
                    r524_currentGlyph.include(r313_Serifs(r524_subDf, r313_XH, 0, 0, r313_XH / 2, false, false, true));
                    if (r313_SLAB) {
                        r524_sf2 = r313_SerifFrame.fromDf(r524_df, r313_XH / 2 + r313_HalfStroke, 0).slice(2, 3);
                        r524_currentGlyph.include(r524_sf2.rt.full);
                    }
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r540_currentGlyph) {
                    var _r540_t0, _r540_t1;
                    var r540_df = r540_currentGlyph.include(r313_DivFrame(r1_mix(1, r313_para.advanceScaleMM, 2), 4));
                    r540_currentGlyph.include(r540_df.markSet.e());
                    var r540_subDf = r540_df.slice(4, 3, 0);
                    r540_currentGlyph.include(r313_Body(r540_subDf, r313_XH, 0, 0, r313_XH - r313_SmallArchDepthB * (2 / r540_df.hPack) * r540_df.adws - r313_TINY));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tje.italic/base/corner." + r313_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r540_currentGlyph, r313_Serifs(r540_subDf, r313_XH, 0, 0, 0, false, false, false)));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tje.italic/base/cursive." + r313_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r540_currentGlyph, r313_Serifs(r540_subDf, r313_XH, 0, 0, 0, false, false, true)));
                    return void 0;
                }))) : void 0) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("m", "m");
        r313_xn$selectvariant$7Hrq("m/descBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "m"));
        r313_xn$linkreducedvariant$5sIl8("m/sansSerif", "m", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("cyrl/te.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "m"));
        r313_alias("cyrl/te/reduced.italic", null, "cyrl/te.italic");
        r313_xn$selectvariant$7Hrq("cyrl/te.italic/descBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "m"));
        r313_xn$selectvariant$7Hrq("cyrl/tjeKomi.italic");
        r313_xn$selectvariant$7Hrq("cyrl/tje.italic/base/corner");
        r313_xn$selectvariant$7Hrq("cyrl/tje.italic/base/cursive");
        r313_xn$selectvariant$7Hrq("cyrl/teMidHook.italic", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/te.italic"));
        r313_alias("cyrl/te.BGR", null, "cyrl/te.italic");
        r313_alias("cyrl/te/reduced.BGR", null, "cyrl/te.italic");
        r313_alias("cyrl/teThreeLeg.italic", null, "cyrl/te.italic");
        r313_xn$deriveglyphs$7Hrq("cyrl/teDescender.italic", null, "cyrl/te.italic/descBase", function (r552_src, r552_gr) {
            var _r552_t0, _r552_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r554_currentGlyph) {
                var _r554_t0, _r554_t1;
                r554_currentGlyph.include(r313_xn$referglyph$1aao(r552_src), r313_AS_BASE, r313_ALSO_METRICS);
                r554_currentGlyph.include(r313_CyrDescender.rSideJut(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_dfM.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r313_dfM.mvs)));
                return void 0;
            });
        });
        r313_xn$deriveglyphs$7Hrq("mPalatalHook", 7558, "m/descBase", function (r560_src, r560_gr) {
            var _r560_t0, _r560_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r562_currentGlyph) {
                var _r562_t0, _r562_t1;
                r562_currentGlyph.include(r313_xn$referglyph$1aao(r560_src), r313_AS_BASE, r313_ALSO_METRICS);
                r562_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("xLink", r313_dfM.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("x", r313_dfM.rightSB + r313_SideJut), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r313_dfM.mvs)));
                return void 0;
            });
        });
        r313_xn$selectvariant$7Hrq("meng", 625);
        r313_xn$selectvariant$7Hrq("mCrossedTail", 43834, new r313_xn$NamedParameterPair$2Lrc9b("follow", "meng"));
        var r313_turnMShapeBodyImpl = function (r570_df, r570_top, r570_body, r570_toothless, r570_shortLeg, r570_tailed, r570_serifs, r570__sw, r570__ada, r570__adb) {
            var _r570_t0, _r570_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r572_currentGlyph) {
                var _r572_t0, _r572_t1;
                var r572_sw = r1_fallback(r570__sw, r570_df.mvs);
                r572_currentGlyph.include(r570_body(r570_df, r570_top, 0, r570_shortLeg ? r313_SmallMShortLegHeight(r570_df, r570_top, r572_sw, r570__ada, r570__adb) : 0, 0, r572_sw, r570__ada, r570__adb));
                r572_currentGlyph.include(r570_serifs(r570_df, r570_top, 0, r570_shortLeg ? r313_SmallMShortLegHeight(r570_df, r570_top, r572_sw, r570__ada, r570__adb) : 0, 0, r570_toothless, r570_shortLeg, false, r572_sw));
                r572_currentGlyph.include(r313_FlipAround(r570_df.middle, r570_top / 2));
                if (r570_tailed) {
                    r572_currentGlyph.ejectTagged("barL");
                    r572_currentGlyph.ejectTagged("serifLT");
                    r572_currentGlyph.include(r313_RightwardTailedBar(r570_df.rightSB, 0, r570_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r572_sw)));
                }
                r572_currentGlyph.setBaseAnchor("overlay", r570_df.middle, r570_top / 2);
                r572_currentGlyph.setBaseAnchor("strike", r570_df.middle, r570_top / 2);
                return void 0;
            });
        };
        var r313_TurnMConfig = r1_SuffixCfg.weave({
            "toothed": [r313_SmallMArches, 0, 0],
            "tailed": [r313_SmallMArches, 0, 1],
            "flatBottom": [r313_FlatTopSmallMShape, 0, 0],
            "toothlessCorner": [r313_EarlessCornerDoubleArchSmallMShape, 1, 0],
            "toothlessRounded": [r313_EarlessRoundedDoubleArchSmallMShape, 1, 0]
        }, function (r582_body) {
            var r582___, _r582_t0, _r582_t1, _r582_t2;
            return {
                "serifless": [r313_xn$noshape$3cah, r313_xn$noshape$3cah],
                "serifed": [r313_FullSerifs, r313_SmallTurnedMSerifs],
                "bottomRightSerifed": [r313_LtSerifs, r313_LtSerifs],
                "bilateralMotionSerifed": [r313_CapitalTurnedMBilateralMotionSerifs, r313_RbSerifs],
                "motionSerifed": (_r582_t0 = r582_body, _r582_t0 === "toothed" || _r582_t0 === "flatBottom" ? [r313_LtRbSerifs, r313_LtRbSerifs] : (r582___ = _r582_t0, [r313_RbSerifs, r313_RbSerifs]))
            };
        });
        var _r313_t14 = _r1_t2(r313_TurnMConfig)[Symbol.iterator]();
        var _r313_t15 = void 0;
        while (!(_r313_t15 = _r313_t14.next()).done) {
            _r313_t16 = _r313_t15.value;
            r313_suffix = _r313_t16[0];
            r313_Body = _r313_t16[1][0][0];
            r313_toothless = _r313_t16[1][0][1];
            r313_tailed = _r313_t16[1][0][2];
            _r313_t16[1][0];
            r313_USerifs = _r313_t16[1][1][0];
            r313_LSerifs = _r313_t16[1][1][1];
            _r313_t16[1][1];
            _r313_t16[1];
            (function () {
                var r586_turnMShapeBody = function (r587_df, r587_top, r587__sw, r587__ada, r587__adb) {
                    var _r587_t0, _r587_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r589_currentGlyph) {
                        var _r589_t0, _r589_t1;
                        r589_currentGlyph.include(r313_turnMShapeBodyImpl(r587_df, r587_top, r313_Body, r313_toothless, false, r313_tailed, r313_LSerifs, r587__sw, r587__ada, r587__adb));
                        return void 0;
                    });
                };
                r313_xn$GlyphSaveSink$2Lrc4b.save("turnm." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r593_currentGlyph) {
                    var _r593_t0, _r593_t1;
                    var r593_df = r593_currentGlyph.include(r313_dfM);
                    r593_currentGlyph.include(r593_df.markSet.e());
                    r593_currentGlyph.include(r586_turnMShapeBody(r593_df, r313_XH));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("turnmCap." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r599_currentGlyph) {
                    var _r599_t0, _r599_t1;
                    var r599_df = r599_currentGlyph.include(r313_dfM);
                    r599_currentGlyph.include(r599_df.markSet.capital());
                    r599_currentGlyph.include(r313_turnMShapeBodyImpl(r599_df, r313_CAP, r313_Body, r313_toothless, false, r313_tailed, r313_USerifs, void 0, r313_SmallMSmoothA(r599_df, r313_ArchDepth), r313_SmallMSmoothB(r599_df, r313_ArchDepth)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("turnmSideways." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r605_currentGlyph) {
                    var _r605_t0, _r605_t1;
                    var r605_realHeight = r313_XH * r313_para.advanceScaleMM;
                    var r605_realTop = r313_XH / 2 + r605_realHeight / 2;
                    var r605_realBot = r313_XH / 2 - r605_realHeight / 2;
                    var r605_df = r313_DivFrame(r605_realHeight / r313_Width, 3, r313_XH * 0.1 / r313_SB);
                    r605_currentGlyph.include(r605_df.markSet.e());
                    r605_currentGlyph.include(r313_PointingTo(r313_Width, r605_realTop, r313_Width, r605_realBot, function () {
                        var _r608_t0, _r608_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r610_currentGlyph) {
                            var _r610_t0, _r610_t1;
                            r610_currentGlyph.include(r586_turnMShapeBody(r605_df, r313_RightSB));
                            r610_currentGlyph.include(r313_Translate(0, r313_SB / 2));
                            return void 0;
                        });
                    }));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("UNotch." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r615_currentGlyph) {
                    var _r615_t0, _r615_t1;
                    var r615_df = r615_currentGlyph.include(r313_dfM);
                    r615_currentGlyph.include(r615_df.markSet.capital());
                    r615_currentGlyph.include(r313_turnMShapeBodyImpl(r615_df, r313_CAP, r313_Body, r313_toothless, true, r313_tailed, r313_USerifs, void 0, r313_SmallMSmoothA(r615_df, r313_ArchDepth), r313_SmallMSmoothB(r615_df, r313_ArchDepth)));
                    r615_currentGlyph.ejectTagged("serifMB");
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("uNotch." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r622_currentGlyph) {
                    var _r622_t0, _r622_t1;
                    var r622_df = r622_currentGlyph.include(r313_dfM);
                    r622_currentGlyph.include(r622_df.markSet.e());
                    r622_currentGlyph.include(r313_turnMShapeBodyImpl(r622_df, r313_XH, r313_Body, r313_toothless, true, r313_tailed, r313_LSerifs));
                    r622_currentGlyph.ejectTagged("serifMB");
                    return void 0;
                }));
                return !r313_tailed ? (r313_xn$GlyphSaveSink$2Lrc4b.save("turnmLongLeg." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r629_currentGlyph) {
                    var r629_sf, _r629_t0, _r629_t1;
                    var r629_df = r629_currentGlyph.include(r313_dfM);
                    r629_currentGlyph.include(r629_df.markSet.p());
                    r629_currentGlyph.include(r586_turnMShapeBody(r629_df, r313_XH));
                    r629_currentGlyph.ejectTagged("serifLT");
                    r629_currentGlyph.include(r313_VBar.r(r629_df.rightSB, r313_Descender, r313_XH, r629_df.mvs));
                    if (r313_LSerifs !== r313_xn$noshape$3cah) {
                        r629_sf = r313_SerifFrame.fromDf(r629_df, r313_XH, r313_Descender);
                        r629_currentGlyph.include(r629_sf.rb[r313_para.isItalic ? "outer" : "fullSide"]);
                    }
                    r629_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r629_df.rightSB));
                    return void 0;
                })), r313_Body === r313_SmallMArches ? (r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/shcha.italic." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r639_currentGlyph) {
                    var _r639_t0, _r639_t1;
                    var r639_df = r639_currentGlyph.include(r313_dfM);
                    r639_currentGlyph.include(r639_df.markSet.e());
                    r639_currentGlyph.include(r586_turnMShapeBody(r639_df, r313_XH));
                    r639_currentGlyph.ejectTagged("serifLT");
                    r639_currentGlyph.include(r313_CyrDescender.rSideJut(r639_df.rightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("refSw", r639_df.mvs)));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/shwe.italic." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r648_currentGlyph) {
                    var _r648_t0, _r648_t1;
                    var r648_df = r648_currentGlyph.include(r313_dfM);
                    r648_currentGlyph.include(r648_df.markSet.p());
                    r648_currentGlyph.include(r586_turnMShapeBody(r648_df, r313_XH));
                    r648_currentGlyph.ejectTagged("serifLT");
                    r648_currentGlyph.include(r313_CyrCurlDescender.rSideJut(r648_df.rightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("refSw", r648_df.mvs)));
                    return void 0;
                }))) : void 0) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("turnm", 623, new r313_xn$NamedParameterPair$2Lrc9b("follow", r313_xn$conditionalfollow$7VZA(r313_MEnoughSpaceForFullSerifs(r313_dfM), "uu", "uu/reduced")));
        r313_xn$selectvariant$7Hrq("turnm/reduced", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "turnm"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "uu/reduced"));
        r313_xn$selectvariant$7Hrq("turnmCap", 412, new r313_xn$NamedParameterPair$2Lrc9b("follow", "uu"));
        r313_xn$selectvariant$7Hrq("turnmLongLeg", 624, new r313_xn$NamedParameterPair$2Lrc9b("follow", r313_xn$conditionalfollow$7VZA(r313_MEnoughSpaceForFullSerifs(r313_dfM), "uuLongLeg", "uuLongLeg/reduced")));
        r313_xn$selectvariant$7Hrq("turnmLongLeg/reduced", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "turnmLongLeg"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "uuLongLeg/reduced"));
        r313_xn$selectvariant$7Hrq("turnmSideways", 7455, new r313_xn$NamedParameterPair$2Lrc9b("follow", r313_xn$conditionalfollow$7VZA(r313_MEnoughSpaceForFullSerifs(r313_dfM), "uu", "uu/reduced")));
        r313_xn$selectvariant$7Hrq("UNotch", 122748, new r313_xn$NamedParameterPair$2Lrc9b("follow", "U"));
        r313_xn$selectvariant$7Hrq("uNotch", 122749, new r313_xn$NamedParameterPair$2Lrc9b("follow", "u"));
        r313_xn$selectvariant$7Hrq("cyrl/sha.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "turnm"), new r313_xn$NamedParameterPair$2Lrc9b("follow", r313_xn$conditionalfollow$7VZA(r313_MEnoughSpaceForFullSerifs(r313_dfM), "cyrl/sha.italic", "cyrl/sha.italic/reduced")));
        r313_xn$selectvariant$7Hrq("cyrl/sha/reduced.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "turnm"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/sha.italic/reduced"));
        r313_xn$selectvariant$7Hrq("cyrl/shcha.italic", new r313_xn$NamedParameterPair$2Lrc9b("follow", r313_xn$conditionalfollow$7VZA(r313_MEnoughSpaceForFullSerifs(r313_dfM), "cyrl/shcha.italic", "cyrl/shcha.italic/reduced")));
        r313_xn$selectvariant$7Hrq("cyrl/shcha/reduced.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/shcha.italic"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/shcha.italic/reduced"));
        r313_xn$selectvariant$7Hrq("cyrl/shwe.italic", new r313_xn$NamedParameterPair$2Lrc9b("follow", r313_xn$conditionalfollow$7VZA(r313_MEnoughSpaceForFullSerifs(r313_dfM), "cyrl/shcha.italic", "cyrl/shcha.italic/reduced")));
        r313_alias("cyrl/sha.BGR", null, "cyrl/sha.italic");
        r313_alias("cyrl/sha/reduced.BGR", null, "cyrl/sha/reduced.italic");
        r313_alias("cyrl/shcha.BGR", null, "cyrl/shcha.italic");
        r313_alias("cyrl/shcha/reduced.BGR", null, "cyrl/shcha/reduced.italic");
        r313_xn$derivecomposites$7Hrq("cyrl/te.SRB", null, "cyrl/sha.italic", "cyrl/te.SRB/overlineAbove");
        r313_xn$derivecomposites$7Hrq("cyrl/te/reduced.SRB", null, "cyrl/sha/reduced.italic", "cyrl/te.SRB/overlineAbove");
        var _r313_t17 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t17.BBS;
        var r313_BBD = _r313_t17.BBD;
        var r313_BBBarLeft = _r313_t17.BBBarLeft;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/m", 120158, new r313_xn$Capture$2Lrc8.GlyphProc(function (r676_currentGlyph) {
            var _r676_t0, _r676_t1;
            var r676_df = r676_currentGlyph.include(r313_DivFrame(1, 3));
            r676_currentGlyph.include(r676_df.markSet.e());
            var r676_bbs = Math.min(r313_BBS, r313_AdviceStroke(8));
            var r676_bbd = r313_BBD * Math.min(0.75, r676_bbs / r313_BBS);
            var r676_xMid = r1_mix(r676_df.leftSB + r676_bbd + r313_HSwToV(r676_bbs), r676_df.rightSB, 0.5);
            r676_currentGlyph.include(r313_BBBarLeft(r676_df.leftSB, 0, r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("bbd", r676_bbd), new r313_xn$NamedParameterPair$2Lrc9b("bbs", r676_bbs)));
            r676_currentGlyph.include(r313_union(r313_HBar.b(r676_xMid - r676_bbd, r676_xMid, 0, r676_bbs), r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("stroke", r676_bbs), new r313_xn$NamedParameterPair$2Lrc9b("left", r676_df.leftSB + r676_bbd + r313_HSwToV(r676_bbs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r676_xMid), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine)), r313_intersection(r313_VBar.r(r676_xMid - r676_bbd, 0, r313_XH, r676_bbs), r313_nShoulder.mask(new r313_xn$NamedParameterPair$2Lrc9b("stroke", r676_bbs), new r313_xn$NamedParameterPair$2Lrc9b("left", r676_df.leftSB + r676_bbd + r313_HSwToV(r676_bbs) + 1), new r313_xn$NamedParameterPair$2Lrc9b("right", r676_xMid - 1), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH - 1), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine)))));
            r676_currentGlyph.include(r313_union(r313_HBar.b(r676_df.rightSB - r676_bbd, r676_df.rightSB, 0, r676_bbs), r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("leftY0", 0), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r676_bbs), new r313_xn$NamedParameterPair$2Lrc9b("left", r676_xMid), new r313_xn$NamedParameterPair$2Lrc9b("right", r676_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine)), r313_intersection(r313_VBar.r(r676_df.rightSB - r676_bbd, 0, r313_XH, r676_bbs), r313_nShoulder.mask(new r313_xn$NamedParameterPair$2Lrc9b("stroke", r676_bbs), new r313_xn$NamedParameterPair$2Lrc9b("left", r676_xMid + 1), new r313_xn$NamedParameterPair$2Lrc9b("right", r676_df.rightSB - 1), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH - 1), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine)))));
            return void 0;
        }));
    });
    return void 0;
});


