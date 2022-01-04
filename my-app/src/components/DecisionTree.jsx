import React from 'react';
import Tree from 'react-d3-tree';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.

const fullTreeData = {
    name: 'Outlook',
    children: [
        {
            name: 'Windy',
            attributes: {
                "Outlook": "Rainy"
            },
            children: [
                {
                    name: 'No',
                },
                {
                    name: 'YES',
                },
            ],
        },
        {
            name: "YES",
            attributes: {
                "Outlook": "Overcast"
            },
        },
        {
            name: "Humidity",
            attributes: {
                "Outlook": "Sunny"
            },
            children: [
                {
                    name: "YES",
                    attributes: {
                        "Humidity": "Normal"
                    },
                },
                {
                    name: "NO",
                    attributes: {
                        "Humidity": "High"
                    },
                }
            ]
        }
    ],
};

const startingTreeData = {
    name: 'Outlook',
    children: [
        {
            name: '?',
            attributes: {
                "Outlook": "Rainy"
            }
        },
        {
            name: "?",
            attributes: {
                "Outlook": "Overcast"
            },
        },
        {
            name: "?",
            attributes: {
                "Outlook": "Sunny"
            }
        }
    ],
};


/*const orgChart ={
    "name": "Outlook",
    "rule": null,
    "children": [
            {
                    "name": "Windy",
                    "rule": "Rainy",
                    "links":"Helloo",
                    "atributes": {
                        "department": "Rainy"
                    },
                    "children": [
                            {
                                    "name": "NO",
                                    "rule": "True"
                            },
                            {
                                    "name": "YES",
                                    "rule": "False"
                            }
                    ]
            },
            {
                    "name": "YES",
                    "rule": "Overcast"
            },
            {
                    "name": "Humidity",
                    "rule": "Sunny",
                    "children": [
                            {
                                    "name": "YES",
                                    "rule": "Normal"
                            },
                            {
                                    "name": "NO",
                                    "rule": "High"
                            }
                    ]
            }
    ]
}*/

const DecisionTree = ({data}) => {
    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="treeWrapper" style={{ width: '35em', height: '35em' }}>
            <Tree data={data || startingTreeData} branchNodeClassName="node__branch"/>
        </div>
    );
}
export default DecisionTree;