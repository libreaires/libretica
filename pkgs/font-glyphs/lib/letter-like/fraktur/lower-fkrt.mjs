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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Lower-F", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_DesignParameters = _r312_t1.DesignParameters;
        var r312_XH = _r312_t1.XH;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_Descender = _r312_t1.Descender;
        var r312_TBalance = _r312_t1.TBalance;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_end = _r312_t2.end;
        var r312_straight = _r312_t2.straight;
        var r312_ccurl = _r312_t2.ccurl;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HookStart = _r312_t6.HookStart;
        var r312_Arch = _r312_t6.Arch;
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
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/f", 120099, new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
            var _r320_t0, _r320_t1;
            var r320_df = r320_currentGlyph.include(r312_LowerDf(1));
            r320_currentGlyph.include(r320_df.markSet.bp());
            var r320_box = r312_S.box(r312_Ascender, r312_Descender, r320_df.leftSB, r320_df.rightSB);
            r320_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_S, r312_g2(r320_box.xp(13 / 16), r320_box.top - r312_FHook), r312_HookStart(new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_S.thick), r320_box.top), r312_g2(r320_box.xp(5 / 16), r320_box.top - 0.5 * r312_ArchDepthA, r312_xn$changepen$7Hrq(r312_T)), r312_flat(r320_box.xMid, r312_XH * r312_DesignParameters.fBarPosToXH - r312_S.thick, r312_xn$changepen$7Hrq(r312_S)), r312_curl(r320_box.xMid, r320_box.bottom)));
            r320_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_F, r312_corner(r320_box.left, r312_XH * r312_DesignParameters.fBarPosToXH), r312_corner(r320_box.right, r312_XH * r312_DesignParameters.fBarPosToXH)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/k", 120104, new r312_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
            var _r328_t0, _r328_t1, _r328_t2, _r328_t3, _r328_t4, _r328_t5, _r328_t6, _r328_t7, _r328_t8, _r328_t9, _r328_t10;
            var r328_df = r328_currentGlyph.include(r312_LowerDf(1));
            r328_currentGlyph.include(r328_df.markSet.bp());
            var r328_box = r312_S.box(r312_Ascender, 0, r328_df.leftSB, r328_df.rightSB);
            var r328_xBox = r312_T.box(r312_XH, 0, r328_df.leftSB, r328_df.rightSB);
            var r328_centerStroke = r328_currentGlyph.include((_r328_t0 = r328_box.xMid - 0.75 * r312_TBalance, _r328_t1 = r328_box.top, _r328_t4 = r328_box.xp(0.875), _r328_t2 = r1_mix(_r328_t0, _r328_t4, r312_PHexBot), _r328_t3 = r328_box.bottom, r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r328_t0 - r312_DecoSizeX, _r328_t1 - r312_DecoSizeY), r312_corner(_r328_t0, _r328_t1), r312_corner(_r328_t0, r1_slY(_r328_t2, _r328_t3, _r328_t0, r312_SlopeB)), r312_corner(_r328_t2, _r328_t3), r312_corner(_r328_t4, r1_slY(_r328_t2, _r328_t3, _r328_t4, r312_SlopeA)))));
            r328_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_F, r312_corner(r328_box.left, r328_xBox.top), r312_corner(r328_box.right, r328_xBox.top)));
            r328_currentGlyph.include((_r328_t5 = r328_centerStroke.first(1).x, _r328_t6 = r1_mix(r328_xBox.top, r328_box.top, 0.75), _r328_t7 = r328_box.right, _r328_t8 = r328_xBox.top, r312_xn$frakturstroke$3qIs(r312_F, r312_g2.up.start(_r328_t5, r328_xBox.top), r312_Arch.rhs(new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_F.thick), new r312_xn$NamedParameterPair$2Lrc9b("blendPost", []), _r328_t6, 0.7), r312_g2(_r328_t7, r1_mix(_r328_t6, _r328_t8, 0.5)), r312_g2(r1_mix(_r328_t7, _r328_t5, 0.25), _r328_t8))));
            return void 0;
        }));
        var r312_RTBottom = function (r338_xS, r338_box, r338_p) {
            var _r338_t3, _r338_t4;
            var _r338_t2 = r338_box.xp(r338_p);
            var _r338_t0 = r1_mix(r338_xS, _r338_t2, r312_PHexBot);
            var _r338_t1 = r338_box.bottom;
            return [r312_corner(r338_xS, r1_slY(_r338_t0, _r338_t1, r338_xS, r312_SlopeB)), r312_corner(_r338_t0, _r338_t1), r312_corner(_r338_t2, r1_slY(_r338_t0, _r338_t1, _r338_t2, r312_SlopeA))];
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/r", 120111, new r312_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
            var _r342_t0, _r342_t1, _r342_t2, _r342_t3, _r342_t4, _r342_t5, _r342_t6, _r342_t7, _r342_t8, _r342_t9;
            var r342_df = r342_currentGlyph.include(r312_LowerDf(1));
            r342_currentGlyph.include(r342_df.markSet.bp());
            var r342_box = r312_S.box(r312_XH, 0, r342_df.leftSB, r342_df.rightSB);
            var r342_rightHalfBox = r342_box.withLeft(r342_box.xp(0.375));
            var r342_rightStroke = r342_currentGlyph.include((_r342_t0 = r342_rightHalfBox.right, _r342_t1 = r342_rightHalfBox.xp(r312_PHexTop), _r342_t2 = r342_rightHalfBox.top, _r342_t3 = r342_rightHalfBox.left, r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r342_t0, r1_slY(_r342_t1, _r342_t2, _r342_t0, r312_SlopeB)), r312_corner(_r342_t1, _r342_t2), r312_straight.down.end(_r342_t3, r1_slY(_r342_t1, _r342_t2, _r342_t3, 2 * r312_SlopeA)))));
            var r342_leftStroke = r342_currentGlyph.include((_r342_t6 = r342_rightHalfBox.left, _r342_t4 = _r342_t6 - 0.5 * r312_DecoSizeX, _r342_t5 = r342_box.top, _r342_t7 = r342_rightStroke.last().y, r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r342_t4 - r312_DecoSizeX, _r342_t5 - r312_DecoSizeY), r312_ccurl.sr(r312_SlopeB).start(_r342_t4, _r342_t5), r312_flat(_r342_t6, _r342_t7), r312_RTBottom(_r342_t6, r342_box, 13 / 16))));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("frak/t", 120113, new r312_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
            var _r351_t0, _r351_t1, _r351_t2, _r351_t3;
            var r351_df = r351_currentGlyph.include(r312_LowerDf(1));
            r351_currentGlyph.include(r351_df.markSet.bp());
            var r351_box = r312_S.box(r312_Ascender, 0, r351_df.leftSB, r351_df.rightSB);
            var r351_xBox = r312_T.box(r312_XH, 0, r351_df.leftSB, r351_df.rightSB);
            r351_currentGlyph.include((_r351_t0 = r351_box.xMid - 0.5 * r312_TBalance, _r351_t1 = r351_box.top, r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r351_t0 + r312_DecoSizeX, _r351_t1), r312_corner(_r351_t0, _r351_t1 - r312_DecoSizeY), r312_RTBottom(_r351_t0, r351_box, 0.875))));
            r351_currentGlyph.include(r312_xn$frakturstroke$3qIs(r312_F, r312_corner(r351_box.left, r351_xBox.top), r312_corner(r351_box.right, r351_xBox.top)));
            return void 0;
        }));
    });
    return void 0;
});


