import React, {useState, useContext, useEffect} from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import {FooterContainer} from './footer';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import {Card, Header, Loading, Player} from '../components';
import Fuse from 'fuse.js';

export function BrowseContainer({slides}){
    const [category, setCategory] = useState('series');
    const [slideRows, setSlideRows] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    const {firebase} = useContext(FirebaseContext);
    
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
    }, [profile.displayName]);


    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(()=>{
        const fuse = new Fuse(slideRows, {keys: ['data.description', 'data.title', 'data.genre']});
        const results = fuse.search(searchTerm).map(({item})=> item);
        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0){
            setSlideRows(results);
        } else{
            setSlideRows(slides[category]);
        }
    }, [searchTerm])

    return profile.displayName ? (
        <>
            {loading ? (
                <Loading src= {user.photoURL}/>
            ) : (
                <Loading.ReleaseBody />
            )}
            <Header src="deadpool" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                        <Header.TextLink active= {category === 'series' ? 'true' : 'false'} onClick = {() => setCategory('series')} >Series</Header.TextLink>
                        <Header.TextLink active= {category === 'movies' ? 'true' : 'false'} onClick = {() => setCategory('movies') }>Movies</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search serachTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src = {user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src ={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out of Netflix</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>Watch Deadpool 2</Header.FeatureCallOut>
                    <Header.Text>
                        Deadpool protects a young mutant Russell from the authorities and gets thrown in prison. However, he escapes and forms a team of mutants to prevent a time-travelling mercenary from killing Russell.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                            <Card.Feature category={category}>
                                <Player>
                                    <Player.Button />
                                    <Player.Video src="/videos/bunny.mp4" />
                                </Player>
                            </Card.Feature>
                    </Card>
                ))}
            </Card.Group>
            <FooterContainer/>
        </>
        
    ) : (
        <SelectProfileContainer user = {user} setProfile={setProfile}/>

    );

}

    
    
    