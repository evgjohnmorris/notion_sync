/**
 * Generated Tool: usersTool_0154
 * Domain: Users
 * ID: 0154
 */
exports.usersTool_0154 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0154:', error);
    throw error;
  }
};
