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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Kome", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8, _r312_t9, _r312_tag10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_ParenTop = _r312_t1.ParenTop;
        var r312_ParenBot = _r312_t1.ParenBot;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_DotRadius = _r312_t1.DotRadius;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_WithDotVariants = _r312_t5.WithDotVariants;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        return (function () {
            var r317_FMosaicWide, r317_MosaicNameSuffix, r317_MosaicWidth, r317_MosaicWidthScalar, _r317_t3, _r317_t5, _r317_t6, _r317_tag7;
            var r317_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r317_t0 = r317_WidthKinds;
            var _r317_t1 = _r317_t0.length;
            var _r317_t2 = 0;
            var _r317_t4 = _r317_t2 < _r317_t1;
            while (_r317_t4) {
                _r317_t3 = _r317_t0[_r317_t2];
                r317_FMosaicWide = _r317_t3[0];
                r317_MosaicNameSuffix = _r317_t3[1];
                r317_MosaicWidth = _r317_t3[2];
                r317_MosaicWidthScalar = _r317_t3[3];
                (function () {
                    var r320_MosaicDesiredWidth = r312_WideWidth1;
                    var r320_MosaicMiddle = r317_MosaicWidth / 2;
                    var r320_MosaicUnitWidth = r317_MosaicWidth / r317_MosaicWidthScalar;
                    var r320_MangleUnicode = function (r321_unicode, r321__desiredOverride) {
                        var _r321_t0, _r321_t1;
                        return r317_MosaicWidth === (r321__desiredOverride || r320_MosaicDesiredWidth) ? r321_unicode : void 0;
                    };
                    var r320_MangleName = function (r322_name) {
                        var _r322_t0, _r322_t1;
                        return r322_name + r317_MosaicNameSuffix;
                    };
                    return r312_WithDotVariants(r320_MangleName("kome"), r320_MangleUnicode(8251), function (r323_DrawAt, r323_kdr, r323_ov) {
                        var _r323_t0, _r323_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                            var _r325_t0, _r325_t1;
                            r325_currentGlyph.setWidth(r317_MosaicWidth);
                            var r325_sw = r312_AdviceStroke(3.75);
                            var r325_shapeSize = Math.min(r317_MosaicWidth / 2 - r312_SB, (r312_ParenTop - r312_ParenBot) / 2);
                            r325_currentGlyph.include(r312_dispiro(r312_widths.center(r325_sw), r312_flat(r317_MosaicWidth / 2 - r325_shapeSize, r312_SymbolMid - r325_shapeSize), r312_curl(r317_MosaicWidth / 2 + r325_shapeSize, r312_SymbolMid + r325_shapeSize)));
                            r325_currentGlyph.include(r312_dispiro(r312_widths.center(r325_sw), r312_flat(r317_MosaicWidth / 2 + r325_shapeSize, r312_SymbolMid - r325_shapeSize), r312_curl(r317_MosaicWidth / 2 - r325_shapeSize, r312_SymbolMid + r325_shapeSize)));
                            var r325_r0 = Math.min((r312_RightSB - r312_SB + r325_sw * Math.SQRT1_2 - r325_sw * 3) / 4, r312_DotRadius * r323_kdr);
                            var r325_r = r325_shapeSize - r325_r0 + r325_sw / 2 * Math.SQRT1_2;
                            r325_currentGlyph.include(r323_DrawAt(r317_MosaicWidth / 2 + r325_r, r312_SymbolMid, r325_r0 - r323_ov));
                            r325_currentGlyph.include(r323_DrawAt(r317_MosaicWidth / 2 - r325_r, r312_SymbolMid, r325_r0 - r323_ov));
                            r325_currentGlyph.include(r323_DrawAt(r317_MosaicWidth / 2, r312_SymbolMid + r325_r, r325_r0 - r323_ov));
                            r325_currentGlyph.include(r323_DrawAt(r317_MosaicWidth / 2, r312_SymbolMid - r325_r, r325_r0 - r323_ov));
                            return void 0;
                        });
                    });
                })();
                _r317_t5 = _r317_t2 = _r317_t2 + 1;
                _r317_t4 = _r317_t2 < _r317_t1;
            }
            return _r317_t5;
        })();
    });
    return void 0;
});


