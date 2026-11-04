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
var r1_Joining = _r1_t9.Joining;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Dashes", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11, _r313_t12, _r313_tag13;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_UPM = _r313_t1.UPM;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_Translate = _r313_t1.Translate;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_OperatorStroke = _r313_t1.OperatorStroke;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_xn$clearanchors$1aao = _r313_t5["clear-anchors"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$derivemultipartglyphs$7Hrq65 = _r313_t6["derive-multi-part-glyphs"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
        var r313_EqualHalfSpace = _r313_t7.EqualHalfSpace;
        var r313_openBoxGap = Math.max(r313_Stroke * 1.25, r313_XH / 4);
        (function () {
            var r318_suffix, r318_yBar, _r318_t2, _r318_t3, _r318_tag4;
            var r318_OpenBoxSide = function (r319_y) {
                var _r319_t0, _r319_t1;
                return r313_union(r313_VBar.l(r313_SB, r319_y, r319_y + r313_openBoxGap, r313_OperatorStroke), r313_VBar.r(r313_RightSB, r319_y, r319_y + r313_openBoxGap, r313_OperatorStroke));
            };
            var r318_OpenBoxShoulderSide = function (r320_y) {
                var _r320_t0, _r320_t1;
                return r313_union(r318_OpenBoxSide(r320_y), r313_HBar.t(r1_mix(0, r313_SB, 0.25), r313_SB, r320_y + r313_openBoxGap, r313_OperatorStroke), r313_HBar.t(r1_mix(r313_Width, r313_RightSB, 0.25), r313_RightSB, r320_y + r313_openBoxGap, r313_OperatorStroke));
            };
            r313_xn$ExportCapture$2Lrc4b(function () {
                var _r322_t0, _r322_t1;
                return {
                    "UnderScoreConfig": r318_UnderScoreConfig
                };
            });
            var r318_UnderScoreConfig = {
                "aboveBaseline": [0],
                "high": [-r313_Stroke],
                "low": [r313_Descender]
            };
            var r318_joiningOverlap = -r313_Width / 6;
            var _r318_t0 = Object.entries(r318_UnderScoreConfig)[Symbol.iterator]();
            var _r318_t1 = void 0;
            while (!(_r318_t1 = _r318_t0.next()).done) {
                _r318_t2 = _r318_t1.value;
                r318_suffix = _r318_t2[0];
                r318_yBar = _r318_t2[1][0];
                _r318_t2[1];
                (function () {
                    var r325_dotSize = Math.max(r313_Stroke * 1.1, 45);
                    var r325_dotYBot = 0 + r313_CAP - r325_dotSize / 2;
                    var r325_dotYTop = 0 + r313_CAP + r325_dotSize / 2;
                    r313_xn$GlyphSaveSink$2Lrc4b.save("underscore." + r318_suffix, null, r313_union(r313_VBar.l(r1_mix(r313_SB, r313_RightSB, 0.05), r325_dotYBot, r325_dotYTop, r325_dotSize), r313_VBar.l(r1_mix(r313_SB, r313_RightSB, 0.5), r325_dotYBot, r325_dotYTop, r325_dotSize), r313_VBar.l(r1_mix(r313_SB, r313_RightSB, 0.95), r325_dotYBot, r325_dotYTop, r325_dotSize)));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("doubleUnderscore." + r318_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                        var _r329_t0, _r329_t1;
                        r329_currentGlyph.include(r313_xn$referglyph$1aao("underscore." + r318_suffix), true, true);
                        r329_currentGlyph.include(r313_xn$referglyph$1aao("underscore." + r318_suffix, r313_Translate(0, -r313_openBoxGap)));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("openBox." + r318_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                        var _r334_t0, _r334_t1;
                        r334_currentGlyph.include(r313_xn$referglyph$1aao("underscore." + r318_suffix), true, true);
                        r334_currentGlyph.include(r318_OpenBoxSide(0 + r313_CAP + r313_HalfStroke));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save("openBoxShoulder." + r318_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                        var _r339_t0, _r339_t1;
                        r339_currentGlyph.include(r313_xn$referglyph$1aao("underscore." + r318_suffix), true, true);
                        r339_currentGlyph.include(r318_OpenBoxShoulderSide(0 + r313_CAP + r313_HalfStroke));
                        return void 0;
                    }));
                })();
            }
            r313_xn$selectvariant$7Hrq("underscore", "_");
            r313_xn$selectvariant$7Hrq("openBox", 9251, new r313_xn$NamedParameterPair$2Lrc9b("follow", "underscore"));
            r313_xn$selectvariant$7Hrq("openBoxShoulder", 9085, new r313_xn$NamedParameterPair$2Lrc9b("follow", "underscore"));
            return r313_xn$selectvariant$7Hrq("doubleUnderscore", 8215, new r313_xn$NamedParameterPair$2Lrc9b("follow", "underscore"));
        })();
        r313_xn$GlyphSaveSink$2Lrc4b.save("hyphen", "-", new r313_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
            var _r347_t0, _r347_t1;
            var r347_df = r347_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleF));
            var r347_dotSize = Math.max(r313_Stroke * 1.1, 45);
            var r347_dotYBot = r313_SymbolMid - r347_dotSize / 2;
            var r347_dotYTop = r313_SymbolMid + r347_dotSize / 2;
            r347_currentGlyph.include(r313_union(r313_VBar.l(r1_mix(r347_df.leftSB, r347_df.rightSB, 0.05), r347_dotYBot, r347_dotYTop, r347_dotSize), r313_VBar.l(r1_mix(r347_df.leftSB, r347_df.rightSB, 0.5), r347_dotYBot, r347_dotYTop, r347_dotSize), r313_VBar.l(r1_mix(r347_df.leftSB, r347_df.rightSB, 0.95), r347_dotYBot, r347_dotYTop, r347_dotSize)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("armn/hyphen", 1418, new r313_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
            var _r352_t0, _r352_t1;
            var r352_df = r352_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleF));
            r352_currentGlyph.include(r313_dispiro(r313_widths.center(), r313_g4(r352_df.leftSB, r313_SymbolMid, r313_heading(r313_Rightward)), r313_g4(r352_df.middle, r313_SymbolMid + 2 * r313_O), r313_g4(r352_df.rightSB, r313_SymbolMid, r313_heading(r313_Rightward))));
            return void 0;
        }));
        r313_alias("softhyphen", 173, "hyphen");
        r313_alias("gpHyphen", 8208, "hyphen");
        r313_alias("nbHyphen", 8209, "hyphen");
        r313_alias("hyphenBullet", 8259, "hyphen");
        r313_xn$GlyphSaveSink$2Lrc4b.save("figureDash", 8210, r313_HBar.m(r313_SB, r313_RightSB, r313_SymbolMid));
        r313_xn$GlyphSaveSink$2Lrc4b.save("overline", 8254, r313_HBar.t(r313_SB, r313_RightSB, r313_CAP));
        r313_xn$GlyphSaveSink$2Lrc4b.save("enDash", 8211, new r313_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
            var _r359_t0, _r359_t1;
            r359_currentGlyph.setWidth(r313_Width);
            r359_currentGlyph.include(r313_HBar.m(r1_mix(0, r313_SB, 0.5), r1_mix(r313_Width, r313_RightSB, 0.5), r313_SymbolMid));
            return void 0;
        }));
        (function () {
            var r364_FMosaicWide, r364_MosaicNameSuffix, r364_MosaicWidth, r364_MosaicWidthScalar, _r364_t3, _r364_t5, _r364_t6, _r364_tag7;
            var r364_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r364_t0 = r364_WidthKinds;
            var _r364_t1 = _r364_t0.length;
            var _r364_t2 = 0;
            var _r364_t4 = _r364_t2 < _r364_t1;
            while (_r364_t4) {
                _r364_t3 = _r364_t0[_r364_t2];
                r364_FMosaicWide = _r364_t3[0];
                r364_MosaicNameSuffix = _r364_t3[1];
                r364_MosaicWidth = _r364_t3[2];
                r364_MosaicWidthScalar = _r364_t3[3];
                (function () {
                    var r367_MosaicDesiredWidth = r313_WideWidth1;
                    var r367_MosaicMiddle = r364_MosaicWidth / 2;
                    var r367_MosaicUnitWidth = r364_MosaicWidth / r364_MosaicWidthScalar;
                    var r367_MangleUnicode = function (r368_unicode, r368__desiredOverride) {
                        var _r368_t0, _r368_t1;
                        return r364_MosaicWidth === (r368__desiredOverride || r367_MosaicDesiredWidth) ? r368_unicode : void 0;
                    };
                    var r367_MangleName = function (r369_name) {
                        var _r369_t0, _r369_t1;
                        return r369_name + r364_MosaicNameSuffix;
                    };
                    var r367_emDashWidth = r313_para.isQuasiProportional && r364_MosaicWidthScalar > 1 ? r313_UPM : r364_MosaicWidth;
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r367_MangleName("emDash"), r367_MangleUnicode(8212), new r313_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                        var _r372_t0, _r372_t1;
                        r372_currentGlyph.setWidth(r367_emDashWidth);
                        r372_currentGlyph.include(r313_HBar.m(0, r367_emDashWidth, r313_SymbolMid));
                        return void 0;
                    }));
                    r313_alias(r367_MangleName("horizontalBar"), r367_MangleUnicode(8213), r367_MangleName("emDash"));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r367_MangleName("spear"), r367_MangleUnicode(11843), new r313_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                        var _r377_t0, _r377_t1;
                        r377_currentGlyph.setWidth(r367_emDashWidth);
                        var r377_bot = r313_SymbolMid - r313_HalfStroke;
                        var r377_top = r313_SymbolMid + (r313_RightSB - r313_SB) * 0.55;
                        r377_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_flat(r313_SB + r313_OX, r377_top, r313_heading(r313_Downward)), r313_curl(r313_SB + r313_OX, Math.min(r377_bot + r313_SmallArchDepthB, r377_top - r313_TINY)), r313_arcvh(), r313_flat(r313_Middle, r377_bot), r313_curl(r367_emDashWidth - r313_SB, r377_bot, r313_heading(r313_Rightward))));
                        return void 0;
                    }));
                })();
                _r364_t5 = _r364_t2 = _r364_t2 + 1;
                _r364_t4 = _r364_t2 < _r364_t1;
            }
            return _r364_t5;
        })();
        r313_xn$derivemultipartglyphs$7Hrq65("hyphenDieresis", 11802, ["figureDash", "dieresisAbove"], function (r380_src, r380_sel) {
            var _r380_t0, _r380_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                var _r382_t0, _r382_t1;
                r382_currentGlyph.include(r313_xn$referglyph$1aao(r380_src[0]), true, true);
                r382_currentGlyph.include(r313_MarkSet.plus());
                r382_currentGlyph.include(r313_xn$referglyph$1aao(r380_src[1]));
                r382_currentGlyph.include(r313_xn$clearanchors$1aao());
                return void 0;
            });
        });
        return r313_xn$GlyphSaveSink$2Lrc4b.save("dblHyphen", 11840, new r313_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
            var _r389_t0, _r389_t1;
            var r389_df = r389_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleF));
            r389_currentGlyph.include(r313_HBar.m(r389_df.leftSB, r389_df.rightSB, r313_SymbolMid + r313_EqualHalfSpace));
            r389_currentGlyph.include(r313_HBar.m(r389_df.leftSB, r389_df.rightSB, r313_SymbolMid - r313_EqualHalfSpace));
            return void 0;
        }));
    });
    return void 0;
});


