import _ from 'lodash';
import lukomorie from './lukomorie.js';

const top5Words = _.flow([
    _.toLower,
    _.words,
    _.countBy,
    _.toPairs,
    _.partial(_.orderBy, _, 1, 'desc'),
    _.partial(_.take, _, 5),
    _.fromPairs,
]);

console.log(top5Words(lukomorie));