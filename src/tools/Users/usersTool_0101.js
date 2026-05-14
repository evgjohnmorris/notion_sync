/**
 * Generated Tool: usersTool_0101
 * Domain: Users
 * ID: 0101
 */
exports.usersTool_0101 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0101:', error);
    throw error;
  }
};
