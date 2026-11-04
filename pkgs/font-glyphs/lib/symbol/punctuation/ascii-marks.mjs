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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Ascii-Marks", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t9, _r312_t10, _r312_t11, _r312_tag12, _r312_t13, _r312_tag14;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_AS_BASE = _r312_t0.AS_BASE;
        var r312_ALSO_METRICS = _r312_t0.ALSO_METRICS;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_XH = _r312_t1.XH;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_PlusTop = _r312_t1.PlusTop;
        var r312_Scale = _r312_t1.Scale;
        var r312_Translate = _r312_t1.Translate;
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_AccentStackOffset = _r312_t1.AccentStackOffset;
        var r312_AccentClearance = _r312_t1.AccentClearance;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_DotRadius = _r312_t1.DotRadius;
        var r312_OperatorStroke = _r312_t1.OperatorStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Ungizmo = _r312_t5.Ungizmo;
        var r312_Regizmo = _r312_t5.Regizmo;
        var r312_WithDotVariants = _r312_t5.WithDotVariants;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_xn$derivecomposites$7Hrq = _r312_t6["derive-composites"];
        var r312_turned = _r312_t6.turned;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r312_markExtend = _r312_t7.markExtend;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r312_aboveMarkTop = _r312_t8.aboveMarkTop;
        var r312_aboveMarkMid = _r312_t8.aboveMarkMid;
        var r312_RingShape = _r312_t8.RingShape;
        r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Punctuation-Quotes-And-Primes"].resolve();
        var r312_MarkZoom = function (r318_w) {
            var _r318_t0, _r318_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                var _r320_t0, _r320_t1;
                r320_currentGlyph.include(r312_Ungizmo());
                r320_currentGlyph.include(r312_Translate(r318_w * -0.5, -r312_XH - r312_AccentStackOffset));
                r320_currentGlyph.include(r312_Scale((r312_RightSB - r312_SB) / (r312_markExtend * 3)));
                r320_currentGlyph.include(r312_Translate(r318_w * +0.5, +r312_XH + r312_AccentStackOffset));
                r320_currentGlyph.include(r312_Regizmo());
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("asciiTilde.low", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
            var _r328_t0, _r328_t1;
            r328_currentGlyph.include(r312_xn$referglyph$1aao("asciiTilde.high"), true, true);
            r328_currentGlyph.include(r312_ApparentTranslate(0, r312_SymbolMid - r312_XH - r312_AccentStackOffset));
            r328_currentGlyph.include(r312_MarkSet.plus());
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("asciiCaret.medium", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
            var _r334_t0, _r334_t1;
            r334_currentGlyph.include(r312_xn$referglyph$1aao("asciiCaret.high"), true, true);
            r334_currentGlyph.include(r312_ApparentTranslate(0, (r312_SymbolMid - r312_XH) / 2));
            r334_currentGlyph.include(r312_MarkSet.plus());
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("asciiCaret.low", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
            var _r340_t0, _r340_t1;
            r340_currentGlyph.include(r312_xn$referglyph$1aao("asciiCaret.high"), true, true);
            r340_currentGlyph.include(r312_ApparentTranslate(0, r312_SymbolMid - r312_XH));
            r340_currentGlyph.include(r312_MarkSet.plus());
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("caretAtBaseline", 8248, new r312_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
            var _r346_t0, _r346_t1;
            r346_currentGlyph.include(r312_xn$referglyph$1aao("asciiCaret.high"), true, true);
            r346_currentGlyph.include(r312_ApparentTranslate(0, 0 - r312_aboveMarkTop));
            r346_currentGlyph.include(r312_MarkSet.plus());
            return void 0;
        }));
        r312_xn$selectvariant$7Hrq("asciiTilde", "~");
        r312_xn$selectvariant$7Hrq("asciiCaret", "^");
        r312_xn$GlyphSaveSink$2Lrc4b.save("ringTilde", 11803, new r312_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
            var _r352_t0, _r352_t1;
            r352_currentGlyph.include(r312_xn$referglyph$1aao("asciiTilde/sMid"));
            r352_currentGlyph.include(r312_RingShape(r312_Middle, r312_PlusTop + r312_AccentClearance));
            return void 0;
        }));
        r312_WithDotVariants("dotTilde", 11806, function (r355_DrawAt, r355_kr, r355_ov) {
            var _r355_t0, _r355_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                var _r357_t0, _r357_t1;
                r357_currentGlyph.include(r312_xn$referglyph$1aao("asciiTilde/sMid"), true, true);
                r357_currentGlyph.include(r355_DrawAt(r312_Middle, r312_PlusTop + r312_AccentClearance, r312_DotRadius * r355_kr * (r312_OperatorStroke / r312_Stroke) - r355_ov));
                return void 0;
            });
        });
        r312_turned("tildeDot", 11807, "dotTilde", r312_Middle, r312_SymbolMid);
        (function () {
            var r362_FMosaicWide, r362_MosaicNameSuffix, r362_MosaicWidth, r362_MosaicWidthScalar, _r362_t3, _r362_t5, _r362_t6, _r362_tag7;
            var r362_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r362_t0 = r362_WidthKinds;
            var _r362_t1 = _r362_t0.length;
            var _r362_t2 = 0;
            var _r362_t4 = _r362_t2 < _r362_t1;
            while (_r362_t4) {
                _r362_t3 = _r362_t0[_r362_t2];
                r362_FMosaicWide = _r362_t3[0];
                r362_MosaicNameSuffix = _r362_t3[1];
                r362_MosaicWidth = _r362_t3[2];
                r362_MosaicWidthScalar = _r362_t3[3];
                (function () {
                    var r365_MosaicDesiredWidth = r312_WideWidth1;
                    var r365_MosaicMiddle = r362_MosaicWidth / 2;
                    var r365_MosaicUnitWidth = r362_MosaicWidth / r362_MosaicWidthScalar;
                    var r365_MangleUnicode = function (r366_unicode, r366__desiredOverride) {
                        var _r366_t0, _r366_t1;
                        return r362_MosaicWidth === (r366__desiredOverride || r365_MosaicDesiredWidth) ? r366_unicode : void 0;
                    };
                    var r365_MangleName = function (r367_name) {
                        var _r367_t0, _r367_t1;
                        return r367_name + r362_MosaicNameSuffix;
                    };
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("swungDash"), r365_MangleUnicode(8275), new r312_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
                        var _r370_t0, _r370_t1;
                        r370_currentGlyph.include(r312_xn$referglyph$1aao(r365_MangleName("swungDash.high")), r312_AS_BASE, r312_ALSO_METRICS);
                        r370_currentGlyph.include(r312_ApparentTranslate(0, r312_SymbolMid - r312_XH - r312_AccentStackOffset));
                        return void 0;
                    }));
                })();
                _r362_t5 = _r362_t2 = _r362_t2 + 1;
                _r362_t4 = _r362_t2 < _r362_t1;
            }
            return _r362_t5;
        })();
        r312_xn$GlyphSaveSink$2Lrc4b.save("degree", 176, new r312_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
            var _r375_t0, _r375_t1;
            r375_currentGlyph.include(r312_xn$referglyph$1aao("markBaseSpace"), r312_AS_BASE, r312_ALSO_METRICS);
            r375_currentGlyph.include(r312_xn$referglyph$1aao("ringAbove"));
            r375_currentGlyph.include(r312_MarkZoom(r375_currentGlyph.advanceWidth));
            return void 0;
        }));
        return (function () {
            var r380_shift = r312_ApparentTranslate(0, r312_SymbolMid - r312_aboveMarkMid);
            r312_xn$derivecomposites$7Hrq("mdfMidGrave", 756, "markBaseSpace", "graveAbove", r380_shift);
            r312_xn$derivecomposites$7Hrq("mdfMidDoubleGrave", 757, "markBaseSpace", "doubleGraveAbove", r380_shift);
            r312_xn$derivecomposites$7Hrq("mdfMidDoubleAcute", 758, "markBaseSpace", "doubleAcuteAbove", r380_shift);
            r312_xn$derivecomposites$7Hrq("latin1macron", 175, "markBaseSpace/adwsN", "sbRsbOverlineAbove");
            r312_xn$derivecomposites$7Hrq("mdfUnaspirated", 749, "markBaseSpace/adwsN", "dblSbRsbOverlineAbove");
            r312_xn$derivecomposites$7Hrq("mdfShelf", 765, "markBaseSpace/adwsN", "shelfBelow");
            r312_xn$derivecomposites$7Hrq("mdfOpenShelf", 766, "markBaseSpace/adwsN", "openShelfBelow");
            r312_xn$derivecomposites$7Hrq("fermata", 119056, "markBaseSpace/adwsN", "largeFermataAbove");
            return r312_xn$derivecomposites$7Hrq("lowFermata", 119057, "markBaseSpace/adwsN", "largeCandrabinduBelow");
        })();
    });
    return void 0;
});


