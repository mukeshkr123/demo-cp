"use client";

import BookingForm from "@/components/form";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  const time = searchParams.get("time");

  console.log(date);
  console.log(time);

  return (
    <div>
      <BookingForm date={date} time={time} />
    </div>
  );
};

export default page;
