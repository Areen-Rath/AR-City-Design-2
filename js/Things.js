AFRAME.registerComponent("atoms", {
    init: async function() {
        var things = await this.getThings();
    
        var barcodes = Object.keys(things);
    
        barcodes.map(barcode => {
            var element = things[barcode];
            this.createThing(element);
        });
    },
    getThings: function() {
        return fetch("js/model.json")
            .then(res => res.json())
            .then(data => data);
    },
    createThing: function(thing) {
        var scene = document.getElementById("main-scene");

        var marker = document.createElement("a-marker");
        marker.setAttribute("id", `marker-${barcodeValue}`);
        marker.setAttribute("type", "barcode");
        marker.setAttribute("thing_name", thing);
        marker.setAttribute("value", barcodeValue);
        marker.setAttribute("markerhandler", {});
        scene.appendChild(marker);

        var model = document.createElement("a-entity");
        model.setAttribute("gltf-model", `url(${thing.model_url})`);
        model.setAttribute("position", thing.position);
        model.setAttribute("rotation", thing.rotation);
        model.setAttribute("scale", thing.scale);
        scene.appendChild(model);
    }
});