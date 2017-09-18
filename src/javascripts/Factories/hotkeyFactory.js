ngapp.service('hotkeyFactory', function() {
    this.mainTreeHotkeys = {
        rightArrow: 'handleRightArrow',
        leftArrow: 'handleLeftArrow',
        upArrow: 'handleUpArrow',
        downArrow: 'handleDownArrow',
        pageUp: 'handlePageUp',
        pageDown: 'handlePageDown',
        enter: 'handleEnter',
        delete: 'handleDelete',
        f: [{
            modifiers: ['ctrlKey', 'shiftKey'],
            callback: 'toggleAdvancedSearch'
        }, {
            modifiers: ['ctrlKey'],
            callback: 'toggleSearchBar'
        }]
    };

    this.recordTreeHotkeys = {
        rightArrow: 'handleRightArrow',
        leftArrow: 'handleLeftArrow',
        upArrow: 'handleUpArrow',
        downArrow: 'handleDownArrow',
        pageUp: 'handlePageUp',
        pageDown: 'handlePageDown',
        f: [{
            modifiers: ['ctrlKey'],
            callback: 'toggleSearchBar'
        }],
        a: [{
            modifiers: ['ctrlKey'],
            callback: 'toggleAddressBar'
        }],
        r: [{
            modifiers: ['ctrlKey'],
            callback: 'toggleReplaceBar'
        }],
        f6: 'focusAddressInput'
    };

    this.treeSearchHotkeys = {
        escape: 'closeSearch',
        enter: [{
            modifiers: ['shiftKey'],
            callback: 'previousResult'
        }, {
            modifiers: [],
            callback: 'nextResult'
        }],
        x: [{
            modifiers: ['altKey'],
            callback: 'toggleExact'
        }],
        else: [{
            modifiers: ['altKey'],
            callback: 'setSearchBy'
        }]
    };

    this.contextMenuHotkeys = {
        rightArrow: 'handleRightArrow',
        leftArrow: 'handleLeftArrow',
        upArrow: 'handleUpArrow',
        downArrow: 'handleDownArrow',
        escape: 'closeMenu',
        enter: 'clickItem'
    };

    this.dropdownHotkeys = {
        downArrow: 'toggleDropdown',
        enter: 'toggleDropdown'
    };

    this.dropdownItemsHotkeys = {
        upArrow: 'handleUpArrow',
        downArrow: 'handleDownArrow',
        escape: 'handleEscape',
        enter: 'handleEnter'
    };

    this.listViewHotkeys = {
        upArrow: 'handleUpArrow',
        downArrow: 'handleDownArrow',
        space: 'handleSpace',
        escape: 'clearSelection',
        enter: 'handleEnter',
        a: [{
            modifiers: ['ctrlKey'],
            callback: 'selectAll'
        }]
    };

    this.automateModalHotkeys = {
        enter: [{
            modifiers: ['ctrlKey'],
            callback: 'runScript'
        }],
        delete: [{
            modifiers: ['ctrlKey'],
            callback: 'deleteScript'
        }],
        f2: 'handleF2',
        n: [{
            modifiers: ['ctrlKey'],
            callback: 'newScript'
        }],
        s: [{
            modifiers: ['ctrlKey'],
            callback: 'saveScript'
        }]
    }
});