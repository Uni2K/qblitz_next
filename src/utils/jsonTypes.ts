export interface Root {
    data: Datum[]
    filename: string
    metadata: Metadata4
}

export interface Datum {
    institution: string
    name: string
    database: string
    stages: Stage[]
}

export interface Stage {
    name: string
    data?: StageDatum[]
    metadata?: Metadata2
    errors?: Error[]
}

export interface StageDatum {
    status: string
    content?: string
    metadata?: Metadata
}

export interface Metadata {
    countFound?: string
    documentIdentifier?: string
    id?: string
    new?: string
    old?: string
    countDatabase?: string
    countDownloaded?: string
    link?: string
    countDuplicates?: string
    count?: string
    actID?: string
    countTotal?: string
    numbering?: string
    flag?: string
    countOverview?: string
    countRegulatory?: string
    countSearch?: string
}

export interface Metadata2 {
    duration: string
}

export interface Error {
    content: string
    location: string
    metadata: Metadata3
}

export interface Metadata3 {
    link: string
}

export interface Metadata4 {
    live: string
    timestamp: string
    timestamp_exact: string
}
