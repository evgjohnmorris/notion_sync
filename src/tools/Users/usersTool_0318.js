/**
 * Generated Tool: usersTool_0318
 * Domain: Users
 * ID: 0318
 */
exports.usersTool_0318 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0318:', error);
    throw error;
  }
};
