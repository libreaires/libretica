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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Upper-U-Group", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t9, _r313_t10, _r313_t11, _r313_tag12, _r313_t13, _r313_tag14, _r313_t15, _r313_tag16, _r313_t17, _r313_tag18, _r313_t19, _r313_tag20;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_Middle = _r313_t1.Middle;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_UShape = _r313_t5.UShape;
        var r313_FlipAround = _r313_t5.FlipAround;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t7.SerifFrame;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Armenian-Shared-Shapes"].resolve();
        var r313_ArmHBar = _r313_t8.ArmHBar;
        (function () {
            var _r319_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-Q"].resolve();
            var r319_QCrossing = _r319_t0.QCrossing;
            var r319_QInnerDiagSw = _r319_t0.QInnerDiagSw;
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Ayb", 1329, new r313_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
                var r323_sf, _r323_t0, _r323_t1;
                var r323_df = r323_currentGlyph.include(r313_DivFrame(1));
                r323_currentGlyph.include(r323_df.markSet.capital());
                r323_currentGlyph.include(r313_UShape(r313_CAP, 1, r323_df.leftSB, r323_df.rightSB, r323_df.mvs));
                r323_currentGlyph.include(r319_QCrossing(r323_df, r313_CAP, r319_QInnerDiagSw));
                if (r313_SLAB) {
                    r323_sf = r313_SerifFrame.fromDf(r323_df, r313_CAP, 0);
                    r323_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                        var _r330_t0, _r330_t1;
                        r330_currentGlyph.include(r323_sf.lt.full, true, true);
                        r330_currentGlyph.include(r323_sf.rt.full);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Men", 1348, new r313_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                var r337_sf, _r337_t0, _r337_t1;
                var r337_df = r337_currentGlyph.include(r313_DivFrame(1));
                r337_currentGlyph.include(r337_df.markSet.capital());
                r337_currentGlyph.include(r313_UShape(r313_CAP, 0, r337_df.leftSB, r337_df.rightSB, r337_df.mvs));
                r337_currentGlyph.include(r313_ArmHBar.right(r337_df).cap());
                if (r313_SLAB) {
                    r337_sf = r313_SerifFrame.fromDf(r337_df, r313_CAP, 0);
                    r337_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                        var _r344_t0, _r344_t1;
                        r344_currentGlyph.include(r337_sf.lt.full, true, true);
                        r344_currentGlyph.include(r337_sf.rt.full);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Vo", 1352, new r313_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                var r351_sf, _r351_t0, _r351_t1;
                var r351_df = r351_currentGlyph.include(r313_DivFrame(1));
                r351_currentGlyph.include(r351_df.markSet.capital());
                r351_currentGlyph.include(r313_UShape(r313_CAP, 1, r351_df.leftSB, r351_df.rightSB, r351_df.mvs));
                r351_currentGlyph.include(r313_FlipAround(r313_Middle, r313_CAP / 2));
                if (r313_SLAB) {
                    r351_sf = r313_SerifFrame.fromDf(r351_df, r313_CAP, 0);
                    r351_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                        var _r358_t0, _r358_t1;
                        r358_currentGlyph.include(r351_sf.lb.full, true, true);
                        r358_currentGlyph.include(r351_sf.rb.full);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Rra", 1356, new r313_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                var r365_sf, _r365_t0, _r365_t1;
                var r365_df = r365_currentGlyph.include(r313_DivFrame(1));
                r365_currentGlyph.include(r365_df.markSet.capital());
                r365_currentGlyph.include(r313_UShape(r313_CAP, 1, r365_df.leftSB, r365_df.rightSB, r365_df.mvs));
                r365_currentGlyph.include(r313_FlipAround(r313_Middle, r313_CAP / 2));
                r365_currentGlyph.include(r313_ArmHBar.right(r365_df).mid());
                if (r313_SLAB) {
                    r365_sf = r313_SerifFrame.fromDf(r365_df, r313_CAP, 0);
                    r365_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                        var _r373_t0, _r373_t1;
                        r373_currentGlyph.include(r365_sf.lb.full, true, true);
                        r373_currentGlyph.include(r365_sf.rb.full);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        return (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Seh", 1357, new r313_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                var r380_sf, _r380_t0, _r380_t1;
                var r380_df = r380_currentGlyph.include(r313_DivFrame(1));
                r380_currentGlyph.include(r380_df.markSet.capital());
                r380_currentGlyph.include(r313_UShape(r313_CAP, 1, r380_df.leftSB, r380_df.rightSB, r380_df.mvs));
                if (r313_SLAB) {
                    r380_sf = r313_SerifFrame.fromDf(r380_df, r313_CAP, 0);
                    r380_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                        var _r386_t0, _r386_t1;
                        r386_currentGlyph.include(r380_sf.lt.full, true, true);
                        r386_currentGlyph.include(r380_sf.rt.full);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
    });
    return void 0;
});


