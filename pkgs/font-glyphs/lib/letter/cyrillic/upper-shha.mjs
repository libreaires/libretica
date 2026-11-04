"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r342_t) {
    var r342_n, r342_i, r342_a, _r342_t3, _r342_t4, _r342_t5, _r342_t6, _r342_t7, _r342_t8, _r342_t9, _r342_t10, _r342_t11, _r342_t12, _r342_t13, _r342_t14, _r342_t15, _r342_t16, _r342_t17, _r342_t18, _r342_t19, _r342_t20, _r342_t21, _r342_t22, _r342_t23, _r342_t24, _r342_t25, _r342_t26;
    var _r342_t0 = function () {
        _r342_t7 = function (_r342_t8) {
            _r342_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r342_t8
            };
        };
        _r342_t9 = r342_t instanceof Array;
        if (_r342_t9) {
            _r342_t10 = r342_n = r342_t.length;
            _r342_t11 = r342_i = 0;
            _r342_t12 = function (_r342_t14) {
                return _r342_t7(_r342_t14);
            };
            _r342_t13 = function (_r342_t15) {
                _r342_t16 = r342_i < r342_n;
                if (_r342_t16) {
                    _r342_t0 = function (_r342_t17) {
                        return _r342_t13(r342_i = r342_i + 1);
                    };
                    return {
                        "value": [r342_i, r342_t[r342_i]],
                        "done": false
                    };
                } else return _r342_t12(_r342_t15);
            };
            return _r342_t13();
        } else {
            _r342_t18 = r342_a = Object.keys(r342_t);
            _r342_t19 = r342_n = r342_a.length;
            _r342_t20 = r342_i = 0;
            _r342_t21 = function (_r342_t23) {
                return _r342_t7(_r342_t23);
            };
            _r342_t22 = function (_r342_t24) {
                _r342_t25 = r342_i < r342_n;
                if (_r342_t25) {
                    _r342_t0 = function (_r342_t26) {
                        return _r342_t22(r342_i = r342_i + 1);
                    };
                    return {
                        "value": [r342_a[r342_i], r342_t[r342_a[r342_i]]],
                        "done": false
                    };
                } else return _r342_t21(_r342_t24);
            };
            return _r342_t22();
        }
    };
    var _r342_t1 = function (x) {
        try {
            return _r342_t0(x);
        } catch (ex) {
            return _r342_t2(ex);
        }
    };
    var _r342_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9) _r342_t3 = this; else {
        _r342_t4 = function () {
            void 0;
        };
        _r342_t4.prototype = _r1_t9.prototype;
        _r342_t3 = new _r342_t4();
    }
    _r342_t3[Symbol.iterator] = function () {
        return _r342_t3;
    };
    _r342_t3.next = _r342_t1;
    _r342_t3.throw = function (x) {
        return _r342_t2(x);
    };
    return _r342_t3;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Upper-Shha", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_slabType, _r312_t13, _r312_t14, _r312_t15, _r312_t16, _r312_tag17, _r312_t18, _r312_tag19;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_O = _r312_t1.O;
        var r312_AdviceStroke2 = _r312_t1.AdviceStroke2;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_VJutStroke = _r312_t1.VJutStroke;
        var r312_RightSB = _r312_t1.RightSB;
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
        var r312_xn$derivecomposites$7Hrq = _r312_t6["derive-composites"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r312_LeaningAnchor = _r312_t7.LeaningAnchor;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r312_EFVJutLength = _r312_t8.EFVJutLength;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_nShoulder = _r312_t9.nShoulder;
        var r312_SerifFrame = _r312_t9.SerifFrame;
        var r312_TopHook = _r312_t9.TopHook;
        var r312_CyrDescender = _r312_t9.CyrDescender;
        var _r312_t10 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Yeri"].resolve();
        var r312_YeriBarPos = _r312_t10.YeriBarPos;
        var r312_xn$SLABNONE$5sIl = 0;
        var r312_xn$SLABTOPLEFT$5sIl4 = 1;
        var r312_xn$SLABTOPLEFTBOTTOMRIGHT$5sIl457 = 2;
        var r312_xn$SLABALL$5sIl = 4;
        var r312_CyrShhaShape = function (r319_slabType, r319__stroke) {
            var _r319_t0, _r319_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var r321___, _r321_t0, _r321_t1, _r321_t2, _r321_t3, _r321_t4;
                var r321_stroke = r1_fallback(r319__stroke, r312_Stroke);
                var r321_yBarTop = r1_mix(0, r312_CAP, r312_YeriBarPos) + r321_stroke / 2;
                r321_currentGlyph.include(r312_tagged("strokeL", r312_VBar.l(r312_SB, 0, r312_CAP, r321_stroke)));
                r321_currentGlyph.include(r312_nShoulder.earlessCorner(new r312_xn$NamedParameterPair$2Lrc9b("left", r312_SB), new r312_xn$NamedParameterPair$2Lrc9b("right", r312_RightSB), new r312_xn$NamedParameterPair$2Lrc9b("top", r321_yBarTop), new r312_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r321_stroke), new r312_xn$NamedParameterPair$2Lrc9b("ada", r312_ArchDepthAClamped(r321_yBarTop, 0)), new r312_xn$NamedParameterPair$2Lrc9b("adb", r312_ArchDepthBClamped(r321_yBarTop, 0))));
                var r321_sf = r312_SerifFrame.fromDf(r312_DivFrame(1), r312_CAP, 0, new r312_xn$NamedParameterPair$2Lrc9b("swRef", r321_stroke));
                r321_currentGlyph.include(r312_tagged("SerifLT", (_r321_t0 = r319_slabType, _r321_t0 === r312_xn$SLABALL$5sIl ? r321_sf.lt.full : _r321_t0 === r312_xn$SLABTOPLEFTBOTTOMRIGHT$5sIl457 ? r321_sf.lt.outer : _r321_t0 === r312_xn$SLABTOPLEFT$5sIl4 ? r321_sf.lt.outer : (r321___ = _r321_t0, new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                    var _r334_t0, _r334_t1;
                    return void 0;
                })))));
                r321_currentGlyph.include(r312_tagged("SerifLB", (_r321_t1 = r319_slabType, _r321_t1 === r312_xn$SLABALL$5sIl ? r321_sf.lb.full : (r321___ = _r321_t1, new r312_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                    var _r337_t0, _r337_t1;
                    return void 0;
                })))));
                r321_currentGlyph.include(r312_tagged("serifRB", (_r321_t2 = r319_slabType, _r321_t2 === r312_xn$SLABALL$5sIl ? r321_sf.rb.full : _r321_t2 === r312_xn$SLABTOPLEFTBOTTOMRIGHT$5sIl457 ? r321_sf.rb.outer : (r321___ = _r321_t2, new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                    var _r340_t0, _r340_t1;
                    return void 0;
                })))));
                return void 0;
            });
        };
        var r312_ShhaConfig = {
            "serifless": r312_xn$SLABNONE$5sIl,
            "topLeftSerifed": r312_xn$SLABTOPLEFT$5sIl4,
            "topLeftBottomRightSerifed": r312_xn$SLABTOPLEFTBOTTOMRIGHT$5sIl457,
            "serifed": r312_xn$SLABALL$5sIl
        };
        var _r312_t11 = _r1_t2(r312_ShhaConfig)[Symbol.iterator]();
        var _r312_t12 = void 0;
        while (!(_r312_t12 = _r312_t11.next()).done) {
            _r312_t13 = _r312_t12.value;
            r312_suffix = _r312_t13[0];
            r312_slabType = _r312_t13[1];
            (function () {
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Shha." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                    var _r348_t0, _r348_t1;
                    r348_currentGlyph.include(r312_MarkSet.capital());
                    r348_currentGlyph.include(r312_LeaningAnchor.Above.VBar.l(r312_SB));
                    r348_currentGlyph.include(r312_CyrShhaShape(r312_slabType));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Hwe." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                    var _r354_t0, _r354_t1;
                    r354_currentGlyph.include(r312_MarkSet.capital());
                    r354_currentGlyph.include(r312_LeaningAnchor.Above.VBar.l(r312_SB));
                    r354_currentGlyph.include(r312_CyrShhaShape(r312_slabType));
                    r354_currentGlyph.ejectTagged("strokeL");
                    r354_currentGlyph.ejectTagged("serifLT");
                    r354_currentGlyph.include(r312_TopHook.toRight.lBarInner(r312_SB, 0, r312_CAP));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("cyrl/Shha", 1210, new r312_xn$NamedParameterPair$2Lrc9b("follow", "hCap"));
        r312_xn$selectvariant$7Hrq("cyrl/Hwe", 42644, new r312_xn$NamedParameterPair$2Lrc9b("follow", "hCapHookTop"));
        r312_xn$selectvariant$7Hrq("cyrl/Shha/descBase", new r312_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/Shha"), new r312_xn$NamedParameterPair$2Lrc9b("follow", "hCap/descBase"));
        r312_xn$derivecomposites$7Hrq("cyrl/ShhaDescender", 1318, "cyrl/Shha/descBase", r312_CyrDescender.rSideJut(r312_RightSB, 0));
        return (function () {
            var r366_suffix, r366_adws, r366_doST, r366_doSB, _r366_t3, _r366_t4, _r366_tag5;
            var _r366_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-T"].resolve();
            var r366_TConfig = _r366_t0.TConfig;
            var _r366_t1 = Object.entries(r366_TConfig)[Symbol.iterator]();
            var _r366_t2 = void 0;
            while (!(_r366_t2 = _r366_t1.next()).done) {
                _r366_t3 = _r366_t2.value;
                r366_suffix = _r366_t3[0];
                r366_adws = _r366_t3[1][0];
                r366_doST = _r366_t3[1][1];
                r366_doSB = _r366_t3[1][2];
                _r366_t3[1];
                (function () {
                    var r370_slabType = r366_doST && r366_doSB ? r312_xn$SLABALL$5sIl : r312_xn$SLABNONE$5sIl;
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("latn/The." + r366_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                        var r373_jutTop, r373_jutBot, r373_jutMid, r373_swVJut, _r373_t0, _r373_t1, _r373_t2;
                        r373_currentGlyph.include(r312_MarkSet.capital());
                        var r373_stroke = r312_AdviceStroke2(2, 3, r312_CAP);
                        r373_currentGlyph.include(r312_CyrShhaShape(r370_slabType, r373_stroke));
                        var r373_xTopRight = r1_mix(r312_SB, r312_RightSB, 0.9);
                        r373_currentGlyph.include(r312_HBar.t(r312_SB - r312_O, r373_xTopRight, r312_CAP, r373_stroke));
                        if (r366_doST) {
                            _r373_t0 = r312_EFVJutLength(r312_CAP, 0, r312_YeriBarPos, r373_stroke);
                            r373_jutTop = _r373_t0[0];
                            r373_jutBot = _r373_t0[1];
                            r373_jutMid = _r373_t0[2];
                            r373_swVJut = r312_VJutStroke * (r373_stroke / r312_Stroke);
                            r373_currentGlyph.include(r312_tagged("serifRT", r312_VSerif.dr(r373_xTopRight, r312_CAP, r373_jutTop, r373_swVJut)));
                        }
                        return void 0;
                    }));
                })();
            }
            return r312_xn$selectvariant$7Hrq("latn/The", 122744, new r312_xn$NamedParameterPair$2Lrc9b("follow", "T"));
        })();
    });
    return void 0;
});


