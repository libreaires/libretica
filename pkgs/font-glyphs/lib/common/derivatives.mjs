"use strict";
import * as _s0_t0 from "util";
import * as _s0_t1 from "@iosevka/util";
import * as _s0_t2 from "@iosevka/glyph/relation";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var r1_util = _s0_t0;
var _r1_t8 = _s0_t1;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t2;
var r1_Cv = _r1_t9.Cv;
var r1_AnyCv = _r1_t9.AnyCv;
var r1_AnyDerivingCv = _r1_t9.AnyDerivingCv;
var r1_Dotless = _r1_t9.Dotless;
var r1_Zero = _r1_t9.Zero;
var r1_SvInheritableRelations = _r1_t9.SvInheritableRelations;
var r1_PseudoCvDecompose = _r1_t9.PseudoCvDecompose;
var r1_getGrMesh = _r1_t9.getGrMesh;
var r1_Map = Map;
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
    r314_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r314_xn$Capture_Ext$2Lrc2b, "Common-Derivatives", function (r315_xn$Capture$2Lrc8, r315_xn$ExportCapture$2Lrc4b) {
        var r315_NameUni, _r315_t5, _r315_t6;
        var _r315_t0 = r315_xn$Capture$2Lrc8;
        var r315_xn$GlyphSaveSink$2Lrc4b = _r315_t0["$GlyphSaveSink$"];
        var r315_xn$NamedParameterPair$2Lrc9b = _r315_t0["$NamedParameterPair$"];
        var r315_xn$Exec$2Lrc5 = _r315_t0["$Exec$"];
        var r315_para = _r315_t0.para;
        var r315_glyphStore = _r315_t0.glyphStore;
        var r315_AS_BASE = _r315_t0.AS_BASE;
        var r315_ALSO_METRICS = _r315_t0.ALSO_METRICS;
        var _r315_t1 = r315_xn$Capture$2Lrc8.Metrics;
        var r315_Scale = _r315_t1.Scale;
        var r315_Translate = _r315_t1.Translate;
        var r315_TanSlope = _r315_t1.TanSlope;
        var _r315_t2 = r315_xn$Capture$2Lrc8.SpiroFns;
        var _r315_t3 = r315_xn$Capture$2Lrc8.SpiroFns;
        var r315_xn$decor$0cao = _r315_t3["decor@"];
        var r315_xn$decor$0cao1 = _r315_t3["decor@@"];
        var r315_xn$decor$0cao11 = _r315_t3["decor@@@"];
        var _r315_t4 = r315_xn$Capture$2Lrc8.BooleFns;
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r317_t0, _r317_t1;
            return {
                "query-glyph": r315_xn$queryglyph$1aao
            };
        });
        var r315_xn$queryglyph$1aao = function (r318_id) {
            var _r318_t0, _r318_t1;
            if (!r318_id) return void 0;
            return r315_glyphStore.queryByName(r318_id);
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r320_t0, _r320_t1;
            return {
                "refer-glyph": r315_xn$referglyph$1aao
            };
        });
        var r315_xn$referglyph$1aao = function (r321_id) {
            var _r321_t0, _r321_t1;
            return new r315_ReferGlyph(r321_id);
        };
        var r315_ReferGlyph = (function (r323_Super) {
            var _r323_t0, _r323_t1;
            var r323_Constructor = function () {
                var _r324_t0, _r324_t1;
                return void 0;
            };
            var r323_Type = function () {
                var _r325_t0 = this;
                var _r325_t1 = arguments;
                r323_Constructor.apply(_r325_t0, _r325_t1);
                return void 0;
            };
            var r323_Symbol = Symbol;
            (function () {
                var r327_protectedTerms, _r327_t0, _r327_t1;
                r323_Type.protectedTerms = r327_protectedTerms = Object.create(r323_Super.protectedTerms || null);
                r323_Constructor = function (r355_id) {
                    var _r355_t1;
                    var _r355_t0 = this;
                    _r355_t0.id = r355_id;
                    return void 0;
                };
                r323_Type.prototype.applyToGlyph = function (r361_target, r361_copyAnchors, r361_copyWidth) {
                    var _r361_t1;
                    var _r361_t0 = this;
                    var r361_goal = r315_xn$queryglyph$1aao(_r361_t0.id);
                    if (!r361_goal) throw new Error("Cannot find glyph '" + _r361_t0.id + "'");
                    return r361_target.includeGlyph(r361_goal, r361_copyAnchors, r361_copyWidth);
                };
                return void 0;
            }).call(r323_Type.prototype);
            return r323_Type;
        })(Object);
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r368_t0, _r368_t1;
            return {
                "select-variant": r315_xn$selectvariant$7Hrq
            };
        });
        var r315_xn$selectvariant$7Hrq = function () {
            var _r369_t5;
            var _r369_t6 = arguments;
            var r369_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r369_t6, 0);
            var _r369_t0 = [];
            var _r369_t1 = 0;
            while (_r369_t1 < r369_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r369_xn$flexarguments$2Lrc7uIe5[_r369_t1] instanceof r315_xn$NamedParameterPair$2Lrc9b)) _r369_t0.push(r369_xn$flexarguments$2Lrc7uIe5[_r369_t1]);
                _r369_t1 = _r369_t1 + 1;
            }
            var _r369_t2 = r369_xn$flexarguments$2Lrc7uIe5;
            var _r369_t3 = _r369_t2.length;
            var _r369_t4 = 0;
            while (_r369_t4 < _r369_t3) {
                _r369_t1 = _r369_t2[_r369_t4];
                if (_r369_t1 && _r369_t1 instanceof r315_xn$NamedParameterPair$2Lrc9b && _r369_t1.left === "name") r369_name = _r369_t1.right;
                if (_r369_t1 && _r369_t1 instanceof r315_xn$NamedParameterPair$2Lrc9b && _r369_t1.left === "unicode") r369_unicode = _r369_t1.right;
                if (_r369_t1 && _r369_t1 instanceof r315_xn$NamedParameterPair$2Lrc9b && _r369_t1.left === "shapeFrom") r369_shapeFrom = _r369_t1.right;
                if (_r369_t1 && _r369_t1 instanceof r315_xn$NamedParameterPair$2Lrc9b && _r369_t1.left === "follow") r369_follow = _r369_t1.right;
                _r369_t4 = _r369_t4 + 1;
            }
            var r369_name = r1_fallback(r369_name, _r369_t0[0]);
            var r369_unicode = r1_fallback(r369_unicode, _r369_t0[1]);
            var r369_shapeFrom = r1_fallback(r369_shapeFrom, _r369_t0[2], r369_name);
            var r369_follow = r1_fallback(r369_follow, _r369_t0[3], r369_name);
            if (!r315_xn$GlyphSaveSink$2Lrc4b.glyphIsNeeded(r369_name)) return void 0;
            var r369_atlas = r315_queryCvAtlas(r315_para, r369_follow);
            if (!r369_atlas.targetSuffix) throw new Error("Variant for " + r369_atlas.primarySelectorName + " is not assigned.");
            var r369_g = r315_xn$GlyphSaveSink$2Lrc4b.save(r369_name, r369_unicode, new r315_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                var r377_gr, r377_v, _r377_t3, _r377_t4;
                var r377_fromGlyphName = r369_shapeFrom + "." + r369_atlas.targetSuffix;
                var r377_fromGlyph = r315_xn$queryglyph$1aao(r377_fromGlyphName);
                if (!r377_fromGlyph) throw new Error("Cannot find glyph '" + r377_fromGlyphName + "'");
                r377_currentGlyph.include(r377_fromGlyph, r315_AS_BASE, r315_ALSO_METRICS);
                r377_currentGlyph.cloneRankFromGlyph(r377_fromGlyph);
                var _r377_t0 = r1_SvInheritableRelations;
                var _r377_t1 = _r377_t0.length;
                var _r377_t2 = 0;
                while (_r377_t2 < _r377_t1) {
                    r377_gr = _r377_t0[_r377_t2];
                    r377_v = r377_gr.get(r377_fromGlyph);
                    if (r377_v) r377_gr.set(r377_currentGlyph, r377_v);
                    _r377_t2 = _r377_t2 + 1;
                }
                return void 0;
            }));
            return r315_applyCvForSingleAtlas(r369_g, r369_shapeFrom, r369_atlas);
        };
        var r315_applyCvForSingleAtlas = function (r380_g, r380_shapeFrom, r380_atlas) {
            var r380__cv, r380_suffix, r380_variant, r380_isPrimary, r380_dstName, r380_dstGlyph, _r380_t3, _r380_t4, _r380_t5, _r380_t7;
            var _r380_t0 = r380_atlas.allVariants;
            var _r380_t1 = _r380_t0.length;
            var _r380_t2 = 0;
            var _r380_t6 = _r380_t2 < _r380_t1;
            while (_r380_t6) {
                _r380_t7 = (r380__cv = _r380_t0[_r380_t2], _r380_t3 = r380__cv, r380_suffix = _r380_t3.suffix, r380_variant = _r380_t3.variant, r380_isPrimary = _r380_t3.isPrimary, r380_dstName = r380_shapeFrom + "." + r380_suffix, r380_dstGlyph = r315_xn$queryglyph$1aao(r380_dstName), r380_dstGlyph ? r380_g.addVariantForRecursiveBuild(r380_dstGlyph) : void 0, r315_para.enableCvSs && r380_isPrimary ? (r380_variant.set(r380_g, r380_dstName), r380_variant.nonDeriving ? r380_variant.setPreventDeriving(r380_g) : void 0) : void 0, _r380_t2 = _r380_t2 + 1);
                _r380_t6 = _r380_t2 < _r380_t1;
            }
            return _r380_t7;
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r383_t0, _r383_t1;
            return {
                "select-multi-dimensional-variant": r315_xn$selectmultidimensionalvariant$7Hrq62b
            };
        });
        var r315_xn$selectmultidimensionalvariant$7Hrq62b = function () {
            var r384_rawSelector, r384_atlas, _r384_t8;
            var _r384_t9 = arguments;
            var r384_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r384_t9, 0);
            var _r384_t0 = [];
            var _r384_t1 = 0;
            while (_r384_t1 < r384_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r384_xn$flexarguments$2Lrc7uIe5[_r384_t1] instanceof r315_xn$NamedParameterPair$2Lrc9b)) _r384_t0.push(r384_xn$flexarguments$2Lrc7uIe5[_r384_t1]);
                _r384_t1 = _r384_t1 + 1;
            }
            var _r384_t2 = r384_xn$flexarguments$2Lrc7uIe5;
            var _r384_t3 = _r384_t2.length;
            var _r384_t4 = 0;
            while (_r384_t4 < _r384_t3) {
                _r384_t1 = _r384_t2[_r384_t4];
                if (_r384_t1 && _r384_t1 instanceof r315_xn$NamedParameterPair$2Lrc9b && _r384_t1.left === "name") r384_name = _r384_t1.right;
                if (_r384_t1 && _r384_t1 instanceof r315_xn$NamedParameterPair$2Lrc9b && _r384_t1.left === "unicode") r384_unicode = _r384_t1.right;
                if (_r384_t1 && _r384_t1 instanceof r315_xn$NamedParameterPair$2Lrc9b && _r384_t1.left === "shapeFrom") r384_shapeFrom = _r384_t1.right;
                if (_r384_t1 && _r384_t1 instanceof r315_xn$NamedParameterPair$2Lrc9b && _r384_t1.left === "follows") r384_follows = _r384_t1.right;
                _r384_t4 = _r384_t4 + 1;
            }
            var r384_name = r1_fallback(r384_name, _r384_t0[0]);
            var r384_unicode = r1_fallback(r384_unicode, _r384_t0[1]);
            var r384_shapeFrom = r1_fallback(r384_shapeFrom, _r384_t0[2], r384_name);
            var r384_follows = r1_fallback(r384_follows, _r384_t0[3], [r384_name]);
            if (!r315_xn$GlyphSaveSink$2Lrc4b.glyphIsNeeded(r384_name)) return void 0;
            var r384_atlases = [];
            var _r384_t5 = r384_follows;
            var _r384_t6 = _r384_t5.length;
            var _r384_t7 = 0;
            while (_r384_t7 < _r384_t6) {
                r384_rawSelector = _r384_t5[_r384_t7];
                r384_atlas = r315_queryCvAtlas(r315_para, r384_rawSelector);
                if (!r384_atlas.targetSuffix) throw new Error("Variant for " + r384_atlas.primarySelectorName + " is not assigned.");
                r384_atlases.push(r384_atlas);
                _r384_t7 = _r384_t7 + 1;
            }
            var r384_combinedSuffix = r384_atlases.map(function (r391_a) {
                var _r391_t0, _r391_t1;
                return r391_a.targetSuffix;
            }).join(".");
            var r384_g = r315_xn$GlyphSaveSink$2Lrc4b.save(r384_name, r384_unicode, new r315_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                var r394_gr, r394_v, _r394_t3, _r394_t4;
                var r394_fromGlyphName = r384_shapeFrom + "." + r384_combinedSuffix;
                var r394_fromGlyph = r315_xn$queryglyph$1aao(r394_fromGlyphName);
                if (!r394_fromGlyph) throw new Error("Cannot find glyph '" + r394_fromGlyphName + "'");
                r394_currentGlyph.include(r394_fromGlyph, r315_AS_BASE, r315_ALSO_METRICS);
                r394_currentGlyph.cloneRankFromGlyph(r394_fromGlyph);
                var _r394_t0 = r1_SvInheritableRelations;
                var _r394_t1 = _r394_t0.length;
                var _r394_t2 = 0;
                while (_r394_t2 < _r394_t1) {
                    r394_gr = _r394_t0[_r394_t2];
                    r394_v = r394_gr.get(r394_fromGlyph);
                    if (r394_v) r394_gr.set(r394_currentGlyph, r394_v);
                    _r394_t2 = _r394_t2 + 1;
                }
                return void 0;
            }));
            return r315_applyCvForMultipleAtlases(r384_g, r384_shapeFrom, r384_atlases);
        };
        var r315_applyCvForMultipleAtlases = function (r397_g, r397_shapeFrom, r397_atlases) {
            var r397_product, r397_fromGlyphName, r397_fromGlyph, r397_i, r397_atlas, r397_cv, r397_alterProduct, r397_dstName, r397_dstGlyph, _r397_t3, _r397_t4, _r397_t5, _r397_t6, _r397_t7, _r397_t8, _r397_t9, _r397_t10, _r397_t12;
            var _r397_t0 = r315_cartesianProductOfAtlases(r397_atlases);
            var _r397_t1 = _r397_t0.length;
            var _r397_t2 = 0;
            var _r397_t11 = _r397_t2 < _r397_t1;
            while (_r397_t11) {
                r397_product = _r397_t0[_r397_t2];
                r397_fromGlyphName = r397_shapeFrom + "." + r397_product.combinedSuffix;
                r397_fromGlyph = r315_xn$queryglyph$1aao(r397_fromGlyphName);
                if (!r397_fromGlyph) throw new Error("Cannot find glyph '" + r397_fromGlyphName + "'");
                r397_g.addVariantForRecursiveBuild(r397_fromGlyph);
                if (r315_para.enableCvSs) {
                    _r397_t3 = r397_atlases.entries()[Symbol.iterator]();
                    _r397_t4 = void 0;
                    while (!(_r397_t4 = _r397_t3.next()).done) {
                        _r397_t5 = _r397_t4.value;
                        r397_i = _r397_t5[0];
                        r397_atlas = _r397_t5[1];
                        _r397_t6 = r397_atlas.allVariants;
                        _r397_t7 = _r397_t6.length;
                        _r397_t8 = 0;
                        while (_r397_t8 < _r397_t7) {
                            r397_cv = _r397_t6[_r397_t8];
                            r397_alterProduct = r397_product.alter(r397_i, r397_cv);
                            r397_dstName = r397_shapeFrom + "." + r397_alterProduct.combinedSuffix;
                            r397_dstGlyph = r315_xn$queryglyph$1aao(r397_dstName);
                            if (!r397_dstGlyph) throw new Error("Cannot find glyph '" + r397_dstName + "'");
                            r397_cv.variant.set(r397_fromGlyph, r397_dstName);
                            if (r397_cv.variant.nonDeriving) r397_cv.variant.setPreventDeriving(r397_fromGlyph);
                            if (r397_product.isTarget) {
                                r397_cv.variant.set(r397_g, r397_dstName);
                                if (r397_cv.variant.nonDeriving) r397_cv.variant.setPreventDeriving(r397_g);
                            }
                            _r397_t8 = _r397_t8 + 1;
                        }
                    }
                }
                _r397_t12 = _r397_t2 = _r397_t2 + 1;
                _r397_t11 = _r397_t2 < _r397_t1;
            }
            return _r397_t12;
        };
        var r315_CVariantProduct = (function (r402_Super) {
            var _r402_t0, _r402_t1;
            var r402_Constructor = function () {
                var _r403_t0, _r403_t1;
                return void 0;
            };
            var r402_Type = function () {
                var _r404_t0 = this;
                var _r404_t1 = arguments;
                r402_Constructor.apply(_r404_t0, _r404_t1);
                return void 0;
            };
            var r402_Symbol = Symbol;
            (function () {
                var r406_protectedTerms, _r406_t0, _r406_t1;
                r402_Type.protectedTerms = r406_protectedTerms = Object.create(r402_Super.protectedTerms || null);
                r402_Constructor = function (r434_variants) {
                    var _r434_t1;
                    var _r434_t0 = this;
                    _r434_t0.variants = r434_variants;
                    return void 0;
                };
                r402_Type.prototype.prepend = function (r440_variant) {
                    var _r440_t1;
                    var _r440_t0 = this;
                    return new r315_CVariantProduct([r440_variant].concat(_r440_t0.variants));
                };
                r402_Type.prototype.alter = function (r446_index, r446_newVariant) {
                    var _r446_t1;
                    var _r446_t0 = this;
                    var r446_newVariants = _r446_t0.variants.slice(0);
                    r446_newVariants[r446_index] = r446_newVariant;
                    return new r315_CVariantProduct(r446_newVariants);
                };
                Object.defineProperty(r402_Type.prototype, "isTarget", {
                    "get": function () {
                        var _r452_t1;
                        var _r452_t0 = this;
                        return _r452_t0.variants.every(function (r460_v) {
                            var _r460_t0, _r460_t1;
                            return r460_v.isTarget;
                        });
                    },
                    "set": void 0
                });
                Object.defineProperty(r402_Type.prototype, "combinedSuffix", {
                    "get": function () {
                        var _r461_t1;
                        var _r461_t0 = this;
                        return _r461_t0.variants.map(function (r469_v) {
                            var _r469_t0, _r469_t1;
                            return r469_v.suffix;
                        }).join(".");
                    },
                    "set": void 0
                });
                return void 0;
            }).call(r402_Type.prototype);
            return r402_Type;
        })(Object);
        var r315_cartesianProductOfAtlases = function (r470_atlases) {
            var r470_cv, r470_rest, _r470_t4, _r470_t5, _r470_t6, _r470_t7, _r470_t8;
            if (r470_atlases.length === 0) return [new r315_CVariantProduct([])];
            var _r470_t0 = r470_atlases;
            var r470_firstAtlas = _r470_t0[0];
            var r470_restAtlases = _r470_t0.slice(1);
            var r470_restProduct = r315_cartesianProductOfAtlases(r470_restAtlases);
            var r470_product = [];
            var _r470_t1 = r470_firstAtlas.allVariants;
            var _r470_t2 = _r470_t1.length;
            var _r470_t3 = 0;
            while (_r470_t3 < _r470_t2) {
                r470_cv = _r470_t1[_r470_t3];
                _r470_t4 = r470_restProduct;
                _r470_t5 = _r470_t4.length;
                _r470_t6 = 0;
                while (_r470_t6 < _r470_t5) {
                    r470_rest = _r470_t4[_r470_t6];
                    r470_product.push(r470_rest.prepend(r470_cv));
                    _r470_t6 = _r470_t6 + 1;
                }
                _r470_t3 = _r470_t3 + 1;
            }
            return r470_product;
        };
        var r315_produceAlternationsOfProduct = function (r473_atlases, r473_product) {
            var r473_i, r473_atlas, r473_cv, _r473_t2, _r473_t3, _r473_t4, _r473_t5, _r473_t6, _r473_t7;
            var r473_alternations = [];
            var _r473_t0 = r473_atlases.entries()[Symbol.iterator]();
            var _r473_t1 = void 0;
            while (!(_r473_t1 = _r473_t0.next()).done) {
                _r473_t2 = _r473_t1.value;
                r473_i = _r473_t2[0];
                r473_atlas = _r473_t2[1];
                _r473_t3 = r473_atlas.allVariants;
                _r473_t4 = _r473_t3.length;
                _r473_t5 = 0;
                while (_r473_t5 < _r473_t4) {
                    r473_cv = _r473_t3[_r473_t5];
                    r473_alternations.push([r473_i, r473_cv]);
                    _r473_t5 = _r473_t5 + 1;
                }
            }
            return r473_alternations;
        };
        var r315_CvAtlasQueryCache = new r1_Map();
        var r315_queryCvAtlas = function (r476_para, r476_rawSelector) {
            var r476_selector, r476_kPrime, r476_prime, r476_variant, r476_suffix, _r476_t3, _r476_t4, _r476_t5, _r476_t6, _r476_t7, _r476_t8, _r476_t9;
            var r476_existing = r315_CvAtlasQueryCache.get(r476_rawSelector);
            if (r476_existing) return r476_existing;
            var r476_primarySelector = r315_resolvePrimarySelector(r476_rawSelector);
            var r476_allSelectors = r315_resolveAllSelectors(r476_rawSelector);
            var r476_atlas = {
                "primarySelectorName": r476_primarySelector,
                "targetSuffix": r476_para.variantSelector[r476_primarySelector],
                "allVariants": []
            };
            var _r476_t0 = r476_allSelectors;
            var _r476_t1 = _r476_t0.length;
            var _r476_t2 = 0;
            while (_r476_t2 < _r476_t1) {
                r476_selector = _r476_t0[_r476_t2];
                _r476_t3 = r476_para.variants.primes[Symbol.iterator]();
                _r476_t4 = void 0;
                while (!(_r476_t4 = _r476_t3.next()).done) {
                    _r476_t5 = _r476_t4.value;
                    r476_kPrime = _r476_t5[0];
                    r476_prime = _r476_t5[1];
                    _r476_t6 = r476_prime.variants.values()[Symbol.iterator]();
                    _r476_t7 = void 0;
                    while (!(_r476_t7 = _r476_t6.next()).done) {
                        r476_variant = _r476_t7.value;
                        r476_suffix = r476_variant.resolveFor(r476_para, r476_selector);
                        if (r476_suffix && r476_variant.tag && r476_variant.rank) r476_atlas.allVariants.push({
                            "suffix": r476_suffix,
                            "variant": r476_variant,
                            "isPrimary": r476_selector === r476_primarySelector,
                            "isTarget": r476_selector === r476_primarySelector && r476_suffix === r476_atlas.targetSuffix
                        });
                    }
                }
                _r476_t2 = _r476_t2 + 1;
            }
            r315_CvAtlasQueryCache.set(r476_rawSelector, r476_atlas);
            return r476_atlas;
        };
        var r315_resolvePrimarySelector = function (r480_selector) {
            var _r480_t0, _r480_t1;
            if (typeof r480_selector === "string") return r480_selector;
            return r480_selector.resolveMain();
        };
        var r315_resolveAllSelectors = function (r481_selector) {
            var _r481_t0, _r481_t1;
            if (typeof r481_selector === "string") return [r481_selector];
            return r481_selector.resolveAll();
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r483_t0, _r483_t1;
            return {
                "conditional-follow": r315_xn$conditionalfollow$7VZA
            };
        });
        var r315_xn$conditionalfollow$7VZA = function (r484_c, r484_f1, r484_f2) {
            var _r484_t0, _r484_t1;
            return new r315_CConditionalFollow(r484_c, r484_f1, r484_f2);
        };
        var r315_CConditionalFollow = (function (r486_Super) {
            var _r486_t0, _r486_t1;
            var r486_Constructor = function () {
                var _r487_t0, _r487_t1;
                return void 0;
            };
            var r486_Type = function () {
                var _r488_t0 = this;
                var _r488_t1 = arguments;
                r486_Constructor.apply(_r488_t0, _r488_t1);
                return void 0;
            };
            var r486_Symbol = Symbol;
            (function () {
                var r490_protectedTerms, _r490_t0, _r490_t1;
                r486_Type.protectedTerms = r490_protectedTerms = Object.create(r486_Super.protectedTerms || null);
                r486_Constructor = function (r518_c, r518_f1, r518_f2) {
                    var _r518_t1;
                    var _r518_t0 = this;
                    _r518_t0.c = r518_c;
                    _r518_t0.f1 = r518_f1;
                    _r518_t0.f2 = r518_f2;
                    return void 0;
                };
                r486_Type.prototype.resolveMain = function () {
                    var _r524_t1;
                    var _r524_t0 = this;
                    return _r524_t0.c ? _r524_t0.f1 : _r524_t0.f2;
                };
                r486_Type.prototype.resolveAll = function () {
                    var _r530_t1;
                    var _r530_t0 = this;
                    return [_r530_t0.f1, _r530_t0.f2];
                };
                return void 0;
            }).call(r486_Type.prototype);
            return r486_Type;
        })(Object);
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r537_t0, _r537_t1;
            return {
                "link-reduced-variant": r315_xn$linkreducedvariant$5sIl8
            };
        });
        var r315_xn$linkreducedvariant$5sIl8 = function () {
            var _r538_t5;
            var _r538_t6 = arguments;
            var r538_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r538_t6, 0);
            var _r538_t0 = [];
            var _r538_t1 = 0;
            while (_r538_t1 < r538_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r538_xn$flexarguments$2Lrc7uIe5[_r538_t1] instanceof r315_xn$NamedParameterPair$2Lrc9b)) _r538_t0.push(r538_xn$flexarguments$2Lrc7uIe5[_r538_t1]);
                _r538_t1 = _r538_t1 + 1;
            }
            var _r538_t2 = r538_xn$flexarguments$2Lrc7uIe5;
            var _r538_t3 = _r538_t2.length;
            var _r538_t4 = 0;
            while (_r538_t4 < _r538_t3) {
                _r538_t1 = _r538_t2[_r538_t4];
                if (_r538_t1 && _r538_t1 instanceof r315_xn$NamedParameterPair$2Lrc9b && _r538_t1.left === "dstGid") r538_dstGid = _r538_t1.right;
                if (_r538_t1 && _r538_t1 instanceof r315_xn$NamedParameterPair$2Lrc9b && _r538_t1.left === "srcGid") r538_srcGid = _r538_t1.right;
                if (_r538_t1 && _r538_t1 instanceof r315_xn$NamedParameterPair$2Lrc9b && _r538_t1.left === "gr") r538_gr = _r538_t1.right;
                if (_r538_t1 && _r538_t1 instanceof r315_xn$NamedParameterPair$2Lrc9b && _r538_t1.left === "follow") r538_follow = _r538_t1.right;
                if (_r538_t1 && _r538_t1 instanceof r315_xn$NamedParameterPair$2Lrc9b && _r538_t1.left === "shapeFrom") r538_shapeFrom = _r538_t1.right;
                _r538_t4 = _r538_t4 + 1;
            }
            var r538_dstGid = r1_fallback(r538_dstGid, _r538_t0[0]);
            var r538_srcGid = r1_fallback(r538_srcGid, _r538_t0[1]);
            var r538_gr = r1_fallback(r538_gr, _r538_t0[2]);
            var r538_follow = r1_fallback(r538_follow, _r538_t0[3]);
            var r538_shapeFrom = r1_fallback(r538_shapeFrom, _r538_t0[4]);
            if (!r315_xn$queryglyph$1aao(r538_dstGid)) r315_xn$selectvariant$7Hrq(r538_dstGid, new r315_xn$NamedParameterPair$2Lrc9b("shapeFrom", r1_fallback(r538_shapeFrom, r538_srcGid)), new r315_xn$NamedParameterPair$2Lrc9b("follow", r1_fallback(r538_follow, r538_dstGid)));
            return r538_gr && r315_xn$queryglyph$1aao(r538_srcGid) ? r538_gr.set(r315_xn$queryglyph$1aao(r538_srcGid), r538_dstGid) : void 0;
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r546_t0, _r546_t1;
            return {
                "alias-reduced-variant": r315_xn$aliasreducedvariant$1aao8
            };
        });
        var r315_xn$aliasreducedvariant$1aao8 = function (r547_dstGid, r547_srcGid, r547_shapeGid, r547_gr) {
            var _r547_t0, _r547_t1;
            r315_alias(r547_dstGid, null, r547_shapeGid);
            return r547_gr && r315_xn$queryglyph$1aao(r547_srcGid) ? r547_gr.set(r315_xn$queryglyph$1aao(r547_srcGid), r547_dstGid) : void 0;
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r549_t0, _r549_t1;
            return {
                "DeriveMeshT": r315_DeriveMeshT
            };
        });
        var r315_DeriveMeshT = function (r550_gnSources, r550_Query, r550_Fn, r550_FnLink) {
            var r550_gr, r550_from, r550_to, r550_key, r550_gnDerivedTo, r550_gDerivedTo, r550_gndFrom, r550_gndTo, _r550_t3, _r550_t7, _r550_t8, _r550_t9;
            var r550_linksGnMap = new r1_Map();
            var r550_gndSource = r550_Fn(r550_gnSources, null, null);
            var r550_gSource = r315_xn$queryglyph$1aao(r550_gndSource);
            r550_linksGnMap.set(r315_keyOfGnList(r550_gnSources), r550_gndSource);
            var r550_mesh = r1_getGrMesh(r550_gnSources, r550_Query, r315_xn$queryglyph$1aao);
            var _r550_t0 = r550_mesh;
            var _r550_t1 = _r550_t0.length;
            var _r550_t2 = 0;
            while (_r550_t2 < _r550_t1) {
                _r550_t3 = _r550_t0[_r550_t2];
                r550_gr = _r550_t3[0];
                r550_from = _r550_t3[1];
                r550_to = _r550_t3[2];
                r550_key = r315_keyOfGnList(r550_to);
                if (!r550_linksGnMap.has(r550_key)) {
                    r550_gnDerivedTo = r550_Fn(r550_to, r550_gr, r550_from);
                    r550_linksGnMap.set(r550_key, r550_gnDerivedTo);
                    r550_gDerivedTo = r315_xn$queryglyph$1aao(r550_gnDerivedTo);
                    if (r550_gSource && r550_gDerivedTo) r550_gSource.addVariantForRecursiveBuild(r550_gDerivedTo);
                }
                _r550_t2 = _r550_t2 + 1;
            }
            var _r550_t4 = r550_mesh;
            var _r550_t5 = _r550_t4.length;
            var _r550_t6 = 0;
            while (_r550_t6 < _r550_t5) {
                _r550_t7 = _r550_t4[_r550_t6];
                r550_gr = _r550_t7[0];
                r550_from = _r550_t7[1];
                r550_to = _r550_t7[2];
                r550_gndFrom = r550_linksGnMap.get(r315_keyOfGnList(r550_from));
                r550_gndTo = r550_linksGnMap.get(r315_keyOfGnList(r550_to));
                if (r550_gndFrom && r550_gndTo && r315_xn$queryglyph$1aao(r550_gndFrom) && r315_xn$queryglyph$1aao(r550_gndTo)) {
                    r550_gr.set(r315_xn$queryglyph$1aao(r550_gndFrom), r550_gndTo);
                    if (r550_FnLink) r550_FnLink(r550_gndFrom, r550_gndTo, r550_from, r550_to);
                }
                _r550_t6 = _r550_t6 + 1;
            }
            return r550_gndSource;
        };
        var r315_keyOfGnList = function (r553_gns) {
            var _r553_t0, _r553_t1;
            return ".deriveKey{" + r553_gns.join("}{") + "}";
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r555_t0, _r555_t1;
            return {
                "derive-glyphs": r315_xn$deriveglyphs$7Hrq
            };
        });
        var r315_xn$deriveglyphs$7Hrq = function (r556_dstGid, r556_dstUnicode, r556_srcGid, r556_Fn) {
            var _r556_t0, _r556_t1;
            if (!r315_xn$GlyphSaveSink$2Lrc4b.glyphIsNeeded(r556_dstGid)) return void 0;
            return r315_DeriveMeshT([r556_srcGid], r1_AnyDerivingCv, function (r558_gns, r558_gr) {
                var _r558_t0, _r558_t1;
                var r558_gn = r558_gns[0];
                var r558_gnDst = !r558_gr ? r556_dstGid : "" + r556_dstGid + "/derive{" + r558_gn + "}";
                var r558_unicodeDst = !r558_gr ? r556_dstUnicode : null;
                r315_xn$GlyphSaveSink$2Lrc4b.save(r558_gnDst, r558_unicodeDst, r556_Fn(r558_gn, r558_gr));
                return r558_gnDst;
            });
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r561_t0, _r561_t1;
            return {
                "derive-multi-part-glyphs": r315_xn$derivemultipartglyphs$7Hrq65
            };
        });
        var r315_xn$derivemultipartglyphs$7Hrq65 = function (r562_dstGid, r562_dstUnicode, r562_gnSoruces, r562_Fn) {
            var _r562_t0, _r562_t1;
            if (!r315_xn$GlyphSaveSink$2Lrc4b.glyphIsNeeded(r562_dstGid)) return void 0;
            return r315_DeriveMeshT(r562_gnSoruces, r1_AnyDerivingCv, function (r564_gns, r564_gr) {
                var _r564_t0, _r564_t1;
                var r564_gnDst = !r564_gr ? r562_dstGid : "" + r562_dstGid + "/derive{" + r564_gns.join("}{") + "}";
                var r564_unicodeDst = !r564_gr ? r562_dstUnicode : null;
                r315_xn$GlyphSaveSink$2Lrc4b.save(r564_gnDst, r564_unicodeDst, r562_Fn(r564_gns, r564_gr));
                return r564_gnDst;
            });
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r567_t0, _r567_t1;
            return {
                "derive-composites": r315_xn$derivecomposites$7Hrq
            };
        });
        var r315_xn$derivecomposites$7Hrq = function (r568_dstGid, r568_dstUnicode, r568_srcGid) {
            var r568_part, _r568_t3;
            var _r568_t4 = arguments;
            if (!r315_xn$GlyphSaveSink$2Lrc4b.glyphIsNeeded(r568_dstGid)) return void 0;
            var r568_components = [].slice.call(_r568_t4, 2);
            var r568_refs = [];
            var _r568_t0 = r568_components;
            var _r568_t1 = _r568_t0.length;
            var _r568_t2 = 0;
            while (_r568_t2 < _r568_t1) {
                r568_part = _r568_t0[_r568_t2];
                if (typeof r568_part === "string") r568_refs.push(r568_part);
                _r568_t2 = _r568_t2 + 1;
            }
            return r315_xn$derivemultipartglyphs$7Hrq65(r568_dstGid, r568_dstUnicode, r568_refs, function (r571_srcs) {
                var _r571_t0, _r571_t1;
                return new r315_xn$Capture$2Lrc8.GlyphProc(function (r573_currentGlyph) {
                    var r573_asBase, r573_alsoMetrics, r573_part, _r573_t2, _r573_t3;
                    var r573_rid = 0;
                    var _r573_t0 = 0;
                    var _r573_t1 = r568_components.length;
                    var r573_j = _r573_t0;
                    while (r573_j < _r573_t1) {
                        r573_asBase = r573_j === 0 ? r315_AS_BASE : void 0;
                        r573_alsoMetrics = r573_j === 0 ? r315_ALSO_METRICS : void 0;
                        r573_part = r568_components[r573_j];
                        if (typeof r573_part === "string") {
                            r573_currentGlyph.include(r315_xn$referglyph$1aao(r571_srcs[r573_rid]), r573_asBase, r573_alsoMetrics);
                            r573_rid = r573_rid + 1;
                        } else r573_currentGlyph.include(r573_part, r573_asBase, r573_alsoMetrics);
                        r573_j = r573_j + 1;
                    }
                    return void 0;
                });
            });
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r578_t0, _r578_t1;
            return {
                "alias": r315_alias
            };
        });
        var r315_alias = function (r579_dstGid, r579_dstUnicode, r579_srcGid) {
            var r579_gr, _r579_t0, _r579_t1, _r579_t2, _r579_t3, _r579_t4, _r579_t5;
            if (!r579_dstGid) throw new Error("Target ID not specified");
            if (!r315_xn$GlyphSaveSink$2Lrc4b.glyphIsNeeded(r579_srcGid)) return void 0;
            var r579_glyphSrc = r315_glyphStore.queryByNameEnsured(r579_srcGid);
            var r579_glyphDst = r315_xn$GlyphSaveSink$2Lrc4b.save(r579_dstGid, r579_dstUnicode, new r315_xn$Capture$2Lrc8.GlyphProc(function (r583_currentGlyph) {
                var _r583_t0, _r583_t1;
                r583_currentGlyph.include(r315_xn$referglyph$1aao(r579_srcGid), r315_AS_BASE, r315_ALSO_METRICS);
                return void 0;
            }));
            if (r579_glyphDst) {
                _r579_t0 = r1_AnyCv.query(r579_glyphSrc);
                _r579_t1 = _r579_t0.length;
                _r579_t2 = 0;
                while (_r579_t2 < _r579_t1) {
                    r579_gr = _r579_t0[_r579_t2];
                    r579_gr.set(r579_glyphDst, r579_gr.get(r579_glyphSrc));
                    if (r579_gr.getPreventDeriving(r579_glyphSrc)) r579_gr.setPreventDeriving(r579_glyphDst);
                    _r579_t2 = _r579_t2 + 1;
                }
                if (r1_Zero.get(r579_glyphSrc)) r1_Zero.set(r579_glyphDst, r1_Zero.get(r579_glyphSrc));
                return r1_Dotless.get(r579_glyphSrc) ? r1_Dotless.set(r579_glyphDst, r1_Dotless.get(r579_glyphSrc)) : void 0;
            } else return void 0;
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r588_t0, _r588_t1;
            return {
                "orthographic-italic": r315_xn$orthographicitalic$3DrD
            };
        });
        var r315_xn$orthographicitalic$3DrD = function (r589_name, r589_unicode) {
            var _r589_t0, _r589_t1;
            return r315_para.isItalic ? r315_alias(r589_name, r589_unicode, r589_name + ".italic") : r315_alias(r589_name, r589_unicode, r589_name + ".upright");
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r591_t0, _r591_t1;
            return {
                "orthographic-slanted": r315_xn$orthographicslanted$3DrD
            };
        });
        var r315_xn$orthographicslanted$3DrD = function (r592_name, r592_unicode) {
            var _r592_t0, _r592_t1;
            return r315_para.slopeAngle ? r315_alias(r592_name, r592_unicode, r592_name + ".slanted") : r315_alias(r592_name, r592_unicode, r592_name + ".upright");
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r594_t0, _r594_t1;
            return {
                "orthographic-slab": r315_xn$orthographicslab$3DrD
            };
        });
        var r315_xn$orthographicslab$3DrD = function (r595_level, r595_name, r595_unicode) {
            var _r595_t0, _r595_t1;
            return r595_level ? r315_alias(r595_name, r595_unicode, r595_name + ".slab") : r315_alias(r595_name, r595_unicode, r595_name + ".sans");
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r597_t0, _r597_t1;
            return {
                "turned": r315_turned
            };
        });
        var r315_turned = function (r598_newid, r598_unicode, r598_id, r598__x, r598__y, r598_mark) {
            var _r598_t0, _r598_t1;
            if (!r598_newid) throw new Error("Target ID not specified");
            return r315_xn$deriveglyphs$7Hrq(r598_newid, r598_unicode, r598_id, function (r599_src, r599_gr) {
                var _r599_t0, _r599_t1;
                return new r315_xn$Capture$2Lrc8.GlyphProc(function (r601_currentGlyph) {
                    var _r601_t0, _r601_t1;
                    r601_currentGlyph.include(r315_xn$referglyph$1aao(r599_src), r315_AS_BASE, r315_ALSO_METRICS);
                    var r601_x = r598__x instanceof Function ? r598__x.call(r601_currentGlyph) : r598__x;
                    var r601_y = r598__y instanceof Function ? r598__y.call(r601_currentGlyph) : r598__y;
                    if (r598_mark) r601_currentGlyph.include(r598_mark);
                    r601_currentGlyph.include(r601_currentGlyph.gizmo.inverse());
                    r601_currentGlyph.include(r315_Translate(-r601_x, -r601_y));
                    r601_currentGlyph.include(r315_Scale(-1, -1));
                    r601_currentGlyph.include(r315_Translate(+r601_x, +r601_y));
                    r601_currentGlyph.include(r601_currentGlyph.gizmo);
                    return void 0;
                });
            });
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r610_t0, _r610_t1;
            return {
                "HCombine": r315_HCombine
            };
        });
        var r315_HCombine = function (r611_newid, r611_unicode, r611_id1, r611_id2, r611_spacing) {
            var _r611_t0, _r611_t1;
            if (!r611_newid) throw new Error("Target ID not specified");
            return r315_xn$GlyphSaveSink$2Lrc4b.save(r611_newid, r611_unicode, new r315_xn$Capture$2Lrc8.GlyphProc(function (r614_currentGlyph) {
                var _r614_t0, _r614_t1;
                r614_currentGlyph.include(r315_xn$referglyph$1aao(r611_id1), r315_AS_BASE, r315_ALSO_METRICS);
                r614_currentGlyph.include(r315_Translate(r611_spacing * -1, 0));
                r614_currentGlyph.include(r315_xn$referglyph$1aao(r611_id2));
                r614_currentGlyph.include(r315_Translate(r611_spacing * +0.5, 0));
                return void 0;
            }));
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r620_t0, _r620_t1;
            return {
                "HDual": r315_HDual
            };
        });
        var r315_HDual = function (r621_newid, r621_unicode, r621_id, r621_spacing) {
            var _r621_t0, _r621_t1;
            if (!r621_newid) throw new Error("Target ID not specified");
            return r315_HCombine(r621_newid, r621_unicode, r621_id, r621_id, r621_spacing);
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r623_t0, _r623_t1;
            return {
                "VCombine": r315_VCombine
            };
        });
        var r315_VCombine = function (r624_newid, r624_unicode, r624_id1, r624_id2, r624_spacing) {
            var _r624_t0, _r624_t1;
            if (!r624_newid) throw new Error("Target ID not specified");
            return r315_xn$GlyphSaveSink$2Lrc4b.save(r624_newid, r624_unicode, new r315_xn$Capture$2Lrc8.GlyphProc(function (r627_currentGlyph) {
                var _r627_t0, _r627_t1;
                r627_currentGlyph.include(r315_xn$referglyph$1aao(r624_id2), r315_AS_BASE, r315_ALSO_METRICS);
                r627_currentGlyph.include(r315_Translate(r624_spacing * -1 * r315_TanSlope, r624_spacing * -1));
                r627_currentGlyph.include(r315_xn$referglyph$1aao(r624_id1));
                r627_currentGlyph.include(r315_Translate(r624_spacing * +0.5 * r315_TanSlope, r624_spacing * +0.5));
                return void 0;
            }));
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r633_t0, _r633_t1;
            return {
                "VDual": r315_VDual
            };
        });
        var r315_VDual = function (r634_newid, r634_unicode, r634_id, r634_spacing) {
            var _r634_t0, _r634_t1;
            if (!r634_newid) throw new Error("Target ID not specified");
            return r315_VCombine(r634_newid, r634_unicode, r634_id, r634_id, r634_spacing);
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r636_t0, _r636_t1;
            return {
                "link-gr": r315_xn$linkgr$5sIl
            };
        });
        var r315_xn$linkgr$5sIl = function (r637_Gr, r637_fromGid, r637_toGid) {
            var r637_fromGlyph, r637_toGlyph, _r637_t0, _r637_t1;
            return r315_xn$GlyphSaveSink$2Lrc4b.glyphIsNeeded(r637_toGid) ? (r637_fromGlyph = r315_xn$queryglyph$1aao(r637_fromGid), r637_toGlyph = r315_xn$queryglyph$1aao(r637_toGid), r637_fromGlyph && r637_toGlyph ? r637_Gr.set(r637_fromGlyph, r637_toGid) : void 0) : void 0;
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r640_t0, _r640_t1;
            return {
                "HalfAdvance": r315_HalfAdvance
            };
        });
        var r315_HalfAdvance = function () {
            var _r641_t1;
            var _r641_t0 = this;
            return _r641_t0.advanceWidth / 2;
        };
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r643_t0, _r643_t1;
            return {
                "NameUni": r315_NameUni
            };
        });
        return r315_NameUni = function (r644_unicode) {
            var _r644_t0, _r644_t1;
            var r644_hex = r644_unicode.toString(16).toUpperCase();
            while (r644_hex.length < 4) r644_hex = "0" + r644_hex;
            return "uni" + r644_hex;
        };
    });
    return void 0;
});


