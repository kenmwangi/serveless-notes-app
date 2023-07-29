import { Bucket, Table, Stack, App } from "sst/constructs";

export interface StorageStackProps {
  stack: Stack;
  app: App;
}

export function StorageStack({ stack, app }: StorageStackProps) {
  // Create an S3 Bucket
  const bucket = new Bucket(stack, "Uploads");
  // Create a DynamoDB table
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  return {
    table,
    bucket,
  };
}
