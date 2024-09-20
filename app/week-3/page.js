import Link from 'next/link';
import ItemComponent from './../../_components/itemlist-component';

const itemList = {
    item1: {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy"
    },
    item2: {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery"
    },
    item3: {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy"
    },
    item4: {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce"
    },
    item5: {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce"
    },
    item6: {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat"
    },
    item7: {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods"
    },
    item8: {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods"
    },
    item9: {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household"
    },
    item10: {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household"
    },
    item11: {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household"
    },
    item12: {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household"
    }
};


export default function Page() {
    return (
        <main>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center"}}>
            <h1 style={{fontSize: '36px'}}>Shopping List</h1>
            {Object.keys(itemList).map((key) => (
                <ItemComponent key={key} item={itemList[key]} />
            ))}
            </div>
            <Link href="/">Back to main page</Link>
        </main>
    );
}