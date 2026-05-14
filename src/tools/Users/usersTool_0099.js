/**
 * Generated Tool: usersTool_0099
 * Domain: Users
 * ID: 0099
 */
exports.usersTool_0099 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0099:', error);
    throw error;
  }
};
