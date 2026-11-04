"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Eh-Liun-Hiun", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t9, _r313_t10, _r313_t11, _r313_tag12, _r313_t13, _r313_tag14, _r313_t15, _r313_tag16;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_Jut = _r313_t1.Jut;
        var r313_LongJut = _r313_t1.LongJut;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_IBalance2 = _r313_t1.IBalance2;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HSerif = _r313_t5.HSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t7.SerifFrame;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Armenian-Shared-Shapes"].resolve();
        var r313_ArmHBar = _r313_t8.ArmHBar;
        var r313_barPos = r313_XH / 2;
        var r313_highBarPos = r313_XH;
        var r313_jut = r313_Jut;
        (function () {
            r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Eh", 1335, new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                var r322_sf, _r322_t0, _r322_t1;
                var r322_df = r322_currentGlyph.include(r313_DivFrame(1));
                r322_currentGlyph.include(r322_df.markSet.capital());
                r322_currentGlyph.include(r313_VBar.l(r322_df.leftSB, 0, r313_CAP, r322_df.mvs));
                r322_currentGlyph.include(r313_ArmHBar.normal(r313_DivFrame(5 / 6)).base());
                r322_currentGlyph.include(r313_ArmHBar.normal(r322_df).high());
                if (r313_SLAB) {
                    r322_sf = r313_SerifFrame.fromDf(r322_df, r313_CAP, 0);
                    r322_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                        var _r330_t0, _r330_t1;
                        r330_currentGlyph.include(r322_sf.lt.full, true, true);
                        r330_currentGlyph.include(r322_sf.lb.outer);
                        return void 0;
                    }));
                }
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/eh", 1383, new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                var r335_sf, _r335_t0, _r335_t1;
                var r335_df = r335_currentGlyph.include(r313_DivFrame(1));
                r335_currentGlyph.include(r335_df.markSet.b());
                r335_currentGlyph.include(r313_VBar.l(r335_df.leftSB, 0, r313_Ascender, r335_df.mvs));
                r335_currentGlyph.include(r313_ArmHBar.normal(r313_DivFrame(5 / 6)).base());
                r335_currentGlyph.include(r313_ArmHBar.normal(r335_df).high());
                if (r313_SLAB) {
                    r335_sf = r313_SerifFrame.fromDf(r335_df, r313_CAP, 0);
                    r335_currentGlyph.include(r335_sf.lt.outer);
                    if (!r313_para.isItalic) r335_currentGlyph.include(r335_sf.lb.outer);
                }
                return void 0;
            }));
        })();
        (function () {
            r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Liun", 1340, new r313_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                var r347_sf, _r347_t0, _r347_t1;
                var r347_df = r347_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleF));
                r347_currentGlyph.include(r347_df.markSet.capital());
                r347_currentGlyph.include(r313_VBar.l(r347_df.leftSB, 0, r313_CAP, r347_df.mvs));
                r347_currentGlyph.include(r313_ArmHBar.normal(r347_df).base());
                if (r313_SLAB) {
                    r347_sf = r313_SerifFrame.fromDf(r347_df, r313_CAP, 0);
                    r347_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                        var _r354_t0, _r354_t1;
                        r354_currentGlyph.include(r347_sf.lt.full, true, true);
                        r354_currentGlyph.include(r347_sf.lb.outer);
                        return void 0;
                    }));
                }
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/liun", 1388, new r313_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                var _r359_t0, _r359_t1;
                var r359_df = r359_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleII));
                r359_currentGlyph.include(r359_df.markSet.p());
                var r359_xMiddle = r359_df.middle - r313_IBalance2(r359_df);
                var r359_longJut = r359_df.adws < 1 ? r313_jut * (r313_SLAB ? 1.5 : 1) : r313_LongJut;
                r359_currentGlyph.include(r313_VBar.m(r359_xMiddle, r313_Descender, r313_XH, r359_df.mvs));
                r359_currentGlyph.include(r313_HBar.b(r359_xMiddle, r359_xMiddle + r359_longJut, r313_Descender, r359_df.mvs));
                if (r313_SLAB) r359_currentGlyph.include(r313_HSerif.lt(r359_xMiddle, r313_XH, r313_Jut, r359_df.mvs));
                return void 0;
            }));
        })();
        return (function () {
            r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Hiun", 1362, new r313_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                var r369_sf, _r369_t0, _r369_t1;
                var r369_df = r369_currentGlyph.include(r313_DivFrame(1));
                r369_currentGlyph.include(r369_df.markSet.capital());
                r369_currentGlyph.include(r313_VBar.l(r369_df.leftSB, 0, r313_CAP, r369_df.mvs));
                r369_currentGlyph.include(r313_ArmHBar.normal(r369_df).high());
                if (r313_SLAB) {
                    r369_sf = r313_SerifFrame.fromDf(r369_df, r313_CAP, 0);
                    r369_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                        var _r376_t0, _r376_t1;
                        r376_currentGlyph.include(r369_sf.lt.full, true, true);
                        r376_currentGlyph.include(r369_sf.lb.full);
                        return void 0;
                    }));
                }
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/hiun", 1410, new r313_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                var r381_sf, _r381_t0, _r381_t1;
                var r381_df = r381_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleF));
                r381_currentGlyph.include(r313_VBar.l(r381_df.leftSB, 0, r313_XH, r381_df.mvs));
                r381_currentGlyph.include(r313_ArmHBar.normal(r381_df).base());
                if (r313_SLAB) {
                    r381_sf = r313_SerifFrame.fromDf(r381_df, r313_XH, 0);
                    r381_currentGlyph.include(r381_sf.lt.outer);
                    if (!r313_para.isItalic) r381_currentGlyph.include(r381_sf.lb.full);
                }
                return void 0;
            }));
        })();
    });
    return void 0;
});


