"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Lower-Z", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t9, _r312_t10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_XH = _r312_t1.XH;
        var r312_Descender = _r312_t1.Descender;
        var r312_OX = _r312_t1.OX;
        var r312_SHook = _r312_t1.SHook;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_end = _r312_t2.end;
        var r312_g2c = _r312_t2.g2c;
        var r312_cg2 = _r312_t2.cg2;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HookEnd = _r312_t6.HookEnd;
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
        var r312_PHexTop = _r312_t8.PHexTop;
        return r312_xn$GlyphSaveSink$2Lrc4b.save("frak/z", 120119, new r312_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
            var _r319_t0, _r319_t1, _r319_t2, _r319_t3, _r319_t4, _r319_t5, _r319_t6, _r319_t7, _r319_t8, _r319_t9, _r319_t10;
            var r319_df = r319_currentGlyph.include(r312_LowerDf(1));
            r319_currentGlyph.include(r319_df.markSet.e());
            var r319_box = r312_S.box(r312_XH, r312_Descender, r319_df.leftSB, r319_df.rightSB);
            var r319_upperLoop = r319_currentGlyph.include((_r319_t0 = r319_box.left, _r319_t3 = r319_box.xp(r312_PHexTop), _r319_t4 = r319_box.top, _r319_t2 = _r319_t0 + r312_DecoSizeX, _r319_t1 = r1_slY(_r319_t3, _r319_t4, _r319_t2, r312_SlopeA), _r319_t5 = r319_box.right, _r319_t6 = r319_box.yp(0.55), r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r319_t0, _r319_t1 + r312_DecoSizeY), r312_corner(_r319_t2, _r319_t1), r312_cg2.sr(r312_SlopeB).start(_r319_t3, _r319_t4), r312_g2.down.mid(_r319_t5, r1_mix(_r319_t4, _r319_t6, 0.45)), r312_g2c.sl(r312_SlopeA).end(r319_box.xp(0.375), _r319_t6))));
            var r319_lowerLoop = r319_currentGlyph.include((_r319_t7 = r319_upperLoop.last().y, _r319_t8 = r319_box.bottom, r312_xn$frakturstroke$3qIs(r312_S, r312_cg2.sr(r312_SlopeA).start(r319_upperLoop.last().x, _r319_t7), r312_g2.down.mid(r319_box.right - r312_OX, r1_mix(_r319_t7, _r319_t8, 0.5)), r312_HookEnd(new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_S.thick), _r319_t8), r312_g2(r319_box.left, _r319_t8 + r312_SHook))));
            return void 0;
        }));
    });
    return void 0;
});


