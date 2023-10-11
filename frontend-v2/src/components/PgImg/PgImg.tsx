function PgImg(props: { url: string }) {
  return (
    <div>
      <img src={props.url} className='block' />

      <hr className='b-pink b-3' />
      <hr className='b-yellow b-3' />
      <hr className='b-blue b-3' />
    </div>
  );
}

export default PgImg;
