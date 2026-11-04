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
var r1_Gr = _s0_t1;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Mosaic-Powerline", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t7, _r313_t8, _r313_t9, _r313_tag10;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_glyphStore = _r313_t0.glyphStore;
        var r313_fontMetrics = _r313_t0.fontMetrics;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_WideWidth4 = _r313_t1.WideWidth4;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HBar = _r313_t5.HBar;
        var r313_FlipAround = _r313_t5.FlipAround;
        var r313_ForceUpright = _r313_t5.ForceUpright;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_MosaicTop = r313_fontMetrics.os2.sTypoAscender;
        var r313_MosaicBottom = r313_fontMetrics.os2.sTypoDescender;
        return (function () {
            var r318_FMosaicWide, r318_MosaicNameSuffix, r318_MosaicWidth, r318_MosaicWidthScalar, _r318_t3, _r318_t5, _r318_t6, _r318_tag7;
            var r318_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r318_t0 = r318_WidthKinds;
            var _r318_t1 = _r318_t0.length;
            var _r318_t2 = 0;
            var _r318_t4 = _r318_t2 < _r318_t1;
            while (_r318_t4) {
                _r318_t3 = _r318_t0[_r318_t2];
                r318_FMosaicWide = _r318_t3[0];
                r318_MosaicNameSuffix = _r318_t3[1];
                r318_MosaicWidth = _r318_t3[2];
                r318_MosaicWidthScalar = _r318_t3[3];
                (function () {
                    var r321_MosaicDesiredWidth = r313_WideWidth4;
                    var r321_MosaicMiddle = r318_MosaicWidth / 2;
                    var r321_MosaicUnitWidth = r318_MosaicWidth / r318_MosaicWidthScalar;
                    var r321_MangleUnicode = function (r322_unicode, r322__desiredOverride) {
                        var _r322_t0, _r322_t1;
                        return r318_MosaicWidth === (r322__desiredOverride || r321_MosaicDesiredWidth) ? r322_unicode : void 0;
                    };
                    var r321_MangleName = function (r323_name) {
                        var _r323_t0, _r323_t1;
                        return r323_name + r318_MosaicNameSuffix;
                    };
                    var r321_pwlMidOrig = (r313_MosaicTop + r313_MosaicBottom) / 2;
                    var r321_pwlTop = (r313_MosaicTop - r321_pwlMidOrig) * r313_para.powerlineScaleY + r313_para.powerlineShiftY + r321_pwlMidOrig;
                    var r321_pwlBot = (r313_MosaicBottom - r321_pwlMidOrig) * r313_para.powerlineScaleY + r313_para.powerlineShiftY + r321_pwlMidOrig;
                    var r321_pwlMid = r1_mix(r321_pwlBot, r321_pwlTop, 1 / 2);
                    var r321_pwlNear = 0 * r313_para.powerlineScaleX + r313_para.powerlineShiftX;
                    var r321_pwlFar = r318_MosaicWidth * r313_para.powerlineScaleX + r313_para.powerlineShiftX;
                    var r321_RotatedPowerline = function (r324_gidNew, r324_unicodeNew, r324_gidSource) {
                        var _r324_t0, _r324_t1;
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r321_MangleName(r324_gidNew), r321_MangleUnicode(r324_unicodeNew), new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                            var _r327_t0, _r327_t1;
                            r327_currentGlyph.setWidth(r318_MosaicWidth);
                            r327_currentGlyph.include(r313_ForceUpright());
                            r327_currentGlyph.include(r313_xn$referglyph$1aao(r321_MangleName(r324_gidSource)));
                            r327_currentGlyph.include(r313_FlipAround(r318_MosaicWidth / 2, r321_pwlMid));
                            return void 0;
                        }));
                    };
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r321_MangleName("powerline/triangleRight"), r321_MangleUnicode(57520), new r313_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                        var _r334_t0, _r334_t1;
                        r334_currentGlyph.setWidth(r318_MosaicWidth);
                        r334_currentGlyph.include(r313_ForceUpright());
                        r334_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r321_pwlNear + r313_O, r321_pwlTop), r313_corner(r321_pwlNear, r321_pwlTop), r313_corner(r321_pwlFar, r321_pwlMid), r313_corner(r321_pwlNear, r321_pwlBot), r313_corner(r321_pwlNear + r313_O, r321_pwlBot)));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r321_MangleName("powerline/angleRight"), r321_MangleUnicode(57521), new r313_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                        var _r340_t0, _r340_t1;
                        r340_currentGlyph.setWidth(r318_MosaicWidth);
                        r340_currentGlyph.include(r313_ForceUpright());
                        var r340_fine = r313_AdviceStroke(4);
                        r340_currentGlyph.include(r313_intersection(r313_xn$spirooutline$1aao(r313_corner(r321_pwlNear - r318_MosaicWidth, r321_pwlTop), r313_corner(r321_pwlNear, r321_pwlTop), r313_corner(r321_pwlFar, r321_pwlMid), r313_corner(r321_pwlNear, r321_pwlBot), r313_corner(r321_pwlNear - r318_MosaicWidth, r321_pwlBot)), r313_union(r313_dispiro(r313_widths.rhs(r340_fine), r313_flat(r321_pwlNear, r321_pwlTop), r313_curl(r321_pwlFar, r321_pwlMid)), r313_dispiro(r313_widths.rhs(r340_fine), r313_flat(r321_pwlFar, r321_pwlMid), r313_curl(r321_pwlNear, r321_pwlBot)))));
                        return void 0;
                    }));
                    r321_RotatedPowerline("powerline/triangleLeft", 57522, "powerline/triangleRight");
                    r321_RotatedPowerline("powerline/angleLeft", 57523, "powerline/angleRight");
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r321_MangleName("powerline/hemiCircleRight"), r321_MangleUnicode(57524), new r313_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                        var _r346_t0, _r346_t1;
                        r346_currentGlyph.setWidth(r318_MosaicWidth);
                        r346_currentGlyph.include(r313_ForceUpright());
                        r346_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r321_pwlNear + r313_O, r321_pwlTop), r313_g4(r321_pwlNear, r321_pwlTop), r313_g4.down.mid(r321_pwlFar, r321_pwlMid), r313_g4(r321_pwlNear, r321_pwlBot), r313_corner(r321_pwlNear + r313_O, r321_pwlBot)));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r321_MangleName("powerline/arcRight"), r321_MangleUnicode(57525), new r313_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                        var _r352_t0, _r352_t1;
                        r352_currentGlyph.setWidth(r318_MosaicWidth);
                        r352_currentGlyph.include(r313_ForceUpright());
                        var r352_fine = r313_AdviceStroke(4);
                        r352_currentGlyph.include(r313_dispiro(r313_widths.rhs(r352_fine), r313_corner(r321_pwlNear + r313_O, r321_pwlTop, r313_heading(r313_Rightward)), r313_g4(r321_pwlNear, r321_pwlTop, r313_heading(r313_Rightward)), r313_g4.down.mid(r321_pwlFar, r321_pwlMid, r313_heading(r313_Downward)), r313_g4(r321_pwlNear, r321_pwlBot, r313_heading(r313_Leftward)), r313_corner(r321_pwlNear + r313_O, r321_pwlBot, r313_heading(r313_Leftward))));
                        return void 0;
                    }));
                    r321_RotatedPowerline("powerline/hemiCircleLeft", 57526, "powerline/hemiCircleRight");
                    r321_RotatedPowerline("powerline/arcLeft", 57527, "powerline/arcRight");
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r321_MangleName("powerline/underline"), r321_MangleUnicode(57518), new r313_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                        var _r358_t0, _r358_t1;
                        r358_currentGlyph.setWidth(r318_MosaicWidth);
                        r358_currentGlyph.include(r313_ForceUpright());
                        var r358_fine = r313_AdviceStroke(4);
                        r358_currentGlyph.include(r313_HBar.b(0, r318_MosaicWidth, r321_pwlBot));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r321_MangleName("powerline/overline"), r321_MangleUnicode(57519), new r313_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                        var _r364_t0, _r364_t1;
                        r364_currentGlyph.setWidth(r318_MosaicWidth);
                        r364_currentGlyph.include(r313_ForceUpright());
                        var r364_fine = r313_AdviceStroke(4);
                        r364_currentGlyph.include(r313_HBar.t(0, r318_MosaicWidth, r321_pwlTop));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r321_MangleName("powerline/cornerBottomLeft"), r321_MangleUnicode(57528), new r313_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
                        var _r370_t0, _r370_t1;
                        r370_currentGlyph.setWidth(r318_MosaicWidth);
                        r370_currentGlyph.include(r313_ForceUpright());
                        r370_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r321_pwlNear + r313_O, r321_pwlTop), r313_corner(r321_pwlNear, r321_pwlTop), r313_corner(r321_pwlFar, r321_pwlBot), r313_corner(r321_pwlNear + r313_O, r321_pwlBot)));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r321_MangleName("powerline/slashBottomLeft"), r321_MangleUnicode(57529), new r313_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                        var _r376_t0, _r376_t1;
                        r376_currentGlyph.setWidth(r318_MosaicWidth);
                        r376_currentGlyph.include(r313_ForceUpright());
                        var r376_fine = r313_AdviceStroke(4);
                        r376_currentGlyph.include(r313_dispiro(r313_widths.rhs(r376_fine), r313_flat(r321_pwlNear, r321_pwlTop), r313_curl(r321_pwlFar, r321_pwlBot)));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r321_MangleName("powerline/cornerTopLeft"), r321_MangleUnicode(57532), new r313_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                        var _r382_t0, _r382_t1;
                        r382_currentGlyph.setWidth(r318_MosaicWidth);
                        r382_currentGlyph.include(r313_ForceUpright());
                        r382_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r321_pwlNear + r313_O, r321_pwlTop), r313_corner(r321_pwlNear, r321_pwlTop), r313_corner(r321_pwlFar, r321_pwlTop), r313_corner(r321_pwlNear + r313_O, r321_pwlBot)));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r321_MangleName("powerline/slashTopLeft"), r321_MangleUnicode(57533), new r313_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
                        var _r388_t0, _r388_t1;
                        r388_currentGlyph.setWidth(r318_MosaicWidth);
                        r388_currentGlyph.include(r313_ForceUpright());
                        var r388_fine = r313_AdviceStroke(4);
                        r388_currentGlyph.include(r313_dispiro(r313_widths.rhs(r388_fine), r313_flat(r321_pwlNear, r321_pwlBot), r313_curl(r321_pwlFar, r321_pwlTop)));
                        return void 0;
                    }));
                    r321_RotatedPowerline("powerline/cornerBottomRight", 57530, "powerline/cornerTopLeft");
                    r321_RotatedPowerline("powerline/slashBottomRight", 57531, "powerline/slashTopLeft");
                    r321_RotatedPowerline("powerline/cornerTopRight", 57534, "powerline/cornerBottomLeft");
                    r321_RotatedPowerline("powerline/slashTopRight", 57535, "powerline/slashBottomLeft");
                    r1_Gr.linkSingleGlyphPairGr(r313_glyphStore, r321_MangleName("blackTriangleRB"), r321_MangleName("powerline/cornerBottomRight"), r1_Gr.MosaicForm);
                    r1_Gr.linkSingleGlyphPairGr(r313_glyphStore, r321_MangleName("blackTriangleLB"), r321_MangleName("powerline/cornerBottomLeft"), r1_Gr.MosaicForm);
                    r1_Gr.linkSingleGlyphPairGr(r313_glyphStore, r321_MangleName("blackTriangleLT"), r321_MangleName("powerline/cornerTopLeft"), r1_Gr.MosaicForm);
                    return r1_Gr.linkSingleGlyphPairGr(r313_glyphStore, r321_MangleName("blackTriangleRT"), r321_MangleName("powerline/cornerTopRight"), r1_Gr.MosaicForm);
                })();
                _r318_t5 = _r318_t2 = _r318_t2 + 1;
                _r318_t4 = _r318_t2 < _r318_t1;
            }
            return _r318_t5;
        })();
    });
    return void 0;
});


