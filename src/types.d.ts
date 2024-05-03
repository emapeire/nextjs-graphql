export interface DataStructure {
  data: Data
}

export interface Data {
  characters: Characters
}

export interface Characters {
  results: Result[]
}

export interface Result {
  name: string
  image: string
}
