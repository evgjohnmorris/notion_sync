/**
 * Generated Tool: usersTool_0761
 * Domain: Users
 * ID: 0761
 */
exports.usersTool_0761 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0761:', error);
    throw error;
  }
};
