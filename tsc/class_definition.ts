class Tree {

    constructor(private leaf: string) { 
        this.leaf = leaf;
    }

    public moveLeave() {
        this.leaf = "green leaf";

        console.log(`The ${this.leaf} is moving to the right`)
    }

}

let tree1 = new Tree("Green leaf");

console.log(tree1.leaf);//gives mistake because of privacy

