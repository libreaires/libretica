"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
import * as _s0_t2 from "@iosevka/util/mask-bit";
import * as _s0_t3 from "@iosevka/geometry/segment";
var _s0_t4;
export {_s0_t4 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var _r1_t10 = _s0_t2;
var r1_maskBits = _r1_t10.maskBits;
var r1_bitOr = _r1_t10.bitOr;
var _r1_t11 = _s0_t3;
var r1_Seg = _r1_t11.Seg;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t4 = r1_apply = function () {
    var r310_block, _r310_t4, _r310_t6;
    var _r310_t3 = this;
    var _r310_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r310_t1 = _r310_t0.length;
    var _r310_t2 = 0;
    var _r310_t5 = _r310_t2 < _r310_t1;
    while (_r310_t5) {
        _r310_t6 = (r310_block = _r310_t0[_r310_t2], r310_block(_r310_t3), _r310_t2 = _r310_t2 + 1);
        _r310_t5 = _r310_t2 < _r310_t1;
    }
    return _r310_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r314_xn$Capture_Ext$2Lrc2b) {
    var _r314_t0, _r314_t1;
    r314_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r314_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-A", function (r315_xn$Capture$2Lrc8, r315_xn$ExportCapture$2Lrc4b) {
        var r315_suffix, r315_bodyShape, r315_slabKind, _r315_t17, _r315_t20, _r315_t21, _r315_t22, _r315_tag23, _r315_t24, _r315_tag25;
        var _r315_t0 = r315_xn$Capture$2Lrc8;
        var r315_xn$GlyphSaveSink$2Lrc4b = _r315_t0["$GlyphSaveSink$"];
        var r315_xn$NamedParameterPair$2Lrc9b = _r315_t0["$NamedParameterPair$"];
        var r315_xn$Exec$2Lrc5 = _r315_t0["$Exec$"];
        var r315_para = _r315_t0.para;
        var r315_MarkSet = _r315_t0.MarkSet;
        var r315_AS_BASE = _r315_t0.AS_BASE;
        var r315_ALSO_METRICS = _r315_t0.ALSO_METRICS;
        var r315_DivFrame = _r315_t0.DivFrame;
        var _r315_t1 = r315_xn$Capture$2Lrc8.Metrics;
        var r315_Width = _r315_t1.Width;
        var r315_SB = _r315_t1.SB;
        var r315_CAP = _r315_t1.CAP;
        var r315_XH = _r315_t1.XH;
        var r315_Translate = _r315_t1.Translate;
        var r315_HSwToV = _r315_t1.HSwToV;
        var r315_Rightward = _r315_t1.Rightward;
        var r315_Leftward = _r315_t1.Leftward;
        var r315_OX = _r315_t1.OX;
        var r315_Stroke = _r315_t1.Stroke;
        var r315_HalfStroke = _r315_t1.HalfStroke;
        var r315_OverlayStroke = _r315_t1.OverlayStroke;
        var r315_LongJut = _r315_t1.LongJut;
        var r315_MidJutSide = _r315_t1.MidJutSide;
        var r315_VJut = _r315_t1.VJut;
        var r315_VJutStroke = _r315_t1.VJutStroke;
        var r315_RightSB = _r315_t1.RightSB;
        var r315_Middle = _r315_t1.Middle;
        var r315_SideJut = _r315_t1.SideJut;
        var r315_StrokeWidthBlend = _r315_t1.StrokeWidthBlend;
        var r315_YSmoothMidL = _r315_t1.YSmoothMidL;
        var _r315_t2 = r315_xn$Capture$2Lrc8.SpiroFns;
        var r315_g4 = _r315_t2.g4;
        var r315_corner = _r315_t2.corner;
        var r315_flat = _r315_t2.flat;
        var r315_curl = _r315_t2.curl;
        var r315_end = _r315_t2.end;
        var r315_straight = _r315_t2.straight;
        var r315_widths = _r315_t2.widths;
        var r315_heading = _r315_t2.heading;
        var r315_archv = _r315_t2.archv;
        var r315_arcvh = _r315_t2.arcvh;
        var r315_dispiro = _r315_t2.dispiro;
        var r315_xn$spirooutline$1aao = _r315_t2["spiro-outline"];
        var _r315_t3 = r315_xn$Capture$2Lrc8.SpiroFns;
        var r315_xn$decor$0cao = _r315_t3["decor@"];
        var r315_xn$decor$0cao1 = _r315_t3["decor@@"];
        var r315_xn$decor$0cao11 = _r315_t3["decor@@@"];
        var _r315_t4 = r315_xn$Capture$2Lrc8.BooleFns;
        var r315_union = _r315_t4.union;
        var r315_intersection = _r315_t4.intersection;
        var r315_difference = _r315_t4.difference;
        var _r315_t5 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r315_tagged = _r315_t5.tagged;
        var r315_MaskAbove = _r315_t5.MaskAbove;
        var r315_MaskBelow = _r315_t5.MaskBelow;
        var r315_MaskLeft = _r315_t5.MaskLeft;
        var r315_MaskRight = _r315_t5.MaskRight;
        var r315_UShape = _r315_t5.UShape;
        var r315_UShapeOutline = _r315_t5.UShapeOutline;
        var r315_HSerif = _r315_t5.HSerif;
        var r315_VSerif = _r315_t5.VSerif;
        var r315_HBar = _r315_t5.HBar;
        var r315_HOverlayBar = _r315_t5.HOverlayBar;
        var r315_Arch = _r315_t5.Arch;
        var r315_FlipAround = _r315_t5.FlipAround;
        var r315_xn$withtransform$5sIl = _r315_t5["with-transform"];
        var _r315_t6 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r315_xn$referglyph$1aao = _r315_t6["refer-glyph"];
        var r315_xn$selectvariant$7Hrq = _r315_t6["select-variant"];
        var r315_xn$linkreducedvariant$5sIl8 = _r315_t6["link-reduced-variant"];
        var r315_xn$derivecomposites$7Hrq = _r315_t6["derive-composites"];
        var r315_alias = _r315_t6.alias;
        var r315_HalfAdvance = _r315_t6.HalfAdvance;
        var _r315_t7 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r315_markHalfStroke = _r315_t7.markHalfStroke;
        var _r315_t8 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r315_CreateAccentedComposition = _r315_t8.CreateAccentedComposition;
        var _r315_t9 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r315_SetGrekUpperTonos = _r315_t9.SetGrekUpperTonos;
        var r315_CreateTurnedLetter = _r315_t9.CreateTurnedLetter;
        var _r315_t10 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r315_BowlXDepth = _r315_t10.BowlXDepth;
        var _r315_t11 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r315_SerifFrame = _r315_t11.SerifFrame;
        var _r315_t12 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-V"].resolve();
        var r315_VShapeOutline = _r315_t12.VShapeOutline;
        var r315_VShape = _r315_t12.VShape;
        var r315_VCornerHalfWidth = _r315_t12.VCornerHalfWidth;
        var _r315_t13 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-V"].resolve();
        var r315_VStraightSbShrink = _r315_t13.VStraightSbShrink;
        var r315_VStraightSbOffset = _r315_t13.VStraightSbOffset;
        var _r315_t14 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-V"].resolve();
        var r315_VSlashOverlayShape = _r315_t14.VSlashOverlayShape;
        var r315_xn$BODYCURLY$5sIl = 0;
        var r315_xn$BODYSTRAIGHT$5sIl = 1;
        var r315_xn$BODYROUNDTOP$5sIl6 = 2;
        var r315_xn$SLABNONE$5sIl = 0;
        var r315_xn$SLABTOP$5sIl = 1;
        var r315_xn$SLABLEFT$5sIl = 2;
        var r315_xn$SLABRIGHT$5sIl = 4;
        var r315_xn$SLABSMALLCYRL$5sIl6 = 8;
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r327_t0, _r327_t1;
            return {
                "AShape": r315_AShape
            };
        });
        var r315_AShape = (function () {
            var r330_BarPos, r330_Mask, r330_Outer, r330_Letter, r330_LetterBottomRightRemoved;
            var r330_exports = {};
            r330_exports.BarPos = r330_BarPos = function (r338_bodyShape, r338_slabKind, r338_top) {
                var r338___, _r338_t0, _r338_t1, _r338_t2;
                var r338_fBaseSlabs = r1_maskBits(r338_slabKind, r1_bitOr(r315_xn$SLABLEFT$5sIl, r315_xn$SLABRIGHT$5sIl));
                return r1_mix(r338_fBaseSlabs ? r315_Stroke : 0, r338_top, Math.min(0.5, (_r338_t0 = r338_bodyShape, _r338_t0 === r315_xn$BODYROUNDTOP$5sIl6 ? r315_XH * 0.75 / r315_CAP : (r338___ = _r338_t0, r315_XH * 0.5 / r315_CAP))));
            };
            r330_exports.Mask = r330_Mask = function (r340_df, r340_bodyShape, r340_top, r340_sw) {
                var _r340_t0, _r340_t1;
                return r315_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                    var _r343_t0, _r343_t1, _r343_t2;
                    r343_currentGlyph.include((_r343_t0 = r340_bodyShape, _r343_t0 === r315_xn$BODYCURLY$5sIl || _r343_t0 === r315_xn$BODYSTRAIGHT$5sIl ? r315_VShapeOutline(r340_df, r340_bodyShape, r340_top, r340_sw) : _r343_t0 === r315_xn$BODYROUNDTOP$5sIl6 ? r315_UShapeOutline(r340_top, 0, r340_df.leftSB, r340_df.rightSB, r340_sw, r340_df.archDepthA, r340_df.archDepthB) : void 0));
                    r343_currentGlyph.include(r315_FlipAround(r340_df.middle, r340_top / 2));
                    return void 0;
                }));
            };
            r330_exports.Outer = r330_Outer = function (r347_df, r347_bodyShape, r347_top, r347_sw) {
                var _r347_t0, _r347_t1;
                return r315_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                    var _r350_t0, _r350_t1, _r350_t2;
                    r350_currentGlyph.include((_r350_t0 = r347_bodyShape, _r350_t0 === r315_xn$BODYCURLY$5sIl || _r350_t0 === r315_xn$BODYSTRAIGHT$5sIl ? r315_VShape(r347_df, r347_bodyShape, r347_top, r347_sw) : _r350_t0 === r315_xn$BODYROUNDTOP$5sIl6 ? r315_UShape(r347_top, 0, r347_df.leftSB, r347_df.rightSB, r347_sw, r347_df.archDepthA, r347_df.archDepthB) : void 0));
                    r350_currentGlyph.include(r315_FlipAround(r347_df.middle, r347_top / 2));
                    return void 0;
                }));
            };
            var r330_CrossBar = function (r353_df, r353_bodyShape, r353_top, r353_sw) {
                var _r353_t0, _r353_t1;
                var r353_yBar = r330_BarPos(r353_bodyShape, r315_slabKind, r353_top);
                return r315_tagged("crossBar", r315_intersection(r315_HBar.t(0, r353_df.width, r353_yBar, r353_sw), r330_Mask(r353_df, r353_bodyShape, r353_top, r353_sw)));
            };
            r330_exports.Letter = r330_Letter = function (r355_df, r355_bodyShape, r355_slabKind, r355_top, r355_sw) {
                var _r355_t0, _r355_t1;
                return r315_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                    var _r358_t0, _r358_t1;
                    r358_currentGlyph.include(r330_Outer(r355_df, r355_bodyShape, r355_top, r355_sw));
                    r358_currentGlyph.include(r330_CrossBar(r355_df, r355_bodyShape, r355_top, r355_sw));
                    r358_currentGlyph.include(r315_ASerifs(r355_df, r355_top, r355_sw, r355_slabKind));
                    return void 0;
                }));
            };
            var r330_CuspBottomRightRemovedImpl = function (r362_df, r362_bodyShape, r362_slabKind, r362_top, r362_sw) {
                var _r362_t0, _r362_t1;
                return r315_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                    var _r365_t0, _r365_t1;
                    var r365_yBar = r330_BarPos(r362_bodyShape, r362_slabKind, r362_top);
                    r365_currentGlyph.include(r315_VShape(r362_df, r362_bodyShape, r362_top, r362_sw));
                    r365_currentGlyph.ejectTagged("strokeDown");
                    r365_currentGlyph.include(r315_FlipAround(r362_df.middle, r362_top / 2));
                    var r365_cornerHW = r315_VCornerHalfWidth * (r362_sw / r315_Stroke);
                    var r365_rightStrokeKnots = function () {
                        var _r369_leti0, _r369_t1, _r369_t2, _r369_t4, _r369_tag5;
                        var _r369_t3 = r1_Seg(r362_df.middle + r365_cornerHW, r362_top, r362_df.rightSB, r365_yBar - r362_sw);
                        return (function (_r369_leti0) {
                            var r370_s = _r369_leti0;
                            return [r370_s.z(-1, r315_flat), r370_s.z(0, r315_flat), r370_s.zz(0.55, r315_StrokeWidthBlend(0.48, 0.45), r362_bodyShape ? r315_curl : r315_g4), r370_s.z(+1, r315_straight.down.end)];
                        })(_r369_t3);
                    };
                    r365_currentGlyph.include(r315_intersection(r315_MaskBelow(r362_top), r315_MaskAbove(r365_yBar - r362_sw), r315_dispiro(r315_widths.rhs(r362_sw), r365_rightStrokeKnots())));
                    r365_currentGlyph.include(r315_tagged("crossBar", r315_intersection(r315_HBar.t(0, r362_df.width, r365_yBar, r362_sw), r315_union(r315_AShape.Mask(r362_df, r362_bodyShape, r362_top, r362_sw), r315_intersection(r315_MaskRight(r362_df.middle), r315_MaskAbove(r365_yBar - r362_sw), r315_xn$spirooutline$1aao(r365_rightStrokeKnots(), r315_corner(r362_df.rightSB, 0), r315_corner(0, 0), r315_corner(0, r362_top)))))));
                    r365_currentGlyph.include(r315_ASerifs(r362_df, r362_top, r362_sw, r362_slabKind));
                    r365_currentGlyph.ejectTagged("serifRB");
                    return void 0;
                }));
            };
            var r330_RoundTopBottomRightRemovedImpl = function (r375_df, r375_slabKind, r375_top, r375_sw) {
                var _r375_t0, _r375_t1;
                return r315_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r378_currentGlyph) {
                    var _r378_t0, _r378_t1;
                    var r378_yBar = r330_BarPos(r315_xn$BODYROUNDTOP$5sIl6, r375_slabKind, r375_top);
                    r378_currentGlyph.include(r315_difference(r330_Outer(r375_df, r315_xn$BODYROUNDTOP$5sIl6, r375_top, r375_sw), r315_intersection(r315_MaskRight(r375_df.middle), r315_MaskBelow(r378_yBar - r375_sw))));
                    r378_currentGlyph.include(r330_CrossBar(r375_df, r315_xn$BODYROUNDTOP$5sIl6, r375_top, r375_sw));
                    r378_currentGlyph.include(r315_ASerifs(r375_df, r375_top, r375_sw, r375_slabKind));
                    r378_currentGlyph.ejectTagged("serifRB");
                    return void 0;
                }));
            };
            r330_exports.LetterBottomRightRemoved = r330_LetterBottomRightRemoved = function (r384_df, r384_bodyShape, r384_slabKind, r384_top, r384_sw) {
                var _r384_t1, _r384_t2, _r384_t3, _r384_t4;
                var _r384_t0 = r384_bodyShape;
                if (_r384_t0 === r315_xn$BODYCURLY$5sIl || _r384_t0 === r315_xn$BODYSTRAIGHT$5sIl) {
                    return r330_CuspBottomRightRemovedImpl(r384_df, r384_bodyShape, r384_slabKind, r384_top, r384_sw);
                } else if (_r384_t0 === r315_xn$BODYROUNDTOP$5sIl6) return r330_RoundTopBottomRightRemovedImpl(r384_df, r384_slabKind, r384_top, r384_sw); else return void 0;
            };
            return r330_exports;
        })();
        var r315_ASlashOverlayShape = function (r385_df, r385_bodyShape, r385_top, r385_sw) {
            var _r385_t0, _r385_t1;
            return r315_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
                var _r388_t0, _r388_t1;
                r388_currentGlyph.include(r315_VSlashOverlayShape(r385_df, r385_bodyShape === r315_xn$BODYSTRAIGHT$5sIl, r385_top, r385_sw), true, true);
                r388_currentGlyph.include(r315_FlipAround(r385_df.middle, r385_top / 2));
                return void 0;
            }));
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r392_t0, _r392_t1;
            return {
                "ASerifs": r315_ASerifs
            };
        });
        var r315_ASerifs = function (r393_df, r393_top, r393_sw, r393_slabKind) {
            var _r393_t0, _r393_t1;
            return new r315_xn$Capture$2Lrc8.GlyphProc(function (r395_currentGlyph) {
                var _r395_t0, _r395_t1;
                var r395_sf = r315_SerifFrame.fromDf(r393_df, r393_top, 0);
                if (r1_maskBits(r393_slabKind, r315_xn$SLABLEFT$5sIl)) r395_currentGlyph.include(r1_maskBits(r393_slabKind, r315_xn$SLABSMALLCYRL$5sIl6) && r315_para.isItalic ? r395_sf.lb.outer : r395_sf.lb.full);
                if (r1_maskBits(r393_slabKind, r315_xn$SLABRIGHT$5sIl)) r395_currentGlyph.include(r1_maskBits(r393_slabKind, r315_xn$SLABSMALLCYRL$5sIl6) && r315_para.isItalic ? r395_sf.rb.outer : r395_sf.rb.full);
                if (r1_maskBits(r393_slabKind, r315_xn$SLABTOP$5sIl)) r395_currentGlyph.include(r315_tagged("serifLT", r315_intersection(r315_MaskLeft(r393_df.middle), r1_maskBits(r393_slabKind, r1_bitOr(r315_xn$SLABLEFT$5sIl, r315_xn$SLABRIGHT$5sIl)) ? r315_HSerif.lt(r393_df.middle, r393_top, r315_MidJutSide + r315_HSwToV(0.25 * r393_sw), r395_sf.swSerif) : r315_HSerif.lt(r393_df.middle, r393_top, r1_mix(r315_MidJutSide, r315_LongJut, 0.5), r395_sf.swSerif))));
                return void 0;
            });
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r400_t0, _r400_t1;
            return {
                "AConfig": r315_AConfig
            };
        });
        var r315_AConfig = r1_SuffixCfg.weave({
            "straight": r315_xn$BODYSTRAIGHT$5sIl,
            "curly": r315_xn$BODYCURLY$5sIl,
            "roundTop": r315_xn$BODYROUNDTOP$5sIl6
        }, {
            "serifless": r315_xn$SLABNONE$5sIl,
            "topSerifed": r315_xn$SLABTOP$5sIl,
            "baseSerifed": r1_bitOr(r315_xn$SLABLEFT$5sIl, r315_xn$SLABRIGHT$5sIl),
            "triSerifed": r1_bitOr(r315_xn$SLABTOP$5sIl, r315_xn$SLABLEFT$5sIl, r315_xn$SLABRIGHT$5sIl)
        });
        var _r315_t15 = Object.entries(r315_AConfig)[Symbol.iterator]();
        var _r315_t16 = void 0;
        while (!(_r315_t16 = _r315_t15.next()).done) {
            _r315_t17 = _r315_t16.value;
            r315_suffix = _r315_t17[0];
            r315_bodyShape = _r315_t17[1][0];
            r315_slabKind = _r315_t17[1][1];
            _r315_t17[1];
            (function () {
                var r403___;
                var r403_fBarStraight = r315_bodyShape === r315_xn$BODYSTRAIGHT$5sIl;
                var r403_fSlabTop = r1_maskBits(r315_slabKind, r315_xn$SLABTOP$5sIl);
                var r403_fSlabBot = r1_maskBits(r315_slabKind, r1_bitOr(r315_xn$SLABLEFT$5sIl, r315_xn$SLABRIGHT$5sIl));
                var r403_AShapeImpl = function (r404_mk, r404_top, r404_fTonos, r404_nOverlays) {
                    var _r404_t0, _r404_t1;
                    return new r315_xn$Capture$2Lrc8.GlyphProc(function (r406_currentGlyph) {
                        var r406___, r406_yBar, r406_yBot, _r406_t0, _r406_t1, _r406_t2, _r406_t3;
                        r406_currentGlyph.include(r315_MarkSet[r404_mk]());
                        r406_currentGlyph.setBaseAnchor("trailing", r315_RightSB, 0);
                        if (r404_fTonos) r406_currentGlyph.include(r315_SetGrekUpperTonos((_r406_t0 = r315_bodyShape, _r406_t0 === r315_xn$BODYROUNDTOP$5sIl6 ? 0 : (r406___ = _r406_t0, r403_fSlabTop ? 0 : (r315_RightSB - r315_SB) * 0.2))));
                        r406_currentGlyph.include(r315_AShape.Letter(r315_DivFrame(1), r315_bodyShape, r315_slabKind, r404_top, r315_Stroke));
                        if (r404_nOverlays) {
                            r406_yBar = r315_AShape.BarPos(r315_bodyShape, r315_slabKind, r404_top);
                            _r406_t1 = r404_nOverlays;
                            if (_r406_t1 === 1) {
                                r406_yBot = r403_fSlabBot ? r315_Stroke : 0;
                                r406_currentGlyph.include(r315_HOverlayBar(r1_mix(0, r315_SB, 0.3), r1_mix(r315_Width, r315_RightSB, 0.3), r1_mix(r406_yBot, r406_yBar - r315_Stroke, 0.5), Math.min(r315_OverlayStroke, 0.625 * (r406_yBar - r315_Stroke - r406_yBot))));
                            } else if (_r406_t1 === 2) {
                                r406_currentGlyph.ejectTagged("crossBar");
                                r406_currentGlyph.include(r315_HOverlayBar(r1_mix(0, r315_SB, 0.5), r1_mix(r315_Width, r315_RightSB, 0.5), r406_yBar - (r315_Stroke - r315_OverlayStroke) / 2));
                                r406_currentGlyph.include(r315_HOverlayBar(r1_mix(0, r315_SB, 0.5), r1_mix(r315_Width, r315_RightSB, 0.5), r1_mix(r406_yBar, r404_top, 0.25)));
                            } else void 0;
                        }
                        return void 0;
                    });
                };
                r315_xn$GlyphSaveSink$2Lrc4b.save("A." + r315_suffix, null, r403_AShapeImpl("capital", r315_CAP));
                r315_xn$GlyphSaveSink$2Lrc4b.save("grek/Alpha." + r315_suffix, null, r403_AShapeImpl("capital", r315_CAP, true));
                r315_xn$GlyphSaveSink$2Lrc4b.save("smcpA." + r315_suffix, null, r403_AShapeImpl("e", r315_XH));
                r315_xn$GlyphSaveSink$2Lrc4b.save("ABar." + r315_suffix, null, r403_AShapeImpl("capital", r315_CAP, false, 1));
                var _r403_t0 = r315_bodyShape;
                if (_r403_t0 === r315_xn$BODYROUNDTOP$5sIl6) {
                    r315_xn$derivecomposites$7Hrq("ASlash." + r315_suffix, null, "A." + r315_suffix, "longSlash");
                } else {
                    r403___ = _r403_t0;
                    r315_xn$GlyphSaveSink$2Lrc4b.save("ASlash." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r421_currentGlyph) {
                        var _r421_t0, _r421_t1;
                        r421_currentGlyph.include(r315_xn$referglyph$1aao("A." + r315_suffix), r315_AS_BASE, r315_ALSO_METRICS);
                        r421_currentGlyph.include(r315_ASlashOverlayShape(r315_DivFrame(1), r315_bodyShape, r315_CAP));
                        return void 0;
                    }));
                    if (!r403_fSlabTop) r315_xn$GlyphSaveSink$2Lrc4b.save("ASwash." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r426_currentGlyph) {
                        var _r426_t0, _r426_t1;
                        r426_currentGlyph.include(r315_xn$referglyph$1aao("A." + r315_suffix), r315_AS_BASE, r315_ALSO_METRICS);
                        r426_currentGlyph.ejectTagged("serifLT");
                        var r426_yBar = r315_AShape.BarPos(r315_bodyShape, r315_slabKind, r315_CAP);
                        var r426_xBowlLeft = r1_mix(0, r315_SB, 0.5) - r315_HSwToV(r315_HalfStroke);
                        var r426_xTurn = r426_xBowlLeft + r315_BowlXDepth(r315_CAP, r426_yBar - r315_Stroke, r426_xBowlLeft, r315_Middle);
                        r426_currentGlyph.include(r315_difference(r315_dispiro(r315_widths.lhs(), r315_flat(r315_Middle, r315_CAP, r315_heading(r315_Leftward)), r315_curl(r315_Arch["adjust-x"].top(r426_xTurn), r315_CAP), r315_archv(), r315_g4(r426_xBowlLeft + r315_OX, r315_YSmoothMidL(r315_CAP, r426_yBar - r315_Stroke)), r315_arcvh(), r315_flat(r315_Arch["adjust-x"].bot(r426_xTurn), r426_yBar - r315_Stroke), r315_curl(r315_Middle, r426_yBar - r315_Stroke, r315_heading(r315_Rightward))), r315_AShape.Mask(r315_DivFrame(1), r315_bodyShape, r315_CAP, r315_Stroke)));
                        return void 0;
                    }));
                    r315_xn$GlyphSaveSink$2Lrc4b.save("ASquare." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r432_currentGlyph) {
                        var r432_swVJut, _r432_t0, _r432_t1;
                        var r432_df = r432_currentGlyph.include(r315_DivFrame(r403_fSlabTop ? r315_para.advanceScaleT : 1));
                        var r432_shift = r432_df.middle - r315_Middle;
                        r432_currentGlyph.include(r315_xn$withtransform$5sIl(r315_Translate(r432_shift, 0), new r315_xn$Capture$2Lrc8.GlyphProc(function (r436_currentGlyph) {
                            var _r436_t0, _r436_t1;
                            r436_currentGlyph.include(r315_xn$referglyph$1aao("A." + r315_suffix));
                            r436_currentGlyph.ejectTagged("serifLT");
                            return void 0;
                        })));
                        r432_currentGlyph.include(r432_df.markSet.capital());
                        var r432_xTopBarLeft = Math.min(r432_df.leftSB + 0.75 * r315_OX, r1_mix(0, r315_SB, r403_fBarStraight ? r315_VStraightSbShrink : 1) - (r403_fBarStraight ? r315_VStraightSbOffset : 0) - (r403_fSlabTop ? r315_SideJut : 0) + r432_shift);
                        var r432_xTopBarRight = Math.max(r432_df.rightSB - 0.75 * r315_OX, r1_mix(r315_Width, r315_RightSB, r403_fBarStraight ? r315_VStraightSbShrink : 1) + (r403_fBarStraight ? r315_VStraightSbOffset : 0) + (r403_fSlabTop ? r315_SideJut : 0) + r432_shift);
                        r432_currentGlyph.include(r315_HBar.t(r432_xTopBarLeft, r432_xTopBarRight, r315_CAP));
                        if (r403_fSlabTop) {
                            r432_swVJut = Math.min(r315_VJutStroke, r432_df.adviceStroke(4.5));
                            r432_currentGlyph.include(r315_tagged("serifLT", r315_VSerif.dl(r432_xTopBarLeft, r315_CAP, r315_VJut, r432_swVJut)));
                            r432_currentGlyph.include(r315_tagged("serifRT", r315_VSerif.dr(r432_xTopBarRight, r315_CAP, r315_VJut, r432_swVJut)));
                        }
                        return void 0;
                    }));
                }
                return r315_xn$GlyphSaveSink$2Lrc4b.save("currency/australSign." + r315_suffix, null, r403_AShapeImpl("capital", r315_CAP, false, 2));
            })();
        }
        r315_xn$selectvariant$7Hrq("A", "A");
        r315_xn$linkreducedvariant$5sIl8("A/sansSerif", "A", r1_MathSansSerif);
        r315_xn$selectvariant$7Hrq("smcpA", 7424, new r315_xn$NamedParameterPair$2Lrc9b("follow", "A"));
        r315_xn$selectvariant$7Hrq("ASlash", 570, new r315_xn$NamedParameterPair$2Lrc9b("follow", "A"));
        r315_xn$selectvariant$7Hrq("ABar", 122688, new r315_xn$NamedParameterPair$2Lrc9b("follow", "A"));
        r315_xn$selectvariant$7Hrq("ASwash", 122728, new r315_xn$NamedParameterPair$2Lrc9b("follow", "AHookLeft"));
        r315_xn$selectvariant$7Hrq("ARoundTop", 122730, new r315_xn$NamedParameterPair$2Lrc9b("shapeFrom", "A"), new r315_xn$NamedParameterPair$2Lrc9b("follow", "A/roundTop"));
        r315_xn$selectvariant$7Hrq("ASquare", 122752);
        r315_xn$selectvariant$7Hrq("grek/Alpha", 913, new r315_xn$NamedParameterPair$2Lrc9b("follow", "A"));
        r315_xn$linkreducedvariant$5sIl8("grek/Alpha/sansSerif", "grek/Alpha", r1_MathSansSerif, new r315_xn$NamedParameterPair$2Lrc9b("follow", "A/sansSerif"));
        r315_xn$selectvariant$7Hrq("currency/australSign", 8371, new r315_xn$NamedParameterPair$2Lrc9b("follow", "A"));
        r315_alias("cyrl/A", 1040, "A");
        r315_CreateAccentedComposition("ARing", 197, "A", "ringAbove");
        r315_CreateTurnedLetter("turnA", 11375, "A", r315_HalfAdvance, r315_CAP / 2);
        r315_CreateTurnedLetter("forall", 8704, "A/sansSerif", r315_HalfAdvance, r315_CAP / 2);
        var _r315_t18 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r315_BBS = _r315_t18.BBS;
        var r315_BBD = _r315_t18.BBD;
        var _r315_t19 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-V"].resolve();
        var r315_BBVShape = _r315_t19.BBVShape;
        var r315_BBVInnerMaskShape = _r315_t19.BBVInnerMaskShape;
        return r315_xn$GlyphSaveSink$2Lrc4b.save("mathbb/A", 120120, new r315_xn$Capture$2Lrc8.GlyphProc(function (r457_currentGlyph) {
            var _r457_t0, _r457_t1;
            r457_currentGlyph.include(r315_MarkSet.capital());
            r457_currentGlyph.include(r315_union(r315_BBVShape(r315_SB, r315_RightSB, 1, 1, r315_CAP), r315_intersection(r315_BBVInnerMaskShape(r315_SB, r315_RightSB, 1, 1, r315_CAP), r315_HBar.t(0, r315_Width, r315_CAP - r315_XH / 2, r315_BBS))));
            r457_currentGlyph.include(r315_FlipAround(r315_Middle, r315_CAP / 2));
            return void 0;
        }));
    });
    return void 0;
});


