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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Upper-A", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_end = _r312_t2.end;
        var r312_straight = _r312_t2.straight;
        var r312_flatc = _r312_t2.flatc;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Arch = _r312_t6.Arch;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_UpperDf = _r312_t7.UpperDf;
        var r312_S = _r312_t7.S;
        var r312_F = _r312_t7.F;
        var r312_T = _r312_t7.T;
        var r312_xn$frakturstroke$3qIs = _r312_t7["fraktur-stroke"];
        var r312_xn$changepen$7Hrq = _r312_t7["change-pen"];
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_DecoSizeX = _r312_t8.DecoSizeX;
        var r312_DecoSizeY = _r312_t8.DecoSizeY;
        var r312_SlopeA = _r312_t8.SlopeA;
        var r312_SlopeB = _r312_t8.SlopeB;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_Wave = _r312_t9.Wave;
        var r312_PHexTop = _r312_t9.PHexTop;
        var r312_PHexBot = _r312_t9.PHexBot;
        var r312_LTDecoration = _r312_t9.LTDecoration;
        var r312_RBDecoration = _r312_t9.RBDecoration;
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/A", 120068, new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
            var _r320_t0, _r320_t1, _r320_t2, _r320_t3, _r320_t4, _r320_t5, _r320_t6, _r320_t7, _r320_t8, _r320_t9, _r320_t10;
            var r320_df = r320_currentGlyph.include(r312_UpperDf(1));
            r320_currentGlyph.include(r320_df.markSet.capital());
            var r320_aBox = r312_S.box(r312_CAP, 0, r320_df.leftSB, r320_df.rightSB);
            r320_currentGlyph.include((_r320_t0 = r320_aBox.left, _r320_t1 = r320_aBox.top, _r320_t4 = r320_aBox.xp(r312_PHexBot), _r320_t5 = r320_aBox.bot, _r320_t3 = _r320_t0 - 0.25 * r312_DecoSizeX, _r320_t2 = r1_slY(_r320_t4, _r320_t5, _r320_t3, r312_SlopeB), _r320_t6 = r320_aBox.right, r312_xn$frakturstroke$3qIs(r312_F, r312_g2.ru.start(_r320_t0, r320_aBox.yp(0.625) - 2 * r312_F.thick), r312_xn$decor$0cao(r312_Wave.vc(r312_Wave.DepthX)), r312_g2.ru.mid(_r320_t0, _r320_t1 - r312_DecoSizeY, r312_xn$changepen$7Hrq(r312_S)), r312_Arch.rhs(new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_S.thick), new r312_xn$NamedParameterPair$2Lrc9b("blendPre", null), _r320_t1, 0.4), r312_straight.down.mid(r320_aBox.xp(0.5), r1_mix(_r320_t1, _r320_t2, 0.375)), r312_flatc.sl(r312_SlopeA).end(_r320_t3, _r320_t2), r312_corner(_r320_t4, _r320_t5), r312_corner(_r320_t6, r1_slY(_r320_t4, _r320_t5, _r320_t6, r312_SlopeA)))));
            r320_currentGlyph.include((_r320_t7 = r320_aBox.right, _r320_t8 = r320_aBox.top, r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r320_t7 - r312_DecoSizeX, _r320_t8 - r312_DecoSizeY), r312_corner(_r320_t7, _r320_t8), r312_RBDecoration(_r320_t7, r320_aBox.bot))));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("frak/U", 120088, new r312_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
            var _r332_t0, _r332_t1, _r332_t2, _r332_t3, _r332_t4, _r332_t5, _r332_t6, _r332_t7, _r332_t8, _r332_t9;
            var r332_df = r332_currentGlyph.include(r312_UpperDf(1));
            r332_currentGlyph.include(r332_df.markSet.capital());
            var r332_uBox = r312_S.box(r312_CAP, 0, r332_df.leftSB, r332_df.rightSB);
            var r332_uDeco = r332_uBox.padLeft(-0.25 * r312_DecoSizeX);
            var r332_uBody = r332_uBox.padLeft(+1.5 * r312_DecoSizeX);
            r332_currentGlyph.include((_r332_t0 = r332_uBody.top, _r332_t3 = r332_uDeco.xp(r312_PHexBot), _r332_t4 = r332_uDeco.bot, _r332_t2 = r332_uDeco.left, _r332_t1 = r1_slY(_r332_t3, _r332_t4, _r332_t2, r312_SlopeB), _r332_t5 = r332_uDeco.right, r312_xn$frakturstroke$3qIs(r312_S, r312_LTDecoration.g2(r1_mix(r332_uDeco.left, r332_uBody.left, 0.5), _r332_t0, void 0), r312_g2.down.mid(r332_uBody.left, r1_mix(_r332_t0, _r332_t1, 0.45)), r312_corner(_r332_t2, _r332_t1), r312_corner(_r332_t3, _r332_t4), r312_corner(_r332_t5, r1_slY(_r332_t3, _r332_t4, _r332_t5, r312_SlopeA)))));
            r332_currentGlyph.include((_r332_t6 = r332_uDeco.right, _r332_t7 = r332_uDeco.top, r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r332_t6 - r312_DecoSizeX, _r332_t7 - r312_DecoSizeY), r312_corner(_r332_t6, _r332_t7), r312_RBDecoration(_r332_t6, r332_uBox.bot))));
            return void 0;
        }));
    });
    return void 0;
});


