import { useRouter } from 'next/router';

export default function SurveyCard(props) {

    const id = props.survey.id;
    const router = useRouter();

    const edit = () => router.push("/dashboard/edit/" + id);

    return (
        <div>
            <p>
                Survey: {props.survey.name}
            </p>
            <p>
                <span onClick={edit}>Edit</span> | <span>Delete</span>
            </p>
        </div>
    )
}
