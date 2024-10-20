const Card = ({ data }) => {
  function replaceWithReadMore(text) {
    // Find the position of the ellipsis (three dots or '…')
    let ellipsisPosition = text.indexOf("…");

    // If ellipsis is found, replace the text after it with "Read more"
    if (ellipsisPosition !== -1) {
      return text.slice(0, ellipsisPosition + 1) + `Read more`;
    }

    // If no ellipsis is found, return the text as is
    return text;
  }

  return (
    <a href={data.url} target="_blank">
      <div className="w-full  flex gap-2 m-1 shadow-lg rounded p-2">
        <div className="w-[30%] h-[full]  flex items-center ">
          <img src={data.image} className="rounded h-full" alt="" />
        </div>
        <div className="w-[70%] flex flex-col justify-between h-[full]">
          <div>
            <h2 className="font-bold text-xl">{data.title}</h2>
            <p className="font-bold text-gray-600">{data.description}</p>

            <div className=" h-20">
              <p>{data.content && replaceWithReadMore(data.content)}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span>
              <span className="text-red-400">
                <b>Source:</b>
              </span>{" "}
              {data.source.name}
            </span>
            <span>
              <span className="text-red-400">
                <b>PublishedAt:</b>
              </span>{" "}
              {data.publishedAt}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
