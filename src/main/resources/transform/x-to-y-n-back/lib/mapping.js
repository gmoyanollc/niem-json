function Cyfs_PersonOtherKinAssociation() {
  this.getModuleArray = function() {
    // var  = require('../mapping/.js').;
    var Cyfs_PersonOtherKinAssociation 
      = require('../mapping/Cyfs_PersonOtherKinAssociation.js').Cyfs_PersonOtherKinAssociation;
    var gov_niem_release_niem_codes_unece_rec20__3 
      = require('../mapping/gov_niem_release_niem_codes_unece_rec20__3.js').gov_niem_release_niem_codes_unece_rec20__3;
    var gov_niem_release_niem_niem_core__3 
      = require('../mapping/gov_niem_release_niem_niem_core__3.js').gov_niem_release_niem_niem_core__3;
    var gov_niem_release_niem_proxy_xsd__3 
      = require('../mapping/gov_niem_release_niem_proxy_xsd__3.js').gov_niem_release_niem_proxy_xsd__3;
    var gov_niem_release_niem_structures__3 
      = require('../mapping/gov_niem_release_niem_structures__3.js').gov_niem_release_niem_structures__3;
    return [Cyfs_PersonOtherKinAssociation, gov_niem_release_niem_codes_unece_rec20__3 
      , gov_niem_release_niem_niem_core__3, gov_niem_release_niem_proxy_xsd__3
      , gov_niem_release_niem_structures__3];
  }
}

module.exports = Cyfs_PersonOtherKinAssociation;
