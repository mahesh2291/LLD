const CommentBox=({data})=>{
    return data.map((comment)=>{
        return (
            <div style={{borderLeft:'2px solid black'}}>
            <div style={{display: 'flex'}}>
                <img  width={'40px'} src="https://cdn-icons-png.flaticon.com/256/2111/2111589.png" />
                <p style={{marginLeft:'10px'}}><strong>{comment.userName}</strong></p>
            </div>
            <div style={{marginLeft:'50px',marginTop:'-30px'}}>
                <p>{comment.comment}</p>
            </div>
            {
                comment.replies && <div style={{marginLeft:'50px'}}><CommentBox data={comment.replies} /></div>
            }
         </div>
        )
    })
}

export default CommentBox