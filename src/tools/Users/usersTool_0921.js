/**
 * Generated Tool: usersTool_0921
 * Domain: Users
 * ID: 0921
 */
exports.usersTool_0921 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0921:', error);
    throw error;
  }
};
