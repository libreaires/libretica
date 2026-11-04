"use strict";
var _s0_t0;
export {_s0_t0 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t0 = r1_apply = function () {
    var r306_block, _r306_t4, _r306_t6;
    var _r306_t3 = this;
    var _r306_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r306_t1 = _r306_t0.length;
    var _r306_t2 = 0;
    var _r306_t5 = _r306_t2 < _r306_t1;
    while (_r306_t5) {
        _r306_t6 = (r306_block = _r306_t0[_r306_t2], r306_block(_r306_t3), _r306_t2 = _r306_t2 + 1);
        _r306_t5 = _r306_t2 < _r306_t1;
    }
    return _r306_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r310_xn$Capture_Ext$2Lrc2b) {
    var _r310_t0, _r310_t1;
    r310_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r310_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Upper-Z", function (r311_xn$Capture$2Lrc8, r311_xn$ExportCapture$2Lrc4b) {
        var _r311_t10, _r311_t11;
        var _r311_t0 = r311_xn$Capture$2Lrc8;
        var r311_xn$GlyphSaveSink$2Lrc4b = _r311_t0["$GlyphSaveSink$"];
        var r311_xn$NamedParameterPair$2Lrc9b = _r311_t0["$NamedParameterPair$"];
        var r311_xn$Exec$2Lrc5 = _r311_t0["$Exec$"];
        var _r311_t1 = r311_xn$Capture$2Lrc8.Metrics;
        var r311_CAP = _r311_t1.CAP;
        var r311_O = _r311_t1.O;
        var r311_OX = _r311_t1.OX;
        var r311_SHook = _r311_t1.SHook;
        var r311_ArchDepthA = _r311_t1.ArchDepthA;
        var _r311_t2 = r311_xn$Capture$2Lrc8.SpiroFns;
        var r311_g2 = _r311_t2.g2;
        var r311_corner = _r311_t2.corner;
        var _r311_t3 = r311_xn$Capture$2Lrc8.SpiroFns;
        var r311_xn$decor$0cao = _r311_t3["decor@"];
        var r311_xn$decor$0cao1 = _r311_t3["decor@@"];
        var r311_xn$decor$0cao11 = _r311_t3["decor@@@"];
        var _r311_t4 = r311_xn$Capture$2Lrc8.BooleFns;
        var r311_difference = _r311_t4.difference;
        var _r311_t5 = r311_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r311_t6 = r311_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r311_MaskAboveLine = _r311_t6.MaskAboveLine;
        var r311_HookEnd = _r311_t6.HookEnd;
        var r311_Arch = _r311_t6.Arch;
        var _r311_t7 = r311_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r311_UpperDf = _r311_t7.UpperDf;
        var r311_S = _r311_t7.S;
        var r311_F = _r311_t7.F;
        var r311_T = _r311_t7.T;
        var r311_xn$frakturstroke$3qIs = _r311_t7["fraktur-stroke"];
        var r311_xn$changepen$7Hrq = _r311_t7["change-pen"];
        var _r311_t8 = r311_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r311_DecoSizeX = _r311_t8.DecoSizeX;
        var r311_DecoSizeY = _r311_t8.DecoSizeY;
        var r311_SlopeA = _r311_t8.SlopeA;
        var r311_SlopeB = _r311_t8.SlopeB;
        var _r311_t9 = r311_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r311_Wave = _r311_t9.Wave;
        var r311_FHook = _r311_t9.FHook;
        var r311_PHexTop = _r311_t9.PHexTop;
        var r311_PHexBot = _r311_t9.PHexBot;
        return r311_xn$GlyphSaveSink$2Lrc4b.save("frak/Z", 8488, new r311_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
            var _r319_t0, _r319_t1, _r319_t2, _r319_t3;
            var r319_df = r319_currentGlyph.include(r311_UpperDf(1));
            r319_currentGlyph.include(r319_df.markSet.capital());
            var r319_zBox = r311_S.box(r311_CAP, 0, r319_df.leftSB, r319_df.rightSB);
            r319_currentGlyph.include((_r319_t0 = r319_zBox.top, r311_xn$frakturstroke$3qIs(r311_S, r311_g2.ld.start(r319_zBox.right, _r319_t0), r311_xn$decor$0cao(r311_Wave.h(r311_O)), r311_g2.ld.mid(r319_zBox.left, _r319_t0 - r311_Wave.DepthY))));
            var r319_diag = r319_currentGlyph.include(r311_xn$frakturstroke$3qIs(r311_S, r311_corner(r319_zBox.right, r319_zBox.top), r311_corner(r319_zBox.xp(0.166), r319_zBox.yp(0.5))));
            r319_currentGlyph.include(r311_difference((_r319_t1 = r319_zBox.bot, r311_xn$frakturstroke$3qIs(r311_S, r311_g2.ru.start(r319_diag.last().x, r319_diag.last().y), r311_xn$decor$0cao(r311_Arch.rhs(new r311_xn$NamedParameterPair$2Lrc9b("sw", r311_S.thick), r319_zBox.yp(0.55), 0.375)), r311_g2.down.mid(r319_zBox.right - r311_OX, _r319_t1 + r311_ArchDepthA), r311_HookEnd(new r311_xn$NamedParameterPair$2Lrc9b("sw", r311_S.thick), _r319_t1), r311_g2(r319_zBox.left, _r319_t1 + r311_SHook))), r311_MaskAboveLine(r319_diag.first().x, r319_diag.first().y, r319_diag.last().x, r319_diag.last().y, 4)));
            return void 0;
        }));
    });
    return void 0;
});


