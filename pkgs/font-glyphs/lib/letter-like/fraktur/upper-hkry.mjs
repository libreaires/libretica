"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_min = _r1_t8.min;
var r1_max = _r1_t8.max;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Upper-HKR", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_Descender = _r312_t1.Descender;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_xn$VERYFAR$5sIl = _r312_t1["VERY-FAR"];
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_end = _r312_t2.end;
        var r312_g2c = _r312_t2.g2c;
        var r312_alsoThru = _r312_t2.alsoThru;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Arch = _r312_t6.Arch;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r312_UpperDf = _r312_t7.UpperDf;
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
        var r312_HOuterShape = function (r318_bBody, r318_bDeco, r318_yConnT, r318_yConnB) {
            var _r318_t7, _r318_t8;
            var _r318_t0 = r318_bBody.top;
            var _r318_t2 = r318_bBody.left;
            var _r318_t1 = _r318_t2 - 0.5 * r312_DecoSizeX;
            var _r318_t3 = r1_max(r318_yConnT, _r318_t0 - 0.75 * r312_ArchDepthA);
            var _r318_t5 = r318_bBody.bot;
            var _r318_t4 = _r318_t5 + 2 * r312_DecoSizeY;
            var _r318_t6 = r318_bBody.xMid;
            return r312_xn$frakturstroke$3qIs(r312_S, r312_g2(r318_bBody.right, _r318_t0 - r312_FHook), r312_Arch.lhs(new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_S.thick), new r312_xn$NamedParameterPair$2Lrc9b("blendPre", []), _r318_t0), r312_corner(_r318_t1, r1_slY(_r318_t2, _r318_t3, _r318_t1, r312_SlopeB)), r312_corner(_r318_t2, _r318_t3), r312_curl(_r318_t2, r1_min(r318_yConnB, _r318_t4 + r312_ArchDepthA)), r312_corner(r318_bDeco.left, _r318_t4), r312_g2c.r.end(_r318_t6 - r312_DecoSizeX, _r318_t5), r312_corner(_r318_t6, _r318_t5 + r312_DecoSizeY));
        };
        var r312_KRLegs = function (r322_box) {
            var _r322_t0, _r322_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var _r324_t0, _r324_t1, _r324_t2, _r324_t3, _r324_t4, _r324_t5, _r324_t6, _r324_t7, _r324_t8, _r324_t9, _r324_t10, _r324_t11;
                var r324_c = r324_currentGlyph.include((_r324_t0 = r322_box.left, _r324_t1 = r322_box.xp(r312_PHexTop), _r324_t2 = r322_box.top, _r324_t3 = r322_box.yp(0.55), _r324_t4 = r322_box.xp(0.625), r312_xn$frakturstroke$3qIs(r312_S, r312_flat(_r324_t0, r1_slY(_r324_t1, _r324_t2, _r324_t0, r312_SlopeA)), r312_corner(_r324_t1, _r324_t2), r312_g2.down.mid(r322_box.right, r1_mix(_r324_t2, _r324_t3, 0.5)), r312_flat(_r324_t4, _r324_t3), r312_curl(_r324_t0, r1_slY(_r324_t4, _r324_t3, _r324_t0, r312_SlopeA)))));
                var r324_xLegStart = r1_mix(r324_c.last(1).x, r324_c.last(2).x, 0.75);
                var r324_yLegStart = r1_mix(r324_c.last(1).y, r324_c.last(2).y, 0.75);
                r324_currentGlyph.include((_r324_t5 = r324_xLegStart, _r324_t6 = r324_yLegStart, _r324_t8 = r322_box.right + 0.5 * r312_DecoSizeX, _r324_t7 = r1_mix(_r324_t5, _r324_t8, 0.75), _r324_t9 = r322_box.bot, r312_xn$frakturstroke$3qIs(r312_S, r312_g2.sr(r312_SlopeA).start(_r324_t5, _r324_t6), r312_flat(_r324_t7, _r324_t6 - 0.6 * r312_ArchDepthB), r312_xn$decor$0cao(r312_curl(_r324_t7, _r324_t9 + 2 * r312_DecoSizeY)), r312_corner(_r324_t8, _r324_t9), r312_corner(_r324_t8 + r312_DecoSizeX, _r324_t9 + r312_DecoSizeY))));
                return {
                    "yConnT": r324_c.first().y,
                    "yConnB": r324_c.last().y
                };
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/H", 8460, new r312_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
            var _r332_t0, _r332_t1, _r332_t2, _r332_t3, _r332_t4;
            var r332_df = r332_currentGlyph.include(r312_UpperDf(1));
            r332_currentGlyph.include(r332_df.markSet.capDesc());
            var r332_hBox = r312_S.box(r312_CAP, 0, r332_df.leftSB, r332_df.rightSB);
            var r332_hDeco = r332_hBox.padLeft(-0.25 * r312_DecoSizeX);
            var r332_hBody = r332_hBox.padLeft(+0.75 * r312_DecoSizeX);
            var r332_hInner = r332_hBody.withTop(r332_hBody.yp(0.6)).withBottom(r312_Descender);
            var r332_c = r332_currentGlyph.include((_r332_t0 = r332_hInner.left, _r332_t1 = r332_hInner.xp(r312_PHexTop), _r332_t2 = r332_hInner.top, r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r332_t0, r1_slY(_r332_t1, _r332_t2, _r332_t0, r312_SlopeA)), r312_corner(_r332_t1, _r332_t2), r312_g2.down.mid(r332_hInner.right, r332_hInner.yp(0.75)), r312_xn$decor$0cao(r312_alsoThru.g2(0.5, 0.5)), r312_g2.down.mid(r332_hInner.xp(0.75), r332_hInner.yp(0.25)), r312_g2(r332_hInner.right, r332_hInner.bot))));
            r332_currentGlyph.include(r312_HOuterShape(r332_hBody, r332_hDeco, -r312_xn$VERYFAR$5sIl, r332_c.first().y));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/K", 120078, new r312_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
            var _r341_t0, _r341_t1;
            var r341_df = r341_currentGlyph.include(r312_UpperDf(1));
            r341_currentGlyph.include(r341_df.markSet.capital());
            var r341_kBox = r312_S.box(r312_CAP, 0, r341_df.leftSB, r341_df.rightSB);
            var r341_kDeco = r341_kBox.padLeft(-0.25 * r312_DecoSizeX);
            var r341_kBody = r341_kBox.padLeft(+0.75 * r312_DecoSizeX);
            var r341_kInner = r341_kBody.withTop(Math.min(r341_kBody.yp(0.75), r341_kBody.top - r312_FHook - r312_Wave.DepthY - r312_S.thick));
            var r341_leg = r341_currentGlyph.include(r312_KRLegs(r341_kInner));
            r341_currentGlyph.include(r312_HOuterShape(r341_kBody, r341_kDeco, r341_leg.yConnT, r341_leg.yConnB));
            return void 0;
        }));
        var r312_RKLeftStroke = function (r346_deco, r346_body, r346_yConnB, r346_pRight) {
            var _r346_t0, _r346_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                var _r348_t0, _r348_t1, _r348_t2, _r348_t3, _r348_t4, _r348_t5, _r348_t6, _r348_t7, _r348_t8;
                var r348_s = r348_currentGlyph.include((_r348_t0 = r346_deco.left, _r348_t1 = r346_body.top, _r348_t2 = r346_body.left, _r348_t3 = r346_body.top - 0.6 * r312_ArchDepthA, _r348_t5 = r312_S.yb(0), _r348_t4 = _r348_t5 + 2 * r312_DecoSizeY, _r348_t6 = r346_body.xp(0.5 * r346_pRight), r312_xn$frakturstroke$3qIs(r312_F, r312_g2.ru.start(_r348_t0, r346_deco.yp(0.625) - 2 * r312_F.thick), r312_xn$decor$0cao(r312_Wave.vc(r312_Wave.LTDecoSize)), r312_g2.ru.mid(_r348_t0, _r348_t1 - r312_DecoSizeY, r312_xn$changepen$7Hrq(r312_S)), r312_Arch.rhs(new r312_xn$NamedParameterPair$2Lrc9b("blendPre", []), _r348_t1, 0.625), r312_flat(_r348_t2, _r348_t3), r312_curl(_r348_t2, r1_min(r346_yConnB, r1_mix(_r348_t3, _r348_t4, 0.5))), r312_corner(_r348_t0, _r348_t4), r312_g2c.right.end(_r348_t6 - r312_DecoSizeX, _r348_t5), r312_corner(_r348_t6, _r348_t5 + r312_DecoSizeY))));
                return r348_s;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("frak/R", 8476, new r312_xn$Capture$2Lrc8.GlyphProc(function (r355_currentGlyph) {
            var _r355_t0, _r355_t1;
            var r355_df = r355_currentGlyph.include(r312_UpperDf(1));
            r355_currentGlyph.include(r355_df.markSet.capital());
            var r355_rBox = r312_S.box(r312_CAP, 0, r355_df.leftSB, r355_df.rightSB);
            var r355_rDeco = r355_rBox.padLeft(-0.25 * r312_DecoSizeX);
            var r355_rBody = r355_rBox.padLeft(+1.5 * r312_DecoSizeX);
            var r355_leg = r355_currentGlyph.include(r312_KRLegs(r355_rBody));
            var r355_leftStroke = r355_currentGlyph.include(r312_RKLeftStroke(r355_rDeco, r355_rBody, r355_leg.yConnB, 1));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("frak/Y", 120092, new r312_xn$Capture$2Lrc8.GlyphProc(function (r362_currentGlyph) {
            var _r362_t0, _r362_t1, _r362_t2, _r362_t3, _r362_t4;
            var r362_df = r362_currentGlyph.include(r312_UpperDf(1));
            r362_currentGlyph.include(r362_df.markSet.capDesc());
            var r362_yBox = r312_S.box(r312_CAP, 0, r362_df.leftSB, r362_df.rightSB);
            var r362_yDeco = r362_yBox.padLeft(-0.25 * r312_DecoSizeX);
            var r362_yBody = r362_yBox.padLeft(+1.5 * r312_DecoSizeX);
            var r362_leftStroke = r362_currentGlyph.include(r312_RKLeftStroke(r362_yDeco, r362_yBody, r362_yBody.top, 0.75));
            var r362_yRight = r362_yBody.withBottom(r312_Descender);
            var r362_rightStroke = r362_currentGlyph.include((_r362_t0 = r362_yRight.left, _r362_t1 = r362_yRight.xp(r312_PHexTop), _r362_t2 = r362_yRight.top, r312_xn$frakturstroke$3qIs(r312_S, r312_corner(_r362_t0, r1_slY(_r362_t1, _r362_t2, _r362_t0, r312_SlopeA)), r312_corner(_r362_t1, _r362_t2), r312_g2.down.mid(r362_yRight.right, r362_yRight.yp(0.75)), r312_g2.down.mid(r362_yRight.xp(0.75), r362_yRight.yp(0.25)), r312_g2(r362_yRight.right, r362_yRight.bot))));
            return void 0;
        }));
    });
    return void 0;
});


