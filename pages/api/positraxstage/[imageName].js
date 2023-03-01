// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var Minio = require('minio')

const s3Client = new Minio.Client({
  endPoint: 's3.us-east-1.amazonaws.com',
  accessKey: 'AKIAW3NHE5UWUEA6WUHA',
  secretKey: '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'
});

export default (req, res) => {
  const { imageName } = req.query;
  s3Client.getObject("471186337069-rx-image-prod", "positraxstage/"+imageName, (err, stream) => {
    if (err) return res.status(500).send(err);
    const contentType = stream.headers['content-type'];

    contentType && res.setHeader('Content-Type', contentType);
    stream.pipe(res);
  });
}
