import React from "react";
import { Avatar, Typography, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  div: {
    display: "flex",
    alignItems: 'center',
    flexDirection:'column',
    textAlign: 'center'
  },
  avatar: {
    width: 120,
    height: 120,
    margin: 5,
    '&:hover': {
      transition: '1.5s',
      width: 360,
      height: 360
    }      
  },
  mainAvatar: {
    width: 200,
    height: 200,
    marginBottom: 20,
    '&:hover': {
      transition: '1.5s',
      width: 360,
      height: 360
    }      
  },
  text: {
    margin: 20
  },
  friends: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 700 
  }
};

const Introduction = props => (
  <div className={props.classes.div}>

  <Typography color="secondary" variant="display2">
  Hello, let me introduce myself:
  </Typography>
  
    <Typography color='secondary' variant="body1">
      My name is Szabolcs Forreiter and I LOVE coding!
    </Typography>
    <Avatar className={props.classes.mainAvatar} src="https://image.ibb.co/nM5NC8/pjimage.jpg" />
    <Typography color='secondary' variant="body1">
    I am a former professional basketball player and I've played around 16 years
    (I feel old...).
    </Typography>
      <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/24058714_1764379576937989_1170795674288173902_n.jpg?_nc_cat=0&oh=30b81e14308673975f1a7c3a9a1e259e&oe=5BB0B6DB"
      />
    <Typography color='secondary' variant="body1">
      Nowadays I spend less time on the court and more time in front of a PC
      or a laptop.
    </Typography>
      <Avatar
        className={props.classes.avatar}
        src="https://image.ibb.co/d4WZ9o/received_1710075439038524.jpg"
      />
    <Typography className={props.classes.text} color='secondary' variant="headline">
    Different sport but the same passion and focus.
    </Typography>

    <Typography color='secondary' variant="body1">
    I am a very competitive person, I mostly got that from growing up as the
    youngest child.
    </Typography>

    <Typography color='secondary' variant="body1">
    My competitiveness was raised to an other level when I started to
    play basketball at a young age.
    </Typography>
      <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/222400_457571577618802_953377683_n.jpg?_nc_cat=0&oh=80b3523dd0e801982be7807c7fdcf564&oe=5BB2AEB4"
      />
    <Typography color='secondary' variant="body1">
    I feel lucky that on my journey I've met a LOT of interesting people and all of them had a huge impanct on becoming who I am.
    </Typography>
      <div className={props.classes.friends}>
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/29571213_1738458416200226_5999972042978912128_n.jpg?_nc_cat=0&oh=77061013b3d3d0f3b2d4e561cf5ff900&oe=5BB90984"
        />
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/10511352_739023256140298_3090391501228328169_n.jpg?_nc_cat=0&oh=3c00943b018f6ece2191a2ca5d7c76bb&oe=5BB06631"
        />
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/31485379_1884694341588824_4904881149140008960_o.jpg?_nc_cat=0&oh=476678506d8b261f05fd9b18983d80e3&oe=5BA7EF18"
        />
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/13620257_1155103211198965_7483433839128721960_n.jpg?_nc_cat=0&oh=e87c6fb1a19403c0a13b473f2519f166&oe=5BEAE030"
        />
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/25445976_1788928891149724_1958893235075794370_n.jpg?_nc_cat=0&oh=e26d27f49e3477f22306b4b99254338b&oe=5BB7DDC7"
        />
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/30222318_1941612012548077_5566914855618740224_o.jpg?_nc_cat=0&oh=8351c11bee51aa2596f037ad2ffed4e6&oe=5BA29D37"
        />
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t31.0-8/15384476_10211341047072013_5008519629131113993_o.jpg?_nc_cat=0&oh=b6ed1b90b4ab6c1f6856669ec4d79c86&oe=5BA46ACC"
        />
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/32775957_1994203073955637_4062751518250500096_n.jpg?_nc_cat=0&oh=ad26a658af433dfb6de825d081efcd14&oe=5BB089B1"
        />
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/13532788_1145104115532208_4301338277450753490_n.jpg?_nc_cat=0&oh=f754a984fb3191f678b80bedb88109fd&oe=5BA63131"
        />
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t31.0-8/10258482_707909099251714_6528106503795737905_o.jpg?_nc_cat=0&oh=51677d4fd9389520c88865b98f2e232f&oe=5BAB3D6B"
        />
      </div>

      <Typography className={props.classes.text} color='secondary' variant="body1">
      We only live once, so why not go after the things you want in life.
      </Typography>
      <div className={props.classes.friends}>
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/24110_103677136341583_2072413_n.jpg?_nc_cat=0&oh=1f6d93a3faa0f098a8b36c817e1e24b8&oe=5BB1294D"
        />
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/539236_495712547138038_1368880918_n.jpg?_nc_cat=0&oh=0b6ff497a47f7f385799c6715fc1a942&oe=5BA8D7D5"
        />
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/13690699_1155097057866247_5575255732016630226_n.jpg?_nc_cat=0&oh=b8b79c2319d3b14998e9d6be6e660271&oe=5BECA328"
        />
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-0/p206x206/1377994_606589672716991_995952020_n.jpg?_nc_cat=0&oh=a75f72a4d99e19793aebaaf7b290ba2c&oe=5BAF6B52"
        />
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/10441067_739025449473412_2657646150584082729_n.jpg?_nc_cat=0&oh=59057d4cb3e2b8093c5d5f65b1a7208d&oe=5BA692D7"
        />
        <Avatar
        className={props.classes.avatar}
        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/35238216_2030269140349030_4708544136611889152_n.jpg?_nc_cat=0&oh=99ee5f7bbb3161c878a5f33876da0dfc&oe=5BAFE56E"
        />
      </div>
  </div>
);

Introduction.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Introduction);
