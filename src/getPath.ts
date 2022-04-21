const path = require('path')

const getFilePath = (fileName: string): string => {
    return path.resolve(fileName)
}

export default getFilePath