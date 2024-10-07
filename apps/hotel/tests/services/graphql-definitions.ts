const deleteFromcabinsCollectionMutationDefinition = `
mutation deleteFromcabinsCollection($filter: cabinsFilter) {
  deleteFromcabinsCollection(filter: $filter) {
    affectedCount
  }
}
`;
/*
delete mutations variables
{
  "filter": {
    "id": {
      "eq": 914
    }
  }
}
*/
// delete ex: 2
// const deleteFromcabinsCollectionMutationDefinition = `
// mutation deleteFromcabinsCollection($filter: cabinsFilter, $atMost: Int!){
//   deleteFromcabinsCollection(filter: $filter, atMost: $atMost){
//     records{
//       id
//     }
//   }
// }
// `;

const insertIntocabinsCollectionMutationDefinition = `
mutation insertIntocabinsCollection($cabins: [cabinsInsertInput!]!) {
  insertIntocabinsCollection(objects: $cabins) {
    affectedCount
    records {
      id
      name
    }
  }
}
`;

/*
edit mutations variables
{
  "set": {
    "name": "XYZ"
  },
  "filter": {
    "id": {
      "eq": 902
    }
  },
  "atMost": 1
} */
const editIntoCabinsCollectionDefinition = `
mutation updateCabinsCollection($set: cabinsUpdateInput!, $filter: cabinsFilter, $atMost: Int!){
  updatecabinsCollection(set: $set, filter: $filter,  atMost:$atMost){
    records{
      id
      name
    }
  }
}
`;

const definition = {
  deleteFromcabinsCollectionMutationDefinition,
  insertIntocabinsCollectionMutationDefinition,
  editIntoCabinsCollectionDefinition,
};

export default definition;
