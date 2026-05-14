/**
 * Generated Tool: usersTool_0255
 * Domain: Users
 * ID: 0255
 */
exports.usersTool_0255 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0255:', error);
    throw error;
  }
};
