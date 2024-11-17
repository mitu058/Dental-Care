import React from "react";

const FeedBack = ({ feedbackData }) => {
  console.log(feedbackData);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto">
      {feedbackData.map((feed) => (
        <div className="card bg-base-100  shadow-xl mb-5">
          <div className="card-body">
            <div className="flex items-center space-x-3">
              <img
                className="w-14 h-14 rounded-full"
                src={feed.userImg}
                alt=""
              />
             
             <h2 className="card-title">{feed.name}</h2>
             <p className="text-right">{new Date().toLocaleDateString()}</p>
             
            </div>
            <p>{feed.review}</p>
            <div className="card-actions justify-end items-center space-x-3">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedBack;
