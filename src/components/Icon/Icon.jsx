const Icon = ({name, fill, stroke, width = 42, height = 17}) => {
   return (
    <svg width={width} height={height} fill={fill} stroke={stroke}>
        <use href={`/src/images/icon.svg#${name}`}></use>
    </svg>
   );
};

export default Icon
   