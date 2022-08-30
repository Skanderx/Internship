import ViewExercises from '../../../../Exercises/index'
import { useDispatch } from 'react-redux'
import { ExerciseAdded } from '../../../services/Profiles/Profilesfeatures';
export default function AddExercise({pid,exworkids}){
    
    const dispatch = useDispatch();
    
    const handleadd = (exid) => () =>{
        if ( exworkids.findIndex(x => x.exid == exid)!=-1 ) return console.log("Already in");
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