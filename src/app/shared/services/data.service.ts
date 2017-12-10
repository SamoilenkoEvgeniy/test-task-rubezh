import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DataService {

    public statsTree;
    public statsTreeSecond;

    private dataChanged = new Subject<string>();
    dataChanged$ = this.dataChanged.asObservable();

    constructor() {
    }

    dataChangedMethod(string) {
        this.dataChanged.next(string);
    }

    getTreeStructure() {
        this.statsTree = [{
            label: 'System',
            'expandedIcon': 'fa-folder-open',
            'collapsedIcon': 'fa-folder',
            expanded: true,
            children: [{
                'label': 'Core',
                'data': 'Documents Folder',
                'expandedIcon': 'fa-folder-open',
                'collapsedIcon': 'fa-folder',
                expanded: true,
                'children': [{
                    'label': 'Камеры',
                    'data': 'Work Folder',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                    expanded: true,
                    'children': [{
                        'label': 'Офис 1',
                        'expandedIcon': 'fa-folder-open',
                        'collapsedIcon': 'fa-folder',
                        expanded: true,
                        'children': [
                            {
                                'label': 'Общий вид',
                                'styleClass': 'red'
                            },
                            {
                                'label': 'Оборудование',
                                'expandedIcon': 'fa-folder-open',
                                'collapsedIcon': 'fa-folder',
                                'children': [
                                    {
                                        'label': 'Cam 1 (Сервер)'
                                    },
                                    {
                                        'label': 'Cam 2'
                                    }
                                ]
                            }
                        ]
                    }, {
                        'label': 'Этаж',
                    }, {
                        'label': 'Лестница',
                    }, {
                        'label': 'Офис 2',
                        'expandedIcon': 'fa-folder-open',
                        'collapsedIcon': 'fa-folder',
                        'children': [
                            {
                                'label': 'Общий вид'
                            }
                        ]
                    }]
                }]
            },
                {
                    'label': 'Core 2',
                    'data': 'Documents Folder',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                    'children': [{
                        'label': 'Датчики',
                        'data': 'Work Folder',
                        'expandedIcon': 'fa-folder-open',
                        'collapsedIcon': 'fa-folder',
                        expanded: true,
                        'children': [{
                            'label': 'Офис 1',
                            'expandedIcon': 'fa-folder-open',
                            'collapsedIcon': 'fa-folder',
                            expanded: true,
                            'children': [
                                {
                                    'label': 'Датчик дыма 1'
                                },
                                {
                                    'label': 'Датчик дыма 2'
                                }
                            ]
                        },
                            {
                                'label': 'Офис 2',
                                'expandedIcon': 'fa-folder-open',
                                'collapsedIcon': 'fa-folder',
                                'children': [
                                    {
                                        'label': 'Датчик дыма 1'
                                    }
                                ]
                            }]
                    }]
                }
            ]
        }];

        return this.statsTree;
    }

    getTreeStructureSecond() {
        this.statsTreeSecond = [{
            label: 'System',
            'expandedIcon': 'fa-folder-open',
            'collapsedIcon': 'fa-folder',
            expanded: true,
            children: [{
                'label': 'Core',
                'data': 'Documents Folder',
                'expandedIcon': 'fa-folder-open',
                'collapsedIcon': 'fa-folder',
                expanded: true,
                'children': [{
                    'label': 'Камеры',
                    'data': 'Work Folder',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                    expanded: true,
                    'children': [{
                        'label': 'Офис 1',
                        'expandedIcon': 'fa-folder-open',
                        'collapsedIcon': 'fa-folder',
                        expanded: true,
                        'children': [
                            {
                                'label': 'Общий вид'
                            },
                            {
                                'label': 'Оборудование',
                                'expandedIcon': 'fa-folder-open',
                                'collapsedIcon': 'fa-folder',
                                'children': [
                                    {
                                        'label': 'Cam 1 (Сервер)'
                                    },
                                    {
                                        'label': 'DATA_CHANGED'
                                    }
                                ]
                            }
                        ]
                    }, {
                        'label': 'DATA_CHANGED',
                    }, {
                        'label': 'Лестница',
                    }, {
                        'label': 'Офис 2',
                        'expandedIcon': 'fa-folder-open',
                        'collapsedIcon': 'fa-folder',
                        'children': [
                            {
                                'label': 'Общий вид'
                            }
                        ]
                    }]
                }]
            },
                {
                    'label': 'Core 2',
                    'data': 'Documents Folder',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                    'children': [{
                        'label': 'Датчики',
                        'data': 'Work Folder',
                        'expandedIcon': 'fa-folder-open',
                        'collapsedIcon': 'fa-folder',
                        expanded: true,
                        'children': [{
                            'label': 'Офис 1',
                            'expandedIcon': 'fa-folder-open',
                            'collapsedIcon': 'fa-folder',
                            expanded: true,
                            'children': [
                                {
                                    'label': 'Датчик дыма 1'
                                },
                                {
                                    'label': 'Датчик дыма DATA_CHANGED'
                                }
                            ]
                        },
                            {
                                'label': 'Офис 2',
                                'expandedIcon': 'fa-folder-open',
                                'collapsedIcon': 'fa-folder',
                                'children': [
                                    {
                                        'label': 'Датчик дыма 1'
                                    }
                                ]
                            }]
                    }]
                }
            ]
        }];

        return this.statsTreeSecond;
    }

    cMap(obj, compare_obj, differences) {
        obj.map(
            (item, _index) => {
                console.log(compare_obj[_index]['label'], item['label']);
                if (compare_obj[_index]['label'] !== item['label']) {
                    differences.push({
                        'tree1': item['label'],
                        'tree2': compare_obj[_index]['label'],
                    });
                    item['styleClass'] = 'marked';
                }
                if (item['children']) {
                    this.cMap(item['children'], compare_obj[_index]['children'], differences);
                }
            }
        );
    }

}
