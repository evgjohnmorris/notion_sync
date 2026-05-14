/**
 * Generated Tool: usersTool_0063
 * Domain: Users
 * ID: 0063
 */
exports.usersTool_0063 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0063:', error);
    throw error;
  }
};
