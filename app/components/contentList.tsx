import React from 'react'

const ContentList  = ({children}:{children:string}) => {
  let content = children.split(".").map(text => (
		<li
			className="hover:text-reg hover:bg-slate-200 hover:p-2 transition-all duration-200 sm:shadow-none ease-in-out hover:rounded-md select-none text-sm sm:text-reg shadow-sm p-2"
			key={text}
		>
			{text}.
		</li>
	));
  content.pop();

  return <ul className="md:list-disc list-none">{content}</ul>;
}

export default ContentList