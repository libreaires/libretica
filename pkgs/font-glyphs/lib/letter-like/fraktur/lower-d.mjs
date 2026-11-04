"use strict";
import * as _s0_t1 from "@iosevka/util";
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
var _r1_t8 = _s0_t1;
var r1_mix = _r1_t8.mix;
var r1_slY = _r1_t8.slY;
r1_xn$GlyphBlocks$2Lrc2b.push(function (r311_xn$Capture_Ext$2Lrc2b) {
    var _r311_t0, _r311_t1;
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Lower-D", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_XH = _r312_t1.XH;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_OX = _r312_t1.OX;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_end = _r312_t2.end;
        var r312_straight = _r312_t2.straight;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_LowerDf = _r312_t7.LowerDf;
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
        var r312_FHook = _r312_t9.FHook;
        var r312_PHexTop = _r312_t9.PHexTop;
        var r312_PHexBot = _r312_t9.PHexBot;
        return r312_xn$GlyphSaveSink$2Lrc4b.save("frak/d", 120097, new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
            var _r320_t0, _r320_t1, _r320_t2, _r320_t3, _r320_t4, _r320_t5, _r320_t6;
            var r320_df = r320_currentGlyph.include(r312_LowerDf(1));
            r320_currentGlyph.include(r320_df.markSet.b());
            var r320_oBox = r312_S.box(r312_XH, 0, r320_df.leftSB, r320_df.rightSB);
            var r320_dBox = r312_S.box(r312_Ascender, 0, r320_df.leftSB, r320_df.rightSB);
            r320_currentGlyph.include((_r320_t0 = r320_oBox.xp(r312_PHexTop), _r320_t1 = r320_oBox.top, _r320_t2 = r320_oBox.left, _r320_t3 = r320_oBox.xp(r312_PHexBot), _r320_t4 = r320_oBox.bot, r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r320_t0, _r320_t1), r312_corner(_r320_t2, r1_slY(_r320_t0, _r320_t1, _r320_t2, r312_SlopeA)), r312_corner(_r320_t2, r1_slY(_r320_t3, _r320_t4, _r320_t2, r312_SlopeB)), r312_corner(_r320_t3, _r320_t4), r312_straight.up.mid(r320_oBox.right - r312_OX, r320_oBox.yMid), r312_g4.sl(r312_SlopeB).mid(_r320_t0, _r320_t1), r312_g2(_r320_t2, r1_slY(_r320_t0, _r320_t1, _r320_t2, r312_SlopeB)), r312_g2.sr(r312_SlopeA).end(r320_oBox.xp(0.25), r320_dBox.top, r312_xn$changepen$7Hrq(r312_T)))));
            return void 0;
        }));
    });
    return void 0;
});


