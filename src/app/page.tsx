import { database } from "@/db/database";
import { bids as bidShema } from "@/db/schema";
export default async function Home() {
  const bids = await database.query.bids.findMany();
  return (
    <main className="w-full">
      <form
        action={async (formData: FormData) => {
          "use server";
          await database.insert(bidShema).values({});
        }}
      >
        <input type="text" name="bid" placeholder="Bid" />
        <button type="submit">Submit</button>
      </form>
      {Number(bids.length) &&
        bids.map((bid) => <div key={bid.id}>{bid.id}</div>)}
    </main>
  );
}
