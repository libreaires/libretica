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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-X", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var r312_straight = _r312_t2.straight;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_FlipAround = _r312_t6.FlipAround;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_UpperDf = _r312_t7.UpperDf;
        var r312_LowerDf = _r312_t7.LowerDf;
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
        var r312_XShapeHalf = function (r318_pen, r318_box) {
            var _r318_t0, _r318_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                var _r320_t0, _r320_t1, _r320_t2, _r320_t3, _r320_t4;
                r320_currentGlyph.include((_r320_t0 = r318_box.left, _r320_t1 = r318_box.top, _r320_t2 = r318_box.bot, r312_xn$frakturstroke$3qIs(r318_pen, r312_corner(_r320_t0 - r312_DecoSizeX, _r320_t1 - r312_DecoSizeY), r312_corner(_r320_t0, _r320_t1), r312_straight.down.mid(r318_box.xMid, r318_box.yMid), r312_corner(_r320_t0, _r320_t2), r312_corner(_r320_t0 - r312_DecoSizeX, _r320_t2 + r312_DecoSizeY))));
                return void 0;
            });
        };
        var r312_XSHapeImpl = function (r323_pen, r323_box) {
            var _r323_t0, _r323_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                var _r325_t0, _r325_t1, _r325_t2, _r325_t3, _r325_t4, _r325_t5, _r325_t6;
                var r325_bodyBox = r323_box.withXPadding(0.5 * r312_DecoSizeX);
                r325_currentGlyph.include(r312_XShapeHalf(r323_pen, r325_bodyBox));
                r325_currentGlyph.include(r312_FlipAround(r323_box.xMid, r323_box.yMid));
                r325_currentGlyph.include(r312_XShapeHalf(r323_pen, r325_bodyBox));
                r325_currentGlyph.include((_r325_t0 = r323_box.xp(0.25) - 0.5 * r312_DecoSizeX, _r325_t1 = r323_box.xMid, _r325_t2 = r323_box.yMid, _r325_t3 = r323_box.xp(0.75), _r325_t4 = r1_slY(_r325_t1, _r325_t2, _r325_t3, 0.25 * r312_SlopeA), r312_xn$frakturstroke$3qIs(r312_F, r312_corner(_r325_t0, r1_slY(_r325_t1, _r325_t2, _r325_t0, 0.25 * r312_SlopeA)), r312_corner(_r325_t1, _r325_t2), r312_corner(_r325_t3, _r325_t4), r312_corner(_r325_t3 + 0.5 * r312_DecoSizeX, _r325_t4 - 0.5 * r312_DecoSizeY))));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/X", 120091, new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
            var _r333_t0, _r333_t1;
            var r333_df = r333_currentGlyph.include(r312_UpperDf(1));
            r333_currentGlyph.include(r333_df.markSet.capital());
            var r333_xBox = r312_S.box(r312_CAP, 0, r333_df.leftSB, r333_df.rightSB);
            r333_currentGlyph.include(r312_XSHapeImpl(r312_S, r333_xBox));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("frak/x", 120117, new r312_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
            var _r339_t0, _r339_t1;
            var r339_df = r339_currentGlyph.include(r312_LowerDf(1));
            r339_currentGlyph.include(r339_df.markSet.e());
            var r339_xBox = r312_S.box(r312_XH, 0, r339_df.leftSB, r339_df.rightSB);
            r339_currentGlyph.include(r312_XSHapeImpl(r312_S, r339_xBox));
            return void 0;
        }));
    });
    return void 0;
});


