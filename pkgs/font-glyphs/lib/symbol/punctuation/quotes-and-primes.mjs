"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
import * as _s0_t2 from "@iosevka/glyph/relation";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
var _r1_t10 = _s0_t2;
var r1_DependentSelector = _r1_t10.DependentSelector;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r309_block, _r309_t4, _r309_t6;
    var _r309_t3 = this;
    var _r309_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r309_t1 = _r309_t0.length;
    var _r309_t2 = 0;
    var _r309_t5 = _r309_t2 < _r309_t1;
    while (_r309_t5) {
        _r309_t6 = (r309_block = _r309_t0[_r309_t2], r309_block(_r309_t3), _r309_t2 = _r309_t2 + 1);
        _r309_t5 = _r309_t2 < _r309_t1;
    }
    return _r309_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r313_xn$Capture_Ext$2Lrc2b) {
    var _r313_t0, _r313_t1;
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Quotes-And-Primes", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var _r314_t8, _r314_t9;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var r314_para = _r314_t0.para;
        var r314_DivFrame = _r314_t0.DivFrame;
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_Width = _r314_t1.Width;
        var r314_SB = _r314_t1.SB;
        var r314_CAP = _r314_t1.CAP;
        var r314_XH = _r314_t1.XH;
        var r314_Ascender = _r314_t1.Ascender;
        var r314_Descender = _r314_t1.Descender;
        var r314_Translate = _r314_t1.Translate;
        var r314_ApparentTranslate = _r314_t1.ApparentTranslate;
        var r314_Upward = _r314_t1.Upward;
        var r314_Downward = _r314_t1.Downward;
        var r314_Rightward = _r314_t1.Rightward;
        var r314_Leftward = _r314_t1.Leftward;
        var r314_O = _r314_t1.O;
        var r314_AdviceStroke = _r314_t1.AdviceStroke;
        var r314_Stroke = _r314_t1.Stroke;
        var r314_PeriodSize = _r314_t1.PeriodSize;
        var r314_RightSB = _r314_t1.RightSB;
        var r314_Middle = _r314_t1.Middle;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_g4 = _r314_t2.g4;
        var r314_g2 = _r314_t2.g2;
        var r314_flat = _r314_t2.flat;
        var r314_curl = _r314_t2.curl;
        var r314_end = _r314_t2.end;
        var r314_straight = _r314_t2.straight;
        var r314_widths = _r314_t2.widths;
        var r314_heading = _r314_t2.heading;
        var r314_archv = _r314_t2.archv;
        var r314_arcvh = _r314_t2.arcvh;
        var r314_dispiro = _r314_t2.dispiro;
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r314_Arch = _r314_t5.Arch;
        var r314_FlipAround = _r314_t5.FlipAround;
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r314_xn$referglyph$1aao = _r314_t6["refer-glyph"];
        var r314_xn$selectvariant$7Hrq = _r314_t6["select-variant"];
        var r314_xn$deriveglyphs$7Hrq = _r314_t6["derive-glyphs"];
        var r314_xn$derivecomposites$7Hrq = _r314_t6["derive-composites"];
        var r314_alias = _r314_t6.alias;
        var r314_turned = _r314_t6.turned;
        r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Punctuation-Small"].resolve();
        var _r314_t7 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r314_CreateDependentComposite = _r314_t7.CreateDependentComposite;
        var r314_quoteTop = r314_CAP * 1.05;
        var r314_quoteBottom = r314_XH * 0.85;
        var r314_yCurlyQuotes = r1_mix(r314_quoteBottom, r314_quoteTop, 0.5);
        var r314_commaLow = r1_mix(0, r314_Descender, 0.9);
        var r314_ratio = Math.min(1, (r314_quoteTop - r314_quoteBottom) / (r314_PeriodSize - r314_commaLow));
        r314_xn$deriveglyphs$7Hrq("lowSingleQuote", 8218, "comma", function (r319_src, r319_gr) {
            var _r319_t0, _r319_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var _r321_t0, _r321_t1;
                var r321_df = r321_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
                r321_currentGlyph.include(r314_xn$referglyph$1aao(r319_src));
                r321_currentGlyph.include(r314_FlipAround(r321_df.middle, 0, r314_ratio, r314_ratio));
                return void 0;
            });
        });
        r314_xn$deriveglyphs$7Hrq("revLowSingleQuote", null, "revComma", function (r325_src, r325_gr) {
            var _r325_t0, _r325_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                var _r327_t0, _r327_t1;
                var r327_df = r327_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
                r327_currentGlyph.include(r314_xn$referglyph$1aao(r325_src));
                r327_currentGlyph.include(r314_FlipAround(r327_df.middle, 0, r314_ratio, r314_ratio));
                return void 0;
            });
        });
        r314_xn$deriveglyphs$7Hrq("openSingleQuote", 8216, "lowSingleQuote", function (r331_src, r331_gr) {
            var _r331_t0, _r331_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                var _r333_t0, _r333_t1;
                var r333_df = r333_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
                r333_currentGlyph.include(r314_xn$referglyph$1aao(r331_src));
                r333_currentGlyph.include(r314_FlipAround(r333_df.middle, r1_mix(r1_mix(r314_PeriodSize, r314_commaLow, 0.5), r314_yCurlyQuotes, 0.5)));
                return void 0;
            });
        });
        r314_xn$deriveglyphs$7Hrq("mdfTurncomma", 699, "comma/asDiacritic", function (r337_src, r337_gr) {
            var _r337_t0, _r337_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                var _r339_t0, _r339_t1;
                var r339_df = r339_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleSp));
                r339_currentGlyph.include(r314_xn$referglyph$1aao(r337_src));
                r339_currentGlyph.include(r314_FlipAround(r339_df.middle, 0, r314_ratio, r314_ratio));
                r339_currentGlyph.include(r314_FlipAround(r339_df.middle, r1_mix(r1_mix(r314_PeriodSize, r314_commaLow, 0.5), r314_yCurlyQuotes, 0.5)));
                return void 0;
            });
        });
        r314_xn$deriveglyphs$7Hrq("closeSingleQuote", 8217, "openSingleQuote", function (r344_src, r344_gr) {
            var _r344_t0, _r344_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                var _r346_t0, _r346_t1;
                var r346_df = r346_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
                r346_currentGlyph.include(r314_xn$referglyph$1aao(r344_src));
                r346_currentGlyph.include(r314_FlipAround(r346_df.middle, r314_yCurlyQuotes));
                return void 0;
            });
        });
        r314_xn$deriveglyphs$7Hrq("mdfApostrophe", 700, "mdfTurncomma", function (r350_src, r350_gr) {
            var _r350_t0, _r350_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                var _r352_t0, _r352_t1;
                var r352_df = r352_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleSp));
                r352_currentGlyph.include(r314_xn$referglyph$1aao(r350_src));
                r352_currentGlyph.include(r314_FlipAround(r352_df.middle, r314_yCurlyQuotes));
                return void 0;
            });
        });
        r314_xn$deriveglyphs$7Hrq("revSingleQuote", 8219, "revComma", function (r356_src, r356_gr) {
            var _r356_t0, _r356_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                var _r358_t0, _r358_t1;
                var r358_df = r358_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
                r358_currentGlyph.include(r314_xn$referglyph$1aao(r356_src));
                r358_currentGlyph.include(r314_FlipAround(r358_df.middle, 0, r314_ratio, r314_ratio));
                r358_currentGlyph.include(r314_FlipAround(r358_df.middle, r1_mix(r1_mix(r314_PeriodSize, r314_commaLow, 0.5), r314_yCurlyQuotes, 0.5)));
                r358_currentGlyph.include(r314_FlipAround(r358_df.middle, r314_yCurlyQuotes));
                return void 0;
            });
        });
        r314_xn$deriveglyphs$7Hrq("mdfRevComma", 701, "revComma/asDiacritic", function (r364_src, r364_gr) {
            var _r364_t0, _r364_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                var _r366_t0, _r366_t1;
                var r366_df = r366_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleSp));
                r366_currentGlyph.include(r314_xn$referglyph$1aao(r364_src));
                r366_currentGlyph.include(r314_FlipAround(r366_df.middle, 0, r314_ratio, r314_ratio));
                r366_currentGlyph.include(r314_FlipAround(r366_df.middle, r1_mix(r1_mix(r314_PeriodSize, r314_commaLow, 0.5), r314_yCurlyQuotes, 0.5)));
                r366_currentGlyph.include(r314_FlipAround(r366_df.middle, r314_yCurlyQuotes));
                return void 0;
            });
        });
        var r314_DoubleQuoteProc = function (r372_adwsSingle) {
            var _r372_t0, _r372_t1;
            return function (r373_gn) {
                var _r373_t0, _r373_t1;
                return new r314_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                    var _r375_t0, _r375_t1;
                    var r375_dfSingle = r314_DivFrame(r372_adwsSingle);
                    var r375_dist = r314_Width * 0.225;
                    r375_currentGlyph.include(r314_xn$referglyph$1aao(r373_gn));
                    r375_currentGlyph.include(r314_Translate(r375_dist * -2, 0));
                    r375_currentGlyph.include(r314_xn$referglyph$1aao(r373_gn));
                    r375_currentGlyph.include(r314_Translate(r375_dist + r314_Middle - r375_dfSingle.middle, 0));
                    return void 0;
                });
            };
        };
        r314_xn$deriveglyphs$7Hrq("lowDoubleQuote", 8222, "lowSingleQuote", r314_DoubleQuoteProc(r314_para.advanceScaleI));
        r314_xn$deriveglyphs$7Hrq("openDoubleQuote", 8220, "openSingleQuote", r314_DoubleQuoteProc(r314_para.advanceScaleI));
        r314_xn$deriveglyphs$7Hrq("closeDoubleQuote", 8221, "closeSingleQuote", r314_DoubleQuoteProc(r314_para.advanceScaleI));
        r314_xn$deriveglyphs$7Hrq("revDoubleQuote", 8223, "revSingleQuote", r314_DoubleQuoteProc(r314_para.advanceScaleI));
        r314_xn$deriveglyphs$7Hrq("revLowDoubleQuote", 11842, "revLowSingleQuote", r314_DoubleQuoteProc(r314_para.advanceScaleI));
        r314_xn$deriveglyphs$7Hrq("mdfDoubleApostrophe", 750, "mdfApostrophe", r314_DoubleQuoteProc(r314_para.advanceScaleSp));
        r314_alias("breathMark", 119058, "mdfApostrophe");
        r314_xn$GlyphSaveSink$2Lrc4b.save("prime", 8242, new r314_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
            var _r382_t0, _r382_t1;
            var r382_df = r382_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
            var r382_wide = r314_Width * 0.1;
            var r382_fine = 0.5 * r314_AdviceStroke(2);
            var r382_stress = 1.2 * r382_fine;
            r382_currentGlyph.include(r314_dispiro(r314_flat(r382_df.middle + r382_wide, r314_quoteTop, r314_widths.heading(r382_stress, r382_stress, r314_Downward)), r314_curl(r382_df.middle - r382_wide, r314_quoteBottom, r314_widths.heading(r382_fine, r382_fine, r314_Downward))));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("doubleprime", 8243, new r314_xn$Capture$2Lrc8.GlyphProc(function (r387_currentGlyph) {
            var _r387_t0, _r387_t1;
            var r387_dfSingle = r314_DivFrame(r314_para.advanceScaleI);
            var r387_d = 0.25 * (r314_RightSB - r314_SB);
            r387_currentGlyph.include(r314_xn$referglyph$1aao("prime"));
            r387_currentGlyph.include(r314_Translate(r387_d * -2, 0));
            r387_currentGlyph.include(r314_xn$referglyph$1aao("prime"));
            r387_currentGlyph.include(r314_Translate(r387_d + r314_Middle - r387_dfSingle.middle, 0));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("tripleprime", 8244, new r314_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
            var _r394_t0, _r394_t1;
            var r394_df = r394_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleM));
            var r394_wide = r314_Width * 0.1;
            var r394_d = r394_df.width * 0.3;
            var r394_fine = 0.5 * r314_AdviceStroke(3.5);
            var r394_stress = 1.2 * r394_fine;
            r394_currentGlyph.include(r314_dispiro(r314_flat(r394_df.middle + r394_wide, r314_quoteTop, r314_widths.heading(r394_stress, r394_stress, r314_Downward)), r314_curl(r394_df.middle - r394_wide, r314_quoteBottom, r314_widths.heading(r394_fine, r394_fine, r314_Downward))));
            r394_currentGlyph.include(r314_dispiro(r314_flat(r394_df.middle - r394_d + r394_wide, r314_quoteTop, r314_widths.heading(r394_stress, r394_stress, r314_Downward)), r314_curl(r394_df.middle - r394_d - r394_wide, r314_quoteBottom, r314_widths.heading(r394_fine, r394_fine, r314_Downward))));
            r394_currentGlyph.include(r314_dispiro(r314_flat(r394_df.middle + r394_d + r394_wide, r314_quoteTop, r314_widths.heading(r394_stress, r394_stress, r314_Downward)), r314_curl(r394_df.middle + r394_d - r394_wide, r314_quoteBottom, r314_widths.heading(r394_fine, r394_fine, r314_Downward))));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("quadPrime", 8279, new r314_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
            var _r401_t0, _r401_t1;
            var r401_df = r401_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleM));
            var r401_wide = r314_Width * 0.1;
            var r401_fine = 0.5 * r314_AdviceStroke(4);
            var r401_stress = 1.2 * r401_fine;
            var r401_d = r401_df.width * 0.15 - r401_fine / 6;
            r401_currentGlyph.include(r314_dispiro(r314_flat(r401_df.middle - r401_d + r401_wide, r314_quoteTop, r314_widths.heading(r401_stress, r401_stress, r314_Downward)), r314_curl(r401_df.middle - r401_d - r401_wide, r314_quoteBottom, r314_widths.heading(r401_fine, r401_fine, r314_Downward))));
            r401_currentGlyph.include(r314_dispiro(r314_flat(r401_df.middle + r401_d + r401_wide, r314_quoteTop, r314_widths.heading(r401_stress, r401_stress, r314_Downward)), r314_curl(r401_df.middle + r401_d - r401_wide, r314_quoteBottom, r314_widths.heading(r401_fine, r401_fine, r314_Downward))));
            r401_currentGlyph.include(r314_dispiro(r314_flat(r401_df.middle - 3 * r401_d + r401_wide, r314_quoteTop, r314_widths.heading(r401_stress, r401_stress, r314_Downward)), r314_curl(r401_df.middle - 3 * r401_d - r401_wide, r314_quoteBottom, r314_widths.heading(r401_fine, r401_fine, r314_Downward))));
            r401_currentGlyph.include(r314_dispiro(r314_flat(r401_df.middle + 3 * r401_d + r401_wide, r314_quoteTop, r314_widths.heading(r401_stress, r401_stress, r314_Downward)), r314_curl(r401_df.middle + 3 * r401_d - r401_wide, r314_quoteBottom, r314_widths.heading(r401_fine, r401_fine, r314_Downward))));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("revprime", 8245, new r314_xn$Capture$2Lrc8.GlyphProc(function (r409_currentGlyph) {
            var _r409_t0, _r409_t1;
            var r409_df = r409_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
            var r409_wide = r314_Width * -0.1;
            var r409_fine = 0.5 * r314_AdviceStroke(2);
            var r409_stress = 1.2 * r409_fine;
            r409_currentGlyph.include(r314_dispiro(r314_flat(r409_df.middle + r409_wide, r314_quoteTop, r314_widths.heading(r409_stress, r409_stress, r314_Downward)), r314_curl(r409_df.middle - r409_wide, r314_quoteBottom, r314_widths.heading(r409_fine, r409_fine, r314_Downward))));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("revdoubleprime", 8246, new r314_xn$Capture$2Lrc8.GlyphProc(function (r414_currentGlyph) {
            var _r414_t0, _r414_t1;
            var r414_dfSingle = r314_DivFrame(r314_para.advanceScaleI);
            var r414_d = 0.25 * (r314_RightSB - r314_SB);
            r414_currentGlyph.include(r314_xn$referglyph$1aao("revprime"));
            r414_currentGlyph.include(r314_Translate(r414_d * -2, 0));
            r414_currentGlyph.include(r314_xn$referglyph$1aao("revprime"));
            r414_currentGlyph.include(r314_Translate(r414_d + r314_Middle - r414_dfSingle.middle, 0));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("revtripleprime", 8247, new r314_xn$Capture$2Lrc8.GlyphProc(function (r421_currentGlyph) {
            var _r421_t0, _r421_t1;
            var r421_df = r421_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleM));
            var r421_wide = r314_Width * -0.1;
            var r421_d = r421_df.width * 0.3;
            var r421_fine = 0.5 * r314_AdviceStroke(3.5);
            var r421_stress = 1.2 * r421_fine;
            r421_currentGlyph.include(r314_dispiro(r314_flat(r421_df.middle + r421_wide, r314_quoteTop, r314_widths.heading(r421_stress, r421_stress, r314_Downward)), r314_curl(r421_df.middle - r421_wide, r314_quoteBottom, r314_widths.heading(r421_fine, r421_fine, r314_Downward))));
            r421_currentGlyph.include(r314_dispiro(r314_flat(r421_df.middle - r421_d + r421_wide, r314_quoteTop, r314_widths.heading(r421_stress, r421_stress, r314_Downward)), r314_curl(r421_df.middle - r421_d - r421_wide, r314_quoteBottom, r314_widths.heading(r421_fine, r421_fine, r314_Downward))));
            r421_currentGlyph.include(r314_dispiro(r314_flat(r421_df.middle + r421_d + r421_wide, r314_quoteTop, r314_widths.heading(r421_stress, r421_stress, r314_Downward)), r314_curl(r421_df.middle + r421_d - r421_wide, r314_quoteBottom, r314_widths.heading(r421_fine, r421_fine, r314_Downward))));
            return void 0;
        }));
        r314_alias("mdfPrime", 697, "prime");
        r314_alias("grek/numberSign", 884, "prime");
        r314_alias("mdfDoublePrime", 698, "doubleprime");
        r314_xn$derivecomposites$7Hrq("grek/lowNumberSign", 885, "grek/numberSign", r314_ApparentTranslate(0, r1_mix(r1_mix(r1_mix(r314_PeriodSize, r314_commaLow, 0.5), r314_yCurlyQuotes, 0.5), r314_quoteBottom, -1) - r314_quoteTop));
        r314_xn$GlyphSaveSink$2Lrc4b.save("doubleSuspensionMark", 11844, new r314_xn$Capture$2Lrc8.GlyphProc(function (r428_currentGlyph) {
            var _r428_t0, _r428_t1;
            r428_currentGlyph.include(r314_xn$referglyph$1aao("grek/numberSign"), true, true);
            r428_currentGlyph.include(r314_xn$referglyph$1aao("grek/lowNumberSign"));
            return void 0;
        }));
        var r314_StraightQuoteShape = function (r431_df, r431_t, r431_b) {
            var _r431_t0, _r431_t1;
            return r314_dispiro(r314_widths.center(r314_Stroke * 1.1), r314_g4.down.start(r431_df.middle, r431_t, r314_heading(r314_Downward)), r314_g4(r431_df.middle, r431_b, r314_widths.center.heading(r314_Stroke * 0.95, r314_Downward)));
        };
        r314_xn$GlyphSaveSink$2Lrc4b.save("asciiSingleQuote/body/straight", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r434_currentGlyph) {
            var _r434_t0, _r434_t1;
            var r434_df = r434_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
            r434_currentGlyph.include(r314_StraightQuoteShape(r434_df, r314_quoteTop, r314_quoteBottom));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("Saltillo", 42891, new r314_xn$Capture$2Lrc8.GlyphProc(function (r439_currentGlyph) {
            var _r439_t0, _r439_t1;
            var r439_df = r439_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
            r439_currentGlyph.include(r439_df.markSet.capital());
            r439_currentGlyph.include(r314_StraightQuoteShape(r439_df, r314_CAP, 0.625 * r314_XH));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("saltillo", 42892, new r314_xn$Capture$2Lrc8.GlyphProc(function (r445_currentGlyph) {
            var _r445_t0, _r445_t1;
            var r445_df = r445_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
            r445_currentGlyph.include(r445_df.markSet.b());
            r445_currentGlyph.include(r314_StraightQuoteShape(r445_df, r314_Ascender, r314_XH));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("asciiGrave/selector.straight", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r451_currentGlyph) {
            var _r451_t0, _r451_t1;
            var r451_df = r451_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleSp));
            r1_DependentSelector.set(r451_currentGlyph, "straight");
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("asciiGrave/selector.raisedInverseComma", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r455_currentGlyph) {
            var _r455_t0, _r455_t1;
            var r455_df = r455_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
            r1_DependentSelector.set(r455_currentGlyph, "raisedInverseComma");
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("asciiGrave/selector.raisedTurnComma", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r459_currentGlyph) {
            var _r459_t0, _r459_t1;
            var r459_df = r459_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
            r1_DependentSelector.set(r459_currentGlyph, "raisedTurnComma");
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("asciiSingleQuote/selector.straight", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r463_currentGlyph) {
            var _r463_t0, _r463_t1;
            var r463_df = r463_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
            r1_DependentSelector.set(r463_currentGlyph, "straight");
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("asciiSingleQuote/selector.raisedComma", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r467_currentGlyph) {
            var _r467_t0, _r467_t1;
            var r467_df = r467_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
            r1_DependentSelector.set(r467_currentGlyph, "raisedComma");
            return void 0;
        }));
        r314_xn$selectvariant$7Hrq("asciiSingleQuote/selector", new r314_xn$NamedParameterPair$2Lrc9b("follow", "asciiSingleQuote"));
        r314_xn$selectvariant$7Hrq("asciiGrave/selector", new r314_xn$NamedParameterPair$2Lrc9b("follow", "asciiGrave"));
        r314_CreateDependentComposite("asciiGrave", 96, "asciiGrave/selector", {
            "straight": "asciiGrave/body/straight",
            "raisedInverseComma": "revSingleQuote",
            "raisedTurnComma": "openSingleQuote"
        });
        r314_CreateDependentComposite("asciiSingleQuote", 39, "asciiSingleQuote/selector", {
            "straight": "asciiSingleQuote/body/straight",
            "raisedComma": "closeSingleQuote"
        });
        r314_xn$GlyphSaveSink$2Lrc4b.save("mdfStress", 712, new r314_xn$Capture$2Lrc8.GlyphProc(function (r473_currentGlyph) {
            var _r473_t0, _r473_t1;
            var r473_df = r473_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleSp));
            r473_currentGlyph.include(r314_StraightQuoteShape(r473_df, r314_quoteTop, r314_quoteBottom));
            return void 0;
        }));
        r314_turned("mdfSecondaryStress", 716, "mdfStress", r314_DivFrame(r314_para.advanceScaleSp).middle, r314_XH / 2);
        r314_xn$GlyphSaveSink$2Lrc4b.save("mdfVariableStress", 8335, new r314_xn$Capture$2Lrc8.GlyphProc(function (r478_currentGlyph) {
            var _r478_t0, _r478_t1;
            r478_currentGlyph.include(r314_xn$referglyph$1aao("mdfStress"), true, true);
            r478_currentGlyph.include(r314_xn$referglyph$1aao("mdfSecondaryStress"));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("asciiDoubleQuote", 34, new r314_xn$Capture$2Lrc8.GlyphProc(function (r483_currentGlyph) {
            var _r483_t0, _r483_t1;
            var r483_dfSingle = r314_DivFrame(r314_para.advanceScaleI);
            var r483_dist = 0.2 * r314_Width;
            r483_currentGlyph.include(r314_xn$referglyph$1aao("asciiSingleQuote/body/straight"));
            r483_currentGlyph.include(r314_Translate(r483_dist * -2, 0));
            r483_currentGlyph.include(r314_xn$referglyph$1aao("asciiSingleQuote/body/straight"));
            r483_currentGlyph.include(r314_Translate(r483_dist + r314_Middle - r483_dfSingle.middle, 0));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("modifierLetterLeftHalfRing", 703, new r314_xn$Capture$2Lrc8.GlyphProc(function (r490_currentGlyph) {
            var _r490_t0, _r490_t1;
            var r490_height = r314_quoteTop - r314_quoteBottom;
            r490_currentGlyph.include(r314_dispiro(r314_g4.left.start(r314_Middle + r490_height / 4, r314_quoteTop - r314_O, r314_widths.lhs.heading(r314_AdviceStroke(3), r314_Leftward)), r314_archv(), r314_g4.down.mid(r314_Middle - r490_height / 4 + r314_O, r1_mix(r314_quoteBottom, r314_quoteTop, 0.5), r314_widths.lhs.heading(r314_AdviceStroke(3.5), r314_Downward)), r314_arcvh(), r314_g4.right.end(r314_Middle + r490_height / 4, r314_quoteBottom + r314_O, r314_widths.lhs.heading(r314_AdviceStroke(3), r314_Rightward))));
            return void 0;
        }));
        r314_turned("modifierLetterRightHalfRing", 702, "modifierLetterLeftHalfRing", r314_Middle, r1_mix(r314_quoteBottom, r314_quoteTop, 0.5));
        r314_xn$derivecomposites$7Hrq("hypodiastole", 11794, "modifierLetterRightHalfRing", r314_ApparentTranslate(0, r1_mix(r1_mix(r1_mix(r314_PeriodSize, r314_commaLow, 0.5), r314_yCurlyQuotes, 0.5), r314_quoteBottom, -1) - r314_quoteTop));
        r314_xn$GlyphSaveSink$2Lrc4b.save("armn/exclam", 1372, new r314_xn$Capture$2Lrc8.GlyphProc(function (r494_currentGlyph) {
            var _r494_t0, _r494_t1;
            var r494_df = r494_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleF));
            var r494_height = r314_quoteTop - r314_quoteBottom;
            var r494_xLeft = r494_df.middle - r494_height / 2.5;
            var r494_xRight = r494_df.middle + r494_height / 2.5;
            var r494_sw = r314_AdviceStroke(3);
            r494_currentGlyph.include(r314_dispiro(r314_g4.up.start(r494_xLeft, r314_quoteBottom, r314_widths.rhs.heading(r494_sw, r314_Upward)), r314_g2(r1_mix(r494_xLeft, r494_xRight, 0.5), r1_mix(r314_quoteBottom, r314_quoteTop, 0.5), r314_widths.center(r494_sw)), r314_g4.up.end(r494_xRight, r314_quoteTop, r314_widths.lhs.heading(r494_sw, r314_Upward))));
            return void 0;
        }));
        return r314_xn$GlyphSaveSink$2Lrc4b.save("armn/questionMark", 1374, new r314_xn$Capture$2Lrc8.GlyphProc(function (r499_currentGlyph) {
            var _r499_t0, _r499_t1;
            var r499_df = r499_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleF));
            var r499_height = r314_quoteTop - r314_quoteBottom;
            var r499_xLeft = r499_df.middle - r499_height / 2;
            var r499_xRight = r499_df.middle + r499_height / 2;
            var r499_sw = r314_AdviceStroke(4);
            var r499_frame = new r1_Box(r314_quoteTop, r1_mix(r314_quoteBottom, r314_quoteTop, 0.2), r499_xLeft, r499_xRight);
            r499_currentGlyph.include(r314_dispiro(r314_g4.up.start(r499_frame.left, r499_frame.bot, r314_widths.rhs(r499_sw)), r314_Arch.rhs(r499_frame.top, 0.55), r314_g4.down.mid(r499_frame.right, r499_frame.yp(0.55) - 0.5 * r499_sw, r314_widths.rhs(r499_sw)), r314_arcvh(), r314_g4.left.end(r499_frame.xp(0.6), r499_frame.bot, r314_heading(r314_Leftward))));
            return void 0;
        }));
    });
    return void 0;
});


