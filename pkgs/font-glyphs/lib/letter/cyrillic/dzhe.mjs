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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Dzhe", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t9, _r312_t10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_QuarterStroke = _r312_t1.QuarterStroke;
        var r312_LongVJut = _r312_t1.LongVJut;
        var r312_VJutStroke = _r312_t1.VJutStroke;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_SerifFrame = _r312_t7.SerifFrame;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r312_ExtendBelowBaseAnchors = _r312_t8.ExtendBelowBaseAnchors;
        var r312_CyrDzheShape = function (r317_top) {
            var _r317_t0, _r317_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
                var _r319_leti0, _r319_t1, _r319_t2, _r319_t3, _r319_t4, _r319_tag5;
                r319_currentGlyph.include(r312_VBar.l(r312_SB, 0, r317_top));
                r319_currentGlyph.include(r312_HBar.b(r312_SB, r312_RightSB, 0));
                r319_currentGlyph.include(r312_VBar.r(r312_RightSB, 0, r317_top));
                var r319_desc = -r312_LongVJut + r312_QuarterStroke;
                r319_currentGlyph.include(r312_VBar.m(r312_Middle, r319_desc, r312_Stroke, r312_VJutStroke));
                r319_currentGlyph.include(r312_ExtendBelowBaseAnchors(r319_desc));
                if (r312_SLAB) {
                    _r319_t3 = r312_SerifFrame.fromDf(r312_DivFrame(1), r317_top, 0);
                    (function (_r319_leti0) {
                        var r325_sf = _r319_leti0;
                        return r319_currentGlyph.include(new r312_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                            var _r328_t0, _r328_t1;
                            r328_currentGlyph.include(r325_sf.lt.full, true, true);
                            r328_currentGlyph.include(r325_sf.rt.full);
                            r328_currentGlyph.include(r325_sf.lb.outer);
                            r328_currentGlyph.include(r325_sf.rb.outer);
                            return void 0;
                        }));
                    })(_r319_t3);
                }
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Dzhe", 1039, new r312_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
            var _r335_t0, _r335_t1;
            r335_currentGlyph.include(r312_MarkSet.capital());
            r335_currentGlyph.include(r312_CyrDzheShape(r312_CAP));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/dzhe.upright", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
            var _r340_t0, _r340_t1;
            r340_currentGlyph.include(r312_MarkSet.e());
            r340_currentGlyph.include(r312_CyrDzheShape(r312_XH));
            return void 0;
        }));
    });
    return void 0;
});


