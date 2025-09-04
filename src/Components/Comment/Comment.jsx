import CommentBox from "./CommentBox"

const data=[
    {
        userName:'Mahesh',
        comment:'Hello Guys',
        replies:[
            {
                userName:'Kiran',
                comment:'Hi mahesh, How are you?',
                replies:[
                    {
                        userName:'Mani',
                        comment:'Whatsup guys?',
                        replies:[
                            {
                                userName:'Kilo',
                                comment:'bye guys'
                            }
                        ]
                    }
            ]
            }
        ]
    },
     {
        userName:'Mahesh',
        comment:'Hello Guys',
        replies:[
            {
                userName:'Kiran',
                comment:'Hi mahesh, How are you?',
                replies:[
                    {
                        userName:'Mani',
                        comment:'Whatsup guys?'
                    }
            ]
            }
        ]
    }
]





const Comment=()=>{
    return (
        <div>
           <CommentBox data={data} />
        </div>
    )
}

export default Comment