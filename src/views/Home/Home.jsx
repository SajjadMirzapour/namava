import Special from "src/views/Home/components/special/special";
import Cartoon from "src/views/Home/components/cartoon/Cartoon";
import Live from "src/views/Home/components/live/Live";
import BackGround from "src/views/Home/components/backGround/backGround";
import Detail from "src/views/Home/components/detail/Detail";
import { DetailMovieProvider } from 'src/providers';

export default function Home() {
    return (
        <DetailMovieProvider>
            <div>
                <BackGround />
                <Special />
                <Detail />
                <Live />
                <Cartoon />
            </div>
        </DetailMovieProvider>
    )
}