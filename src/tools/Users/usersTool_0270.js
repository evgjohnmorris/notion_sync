/**
 * Generated Tool: usersTool_0270
 * Domain: Users
 * ID: 0270
 */
exports.usersTool_0270 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0270:', error);
    throw error;
  }
};
