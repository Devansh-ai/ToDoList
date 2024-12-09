import { StyleSheet } from "react-native";
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
      padding: 8,
    },
    rowBack: {
      alignItems: 'flex-end',
      flex: 1,
      paddingRight: 8,
    },
    backRightBtn: {
      alignItems: 'center',
      bottom: 8,
      justifyContent: 'center',
      position: 'absolute',
      top: 8,
      width: 75,
      backgroundColor: '#4CAF50',
      right: 8,
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