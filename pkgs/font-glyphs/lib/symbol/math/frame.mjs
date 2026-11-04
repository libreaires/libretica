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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Frame", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8, _r312_t9, _r312_tag10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_TackTop = _r312_t1.TackTop;
        var r312_TackBot = _r312_t1.TackBot;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_O = _r312_t1.O;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_GeometryStroke = _r312_t1.GeometryStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_close = _r312_t2.close;
        var r312_end = _r312_t2.end;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r316_t0, _r316_t1;
            return {
                "MathEnclosureSw": r312_MathEnclosureSw
            };
        });
        var r312_MathEnclosureSw = r312_AdviceStroke(4);
        var r312_kBox = 2 / 3;
        var r312_leftBox = r1_mix(0, r312_SB, r312_kBox);
        var r312_rightBox = r1_mix(r312_Width, r312_RightSB, r312_kBox);
        var r312_radiusBox = (r312_rightBox - r312_leftBox) / 2;
        var r312_topBox = r312_SymbolMid + r312_radiusBox;
        var r312_bottomBox = r312_SymbolMid - r312_radiusBox;
        var r312_kCircle = 2 / 3;
        var r312_leftCircle = r1_mix(0, r312_SB, r312_kCircle);
        var r312_rightCircle = r1_mix(r312_Width, r312_RightSB, r312_kCircle);
        var r312_radiusCircle = (r312_rightCircle - r312_leftCircle) / 2;
        var r312_topCircle = r312_SymbolMid + r312_radiusCircle;
        var r312_bottomCircle = r312_SymbolMid - r312_radiusCircle;
        r312_xn$GlyphSaveSink$2Lrc4b.save("mathO/outline", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
            var _r319_t0, _r319_t1;
            r319_currentGlyph.include(r312_xn$spirooutline$1aao(r312_g4(r312_Middle, r312_topCircle), r312_archv(void 0, 2), r312_g4(r312_leftCircle, r312_SymbolMid), r312_arcvh(void 0, 2), r312_g4(r312_Middle, r312_bottomCircle), r312_archv(void 0, 2), r312_g4(r312_rightCircle, r312_SymbolMid), r312_arcvh(void 0, 2), r312_close()));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("mathO", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
            var _r323_t0, _r323_t1;
            r323_currentGlyph.include(r312_dispiro(r312_widths.lhs(r312_MathEnclosureSw), r312_g4(r312_Middle, r312_topCircle - r312_O), r312_archv(void 0, 2), r312_g4(r312_leftCircle + r312_O, r312_SymbolMid), r312_arcvh(void 0, 2), r312_g4(r312_Middle, r312_bottomCircle + r312_O), r312_archv(void 0, 2), r312_g4(r312_rightCircle - r312_O, r312_SymbolMid), r312_arcvh(void 0, 2), r312_close()));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("mathOLeftHalf", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
            var _r327_t0, _r327_t1;
            r327_currentGlyph.include(r312_dispiro(r312_widths.lhs(r312_MathEnclosureSw), r312_g4.left.start(r312_Middle, r312_topCircle - r312_O, r312_heading(r312_Leftward)), r312_archv(), r312_g4.down.mid(r312_leftCircle + r312_O, r312_SymbolMid, r312_heading(r312_Downward)), r312_arcvh(), r312_g4.right.end(r312_Middle, r312_bottomCircle + r312_O, r312_heading(r312_Rightward))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("mathORightHalf", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
            var _r331_t0, _r331_t1;
            r331_currentGlyph.include(r312_dispiro(r312_widths.rhs(r312_MathEnclosureSw), r312_g4.right.start(r312_Middle, r312_topCircle - r312_O, r312_heading(r312_Rightward)), r312_archv(), r312_g4.down.mid(r312_rightCircle - r312_O, r312_SymbolMid, r312_heading(r312_Downward)), r312_arcvh(), r312_g4.left.end(r312_Middle, r312_bottomCircle + r312_O, r312_heading(r312_Leftward))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("mathBox/outline", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
            var _r335_t0, _r335_t1;
            r335_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r312_leftBox, r312_topBox), r312_corner(r312_leftBox, r312_bottomBox), r312_corner(r312_rightBox, r312_bottomBox), r312_corner(r312_rightBox, r312_topBox)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("mathBox", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
            var _r339_t0, _r339_t1;
            r339_currentGlyph.include(r312_intersection(r312_xn$referglyph$1aao("mathBox/outline"), r312_union(r312_dispiro(r312_widths.lhs(r312_MathEnclosureSw), r312_flat(r312_leftBox, r312_topBox), r312_curl(r312_leftBox, r312_bottomBox)), r312_dispiro(r312_widths.lhs(r312_MathEnclosureSw), r312_flat(r312_leftBox, r312_bottomBox), r312_curl(r312_rightBox, r312_bottomBox)), r312_dispiro(r312_widths.lhs(r312_MathEnclosureSw), r312_flat(r312_rightBox, r312_bottomBox), r312_curl(r312_rightBox, r312_topBox)), r312_dispiro(r312_widths.lhs(r312_MathEnclosureSw), r312_flat(r312_rightBox, r312_topBox), r312_curl(r312_leftBox, r312_topBox)))));
            return void 0;
        }));
        return (function () {
            var r343_FMosaicWide, r343_MosaicNameSuffix, r343_MosaicWidth, r343_MosaicWidthScalar, _r343_t3, _r343_t5, _r343_t6, _r343_tag7;
            var r343_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r343_t0 = r343_WidthKinds;
            var _r343_t1 = _r343_t0.length;
            var _r343_t2 = 0;
            var _r343_t4 = _r343_t2 < _r343_t1;
            while (_r343_t4) {
                _r343_t3 = _r343_t0[_r343_t2];
                r343_FMosaicWide = _r343_t3[0];
                r343_MosaicNameSuffix = _r343_t3[1];
                r343_MosaicWidth = _r343_t3[2];
                r343_MosaicWidthScalar = _r343_t3[3];
                (function () {
                    var r346_MosaicDesiredWidth = r312_WideWidth1;
                    var r346_MosaicMiddle = r343_MosaicWidth / 2;
                    var r346_MosaicUnitWidth = r343_MosaicWidth / r343_MosaicWidthScalar;
                    var r346_MangleUnicode = function (r347_unicode, r347__desiredOverride) {
                        var _r347_t0, _r347_t1;
                        return r343_MosaicWidth === (r347__desiredOverride || r346_MosaicDesiredWidth) ? r347_unicode : void 0;
                    };
                    var r346_MangleName = function (r348_name) {
                        var _r348_t0, _r348_t1;
                        return r348_name + r343_MosaicNameSuffix;
                    };
                    var r346_radiusBig = (r312_TackTop - r312_TackBot) / 2 * Math.sqrt(r343_MosaicWidthScalar);
                    var r346_leftBig = r346_MosaicMiddle - r346_radiusBig;
                    var r346_rightBig = r346_MosaicMiddle + r346_radiusBig;
                    var r346_topBig = r312_SymbolMid + r346_radiusBig;
                    var r346_bottomBig = r312_SymbolMid - r346_radiusBig;
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r346_MangleName("mathOBig/outline"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                        var _r351_t0, _r351_t1;
                        r351_currentGlyph.setWidth(r343_MosaicWidth);
                        r351_currentGlyph.include(r312_xn$spirooutline$1aao(r312_g4(r346_MosaicMiddle, r346_topBig), r312_archv(void 0, 2), r312_g4(r346_leftBig, r312_SymbolMid), r312_arcvh(void 0, 2), r312_g4(r346_MosaicMiddle, r346_bottomBig), r312_archv(void 0, 2), r312_g4(r346_rightBig, r312_SymbolMid), r312_arcvh(void 0, 2), r312_close()));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(r346_MangleName("mathOBig"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                        var _r356_t0, _r356_t1;
                        r356_currentGlyph.setWidth(r343_MosaicWidth);
                        r356_currentGlyph.include(r312_dispiro(r312_widths.lhs(r312_GeometryStroke), r312_g4(r346_MosaicMiddle, r346_topBig - r312_O), r312_archv(void 0, 2), r312_g4(r346_leftBig + r312_O, r312_SymbolMid), r312_arcvh(void 0, 2), r312_g4(r346_MosaicMiddle, r346_bottomBig + r312_O), r312_archv(void 0, 2), r312_g4(r346_rightBig - r312_O, r312_SymbolMid), r312_arcvh(void 0, 2), r312_close()));
                        return void 0;
                    }));
                })();
                _r343_t5 = _r343_t2 = _r343_t2 + 1;
                _r343_t4 = _r343_t2 < _r343_t1;
            }
            return _r343_t5;
        })();
    });
    return void 0;
});


