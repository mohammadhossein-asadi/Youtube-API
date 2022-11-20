
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  return (
    <div className="ui segment">
      <h4 className="ui header">{video.snippet.title}</h4>
    </div>
  )
}

export default VideoDetail