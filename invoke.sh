aws lambda invoke \
  --function-name MyCleanArchBasicTemplateLambda \
  --cli-binary-format raw-in-base64-out \
  --payload '{"name":"Mat"}' \
  /dev/stdout
