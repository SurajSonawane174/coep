
import { Tabs } from "./Tabs";
import { ExpandableCardDemo } from "./ExpandableCardDemo";

export default function TabsDemo() {
  const tabs = [
    {
      title: "CSE",
      value: "CSE",
      content: (
        <div
          className="w-full overflow-auto dark:text-neutral-400 scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-black relative h-full rounded-2xl p-10  text-white bg-gradient-to-br from-gray-400 via-gray-600 to-gray-900">
          <p>COMPUTER SCIENCE</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "ENTC",
      value: "ENTC",
      content: (
        <div
          className="w-full overflow-auto dark:text-neutral-400 scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-black relative h-full rounded-2xl p-10  text-white bg-gradient-to-br from-gray-400 via-gray-600 to-gray-900">
          <p>ENTC</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "ELECTRICAL",
      value: "ELECTRICAL",
      content: (
        <div
          className="w-full overflow-auto dark:text-neutral-400 scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-black relative h-full rounded-2xl p-10  text-white bg-gradient-to-br from-gray-400 via-gray-600 to-gray-900">
          <p>ELECTRICAL</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "MECHANICAL",
      value: "MECHANICAL",
      content: (
        <div
          className="w-full overflow-auto dark:text-neutral-400 scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-black relative h-full rounded-2xl p-10  text-white bg-gradient-to-br from-gray-400 via-gray-600 to-gray-900">
          <p>MECHANICAL</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "CIVIL",
      value: "CIVIL",
      content: (
        <div
          className="w-full overflow-auto dark:text-neutral-400 scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-black relative h-full rounded-2xl p-10  text-white bg-gradient-to-br from-gray-400 via-gray-600 to-gray-900">
          <p>CIVIL</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "MANUFACTURING",
      value: "MANUFACTURING",
      content: (
        <div
          className="w-full overflow-auto dark:text-neutral-400 scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-black relative h-full rounded-2xl p-10  text-white bg-gradient-to-br from-gray-400 via-gray-600 to-gray-900">
          <p>MANUFACTURING</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "INSTRUMENTATION",
      value: "INSTRUMENTATION",
      content: (
        <div
          className="w-full overflow-auto dark:text-neutral-400 scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-black relative h-full rounded-2xl p-10  text-white bg-gradient-to-br from-gray-400 via-gray-600 to-gray-900">
          <p>INSTRUMENTATION</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "META",
      value: "META",
      content: (
        <div
          className="w-full overflow-auto dark:text-neutral-400 scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-black relative h-full rounded-2xl p-10  text-white bg-gradient-to-br from-gray-400 via-gray-600 to-gray-900">
          <p>METULURGY</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "ROBOTICS",
      value: "ROBOTICS",
      content: (
        <div
          className="w-full overflow-auto dark:text-neutral-400 scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-black relative h-full rounded-2xl p-10  text-white bg-gradient-to-br from-gray-400 via-gray-600 to-gray-900">
          <p>ROBOTICS</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "RECENT",
      value: "RECENT",
      content: (
        <div
          className="w-full overflow-x-hidden overflow-auto dark:text-neutral-400 scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-black relative h-full rounded-2xl p-10  text-white bg-gradient-to-br from-gray-400 via-gray-600 to-gray-900">
          <p>RECENT HIRING</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div
      className="h-[60rem] md:h-[40rem]  [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <ExpandableCardDemo />
  );
};
