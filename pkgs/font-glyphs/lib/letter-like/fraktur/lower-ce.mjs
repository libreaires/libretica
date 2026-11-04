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
var r1_fallback = _r1_t8.fallback;
var r1_min = _r1_t8.min;
var r1_max = _r1_t8.max;
var r1_slY = _r1_t8.slY;
r1_xn$GlyphBlocks$2Lrc2b.push(function (r311_xn$Capture_Ext$2Lrc2b) {
    var _r311_t0, _r311_t1;
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Lower-CE", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_DesignParameters = _r312_t1.DesignParameters;
        var r312_XH = _r312_t1.XH;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_curl = _r312_t2.curl;
        var r312_end = _r312_t2.end;
        var r312_g2c = _r312_t2.g2c;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_alias = _r312_t5.alias;
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
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/e", 43826, new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
            var _r320_t0, _r320_t1, _r320_t2, _r320_t3, _r320_t4, _r320_t5, _r320_t6, _r320_t7, _r320_t8, _r320_t9;
            var r320_df = r320_currentGlyph.include(r312_LowerDf(1));
            r320_currentGlyph.include(r320_df.markSet.e());
            var r320_box = r312_S.box(r312_XH, 0, r320_df.leftSB, r320_df.rightSB);
            r320_currentGlyph.include((_r320_t1 = r320_box.left, _r320_t0 = _r320_t1 + r312_S.thick, _r320_t2 = r320_box.xMid, _r320_t3 = r320_box.yp(r312_DesignParameters.eBarPos), _r320_t4 = r320_box.right, _r320_t5 = r320_box.xp(r312_PHexTop), _r320_t6 = r320_box.top, _r320_t7 = r320_box.bot, r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r320_t0, r1_slY(_r320_t2, _r320_t3, _r320_t0, r312_SlopeA)), r312_g2(_r320_t2, _r320_t3), r312_corner(_r320_t4, r1_slY(_r320_t2, _r320_t3, _r320_t4, r312_SlopeA)), r312_corner(_r320_t5, _r320_t6), r312_corner(_r320_t1, r1_slY(_r320_t5, _r320_t6, _r320_t1, r312_SlopeA)), r312_curl(_r320_t1, _r320_t7 + r312_ArchDepthB), r312_g2c.sr(-r312_SlopeA).end(_r320_t5, _r320_t7), r312_corner(_r320_t4, r1_slY(_r320_t5, _r320_t7, _r320_t4, r312_SlopeA)))));
            return void 0;
        }));
        r312_alias("mathFrak/e", 120098, "frak/e");
        return r312_xn$GlyphSaveSink$2Lrc4b.save("frak/c", 120096, new r312_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
            var _r327_t0, _r327_t1, _r327_t2, _r327_t3, _r327_t4, _r327_t5, _r327_t6, _r327_t7;
            var r327_df = r327_currentGlyph.include(r312_LowerDf(1));
            r327_currentGlyph.include(r327_df.markSet.e());
            var r327_box = r312_S.box(r312_XH, 0, r327_df.leftSB, r327_df.rightSB);
            r327_currentGlyph.include((_r327_t0 = r327_box.right, _r327_t1 = r327_box.xp(r312_PHexTop), _r327_t2 = r327_box.top, _r327_t3 = r327_box.left, _r327_t4 = r327_box.bot, _r327_t5 = r327_box.xp(r312_PHexTop), r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r327_t0, r1_slY(_r327_t1, _r327_t2, _r327_t0, r312_SlopeB)), r312_corner(_r327_t1, _r327_t2), r312_corner(_r327_t3, r1_slY(_r327_t1, _r327_t2, _r327_t3, r312_SlopeA)), r312_curl(_r327_t3, _r327_t4 + r312_ArchDepthB), r312_g2c.sr(-r312_SlopeA).end(_r327_t5, _r327_t4), r312_corner(_r327_t0, r1_slY(_r327_t5, _r327_t4, _r327_t0, r312_SlopeA)))));
            return void 0;
        }));
    });
    return void 0;
});


