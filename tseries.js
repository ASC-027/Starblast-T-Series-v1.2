/*
Starblast: T-Series v1.2 - Galaxy Takeover
 
Credits:
- Mod Code: ASC-027
- Ships: Neuronality,
- Beta Testers: 
*/

var ships = [];

//Tier 1
var T_Warrior_MK_2_101 = '{"name":"T-Warrior MK 2","level":1,"model":1,"size":1.05,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-95,-100,-98,-70,0,90,91],"z":[0,0,0,0,0,0,0]},"width":[0,5,6,20,30,20,3],"height":[0,2,4,20,30,25,3],"texture":[12,5,63,1,10,12]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-45,"z":-15},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"error":2.5},"propeller":false,"texture":[3,3,10,3]},"cannon2":{"section_segments":6,"offset":{"x":80,"y":40,"z":-55},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[1,2],"rate":4,"type":1,"speed":[160,180],"number":2,"error":3},"propeller":false,"texture":[3,3,10,3]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0],"y":[90,95,95],"z":[0,0,0]},"width":[15,18,2],"height":[18,23,2],"texture":[63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0],"y":[-50,-40,-25,0,9],"z":[0,0,0,0,9,9]},"width":[0,10,15,10,0],"height":[0,10,15,16,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":80,"y":-10,"z":-30},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,1,1,1,63,1,1,12],"propeller":true}},"wings":{"side_joins":{"offset":{"x":0,"y":20,"z":0},"length":[80],"width":[70,30],"angle":[-20],"position":[0,0,0,50],"texture":[11],"bump":{"position":10,"size":20}}},"typespec":{"name":"T-Warrior MK 2","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"shape":[2.103,2.05,1.7,1.408,1.124,0.958,0.841,0.758,0.704,0.662,2.049,2.079,2.09,2.09,2.092,2.204,2.286,2.412,2.6,2.666,2.452,1.192,1.511,1.936,2.027,1.999,2.027,1.936,1.511,1.192,2.452,2.666,2.6,2.412,2.286,2.204,2.092,2.09,2.09,2.079,2.049,0.662,0.704,0.758,0.841,0.958,1.124,1.408,1.7,2.05],"lasers":[{"x":0,"y":-1.995,"z":-0.315,"angle":0,"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"spread":0,"error":2.5,"recoil":0},{"x":1.68,"y":-0.21,"z":-1.155,"angle":0,"damage":[1,2],"rate":4,"type":1,"speed":[160,180],"number":2,"spread":0,"error":3,"recoil":0},{"x":-1.68,"y":-0.21,"z":-1.155,"angle":0,"damage":[1,2],"rate":4,"type":1,"speed":[160,180],"number":2,"spread":0,"error":3,"recoil":0}],"radius":2.666}}';

//Tier 2
var T_Drone_201 = '{"name":"T-Drone","level":2,"model":1,"size":1.3,"specs":{"shield":{"capacity":[100,150],"reload":[3,4]},"generator":{"capacity":[100,280],"reload":[35,50]},"ship":{"mass":100,"speed":[110,135],"rotation":[80,100],"acceleration":[110,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-95,-100,-98,-70,0,90,91],"z":[0,0,0,0,0,0,0]},"width":[0,5,6,20,30,20,3],"height":[0,2,4,20,30,25,3],"texture":[12,5,63,1,10,12]},"cannon":{"section_segments":6,"offset":{"x":80,"y":70,"z":-55},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[20,30],"rate":1,"type":2,"speed":[130,160],"number":5,"angle":30,"error":0},"propeller":false,"texture":[3,3,10,3]},"cannon1":{"section_segments":6,"offset":{"x":80,"y":70,"z":5},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[20,30],"rate":1,"type":2,"speed":[130,160],"number":5,"angle":30,"error":0},"propeller":false,"texture":[3,3,10,3]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0],"y":[90,95,95],"z":[0,0,0]},"width":[15,18,2],"height":[18,23,2],"texture":[63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0],"y":[-50,-40,-25,0,5],"z":[0,0,0,0,9,9]},"width":[0,10,15,10,0],"height":[0,10,15,16,0],"texture":[9]},"top_propulsor":{"section_segments":10,"offset":{"x":80,"y":30,"z":30},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,1,1,1,63,1,1,12],"propeller":true},"side_propulsors":{"section_segments":10,"offset":{"x":80,"y":30,"z":-30},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,1,1,1,63,1,1,12],"propeller":true}},"wings":{"side_joins":{"doubleside":true,"offset":{"x":0,"y":50,"z":0},"length":[80],"width":[70,30],"angle":[-20],"position":[0,0,0,50],"texture":[11],"bump":{"position":10,"size":20}},"side_joins1":{"doubleside":true,"offset":{"x":0,"y":50,"z":10},"length":[80],"width":[70,20],"angle":[-200],"position":[0,0,0,50],"texture":[11],"bump":{"position":0,"size":20}}},"typespec":{"name":"T-Drone","level":2,"model":1,"code":201,"specs":{"shield":{"capacity":[100,150],"reload":[3,4]},"generator":{"capacity":[100,280],"reload":[35,50]},"ship":{"mass":100,"speed":[110,135],"rotation":[80,100],"acceleration":[110,120]}},"shape":[2.603,2.539,2.105,1.743,1.392,1.186,1.041,0.938,0.872,0.82,0.794,0.776,0.778,2.108,2.614,2.769,2.884,3.167,3.416,3.764,4.104,4.003,2.17,2.397,2.51,2.475,2.51,2.397,2.17,4.003,4.104,3.764,3.416,3.167,2.884,2.769,2.614,2.108,0.78,0.776,0.794,0.82,0.872,0.938,1.041,1.186,1.392,1.743,2.105,2.539],"lasers":[{"x":2.08,"y":0.52,"z":-1.43,"angle":0,"damage":[20,30],"rate":1,"type":2,"speed":[130,160],"number":5,"spread":30,"error":0,"recoil":0},{"x":-2.08,"y":0.52,"z":-1.43,"angle":0,"damage":[20,30],"rate":1,"type":2,"speed":[130,160],"number":5,"spread":30,"error":0,"recoil":0},{"x":2.08,"y":0.52,"z":0.13,"angle":0,"damage":[20,30],"rate":1,"type":2,"speed":[130,160],"number":5,"spread":30,"error":0,"recoil":0},{"x":-2.08,"y":0.52,"z":0.13,"angle":0,"damage":[20,30],"rate":1,"type":2,"speed":[130,160],"number":5,"spread":30,"error":0,"recoil":0}],"radius":4.104}}';

//Tier 3
var T_Pulse_301 = '{"name":"T-Pulse","level":3,"model":1,"size":1.3,"specs":{"shield":{"capacity":[160,210],"reload":[3,5]},"generator":{"capacity":[90,160],"reload":[35,50]},"ship":{"mass":140,"speed":[105,120],"rotation":[60,80],"acceleration":[80,100]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-95,-100,-98,-70,0,90,91],"z":[0,0,0,0,0,0,0]},"width":[0,5,6,20,30,27,3],"height":[0,2,4,20,30,25,3],"texture":[12,5,63,1,10,12]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-45,"z":-15},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[30,45],"rate":1,"type":2,"speed":[110,140],"number":1,"angle":0,"error":0},"propeller":false,"texture":[3,3,10,3]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0],"y":[90,95,95],"z":[0,0,0]},"width":[15,18,2],"height":[18,23,2],"texture":[63]},"deco1":{"section_segments":8,"offset":{"x":50,"y":50,"z":-10},"position":{"x":[0,0,5,5,0,0,0],"y":[-52,-50,-20,0,20,40,42],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,5,5,0],"height":[0,5,10,15,10,5,0],"angle":0,"laser":{"damage":[5,8],"rate":3,"type":1,"speed":[100,150],"number":1,"error":0},"propeller":false,"texture":4},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":18},"position":{"x":[0,0,0,0,0,0],"y":[-50,-40,-25,0,5],"z":[0,0,0,0,9,9]},"width":[0,10,15,15,0],"height":[0,10,15,16,0],"texture":[9]},"top_propulsor":{"section_segments":10,"offset":{"x":0,"y":30,"z":40},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,1,1,1,63,1,1,12],"propeller":true},"bottom_propulsor":{"section_segments":10,"offset":{"x":0,"y":30,"z":-40},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,1,1,1,63,1,1,12],"propeller":true},"side_propulsors":{"section_segments":10,"offset":{"x":80,"y":30,"z":-30},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,1,1,1,63,1,1,12],"propeller":true}},"wings":{"top_join":{"offset":{"x":0,"y":50,"z":0},"length":[60],"width":[70,30],"angle":[90],"position":[0,0,0,50],"texture":[11],"bump":{"position":10,"size":20}},"side_joins":{"offset":{"x":0,"y":50,"z":0},"length":[80],"width":[70,30],"angle":[-20],"position":[0,0,0,50],"texture":[11],"bump":{"position":10,"size":20}}},"typespec":{"name":"T-Pulse","level":3,"model":1,"code":301,"specs":{"shield":{"capacity":[160,210],"reload":[3,5]},"generator":{"capacity":[90,160],"reload":[35,50]},"ship":{"mass":140,"speed":[105,120],"rotation":[60,80],"acceleration":[80,100]}},"shape":[2.603,2.539,2.105,1.743,1.392,1.186,1.041,0.938,0.872,0.82,0.794,0.776,1.429,2.108,2.614,2.769,2.884,3.167,3.416,3.764,4.104,4.003,2.288,2.443,3.389,3.387,3.389,2.443,2.288,4.003,4.104,3.764,3.416,3.167,2.884,2.769,2.614,2.108,1.43,0.776,0.794,0.82,0.872,0.938,1.041,1.186,1.392,1.743,2.105,2.539],"lasers":[{"x":0,"y":-2.47,"z":-0.39,"angle":0,"damage":[30,45],"rate":1,"type":2,"speed":[110,140],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.3,"y":-0.052,"z":-0.26,"angle":0,"damage":[5,8],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.3,"y":-0.052,"z":-0.26,"angle":0,"damage":[5,8],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.104}}';

//Tier 4
var T_Fighter_401 = '{"name":"T-Fighter","level":4,"model":1,"size":1.3,"specs":{"shield":{"capacity":[110,130],"reload":[3,6]},"generator":{"capacity":[225,375],"reload":[20,35]},"ship":{"mass":140,"speed":[85,105],"rotation":[50,70],"acceleration":[95,115]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-95,-100,-98,-70,0,97,91],"z":[0,0,0,0,0,0,0]},"width":[0,5,6,20,28,20,3],"height":[0,2,4,20,20,25,3],"texture":[12,5,63,2,10,12]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-45,"z":-15},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,60],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[4,6],"rate":10,"type":1,"speed":[150,240],"number":1,"error":20},"propeller":false,"texture":[3,3,10,3]},"cannon1":{"section_segments":6,"offset":{"x":80,"y":92,"z":-50},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,60],"height":[0,5,8,11,10,0],"angle":10,"laser":{"damage":[4,6],"rate":10,"type":1,"speed":[150,240],"number":1,"angle":10,"error":20},"propeller":false,"texture":[3,3,10,3]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0],"y":[90,95,95],"z":[0,0,0]},"width":[15,18,2],"height":[18,23,2],"texture":[63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0],"y":[-50,-40,-25,0,5],"z":[0,0,0,0,9,9]},"width":[0,10,15,10,0],"height":[0,10,15,16,0],"texture":[9]},"top_propulsor":{"section_segments":10,"offset":{"x":0,"y":30,"z":60},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,4,4,4,63,4,4,12],"propeller":true},"side_propulsors":{"section_segments":10,"offset":{"x":80,"y":30,"z":-30},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,4,4,4,63,4,4,12],"propeller":true,"angle":2}},"wings":{"top_join":{"offset":{"x":0,"y":50,"z":0},"length":[60],"width":[70,30],"angle":[90],"position":[0,0,0,50],"texture":[11],"bump":{"position":10,"size":20}},"side_joins":{"offset":{"x":0,"y":50,"z":0},"length":[80],"width":[70,30],"angle":[-20],"position":[0,0,0,50],"texture":[11],"bump":{"position":10,"size":20}}},"typespec":{"name":"T-Fighter","level":4,"model":1,"code":401,"specs":{"shield":{"capacity":[110,130],"reload":[3,6]},"generator":{"capacity":[225,375],"reload":[20,35]},"ship":{"mass":140,"speed":[85,105],"rotation":[50,70],"acceleration":[95,115]}},"shape":[2.603,2.539,2.105,1.742,1.37,1.145,0.997,0.892,1.013,1.197,1.406,0.728,0.726,2.078,2.614,2.778,2.892,3.21,4.597,4.361,4.147,4.002,3.622,3.53,3.389,3.387,3.389,3.53,3.622,4.002,4.147,4.361,4.597,3.21,2.892,2.778,2.614,2.078,0.728,0.728,1.406,1.197,1.013,0.892,0.997,1.145,1.37,1.742,2.105,2.539],"lasers":[{"x":0,"y":-2.47,"z":-0.39,"angle":0,"damage":[4,6],"rate":10,"type":1,"speed":[150,240],"number":1,"spread":0,"error":20,"recoil":0},{"x":1.854,"y":1.112,"z":-1.3,"angle":10,"damage":[4,6],"rate":10,"type":1,"speed":[150,240],"number":1,"spread":10,"error":20,"recoil":0},{"x":-1.854,"y":1.112,"z":-1.3,"angle":-10,"damage":[4,6],"rate":10,"type":1,"speed":[150,240],"number":1,"spread":10,"error":20,"recoil":0}],"radius":4.597}}';
var T_Speedster_404 = '{"name":"T-Speedster","level":4,"model":4,"size":1.4,"specs":{"shield":{"capacity":[225,325],"reload":[4,7]},"generator":{"capacity":[80,140],"reload":[35,50]},"ship":{"mass":250,"speed":[80,90],"rotation":[50,80],"acceleration":[90,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-95,-100,-98,-70,0,90,91],"z":[0,0,0,0,0,0,0]},"width":[0,5,6,20,30,20,3],"height":[0,2,4,20,40,25,3],"texture":[12,5,63,1,10,12]},"cannon":{"section_segments":6,"offset":{"x":9,"y":60,"z":-15},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":-900,"laser":{"damage":[15,25],"rate":1,"type":1,"speed":[130,160],"recoil":250,"number":1,"angle":-900,"error":0},"propeller":false,"texture":[3,3,10,3]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0],"y":[90,95,95],"z":[0,0,0]},"width":[15,18,2],"height":[18,23,2],"texture":[63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0],"y":[-50,-40,-25,0,5],"z":[0,0,0,0,9,9]},"width":[0,10,15,10,0],"height":[0,10,15,16,0],"texture":[9]},"top_propulsor":{"section_segments":10,"offset":{"x":50,"y":-10,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,1,1,1,63,1,1,12],"propeller":true},"side_propulsors":{"section_segments":10,"offset":{"x":80,"y":30,"z":-30},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,1,1,1,63,1,1,12],"propeller":true}},"wings":{"side_joins":{"offset":{"x":0,"y":-20,"z":0},"length":[80],"width":[70,30],"angle":[-20],"position":[0,90,0,50],"texture":[11],"bump":{"position":10,"size":20}}},"typespec":{"name":"T-Speedster","level":4,"model":4,"code":404,"specs":{"shield":{"capacity":[225,325],"reload":[4,7]},"generator":{"capacity":[80,140],"reload":[35,50]},"ship":{"mass":250,"speed":[80,90],"rotation":[50,80],"acceleration":[90,120]}},"shape":[2.803,2.734,2.267,1.877,1.499,1.278,1.121,1.011,1.685,1.915,1.931,1.953,1.948,2.27,2.815,2.982,3.106,3.411,3.678,4.054,4.419,4.311,2.785,2.581,3.103,3.086,3.103,2.581,2.785,4.311,4.419,4.054,3.678,3.411,3.106,2.982,2.815,2.27,1.948,1.953,1.931,1.915,1.685,1.011,1.121,1.278,1.499,1.877,2.267,2.734],"lasers":[{"x":0.252,"y":3.08,"z":-0.42,"angle":-900,"damage":[15,25],"rate":1,"type":1,"speed":[130,160],"number":1,"spread":-900,"error":0,"recoil":250},{"x":-0.252,"y":3.08,"z":-0.42,"angle":900,"damage":[15,25],"rate":1,"type":1,"speed":[130,160],"number":1,"spread":-900,"error":0,"recoil":250}],"radius":4.419}}';

//Tier 5
var T_Pulsar_501 = '{"name":"T-Pulsar","level":5,"model":1,"size":1.5,"specs":{"shield":{"capacity":[200,230],"reload":[4,7]},"generator":{"capacity":[500,750],"reload":[20,35]},"ship":{"mass":160,"speed":[80,100],"rotation":[45,65],"acceleration":[90,110]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-95,-100,-98,-70,0,97,91],"z":[0,0,0,0,0,0,0]},"width":[0,5,6,20,28,20,3],"height":[0,2,4,20,20,25,3],"texture":[12,4,63,4,10,12]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-45,"z":-15},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,10],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[3,5],"rate":2,"type":2,"speed":[100,130],"number":30,"angle":0,"error":0,"recoil":10},"propeller":false,"texture":[3,3,10,3]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0],"y":[90,95,95],"z":[0,0,0]},"width":[15,18,2],"height":[18,23,2],"texture":[63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0],"y":[-50,-40,-25,0,5],"z":[0,0,0,0,9,9]},"width":[0,10,15,10,0],"height":[0,10,15,16,0],"texture":[9]},"side2_propulsor":{"section_segments":10,"offset":{"x":80,"y":30,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,4,4,4,63,4,4,12],"propeller":true},"backpropulsor":{"section_segments":10,"offset":{"x":0,"y":0,"z":-6},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,20,0],"height":[0,15,20,20,20,15,15,20,30,0],"texture":[4,63,4,4,4,63,4,4,12],"propeller":true},"side_propulsors":{"section_segments":10,"offset":{"x":80,"y":30,"z":-40},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,4,4,4,63,4,4,12],"propeller":true,"angle":2}},"wings":{"side_joins":{"offset":{"x":0,"y":50,"z":0},"length":[80],"width":[70,30],"angle":[-20],"position":[0,0,0,50],"texture":[4],"bump":{"position":10,"size":20}}},"typespec":{"name":"T-Pulsar","level":5,"model":1,"code":501,"specs":{"shield":{"capacity":[200,230],"reload":[4,7]},"generator":{"capacity":[500,750],"reload":[20,35]},"ship":{"mass":160,"speed":[80,100],"rotation":[45,65],"acceleration":[90,110]}},"shape":[3.004,2.929,2.429,2.01,1.58,1.322,1.151,1.029,0.95,0.896,0.864,0.84,0.838,2.432,3.017,3.206,3.337,3.703,4.017,4.461,4.786,4.619,2.503,3.036,3.054,3.006,3.054,3.036,2.503,4.619,4.786,4.461,4.017,3.703,3.337,3.206,3.017,2.432,0.84,0.84,0.864,0.896,0.95,1.029,1.151,1.322,1.58,2.01,2.429,2.929],"lasers":[{"x":0,"y":-2.85,"z":-0.45,"angle":0,"damage":[3,5],"rate":2,"type":2,"speed":[100,130],"number":30,"spread":0,"error":0,"recoil":10}],"radius":4.786}}';
var T_Railgun_503 = '{"name":"T-Railgun","level":5,"model":3,"size":1.49,"specs":{"shield":{"capacity":[200,280],"reload":[4,7]},"generator":{"capacity":[350,380],"reload":[40,60]},"ship":{"mass":270,"speed":[85,95],"rotation":[45,65],"acceleration":[90,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-95,-100,-98,-70,0,120,91],"z":[0,0,0,0,0,0,0]},"width":[0,5,6,20,30,20,3],"height":[0,2,4,20,30,25,3],"texture":[12,5,63,2,10,12]},"cannon":{"section_segments":6,"offset":{"x":0,"y":50,"z":35},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[6,10],"rate":5,"type":1,"speed":[160,180],"number":1,"angle":0,"recoil":30,"error":0},"propeller":false,"texture":[6]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0],"y":[90,95,95],"z":[0,0,0]},"width":[15,18,2],"height":[18,23,2],"texture":[63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0],"y":[-50,-40,-25,0,5],"z":[0,0,0,0,9,9]},"width":[0,10,15,10,0],"height":[0,10,15,16,0],"texture":[9]},"railgunbuild1":{"section_segments":10,"offset":{"x":0,"y":0,"z":60},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,1,1,1,63,1,1,12],"propeller":true},"railgunbuild2":{"section_segments":10,"offset":{"x":0,"y":60,"z":60},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,1,1,1,63,1,1,12],"propeller":true},"side_propulsors":{"section_segments":10,"offset":{"x":70,"y":0,"z":-30},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,80,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,2,2,2,63,2,2,4],"propeller":true}},"wings":{"top_joinfin":{"offset":{"x":0,"y":50,"z":0},"length":[60],"width":[70,30],"angle":[90],"position":[0,0,0,50],"texture":[11],"bump":{"position":10,"size":20}},"side_joins":{"doubleside":true,"offset":{"x":0,"y":50,"z":0},"length":[80],"width":[70,30],"angle":[-20],"position":[0,0,0,50],"texture":[11],"bump":{"position":10,"size":20}}},"typespec":{"name":"T-Railgun","level":5,"model":3,"code":503,"specs":{"shield":{"capacity":[200,280],"reload":[4,7]},"generator":{"capacity":[350,380],"reload":[40,60]},"ship":{"mass":270,"speed":[85,95],"rotation":[45,65],"acceleration":[90,120]}},"shape":[2.984,2.91,2.413,1.998,1.595,1.36,1.193,1.075,0.999,0.94,2.255,2.57,2.651,2.674,2.719,2.7,2.989,3.175,3.448,3.735,3.807,3.529,2.487,3.313,4.688,4.776,4.688,3.313,2.487,3.529,3.807,3.735,3.448,3.175,2.989,2.7,2.719,2.674,2.653,2.57,2.255,0.94,0.999,1.075,1.193,1.36,1.595,1.998,2.413,2.91],"lasers":[{"x":0,"y":0,"z":1.043,"angle":0,"damage":[6,10],"rate":5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":30}],"radius":4.776}}';

//Tier 6
var T_Crusher_601 = '{"name":"T-Crusher","level":6,"model":1,"size":1.7,"specs":{"shield":{"capacity":[220,350],"reload":[4,7]},"generator":{"capacity":[120,240],"reload":[20,25]},"ship":{"mass":400,"speed":[70,80],"rotation":[30,50],"acceleration":[70,100]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-95,-100,-98,-70,20,90,91],"z":[0,0,0,0,0,0,0]},"width":[0,5,6,20,30,30,3],"height":[0,2,4,20,30,25,3],"texture":[12,5,63,4,10,12]},"cannon1":{"section_segments":6,"offset":{"x":0,"y":-45,"z":-15},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[90,160],"rate":1,"type":2,"speed":[100,130],"number":1,"angle":0,"error":0},"propeller":false,"texture":[3,3,10,3]},"cannon2":{"section_segments":6,"offset":{"x":50,"y":88,"z":-20},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[9,13],"rate":1,"type":1,"speed":[120,150],"number":1,"angle":0,"error":0},"propeller":false,"texture":[3,3,10,3]},"cannon3":{"section_segments":6,"offset":{"x":80,"y":88,"z":-50},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[7,11],"rate":1,"type":1,"speed":[130,160],"number":1,"angle":0,"error":0},"propeller":false,"texture":[3,3,10,3]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0],"y":[90,95,95],"z":[0,0,0]},"width":[15,18,2],"height":[18,23,2],"texture":[63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":10,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-50,-40,-25,0,5],"z":[0,0,0,0,9,9]},"width":[0,10,15,10,0],"height":[0,10,15,16,0],"texture":[9]},"top_propulsor":{"section_segments":10,"offset":{"x":50,"y":30,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,4,4,4,63,4,4,12],"propeller":true},"mainpropulsor":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,20,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,1,1,1,63,1,1,12],"propeller":true},"side_propulsors":{"section_segments":10,"offset":{"x":80,"y":30,"z":-30},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,4,4,4,63,4,4,12],"propeller":true}},"wings":{"side_joins":{"offset":{"x":0,"y":50,"z":0},"length":[80],"width":[70,30],"angle":[-20],"position":[0,0,0,50],"texture":[11],"bump":{"position":10,"size":20}}},"typespec":{"name":"T-Crusher","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[220,350],"reload":[4,7]},"generator":{"capacity":[120,240],"reload":[20,25]},"ship":{"mass":400,"speed":[70,80],"rotation":[30,50],"acceleration":[70,100]}},"shape":[3.404,3.32,2.753,2.277,1.787,1.485,1.304,1.165,1.066,1.013,0.966,0.944,0.942,2.756,3.418,3.621,3.772,4.141,4.467,4.922,5.366,5.234,4.861,4.647,3.461,3.407,3.461,4.647,4.861,5.234,5.366,4.922,4.467,4.141,3.772,3.621,3.418,2.756,0.942,0.944,0.966,1.013,1.066,1.165,1.304,1.485,1.787,2.277,2.753,3.32],"lasers":[{"x":0,"y":-3.23,"z":-0.51,"angle":0,"damage":[90,160],"rate":1,"type":2,"speed":[100,130],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.7,"y":1.292,"z":-0.68,"angle":0,"damage":[9,13],"rate":1,"type":1,"speed":[120,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.7,"y":1.292,"z":-0.68,"angle":0,"damage":[9,13],"rate":1,"type":1,"speed":[120,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.72,"y":1.292,"z":-1.7,"angle":0,"damage":[7,11],"rate":1,"type":1,"speed":[130,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.72,"y":1.292,"z":-1.7,"angle":0,"damage":[7,11],"rate":1,"type":1,"speed":[130,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":5.366}}';

//Tier 7

var vocabulary = [
  {text: "Hello", icon: "\u0045", key: "O"},
  {text: "Bye", icon: "\u0046", key: "B"},
  {text: "Yes", icon: "\u004c", key: "Y"},
  {text: "No", icon: "\u004d", key: "N"},
  {text: "Thanks", icon: "\u0041", key: "X"},
  {text: "Sorry", icon: "\u00a1", key: "S"},
  {text: "No Prob", icon: "\u0047", key: "P"},
  {text: "Good Game", icon: "\u00a3", key: "G"},
  {text: "Team", icon: "\u0031", key: "T"},
  {text: "Follow Me", icon: "\u0050", key: "F"},
  {text: "Mine", icon: "\u0044", key: "M"},
  {text: "Attack", icon: "\u0049", key: "A"},
  {text: "Help", icon: "\u004a", key: "H"},
  {text: "Kill", icon:"\u005b", key:"K"},
  {text: "Leader", icon: "\u002e", key: "L"},
  {text: "Hmm", icon: "\u004b", key: "Q"},
  {text: "Duel Me", icon: "\u00be", key: "D"},
  {text: "Love", icon:"\u0024", key:"E"},
  {text: "Bruh", icon:"˙ ͜ʟ˙", key:"U"},
  {text: "WTF", icon:"ಠ_ಠ", key:"W"},
];
 
this.options = {
  
//Game Settings :
 
 root_mode: "survival",
 starting_ship: 101,
 starting_ship_maxed: false,
 max_level: 7,
 max_players: 80,
 survival_time: 45,
 survival_level: 8,
 ships: ships,
 reset_tree: true,
 vocabulary: vocabulary,
 soundtrack: "argon.mp3",
 release_crystal: true,
 weapon_drop: 0,
 weapons_store: true,
 projectile_speed: 1,
 healing_enabled: false,
 healing_ratio: 0,
 bouncing_lasers: 1,
 friendly_colors: 0,
 friction_ratio: 1,
 shield_regen_factor: 1,
 power_regen_factor: 1,
 strafe: 0,
 radar_zoom: 2,
 invulnerable_ships: false,
 auto_refill: false,
 collider: true,
 mines_self_destroy: true,
 mines_destroy_delay: 18000,
 speed_mod: 1.2,
 acw_allowed: false,
 
 //Map Settings :
 
 map_size: 100,
 crystal_value: 3,
 asteroids_strength: 1,
 
 //Ship Settings :
 
 lives: 5,
 max_tier_lives: 0,
 rcs_toggle: true, 
};
 
this.tick = function(game) {
 
};
