"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Suit-Cards", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_PictTop = _r313_t1.PictTop;
        var r313_PictBot = _r313_t1.PictBot;
        var r313_Scale = _r313_t1.Scale;
        var r313_Translate = _r313_t1.Translate;
        var r313_O = _r313_t1.O;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_RingAt = _r313_t5.RingAt;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_Ungizmo = _r313_t5.Ungizmo;
        var r313_Regizmo = _r313_t5.Regizmo;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Pictograph-Heart"].resolve();
        var r313_HeartShapeImpl = _r313_t7.HeartShapeImpl;
        var r313_df = r313_DivFrame(r313_para.advanceScaleM);
        var r313_sw = r313_AdviceStroke(4.25);
        var r313_suit = new r1_Box(r1_mix(r313_SymbolMid, r313_PictTop, 0.75), r1_mix(r313_SymbolMid, r313_PictBot, 0.75), r313_df.middle - r1_mix(r313_RightSB, r313_Width, 1 / 2) + r313_Middle, r313_df.middle + r1_mix(r313_RightSB, r313_Width, 1 / 2) - r313_Middle);
        var r313_wrap = function (r317_g) {
            var _r317_t0, _r317_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
                var _r319_t0, _r319_t1;
                r319_currentGlyph.setWidth(r313_df.width);
                r319_currentGlyph.include(r317_g, r313_AS_BASE);
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("heartSuit", 9829, r313_wrap(r313_HeartShapeImpl(r313_suit, 0, 0, 0)));
        r313_xn$GlyphSaveSink$2Lrc4b.save("whiteHeartSuit", 9825, r313_wrap(r313_difference(r313_xn$referglyph$1aao("heartSuit"), r313_HeartShapeImpl(r313_suit, r313_sw, 1.75, 0.8))));
        r313_xn$GlyphSaveSink$2Lrc4b.save("spadeSuit", 9824, r313_wrap(r313_union(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
            var _r327_t0, _r327_t1;
            r327_currentGlyph.include(r313_HeartShapeImpl(r313_suit.withTop(r313_suit.mixY(1 / 0.975)), 0, 0, 0));
            r327_currentGlyph.include(r313_Ungizmo());
            r327_currentGlyph.include(r313_Translate(-r313_suit.xMid, -r313_suit.bottom));
            r327_currentGlyph.include(r313_Scale(1, -0.75));
            r327_currentGlyph.include(r313_Translate(r313_suit.xMid, r313_suit.top));
            r327_currentGlyph.include(r313_Regizmo());
            return void 0;
        })), r313_HBar.b(r1_mix(r313_df.leftSB, r313_df.rightSB, 0.25), r1_mix(r313_df.rightSB, r313_df.leftSB, 0.25), r313_suit.bottom, r313_sw), r313_VBar.m(r313_suit.xMid, r313_suit.bottom, r313_suit.mixY(1 - 0.75 * 0.75), r313_sw))));
        r313_xn$GlyphSaveSink$2Lrc4b.save("whiteSpadeSuit", 9828, r313_wrap(r313_difference(r313_xn$referglyph$1aao("spadeSuit"), r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
            var _r337_t0, _r337_t1;
            r337_currentGlyph.include(r313_HeartShapeImpl(r313_suit.withTop(r313_suit.mixY(1 / 0.975)), r313_sw, 2, 0));
            r337_currentGlyph.include(r313_Ungizmo());
            r337_currentGlyph.include(r313_Translate(-r313_suit.xMid, -r313_suit.bottom));
            r337_currentGlyph.include(r313_Scale(1, -0.75));
            r337_currentGlyph.include(r313_Translate(r313_suit.xMid, r313_suit.top));
            r337_currentGlyph.include(r313_Regizmo());
            return void 0;
        })))));
        var r313_clubTopY = r313_suit.mixY(0.78);
        var r313_clubTriangleHeight = (r313_suit.top - r313_suit.bottom) * 0.3;
        var r313_ClubTriangles = function (r344_r) {
            var _r344_t0, _r344_t1;
            return r313_union(r313_RingAt(r313_suit.xMid, r313_clubTopY, r344_r), r313_RingAt(r313_suit.xMid - r313_clubTriangleHeight / Math.sqrt(3), r313_clubTopY - r313_clubTriangleHeight, r344_r), r313_RingAt(r313_suit.xMid + r313_clubTriangleHeight / Math.sqrt(3), r313_clubTopY - r313_clubTriangleHeight, r344_r), r313_xn$spirooutline$1aao(r313_corner(r313_suit.xMid, r313_clubTopY), r313_corner(r313_suit.xMid - r313_clubTriangleHeight / Math.sqrt(3), r313_clubTopY - r313_clubTriangleHeight), r313_corner(r313_suit.xMid + r313_clubTriangleHeight / Math.sqrt(3), r313_clubTopY - r313_clubTriangleHeight)));
        };
        var r313_ClubShape = function (r345_r) {
            var _r345_t0, _r345_t1;
            return r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, r313_union(r313_ClubTriangles(r345_r), r313_HBar.b(r1_mix(r313_df.leftSB, r313_df.rightSB, 0.25), r1_mix(r313_df.rightSB, r313_df.leftSB, 0.25), r313_suit.bottom, r313_sw), r313_VBar.m(r313_suit.xMid, r313_suit.bottom, r313_suit.mixY(0.45), r313_sw)));
        };
        var r313_circleRadius = (r313_suit.top - r313_suit.bottom) * 0.18;
        r313_xn$GlyphSaveSink$2Lrc4b.save("clubSuit", 9827, r313_wrap(r313_ClubShape(r313_circleRadius)));
        r313_xn$GlyphSaveSink$2Lrc4b.save("whiteClubSuit", 9831, r313_wrap(new r313_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
            var _r350_t0, _r350_t1;
            var r350_ro = r313_circleRadius + r313_sw / 2;
            var r350_ri = r313_circleRadius - r313_sw / 2;
            r350_currentGlyph.include(r313_difference(r313_ClubShape(r350_ro), r313_ClubTriangles(r350_ri)));
            return void 0;
        })));
        r313_xn$GlyphSaveSink$2Lrc4b.save("diamondSuit", 9830, r313_wrap(r313_xn$spirooutline$1aao(r313_corner(r313_suit.xMid, r313_suit.top), r313_corner(r313_suit.right - r313_O, r313_SymbolMid), r313_corner(r313_suit.xMid, r313_suit.bottom), r313_corner(r313_suit.left + r313_O, r313_SymbolMid))));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("whiteDiamondSuit", 9826, r313_wrap(r313_intersection(r313_xn$referglyph$1aao("diamondSuit"), r313_union(r313_dispiro(r313_widths.rhs(r313_sw), r313_flat(r313_suit.xMid, r313_suit.top), r313_curl(r313_suit.right - r313_O, r313_SymbolMid)), r313_dispiro(r313_widths.rhs(r313_sw), r313_flat(r313_suit.right - r313_O, r313_SymbolMid), r313_curl(r313_suit.xMid, r313_suit.bottom)), r313_dispiro(r313_widths.rhs(r313_sw), r313_flat(r313_suit.xMid, r313_suit.bottom), r313_curl(r313_suit.left + r313_O, r313_SymbolMid)), r313_dispiro(r313_widths.rhs(r313_sw), r313_flat(r313_suit.left + r313_O, r313_SymbolMid), r313_curl(r313_suit.xMid, r313_suit.top))))));
    });
    return void 0;
});


