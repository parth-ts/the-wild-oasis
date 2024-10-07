import { test } from "@playwright/test";
import { graphqlApiClient } from "./services/graphqlApiClient";
import { CreateCabinPayload, EditCabinPayload } from "./types";

function generateCabinName(action: number) {
  if (action === 0) return `Jon's Cabin ${Date.now()}`;
  else return `Edited Cabin ${Date.now()}`;
}

const createCabin: CreateCabinPayload = {
  name: generateCabinName(0),
  maxCapacity: 1,
  regularPrice: 1200,
  discount: 12,
  description: "graphql add",
  image: "tests/images/image-2.jpg",
};

const editCabin: EditCabinPayload = {
  name: generateCabinName(1),
  maxCapacity: 12,
  regularPrice: 1300,
  discount: 10,
  description: "graphql edit",
  image: "tests/images/image-4.jpg",
};

test.describe("GraphQL cabin", () => {
  test("crud cabin graphql", async () => {
    /* create cabin */
    const createRes = await graphqlApiClient.createCabin(createCabin);
    const createResData = await createRes.json();
    const createCabinId: number =
      createResData.data.insertIntocabinsCollection.records[0].id;
    console.log("Create Cabin ID => ", createCabinId);

    /* edit cabin using id */
    const editRes = await graphqlApiClient.editCabin(
      editCabin,
      Number(createCabinId),
      Number(1)
    );
    // can be avoided
    const editCabinResData = await editRes.json();
    const editCabinId =
      editCabinResData.data.updatecabinsCollection.records[0].id;
    console.log("Edit Cabin ID => ", editCabinId);

    /* delete cabin using id */
    const deleteRes = await graphqlApiClient.deleteCabinById(editCabinId);
    const deleteResData = await deleteRes.json();
    const affectedCount =
      await deleteResData.data.deleteFromcabinsCollection.affectedCount;
    console.log("Affected Count => ", affectedCount);
  });
});
