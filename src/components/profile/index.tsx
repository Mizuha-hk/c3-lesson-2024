import Image from 'next/image';
import './index.css';

export function Profile() {
  return (
    <div className="root">
      <div className="profile-card">
        <Image src="/sample1.jpg" width={300} height={300} alt="profile" />
        <div className="profile">
          <h1 className="name">自分の名前</h1>
          <p className="introduction">自己紹介文だよ Lorem ipsum dolor sit amet esse voluptua velit sed adipiscing kasd. Eirmod dolor elitr hendrerit elitr ea elitr at vel wisi molestie illum elitr consequat eirmod no dolor tincidunt quod. Sit dolore est gubergren sed nonumy aliquyam ea tempor exerci wisi lorem ipsum et consequat amet.</p>
        </div>
      </div>
    </div>
  );
}