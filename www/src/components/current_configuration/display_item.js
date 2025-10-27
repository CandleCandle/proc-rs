


class DisplayItem {
    static INTERMEDIATE = "intermediate";
    static IMPORT_EXPORT = "import_export";
    static REQUIREMENT = "requirement";
    constructor(type) {
        this.type = type;
    }
    is_intermediate() { return this.type == DisplayItem.INTERMEDIATE; }
    is_req() { return this.type == DisplayItem.REQUIREMENT; }
    is_io() { return this.type == DisplayItem.IMPORT_EXPORT; }
    req_quantity() { return null; }
}
class DisplayReq extends DisplayItem {
    constructor(req) {
        super(DisplayItem.REQUIREMENT);
        this.req = req;
    }
    id() { return this.req.item.id; }
    display() { return this.req.item.display; }
    req_quantity() { return this.req.quantity; }
}
class DisplayIO extends DisplayItem {
    constructor(item) {
        super(DisplayItem.IMPORT_EXPORT);
        this.item = item;
    }
    id() { return this.item.id; }
    display() { return this.item.display; }
}
class DisplayIntermediate extends DisplayItem {
    constructor(item) {
        super(DisplayItem.INTERMEDIATE);
        this.item = item;
    }
    id() { return this.item.id; }
    display() { return this.item.display; }
}


export { DisplayItem, DisplayReq, DisplayIO, DisplayIntermediate }
