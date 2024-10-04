const deleteFromcabinsCollectionMutationDefinition = `
mutation deleteFromcabinsCollection($filter: cabinsFilter) {
  deleteFromcabinsCollection(filter: $filter) {
    affectedCount
  }
}
`;

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

const editIntoCabinsCollectionDefinition = `mutation updateCabinsCollection($set: cabinsUpdateInput!, $filter: cabinsFilter, $atMost: Int!){
  updatecabinsCollection(set: $set, filter: $filter,  atMost:$atMost){
    records{
      id
      name
    }
  }
}`;

const definition = {
  deleteFromcabinsCollectionMutationDefinition,
  insertIntocabinsCollectionMutationDefinition,
  editIntoCabinsCollectionDefinition,
};

export default definition;
