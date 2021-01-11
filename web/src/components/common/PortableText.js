import React from "react"
import clientConfig from "../../../client-config"
import BasePortableText from "@sanity/block-content-to-react"

export const PortableText = ({ blocks }) => (
  <BasePortableText blocks={blocks} {...clientConfig.sanity} />
)
