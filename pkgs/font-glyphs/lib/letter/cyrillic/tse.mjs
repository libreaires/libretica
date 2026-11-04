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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Tse", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_doST, r312_doSB, _r312_t10, _r312_t11, _r312_t12, _r312_t13, _r312_tag14;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_VSwToH = _r312_t1.VSwToH;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_OX = _r312_t1.OX;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_VJut = _r312_t1.VJut;
        var r312_VJutStroke = _r312_t1.VJutStroke;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_SideJut = _r312_t1.SideJut;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_VSerif = _r312_t5.VSerif;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_SerifFrame = _r312_t7.SerifFrame;
        var r312_CyrDescender = _r312_t7.CyrDescender;
        var r312_CyrCurlDescender = _r312_t7.CyrCurlDescender;
        var r312_CyrTseShape = function (r316_top, r316_fRev) {
            var _r316_t0, _r316_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
                var _r318_leti0, _r318_t1, _r318_t2, _r318_t3, _r318_t4, _r318_tag5;
                r318_currentGlyph.include(r312_VBar.l(r312_SB, 0, r316_top));
                r318_currentGlyph.include(r312_VBar.r(r312_RightSB, 0, r316_top));
                r318_currentGlyph.include(r312_HBar.b(r312_SB, r312_RightSB, 0));
                r318_currentGlyph.include(r316_fRev ? r312_CyrDescender.lSideJut(r312_SB, 0) : r312_CyrDescender.rSideJut(r312_RightSB, 0));
                if (r312_SLAB) {
                    _r318_t3 = r312_SerifFrame.fromDf(r312_DivFrame(1), r316_top, 0);
                    (function (_r318_leti0) {
                        var r323_sf = _r318_leti0;
                        r318_currentGlyph.include(r323_sf.lt.full);
                        r318_currentGlyph.include(r323_sf.rt.full);
                        r318_currentGlyph.include(r323_sf.lb.outer);
                        return r318_currentGlyph.include(r323_sf.rb.outer);
                    })(_r318_t3);
                }
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Tse", 1062, new r312_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
            var _r330_t0, _r330_t1;
            r330_currentGlyph.include(r312_MarkSet.capital());
            r330_currentGlyph.include(r312_CyrTseShape(r312_CAP, false));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tse.upright", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
            var _r335_t0, _r335_t1;
            r335_currentGlyph.include(r312_MarkSet.e());
            r335_currentGlyph.include(r312_CyrTseShape(r312_XH, false));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/revTse", 42592, new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
            var _r340_t0, _r340_t1;
            r340_currentGlyph.include(r312_MarkSet.capital());
            r340_currentGlyph.include(r312_CyrTseShape(r312_CAP, true));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/revtse.upright", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
            var _r345_t0, _r345_t1;
            r345_currentGlyph.include(r312_MarkSet.e());
            r345_currentGlyph.include(r312_CyrTseShape(r312_XH, true));
            return void 0;
        }));
        var r312_TeTseConfig = {
            "serifless": [false, false],
            "motionSerifed": [true, false]
        };
        var r312_CyrTeTseShape = function (r348_df, r348_top, r348_teSerifs) {
            var _r348_t0, _r348_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                var r350_swVJut, _r350_t0, _r350_t1;
                var r350_sw = r312_AdviceStroke(2.75);
                var r350_left = r1_mix(r348_df.leftSB, r348_df.rightSB, r348_df.adws > 1 ? 0.25 : 0.2) - r312_HSwToV(0.25 * r350_sw) + r312_OX;
                var r350_right = r348_df.rightSB - r312_OX;
                var r350_xTopBarLeft = r348_df.leftSB - r312_SideJut;
                var r350_xTopBarRight = r1_mix(r350_xTopBarLeft, r350_left + r312_HSwToV(0.5 * r350_sw), 2);
                r350_currentGlyph.include(r312_dispiro(r312_widths.rhs(r350_sw), r312_flat(r350_xTopBarLeft, r348_top, r348_teSerifs ? r312_heading(r312_Rightward) : null), r312_curl(r350_xTopBarRight, r348_top, r348_teSerifs ? r312_heading(r312_Rightward) : null)));
                r350_currentGlyph.include(r312_VBar.l(r350_left, 0, r348_top, r350_sw));
                r350_currentGlyph.include(r312_VBar.r(r350_right, 0, r348_top, r350_sw));
                r350_currentGlyph.include(r312_HBar.b(r350_left, r350_right, 0, r350_sw));
                var r350_sf = r312_SerifFrame(r348_top, 0, r350_left, r350_right, new r312_xn$NamedParameterPair$2Lrc9b("swRef", r350_sw));
                r350_currentGlyph.include(r312_CyrDescender.rSideJut(r350_right, 0, new r312_xn$NamedParameterPair$2Lrc9b("sideJut", r350_sf.sideJut)));
                if (r312_SLAB) {
                    r350_currentGlyph.include(r350_sf.rt.outer);
                    r350_currentGlyph.include(r350_sf.lb.outer);
                    r350_currentGlyph.include(r350_sf.rb.outer);
                }
                if (r348_teSerifs) {
                    r350_swVJut = Math.min(r312_VJutStroke * (r350_sw / r312_Stroke), r312_VSwToH(0.625 * (r350_left - r350_xTopBarLeft)));
                    r350_currentGlyph.include(r312_VSerif.dl(r350_xTopBarLeft, r348_top, r312_VJut, r350_swVJut));
                    r350_currentGlyph.include(r312_VSerif.dr(r350_xTopBarRight, r348_top, r312_VJut, r350_swVJut));
                }
                return void 0;
            });
        };
        var _r312_t8 = Object.entries(r312_TeTseConfig)[Symbol.iterator]();
        var _r312_t9 = void 0;
        while (!(_r312_t9 = _r312_t8.next()).done) {
            _r312_t10 = _r312_t9.value;
            r312_suffix = _r312_t10[0];
            r312_doST = _r312_t10[1][0];
            r312_doSB = _r312_t10[1][1];
            _r312_t10[1];
            (function () {
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/TeTse." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                    var _r368_t0, _r368_t1;
                    var r368_df = r368_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleT));
                    r368_currentGlyph.include(r368_df.markSet.capital());
                    r368_currentGlyph.include(r312_CyrTeTseShape(r368_df, r312_CAP, r312_doST));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tetse.upright." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
                    var _r374_t0, _r374_t1;
                    var r374_df = r374_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleT));
                    r374_currentGlyph.include(r374_df.markSet.e());
                    r374_currentGlyph.include(r312_CyrTeTseShape(r374_df, r312_XH, r312_doST));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("cyrl/TeTse", 1204, new r312_xn$NamedParameterPair$2Lrc9b("follow", "T/rTailBase"));
        r312_xn$selectvariant$7Hrq("cyrl/tetse.upright", new r312_xn$NamedParameterPair$2Lrc9b("follow", "T/rTailBase"));
        var r312_CyrTsweShape = function (r380_top) {
            var _r380_t0, _r380_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                var _r382_leti0, _r382_t1, _r382_t2, _r382_t3, _r382_t4, _r382_tag5;
                r382_currentGlyph.include(r312_VBar.l(r312_SB, 0, r380_top));
                r382_currentGlyph.include(r312_HBar.b(r312_SB, r312_RightSB, 0));
                r382_currentGlyph.include(r312_VBar.r(r312_RightSB, 0, r380_top));
                r382_currentGlyph.include(r312_CyrCurlDescender.rSideJut(r312_RightSB, 0));
                if (r312_SLAB) {
                    _r382_t3 = r312_SerifFrame.fromDf(r312_DivFrame(1), r380_top, 0);
                    (function (_r382_leti0) {
                        var r387_sf = _r382_leti0;
                        r382_currentGlyph.include(r387_sf.lt.full);
                        r382_currentGlyph.include(r387_sf.rt.full);
                        r382_currentGlyph.include(r387_sf.lb.outer);
                        return r382_currentGlyph.include(r387_sf.rb.outer);
                    })(_r382_t3);
                }
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Tswe", 42638, new r312_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
            var _r394_t0, _r394_t1;
            r394_currentGlyph.include(r312_MarkSet.capDesc());
            r394_currentGlyph.include(r312_CyrTsweShape(r312_CAP));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tswe.upright", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r399_currentGlyph) {
            var _r399_t0, _r399_t1;
            r399_currentGlyph.include(r312_MarkSet.p());
            r399_currentGlyph.include(r312_CyrTsweShape(r312_XH));
            return void 0;
        }));
    });
    return void 0;
});


