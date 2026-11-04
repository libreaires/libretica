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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Lower-Rra", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t9, _r313_t10, _r313_t11, _r313_tag12;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_XH = _r313_t1.XH;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Jut = _r313_t1.Jut;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t7.SerifFrame;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Armenian-Lower-Sha-Group"].resolve();
        var r313_TwoNeck = _r313_t8.TwoNeck;
        var r313_barPos = r313_XH / 2;
        var r313_highBarPos = r313_XH;
        var r313_jut = r313_Jut;
        return (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/rra", 1404, new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                var r322_sf, _r322_t0, _r322_t1;
                var r322_df = r322_currentGlyph.include(r313_DivFrame(1));
                r322_currentGlyph.include(r322_df.markSet.e());
                r322_currentGlyph.include(r313_VBar.l(r322_df.leftSB, 0, r313_XH, r322_df.mvs));
                var r322_left = Math.max(r322_df.middle, r322_df.rightSB - r313_HSwToV(r322_df.mvs) - r313_jut);
                r322_currentGlyph.include(r313_dispiro(r313_widths.rhs(r322_df.shoulderFine), r313_flat(r322_df.leftSB + r313_HSwToV(r322_df.mvs - r322_df.shoulderFine), r313_XH - r313_SmallArchDepthA - r313_TINY), r313_curl(r322_df.leftSB + r313_HSwToV(r322_df.mvs - r322_df.shoulderFine), r313_XH - r313_SmallArchDepthA), r313_Arch.rhs(r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("sw", r322_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r322_df.shoulderFine)), r313_TwoNeck(r322_df, r313_XH, 0, r322_left)));
                r322_currentGlyph.include(r313_HBar.b(r322_left, r322_left + r313_HSwToV(r322_df.mvs) + r313_jut, 0, r322_df.mvs));
                if (r313_SLAB) {
                    r322_sf = r313_SerifFrame.fromDf(r322_df, r313_XH, 0);
                    r322_currentGlyph.include(r322_sf.lt.outer);
                    if (!r313_para.isItalic) r322_currentGlyph.include(r322_sf.lb.outer);
                }
                return void 0;
            }));
        })();
    });
    return void 0;
});


