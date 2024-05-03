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
  id: string
  name: string
  image: string
}
