import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Searchbar} from 'react-native-paper';
const chats = [
  {
    id: 1,
    phone: '+905303001965',
    fullName: 'Tayfun Erbilen',
    avatar:
      'https://pbs.twimg.com/profile_images/1469715048436277258/141ZXcHO_400x400.jpg',
    notification: 0,
    read: true,
    message: {
      text: `haha ne güzel 😃`,
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 2,
    phone: '+905303001965',
    fullName: 'Mehmet Seven',
    avatar:
      'https://pbs.twimg.com/profile_images/1065385568643805186/ui541U1O_400x400.jpg',
    notification: 3,
    me: true,
    message: {
      text: 'Kral müsait misin sana bir şey soracağım',
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 3,
    phone: '+905303001965',
    fullName: 'Gökhan Kandemir',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C5603AQFjWy_2_wMdFw/profile-displayphoto-shrink_800_800/0/1588775326389?e=1645660800&v=beta&t=oEhhOlUzN4zdHRF3oFa19aFmw6_-LXJxW1rrgg1Lx98',
    notification: 15,
    message: {
      text: 'Gardaşım bugün saat 5 te toplantı unutma canını yerim xd',
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 4,
    phone: '+905303001965',
    fullName: 'Tayfun Erbilen',
    avatar:
      'https://pbs.twimg.com/profile_images/1469715048436277258/141ZXcHO_400x400.jpg',
    notification: 0,
    read: true,
    message: {
      text: `haha ne güzel 😃`,
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 5,
    phone: '+905303001965',
    fullName: 'Mehmet Seven',
    avatar:
      'https://pbs.twimg.com/profile_images/1065385568643805186/ui541U1O_400x400.jpg',
    notification: 3,
    me: true,
    message: {
      text: 'Kral müsait misin sana bir şey soracağım',
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 6,
    phone: '+905303001965',
    fullName: 'Gökhan Kandemir',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C5603AQFjWy_2_wMdFw/profile-displayphoto-shrink_800_800/0/1588775326389?e=1645660800&v=beta&t=oEhhOlUzN4zdHRF3oFa19aFmw6_-LXJxW1rrgg1Lx98',
    notification: 15,
    message: {
      text: 'Gardaşım bugün saat 5 te toplantı unutma canını yerim xd',
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 7,
    phone: '+905303001965',
    fullName: 'Tayfun Erbilen',
    avatar:
      'https://pbs.twimg.com/profile_images/1469715048436277258/141ZXcHO_400x400.jpg',
    notification: 0,
    read: true,
    message: {
      text: `haha ne güzel 😃`,
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 8,
    phone: '+905303001965',
    fullName: 'Mehmet Seven',
    avatar:
      'https://pbs.twimg.com/profile_images/1065385568643805186/ui541U1O_400x400.jpg',
    notification: 3,
    me: true,
    message: {
      text: 'Kral müsait misin sana bir şey soracağım',
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 9,
    phone: '+905303001965',
    fullName: 'Gökhan Kandemir',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C5603AQFjWy_2_wMdFw/profile-displayphoto-shrink_800_800/0/1588775326389?e=1645660800&v=beta&t=oEhhOlUzN4zdHRF3oFa19aFmw6_-LXJxW1rrgg1Lx98',
    notification: 15,
    message: {
      text: 'Gardaşım bugün saat 5 te toplantı unutma canını yerim xd',
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 10,
    phone: '+905303001965',
    fullName: 'Tayfun Erbilen',
    avatar:
      'https://pbs.twimg.com/profile_images/1469715048436277258/141ZXcHO_400x400.jpg',
    notification: 0,
    read: true,
    message: {
      text: `haha ne güzel 😃`,
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 11,
    phone: '+905303001965',
    fullName: 'Mehmet Seven',
    avatar:
      'https://pbs.twimg.com/profile_images/1065385568643805186/ui541U1O_400x400.jpg',
    notification: 3,
    me: true,
    message: {
      text: 'Kral müsait misin sana bir şey soracağım',
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 12,
    phone: '+905303001965',
    fullName: 'Gökhan Kandemir',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C5603AQFjWy_2_wMdFw/profile-displayphoto-shrink_800_800/0/1588775326389?e=1645660800&v=beta&t=oEhhOlUzN4zdHRF3oFa19aFmw6_-LXJxW1rrgg1Lx98',
    notification: 15,
    message: {
      text: 'Gardaşım bugün saat 5 te toplantı unutma canını yerim xd',
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 13,
    phone: '+905303001965',
    fullName: 'Tayfun Erbilen',
    avatar:
      'https://pbs.twimg.com/profile_images/1469715048436277258/141ZXcHO_400x400.jpg',
    notification: 0,
    read: true,
    message: {
      text: `haha ne güzel 😃`,
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 14,
    phone: '+905303001965',
    fullName: 'Mehmet Seven',
    avatar:
      'https://pbs.twimg.com/profile_images/1065385568643805186/ui541U1O_400x400.jpg',
    notification: 3,
    me: true,
    message: {
      text: 'Kral müsait misin sana bir şey soracağım',
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 15,
    phone: '+905303001965',
    fullName: 'Gökhan Kandemir',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C5603AQFjWy_2_wMdFw/profile-displayphoto-shrink_800_800/0/1588775326389?e=1645660800&v=beta&t=oEhhOlUzN4zdHRF3oFa19aFmw6_-LXJxW1rrgg1Lx98',
    notification: 15,
    message: {
      text: 'Gardaşım bugün saat 5 te toplantı unutma canını yerim xd',
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 16,
    phone: '+905303001965',
    fullName: 'Tayfun Erbilen',
    avatar:
      'https://pbs.twimg.com/profile_images/1469715048436277258/141ZXcHO_400x400.jpg',
    notification: 0,
    read: true,
    message: {
      text: `haha ne güzel 😃`,
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 17,
    phone: '+905303001965',
    fullName: 'Mehmet Seven',
    avatar:
      'https://pbs.twimg.com/profile_images/1065385568643805186/ui541U1O_400x400.jpg',
    notification: 3,
    me: true,
    message: {
      text: 'Kral müsait misin sana bir şey soracağım',
      date: '2021-12-24 12:14:23',
    },
  },
  {
    id: 18,
    phone: '+905303001965',
    fullName: 'Gökhan Kandemir',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C5603AQFjWy_2_wMdFw/profile-displayphoto-shrink_800_800/0/1588775326389?e=1645660800&v=beta&t=oEhhOlUzN4zdHRF3oFa19aFmw6_-LXJxW1rrgg1Lx98',
    notification: 15,
    message: {
      text: 'Gardaşım bugün saat 5 te toplantı unutma canını yerim xd',
      date: '2021-12-24 12:14:23',
    },
  },
];
export default function HomePage({navigation, route}) {
  const {myName} = route.params;
  return (
    <ScrollView>
      <View style={{padding: 10}}>
        <View style={styles.topNav}>
          <TouchableOpacity style={styles.EditIcon}>
            <Text style={styles.textWrap}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/HomePage/write-icon.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.mainH1}>Chats</Text>
        <Searchbar
          style={styles.searchBar}
          placeholder="Search"
          inputStyle={{fontSize: 14, alignItems: 'center', paddingBottom: 6}}
        />
        <View style={styles.Nav2}>
          <TouchableOpacity style={styles.EditIcon}>
            <Text style={styles.textWrap}>Broadcast List</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textWrap}>New Group</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        {/* <Text>Welcome {myName}</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      /> */}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  EditIcon: {
    fontSize: 60,
  },
  topNav: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
  },
  Nav2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
    paddingTop: 20,
  },
  textWrap: {
    alignItems: 'center',
    fontSize: 18,
    paddingTop: 5,
    color: '#BF5DCE',
    textAlign: 'center',
  },
  mainH1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
  },
  searchBar: {
    backgroundColor: '#FED0D0',
    width: '100%',
    borderRadius: 5,
    height: 30,
  },
});
