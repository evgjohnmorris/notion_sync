/**
 * Generated Tool: usersTool_0288
 * Domain: Users
 * ID: 0288
 */
exports.usersTool_0288 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0288:', error);
    throw error;
  }
};
