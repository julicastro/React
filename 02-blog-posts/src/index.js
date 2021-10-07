import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './images/01.jpg';
import profile2 from './images/02.jpg';
import profile3 from './images/03.jpg';
import SingleComment from './SingleComment';
import UserCard from './UserCard';




const App = () => {
    return (
        <div className='ui comments'>
            <UserCard>
                <div>
                    Hello my name is Julian and I live in Buenos Aires
                </div>
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Alex'
                    date='Today at 5:00PM'
                    text="Amazing!"
                    picture={profile1}
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Jack'
                    date='Today at 4:00AM'
                    text='Very nice!'
                    picture={profile2}
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Sarah'
                    date='Yesterday at 7:00PM'
                    text='So cute! '
                    picture={profile3}
                />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)