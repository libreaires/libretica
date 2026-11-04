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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-To", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Upward = _r313_t1.Upward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Jut = _r313_t1.Jut;
        var r313_SLAB = _r313_t1.SLAB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_VBar = _r313_t5.VBar;
        var r313_flatside = _r313_t5.flatside;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t7.SerifFrame;
        var r313_barPos = r313_XH / 2;
        var r313_highBarPos = r313_XH;
        var r313_jut = r313_Jut;
        return (function () {
            r313_xn$GlyphSaveSink$2Lrc4b.save("armn/To", 1337, new r313_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var r321_sf, _r321_t0, _r321_t1;
                var r321_df = r321_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT));
                r321_currentGlyph.include(r321_df.markSet.capital());
                var r321_fine = r321_df.adviceStroke2(3, 3, r313_XH);
                var r321_cofine = Math.min(r321_fine, r313_VSwToH(0.5 * (r321_df.rightSB - r321_df.leftSB - r313_HSwToV(2 * r321_df.mvs))));
                var r321_barPosT = r313_barPos + r321_fine / 2;
                r321_currentGlyph.include(r313_dispiro(r313_widths.rhs(r321_df.mvs), r313_flat(r321_df.leftSB, 0, r313_heading(r313_Upward)), r313_curl(r321_df.leftSB, r321_df.archDepthA + r321_df.archDepthB < r313_CAP ? r313_CAP - r321_df.archDepthA : r1_mix(r313_CAP, 0, r321_df.archDepthA / (r321_df.archDepthA + r321_df.archDepthB))), r313_Arch.rhs(r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("sw", r321_df.mvs)), r313_flatside.rd(r321_df.rightSB, 0, r313_CAP, r321_df.archDepthA, r321_df.archDepthB, 0), r313_Arch.rhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r321_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r321_cofine)), r313_g4(r321_df.middle - r313_HSwToV(0.5 * r321_cofine), r1_mix(0, r321_barPosT, r321_df.archDepthB / (r321_df.archDepthA + r321_df.archDepthB)), r313_widths.rhs(r321_cofine)), r313_arcvh(), r313_flat(r1_mix(r321_df.middle - r313_HSwToV(0.5 * r321_cofine), r321_df.rightSB, 0.5), r321_barPosT, r313_widths.rhs(r321_fine)), r313_curl(r321_df.rightSB + r313_jut * (r313_SLAB ? 1.5 : 1) - r313_HSwToV(0.5 * r321_df.mvs), r321_barPosT, r313_heading(r313_Rightward))));
                if (r313_SLAB) {
                    r321_sf = r313_SerifFrame.fromDf(r321_df, r313_CAP, 0);
                    r321_currentGlyph.include(r321_sf.lb.full);
                }
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/to", 1385, new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                var r331_sf, _r331_t0, _r331_t1;
                var r331_df = r331_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT));
                r331_currentGlyph.include(r331_df.markSet.p());
                var r331_fine = r331_df.adviceStroke2(3, 3, r313_XH);
                var r331_cofine = Math.min(r331_fine, r313_VSwToH(0.5 * (r331_df.rightSB - r331_df.leftSB - r313_HSwToV(2 * r331_df.mvs))));
                var r331_barPosT = r313_barPos + r331_fine / 2;
                r331_currentGlyph.include(r313_VBar.l(r331_df.leftSB, r313_Descender, r313_XH, r331_df.mvs));
                r331_currentGlyph.include(r313_dispiro(r313_widths.rhs(r331_df.shoulderFine), r313_straight.up.start(r331_df.leftSB + r313_HSwToV(r331_df.mvs - r331_df.shoulderFine), r331_df.smallArchDepthA + r331_df.smallArchDepthB < r313_XH ? r313_XH - r331_df.smallArchDepthA : r1_mix(r313_XH, 0, r331_df.smallArchDepthA / (r331_df.smallArchDepthA + r331_df.smallArchDepthB)), r313_heading(r313_Upward)), r313_Arch.rhs(r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("sw", r331_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r331_df.shoulderFine)), r313_flatside.rd(r331_df.rightSB, 0, r313_XH, r331_df.smallArchDepthA, r331_df.smallArchDepthB, 0, r313_widths.rhs(r331_df.mvs)), r313_Arch.rhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r331_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r331_cofine)), r313_g4(r331_df.middle - r313_HSwToV(0.5 * r331_cofine), r1_mix(0, r331_barPosT, r331_df.smallArchDepthB / (r331_df.smallArchDepthA + r331_df.smallArchDepthB)), r313_widths.rhs(r331_cofine)), r313_arcvh(), r313_flat(r1_mix(r331_df.middle - r313_HSwToV(0.5 * r331_cofine), r331_df.rightSB, 0.5), r331_barPosT, r313_widths.rhs(r331_fine)), r313_curl(r331_df.rightSB + r313_jut * (r313_SLAB ? 1.5 : 1) - r313_HSwToV(0.5 * r331_df.mvs), r331_barPosT, r313_heading(r313_Rightward))));
                if (r313_SLAB) {
                    r331_sf = r313_SerifFrame.fromDf(r331_df, r313_XH, r313_Descender);
                    r331_currentGlyph.include(r331_sf.lt.outer);
                    if (!r313_para.isItalic) r331_currentGlyph.include(r331_sf.lb.fullSide);
                }
                return void 0;
            }));
        })();
    });
    return void 0;
});


