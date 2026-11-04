"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Upper-MNP", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_straight = _r312_t2.straight;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Arch = _r312_t6.Arch;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_UpperDf = _r312_t7.UpperDf;
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
        var r312_deriveBoxes = function (r318_box) {
            var _r318_t0, _r318_t1;
            var r318_body = r318_box.padLeft(+1.5 * r312_DecoSizeX);
            var r318_deco = r318_box.padLeft(-0.25 * r312_DecoSizeX);
            return [r318_body, r318_deco];
        };
        var r312_LeftStroke = function (r319_box, r319_profile) {
            var _r319_t0, _r319_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var _r321_t1, _r321_t2;
                var _r321_t0 = r312_deriveBoxes(r319_box);
                var r321_body = _r321_t0[0];
                var r321_deco = _r321_t0[1];
                var r321_knots = function () {
                    var _r322_t5, _r322_t6;
                    var _r322_t0 = r321_deco.left;
                    var _r322_t1 = r321_deco.top;
                    var _r322_t2 = r321_body.left;
                    var _r322_t3 = r321_deco.bot;
                    var _r322_t4 = _r322_t0 + 0.5 * r312_DecoSizeX;
                    return [r312_g2.ru.start(_r322_t0, r321_deco.yp(0.625) - 2 * r312_F.thick, r312_xn$changepen$7Hrq(r312_F)), r312_xn$decor$0cao(r312_Wave.vc(r312_Wave.LTDecoSize)), r312_g2.ru.mid(_r322_t0, _r322_t1 - r312_DecoSizeY, r312_xn$changepen$7Hrq(r319_profile)), r312_Arch.rhs(new r312_xn$NamedParameterPair$2Lrc9b("sw", r319_profile.thick), new r312_xn$NamedParameterPair$2Lrc9b("blendPre", null), _r322_t1, 0.4), r312_flat(_r322_t2, _r322_t1 - r312_ArchDepthA), r312_curl(_r322_t2, _r322_t3 + r312_ArchDepthB), r312_corner(_r322_t4, _r322_t3), r312_corner(_r322_t4 - r312_DecoSizeX, _r322_t3 + r312_DecoSizeY)];
                };
                var r321_s = r321_currentGlyph.include(r312_xn$frakturstroke$3qIs(r319_profile, r321_knots()));
                return {
                    "maskLeft": function () {
                        var _r328_t0, _r328_t1;
                        return r312_xn$frakturstroke$3qIs(r312_CutMaskLeft, r321_knots());
                    }
                };
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/M", 120080, new r312_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
            var _r331_t1, _r331_t2, _r331_t3, _r331_t4, _r331_t5, _r331_t6, _r331_t7, _r331_t8, _r331_t9, _r331_t10, _r331_t11, _r331_t12;
            var r331_df = r331_currentGlyph.include(r312_UpperDf(r312_para.advanceScaleM, 3));
            r331_currentGlyph.include(r331_df.markSet.capital());
            var r331_box = r312_M.box(r312_CAP, 0, r331_df.leftSB, r331_df.rightSB);
            var _r331_t0 = r312_deriveBoxes(r331_box);
            var r331_body = _r331_t0[0];
            var r331_deco = _r331_t0[1];
            var r331_leftStroke = r331_currentGlyph.include(r312_LeftStroke(r331_box, r312_M));
            var r331_rightStroke = r331_currentGlyph.include((_r331_t1 = r331_body.right + 0.25 * r312_DecoSizeX, _r331_t2 = r331_body.bottom, _r331_t3 = r331_body.yp(0.75) + r312_S.thick, _r331_t4 = _r331_t1 + 0.25 * r312_DecoSizeX, _r331_t5 = r331_body.top, _r331_t6 = _r331_t5 - 0.5 * r312_Wave.DepthY, r312_xn$frakturstroke$3qIs(r312_M, r312_corner(_r331_t1 + r312_DecoSizeX, _r331_t2 + r312_DecoSizeY), r312_corner(_r331_t1, _r331_t2), r312_xn$decor$0cao(r312_straight.up.mid(_r331_t1 - r312_Wave.DepthX, r1_mix(_r331_t2, _r331_t3, 0.5))), r312_corner(_r331_t4, _r331_t3), r312_xn$decor$0cao(r312_curl(_r331_t4 - r312_TINY, _r331_t3 - r312_TINY * r312_SlopeB)), r312_g2(_r331_t4 - 0.75 * r312_Wave.DepthX, r1_mix(_r331_t3, _r331_t5, 0.5)), r312_Arch.rhs(new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_M.thick), new r312_xn$NamedParameterPair$2Lrc9b("blendPre", []), _r331_t5), r312_corner(r331_body.xMid - 0.25 * r312_Wave.DepthX, _r331_t6), r312_xn$decor$0cao(r312_Arch.rhs(new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_M.thick), new r312_xn$NamedParameterPair$2Lrc9b("blendPre", []), new r312_xn$NamedParameterPair$2Lrc9b("blendPost", []), _r331_t5)), r312_corner(r331_body.left, _r331_t6))));
            var r331_middleStroke = r331_currentGlyph.include((_r331_t7 = r331_deco.xMid, _r331_t8 = r331_deco.bot, _r331_t9 = r331_body.xMid - 0.25 * r312_Wave.DepthX, _r331_t10 = r331_body.yp(0.75) + r312_S.thick, r312_xn$frakturstroke$3qIs(r312_M, r312_corner(_r331_t7 - r312_DecoSizeX, _r331_t8 + r312_DecoSizeY), r312_corner(_r331_t7, _r331_t8), r312_flat(_r331_t9, r1_mix(_r331_t8, _r331_t10, 0.5)), r312_flat(_r331_t9, _r331_t10), r312_curl(_r331_t9, r331_body.top - 0.5 * r312_Wave.DepthY))));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("frak/N", 120081, new r312_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
            var _r349_t1, _r349_t2, _r349_t3, _r349_t4, _r349_t5, _r349_t6;
            var r349_df = r349_currentGlyph.include(r312_UpperDf(1));
            r349_currentGlyph.include(r349_df.markSet.capital());
            var r349_box = r312_S.box(r312_CAP, 0, r349_df.leftSB, r349_df.rightSB);
            var _r349_t0 = r312_deriveBoxes(r349_box);
            var r349_body = _r349_t0[0];
            var r349_deco = _r349_t0[1];
            var r349_leftStroke = r349_currentGlyph.include(r312_LeftStroke(r349_box, r312_S));
            var r349_rightStroke = r349_currentGlyph.include((_r349_t1 = r349_body.right + 0.25 * r312_DecoSizeX, _r349_t2 = r349_body.bottom, _r349_t3 = r349_body.yp(0.75) + r312_S.thick, _r349_t4 = r349_body.top, r312_difference(r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r349_t1 + r312_DecoSizeX, _r349_t2 + r312_DecoSizeY), r312_corner(_r349_t1, _r349_t2), r312_xn$decor$0cao(r312_straight.up.mid(_r349_t1 - r312_Wave.DepthX, r1_mix(_r349_t2, _r349_t3, 0.5))), r312_corner(_r349_t1, _r349_t3), r312_xn$decor$0cao(r312_curl(_r349_t1 - r312_TINY, _r349_t3 - r312_TINY * r312_SlopeB)), r312_g2(_r349_t1 - r312_Wave.DepthX, r1_mix(_r349_t3, _r349_t4, 0.5)), r312_Arch.rhs(new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_S.thick), new r312_xn$NamedParameterPair$2Lrc9b("blendPre", []), _r349_t4), r312_corner(r349_body.left - r312_S.thick, _r349_t4 - r312_ArchDepthA)), r349_leftStroke.maskLeft())));
            return void 0;
        }));
    });
    return void 0;
});


