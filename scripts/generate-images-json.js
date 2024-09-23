// scripts/generate-images-json.js

const fs = require('fs');
const path = require('path');

function generateImagesJson() {
    const assetsDir = path.join(__dirname, '..', 'assets');
    const outputFile = path.join(__dirname, '..', 'images.json');

    // 读取 assets 目录下的文件
    const files = fs.readdirSync(assetsDir);

    // 过滤出图片文件（根据需要支持的格式调整正则表达式）
    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
                        .map(file => `assets/${file}`);

    // 生成 JSON 数据
    const data = {
        images: images
    };

    // 将数据写入 images.json 文件
    fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

    console.log('images.json 已生成。');
}

generateImagesJson();

