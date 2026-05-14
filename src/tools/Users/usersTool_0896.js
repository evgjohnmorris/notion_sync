/**
 * Generated Tool: usersTool_0896
 * Domain: Users
 * ID: 0896
 */
exports.usersTool_0896 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0896:', error);
    throw error;
  }
};
