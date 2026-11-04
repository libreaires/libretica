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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Lower-AQ", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_XH = _r312_t1.XH;
        var r312_Descender = _r312_t1.Descender;
        var r312_OX = _r312_t1.OX;
        var r312_SHook = _r312_t1.SHook;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
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
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_Wave = _r312_t9.Wave;
        var r312_PHexTop = _r312_t9.PHexTop;
        var r312_PHexBot = _r312_t9.PHexBot;
        var r312_RBDecoration = _r312_t9.RBDecoration;
        var r312_LeftHalfShape = function (r318_mode, r318_box) {
            var _r318_t5, _r318_t6;
            var _r318_t0 = r318_box.right;
            var _r318_t1 = r318_box.xp(r312_PHexTop);
            var _r318_t2 = r318_box.top;
            var _r318_t3 = r318_box.xp(r312_PHexBot);
            var _r318_t4 = r318_box.bot;
            return r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r318_t0, r1_slY(_r318_t1, _r318_t2, _r318_t0, r312_SlopeB)), r312_corner(_r318_t1, _r318_t2), r312_g2.down.mid(r318_box.left - r312_OX, r318_box.yMid), r312_corner(_r318_t3, _r318_t4), r312_corner(_r318_t0, r1_slY(_r318_t3, _r318_t4, _r318_t0, r312_SlopeA)));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/a", 120094, new r312_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
            var _r322_t0, _r322_t1;
            var r322_df = r322_currentGlyph.include(r312_LowerDf(1));
            r322_currentGlyph.include(r322_df.markSet.e());
            var r322_aBox = r312_S.box(r312_XH, 0, r322_df.leftSB, r322_df.rightSB);
            var r322_leftStroke = r322_currentGlyph.include(r312_LeftHalfShape("a", r322_aBox));
            var r322_rightStroke = r322_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_S, r312_flat(r322_leftStroke.first().x, r322_leftStroke.first().y), r312_RBDecoration(r322_leftStroke.last().x, r322_aBox.bot, r322_leftStroke.last().y)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/g", 120100, new r312_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
            var _r329_t0, _r329_t1, _r329_t2, _r329_t3;
            var r329_df = r329_currentGlyph.include(r312_LowerDf(1));
            r329_currentGlyph.include(r329_df.markSet.p());
            var r329_aBox = r312_S.box(r312_XH, 0, r329_df.leftSB, r329_df.rightSB);
            var r329_gBox = r312_S.box(r312_XH, r312_Descender, r329_df.leftSB, r329_df.rightSB);
            var r329_leftStroke = r329_currentGlyph.include(r312_LeftHalfShape("p", r329_aBox));
            var r329_rightStroke = r329_currentGlyph.include((_r329_t0 = r329_leftStroke.last().x, _r329_t1 = r329_gBox.bot, r312_xn$frakturstroke$3qIs(r312_S, r312_corner(r329_leftStroke.first().x, r329_leftStroke.first().y), r312_corner(_r329_t0, r329_leftStroke.last().y), r312_g2(_r329_t0 + 0.5 * r312_DecoSizeX, _r329_t1 + r312_SmallArchDepthA), r312_HookEnd(new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_S.thick), _r329_t1), r312_g4(r329_gBox.left, _r329_t1 + r312_SHook))));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("frak/q", 120110, new r312_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
            var _r338_t0, _r338_t1;
            var r338_df = r338_currentGlyph.include(r312_LowerDf(1));
            r338_currentGlyph.include(r338_df.markSet.p());
            var r338_aBox = r312_S.box(r312_XH, 0, r338_df.leftSB, r338_df.rightSB);
            var r338_qBox = r312_S.box(r312_XH, r312_Descender, r338_df.leftSB, r338_df.rightSB);
            var r338_leftStroke = r338_currentGlyph.include(r312_LeftHalfShape("p", r338_aBox));
            var r338_rightStroke = r338_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_S, r312_flat(r338_leftStroke.first().x, r338_leftStroke.first().y), r312_RBDecoration(r338_leftStroke.last().x, r338_qBox.bot, r338_leftStroke.last().y)));
            return void 0;
        }));
    });
    return void 0;
});


