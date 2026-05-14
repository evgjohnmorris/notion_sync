/**
 * Generated Tool: usersTool_0220
 * Domain: Users
 * ID: 0220
 */
exports.usersTool_0220 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0220:', error);
    throw error;
  }
};
