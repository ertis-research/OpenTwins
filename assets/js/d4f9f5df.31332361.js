"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1605],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,f=p["".concat(s,".").concat(u)]||p[u]||h[u]||i;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2991:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7294),o=a(6010),i=a(3438),l=a(9960),r=a(3919),s=a(5999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:a}=e;return n.createElement(l.Z,{href:t,className:(0,o.Z)("card padding--lg",c.cardContainer)},a)}function p(e){let{href:t,icon:a,title:i,description:l}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",c.cardTitle),title:i},a," ",i),l&&n.createElement("p",{className:(0,o.Z)("text--truncate",c.cardDescription),title:l},l))}function h(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?n.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const a=(0,r.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:a,title:t.label,description:o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function m(e){let{className:t}=e;const a=(0,i.jA)();return n.createElement(k,{items:a.items,className:t})}function k(e){const{items:t,className:a}=e;if(!t)return n.createElement(m,e);const l=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",a)},l.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},9059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(7462),o=(a(7294),a(3905)),i=a(2991);const l={sidebar_position:1},r="Core functionality",s={unversionedId:"installation/manual-deploy/core",id:"installation/manual-deploy/core",title:"Core functionality",description:"The documentation of this method can be out of date. We recommend using helm installation.",source:"@site/docs/installation/manual-deploy/core.md",sourceDirName:"installation/manual-deploy",slug:"/installation/manual-deploy/core",permalink:"/opentwins/docs/installation/manual-deploy/core",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/manual-deploy/core.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Manual",permalink:"/opentwins/docs/category/manual"},next:{title:"Kafka-ML conection",permalink:"/opentwins/docs/installation/manual-deploy/ml-part"}},c={},d=[{value:"Steps to deploy",id:"steps-to-deploy",level:2},{value:"Eclipse Ditto and Eclipse Hono",id:"eclipse-ditto-and-eclipse-hono",level:3},{value:"Apache Kafka",id:"apache-kafka",level:3},{value:"InfluxDB",id:"influxdb",level:3},{value:"Grafana",id:"grafana",level:3},{value:"Steps to connect",id:"steps-to-connect",level:2},{value:"Eclipse Hono and Eclipse Ditto",id:"eclipse-hono-and-eclipse-ditto",level:3},{value:"Eclipse Ditto and Apache Kafka",id:"eclipse-ditto-and-apache-kafka",level:3},{value:"Apache Kafka and InfluxDB: Deploying Telegraf",id:"apache-kafka-and-influxdb-deploying-telegraf",level:3},{value:"InfluxDB and Grafana",id:"influxdb-and-grafana",level:3},{value:"Recommended extra functionality",id:"recommended-extra-functionality",level:2}],p={toc:d},h="wrapper";function u(e){let{components:t,...l}=e;return(0,o.kt)(h,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"core-functionality"},"Core functionality"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The documentation of this method can be out of date. We recommend using helm installation.")),(0,o.kt)("p",null,"This section will explain how to deploy the platform manually. Basically, you will have to deploy or install the different components and then connect them. The procedure explained below is the one followed to deploy them in ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes")," using in most cases the ",(0,o.kt)("strong",{parentName:"p"},"Helm")," option, but any other installation in which all the components are correctly installed and there is some kind of network between them to be able to communicate can be used. "),(0,o.kt)("p",null,"It is not necessary to deploy all components if not all functionalities are to be used. Check the ",(0,o.kt)("a",{parentName:"p",href:"#architecture"},"architecture")," section to find out which ones are essential and what functionality is covered by each of them."),(0,o.kt)("h2",{id:"steps-to-deploy"},"Steps to deploy"),(0,o.kt)("p",null,"We recommend installing all components in the same Kubernetes namespace to make it easier to identify and control them all. In our case the namespace name will be stored in a bash variable called ",(0,o.kt)("strong",{parentName:"p"},"NS"),"."),(0,o.kt)("admonition",{title:"IMPORTANT",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Also note that the values files have the variables that we recommend for the installation of each Helm Chart, but they can be extended or modified according to your needs (to do so, please consult the Helm Chart documentation).")),(0,o.kt)("h3",{id:"eclipse-ditto-and-eclipse-hono"},"Eclipse Ditto and Eclipse Hono"),(0,o.kt)("p",null,"To deploy both Eclipse Ditto and Eclipse Hono we will directly install the ",(0,o.kt)("a",{parentName:"p",href:"https://www.eclipse.org/packages/packages/cloud2edge/"},"cloud2edge package"),", which is specially created to allow these two tools to connect correctly.\nBefore executing the commands we will need to have the files ",(0,o.kt)("a",{target:"_blank",href:a(9858).Z},"pv-hono.yaml"),", ",(0,o.kt)("a",{target:"_blank",href:a(3698).Z},"pv-mongodb.yaml"),", ",(0,o.kt)("a",{target:"_blank",href:a(8640).Z},"pvc-mongodb.yaml")," and ",(0,o.kt)("a",{target:"_blank",href:a(2580).Z},"values-cloud2edge.yaml")," in the folder where we are in the terminal.\nOnce ready, and complying with all the ",(0,o.kt)("a",{parentName:"p",href:"https://www.eclipse.org/packages/prereqs/"},"prerequisites")," of the package, we execute the following commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add eclipse-iot https://eclipse.org/packages/charts\nhelm repo update\n\nkubectl create namespace $NS\nkubectl apply -f pv-hono.yaml -n $NS\nkubectl apply -f pv-mongodb.yaml -n $NS\nkubectl apply -f pvc-mongodb.yaml -n $NS\n\nhelm install -n $NS --wait --timeout 15m dt eclipse-iot/cloud2edge --version=0.2.3 -f values-cloud2edge.yaml --dependency-update --debug\n")),(0,o.kt)("p",null,"If all pods are running and ready we already have the first two components installed."),(0,o.kt)("h3",{id:"apache-kafka"},"Apache Kafka"),(0,o.kt)("p",null,"To deploy Kafka, the yaml files from another project have been reused, but it could also be installed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/kafka"},"using Helm")," if you prefer. "),(0,o.kt)("p",null,"For Kafka to work, it is necessary to install ",(0,o.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/"},"ZooKeeper")," beforehand. In addition, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/deltaprojects/kafka-manager-docker"},"CMAK"),", a tool to manage Apache Kafka, will be used to make it easier to use. Then, for the deployment, the ",(0,o.kt)("a",{target:"_blank",href:a(8872).Z},"pod-zookeeper.yaml"),", ",(0,o.kt)("a",{target:"_blank",href:a(5926).Z},"svc-zookeeper.yaml"),", ",(0,o.kt)("a",{target:"_blank",href:a(8604).Z},"pod-kafka.yaml"),", ",(0,o.kt)("a",{target:"_blank",href:a(3013).Z},"svc-kafka.yaml"),", ",(0,o.kt)("a",{target:"_blank",href:a(8211).Z},"deploy-kafka-manager.yaml")," and ",(0,o.kt)("a",{target:"_blank",href:a(6736).Z},"svc-kafka-manager.yaml")," files will be needed. Once you have them, you only need to apply them to the chosen namespace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f pod-zookeeper.yaml -n $NS\nkubectl apply -f svc-zookeeper.yaml -n $NS\n\nkubectl apply -f pod-kafka.yaml -n $NS\nkubectl apply -f svc-kafka.yaml -n $NS\n\nkubectl apply -f deploy-kafka-manager.yaml -n $NS\nkubectl apply -f svc-kafka-manager.yaml -n $NS\n")),(0,o.kt)("h3",{id:"influxdb"},"InfluxDB"),(0,o.kt)("p",null,"For InfluxDB, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/influxdata/helm-charts/tree/master/charts/influxdb2"},"Helm")," will again be used for deployment. The following sc-influxdb2.yaml and pv-influxdb2.yaml files will be required to be applied before installation. In addition, the recommended values are in the values-influxdb2.yaml file (it is recommended that you check it before installing and change the ",(0,o.kt)("em",{parentName:"p"},"password")," variable to your preference)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add influxdata https://helm.influxdata.com/\n\nkubectl apply -f sc-influxdb2.yaml -n $NS\nkubectl apply -f pv-influxdb2.yaml -n $NS\n\nhelm install -n $NS influxdb influxdata/influxdb2 -f values-influxdb2.yaml --version=2.0.10 \n")),(0,o.kt)("h3",{id:"grafana"},"Grafana"),(0,o.kt)("p",null,"Deploying Grafana is very similar to InfluxDB. We will have to apply the file pv-grafana.yaml and install the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/grafana/helm-charts/tree/main/charts/grafana"},"Helm Chart")," with the values of the values-grafana.yaml file (it is also recommended to modify the ",(0,o.kt)("em",{parentName:"p"},"password")," variable)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add grafana https://grafana.github.io/helm-charts\n\nkubectl apply -f pv-grafana.yaml -n $NS\n\nhelm install -n $NS grafana grafana/grafana -f values-grafana.yaml --version=6.26.3\n")),(0,o.kt)("h2",{id:"steps-to-connect"},"Steps to connect"),(0,o.kt)("h3",{id:"eclipse-hono-and-eclipse-ditto"},"Eclipse Hono and Eclipse Ditto"),(0,o.kt)("p",null,"In the following diagram you can see how Eclipse Hono and Eclipse Ditto are related in our platform. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Eclipse Ditto and Eclipse Hono relationship",src:a(9168).Z,width:"571",height:"461"})),(0,o.kt)("p",null,"Basically, you will need to ",(0,o.kt)("strong",{parentName:"p"},"create a connection between both for each Eclipse Hono tenant you want to use"),". ",(0,o.kt)("a",{parentName:"p",href:"https://www.eclipse.org/hono/docs/concepts/tenancy/"},"Tenants")," basically act as device containers, so you could simply create a single tenant connected to Eclipse Ditto and store all the devices you need there. In this case we will do it this way, but you could create as many tenants and connections as your needs require."),(0,o.kt)("p",null,"The first thing to do is to check the IPs and ports to use with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get services -n $NS"),". At this point we are interested in the ",(0,o.kt)("em",{parentName:"p"},"dt-service-device-registry-ext")," and ",(0,o.kt)("em",{parentName:"p"},"dt-ditto-nginx")," services, which correspond to Eclipse Hono and Eclipse Ditto respectively (if you have followed these instructions and services are NodePort, you will have to use port 3XXXX). "),(0,o.kt)("p",null,"We will then create a Hono tenant called, for example, ditto (you must override the variable ",(0,o.kt)("strong",{parentName:"p"},"HONO_TENANT")," if you have chosen another name)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"HONO_TENANT=ditto\ncurl -i -X POST http://$HONO_IP:$HONO_PORT/v1/tenants/$HONO_TENANT\n")),(0,o.kt)("p",null,"Now we will create the connection from Eclipse Ditto, which will act as a consumer of the AMQP endpoint of that tenant. To do this you will need to know the Eclipse Ditto devops password with the following command (the variable ",(0,o.kt)("strong",{parentName:"p"},"RELEASE")," is the name we gave to the Helm release when installing cloud2edge, if you have followed these instructions it should be dt)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'RELEASE=dt\nDITTO_DEVOPS_PWD=$(kubectl --namespace ${NS} get secret ${RELEASE}-ditto-gateway-secret -o jsonpath="{.data.devops-password}" | base64 --decode)\n')),(0,o.kt)("p",null,"Now we ",(0,o.kt)("a",{parentName:"p",href:"https://www.eclipse.org/ditto/connectivity-manage-connections.html#create-connection"},"create the connection from Eclipse Ditto")," with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X POST -u devops:${DITTO_DEVOPS_PWD} -H \'Content-Type: application/json\' --data \'{\n  "targetActorSelection": "/system/sharding/connection",\n  "headers": {\n    "aggregate": false\n  },\n  "piggybackCommand": {\n    "type": "connectivity.commands:createConnection",\n    "connection": {\n      "id": "hono-connection-for-\'"${HONO_TENANT}"\'",\n      "connectionType": "amqp-10",\n      "connectionStatus": "open",\n      "uri": "amqp://consumer%40HONO:verysecret@\'"${RELEASE}"\'-dispatch-router-ext:15672",\n      "failoverEnabled": true,\n      "sources": [\n        {\n          "addresses": [\n            "telemetry/\'"${HONO_TENANT}"\'",\n            "event/\'"${HONO_TENANT}"\'"\n          ],\n          "authorizationContext": [\n            "pre-authenticated:hono-connection"\n          ],\n          "enforcement": {\n            "input": "{{ header:device_id }}",\n            "filters": [\n              "{{ entity:id }}"\n            ]\n          },\n          "headerMapping": {\n            "hono-device-id": "{{ header:device_id }}",\n            "content-type": "{{ header:content-type }}"\n          },\n          "replyTarget": {\n            "enabled": true,\n            "address": "{{ header:reply-to }}",\n            "headerMapping": {\n              "to": "command/\'"${HONO_TENANT}"\'/{{ header:hono-device-id }}",\n              "subject": "{{ header:subject | fn:default(topic:action-subject) | fn:default(topic:criterion) }}-response",\n              "correlation-id": "{{ header:correlation-id }}",\n              "content-type": "{{ header:content-type | fn:default(\'"\'"\'application/vnd.eclipse.ditto+json\'"\'"\') }}"\n            },\n            "expectedResponseTypes": [\n              "response",\n              "error"\n            ]\n          },\n          "acknowledgementRequests": {\n            "includes": [],\n            "filter": "fn:filter(header:qos,\'"\'"\'ne\'"\'"\',\'"\'"\'0\'"\'"\')"\n          }\n        },\n        {\n          "addresses": [\n            "command_response/\'"${HONO_TENANT}"\'/replies"\n          ],\n          "authorizationContext": [\n            "pre-authenticated:hono-connection"\n          ],\n          "headerMapping": {\n            "content-type": "{{ header:content-type }}",\n            "correlation-id": "{{ header:correlation-id }}",\n            "status": "{{ header:status }}"\n          },\n          "replyTarget": {\n            "enabled": false,\n            "expectedResponseTypes": [\n              "response",\n              "error"\n            ]\n          }\n        }\n      ],\n      "targets": [\n        {\n          "address": "command/\'"${HONO_TENANT}"\'",\n          "authorizationContext": [\n            "pre-authenticated:hono-connection"\n          ],\n          "topics": [\n            "_/_/things/live/commands",\n            "_/_/things/live/messages"\n          ],\n          "headerMapping": {\n            "to": "command/\'"${HONO_TENANT}"\'/{{ thing:id }}",\n            "subject": "{{ header:subject | fn:default(topic:action-subject) }}",\n            "content-type": "{{ header:content-type | fn:default(\'"\'"\'application/vnd.eclipse.ditto+json\'"\'"\') }}",\n            "correlation-id": "{{ header:correlation-id }}",\n            "reply-to": "{{ fn:default(\'"\'"\'command_response/\'"${HONO_TENANT}"\'/replies\'"\'"\') | fn:filter(header:response-required,\'"\'"\'ne\'"\'"\',\'"\'"\'false\'"\'"\') }}"\n          }\n        },\n        {\n          "address": "command/\'"${HONO_TENANT}"\'",\n          "authorizationContext": [\n            "pre-authenticated:hono-connection"\n          ],\n          "topics": [\n            "_/_/things/twin/events",\n            "_/_/things/live/events"\n          ],\n          "headerMapping": {\n            "to": "command/\'"${HONO_TENANT}"\'/{{ thing:id }}",\n            "subject": "{{ header:subject | fn:default(topic:action-subject) }}",\n            "content-type": "{{ header:content-type | fn:default(\'"\'"\'application/vnd.eclipse.ditto+json\'"\'"\') }}",\n            "correlation-id": "{{ header:correlation-id }}"\n          }\n        }\n      ]\n    }\n  }\n}\' http://$DITTO_IP:$DITTO_PORT/devops/piggyback/connectivity\n')),(0,o.kt)("p",null,"This connection is configured so that if an ",(0,o.kt)("a",{parentName:"p",href:"https://www.eclipse.org/hono/docs/concepts/device-identity/"},"Eclipse Hono device")," has the ",(0,o.kt)("a",{parentName:"p",href:"https://www.eclipse.org/ditto/basic-thing.html#thing-id"},"ThingId")," of an Eclipse Ditto twin as its identifier, its messages will be redirected to that twin directly (explained in more detail in the ",(0,o.kt)("a",{parentName:"p",href:"#usage"},"usage")," section)."),(0,o.kt)("h3",{id:"eclipse-ditto-and-apache-kafka"},"Eclipse Ditto and Apache Kafka"),(0,o.kt)("p",null,"To connect Eclipse Ditto to Kafka we will need to create a topic in Kafka and a Ditto connection to it. All ",(0,o.kt)("a",{parentName:"p",href:"https://www.eclipse.org/ditto/basic-connections.html#target-topics-and-filtering"},"events")," that occur in any of the Eclipse Ditto twins will be sent to this topic. You could also filter these events by twin or namespace and create several connections to multiple topics, but this is not really necessary and adds some complexity."),(0,o.kt)("p",null,"To create the topic in Kafka the above deployed manager will be used. Check the IP and port of Kafka's manager with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get services -n $NS")," and access it in a browser. Already on the page, if you don't have a cluster created, create a new one and create a topic inside it. In our case this topic will be called ",(0,o.kt)("em",{parentName:"p"},"digitaltwins"),"."),(0,o.kt)("p",null,"To create a cluster go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Cluster > Add Cluster")," and fill in at least the name and host of Zookeeper (if our files are used you will have to put ",(0,o.kt)("em",{parentName:"p"},"zookeeper-1:2181"),"). The other settings can be left as default. It should look like the image. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create cluster in Apache Kafka",src:a(667).Z,width:"1085",height:"597"})),(0,o.kt)("p",null,"After creating it, access it and go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Topic > Create")," to create a new topic. Here it is only necessary to assign a name. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create topic in Apache Kafka",src:a(9976).Z,width:"1302",height:"662"})),(0,o.kt)("p",null,"Once the topic is created we have to create a ",(0,o.kt)("a",{parentName:"p",href:"https://www.eclipse.org/ditto/connectivity-protocol-bindings-kafka2.html#target-format"},"Kafka target connection")," in Eclipse Ditto, where it will be indicated that we want it to publish all events. You will need the Ditto devops password obtained in ",(0,o.kt)("a",{parentName:"p",href:"#connecting-eclipse-hono-and-eclipse-ditto"},"the previous section"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X POST -u devops:${DITTO_DEVOPS_PWD} -H \'Content-Type: application/json\' --data \'{\n  "targetActorSelection": "/system/sharding/connection",\n  "headers": {\n    "aggregate": false\n  },\n  "piggybackCommand": {\n    "type": "connectivity.commands:createConnection",\n    "connection": {\n        "id": "kafka-connection",\n        "connectionType": "kafka",\n        "connectionStatus": "open",\n        "failoverEnabled": true,\n        "uri": "tcp://kafka-cluster:9094",\n        "specificConfig": {\n            "bootstrapServers": "kafka-cluster:9094",\n            "saslMechanism": "plain"\n        },\n        "sources": [],\n        "targets": [\n            {\n            "address": "digitaltwins",\n            "topics": [\n                "_/_/things/twin/events",\n                "_/_/things/live/messages"\n            ],\n            "authorizationContext": [\n                "nginx:ditto"\n            ]\n            }\n        ]\n    }\n  }\n}\' http:///$DITTO_IP:$DITTO_PORT/devops/piggyback/connectivity\n')),(0,o.kt)("p",null,"If the connection is successfully established, Eclipse Ditto and Kafka are already connected."),(0,o.kt)("h3",{id:"apache-kafka-and-influxdb-deploying-telegraf"},"Apache Kafka and InfluxDB: Deploying Telegraf"),(0,o.kt)("p",null,"Telegraf will be in charge of collecting the messages posted in the created Kafka topic and write the relevant information in InfluxDB, i.e. it will connect both tools. Telegraf consists of input and output plugins. In our case we will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/influxdata/telegraf/tree/master/plugins/inputs/kafka_consumer"},"kafka consumer input plugin")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/influxdata/telegraf/tree/release-1.23/plugins/outputs/influxdb_v2"},"InfluxDB v2.x output plugin"),". The Telegraf configuration will be defined in its telegraf-values.yaml file, before deployment. This will be written in YAML as another installation variable and will be automatically transformed to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/toml-lang/toml#toml"},"TOML")," during deployment."),(0,o.kt)("p",null,"First of all we need to get a token from InfluxDB that gives Telegraf at least write permissions. To do this we access the InfluxDB interface (ip and port of its service) and go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Data > API Tokens"),". Click on ",(0,o.kt)("em",{parentName:"p"},"Generate API Token")," and select ",(0,o.kt)("em",{parentName:"p"},"All Access API Token"),". Assign any name, save and select the token we have just created to copy it to the clipboard. This is stored in a variable called ",(0,o.kt)("strong",{parentName:"p"},"INFLUX_TOKEN"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export INFLUX_TOKEN=<INFLUX_TOKEN>\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create token in InfluxDB",src:a(8898).Z,width:"1911",height:"635"})),(0,o.kt)("p",null,"You also need to store in variables the IPs and ports of both Kafka and InfluxDB, as well as the name of the Kafka topic. These variables will be INFLUX_IP, INFLUX_PORT, KAFKA_IP, KAFKA_PORT and KAFKA_TOPIC. Once all variables are ready, Telegraf can be displayed with the values defined in the values-telegraf.yaml file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install -n $NS telegraf influxdata/telegraf -f values-telegraf.yaml --version=1.8.18\n")),(0,o.kt)("p",null,"If the pod is ready and running it should be working, but it is advisable to check its logs to make sure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f --namespace $NS $(kubectl get pods --namespace $NS -l app.kubernetes.io/name=telegraf -o jsonpath='{ .items[0].metadata.name }')\n")),(0,o.kt)("h3",{id:"influxdb-and-grafana"},"InfluxDB and Grafana"),(0,o.kt)("p",null,"Connecting these two tools is very simple. The first thing to do is to get a full access token for Grafana in InfluxDB, as explained in the ",(0,o.kt)("a",{parentName:"p",href:"#connecting-kafka-and-influxdb-deploying-telegraf"},"previous section"),". Then, access ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration > Data sources")," on the Grafana interface and click on ",(0,o.kt)("em",{parentName:"p"},"Add data source"),". Select ",(0,o.kt)("em",{parentName:"p"},"InfluxDB")," from the list. In the settings it is very important to select ",(0,o.kt)("em",{parentName:"p"},"Flux")," as query language. It will be necessary to fill in the URL section with the one that corresponds to InfluxDB. You will also have to activate Auth Basic and fill in the fields (in our case we have set the default admin of InfluxDB, but you can create a new user and fill in these fields). In the InfluxDB details you should indicate the organisation (default is ",(0,o.kt)("em",{parentName:"p"},"influxdata"),"), the bucket (default is ",(0,o.kt)("em",{parentName:"p"},"default"),") and the token you have generated. When saving and testing, it should come out that at least one bucket has been found, indicating that they are already connected."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create datasource in Grafana",src:a(1960).Z,width:"1908",height:"890"})),(0,o.kt)("h2",{id:"recommended-extra-functionality"},"Recommended extra functionality"),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0},8211:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/deploy-kafka-manager-c24ba1a3fc18ba2cc8780405f87d4b2c.yaml"},8604:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/pod-kafka-b6583e9f986baf110aeff2f3af77fa54.yaml"},8872:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/pod-zookeeper-f6020848673d5985856e77cafaf618db.yaml"},9858:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/pv-hono-b0230899bc43ae33a4ee6e2c638e1cc2.yaml"},3698:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/pv-mongodb-18778fde710692180f06e4fe14d7f260.yaml"},8640:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/pvc-mongodb-5f9ed9d19387a9d7dac8e05efab4d869.yaml"},6736:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/svc-kafka-manager-644a45dc9a594370212d4deae669af06.yaml"},3013:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/svc-kafka-084fa70176e6ca10183bf9500ed27b7e.yaml"},5926:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/svc-zookeeper-0ebc095c81fdb90a063bd0f09ef021a8.yaml"},2580:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/values-cloud2edge-ac10e5fb339f8740290b077f941dca27.yaml"},667:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-cluster-kafka-26fe01a0165d6f998a9fe240a59e1b0d.JPG"},1960:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-datasource-grafana-7d882c8807b5f3fd46146b6e99349870.JPG"},8898:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-token-influxdb-64c7f6481892e654ddee80484b538b51.JPG"},9976:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-topic-kafka-7719fda11d75826602308145379cfdd7.JPG"},9168:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ditto-hono-relationship-05edfdb26b9df807a0860fad82192684.jpg"}}]);