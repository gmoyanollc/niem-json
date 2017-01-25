#!/usr/bin/bash
XML_SCHEMA_CONST="../xml-schema/niem/domains/cyfs/3.2/cyfs.xsd"
XJB_CONST="../lib/niem-cyfs-PersonOtherKinAssociation-binding.xjb"
XML_SCHEMA_ARG=${1}
if [ -n "${XML_SCHEMA_ARG}" ];
then
  XML_SCHEMA=${XML_SCHEMA_ARG};
else
  XML_SCHEMA=${XML_SCHEMA_CONST};
fi
XJB_ARG=${2}
if [ -n "${XJB_ARG}" ];
then
  XJB=${XJB_ARG};
else
  XJB=${XJB_CONST};
fi
set -x
java -jar ../node_modules/jsonix-schema-compiler/lib/jsonix-schema-compiler-full.jar -b ${XJB} -d ../mapping -extension -generateJsonSchema ${XML_SCHEMA}
