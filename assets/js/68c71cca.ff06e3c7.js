"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),o=n(7294),r=n(6010),s=n(2389),i=n(7392),l=n(7094),u=n(2466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:t,block:n,defaultValue:s,values:c,groupId:d,className:m}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===s?s:s??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,l.U)(),[w,T]=(0,o.useState)(g),v=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=d){const e=y[d];null!=e&&e!==w&&f.some((t=>t.value===e))&&T(e)}const _=e=>{const t=e.currentTarget,n=v.indexOf(t),a=f[n].value;a!==w&&(N(t),T(a),null!=d&&k(d,String(a)))},q=e=>{let t=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const n=v.indexOf(e.currentTarget)+1;t=v[n]??v[0];break}case"ArrowLeft":{const n=v.indexOf(e.currentTarget)-1;t=v[n]??v[v.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p.tabList)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},f.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>v.push(e),onKeyDown:q,onClick:_},s,{className:(0,r.Z)("tabs__item",p.tabItem,s?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,o.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,s.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},8657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));n(5488),n(5162);const r={sidebar_position:1},s="Sending data to Ditto",i={unversionedId:"examples/raspberry-example/sending-data",id:"examples/raspberry-example/sending-data",title:"Sending data to Ditto",description:"In this case we will use a Raspberry Pi 3B with Raspbian buster OS connected to a DHT22 temperature and humidity sensor.",source:"@site/docs/examples/raspberry-example/sending-data.mdx",sourceDirName:"examples/raspberry-example",slug:"/examples/raspberry-example/sending-data",permalink:"/opentwins/docs/examples/raspberry-example/sending-data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/raspberry-example/sending-data.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Raspberry example",permalink:"/opentwins/docs/examples/raspberry-example/"},next:{title:"String and number example",permalink:"/opentwins/docs/examples/string-example"}},l={},u=[{value:"Setting up the Raspberry Pi",id:"setting-up-the-raspberry-pi",level:2},{value:"Obtaining sensor data",id:"obtaining-sensor-data",level:2},{value:"Installing Mosquitto on Raspberry",id:"installing-mosquitto-on-raspberry",level:2},{value:"Configuring Mosquitto on raspberry",id:"configuring-mosquitto-on-raspberry",level:2},{value:"Sending data to MQTT from Raspberry",id:"sending-data-to-mqtt-from-raspberry",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sending-data-to-ditto"},"Sending data to Ditto"),(0,o.kt)("p",null,"In this case we will use a Raspberry Pi 3B with Raspbian buster OS connected to a DHT22 temperature and humidity sensor."),(0,o.kt)("h2",{id:"setting-up-the-raspberry-pi"},"Setting up the Raspberry Pi"),(0,o.kt)("p",null,"In the following image the pins of the Raspberry used are shown."),(0,o.kt)("p",null,"We will use pins 2, 6, 23 and 24."),(0,o.kt)("h2",{id:"obtaining-sensor-data"},"Obtaining sensor data"),(0,o.kt)("p",null,"To get the data from the sensor it is necessary to install its library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pip3 install Adafruit_DHT\n")),(0,o.kt)("p",null,"We can test the operation of the sensor by creating a .py file with the following code (in our case it is called dht_code.py and I have placed it on the desktop)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import Adafruit_DHT\nimport time\n\nSENSOR_DHT = Adafruit_DHT.DHT22\nPIN_DHT = 24\n\nwhile True:\n    humedad, temperatura = Adafruit_DHT.read(SENSOR_DHT, PIN_DHT)\n    if humedad is not None and temperatura is not None:\n        print("Temp={0:0.1f}C Hum={1:0.1f}%".format(temperatura, humedad))\n    else:\n        print("Lecture fails, chech connection");\n    time.sleep(3);\n')),(0,o.kt)("p",null,"And we run it as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd Desktop/\npython3 dht_code.py \n")),(0,o.kt)("h2",{id:"installing-mosquitto-on-raspberry"},"Installing Mosquitto on Raspberry"),(0,o.kt)("p",null,"To send the data to DITTO we will use MQTT with the ",(0,o.kt)("em",{parentName:"p"},"Mosquitto")," broker."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget http://repo.mosquitto.org/debian/mosquitto-repo.gpg.key\nsudo apt-key add mosquitto-repo.gpg.key\ncd /etc/apt/sources.list.d/\nsudo wget http://repo.mosquitto.org/debian/mosquitto-buster.list\nsudo -i\napt-get update\napt-get install mosquitto\napt-get install mosquitto-clients\n")),(0,o.kt)("p",null,"With this we would already have Mosquitto installed on our Raspberry. To test it we can open two terminals, subscribe to a ",(0,o.kt)("em",{parentName:"p"},"topic")," with one and publish to that ",(0,o.kt)("em",{parentName:"p"},"topic")," with another."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mosquitto_sub -h localhost -t casa/comedor/temperatura\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mosquitto_pub -h localhost -t casa/comedor/temperatura -m "Temperatura: 25\xbaC"\n')),(0,o.kt)("h2",{id:"configuring-mosquitto-on-raspberry"},"Configuring Mosquitto on raspberry"),(0,o.kt)("p",null,"If we wanted to try to send and receive messages by MQTT between the raspberry and another device, we would have to configure the following."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the main route of the Raspberry edit the Mosquitto configuration file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/mosquitto/mosquitto.conf\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Write these three lines at the end of the file to enable connections with any IP through port 1883 and configure authentication.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"listener 1883 0.0.0.0\n\npassword_file /etc/mosquitto/passwd\nallow_anonymous true\n")),(0,o.kt)("p",null,"So that mosquito.conf would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Place your local configuration in /etc/mosquitto/conf.d/\n#\n# A full description of the configuration file is at\n# /usr/share/doc/mosquitto/examples/mosquitto.conf.gz\n\npid_file /run/mosquitto/mosquitto.pid\n\npersistence true\npersistence_location /var/lib/mosquitto/\n\nlog_dest file /var/log/mosquitto/mosquitto.log\nlog_type all\nlog_timestamp true\n\ninclude_dir /etc/mosquitto/conf.d\n\nlistener 1883 0.0.0.0\n\npassword_file /etc/mosquitto/passwd\nallow_anonymous true\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Save the file with Ctrl-O, Enter and Ctrl-X."),(0,o.kt)("li",{parentName:"ol"},"Create a user with password using the following command. Replace USERNAME with the username you want. When you run it, it will ask you to enter a password, which will not be visible while you type it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mosquitto_passwd -c /etc/mosquitto/passwd USERNAME\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Restart Mosquitto with the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart mosquitto\n")),(0,o.kt)("p",null,'Finally, we would have Mosquitto configured to receive and send from other IPs. To do this you have to add -u "USERNAME" and -P "PASSWORD" (including quotes) to the respective command.'),(0,o.kt)("p",null,"For example (in this case being ",(0,o.kt)("em",{parentName:"p"},"user")," both the user and the password):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mosquitto_sub -h 192.168.0.27 -u "usuario" -P "usuario" -t "/Raspberry/Sensores/DHT22"\n')),(0,o.kt)("h2",{id:"sending-data-to-mqtt-from-raspberry"},"Sending data to MQTT from Raspberry"),(0,o.kt)("p",null,"To work with MQTT in python we will need to make use of Eclipse Paho."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pip3 install paho-mqtt\n")),(0,o.kt)("p",null,"Now, we will create a .py file that publishes the sensor data in the corresponding topic of MQTT. For this we have adapted the code example exposed in the following link to the DHT22 sensor with the Adafruit_DHT library and the requirements of MQTT."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.emqx.com/en/blog/how-to-use-mqtt-in-python"},"How to use MQTT in Python (Paho)")),(0,o.kt)("p",null,"In addition, the message sent by MQTT regarding the Ditto Protocol has been made following both the documentation and an example of use."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.eclipse.org/ditto/protocol-specification-things-create-or-modify.html"},"Things - Create-Or-Modify protocol specification")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Code to send sensor data to MQTT and Eclipse Ditto",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from paho.mqtt import client as mqtt_client\nimport time\nimport random\nimport Adafruit_DHT\nimport json\n\n#Constants to connect to MQTT\nbroker = "IP OF MQTT"\nport = POR OF MQTT\ntopic = "telemetry"\nclient_id = f\'python-mqtt-{random.randint(0, 1000)}\'\nusername = "raspberry_DHT22_1@ditto"\npassword = "password"\n\n#Constantes para obtener informaci\xf3n del sensor\nSENSOR_DHT = Adafruit_DHT.DHT22\nPIN_DHT = 24\n\n#Constantes para crear el mensaje de Eclipse Ditto\nDITTO_NAMESPACE = "raspberry";\nDITTO_THING_ID = "DHT22_1";\n\ndef connect_mqtt():\n    def on_connect(client, userdata, flags, rc):\n        if rc == 0:\n            print("Connected to MQTT Broker!")\n        else:\n            print("Failed to connect, return code %d\\n", rc)\n    # Set Connecting Client ID\n    client = mqtt_client.Client(client_id)\n    client.username_pw_set(username, password)\n    client.on_connect = on_connect\n    client.connect(broker, port)\n    return client\n\ndef publish(client):\n     while True:\n         time.sleep(1)\n         msg = getValues();\n         if msg is not None:\n            result = client.publish(topic, msg)\n            status = result[0]\n            if status == 0:\n                print(f"Send \'{msg}\' to topic \'{topic}\'")\n            else:\n                print(f"Failed to send message to topic {topic}")\n\ndef getValues():\n    humedad, temperatura = Adafruit_DHT.read(SENSOR_DHT, PIN_DHT)\n    if humedad is not None and temperatura is not None:\n        temp = "{0:0.1f}".format(temperatura)\n        hum = "{0:0.1f}".format(humedad)\n        output =  "{\\"topic\\": \\""\n        output += DITTO_NAMESPACE\n        output += "/"\n        output += DITTO_THING_ID\n        output += "/things/twin/commands/modify\\",\\"headers\\":{\\"response-required\\":false, \\"content-type\\":\\"application/vnd.eclipse.ditto+json\\"},"\n        output += "\\"path\\": \\"/features\\", \\"value\\":{"\n        output += sensorString("temperature", temp) \n        output += ","\n        output += sensorString("humidity", hum)\n        output += "}}"\n        return output\n    else:\n        print("Failed on lecture, check circuit")\n        return None\n\ndef sensorString(name, value):\n    return "\\"" + name + "\\": { \\"properties\\": { \\"value\\": " + value + "}}"; \n\ndef run():\n    client = connect_mqtt()\n    client.loop_start()\n    publish(client)\n\nif __name__ == \'__main__\':\n    run()\n')))),(0,o.kt)("p",null,"This code has been saved in a .py file with the name of ",(0,o.kt)("em",{parentName:"p"},"dht22publisher.py")," and have saved it on the desktop. To execute it we use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd Desktop/\npython3 dht22publisher.py\n")))}d.isMDXComponent=!0}}]);