import React from 'react'
import clientConfig from '../../client-config'
// import { serializers } from './serializer'
import BasePortableText from '@sanity/block-content-to-react'

export const PortableText = ({ blocks }) => (
  <BasePortableText blocks={blocks} {...clientConfig.sanity} />
)