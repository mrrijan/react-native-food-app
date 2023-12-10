import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';

const Home = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id === 1 ? 20 : 0,
          },
        ]}
      >
        <Image style={styles.categoryItemImage} source={item.image} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}
        >
          <Feather
            name='chevron-right'
            size={8}
            style={[
              styles.categorySelectIcon,
              {
                color: item.selected ? colors.black : colors.white,
              },
            ]}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView>
          <View style={styles.headWrapper}>
            {/* Image */}
            <Image
              style={styles.profileImage}
              source={require('../assets/images/profile.png')}
            />
            <Feather size={24} name='menu' color={colors.textDark} />
          </View>
        </SafeAreaView>
        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubTitle}>Food</Text>
          <Text style={styles.titlesTitle}>Delivery</Text>
        </View>
        {/* search */}
        <View style={styles.searchWrapper}>
          <Feather name='search' size={16} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>
        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>
        {/* Popular section */}

        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('Details', {
                    item: item,
                  })
                }
              >
                <View
                  style={[
                    styles.popularCardWrapper,
                    {
                      marginTop: item.id === 1 ? 10 : 20,
                    },
                  ]}
                >
                  <View>
                    <View>
                      <View style={styles.popularTopWrapper}>
                        <MaterialCommunityIcons
                          name='crown'
                          size={12}
                          color={colors.primary}
                        />
                        <Text style={styles.popularTopText}>
                          Top of the Week
                        </Text>
                      </View>
                      <View style={styles.popularTitlesWrapper}>
                        <Text style={styles.popularTitlesTitle}>
                          {item.title}
                        </Text>
                        <Text style={styles.popularTitlesWeight}>
                          Weight {item.weight}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.popularCardBottom}>
                      <View style={styles.addPizzaButton}>
                        <Feather
                          name='plus'
                          size={12}
                          color={colors.textDark}
                        />
                      </View>
                      <View style={styles.ratingWrapper}>
                        <MaterialCommunityIcons
                          name='star'
                          size={10}
                          color={colors.textDark}
                        />
                        <Text style={styles.rating}>{item.rating}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.popularCardRight}>
                    <Image
                      source={item.image}
                      style={styles.popularCardImage}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubTitle: {
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textDark,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 24,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontSize: 12,
    marginLeft: 5,
    color: colors.textDark,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
