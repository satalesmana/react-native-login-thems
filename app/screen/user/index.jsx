import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

export default function UserScreen() {
  const auth = useSelector((state) => state.auth);

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Image source={require("../../../assets/images/person.png")} style={styles.profileImage} />
          <View style={styles.iconGroup}>
            <MaterialCommunityIcons name="magnify" size={24} color="#fff" style={styles.headerIcon} />
            <MaterialCommunityIcons name="bell-outline" size={24} color="#fff" style={styles.headerIcon} />
          </View>
        </View>
        <Text style={styles.name}>{auth.firstName} {auth.sureName}</Text>
        <Progress.Bar progress={0.3} width={300} height={8} borderRadius={20} color="#9747FF" style={styles.progressBar} />
        <View style={styles.emailContainer}>
          <MaterialCommunityIcons name="cloud-outline" size={20} color="#ccc" style={styles.emailIcon} />
          <Text style={styles.email}>{auth.email}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <MaterialCommunityIcons name="file-document-outline" size={20} color="#a6a6a6" />
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailValue}>{auth.nim}</Text>
            <Text style={styles.detailLabel}>NIM</Text>
          </View>
        </View>
        <View style={styles.detailItem}>
          <MaterialCommunityIcons name="school-outline" size={20} color="#a6a6a6" />
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailValue}>{auth.jurusan}</Text>
            <Text style={styles.detailLabel}>Program Study</Text>
          </View>
        </View>
        <View style={styles.detailItem}>
          <MaterialCommunityIcons name="account-box-outline" size={20} color="#a6a6a6" />
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailValue}>{auth.kode}</Text>
            <Text style={styles.detailLabel}>Class Code</Text>
          </View>
        </View>
        <View style={styles.detailItem}>
          <MaterialCommunityIcons name="phone-outline" size={20} color="#a6a6a6" />
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailValue}>{auth.num}</Text>
            <Text style={styles.detailLabel}>Phone Number</Text>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#2B2E4A',
    paddingBottom: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 40,
    paddingTop: 50,
    height:350
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 30,
  },
  iconGroup: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 15,
  },
  name: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  progressBar: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  emailIcon: {
    marginRight: 8,
  },
  email: {
    color: '#ccc',
    fontSize: 12,
  },
  details: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    paddingHorizontal: 20,
    marginTop: -20, 
    bottom:100
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f8fa',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width:500,
    height:100
  },
  detailTextContainer: {
    marginLeft: 10,
  },
  detailLabel: {
    fontSize: 12,
    color: '#a6a6a6',
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
});