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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Rams-Horn", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t8, _r312_t9;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Descender = _r312_t1.Descender;
        var r312_TanSlope = _r312_t1.TanSlope;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Upward = _r312_t1.Upward;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_VJut = _r312_t1.VJut;
        var r312_VJutStroke = _r312_t1.VJutStroke;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_close = _r312_t2.close;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_quadControls = _r312_t2.quadControls;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_xn$noshape$3cah = _r312_t5["no-shape"];
        var r312_MaskBelow = _r312_t5.MaskBelow;
        var r312_MaskLeft = _r312_t5.MaskLeft;
        var r312_VSerif = _r312_t5.VSerif;
        var r312_Arch = _r312_t5.Arch;
        var r312_FlipAround = _r312_t5.FlipAround;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_SerifFrame = _r312_t7.SerifFrame;
        var r312_PalatalHook = _r312_t7.PalatalHook;
        var r312_LatinGammaShape = function (r316_df, r316_top, r316_bottom, r316_fMask) {
            var _r316_t0, _r316_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
                var _r318_t0, _r318_t1;
                var r318_fine = r316_df.adviceStroke(4);
                var r318_d = r316_df.width * 0.05 + r318_fine;
                var r318_offset = r316_fMask ? 1 : 0;
                r318_currentGlyph.include((r316_fMask ? r312_xn$spirooutline$1aao : r312_dispiro)([(r316_fMask ? r312_corner : r312_g4)(r316_df.leftSB + r312_O + r318_offset + r312_HSwToV(0.5 * r316_df.mvs), r316_top, r312_widths.center.heading(r316_df.mvs, r312_Downward)), r312_quadControls(1, 0.7, 16), r312_g4(r316_df.middle + r318_d - r318_fine / 2 - r318_offset, r316_bottom + r318_d * (1 - r312_TanSlope * 0.5), r312_widths.center(r318_fine)), r312_Arch.rhs(r316_bottom + r318_offset, new r312_xn$NamedParameterPair$2Lrc9b("sw", r318_fine)), r312_g4(r316_df.middle - r318_d + r318_fine / 2 + r318_offset, r316_bottom + r318_d * (1 + r312_TanSlope * 0.5), r312_widths.center(r318_fine)), r312_quadControls(0, 0.3, 16), (r316_fMask ? r312_corner : r312_g4)(r316_df.rightSB - r312_O - r318_offset - r312_HSwToV(0.5 * r316_df.mvs), r316_top, r312_widths.center.heading(r316_df.mvs, r312_Upward)), r316_fMask ? [r312_close()] : []]));
                return {
                    "fine": r318_fine,
                    "d": r318_d
                };
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("latn/Gamma", 404, new r312_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
            var r323_sf, _r323_t0, _r323_t1;
            var r323_df = r323_currentGlyph.include(r312_DivFrame(1));
            r323_currentGlyph.include(r323_df.markSet.capDesc());
            r323_currentGlyph.include(r312_LatinGammaShape(r323_df, r312_CAP, r312_Descender));
            if (r312_SLAB) {
                r323_sf = r312_SerifFrame.fromDf(r323_df, r312_CAP, r312_Descender);
                r323_currentGlyph.include(new r312_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                    var _r329_t0, _r329_t1;
                    r329_currentGlyph.include(r323_sf.lt.full, true, true);
                    r329_currentGlyph.include(r323_sf.rt.full);
                    return void 0;
                }));
            }
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("latn/gamma", 611, new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
            var r334_sf, _r334_t0, _r334_t1;
            var r334_df = r334_currentGlyph.include(r312_DivFrame(1));
            r334_currentGlyph.include(r334_df.markSet.p());
            r334_currentGlyph.include(r312_LatinGammaShape(r334_df, r312_XH, r312_Descender));
            if (r312_SLAB) {
                r334_sf = r312_SerifFrame.fromDf(r334_df, r312_XH, r312_Descender);
                r334_currentGlyph.include(r312_para.isItalic ? r334_sf.lt.outer : new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                    var _r340_t0, _r340_t1;
                    r340_currentGlyph.include(r334_sf.lt.full, true, true);
                    r340_currentGlyph.include(r334_sf.rt.full);
                    return void 0;
                }));
            }
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("latn/gammaPalatalHook", 122673, new r312_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
            var r345_sf, _r345_t1, _r345_t2;
            var r345_df = r345_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 1));
            r345_currentGlyph.include(r345_df.markSet.p());
            var r345_subDf = r312_DivFrame(0.75 * r312_para.advanceScaleM, 2);
            var _r345_t0 = r345_currentGlyph.include(r312_LatinGammaShape(r345_subDf, r312_XH, r312_Descender));
            var r345_fine = _r345_t0.fine;
            var r345_d = _r345_t0.d;
            if (r312_SLAB) {
                r345_sf = r312_SerifFrame.fromDf(r345_subDf, r312_XH, r312_Descender);
                r345_currentGlyph.include(r312_para.isItalic ? r345_sf.lt.outer : new r312_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                    var _r351_t0, _r351_t1;
                    r351_currentGlyph.include(r345_sf.lt.full, true, true);
                    r351_currentGlyph.include(r345_sf.rt.full);
                    return void 0;
                }));
            }
            var r345_tinyGap = Math.max(r312_Width / 32, r312_AdviceStroke(24));
            r345_currentGlyph.include(r312_difference(r312_PalatalHook.r(r345_df.rightSB, 0, new r312_xn$NamedParameterPair$2Lrc9b("xLink", r345_subDf.middle), new r312_xn$NamedParameterPair$2Lrc9b("refSw", r1_mix(r345_subDf.mvs, r345_fine, 0.5)), new r312_xn$NamedParameterPair$2Lrc9b("maskOut", r312_intersection(r312_MaskBelow(0), r312_MaskLeft(r345_subDf.middle + r345_d + r345_tinyGap)))), r312_LatinGammaShape(r345_subDf, r312_XH, r312_Descender, true)));
            return void 0;
        }));
        var r312_RamsHornShape = function (r358_df, r358_top, r358_bottom, r358_fFill) {
            var _r358_t0, _r358_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
                var r360_swSlab, _r360_t0, _r360_t1;
                var r360_k1 = 0.625;
                var r360_k2 = 0.7;
                var r360_kIntersection = 0.15;
                var r360_lExt = r358_df.leftSB + 0.75 * r312_OX;
                var r360_rExt = r358_df.rightSB - 0.75 * r312_OX;
                var r360_dfLoop = r312_DivFrame(1);
                var r360_lInner = Math.max(r360_lExt + r312_TINY, r358_df.middle - (r360_dfLoop.rightSB - r360_dfLoop.leftSB) / 2);
                var r360_rInner = Math.min(r360_rExt - r312_TINY, r358_df.middle + (r360_dfLoop.rightSB - r360_dfLoop.leftSB) / 2);
                var r360_d = 0.25 * (r360_rInner - r360_lInner) * r360_k1 * r312_TanSlope;
                var r360_sw = r312_AdviceStroke(r312_SLAB ? 3.5 : 2.75);
                var r360_fine = r312_AdviceStroke(r312_SLAB ? 3.75 : 3.5);
                var r360_coFine = r1_mix(r360_sw, r360_fine, r360_kIntersection / r360_k2);
                var r360_fillOffset = r360_sw * 0.25;
                r360_currentGlyph.include(r312_union(r312_dispiro(r312_widths.rhs(r360_sw), r312_flat(r360_lExt, r358_top, r312_heading(r312_Rightward)), r312_curl(r360_lInner, r358_top, r312_heading(r312_Rightward)), r312_g4(r358_df.middle, r1_mix(r358_top, r358_bottom, r360_kIntersection), r312_widths.rhs(r360_coFine)), r312_g4.down.mid(r1_mix(r358_df.middle, r360_rInner, r360_k1), r1_mix(r358_top, r358_bottom, r360_k2) - r360_d, r312_widths.rhs(r360_fine)), r312_Arch.rhs(r358_bottom, new r312_xn$NamedParameterPair$2Lrc9b("sw", r360_fine)), r312_g4.up.mid(r1_mix(r358_df.middle, r360_lInner, r360_k1), r1_mix(r358_top, r358_bottom, r360_k2) + r360_d), r312_g4(r358_df.middle, r1_mix(r358_top, r358_bottom, r360_kIntersection), r312_widths.rhs(r360_coFine)), r312_flat(r360_rInner, r358_top, r312_widths.rhs.heading(r360_sw, r312_Rightward)), r312_curl(r360_rExt, r358_top, r312_heading(r312_Rightward))), r358_fFill ? r312_xn$spirooutline$1aao(r312_corner(r358_df.middle, r1_mix(r358_top, r358_bottom, r360_kIntersection) - r360_fillOffset), r312_g4.down.mid(r1_mix(r358_df.middle, r360_rInner, r360_k1) - r360_fillOffset, r1_mix(r358_top, r358_bottom, r360_k2) - r360_d), r312_g4.left.mid(r312_Arch["adjust-x"].bot(r358_df.middle, new r312_xn$NamedParameterPair$2Lrc9b("sw", r360_fine)), r358_bottom + r360_fillOffset), r312_g4.up.mid(r1_mix(r358_df.middle, r360_lInner, r360_k1) + r360_fillOffset, r1_mix(r358_top, r358_bottom, r360_k2) + r360_d), r312_close()) : r312_xn$noshape$3cah()));
                if (r312_SLAB) {
                    r360_swSlab = Math.min(r312_VJutStroke, r358_df.adviceStroke(4.5));
                    r360_currentGlyph.include(r312_VSerif.dl(r360_lExt, r358_top - r360_sw, r312_VJut * (r360_sw / r312_Stroke) - r360_sw, r360_swSlab));
                    r360_currentGlyph.include(r312_VSerif.dr(r360_rExt, r358_top - r360_sw, r312_VJut * (r360_sw / r312_Stroke) - r360_sw, r360_swSlab));
                }
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("Ramshorn", 42955, new r312_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
            var _r368_t0, _r368_t1;
            var r368_df = r368_currentGlyph.include(r312_DivFrame(r312_SLAB ? r312_para.advanceScaleT : 1));
            r368_currentGlyph.include(r368_df.markSet.capital());
            r368_currentGlyph.include(r312_RamsHornShape(r368_df, r312_CAP, 0, false));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("ramshorn", 612, new r312_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
            var _r374_t0, _r374_t1;
            var r374_df = r374_currentGlyph.include(r312_DivFrame(r312_SLAB ? r312_para.advanceScaleT : 1));
            r374_currentGlyph.include(r374_df.markSet.e());
            r374_currentGlyph.include(r312_RamsHornShape(r374_df, r312_XH, 0, false));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("latn/ayin", 7461, new r312_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
            var _r380_t0, _r380_t1;
            var r380_df = r380_currentGlyph.include(r312_DivFrame(r312_SLAB ? r312_para.advanceScaleT : 1));
            r380_currentGlyph.include(r380_df.markSet.e());
            r380_currentGlyph.include(r312_RamsHornShape(r380_df, r312_XH, 0, true));
            r380_currentGlyph.include(r312_FlipAround(r380_df.middle, r312_XH / 2));
            return void 0;
        }));
    });
    return void 0;
});


