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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Upper-Gim-Group", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11, _r313_t12, _r313_tag13;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Jut = _r313_t1.Jut;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
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
        var r313_flatside = _r313_t5.flatside;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t7.SerifFrame;
        var r313_barPos = r313_XH / 2;
        var r313_highBarPos = r313_XH;
        var r313_jut = r313_Jut;
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Gim", 1331, new r313_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var r321_sf, _r321_t0, _r321_t1;
                var r321_df = r321_currentGlyph.include(r313_DivFrame(1));
                r321_currentGlyph.include(r321_df.markSet.capital());
                var r321_barPosB = r313_barPos - r321_df.mvs / 2;
                r321_currentGlyph.include(r313_dispiro(r313_widths.lhs(r321_df.mvs), r313_flat(r321_df.rightSB, 0, r313_heading(r313_Upward)), r313_curl(r321_df.rightSB, r313_CAP - r313_ArchDepthB), r313_Arch.lhs(r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("sw", r321_df.mvs)), r313_flatside.ld(r321_df.leftSB, r321_barPosB, r313_CAP, r313_ArchDepthA, r313_ArchDepthB), r313_arcvh(), r313_flat(r321_df.middle, r321_barPosB), r313_curl(r321_df.rightSB + r313_jut * (r313_SLAB ? 1.5 : 1) - r313_HSwToV(0.5 * r321_df.mvs), r321_barPosB, r313_heading(r313_Rightward))));
                if (r313_SLAB) {
                    r321_sf = r313_SerifFrame.fromDf(r321_df, r313_CAP, 0);
                    r321_currentGlyph.include(r321_sf.rb.full);
                }
                return void 0;
            }));
        })();
        return (function () {
            r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Zhe", 1338, new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                var r331_sf, _r331_t0, _r331_t1;
                var r331_df = r331_currentGlyph.include(r313_DivFrame(1));
                r331_currentGlyph.include(r313_dispiro(r313_widths.rhs(r331_df.mvs), r313_flat(r331_df.rightSB, r313_CAP, r313_heading(r313_Downward)), r313_curl(r331_df.rightSB, 0 + r313_ArchDepthA), r313_Arch.rhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r331_df.mvs)), r313_flatside.lu(r331_df.leftSB, 0, r313_highBarPos, r313_ArchDepthA, r313_ArchDepthB), r313_arcvh(), r313_flat(r331_df.middle, r313_highBarPos), r313_curl(r331_df.rightSB + r313_jut * (r313_SLAB ? 1.5 : 1) - r313_HSwToV(0.5 * r331_df.mvs), r313_highBarPos, r313_heading(r313_Rightward))));
                if (r313_SLAB) {
                    r331_sf = r313_SerifFrame.fromDf(r331_df, r313_CAP, 0);
                    r331_currentGlyph.include(r331_sf.rt.full);
                }
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/zhe", 1386, new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                var r338_sf, _r338_t0, _r338_t1;
                var r338_df = r338_currentGlyph.include(r313_DivFrame(1));
                r338_currentGlyph.include(r338_df.markSet.b());
                r338_currentGlyph.include(r313_dispiro(r313_widths.rhs(r338_df.mvs), r313_flat(r338_df.rightSB, r313_Ascender, r313_heading(r313_Downward)), r313_curl(r338_df.rightSB, 0 + r313_SmallArchDepthA), r313_Arch.rhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r338_df.mvs)), r313_flatside.lu(r338_df.leftSB, 0, r313_highBarPos, r313_SmallArchDepthA, r313_SmallArchDepthB), r313_arcvh(), r313_flat(r338_df.middle, r313_highBarPos), r313_curl(r338_df.rightSB + r313_jut * (r313_SLAB ? 1.5 : 1) - r313_HSwToV(0.5 * r338_df.mvs), r313_highBarPos, r313_heading(r313_Rightward))));
                if (r313_SLAB) {
                    r338_sf = r313_SerifFrame.fromDf(r338_df, r313_Ascender, 0);
                    r338_currentGlyph.include(r338_sf.rt.inner);
                }
                return void 0;
            }));
        })();
    });
    return void 0;
});


