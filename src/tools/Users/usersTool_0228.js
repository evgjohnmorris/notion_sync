/**
 * Generated Tool: usersTool_0228
 * Domain: Users
 * ID: 0228
 */
exports.usersTool_0228 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0228:', error);
    throw error;
  }
};
