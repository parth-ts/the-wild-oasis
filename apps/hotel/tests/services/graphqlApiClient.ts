import { CreateCabinPayload, EditCabinPayload } from "../types";
import { graphqlRequest } from "./request";
import graphqlDefinition from "./graphql-definitions";

const deleteCabinById = async (cabinId: string) => {
  return graphqlRequest(
    graphqlDefinition.deleteFromcabinsCollectionMutationDefinition,
    {
      variables: {
        filter: {
          id: {
            eq: cabinId,
          },
        },
      },
    }
  );
};

const createCabin = async (cabin: CreateCabinPayload) => {
  return graphqlRequest(
    graphqlDefinition.insertIntocabinsCollectionMutationDefinition,
    {
      variables: {
        cabins: [cabin],
      },
    }
  );
};

const editCabin = async (cabin: EditCabinPayload) => {
  return (
    graphqlRequest(graphqlDefinition.editIntoCabinsCollectionDefinition),
    {
      variables: {
        set: cabin,
        filter: {
          id: {
            eq: 804,
          },
        },
      },
    }
  );
  // graphqlDefinition.
};

export const graphqlApiClient = {
  deleteCabinById,
  createCabin,
  editCabin,
};
