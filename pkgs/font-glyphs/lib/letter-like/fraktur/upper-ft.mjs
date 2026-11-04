"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_slY = _r1_t8.slY;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Upper-F", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_O = _r312_t1.O;
        var r312_SHook = _r312_t1.SHook;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_end = _r312_t2.end;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_xn$withknockout$5sIl = _r312_t4["with-knockout"];
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HookEnd = _r312_t6.HookEnd;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_UpperDf = _r312_t7.UpperDf;
        var r312_S = _r312_t7.S;
        var r312_M = _r312_t7.M;
        var r312_F = _r312_t7.F;
        var r312_T = _r312_t7.T;
        var r312_xn$frakturstroke$3qIs = _r312_t7["fraktur-stroke"];
        var r312_xn$changepen$7Hrq = _r312_t7["change-pen"];
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_DecoSizeX = _r312_t8.DecoSizeX;
        var r312_DecoSizeY = _r312_t8.DecoSizeY;
        var r312_SlopeA = _r312_t8.SlopeA;
        var r312_SlopeB = _r312_t8.SlopeB;
        var r312_CutMaskLeft = _r312_t8.CutMaskLeft;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_Wave = _r312_t9.Wave;
        var r312_FHook = _r312_t9.FHook;
        var r312_PHexTop = _r312_t9.PHexTop;
        var r312_PHexBot = _r312_t9.PHexBot;
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/F", 120073, new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
            var _r320_t0, _r320_t1, _r320_t2, _r320_t3, _r320_t4, _r320_t5, _r320_t6, _r320_t7, _r320_t8, _r320_t9, _r320_t10;
            var r320_df = r320_currentGlyph.include(r312_UpperDf(1));
            r320_currentGlyph.include(r320_df.markSet.capital());
            var r320_fBox = r312_S.box(r312_CAP, 0, r320_df.leftSB, r320_df.rightSB);
            var r320_topStroke = r320_currentGlyph.include((_r320_t0 = r320_fBox.right, _r320_t1 = r320_fBox.top, _r320_t2 = r320_fBox.left, r312_xn$frakturstroke$3qIs(r312_S, r312_g2.ld.start(_r320_t0, _r320_t1), r312_xn$decor$0cao(r312_Wave.h(r312_O)), r312_g2.ld.end(_r320_t2, _r320_t1 - r312_Wave.DepthY, r312_xn$changepen$7Hrq(r312_F)), r312_xn$decor$0cao(r312_Wave.vc(-r312_Wave.DepthX)), r312_g2.ld.end(_r320_t2, r320_fBox.yp(0.625) - 2 * r312_F.thick))));
            var r320_mainStroke = r320_currentGlyph.include((_r320_t3 = r320_fBox.bot, r312_xn$frakturstroke$3qIs(r312_S, r312_g2.sl(2 * r312_SlopeA).start(r320_fBox.xMid, r320_fBox.top - 0.5 * r312_Wave.DepthY), r312_g2(r320_fBox.xp(0.875), _r320_t3 + r312_ArchDepthB), r312_HookEnd(new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_S.thick), _r320_t3), r312_g2(r320_fBox.left, _r320_t3 + r312_SHook))));
            r320_currentGlyph.include(r312_xn$withknockout$5sIl(r320_mainStroke.withPen(r312_CutMaskLeft), (_r320_t4 = r312_F.connR(r312_S, r320_fBox.right), _r320_t5 = r320_fBox.right - 0.5 * r312_DecoSizeX, _r320_t7 = r320_fBox.xMid, _r320_t8 = r1_mix(r320_fBox.top - 0.5 * r312_Wave.DepthY, r320_fBox.bot + r312_ArchDepthB, 0.5), _r320_t6 = r1_slY(_r320_t7, _r320_t8, _r320_t5, r312_SlopeA), r312_xn$frakturstroke$3qIs(r312_F, r312_corner(_r320_t4, r1_slY(_r320_t5, _r320_t6, _r320_t4, r312_SlopeB)), r312_corner(_r320_t5, _r320_t6), r312_corner(_r320_t7, _r320_t8)))));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("frak/T", 120087, new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
            var _r334_t0, _r334_t1, _r334_t2, _r334_t3;
            var r334_df = r334_currentGlyph.include(r312_UpperDf(1));
            r334_currentGlyph.include(r334_df.markSet.capital());
            var r334_tBox = r312_S.box(r312_CAP, 0, r334_df.leftSB, r334_df.rightSB);
            var r334_topStroke = r334_currentGlyph.include((_r334_t0 = r334_tBox.top, _r334_t1 = r334_tBox.left, r312_xn$frakturstroke$3qIs(r312_S, r312_g2.ld.start(r334_tBox.right, _r334_t0), r312_xn$decor$0cao(r312_Wave.h(r312_O)), r312_g2.ld.end(_r334_t1, _r334_t0 - r312_Wave.DepthY, r312_xn$changepen$7Hrq(r312_F)), r312_xn$decor$0cao(r312_Wave.vc(-r312_Wave.DepthX)), r312_g2.ld.end(_r334_t1, r334_tBox.yp(0.625) - 2 * r312_F.thick))));
            var r334_bottomStroke = r334_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_S, r312_g2.ld.end(r334_tBox.right, r334_tBox.bottom + r312_Wave.DepthY), r312_xn$decor$0cao(r312_Wave.h(r312_O)), r312_g2.ld.start(r334_tBox.left, r334_tBox.bottom)));
            var r334_middleStroke = r334_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_S, r312_g2(r334_tBox.xMid, r334_tBox.bottom + 0.5 * r312_Wave.DepthY), r312_xn$decor$0cao(r312_Wave.vc(r312_Wave.DepthX)), r312_g2(r334_tBox.xMid, r334_tBox.top - 0.5 * r312_Wave.DepthY)));
            return void 0;
        }));
    });
    return void 0;
});


