import React from 'react';
import Title from './Title';

function Team({ scrollPositionHeader}) {
  return (
    <div className="center-div">
        <Title scrollPositionHeader={scrollPositionHeader} text="Meet the Team"/>
        <div class="profile-grid">
            <div class="profile-card">
            <img src="/images/JohnOyter.jpg" alt="John Oyer" class="profile-image" style={{
                objectPosition: "50% 15%", /* custom shift, particular to image */
            }}/>
            <div class="profile-info">
                <h3>John Oyer</h3>
                <p>Developer</p>
            </div>
            </div>

            <div class="profile-card">
            <img src="/images/emerson-hodder.jpg" alt="Emerson Hodder" class="profile-image"/>
            <div class="profile-info">
                <h3>Emerson Hodder</h3>
                <p>Developer</p>
            </div>
            </div>

            <div class="profile-card">
            <img src="/images/donghua-zhang.jpg" alt="DongHua Zhang" class="profile-image" style={{
                objectPosition: "50% 30%", /* custom shift, particular to image */
            }}/>
            <div class="profile-info">
                <h3>DongHua Zhang</h3>
                <p>Developer</p>
            </div>
            </div>

            <div class="profile-card">
            <img src="/images/yihao-geng.jpg" alt="YiHao Geng" class="profile-image" style={{
                objectPosition: "50% 20%", /* custom shift, particular to image */
            }}/>
            <div class="profile-info">
                <h3>YiHao Geng</h3>
                <p>Developer</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Team;