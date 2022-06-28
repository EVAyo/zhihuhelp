// 常量类别并不多, 因此可以集中编写, 不用额外拆分

// 任务类别
export const Const_Task_Type_用户提问过的所有问题 = 'author-ask-question' as const
export const Const_Task_Type_用户的所有回答 = 'author-answer' as const
export const Const_Task_Type_用户发布的所有文章 = 'author-article' as const
export const Const_Task_Type_用户发布的所有想法 = 'author-pin' as const
export const Const_Task_Type_用户赞同过的所有回答 = 'author-agree-answer' as const
export const Const_Task_Type_用户赞同过的所有文章 = 'author-agree-article' as const
export const Const_Task_Type_用户关注过的所有问题 = 'author-watch-question' as const
export const Const_Task_Type_销号用户的所有回答 = 'block-account-answer' as const
export const Const_Task_Type_话题 = 'topic' as const
export const Const_Task_Type_收藏夹 = 'collection' as const
export const Const_Task_Type_专栏 = 'column' as const
export const Const_Task_Type_文章 = 'article' as const
export const Const_Task_Type_问题 = 'question' as const
export const Const_Task_Type_回答 = 'answer' as const
export const Const_Task_Type_想法 = 'pin' as const

// 排序类目
export const Const_Order_By_创建时间 = 'createAt' as const
export const Const_Order_By_更新时间 = 'updateAt' as const
export const Const_Order_By_赞同数 = 'voteUpCount' as const
export const Const_Order_By_评论数 = 'commentCount' as const

// 排序顺序
export const Const_Order_Desc = 'desc' as const
export const Const_Order_Asc = 'asc' as const

// 图片类别
export const Const_Image_Quilty_高清 = 'raw' as const
export const Const_Image_Quilty_原图 = 'hd' as const
export const Const_Image_Quilty_无图 = 'none' as const
