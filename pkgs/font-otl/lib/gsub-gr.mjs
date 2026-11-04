"use strict";
var _s0_t0;
export {_s0_t0 as createGsubLookupFromGr};
var _s0_t1;
export {_s0_t1 as buildGrFeature};
var r1_createGsubLookupFromGr, r1_buildGrFeature, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
_s0_t0 = r1_createGsubLookupFromGr = function (r130_gsub, r130_glyphStore, r130_gr, r130_ignoreGr) {
    var r130_gnSrc, r130_glyph, r130_gnDst, r130_glyphDst, r130_fIgnore, _r130_t2, _r130_t3, _r130_t4;
    var r130_mapping = {};
    var _r130_t0 = r130_glyphStore.namedEntries()[Symbol.iterator]();
    var _r130_t1 = void 0;
    while (!(_r130_t1 = _r130_t0.next()).done) {
        _r130_t2 = _r130_t1.value;
        r130_gnSrc = _r130_t2[0];
        r130_glyph = _r130_t2[1];
        r130_gnDst = r130_gr.get(r130_glyph);
        r130_glyphDst = r130_glyphStore.queryByName(r130_gnDst);
        r130_fIgnore = r130_ignoreGr && r130_ignoreGr.get(r130_glyph);
        if (!r130_fIgnore && r130_glyphDst) r130_mapping[r130_gnSrc] = r130_gnDst;
    }
    return r130_gsub.createLookup({
        "type": "gsub_single",
        "substitutions": r130_mapping
    });
};
_s0_t1 = r1_buildGrFeature = function (r133_gsub, r133_glyphStore, r133_gr, r133_ignoreGr) {
    var r133_feature1, _r133_t0, _r133_t1;
    var r133_rec = r133_gsub.beginBlock();
    var r133_lookup1 = r1_createGsubLookupFromGr(r133_gsub, r133_glyphStore, r133_gr, r133_ignoreGr);
    if (r1_objectIsNotEmpty(r133_lookup1.substitutions)) {
        r133_feature1 = r133_gsub.addCommonFeature(r133_gsub.createFeature(r133_gr.otlTag));
        r133_feature1.addLookup(r133_lookup1);
    }
    return r133_gsub.endBlock(r133_rec);
};
var r1_objectIsNotEmpty = function (r134_obj) {
    var _r134_t0, _r134_t1;
    return r134_obj && Object.keys(r134_obj).length;
};


