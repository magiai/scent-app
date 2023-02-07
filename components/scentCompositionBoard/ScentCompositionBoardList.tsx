import styles from './scentCompositionBoard.module.css'
import { useAppSelector } from "../../app/redux/hooks"
import { selectChosenScents } from '../../app/redux/slices/scentSlice'
import { ScentCompositionBoardListItem } from './ScentCompositionBoardListItem'

interface ICompositionList {
    note: string
}

export const ScentCompositionBoardList = ({
    note
}: ICompositionList) => {
    const selectedScents = useAppSelector(selectChosenScents)
    const chosenScents = Object.values(selectedScents)[0]

    return (
        <ul className = { styles.list }>
            {
                chosenScents?.map(scent => {
                    if (scent.note === note) {
                        return (
                            <ScentCompositionBoardListItem 
                                key = { `${ scent.id }-chosenScent` } 
                                scentId = { scent.id } 
                                scentLabel = { scent.label }/>
                        )
                    }
                })
            }
        </ul>
    )
}