declare module namespace {

    export interface FieldAliases {
        OBJECTID: string;
        NAAM: string;
        STRAATNAAM: string;
        HUISNUMMER: string;
        POSTCODE: string;
        DISTRICT: string;
        TYPE: string;
        BEGELEIDING: string;
        TELEFOON: string;
        OPENINGSUREN: string;
        KOSTPRIJS: string;
        BEGINDATUM: string;
        OPMERKING: string;
        WEBSITE: string;
        GISID: string;
    }

    export interface SpatialReference {
        wkid: number;
        latestWkid: number;
    }

    export interface Field {
        name: string;
        type: string;
        alias: string;
        length?: number;
    }

    export interface Attributes {
        OBJECTID: number;
        NAAM: string;
        STRAATNAAM: string;
        HUISNUMMER: string;
        POSTCODE: string;
        DISTRICT: string;
        TYPE: string;
        BEGELEIDING: string;
        TELEFOON: string;
        OPENINGSUREN: string;
        KOSTPRIJS: string;
        BEGINDATUM?: any;
        OPMERKING: string;
        WEBSITE?: any;
        GISID: string;
    }

    export interface Geometry {
        x: number;
        y: number;
    }

    export interface Feature {
        attributes: Attributes;
        geometry: Geometry;
    }

    export interface RootObject {
        displayFieldName: string;
        fieldAliases: FieldAliases;
        geometryType: string;
        spatialReference: SpatialReference;
        fields: Field[];
        features: Feature[];
    }

}

