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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Pilcrow", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_AS_BASE = _r312_t0.AS_BASE;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_Descender = _r312_t1.Descender;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_PlusTop = _r312_t1.PlusTop;
        var r312_PlusBot = _r312_t1.PlusBot;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Downward = _r312_t1.Downward;
        var r312_SHook = _r312_t1.SHook;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_end = _r312_t2.end;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var r312_HookEnd = _r312_t5.HookEnd;
        var r312_FlipAround = _r312_t5.FlipAround;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_BulletShape = function (r315_top, r315_bot, r315_left, r315_right, r315_sw) {
            var _r315_t0, _r315_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
                var _r317_t0, _r317_t1;
                var r317_vsw = r312_HSwToV(r315_sw);
                var r317_midx = r1_mix(r315_left, r315_right, 0.5) - r317_vsw / 4;
                r317_currentGlyph.include(r312_union(r312_xn$spirooutline$1aao(r312_straight.left.start(r317_midx, r315_top), r312_archv(), r312_g4.down.mid(r315_left, r1_mix(r315_top, r315_bot, 0.5)), r312_arcvh(), r312_straight.right.end(r317_midx, r315_bot)), r312_HBar.t(r317_midx, r315_right, r315_top, r315_sw)));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
            var _r321_t0, _r321_t1;
            r321_currentGlyph.setWidth(r312_Width);
            var r321_sw = r312_AdviceStroke(1.5, 0.5);
            var r321_vsw = r312_HSwToV(r321_sw);
            var r321_bulletBot = r312_CAP * 0.5 - r321_sw / 2;
            var r321_midbarX = r312_Middle + r321_vsw / 4;
            r321_currentGlyph.include(r312_BulletShape(r312_CAP, r321_bulletBot, r312_SB, r312_RightSB, r321_sw));
            r312_xn$GlyphSaveSink$2Lrc4b.save("pilcrow.high", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r321_currentGlyph, new r312_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                var _r327_t0, _r327_t1;
                r327_currentGlyph.include(r312_VBar.m(r321_midbarX, 0, r312_CAP, r321_sw));
                r327_currentGlyph.include(r312_VBar.r(r312_RightSB, 0, r312_CAP, r321_sw));
                return void 0;
            })));
            r312_xn$GlyphSaveSink$2Lrc4b.save("pilcrow.low", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r321_currentGlyph, new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                var _r333_t0, _r333_t1;
                r333_currentGlyph.include(r312_VBar.m(r321_midbarX, r312_Descender, r312_CAP, r321_sw));
                r333_currentGlyph.include(r312_VBar.r(r312_RightSB, r312_Descender, r312_CAP, r321_sw));
                return void 0;
            })));
            r312_xn$GlyphSaveSink$2Lrc4b.save("pilcrow.curved", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r321_currentGlyph, new r312_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                var _r339_t0, _r339_t1;
                r339_currentGlyph.include(r312_dispiro(r312_widths.rhs(r321_sw), r312_flat(r312_RightSB, r312_CAP, r312_heading(r312_Downward)), r312_curl(r312_RightSB, 0 + r312_SmallArchDepthA), r312_HookEnd(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r321_sw)), r312_g4(r312_SB, 0 + r312_SHook)));
                r339_currentGlyph.include(r312_VBar.m(r321_midbarX, r321_bulletBot, r312_CAP, r321_sw));
                r312_xn$GlyphSaveSink$2Lrc4b.save("curvedPilcrow", 10081, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r339_currentGlyph, new r312_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                    var _r345_t0, _r345_t1;
                    r345_currentGlyph.include(r312_HBar.t(r321_midbarX, r1_mix(r312_RightSB, r312_Width, 0.5), r312_CAP, r321_sw));
                    r345_currentGlyph.include(r312_HBar.b(r321_midbarX, r312_RightSB, r321_bulletBot, r321_sw));
                    return void 0;
                })));
                return void 0;
            })));
            return void 0;
        }));
        r312_xn$selectvariant$7Hrq("pilcrow", 182);
        r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
            var _r350_t0, _r350_t1;
            r312_xn$GlyphSaveSink$2Lrc4b.save("revPilcrow.high", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r350_currentGlyph, new r312_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                var _r354_t0, _r354_t1;
                r354_currentGlyph.include(r312_xn$referglyph$1aao("pilcrow.high"), r312_AS_BASE);
                r354_currentGlyph.include(r312_FlipAround(r312_Middle, r312_CAP / 2, -1, 1));
                return void 0;
            })));
            r312_xn$GlyphSaveSink$2Lrc4b.save("revPilcrow.low", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r350_currentGlyph, new r312_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
                var _r360_t0, _r360_t1;
                r360_currentGlyph.include(r312_xn$referglyph$1aao("pilcrow.low"), r312_AS_BASE);
                r360_currentGlyph.include(r312_FlipAround(r312_Middle, r312_CAP / 2, -1, 1));
                return void 0;
            })));
            r312_xn$GlyphSaveSink$2Lrc4b.save("revPilcrow.curved", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r350_currentGlyph, new r312_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                var _r366_t0, _r366_t1;
                r366_currentGlyph.include(r312_xn$referglyph$1aao("pilcrow.curved"), r312_AS_BASE);
                r366_currentGlyph.include(r312_FlipAround(r312_Middle, r312_CAP / 2, -1, 1));
                return void 0;
            })));
            return void 0;
        }));
        r312_xn$selectvariant$7Hrq("revPilcrow", 8267);
        r312_xn$GlyphSaveSink$2Lrc4b.save("leftBullet", 8268, new r312_xn$Capture$2Lrc8.GlyphProc(function (r371_currentGlyph) {
            var _r371_t0, _r371_t1;
            r371_currentGlyph.setWidth(r312_Width);
            var r371_sw = r312_AdviceStroke(1.5, 0.5);
            var r371_vsw = r312_HSwToV(r371_sw);
            var r371_midbarX = r312_Middle + r371_vsw / 4;
            r371_currentGlyph.include(r312_BulletShape(r312_PlusTop, r312_PlusBot, r312_SB, r312_RightSB, r371_sw));
            r371_currentGlyph.include(r312_VBar.m(r371_midbarX, r312_PlusBot, r312_PlusTop, r371_sw));
            r371_currentGlyph.include(r312_VBar.r(r312_RightSB, r312_PlusBot, r312_PlusTop, r371_sw));
            r371_currentGlyph.include(r312_HBar.b(r371_midbarX, r312_RightSB, r312_PlusBot, r371_sw));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("rightBullet", 8269, new r312_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
            var _r379_t0, _r379_t1;
            r379_currentGlyph.include(r312_xn$referglyph$1aao("leftBullet"), r312_AS_BASE);
            r379_currentGlyph.include(r312_FlipAround(r312_Middle, r312_SymbolMid, -1, 1));
            return void 0;
        }));
    });
    return void 0;
});


