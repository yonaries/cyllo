import { useEffect, useState } from "react"

interface Props {
    items: [],
    command: Function,
}

const CommandList = (props: Props) => {
    let [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        return () => {
            function items() {
                setSelectedIndex(
                    selectedIndex = 0
                )
            }
        }
    }, [selectedIndex])


    function onKeyDown(event: any) {
        if (event.key === 'ArrowUp') {
            upHandler()
            return true
        }

        if (event.key === 'ArrowDown') {
            downHandler()
            return true
        }

        if (event.key === 'Enter') {
            enterHandler()
            return true
        }

        return false
    }

    function upHandler() {
        selectedIndex = ((selectedIndex + props.items.length) - 1) % props.items.length
    }

    function downHandler() {
        selectedIndex = (selectedIndex + 1) % props.items.length
    }

    function enterHandler() {
        selectItem(selectedIndex)
    }

    function selectItem(index: number) {
        const item = props.items[index]

        if (item) {
            props.command(item)
        }
    }


    return props.items ? props.items.map((item: any) => {
        <button className="item" key={item.index} onClick={() => selectItem(item.index)}>{item}</button>
    }) : <p>No suggestion</p>
}


export default CommandList;