/*
//JSX语法和虚拟DOM之间的关系
//DeleAccount为JSX写法
//DeleteAccoutVirtual虚拟DOM json写法
const DeleAccount = () => {
    <div>
        <p>Are you sure?</p>
        <DangerButton>Confirm</DangerButton>
        <Button color="blue">Cancel</Button>
    </div>
}
//虚拟DOM对应如下
const commonButton = ({ color, text }) => {
    return {
        type: "button",
        props: {
            className: `btn btn-${color}`,
            children: {
                type: 'em',
                props: {
                    children: text
                }
            }
        }
    }
}
const DangerButton = ({ text }) => ({
    type: commonButton,
    props: {
        color: "red",
        children: text
    }
})
const DeleteAccoutVirtual = () => ({
    type: "div",
    props: {
        children: [
            {
                type: "p",
                props: {
                    children: "Are you sure?",
                }
            },
            {
                type: DangerButton,
                children: {
                    children: "Confirm"
                }
            },
            {
                type: commonButton,
                props: {
                    color: "blue",
                    children: "Cancel"
                }
            }
        ]
    }
})

*/