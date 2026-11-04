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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Lower-HY", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_XH = _r312_t1.XH;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_Descender = _r312_t1.Descender;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var r312_straight = _r312_t2.straight;
        var r312_cg2 = _r312_t2.cg2;
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
        var r312_LTDecoration = _r312_t9.LTDecoration;
        var r312_LeftHalfShape = function (r318_mode, r318_box) {
            var _r318_t4, _r318_t5;
            var _r318_t0 = r318_box.left;
            var _r318_t3 = r318_box.xMid;
            var _r318_t1 = _r318_t3 - r312_DecoSizeX;
            var _r318_t2 = r318_box.bottom;
            return r312_xn$frakturstroke$3qIs(r312_S, r312_LTDecoration(r318_box.left, r318_box.top), r312_corner(_r318_t0, r1_slY(_r318_t1, _r318_t2, _r318_t0, r312_SlopeB)), r312_corner(_r318_t1, _r318_t2), r312_corner(_r318_t3, _r318_t2 + r312_DecoSizeY));
        };
        var r312_RightHalfShape = function (r320_mode, r320_box) {
            var _r320_t4, _r320_t5;
            var _r320_t0 = r320_box.left;
            var _r320_t1 = r320_box.xp(r312_PHexTop);
            var _r320_t2 = r320_box.top;
            var _r320_t3 = r320_box.right;
            return r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r320_t0, r1_slY(_r320_t1, _r320_t2, _r320_t0, r312_SlopeA)), r312_cg2.sr(r312_SlopeB).start(_r320_t1, _r320_t2), r312_straight.down.mid(_r320_t3, r320_box.yMid), r312_corner(r320_box.xp(r312_PHexTop), r320_box.bottom));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/h", 120101, new r312_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
            var _r324_t0, _r324_t1;
            var r324_df = r324_currentGlyph.include(r312_LowerDf(1));
            r324_currentGlyph.include(r324_df.markSet.bp());
            var r324_leftBox = r312_S.box(r312_Ascender, 0, r324_df.leftSB, r324_df.rightSB);
            var r324_rightBox = r312_S.box(r312_XH, r312_Descender, r324_df.leftSB, r324_df.rightSB);
            var r324_leftStroke = r324_currentGlyph.include(r312_LeftHalfShape("h", r324_leftBox));
            var r324_rightStroke = r324_currentGlyph.include(r312_RightHalfShape("h", r324_rightBox));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("frak/y", 120118, new r312_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
            var _r331_t0, _r331_t1;
            var r331_df = r331_currentGlyph.include(r312_LowerDf(1));
            r331_currentGlyph.include(r331_df.markSet.p());
            var r331_leftBox = r312_S.box(r312_XH, 0, r331_df.leftSB, r331_df.rightSB);
            var r331_rightBox = r312_S.box(r312_XH, r312_Descender, r331_df.leftSB, r331_df.rightSB);
            var r331_leftStroke = r331_currentGlyph.include(r312_LeftHalfShape("y", r331_leftBox));
            var r331_rightStroke = r331_currentGlyph.include(r312_RightHalfShape("y", r331_rightBox));
            return void 0;
        }));
    });
    return void 0;
});


