import DragColumn from'../dragcolumn2d';import DragAreaDataset from'../../dataset/dragarea';import{HUNDREDSTRING}from'../../../../fc-core/src/lib';import{_setDefaultConfig}from'../../../../fc-charts/src/chart/_internal/areabase';class DragArea extends DragColumn{getName(){return'DragArea'}static getName(){return'DragArea'}getDSGroupdef(){}__setDefaultConfig(){super.__setDefaultConfig();var a=this,b=a.config;_setDefaultConfig.call(a),b.isDrag=!0,b.anchoralpha=HUNDREDSTRING,b.enablemousetracking=!0,b.defaultcrosslinethickness=1}getDSdef(){return DragAreaDataset}}export default DragArea;