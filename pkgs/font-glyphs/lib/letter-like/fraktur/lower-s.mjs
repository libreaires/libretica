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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Lower-S", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t9, _r312_t10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_XH = _r312_t1.XH;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_FlipAround = _r312_t6.FlipAround;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_LowerDf = _r312_t7.LowerDf;
        var r312_S = _r312_t7.S;
        var r312_M = _r312_t7.M;
        var r312_xn$frakturstroke$3qIs = _r312_t7["fraktur-stroke"];
        var r312_xn$changepen$7Hrq = _r312_t7["change-pen"];
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_DecoSizeX = _r312_t8.DecoSizeX;
        var r312_DecoSizeY = _r312_t8.DecoSizeY;
        var r312_SlopeA = _r312_t8.SlopeA;
        var r312_SlopeB = _r312_t8.SlopeB;
        var r312_FHook = _r312_t8.FHook;
        var r312_PHexTop = _r312_t8.PHexTop;
        var r312_HalfS = function (r317_box) {
            var _r317_t6, _r317_t7;
            var _r317_t0 = r317_box.right;
            var _r317_t1 = r317_box.top;
            var _r317_t2 = r317_box.xp(0.5 * r312_PHexTop);
            var _r317_t4 = r317_box.xMid;
            var _r317_t5 = r317_box.yMid;
            var _r317_t3 = r1_slY(_r317_t4, _r317_t5, _r317_t2, r312_SlopeA);
            return r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r317_t0, _r317_t1), r312_g2(r1_mix(_r317_t0, _r317_t2, 0.5), _r317_t1 - 0.5 * r312_FHook), r312_corner(_r317_t2, _r317_t1), r312_g2.down.mid(r317_box.left, r1_mix(_r317_t1, _r317_t3, 0.5)), r312_corner(_r317_t2, _r317_t3), r312_corner(_r317_t4, _r317_t5));
        };
        return r312_xn$GlyphSaveSink$2Lrc4b.save("frak/s", 120112, new r312_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
            var _r321_t0, _r321_t1;
            var r321_df = r321_currentGlyph.include(r312_LowerDf(1));
            r321_currentGlyph.include(r321_df.markSet.bp());
            var r321_box = r312_S.box(r312_XH, 0, r321_df.leftSB, r321_df.rightSB);
            var r321_lowerHalf = r321_currentGlyph.include(r312_HalfS(r321_box));
            r321_currentGlyph.include(r312_FlipAround(r321_box.xMid, r321_box.yMid));
            var r321_upperHalf = r321_currentGlyph.include(r312_HalfS(r321_box));
            return void 0;
        }));
    });
    return void 0;
});


