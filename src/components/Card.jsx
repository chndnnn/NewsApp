const Card = ({ data }) => {
  function replaceWithReadMore(text) {
    // Define truncation patterns (ellipsis, or a marker like [chars])
    let ellipsisPatterns = ["…", "...", "[chars]"];

    // Check if the text contains any truncation pattern
    for (let pattern of ellipsisPatterns) {
      let position = text.indexOf(pattern);

      if (position !== -1) {
        // Replace the part after the truncation marker with "Read more"
        return text.slice(0, position + pattern.length) + ` Read more`;
      }
    }

    // If no truncation pattern is found, return the text as is
    return text;
  }

  return (
    <a href={data.url} target="_blank">
      <div className="w-full  md:flex gap-2 m-1 shadow-lg rounded p-2">
        <div className="md:w-[30%] h-[full]  flex items-center ">
          <img src={data.image} className="rounded h-full" alt="" />
        </div>
        <div className="md:w-[70%] flex flex-col justify-between h-[full]">
          <div>
            <h2 className="font-bold text-xl">{data.title}</h2>
            <p className="font-bold text-gray-600">{data.description}</p>

            <div className=" md:h-20">
              <p>{data.content && replaceWithReadMore(data.content)}</p>
            </div>
          </div>
          <div className="flex text-sm gap-3">
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
