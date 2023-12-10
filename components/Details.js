import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

const Details = ({ route, navigation }) => {
  const { item } = route.params;
  const renderIngredientsItem = ({ item }) => {
    return (
      <View
        style={[
          styles.ingredientImageWrapper,
          {
            marginLeft: item.id === 1 ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.ingredientImage} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name='chevron-left' size={12} color={colors.textDark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name='star'
              size={12}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>
      {/* Title */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      {/* price */}
      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>${item.price}</Text>
      </View>
      {/* Info */}
      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}"
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
          </View>
        </View>
        <View style={styles.infoRightWrapper}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>
      <View style={styles.ingredientWrapper}>
        <Text style={styles.ingredientTitle}>Ingredients </Text>
        <View style={styles.ingredientListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/* Order Button */}
      <TouchableOpacity onPress={() => alert('Your order has been placed!')}>
        <View style={styles.orderWrapper}>
          <Text style={styles.orderText}>Place an order</Text>
          <Feather name='chevron-right' size={18} color={colors.black} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  headerLeft: {
    borderColor: colors.textLight,
    padding: 12,
    borderWidth: 2,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: colors.textDark,
    width: '50%',
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: colors.price,
    fontSize: 32,
    fontWeight: '500',
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemText: {
    fontSize: 18,
    color: colors.textDark,
    fontWeight: 'bold',
  },
  itemImage: {
    resizeMode: 'contain',
    marginLeft: 50,
  },
  ingredientWrapper: {
    marginTop: 60,
  },
  ingredientTitle: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textDark,
  },
  ingredientListWrapper: {
    paddingVertical: 20,
  },
  ingredientImageWrapper: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientImage: {
    resizeMode: 'contain',
  },
  orderWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    paddingVertical: 25,
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  orderText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 10,
  },
});
export default Details;
