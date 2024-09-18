import { ObjectId } from "mongodb";
import { mongodb } from "~/utils/db.server";

export async function fetchDataWithSearch(
  collectionName: string,
  searchTerm: string | null,
  limit: number = 10
) {
  const db = await mongodb.db("blogging");
  const collection = await db.collection(collectionName);

  const searchRegex = searchTerm ? new RegExp(searchTerm, "i") : null;
  const filter = searchRegex ? { title: { $regex: searchRegex } } : {};

  const results = await collection.find(filter).limit(limit).toArray();

  return results;
}


export async function fetchDocumentById(collectionName: string, id: string) {
  const db = await mongodb.db("blogging");
  const collection = await db.collection(collectionName);

  try {
    const document = await collection.findOne({ _id: new ObjectId(id) });
    return document;
  } catch (error) {
    console.error(`Failed to fetch document from ${collectionName} with id ${id}:`, error);
    return null;
  }
}

export async function insertDocument(collectionName: string, document: object) {
  const db = await mongodb.db("blogging");
  const collection = await db.collection(collectionName);
  const result = await collection.insertOne(document);
  return result.insertedId;
}


export async function updateDocumentById(
  collectionName: string,
  id: string,
  updates: object
) {
  const db = await mongodb.db("blogging");
  const collection = await db.collection(collectionName);
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updates }
  );
  return result.modifiedCount > 0; // Returns true if any document was updated
}

export async function upsertDocumentById(
  collectionName: string,
  id: string,
  updates: object
) {
  const db = await mongodb.db("blogging");
  const collection = await db.collection(collectionName);
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updates },
    { upsert: true } // Creates the document if it does not exist
  );
  return result.upsertedId || id; // Returns the ID of the upserted document or the original ID
}