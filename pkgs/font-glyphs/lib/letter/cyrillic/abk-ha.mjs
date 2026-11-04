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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Abkhasian-Ha", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
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
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_ArchDepth = _r312_t1.ArchDepth;
        var r312_SmallArchDepth = _r312_t1.SmallArchDepth;
        var r312_YSmoothMidR = _r312_t1.YSmoothMidR;
        var r312_YSmoothMidL = _r312_t1.YSmoothMidL;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_straight = _r312_t2.straight;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_flatside = _r312_t5.flatside;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_CyrlAbkHaShape = function (r315_df, r315_top, r315_sm) {
            var _r315_t0, _r315_t1;
            var r315_ada = r315_df.archDepthAOf(r315_sm);
            var r315_adb = r315_df.archDepthBOf(r315_sm);
            var r315_ada2 = r315_df.archDepthAOf(0.625 * r315_sm);
            var r315_adb2 = r315_df.archDepthBOf(0.625 * r315_sm);
            var r315_xm = r315_df.middle - r312_HSwToV(0.5 * r315_df.mvs);
            var r315_y2 = r315_top * 0.75;
            return r312_dispiro(r312_Arch.lhs.centerAt.rtl.t(r315_df.middle, r315_top, new r312_xn$NamedParameterPair$2Lrc9b("sw", r315_df.mvs), new r312_xn$NamedParameterPair$2Lrc9b("knot-ty", r312_g4.left.start)), r312_archv(), r312_flatside.ld(r315_df.leftSB, 0, r315_top, r315_ada, r315_adb), r312_Arch.lhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r315_df.mvs)), r312_straight.up.mid(r315_df.rightSB - r312_OX, r312_YSmoothMidR(r315_y2 + r315_df.mvs / 2, 0, r315_ada2, r315_adb2)), r312_Arch.lhs(r315_y2, new r312_xn$NamedParameterPair$2Lrc9b("sw", r315_df.mvs)), r312_straight.down.mid(r315_xm, r312_YSmoothMidL(r315_y2 + r315_df.mvs / 2, 0, r315_ada2, r315_adb2)), r312_arcvh(), r312_g4(r315_df.rightSB - r312_O, r312_O));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/abk/Ha", 1192, new r312_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
            var _r322_t0, _r322_t1;
            var r322_df = r322_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r322_currentGlyph.include(r322_df.markSet.capital());
            r322_currentGlyph.include(r312_CyrlAbkHaShape(r322_df, r312_CAP, r312_ArchDepth));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/abk/ha", 1193, new r312_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
            var _r328_t0, _r328_t1;
            var r328_df = r328_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r328_currentGlyph.include(r328_df.markSet.e());
            r328_currentGlyph.include(r312_CyrlAbkHaShape(r328_df, r312_XH, r312_SmallArchDepth));
            return void 0;
        }));
    });
    return void 0;
});


