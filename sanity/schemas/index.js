// export const schemaTypes = []

// import createSchema from 'part:@sanity/base/schema-creator';

// import scehmaTypes from 'all:part:@sanity/base/schema-type'

// export default createSchema({
//     name : 'default',

//     types: scehmaTypes.concat([
//  pizza
//     ]),
// })


import pizza from "./Pizza";
import order from "./order";
export const schemaTypes = [pizza, order]
