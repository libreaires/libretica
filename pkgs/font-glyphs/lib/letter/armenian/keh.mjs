"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r308_block, _r308_t4, _r308_t6;
    var _r308_t3 = this;
    var _r308_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r308_t1 = _r308_t0.length;
    var _r308_t2 = 0;
    var _r308_t5 = _r308_t2 < _r308_t1;
    while (_r308_t5) {
        _r308_t6 = (r308_block = _r308_t0[_r308_t2], r308_block(_r308_t3), _r308_t2 = _r308_t2 + 1);
        _r308_t5 = _r308_t2 < _r308_t1;
    }
    return _r308_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r312_xn$Capture_Ext$2Lrc2b) {
    var _r312_t0, _r312_t1;
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Keh", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HBarPos = _r313_t1.HBarPos;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_OBarLeft = _r313_t7.OBarLeft;
        var r313_SerifFrame = _r313_t7.SerifFrame;
        var r313_barPos = r313_XH / 2;
        var r313_highBarPos = r313_XH;
        var r313_jut = r313_Jut;
        return (function () {
            r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Keh", 1364, new r313_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var r321_sf, _r321_t0, _r321_t1;
                var r321_df = r321_currentGlyph.include(r313_DivFrame(1));
                r321_currentGlyph.include(r321_df.markSet.capital());
                var r321_barSw = r313_OverlayStroke * (r321_df.mvs / r313_Stroke);
                var r321_oBot = r313_CAP * r313_HBarPos - r321_df.mvs / 2;
                r321_currentGlyph.include(r313_OBarLeft.earlessRounded(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_CAP), new r313_xn$NamedParameterPair$2Lrc9b("bot", r321_oBot), new r313_xn$NamedParameterPair$2Lrc9b("left", r321_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r321_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r321_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r321_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("yTerminal", 0)));
                r321_currentGlyph.include(r313_HBar.m(r321_df.leftSB + r313_HSwToV(0.5 * r321_df.mvs) - r313_jut, r321_df.rightSB, r1_mix(r313_SLAB ? r321_df.mvs : 0, r321_oBot, 0.5), Math.min(r321_barSw, 0.5 * (r321_oBot - (r313_SLAB ? r321_df.mvs : 0)))));
                if (r313_SLAB) {
                    r321_sf = r313_SerifFrame.fromDf(r321_df, r313_CAP, 0);
                    r321_currentGlyph.include(r321_sf.lb.full);
                }
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/keh", 1412, new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                var r338_sf, _r338_t0, _r338_t1;
                var r338_df = r338_currentGlyph.include(r313_DivFrame(1));
                r338_currentGlyph.include(r338_df.markSet.p());
                var r338_barSw = r313_OverlayStroke * (r338_df.mvs / r313_Stroke);
                var r338_oBot = Math.max(0.1 * (r313_XH - r313_Descender), r338_barSw + 0.5 * r338_df.mvs);
                r338_currentGlyph.include(r313_OBarLeft.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bot", r338_oBot), new r313_xn$NamedParameterPair$2Lrc9b("left", r338_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r338_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r338_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r338_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB)));
                r338_currentGlyph.include(r313_VBar.l(r338_df.leftSB, r313_Descender, r313_XH, r338_df.mvs));
                r338_currentGlyph.include(r313_HBar.b(r338_df.leftSB + r313_HSwToV(0.5 * r338_df.mvs) - r313_jut, r338_df.rightSB, 0, r338_barSw));
                if (r313_SLAB) {
                    r338_sf = r313_SerifFrame.fromDf(r338_df, r313_XH, r313_Descender);
                    r338_currentGlyph.include(r338_sf.lt.outer);
                    if (!r313_para.isItalic) r338_currentGlyph.include(r338_sf.lb.fullSide);
                }
                return void 0;
            }));
        })();
    });
    return void 0;
});


