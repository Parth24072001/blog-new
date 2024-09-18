import { Link } from "@remix-run/react";

const Section1 = () => {
  //  async function action({ request }: ActionFunctionArgs) {
  //   const body = await request.formData();
  //   const project = await createProject(body);
  //   return redirect(`/blog/${project.id}`);
  // }
  return (
    <div className=" mx-auto relative">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
        <div className="sm:col-span-5">
          <Link to="#">
            <div
              className="bg-cover text-center overflow-hidden"
              style={{
                minHeight: "300px",
                backgroundImage:
                  "url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1')",
              }}
              title="Woman holding a mug"
            ></div>
          </Link>
          <div className="mt-3 bg-background rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="">
              <Link
                to="#"
                className="text-xs text-primary uppercase font-medium hover:text-textt  transition duration-500 ease-in-out"
              >
                Election
              </Link>
              <Link
                to="#"
                className="block text-textt  font-bold text-2xl mb-2 hover:text-primary transition duration-500 ease-in-out"
              >
                Revenge of the Never Trumpers
              </Link>
              <p className="text-textt text-base mt-2">
                Meet the Republican dissidents fighting to push Donald Trump out
                of office—and reclaim their party
              </p>
            </div>
          </div>
        </div>

        <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              img: "https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1",
              title: "Trump Steps Back Into Coronavirus Spotlight",
            },
            {
              img: "https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1",
              title: "How Mistakes Became Big Breaks",
            },
            {
              img: "https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1",
              title: "Survey: Many Americans Dissatisfied With U.S.",
            },
            {
              img: "https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1",
              title: "How Trus Big Breaks",
            },
            {
              img: "https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1",
              title: "Survey: Many Americans Dissatisfied With U.S.",
            },
            {
              img: "https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1",
              title: "Trump Steps Back Into Coronavirus Spotlight",
            },
          ].map((item, index) => (
            <div key={index}>
              <Link to="#">
                <div
                  className="h-40 bg-cover text-center overflow-hidden"
                  style={{ backgroundImage: `url(${item.img})` }}
                  title="Article Image"
                ></div>
              </Link>
              <Link
                to="#"
                className="text-textt  inline-block font-semibold text-md my-2 hover:text-primary transition duration-500 ease-in-out"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
