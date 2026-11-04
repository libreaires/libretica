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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Upper-Komi-De-Dje", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_doST, r312_doSB, _r312_t11, _r312_t12, _r312_t13, _r312_t14, _r312_tag15;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_Jut = _r312_t1.Jut;
        var r312_CThinB = _r312_t1.CThinB;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_SideJut = _r312_t1.SideJut;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_tagged = _r312_t5.tagged;
        var r312_HSerif = _r312_t5.HSerif;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_UpwardHookShape = _r312_t7.UpwardHookShape;
        var r312_SerifFrame = _r312_t7.SerifFrame;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Yeri"].resolve();
        var r312_RevYeriUpper = _r312_t8.RevYeriUpper;
        var r312_DeConfig = {
            "standardSerifless": [false, false],
            "standardUnilateralSerifed": [true, false],
            "standardBilateralSerifed": [true, true]
        };
        var _r312_t9 = Object.entries(r312_DeConfig)[Symbol.iterator]();
        var _r312_t10 = void 0;
        while (!(_r312_t10 = _r312_t9.next()).done) {
            _r312_t11 = _r312_t10.value;
            r312_suffix = _r312_t11[0];
            r312_doST = _r312_t11[1][0];
            r312_doSB = _r312_t11[1][1];
            _r312_t11[1];
            (function () {
                var r319_fMotion = r312_doST && !r312_doSB;
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/DeKomi." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                    var _r322_t0, _r322_t1;
                    r322_currentGlyph.include(r312_MarkSet.capital());
                    r322_currentGlyph.include(r312_RevYeriUpper.Shape(r312_CAP, new r312_xn$NamedParameterPair$2Lrc9b("fSlab", false)));
                    if (r312_doST) r322_currentGlyph.include(r312_tagged("serifRT", r319_fMotion ? r312_HSerif.lt(r312_RightSB - r312_HSwToV(r312_Stroke), r312_CAP, r312_SideJut) : r312_HSerif.mt(r312_RightSB - r312_HSwToV(r312_HalfStroke), r312_CAP, r312_Jut)));
                    if (r312_doSB) r322_currentGlyph.include(r312_tagged("serifRB", r312_HSerif.rb(r312_RightSB, 0, r312_SideJut)));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/DjeKomi." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                    var r330_sf2, _r330_t0, _r330_t1;
                    var r330_df = r330_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
                    r330_currentGlyph.include(r330_df.markSet.capital());
                    r330_currentGlyph.include(r312_RevYeriUpper.RoundShape(r312_CAP, new r312_xn$NamedParameterPair$2Lrc9b("left", r330_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r330_df.middle - r312_HSwToV((0.5 - r312_CThinB) * r330_df.mvs)), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r330_df.mvs), new r312_xn$NamedParameterPair$2Lrc9b("swVBar", r330_df.mvs * r312_CThinB), new r312_xn$NamedParameterPair$2Lrc9b("fSlab", false)));
                    if (r312_doST) r330_currentGlyph.include(r312_tagged("serifRT", r319_fMotion ? r312_HSerif.lt(r330_df.middle - r312_HSwToV(0.5 * r330_df.mvs), r312_CAP, r312_SideJut, r330_df.mvs) : r312_HSerif.mt(r330_df.middle, r312_CAP, r312_Jut - r312_HSwToV(0.5 * (r312_Stroke - r330_df.mvs)), r330_df.mvs)));
                    r330_currentGlyph.include(r312_UpwardHookShape(new r312_xn$NamedParameterPair$2Lrc9b("left", r330_df.middle - r312_HSwToV(0.5 * r330_df.mvs)), new r312_xn$NamedParameterPair$2Lrc9b("right", r330_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("ybegin", r312_CAP), new r312_xn$NamedParameterPair$2Lrc9b("yend", r312_CAP / 2 + r312_HalfStroke), new r312_xn$NamedParameterPair$2Lrc9b("ada", r312_ArchDepthA * (2 / r330_df.hPack) * r330_df.adws), new r312_xn$NamedParameterPair$2Lrc9b("adb", r312_ArchDepthB * (2 / r330_df.hPack) * r330_df.adws), new r312_xn$NamedParameterPair$2Lrc9b("sw", r330_df.mvs)));
                    if (r312_SLAB) {
                        r330_sf2 = r312_SerifFrame.fromDf(r330_df, r312_CAP / 2 + r312_HalfStroke, 0).slice(1, 2);
                        r330_currentGlyph.include(r330_sf2.rt.full);
                    }
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("cyrl/DeKomi", 1280, new r312_xn$NamedParameterPair$2Lrc9b("follow", "dCap"));
        return r312_xn$selectvariant$7Hrq("cyrl/DjeKomi", 1282, new r312_xn$NamedParameterPair$2Lrc9b("follow", "dCap"));
    });
    return void 0;
});


