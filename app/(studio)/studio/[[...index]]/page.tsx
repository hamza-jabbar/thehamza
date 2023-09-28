"use client"

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";               //  This if from the Sanity Config File

export default function Studio() {
    return <NextStudio config={config} />
}


