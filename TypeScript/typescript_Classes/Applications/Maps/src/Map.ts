
interface MapOptions {
    zoom: number;
    center: {
        lat: number,
        lng: number
    }
}

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
    markerContent(): string;
    color: string;
}

export class CustomMap {
    private googleMap: google.maps.Map
    public div: string
    public options: MapOptions

    constructor(div: string, options: MapOptions) {
        this.div = div;
        this.options = options
        this.googleMap = new google.maps.Map(document.getElementById(this.div), {
                    zoom: this.options.zoom,
                    center: this.options.center
                })
    }

     addMarker(entity: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: entity.location.lat,
                lng: entity.location.lng
            }
        })
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
               content: entity.markerContent()
            })
            infoWindow.open(this.googleMap, marker)
        })
     }
};