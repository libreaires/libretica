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
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-AE-OE", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11, _r313_t12, _r313_tag13, _r313_t14, _r313_tag15, _r313_t16, _r313_tag17;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_Width = _r313_t1.Width;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Translate = _r313_t1.Translate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Upward = _r313_t1.Upward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_O = _r313_t1.O;
        var r313_ArchDepth = _r313_t1.ArchDepth;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_LongJut = _r313_t1.LongJut;
        var r313_MidJutSide = _r313_t1.MidJutSide;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_CThin = _r313_t1.CThin;
        var r313_CThinB = _r313_t1.CThinB;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_ShoulderFine = _r313_t1.ShoulderFine;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var r313_ArchDepthAOf = _r313_t1.ArchDepthAOf;
        var r313_ArchDepthBOf = _r313_t1.ArchDepthBOf;
        var r313_ArchDepthAClamped = _r313_t1.ArchDepthAClamped;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_unimportant = _r313_t2.unimportant;
        var r313_quadControls = _r313_t2.quadControls;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_DiagCor = _r313_t5.DiagCor;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateDependentComposite = _r313_t7.CreateDependentComposite;
        var r313_AEOEStroke = function (r317_df, r317_top) {
            var _r317_t0, _r317_t1;
            return r317_df.adviceThinnerStroke2(3, 3, r317_top);
        };
        (function () {
            var r319_suffix, r319_bodyShape, r319_slabKind, _r319_t2, _r319_t3, _r319_tag4;
            var r319_xn$BODYCURLY$5sIl = 0;
            var r319_xn$BODYSTRAIGHT$5sIl = 1;
            var r319_xn$BODYROUNDTOP$5sIl6 = 2;
            var r319_xn$SLABNONE$5sIl = 0;
            var r319_xn$SLABTOP$5sIl = 1;
            var r319_xn$SLABBASE$5sIl = 2;
            var r319_xn$SLABTRI$5sIl = 3;
            var r319_AEAHalfCurly = function (r320_df, r320_top, r320_eLeft, r320_sw) {
                var _r320_t0, _r320_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                    var _r322_t0, _r322_t1;
                    var r322_fine = Math.min(r320_sw, r320_df.adviceStroke2(3, 4, r320_top));
                    r322_currentGlyph.include(r313_dispiro(r313_widths.rhs(r320_sw), r313_flat(r320_df.leftSB, 0, r313_heading(r313_Upward)), r313_curl(r320_df.leftSB, r1_mix(r320_top, 0, 0.9), r313_heading(r313_Upward)), r313_quadControls(0, 0.3, 6, r313_unimportant), r313_g4(r320_eLeft - r313_HalfStroke, r320_top, r313_widths.rhs(r322_fine))));
                    r322_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r320_eLeft - r313_HalfStroke, r320_top), r313_corner(r320_eLeft, r320_top), r313_corner(r320_eLeft, r320_top - r320_sw)));
                    r322_currentGlyph.include(r313_intersection(r313_HBar.t(0, r320_eLeft, r313_XH / 2, r320_sw), r313_xn$withtransform$5sIl(r313_Translate(-r313_O, 0), r313_xn$spirooutline$1aao(r313_corner(r320_df.leftSB, 0, r313_heading(r313_Upward)), r313_curl(r320_df.leftSB, r1_mix(r320_top, 0, 0.9), r313_heading(r313_Upward)), r313_quadControls(0, 0.3, 6, r313_unimportant), r313_corner(r320_eLeft - r313_HalfStroke, r320_top, r313_widths.rhs(r322_fine)), r313_corner(r320_eLeft, r320_top), r313_corner(r320_eLeft, 0)))));
                    return void 0;
                });
            };
            var r319_AEAHalfStraight = function (r326_df, r326_top, r326_eLeft, r326_sw) {
                var _r326_t0, _r326_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                    var _r328_t0, _r328_t1;
                    var r328_StraightSbShrink = r1_mix(1, r313_DesignParameters.straightVShapeSbShrink * r313_StrokeWidthBlend(1, 0.75), r313_SLAB ? 0.75 : 1);
                    var r328_pInktrap = 2 / 3;
                    var r328_vxStartL = r1_mix(0, r326_df.leftSB, r328_StraightSbShrink);
                    var r328_vxEndL = r326_eLeft - r313_HSwToV(0.5 * r326_sw);
                    var r328_dgCor = r313_DiagCor(r326_top, r326_df.middle, 0, r326_sw * 2);
                    var r328_swStart = r328_dgCor * r326_sw;
                    var r328_swEnd = r326_sw * r313_CThin * 1.15;
                    var r328_swMid = r328_dgCor * Math.min(r326_sw, r1_mix(r326_sw, r328_swEnd, r328_pInktrap));
                    r328_currentGlyph.include(r313_dispiro(r313_flat(r1_mix(r328_vxStartL, r328_vxEndL, 0), r1_mix(0, r326_top, 0), r313_widths.rhs.heading(r328_swStart, r313_Upward)), r313_curl(r1_mix(r328_vxStartL, r328_vxEndL, r328_pInktrap), r1_mix(0, r326_top, r328_pInktrap), r313_widths.rhs.heading(r328_swMid, r313_Upward)), r313_g4(r1_mix(r328_vxStartL, r328_vxEndL, 1), r1_mix(0, r326_top, 1), r313_widths.rhs.heading(r328_swEnd, r313_Upward))));
                    r328_currentGlyph.include(r313_intersection(r313_HBar.t(0, r326_eLeft, r313_XH / 2, r326_sw), r313_xn$spirooutline$1aao(r313_flat(r1_mix(r328_vxStartL, r328_vxEndL, 0) + 1, r1_mix(0, r326_top, 0)), r313_curl(r1_mix(r328_vxStartL, r328_vxEndL, r328_pInktrap) + 1, r1_mix(0, r326_top, r328_pInktrap)), r313_corner(r1_mix(r328_vxStartL, r328_vxEndL, 1) + 1, r1_mix(0, r326_top, 1)), r313_corner(r326_eLeft, r326_top), r313_corner(r326_eLeft, 0))));
                    return void 0;
                });
            };
            var r319_AEAHalfRoundTop = function (r331_df, r331_top, r331_eLeft, r331_sw) {
                var _r331_t0, _r331_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                    var _r333_t0, _r333_t1;
                    var r333_ada = r313_ArchDepthAClamped(r331_top, 0, r331_df.archDepthAOf(r313_ArchDepth, r331_sw), r331_df.archDepthBOf(r313_ArchDepth, r331_sw));
                    r333_currentGlyph.include(r313_HBar.t(r331_df.leftSB, r331_eLeft, r313_XH * 0.75 / r313_CAP * r331_top, r331_sw));
                    r333_currentGlyph.include(r313_dispiro(r313_widths.rhs(r331_sw), r313_flat(r331_df.leftSB, 0, r313_heading(r313_Upward)), r313_curl(r331_df.leftSB, r331_top - r333_ada), r313_arcvh(), r313_straight.right.end(r331_eLeft, r331_top, r313_heading(r313_Rightward))));
                    return void 0;
                });
            };
            var r319_AEAHalf = function (r336_df, r336_bodyShape, r336_top, r336_slabKind) {
                var _r336_t0, _r336_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                    var r338___, _r338_t0, _r338_t1, _r338_t2, _r338_t3, _r338_t4;
                    var r338_sw = r313_AEOEStroke(r336_df, r336_top);
                    var r338_eLeft = r336_df.middle - r313_HSwToV(0.25 * r338_sw);
                    r338_currentGlyph.include((_r338_t0 = r336_bodyShape, _r338_t0 === r319_xn$BODYCURLY$5sIl ? r319_AEAHalfCurly(r336_df, r336_top, r338_eLeft, r338_sw) : _r338_t0 === r319_xn$BODYSTRAIGHT$5sIl ? r319_AEAHalfStraight(r336_df, r336_top, r338_eLeft, r338_sw) : _r338_t0 === r319_xn$BODYROUNDTOP$5sIl6 ? r319_AEAHalfRoundTop(r336_df, r336_top, r338_eLeft, r338_sw) : void 0));
                    r338_currentGlyph.include((_r338_t1 = r336_slabKind, _r338_t1 === r319_xn$SLABBASE$5sIl || _r338_t1 === r319_xn$SLABTRI$5sIl ? r313_HSerif.mb(r336_df.leftSB + r313_HSwToV(0.5 * r338_sw), 0, r313_Jut - r313_HSwToV(0.5 * (r313_Stroke - r338_sw)), r338_sw) : (r338___ = _r338_t1, r313_xn$noshape$3cah())));
                    r338_currentGlyph.include((_r338_t2 = r336_slabKind, _r338_t2 === r319_xn$SLABTRI$5sIl ? r313_HSerif.lt(r336_df.middle, r336_top, r313_MidJutSide - r313_HSwToV(0.5 * (r313_HalfStroke - r338_sw)), r338_sw) : _r338_t2 === r319_xn$SLABTOP$5sIl ? r313_HSerif.lt(r336_df.middle, r336_top, r1_mix(r313_MidJutSide, r313_LongJut, 0.5) - r313_HSwToV(0.5 * (r313_Stroke - r338_sw)), r338_sw) : (r338___ = _r338_t2, r313_xn$noshape$3cah())));
                    return void 0;
                });
            };
            var r319_AConfig = r1_SuffixCfg.combine(r1_SuffixCfg.weave({
                "straight": r319_xn$BODYSTRAIGHT$5sIl,
                "curly": r319_xn$BODYCURLY$5sIl
            }, {
                "serifless": r319_xn$SLABNONE$5sIl,
                "topSerifed": r319_xn$SLABTOP$5sIl,
                "baseSerifed": r319_xn$SLABBASE$5sIl,
                "triSerifed": r319_xn$SLABTRI$5sIl
            }), {
                "roundTopSerifless": [r319_xn$BODYROUNDTOP$5sIl6, r319_xn$SLABNONE$5sIl],
                "roundTopBaseSerifed": [r319_xn$BODYROUNDTOP$5sIl6, r319_xn$SLABBASE$5sIl]
            });
            var _r319_t0 = Object.entries(r319_AConfig)[Symbol.iterator]();
            var _r319_t1 = void 0;
            while (!(_r319_t1 = _r319_t0.next()).done) {
                _r319_t2 = _r319_t1.value;
                r319_suffix = _r319_t2[0];
                r319_bodyShape = _r319_t2[1][0];
                r319_slabKind = _r319_t2[1][1];
                _r319_t2[1];
                (function () {
                    r313_xn$GlyphSaveSink$2Lrc4b.save("AE/A." + r319_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                        var _r347_t0, _r347_t1;
                        var r347_df = r347_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                        r347_currentGlyph.include(r347_df.markSet.capital());
                        r347_currentGlyph.include(r319_AEAHalf(r347_df, r319_bodyShape, r313_CAP, r319_slabKind));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save("smcpAE/smcpA." + r319_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                        var _r353_t0, _r353_t1;
                        var r353_df = r353_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
                        r353_currentGlyph.include(r353_df.markSet.e());
                        r353_currentGlyph.include(r319_AEAHalf(r353_df, r319_bodyShape, r313_XH, r319_slabKind));
                        return void 0;
                    }));
                })();
            }
            r313_xn$selectvariant$7Hrq("AE/A/full", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "AE/A"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "AE/E.serifless/A"));
            r313_xn$selectvariant$7Hrq("AE/A/reduced", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "AE/A"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "AE/E.topLeftSerifed/A"));
            r313_xn$selectvariant$7Hrq("smcpAE/smcpA/full", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpAE/smcpA"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "AE/E.serifless/A"));
            return r313_xn$selectvariant$7Hrq("smcpAE/smcpA/reduced", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpAE/smcpA"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "AE/E.topLeftSerifed/A"));
        })();
        (function () {
            var _r366_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
            var r366_OBarRight = _r366_t0.OBarRight;
            var r366_OEOHalf = function (r368_df, r368_top) {
                var _r368_t0, _r368_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
                    var _r370_t0, _r370_t1;
                    var r370_sw = r313_AEOEStroke(r368_df, r368_top);
                    var r370_eLeft = r368_df.middle - r313_HSwToV(0.25 * r370_sw);
                    var r370_mockWidth = r370_eLeft + r313_HSwToV(r370_sw) + r368_df.leftSB;
                    var r370_archDepth = Math.max(r370_sw * 1.125, r313_ArchDepth * (r370_mockWidth / r313_Width));
                    r370_currentGlyph.include(r366_OBarRight.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r368_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r368_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r370_eLeft + r313_HSwToV(r370_sw)), new r313_xn$NamedParameterPair$2Lrc9b("sw", r370_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r370_sw * r1_mix(r313_CThinB, r313_ShoulderFine / r313_Stroke, 0.5)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthAOf(r370_archDepth, r370_mockWidth)), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthBOf(r370_archDepth, r370_mockWidth))));
                    return void 0;
                });
            };
            r313_xn$GlyphSaveSink$2Lrc4b.save("OE/O", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                var _r381_t0, _r381_t1;
                var r381_df = r381_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                r381_currentGlyph.include(r381_df.markSet.capital());
                r381_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                r381_currentGlyph.include(r366_OEOHalf(r381_df, r313_CAP));
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("smcpOE/smcpO", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
                var _r388_t0, _r388_t1;
                var r388_df = r388_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
                r388_currentGlyph.include(r388_df.markSet.e());
                r388_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                r388_currentGlyph.include(r366_OEOHalf(r388_df, r313_XH));
                return void 0;
            }));
        })();
        (function () {
            var r394_suffix, r394_legShape, r394_fGap, r394_slabs, r394_doLegSlab, r394_doTail, _r394_t3, _r394_t4, _r394_tag5;
            var _r394_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-R"].resolve();
            var r394_RevRShape = _r394_t0.RevRShape;
            var r394_RevRConfig = _r394_t0.RevRConfig;
            var _r394_t1 = Object.entries(r394_RevRConfig)[Symbol.iterator]();
            var _r394_t2 = void 0;
            while (!(_r394_t2 = _r394_t1.next()).done) {
                _r394_t3 = _r394_t2.value;
                r394_suffix = _r394_t3[0];
                r394_legShape = _r394_t3[1][0];
                r394_fGap = _r394_t3[1][1];
                r394_slabs = _r394_t3[1][2][0];
                r394_doLegSlab = _r394_t3[1][2][1];
                r394_doTail = _r394_t3[1][2][2];
                _r394_t3[1][2];
                _r394_t3[1];
                (function () {
                    return !r394_slabs && !r394_doTail ? r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YaYe/Ya." + r394_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
                        var _r401_t0, _r401_t1;
                        var r401_df = r401_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                        r401_currentGlyph.include(r401_df.markSet.capital());
                        var r401_sw = r313_AEOEStroke(r401_df, r313_CAP);
                        var r401_subDf = r401_df.sliceFine(3, 2, 0.5, r313_HSwToV(0.25 * r401_sw));
                        r401_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                        r401_currentGlyph.include(r394_RevRShape(r394_legShape, r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("df", r401_subDf), new r313_xn$NamedParameterPair$2Lrc9b("legSlab", r394_doLegSlab), new r313_xn$NamedParameterPair$2Lrc9b("open", r394_fGap), new r313_xn$NamedParameterPair$2Lrc9b("sw", r401_sw)));
                        r401_currentGlyph.ejectTagged("strokeR");
                        r401_currentGlyph.ejectTagged("serifRT");
                        return void 0;
                    })) : void 0;
                })();
            }
            return r313_xn$selectvariant$7Hrq("cyrl/YaYe/Ya");
        })();
        (function () {
            var r413_suffix, r413_slabKind, _r413_t3, _r413_t4, _r413_tag5;
            var _r413_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
            var r413_EFVJutLength = _r413_t0.EFVJutLength;
            var r413_EFMidBarPosY = _r413_t0.EFMidBarPosY;
            var r413_xn$SLABNONE$5sIl = 0;
            var r413_xn$SLABMOTION$5sIl = 1;
            var r413_xn$SLABALL$5sIl = 2;
            var r413_xn$SLABCAPPED$5sIl = 3;
            var r413_AEEHalf = function (r415_df, r415_top, r415_slabKind) {
                var _r415_t0, _r415_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r417_currentGlyph) {
                    var r417_swVJut, _r417_t3, _r417_t4;
                    var r417_sw = r313_AEOEStroke(r415_df, r415_top);
                    var r417_eLeft = r415_df.middle - r313_HSwToV(0.25 * r417_sw);
                    var r417_xMidBarRight = r415_df.rightSB - r417_sw / 4;
                    var r417_yBar = r413_EFMidBarPosY(r415_top, 0);
                    var _r417_t0 = r413_EFVJutLength(r415_top, 0, void 0, r417_sw);
                    var r417_jutTop = _r417_t0[0];
                    var r417_jutBot = _r417_t0[1];
                    var r417_jutMid = _r417_t0[2];
                    r417_currentGlyph.include(r313_VBar.l(r417_eLeft, 0, r415_top, r417_sw));
                    r417_currentGlyph.include(r313_HBar.t(r417_eLeft - r313_O, r415_df.rightSB, r415_top, r417_sw));
                    r417_currentGlyph.include(r313_HBar.m(r417_eLeft - r313_O, r417_xMidBarRight, r417_yBar, r417_sw));
                    r417_currentGlyph.include(r313_HBar.b(r417_eLeft - r313_O, r415_df.rightSB, 0, r417_sw));
                    var _r417_t1 = r415_slabKind;
                    if (_r417_t1 === r413_xn$SLABALL$5sIl || _r417_t1 === r413_xn$SLABCAPPED$5sIl) {
                        r417_swVJut = Math.min(r313_VJutStroke * (r417_sw / r313_Stroke), r313_VSwToH(0.8 * (r415_df.rightSB - (r417_eLeft + r313_HSwToV(r417_sw)))));
                        r417_currentGlyph.include(r313_VSerif.dr(r415_df.rightSB, r415_top, r417_jutTop, r417_swVJut));
                        r417_currentGlyph.include(r313_VSerif.ur(r415_df.rightSB, 0, r417_jutBot, r417_swVJut));
                    } else void 0;
                    var _r417_t2 = r415_slabKind;
                    if (_r417_t2 === r413_xn$SLABCAPPED$5sIl) {
                        r417_swVJut = Math.min(r313_VJutStroke * (r417_sw / r313_Stroke), r313_VSwToH(0.8 * (r417_xMidBarRight - (r417_eLeft + r313_HSwToV(r417_sw)))));
                        r417_currentGlyph.include(r313_VSerif.mr(r417_xMidBarRight, r417_yBar, r417_jutMid, r417_swVJut));
                    } else void 0;
                    return void 0;
                });
            };
            var r413_EConfig = {
                "serifless": [r413_xn$SLABNONE$5sIl],
                "topLeftSerifed": [r413_xn$SLABMOTION$5sIl],
                "serifed": [r413_xn$SLABALL$5sIl],
                "serifedCapped": [r413_xn$SLABCAPPED$5sIl]
            };
            var _r413_t1 = Object.entries(r413_EConfig)[Symbol.iterator]();
            var _r413_t2 = void 0;
            while (!(_r413_t2 = _r413_t1.next()).done) {
                _r413_t3 = _r413_t2.value;
                r413_suffix = _r413_t3[0];
                r413_slabKind = _r413_t3[1][0];
                _r413_t3[1];
                (function () {
                    r313_xn$GlyphSaveSink$2Lrc4b.save("AE/E." + r413_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
                        var _r430_t0, _r430_t1;
                        var r430_df = r430_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                        r430_currentGlyph.include(r430_df.markSet.capital());
                        r430_currentGlyph.include(r413_AEEHalf(r430_df, r313_CAP, r413_slabKind));
                        r1_DependentSelector.set(r430_currentGlyph, r413_suffix === "serifless" ? "full" : "reduced");
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("smcpAE/smcpE." + r413_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r436_currentGlyph) {
                        var _r436_t0, _r436_t1;
                        var r436_df = r436_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
                        r436_currentGlyph.include(r436_df.markSet.e());
                        r436_currentGlyph.include(r413_AEEHalf(r436_df, r313_XH, r413_slabKind));
                        r1_DependentSelector.set(r436_currentGlyph, r413_suffix === "serifless" ? "full" : "reduced");
                        return void 0;
                    }));
                    return r413_suffix !== "topLeftSerifed" ? (r313_xn$GlyphSaveSink$2Lrc4b.save("OE/E." + r413_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r442_currentGlyph) {
                        var _r442_t0, _r442_t1;
                        var r442_df = r313_DivFrame(r313_para.advanceScaleMM, 3);
                        r442_currentGlyph.setWidth(0);
                        r442_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                        r442_currentGlyph.include(r413_AEEHalf(r442_df, r313_CAP, r413_slabKind));
                        return void 0;
                    })), r313_xn$GlyphSaveSink$2Lrc4b.save("smcpOE/smcpE." + r413_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r448_currentGlyph) {
                        var _r448_t0, _r448_t1;
                        var r448_df = r313_DivFrame(r313_para.advanceScaleM, 3);
                        r448_currentGlyph.setWidth(0);
                        r448_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                        r448_currentGlyph.include(r413_AEEHalf(r448_df, r313_XH, r413_slabKind));
                        return void 0;
                    }))) : void 0;
                })();
            }
            r313_xn$selectvariant$7Hrq("AE/E");
            r313_xn$selectvariant$7Hrq("OE/E");
            r313_xn$selectvariant$7Hrq("smcpAE/smcpE", new r313_xn$NamedParameterPair$2Lrc9b("follow", "AE/E"));
            return r313_xn$selectvariant$7Hrq("smcpOE/smcpE", new r313_xn$NamedParameterPair$2Lrc9b("follow", "OE/E"));
        })();
        r313_CreateDependentComposite("AE", 198, "AE/E", {
            "full": "AE/A/full",
            "reduced": "AE/A/reduced"
        });
        r313_CreateDependentComposite("smcpAE", 7425, "smcpAE/smcpE", {
            "full": "smcpAE/smcpA/full",
            "reduced": "smcpAE/smcpA/reduced"
        });
        r313_xn$derivecomposites$7Hrq("OE", 338, "OE/O", "OE/E");
        r313_xn$derivecomposites$7Hrq("smcpOE", 630, "smcpOE/smcpO", "smcpOE/smcpE");
        r313_alias("cyrl/AYe", 1236, "AE");
        return r313_xn$derivecomposites$7Hrq("cyrl/YaYe", 1304, "cyrl/YaYe/Ya", "OE/E");
    });
    return void 0;
});


