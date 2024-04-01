import {ReactNode} from "react";
import IconAdd from "@/components/icons/iconAdd";
import IconLightning from "@/components/icons/iconLightning";
import IconOverview from "@/components/icons/iconOverview";
import IconDelete from "@/components/icons/iconDelete";
import IconError from "@/components/icons/iconError";

export function getStatusScore(status: string) {
    switch (status) {
        case "added":
            return 1000
        case "changed":
        case "changeManual":
        case "completed":
            return 1
        case "deleted":
        case "deletedImportant":
        case "deletedFalse":
            return 100
    }
    return 0
}

export function getColorSchema(status: string): string {
    switch (status) {
        case "added":
            return "positive"
        case "changeManual":
            return "neutralEmphasized"
        case "changed":
        case "completed":
            return "neutral"
        case "deletedImportant":
            return "negativeEmphasized"
        case "deleted":
        case "error":
        case "deletedFalse":
            return "negative"
    }
    return ""
}

export function getIcon(status: string): ReactNode | undefined {
    switch (status) {
        case "added":
            return <IconAdd className={"w-4"}/>
        case "changed":
        case "changeManual":
            return <IconLightning className={"w-3"}/>
        case "completed":
            return <IconOverview className={"w-3 "}/>
        case "deleted":
        case "deletedImportant":
        case "deletedFalse":
            return <IconDelete className={"w-6"}/>
        case "error":
            return <IconError className={"w-3"}/>
    }
    return undefined
}