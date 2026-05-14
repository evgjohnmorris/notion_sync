/**
 * Generated Tool: usersTool_0800
 * Domain: Users
 * ID: 0800
 */
exports.usersTool_0800 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0800:', error);
    throw error;
  }
};
