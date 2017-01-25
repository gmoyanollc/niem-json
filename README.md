#Getting Started

  1. Open a terminal session in `./src/main/resources/transform/x-to-y-n-back`
  2. Continue with step to install node dependencies as described in [Getting Started](./src/main/resources/transform/x-to-y-n-back/README.md)

#Introduction
The purpose of this evaluation is to determine whether Jsonix may contribute to a repeatable and interoperable approach for JSON NIEM-conformant information exchanges.  This approach covers both design-time and run-time patterns.

For design-time guidance, the document [Non-Normative Guidance in Using NIEM with JSON](http://niem.github.io/json/guidance/#niem-xml-json) is considered.  

##Jsonix
[Jsonix (JSON interfaces for XML)](https://github.com/highsource/jsonix) is a JavaScript library that generates and processes mappings between JavaScript objects and their serialized XML representations.  The mappings are declarative and facilitate the bi-directional transformation of JSON and XML object serializations.  More about Jsonix and it's implemention in this evalution is described [here](./src/main/resources/transform/x-to-y-n-back/README.md). 

###Design-Time Benefits

  * Jsonix can generate mappings between the formats.  
  
    The mappings are generated from NIEM-conformant XML schemas.  Since the mappings are produced from XML Schema, the mappings contain what is needed to properly produce valid information exchanges.
  
  * Jsonix also can generate JSON Schema.  
  
    The JSON Schema are a by-product of generating the mappings between the formats and therefore also contain what is needed from the XML Schema to properly validate JSON-formatted information exchanges.
  
Automation, such as the generation of mappings and JSON Schema, removes friction for developers and facilitates quick adoption.  

###Run-Time Benefits

  * JSON and XML instances are bi-directional and "loss-less".
  
    An instance in either format validates after a transformation with its corresponding schema definition.  Structures and values remain consistent from one format to another and back.
    
  * NIEM XML and JSON instances [carry the same data](http://niem.github.io/json/guidance/#niem-xml-json)

  * The names, relationships and structures in JSON messages are based on names, relationships and structures described by NIEM-conformant XML schemas.   
  
  * JSON structures are mapped to NIEM "XML elements or attributes, using the namespace name and local name of the component’s    qualified name (QName)." [1.3. The NIEM data model and RDF]
  
The following is an example of the run-time instance based on the given example in [1.5 NIEM XML and NIEM JSON carry the same data](http://niem.github.io/json/guidance/#niem-xml-json):

  ```
  {
    "name": {
      "namespaceURI": "http://release.niem.gov/niem/domains/cyfs/3.2/",
      "localPart": "PersonOtherKinAssociation",
      "prefix": "cyfs",
      "key": "{http://release.niem.gov/niem/domains/cyfs/3.2/}PersonOtherKinAssociation",
      "string": "{http://release.niem.gov/niem/domains/cyfs/3.2/}cyfs:PersonOtherKinAssociation"
    },
    "value": {
      "TYPE_NAME": "Cyfs_PersonOtherKinAssociation.PersonOtherKinAssociationType",
      "otherAttributes": {
        "{http://www.w3.org/2000/xmlns/}cyfs": "http://release.niem.gov/niem/domains/cyfs/3.2/",
        "{http://www.w3.org/2000/xmlns/}j": "http://release.niem.gov/niem/domains/jxdm/5.2/",
        "{http://www.w3.org/2000/xmlns/}nc": "http://release.niem.gov/niem/niem-core/3.0/"
      },
      "sourcePerson": [{
        "TYPE_NAME": "gov_niem_release_niem_niem_core__3.PersonType",
        "personAgeMeasure": [{
          "TYPE_NAME": "gov_niem_release_niem_niem_core__3.MeasureType",
          "measureValue": [{
            "name": {
              "namespaceURI": "http://release.niem.gov/niem/niem-core/3.0/",
              "localPart": "MeasureIntegerValue",
              "prefix": "nc",
              "key": "{http://release.niem.gov/niem/niem-core/3.0/}MeasureIntegerValue",
              "string": "{http://release.niem.gov/niem/niem-core/3.0/}nc:MeasureIntegerValue"
            },
            "value": {
              "TYPE_NAME": "gov_niem_release_niem_proxy_xsd__3.Integer",
              "value": 14
            }
          }],
          "measureUnit": [{
            "name": {
              "namespaceURI": "http://release.niem.gov/niem/niem-core/3.0/",
              "localPart": "TimeUnitCode",
              "prefix": "nc",
              "key": "{http://release.niem.gov/niem/niem-core/3.0/}TimeUnitCode",
              "string": "{http://release.niem.gov/niem/niem-core/3.0/}nc:TimeUnitCode"
            },
            "value": {
              "TYPE_NAME": "gov_niem_release_niem_codes_unece_rec20__3.TimeCodeType",
              "value": "ANN"
            }
          }]
        }],
        "personName": [{
          "TYPE_NAME": "gov_niem_release_niem_niem_core__3.PersonNameType",
          "personGivenName": [{
            "TYPE_NAME": "gov_niem_release_niem_niem_core__3.PersonNameTextType",
            "value": "Mortimer"
          }],
          "personSurName": [{
            "TYPE_NAME": "gov_niem_release_niem_niem_core__3.PersonNameTextType",
            "value": "Smith"
          }],
          "personNameSuffixText": [{
            "TYPE_NAME": "gov_niem_release_niem_niem_core__3.TextType",
            "value": "Sr"
          }],
          "personPreferredName": [{
            "TYPE_NAME": "gov_niem_release_niem_niem_core__3.TextType",
            "value": "Morty"
          }]
        }]
      }],
      "targetPerson": [{
        "TYPE_NAME": "gov_niem_release_niem_niem_core__3.PersonType",
        "personName": [{
          "TYPE_NAME": "gov_niem_release_niem_niem_core__3.PersonNameType",
          "personGivenName": [{
            "TYPE_NAME": "gov_niem_release_niem_niem_core__3.PersonNameTextType",
            "value": "Rick"
          }],
          "personSurName": [{
            "TYPE_NAME": "gov_niem_release_niem_niem_core__3.PersonNameTextType",
            "value": "Sanchez"
          }]
        }]
      }],
      "personOtherKinAssociationCategory": [{
        "name": {
          "namespaceURI": "http://release.niem.gov/niem/domains/cyfs/3.2/",
          "localPart": "PersonOtherKinAssociationCategoryCode",
          "prefix": "cyfs",
          "key": "{http://release.niem.gov/niem/domains/cyfs/3.2/}PersonOtherKinAssociationCategoryCode",
          "string": "{http://release.niem.gov/niem/domains/cyfs/3.2/}cyfs:PersonOtherKinAssociationCategoryCode"
        },
        "value": {
          "TYPE_NAME": "Cyfs_PersonOtherKinAssociation.PersonOtherKinAssociationCodeType",
          "value": "Maternal Grandfather"
        }
      }]
    }
  }
```

As depicted above, instances contain both values and schema metadata.  The schema metadata increases the size of instances but facilitates the automation and high performance of bi-directional, "loss-less" transformations.


Copyright (c) 2017 George Moyano (https://onename.com/gmoyano)







