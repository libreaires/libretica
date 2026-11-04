"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
import * as _s0_t2 from "../meta/aesthetics.mjs";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_TieMark = _r1_t9.TieMark;
var r1_AnyDerivingCv = _r1_t9.AnyDerivingCv;
var r1_ScheduleLeaningMark = _r1_t9.ScheduleLeaningMark;
var r1_LeaningMark = _r1_t9.LeaningMark;
var r1_LeaningMarkSpacer = _r1_t9.LeaningMarkSpacer;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var r1_Set = Set;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
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
    r314_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r314_xn$Capture_Ext$2Lrc2b, "Mark-Doppelganger", function (r315_xn$Capture$2Lrc8, r315_xn$ExportCapture$2Lrc4b) {
        var _r315_t8, _r315_t9, _r315_t10, _r315_tag11;
        var _r315_t0 = r315_xn$Capture$2Lrc8;
        var r315_xn$GlyphSaveSink$2Lrc4b = _r315_t0["$GlyphSaveSink$"];
        var r315_xn$NamedParameterPair$2Lrc9b = _r315_t0["$NamedParameterPair$"];
        var r315_xn$Exec$2Lrc5 = _r315_t0["$Exec$"];
        var r315_glyphStore = _r315_t0.glyphStore;
        var r315_AS_BASE = _r315_t0.AS_BASE;
        var r315_ALSO_METRICS = _r315_t0.ALSO_METRICS;
        var _r315_t1 = r315_xn$Capture$2Lrc8.Metrics;
        var _r315_t2 = r315_xn$Capture$2Lrc8.SpiroFns;
        var _r315_t3 = r315_xn$Capture$2Lrc8.SpiroFns;
        var r315_xn$decor$0cao = _r315_t3["decor@"];
        var r315_xn$decor$0cao1 = _r315_t3["decor@@"];
        var r315_xn$decor$0cao11 = _r315_t3["decor@@@"];
        var _r315_t4 = r315_xn$Capture$2Lrc8.BooleFns;
        var _r315_t5 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r315_t6 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r315_xn$queryglyph$1aao = _r315_t6["query-glyph"];
        var r315_xn$referglyph$1aao = _r315_t6["refer-glyph"];
        var r315_DeriveMeshT = _r315_t6.DeriveMeshT;
        var _r315_t7 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r315_TieAnchorMap = _r315_t7.TieAnchorMap;
        var r315_LeaningAnchorMap = _r315_t7.LeaningAnchorMap;
        var r315_DeriveMarkChange = function (r319_gr, r319_gn, r319_akFrom, r319_akTo) {
            var _r319_t0, _r319_t1;
            return r315_DeriveMeshT([r319_gn], r1_AnyDerivingCv, function (r320_gns) {
                var _r320_t0, _r320_t1;
                var r320_srcGn = r320_gns[0];
                var r320_src = r315_xn$queryglyph$1aao(r320_srcGn);
                var r320_toGN = r319_gr.amendName(r320_srcGn);
                if (!r315_xn$queryglyph$1aao(r320_toGN)) r315_xn$GlyphSaveSink$2Lrc4b.save(r320_toGN, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
                    var _r323_t0, _r323_t1;
                    r323_currentGlyph.include(r315_xn$referglyph$1aao(r320_srcGn), r315_AS_BASE, r315_ALSO_METRICS);
                    r323_currentGlyph.markAnchors[r319_akTo] = r323_currentGlyph.markAnchors[r319_akFrom];
                    r323_currentGlyph.deleteMarkAnchor(r319_akFrom);
                    r323_currentGlyph.baseAnchors[r319_akTo] = r323_currentGlyph.baseAnchors[r319_akFrom];
                    r323_currentGlyph.deleteBaseAnchor(r319_akFrom);
                    return void 0;
                }));
                r320_src.addVariantForRecursiveBuild(r315_xn$queryglyph$1aao(r320_toGN));
                r319_gr.set(r320_src, r320_toGN);
                return r320_toGN;
            });
        };
        var r315_DeriveSpacer = function (r325_gr, r325_gn) {
            var _r325_t0, _r325_t1;
            return r315_DeriveMeshT([r325_gn], r1_AnyDerivingCv, function (r326_gns) {
                var _r326_t0, _r326_t1;
                var r326_srcGn = r326_gns[0];
                var r326_src = r315_xn$queryglyph$1aao(r326_srcGn);
                var r326_toGN = r325_gr.amendName(r326_srcGn);
                if (!r315_xn$queryglyph$1aao(r326_toGN)) r315_xn$GlyphSaveSink$2Lrc4b.save(r326_toGN, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                    var _r329_t0, _r329_t1;
                    r329_currentGlyph.include(r315_xn$referglyph$1aao(r326_srcGn), r315_AS_BASE, r315_ALSO_METRICS);
                    r329_currentGlyph.clearGeometry();
                    return void 0;
                }));
                r326_src.addVariantForRecursiveBuild(r315_xn$queryglyph$1aao(r326_toGN));
                r325_gr.set(r326_src, r326_toGN);
                return r326_toGN;
            });
        };
        return (function () {
            var r332_gn, r332_g, _r332_t2, _r332_t4;
            var r332_PickTieMarkClasses = function (r333_g) {
                var r333_akFrom, r333_akTo, _r333_t3, _r333_t4, _r333_t5;
                var _r333_t0 = r315_TieAnchorMap;
                var _r333_t1 = _r333_t0.length;
                var _r333_t2 = 0;
                while (_r333_t2 < _r333_t1) {
                    _r333_t3 = _r333_t0[_r333_t2];
                    r333_akFrom = _r333_t3[0];
                    r333_akTo = _r333_t3[1];
                    if (r333_g.markAnchors[r333_akFrom]) return [r333_akFrom, r333_akTo];
                    _r333_t2 = _r333_t2 + 1;
                }
                return null;
            };
            var r332_DeriveTieMarks = function (r335_gn, r335_g) {
                var _r335_t0, _r335_t1;
                var r335_cls = r332_PickTieMarkClasses(r335_g);
                return r335_cls ? r315_DeriveMarkChange(r1_TieMark, r335_gn, r335_cls[0], r335_cls[1]) : void 0;
            };
            var r332_PickLeaningMarkClasses = function (r336_g) {
                var r336_akFrom, r336_akTo, _r336_t3, _r336_t4, _r336_t5;
                var _r336_t0 = r315_LeaningAnchorMap;
                var _r336_t1 = _r336_t0.length;
                var _r336_t2 = 0;
                while (_r336_t2 < _r336_t1) {
                    _r336_t3 = _r336_t0[_r336_t2];
                    r336_akFrom = _r336_t3[0];
                    r336_akTo = _r336_t3[1];
                    if (r1_ScheduleLeaningMark.get(r336_g) && r336_g.markAnchors[r336_akFrom]) return [r336_akFrom, r336_akTo];
                    _r336_t2 = _r336_t2 + 1;
                }
                return null;
            };
            var r332_DeriveLeaningMark = function (r338_gn, r338_g) {
                var _r338_t0, _r338_t1;
                var r338_cls = r332_PickLeaningMarkClasses(r338_g);
                return r338_cls ? (r315_DeriveMarkChange(r1_LeaningMark, r338_gn, r338_cls[0], r338_cls[1]), r315_DeriveSpacer(r1_LeaningMarkSpacer, r338_gn)) : void 0;
            };
            var _r332_t0 = r315_glyphStore.namedEntries()[Symbol.iterator]();
            var _r332_t1 = void 0;
            var _r332_t3 = !(_r332_t1 = _r332_t0.next()).done;
            while (_r332_t3) {
                _r332_t4 = (_r332_t2 = _r332_t1.value, r332_gn = _r332_t2[0], r332_g = _r332_t2[1], r332_DeriveTieMarks(r332_gn, r332_g), r332_DeriveLeaningMark(r332_gn, r332_g));
                _r332_t3 = !(_r332_t1 = _r332_t0.next()).done;
            }
            return _r332_t4;
        })();
    });
    return void 0;
});


