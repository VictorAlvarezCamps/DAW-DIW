import {D2R, R2D, PJD_3PARAM, PJD_7PARAM} from './constants/values';
import datum_transform from './datum_transform';
import adjust_axis from './adjust_axis';
import proj from './Proj';
import toPoint from './common/toPoint';
import checkSanity from './checkSanity';

function checkNotWGS(source, dest) {
return ((source.datum.datum_type === PJD_3PARAM || source.datum.datum_type === PJD_7PARAM) && dest.datumCode !== 'WGS84') || ((dest.datum.datum_type === PJD_3PARAM || dest.datum.datum_type === PJD_7PARAM) && source.datumCode !== 'WGS84');
}

export default function transform(source, dest, point) {
var wgs84;
if (Array.isArray(point)) {
point = toPoint(point);
}
checkSanity(point);
if (source.datum && dest.datum && checkNotWGS(source, dest)) {
wgs84 = new proj('WGS84');
point = transform(source, wgs84, point);
source = wgs84;
}

if (source.axis !== 'enu') {
point = adjust_axis(source, false, point);
}

if (source.projName === 'longlat') {
point = {
  x: point.x * D2R,
  y: point.y * D2R
};
}
else {
if (source.to_meter) {
  point = {
    x: point.x * source.to_meter,
    y: point.y * source.to_meter
  };
}
point = source.inverse(point);
}

if (source.from_greenwich) {
point.x += source.from_greenwich;
}

point = datum_transform(source.datum, dest.datum, point);


if (dest.from_greenwich) {
point = {
  x: point.x - dest.from_greenwich,
  y: point.y
};
}

if (dest.projName === 'longlat') {
point = {
  x: point.x * R2D,
  y: point.y * R2D
};
} else {
point = dest.forward(point);
if (dest.to_meter) {
  point = {
    x: point.x / dest.to_meter,
    y: point.y / dest.to_meter
  };
}
}


if (dest.axis !== 'enu') {
return adjust_axis(dest, true, point);
}

return point;
}

function init(){
}

window.onload = init;