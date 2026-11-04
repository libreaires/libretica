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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Large-Operators", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var r312_fontMetrics = _r312_t0.fontMetrics;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_TackTop = _r312_t1.TackTop;
        var r312_TackBot = _r312_t1.TackBot;
        var r312_BgOpTop = _r312_t1.BgOpTop;
        var r312_BgOpBot = _r312_t1.BgOpBot;
        var r312_BgTkTop = _r312_t1.BgTkTop;
        var r312_BgTkBot = _r312_t1.BgTkBot;
        var r312_Downward = _r312_t1.Downward;
        var r312_ArchDepth = _r312_t1.ArchDepth;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_OperatorStroke = _r312_t1.OperatorStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        return (function () {
            var r315_FMosaicWide, r315_MosaicNameSuffix, r315_MosaicWidth, r315_MosaicWidthScalar, _r315_t3, _r315_t5, _r315_t6, _r315_tag7;
            var r315_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r315_t0 = r315_WidthKinds;
            var _r315_t1 = _r315_t0.length;
            var _r315_t2 = 0;
            var _r315_t4 = _r315_t2 < _r315_t1;
            while (_r315_t4) {
                _r315_t3 = _r315_t0[_r315_t2];
                r315_FMosaicWide = _r315_t3[0];
                r315_MosaicNameSuffix = _r315_t3[1];
                r315_MosaicWidth = _r315_t3[2];
                r315_MosaicWidthScalar = _r315_t3[3];
                (function () {
                    var _r318_t7, _r318_tag8;
                    var r318_MosaicDesiredWidth = r312_WideWidth1;
                    var r318_MosaicMiddle = r315_MosaicWidth / 2;
                    var r318_MosaicUnitWidth = r315_MosaicWidth / r315_MosaicWidthScalar;
                    var r318_MangleUnicode = function (r319_unicode, r319__desiredOverride) {
                        var _r319_t0, _r319_t1;
                        return r315_MosaicWidth === (r319__desiredOverride || r318_MosaicDesiredWidth) ? r319_unicode : void 0;
                    };
                    var r318_MangleName = function (r320_name) {
                        var _r320_t0, _r320_t1;
                        return r320_name + r315_MosaicNameSuffix;
                    };
                    var _r318_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
                    var r318_MaskAbove = _r318_t0.MaskAbove;
                    var r318_MaskBelow = _r318_t0.MaskBelow;
                    var r318_MaskLeft = _r318_t0.MaskLeft;
                    var r318_MaskRight = _r318_t0.MaskRight;
                    var r318_UShape = _r318_t0.UShape;
                    var r318_DiagCorDs = _r318_t0.DiagCorDs;
                    var r318_HBar = _r318_t0.HBar;
                    var r318_VBar = _r318_t0.VBar;
                    var _r318_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r318_turned = _r318_t1.turned;
                    var _r318_t2 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Shared-Symbol-Shapes"].resolve();
                    var r318_TriangleShape = _r318_t2.TriangleShape;
                    var _r318_t3 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Long-S"].resolve();
                    var r318_LongSShape = _r318_t3.LongSShape;
                    var _r318_t4 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Greek-Upper-Sigma"].resolve();
                    var r318_SigmaShape = _r318_t4.SigmaShape;
                    var _r318_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Greek-Pi"].resolve();
                    var r318_PiShape = _r318_t5.PiShape;
                    var _r318_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
                    var r318_BBS = _r318_t6.BBS;
                    var r318_BBD = _r318_t6.BBD;
                    var r318_MosaicTop = r312_fontMetrics.os2.sTypoAscender;
                    var r318_MosaicBottom = r312_fontMetrics.os2.sTypoDescender;
                    var r318_MosaicHeight = r318_MosaicTop - r318_MosaicBottom;
                    var r318_advanceScaleLargeOperators = Math.max(r312_para.advanceScaleM, r315_MosaicWidth / r312_Width);
                    var r318_df = r312_DivFrame(r318_advanceScaleLargeOperators, 0, r315_FMosaicWide ? r318_advanceScaleLargeOperators : 1);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("sum"), r318_MangleUnicode(8721), new r312_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                        var _r330_t0, _r330_t1;
                        r330_currentGlyph.setWidth(r318_df.width);
                        r330_currentGlyph.include(r318_SigmaShape(r318_df, r312_BgOpTop, r312_BgOpBot, r312_OperatorStroke));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("sumUpper"), r318_MangleUnicode(9138), new r312_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                        var _r335_t0, _r335_t1;
                        r335_currentGlyph.setWidth(r318_df.width);
                        r335_currentGlyph.include(r312_intersection(r318_MaskAbove(r318_MosaicBottom), r318_SigmaShape(r318_df, r312_BgOpTop, r312_BgOpBot - r318_MosaicHeight * 2, r312_OperatorStroke, new r312_xn$NamedParameterPair$2Lrc9b("pxMid", 0.75))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("sumLower"), r318_MangleUnicode(9139), new r312_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
                        var _r341_t0, _r341_t1;
                        r341_currentGlyph.setWidth(r318_df.width);
                        r341_currentGlyph.include(r312_intersection(r318_MaskBelow(r318_MosaicTop), r318_SigmaShape(r318_df, r312_BgOpTop + r318_MosaicHeight * 2, r312_BgOpBot, r312_OperatorStroke, new r312_xn$NamedParameterPair$2Lrc9b("pxMid", 0.75))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("mathbb/sum"), r318_MangleUnicode(8512), new r312_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                        var _r347_t0, _r347_t1;
                        r347_currentGlyph.setWidth(r318_df.width);
                        var r347_kDiag = r318_DiagCorDs(r312_BgOpTop - r312_BgOpBot, r318_df.rightSB - r318_df.leftSB, r318_BBD);
                        r347_currentGlyph.include(r318_SigmaShape(r318_df, r312_BgOpTop, r312_BgOpBot, r318_BBS, new r312_xn$NamedParameterPair$2Lrc9b("doSerif", false)));
                        r347_currentGlyph.include(r318_SigmaShape(r318_df, r312_BgOpTop, r312_BgOpBot, r318_BBS, new r312_xn$NamedParameterPair$2Lrc9b("doSerif", false), new r312_xn$NamedParameterPair$2Lrc9b("offsetLeft", r347_kDiag * r318_BBD)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("product"), r318_MangleUnicode(8719), new r312_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                        var _r356_t0, _r356_t1;
                        r356_currentGlyph.setWidth(r318_df.width);
                        r356_currentGlyph.include(r318_PiShape(r318_df, r312_BgOpTop, r312_BgOpBot, new r312_xn$NamedParameterPair$2Lrc9b("shrinkRate", 0), new r312_xn$NamedParameterPair$2Lrc9b("fine", r312_OperatorStroke), new r312_xn$NamedParameterPair$2Lrc9b("doSerif", r312_SLAB)));
                        return void 0;
                    }));
                    r318_turned(r318_MangleName("coproduct"), r318_MangleUnicode(8720), r318_MangleName("product"), r318_df.middle, r312_SymbolMid);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("Vee"), r318_MangleUnicode(8897), new r312_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                        var _r364_t0, _r364_t1;
                        r364_currentGlyph.setWidth(r318_df.width);
                        r364_currentGlyph.include(r312_dispiro(r312_widths.center(r312_OperatorStroke), r312_flat(r318_df.leftSB, r312_BgOpTop), r312_curl(r318_df.middle, r312_BgOpBot, r312_heading(r312_Downward))));
                        r364_currentGlyph.include(r312_dispiro(r312_widths.center(r312_OperatorStroke), r312_flat(r318_df.rightSB, r312_BgOpTop), r312_curl(r318_df.middle, r312_BgOpBot, r312_heading(r312_Downward))));
                        return void 0;
                    }));
                    r318_turned(r318_MangleName("Wedge"), r318_MangleUnicode(8896), r318_MangleName("Vee"), r318_df.middle, r312_SymbolMid);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("Cup"), r318_MangleUnicode(8899), new r312_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
                        var _r370_t0, _r370_t1;
                        r370_currentGlyph.setWidth(r318_df.width);
                        r370_currentGlyph.include(r318_UShape(r312_BgOpTop, r312_BgOpBot, r318_df.leftSB, r318_df.rightSB, r312_OperatorStroke, r318_df.archDepthAOf(r312_ArchDepth / Math.sqrt(r318_df.adws), r312_OperatorStroke), r318_df.archDepthBOf(r312_ArchDepth / Math.sqrt(r318_df.adws), r312_OperatorStroke)));
                        return void 0;
                    }));
                    r318_turned(r318_MangleName("Cap"), r318_MangleUnicode(8898), r318_MangleName("Cup"), r318_df.middle, r312_SymbolMid);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("Top"), r318_MangleUnicode(10201), new r312_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                        var _r375_t0, _r375_t1;
                        r375_currentGlyph.setWidth(r318_df.width);
                        r375_currentGlyph.include(r318_HBar.t(r318_df.leftSB, r318_df.rightSB, r312_BgTkTop, r312_OperatorStroke));
                        r375_currentGlyph.include(r318_VBar.m(r318_df.middle, r312_BgTkTop, r312_BgTkBot, r312_OperatorStroke));
                        return void 0;
                    }));
                    r318_turned(r318_MangleName("Bot"), r318_MangleUnicode(10200), r318_MangleName("Top"), r318_df.middle, r312_SymbolMid);
                    if (r315_MosaicWidthScalar > 1 && !r312_para.forceMonospace) (function () {
                        var r380_kLongTackSB = r312_DivFrame(r315_MosaicWidthScalar, 4).leftSB / r312_DivFrame(r315_MosaicWidthScalar, 2).leftSB;
                        var r380_l = r1_mix(0, r312_SB, r380_kLongTackSB);
                        var r380_r = r315_MosaicWidth - r380_l;
                        r312_xn$GlyphSaveSink$2Lrc4b.save("longVDash", 10205, new r312_xn$Capture$2Lrc8.GlyphProc(function (r383_currentGlyph) {
                            var _r383_t0, _r383_t1;
                            r383_currentGlyph.setWidth(r315_MosaicWidth);
                            r383_currentGlyph.include(r318_HBar.m(r380_l, r380_r, r312_SymbolMid, r312_OperatorStroke));
                            r383_currentGlyph.include(r318_VBar.l(r380_l, r312_TackTop, r312_TackBot, r312_OperatorStroke));
                            return void 0;
                        }));
                        return r318_turned("longDashV", 10206, "longVDash", r315_MosaicWidth / 2, r312_SymbolMid);
                    })();
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("SquareCap"), r318_MangleUnicode(10757), new r312_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
                        var _r389_t0, _r389_t1;
                        r389_currentGlyph.setWidth(r318_df.width);
                        r389_currentGlyph.include(r318_PiShape(r318_df, r312_BgOpTop, r312_BgOpBot, new r312_xn$NamedParameterPair$2Lrc9b("shrinkRate", 0), new r312_xn$NamedParameterPair$2Lrc9b("fine", r312_OperatorStroke), new r312_xn$NamedParameterPair$2Lrc9b("doSerif", false)));
                        return void 0;
                    }));
                    r318_turned(r318_MangleName("SquareCup"), r318_MangleUnicode(10758), r318_MangleName("SquareCap"), r318_df.middle, r312_SymbolMid);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("Multiply"), r318_MangleUnicode(10761), new r312_xn$Capture$2Lrc8.GlyphProc(function (r397_currentGlyph) {
                        var _r397_t0, _r397_t1;
                        r397_currentGlyph.setWidth(r318_df.width);
                        r397_currentGlyph.include(r312_dispiro(r312_widths.center(r312_OperatorStroke), r312_corner(r318_df.leftSB, r312_BgOpTop), r312_corner(r318_df.rightSB, r312_BgOpBot)));
                        r397_currentGlyph.include(r312_dispiro(r312_widths.center(r312_OperatorStroke), r312_corner(r318_df.leftSB, r312_BgOpBot), r312_corner(r318_df.rightSB, r312_BgOpTop)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("Bowtie"), r318_MangleUnicode(10781), new r312_xn$Capture$2Lrc8.GlyphProc(function (r403_currentGlyph) {
                        var _r403_t0, _r403_t1;
                        r403_currentGlyph.setWidth(r318_df.width);
                        var r403_swBowtie = Math.min(r312_OperatorStroke, r312_AdviceStroke(4.25, r315_MosaicWidthScalar));
                        var r403_swBowtieHv = Math.min(r312_OperatorStroke, r312_AdviceStroke(4.75, r315_MosaicWidthScalar));
                        r403_currentGlyph.include(r312_union(r312_intersection(r318_MaskRight(r318_df.leftSB), r318_MaskLeft(r318_df.rightSB), r312_union(r312_dispiro(r312_widths.center(r403_swBowtie), r312_corner(r318_df.leftSB, r312_BgOpTop), r312_corner(r318_df.rightSB, r312_BgOpBot)), r312_dispiro(r312_widths.center(r403_swBowtie), r312_corner(r318_df.leftSB, r312_BgOpBot), r312_corner(r318_df.rightSB, r312_BgOpTop)))), r312_intersection(r312_xn$spirooutline$1aao(r312_corner(r318_df.leftSB, r312_BgOpBot), r312_corner(r318_df.rightSB, r312_BgOpTop), r312_corner(r318_df.rightSB, r312_BgOpBot), r312_corner(r318_df.leftSB, r312_BgOpTop)), r312_union(r318_VBar.l(r318_df.leftSB, r312_BgOpBot, r312_BgOpTop, r403_swBowtieHv), r318_VBar.r(r318_df.rightSB, r312_BgOpBot, r312_BgOpTop, r403_swBowtieHv)))));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("WhiteTriangleLeft"), r318_MangleUnicode(10782), new r312_xn$Capture$2Lrc8.GlyphProc(function (r408_currentGlyph) {
                        var _r408_t0, _r408_t1;
                        r408_currentGlyph.setWidth(r318_df.width);
                        r408_currentGlyph.include(r318_TriangleShape(r318_df.leftSB, r312_SymbolMid, r318_df.rightSB, r312_BgOpTop, r318_df.rightSB, r312_BgOpBot, r312_OperatorStroke));
                        return void 0;
                    }));
                })();
                _r315_t5 = _r315_t2 = _r315_t2 + 1;
                _r315_t4 = _r315_t2 < _r315_t1;
            }
            return _r315_t5;
        })();
    });
    return void 0;
});


