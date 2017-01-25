var gov_niem_release_niem_proxy_xsd__3_Module_Factory = function () {
  var gov_niem_release_niem_proxy_xsd__3 = {
    name: 'gov_niem_release_niem_proxy_xsd__3',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    typeInfos: [{
        localName: 'Integer',
        typeName: {
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/proxy\/xsd\/3.0\/',
          localPart: 'integer'
        },
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Integer',
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
        localName: 'String',
        typeName: {
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/proxy\/xsd\/3.0\/',
          localPart: 'string'
        },
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
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
      }],
    elementInfos: []
  };
  return {
    gov_niem_release_niem_proxy_xsd__3: gov_niem_release_niem_proxy_xsd__3
  };
};
if (typeof define === 'function' && define.amd) {
  define([], gov_niem_release_niem_proxy_xsd__3_Module_Factory);
}
else {
  var gov_niem_release_niem_proxy_xsd__3_Module = gov_niem_release_niem_proxy_xsd__3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.gov_niem_release_niem_proxy_xsd__3 = gov_niem_release_niem_proxy_xsd__3_Module.gov_niem_release_niem_proxy_xsd__3;
  }
  else {
    var gov_niem_release_niem_proxy_xsd__3 = gov_niem_release_niem_proxy_xsd__3_Module.gov_niem_release_niem_proxy_xsd__3;
  }
}