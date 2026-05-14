/**
 * Generated Tool: usersTool_0102
 * Domain: Users
 * ID: 0102
 */
exports.usersTool_0102 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0102:', error);
    throw error;
  }
};
