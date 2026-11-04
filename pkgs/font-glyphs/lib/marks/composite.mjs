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
var r1_ScheduleLeaningMark = _r1_t9.ScheduleLeaningMark;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Mark-Composite", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t12, _r313_t13;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_XH = _r313_t1.XH;
        var r313_Translate = _r313_t1.Translate;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_DotRadius = _r313_t1.DotRadius;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_end = _r313_t2.end;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_alsoThru = _r313_t2.alsoThru;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$queryglyph$1aao = _r313_t6["query-glyph"];
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_xn$derivemultipartglyphs$7Hrq65 = _r313_t6["derive-multi-part-glyphs"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markExtend = _r313_t7.markExtend;
        var r313_markHalfStroke = _r313_t7.markHalfStroke;
        var r313_markStress = _r313_t7.markStress;
        var r313_markFine = _r313_t7.markFine;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markMiddle = _r313_t8.markMiddle;
        var r313_markDotsRadius = _r313_t8.markDotsRadius;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r313_aboveMarkTop = _r313_t9.aboveMarkTop;
        var r313_aboveMarkBot = _r313_t9.aboveMarkBot;
        var r313_aboveMarkMid = _r313_t9.aboveMarkMid;
        var r313_aboveMarkStack = _r313_t9.aboveMarkStack;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r313_commaOvershoot = _r313_t10.commaOvershoot;
        var r313_commaAboveRadius = _r313_t10.commaAboveRadius;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Below"].resolve();
        var r313_belowMarkBot = _r313_t11.belowMarkBot;
        var r313_belowMarkTop = _r313_t11.belowMarkTop;
        var r313_belowMarkMid = _r313_t11.belowMarkMid;
        var r313_GreekLRDoubleMark = function (r321_id, r321_unicode, r321_gnLeft, r321_gnRight) {
            var _r321_t0, _r321_t1;
            var r321_k = -r313_Width * 0.15;
            r313_xn$derivemultipartglyphs$7Hrq65(r321_id, null, [r321_gnLeft, r321_gnRight], function (r322_srcs, r322_gr) {
                var _r322_t0, _r322_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                    var _r324_t1, _r324_t2;
                    var _r324_t0 = r322_srcs;
                    var r324_leftPart = _r324_t0[0];
                    var r324_rightPart = _r324_t0[1];
                    r324_currentGlyph.setWidth(0);
                    r324_currentGlyph.include(r313_xn$referglyph$1aao(r324_leftPart));
                    r324_currentGlyph.include(r313_Translate(2 * r321_k, 0));
                    r324_currentGlyph.include(r313_xn$referglyph$1aao(r324_rightPart));
                    r324_currentGlyph.include(r313_Translate(0 - r321_k, 0));
                    r324_currentGlyph.setMarkAnchor("above", r313_markMiddle, r313_XH, r313_markMiddle, r313_aboveMarkStack);
                    r324_currentGlyph.setBaseAnchor("aboveBraceL", r313_markMiddle - 0.75 * r313_markExtend, r313_aboveMarkMid);
                    r324_currentGlyph.setBaseAnchor("aboveBraceR", r313_markMiddle + 0.75 * r313_markExtend, r313_aboveMarkMid);
                    return void 0;
                });
            });
            r313_xn$deriveglyphs$7Hrq("" + r321_id + "GrekUpperTonos", null, r321_id, function (r333_src, r333_gr) {
                var _r333_t0, _r333_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                    var _r335_t0, _r335_t1;
                    r335_currentGlyph.setWidth(0);
                    r335_currentGlyph.include(r313_xn$referglyph$1aao(r333_src));
                    r335_currentGlyph.setMarkAnchor("grekUpperTonos", r313_markMiddle - r321_k, r313_XH);
                    r335_currentGlyph.setBaseAnchor("aboveBraceL", r313_markMiddle - 0.75 * r313_markExtend, r313_aboveMarkMid);
                    r335_currentGlyph.setBaseAnchor("aboveBraceR", r313_markMiddle + 0.75 * r313_markExtend, r313_aboveMarkMid);
                    return void 0;
                });
            });
            return r321_unicode ? r313_xn$deriveglyphs$7Hrq("spaced" + r321_id, r321_unicode, r321_id, function (r341_src, r341_gr) {
                var _r341_t0, _r341_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                    var _r343_t0, _r343_t1;
                    r343_currentGlyph.include(r313_xn$referglyph$1aao("markBaseSpace"), r313_AS_BASE);
                    r343_currentGlyph.setWidth(r313_xn$queryglyph$1aao("markBaseSpace").advanceWidth);
                    r343_currentGlyph.include(r313_xn$referglyph$1aao(r341_src));
                    return void 0;
                });
            }) : void 0;
        };
        r313_GreekLRDoubleMark("psiliVaria", 8141, "commaAbove", "variaAbove");
        r313_GreekLRDoubleMark("psiliOxia", 8142, "commaAbove", "oxiaAbove");
        r313_GreekLRDoubleMark("dasiaVaria", 8157, "revCommaAbove", "variaAbove");
        r313_GreekLRDoubleMark("dasiaOxia", 8158, "revCommaAbove", "oxiaAbove");
        var r313_yc = r313_aboveMarkTop - r313_commaAboveRadius + r313_DotRadius * 0.3 + r313_commaOvershoot;
        r313_xn$deriveglyphs$7Hrq("psiliPerispomeni", 63633, "commaAbove", function (r347_src, r347_gr) {
            var _r347_t0, _r347_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                var _r349_t0, _r349_t1;
                r349_currentGlyph.setWidth(0);
                r349_currentGlyph.include(r313_xn$referglyph$1aao(r347_src));
                var r349_radius = Math.max(r313_markExtend - r313_commaAboveRadius, r313_commaAboveRadius * 1.25);
                r349_currentGlyph.include(r313_dispiro(r313_widths.lhs(Math.min(r313_markHalfStroke * 2, r313_AdviceStroke(6.5) * 1.25)), r313_g4.up.start(r313_markMiddle - r349_radius, r313_yc, r313_heading(r313_Upward)), r313_arcvh(), r313_g4.right.mid(r313_markMiddle, r313_yc + r349_radius), r313_archv(), r313_g4.down.end(r313_markMiddle + r349_radius, r313_yc, r313_heading(r313_Downward))));
                r349_currentGlyph.setMarkAnchor("above", r313_markMiddle, r313_XH, r313_markMiddle, r313_aboveMarkStack + r313_markHalfStroke * 2);
                r349_currentGlyph.setBaseAnchor("aboveBraceL", r313_markMiddle - 0.5 * r313_markExtend, r313_aboveMarkMid + r313_markHalfStroke);
                r349_currentGlyph.setBaseAnchor("aboveBraceR", r313_markMiddle + 0.5 * r313_markExtend, r313_aboveMarkMid + r313_markHalfStroke);
                r1_ScheduleLeaningMark.set(r349_currentGlyph);
                return void 0;
            });
        });
        r313_xn$deriveglyphs$7Hrq("psiliPerispomeniGrekUpperTonos", null, "psiliPerispomeni", function (r356_src, r356_gr) {
            var _r356_t0, _r356_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                var _r358_t0, _r358_t1;
                r358_currentGlyph.setWidth(0);
                r358_currentGlyph.include(r313_xn$referglyph$1aao(r356_src));
                r358_currentGlyph.setMarkAnchor("grekUpperTonos", r313_markMiddle, r313_XH);
                r358_currentGlyph.setBaseAnchor("aboveBraceL", r313_markMiddle - 0.5 * r313_markExtend, r313_aboveMarkMid + r313_markHalfStroke);
                r358_currentGlyph.setBaseAnchor("aboveBraceR", r313_markMiddle + 0.5 * r313_markExtend, r313_aboveMarkMid + r313_markHalfStroke);
                return void 0;
            });
        });
        r313_xn$deriveglyphs$7Hrq("spaced_psiliPerispomeni", 8143, "psiliPerispomeni", function (r364_src, r364_gr) {
            var _r364_t0, _r364_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                var _r366_t0, _r366_t1;
                r366_currentGlyph.include(r313_xn$referglyph$1aao("markBaseSpace"), r313_AS_BASE);
                r366_currentGlyph.setWidth(r313_xn$queryglyph$1aao("markBaseSpace").advanceWidth);
                r366_currentGlyph.include(r313_xn$referglyph$1aao(r364_src));
                return void 0;
            });
        });
        r313_xn$deriveglyphs$7Hrq("dasiaPerispomeni", 63634, "revCommaAbove", function (r370_src, r370_gr) {
            var _r370_t0, _r370_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                var _r372_t0, _r372_t1;
                r372_currentGlyph.setWidth(0);
                r372_currentGlyph.include(r313_xn$referglyph$1aao(r370_src));
                var r372_radius = Math.max(r313_markExtend - r313_commaAboveRadius, r313_commaAboveRadius * 1.25);
                r372_currentGlyph.include(r313_dispiro(r313_widths.lhs(Math.min(r313_markHalfStroke * 2, r313_AdviceStroke(6.5) * 1.25)), r313_g4.up.start(r313_markMiddle - r372_radius, r313_yc, r313_heading(r313_Upward)), r313_arcvh(), r313_g4.right.mid(r313_markMiddle, r313_yc + r372_radius), r313_archv(), r313_g4.down.end(r313_markMiddle + r372_radius, r313_yc, r313_heading(r313_Downward))));
                r372_currentGlyph.setMarkAnchor("above", r313_markMiddle, r313_XH, r313_markMiddle, r313_aboveMarkStack + r313_markHalfStroke * 2);
                r372_currentGlyph.setBaseAnchor("aboveBraceL", r313_markMiddle - 0.5 * r313_markExtend, r313_aboveMarkMid + r313_markHalfStroke);
                r372_currentGlyph.setBaseAnchor("aboveBraceR", r313_markMiddle + 0.5 * r313_markExtend, r313_aboveMarkMid + r313_markHalfStroke);
                r1_ScheduleLeaningMark.set(r372_currentGlyph);
                return void 0;
            });
        });
        r313_xn$deriveglyphs$7Hrq("dasiaPerispomeniGrekUpperTonos", null, "dasiaPerispomeni", function (r379_src, r379_gr) {
            var _r379_t0, _r379_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                var _r381_t0, _r381_t1;
                r381_currentGlyph.setWidth(0);
                r381_currentGlyph.include(r313_xn$referglyph$1aao(r379_src));
                r381_currentGlyph.setMarkAnchor("grekUpperTonos", r313_markMiddle, r313_XH);
                r381_currentGlyph.setBaseAnchor("aboveBraceL", r313_markMiddle - 0.5 * r313_markExtend, r313_aboveMarkMid + r313_markHalfStroke);
                r381_currentGlyph.setBaseAnchor("aboveBraceR", r313_markMiddle + 0.5 * r313_markExtend, r313_aboveMarkMid + r313_markHalfStroke);
                return void 0;
            });
        });
        r313_xn$deriveglyphs$7Hrq("spaced_dasiaPerispomeni", 8159, "dasiaPerispomeni", function (r387_src, r387_gr) {
            var _r387_t0, _r387_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
                var _r389_t0, _r389_t1;
                r389_currentGlyph.include(r313_xn$referglyph$1aao("markBaseSpace"), r313_AS_BASE);
                r389_currentGlyph.setWidth(r313_xn$queryglyph$1aao("markBaseSpace").advanceWidth);
                r389_currentGlyph.include(r313_xn$referglyph$1aao(r387_src));
                return void 0;
            });
        });
        return r313_xn$deriveglyphs$7Hrq("cyrl/psiliPokrytieAbove", null, "commaAbove", function (r393_src, r393_gr) {
            var _r393_t0, _r393_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r395_currentGlyph) {
                var _r395_t0, _r395_t1;
                r395_currentGlyph.setWidth(0);
                r395_currentGlyph.include(r313_xn$referglyph$1aao(r393_src));
                var r395_radius = Math.max(r313_markExtend - r313_commaAboveRadius, r313_commaAboveRadius * 1.25);
                var r395_sw = Math.min(r313_markHalfStroke * 2, r313_AdviceStroke(6.5) * 1.25);
                r395_currentGlyph.include(r313_dispiro(r313_widths.lhs(r395_sw), r313_g4.up.start(r313_markMiddle - r395_radius, r313_yc, r313_heading(r313_Upward)), r313_arcvh(), r313_g2.right.mid(r313_markMiddle, r313_yc + r395_radius), r313_alsoThru.g2(0.5, 0.5), r313_g2.right.end(r313_markMiddle + Math.max(r395_radius, r313_markExtend * 2), r313_yc, r313_heading(r313_Rightward))));
                r395_currentGlyph.setMarkAnchor("above", r313_markMiddle, r313_XH, r313_markMiddle, r313_aboveMarkStack + r313_markHalfStroke * 2);
                r395_currentGlyph.setBaseAnchor("aboveBraceL", r313_markMiddle - r313_markExtend, r313_aboveMarkMid + r313_markHalfStroke);
                r395_currentGlyph.setBaseAnchor("aboveBraceR", r313_markMiddle + r313_markExtend, r313_aboveMarkMid + r313_markHalfStroke);
                return void 0;
            });
        });
    });
    return void 0;
});


