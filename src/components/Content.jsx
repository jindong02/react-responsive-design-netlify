import React from "react";

export default function Content(props) {
  const { svg, title, job } = props;

  return (
    <div>
      <div className="p-7 group relative rounded-lg border border-gray-50 hover:lg-slate-50 shadow cursor-pointer transition-all ease-in-out delay-50">
        <div className="flex gap-3 items-center">
          {svg}
          <div className="w-full">
            <h2 class="text-2xl capitalize font-semibold ">{title}</h2>
            <p class="text-sm text-gray-600">{job}</p>
            <p class="font-bold ml-2"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
