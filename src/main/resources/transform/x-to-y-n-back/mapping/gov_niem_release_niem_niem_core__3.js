var gov_niem_release_niem_niem_core__3_Module_Factory = function () {
  var gov_niem_release_niem_niem_core__3 = {
    name: 'gov_niem_release_niem_niem_core__3',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/',
    dependencies: ['gov_niem_release_niem_codes_unece_rec20__3', 'gov_niem_release_niem_proxy_xsd__3', 'gov_niem_release_niem_structures__3'],
    typeInfos: [{
        localName: 'MeasureType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'measureValue',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'MeasureValue',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'measureUnit',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'MeasureUnit',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'PersonType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'personAgeMeasure',
            minOccurs: 0,
            collection: true,
            elementName: 'PersonAgeMeasure',
            typeInfo: '.MeasureType'
          }, {
            name: 'personHairColor',
            minOccurs: 0,
            collection: true,
            elementName: 'PersonHairColor',
            typeInfo: 'AnyType'
          }, {
            name: 'personName',
            minOccurs: 0,
            collection: true,
            elementName: 'PersonName',
            typeInfo: '.PersonNameType'
          }]
      }, {
        localName: 'AssociationType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.AssociationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ProperNameTextType',
        baseTypeInfo: '.TextType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'PersonNameType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'personGivenName',
            minOccurs: 0,
            collection: true,
            elementName: 'PersonGivenName',
            typeInfo: '.PersonNameTextType'
          }, {
            name: 'personSurName',
            minOccurs: 0,
            collection: true,
            elementName: 'PersonSurName',
            typeInfo: '.PersonNameTextType'
          }, {
            name: 'personNameSuffixText',
            minOccurs: 0,
            collection: true,
            elementName: 'PersonNameSuffixText',
            typeInfo: '.TextType'
          }, {
            name: 'personPreferredName',
            minOccurs: 0,
            collection: true,
            elementName: 'PersonPreferredName',
            typeInfo: '.TextType'
          }]
      }, {
        localName: 'TextType',
        baseTypeInfo: 'gov_niem_release_niem_proxy_xsd__3.String',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'PersonNameTextType',
        baseTypeInfo: '.ProperNameTextType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }],
    elementInfos: [{
        typeInfo: '.TextType',
        elementName: 'PersonNameSuffixText'
      }, {
        typeInfo: '.MeasureType',
        elementName: 'PersonAgeMeasure'
      }, {
        typeInfo: 'gov_niem_release_niem_codes_unece_rec20__3.TimeCodeType',
        elementName: 'TimeUnitCode',
        substitutionHead: 'MeasureUnit'
      }, {
        typeInfo: 'AnyType',
        elementName: 'MeasurePoint',
        substitutionHead: 'MeasureValue'
      }, {
        typeInfo: 'AnyType',
        elementName: 'PersonHairColor'
      }, {
        typeInfo: '.TextType',
        elementName: 'PersonPreferredName'
      }, {
        typeInfo: 'AnyType',
        elementName: 'MeasureValue'
      }, {
        typeInfo: '.PersonNameTextType',
        elementName: 'PersonGivenName'
      }, {
        typeInfo: 'AnyType',
        elementName: 'MeasureUnit'
      }, {
        typeInfo: 'gov_niem_release_niem_proxy_xsd__3.Integer',
        elementName: 'MeasureIntegerValue',
        substitutionHead: 'MeasurePoint'
      }, {
        typeInfo: '.PersonNameType',
        elementName: 'PersonName'
      }, {
        typeInfo: '.PersonNameTextType',
        elementName: 'PersonSurName'
      }]
  };
  return {
    gov_niem_release_niem_niem_core__3: gov_niem_release_niem_niem_core__3
  };
};
if (typeof define === 'function' && define.amd) {
  define([], gov_niem_release_niem_niem_core__3_Module_Factory);
}
else {
  var gov_niem_release_niem_niem_core__3_Module = gov_niem_release_niem_niem_core__3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.gov_niem_release_niem_niem_core__3 = gov_niem_release_niem_niem_core__3_Module.gov_niem_release_niem_niem_core__3;
  }
  else {
    var gov_niem_release_niem_niem_core__3 = gov_niem_release_niem_niem_core__3_Module.gov_niem_release_niem_niem_core__3;
  }
}