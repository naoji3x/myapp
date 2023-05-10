import getConfig from 'next/config'

const url = (filename: string): string => {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: { urlPrefix: string }
  }
  return publicRuntimeConfig.urlPrefix + filename
}

export default url