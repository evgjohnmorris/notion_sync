/**
 * Generated Tool: usersTool_0920
 * Domain: Users
 * ID: 0920
 */
exports.usersTool_0920 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0920:', error);
    throw error;
  }
};
