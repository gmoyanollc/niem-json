var gov_niem_release_niem_codes_unece_rec20__3_Module_Factory = function () {
  var gov_niem_release_niem_codes_unece_rec20__3 = {
    name: 'gov_niem_release_niem_codes_unece_rec20__3',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    typeInfos: [{
        localName: 'TimeCodeType',
        typeName: {
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/codes\/unece_rec20\/3.0\/',
          localPart: 'TimeCodeType'
        },
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: '.TimeCodeSimpleType',
            type: 'value'
          }, {
            name: 'id',
            typeInfo: 'ID',
            type: 'attribute'
          }, {
            name: 'ref',
            typeInfo: 'IDREF',
            type: 'attribute'
          }, {
            name: 'metadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }, {
            name: 'relationshipMetadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'TimeCodeSimpleType',
        baseTypeInfo: 'Token',
        values: ['ANN', 'B52', 'B98', 'C26', 'C47', 'D42', 'DAY', 'HUR', 'MIN', 'MON', 'SEC', 'WEE']
      }],
    elementInfos: []
  };
  return {
    gov_niem_release_niem_codes_unece_rec20__3: gov_niem_release_niem_codes_unece_rec20__3
  };
};
if (typeof define === 'function' && define.amd) {
  define([], gov_niem_release_niem_codes_unece_rec20__3_Module_Factory);
}
else {
  var gov_niem_release_niem_codes_unece_rec20__3_Module = gov_niem_release_niem_codes_unece_rec20__3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.gov_niem_release_niem_codes_unece_rec20__3 = gov_niem_release_niem_codes_unece_rec20__3_Module.gov_niem_release_niem_codes_unece_rec20__3;
  }
  else {
    var gov_niem_release_niem_codes_unece_rec20__3 = gov_niem_release_niem_codes_unece_rec20__3_Module.gov_niem_release_niem_codes_unece_rec20__3;
  }
}