import { test } from "@playwright/test";
import { graphqlApiClient } from "./services/graphqlApiClient";

function generateCreateCabinName() {
  return `TONY's Cabin ${Date.now()}`;
}

const createCabin = {
  name: generateCreateCabinName(),
  maxCapacity: 1,
  regularPrice: 1200,
  discount: 12,
  description: "graphql des",
  image: "image api",
};

// const editCabin = {
//   name: "V1 Edited",
// };

test.describe("GraphQL cabin", () => {
  test.only("add cabin graphql", async () => {
    const createRes = await graphqlApiClient.createCabin(createCabin);

    const createData = await createRes.json();

    const cabinId = createData.data.insertIntocabinsCollection.records[0].id;

    console.log("cabinId => ", cabinId);

    // const filter =   filter: {
    //     id: {
    //       eq: 804,
    //     },
    //   },

    // const filter = { id: { eq: `cabinId` } };

    //------edit
    // const editRes = await graphqlApiClient.editCabin(editCabin, filter);
    // console.log("Edit response => ", editRes);

    // const editData = await editRes;
  });
});
