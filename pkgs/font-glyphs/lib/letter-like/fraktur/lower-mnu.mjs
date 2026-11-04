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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Lower-MNU", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t12, _r312_t13;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_XH = _r312_t1.XH;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r312_markMiddle = _r312_t7.markMiddle;
        var r312_markDotsRadius = _r312_t7.markDotsRadius;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r312_StdAnchors = _r312_t8.StdAnchors;
        var r312_aboveMarkTop = _r312_t8.aboveMarkTop;
        var r312_aboveMarkBot = _r312_t8.aboveMarkBot;
        var r312_aboveMarkMid = _r312_t8.aboveMarkMid;
        var r312_aboveMarkStack = _r312_t8.aboveMarkStack;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_LowerDf = _r312_t9.LowerDf;
        var r312_S = _r312_t9.S;
        var r312_M = _r312_t9.M;
        var r312_xn$frakturstroke$3qIs = _r312_t9["fraktur-stroke"];
        var r312_xn$changepen$7Hrq = _r312_t9["change-pen"];
        var _r312_t10 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_DecoSizeX = _r312_t10.DecoSizeX;
        var r312_DecoSizeY = _r312_t10.DecoSizeY;
        var r312_SlopeA = _r312_t10.SlopeA;
        var r312_SlopeB = _r312_t10.SlopeB;
        var _r312_t11 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_Wave = _r312_t11.Wave;
        var r312_PHexTop = _r312_t11.PHexTop;
        var r312_PHexBot = _r312_t11.PHexBot;
        var r312_LTDecoration = _r312_t11.LTDecoration;
        var r312_RBDecoration = _r312_t11.RBDecoration;
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/m", 120106, new r312_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
            var _r322_t0, _r322_t1, _r322_t2, _r322_t3, _r322_t4, _r322_t5, _r322_t6, _r322_t7, _r322_t8, _r322_t9;
            var r322_df = r322_currentGlyph.include(r312_LowerDf(r312_para.advanceScaleM, 3));
            r322_currentGlyph.include(r322_df.markSet.e());
            var r322_box = r312_M.box(r312_XH, 0, r322_df.leftSB, r322_df.rightSB);
            r322_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_M, r312_LTDecoration(r322_box.left, r322_box.top), r312_corner(r322_box.left, r322_box.bot)));
            r322_currentGlyph.include((_r322_t0 = r322_box.left, _r322_t1 = r322_box.xp(r1_mix(0, 0.5, r1_mix(0.5, 1, r312_PHexTop))), _r322_t2 = r322_box.top, _r322_t3 = r322_box.xMid, r312_xn$frakturstroke$3qIs(r312_M, r312_corner(_r322_t0, r1_slY(_r322_t1, _r322_t2, _r322_t0, r312_SlopeA)), r312_corner(_r322_t1, _r322_t2), r312_corner(_r322_t3, r1_slY(_r322_t1, _r322_t2, _r322_t3, r312_SlopeB)), r312_corner(_r322_t3, r322_box.bot))));
            r322_currentGlyph.include((_r322_t4 = r322_box.xMid, _r322_t5 = r322_box.xp(r1_mix(0.5, 1, r1_mix(0.5, 1, r312_PHexTop))), _r322_t6 = r322_box.top, _r322_t7 = r322_box.right, r312_xn$frakturstroke$3qIs(r312_M, r312_corner(_r322_t4, r1_slY(_r322_t5, _r322_t6, _r322_t4, r312_SlopeA)), r312_corner(_r322_t5, _r322_t6), r312_corner(_r322_t7, r1_slY(_r322_t5, _r322_t6, _r322_t7, r312_SlopeB)), r312_RBDecoration(_r322_t7, r322_box.bot))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/n", 120107, new r312_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
            var _r332_t0, _r332_t1, _r332_t2, _r332_t3, _r332_t4, _r332_t5;
            var r332_df = r332_currentGlyph.include(r312_LowerDf(1));
            r332_currentGlyph.include(r332_df.markSet.e());
            var r332_box = r312_S.box(r312_XH, 0, r332_df.leftSB, r332_df.rightSB);
            r332_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_S, r312_LTDecoration(r332_box.left, r332_box.top), r312_corner(r332_box.left, r332_box.bot)));
            r332_currentGlyph.include((_r332_t0 = r332_box.left, _r332_t1 = r332_box.xp(r1_mix(0.5, 1, r312_PHexTop)), _r332_t2 = r332_box.top, _r332_t3 = r332_box.right, r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r332_t0, r1_slY(_r332_t1, _r332_t2, _r332_t0, r312_SlopeA)), r312_corner(_r332_t1, _r332_t2), r312_corner(_r332_t3, r1_slY(_r332_t1, _r332_t2, _r332_t3, r312_SlopeB)), r312_RBDecoration(_r332_t3, r332_box.bot))));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("frak/u", 120114, new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
            var _r340_t0, _r340_t1, _r340_t2, _r340_t3, _r340_t4, _r340_t5;
            var r340_df = r340_currentGlyph.include(r312_LowerDf(1));
            r340_currentGlyph.include(r340_df.markSet.e());
            var r340_box = r312_S.box(r312_XH, 0, r340_df.leftSB, r340_df.rightSB);
            var r340_leftStroke = r340_currentGlyph.include((_r340_t0 = r340_box.left, _r340_t1 = r340_box.xp(r312_PHexBot), _r340_t2 = r340_box.bot, _r340_t3 = r340_box.right, r312_xn$frakturstroke$3qIs(r312_S, r312_LTDecoration(_r340_t0, r340_box.top), r312_corner(_r340_t0, r1_slY(_r340_t1, _r340_t2, _r340_t0, r312_SlopeB)), r312_corner(_r340_t1, _r340_t2), r312_corner(_r340_t3, r1_slY(_r340_t1, _r340_t2, _r340_t3, r312_SlopeA)))));
            r340_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_S, r312_LTDecoration(r340_box.right, r340_box.top), r312_RBDecoration(r340_box.right, r340_box.bot, r340_leftStroke.last().y)));
            return void 0;
        }));
    });
    return void 0;
});


