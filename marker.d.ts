declare var marker: marker.marker;

declare module marker {
    export interface marker {
        validators: IValidators;
    }

    export interface IValidators {
        isEmail(input: string): boolean;
    }
}

declare module "./marker/validators" {
    export interface isEmail {
        (input: string): boolean;
    }
}

export = marker;