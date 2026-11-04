"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r449_t) {
    var r449_n, r449_i, r449_a, _r449_t3, _r449_t4, _r449_t5, _r449_t6, _r449_t7, _r449_t8, _r449_t9, _r449_t10, _r449_t11, _r449_t12, _r449_t13, _r449_t14, _r449_t15, _r449_t16, _r449_t17, _r449_t18, _r449_t19, _r449_t20, _r449_t21, _r449_t22, _r449_t23, _r449_t24, _r449_t25, _r449_t26;
    var _r449_t0 = function () {
        _r449_t7 = function (_r449_t8) {
            _r449_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r449_t8
            };
        };
        _r449_t9 = r449_t instanceof Array;
        if (_r449_t9) {
            _r449_t10 = r449_n = r449_t.length;
            _r449_t11 = r449_i = 0;
            _r449_t12 = function (_r449_t14) {
                return _r449_t7(_r449_t14);
            };
            _r449_t13 = function (_r449_t15) {
                _r449_t16 = r449_i < r449_n;
                if (_r449_t16) {
                    _r449_t0 = function (_r449_t17) {
                        return _r449_t13(r449_i = r449_i + 1);
                    };
                    return {
                        "value": [r449_i, r449_t[r449_i]],
                        "done": false
                    };
                } else return _r449_t12(_r449_t15);
            };
            return _r449_t13();
        } else {
            _r449_t18 = r449_a = Object.keys(r449_t);
            _r449_t19 = r449_n = r449_a.length;
            _r449_t20 = r449_i = 0;
            _r449_t21 = function (_r449_t23) {
                return _r449_t7(_r449_t23);
            };
            _r449_t22 = function (_r449_t24) {
                _r449_t25 = r449_i < r449_n;
                if (_r449_t25) {
                    _r449_t0 = function (_r449_t26) {
                        return _r449_t22(r449_i = r449_i + 1);
                    };
                    return {
                        "value": [r449_a[r449_i], r449_t[r449_a[r449_i]]],
                        "done": false
                    };
                } else return _r449_t21(_r449_t24);
            };
            return _r449_t22();
        }
    };
    var _r449_t1 = function (x) {
        try {
            return _r449_t0(x);
        } catch (ex) {
            return _r449_t2(ex);
        }
    };
    var _r449_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r449_t3 = this; else {
        _r449_t4 = function () {
            void 0;
        };
        _r449_t4.prototype = _r1_t10.prototype;
        _r449_t3 = new _r449_t4();
    }
    _r449_t3[Symbol.iterator] = function () {
        return _r449_t3;
    };
    _r449_t3.next = _r449_t1;
    _r449_t3.throw = function (x) {
        return _r449_t2(x);
    };
    return _r449_t3;
};
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Che", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_doST, r313_doSB, r313_body, r313_slabUpright, r313_slabUprightBGR, r313_slabItalic, _r313_t13, _r313_t16, _r313_t17, _r313_t18, _r313_t19, _r313_tag20, _r313_t21, _r313_tag22;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_OX = _r313_t1.OX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_MidJutSide = _r313_t1.MidJutSide;
        var r313_VJut = _r313_t1.VJut;
        var r313_LongVJut = _r313_t1.LongVJut;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_VBar = _r313_t5.VBar;
        var r313_Arch = _r313_t5.Arch;
        var r313_FlipAround = _r313_t5.FlipAround;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t8.CreateAccentedComposition;
        var r313_CreateSelectorVariants = _r313_t8.CreateSelectorVariants;
        var r313_DefineSelectorGlyph = _r313_t8.DefineSelectorGlyph;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t9.SerifFrame;
        var r313_RightwardTailedBar = _r313_t9.RightwardTailedBar;
        var r313_CyrDescender = _r313_t9.CyrDescender;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r320_t0, _r320_t1;
            return {
                "BODY": r313_BODY
            };
        });
        var r313_BODY = {
            "STRAIGHT": 0,
            "TAILED": 1
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r322_t0, _r322_t1;
            return {
                "SERIFS": r313_SERIFS
            };
        });
        var r313_SERIFS = {
            "NONE": 0,
            "TL": 1,
            "BR": 2,
            "TL-BR": 3,
            "ALL": 4,
            "TOP": 5,
            "ALL-BGR": 6,
            "TOP-BGR": 7
        };
        var r313_CheBowl = function () {
            var _r324_t5;
            var _r324_t6 = arguments;
            var r324_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r324_t6, 0);
            var _r324_t0 = [];
            var _r324_t1 = 0;
            while (_r324_t1 < r324_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r324_xn$flexarguments$2Lrc7uIe5[_r324_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r324_t0.push(r324_xn$flexarguments$2Lrc7uIe5[_r324_t1]);
                _r324_t1 = _r324_t1 + 1;
            }
            var _r324_t2 = r324_xn$flexarguments$2Lrc7uIe5;
            var _r324_t3 = _r324_t2.length;
            var _r324_t4 = 0;
            while (_r324_t4 < _r324_t3) {
                _r324_t1 = _r324_t2[_r324_t4];
                if (_r324_t1 && _r324_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r324_t1.left === "left") r324_left = _r324_t1.right;
                if (_r324_t1 && _r324_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r324_t1.left === "right") r324_right = _r324_t1.right;
                if (_r324_t1 && _r324_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r324_t1.left === "top") r324_top = _r324_t1.right;
                if (_r324_t1 && _r324_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r324_t1.left === "bottom") r324_bottom = _r324_t1.right;
                if (_r324_t1 && _r324_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r324_t1.left === "ada") r324_ada = _r324_t1.right;
                if (_r324_t1 && _r324_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r324_t1.left === "adb") r324_adb = _r324_t1.right;
                if (_r324_t1 && _r324_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r324_t1.left === "stroke") r324_stroke = _r324_t1.right;
                _r324_t4 = _r324_t4 + 1;
            }
            var r324_left = r1_fallback(r324_left, _r324_t0[0]);
            var r324_right = r1_fallback(r324_right, _r324_t0[1]);
            var r324_top = r1_fallback(r324_top, _r324_t0[2]);
            var r324_bottom = r1_fallback(r324_bottom, _r324_t0[3]);
            var r324_ada = r1_fallback(r324_ada, _r324_t0[4], r313_ArchDepthA);
            var r324_adb = r1_fallback(r324_adb, _r324_t0[5], r313_ArchDepthB);
            var r324_stroke = r1_fallback(r324_stroke, _r324_t0[6], r313_Stroke);
            var r324_xMid = r1_mix(r324_left, r324_right, 0.5) + r313_HSwToV(0.2 * r324_stroke);
            var r324_rise = r313_DToothlessRise + 0.25 * r324_stroke;
            return r313_dispiro(r313_widths.lhs(r324_stroke), r313_flat(r324_left, r324_top, r313_heading(r313_Downward)), r313_curl(r324_left, Math.min(r324_bottom + r324_adb, r324_top - r313_TINY)), r313_Arch.lhs.centerAt.ltr.b(r324_xMid, r324_bottom, new r313_xn$NamedParameterPair$2Lrc9b("sw", r324_stroke)), r313_g4(r324_right, r324_bottom + r324_rise));
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r330_t0, _r330_t1;
            return {
                "CyrCheShape": r313_CyrCheShape
            };
        });
        var r313_CyrCheShape = function () {
            var _r331_t5;
            var _r331_t6 = arguments;
            var r331_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r331_t6, 0);
            var _r331_t0 = [];
            var _r331_t1 = 0;
            while (_r331_t1 < r331_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r331_xn$flexarguments$2Lrc7uIe5[_r331_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r331_t0.push(r331_xn$flexarguments$2Lrc7uIe5[_r331_t1]);
                _r331_t1 = _r331_t1 + 1;
            }
            var _r331_t2 = r331_xn$flexarguments$2Lrc7uIe5;
            var _r331_t3 = _r331_t2.length;
            var _r331_t4 = 0;
            while (_r331_t4 < _r331_t3) {
                _r331_t1 = _r331_t2[_r331_t4];
                if (_r331_t1 && _r331_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "df") r331_df = _r331_t1.right;
                if (_r331_t1 && _r331_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "top") r331_top = _r331_t1.right;
                if (_r331_t1 && _r331_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "pyBar") r331_pyBar = _r331_t1.right;
                if (_r331_t1 && _r331_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "bodyType") r331_bodyType = _r331_t1.right;
                if (_r331_t1 && _r331_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "slabType") r331_slabType = _r331_t1.right;
                if (_r331_t1 && _r331_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r331_t1.left === "sw") r331_sw = _r331_t1.right;
                _r331_t4 = _r331_t4 + 1;
            }
            var r331_df = r1_fallback(r331_df, _r331_t0[0]);
            var r331_top = r1_fallback(r331_top, _r331_t0[1]);
            var r331_pyBar = r1_fallback(r331_pyBar, _r331_t0[2]);
            var r331_bodyType = r1_fallback(r331_bodyType, _r331_t0[3]);
            var r331_slabType = r1_fallback(r331_slabType, _r331_t0[4]);
            var r331_sw = r1_fallback(r331_sw, _r331_t0[5], r331_df.mvs);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                var r337___, _r337_t0, _r337_t1, _r337_t2, _r337_t3, _r337_t4, _r337_t5;
                var r337_yBar = r1_mix(0, r331_top, r1_fallback(r331_pyBar, 0.5));
                r337_currentGlyph.include(r313_tagged("strokeR", (_r337_t0 = r331_bodyType, _r337_t0 === r313_BODY.TAILED ? r313_RightwardTailedBar(r331_df.rightSB, 0, r331_top, r331_sw) : (r337___ = _r337_t0, r313_VBar.r(r331_df.rightSB, 0, r331_top, r331_sw)))));
                r337_currentGlyph.include(r313_CheBowl(new r313_xn$NamedParameterPair$2Lrc9b("left", r331_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r331_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("top", r331_top), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r337_yBar - r331_sw / 2), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r331_sw)));
                var r337_sf = r313_SerifFrame.fromDf(r331_df, r331_top, 0);
                r337_currentGlyph.include(r313_tagged("serifLT", (_r337_t1 = r331_slabType, _r337_t1 === r313_SERIFS.ALL ? r337_sf.lt.full : _r337_t1 === r313_SERIFS.TOP ? r337_sf.lt.full : _r337_t1 === r313_SERIFS["ALL-BGR"] ? r337_sf.lt.outer : _r337_t1 === r313_SERIFS["TOP-BGR"] ? r337_sf.lt.outer : _r337_t1 === r313_SERIFS["TL-BR"] ? r337_sf.lt.outer : _r337_t1 === r313_SERIFS.TL ? r337_sf.lt.outer : (r337___ = _r337_t1, new r313_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                    var _r347_t0, _r347_t1;
                    return void 0;
                })))));
                r337_currentGlyph.include(r313_tagged("SerifRT", (_r337_t2 = r331_slabType, _r337_t2 === r313_SERIFS.ALL ? r337_sf.rt.full : _r337_t2 === r313_SERIFS.TOP ? r337_sf.rt.full : _r337_t2 === r313_SERIFS["ALL-BGR"] ? r337_sf.rt.inner : _r337_t2 === r313_SERIFS["TOP-BGR"] ? r337_sf.rt.inner : (r337___ = _r337_t2, new r313_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                    var _r350_t0, _r350_t1;
                    return void 0;
                })))));
                r337_currentGlyph.include(r313_tagged("SerifRB", (_r337_t3 = r331_slabType, _r337_t3 === r313_SERIFS.ALL ? r337_sf.rb.fullSide : _r337_t3 === r313_SERIFS["ALL-BGR"] ? r337_sf.rb.fullSide : _r337_t3 === r313_SERIFS["TL-BR"] ? r337_sf.rb.outer : _r337_t3 === r313_SERIFS.BR ? r337_sf.rb.outer : (r337___ = _r337_t3, new r313_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                    var _r353_t0, _r353_t1;
                    return void 0;
                })))));
                return void 0;
            });
        };
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-M"].resolve();
        var r313_EarlessCornerDoubleArchSmallMShape = _r313_t10.EarlessCornerDoubleArchSmallMShape;
        var r313_CyrCcheShape = function () {
            var _r355_t5;
            var _r355_t6 = arguments;
            var r355_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r355_t6, 0);
            var _r355_t0 = [];
            var _r355_t1 = 0;
            while (_r355_t1 < r355_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r355_xn$flexarguments$2Lrc7uIe5[_r355_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r355_t0.push(r355_xn$flexarguments$2Lrc7uIe5[_r355_t1]);
                _r355_t1 = _r355_t1 + 1;
            }
            var _r355_t2 = r355_xn$flexarguments$2Lrc7uIe5;
            var _r355_t3 = _r355_t2.length;
            var _r355_t4 = 0;
            while (_r355_t4 < _r355_t3) {
                _r355_t1 = _r355_t2[_r355_t4];
                if (_r355_t1 && _r355_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "df") r355_df = _r355_t1.right;
                if (_r355_t1 && _r355_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "top") r355_top = _r355_t1.right;
                if (_r355_t1 && _r355_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "pyBar") r355_pyBar = _r355_t1.right;
                if (_r355_t1 && _r355_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "bodyType") r355_bodyType = _r355_t1.right;
                if (_r355_t1 && _r355_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "slabType") r355_slabType = _r355_t1.right;
                if (_r355_t1 && _r355_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "sw") r355_sw = _r355_t1.right;
                _r355_t4 = _r355_t4 + 1;
            }
            var r355_df = r1_fallback(r355_df, _r355_t0[0]);
            var r355_top = r1_fallback(r355_top, _r355_t0[1]);
            var r355_pyBar = r1_fallback(r355_pyBar, _r355_t0[2]);
            var r355_bodyType = r1_fallback(r355_bodyType, _r355_t0[3]);
            var r355_slabType = r1_fallback(r355_slabType, _r355_t0[4]);
            var r355_sw = r1_fallback(r355_sw, _r355_t0[5], r355_df.mvs);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                var r361___, _r361_t0, _r361_t1, _r361_t2, _r361_t3, _r361_t4, _r361_t5, _r361_t6;
                var r361_yBar = r1_mix(0, r355_top, r1_fallback(r355_pyBar, 0.5));
                r361_currentGlyph.include(r313_tagged("strokeR", (_r361_t0 = r355_bodyType, _r361_t0 === r313_BODY.TAILED ? r313_RightwardTailedBar(r355_df.rightSB, 0, r355_top, r355_sw) : (r361___ = _r361_t0, r313_VBar.r(r355_df.rightSB, 0, r355_top, r355_sw)))));
                r361_currentGlyph.include(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                    var _r366_t0, _r366_t1;
                    r366_currentGlyph.include(r313_EarlessCornerDoubleArchSmallMShape(r355_df, r355_top - (r361_yBar - r355_sw / 2), 0, 0, 0));
                    r366_currentGlyph.ejectTagged("barL");
                    r366_currentGlyph.include(r313_FlipAround(r355_df.middle, r355_top / 2));
                    return void 0;
                })));
                var r361_sf = r313_SerifFrame.fromDf(r355_df, r355_top, 0);
                r361_currentGlyph.include(r313_tagged("serifLT", (_r361_t1 = r355_slabType, _r361_t1 === r313_SERIFS.ALL ? r361_sf.enoughSpaceForFullSerifs ? r361_sf.lt.full : r361_sf.lt.outer : _r361_t1 === r313_SERIFS.TOP ? r361_sf.enoughSpaceForFullSerifs ? r361_sf.lt.full : r361_sf.lt.outer : _r361_t1 === r313_SERIFS["TL-BR"] ? r361_sf.lt.outer : _r361_t1 === r313_SERIFS.TL ? r361_sf.lt.outer : (r361___ = _r361_t1, new r313_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                    var _r372_t0, _r372_t1;
                    return void 0;
                })))));
                r361_currentGlyph.include(r313_tagged("serifMT", (_r361_t2 = r355_slabType, _r361_t2 === r313_SERIFS.ALL ? r361_sf.enoughSpaceForFullSerifs ? r361_sf.mt.full : new r313_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
                    var _r379_t0, _r379_t1;
                    return void 0;
                }) : _r361_t2 === r313_SERIFS.TOP ? r361_sf.enoughSpaceForFullSerifs ? r361_sf.mt.full : new r313_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                    var _r377_t0, _r377_t1;
                    return void 0;
                }) : (r361___ = _r361_t2, new r313_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                    var _r375_t0, _r375_t1;
                    return void 0;
                })))));
                r361_currentGlyph.include(r313_tagged("SerifRT", (_r361_t3 = r355_slabType, _r361_t3 === r313_SERIFS.ALL ? r361_sf.enoughSpaceForFullSerifs ? r361_sf.rt.full : r361_sf.rt.outer : _r361_t3 === r313_SERIFS.TOP ? r361_sf.enoughSpaceForFullSerifs ? r361_sf.rt.full : r361_sf.rt.outer : (r361___ = _r361_t3, new r313_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                    var _r382_t0, _r382_t1;
                    return void 0;
                })))));
                r361_currentGlyph.include(r313_tagged("SerifRB", (_r361_t4 = r355_slabType, _r361_t4 === r313_SERIFS.ALL ? r361_sf.rb.fullSide : _r361_t4 === r313_SERIFS["TL-BR"] ? r361_sf.rb.outer : _r361_t4 === r313_SERIFS.BR ? r361_sf.rb.outer : (r361___ = _r361_t4, new r313_xn$Capture$2Lrc8.GlyphProc(function (r385_currentGlyph) {
                    var _r385_t0, _r385_t1;
                    return void 0;
                })))));
                return void 0;
            });
        };
        var r313_CyrTcheShape = function () {
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
                if (_r386_t1 && _r386_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r386_t1.left === "df") r386_df = _r386_t1.right;
                if (_r386_t1 && _r386_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r386_t1.left === "top") r386_top = _r386_t1.right;
                if (_r386_t1 && _r386_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r386_t1.left === "pyBar") r386_pyBar = _r386_t1.right;
                if (_r386_t1 && _r386_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r386_t1.left === "bodyType") r386_bodyType = _r386_t1.right;
                if (_r386_t1 && _r386_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r386_t1.left === "slabType") r386_slabType = _r386_t1.right;
                if (_r386_t1 && _r386_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r386_t1.left === "sw") r386_sw = _r386_t1.right;
                if (_r386_t1 && _r386_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r386_t1.left === "teSerifs") r386_teSerifs = _r386_t1.right;
                _r386_t4 = _r386_t4 + 1;
            }
            var r386_df = r1_fallback(r386_df, _r386_t0[0]);
            var r386_top = r1_fallback(r386_top, _r386_t0[1]);
            var r386_pyBar = r1_fallback(r386_pyBar, _r386_t0[2]);
            var r386_bodyType = r1_fallback(r386_bodyType, _r386_t0[3]);
            var r386_slabType = r1_fallback(r386_slabType, _r386_t0[4]);
            var r386_sw = r1_fallback(r386_sw, _r386_t0[5], r313_AdviceStroke(2.75));
            var r386_teSerifs = r1_fallback(r386_teSerifs, _r386_t0[6], r313_SLAB);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r392_currentGlyph) {
                var r392___, r392_swVJut, _r392_t0, _r392_t1, _r392_t2, _r392_t3, _r392_t4;
                var r392_yBar = r1_mix(0, r386_top, r1_fallback(r386_pyBar, 0.5));
                var r392_left = r1_mix(r386_df.leftSB, r386_df.rightSB, r386_df.adws > 1 ? 0.25 : 0.2) - r313_HSwToV(0.25 * r386_sw) + r313_OX;
                var r392_right = r386_df.rightSB - r313_OX;
                r392_currentGlyph.include(r313_tagged("strokeR", (_r392_t0 = r386_bodyType, _r392_t0 === r313_BODY.TAILED ? r313_RightwardTailedBar(r392_right, 0, r386_top, r386_sw) : (r392___ = _r392_t0, r313_VBar.r(r392_right, 0, r386_top, r386_sw)))));
                r392_currentGlyph.include(r313_CheBowl(new r313_xn$NamedParameterPair$2Lrc9b("left", r392_left), new r313_xn$NamedParameterPair$2Lrc9b("right", r392_right), new r313_xn$NamedParameterPair$2Lrc9b("top", r386_top), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r392_yBar - r386_sw / 2), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r386_sw)));
                var r392_xTopBarLeft = r386_df.leftSB - r313_SideJut;
                var r392_xTopBarRight = r1_mix(r392_xTopBarLeft, r392_left + r313_HSwToV(0.5 * r386_sw), 2);
                r392_currentGlyph.include(r313_dispiro(r313_widths.rhs(r386_sw), r313_flat(r392_xTopBarLeft, r386_top, r386_teSerifs ? r313_heading(r313_Rightward) : null), r313_curl(r392_xTopBarRight, r386_top, r386_teSerifs ? r313_heading(r313_Rightward) : null)));
                var r392_sf = r313_SerifFrame(r386_top, 0, r392_left, r392_right, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r386_sw));
                r392_currentGlyph.include(r313_tagged("SerifRT", (_r392_t1 = r386_slabType, _r392_t1 === r313_SERIFS.ALL ? r392_sf.rt.outer : _r392_t1 === r313_SERIFS.TOP ? r392_sf.rt.outer : (r392___ = _r392_t1, new r313_xn$Capture$2Lrc8.GlyphProc(function (r404_currentGlyph) {
                    var _r404_t0, _r404_t1;
                    return void 0;
                })))));
                r392_currentGlyph.include(r313_tagged("SerifRB", (_r392_t2 = r386_slabType, _r392_t2 === r313_SERIFS.ALL ? r392_sf.rb.fullSide : _r392_t2 === r313_SERIFS["TL-BR"] ? r392_sf.rb.outer : _r392_t2 === r313_SERIFS.BR ? r392_sf.rb.outer : (r392___ = _r392_t2, new r313_xn$Capture$2Lrc8.GlyphProc(function (r407_currentGlyph) {
                    var _r407_t0, _r407_t1;
                    return void 0;
                })))));
                if (r386_teSerifs) {
                    r392_swVJut = Math.min(r313_VJutStroke * (r386_sw / r313_Stroke), r313_VSwToH(0.625 * (r392_left - r392_xTopBarLeft)));
                    r392_currentGlyph.include(r313_VSerif.dl(r392_xTopBarLeft, r386_top, r313_VJut, r392_swVJut));
                    r392_currentGlyph.include(r313_VSerif.dr(r392_xTopBarRight, r386_top, r313_VJut, r392_swVJut));
                }
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Che", 1063, new r313_xn$Capture$2Lrc8.GlyphProc(function (r412_currentGlyph) {
            var _r412_t0, _r412_t1;
            r412_currentGlyph.include(r313_MarkSet.capital());
            r412_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r313_RightSB));
            r412_currentGlyph.include(r313_CyrCheShape(r313_DivFrame(1), r313_CAP, r313_SLAB ? 0.45 : 0.35, r313_BODY.STRAIGHT, r313_SLAB ? r313_SERIFS.ALL : r313_SERIFS.NONE));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Cche", 42630, new r313_xn$Capture$2Lrc8.GlyphProc(function (r418_currentGlyph) {
            var _r418_t0, _r418_t1;
            var r418_df = r418_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
            r418_currentGlyph.include(r418_df.markSet.capital());
            r418_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r418_df.rightSB));
            r418_currentGlyph.include(r313_CyrCcheShape(r418_df, r313_CAP, r313_SLAB ? 0.45 : 0.35, r313_BODY.STRAIGHT, r313_SLAB ? r313_SERIFS.ALL : r313_SERIFS.NONE));
            return void 0;
        }));
        var r313_TcheConfig = {
            "serifless": [false, false],
            "motionSerifed": [true, false]
        };
        var _r313_t11 = Object.entries(r313_TcheConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_doST = _r313_t13[1][0];
            r313_doSB = _r313_t13[1][1];
            _r313_t13[1];
            (function () {
                return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Tche." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r428_currentGlyph) {
                    var _r428_t0, _r428_t1;
                    var r428_df = r428_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT));
                    r428_currentGlyph.include(r428_df.markSet.capital());
                    r428_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r428_df.rightSB));
                    r428_currentGlyph.include(r313_CyrTcheShape(r428_df, r313_CAP, r313_SLAB ? 0.45 : 0.35, r313_BODY.STRAIGHT, r313_SLAB ? r313_SERIFS.ALL : r313_SERIFS.NONE, new r313_xn$NamedParameterPair$2Lrc9b("teSerifs", r313_doST)));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("cyrl/Tche", 42642, new r313_xn$NamedParameterPair$2Lrc9b("follow", "T/rTailBase"));
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/CheDescender", 1206, new r313_xn$Capture$2Lrc8.GlyphProc(function (r437_currentGlyph) {
            var _r437_t0, _r437_t1;
            r437_currentGlyph.include(r313_xn$referglyph$1aao("cyrl/Che"), true, true);
            r437_currentGlyph.include(r313_CyrDescender.rSideJut(r313_RightSB, 0));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/kha/Che", 1227, new r313_xn$Capture$2Lrc8.GlyphProc(function (r442_currentGlyph) {
            var _r442_t0, _r442_t1;
            r442_currentGlyph.include(r313_xn$referglyph$1aao("cyrl/Che"), true, true);
            r442_currentGlyph.include(r313_CyrDescender.lSideJut(r313_RightSB - r313_HSwToV(r313_Stroke), 0, new r313_xn$NamedParameterPair$2Lrc9b("jut", r313_MidJutSide)));
            return void 0;
        }));
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r447_t0, _r447_t1;
            return {
                "ItalicConfig": r313_ItalicConfig
            };
        });
        var r313_ItalicConfig = {
            "standard": [r313_BODY.STRAIGHT, r313_SERIFS.ALL, r313_SERIFS["ALL-BGR"], r313_SERIFS["TL-BR"]],
            "tailed": [r313_BODY.TAILED, r313_SERIFS.TOP, r313_SERIFS["TOP-BGR"], r313_SERIFS.TL]
        };
        var _r313_t14 = _r1_t2(r313_ItalicConfig)[Symbol.iterator]();
        var _r313_t15 = void 0;
        while (!(_r313_t15 = _r313_t14.next()).done) {
            _r313_t16 = _r313_t15.value;
            r313_suffix = _r313_t16[0];
            r313_body = _r313_t16[1][0];
            r313_slabUpright = _r313_t16[1][1];
            r313_slabUprightBGR = _r313_t16[1][2];
            r313_slabItalic = _r313_t16[1][3];
            _r313_t16[1];
            (function () {
                var r452_suffixTe, r452_doST, r452_doSB, _r452_t2, _r452_t3, _r452_tag4;
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/che." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r455_currentGlyph) {
                    var _r455_t0, _r455_t1;
                    r455_currentGlyph.include(r313_MarkSet.e());
                    r455_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r313_RightSB));
                    r455_currentGlyph.include(r313_CyrCheShape(r313_DivFrame(1), r313_XH, r313_SLAB ? 0.45 : 0.4, r313_body, r313_SLAB ? r313_para.isItalic ? r313_slabItalic : r313_slabUpright : r313_SERIFS.NONE));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/che.BGR." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r461_currentGlyph) {
                    var _r461_t0, _r461_t1;
                    r461_currentGlyph.include(r313_MarkSet.e());
                    r461_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r313_RightSB));
                    r461_currentGlyph.include(r313_CyrCheShape(r313_DivFrame(1), r313_XH, r313_SLAB ? 0.45 : 0.4, r313_body, r313_SLAB ? r313_para.isItalic ? r313_slabItalic : r313_slabUprightBGR : r313_SERIFS.NONE));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/cche." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r467_currentGlyph) {
                    var _r467_t0, _r467_t1;
                    var r467_df = r467_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r467_currentGlyph.include(r467_df.markSet.e());
                    r467_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r467_df.rightSB));
                    r467_currentGlyph.include(r313_CyrCcheShape(r467_df, r313_XH, r313_SLAB ? 0.45 : 0.4, r313_body, r313_SLAB ? r313_para.isItalic ? r313_slabItalic : r313_slabUpright : r313_SERIFS.NONE));
                    return void 0;
                }));
                var r452_cyrTcheDf = r313_DivFrame(r313_para.advanceScaleT);
                r313_DefineSelectorGlyph("cyrl/tche.upright", r313_suffix, r452_cyrTcheDf, "e");
                var _r452_t0 = Object.entries(r313_TcheConfig)[Symbol.iterator]();
                var _r452_t1 = void 0;
                while (!(_r452_t1 = _r452_t0.next()).done) {
                    _r452_t2 = _r452_t1.value;
                    r452_suffixTe = _r452_t2[0];
                    r452_doST = _r452_t2[1][0];
                    r452_doSB = _r452_t2[1][1];
                    _r452_t2[1];
                    (function () {
                        return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tche.upright." + r313_suffix + "." + r452_suffixTe, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r477_currentGlyph) {
                            var _r477_t0, _r477_t1;
                            r477_currentGlyph.setWidth(0);
                            r477_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r477_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r452_cyrTcheDf.rightSB));
                            r477_currentGlyph.include(r313_CyrTcheShape(r452_cyrTcheDf, r313_XH, r313_SLAB ? 0.45 : 0.4, r313_body, r313_SLAB ? r313_para.isItalic ? r313_slabItalic : r313_slabUpright : r313_SERIFS.NONE, new r313_xn$NamedParameterPair$2Lrc9b("teSerifs", r452_doST)));
                            return void 0;
                        }));
                    })();
                }
                return r313_xn$selectvariant$7Hrq("cyrl/tche.upright." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "T/rTailBase"));
            })();
        }
        r313_xn$selectvariant$7Hrq("cyrl/che", 1095);
        r313_xn$selectvariant$7Hrq("cyrl/che.BGR", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/che"));
        r313_xn$selectvariant$7Hrq("cyrl/cche", 42631, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/che"));
        r313_CreateSelectorVariants("cyrl/tche.upright", null, Object.keys(r313_ItalicConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/che"));
        r313_CreateAccentedComposition("cyrl/tche.italic", null, "cyrl/che", "tildeAbove");
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/cheDescender", 1207, new r313_xn$Capture$2Lrc8.GlyphProc(function (r489_currentGlyph) {
            var _r489_t0, _r489_t1;
            r489_currentGlyph.include(r313_xn$referglyph$1aao("cyrl/che.standard"), true, true);
            r489_currentGlyph.include(r313_CyrDescender.rSideJut(r313_RightSB, 0));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/kha/che", 1228, new r313_xn$Capture$2Lrc8.GlyphProc(function (r494_currentGlyph) {
            var _r494_t0, _r494_t1;
            r494_currentGlyph.include(r313_xn$referglyph$1aao("cyrl/che.standard"), true, true);
            r494_currentGlyph.include(r313_CyrDescender.lSideJut(r313_RightSB - r313_HSwToV(r313_Stroke), 0, new r313_xn$NamedParameterPair$2Lrc9b("jut", r313_MidJutSide)));
            return void 0;
        }));
        var r313_CheVBarBarShape = function (r498_top, r498_pyBar) {
            var _r498_t0, _r498_t1;
            var r498_SwCheVBar = Math.min(r313_OverlayStroke, r313_VSwToH(0.625 * (r313_RightSB - r313_SB - r313_HSwToV(2 * r313_Stroke))));
            var r498_yc = r1_mix(0, r498_top, r1_fallback(r498_pyBar, 0.5)) + r313_Stroke * 0.1;
            return r313_VBar.m(r313_Middle, r498_yc + r313_LongVJut * 0.8, r498_yc - r313_LongVJut * 0.8, r498_SwCheVBar);
        };
        r313_xn$derivecomposites$7Hrq("cyrl/CheVBar", 1208, "cyrl/Che", r313_CheVBarBarShape(r313_CAP, r313_SLAB ? 0.45 : 0.35));
        return r313_xn$derivecomposites$7Hrq("cyrl/cheVBar", 1209, "cyrl/che", r313_CheVBarBarShape(r313_XH, r313_SLAB ? 0.45 : 0.4));
    });
    return void 0;
});


