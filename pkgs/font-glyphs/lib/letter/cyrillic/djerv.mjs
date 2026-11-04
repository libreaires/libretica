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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Djerv", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t8, _r312_t9;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_UShape = _r312_t5.UShape;
        var r312_VBar = _r312_t5.VBar;
        var r312_FlipAround = _r312_t5.FlipAround;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_LetterBarOverlay = _r312_t7.LetterBarOverlay;
        var r312_SerifFrame = _r312_t7.SerifFrame;
        var r312_RStirrupShape = function (r316_df, r316_top, r316_py, r316_ada, r316_adb) {
            var _r316_t0, _r316_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
                var _r318_t0, _r318_t1;
                var r318_uBot = r1_mix(r316_top, 0, r316_py);
                r318_currentGlyph.include(r312_VBar.m(r316_df.middle, 0, r318_uBot));
                r318_currentGlyph.include(r312_UShape(r316_top, r318_uBot, r316_df.leftSB, r316_df.rightSB, void 0, r316_ada, r316_adb));
                r318_currentGlyph.include(r312_FlipAround(r316_df.middle, r316_top / 2));
                return void 0;
            });
        };
        var r312_DjervShape = function (r322_df, r322_top, r322_py, r322_ada, r322_adb) {
            var _r322_t0, _r322_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var r324_sf, _r324_t0, _r324_t1;
                r324_currentGlyph.include(r312_RStirrupShape(r322_df, r322_top, r322_py, r322_ada, r322_adb));
                if (r312_SLAB) {
                    r324_sf = r312_SerifFrame.fromDf(r322_df, r322_top, 0);
                    r324_currentGlyph.include(r324_sf.lb.full);
                    r324_currentGlyph.include(r324_sf.rb.full);
                    r324_currentGlyph.include(r324_sf.mt.fullCenter);
                }
                r324_currentGlyph.include(r312_LetterBarOverlay.m.in(new r312_xn$NamedParameterPair$2Lrc9b("x", r322_df.middle), new r312_xn$NamedParameterPair$2Lrc9b("bot", r322_top * r322_py), new r312_xn$NamedParameterPair$2Lrc9b("top", r322_top - (r312_SLAB ? r312_Stroke : 0))));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Djerv", 42568, new r312_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
            var _r335_t0, _r335_t1;
            var r335_df = r335_currentGlyph.include(r312_DivFrame(1));
            r335_currentGlyph.include(r335_df.markSet.capital());
            r335_currentGlyph.include(r312_DjervShape(r335_df, r312_CAP, 0.6, r312_ArchDepthA, r312_ArchDepthB));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/djerv", 42569, new r312_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
            var _r341_t0, _r341_t1;
            var r341_df = r341_currentGlyph.include(r312_DivFrame(1));
            r341_currentGlyph.include(r341_df.markSet.e());
            r341_currentGlyph.include(r312_DjervShape(r341_df, r312_XH, 0.6, r312_SmallArchDepthA, r312_SmallArchDepthB));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("rStirrup", 43845, new r312_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
            var _r347_t0, _r347_t1;
            var r347_df = r347_currentGlyph.include(r312_DivFrame(1));
            r347_currentGlyph.include(r347_df.markSet.e());
            r347_currentGlyph.include(r312_RStirrupShape(r347_df, r312_XH, 0.6, r312_ArchDepthA, r312_ArchDepthB));
            return void 0;
        }));
    });
    return void 0;
});


