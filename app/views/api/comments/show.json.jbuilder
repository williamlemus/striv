json.comment do
  json.partial!('/api/comments/comment', comment: @comment)
end
json.user do
  json.partial!('/api/users/user', user: @comment.user)
end
