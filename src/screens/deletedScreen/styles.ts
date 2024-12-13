import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  rowFront: {
    height: Dimensions.get('screen').height * 0.13,
    padding: 8,
  },
  rowBack: {
    alignItems: 'flex-end',
    flex: 1,
    paddingRight: 8,
    zIndex: 1,
  },
  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: Dimensions.get('screen').height * 0.035,
    backgroundColor: '#4CAF50',
    padding: 20,
    right: Dimensions.get('screen').width * 0.06,
    borderRadius: 8,
  },
  backTextWhite: {
    color: '#FFF',
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});