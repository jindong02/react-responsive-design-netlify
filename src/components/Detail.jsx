import React from "react";

export default function Detail(props) {
  const { svg, date, comment, review } = props;

  return (
    <div>
      <div class="p-7 group relative rounded-lg border border-gray-50 hover:bg-slate-50 shadow cursor-pointer transition-all ease-in-out delay-50">
        <div class="flex gap-3 items-center">
          {svg}
          <div class="w-full">
            <h2 class="text-2xl capitalize font-semibold"></h2>
            <p class="text-sm text-gray-600"></p>
            <div class="min-w-full flex flex-row justify-between items-center">
              <p class="flex items-center text-gray-400">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                </svg>
                {date}
              </p>
              <div class="flex justify-start gap-2 items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  color="#e04270"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(224, 66, 112)" }}
                >
                  <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                </svg>
                {review}
              </div>
            </div>
            <p class="font-bold ml-2">{comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
