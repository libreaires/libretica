"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_min = _r1_t8.min;
var r1_max = _r1_t8.max;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Lower-BOPVW", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_XH = _r312_t1.XH;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_Descender = _r312_t1.Descender;
        var r312_OX = _r312_t1.OX;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_close = _r312_t2.close;
        var r312_g2c = _r312_t2.g2c;
        var r312_cg2 = _r312_t2.cg2;
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
        var r312_M = _r312_t7.M;
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
        var r312_LTDecoration = _r312_t9.LTDecoration;
        var r312_ORightShape = function (r318_mode, r318_profile, r318_oBox) {
            var r318____, _r318_t7, _r318_t8, _r318_t9;
            var _r318_t0 = r318_oBox.left;
            var _r318_t1 = r318_oBox.xp(r312_PHexTop);
            var _r318_t2 = r318_oBox.top;
            var _r318_t3 = r318_oBox.xp(r312_PHexBot);
            var _r318_t4 = r318_oBox.bot;
            var _r318_t5 = r318_oBox.left;
            var _r318_t6 = r1_slY(_r318_t3, _r318_t4, _r318_t5, r312_SlopeB);
            return r312_xn$frakturstroke$3qIs(r318_profile, r312_corner(_r318_t0, r1_slY(_r318_t1, _r318_t2, _r318_t0, r312_SlopeA)), r312_cg2.sr(r312_SlopeB).start(_r318_t1, _r318_t2), r312_g2.down.mid(r318_oBox.right - r312_OX, r318_oBox.yp(0.5)), r312_g2c.sl(r312_SlopeA).start(_r318_t3, _r318_t4), r312_corner(_r318_t5, _r318_t6), (_r318_t7 = r318_mode, _r318_t7 === "o" ? r312_close() : _r318_t7 === "p" ? r312_xn$decor$0cao(r312_corner(_r318_t5 - r312_DecoSizeX, _r318_t6 - r312_DecoSizeY)) : (r318____ = _r318_t7, [])));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/o", 43837, new r312_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
            var _r323_t0, _r323_t1;
            var r323_df = r323_currentGlyph.include(r312_LowerDf(1));
            r323_currentGlyph.include(r323_df.markSet.e());
            var r323_oBox = r312_S.box(r312_XH, 0, r323_df.leftSB, r323_df.rightSB);
            r323_currentGlyph.include(r312_ORightShape("o", r312_S, r323_oBox));
            return void 0;
        }));
        r312_alias("mathFrak/o", 120108, "frak/o");
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/b", 120095, new r312_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
            var _r329_t0, _r329_t1;
            var r329_df = r329_currentGlyph.include(r312_LowerDf(1));
            r329_currentGlyph.include(r329_df.markSet.b());
            var r329_oBox = r312_S.box(r312_XH, 0, r329_df.leftSB, r329_df.rightSB);
            var r329_bBox = r312_S.box(r312_Ascender, 0, r329_df.leftSB, r329_df.rightSB);
            var r329_rightStroke = r329_currentGlyph.include(r312_ORightShape("b", r312_S, r329_oBox));
            var r329_leftStroke = r329_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_S, r312_LTDecoration(r329_bBox.left, r329_bBox.top), r312_corner(r329_rightStroke.last().x, r329_rightStroke.last().y)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/p", 120109, new r312_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
            var _r336_t0, _r336_t1;
            var r336_df = r336_currentGlyph.include(r312_LowerDf(1));
            r336_currentGlyph.include(r336_df.markSet.p());
            var r336_oBox = r312_S.box(r312_XH, 0, r336_df.leftSB, r336_df.rightSB);
            var r336_pBox = r312_S.box(r312_XH, r312_Descender, r336_df.leftSB, r336_df.rightSB);
            var r336_rightStroke = r336_currentGlyph.include(r312_ORightShape("p", r312_S, r336_oBox));
            var r336_leftStroke = r336_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_S, r312_LTDecoration(r336_pBox.left, r336_pBox.top, r336_rightStroke.first().y), r312_corner(r336_pBox.left, r336_pBox.bot)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/v", 120115, new r312_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
            var _r343_t0, _r343_t1;
            var r343_df = r343_currentGlyph.include(r312_LowerDf(1));
            r343_currentGlyph.include(r343_df.markSet.e());
            var r343_vBox = r312_S.box(r312_XH, 0, r343_df.leftSB, r343_df.rightSB);
            var r343_rightStroke = r343_currentGlyph.include(r312_ORightShape("v", r312_S, r343_vBox));
            var r343_leftStroke = r343_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_S, r312_LTDecoration(r343_vBox.left, r343_vBox.top, r343_rightStroke.first().y), r312_corner(r343_rightStroke.last().x, r343_rightStroke.last().y)));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("frak/w", 120116, new r312_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
            var _r350_t0, _r350_t1, _r350_t2, _r350_t3, _r350_t4, _r350_t5, _r350_t6, _r350_t7, _r350_t8;
            var r350_df = r350_currentGlyph.include(r312_LowerDf(r312_para.advanceScaleM, 3));
            r350_currentGlyph.include(r350_df.markSet.e());
            var r350_wBox = r312_M.box(r312_XH, 0, r350_df.leftSB, r350_df.rightSB);
            var r350_rightHalfBox = r350_wBox.withLeft(r350_wBox.xMid);
            var r350_leftHalfBox = r350_wBox.withRight(r350_wBox.xMid);
            var r350_rightStroke = r350_currentGlyph.include(r312_ORightShape("o", r312_M, r350_rightHalfBox));
            var r350_middleStroke = r350_currentGlyph.include((_r350_t0 = r350_leftHalfBox.left, _r350_t1 = r350_leftHalfBox.xp(r312_PHexTop), _r350_t2 = r350_leftHalfBox.top, _r350_t3 = r350_leftHalfBox.right, _r350_t4 = r350_leftHalfBox.xp(r312_PHexBot), _r350_t5 = r350_leftHalfBox.bot, _r350_t6 = r350_leftHalfBox.left, r312_xn$frakturstroke$3qIs(r312_M, r312_corner(_r350_t0, r1_slY(_r350_t1, _r350_t2, _r350_t0, r312_SlopeA)), r312_corner(_r350_t1, _r350_t2), r312_corner(_r350_t3, r1_slY(_r350_t1, _r350_t2, _r350_t3, r312_SlopeB)), r312_corner(_r350_t3, r1_slY(_r350_t4, _r350_t5, _r350_t3, r312_SlopeA)), r312_corner(_r350_t4, _r350_t5), r312_corner(_r350_t6, r1_slY(_r350_t4, _r350_t5, _r350_t6, r312_SlopeB)))));
            var r350_leftStroke = r350_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_M, r312_LTDecoration(r350_leftHalfBox.left, r350_leftHalfBox.top, r350_middleStroke.first().y), r312_corner(r350_middleStroke.last().x, r350_middleStroke.last().y)));
            return void 0;
        }));
    });
    return void 0;
});


