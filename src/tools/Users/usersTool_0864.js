/**
 * Generated Tool: usersTool_0864
 * Domain: Users
 * ID: 0864
 */
exports.usersTool_0864 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0864:', error);
    throw error;
  }
};
