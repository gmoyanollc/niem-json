var Cyfs_PersonOtherKinAssociation_Module_Factory = function () {
  var Cyfs_PersonOtherKinAssociation = {
    name: 'Cyfs_PersonOtherKinAssociation',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/cyfs\/3.2\/',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    dependencies: ['gov_niem_release_niem_niem_core__3'],
    typeInfos: [{
        localName: 'PersonOtherKinAssociationType',
        baseTypeInfo: 'gov_niem_release_niem_niem_core__3.AssociationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'sourcePerson',
            minOccurs: 0,
            collection: true,
            elementName: 'SourcePerson',
            typeInfo: 'gov_niem_release_niem_niem_core__3.PersonType'
          }, {
            name: 'targetPerson',
            minOccurs: 0,
            collection: true,
            elementName: 'TargetPerson',
            typeInfo: 'gov_niem_release_niem_niem_core__3.PersonType'
          }, {
            name: 'personOtherKinAssociationCategory',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'PersonOtherKinAssociationCategory',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'PersonOtherKinAssociationCodeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: '.PersonOtherKinAssociationCodeSimpleType',
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
        localName: 'PersonOtherKinAssociationCodeSimpleType',
        baseTypeInfo: 'Token',
        values: ['Brother', 'Brother-In-Law', 'Clergy', 'Coach', 'Domestic Partner', 'Father-in-Law', 'Fiance', 'Fiancee', 'Fictive Kin', 'Godfather', 'Godmother', 'Granddaughter', 'Grandson', 'Great-Granddaughter', 'Great-Grandson', 'Maternal Aunt', 'Maternal Female Cousin', 'Maternal Grandfather', 'Maternal Grandmother', 'Maternal Great Grandfather', 'Maternal Great Grandmother', 'Maternal Male Cousin', 'Maternal Uncle', 'Mother-in-Law', 'Neighbor', 'Nephew', 'Niece', 'Paternal Aunt', 'Paternal Female Cousin', 'Paternal Grandfather', 'Paternal Grandmother', 'Paternal Great Grandfather', 'Paternal Great Grandmother', 'Paternal Male Cousin', 'Paternal Uncle', 'Roommate', 'Significant Other', 'Sister', 'Sister-In-Law', 'Teacher', 'Unrelated Friend']
      }],
    elementInfos: [{
        typeInfo: '.PersonOtherKinAssociationType',
        elementName: 'PersonOtherKinAssociation'
      }, {
        typeInfo: '.PersonOtherKinAssociationCodeType',
        elementName: 'PersonOtherKinAssociationCategoryCode',
        substitutionHead: 'PersonOtherKinAssociationCategory'
      }]
  };
  return {
    Cyfs_PersonOtherKinAssociation: Cyfs_PersonOtherKinAssociation
  };
};
if (typeof define === 'function' && define.amd) {
  define([], Cyfs_PersonOtherKinAssociation_Module_Factory);
}
else {
  var Cyfs_PersonOtherKinAssociation_Module = Cyfs_PersonOtherKinAssociation_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Cyfs_PersonOtherKinAssociation = Cyfs_PersonOtherKinAssociation_Module.Cyfs_PersonOtherKinAssociation;
  }
  else {
    var Cyfs_PersonOtherKinAssociation = Cyfs_PersonOtherKinAssociation_Module.Cyfs_PersonOtherKinAssociation;
  }
}