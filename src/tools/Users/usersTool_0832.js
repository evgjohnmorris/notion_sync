/**
 * Generated Tool: usersTool_0832
 * Domain: Users
 * ID: 0832
 */
exports.usersTool_0832 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0832:', error);
    throw error;
  }
};
