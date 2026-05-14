/**
 * Generated Tool: usersTool_0930
 * Domain: Users
 * ID: 0930
 */
exports.usersTool_0930 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0930:', error);
    throw error;
  }
};
