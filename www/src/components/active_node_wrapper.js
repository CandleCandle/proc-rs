
class ActiveNodeWrapper {
    static Process = 'process';
    static ItemRequirement = 'item-requirement';
    static ItemDefaulted = 'item-defaulted';
    static ItemIo = 'item-io';
    static ItemIntermediate = 'item-io';

    static create(type, node) {
        console.log("creating a ActiveNodeWrapper", type, node);
        switch (type) {
            case ActiveItemNodeWrapper.Process:
                return new ActiveProcessNodeWrapper(type, node);
            case ActiveItemNodeWrapper.ItemRequirement:
                return new ActiveItemRequirementNodeWrapper(type, node);
            case ActiveItemNodeWrapper.ItemDefaulted:
                return new ActiveItemDefaultedNodeWrapper(type, node);
            case ActiveItemNodeWrapper.ItemIo:
                return new ActiveItemImportExportNodeWrapper(type, node);
            case ActiveItemNodeWrapper.ItemIntermediate:
                return new ActiveItemIntermediateNodeWrapper(type, node);
        }
    }
    constructor(type) {
        this.type = type;
    }
    is_process() {
        return this.type === 'process';
    }
    is_item() {
        return this.type.startsWith('item');
    }
    get_requirement_value() {
        return null;
    }
    id() {
        return null;
    }
}

class ActiveItemNodeWrapper extends ActiveNodeWrapper {
    constructor(type, item) {
        super(type);
        this.item = item;
        console.log("created ActiveItemNodeWrapper", type, item);
    }
    display() {
        return this.item.display;
    }
    mode() {
        return 'item';
    }
    get_requirement_value() {
        return 1;
    }
    id() {
        return this.item.id;
    }
    into_requirement() {}
    into_io() {}
    into_intermediate() {
        return ActiveNodeWrapper.create(ActiveNodeWrapper.ItemIntermediate, this.item);
    }
    into_defaulted() {
        return ActiveNodeWrapper.create(ActiveNodeWrapper.ItemDefaulted, this.item);
    }
}

class ActiveProcessNodeWrapper extends ActiveNodeWrapper {
    constructor(type, active_process) {
        super(type);
        this.active_process = active_process;
        console.log("created ActiveProcessNodeWrapper", type, active_process);
    }
    display() {
        return this.active_process.process.display;
    }
}

class ActiveItemRequirementNodeWrapper extends ActiveNodeWrapper {
    constructor(type, requirement) {
        super(type);
        this.requirement = requirement;
        console.log("created ActiveItemRequirementNodeWrapper", type, requirement);
    }
    display() {
        return this.requirement.item.display;
    }
    mode() {
        return 'requirement';
    }
    get_requirement_value() {
        return this.requirement.quantity;
    }
    id() {
        return this.requirement.item.id;
    }
    into_defaulted() {
        return ActiveNodeWrapper.create(ActiveItemNodeWrapper.ItemDefaulted, this.requirement.item);
    }
}

class ActiveItemDefaultedNodeWrapper extends ActiveItemNodeWrapper {
    constructor(type, item) {
        super(type);
        this.item = item;
        console.log("created ActiveItemDefaultedNodeWrapper", type, item);
    }
    mode() {
        return 'io';
    }
}

class ActiveItemImportExportNodeWrapper extends ActiveItemNodeWrapper {
    constructor(type, item) {
        super(type);
        this.item = item;
        console.log("created ActiveItemImportExportNodeWrapper", type, item);
    }
    mode() {
        return 'io';
    }
}

class ActiveItemIntermediateNodeWrapper extends ActiveItemNodeWrapper {
    constructor(type, item) {
        super(type);
        this.item = item;
        console.log("created ActiveItemIntermediateNodeWrapper", type, item);
    }
    mode() {
        return 'intermediate';
    }
}

export { ActiveNodeWrapper, ActiveProcessNodeWrapper, ActiveItemNodeWrapper, ActiveItemDefaultedNodeWrapper, ActiveItemImportExportNodeWrapper, ActiveItemIntermediateNodeWrapper };
