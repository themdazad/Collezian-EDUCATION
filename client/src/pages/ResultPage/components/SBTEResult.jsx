import * as React from "react";
import { Input, Button, Form, Divider } from "@heroui/react";
// icons 
import { TfiHandPointRight } from "react-icons/tfi";

export const SBTEResult = ({ RollNumber }) => {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
  };
  return (
    <section className="w-full max-w-[1440px] m-auto">
      <Form
        className="w-full flex items-center"
        validationBehavior="native"
        onSubmit={onSubmit}
      >
        <Input
          className="min-w-[300px] max-w-[300px]"
          defaultValue="junior@heroui.com"
          label="Check Result"
          placeholder="Enter Roll Number"
          radius={""}
          isRequired
          errorMessage="Please enter a valid email"
          name="email"
          type="number"
          value={email}
          onValueChange={setEmail}
        />
        <Button type="submit" variant="bordered">
          Download
        </Button>

        {/* feedback  */}
        {/* {submitted && (
          <div className="text-small text-default-500">
            You submitted: <code>{JSON.stringify(submitted)}</code>
          </div>
        )} */}
      </Form>
      
      <Divider/>

      {/* Description */}
      <div className="mt-12">
        <p className="text-danger">The results for a Roll Number cannot be found because of any of the following reasons</p>
        <ul>
          <li><TfiHandPointRight />You may have entered a Wrong Roll Number.</li>
          <li><TfiHandPointRight />Your Roll Number does not belong to SBTE.</li>
          <li><TfiHandPointRight />Your College may not have sent the Internal/Practical Assessment marks to the University. Please contact your college in this case.</li>
          <li><TfiHandPointRight />Your Result is on HOLD due some reasons.</li>
          <li><TfiHandPointRight />In case of any typological error or discrepancy, the student is required to report at their respective college for necessary intimation to the University.</li>
        </ul>
        <br />
        <p className="text-danger">Disclaimer:</p>
        <p className="">The results published are provisional and subject to change after post publication scruitny by University. The university shall not be held responsible for any inadvertent error that may have crept into the results being displayed.</p>
      </div>
    </section>
  );
};
