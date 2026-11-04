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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Upper-Xeh", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t9, _r313_t10, _r313_t11, _r313_tag12;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_SLAB = _r313_t1.SLAB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_UShape = _r313_t5.UShape;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t7.SerifFrame;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-AE-OE"].resolve();
        var r313_SubDfAndShift = _r313_t8.SubDfAndShift;
        return (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Xeh", 1341, new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                var r322_sf, r322_sf2, _r322_t1, _r322_t2;
                var r322_df = r322_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                var _r322_t0 = r313_SubDfAndShift(1, r322_df);
                var r322_subDf = _r322_t0[0];
                var r322_shift = _r322_t0[1];
                r322_currentGlyph.include(r322_df.markSet.capital());
                r322_currentGlyph.include(r313_VBar.l(r322_df.leftSB, 0, r313_CAP, r322_df.mvs));
                r322_currentGlyph.include(r313_HBar.t(r322_df.leftSB, r322_df.middle, r313_XH, r322_df.mvs));
                r322_currentGlyph.include(r313_UShape(r313_XH, 0, r322_subDf.leftSB + r322_shift, r322_subDf.rightSB + r322_shift, r322_subDf.mvs, r322_subDf.archDepthA, r322_subDf.archDepthB));
                if (r313_SLAB) {
                    r322_sf = r313_SerifFrame.fromDf(r322_df, r313_CAP, 0);
                    r322_sf2 = r313_SerifFrame.fromDf(r322_df, r313_XH, 0);
                    r322_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                        var _r330_t0, _r330_t1;
                        r330_currentGlyph.include(r322_sf.lt.full, true, true);
                        r330_currentGlyph.include(r322_sf.lb.full);
                        return void 0;
                    }));
                    if (r322_sf2.enoughSpaceForFullSerifs) r322_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                        var _r335_t0, _r335_t1;
                        r335_currentGlyph.include(r322_sf2.mt.full, true, true);
                        r335_currentGlyph.include(r322_sf2.rt.full);
                        return void 0;
                    })); else r322_currentGlyph.include(r322_sf2.rt.outer);
                }
                return void 0;
            }));
        })();
    });
    return void 0;
});


