import React from 'react';

interface ListItemComponentProps {
  text: string;
  imgSrc: string;
  extraText?: string;
}

const ListItemComponent: React.FC<ListItemComponentProps> = ({ text, imgSrc, extraText }) => {
  return (
    <div className="flex flex-col justify-start items-start mb-4 text-base">
      <div className="flex justify-start flex-col items-start mb-2">
        <div className='flex justify-start '>
            <div className='flex items-center'>
                <img className="w-3 mr-2" src={imgSrc} alt="Icon" />
            </div>
            <p>{text}</p>
        </div>
        
        {extraText && <p className="text-sm ml-5">{extraText}</p>}
      </div>
    </div>
  );
};

export default ListItemComponent;
