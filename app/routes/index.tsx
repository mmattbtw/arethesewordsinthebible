import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { biblePlainText } from "~/components/bible";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  let numberOfOccurences = {};

  const text = formData.get("text") as string;
  const words = text.toLowerCase().split(" ");
  const bibleWords = biblePlainText.toLowerCase().split(" ");
  console.log(words);

  for (const word of words) {
    if (bibleWords.includes(word)) {
      for (const bibleWord of bibleWords) {
        if (bibleWord === word) {
          // @ts-ignore
          numberOfOccurences[word] = numberOfOccurences[word] + 1 || 1;
        }
      }
    } else {
      // @ts-ignore
      numberOfOccurences[word] = 0;
    }
  }

  return numberOfOccurences;
};

export default function Index() {
  const data = useActionData();

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        margin: "auto",
        width: "50%",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h1>ARE THESE WORDS IN THE BIBLE?</h1>

      <Form method="post">
        <label>
          <p>words to be checked:</p>
          <textarea
            id="text"
            name="text"
            rows={20}
            cols={50}
            style={{
              backgroundColor: "#28292b",
              border: "none",
              color: "white",
            }}
          />
        </label>

        <br />
        <br />

        <button
          type="submit"
          value="Submit"
          style={{ marginTop: "2rem", padding: "15px 32px" }}
        >
          Submit
        </button>
      </Form>

      {/* if the data variable exists, make a table with the key value pair from the object */}
      <p>
        {data &&
          Object.entries(data).map(([key, value]) => (
            <p key={key}>
              {key} is used {value} times.
            </p>
          ))}
      </p>
    </div>
  );
}
