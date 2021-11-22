
function Image({src, style, height, width}) {
  return (
    <div>
      <img src={src} style={style} height={height} width={width} />
    </div>
  );
}

export default Image;