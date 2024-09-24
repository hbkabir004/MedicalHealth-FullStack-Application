import React from "react";
import StatCard from "./StatCard";

const statisticsData = [
  {
    id: 1,
    icon: "/icons/doctors-icon.png",
    count: "+1200",
    label: "Doctors",
    description:
      "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.",
  },
  {
    id: 2,
    icon: "/icons/home-icon.png",
    count: "+1200",
    label: "Clinics",
    description:
      "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.",
  },
  {
    id: 3,
    icon: "/icons/specialist.png",
    count: "+100",
    label: "Specialist",
    description:
      "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.",
  },
];

function StatisticsSection() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid row-gap-8 lg:grid-cols-3 place-items-center">
        {statisticsData.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>
    </div>
  );
}

export default StatisticsSection;
