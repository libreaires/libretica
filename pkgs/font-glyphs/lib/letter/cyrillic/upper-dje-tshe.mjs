"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r319_t) {
    var r319_n, r319_i, r319_a, _r319_t3, _r319_t4, _r319_t5, _r319_t6, _r319_t7, _r319_t8, _r319_t9, _r319_t10, _r319_t11, _r319_t12, _r319_t13, _r319_t14, _r319_t15, _r319_t16, _r319_t17, _r319_t18, _r319_t19, _r319_t20, _r319_t21, _r319_t22, _r319_t23, _r319_t24, _r319_t25, _r319_t26;
    var _r319_t0 = function () {
        _r319_t7 = function (_r319_t8) {
            _r319_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r319_t8
            };
        };
        _r319_t9 = r319_t instanceof Array;
        if (_r319_t9) {
            _r319_t10 = r319_n = r319_t.length;
            _r319_t11 = r319_i = 0;
            _r319_t12 = function (_r319_t14) {
                return _r319_t7(_r319_t14);
            };
            _r319_t13 = function (_r319_t15) {
                _r319_t16 = r319_i < r319_n;
                if (_r319_t16) {
                    _r319_t0 = function (_r319_t17) {
                        return _r319_t13(r319_i = r319_i + 1);
                    };
                    return {
                        "value": [r319_i, r319_t[r319_i]],
                        "done": false
                    };
                } else return _r319_t12(_r319_t15);
            };
            return _r319_t13();
        } else {
            _r319_t18 = r319_a = Object.keys(r319_t);
            _r319_t19 = r319_n = r319_a.length;
            _r319_t20 = r319_i = 0;
            _r319_t21 = function (_r319_t23) {
                return _r319_t7(_r319_t23);
            };
            _r319_t22 = function (_r319_t24) {
                _r319_t25 = r319_i < r319_n;
                if (_r319_t25) {
                    _r319_t0 = function (_r319_t26) {
                        return _r319_t22(r319_i = r319_i + 1);
                    };
                    return {
                        "value": [r319_a[r319_i], r319_t[r319_a[r319_i]]],
                        "done": false
                    };
                } else return _r319_t21(_r319_t24);
            };
            return _r319_t22();
        }
    };
    var _r319_t1 = function (x) {
        try {
            return _r319_t0(x);
        } catch (ex) {
            return _r319_t2(ex);
        }
    };
    var _r319_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9) _r319_t3 = this; else {
        _r319_t4 = function () {
            void 0;
        };
        _r319_t4.prototype = _r1_t9.prototype;
        _r319_t3 = new _r319_t4();
    }
    _r319_t3[Symbol.iterator] = function () {
        return _r319_t3;
    };
    _r319_t3.next = _r319_t1;
    _r319_t3.throw = function (x) {
        return _r319_t2(x);
    };
    return _r319_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_boole = _r1_t8.boole;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t1 = r1_apply = function () {
    var r307_block, _r307_t4, _r307_t6;
    var _r307_t3 = this;
    var _r307_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r307_t1 = _r307_t0.length;
    var _r307_t2 = 0;
    var _r307_t5 = _r307_t2 < _r307_t1;
    while (_r307_t5) {
        _r307_t6 = (r307_block = _r307_t0[_r307_t2], r307_block(_r307_t3), _r307_t2 = _r307_t2 + 1);
        _r307_t5 = _r307_t2 < _r307_t1;
    }
    return _r307_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r311_xn$Capture_Ext$2Lrc2b) {
    var _r311_t0, _r311_t1;
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Upper-Dje-Tshe", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_doSerifLT, r312_doSerifLB, r312_doSerifRB, _r312_t12, _r312_t13, _r312_t14, _r312_t15, _r312_tag16;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_VSwToH = _r312_t1.VSwToH;
        var r312_O = _r312_t1.O;
        var r312_Hook = _r312_t1.Hook;
        var r312_HookX = _r312_t1.HookX;
        var r312_ArchDepth = _r312_t1.ArchDepth;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_VJutStroke = _r312_t1.VJutStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_StrokeWidthBlend = _r312_t1.StrokeWidthBlend;
        var r312_ArchDepthAOf = _r312_t1.ArchDepthAOf;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
        var r312_ArchDepthAClamped = _r312_t1.ArchDepthAClamped;
        var r312_ArchDepthBClamped = _r312_t1.ArchDepthBClamped;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_tagged = _r312_t5.tagged;
        var r312_VSerif = _r312_t5.VSerif;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r312_EFVJutLength = _r312_t7.EFVJutLength;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_nShoulder = _r312_t8.nShoulder;
        var r312_SerifFrame = _r312_t8.SerifFrame;
        var r312_VerticalHook = _r312_t8.VerticalHook;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Yeri"].resolve();
        var r312_YeriBarPos = _r312_t9.YeriBarPos;
        var r312_HConfig = {
            "serifless": [false, false, false],
            "topLeftSerifed": [true, false, false],
            "topLeftBottomRightSerifed": [true, false, true],
            "serifed": [true, true, true]
        };
        var _r312_t10 = _r1_t2(r312_HConfig)[Symbol.iterator]();
        var _r312_t11 = void 0;
        while (!(_r312_t11 = _r312_t10.next()).done) {
            _r312_t12 = _r312_t11.value;
            r312_suffix = _r312_t12[0];
            r312_doSerifLT = _r312_t12[1][0];
            r312_doSerifLB = _r312_t12[1][1];
            r312_doSerifRB = _r312_t12[1][2];
            _r312_t12[1];
            (function () {
                var r322_fMotion = (r312_doSerifLT || r312_doSerifRB) && !r312_doSerifLB;
                var r322_df = r312_DivFrame(r312_para.advanceScaleT, 2);
                var r322_sw = r322_df.adviceThinnerStroke2(2.75, 3, r312_CAP);
                var r322_xMidBarLeft = Math.max(r322_df.rightSB - (r312_RightSB - r312_SB), r312_doSerifLT ? r1_mix(r322_df.leftSB, r322_df.rightSB, 0.35) - r312_HSwToV(0.5 * r322_sw) : r1_mix(r322_df.leftSB, r322_df.rightSB, 0.2) - r312_HSwToV(0.25 * r322_sw));
                var r322_mockWidth = r322_df.rightSB - r322_xMidBarLeft + r312_SB * 2;
                var r322_mockAdws = r322_mockWidth / r312_Width;
                var r322_archDepth = r312_ArchDepth * r322_mockAdws;
                var r322_yBarTop = r1_mix(0, r312_CAP, r312_YeriBarPos) + r322_sw / 2;
                var r322_mockAda = r312_ArchDepthAOf(r322_archDepth, r322_mockWidth);
                var r322_mockAdb = r312_ArchDepthBOf(r322_archDepth, r322_mockWidth);
                var r322_ada = r312_ArchDepthAClamped(r322_yBarTop, 0, r322_mockAda, r322_mockAdb);
                var r322_adb = r312_ArchDepthBClamped(r322_yBarTop, 0, r322_mockAda, r322_mockAdb);
                var r322_xTopBarLeft = r1_mix(0, r322_df.leftSB, r312_doSerifLT ? 0.25 : 0.375);
                var r322_xTopBarRight = r1_mix(r322_xTopBarLeft, r322_xMidBarLeft + r312_HSwToV(0.5 * r322_sw), 2);
                var r322_sf = r312_SerifFrame(r312_CAP, 0, r322_xMidBarLeft, r322_df.rightSB, new r312_xn$NamedParameterPair$2Lrc9b("swRef", r322_sw), new r312_xn$NamedParameterPair$2Lrc9b("adws", r322_mockAdws));
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Tshe." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                    var r327_jutTop, r327_jutBot, r327_jutMid, r327_swVJut, _r327_t0, _r327_t1, _r327_t2;
                    r327_currentGlyph.setWidth(r322_df.width);
                    r327_currentGlyph.include(r322_df.markSet.capital());
                    r327_currentGlyph.include(r312_VBar.l(r322_xMidBarLeft, 0, r312_CAP, r322_sw));
                    r327_currentGlyph.include(r312_nShoulder.earlessCorner(new r312_xn$NamedParameterPair$2Lrc9b("left", r322_xMidBarLeft), new r312_xn$NamedParameterPair$2Lrc9b("right", r322_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("top", r322_yBarTop), new r312_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r312_xn$NamedParameterPair$2Lrc9b("ada", r322_ada), new r312_xn$NamedParameterPair$2Lrc9b("adb", r322_adb), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r322_sw)));
                    r327_currentGlyph.include(r312_HBar.t(r322_xTopBarLeft, r322_xTopBarRight, r312_CAP, r322_sw));
                    if (r312_doSerifLT) {
                        _r327_t0 = r312_EFVJutLength(r312_CAP, 0, r312_YeriBarPos, r322_sw);
                        r327_jutTop = _r327_t0[0];
                        r327_jutBot = _r327_t0[1];
                        r327_jutMid = _r327_t0[2];
                        r327_swVJut = Math.min(r312_VJutStroke * (r322_sw / r312_Stroke), r312_VSwToH(0.625 * (r322_xMidBarLeft - r322_xTopBarLeft)));
                        r327_currentGlyph.include(new r312_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                            var _r342_t0, _r342_t1;
                            r342_currentGlyph.include(r312_tagged("serifLT", r312_VSerif.dl(r322_xTopBarLeft, r312_CAP, r327_jutTop, r327_swVJut)), true, true);
                            r342_currentGlyph.include(r312_tagged("serifRT", r312_VSerif.dr(r322_xTopBarRight, r312_CAP, r327_jutTop, r327_swVJut)));
                            return void 0;
                        }));
                    }
                    if (r312_doSerifLB) r327_currentGlyph.include(r322_sf.lb.full);
                    if (r312_doSerifRB) r327_currentGlyph.include(r322_sf.rb[r322_fMotion ? "outer" : "full"]);
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Dje." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                    var r349_jutTop, r349_jutBot, r349_jutMid, r349_swVJut, _r349_t0, _r349_t1, _r349_t2;
                    r349_currentGlyph.setWidth(r322_df.width);
                    r349_currentGlyph.include(r322_df.markSet.capital());
                    r349_currentGlyph.include(r312_VBar.l(r322_xMidBarLeft, 0, r312_CAP, r322_sw));
                    r349_currentGlyph.include(r312_nShoulder.earlessCorner(new r312_xn$NamedParameterPair$2Lrc9b("left", r322_xMidBarLeft), new r312_xn$NamedParameterPair$2Lrc9b("right", r322_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("top", r322_yBarTop), new r312_xn$NamedParameterPair$2Lrc9b("bottom", r312_O + r312_Hook + r322_sw / 2), new r312_xn$NamedParameterPair$2Lrc9b("ada", r322_ada), new r312_xn$NamedParameterPair$2Lrc9b("adb", r322_adb), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r322_sw)));
                    var r349_xHookDepth = Math.min(1.2 * r312_HookX, r1_mix(r322_df.rightSB - r312_HSwToV(0.5 * r322_sw) - r1_mix(r322_xMidBarLeft, r322_df.rightSB, 0.5), r322_sf.jutIn, r1_clamp(0, r1_boole(r312_doSerifLB), r312_StrokeWidthBlend(0, 1))));
                    r349_currentGlyph.include(r312_VerticalHook.r(new r312_xn$NamedParameterPair$2Lrc9b("x", r322_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("y", r312_O + r312_Hook + r322_sw / 2), new r312_xn$NamedParameterPair$2Lrc9b("xDepth", -r349_xHookDepth), new r312_xn$NamedParameterPair$2Lrc9b("yDepth", r312_Hook), new r312_xn$NamedParameterPair$2Lrc9b("sw", r322_sw)));
                    r349_currentGlyph.include(r312_HBar.t(r322_xTopBarLeft, r322_xTopBarRight, r312_CAP, r322_sw));
                    if (r312_doSerifLT) {
                        _r349_t0 = r312_EFVJutLength(r312_CAP, 0, r312_YeriBarPos, r322_sw);
                        r349_jutTop = _r349_t0[0];
                        r349_jutBot = _r349_t0[1];
                        r349_jutMid = _r349_t0[2];
                        r349_swVJut = Math.min(r312_VJutStroke * (r322_sw / r312_Stroke), r312_VSwToH(0.625 * (r322_xMidBarLeft - r322_xTopBarLeft)));
                        r349_currentGlyph.include(new r312_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
                            var _r370_t0, _r370_t1;
                            r370_currentGlyph.include(r312_tagged("serifLT", r312_VSerif.dl(r322_xTopBarLeft, r312_CAP, r349_jutTop, r349_swVJut)), true, true);
                            r370_currentGlyph.include(r312_tagged("serifRT", r312_VSerif.dr(r322_xTopBarRight, r312_CAP, r349_jutTop, r349_swVJut)));
                            return void 0;
                        }));
                    }
                    if (r312_doSerifLB) r349_currentGlyph.include(r322_sf.lb.full);
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("cyrl/Tshe", 1035, new r312_xn$NamedParameterPair$2Lrc9b("follow", "hCap"));
        return r312_xn$selectvariant$7Hrq("cyrl/Dje", 1026, new r312_xn$NamedParameterPair$2Lrc9b("follow", "hengCap"));
    });
    return void 0;
});


