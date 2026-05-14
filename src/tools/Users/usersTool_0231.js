/**
 * Generated Tool: usersTool_0231
 * Domain: Users
 * ID: 0231
 */
exports.usersTool_0231 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0231:', error);
    throw error;
  }
};
