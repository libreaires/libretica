"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "../../meta/aesthetics.mjs";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r362_t) {
    var r362_n, r362_i, r362_a, _r362_t3, _r362_t4, _r362_t5, _r362_t6, _r362_t7, _r362_t8, _r362_t9, _r362_t10, _r362_t11, _r362_t12, _r362_t13, _r362_t14, _r362_t15, _r362_t16, _r362_t17, _r362_t18, _r362_t19, _r362_t20, _r362_t21, _r362_t22, _r362_t23, _r362_t24, _r362_t25, _r362_t26;
    var _r362_t0 = function () {
        _r362_t7 = function (_r362_t8) {
            _r362_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r362_t8
            };
        };
        _r362_t9 = r362_t instanceof Array;
        if (_r362_t9) {
            _r362_t10 = r362_n = r362_t.length;
            _r362_t11 = r362_i = 0;
            _r362_t12 = function (_r362_t14) {
                return _r362_t7(_r362_t14);
            };
            _r362_t13 = function (_r362_t15) {
                _r362_t16 = r362_i < r362_n;
                if (_r362_t16) {
                    _r362_t0 = function (_r362_t17) {
                        return _r362_t13(r362_i = r362_i + 1);
                    };
                    return {
                        "value": [r362_i, r362_t[r362_i]],
                        "done": false
                    };
                } else return _r362_t12(_r362_t15);
            };
            return _r362_t13();
        } else {
            _r362_t18 = r362_a = Object.keys(r362_t);
            _r362_t19 = r362_n = r362_a.length;
            _r362_t20 = r362_i = 0;
            _r362_t21 = function (_r362_t23) {
                return _r362_t7(_r362_t23);
            };
            _r362_t22 = function (_r362_t24) {
                _r362_t25 = r362_i < r362_n;
                if (_r362_t25) {
                    _r362_t0 = function (_r362_t26) {
                        return _r362_t22(r362_i = r362_i + 1);
                    };
                    return {
                        "value": [r362_a[r362_i], r362_t[r362_a[r362_i]]],
                        "done": false
                    };
                } else return _r362_t21(_r362_t24);
            };
            return _r362_t22();
        }
    };
    var _r362_t1 = function (x) {
        try {
            return _r362_t0(x);
        } catch (ex) {
            return _r362_t2(ex);
        }
    };
    var _r362_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r362_t3 = this; else {
        _r362_t4 = function () {
            void 0;
        };
        _r362_t4.prototype = _r1_t10.prototype;
        _r362_t3 = new _r362_t4();
    }
    _r362_t3[Symbol.iterator] = function () {
        return _r362_t3;
    };
    _r362_t3.next = _r362_t1;
    _r362_t3.throw = function (x) {
        return _r362_t2(x);
    };
    return _r362_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Pi", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_shrink, r313_slab, r313_tail, _r313_t13, _r313_t14, _r313_t15, _r313_t16, _r313_tag17;
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
        var r313_Stroke = _r313_t1.Stroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t7.BBS;
        var r313_BBD = _r313_t7.BBD;
        var r313_BBBarLeft = _r313_t7.BBBarLeft;
        var r313_BBBarRight = _r313_t7.BBBarRight;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateTurnedLetter = _r313_t8.CreateTurnedLetter;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_RightwardTailedBar = _r313_t9.RightwardTailedBar;
        var r313_RightwardDiagTailedBar = _r313_t9.RightwardDiagTailedBar;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t10.SerifFrame;
        var r313_CyrDescender = _r313_t10.CyrDescender;
        var r313_MidHook = _r313_t10.MidHook;
        var r313_xn$TERMINALSTRAIGHT$9XZu = 0;
        var r313_xn$TERMINALTAILED$9XZu = 1;
        var r313_xn$TERMINALDIAGONAL$9XZu = 2;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "PiShape": r313_PiShape
            };
        });
        var r313_PiShape = function () {
            var _r323_t5;
            var _r323_t6 = arguments;
            var r323_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r323_t6, 0);
            var _r323_t0 = [];
            var _r323_t1 = 0;
            while (_r323_t1 < r323_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r323_xn$flexarguments$2Lrc7uIe5[_r323_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r323_t0.push(r323_xn$flexarguments$2Lrc7uIe5[_r323_t1]);
                _r323_t1 = _r323_t1 + 1;
            }
            var _r323_t2 = r323_xn$flexarguments$2Lrc7uIe5;
            var _r323_t3 = _r323_t2.length;
            var _r323_t4 = 0;
            while (_r323_t4 < _r323_t3) {
                _r323_t1 = _r323_t2[_r323_t4];
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "df") r323_df = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "top") r323_top = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "bottom") r323_bottom = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "shrinkRate") r323_shrinkRate = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "fine") r323_fine = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "doSerif") r323_doSerif = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "endShrink") r323_endShrink = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "terminal") r323_terminal = _r323_t1.right;
                _r323_t4 = _r323_t4 + 1;
            }
            var r323_df = r1_fallback(r323_df, _r323_t0[0]);
            var r323_top = r1_fallback(r323_top, _r323_t0[1]);
            var r323_bottom = r1_fallback(r323_bottom, _r323_t0[2]);
            var r323_shrinkRate = r1_fallback(r323_shrinkRate, _r323_t0[3], 0.05);
            var r323_fine = r1_fallback(r323_fine, _r323_t0[4], r313_Stroke);
            var r323_doSerif = r1_fallback(r323_doSerif, _r323_t0[5], false);
            var r323_endShrink = r1_fallback(r323_endShrink, _r323_t0[6], 0);
            var r323_terminal = r1_fallback(r323_terminal, _r323_t0[7], r313_xn$TERMINALSTRAIGHT$9XZu);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                var r328___, r328_sf, _r328_t0, _r328_t1, _r328_t2;
                var r328_shrink = r323_doSerif ? 0 : r323_shrinkRate * (r323_df.rightSB - r323_df.leftSB);
                var r328_endexpand = r323_doSerif ? 0 : -r323_endShrink * (r323_df.rightSB - r323_df.leftSB) || r328_shrink / 2;
                r328_currentGlyph.include(r313_HBar.t(r323_df.leftSB - r328_endexpand, r323_df.rightSB + r328_endexpand, r323_top, r323_fine));
                r328_currentGlyph.include(r313_VBar.l(r323_df.leftSB + r328_shrink, r323_bottom, r323_top - r323_fine / 2, r323_fine));
                r328_currentGlyph.include((_r328_t0 = r323_terminal, _r328_t0 === r313_xn$TERMINALTAILED$9XZu ? r313_RightwardTailedBar(r323_df.rightSB - r328_shrink, r323_bottom, r323_top - r323_fine / 2, r323_fine) : _r328_t0 === r313_xn$TERMINALDIAGONAL$9XZu ? r313_RightwardDiagTailedBar(r323_df.rightSB - r328_shrink, r323_bottom, r323_top - r323_fine / 2, r323_fine) : (r328___ = _r328_t0, r313_VBar.r(r323_df.rightSB - r328_shrink, r323_bottom, r323_top - r323_fine / 2, r323_fine))));
                if (r323_doSerif) {
                    r328_sf = r313_SerifFrame(r323_top, r323_bottom, r323_df.leftSB + r328_shrink, r323_df.rightSB - r328_shrink, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r323_fine));
                    r328_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                        var r335___, _r335_t0, _r335_t1, _r335_t2;
                        r335_currentGlyph.include(r328_sf.lt.outer, true, true);
                        r335_currentGlyph.include(r328_sf.rt.outer);
                        r335_currentGlyph.include(r328_sf.lb.full);
                        r335_currentGlyph.include((_r335_t0 = r323_terminal, _r335_t0 === r313_xn$TERMINALSTRAIGHT$9XZu ? r328_sf.rb.full : (r335___ = _r335_t0, r313_xn$noshape$3cah())));
                        return void 0;
                    }));
                }
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/Pi", 928, new r313_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
            var _r342_t0, _r342_t1;
            r342_currentGlyph.include(r313_MarkSet.capital());
            r342_currentGlyph.include(r313_PiShape(r313_DivFrame(1), r313_CAP, 0, new r313_xn$NamedParameterPair$2Lrc9b("shrinkRate", 0), new r313_xn$NamedParameterPair$2Lrc9b("doSerif", r313_SLAB)));
            return void 0;
        }));
        r313_alias("cyrl/Pe", 1055, "grek/Pi");
        r313_CreateTurnedLetter("amalg", 10815, "grek/Pi", r313_HalfAdvance, r313_CAP / 2);
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/smcpPi", 7464, new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
            var _r349_t0, _r349_t1;
            r349_currentGlyph.include(r313_MarkSet.e());
            r349_currentGlyph.include(r313_PiShape(r313_DivFrame(1), r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("shrinkRate", 0), new r313_xn$NamedParameterPair$2Lrc9b("doSerif", r313_SLAB)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/pe.upright", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
            var _r356_t0, _r356_t1;
            r356_currentGlyph.include(r313_MarkSet.e());
            r356_currentGlyph.include(r313_PiShape(r313_DivFrame(1), r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("shrinkRate", 0), new r313_xn$NamedParameterPair$2Lrc9b("doSerif", r313_SLAB)));
            return void 0;
        }));
        r313_xn$derivecomposites$7Hrq("cyrl/PeDescender", 1316, "cyrl/Pe", r313_CyrDescender.rSideJut(r313_RightSB, 0));
        r313_xn$derivecomposites$7Hrq("cyrl/peDescender.upright", null, "cyrl/pe.upright", r313_CyrDescender.rSideJut(r313_RightSB, 0));
        var r313_SmallPiShrink = 1 / 6 - r313_HSwToV(r313_QuarterStroke) / (r313_RightSB - r313_SB);
        var r313_SmallPiConfig = r1_SuffixCfg.weave({
            "": [r313_SmallPiShrink, false],
            "smallCapital": [0, r313_SLAB]
        }, {
            "tailless": r313_xn$TERMINALSTRAIGHT$9XZu,
            "tailed": r313_xn$TERMINALTAILED$9XZu,
            "diagonalTailed": r313_xn$TERMINALDIAGONAL$9XZu
        });
        var _r313_t11 = _r1_t2(r313_SmallPiConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_shrink = _r313_t13[1][0][0];
            r313_slab = _r313_t13[1][0][1];
            _r313_t13[1][0];
            r313_tail = _r313_t13[1][1];
            _r313_t13[1];
            (function () {
                return r313_xn$GlyphSaveSink$2Lrc4b.save("grek/pi." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                    var _r368_t0, _r368_t1;
                    var r368_df = r368_currentGlyph.include(r313_DivFrame(1));
                    r368_currentGlyph.include(r368_df.markSet.e());
                    r368_currentGlyph.include(r313_PiShape(r368_df, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("shrinkRate", r313_shrink), new r313_xn$NamedParameterPair$2Lrc9b("doSerif", r313_slab), new r313_xn$NamedParameterPair$2Lrc9b("terminal", r313_tail)));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("grek/pi", 960);
        var r313_CyrlPeHookShape = function (r375_df, r375_top) {
            var _r375_t0, _r375_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                var r377_sf, _r377_t0, _r377_t1;
                var r377_xm = r375_df.middle + r313_HSwToV(0.5 * r375_df.mvs);
                r377_currentGlyph.include(r313_HBar.t(r375_df.leftSB, r377_xm, r375_top, r375_df.mvs));
                r377_currentGlyph.include(r313_VBar.l(r375_df.leftSB, 0, r375_top - r375_df.mvs / 2, r375_df.mvs));
                r377_currentGlyph.include(r313_VBar.r(r377_xm, 0, r375_top - r375_df.mvs / 2, r375_df.mvs));
                r377_currentGlyph.include(r313_MidHook.m(r375_df, r375_top));
                if (r313_SLAB) {
                    r377_sf = r313_SerifFrame.fromDf(r375_df, r375_top, 0).slice(0, 1);
                    r377_currentGlyph.include(r377_sf.enoughSpaceForFullSerifs ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                        var _r384_t0, _r384_t1;
                        r384_currentGlyph.include(r377_sf.lt.outer, true, true);
                        r384_currentGlyph.include(r377_sf.rt.outer);
                        r384_currentGlyph.include(r377_sf.lb.full);
                        r384_currentGlyph.include(r377_sf.rb.full);
                        return void 0;
                    }) : new r313_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                        var _r390_t0, _r390_t1;
                        r390_currentGlyph.include(r377_sf.lt.outer, true, true);
                        r390_currentGlyph.include(r377_sf.rt.outer);
                        r390_currentGlyph.include(r377_sf.lb.outer);
                        r390_currentGlyph.include(r377_sf.rb.outer);
                        return void 0;
                    }));
                }
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/PeMidHook", 1190, new r313_xn$Capture$2Lrc8.GlyphProc(function (r397_currentGlyph) {
            var _r397_t0, _r397_t1;
            var r397_df = r397_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
            r397_currentGlyph.include(r397_df.markSet.capDesc());
            r397_currentGlyph.include(r313_CyrlPeHookShape(r397_df, r313_CAP));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/peMidHook.upright", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r403_currentGlyph) {
            var _r403_t0, _r403_t1;
            var r403_df = r403_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
            r403_currentGlyph.include(r403_df.markSet.p());
            r403_currentGlyph.include(r313_CyrlPeHookShape(r403_df, r313_XH));
            return void 0;
        }));
        var r313_MathBBPiShape = function () {
            var _r407_t5;
            var _r407_t6 = arguments;
            var r407_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r407_t6, 0);
            var _r407_t0 = [];
            var _r407_t1 = 0;
            while (_r407_t1 < r407_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r407_xn$flexarguments$2Lrc7uIe5[_r407_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r407_t0.push(r407_xn$flexarguments$2Lrc7uIe5[_r407_t1]);
                _r407_t1 = _r407_t1 + 1;
            }
            var _r407_t2 = r407_xn$flexarguments$2Lrc7uIe5;
            var _r407_t3 = _r407_t2.length;
            var _r407_t4 = 0;
            while (_r407_t4 < _r407_t3) {
                _r407_t1 = _r407_t2[_r407_t4];
                if (_r407_t1 && _r407_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r407_t1.left === "df") r407_df = _r407_t1.right;
                if (_r407_t1 && _r407_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r407_t1.left === "top") r407_top = _r407_t1.right;
                if (_r407_t1 && _r407_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r407_t1.left === "bottom") r407_bottom = _r407_t1.right;
                if (_r407_t1 && _r407_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r407_t1.left === "shrinkRate") r407_shrinkRate = _r407_t1.right;
                if (_r407_t1 && _r407_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r407_t1.left === "endShrink") r407_endShrink = _r407_t1.right;
                _r407_t4 = _r407_t4 + 1;
            }
            var r407_df = r1_fallback(r407_df, _r407_t0[0]);
            var r407_top = r1_fallback(r407_top, _r407_t0[1]);
            var r407_bottom = r1_fallback(r407_bottom, _r407_t0[2]);
            var r407_shrinkRate = r1_fallback(r407_shrinkRate, _r407_t0[3], 0.05);
            var r407_endShrink = r1_fallback(r407_endShrink, _r407_t0[4], 0);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r413_currentGlyph) {
                var _r413_t0, _r413_t1;
                var r413_shrink = r407_shrinkRate * (r407_df.rightSB - r407_df.leftSB);
                var r413_endexpand = -r407_endShrink * (r407_df.rightSB - r407_df.leftSB) || r413_shrink / 2;
                r413_currentGlyph.include(r313_HBar.t(r407_df.leftSB - r413_endexpand, r407_df.rightSB + r413_endexpand, r407_top, r313_BBS));
                r413_currentGlyph.include(r313_BBBarLeft(r407_df.leftSB + r413_shrink, r407_bottom, r407_top));
                r413_currentGlyph.include(r313_BBBarRight(r407_df.rightSB - r413_shrink, r407_bottom, r407_top));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/grek/Pi", 8511, new r313_xn$Capture$2Lrc8.GlyphProc(function (r419_currentGlyph) {
            var _r419_t0, _r419_t1;
            r419_currentGlyph.include(r313_MarkSet.capital());
            r419_currentGlyph.include(r313_MathBBPiShape(r313_DivFrame(1), r313_CAP, 0, new r313_xn$NamedParameterPair$2Lrc9b("shrinkRate", 0)));
            return void 0;
        }));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/grek/pi", 8508, new r313_xn$Capture$2Lrc8.GlyphProc(function (r425_currentGlyph) {
            var _r425_t0, _r425_t1;
            r425_currentGlyph.include(r313_MarkSet.e());
            r425_currentGlyph.include(r313_MathBBPiShape(r313_DivFrame(1), r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("shrinkRate", 0.06)));
            return void 0;
        }));
    });
    return void 0;
});


