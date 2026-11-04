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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Lower-Omega", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t8, _r312_t9;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Upward = _r312_t1.Upward;
        var r312_Downward = _r312_t1.Downward;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_CThin = _r312_t1.CThin;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_MaskAbove = _r312_t5.MaskAbove;
        var r312_HBar = _r312_t5.HBar;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_alias = _r312_t6.alias;
        var r312_HalfAdvance = _r312_t6.HalfAdvance;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r312_CreateTurnedLetter = _r312_t7.CreateTurnedLetter;
        var r312_LowerOmegaShape = function (r316_df, r316_top) {
            var _r316_t0, _r316_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
                var _r318_t0, _r318_t1;
                var r318_stroke = r316_df.adviceThinnerStroke(3);
                var r318_fine = r318_stroke * r312_CThin;
                var r318_x0 = r1_mix(r316_df.leftSB, r316_df.rightSB, 0.1);
                var r318_x1 = r316_df.leftSB + r312_OX;
                var r318_y0 = r316_top - r312_O;
                var r318_y1 = r1_mix(0, r316_top, 0.5);
                var r318_y3 = r1_mix(0, r316_top, 0.5);
                var r318_y4 = r1_mix(0, r316_top, 0.65);
                r318_currentGlyph.include(r312_dispiro(r312_widths.lhs(r318_stroke), r312_g4(r318_x0, r318_y0), r312_g4(r318_x1, r318_y1), r312_Arch.lhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r318_stroke), new r312_xn$NamedParameterPair$2Lrc9b("swAfter", r318_fine)), r312_flat(r316_df.middle - r312_HSwToV(r318_stroke / 2 - r318_fine), r318_y3, r312_widths.lhs.heading(r318_fine, r312_Upward)), r312_curl(r316_df.middle - r312_HSwToV(r318_stroke / 2 - r318_fine), r318_y4, r312_heading(r312_Upward))));
                r318_currentGlyph.include(r312_dispiro(r312_widths.rhs(r318_stroke), r312_g4(r316_df.width - r318_x0, r318_y0), r312_g4(r316_df.width - r318_x1, r318_y1), r312_Arch.rhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r318_stroke), new r312_xn$NamedParameterPair$2Lrc9b("swAfter", r318_fine)), r312_flat(r316_df.middle + r312_HSwToV(r318_stroke / 2 - r318_fine), r318_y3, r312_widths.rhs.heading(r318_fine, r312_Upward)), r312_curl(r316_df.middle + r312_HSwToV(r318_stroke / 2 - r318_fine), r318_y4, r312_heading(r312_Upward))));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("grek/omega", 969, new r312_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
            var _r327_t0, _r327_t1;
            var r327_df = r327_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r327_currentGlyph.include(r327_df.markSet.e());
            r327_currentGlyph.include(r312_LowerOmegaShape(r327_df, r312_XH));
            return void 0;
        }));
        r312_CreateTurnedLetter("grek/turnomega", null, "grek/omega", r312_HalfAdvance, r312_XH / 2);
        r312_xn$GlyphSaveSink$2Lrc4b.save("grek/piSymbol", 982, new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
            var _r333_t0, _r333_t1;
            var r333_df = r333_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r333_currentGlyph.include(r333_df.markSet.e());
            r333_currentGlyph.include(r312_union(r312_HBar.t(r333_df.leftSB, r333_df.rightSB, r312_XH), r312_difference(r312_LowerOmegaShape(r333_df, r312_XH), r312_MaskAbove(r312_XH))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("latn/Omega", 42934, new r312_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
            var _r339_t0, _r339_t1;
            var r339_df = r339_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r339_currentGlyph.include(r339_df.markSet.capital());
            r339_currentGlyph.include(r312_LowerOmegaShape(r339_df, r312_CAP));
            return void 0;
        }));
        r312_alias("latn/omega", 42935, "grek/omega");
        var r312_ClosedOmegaShape = function (r343_df, r343_top, r343_fLongLeg) {
            var _r343_t0, _r343_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                var _r345_t0, _r345_t1;
                var r345_stroke = r343_df.adviceThinnerStroke(3);
                var r345_fine = r345_stroke * r312_CThin;
                var r345_x1 = r343_df.leftSB + r312_OX;
                var r345_y0 = r343_top - 0;
                var r345_y1 = r1_mix(0, r343_top, 0.45);
                var r345_y3 = r1_mix(0, r343_top, 0.5);
                var r345_y4 = r1_mix(0, r343_top, r343_fLongLeg ? 1 : 0.65) - (r343_fLongLeg ? r312_O : 0) - (r343_fLongLeg ? 0.5 : 0) * r345_stroke;
                r345_currentGlyph.include(r312_dispiro(r312_widths.rhs(r345_fine), r312_flat(r343_df.middle - r312_HSwToV(r345_stroke / 2 - r345_fine), r345_y4, r312_heading(r312_Downward)), r312_curl(r343_df.middle - r312_HSwToV(r345_stroke / 2 - r345_fine), r345_y3, r312_heading(r312_Downward)), r312_Arch.rhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r345_stroke), new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r345_fine)), r312_g4(r345_x1, r345_y1), r312_Arch.rhs(r345_y0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r345_stroke)), r312_g4(r343_df.width - r345_x1, r345_y1), r312_Arch.rhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r345_stroke), new r312_xn$NamedParameterPair$2Lrc9b("swAfter", r345_fine)), r312_flat(r343_df.middle + r312_HSwToV(r345_stroke / 2 - r345_fine), r345_y3, r312_widths.rhs.heading(r345_fine, r312_Upward)), r312_curl(r343_df.middle + r312_HSwToV(r345_stroke / 2 - r345_fine), r345_y4, r312_heading(r312_Upward))));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("latn/OmegaClosed", 42973, new r312_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
            var _r354_t0, _r354_t1;
            var r354_df = r354_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r354_currentGlyph.include(r354_df.markSet.capital());
            r354_currentGlyph.include(r312_ClosedOmegaShape(r354_df, r312_CAP, false));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("latn/omegaClosed", 631, new r312_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
            var _r360_t0, _r360_t1;
            var r360_df = r360_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r360_currentGlyph.include(r360_df.markSet.e());
            r360_currentGlyph.include(r312_ClosedOmegaShape(r360_df, r312_XH, false));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("latn/OmegaClosedLongLeg", 122740, new r312_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
            var _r366_t0, _r366_t1;
            var r366_df = r366_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r366_currentGlyph.include(r366_df.markSet.capital());
            r366_currentGlyph.include(r312_ClosedOmegaShape(r366_df, r312_CAP, true));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("latn/omegaClosedLongLeg", 122741, new r312_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
            var _r372_t0, _r372_t1;
            var r372_df = r372_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r372_currentGlyph.include(r372_df.markSet.e());
            r372_currentGlyph.include(r312_ClosedOmegaShape(r372_df, r312_XH, true));
            return void 0;
        }));
        r312_CreateTurnedLetter("latn/turnOmegaClosed", 122742, "latn/OmegaClosed", r312_HalfAdvance, r312_CAP / 2);
        return r312_CreateTurnedLetter("latn/turnomegaClosed", 122743, "latn/omegaClosed", r312_HalfAdvance, r312_XH / 2);
    });
    return void 0;
});


