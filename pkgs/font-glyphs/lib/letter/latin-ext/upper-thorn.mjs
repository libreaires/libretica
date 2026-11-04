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
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-Thorn", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_Body, r312_doST, r312_doSB, _r312_t12, _r312_t13, _r312_t14, _r312_t15, _r312_tag16;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_AS_BASE = _r312_t0.AS_BASE;
        var r312_ALSO_METRICS = _r312_t0.ALSO_METRICS;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_OX = _r312_t1.OX;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_YSmoothMidR = _r312_t1.YSmoothMidR;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
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
        var r312_VBar = _r312_t5.VBar;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r312_LeaningAnchor = _r312_t7.LeaningAnchor;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r312_BowlXDepth = _r312_t8.BowlXDepth;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_LetterBarOverlay = _r312_t9.LetterBarOverlay;
        var r312_SerifFrame = _r312_t9.SerifFrame;
        var r312_kSB = 1.25;
        var r312_xThornBarLeft = r1_mix(0, r312_SB, r312_kSB);
        var r312_yThornBowlBot = function (r318_top, r318_slab) {
            var _r318_t0, _r318_t1;
            return r1_mix(0, r318_top, 0.19) + (r318_slab ? 0.375 : 0) * r312_Stroke;
        };
        var r312_yThornBowlTop = function (r319_top, r319_slab) {
            var _r319_t0, _r319_t1;
            return r319_top - r312_yThornBowlBot(r319_top, r319_slab);
        };
        var r312_yThornBowlAsymmetricBot = function (r320_top, r320_slab) {
            var _r320_t0, _r320_t1;
            return r1_mix(0, r320_top, 0.25) + (r320_slab ? 0.125 : 0) * r312_Stroke;
        };
        var r312_yThornBowlAsymmetricTop = function (r321_top, r321_slab) {
            var _r321_t0, _r321_t1;
            return r321_top - r1_mix(0, r312_yThornBowlAsymmetricBot(r321_top, r321_slab), 0.7) + (r321_slab ? -0.125 : +0.25) * r312_Stroke;
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r323_t0, _r323_t1;
            return {
                "ThornShapeImpl": r312_ThornShapeImpl
            };
        });
        var r312_ThornShapeImpl = function (r324_top, r324_slabTop, r324_slabBot, r324_yBowlBot, r324_yBowlTop) {
            var _r324_t0, _r324_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                var r326_sf, _r326_t0, _r326_t1;
                var r326_xTurn = Math.max(r312_RightSB - r312_BowlXDepth(r324_yBowlTop, r324_yBowlBot, r312_xThornBarLeft, r312_RightSB, r312_Stroke), r312_xThornBarLeft + r312_HSwToV(r312_Stroke));
                r326_currentGlyph.include(r312_dispiro(r312_widths.rhs(), r312_flat(r312_xThornBarLeft, r324_yBowlTop, r312_heading(r312_Rightward)), r312_curl(r312_Arch["adjust-x"].top(r326_xTurn), r324_yBowlTop), r312_archv(), r312_g4(r312_RightSB - r312_OX, r312_YSmoothMidR(r324_yBowlTop, r324_yBowlBot, r312_ArchDepthA, r312_ArchDepthB)), r312_arcvh(), r312_flat(r312_Arch["adjust-x"].bot(r326_xTurn), r324_yBowlBot), r312_curl(r312_xThornBarLeft, r324_yBowlBot, r312_heading(r312_Leftward))));
                r326_currentGlyph.include(r312_VBar.l(r312_xThornBarLeft, 0, r324_top));
                if (r324_slabTop) {
                    r326_sf = r312_SerifFrame(r324_top, 0, r312_xThornBarLeft, r312_RightSB);
                    if (r324_slabBot) r326_currentGlyph.include(new r312_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                        var _r331_t0, _r331_t1;
                        r331_currentGlyph.include(r326_sf.lt.fullSide, true, true);
                        r331_currentGlyph.include(r326_sf.lb.fullSide);
                        return void 0;
                    })); else r326_currentGlyph.include(r326_sf.lt.outer);
                }
                r326_currentGlyph.include(r312_LeaningAnchor.Above.VBar.l(r312_xThornBarLeft));
                r326_currentGlyph.include(r312_LeaningAnchor.Below.VBar.l(r312_xThornBarLeft));
                return void 0;
            });
        };
        var r312_ThornShape = function (r337_top, r337_slabTop, r337_slabBot) {
            var _r337_t0, _r337_t1;
            return r312_ThornShapeImpl(r337_top, r337_slabTop, r337_slabBot, r312_yThornBowlBot(r337_top, r337_slabBot), r312_yThornBowlTop(r337_top, r337_slabBot));
        };
        var r312_ThornAsymmetricShape = function (r338_top, r338_slabTop, r338_slabBot) {
            var _r338_t0, _r338_t1;
            return r312_ThornShapeImpl(r338_top, r338_slabTop, r338_slabBot, r312_yThornBowlAsymmetricBot(r338_top, r338_slabBot), r312_yThornBowlAsymmetricTop(r338_top, r338_slabBot));
        };
        var r312_ThornConfig = r1_SuffixCfg.weave({
            "": r312_ThornShape,
            "asymmetric": r312_ThornAsymmetricShape
        }, {
            "serifless": [false, false],
            "motionSerifed": [true, false],
            "serifed": [true, true]
        });
        var _r312_t10 = Object.entries(r312_ThornConfig)[Symbol.iterator]();
        var _r312_t11 = void 0;
        while (!(_r312_t11 = _r312_t10.next()).done) {
            _r312_t12 = _r312_t11.value;
            r312_suffix = _r312_t12[0];
            r312_Body = _r312_t12[1][0];
            r312_doST = _r312_t12[1][1][0];
            r312_doSB = _r312_t12[1][1][1];
            _r312_t12[1][1];
            _r312_t12[1];
            (function () {
                r312_xn$GlyphSaveSink$2Lrc4b.save("Thorn." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                    var _r344_t0, _r344_t1;
                    r344_currentGlyph.include(r312_MarkSet.capital());
                    r344_currentGlyph.include(r312_Body(r312_CAP, r312_doST, r312_doSB));
                    return void 0;
                }));
                return r312_Body !== r312_ThornAsymmetricShape ? r312_xn$GlyphSaveSink$2Lrc4b.save("ThornStroke." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                    var _r349_t0, _r349_t1;
                    r349_currentGlyph.include(r312_MarkSet.capital());
                    r349_currentGlyph.include(r312_ThornShapeImpl(r312_CAP, r312_doST, r312_doSB, r312_CAP - r312_yThornBowlAsymmetricTop(r312_CAP, r312_doSB), r312_CAP - r312_yThornBowlAsymmetricBot(r312_CAP, r312_doST)));
                    r349_currentGlyph.include(r312_LetterBarOverlay.l.in(new r312_xn$NamedParameterPair$2Lrc9b("x", r312_xThornBarLeft), new r312_xn$NamedParameterPair$2Lrc9b("top", r312_CAP - (r312_doST ? r312_Stroke : 0)), new r312_xn$NamedParameterPair$2Lrc9b("bot", r312_CAP - r312_yThornBowlAsymmetricBot(r312_CAP, r312_doST))));
                    return void 0;
                })) : r312_xn$GlyphSaveSink$2Lrc4b.save("ThornStrokeBottom." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                    var _r358_t0, _r358_t1;
                    r358_currentGlyph.include(r312_xn$referglyph$1aao("Thorn." + r312_suffix), r312_AS_BASE, r312_ALSO_METRICS);
                    r358_currentGlyph.include(r312_LetterBarOverlay.l.in(new r312_xn$NamedParameterPair$2Lrc9b("x", r312_xThornBarLeft), new r312_xn$NamedParameterPair$2Lrc9b("bot", r312_doSB ? r312_Stroke : 0), new r312_xn$NamedParameterPair$2Lrc9b("top", r312_yThornBowlAsymmetricBot(r312_CAP, r312_doSB))));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("Thorn", 222);
        r312_xn$selectvariant$7Hrq("ThornStroke", 42852);
        return r312_xn$selectvariant$7Hrq("ThornStrokeBottom", 42854);
    });
    return void 0;
});


