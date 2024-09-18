import { ObjectId } from "mongodb";
import { mongodb } from "~/utils/db.server";

export async function fetchDataWithSearch(
  collectionName: string,
  searchTerm: string | null,
  limit: number = 10
) {
  const domainName = "a"; // Replace this with dynamic input if needed
  const db = await mongodb.db("blogging");

  // Step 1: Get the domain ID if a domain name is provided
  let domainId = null;
  if (domainName) {
    const domainCollection = await db.collection("domains");
    const domain = await domainCollection.findOne({ domainName: domainName });
    console.log("Domain Lookup Result:", domain); // Debugging
    if (domain) {
      domainId = domain._id.toString(); // Convert _id to string if needed
    } else {
      console.warn(`Domain '${domainName}' not found in the 'domains' collection.`);
      return []; // Return empty array if domain is not found
    }
  }

  // If domainId is not set, we should not perform the query
  if (!domainId) {
    return []; // Return empty array if domainId is not available
  }

  // Step 2: Build the filter for the blog collection
  const searchRegex = searchTerm ? new RegExp(searchTerm, "i") : null;
  const filter = {
    ...(searchRegex ? { title: { $regex: searchRegex } } : {}),
    ...(domainId ? { domainName: { $elemMatch: { $eq: domainId } } } : {})
  };

  console.log("Constructed Filter:", filter); // Debugging

  const collection = await db.collection(collectionName);
  const results = await collection.find(filter).limit(limit).toArray();

  console.log("Query Results:", results); // Debugging
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

export async function incrementLikeCount(collectionName: string, id: string) {
  const db = await mongodb.db("blogging");
  const collection = await db.collection(collectionName);
  
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $inc: { likeCount: 1 } } // Increment the likeCount field
  );

  return result.modifiedCount > 0; // Returns true if the document was updated
}

export async function toggleLike(
  collectionName: string,
  id: string,
  clientId: string
) {
  const db = await mongodb.db("blogging");
  const collection = await db.collection(collectionName);

  const blog = await collection.findOne({ _id: new ObjectId(id) });

  if (!blog) {
    return false;
  }

  const hasLiked = blog.likedBy.includes(clientId);

  const updateResult = await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        likedBy: hasLiked
          ? blog.likedBy.filter((id:any) => id !== clientId) // Remove like
          : [...blog.likedBy, clientId] // Add like
      },
      $inc: {
        likeCount: hasLiked ? -1 : 1 // Decrement if removing like, increment if adding
      }
    }
  );

  return updateResult.modifiedCount > 0;
}