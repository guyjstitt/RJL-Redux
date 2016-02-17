export class FileListToArrayValueConverter {
    toView(fileList) {
        let files = [];
        if (!fileList) {
            return files;
        }
        for(let i = 0; i < fileList.length; i++) {
            files.push(fileList[i]);
        }
        return files;
    }
}

export class BlobToUrlValueConverter {
    toView(blob) {
        return URL.createObjectURL(blob);
    }
}