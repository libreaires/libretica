"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-DB-QP", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t8, _r312_t9;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_XH = _r312_t1.XH;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_Descender = _r312_t1.Descender;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_OX = _r312_t1.OX;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_MidJutCenter = _r312_t1.MidJutCenter;
        var r312_CThin = _r312_t1.CThin;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_SideJut = _r312_t1.SideJut;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HSerif = _r312_t5.HSerif;
        var r312_VBar = _r312_t5.VBar;
        var r312_flatside = _r312_t5.flatside;
        var r312_FlipAround = _r312_t5.FlipAround;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_OBarLeft = _r312_t7.OBarLeft;
        var r312_OBarRight = _r312_t7.OBarRight;
        var r312_DbCenterShape = function (r316_df) {
            var _r316_t0, _r316_t1;
            var r316_subDf = r316_df.slice(3, 2, r312_OX);
            return r312_union(r312_dispiro(r312_OBarRight.arcStart(new r312_xn$NamedParameterPair$2Lrc9b("top", r312_XH), new r312_xn$NamedParameterPair$2Lrc9b("left", r316_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r316_df.middle + r312_HSwToV(0.5 * r316_df.mvs)), new r312_xn$NamedParameterPair$2Lrc9b("sw", r316_df.mvs), new r312_xn$NamedParameterPair$2Lrc9b("fine", r316_df.shoulderFine), new r312_xn$NamedParameterPair$2Lrc9b("ada", r316_subDf.smallArchDepthA), new r312_xn$NamedParameterPair$2Lrc9b("adb", r316_subDf.smallArchDepthB)), r312_flatside.ld(r316_df.leftSB, 0, r312_XH, r316_subDf.smallArchDepthA, r316_subDf.smallArchDepthB), r312_OBarRight.arcEnd(new r312_xn$NamedParameterPair$2Lrc9b("bot", 0), new r312_xn$NamedParameterPair$2Lrc9b("left", r316_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r316_df.middle + r312_HSwToV(0.5 * r316_df.mvs)), new r312_xn$NamedParameterPair$2Lrc9b("sw", r316_df.mvs), new r312_xn$NamedParameterPair$2Lrc9b("fine", r316_df.mvs * r312_CThin), new r312_xn$NamedParameterPair$2Lrc9b("ada", r316_subDf.smallArchDepthA), new r312_xn$NamedParameterPair$2Lrc9b("adb", r316_subDf.smallArchDepthB), new r312_xn$NamedParameterPair$2Lrc9b("yend", r312_XH))), r312_dispiro(r312_OBarLeft.arcStart(new r312_xn$NamedParameterPair$2Lrc9b("top", r312_XH), new r312_xn$NamedParameterPair$2Lrc9b("left", r316_df.middle - r312_HSwToV(0.5 * r316_df.mvs)), new r312_xn$NamedParameterPair$2Lrc9b("right", r316_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("sw", r316_df.mvs), new r312_xn$NamedParameterPair$2Lrc9b("fine", r316_df.shoulderFine), new r312_xn$NamedParameterPair$2Lrc9b("ada", r316_subDf.smallArchDepthA), new r312_xn$NamedParameterPair$2Lrc9b("adb", r316_subDf.smallArchDepthB)), r312_flatside.rd(r316_df.rightSB, 0, r312_XH, r316_subDf.smallArchDepthA, r316_subDf.smallArchDepthB), r312_OBarLeft.arcEnd(new r312_xn$NamedParameterPair$2Lrc9b("bot", 0), new r312_xn$NamedParameterPair$2Lrc9b("left", r316_df.middle - r312_HSwToV(0.5 * r316_df.mvs)), new r312_xn$NamedParameterPair$2Lrc9b("right", r316_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("sw", r316_df.mvs), new r312_xn$NamedParameterPair$2Lrc9b("fine", r316_df.mvs * r312_CThin), new r312_xn$NamedParameterPair$2Lrc9b("ada", r316_subDf.smallArchDepthA), new r312_xn$NamedParameterPair$2Lrc9b("adb", r316_subDf.smallArchDepthB), new r312_xn$NamedParameterPair$2Lrc9b("yend", r312_XH))));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("db", 568, new r312_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
            var _r349_t0, _r349_t1;
            var r349_df = r349_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r349_currentGlyph.include(r349_df.markSet.b());
            r349_currentGlyph.include(r312_DbCenterShape(r349_df));
            r349_currentGlyph.include(r312_VBar.m(r349_df.middle, r312_XH / 2, r312_Ascender, r349_df.mvs));
            if (r312_SLAB) r349_currentGlyph.include(r312_HSerif.lt(r349_df.middle - r312_HSwToV(0.5 * r349_df.mvs), r312_Ascender, r312_SideJut, r349_df.mvs));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("qp", 569, new r312_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
            var _r357_t0, _r357_t1;
            var r357_df = r357_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r357_currentGlyph.include(r357_df.markSet.p());
            r357_currentGlyph.include(r312_DbCenterShape(r357_df));
            r357_currentGlyph.include(r312_FlipAround(r357_df.middle, r312_XH / 2));
            r357_currentGlyph.include(r312_VBar.m(r357_df.middle, r312_Descender, r312_XH / 2, r357_df.mvs));
            if (r312_SLAB) r357_currentGlyph.include(r312_HSerif.mb(r357_df.middle, r312_Descender, r312_MidJutCenter - r312_HSwToV(0.5 * (r312_Stroke - r357_df.mvs)), r357_df.mvs));
            return void 0;
        }));
    });
    return void 0;
});


