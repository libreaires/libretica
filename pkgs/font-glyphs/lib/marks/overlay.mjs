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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Mark-Overlay", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11, _r312_t12, _r312_tag13, _r312_t14, _r312_tag15, _r312_t16, _r312_tag17, _r312_t18, _r312_tag19, _r312_t20, _r312_tag21, _r312_t22, _r312_tag23;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Translate = _r312_t1.Translate;
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_AdviceStrokeInSpace = _r312_t1.AdviceStrokeInSpace;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_OverlayStroke = _r312_t1.OverlayStroke;
        var r312_LongJut = _r312_t1.LongJut;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_DotRadius = _r312_t1.DotRadius;
        var r312_StrokeWidthBlend = _r312_t1.StrokeWidthBlend;
        var r312_ArchDepthAOf = _r312_t1.ArchDepthAOf;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_g2 = _r312_t2.g2;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_end = _r312_t2.end;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Rect = _r312_t5.Rect;
        var r312_RingAt = _r312_t5.RingAt;
        var r312_DotAt = _r312_t5.DotAt;
        var r312_RingStrokeAt = _r312_t5.RingStrokeAt;
        var r312_OShapeOutline = _r312_t5.OShapeOutline;
        var r312_HBar = _r312_t5.HBar;
        var r312_HOverlayBar = _r312_t5.HOverlayBar;
        var r312_HOverlayObliqueBar = _r312_t5.HOverlayObliqueBar;
        var r312_FlatSlashShape = _r312_t5.FlatSlashShape;
        var r312_VBar = _r312_t5.VBar;
        var r312_Arch = _r312_t5.Arch;
        var r312_xn$withtransform$5sIl = _r312_t5["with-transform"];
        var r312_DotVariants = _r312_t5.DotVariants;
        var r312_WithDotVariants = _r312_t5.WithDotVariants;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r312_markExtend = _r312_t7.markExtend;
        var r312_MarkStroke = _r312_t7.MarkStroke;
        var r312_markStress = _r312_t7.markStress;
        var r312_markFine = _r312_t7.markFine;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r312_markMiddle = _r312_t8.markMiddle;
        var r312_markDotsRadius = _r312_t8.markDotsRadius;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r312_aboveMarkTop = _r312_t9.aboveMarkTop;
        var r312_aboveMarkBot = _r312_t9.aboveMarkBot;
        var r312_aboveMarkMid = _r312_t9.aboveMarkMid;
        var r312_TildeShape = _r312_t9.TildeShape;
        var r312_RingShape = _r312_t9.RingShape;
        var r312_tildeHeight = 0.75 * (r312_aboveMarkTop - r312_aboveMarkBot);
        var r312_tildeHalfWidth = r312_markExtend + r312_HSwToV(0.4 * r312_Stroke);
        (function () {
            r312_xn$GlyphSaveSink$2Lrc4b.save("tildeOver", 820, new r312_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                var _r322_t0, _r322_t1;
                r322_currentGlyph.setWidth(0);
                r322_currentGlyph.setMarkAnchor("overlay", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                r322_currentGlyph.include(r312_TildeShape(new r312_xn$NamedParameterPair$2Lrc9b("ttop", r312_XH / 2 + r312_tildeHeight / 2), new r312_xn$NamedParameterPair$2Lrc9b("tbot", r312_XH / 2 - r312_tildeHeight / 2), new r312_xn$NamedParameterPair$2Lrc9b("leftEnd", r312_markMiddle - r312_tildeHalfWidth), new r312_xn$NamedParameterPair$2Lrc9b("rightEnd", r312_markMiddle + r312_tildeHalfWidth), new r312_xn$NamedParameterPair$2Lrc9b("hs", r312_AdviceStroke(4) / 2)));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("dblTildeOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                var _r333_t0, _r333_t1;
                r333_currentGlyph.setWidth(0);
                r333_currentGlyph.setMarkAnchor("overlay", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                var r333_ttop = r312_XH / 2 + r312_tildeHeight / 2;
                var r333_tbot = r312_XH / 2 - r312_tildeHeight / 2;
                var r333_addTilde = function () {
                    var _r336_t0, _r336_t1;
                    return r312_TildeShape(new r312_xn$NamedParameterPair$2Lrc9b("ttop", r333_ttop), new r312_xn$NamedParameterPair$2Lrc9b("tbot", r333_tbot), new r312_xn$NamedParameterPair$2Lrc9b("leftEnd", r312_markMiddle - r312_tildeHalfWidth), new r312_xn$NamedParameterPair$2Lrc9b("rightEnd", r312_markMiddle + r312_tildeHalfWidth), new r312_xn$NamedParameterPair$2Lrc9b("hs", r312_AdviceStroke(4.5) / 2));
                };
                var r333_shift = (r333_ttop - r333_tbot) * 1.2;
                r333_currentGlyph.include(r333_addTilde());
                r333_currentGlyph.include(r312_ApparentTranslate(0, +1 * r333_shift));
                r333_currentGlyph.include(r333_addTilde());
                r333_currentGlyph.include(r312_ApparentTranslate(0, -0.5 * r333_shift));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("tildeOverOnExension", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                var _r348_t0, _r348_t1;
                r348_currentGlyph.setWidth(0);
                r348_currentGlyph.setMarkAnchor("overlayOnExtension", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                r348_currentGlyph.include(r312_TildeShape(new r312_xn$NamedParameterPair$2Lrc9b("ttop", r312_XH / 2 + r312_tildeHeight / 3), new r312_xn$NamedParameterPair$2Lrc9b("tbot", r312_XH / 2 - r312_tildeHeight / 3), new r312_xn$NamedParameterPair$2Lrc9b("leftEnd", r312_markMiddle - r312_tildeHalfWidth), new r312_xn$NamedParameterPair$2Lrc9b("rightEnd", r312_markMiddle + r312_tildeHalfWidth), new r312_xn$NamedParameterPair$2Lrc9b("hs", r312_AdviceStroke(4) / 2)));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("invLazySOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                var _r359_t0, _r359_t1;
                r359_currentGlyph.setWidth(0);
                r359_currentGlyph.setMarkAnchor("overlay", 0, 0, 0, 0);
                var r359_sw = r312_AdviceStroke(4);
                var r359_gap = Math.max(r312_Width * 0.1, r312_AdviceStroke(6));
                var r359_xStart = r312_HSwToV(r312_HalfStroke) + r359_gap;
                var r359_r = Math.max(0.75 * r312_markExtend, r359_sw);
                r359_currentGlyph.include(r312_dispiro(r312_widths.center(r359_sw), r312_straight.right.start(+r359_xStart, +r359_r * 2, r312_heading(r312_Rightward)), r312_archv(), r312_g2.down.mid(+r359_xStart + +r359_r, +r359_r * 1, r312_heading(r312_Downward)), r312_arcvh(), r312_flat(+r359_xStart, 0, r312_heading(r312_Leftward)), r312_curl(-r359_xStart, 0, r312_heading(r312_Leftward)), r312_archv(), r312_g2.down.mid(-r359_xStart + -r359_r, -r359_r * 1, r312_heading(r312_Downward)), r312_arcvh(), r312_straight.right.end(-r359_xStart, -r359_r * 2, r312_heading(r312_Rightward))));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("barOver", 821, new r312_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                var _r365_t0, _r365_t1;
                r365_currentGlyph.setWidth(0);
                r365_currentGlyph.setMarkAnchor("overlay", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                r365_currentGlyph.include(r312_HOverlayBar(r312_markMiddle - r312_LongJut * 0.75, r312_markMiddle + r312_LongJut * 0.75, r312_XH / 2));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("dblBarOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r371_currentGlyph) {
                var _r371_t0, _r371_t1;
                r371_currentGlyph.setWidth(0);
                r371_currentGlyph.setMarkAnchor("overlay", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                var r371_gap = (r312_CAP - 0) * 0.1;
                r371_currentGlyph.include(r312_HOverlayBar(r312_markMiddle - r312_LongJut * 0.75, r312_markMiddle + r312_LongJut * 0.75, r312_XH / 2 + r371_gap));
                r371_currentGlyph.include(r312_HOverlayBar(r312_markMiddle - r312_LongJut * 0.75, r312_markMiddle + r312_LongJut * 0.75, r312_XH / 2 - r371_gap));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("barOverOnExtension", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r378_currentGlyph) {
                var _r378_t0, _r378_t1;
                r378_currentGlyph.setWidth(0);
                r378_currentGlyph.setMarkAnchor("overlayOnExtension", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                r378_currentGlyph.include(r312_HOverlayBar(r312_markMiddle - r312_LongJut * 0.75, r312_markMiddle + r312_LongJut * 0.75, r312_XH / 2));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("shortSlashOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                var _r384_t0, _r384_t1;
                r384_currentGlyph.setWidth(0);
                r384_currentGlyph.setMarkAnchor("overlay", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                r384_currentGlyph.include(r312_FlatSlashShape(r312_markMiddle, r312_XH / 2, 0.5 * r312_OverlayStroke));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("antiSlashOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                var _r390_t0, _r390_t1;
                r390_currentGlyph.setWidth(0);
                r390_currentGlyph.setMarkAnchor("overlay", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                r390_currentGlyph.include(r312_FlatSlashShape(r312_markMiddle, r312_XH / 2, 0.5 * r312_OverlayStroke, +0.75, -0.3));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("ringOver", 8408, new r312_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                var _r396_t0, _r396_t1;
                r396_currentGlyph.setWidth(0);
                r396_currentGlyph.setMarkAnchor("overlay", 0, 0, 0, 0);
                r396_currentGlyph.include(r312_RingShape(0, 0, r312_tildeHalfWidth));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("aleutSlashOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r402_currentGlyph) {
                var _r402_t0, _r402_t1;
                r402_currentGlyph.setWidth(0);
                r402_currentGlyph.setMarkAnchor("armOverlay", 0, 0, 0, 0);
                r402_currentGlyph.include(r312_dispiro(r312_widths.center(r312_OverlayStroke), r312_flat(-r312_markExtend, +r312_markExtend), r312_curl(+r312_markExtend, -r312_markExtend)));
                return void 0;
            }));
            return r312_xn$GlyphSaveSink$2Lrc4b.save("legSlashOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r408_currentGlyph) {
                var _r408_t0, _r408_t1;
                r408_currentGlyph.setWidth(0);
                r408_currentGlyph.setMarkAnchor("legOverlay", 0, 0, 0, 0);
                r408_currentGlyph.include(r312_dispiro(r312_widths.center(r312_OverlayStroke), r312_flat(-r312_markExtend, -r312_markExtend), r312_curl(+r312_markExtend, +r312_markExtend)));
                return void 0;
            }));
        })();
        (function () {
            r312_xn$GlyphSaveSink$2Lrc4b.save("hStrike", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r416_currentGlyph) {
                var _r416_t0, _r416_t1;
                r416_currentGlyph.setWidth(0);
                r416_currentGlyph.setMarkAnchor("strike", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                r416_currentGlyph.include(r312_HOverlayBar(r1_mix(0, r312_SB, 0.3) - r312_Width, r1_mix(r312_Width, r312_RightSB, 0.3) - r312_Width, r312_XH / 2));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("hStrike/adwsM", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r422_currentGlyph) {
                var _r422_t0, _r422_t1;
                r422_currentGlyph.setWidth(0);
                r422_currentGlyph.setMarkAnchor("strike", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                r422_currentGlyph.include(r312_HOverlayBar(r312_markMiddle - r312_Width * r312_para.advanceScaleM / 2 + 0.3 * (r312_SB - 0), r312_markMiddle + r312_Width * r312_para.advanceScaleM / 2 - 0.3 * (r312_SB - 0), r312_XH / 2));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("hStrike/adwsMM", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r428_currentGlyph) {
                var _r428_t0, _r428_t1;
                r428_currentGlyph.setWidth(0);
                r428_currentGlyph.setMarkAnchor("strike", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                r428_currentGlyph.include(r312_HOverlayBar(r312_markMiddle - r312_Width * r312_para.advanceScaleMM / 2 + 0.3 * (r312_SB - 0), r312_markMiddle + r312_Width * r312_para.advanceScaleMM / 2 - 0.3 * (r312_SB - 0), r312_XH / 2));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("strikeThrough", 822, new r312_xn$Capture$2Lrc8.GlyphProc(function (r434_currentGlyph) {
                var _r434_t0, _r434_t1;
                r434_currentGlyph.setWidth(0);
                r434_currentGlyph.setMarkAnchor("slash", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                r434_currentGlyph.include(r312_HOverlayBar(0 - r312_Width, r312_Width - r312_Width, r312_XH / 2));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("oblStrike", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r440_currentGlyph) {
                var _r440_t0, _r440_t1;
                r440_currentGlyph.setWidth(0);
                r440_currentGlyph.setMarkAnchor("strike", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                r440_currentGlyph.include(r312_HOverlayObliqueBar(r1_mix(0, r312_SB, 0.3) - r312_Width, r1_mix(r312_Width, r312_RightSB, 0.3) - r312_Width, r312_XH / 2));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("tildeStrike", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r446_currentGlyph) {
                var _r446_t0, _r446_t1;
                r446_currentGlyph.setWidth(0);
                r446_currentGlyph.setMarkAnchor("strike", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                r446_currentGlyph.include(r312_TildeShape(new r312_xn$NamedParameterPair$2Lrc9b("ttop", r312_XH / 2 + r312_tildeHeight / 2), new r312_xn$NamedParameterPair$2Lrc9b("tbot", r312_XH / 2 - r312_tildeHeight / 2), new r312_xn$NamedParameterPair$2Lrc9b("leftEnd", r312_markMiddle - r312_Width / 2), new r312_xn$NamedParameterPair$2Lrc9b("rightEnd", r312_markMiddle + r312_Width / 2), new r312_xn$NamedParameterPair$2Lrc9b("hs", r312_OverlayStroke / 2)));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("tildeStrike2", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r457_currentGlyph) {
                var _r457_t0, _r457_t1;
                r457_currentGlyph.setWidth(0);
                r457_currentGlyph.setMarkAnchor("strike", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                r457_currentGlyph.include(r312_TildeShape(new r312_xn$NamedParameterPair$2Lrc9b("ttop", r312_XH / 2 + r312_tildeHeight / 2), new r312_xn$NamedParameterPair$2Lrc9b("tbot", r312_XH / 2 - r312_tildeHeight / 2), new r312_xn$NamedParameterPair$2Lrc9b("leftEnd", r312_markMiddle - (r312_RightSB - r312_SB) / 2), new r312_xn$NamedParameterPair$2Lrc9b("rightEnd", r312_markMiddle + (r312_RightSB - r312_SB) / 2), new r312_xn$NamedParameterPair$2Lrc9b("hs", r312_OverlayStroke / 2)));
                return void 0;
            }));
            return r312_xn$GlyphSaveSink$2Lrc4b.save("tildeStrike/adwsMM", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r468_currentGlyph) {
                var _r468_t0, _r468_t1;
                r468_currentGlyph.setWidth(0);
                r468_currentGlyph.setMarkAnchor("strike", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                r468_currentGlyph.include(r312_TildeShape(new r312_xn$NamedParameterPair$2Lrc9b("ttop", r312_XH / 2 + r312_tildeHeight / 2), new r312_xn$NamedParameterPair$2Lrc9b("tbot", r312_XH / 2 - r312_tildeHeight / 2), new r312_xn$NamedParameterPair$2Lrc9b("leftEnd", r312_markMiddle - r312_Width * r312_para.advanceScaleMM / 2), new r312_xn$NamedParameterPair$2Lrc9b("rightEnd", r312_markMiddle + r312_Width * r312_para.advanceScaleMM / 2), new r312_xn$NamedParameterPair$2Lrc9b("hs", r312_OverlayStroke / 2)));
                return void 0;
            }));
        })();
        (function () {
            var r478_fine = r312_AdviceStroke(6);
            var r478_fineDbl = r312_AdviceStroke(7);
            r312_xn$GlyphSaveSink$2Lrc4b.save("shortSlash", 823, new r312_xn$Capture$2Lrc8.GlyphProc(function (r481_currentGlyph) {
                var _r481_t0, _r481_t1;
                r481_currentGlyph.setWidth(0);
                r481_currentGlyph.setMarkAnchor("slash", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                var r481_dx = (r312_RightSB - r312_SB) / 2 + r312_O * 3 - 0.5 * r478_fine;
                var r481_dy = (r312_XH - 0) * 0.6;
                r481_currentGlyph.include(r312_dispiro(r312_widths.center(r478_fine), r312_flat(r312_markMiddle - r481_dx, r312_XH / 2 - r481_dy), r312_curl(r312_markMiddle + r481_dx, r312_XH / 2 + r481_dy)));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("longSlash", 824, new r312_xn$Capture$2Lrc8.GlyphProc(function (r487_currentGlyph) {
                var _r487_t0, _r487_t1;
                r487_currentGlyph.setWidth(0);
                r487_currentGlyph.setMarkAnchor("slash", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                var r487_dx = (r312_RightSB - r312_SB) / 2 + r312_O * 3 - 0.5 * r478_fine;
                var r487_dy = (r312_CAP - 0) * 0.6;
                r487_currentGlyph.include(r312_dispiro(r312_widths.center(r478_fine), r312_flat(r312_markMiddle - r487_dx, r312_XH / 2 - r487_dy), r312_curl(r312_markMiddle + r487_dx, r312_XH / 2 + r487_dy)));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("longVStrokeOver", 8402, new r312_xn$Capture$2Lrc8.GlyphProc(function (r493_currentGlyph) {
                var _r493_t0, _r493_t1;
                r493_currentGlyph.setWidth(0);
                r493_currentGlyph.setMarkAnchor("slash", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                var r493_dy = (r312_CAP - 0) * 0.6;
                r493_currentGlyph.include(r312_dispiro(r312_widths.center(r478_fine), r312_flat(r312_markMiddle, r312_XH / 2 - r493_dy), r312_curl(r312_markMiddle, r312_XH / 2 + r493_dy)));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("shortVStrokeOver", 8403, new r312_xn$Capture$2Lrc8.GlyphProc(function (r499_currentGlyph) {
                var _r499_t0, _r499_t1;
                r499_currentGlyph.setWidth(0);
                r499_currentGlyph.setMarkAnchor("slash", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                var r499_dy = (r312_XH - 0) * 0.6;
                r499_currentGlyph.include(r312_dispiro(r312_widths.center(r478_fine), r312_flat(r312_markMiddle, r312_XH / 2 - r499_dy), r312_curl(r312_markMiddle, r312_XH / 2 + r499_dy)));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("revLongSlash", 8421, new r312_xn$Capture$2Lrc8.GlyphProc(function (r505_currentGlyph) {
                var _r505_t0, _r505_t1;
                r505_currentGlyph.setWidth(0);
                r505_currentGlyph.setMarkAnchor("slash", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                var r505_dx = (r312_RightSB - r312_SB) / 2 + r312_O * 3 - 0.5 * r478_fine;
                var r505_dy = (r312_CAP - 0) * 0.6;
                r505_currentGlyph.include(r312_dispiro(r312_widths.center(r478_fine), r312_flat(r312_markMiddle + r505_dx, r312_XH / 2 - r505_dy), r312_curl(r312_markMiddle - r505_dx, r312_XH / 2 + r505_dy)));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("dblLongVStrokeOver", 8422, new r312_xn$Capture$2Lrc8.GlyphProc(function (r511_currentGlyph) {
                var _r511_t0, _r511_t1;
                r511_currentGlyph.setWidth(0);
                r511_currentGlyph.setMarkAnchor("slash", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                var r511_dy = (r312_CAP - 0) * 0.6;
                var r511_gap = Math.max(r478_fineDbl, r312_Width * 0.1);
                r511_currentGlyph.include(r312_dispiro(r312_widths.center(r478_fineDbl), r312_flat(r312_markMiddle - r511_gap, r312_XH / 2 - r511_dy), r312_curl(r312_markMiddle - r511_gap, r312_XH / 2 + r511_dy)));
                r511_currentGlyph.include(r312_dispiro(r312_widths.center(r478_fineDbl), r312_flat(r312_markMiddle + r511_gap, r312_XH / 2 - r511_dy), r312_curl(r312_markMiddle + r511_gap, r312_XH / 2 + r511_dy)));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("dblLongSlash", 8427, new r312_xn$Capture$2Lrc8.GlyphProc(function (r518_currentGlyph) {
                var _r518_t0, _r518_t1;
                r518_currentGlyph.setWidth(0);
                r518_currentGlyph.setMarkAnchor("slash", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                var r518_dx = (r312_RightSB - r312_SB) / 2 + r312_O * 3 - 0.5 * r478_fineDbl;
                var r518_dy = (r312_CAP - 0) * 0.6;
                var r518_gap = Math.max(r478_fineDbl, r312_Width * 0.1);
                r518_currentGlyph.include(r312_dispiro(r312_widths.center(r478_fineDbl), r312_flat(r312_markMiddle - r518_gap - r518_dx, r312_XH / 2 - r518_dy), r312_curl(r312_markMiddle - r518_gap + r518_dx, r312_XH / 2 + r518_dy)));
                r518_currentGlyph.include(r312_dispiro(r312_widths.center(r478_fineDbl), r312_flat(r312_markMiddle + r518_gap - r518_dx, r312_XH / 2 - r518_dy), r312_curl(r312_markMiddle + r518_gap + r518_dx, r312_XH / 2 + r518_dy)));
                return void 0;
            }));
            return r312_xn$GlyphSaveSink$2Lrc4b.save("wideSlash", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r525_currentGlyph) {
                var _r525_t0, _r525_t1;
                r525_currentGlyph.setWidth(0);
                r525_currentGlyph.setMarkAnchor("slash", r312_markMiddle, r312_XH / 2, r312_markMiddle, r312_XH / 2);
                var r525_df = r312_DivFrame(r312_para.advanceScaleMM, 3);
                var r525_dx = (r525_df.rightSB - r525_df.leftSB) / 2 - r312_O * 3 - 0.5 * r478_fine;
                var r525_dy = (r312_XH - 0) * 0.6;
                r525_currentGlyph.include(r312_dispiro(r312_widths.center(r478_fine), r312_flat(r312_markMiddle - r525_dx, r312_XH / 2 - r525_dy), r312_curl(r312_markMiddle + r525_dx, r312_XH / 2 + r525_dy)));
                return void 0;
            }));
        })();
        (function () {
            var _r530_t1, _r530_tag2;
            var _r530_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
            var r530_ArrowDims = _r530_t0.ArrowDims;
            return (function () {
                var r534_FMosaicWide, r534_MosaicNameSuffix, r534_MosaicWidth, r534_MosaicWidthScalar, _r534_t3, _r534_t5, _r534_t6, _r534_tag7;
                var r534_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
                var _r534_t0 = r534_WidthKinds;
                var _r534_t1 = _r534_t0.length;
                var _r534_t2 = 0;
                var _r534_t4 = _r534_t2 < _r534_t1;
                while (_r534_t4) {
                    _r534_t3 = _r534_t0[_r534_t2];
                    r534_FMosaicWide = _r534_t3[0];
                    r534_MosaicNameSuffix = _r534_t3[1];
                    r534_MosaicWidth = _r534_t3[2];
                    r534_MosaicWidthScalar = _r534_t3[3];
                    (function () {
                        var r537_MosaicDesiredWidth = r312_WideWidth1;
                        var r537_MosaicMiddle = r534_MosaicWidth / 2;
                        var r537_MosaicUnitWidth = r534_MosaicWidth / r534_MosaicWidthScalar;
                        var r537_MangleUnicode = function (r538_unicode, r538__desiredOverride) {
                            var _r538_t0, _r538_t1;
                            return r534_MosaicWidth === (r538__desiredOverride || r537_MosaicDesiredWidth) ? r538_unicode : void 0;
                        };
                        var r537_MangleName = function (r539_name) {
                            var _r539_t0, _r539_t1;
                            return r539_name + r534_MosaicNameSuffix;
                        };
                        var r537_dims = r530_ArrowDims(r534_MosaicWidth);
                        var _r537_t0 = r537_dims;
                        var r537_arrowWidth = _r537_t0.arrowWidth;
                        var r537_arrowHeadSize = _r537_t0.arrowHeadSize;
                        var r537_arrowSw = _r537_t0.arrowSw;
                        var r537_fine = _r537_t0.fine;
                        var r537_overlaySw = _r537_t0.overlaySw;
                        var r537_strokeSpan = _r537_t0.strokeSpan;
                        var r537_strokeSpan2 = _r537_t0.strokeSpan2;
                        var r537_dblArrSpace = _r537_t0.dblArrSpace;
                        var r537_dhtArrSpace = _r537_t0.dhtArrSpace;
                        var r537_dblArrSw = _r537_t0.dblArrSw;
                        var r537_dhtArrSw = _r537_t0.dhtArrSw;
                        var r537_terminal = _r537_t0.terminal;
                        var r537_VRingRadius = r537_arrowHeadSize * 0.7;
                        var r537_HRingRadius = Math.min(r537_VRingRadius, r537_arrowWidth - 2 * r537_arrowHeadSize - 0.3 * r537_terminal);
                        var r537_VRingSw = r312_AdviceStrokeInSpace(r537_VRingRadius, 2.25);
                        var r537_HRingSw = r312_AdviceStrokeInSpace(r537_HRingRadius, 2.25);
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r537_MangleName("arrSlashOver"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r542_currentGlyph) {
                            var _r542_t0, _r542_t1;
                            r542_currentGlyph.setWidth(0);
                            r542_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                            var r542_dx = r537_arrowHeadSize * 0.4;
                            var r542_dy = r537_arrowHeadSize * 1.1;
                            r542_currentGlyph.include(r312_dispiro(r312_widths.center(r537_overlaySw), r312_flat(-r542_dx, -r542_dy), r312_curl(+r542_dx, +r542_dy)));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r537_MangleName("arrDblSlashOver"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r548_currentGlyph) {
                            var _r548_t0, _r548_t1;
                            r548_currentGlyph.setWidth(0);
                            r548_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                            var r548_dx = r537_arrowHeadSize * 0.4;
                            var r548_dy = r537_arrowHeadSize * 1.1;
                            var r548_gap = r1_clamp(r537_dblArrSw, r537_dblArrSpace - 2 * r537_dblArrSw, r537_dblArrSpace / 4);
                            r548_currentGlyph.include(r312_dispiro(r312_widths.center(r537_dblArrSw), r312_flat(+r548_gap - r548_dx, -r548_dy), r312_curl(+r548_gap + r548_dx, +r548_dy)));
                            r548_currentGlyph.include(r312_dispiro(r312_widths.center(r537_dblArrSw), r312_flat(-r548_gap - r548_dx, -r548_dy), r312_curl(-r548_gap + r548_dx, +r548_dy)));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r537_MangleName("arrVStrokeOver"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r555_currentGlyph) {
                            var _r555_t0, _r555_t1;
                            r555_currentGlyph.setWidth(0);
                            r555_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                            var r555_dy = r537_strokeSpan;
                            r555_currentGlyph.include(r312_dispiro(r312_widths.center(r537_overlaySw), r312_flat(0, -r555_dy), r312_curl(0, +r555_dy)));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r537_MangleName("dblArrVStrokeOver"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r561_currentGlyph) {
                            var _r561_t0, _r561_t1;
                            r561_currentGlyph.setWidth(0);
                            r561_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                            var r561_dy = r537_strokeSpan2;
                            r561_currentGlyph.include(r312_dispiro(r312_widths.center(r537_overlaySw), r312_flat(0, -r561_dy), r312_curl(0, +r561_dy)));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r537_MangleName("arrDblVStrokeOver"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r567_currentGlyph) {
                            var _r567_t0, _r567_t1;
                            r567_currentGlyph.setWidth(0);
                            r567_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                            var r567_dy = r537_strokeSpan;
                            var r567_gap = r1_clamp(r537_dblArrSw, r537_dblArrSpace - 2 * r537_dblArrSw, r537_dblArrSpace / 4);
                            r567_currentGlyph.include(r312_dispiro(r312_widths.center(r537_dblArrSw), r312_flat(-r567_gap, -r567_dy), r312_curl(-r567_gap, +r567_dy)));
                            r567_currentGlyph.include(r312_dispiro(r312_widths.center(r537_dblArrSw), r312_flat(+r567_gap, -r567_dy), r312_curl(+r567_gap, +r567_dy)));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r537_MangleName("arrDhtVStrokeOver"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r574_currentGlyph) {
                            var _r574_t0, _r574_t1;
                            r574_currentGlyph.setWidth(0);
                            r574_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                            var r574_dy = r537_strokeSpan;
                            var r574_gap = r1_clamp(r537_dhtArrSw, r537_dhtArrSpace - 2 * r537_dhtArrSw, r537_dhtArrSpace / 4);
                            r574_currentGlyph.include(r312_dispiro(r312_widths.center(r537_dhtArrSw), r312_flat(-r574_gap, -r574_dy), r312_curl(-r574_gap, +r574_dy)));
                            r574_currentGlyph.include(r312_dispiro(r312_widths.center(r537_dhtArrSw), r312_flat(+r574_gap, -r574_dy), r312_curl(+r574_gap, +r574_dy)));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r537_MangleName("arrHStrokeOver"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r581_currentGlyph) {
                            var _r581_t0, _r581_t1;
                            r581_currentGlyph.setWidth(0);
                            r581_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                            var r581_dx = r537_strokeSpan;
                            r581_currentGlyph.include(r312_dispiro(r312_widths.center(r537_overlaySw), r312_flat(-r581_dx, 0), r312_curl(+r581_dx, 0)));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r537_MangleName("arrDblHStrokeOver"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r587_currentGlyph) {
                            var _r587_t0, _r587_t1;
                            r587_currentGlyph.setWidth(0);
                            r587_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                            var r587_dx = r537_strokeSpan;
                            var r587_gap = r1_clamp(r537_overlaySw, 1.5 * r537_arrowHeadSize - 2 * r537_overlaySw, 1.5 * r537_arrowHeadSize / 4);
                            r587_currentGlyph.include(r312_dispiro(r312_widths.center(r537_overlaySw), r312_flat(-r587_dx, -r587_gap), r312_curl(+r587_dx, -r587_gap)));
                            r587_currentGlyph.include(r312_dispiro(r312_widths.center(r537_overlaySw), r312_flat(-r587_dx, +r587_gap), r312_curl(+r587_dx, +r587_gap)));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r537_MangleName("arrCrossOver"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r594_currentGlyph) {
                            var _r594_t0, _r594_t1;
                            r594_currentGlyph.setWidth(0);
                            r594_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                            var r594_r = 0.7 * r537_HRingRadius + 0.5 * r537_overlaySw;
                            r594_currentGlyph.include(r312_dispiro(r312_widths.center(r537_overlaySw), r312_flat(-r594_r, -r594_r), r312_curl(+r594_r, +r594_r)));
                            r594_currentGlyph.include(r312_dispiro(r312_widths.center(r537_overlaySw), r312_flat(-r594_r, +r594_r), r312_curl(+r594_r, -r594_r)));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r537_MangleName("arrLobeOver"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r601_currentGlyph) {
                            var _r601_t0, _r601_t1;
                            r601_currentGlyph.setWidth(0);
                            r601_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                            var r601_xSide = r537_HRingRadius * 0.8;
                            var r601_ySide = r537_HRingRadius * -1.2;
                            var r601_yBot = r537_HRingRadius * -2;
                            r601_currentGlyph.include(r312_dispiro(r312_widths.rhs(r537_arrowSw), r312_g4(0, r537_arrowSw / 2), r312_g4.down.mid(+r601_xSide, r601_ySide, r312_widths.rhs(r537_fine)), r312_Arch.rhs(r601_yBot, new r312_xn$NamedParameterPair$2Lrc9b("sw", r537_arrowSw)), r312_g4.up.mid(-r601_xSide, r601_ySide, r312_widths.rhs(r537_fine)), r312_g4(0, r537_arrowSw / 2)));
                            return void 0;
                        }));
                        var r537_ArrowRingOverlay = function (r606_r, r606_sw) {
                            var _r606_t0, _r606_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r608_currentGlyph) {
                                var _r608_t0, _r608_t1;
                                r608_currentGlyph.setWidth(0);
                                r608_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                                r608_currentGlyph.include(r312_RingStrokeAt(0, 0, r606_r, r606_sw));
                                return void 0;
                            });
                        };
                        var r537_ArrowRingPlusOverlay = function (r612_r, r612_sw) {
                            var _r612_t0, _r612_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r614_currentGlyph) {
                                var _r614_t0, _r614_t1;
                                r614_currentGlyph.setWidth(0);
                                r614_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                                var r614_rin = r612_r - 0.5 * r612_sw;
                                r614_currentGlyph.include(r312_RingStrokeAt(0, 0, r612_r, r612_sw));
                                r614_currentGlyph.include(r312_VBar.m(0, -r614_rin, +r614_rin, r612_sw));
                                r614_currentGlyph.include(r312_HBar.m(-r614_rin, +r614_rin, 0, r612_sw));
                                return void 0;
                            });
                        };
                        var r537_ArrowRingMaskOverlay = function (r620_r, r620_sw) {
                            var _r620_t0, _r620_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r622_currentGlyph) {
                                var _r622_t0, _r622_t1;
                                r622_currentGlyph.setWidth(0);
                                r622_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                                r622_currentGlyph.include(r312_RingAt(0, 0, r620_r, r620_sw));
                                return void 0;
                            });
                        };
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r537_MangleName("arrRingOverLR"), null, r537_ArrowRingOverlay(r537_HRingRadius, r537_HRingSw));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r537_MangleName("arrRingPlusOverLR"), null, r537_ArrowRingPlusOverlay(r537_HRingRadius, r537_HRingSw));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r537_MangleName("arrRingOverLRMask"), null, r537_ArrowRingMaskOverlay(r537_HRingRadius, r537_HRingSw));
                    })();
                    _r534_t5 = _r534_t2 = _r534_t2 + 1;
                    _r534_t4 = _r534_t2 < _r534_t1;
                }
                return _r534_t5;
            })();
        })();
        (function () {
            var r630_suffix, r630_DrawAt, r630_kdr, r630_kOut, r630_kCurl, _r630_t2, _r630_t5, _r630_t6, _r630_tag7, _r630_t8, _r630_tag9;
            var r630_ext = Math.min(r312_markExtend, r312_aboveMarkTop - r312_aboveMarkBot);
            r312_xn$GlyphSaveSink$2Lrc4b.save("leftTackOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r633_currentGlyph) {
                var _r633_t0, _r633_t1;
                r633_currentGlyph.setWidth(0);
                r633_currentGlyph.setMarkAnchor("overlay", 0, 0, 0, 0);
                r633_currentGlyph.include(r312_VBar.r(+r312_markExtend, -r630_ext, +r630_ext, r312_markFine * 2));
                r633_currentGlyph.include(r312_HBar.m(-r312_markExtend, +r312_markExtend, 0, r312_markFine * 2));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("rightTackOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r640_currentGlyph) {
                var _r640_t0, _r640_t1;
                r640_currentGlyph.setWidth(0);
                r640_currentGlyph.setMarkAnchor("overlay", 0, 0, 0, 0);
                r640_currentGlyph.include(r312_VBar.l(-r312_markExtend, -r630_ext, +r630_ext, r312_markFine * 2));
                r640_currentGlyph.include(r312_HBar.m(-r312_markExtend, +r312_markExtend, 0, r312_markFine * 2));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("upTackOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r647_currentGlyph) {
                var _r647_t0, _r647_t1;
                r647_currentGlyph.setWidth(0);
                r647_currentGlyph.setMarkAnchor("overlay", 0, 0, 0, 0);
                r647_currentGlyph.include(r312_VBar.m(0, -r630_ext, +r630_ext, r312_markFine * 2));
                r647_currentGlyph.include(r312_HBar.b(-r312_markExtend, +r312_markExtend, -r630_ext, r312_markFine * 2));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("downTackOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r654_currentGlyph) {
                var _r654_t0, _r654_t1;
                r654_currentGlyph.setWidth(0);
                r654_currentGlyph.setMarkAnchor("overlay", 0, 0, 0, 0);
                r654_currentGlyph.include(r312_VBar.m(0, -r630_ext, +r630_ext, r312_markFine * 2));
                r654_currentGlyph.include(r312_HBar.t(-r312_markExtend, +r312_markExtend, +r630_ext, r312_markFine * 2));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("plusOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r661_currentGlyph) {
                var _r661_t0, _r661_t1;
                r661_currentGlyph.setWidth(0);
                r661_currentGlyph.setMarkAnchor("overlay", 0, 0, 0, 0);
                r661_currentGlyph.include(r312_VBar.m(0, -r630_ext, +r630_ext, r312_markFine * 2));
                r661_currentGlyph.include(r312_HBar.m(-r312_markExtend, +r312_markExtend, 0, r312_markFine * 2));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("minusOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r668_currentGlyph) {
                var _r668_t0, _r668_t1;
                r668_currentGlyph.setWidth(0);
                r668_currentGlyph.setMarkAnchor("overlay", 0, 0, 0, 0);
                r668_currentGlyph.include(r312_HBar.m(-r312_markExtend, +r312_markExtend, 0, r312_markFine * 2));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("equalOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r674_currentGlyph) {
                var _r674_t0, _r674_t1;
                r674_currentGlyph.setWidth(0);
                r674_currentGlyph.setMarkAnchor("overlay", 0, 0, 0, 0);
                var r674_eqsw = Math.min(2 * r312_markFine, 2 * r630_ext / 3);
                r674_currentGlyph.include(r312_HBar.t(-r312_markExtend, +r312_markExtend, +r630_ext, r674_eqsw));
                r674_currentGlyph.include(r312_HBar.b(-r312_markExtend, +r312_markExtend, -r630_ext, r674_eqsw));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("rightHalfRingOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r681_currentGlyph) {
                var _r681_t0, _r681_t1;
                r681_currentGlyph.setWidth(0);
                r681_currentGlyph.setMarkAnchor("overlay", 0, 0, 0, 0);
                r681_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(-r312_markMiddle, -r312_aboveMarkMid), r312_xn$referglyph$1aao("rightHalfRingAbove")));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("leftHalfRingOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r687_currentGlyph) {
                var _r687_t0, _r687_t1;
                r687_currentGlyph.setWidth(0);
                r687_currentGlyph.setMarkAnchor("overlay", 0, 0, 0, 0);
                r687_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(-r312_markMiddle, -r312_aboveMarkMid), r312_xn$referglyph$1aao("leftHalfRingAbove")));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/invKavykaOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r693_currentGlyph) {
                var _r693_t0, _r693_t1;
                r693_currentGlyph.setWidth(0);
                r693_currentGlyph.setMarkAnchor("overlay", 0, 0, 0, 0);
                r693_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(-r312_markMiddle, -r312_aboveMarkMid), r312_xn$referglyph$1aao("cyrl/invKavykaAbove")));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/kavykaOver", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r699_currentGlyph) {
                var _r699_t0, _r699_t1;
                r699_currentGlyph.setWidth(0);
                r699_currentGlyph.setMarkAnchor("overlay", 0, 0, 0, 0);
                r699_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(-r312_markMiddle, -r312_aboveMarkMid), r312_xn$referglyph$1aao("cyrl/kavykaAbove")));
                return void 0;
            }));
            var _r630_t0 = Object.entries(r312_DotVariants)[Symbol.iterator]();
            var _r630_t1 = void 0;
            while (!(_r630_t1 = _r630_t0.next()).done) {
                _r630_t2 = _r630_t1.value;
                r630_suffix = _r630_t2[0];
                r630_DrawAt = _r630_t2[1][0];
                r630_kdr = _r630_t2[1][1];
                _r630_t2[1];
                (function () {
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/kavykaWithDotOver." + r630_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r708_currentGlyph) {
                        var _r708_t0, _r708_t1;
                        r708_currentGlyph.setWidth(0);
                        r708_currentGlyph.setMarkAnchor("overlay", 0, 0, 0, 0);
                        r708_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(-r312_markMiddle, -r312_aboveMarkMid), r312_xn$referglyph$1aao("cyrl/kavykaWithDotAbove." + r630_suffix)));
                        return void 0;
                    }));
                })();
            }
            r312_xn$selectvariant$7Hrq("cyrl/kavykaWithDotOver", new r312_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
            var r630_parenOverMid = r312_XH / 2;
            var r630_parenOverHalfH = 0.5 * (r312_aboveMarkTop - r312_aboveMarkBot) + r312_markFine;
            var r630_parenOverTop = r630_parenOverMid + r630_parenOverHalfH;
            var r630_parenOverBot = r630_parenOverMid - r630_parenOverHalfH;
            var r630_parenOverDepth = r312_markExtend * 0.25;
            var r630_CombiningParenOverlayConfig = {
                "normal": [0, 1],
                "largeContour": [0.25, 0.75],
                "flatArc": [0.5, 0.75]
            };
            var _r630_t3 = Object.entries(r630_CombiningParenOverlayConfig)[Symbol.iterator]();
            var _r630_t4 = void 0;
            while (!(_r630_t4 = _r630_t3.next()).done) {
                _r630_t5 = _r630_t4.value;
                r630_suffix = _r630_t5[0];
                r630_kOut = _r630_t5[1][0];
                r630_kCurl = _r630_t5[1][1];
                _r630_t5[1];
                (function () {
                    r312_xn$GlyphSaveSink$2Lrc4b.save("leftParenOver." + r630_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r718_currentGlyph) {
                        var _r718_t0, _r718_t1;
                        r718_currentGlyph.setWidth(0);
                        var r718_depth = r630_parenOverDepth * r630_kCurl;
                        r718_currentGlyph.setMarkAnchor("overlayBraceL", 0, r630_parenOverMid, 0 - r718_depth, r630_parenOverMid);
                        var r718_xInner = 0 + 0;
                        var r718_xOut = r1_mix(0 - r718_depth + r312_OX, r718_xInner, r630_kOut);
                        r718_currentGlyph.include(r312_dispiro(r312_widths.lhs(r312_markFine), r312_g4(r718_xInner, r630_parenOverTop), r312_g4(r718_xOut, r630_parenOverMid), r312_g4(r718_xInner, r630_parenOverBot)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("rightParenOver." + r630_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r724_currentGlyph) {
                        var _r724_t0, _r724_t1;
                        r724_currentGlyph.setWidth(0);
                        var r724_depth = r630_parenOverDepth * r630_kCurl;
                        r724_currentGlyph.setMarkAnchor("overlayBraceR", 0, r630_parenOverMid, 0 + r724_depth, r630_parenOverMid);
                        var r724_xInner = 0 + 0;
                        var r724_xOut = r1_mix(0 + r724_depth - r312_OX, r724_xInner, r630_kOut);
                        r724_currentGlyph.include(r312_dispiro(r312_widths.rhs(r312_markFine), r312_g4(r724_xInner, r630_parenOverTop), r312_g4(r724_xOut, r630_parenOverMid), r312_g4(r724_xInner, r630_parenOverBot)));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("parenOver." + r630_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r730_currentGlyph) {
                        var _r730_t0, _r730_t1;
                        r730_currentGlyph.setWidth(0);
                        r730_currentGlyph.setMarkAnchor("overlay", r312_markMiddle, r630_parenOverMid, r312_markMiddle, r630_parenOverMid);
                        r730_currentGlyph.include(r312_xn$withtransform$5sIl(r312_Translate(r312_markMiddle - r312_Middle, 0), r312_xn$referglyph$1aao("leftParenOver." + r630_suffix)));
                        r730_currentGlyph.include(r312_xn$withtransform$5sIl(r312_Translate(r312_markMiddle + r312_Middle, 0), r312_xn$referglyph$1aao("rightParenOver." + r630_suffix)));
                        return void 0;
                    }));
                })();
            }
            r312_xn$selectvariant$7Hrq("leftParenOver", new r312_xn$NamedParameterPair$2Lrc9b("follow", "parenLeft"));
            r312_xn$selectvariant$7Hrq("rightParenOver", new r312_xn$NamedParameterPair$2Lrc9b("follow", "parenRight"));
            return r312_xn$selectvariant$7Hrq("parenOver", 6846, new r312_xn$NamedParameterPair$2Lrc9b("follow", "parenLeft"));
        })();
        return (function () {
            var r739_suffix, r739_DrawAt, r739_kdr, _r739_t2, _r739_t3, _r739_tag4;
            r312_xn$ExportCapture$2Lrc4b(function () {
                var _r741_t0, _r741_t1;
                return {
                    "InnerDot": r739_InnerDot
                };
            });
            var r739_InnerDot = function (r742_x, r742_y, r742_kHeight, r742_fRound, r742_kdr, r742__space, r742__adws) {
                var _r742_t0, _r742_t1, _r742_t2;
                var r742_space = r1_fallback(r742__space, r739_InnerDot.spaceOfDf(r312_DivFrame(1)));
                var r742_adws = r1_fallback(r742__adws, 4);
                var r742_halfDotWidth = r742_kdr * Math.max(r312_DotRadius / 8, Math.min(r312_DotRadius, r742_space / r742_adws));
                var r742_halfDotHeight = r742_kdr * Math.max(r312_DotRadius / 8, Math.min(r312_DotRadius, r742_halfDotWidth * r742_kHeight));
                if (r742_fRound) return r312_OShapeOutline.NoOvershoot(r742_y + r742_halfDotHeight, r742_y - r742_halfDotHeight, r742_x - r742_halfDotWidth, r742_x + r742_halfDotWidth, r312_Stroke * r742_halfDotWidth * 2 / r312_Width, r312_ArchDepthAOf(r742_halfDotWidth, r742_halfDotWidth * 2), r312_ArchDepthBOf(r742_halfDotWidth, r742_halfDotWidth * 2)); else return r312_Rect(r742_y + r742_halfDotHeight, r742_y - r742_halfDotHeight, r742_x - r742_halfDotWidth, r742_x + r742_halfDotWidth);
            };
            r739_InnerDot.spaceOfDf = function (r743_df) {
                var _r743_t0, _r743_t1;
                return r743_df.rightSB - r743_df.leftSB - 2 * r312_OX - r312_HSwToV(2 * r743_df.mvs);
            };
            var r739_InnerDot2 = function (r744_kHeight, r744_fRound, r744_kdr) {
                var _r744_t0, _r744_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r746_currentGlyph) {
                    var _r746_t0, _r746_t1;
                    var r746_space = r739_InnerDot.spaceOfDf(r312_DivFrame(1));
                    var r746_adws = r312_StrokeWidthBlend(7, 5);
                    var r746_halfDotWidth = r744_kdr * Math.min(r312_DotRadius, r746_space / r746_adws);
                    var r746_kHeight2 = r746_adws / 4 * r744_kHeight;
                    var r746_offset = (0.5 * r746_space - 2 * r746_halfDotWidth) / 3 + r746_halfDotWidth;
                    r746_currentGlyph.include(r739_InnerDot(-r746_offset, 0, r746_kHeight2, r744_fRound, r744_kdr, r746_space, r746_adws));
                    r746_currentGlyph.include(r739_InnerDot(+r746_offset, 0, r746_kHeight2, r744_fRound, r744_kdr, r746_space, r746_adws));
                    return void 0;
                });
            };
            var _r739_t0 = Object.entries(r312_DotVariants)[Symbol.iterator]();
            var _r739_t1 = void 0;
            while (!(_r739_t1 = _r739_t0.next()).done) {
                _r739_t2 = _r739_t1.value;
                r739_suffix = _r739_t2[0];
                r739_DrawAt = _r739_t2[1][0];
                r739_kdr = _r739_t2[1][1];
                _r739_t2[1];
                (function () {
                    r312_xn$GlyphSaveSink$2Lrc4b.save("innerDot." + r739_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r754_currentGlyph) {
                        var _r754_t0, _r754_t1;
                        r754_currentGlyph.setWidth(0);
                        r754_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                        r754_currentGlyph.include(r739_InnerDot(0, 0, 2, r739_DrawAt === r312_DotAt, r739_kdr));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("innerDotSmall." + r739_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r760_currentGlyph) {
                        var _r760_t0, _r760_t1;
                        r760_currentGlyph.setWidth(0);
                        r760_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                        r760_currentGlyph.include(r739_InnerDot(0, 0, 1.5, r739_DrawAt === r312_DotAt, r739_kdr));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("innerDoubleDot." + r739_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r766_currentGlyph) {
                        var _r766_t0, _r766_t1;
                        r766_currentGlyph.setWidth(0);
                        r766_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                        r766_currentGlyph.include(r739_InnerDot2(2, r739_DrawAt === r312_DotAt, r739_kdr));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("innerDoubleDotSmall." + r739_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r772_currentGlyph) {
                        var _r772_t0, _r772_t1;
                        r772_currentGlyph.setWidth(0);
                        r772_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                        r772_currentGlyph.include(r739_InnerDot2(1.5, r739_DrawAt === r312_DotAt, r739_kdr));
                        return void 0;
                    }));
                })();
            }
            r312_xn$selectvariant$7Hrq("innerDot", new r312_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
            r312_xn$selectvariant$7Hrq("innerDotSmall", new r312_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
            r312_xn$selectvariant$7Hrq("innerDoubleDot", new r312_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
            r312_xn$selectvariant$7Hrq("innerDoubleDotSmall", new r312_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
            return r312_WithDotVariants("LDot/dot", null, function (r780_DrawAt, r780_kdr, r780_overshoot) {
                var _r780_t0, _r780_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r782_currentGlyph) {
                    var _r782_t0, _r782_t1;
                    r782_currentGlyph.setWidth(0);
                    r782_currentGlyph.include(r780_DrawAt(0, 0, r312_DotRadius * r780_kdr - r780_overshoot));
                    r782_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                    return void 0;
                });
            });
        })();
    });
    return void 0;
});


