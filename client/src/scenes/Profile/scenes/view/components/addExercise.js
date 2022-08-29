import ViewExercises from '../../../../Exercises/index'
import { useDispatch } from 'react-redux'
import { ExerciseAdded } from '../../../services/Profiles/Profilesfeatures';
export default function AddExercise({pid,exWorkIds}){
    
    const dispatch = useDispatch();
    
    const handleadd = (exid) => () =>{
        if ( exWorkIds.findIndex(x => x.id == exid) ) return console.log("Already in");
        dispatch(
            ExerciseAdded({pid,exid})
        );
    }

    if (pid == null) {
        return (
            <section>
                <h2>No Pid</h2>
            </section>
        )
    }
    return (
        <ViewExercises
        handleadd={handleadd}
        />
    )
}