export interface Movie_Ext {
    Title: string;
    Year?: string;
    Rated?: string;
    Released?: string;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    Language?: string;
    Country?: string;
    Awards?: string;
    Poster?: string;
    Ratings?: Rating[];
    Metascore?: string;
    imdbRating?: string;
    imdbVotes?: string;
    imdbID?: string;
    Type?: string;
    DVD?: string;
    BoxOffice?: string;
    Production?: string;
    Website?: string;
    Response?: string;
}

interface Rating {
    Source: string;
    Value: string;
}

export interface Actor {
    image?: string;
    caption?: string;
    birthName?: string;
    birthDate?: { date: Date; age: Number };
    birthPlace?: string;
    occupation?: string;
    yearsActive?: string;
    spouse?: string;
    children?: string;
    father?: string;
    relatives?: string;
    website?: string;
}
