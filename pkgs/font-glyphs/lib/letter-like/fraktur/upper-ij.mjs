"use strict";
var _s0_t0;
export {_s0_t0 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t0 = r1_apply = function () {
    var r306_block, _r306_t4, _r306_t6;
    var _r306_t3 = this;
    var _r306_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r306_t1 = _r306_t0.length;
    var _r306_t2 = 0;
    var _r306_t5 = _r306_t2 < _r306_t1;
    while (_r306_t5) {
        _r306_t6 = (r306_block = _r306_t0[_r306_t2], r306_block(_r306_t3), _r306_t2 = _r306_t2 + 1);
        _r306_t5 = _r306_t2 < _r306_t1;
    }
    return _r306_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r310_xn$Capture_Ext$2Lrc2b) {
    var _r310_t0, _r310_t1;
    r310_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r310_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Upper-IJ", function (r311_xn$Capture$2Lrc8, r311_xn$ExportCapture$2Lrc4b) {
        var _r311_t10, _r311_t11;
        var _r311_t0 = r311_xn$Capture$2Lrc8;
        var r311_xn$GlyphSaveSink$2Lrc4b = _r311_t0["$GlyphSaveSink$"];
        var r311_xn$NamedParameterPair$2Lrc9b = _r311_t0["$NamedParameterPair$"];
        var r311_xn$Exec$2Lrc5 = _r311_t0["$Exec$"];
        var _r311_t1 = r311_xn$Capture$2Lrc8.Metrics;
        var r311_CAP = _r311_t1.CAP;
        var r311_Descender = _r311_t1.Descender;
        var r311_O = _r311_t1.O;
        var r311_OX = _r311_t1.OX;
        var r311_SHook = _r311_t1.SHook;
        var r311_ArchDepthA = _r311_t1.ArchDepthA;
        var _r311_t2 = r311_xn$Capture$2Lrc8.SpiroFns;
        var r311_g4 = _r311_t2.g4;
        var r311_g2 = _r311_t2.g2;
        var r311_end = _r311_t2.end;
        var _r311_t3 = r311_xn$Capture$2Lrc8.SpiroFns;
        var r311_xn$decor$0cao = _r311_t3["decor@"];
        var r311_xn$decor$0cao1 = _r311_t3["decor@@"];
        var r311_xn$decor$0cao11 = _r311_t3["decor@@@"];
        var _r311_t4 = r311_xn$Capture$2Lrc8.BooleFns;
        var _r311_t5 = r311_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r311_t6 = r311_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r311_HookStart = _r311_t6.HookStart;
        var r311_HookEnd = _r311_t6.HookEnd;
        var _r311_t7 = r311_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r311_UpperDf = _r311_t7.UpperDf;
        var r311_S = _r311_t7.S;
        var r311_F = _r311_t7.F;
        var r311_T = _r311_t7.T;
        var r311_xn$frakturstroke$3qIs = _r311_t7["fraktur-stroke"];
        var r311_xn$changepen$7Hrq = _r311_t7["change-pen"];
        var _r311_t8 = r311_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r311_DecoSizeX = _r311_t8.DecoSizeX;
        var r311_DecoSizeY = _r311_t8.DecoSizeY;
        var r311_SlopeA = _r311_t8.SlopeA;
        var r311_SlopeB = _r311_t8.SlopeB;
        var _r311_t9 = r311_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Fraktur-Common"].resolve();
        var r311_Wave = _r311_t9.Wave;
        var r311_FHook = _r311_t9.FHook;
        var r311_PHexTop = _r311_t9.PHexTop;
        var r311_PHexBot = _r311_t9.PHexBot;
        var r311_TopStroke = function (r317_df) {
            var _r317_t0, _r317_t1;
            return new r311_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
                var _r319_t0, _r319_t1, _r319_t2, _r319_t3;
                var r319_iBox = r311_S.box(r311_CAP, 0, r317_df.leftSB, r317_df.rightSB);
                r319_currentGlyph.include((_r319_t0 = r319_iBox.top, _r319_t1 = r319_iBox.left, r311_xn$frakturstroke$3qIs(r311_S, r311_g2.ld.start(r319_iBox.right, _r319_t0), r311_xn$decor$0cao(r311_Wave.h(r311_O)), r311_g2.ld.end(_r319_t1, _r319_t0 - r311_Wave.DepthY, r311_xn$changepen$7Hrq(r311_F)), r311_xn$decor$0cao(r311_Wave.vc(-r311_Wave.DepthX)), r311_g2.ld.end(_r319_t1, r319_iBox.yp(0.625) - 2 * r311_F.thick))));
                return void 0;
            });
        };
        var r311_BottomStroke = function (r324_df, r324_bot, r324_archScalar) {
            var _r324_t0, _r324_t1;
            return new r311_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                var _r326_t0, _r326_t1, _r326_t2, _r326_t3;
                var r326_gap = 2.5 * r311_Wave.DepthY + 1 * r311_S.thick;
                var r326_jBox = r311_S.box(r311_S.yt(r311_CAP - r326_gap), r324_bot, r324_df.leftSB, r324_df.rightSB);
                var r326_ada1 = 0.6 * r324_archScalar * r311_ArchDepthA;
                var r326_ada2 = r324_archScalar * r311_ArchDepthA;
                r326_currentGlyph.include((_r326_t0 = r311_T.connT(r311_S, r326_jBox.top), _r326_t1 = r326_jBox.bot, r311_xn$frakturstroke$3qIs(r311_S, r311_g4(r311_T.connR(r311_S, r326_jBox.right), _r326_t0 - r311_FHook, r311_xn$changepen$7Hrq(r311_T)), r311_HookStart(new r311_xn$NamedParameterPair$2Lrc9b("sw", r311_S.thick), _r326_t0), r311_g4(r326_jBox.xp(0.6) - r311_S.thick, r326_jBox.top - r326_ada1, r311_xn$changepen$7Hrq(r311_S)), r311_g4(r326_jBox.right - r311_OX, r326_jBox.bot + r326_ada2), r311_HookEnd(new r311_xn$NamedParameterPair$2Lrc9b("sw", r311_S.thick), _r326_t1), r311_g2(r326_jBox.left, _r326_t1 + r311_SHook))));
                return void 0;
            });
        };
        r311_xn$GlyphSaveSink$2Lrc4b.save("frak/I", 8465, new r311_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
            var _r333_t0, _r333_t1;
            var r333_df = r333_currentGlyph.include(r311_UpperDf(1));
            r333_currentGlyph.include(r333_df.markSet.capital());
            r333_currentGlyph.include(r311_TopStroke(r333_df));
            r333_currentGlyph.include(r311_BottomStroke(r333_df, 0, 0.75));
            return void 0;
        }));
        return r311_xn$GlyphSaveSink$2Lrc4b.save("frak/J", 120077, new r311_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
            var _r340_t0, _r340_t1;
            var r340_df = r340_currentGlyph.include(r311_UpperDf(1));
            r340_currentGlyph.include(r340_df.markSet.capDesc());
            r340_currentGlyph.include(r311_TopStroke(r340_df));
            r340_currentGlyph.include(r311_BottomStroke(r340_df, r311_Descender, 1));
            return void 0;
        }));
    });
    return void 0;
});


