import MSColumn3D from'../mscolumn3d';import Column3DDataset from'../../dataset/column3d';import StackGroup from'../../dataset/groups/cartesian-stack';class StackedColumn3D extends MSColumn3D{static getName(){return'StackedColumn3D'}getName(){return'StackedColumn3D'}__setDefaultConfig(){super.__setDefaultConfig();let a=this.config;a.friendlyName='3D Stacked Column Chart',a.maxbarheight=50,a.enablemousetracking=!0,a.isstacked=!0}getDSdef(){return Column3DDataset}getDSGroupdef(){return StackGroup}}export default StackedColumn3D;