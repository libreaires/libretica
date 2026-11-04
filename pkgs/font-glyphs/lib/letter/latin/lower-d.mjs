"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-D", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Body, r313_topSerif, r313_bottomSerif, _r313_t15, _r313_t17, _r313_t18, _r313_t19, _r313_tag20;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_Translate = _r313_t1.Translate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_VJut = _r313_t1.VJut;
        var r313_CThinB = _r313_t1.CThinB;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_OShapeOutline = _r313_t5.OShapeOutline;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_NeedNotItalic = _r313_t5.NeedNotItalic;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_flatside = _r313_t5.flatside;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_xn$derivemultipartglyphs$7Hrq65 = _r313_t6["derive-multi-part-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markExtend = _r313_t7.markExtend;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t8.LeaningAnchor;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t9.CreateAccentedComposition;
        var r313_CreateCommaCaronComposition = _r313_t9.CreateCommaCaronComposition;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_OBarRight = _r313_t10.OBarRight;
        var r313_RightwardTailedBar = _r313_t10.RightwardTailedBar;
        var r313_CurlyTail = _r313_t10.CurlyTail;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LetterBarOverlay = _r313_t11.LetterBarOverlay;
        var r313_SerifFrame = _r313_t11.SerifFrame;
        var r313_UpwardHookShape = _r313_t11.UpwardHookShape;
        var _r313_t12 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_PalatalHook = _r313_t12.PalatalHook;
        var r313_RetroflexHook = _r313_t12.RetroflexHook;
        var r313_TopHook = _r313_t12.TopHook;
        var r313_ToothedBody = function (r322_df, r322_yTop) {
            var _r322_t0, _r322_t1;
            return r313_union(r313_OBarRight.shape(new r313_xn$NamedParameterPair$2Lrc9b("left", r322_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r322_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r322_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r322_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r322_df.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r322_df.smallArchDepthB)), r313_tagged("rightBar", r313_VBar.r(r322_df.rightSB, 0, r322_yTop, r322_df.mvs)));
        };
        var r313_TailedBody = function (r329_df, r329_yTop) {
            var _r329_t0, _r329_t1;
            return r313_union(r313_OBarRight.shape(new r313_xn$NamedParameterPair$2Lrc9b("left", r329_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r329_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r329_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r329_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r329_df.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r329_df.smallArchDepthB)), r313_tagged("rightBar", r313_RightwardTailedBar(r329_df.rightSB, 0, r329_yTop, r329_df.mvs)));
        };
        var r313_FlatBottomBody = function (r336_df, r336_yTop) {
            var _r336_t0, _r336_t1;
            return r313_union(r313_OBarRight.toothlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("left", r336_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r336_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r336_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r336_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r336_df.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r336_df.smallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("rise", 0)), r313_tagged("rightBar", r313_VBar.r(r336_df.rightSB, 0, r336_yTop, r336_df.mvs)));
        };
        var r313_ToothlessCornerBody = function (r344_df, r344_yTop) {
            var _r344_t0, _r344_t1;
            return r313_union(r313_OBarRight.toothlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("left", r344_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r344_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r344_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r344_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r344_df.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r344_df.smallArchDepthB)), r313_tagged("rightBar", r313_VBar.r(r344_df.rightSB, r313_DToothlessRise, r344_yTop, r344_df.mvs)));
        };
        var r313_ToothlessCornerRTBBody = function (r351_df, r351_yTop) {
            var _r351_t0, _r351_t1;
            return r313_union(r313_OBarRight.toothlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("left", r351_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r351_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r351_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r351_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r351_df.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r351_df.smallArchDepthB)), r313_tagged("rightBar", r313_VBar.r(r351_df.rightSB, 0, r351_yTop, r351_df.mvs)));
        };
        var r313_ToothlessRoundedBody = function (r358_df, r358_yTop) {
            var _r358_t0, _r358_t1;
            return r313_OBarRight.toothlessRounded(new r313_xn$NamedParameterPair$2Lrc9b("yTerminal", r358_yTop), new r313_xn$NamedParameterPair$2Lrc9b("left", r358_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r358_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r358_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r358_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r358_df.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r358_df.smallArchDepthB));
        };
        var r313_TopSerif = function (r366_df, r366_yTop) {
            var _r366_t0, _r366_t1;
            return r313_tagged("serifRT", r313_HSerif.lt(r366_df.rightSB - r313_HSwToV(r366_df.mvs), r366_yTop, r313_SideJut, r366_df.mvs));
        };
        var r313_BaseSerif = function (r367_df, r367_yTop) {
            var _r367_t0, _r367_t1;
            return r313_tagged("serifRB", r313_HSerif.rb(r367_df.rightSB, 0, r313_SideJut, r367_df.mvs));
        };
        var r313_DConfig = r1_SuffixCfg.weave({
            "toothed": r313_ToothedBody,
            "tailed": r313_TailedBody,
            "flatBottom": r313_FlatBottomBody,
            "toothlessCorner": r313_ToothlessCornerBody,
            "toothlessCornerRTB": r313_ToothlessCornerRTBBody,
            "toothlessRounded": r313_ToothlessRoundedBody
        }, function (r368_body) {
            var _r368_t0, _r368_t1;
            return {
                "serifless": [null, null],
                "topSerifed": [r313_TopSerif, null],
                "bottomSerifed": [null, r313_BaseSerif],
                "serifed": [r313_TopSerif, r313_BaseSerif]
            };
        });
        var _r313_t13 = Object.entries(r313_DConfig)[Symbol.iterator]();
        var _r313_t14 = void 0;
        while (!(_r313_t14 = _r313_t13.next()).done) {
            _r313_t15 = _r313_t14.value;
            r313_suffix = _r313_t15[0];
            r313_Body = _r313_t15[1][0];
            r313_topSerif = _r313_t15[1][1][0];
            r313_bottomSerif = _r313_t15[1][1][1];
            _r313_t15[1][1];
            _r313_t15[1];
            (function () {
                var _r371_t0, _r371_tag1;
                var r371_yOverlay = r1_mix(r313_XH, r313_Ascender - (r313_topSerif ? r313_Stroke : 0), 0.5);
                (function () {
                    var r373_make = function (r374_df, r374_fPhoneticLeft) {
                        var _r374_t0, _r374_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                            var _r376_t0, _r376_t1;
                            r376_currentGlyph.include(r313_DivFrame(1));
                            r376_currentGlyph.include(r374_df.markSet.b());
                            r376_currentGlyph.include(r313_Body(r374_df, r313_Ascender));
                            if (r313_topSerif) r376_currentGlyph.include(r313_topSerif(r374_df, r313_Ascender));
                            if (r313_bottomSerif) r376_currentGlyph.include(r313_bottomSerif(r374_df, r313_Ascender));
                            if (r374_fPhoneticLeft) r376_currentGlyph.include(r313_HBar.t(r374_df.rightSB + r313_O, r313_RightSB + r313_SideJut, r313_XH));
                            r376_currentGlyph.include(r313_LeaningAnchor.Above.VBar.r(r374_df.rightSB, r374_df.mvs));
                            r376_currentGlyph.setBaseAnchor("overlayOnExtension", r374_df.rightSB - r313_HSwToV(0.5 * r374_df.mvs), r371_yOverlay);
                            r376_currentGlyph.setBaseAnchor("overlay", r374_df.middle, r313_XH / 2);
                            r376_currentGlyph.setBaseAnchor("strike", r374_df.middle, r313_XH / 2);
                            return void 0;
                        });
                    };
                    r313_xn$GlyphSaveSink$2Lrc4b.save("d." + r313_suffix, null, r373_make(r313_DivFrame(1), false));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("dCaron/base." + r313_suffix, null, r373_make(r313_DivFrame(0.95), false));
                    return !r313_bottomSerif && r313_Body === r313_ToothedBody ? r313_xn$GlyphSaveSink$2Lrc4b.save("d/phoneticLeft2." + r313_suffix, null, r373_make(r313_DivFrame((r1_mix(r313_Width, r313_RightSB, 0.5) - r313_HSwToV(r313_QuarterStroke)) / r313_Width, 2, 1), true)) : void 0;
                })();
                r313_xn$GlyphSaveSink$2Lrc4b.save("dStroke." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r392_currentGlyph) {
                    var _r392_t0, _r392_t1;
                    var r392_df = r313_DivFrame(1);
                    r392_currentGlyph.include(r313_xn$referglyph$1aao("d." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r392_currentGlyph.include(r313_LetterBarOverlay.r.in(r392_df.rightSB, r313_XH, r313_Ascender - (r313_topSerif ? r313_Stroke : 0)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("latn/de." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r397_currentGlyph) {
                    var _r397_t0, _r397_t1;
                    var r397_df = r397_currentGlyph.include(r313_DivFrame(1));
                    r397_currentGlyph.include(r397_df.markSet.b());
                    r397_currentGlyph.include(r313_Body(r397_df, r313_Ascender));
                    var r397_xTopLeft = r1_mix(r397_df.leftSB, r397_df.rightSB, 0.1);
                    r397_currentGlyph.include(r313_HBar.t(r397_xTopLeft, r397_df.rightSB + r313_O, r313_Ascender));
                    if (r313_topSerif) r397_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r404_currentGlyph) {
                        var _r404_t0, _r404_t1;
                        r404_currentGlyph.include(r313_VSerif.dl(r397_xTopLeft, r313_Ascender, Math.min(r313_VJut, r1_mix(r313_Stroke, r313_Ascender - r313_XH, 0.5))), true, true);
                        r404_currentGlyph.include(r313_NeedNotItalic(r313_HSerif.rt(r397_df.rightSB, r313_Ascender, r313_SideJut)));
                        return void 0;
                    }));
                    if (r313_bottomSerif) r397_currentGlyph.include(r313_bottomSerif(r397_df, r313_Ascender));
                    r397_currentGlyph.include(r313_LeaningAnchor.Above.At(r1_mix(r397_xTopLeft, r397_df.rightSB, 0.5)));
                    return void 0;
                }));
                return !r313_topSerif ? r313_xn$GlyphSaveSink$2Lrc4b.save("dHookTop." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r411_currentGlyph) {
                    var _r411_t0, _r411_t1;
                    var r411_df = r411_currentGlyph.include(r313_DivFrame(1));
                    r411_currentGlyph.include(r411_df.markSet.b());
                    r411_currentGlyph.include(r313_Body(r411_df, r313_Ascender - r313_Hook - r313_HalfStroke));
                    r411_currentGlyph.include(r313_TopHook.toRight.rBarInner(r411_df.rightSB, r313_XH / 2, r313_Ascender));
                    if (r313_bottomSerif) r411_currentGlyph.include(r313_bottomSerif(r411_df, r313_Ascender));
                    r411_currentGlyph.include(r313_LeaningAnchor.Above.VBar.r(r411_df.rightSB));
                    return void 0;
                })) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("d", "d");
        r313_xn$linkreducedvariant$5sIl8("d/sansSerif", "d", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("dCaron/base", new r313_xn$NamedParameterPair$2Lrc9b("follow", "d"));
        r313_xn$linkreducedvariant$5sIl8("d/phoneticLeft1", "d", new r313_xn$NamedParameterPair$2Lrc9b("follow", "d/phoneticLeft"));
        r313_xn$selectvariant$7Hrq("d/phoneticLeft2", new r313_xn$NamedParameterPair$2Lrc9b("follow", "d/phoneticLeft"));
        r313_xn$selectvariant$7Hrq("dStroke", 273, new r313_xn$NamedParameterPair$2Lrc9b("follow", "d"));
        r313_CreateAccentedComposition("dBar", null, "d", "hStrike");
        r313_xn$selectvariant$7Hrq("latn/de", 396, new r313_xn$NamedParameterPair$2Lrc9b("follow", "d"));
        r313_xn$selectvariant$7Hrq("dHookTop", 599);
        r313_xn$linkreducedvariant$5sIl8("d/descBase", "d");
        r313_xn$derivecomposites$7Hrq("dPalatalHook", 7553, "d/descBase", r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("xLink", r313_RightSB), new r313_xn$NamedParameterPair$2Lrc9b("x", r313_RightSB + r313_SideJut), new r313_xn$NamedParameterPair$2Lrc9b("y", 0)));
        r313_xn$linkreducedvariant$5sIl8("d/rTailBase", "d");
        r313_xn$deriveglyphs$7Hrq("dRTail", 598, "d/rTailBase", function (r426_src, r426_gr) {
            var _r426_t0, _r426_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r428_currentGlyph) {
                var _r428_t0, _r428_t1;
                r428_currentGlyph.include(r313_xn$referglyph$1aao(r426_src), r313_AS_BASE, r313_ALSO_METRICS);
                r428_currentGlyph.include(r313_RetroflexHook.rExt(r313_RightSB, 0));
                r428_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r313_RightSB));
                return void 0;
            });
        });
        r313_xn$linkreducedvariant$5sIl8("dHookTop/descBase", "dHookTop");
        r313_xn$derivecomposites$7Hrq("dHookTopPalatalHook", 122669, "dHookTop/descBase", r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("xLink", r313_RightSB), new r313_xn$NamedParameterPair$2Lrc9b("x", r313_RightSB + r313_SideJut), new r313_xn$NamedParameterPair$2Lrc9b("y", 0)));
        r313_xn$linkreducedvariant$5sIl8("dHookTop/rTailBase", "dHookTop");
        r313_xn$deriveglyphs$7Hrq("dHookTopRTail", 7569, "dHookTop/rTailBase", function (r435_src, r435_gr) {
            var _r435_t0, _r435_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r437_currentGlyph) {
                var _r437_t0, _r437_t1;
                r437_currentGlyph.include(r313_xn$referglyph$1aao(r435_src), r313_AS_BASE, r313_ALSO_METRICS);
                r437_currentGlyph.include(r313_RetroflexHook.rExt(r313_RightSB, 0));
                r437_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r313_RightSB));
                return void 0;
            });
        });
        r313_CreateCommaCaronComposition("dCaron", 271, "dCaron/base", r313_Width - r313_HSwToV(r313_QuarterStroke));
        r313_CreateAccentedComposition("dWedge", null, "d", "caronAbove");
        r313_xn$derivemultipartglyphs$7Hrq65("dDot", 7691, ["d", "dotAbove"], function (r441_srcs, r441_gr) {
            var _r441_t0, _r441_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r443_currentGlyph) {
                var _r443_t1, _r443_t2;
                var _r443_t0 = r441_srcs;
                var r443_base = _r443_t0[0];
                var r443_mark = _r443_t0[1];
                r443_currentGlyph.include(r313_xn$referglyph$1aao(r443_mark));
                r443_currentGlyph.include(r313_Translate(r313_Width - r313_HSwToV(r313_HalfStroke), 0));
                r443_currentGlyph.include(r313_xn$referglyph$1aao(r443_base), r313_AS_BASE);
                r443_currentGlyph.include(r313_LeaningAnchor.Above.VBar.r(r313_Middle));
                return void 0;
            });
        });
        r313_xn$derivecomposites$7Hrq("tauGallicum", 42952, "d", r313_HBar.m(r313_SB - r313_OX, r313_RightSB + r313_OX, r313_XH * 0.5, r313_OverlayStroke));
        r313_xn$GlyphSaveSink$2Lrc4b.save("dCurlyTail.toothedSerifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r450_currentGlyph) {
            var _r450_t0, _r450_t1;
            r450_currentGlyph.include(r313_MarkSet.b());
            var r450_fine = r313_AdviceStroke(4);
            var r450_rinner = r1_clamp(r313_Width * 0.065, r313_XH * 0.05, r450_fine * 0.35);
            var r450_sw = r313_AdviceStroke(2.75);
            var r450_m = Math.min(r313_RightSB, r313_Width - r450_rinner * 2 - r450_fine - r313_OX);
            r450_currentGlyph.include(r313_LeaningAnchor.Above.VBar.r(r450_m));
            r450_currentGlyph.include(r313_OBarRight.shape(new r313_xn$NamedParameterPair$2Lrc9b("left", r313_SB), new r313_xn$NamedParameterPair$2Lrc9b("right", r450_m), new r313_xn$NamedParameterPair$2Lrc9b("sw", r450_sw)));
            r450_currentGlyph.include(r313_dispiro(r313_widths.lhs(r450_sw), r313_flat(r450_m - r313_HSwToV(r450_sw), r313_Ascender, r313_heading(r313_Downward)), r313_curl(r450_m - r313_HSwToV(r450_sw), r450_rinner * 2 + r450_fine), r313_CurlyTail.n(r450_fine, 0, r450_m + r450_rinner * 2 + r450_fine, new r313_xn$NamedParameterPair$2Lrc9b("x2", r1_mix(r313_SB, r450_m, 0.5) - r313_HSwToV(0.75 * r450_fine)), new r313_xn$NamedParameterPair$2Lrc9b("y2", 0.37 * r313_Descender), new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r450_sw), new r313_xn$NamedParameterPair$2Lrc9b("terminalSlopeAdj", 0.25))));
            r313_xn$GlyphSaveSink$2Lrc4b.save("dCurlyTail.toothedTopSerifed", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r450_currentGlyph, r313_HSerif.lt(r450_m - r313_HSwToV(r450_sw), r313_Ascender, r313_SideJut, r450_sw)));
            return void 0;
        }));
        r313_xn$selectvariant$7Hrq("dCurlyTail", 545);
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/djeKomi.toothlessRoundedSerifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r466_currentGlyph) {
            var r466_sf2, _r466_t0, _r466_t1;
            var r466_df = r466_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
            r466_currentGlyph.include(r466_df.markSet.b());
            var r466_subDf = r466_df.slice(3, 2);
            r466_currentGlyph.include(r313_dispiro(r313_OBarRight.arcStart(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("left", r466_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r466_df.middle + r313_HSwToV(0.5 * r466_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("sw", r466_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r466_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r466_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r466_subDf.smallArchDepthB)), r313_flatside.ld(r466_df.leftSB, 0, r313_XH, r466_subDf.smallArchDepthA, r466_subDf.smallArchDepthB), r313_OBarRight.arcEnd(new r313_xn$NamedParameterPair$2Lrc9b("bot", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r466_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r466_df.middle + r313_HSwToV(0.5 * r466_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("sw", r466_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r466_df.mvs * r313_CThinB), new r313_xn$NamedParameterPair$2Lrc9b("ada", r466_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r466_subDf.smallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("yend", r313_XH))));
            r466_currentGlyph.include(r313_UpwardHookShape(new r313_xn$NamedParameterPair$2Lrc9b("left", r466_df.middle - r313_HSwToV(0.5 * r466_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r466_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("ybegin", r313_Ascender), new r313_xn$NamedParameterPair$2Lrc9b("yend", r313_XH / 2 + r313_HalfStroke), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA * (2 / r466_df.hPack) * r466_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB * (2 / r466_df.hPack) * r466_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("sw", r466_df.mvs)));
            if (r313_SLAB) {
                r466_sf2 = r313_SerifFrame.fromDf(r466_df, r313_XH / 2 + r313_HalfStroke, 0).slice(1, 2);
                r466_currentGlyph.include(r466_sf2.rt.full);
            }
            r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/djeKomi.toothlessRoundedTopSerifed", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r466_currentGlyph, r313_HSerif.lt(r466_df.middle - r313_HSwToV(0.5 * r466_df.mvs), r313_Ascender, r313_SideJut, r466_df.mvs)));
            return void 0;
        }));
        r313_alias("cyrl/deKomi", 1281, "d");
        r313_xn$selectvariant$7Hrq("cyrl/djeKomi", 1283);
        var _r313_t16 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t16.BBS;
        var r313_BBD = _r313_t16.BBD;
        var r313_BBBarRight = _r313_t16.BBBarRight;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/d", 120149, new r313_xn$Capture$2Lrc8.GlyphProc(function (r499_currentGlyph) {
            var _r499_t0, _r499_t1;
            r499_currentGlyph.include(r313_MarkSet.b());
            r499_currentGlyph.include(r313_BBBarRight(r313_RightSB, 0, r313_Ascender));
            r499_currentGlyph.include(r313_intersection(r313_OShapeOutline.NoOvershoot(r313_XH, 0, r313_SB, r313_RightSB - r313_BBD - r313_HSwToV(r313_BBS)), r313_VBar.l(r313_SB + r313_BBD + r313_OX, 0, r313_XH, r313_BBS)));
            r499_currentGlyph.include(r313_OBarRight.shape(new r313_xn$NamedParameterPair$2Lrc9b("right", r313_RightSB - r313_BBD), new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_BBS)));
            return void 0;
        }));
    });
    return void 0;
});


