"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Yery", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_Uc, r312_Lc, r312_fTailed, _r312_t12, _r312_t13, _r312_t14, _r312_t15, _r312_tag16;
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
        var r312_XH = _r312_t1.XH;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_Jut = _r312_t1.Jut;
        var r312_SLAB = _r312_t1.SLAB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_xn$noshape$3cah = _r312_t5["no-shape"];
        var r312_tagged = _r312_t5.tagged;
        var r312_HSerif = _r312_t5.HSerif;
        var r312_VBar = _r312_t5.VBar;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_RightwardTailedBar = _r312_t7.RightwardTailedBar;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Yeri"].resolve();
        var r312_YeriUpper = _r312_t8.YeriUpper;
        var r312_YeriLower = _r312_t8.YeriLower;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Yer"].resolve();
        var r312_CyrYerShape = _r312_t9.CyrYerShape;
        var r312_CyrYeryShape = function (r318_fBackYer) {
            var _r318_t0, _r318_t1;
            return function (r319_Yeri, r319_df, r319_top, r319_fTailed) {
                var _r319_t0, _r319_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                    var _r321_t0, _r321_t1;
                    var r321_stroke = r318_fBackYer ? r319_df.adviceThinnerStroke2(2.75, 3, r319_top, 7 / 9) : r319_df.adviceThinnerStroke2(2, 3, r319_top, 3 / 4);
                    var r321_jut = r312_Jut - r312_HSwToV(0.5 * (r312_Stroke - r321_stroke));
                    var r321_xMiddleSym = r1_mix(0, r319_df.width, r318_fBackYer ? 5 / 9 : 1 / 2);
                    var r321_xMiddle = Math.min(r319_df.leftSB + (r1_mix(r312_Width, r319_df.width, r318_fBackYer ? 1 / 3 : 0) - r312_SB * 2), r1_mix(r321_xMiddleSym + r312_HSwToV(0.5 * r321_stroke), r319_df.rightSB - r312_HSwToV(r321_stroke), 0.25));
                    r321_currentGlyph.include(r318_fBackYer ? r312_CyrYerShape(r319_Yeri, r319_top, new r312_xn$NamedParameterPair$2Lrc9b("left", r319_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r321_xMiddle), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r321_stroke), new r312_xn$NamedParameterPair$2Lrc9b("jut", r321_jut)) : r319_Yeri(r319_top, new r312_xn$NamedParameterPair$2Lrc9b("left", r319_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r321_xMiddle), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r321_stroke), new r312_xn$NamedParameterPair$2Lrc9b("jut", r321_jut)));
                    r321_currentGlyph.include(r319_fTailed ? r312_RightwardTailedBar(r319_df.rightSB, 0, r319_top, r321_stroke) : r312_VBar.r(r319_df.rightSB, 0, r319_top, r321_stroke));
                    if (r312_SLAB) r321_currentGlyph.include(new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                        var _r334_t0, _r334_t1;
                        r334_currentGlyph.include(r312_tagged("serifRT", r319_Yeri.useFullSerifs ? r312_HSerif.mt(r319_df.rightSB - r312_HSwToV(0.5 * r321_stroke), r319_top, r321_jut, r321_stroke) : true ? r312_xn$noshape$3cah() : void 0), true, true);
                        r334_currentGlyph.include(r312_tagged("serifRB", r319_fTailed ? r312_xn$noshape$3cah() : r319_Yeri.useFullSerifs ? r312_HSerif.mb(r319_df.rightSB - r312_HSwToV(0.5 * r321_stroke), 0, r321_jut, r321_stroke) : true ? r312_HSerif.rb(r319_df.rightSB, 0, r321_jut - r312_HSwToV(0.5 * r321_stroke), r321_stroke) : void 0));
                        return void 0;
                    }));
                    return void 0;
                });
            };
        };
        var r312_YeryConfig = r1_SuffixCfg.weave({
            "corner": [r312_YeriUpper.Shape, r312_YeriLower.Shape],
            "round": [r312_YeriUpper.RoundShape, r312_YeriLower.RoundShape],
            "cursive": [r312_YeriUpper.CursiveShape, r312_YeriLower.CursiveShape]
        }, {
            "": false,
            "tailed": true
        });
        var _r312_t10 = Object.entries(r312_YeryConfig)[Symbol.iterator]();
        var _r312_t11 = void 0;
        while (!(_r312_t11 = _r312_t10.next()).done) {
            _r312_t12 = _r312_t11.value;
            r312_suffix = _r312_t12[0];
            r312_Uc = _r312_t12[1][0][0];
            r312_Lc = _r312_t12[1][0][1];
            _r312_t12[1][0];
            r312_fTailed = _r312_t12[1][1];
            _r312_t12[1];
            (function () {
                if (!r312_fTailed) {
                    r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Yery." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                        var _r342_t0, _r342_t1;
                        var r342_df = r342_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                        r342_currentGlyph.include(r342_df.markSet.capital());
                        r342_currentGlyph.include(r312_CyrYeryShape(false)(r312_Uc, r342_df, r312_CAP, r312_fTailed));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YeryBack." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                        var _r348_t0, _r348_t1;
                        var r348_df = r348_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
                        r348_currentGlyph.include(r348_df.markSet.capital());
                        r348_currentGlyph.include(r312_CyrYeryShape(true)(r312_Uc, r348_df, r312_CAP, r312_fTailed));
                        return void 0;
                    }));
                }
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yery." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                    var _r354_t0, _r354_t1;
                    var r354_df = r354_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                    r354_currentGlyph.include(r354_df.markSet.e());
                    r354_currentGlyph.include(r312_CyrYeryShape(false)(r312_Lc, r354_df, r312_XH, r312_fTailed));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yeryBack." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
                    var _r360_t0, _r360_t1;
                    var r360_df = r360_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
                    r360_currentGlyph.include(r360_df.markSet.e());
                    r360_currentGlyph.include(r312_CyrYeryShape(true)(r312_Lc, r360_df, r312_XH, r312_fTailed));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("cyrl/Yery", 1067);
        r312_xn$selectvariant$7Hrq("cyrl/YeryBack", 42576);
        r312_xn$selectvariant$7Hrq("cyrl/yery", 1099);
        return r312_xn$selectvariant$7Hrq("cyrl/yeryBack", 42577);
    });
    return void 0;
});


