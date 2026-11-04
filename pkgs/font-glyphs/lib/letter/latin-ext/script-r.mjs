"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r334_t) {
    var r334_n, r334_i, r334_a, _r334_t3, _r334_t4, _r334_t5, _r334_t6, _r334_t7, _r334_t8, _r334_t9, _r334_t10, _r334_t11, _r334_t12, _r334_t13, _r334_t14, _r334_t15, _r334_t16, _r334_t17, _r334_t18, _r334_t19, _r334_t20, _r334_t21, _r334_t22, _r334_t23, _r334_t24, _r334_t25, _r334_t26;
    var _r334_t0 = function () {
        _r334_t7 = function (_r334_t8) {
            _r334_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r334_t8
            };
        };
        _r334_t9 = r334_t instanceof Array;
        if (_r334_t9) {
            _r334_t10 = r334_n = r334_t.length;
            _r334_t11 = r334_i = 0;
            _r334_t12 = function (_r334_t14) {
                return _r334_t7(_r334_t14);
            };
            _r334_t13 = function (_r334_t15) {
                _r334_t16 = r334_i < r334_n;
                if (_r334_t16) {
                    _r334_t0 = function (_r334_t17) {
                        return _r334_t13(r334_i = r334_i + 1);
                    };
                    return {
                        "value": [r334_i, r334_t[r334_i]],
                        "done": false
                    };
                } else return _r334_t12(_r334_t15);
            };
            return _r334_t13();
        } else {
            _r334_t18 = r334_a = Object.keys(r334_t);
            _r334_t19 = r334_n = r334_a.length;
            _r334_t20 = r334_i = 0;
            _r334_t21 = function (_r334_t23) {
                return _r334_t7(_r334_t23);
            };
            _r334_t22 = function (_r334_t24) {
                _r334_t25 = r334_i < r334_n;
                if (_r334_t25) {
                    _r334_t0 = function (_r334_t26) {
                        return _r334_t22(r334_i = r334_i + 1);
                    };
                    return {
                        "value": [r334_a[r334_i], r334_t[r334_a[r334_i]]],
                        "done": false
                    };
                } else return _r334_t21(_r334_t24);
            };
            return _r334_t22();
        }
    };
    var _r334_t1 = function (x) {
        try {
            return _r334_t0(x);
        } catch (ex) {
            return _r334_t2(ex);
        }
    };
    var _r334_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9) _r334_t3 = this; else {
        _r334_t4 = function () {
            void 0;
        };
        _r334_t4.prototype = _r1_t9.prototype;
        _r334_t3 = new _r334_t4();
    }
    _r334_t3[Symbol.iterator] = function () {
        return _r334_t3;
    };
    _r334_t3.next = _r334_t1;
    _r334_t3.throw = function (x) {
        return _r334_t2(x);
    };
    return _r334_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Script-R", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_doTail, _r312_t11, _r312_t12, _r312_t13, _r312_t14, _r312_tag15;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_ArchDepth = _r312_t1.ArchDepth;
        var r312_SmallArchDepth = _r312_t1.SmallArchDepth;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_Jut = _r312_t1.Jut;
        var r312_MidJutSide = _r312_t1.MidJutSide;
        var r312_VJut = _r312_t1.VJut;
        var r312_VJutStroke = _r312_t1.VJutStroke;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_SideJut = _r312_t1.SideJut;
        var r312_ShoulderFine = _r312_t1.ShoulderFine;
        var r312_ArchDepthAOf = _r312_t1.ArchDepthAOf;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
        var r312_YSmoothMidR = _r312_t1.YSmoothMidR;
        var r312_YSmoothMidL = _r312_t1.YSmoothMidL;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_end = _r312_t2.end;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_tagged = _r312_t5.tagged;
        var r312_HSerif = _r312_t5.HSerif;
        var r312_VBar = _r312_t5.VBar;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r312_LeaningAnchor = _r312_t7.LeaningAnchor;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_RightwardTailedBar = _r312_t8.RightwardTailedBar;
        var r312_xLeft = function (r317_df) {
            var _r317_t0, _r317_t1;
            return r317_df.leftSB + 0.75 * r312_OX;
        };
        var r312_xBarRight = function (r318_df) {
            var _r318_t0, _r318_t1;
            return r318_df.width - r318_df.leftSB * 1.5;
        };
        var r312_ScriptRShape = function (r319_fCapital, r319_top, r319_left, r319_right, r319_fTailed, r319_sw) {
            var _r319_t0, _r319_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var _r321_t0, _r321_t1;
                r321_currentGlyph.include(r312_tagged("strokeR", r319_fTailed ? r312_RightwardTailedBar(r319_right, 0, r319_top - 0.5 * r319_sw, new r312_xn$NamedParameterPair$2Lrc9b("sw", r319_sw)) : r312_VBar.r(r319_right, 0, r319_top - 0.5 * r319_sw, r319_sw)));
                r321_currentGlyph.include(r312_union(r312_VBar.l(r319_left, r319_top - r312_VJut, r319_top - 0.5 * r319_sw, r312_VJutStroke * (r319_sw / r312_Stroke)), r312_dispiro(r312_widths.rhs(r319_sw), r312_g4(r319_left, r319_top - r312_O, r312_heading(r312_Rightward)), r312_g4(r1_mix(r319_left, r319_right, 0.5), r319_top + r312_O), r312_g4(r319_right, r319_top - r312_O, r312_heading(r312_Rightward)))));
                if (r312_SLAB && !r319_fTailed) r321_currentGlyph.include(!r319_fCapital && r312_para.isItalic ? r312_HSerif.rb(r319_right, 0, r312_SideJut) : r312_union(r312_HSerif.rb(r319_right - r312_HSwToV(0.5 * r319_sw), 0, r312_Jut), r312_HSerif.lb(r319_right - r312_HSwToV(0.5 * r319_sw), 0, r312_MidJutSide)));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("RScript", 43884, new r312_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
            var _r328_t0, _r328_t1;
            var r328_df = r328_currentGlyph.include(r312_DivFrame(1));
            r328_currentGlyph.include(r328_df.markSet.capital());
            r328_currentGlyph.include(r312_ScriptRShape(true, r312_CAP, r312_xLeft(r328_df), r312_xBarRight(r328_df), false, r328_df.mvs));
            r328_currentGlyph.include(r312_LeaningAnchor.Below.VBar.r(r312_xBarRight(r328_df)));
            return void 0;
        }));
        var r312_ScriptRConfig = {
            "standard": false,
            "tailed": true
        };
        var _r312_t9 = _r1_t2(r312_ScriptRConfig)[Symbol.iterator]();
        var _r312_t10 = void 0;
        while (!(_r312_t10 = _r312_t9.next()).done) {
            _r312_t11 = _r312_t10.value;
            r312_suffix = _r312_t11[0];
            r312_doTail = _r312_t11[1];
            (function () {
                return r312_xn$GlyphSaveSink$2Lrc4b.save("rScript." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                    var _r340_t0, _r340_t1;
                    var r340_df = r340_currentGlyph.include(r312_DivFrame(1));
                    r340_currentGlyph.include(r340_df.markSet.e());
                    r340_currentGlyph.include(r312_ScriptRShape(false, r312_XH, r312_xLeft(r340_df), r312_xBarRight(r340_df), r312_doTail, r340_df.mvs));
                    r340_currentGlyph.include(r312_LeaningAnchor.Below.VBar.r(r312_xBarRight(r340_df)));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("rScript", 43851, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/che"));
        var r312_ScriptRWithBowlShape = function (r346_fCapital, r346_df, r346_top) {
            var _r346_t0, _r346_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                var _r348_t0, _r348_t1;
                var r348_subDf = r312_DivFrame(0.75 * r346_df.adws, 2);
                r348_currentGlyph.include(r312_ScriptRShape(r346_fCapital, r346_top, r312_xLeft(r348_subDf), r312_xBarRight(r348_subDf), true, r348_subDf.mvs));
                r348_currentGlyph.ejectTagged("strokeR");
                var r348_swBowl = r312_AdviceStroke(3) * (r348_subDf.mvs / r312_Stroke);
                var r348_fineBowl = r312_ShoulderFine * (r1_mix(r348_subDf.mvs, r348_swBowl, 0.5) / r312_Stroke);
                var r348_yBarTop = r1_mix(r348_swBowl, r312_XH, 0.5);
                var r348_archDepth = 0.5 * (r346_fCapital ? r312_ArchDepth : r312_SmallArchDepth);
                var r348_mockWidth = r346_df.width - (r348_subDf.rightSB - r348_subDf.leftSB - r312_HSwToV(r348_subDf.mvs));
                var r348_ada = r312_ArchDepthAOf(r348_archDepth, r348_mockWidth);
                var r348_adb = r312_ArchDepthBOf(r348_archDepth, r348_mockWidth);
                r348_currentGlyph.include(r312_dispiro(r312_flat(r312_xBarRight(r348_subDf) - r312_HSwToV(r348_subDf.mvs), r346_top - 0.5 * r348_subDf.mvs, r312_widths.lhs.heading(r348_subDf.mvs, r312_Downward)), r312_curl(r312_xBarRight(r348_subDf) - r312_HSwToV(r348_subDf.mvs), r312_YSmoothMidL(r348_yBarTop, 0, r348_ada, r348_adb)), r312_Arch.lhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r348_subDf.mvs), new r312_xn$NamedParameterPair$2Lrc9b("swAfter", r348_swBowl)), r312_g4(r346_df.rightSB - (r348_subDf.rightSB - r312_xBarRight(r348_subDf)) - 2 * r312_OX, r312_YSmoothMidR(r348_yBarTop, 0, r348_ada, r348_adb), r312_widths.lhs(r348_swBowl)), r312_Arch.lhs(r348_yBarTop, new r312_xn$NamedParameterPair$2Lrc9b("sw", r348_swBowl), new r312_xn$NamedParameterPair$2Lrc9b("swAfter", r348_fineBowl)), r312_g4.down.end(r312_xBarRight(r348_subDf) - r312_HSwToV(r348_fineBowl), r312_YSmoothMidL(r348_yBarTop, 0, r348_ada, r348_adb), r312_widths.lhs.heading(r348_fineBowl, r312_Downward))));
                r348_currentGlyph.include(r312_LeaningAnchor.Above.At(r348_subDf.middle));
                r348_currentGlyph.include(r312_LeaningAnchor.Below.VBar.r(r312_xBarRight(r348_subDf), r348_subDf.mvs));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("RScriptBowl", 43885, new r312_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
            var _r360_t0, _r360_t1;
            var r360_df = r360_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 1));
            r360_currentGlyph.include(r360_df.markSet.capital());
            r360_currentGlyph.include(r312_ScriptRWithBowlShape(true, r360_df, r312_CAP));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("rScriptBowl", 43852, new r312_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
            var _r366_t0, _r366_t1;
            var r366_df = r366_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 1));
            r366_currentGlyph.include(r366_df.markSet.e());
            r366_currentGlyph.include(r312_ScriptRWithBowlShape(false, r366_df, r312_XH));
            return void 0;
        }));
    });
    return void 0;
});


