/**
 * Generated Tool: usersTool_0900
 * Domain: Users
 * ID: 0900
 */
exports.usersTool_0900 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0900:', error);
    throw error;
  }
};
